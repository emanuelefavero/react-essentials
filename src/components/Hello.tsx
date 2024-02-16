// TIP: Instead of passing classNames and styles directly, you can assign them to variables and use them in the JSX
// NOTE: For dynamic data, you still need to use useState

export default function Hello() {
  const helloStyle = {
    color: 'rgb(192, 132, 252)',
    fontSize: '2rem',
  }

  const helloTailwindStyle = 'font-bold'

  return (
    <h1 data-testid='hello' className={helloTailwindStyle} style={helloStyle}>
      Hello
    </h1>
  )
}
