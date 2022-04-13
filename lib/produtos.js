import { Produto } from "../db/models"

export const getProdutos = async function() {
    const produtos = await Produto.findAll()
    return produtos
}

export const createProduto = async function(produto) {
    const _produto = await Produto.create(produto)
    return _produto
}