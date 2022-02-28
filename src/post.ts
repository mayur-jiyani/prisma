import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CreatePost = async () => {
  // let post: Prisma.PostCreateInput;
  try {
    const channel = {
      title: "mayur",
      content: "Mayur's content",
      published: true,
      authorId: 1,
      jsonObject: { category: "Black Life Matter", ref: "current affairs" },
      likes: 25,
    };

    const res = await prisma.post.create({
      data: channel,
    });

    console.log("New post saved ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const GroupPost = async () => {
  // let post: Prisma.PostCreateInput;
  try {
    const res = await prisma.post.groupBy({
      by: ["authorId"],
      _sum: {
        likes: true,
      },
      having: {
        authorId: {
          not: 1,
        },
      },
    });

    console.log("post with group by with sum of likes ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const UserByPost = async () => {
  // let post: Prisma.PostCreateInput;
  try {
    const postData = await prisma.post.groupBy({
      by: ["authorId"],
    });

    // console.log(postData);

    const data = postData.map(async (d: any) => {
      const userData = await prisma.user.findMany({
        where: { id: d.authorId },
      });
      // console.log(userData);
      console.log("User data from location ", d, userData);
      return { ...d, userData };
    });

    data;

    // console.log("User data from location ", data);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const SumOfAllLikesByGroup = async () => {
  try {
    const res = await prisma.post.groupBy({
      by: ["authorId"],
      _sum: {
        likes: true,
      },
    });
    // console.log("Sum of all likes by group: ", res._sum.likes);
    console.log("Sum of all likes by group: ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const AllPostWithLikesLessThen = async () => {
  try {
    const res = await prisma.post.findMany({
      where: {
        likes: {
          lte: 15,
        },
      },
    });
    console.log("post found: ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const RetrieveJsonObject = async () => {
  try {
    const res = await prisma.post.findMany({
      where:{
        title:"Alpha"
      }
    });
    console.log("post found: ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const FindPostBetweenDate = async () => {
  try {
    const res = await prisma.post.findMany({
      where: {
        updatedAt: {
          gte: new Date("2022-02-24"),
          lt: new Date("2022-02-26"),
        },
      },
    });
    console.log("post found: ", res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};
