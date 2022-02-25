import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CreatePost = async () => {
  // let post: Prisma.PostCreateInput;
  try {
    const channel = {
      title: "console",
      content: "disconnect",
      published: true,
      authorId: 8,
      likes: 45,
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

    const data = postData.map((d: any) => {
      const userData = prisma.user.findUnique({ where: { id: d.authorId } });
      // console.log(profile);
      return { ...d, userData };
    });

    console.log("User data from location ", data);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};
