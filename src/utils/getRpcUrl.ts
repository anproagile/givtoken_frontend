import random from 'lodash/random'

export const nodes = [
  'https://api.avax.network/ext/bc/C/rpc',
  'https://api.avax.network/ext/bc/C/rpc',
  'https://api.avax.network/ext/bc/C/rpc',
]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export default getNodeUrl
