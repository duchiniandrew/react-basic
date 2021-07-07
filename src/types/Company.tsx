import { Project } from "./Project"

export interface Company {
    id: number,
    name: string,
    projects: Project
    createdAt: string
    updatedAt: string
}