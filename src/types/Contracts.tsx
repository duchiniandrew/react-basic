import { Salary } from "./Salary"
import { ContractModes } from "./ContractModes"

export interface Contracts {
    id: number
    registrationNumber: string
    startDate: string
    endDate: string
    noticeDate: string
    contractMode: ContractModes
    salaries: Salary[]
}