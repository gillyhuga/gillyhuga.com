"use client";
import { useState, useEffect } from "react";

export interface Project {
    id: string;
    description: string;
    image: string;
    name: string;
    tags: string[];
    url: string;
    createdAt: string;
    updatedAt: string;
}

interface ProjectsResponse {
    message: string;
    data: Project[];
    meta: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
    };
}

export function useProjects() {
    const [data, setData] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.gillyhuga.com/api/v1/projects");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const result: ProjectsResponse = await response.json();
                setData(result.data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error("An error occurred"));
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { data, loading, error };
}
