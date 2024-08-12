import cls from './styles.module.scss'

interface Props {
  bestStats: number
  currentStats: number
}

export const StatisticPerformance = (props: Props) => {
  const {bestStats = 0, currentStats = 0} = props

  return (
    <div className={cls.root}>
      <h3 className={cls.title}>StatisticPerformance</h3>
     
      <div>bestStats: {bestStats}</div>
      <div>текущее : {currentStats}</div>
    </div>
  )
}
