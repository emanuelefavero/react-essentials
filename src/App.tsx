import './App.css'
import image from './assets/react.svg'
import Car from './components/Car'
import Counter from './components/Counter'

function App() {
  return (
    <main
      className='w-full h-full flex 
    justify-center items-center flex-col'
    >
      <h1 className='text-violet-200 text-3xl'>Hello</h1>

      {/* Images */}
      <img src={image} alt='react' />

      {/* Class Components */}
      <Counter initialValue={1} />

      {/* useState prev values */}
      <Car />
    </main>
  )
}

export default App
