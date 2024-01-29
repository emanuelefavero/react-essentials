import { useState } from 'react'
import './Dialog.css'

export default function DialogComponent() {
  const [showDialog, setShowDialog] = useState(false)

  // ---
  // * STYLES
  const openDialogButtonStyle =
    'bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 uppercase'
  const closeDialogButtonStyle =
    'bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded'

  // ---
  // * JSX
  return (
    <>
      <button
        onClick={() => setShowDialog(true)}
        className={openDialogButtonStyle}
      >
        Open Dialog
      </button>

      {showDialog && (
        // * DIALOG
        <div className='overlay' onClick={() => setShowDialog(false)}>
          <dialog>
            Hello
            <button
              onClick={() => {
                setShowDialog(false)
              }}
              className={closeDialogButtonStyle}
            >
              Close
            </button>
          </dialog>
        </div>
      )}
    </>
  )
}
