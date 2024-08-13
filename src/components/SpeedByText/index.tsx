import { useEffect, useState } from 'react'
import { InputTextReduce } from '../inputTextReduce'
import { ChallengeGreet } from '../ChallengeGreet'
import { Timer } from '../timer'
import { useTimer } from '../../hooks/useTimer'
import { StatisticPerformance } from '../StatisticPerformance'
import cls from './styles.module.scss'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal'
import { getRandomStoryTale } from '../../consts/sentences'
import { useUserData } from '../../hooks/useUserData'
import { ToHome } from '../ToHomeLink'

export const SpeedByTextPage = () => {
  const { isModalOpen, openModal, closeModal} = useModal()
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer()
  const { user, getUserStorage, updateUserBestStats, updateUserTotalGames, updateUserLastStats } = useUserData()
  const [completedLetters, setCompletedLetters] = useState(0)
  const [currentText, setCurrentText] = useState<string>(getRandomStoryTale())

  
  useEffect(() => {
    getUserStorage()
  }, [])

  useEffect(() => {
    if (time === 0) {
      stopTimer()
      openModal()
      updateUserLastStats('letters', completedLetters)
      updateUserTotalGames()
      getUserStorage()
    }
    if (user.stats.words < completedLetters) {
      updateUserBestStats('letters', completedLetters)
    }
  }, [time, completedLetters])

  const handleLetterComplete = () => {
    setCompletedLetters(prev => prev + 1)
  }

  const handleLetterTextChange = (newText: string) => {
    setCurrentText(newText)
  }

  return (
    <main>
      <ToHome />
      <h1>Узнать скорость в буквах</h1>
      <div className={cls.grid}>
        <StatisticPerformance />
        <ChallengeGreet />
        <Timer
          time={time}
          onStart={startTimer}
          resetTimer={resetTimer}
          isRunning={isRunning}
        />
        <InputTextReduce
          disabled={time === 0}
          onStart={startTimer}
          text={currentText}
          type='letter'
          onWordComplete={handleLetterComplete} 
          onTextChange={handleLetterTextChange} 
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className={cls.modal}
      >
        <img src="https://img.freepik.com/free-vector/cernye-ludi-derzat-koncepciu-megafona_114360-16298.jpg" alt="" />
        <h1>Время вышло! Вы завершили {completedLetters} букв.</h1>
        <button className={cls.closeBtn} onClick={closeModal}>понятно</button>
      </Modal>
    </main>
  )
}