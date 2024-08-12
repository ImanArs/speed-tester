import { Link } from 'react-router-dom'
import { Label } from '../../../Label'
import cls from './styles.module.scss'

const sections = [
  {
    link: '/speed-by-word',
    title: 'Скорость по словам',
    label: 'Узнай сколько слов в минуту ты печатаешь'
  },
  {
    link: '/speed-by-text',
    title: 'Скорость по предложениям',
    label: 'Узнай сколько знаков ты печатаешь'
  },
]
export const MainSections = () => {
  return (
    <div className={cls.root}>
      {
        sections.map(section => (
          <div className={cls.section}>
            <div className={cls.info}>
              <h3>{section.title}</h3>
              <Label label={section.label} />
            </div>
            <div>
              <Link to={section.link}  key={section.title}>
                <button>
                  перейти
                </button>
              </Link>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}
