import { IEnlace } from "../enlace/IEnlace"

export interface IArticulo {
  titulo: string
  tituloSeccion: string
  contenido: string
  enlace: IEnlace
}
