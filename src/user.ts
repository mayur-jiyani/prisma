import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const CreateUser = async () => {
    
    try {
    
        const channel = { name: "mayur",
        email: "mayur@gmail.com" };
    
        const res = await prisma.orm_demo.create({
          data: channel,
        });
    
        console.log(res);
      } catch (err) {
        console.log(err);
      } finally {
        async () => {
          await prisma.$disconnect();
        };
      }

    console.log("New user saved ");
};