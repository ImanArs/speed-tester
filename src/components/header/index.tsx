import cls from './styles.module.scss'

export const Header = () => {
  return (
    <header className={cls.header}>
      <h1>Привет Ученик!</h1>
      <button>посмотреть статиску</button>
    </header>
  )
}
