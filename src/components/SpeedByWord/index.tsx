import { useState, useEffect } from 'react'
import { InputTextReduce } from '../inputTextReduce'
import { getRandomWord } from '../../consts/words'
import { ChallengeGreet } from '../ChallengeGreet'
import { Timer } from '../timer'
import { useTimerStore } from '../../hooks/useTimer'
import cls from './styles.module.scss'
import { StatisticPerformance } from '../StatisticPerformance'

export const SpeedByWordPage = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimerStore()
  const [completedWords, setCompletedWords] = useState(0)
  const [currentWord, setCurrentWord] = useState<string>(getRandomWord())

  useEffect(() => {
    if (time === 0) {
      stopTimer()
    }
  }, [time, stopTimer, completedWords])

  const onStartTimer = () => {
    startTimer()
  }

  const handleWordComplete = () => {
    setCompletedWords(prev => prev + 1)
    setCurrentWord(getRandomWord())
  }

  const handleWordTextChange = (newText: string) => {
    setCurrentWord(newText)
  }

  return (
    <div>
      <h1>Узнать скорость в словах</h1>
      <div className={cls.grid}>
        <StatisticPerformance bestStats={0} currentStats={completedWords} />
        <ChallengeGreet />
      
        <Timer
          time={time}
          onStart={onStartTimer}
          resetTimer={() => resetTimer(60)}
          isRunning={isRunning}
        />
        <InputTextReduce 
          onStart={onStartTimer}
          text={currentWord}
          onWordComplete={handleWordComplete} 
          onTextChange={handleWordTextChange} 
        />
      </div>
    </div>
  )
}