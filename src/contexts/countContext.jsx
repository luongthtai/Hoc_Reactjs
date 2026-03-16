import { createContext, useState } from "react";

// createContext() -> tạo context mới
export const CountContext = createContext(null)

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(1)

    return (
        <CountContext.Provider
            value={{ count, setCount }}
        >
            {children}
        </CountContext.Provider>
    )
}

export default CountProvider
