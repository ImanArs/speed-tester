import React from 'react'
import cls from './styles.module.scss'
import classNames from 'classnames'
import { X } from 'lucide-react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  className?: string
}

export const Modal = (props: Props) => {
  const { isOpen, onClose, children, title, className } = props

  return (
    <div>
      {isOpen && (
        <div className={cls.modal}>
          <div className={classNames(cls.modalWrapper, className)}>
            <div className={cls.heading}>
              <h3>{title}</h3>
              <button onClick={onClose}><X /></button>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}