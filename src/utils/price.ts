import Axios from 'axios'
import { appendParams } from 'utils/axios'
import { COINGECKO_API_ENDPOINT } from 'config'

export const getTokenPriceFromCoingecko = async (id) => {
  if (!id) return 1
  const url = appendParams(`${COINGECKO_API_ENDPOINT}/v3/simple/price`, { ids: id, vs_currencies: 'usd' })
  const res = await Axios.get(url)
  if (res.status === 200) {
    if (res.data[id]) {
      return res.data[id].usd
    }
    if (id === 'penguin-finance') {
      return 2.27
    }
  }
  return 1
}

export const getTokenPriceFromCoingecko1 = async (id) => {
  if (!id) return 1
  const url = appendParams(`${COINGECKO_API_ENDPOINT}/v3/simple/price`, { ids: id, vs_currencies: 'usd' })
  const res = await Axios.get(url)
  if (res.status === 200) {
    if (res.data[id]) {
      return res.data[id].usd
    }
    if (id === 'penguin-finance') {
      return 2.27
    }
  }
  return 1
}
