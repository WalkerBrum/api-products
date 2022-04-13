import { getProdutos, createProduto, createProduto } from "../../lib/produtos"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { sku, nome, estoque, categoria } = req.body
        const produto = await createProduto({ sku, nome, estoque, categoria })
        return res.status(203).json({ data: produto })
    } else if (req.method === 'GET') {
        const produtos = await getProdutos();
        return res.status(200).jason({ data: produtos})
    } 
}