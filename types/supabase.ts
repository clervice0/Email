import { Database } from "../schema"
interface IRequest {
    type: "UPDATE" | "INSERT" | "DELETE"
    table: string
    schema: string
}
