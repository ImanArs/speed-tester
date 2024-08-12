import { Link } from 'react-router-dom'
import cls from './styles.module.scss'

export const ChallengeGreet = () => {
  return (
    <div className={cls.root}>
      <img src="https://media.istockphoto.com/id/547130486/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B4%D0%B5%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D1%81-%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BD%D0%B8%D0%BC%D0%B0%D1%8E%D1%89%D0%B8%D0%B9%D1%81%D1%8F.jpg?s=612x612&w=0&k=20&c=3PIZBfXAPnDwW4ZjEy6I104jlVG6RgwRIIddKLkyDLE=" alt="" />
      <div className={cls.info}>
        <h2>Тест скорости печати</h2>
        <p>Пройди тест за 1 мин и узнай, как быстро ты печатаешь в <Link to='/speed-by-word'>печати слов</Link> или <Link to='/speed-by-text'>печати в предложениях</Link></p>
      </div>
    </div>
  )
}
