const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const amount = "1";
  const decimals = 18;
  const parsedAmount = ethers.utils.parseUnits(amount, decimals);
  const NigerianElection = await hre.ethers.getContractFactory(
    "NigerianElection"
  );
  const election = await NigerianElection.attach(
    "0x857c7FF5Be4a640B7E27a6B0A6f377Ba497068b6"
  );
  const transfer = await election.transferTokens(
    "0x670f700C28B905264388aa588159F0ABeF933d58",
    "0x19b23f0e83b32064bbbae2614460050b1ea1b02d",
    parsedAmount
  );
  const voters = await election.getNumberOfVoters();
  console.log(` ${voters}`);
  console.log(` ${transfer}`);

  // const nigerianElection = await NigerianElection.deploy();

  // await nigerianElection.deployed();

  // console.log(`Election contract deployed to ${nigerianElection.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
