const { CreateUser, UpdateUser, FindUser ,CountUser,DeleteUser} = require("./user");

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

  await DeleteUser().catch((err: Error) => {
    console.log("Error: ", err);
  });
};

main();
