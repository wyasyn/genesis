import { cache } from "react";
import { mockProjects } from "./projects";

type Project = (typeof mockProjects)[0];

export const fetchProjectsFn = async (
  page?: number | null,
  limit?: number | null
) => {
  try {
    const response = await fetch(
      `http://192.168.1.9:5000/api/v1/projects${page && `?page=${page}`}${
        limit && `?limit=${limit}`
      }`
    );
    const result = await response.json();

    const projects: Project[] = result.data;
    return projects;
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "An error occurred while fetch projects",
    };
  }
};
