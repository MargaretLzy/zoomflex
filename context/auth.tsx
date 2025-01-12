import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import * as jose from "jose"
import { CLIENT_ID } from "../lib/auth"

type TUser = {
  email: string
  username: string
}

type TAuthContext = {
  currentUser?: TUser
  setCurrentUser: (user: any) => void
}

const AuthContext = React.createContext<TAuthContext>({
  setCurrentUser: React.Dispatch<React.SetStateAction<TUser | undefined>>,
})

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<TUser>()
  const router = useRouter()

  useEffect(() => {
    if (window?.google) {
      const { google } = window
      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (res) => {
          if (!res.credential) {
            return
          }
          const { credential } = res
          console.log(credential)
          const payload = jose.decodeJwt(credential)
          const { email, name } = payload
          console.log(payload)
          setCurrentUser({
            username: name,
            email,
          } as TUser)
          router.push(
            {
              pathname: "/",
              query: {
                hint: `Welcome back, ${name}`,
                type: "success",
              },
            },
            "/"
          )
        },
      })
      // google.accounts.id.prompt()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser: (res) => {
          console.log(res)
          setCurrentUser(res)
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
