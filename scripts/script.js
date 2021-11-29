const WrappedEther = artifacts.require("WrappedEther");

module.exports = async () => {
  try {
    const [account, _] = await web3.eth.getAccounts();
    console.log(account);

    const wrappedEther = await WrappedEther.deployed();

    // const totalWether = await wrappedEther.totalSupplyWether();
    // console.log(parseInt(totalWether));

    // let myWeth = await wrappedEther.balanceOf(account);
    // console.log(`before: ${myWeth}`);

    const value = web3.utils.toWei("0.1");
    // await wrappedEther.mint({ from: account, value: value });
    // // await wrappedEther.mint().send({ from: account, value: value });
    // console.log(myWeth);

    // myWeth = await wrappedEther.balanceOf(account);
    // console.log(`after: ${myWeth}`);

    console.log(`NOW WITHDRAW IT`);

    await wrappedEther.withdraw(value, { from: account });

    myWeth = await wrappedEther.balanceOf(account);
    console.log(`after withdraw WETH AMOUNT: ${myWeth}`);

    //
  } catch (error) {
    console.error(error);
  }
};
