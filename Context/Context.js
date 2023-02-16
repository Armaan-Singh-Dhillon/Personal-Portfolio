import { createContext, useState } from 'react';
import { useEffect } from 'react';

export const MyContext = createContext();


export default function Context({ children }) {
    
    const initialState = { token: null };

    const [state, setState] = useState(initialState);
    useEffect(() => {
           setState({...state,token:localStorage.getItem('token')})
           
    }, []);

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
}

