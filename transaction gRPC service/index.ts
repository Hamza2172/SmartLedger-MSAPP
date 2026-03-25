import { prisma } from "./lib/prisma";

async function main() {
    // ... you will write your Prisma ORM queries here
    const transaction = await prisma.transaction.create({
        data: {
            userId: "123",
            type: "INCOME",
            amount: 50,
            currency: "USD",
            note: "my first income",
            category: "",
        },
    });
    console.log("Transaction created:", transaction);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
