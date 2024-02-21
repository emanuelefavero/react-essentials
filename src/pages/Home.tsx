// * IMPORTS
// * Libraries
import { Link } from 'react-router-dom'

// * Components
import Card from '../components/common/Card'
import image from '../assets/react.svg'
import Hello from '../components/Hello'
import Car from '../components/Car'
import Counter from '../components/Counter'
import User from '../components/User'
import Focus from '../components/Focus'
import Greet from '../components/Greet'
import { UserProvider } from '../context/UserContext'
import useFetchOnClick from '../hooks/useFetchOnClick'
import PrimaryButton from '../components/PrimaryButton'
import OffCanvas from '../components/OffCanvas'
import CounterUseReducer from '../components/CounterUseReducer'
import CounterUseCallback from '../components/CounterUseCallback'
import CounterUseMemo from '../components/CounterUseMemo'
import CounterMemo from '../components/CounterMemo'
import Id from '../components/Id'
import Dialog from '../components/Dialog'
import HOC from '../components/HOC'
import Portal from '../components/Portal'
import List from '../components/List'
import Autocomplete from '../components/Autocomplete'
import ListWithCustomHook from '../components/ListWithCustomHook'
import UseTransitionHook from '../components/UseTransitionHook'
import LazyLoading from '../components/LazyLoading'
import ZustandCounter from '../components/ZustandCounter'
import StarRating from '../components/StarRating'

// * COMPONENT
export default function Home() {
  // Custom hooks
  const { data, loading, error, fetchData } = useFetchOnClick()

  const message = {
    text: 'Ciao',
    from: 'React',
  }

  // * RENDER
  return (
    <>
      <header className='pt-20'></header>

      <main
        className='w-full h-full flex 
    justify-center items-center flex-col'
      >
        <h1 className='text-4xl font-bold mb-10'>Home</h1>

        {/* Images */}
        <div>
          <img src={image} alt='react' />
        </div>

        {/* Style object */}
        <Card>
          <Hello />
        </Card>

        {/* Class Components */}
        <Card>
          <Counter initialValue={1} />
        </Card>

        {/* useState prev values */}
        <Card>
          <Car />
        </Card>

        {/* Context */}
        <Card>
          <UserProvider>
            <User />
          </UserProvider>
        </Card>

        {/* useRef */}
        <Card>
          <Focus />
        </Card>

        {/* Spread Operator as Prop */}
        <Card>
          <Greet {...message} />
        </Card>
        {/* same as <Greet text={message.text} from={message.from} /> */}

        {/* Custom hooks and custom style component that takes children */}
        <Card>
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
        </Card>

        {/* OffCanvas */}
        <Card>
          <OffCanvas />
        </Card>

        {/* Counter useReducer */}
        <Card>
          <CounterUseReducer />
        </Card>

        {/* Counter useCallback */}
        <Card>
          <CounterUseCallback />
        </Card>

        {/* Counter useMemo */}
        <Card>
          <CounterUseMemo />
        </Card>

        {/* Counter Memo */}
        <Card>
          <CounterMemo />
        </Card>

        {/* Id */}
        <Card>
          <Id />
        </Card>

        {/* Dialog */}
        <Card>
          <Dialog />
        </Card>

        {/* HOC - High Order Components */}
        <Card>
          <HOC />
        </Card>

        {/* createPortal method */}
        <Portal />

        {/* List */}
        <Card>
          <List />
        </Card>

        {/* Autocomplete */}
        <Card>
          <Autocomplete />
        </Card>

        {/* List with Custom Hook */}
        <Card>
          <ListWithCustomHook />
        </Card>

        {/* useTransition Hook */}
        <Card>
          <UseTransitionHook />
        </Card>

        {/* Lazy Loading */}
        <Card>
          <LazyLoading />
        </Card>

        {/* React Router Blog */}
        <Card>
          <Link to='/blog' className='text-cyan-400'>
            Go To → React Router Blog
          </Link>
        </Card>

        {/* Secret Route */}
        <Card>
          <Link to='/secret' className='text-cyan-400'>
            Go To → Secret Route
          </Link>
        </Card>

        {/* Zustand Counter */}
        <Card>
          <ZustandCounter />
        </Card>

        {/* Star Rating */}
        <Card>
          <StarRating />
        </Card>
      </main>

      <footer className='pb-20'></footer>
    </>
  )
}
