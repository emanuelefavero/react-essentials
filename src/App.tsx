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
import PrimaryButton from './components/PrimaryButton'
import OffCanvas from './components/OffCanvas'
import CounterUseReducer from './components/CounterUseReducer'
import CounterUseCallback from './components/CounterUseCallback'
import CounterUseMemo from './components/CounterUseMemo'
import CounterMemo from './components/CounterMemo'
import Id from './components/Id'
import Dialog from './components/Dialog'
import HOC from './components/HOC'
import Portal from './components/Portal'
import List from './components/List'

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

      {/* Custom hooks and custom style component that takes children */}
      {!data && (
        // Custom style component that takes children
        <PrimaryButton
          onClick={
            // Custom hook
            () => fetchData('https://jsonplaceholder.typicode.com/users/1')
          }
        >
          Fetch Data
        </PrimaryButton>
      )}

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <p>{data.name}</p>}

      {/* OffCanvas */}
      <OffCanvas />

      {/* Counter useReducer */}
      <CounterUseReducer />

      {/* Counter useCallback */}
      <CounterUseCallback />

      {/* Counter useMemo */}
      <CounterUseMemo />

      {/* Counter Memo */}
      <CounterMemo />

      {/* Id */}
      <Id />

      {/* Dialog */}
      <Dialog />

      {/* HOC - High Order Components */}
      <HOC />

      {/* createPortal method */}
      <Portal />

      {/* List */}
      <List />
    </main>
  )
}

export default App
