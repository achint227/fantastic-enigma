import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

const customers = await prisma.Customer.findMany({
  skip:0,
  take:5
})

console.log(customers)