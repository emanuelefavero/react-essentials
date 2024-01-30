/* eslint-disable @typescript-eslint/no-explicit-any */

const withBackgroundColor = (Component: any, color: string) => {
  return (props: any) => (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <Component {...props} />
    </div>
  )
}

export default withBackgroundColor
