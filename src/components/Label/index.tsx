import React from 'react'
import cls from './styles.module.scss'

interface Props {
  children?: React.ReactNode
  label?: string
}

export const Label = (props: Props) => {
  const {label} = props
  return (
    <div className={cls.root}>{label}</div>
  )
}
