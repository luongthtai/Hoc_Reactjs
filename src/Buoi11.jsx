// re-render = React chạy lại function component
/**
    - state thay đổi
    - props thay đổi
    - component cha re-render

    Child khoong thay đổi gì vẫn bị re-render -> tốn hiệu năng

    // Tối ưu hiệu năng trang
    - React.memo -> so sánh props cũ và props mới
        props cũ !== props mới => re-render
    - useCallback -> giữ nguyên function cũ
        2 tham số:
            - callback function
            - dependency -> 
    - useMemo -> ghi nhows (cache) kết qủa của 1 phép tính
        - deps không thay đổi -> dùng lại kết quả cũ
        - deps thay đổi -> tính toán lại phép tính
 */

import React, { useCallback, useMemo, useState } from "react"

export default function Buoi11() {
    const [count, setCount] = useState(0)

    const handleCount = useCallback(() => {
        setCount(count + 1) // count = 0
    }, [])

    // const handleCount = () => {
    //     setCount(count + 1) // count = 0
    // }

    return (
        <div style={{ marginLeft: "50px" }}>
            <span>{count}</span>
            <ChildComponent count={count} />

            <button onClick={handleCount}>Buoi 11 Click</button>
        </div>
    )
}


const ChildComponent = React.memo(({ count }) => {
    console.log("Children re-render");

    function wait(seconds) {
        var start = new Date();
        // Empty while loop blocks the main thread until the time passes
        while ((new Date() - start) / 1000 < seconds);
        return 1
    }

    const total = useMemo(() => {
        wait(2) // thực thi phép tính
        return 184874384 // trả về kết quả của phép tính
    }, [])

    return (
        <div>
            Children {total}
            <button>Click</button>
        </div>
    )
})