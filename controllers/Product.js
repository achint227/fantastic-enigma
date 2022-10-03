const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()




async function getAllProducts(req, res) {
    var { skip, take } = req.params
    skip = skip ? skip : 0
    take = take ? take : 10
    const products = await prisma.Product.findMany({
        skip: skip,
        take: take
    })
    res.json(products)

}

async function getProductById(req, res) {
    const { id } = req.params

    const product = await prisma.Product.findUnique({
        where: {
            ProductID: id,
        },
    })
    res.json(product)
}

async function notImplemented(_, res) {
    res.json(
        {
            status: "Not Implemented"
        })
}

module.exports = { getAllProducts: getAllProducts, getProductById: getProductById, notImplemented: notImplemented }