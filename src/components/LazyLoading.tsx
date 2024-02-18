import React, { useState, useEffect, useRef } from 'react'

const LazyComponent = React.lazy(() => import('./LazyComponent'))

export default function LazyLoading() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '-100px', // Loads the component when the user is within *px of the element. Adjust this value based on your needs.
        // TIP: By giving negative values, the component will load only before the user goes beyond the element (which is useful for animations)
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <>
      <h2>Lazy Loading</h2>
      <div ref={ref}>
        {isVisible && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </React.Suspense>
        )}
      </div>
    </>
  )
}
