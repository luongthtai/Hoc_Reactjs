import { useParams } from "react-router-dom"

export default function CommentsProduct() {
    const { id } = useParams()

    return (
        <div>CommentsProduct {id}</div>
    )
}
