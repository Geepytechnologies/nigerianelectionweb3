const hre = require("hardhat");
const ethers = require("ethers");

async function main() {
  toWei = ethers.utils.parseEther;
  const Token = await hre.ethers.getContractFactory("Token");
  const myToken = await Token.attach(
    "0x128d66bCbeeBa75071E586f4722F8c64Db9115B7"
  );
  const totalsupply = await myToken.totalSupply();
  console.log(`Total supply is ${totalsupply}`);
  const transfer = await myToken.transfertowallet(
    "0x670f700C28B905264388aa588159F0ABeF933d58",
    toWei("500")
  );
  console.log(`Total supply is ${totalsupply}`);
  console.log(transfer);

  // const token = await Token.deploy("1000000000000000000000000000");

  // await token.deployed();

  // console.log(`Token contract deployed to ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
