import axios, { AxiosError } from "axios";

// Types
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  stack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ProjectsResponse {
  success: boolean;
  data: Project[];
  pagination: Pagination;
}

export interface SingleProjectResponse {
  success: boolean;
  data: Project;
}

export interface GetAllProjectsParams {
  page?: number;
  limit?: number;
  featured?: boolean;
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
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

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
 * Fetches all projects with optional pagination and filtering
 * @param params - Query parameters for filtering and pagination
 * @returns Promise with projects list and pagination data
 * @throws ApiError with details about the failure
 */
export const getAllProjects = async (
  params: GetAllProjectsParams = {}
): Promise<ProjectsResponse> => {
  try {
    const { page = 1, limit = 10, featured } = params;

    // Build query parameters
    const queryParams = new URLSearchParams();
    queryParams.append("page", page.toString());
    queryParams.append("limit", limit.toString());

    if (featured !== undefined) {
      queryParams.append("featured", featured.toString());
    }

    const response = await apiClient.get<ProjectsResponse>(
      `/projects?${queryParams.toString()}`
    );

    return response.data;
  } catch (error) {
    const apiError = handleApiError(error);
    console.error("Error fetching projects:", apiError);
    throw apiError;
  }
};

/**
 * Fetches a single project by slug
 * @param slug - The project slug (e.g., "my-portfolio-website")
 * @returns Promise with the project data
 * @throws ApiError with details about the failure
 */
export const getProjectBySlug = async (
  slug: string
): Promise<SingleProjectResponse> => {
  try {
    if (!slug || slug.trim() === "") {
      throw new Error("Project slug is required");
    }

    const response = await apiClient.get<SingleProjectResponse>(
      `/projects/${slug}`
    );

    return response.data;
  } catch (error) {
    const apiError = handleApiError(error);
    console.error(`Error fetching project ${slug}:`, apiError);
    throw apiError;
  }
};

/**
 * Fetches only featured projects
 * @param params - Pagination parameters
 * @returns Promise with featured projects list and pagination data
 */
export const getFeaturedProjects = async (
  params: Omit<GetAllProjectsParams, "featured"> = {}
): Promise<ProjectsResponse> => {
  return getAllProjects({ ...params, featured: true });
};

/**
 * Fetches projects by tag
 * @param tag - The tag to filter by
 * @param params - Pagination parameters
 * @returns Promise with filtered projects list and pagination data
 */
export const getProjectsByTag = async (
  tag: string,
  params: Omit<GetAllProjectsParams, "featured"> = {}
): Promise<ProjectsResponse> => {
  try {
    const response = await getAllProjects(params);

    // Filter by tag on client side
    const filteredData = response.data.filter((project) =>
      project.tags.includes(tag)
    );

    return {
      ...response,
      data: filteredData,
    };
  } catch (error) {
    const apiError = handleApiError(error);
    console.error(`Error fetching projects by tag ${tag}:`, apiError);
    throw apiError;
  }
};

/**
 * Fetches projects by stack/technology
 * @param tech - The technology to filter by
 * @param params - Pagination parameters
 * @returns Promise with filtered projects list and pagination data
 */
export const getProjectsByStack = async (
  tech: string,
  params: Omit<GetAllProjectsParams, "featured"> = {}
): Promise<ProjectsResponse> => {
  try {
    const response = await getAllProjects(params);

    // Filter by stack on client side
    const filteredData = response.data.filter((project) =>
      project.stack.includes(tech)
    );

    return {
      ...response,
      data: filteredData,
    };
  } catch (error) {
    const apiError = handleApiError(error);
    console.error(`Error fetching projects by stack ${tech}:`, apiError);
    throw apiError;
  }
};

// Example usage with React hooks (optional helper)
export const useProjects = () => {
  return {
    getAllProjects,
    getProjectBySlug,
    getFeaturedProjects,
    getProjectsByTag,
    getProjectsByStack,
  };
};
