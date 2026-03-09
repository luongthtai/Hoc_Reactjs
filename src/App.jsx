import { useState } from 'react';
import './App.css';

import StarItem from './components/StarItem';
import CardItem from './components/CardItem';

// Props và State
// Hook -> useState()

// State: là dữ liệu nội bộ của component và dữ liệu này có thể thay đổi theo thời gian
// Khi mà state thay dổi thì React sẽ tự độc re-render lại component

// re-render

// Props: (properties): là dữ liệu dược truyền từ commponent cha xuống component con
// Props sinh ra dể component có thể giao tiếp được với nhau
// Quy tắc quan trọng: Chỉ đọc và không sửa chữa (read-only)

// Conditional Rendering: hiểu thị giao diện tùy theo điều kiện

const students = [
  {
    id: 1,
    name: "Hoang Thai",
    age: 18
  },
  {
    id: 2,
    name: "Nhat Trung",
    age: 16
  },
  {
    id: 3,
    name: "Ha Trieu",
    age: 17
  },
  {
    id: 4,
    name: "Hoang Long",
    age: 17.5
  },
]

const categories = [
  {
    url: "",
    title: "Thoi trang nam"
  },
  {
    url: "",
    title: "Dien thoai & phu kien"
  },
]

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
  // const [value, setValue] = useState("")

  // const limit = 100

  // const handleChange = (event) => {
  //   if (limit - value.length <= 0) return
  //   setValue(event.target.value)
  // }

  // const handleSubmit = () => {
  //   console.log(value)
  // }

  // const [currentTab, setCurrentTab] = useState(1)

  // const handleClick = (tab) => {
  //   setCurrentTab(tab)
  // }

  // const [currentStar, setCurrentStar] = useState(0)
  // const tabs = 5

  // const [isLoading, setIsLoading] = useState(false)

  // const handleClick = (star) => {
  //   setCurrentStar(star)
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }

  const [isLoading, setIsLoading] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsSubmit(true)
      setIsLoading(false)
    }, 5000)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {/* <input
        value={value}
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
      /> */}
      {/* <button onClick={handleShowPassword}>{showPassword ? "Ẩn" : "Hiện"}</button> */}

      {/* <textarea
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Số kí tự còn lại là: {limit - value.length}</p> */}

      {/* <div>
        <button onClick={(e) => handleClick(1)} style={{ color: currentTab === 1 ? "red" : "black" }}>Mô tả</button>
        <button onClick={(e) => handleClick(2)} style={{ color: currentTab === 2 ? "red" : "black" }}>Đánh giá</button>
        <button onClick={(e) => handleClick(3)} style={{ color: currentTab === 3 ? "red" : "black" }}>Bảo hành</button>
      </div>

      <div>
        {currentTab === 1 && "Nội dung của mô tả"}
        {currentTab === 2 && "Nội dung của Đánh giá"}
        {currentTab === 3 && "Nội dung của Bảo hành"}
      </div> */}

      <div>

        {/* <StarItem starNumber={1} currentStar={currentStar} handleClick={handleClick} />
        <StarItem starNumber={2} currentStar={currentStar} handleClick={handleClick} />
        <StarItem starNumber={3} currentStar={currentStar} handleClick={handleClick} />
        <StarItem starNumber={4} currentStar={currentStar} handleClick={handleClick} />
        <StarItem starNumber={5} currentStar={currentStar} handleClick={handleClick} /> */}

        {
          // Array.from({ length: tabs }).map((_, index) => <StarItem key={index} starNumber={index + 1} currentStar={currentStar} handleClick={handleClick} />)
        }

        {/* <button onClick={handleSubmit}>Gửi</button>
        {isSubmit && <p>Đã gửi thành công</p>} */}
        <div style={{ display: "flex", gap: "20px" }}>
          {
            students.length === 0
              ?
              <p>Hiện không có học viên nào</p>
              :
              students.map((item, index) => <CardItem name={item.name} age={item.age} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
