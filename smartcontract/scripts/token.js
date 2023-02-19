const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("Token");
  const myToken = await Token.attach(
    "0xd731A898155Ba68786FbcD946A267E5A5f78a4d8"
  );
  const totalsupply = await myToken.totalSupply();
  console.log(`Total supply is ${totalsupply}`);

  //   const token = await Token.deploy(1000000);

  //   await token.deployed();

  //   console.log(`Token contract deployed to ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
