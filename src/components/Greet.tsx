interface Props {
  text: string
  from: string
}

const defaultText = 'Hello' // ? default value for text if the prop is not passed

export default function Greet({ text = defaultText, from }: Props) {
  return (
    <div>
      {text} from {from}
    </div>
  )
}
