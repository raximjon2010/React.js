import { createContext, useReducer } from "react";
import { initial,Param2 } from "./reduce";

export const Student = createContext()

const StudentProvider = ({children}) => {
    const [data, dispatch] = useReducer(Param2, initial)
    return (
        <Student.Provider value={[data, dispatch]}>
            {children}
        </Student.Provider>
    )
}
export default StudentProvider