import './App.css'
import image from './assets/react.svg'

function App() {
  return (
    <main
      className='w-full h-full flex 
    justify-center items-center flex-col'
    >
      <h1 className='text-violet-200 text-3xl'>Hello</h1>
      <img src={image} alt='react' />
    </main>
  )
}

export default App
