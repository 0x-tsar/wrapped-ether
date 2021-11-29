const WrappedEther = artifacts.require("WrappedEther");

module.exports = async () => {
  try {
    const [account, _] = await web3.utils.getAccounts();
    console.log(account);

    const wrappedEther = await WrappedEther.deployed();

    console.log(wrappedEther.methods);
  } catch (error) {
    console.error(error);
  }
};
