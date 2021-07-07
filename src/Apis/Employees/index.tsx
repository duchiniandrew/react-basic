import axios from "axios"
import { Employees } from "../../types/Employees"

export function addEmployee(employee: Employees): Promise<void> {
    return axios.post(`${process.env.REACT_APP_API_URL}api/v1/employees`, employee, {
        headers: {
            'Authorization': `Bearer ${sessionStorage["token"]}`
        }
    })
}
export async function getAllEmployees(includes?: string[]): Promise<Employees[]> {
    let url = `${process.env.REACT_APP_API_URL}api/v1/employees?`
    if (includes && includes.length > 0) {
        for (const include of includes) {
            url += `includes=${include}&`
        }
    }
    return (await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${sessionStorage["token"]}`
        }
    })).data
}
export async function getEmployeesById(id: number, includes?: string[]): Promise<Employees> {
    let url = `${process.env.REACT_APP_API_URL}api/v1/employees/${id}?`
    if (includes && includes.length > 0) {
        for (const include of includes) {
            url += `includes=${include}&`
        }
    }
    return (await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${sessionStorage["token"]}`
        }
    })).data
}
export function deleteEmployee(id: number): Promise<void> {
    return axios.delete(`${process.env.REACT_APP_API_URL}api/v1/employees/${id}`, {
        headers: {
            'Authorization': `Bearer ${sessionStorage["token"]}`
        }
    })
}
export async function getEmployeeAllocations(id: number) {
    return (await axios.get(`${process.env.REACT_APP_API_URL}api/v1/employees/${id}/allocations`, {
        headers: {
            'Authorization': `Bearer ${sessionStorage["token"]}`
        }
    })).data
}
export async function editEmployee(employee: Employees) {
    if (employee.id) {
        return (await axios.put(`${process.env.REACT_APP_API_URL}api/v1/employees/${employee.id}`, employee, {
            headers: {
                'Authorization': `Bearer ${sessionStorage["token"]}`
            }
        })).data
    }
}