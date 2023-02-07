const hre = require("hardhat");

async function deployConract(){
    const lockDataContract = await    hre.ethers.getContractFactory("dataContract");
    const dataContract = await lockDataContract.deploy();                                                                                                                                                                                                                   
    await dataContract.deployed();
    console.log(dataContract.address);


}deployConract()