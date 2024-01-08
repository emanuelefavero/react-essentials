import './App.css'
import image from './assets/react.svg'
import Car from './components/Car'
import Counter from './components/Counter'
import User from './components/User'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <main
      className='w-full h-full flex 
    justify-center items-center flex-col'
    >
      {/* Images */}
      <div>
        <img src={image} alt='react' />
      </div>

      {/* Class Components */}
      <Counter initialValue={1} />

      {/* useState prev values */}
      <Car />

      {/* Context */}
      <UserProvider>
        <User />
      </UserProvider>
    </main>
  )
}

export default App
