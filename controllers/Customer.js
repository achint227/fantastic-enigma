const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()




async function getAllCustomers(req, res) {
    var { skip, take } = req.params
    skip = skip ? skip : 0
    take = take ? take : 10
    const customers = await prisma.Customer.findMany({
        skip: skip,
        take: take
    })
    res.json(customers)

}

async function getCustomerById(req, res) {
    const { id } = req.params

    const customer = await prisma.Customer.findUnique({
        where: {
            CustomerID: id,
        },
    })
    res.json(customer)
}

async function notImplemented(_, res) {
    res.json({
        status: "Not Implemented"
    })
}
module.exports = { getAllCustomers: getAllCustomers, getCustomerById: getCustomerById, notImplemented: notImplemented }