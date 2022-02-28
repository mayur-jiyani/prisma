const { JSDOM } = require("jsdom")

const { window } = new JSDOM()

const logger  = require("./logger/logger.js")

const {
  CreateUser,
  UpdateUser,
  FindUser,
  CountUser,
  DeleteUser,
  CountPostByUser,
  HavingInUser,
} = require("./user");

const {
  CreatePost,
  GroupPost,
  UserByPost,
  SumOfAllLikesByGroup,
  AllPostWithLikesLessThen,
  RetrieveJsonObject,
  FindPostBetweenDate,
} = require("./post");

const { CreateProfile } = require("./profile");

const {
  CreateLocation,
  UserByLocation,
  FindUserGroupByLocation,
} = require("./location");

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

  // await CountPostByUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await DeleteUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await HavingInUser().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await CreatePost().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await GroupPost().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await SumOfAllLikesByGroup().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await GroupPost().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await AllPostWithLikesLessThen().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await RetrieveJsonObject().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await FindPostBetweenDate().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await CreateProfile().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await CreateLocation().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await FindUserGroupByLocation().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await UserByLocation().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });

  // await UserByPost().catch((err: Error) => {
  //   console.log("Error: ", err);
  // });


  const start = window.performance.now()

  const functionName = 'FindUserGroupByLocation';
  const numberOfIteration = 1000;
 

  for (let index = 0; index < numberOfIteration; index++) {
      
    await FindUserGroupByLocation().catch((err: Error) => {
      console.log("Error: ", err);
    });
      
  }

  const stop = window.performance.now()
  const executionTime = (stop - start)/1000;

  console.log(`Time Taken to execute = ${(stop - start)/1000} seconds`);
  logger.info(`Time for exection of function ${functionName}, number of iteration performed ${numberOfIteration}, Time Taken to execute ${executionTime} seconds`)
};

main();
