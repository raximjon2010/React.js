import { createContext, useReducer, useState } from 'react';
export const StudentList = createContext();
import { Reduce, initial } from './reduce';

const Context = ({children}) => {

const [Data, dispatch] = useReducer(Reduce,initial)
    return (
        <StudentList.Provider value={[Data,dispatch]}>
            {children}
        </StudentList.Provider>
    )
}
export default Context;