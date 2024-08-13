import AppLayout from "./components/AppLayout"
import { Header } from "./components/header"
import AppRouter from "./provider/AppRouter"

const App = () => {

  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify(
      {
        name: 'Ученик', 
        stats: { 
          words: 0,
          lastTimeWords: 0,
          letters: 0,
          lastTimeLetters: 0,
        },
        totalGames: 0 
      }
    ))
  }

  return (
    <AppLayout>
      <Header />
      <AppRouter />
    </AppLayout>
  )
}

export default App