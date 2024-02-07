import { createPortal } from 'react-dom'

// createPortal is a method that allows you to render children outside the react root element

export default function Portal() {
  const portalRoot = document.getElementById('portal-root')

  // TIP: Remember to create a div with id="portal-root" in public/index.html

  return (
    <div>
      {portalRoot &&
        createPortal(
          <h2>This child is placed outside the react root element</h2>,
          // The second argument is the DOM element where the children will be placed
          portalRoot

          // TIP: You can also put the content directly in the body tag with document.body
        )}
    </div>
  )
}
