import cls from './styles.module.scss'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const ToHome = () => {
  return (
    <div className={cls.toHome}>
      <Link to='/'>
        <ArrowLeft />
        на Главную
      </Link>
    </div>
  )
}
