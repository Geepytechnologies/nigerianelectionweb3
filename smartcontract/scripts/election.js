const hre = require("hardhat");

async function main() {
  const NigerianElection = await hre.ethers.getContractFactory(
    "NigerianElection"
  );
  const nigerianElection = await NigerianElection.deploy();

  await nigerianElection.deployed();

  console.log(`Election contract deployed to ${nigerianElection.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
