const { CreateUser} =require("./user");

const main=async ()=>{

  await CreateUser().catch((err:Error) => {
        console.log("Error: ", err);
    })

}

main()