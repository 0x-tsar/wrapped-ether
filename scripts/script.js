const WrappedEther = artifacts.require("WrappedEther");

module.exports = async () => {
  try {
    const [account, _] = await web3.eth.getAccounts();
    console.log(account);

    const wrappedEther = await WrappedEther.deployed();

    let myWeth = await wrappedEther.methods.balanceOf(account);
    console.log(myWeth);

    const value = web3.utils.toWei("0.1");
    await wrappedEther.methods.mint().send({ from: account, value: value });
    console.log(myWeth);

    console.log(wrappedEther.methods);
  } catch (error) {
    console.error(error);
  }
};
