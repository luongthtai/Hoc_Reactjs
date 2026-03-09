export default function ProductList({ name, url }) {
    return (
        <div>
            <p>{name}</p>
            <img src={url} alt={name} />
        </div>
    )
}