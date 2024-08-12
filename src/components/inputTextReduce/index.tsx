import React, { useEffect, useState, useCallback } from "react"
import cls from './styles.module.scss'
import classNames from "classnames"

interface InputTextReduceProps {
  text: string
  onWordComplete: () => void
  onTextChange: (newText: string) => void
  onStart?: () => void
}

export const InputTextReduce: React.FC<InputTextReduceProps> = React.memo((props) => {
  const { text, onWordComplete, onTextChange, onStart } = props
  const [inputText, setInputText] = useState<string>('')
  const [errorStatus, setErrorStatus] = useState<boolean>(false)
  const [eventTriggered, setEventTriggered] = useState<boolean>(false)

  useEffect(() => {
    if (inputText && inputText === text[0]) {
      onTextChange(text.slice(1))
      setInputText('')
      if (text.length === 1) {
        onWordComplete()
      }
    }
    if (inputText !== text[0] && inputText !== '') {
      setErrorStatus(true)
    } else {
      setErrorStatus(false)
    }
  }, [inputText, text, onWordComplete, onTextChange])

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === text[0]) {
      setInputText(value)
    } else {
      setErrorStatus(true)
    }
  }, [text])

  const handleKeyDown = useCallback(() => {
    if (!eventTriggered) {
      onStart?.()
      setEventTriggered(true)
    }
  }, [eventTriggered, onStart])

  return (
    <div className={cls.root}>
      <input
        onKeyDown={handleKeyDown}
        autoFocus
        type="text"
        id="inputText"
        value={inputText}
        onChange={handleInputChange}
        className={classNames({[cls.errorInput]: errorStatus})}
        maxLength={1}
      />
      <label htmlFor='inputText'>
      <div className={cls.textWrapper}>
        {text.split('').slice(0,22).map((letter, index) => (
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
  )
})