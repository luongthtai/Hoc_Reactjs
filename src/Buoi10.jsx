// Lib: Redux

/**
    Redux nó là 1 công cụ uản lý state toàn ứng dụng, 
    - (useReducer + useContext) -> redux mạnh hơn và chuẩn hơn

    useState -> state nhỏ ( chỉ dùng trong 1 component )
    useReducer -> state phức tạp ( chỉ dùng trong 1 component )
    useContext -> chia sẻ state

    Redux -> quản lý state toàn app (chuẩn production)

    Provider hell

    Redux có 3 thành phần chính:
        - Store (kho dữ liệu) -> kho hàng
        - Action (yêu cầu)    -> đơn yêu cầu
        - Reducer (xử lý)     -> nhân viên xử lý

    slice = reducer + action

    Flow Redux
    user -> hành động
    |
    dipatch(action)
    |
    reducer xử lý
    |
    state mới lưu vào store
    |
    UI cập nhập
*/

export default function Buoi10() {
    return (
        <div>Buoi10</div>
    )
}
