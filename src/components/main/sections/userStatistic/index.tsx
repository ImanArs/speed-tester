import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import cls from './styles.module.scss'
import { useUserData } from '../../../../hooks/useUserData';
import { useEffect } from 'react';



export const MainUserStatistic = () => {
  const {user, getUserStorage} = useUserData()
  useEffect(() => {
    getUserStorage()
  }, [])

  const data = [
    { name: 'words', words: user.stats.words, letters: user.stats.letters },
  ];
  return (
    <div className={cls.root}>
      <ResponsiveContainer width="50%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="words" fill="#8884d8" />
          <Bar dataKey="letters" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div>
        <h2>Ваша Статистика за игру</h2>
      </div>
    </div>
  );
}