interface Props {
  onClick: () => void
}

// TIP: This component takes a function as a prop (onClick) so it can be used as a callback, calling the function on the parent component

export default function Button({ onClick }: Props) {
  return <button onClick={onClick}>Button</button>
}
