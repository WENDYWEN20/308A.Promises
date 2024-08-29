// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) { //only async function allow to use await
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  //Accordingly, you should test your function using id values between 1 and 10 (inclusive). Use values outside of this range to test for error cases. 
  if(id>10 || id<1)
  {console.error('id need to be between 1 to 10')}
//step1 find users in the database using central
  const dataBaseName=await central(id)
  console.log(dataBaseName)
  //const basicInfo= dbs[valueReturnedFromCentral](id)
  const basicInfo=await dbs[dataBaseName](id)
  console.log(basicInfo)

  //access vault an steal personal data
  const personalData = await vault(id);
  console.log(personalData)

  return {
    ...basicInfo,
    ...personalData
  }
}


const user= await getUserData(5)
console.log(user)
