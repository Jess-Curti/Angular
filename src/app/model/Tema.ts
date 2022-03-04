import { Postagem } from "./Postagem"

export class Tema {
    public id: number
    public descricao: string
    public postagem: Postagem[] // Como o tema pode ter várias postagens, precisa ter o array = []
}