import React, { useEffect } from 'react'
import { useUserData } from '../../hooks/useUserData'
import cls from './styles.module.scss'

export const StatisticPerformance = React.memo(() => {
  const {getUserStorage, user} = useUserData()

  useEffect(() => {
    getUserStorage()
  }, [])

  console.log(user.stats.words);
  

  return (
    <div className={cls.root}>
      <h3 className={cls.title}>Статистика: {user.name}</h3>
      
      <div>лучшее в буквах : {user.stats.letters}</div>
      <div>лучшее в словах : {user.stats.words}</div>
      <div>послдние статистики слов : {user.stats.lastTimeWords}</div>
      <div>послдние статистики букв : {user.stats.lastTimeLetters}</div>
      <h3>Общее количество игр {user.totalGames}</h3>
    </div>
  )
})
