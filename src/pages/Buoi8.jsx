// Prop drilling là việc truyền props qua nhiều component trung gian chỉ dể đưa dữ liệu đến components con ở sau bên dưới

import { useContext } from "react"
import CountProvider, { CountContext } from "../contexts/countContext"

//  Context API

// Context cho phép chia sẻ dữ liệu cho nhiều component mà không cần phải truyền props qua nhiều tầng
/**
    Flow:
        Provider
        |
        component con có thể truy cập trực tiếp 
 */

// Context API: cách để chia sẻ dữ liệu toàn cục giữa các component trong React

// Cách sử dụng
/**
    Có 3 bước:
        - tạo context
        - cung cấp dữ liệu bằng Provider
        - sử dụng dữ liệu bằng useContext
 */

export default function Buoi8() {
    // const counts = useContext(CountContext)

    // const { count, setCount } = counts

    // console.log(count)

    return (
        <>
            <TestFunc />
        </>
    )
}

const TestFunc = () => {
    const counts = useContext(CountContext)

    const { count, setCount } = counts

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <Text2 />
        </div>
    )
}

const Text2 = () => {
    const counts = useContext(CountContext)

    const { count, setCount } = counts

    return (
        <>
            text {count}
        </>
    )
}