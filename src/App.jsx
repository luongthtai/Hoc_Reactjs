import CategoryItem from './components/CategoryItem'
import TitleSection from './components/TitleSection'

import './App.css'

// Props

function App() {
  return (
    <>
      {/* Tiêu đề */}
      <TitleSection />

      {/* Những danh mục */}
      <div className='categories'>
        {/* Danh mục con */}
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </>
  )
}

export default App
