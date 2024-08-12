import cls from './styles.module.scss'

interface Props {
  children: React.ReactNode
}

const AppLayout = (props: Props) => {
  const {children} = props
  return (
    <div className={cls.root}>
      {children}
    </div>
  )
}

export default AppLayout