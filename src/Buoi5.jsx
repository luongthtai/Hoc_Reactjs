import { useState } from "react"
// const [count, setCount] = useState(0)

// const hanldeClick = () => {
//     setCount(count + 1)
// }

// useEffect(() => {
//     // setCount(count + 1)
// }, [count])

// console.log(count)

// // useEffect(() => {
// //     console.log("re-render")
// // }, [])

// return (
//     <div>
//         <p>Count: {count}</p>
//         <button onClick={hanldeClick}>Click</button>
//     </div>
// )

/**
    username, password, age: không được để trống
    password: phải có 1 nhất là 8 kí tự
    age: số 
*/

export default function Buoi5() {
    // data form inputs
    const [dataForm, setDataForm] = useState({
        username: "",
        password: "",
        age: 0,
        confirmPassword: ""
    })

    // Lưu trữ tất cả error
    const [dataError, setDataError] = useState({
        username: "",
        password: "",
        age: "",
        confirmPassword: ""
    })

    // xử lý lúc user nhập dữ liệu
    const handleChange = (e) => {
        const { name, value } = e.target

        setDataForm({
            ...dataForm,
            [name]: value.trim()
        })
    }

    // xử lý lúc user submit
    const handleSubmit = (e) => {
        e.preventDefault()

        let errors = {
            username: "",
            password: "",
            age: "",
            confirmPassword: ""
        }

        errors = {
            username: dataForm.username.length ? "" : "Bắt buộc",
            password: dataForm.password.length ? "" : "Bắt buộc",
            confirmPassword: dataForm.confirmPassword.length ? "" : "Bắt buộc",
            age: dataForm.age.length ? "" : "Bắt buộc",
        }

        // Check password
        if (dataForm.password !== "" && dataForm.password.length < 8) errors = { ...errors, password: "Password phải có ít nhất 8 kí tự !!!" }

        // check confirm pass
        if ((dataForm.confirmPassword !== "") && (dataForm.confirmPassword != dataForm.password)) errors = { ...errors, confirmPassword: "Confirm password không trùng với password" }

        // Check number bằng cách ép kiểu 
        if ((Number(dataForm.age)).toString() === "NaN") errors = { ...errors, age: "Age phải là số" }

        // Set data error
        setDataError(errors)

        // Các trường trong errors phải rỗng thì mới console.log
        if (!errors.age && !errors.password && !errors.username && !errors.confirmPassword) console.log(dataForm)
    }

    return (
        <form style={{ maxWidth: "576px", width: "100%", margin: "0 auto", display: "grid", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label>User name</label>
                <input type="text" name="username" onChange={handleChange} />
                {dataError.username && <p style={{ color: "red" }}>{dataError.username}</p>}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} />
                {dataError.password && <p style={{ color: "red" }}>{dataError.password}</p>}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} />
                {dataError.confirmPassword && <p style={{ color: "red" }}>{dataError.confirmPassword}</p>}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label>Age</label>
                <input type="text" name="age" onChange={handleChange} />
                {dataError.age && <p style={{ color: "red" }}>{dataError.age}</p>}
            </div>

            <button onClick={handleSubmit}>Gửi</button>
        </form>
    )
}
