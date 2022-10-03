import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()




async function getAllProducts(req, res) {
    const { skip, take } = req.params
    skip = skip ? skip : 0
    take = take ? take : 10
    const res = await prisma.Product.findMany({
        skip: skip,
        take: take
    })
    res.json(res)

}

async function getProductById(req, res) {
    const { id } = req.params

    const res = await prisma.Product.findUnique({
        where: {
            ProductID: id,
        },
    })
    res.json(res)
}

async function notImplemented(_, res) {
    res.json(
        {
            status: "Not Implemented"
        })
}

module.exports = { getAllProducts: getAllProducts, getProductById: getProductById, notImplemented: notImplemented }