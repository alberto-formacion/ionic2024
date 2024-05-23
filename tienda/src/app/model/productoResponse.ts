import { Producto } from "./producto"

export interface ProductoResponse{
  total:number
  skip:number
  limit:number
  products: Array<Producto>
}
