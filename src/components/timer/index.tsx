import React from 'react'
import cls from './styles.module.scss'
import { formatTime } from '../../helpers/formatTime'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  time: number
  onStart: () => void
  resetTimer: () => void
  isRunning: boolean
}

export const Timer = (props: Props) => {
  const { time, onStart, resetTimer, isRunning } = props
  return (
    <div className={cls.root}>
      <div>
        <p>ваш таймер</p>
        <p>{formatTime(time)}</p>
      </div>
      <div className={cls.actionBtns}>
        <button disabled={isRunning || time === 0} onClick={onStart}>Начать</button>
        <button disabled={isRunning} onClick={resetTimer}>С начала</button>
      </div>
    </div>
  )
}
