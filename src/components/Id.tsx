import { useId } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Id() {
  // 3 WAYS OF GENERATING UNIQUE IDS

  // * react built in hook, useId
  // NOTE: Do not use this in key prop
  const id = useId()

  // * custom function that I wrote
  const generateId = () => {
    const timestamp = new Date().getTime()
    const randomPart = Math.floor(Math.random() * 1000)
    return `id_${timestamp}_${randomPart}`
  }
  const myId = generateId()

  // * uuid 3rd party library
  const uuid = uuidv4()

  // ---
  const h3Style = 'text-2xl font-bold'

  return (
    <div>
      <h2>IDs:</h2>
      <h3 className={`${h3Style} text-cyan-400`}>{id}</h3>
      <h3 className={`${h3Style} text-emerald-400`}>{myId}</h3>
      <h3 className={`${h3Style} text-pink-400`}>{uuid}</h3>
    </div>
  )
}
