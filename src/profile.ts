import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CreateProfile = async () => {
  let user: Prisma.UserCreateInput;
  try {
    const channel = { bio: "dfdfdf", userId: 8 };

    const res = await prisma.profile.create({
      data: channel,
    });

    console.log("New profile saved ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};
