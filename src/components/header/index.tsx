import { Link } from 'react-router-dom'
import cls from './styles.module.scss'

export const Header = () => {
  return (
    <header className={cls.header}>
      <h1>Привет Ученик!</h1>
      <Link to='/'><button>посмотреть статиску</button></Link>
    </header>
  )
}
