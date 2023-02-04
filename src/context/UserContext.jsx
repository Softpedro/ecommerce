import axios from "axios"
import { createContext, useEffect, useMemo, useState } from "react"
import { API_URL } from "../constants/env"
import { token } from "../helpers/auth"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    if (token) {
      axios
        .get(`${API_URL}/private/user`, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then((resp) => {
          setUserData(() => resp.data.data)
        })
        .catch((err) => {
          console.log(err, 'error')
        })
    }
  }, [])

  // const memoizedUserData = useMemo(() => userData, [userData]);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }