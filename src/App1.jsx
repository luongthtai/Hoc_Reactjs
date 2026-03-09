/**
    Hook: là các hàm đặc biệt của React 
        - state
        - lifecycle 
        - logic của React
 */

import { useEffect, useState } from "react"
import App from "./App"

// lifecycle: vòng đời của component
// Toàn bọ các giai đoạn mà một component trong REact trải qua từ khi được tạo ra cho tới khi xóa khỏi giao diện 
// 3 giai đoạn chính:
// - Mount (Component được tạo)
/**
    khi web load:
    React sẽ:
    Tạo component
    |
    Render ui
    |
    Hiển thị lên màn hình
 */


// - Update (Component cập nhật)
/**
    - state thay đổi
    - prop thay đổi
 */

/**
    state thay đổi
    |
    React render lại component
    |
    Ui cập nhật
 */


// - Unmount (Component bị xóa)

// useEffect: 
/**
    Cú pháp: 
    useEffect(() => {
        code

        return () => {
            code    
        }
    }, dependency)
 */

export default function App1() {
    // const [count, setCount] = useState(0)
    // const handleNext = () => {
    //     setCount(count + 1)
    // }

    // useEffect(() => {
    //     console.log("effect")
    // }, [count])

    // return (
    //     <div>
    //         <span>{count}</span>
    //         <button onClick={handleNext}>Next</button>
    //         {/* {count >= 1 || <App />} */}
    //     </div>
    // )
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            fetch("https://api.thecatapi.com/v1/images/search?limit=10")
                .then(res => res.json())
                .then(cats => setData(cats))
                .finally(() => setIsLoading(false))
        } catch (error) {
            setError(error)
        }
    }, [])

    if (error) return <p>{error}</p>

    if (isLoading) return <p>Loading....</p>

    return (
        <div>
            {
                data.length === 0 ? <p>Không có dữ liệu</p> :
                    data.map(cat => <CatItem key={cat.id} {...cat} />)
            }
        </div>
    )
}

const CatItem = ({ id, url, width, height }) => {
    return (
        <div>
            <img src={url} alt={height} style={{ width: "200px", height: "auto", display: "block" }} />
            <p>{width} - {height}</p>
        </div>
    )
}

/**
    Render lần đầu
    |
    useEffect chạy
    |
    click button
    |
    state thay đổi
    |
    component render lại
    |
    useEffect chạy lại
    |
    xóa component
    |
    callback func của return trong callback func của useEffect sẽ chạy
 */