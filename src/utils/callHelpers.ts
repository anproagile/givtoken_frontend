import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const approvePefi = async (pefiContract, account, address) => {
  const approveAmount = '1000000000000000000000000000'
  return pefiContract.methods
    .approve(address, new BigNumber(approveAmount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const mintPuffy = async (cryptoPuffyContract, account, price) => {
  return cryptoPuffyContract.methods.mint()
  .send({ from: account, value: new BigNumber(price).times(new BigNumber(10).pow(18)).toString() })
  .on('transactionHash', (tx) => {
    return tx.transactionHash
  })
}

export const batchMintPuffies = async (cryptoPuffyContract, account, price, amountToMint) => {
  return cryptoPuffyContract.methods.batchMint(amountToMint)
  .send({ from: account, value: new BigNumber(price).times(new BigNumber(10).pow(18)).toString() })
  .on('transactionHash', (tx) => {
    return tx.transactionHash
  })
}