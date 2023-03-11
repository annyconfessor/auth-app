import Login from "./authentication/Login"
import Profile from "./authentication/profile"
import Register from "./authentication/Register"
import { GlobalStyles } from "./GlobalStyles"

export const App = () => {
  return(
    <>
      <GlobalStyles />
      <Profile />
    </>
  )
}

