import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hello from '../../components/Hello'

describe('Hello component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Hello />)
    const helloElement = getByText(/Hello/i)
    expect(helloElement).toBeInTheDocument()
  })

  it('has correct styles', () => {
    const { getByText } = render(<Hello />)
    const helloElement = getByText(/Hello/i)

    // Check for inline styles
    expect(helloElement).toHaveStyle(`color: rgb(192, 132, 252)`)
    expect(helloElement).toHaveStyle(`fontSize: 2rem`)

    // Check for Tailwind CSS classes
    expect(helloElement).toHaveClass('font-bold')
  })
})
