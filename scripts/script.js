const WrappedEther = artifacts.require("WrappedEther");

module.exports = async () => {
  try {
    const [account, _] = await web3.eth.getAccounts();
    console.log(account);

    const wrappedEther = await WrappedEther.deployed();

    let myWeth = await wrappedEther.methods.balanceOf(account);

    console.log(wrappedEther.methods);
  } catch (error) {
    console.error(error);
  }
};
