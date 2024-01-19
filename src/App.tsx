import './App.css'
import image from './assets/react.svg'
import Hello from './components/Hello'
import Car from './components/Car'
import Counter from './components/Counter'
import User from './components/User'
import Focus from './components/Focus'
import Greet from './components/Greet'
import { UserProvider } from './context/UserContext'
import useFetchOnClick from './hooks/useFetchOnClick'

function App() {
  // Custom hooks
  const { data, loading, error, fetchData } = useFetchOnClick()

  const message = {
    text: 'Ciao',
    from: 'React',
  }

  return (
    <main
      className='w-full h-full flex 
    justify-center items-center flex-col'
    >
      {/* Images */}
      <div>
        <img src={image} alt='react' />
      </div>

      {/* Style object */}
      <Hello />

      {/* Class Components */}
      <Counter initialValue={1} />

      {/* useState prev values */}
      <Car />

      {/* Context */}
      <UserProvider>
        <User />
      </UserProvider>

      {/* useRef */}
      <Focus />

      {/* Spread Operator as Prop */}
      <Greet {...message} />
      {/* same as <Greet text={message.text} from={message.from} /> */}

      {/* Custom hooks */}
      {!data && (
        <button
          className='bg-indigo-600 text-white py-2 px-4'
          onClick={() =>
            fetchData('https://jsonplaceholder.typicode.com/users/1')
          }
        >
          Fetch Data
        </button>
      )}

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <p>{data.name}</p>}
    </main>
  )
}

export default App
