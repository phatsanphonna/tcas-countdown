import React from 'react'
import { Timer as TimerType } from "../types/date.types";
import '../styles/Timer.css'

const Timer: React.FC<TimerType> = ({ days, hours, minutes, seconds }: TimerType) => {

  return (
    <div className='Timer'>
      <h1>{days} : {hours} : {minutes} : {seconds}</h1>

    </div>
  )
}

export default Timer