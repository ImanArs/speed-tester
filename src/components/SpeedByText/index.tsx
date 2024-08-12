import { useEffect, useState } from 'react'
import { InputTextReduce } from '../inputTextReduce'
import { ChallengeGreet } from '../ChallengeGreet'
import { Timer } from '../timer'
import { useTimerStore } from '../../hooks/useTimer'
import { StatisticPerformance } from '../StatisticPerformance'
import cls from './styles.module.scss'
import { Modal } from 'antd'
import { useModal } from '../../hooks/useModal'

export const SpeedByTextPage = () => {
  const { isModalOpen, openModal, closeModal} = useModal()
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimerStore()
  const [completedLetters, setCompletedLetters] = useState(0)
  const [currentText, setCurrentText] = useState<string>('всем приветики пистолетики вот так вот ну и типо так')

  useEffect(() => {
    if (time === 0) {
      stopTimer()
      openModal()
    }
  }, [time, stopTimer, completedLetters])

  const handleLetterComplete = () => {
    setCompletedLetters(prev => prev + 1)
  }

  const handleLetterTextChange = (newText: string) => {
    setCurrentText(newText)
  }

  return (
    <div>
      <h1>Узнать скорость в буквах</h1>
      <div className={cls.grid}>
        <StatisticPerformance bestStats={0} currentStats={completedLetters} />
        <ChallengeGreet />
        <Timer
          time={time}
          onStart={startTimer}
          resetTimer={() => resetTimer(60)}
          isRunning={isRunning}
        />
        <InputTextReduce 
          text={currentText} 
          onWordComplete={handleLetterComplete} 
          onTextChange={handleLetterTextChange} 
        />
      </div>
      <p>Завершено букв: {completedLetters}</p>
      <Modal

        onOk={() => console.log('ok')} 
        open={isModalOpen}
        onCancel={closeModal}
        footer={
          <button className={cls.modalBtn} onClick={closeModal}>Закрыть</button>
        }
      >
        <h1>Время вышло! Вы завершили {completedLetters} букв.</h1>
      </Modal>
    </div>
  )
}