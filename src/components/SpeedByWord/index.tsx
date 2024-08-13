import { useState, useEffect } from 'react'
import { InputTextReduce } from '../inputTextReduce'
import { getRandomWord } from '../../consts/words'
import { ChallengeGreet } from '../ChallengeGreet'
import { Timer } from '../timer'
import { useTimer } from '../../hooks/useTimer'
import cls from './styles.module.scss'
import { StatisticPerformance } from '../StatisticPerformance'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal'
import { useUserData } from '../../hooks/useUserData'
import { ToHome } from '../ToHomeLink'

export const SpeedByWordPage = () => {
  const { isModalOpen, openModal, closeModal} = useModal()
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer()
  const { user, getUserStorage, updateUserBestStats, updateUserTotalGames, updateUserLastStats } = useUserData()
  const [completedWords, setCompletedWords] = useState(0)
  const [currentWord, setCurrentWord] = useState<string>(getRandomWord())

  useEffect(() => {
    getUserStorage()
  }, [])


  useEffect(() => {
    if (time === 0) {
      stopTimer()
      openModal()
      updateUserTotalGames()
      updateUserLastStats('words', completedWords)
      getUserStorage()
    }
    if (user.stats.words < completedWords) {
      updateUserBestStats('words', completedWords)
    }
  }, [time, completedWords])

  const handleWordComplete = () => {
    setCompletedWords(prev => prev + 1)
    setCurrentWord(getRandomWord())
  }

  const handleWordTextChange = (newText: string) => {
    setCurrentWord(newText)
  }

  return (
    <main>
      <ToHome />
      <h1>Узнать скорость в словах</h1>
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
          onStart={startTimer}
          text={currentWord}
          disabled={time === 0}
          type='word'
          onWordComplete={handleWordComplete} 
          onTextChange={handleWordTextChange} 
        />
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className={cls.modal}
      >
        <img src="https://img.freepik.com/free-vector/cernye-ludi-derzat-koncepciu-megafona_114360-16298.jpg" alt="" />
        <h2>Время вышло! Вы завершили {completedWords} букв.</h2>
        <p>ваш wpm {completedWords / 5}</p>
        <button className={cls.closeBtn} onClick={closeModal}>понятно</button>
      </Modal>
    </main>
  )
}