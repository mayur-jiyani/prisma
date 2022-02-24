import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CreateUser = async () => {
  let user: Prisma.UserCreateInput;
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

export const UpdateUser = async () => {
  let user: Prisma.UserCreateInput;

  try {
    const res = await prisma.user.update({
      where: {
        id: 2,
      },
      data: {
        email: "hello@gmail.com",
      },
    });

    console.log("user updated ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const FindUser = async () => {
  let user: Prisma.UserCreateInput;

  try {
    const res = await prisma.user.findMany({
      where: {
        name: "chirag",
      },
    });
    console.log("user found: ",res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const CountUser = async () => {
  let user: Prisma.UserCreateInput;

  try {
    // var name:string
    const res = await prisma.user.aggregate({
      where: {
        name: "chirag",
      },
      _count:{
        name: true
      }
    });
    console.log("Number of user found: ",res._count.name);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const  DeleteUser = async () => {
  let user: Prisma.UserCreateInput;

  try {

    const res = await prisma.user.delete({
      where: {
        id: 8,
      },
    });

    console.log("user deleted ",res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

// export const FindUser = async () => {
//   const userRepo = getRepository(User);
//   const users = await userRepo.find({ relations: ["posts"] });
//   console.log("New user found ", users[0]);
// };
