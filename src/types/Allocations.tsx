import { Project } from "./Project"

export interface Allocations {
    id: number,
    startedAt: string,
    endedAt: string,
    project: Project
}