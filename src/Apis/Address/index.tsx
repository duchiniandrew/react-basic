import axios from "axios"
import { ZipCodeReturn } from "../../types/ZipCodeReturn"

export async function getAddressByZipCode(zipCode: string): Promise<ZipCodeReturn> {
    return (await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)).data
}