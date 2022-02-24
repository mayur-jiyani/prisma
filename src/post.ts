import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const  CreatePost = async () => {
    let post: Prisma.PostCreateInput;
    try {
      const channel = { name: "ritul", email: "ritul@ashish.com" };
  
      const res = await prisma.user.create({
        data: channel,
      });
  
      console.log("New user saved ", res);
    } catch (err) {
      console.log(err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };