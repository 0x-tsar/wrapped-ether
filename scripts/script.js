const WrappedEther = artifacts.require("WrappedEther");

module.exports = async () => {
  try {
    const [account, _] = await web3.utils.getAccounts();
    console.log(account);

    const wrappedEther = await WrappedEther.deployed();
  } catch (error) {
    console.error(error);
  }
};
