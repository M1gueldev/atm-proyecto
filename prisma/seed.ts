import { PrismaClient } from '@prisma/client'
// @ts-ignore
import userData from "../src/lib/users.json" assert { type: "json" }

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding DB')
    for (const u of userData) {
        const user = await  prisma.user.create({
            data: {
                name: u.name,
                pass: u.pass,
            }
        })
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })