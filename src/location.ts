import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CreateLocation = async () => {
  // let location: Prisma.PostCreateInput;
  try {
    const channel = {
      city: "ahm",
      pincode: 458956,
      country: "India",
      profileId: 7,
    };

    const res = await prisma.location.create({
      data: channel,
    });

    console.log("New location saved ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const UserByLocation = async () => {
  // let location: Prisma.PostCreateInput;
  try {
    const locationData = await prisma.location.findUnique({
      where: {
        id: 1,
      },
      include: { profile: { include: { user: true } } },
    });

    console.log("User data from location ", locationData);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};
