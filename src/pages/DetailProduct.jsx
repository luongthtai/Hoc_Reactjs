// hook
// useParams

// axios

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function DetailProduct() {
    const { id } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        // const fetchApi = async (id) => {
        //     const response = await fetch(`api/${id}`)
        //     const data = await response.json()

        //     setData(data)
        // }

        // fetchApi(id)

        // fetch().then().catch().finally()
    }, [id])

    return (
        <>
            <div>DetailProduct {id}</div>
            <Link to="/products/20">20</Link>
        </>
    )
}
