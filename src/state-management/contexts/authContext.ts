import { Dispatch } from "react"
import { AuthAction } from "../reducers/loginReducer"
import React from "react"

export interface AuthContextType{
    user: string,
    dispatch: Dispatch<AuthAction>
}
const AuthContext = React.createContext<AuthContextType>({}as AuthContextType)

export default AuthContext