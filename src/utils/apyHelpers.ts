import { SECONDS_PER_YEAR, DAYS_PER_YEAR } from 'config'

export const getFarmApr = (rewardTokenPrice, poolLiquidityUsd, rewardRatePerSec): number => {
  const yearlyLydRewardAllocation = rewardRatePerSec * SECONDS_PER_YEAR
  const apr = (yearlyLydRewardAllocation * rewardTokenPrice) / poolLiquidityUsd
  return apr || 0
}

export const getApy = (dailyApr = 0) => {
  if (Number.isNaN(dailyApr)) return 0
  if (dailyApr === Infinity) return 0

  const staticFee = 0

  const apy = (1 + dailyApr) ** DAYS_PER_YEAR - 1 + staticFee
  return apy === Infinity ? 999999 : apy
}

export const getApr = (dailyApr = 0) => {
  if (Number.isNaN(dailyApr)) return 0
  if (dailyApr === Infinity) return 0

  const apr = dailyApr * DAYS_PER_YEAR
  return apr === Infinity ? 999999 : apr
}
