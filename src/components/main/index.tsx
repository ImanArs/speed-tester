
import { MainFaq } from './sections/mainFaq'
import { MainSections } from './sections/mainSections'
import { MainUserStatistic } from './sections/userStatistic'
import cls from './styles.module.scss'


export const Main = () => {

  return (
    <div className={cls.root}>
      <MainSections />
      <MainUserStatistic />
      <MainFaq />
    </div>
  )
}