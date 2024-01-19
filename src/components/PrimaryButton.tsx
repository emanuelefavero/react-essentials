interface Prop {
  children: React.ReactNode
  onClick?: () => void
}

export default function PrimaryButton({ children, onClick }: Prop) {
  return (
    <button
      onClick={onClick}
      className='bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4'
    >
      {children}
    </button>
  )
}
