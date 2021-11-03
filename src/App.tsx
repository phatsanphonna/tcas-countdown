// root
import React, { useState, useEffect } from "react";
import './styles/App.css'

// types
import { Timer as TimerType } from "./types/date.types";

// components
import Timer from "./components/Timer.component";

// constant variables
const TCS_REGISTER_DATE: number = new Date(1638982800000).valueOf()

const App: React.FC = () => {
  const [timer, setTimer] = useState<TimerType>()

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime: Date = new Date()
      const countdownTime: Date = new Date(TCS_REGISTER_DATE - currentTime.valueOf())

      const formatDays = (): String => {
        const calcDays = (countdownTime.getMonth() * 30) + countdownTime.getDate()

        if (calcDays > 9) {
          return calcDays.toString()
        } else {
          return `0${calcDays.toString()}`
        }
      }

      const formatHours = (): String => {
        const calcHours = countdownTime.getHours()

        if (calcHours > 9) {
          return calcHours.toString()
        } else {
          return `0${calcHours.toString()}`
        }
      }

      const formatMinutes = (): String => {
        const calcMinutes = countdownTime.getMinutes()

        if (calcMinutes > 9) {
          return calcMinutes.toString()
        } else {
          return `0${calcMinutes.toString()}`
        }
      }

      const formatSeconds = (): String => {
        const calcSeconds = countdownTime.getSeconds()

        if (calcSeconds > 9) {
          return calcSeconds.toString()
        } else {
          return `0${calcSeconds.toString()}`
        }
      }

      setTimer({
        days: formatDays(),
        hours: formatHours(),
        minutes: formatMinutes(),
        seconds: formatSeconds()
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  return (
    <div className="App">

      <h1 className='Title'>
        <a href="https://student.mytcas.com/">MyTCAS</a><br />จะเปิดระบบ<br />ในอีกกี่วัน ?
      </h1>

      <p>6 ธันวาคม 2564</p>

      <Timer
        days={timer?.days}
        hours={timer?.hours}
        minutes={timer?.minutes}
        seconds={timer?.seconds}
      />

    </div>
  )
}

export default App;