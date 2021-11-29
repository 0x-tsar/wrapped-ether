const WrappedEther = artifacts.require("WrappedEther");

module.exports = async (deployer, networks, accounts) => {
  await deployer.deploy(WrappedEther);
  const wrappedEther = await WrappedEther.deployed();
  console.log(wrapped);
};
