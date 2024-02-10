export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='bg-gray-950 border border-slate-700 p-4 rounded-lg shadow-lg w-80 mx-auto my-4 text-white text-center
  '
    >
      {children}
    </div>
  )
}
