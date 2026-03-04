import { useState } from 'react';
import './App.css';

// Props và State
// Hook -> useState()

// State: là một trí nhớ nội bộ của 1 component. Nó là một đối tượng (hoặc biến) dùng để lưu trữ những dữ liệu có thể thay đổi
// trong suốt vòng đời của component

// re-render

function App() {
  // const [count, setCount] = useState(0);

  // const handleCountPlus = () => {
  //   setCount(count + 1)
  // }

  // const handleCountMinus = () => {
  //   if (count <= 0) return
  //   setCount(count - 1)
  // }

  // const [showPassword, setShowPassword] = useState(false)
  // const handleShowPassword = () => {
  //   setShowPassword(!showPassword)
  // }
  const [value, setValue] = useState("")

  const limit = 100

  const handleChange = (event) => {
    if (limit - value.length <= 0) return
    setValue(event.target.value)
  }

  const handleSubmit = () => {
    console.log(value)
  }

  return (
    <>
      {/* <input
        value={value}
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
      /> */}
      {/* <button onClick={handleShowPassword}>{showPassword ? "Ẩn" : "Hiện"}</button> */}

      <textarea
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Số kí tự còn lại là: {limit - value.length}</p>
    </>
  )
}

export default App
