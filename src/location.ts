import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CreateLocation = async () => {
  // let location: Prisma.PostCreateInput;
  try {
    const channel = {
      city: "Surat",
      pincode: 987845,
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

export const FindUserGroupByLocation = async () => {
  try {
    // const locationData = await prisma.location.groupBy({
    //   by: ["city"],
    //   _count: {
    //     city: true,
    //   },
    // });

    const locationData: any =
      await prisma.$queryRaw`select group_concat(profileId),count(city),city from Location group by city;`;

    const data = locationData.slice(1).map(async (d: any) => {
      const profileData = await prisma.profile.findMany({
        where: { id: parseInt(d["group_concat(profileId)"]) },
      });
      console.log("Profile data from location ", profileData);

      const userData = await prisma.user.findMany({
        where: { id: profileData[0].userId },
      });
      console.log("User data from location ", userData);
    });

    data;
    //   include: { profile: { include: { user: true } } },
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};
