import Button from './Button'
import withBackgroundColor from './withBackgroundColor'

// * High Order Components (HOC)
// A HOC is a function that takes a component as an argument and returns a new component

const ButtonWithRedBackground = withBackgroundColor(Button, 'red')
const ButtonWithBlueBackground = withBackgroundColor(Button, 'blue')

export default function HOC() {
  return (
    <>
      <h2>High Order Component</h2>
      <ButtonWithRedBackground onClick={() => console.log('clicked')} />
      <ButtonWithBlueBackground onClick={() => console.log('clicked')} />
    </>
  )
}
