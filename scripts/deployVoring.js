const hre = require("hardhat");



async function deployConract(){
    const lockDataContract = await    hre.ethers.getContractFactory("dataContract");
    const dataContract = await lockDataContract.deploy();                                                                                                                                                                                                                   
    await dataContract.deployed();
    console.log(dataContract.address);
    const addData = await dataContract.addData(1,"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",1);
    await addData.wait();

    const getCandidate = await dataContract.getCandidate("0x70997970C51812dc3A010C7d01b50e0d17dc79C8") ;
    
        
    
    console.log(addData);

    console.log(getCandidate);


}
deployConract()

