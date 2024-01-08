/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, createContext } from 'react'

const UserContext = createContext({
  user: '',
  setUser: (_user: string) => {},

  // TIP: By prefixing the variable with an underscore, you can avoid the no-unused-vars warning
})

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState('John')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
