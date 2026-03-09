import './App.css';

import ProductList from './components/ProductList';

import './components/CategoryItem.css';
import ProductListCss from './components/ProductList.module.css';
import { useEffect } from 'react';

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

const data = [
  {
    id: 1,
    name: "Thời Trang Nam",
    url: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w320_nl.webp"
  },
  {
    id: 2,
    name: "Điện Thoại & Phụ Kiện",
    url: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w320_nl.webp"
  },
  {
    id: 3,
    name: "Thiết Bị Điện Tử",
    url: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5@resize_w320_nl.webp"
  },
  {
    id: 4,
    name: "Máy Tính & Laptop",
    url: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc425b77d8449999d@resize_w320_nl.webp"
  },
  {
    id: 5,
    name: "Máy Ảnh & Máy Quay Phim",
    url: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w320_nl.webp"
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

  // const [isLoading, setIsLoading] = useState(false)
  // const [isSubmit, setIsSubmit] = useState(false)

  // const handleSubmit = () => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsSubmit(true)
  //     setIsLoading(false)
  //   }, 5000)
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }

  useEffect(() => {

    return () => {
      console.log("App clear")
    }
  }, [])

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

      {/* <div> */}
      {/* </div> */}

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

      {/* <img src='https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w320_nl.webp' />

        <div style={{ display: "flex", gap: "20px" }}>
          {
            students.length === 0
              ?
              <p>Hiện không có học viên nào</p>
              :
              students.map((item, index) => <CardItem name={item.name} age={item.age} />)
          }
        </div> */}

      <h3 className={ProductListCss.h3}>Danh mục</h3>

      <div style={ProductListCss}>
        {
          data.length === 0 ? <p>Không có dữ liệu</p> :
            data.map((item, index) => <ProductList name={item.name} url={item.url} />)
        }
      </div>
    </div>
  )
}

export default App
