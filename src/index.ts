const {
  CreateUser,
  UpdateUser,
  FindUser,
  CountUser,
  DeleteUser,
} = require("./user");
const { CreatePost, GroupPost, UserByPost } = require("./post");
const { CreateProfile } = require("./profile");
const { CreateLocation, UserByLocation } = require("./location");

const main = async () => {
  // await CreateUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await UpdateUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await FindUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await CountUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await DeleteUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await CreatePost().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await GroupPost().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await CreateProfile().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await CreateLocation().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await UserByLocation().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  await UserByPost().catch((err: Error) => {
    console.log("Error: ", err);
  });
};

main();
