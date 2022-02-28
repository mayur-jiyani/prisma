import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CreateUser = async () => {
  let user: Prisma.UserCreateInput;
  try {
    const channel = { name: "lilikjk", email: "plpl@ashish.com" };

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
        name: "Alpha",
      },
    });
    console.log("user found: ", res);
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
        name: "Alpha",
      },
      _count: {
        name: true,
      },
    });
    console.log("Number of user found: ", res._count.name);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const DeleteUser = async () => {
  let user: Prisma.UserCreateInput;

  try {
    const res = await prisma.user.delete({
      where: {
        email: "plpl@ashish.com",
      },
    });

    console.log("user deleted ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const CountPostByUser = async () => {
  // let post: Prisma.PostCreateInput;
  try {
    const userData = await prisma.user.findMany({});

    const data = userData.map(async (d: any) => {
      // var authorId= d.id

      const res = await prisma.post.groupBy({
        by: ["authorId"],
        _count: {
          id: true,
        },
        where: {
          authorId: d.id,
        },
      });

      console.log(res);

      // console.log(
      //   "Count post by user: ",
      //   "total post: ",
      //   res[0]._count.id,
      //   " user id: ",
      //   d.id
      // );
    });

    data;

    // console.log("post with group by with sum of likes ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const HavingInUser = async () => {
  let user: Prisma.UserCreateInput;

  try {
    const res = await prisma.user.findMany({
      where: {
        AND:[
          {name:"Alpha"},
          {email: "devam@gmail.com"}
        ]
        // name:"devam",
        // email: "devan@ashish.com",
      },
    });
    console.log("user found: ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};




