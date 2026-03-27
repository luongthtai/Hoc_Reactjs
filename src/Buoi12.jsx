// Styling trong React
/**
    1. Css thuần (Css file) 
        Tạo file css và import vào component
        Ưu điểm: 
            - dễ hiểu
            - giống với HTML/CSS
        Nhược điểm:
            - dễ bị trùng class
            - khó phát triển project
    
    2. Inline style
        Nhược điểm:
            - Không hỗ trợ hover, focus, ..., media query
            - code khó đọc

    3. Css module
        Ưu diểm:
            - class được scope riêng -> không bị trùng
    
    4. Dùng thư viện Css-in-Js
        Cú pháp: 
            const Button = styled.button`
                color: black;
                background: red;
            `
        
        Ưu điểm: 
            - Viết css ngay trong js
        Nhược điểm:
            - Thêm thư viện
            - có thể ảnh hưởng đến hiệu năng trang web

    5. Tailwind css
        Ưu điểm:
          - viết nhanh
          - không cần viết css
          - dễ scale
        Nhược điểm:
          - class dài
          - khó đọc với người mới

        => Project nhanh, Ui tùy biến
    
    6. UI Framework
       - thư viện giao diện có sẵn

        + Bootstrap
        + Material Ui
        + Ant Design

        Nhược điểm:
          - khó sửa chữa
          - code khó đọc
 */
export default function Buoi12() {
    // console.log(styles)
    return (
        <div className="">
            <h3>Danh mục</h3>

            <div className="grid grid-cols-12 border-t border-red-500 before:flex before:text-red-500 before:font-semibold">
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
                <CategoryItem name="Thoi trang nam" />
                <CategoryItem name="Dien thoai" />
            </div>
        </div>
    )
}

const CategoryItem = ({ image, name, id }) => {
    return (
        <div className="border-b border-r border-red-500 flex flex-col gap-1 items-center p-2.5">
            <p>Image</p>
            <h5>{name}</h5>
        </div>
    )
}