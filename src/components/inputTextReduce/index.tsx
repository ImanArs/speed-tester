import React, { useEffect, useState, useCallback } from "react"
import cls from './styles.module.scss'
import classNames from "classnames"
import { englishAlphabetRegex } from "../../consts/AlphabetRegex"
import { useModal } from "../../hooks/useModal"
import { Modal } from "../Modal"

interface InputTextReduceProps {
  text: string
  disabled?: boolean
  type: 'word' | 'letter'
  onWordComplete: () => void
  onTextChange: (newText: string) => void
  onStart?: () => void
}

export const InputTextReduce: React.FC<InputTextReduceProps> = React.memo((props) => {
  const { text, type, onWordComplete, onTextChange, onStart, disabled } = props
  const {isModalOpen, openModal, closeModal} = useModal()
  const [inputText, setInputText] = useState<string>('')
  const [errorStatus, setErrorStatus] = useState<boolean>(false)
  const [eventTriggered, setEventTriggered] = useState<boolean>(false)
  const [incorrectLetters, setIncorrectLetters] = useState<number>(0) // New state for incorrect letters

  useEffect(() => { // TODO: use memo
    if (inputText && inputText === text[0]) {
      onTextChange(text.slice(1))
      setInputText('')
      if (type === 'word' && text.length === 1) {
        onWordComplete()
      }
      if (type === 'letter') {
        onWordComplete()
      }
    }
    if (inputText !== text[0] && inputText !== '') {
      setErrorStatus(true)
      setIncorrectLetters(prev => prev + 1)
    } else {
      setErrorStatus(false)
    }
  }, [inputText, text])

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === text[0]) {
      setInputText(value)
    } else if (englishAlphabetRegex.test(value)) {
      openModal()
      console.log('english');
    }else {
      setErrorStatus(true)
      setIncorrectLetters(prev => prev + 1)
    }
  }, [text])

  const handleKeyDown = useCallback(() => {
    if (!eventTriggered) {
      onStart?.()
      setEventTriggered(true)
    }
  }, [eventTriggered, onStart])

  return (
    <>
    <div className={cls.root}>
      <input
        onKeyDown={handleKeyDown}
        autoFocus
        disabled={disabled}
        type="text"
        id="inputText"
        value={inputText}
        onChange={handleInputChange}
        className={classNames({[cls.errorInput]: errorStatus})}
        maxLength={1}
      />
      <label htmlFor='inputText'>
      <div className={cls.textWrapper}>
        {text.split('').slice(0,18).map((letter, index) => (
          <span
            className={classNames({
              [cls.errorLetter]: errorStatus && inputText !== letter
            })}
            key={index}
          >
            {letter}
          </span>
        ))}
      </div>
      </label>
    </div>
    <div className={cls.incorrectLettersCount}>
      Неправильные буквы: {incorrectLetters}
    </div>
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      className={cls.modal}
    >
      <img src="https://img.freepik.com/free-vector/shrug-concept-illustration_114360-8983.jpg?size=338&ext=jpg&ga=GA1.1.1292351815.1709596800&semt=ais" alt="" />
      <h3>Поменять язык можно так</h3>
      <div className={cls.changeLng}>
        <p>alt</p>
        +
        <p>shilft</p>
      </div>
      <button onClick={closeModal} className={cls.closeBtn}>Понятно</button>
    </Modal>
  </>
  )
})