import axios, { AxiosError } from "axios";

// Types
export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  imageUrl?: string;
  published: boolean;
  publishedAt?: string | null;
  readTime?: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface BlogListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  imageUrl?: string;
  published: boolean;
  publishedAt?: string | null;
  readTime?: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface BlogsResponse {
  success: boolean;
  data: BlogListItem[];
  pagination: Pagination;
}

export interface SingleBlogResponse {
  success: boolean;
  data: Blog;
}

export interface GetAllBlogsParams {
  page?: number;
  limit?: number;
  published?: boolean;
}

export interface ApiErrorDetails {
  message?: string;
  error?: string;
  [key: string]: unknown;
}

export interface ApiError {
  message: string;
  status?: number;
  details?: ApiErrorDetails;
}

// Configuration
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Error handler utility
const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorDetails>;

    return {
      message:
        axiosError.response?.data?.message ||
        axiosError.response?.data?.error ||
        axiosError.message ||
        "An unexpected error occurred",
      status: axiosError.response?.status,
      details: axiosError.response?.data,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "An unknown error occurred",
  };
};

/**
 * Fetches all blog posts with optional pagination and filtering
 * @param params - Query parameters for filtering and pagination
 * @returns Promise with blogs list and pagination data
 * @throws ApiError with details about the failure
 */
export const getAllBlogs = async (
  params: GetAllBlogsParams = {}
): Promise<BlogsResponse> => {
  try {
    const { page = 1, limit = 10, published } = params;

    // Build query parameters
    const queryParams = new URLSearchParams();
    queryParams.append("page", page.toString());
    queryParams.append("limit", limit.toString());

    if (published !== undefined) {
      queryParams.append("published", published.toString());
    }

    const response = await apiClient.get<BlogsResponse>(
      `/blogs?${queryParams.toString()}`
    );

    return response.data;
  } catch (error) {
    const apiError = handleApiError(error);
    console.error("Error fetching blogs:", apiError);
    throw apiError;
  }
};

/**
 * Fetches a single blog post by slug
 * @param slug - The blog post slug
 * @returns Promise with the blog data
 * @throws ApiError with details about the failure
 */
export const getBlogBySlug = async (
  slug: string
): Promise<SingleBlogResponse> => {
  try {
    if (!slug || slug.trim() === "") {
      throw new Error("Blog slug is required");
    }

    const response = await apiClient.get<SingleBlogResponse>(`/blogs/${slug}`);

    return response.data;
  } catch (error) {
    const apiError = handleApiError(error);
    console.error(`Error fetching blog ${slug}:`, apiError);
    throw apiError;
  }
};

/**
 * Fetches only published blog posts
 * @param params - Pagination parameters
 * @returns Promise with published blogs list and pagination data
 */
export const getPublishedBlogs = async (
  params: Omit<GetAllBlogsParams, "published"> = {}
): Promise<BlogsResponse> => {
  return getAllBlogs({ ...params, published: true });
};

/**
 * Fetches blogs by tag
 * @param tag - The tag to filter by
 * @param params - Pagination parameters
 * @returns Promise with filtered blogs list and pagination data
 */
export const getBlogsByTag = async (
  tag: string,
  params: Omit<GetAllBlogsParams, "published"> = {}
): Promise<BlogsResponse> => {
  try {
    const { page = 1, limit = 10 } = params;

    const queryParams = new URLSearchParams();
    queryParams.append("page", page.toString());
    queryParams.append("limit", limit.toString());
    queryParams.append("tag", tag);

    const response = await apiClient.get<BlogsResponse>(
      `/blogs?${queryParams.toString()}`
    );

    // Filter by tag on client side if API doesn't support it
    // Note: This is a fallback - ideally the API should handle this
    const filteredData = response.data.data.filter((blog) =>
      blog.tags.includes(tag)
    );

    return {
      ...response.data,
      data: filteredData,
    };
  } catch (error) {
    const apiError = handleApiError(error);
    console.error(`Error fetching blogs by tag ${tag}:`, apiError);
    throw apiError;
  }
};

/**
 * Searches blogs by title or content (client-side filtering)
 * @param searchTerm - The search term
 * @param params - Pagination parameters
 * @returns Promise with filtered blogs list
 */
export const searchBlogs = async (
  searchTerm: string,
  params: GetAllBlogsParams = {}
): Promise<BlogsResponse> => {
  try {
    const response = await getAllBlogs(params);

    if (!searchTerm || searchTerm.trim() === "") {
      return response;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const filteredData = response.data.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerSearchTerm) ||
        blog.excerpt.toLowerCase().includes(lowerSearchTerm) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm))
    );

    return {
      ...response,
      data: filteredData,
    };
  } catch (error) {
    const apiError = handleApiError(error);
    console.error(`Error searching blogs:`, apiError);
    throw apiError;
  }
};

// Example usage with React hooks (optional helper)
export const useBlogs = () => {
  return {
    getAllBlogs,
    getBlogBySlug,
    getPublishedBlogs,
    getBlogsByTag,
    searchBlogs,
  };
};
