import { Contracts } from "./Contracts"
import { Address } from "./Address"
import { Allocations } from "./Allocations"

export interface Employees {
    id?: number
    name: string
    birthDate: string
    CPF: string
    RG: string
    personalEmail: string
    professionalEmail: string
    cellPhone: string
    addresses: Address[]
    contracts: Contracts[]
    allocations?: Allocations[]
}