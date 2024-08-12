import AppLayout from "./components/AppLayout"
import { Header } from "./components/header"
import AppRouter from "./provider/AppRouter"

const App = () => {
  return (
    <AppLayout>
      <Header />
      <AppRouter />
    </AppLayout>
  )
}

export default App