import React from 'react'
import Countdown from 'react-countdown'

interface CutdownProps {
  date: number
  // eslint-disable-next-line react/require-default-props
  handleComplete?: () => void
}

const convertTime = (time) => {
  return time < 10 ? `0${time}` : time
}

const countdownRender = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // return <span>Mint Started</span>
    return <span>0D:0H:0M:0S</span>
  }
  return (
    <span>
      {convertTime(days)}D:{convertTime(hours)}H:{convertTime(minutes)}M:{convertTime(seconds)}S
      {/* <br />WHITELIST SALE 2/15 6AM UTC<br />PUBLIC SALE STARTS IN {convertTime(hours)}H:{convertTime(minutes)}M:{convertTime(seconds)}S<br /> */}
    </span>
  )
}

const CountDown: React.FC<CutdownProps> = ({ date, handleComplete }) => {
  return <Countdown renderer={countdownRender} date={date} onComplete={handleComplete} />
}

export default React.memo(CountDown)
