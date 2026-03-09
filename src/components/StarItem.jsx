export default function StarItem(props) {
    const {
        starNumber,
        handleClick,
        currentStar
    } = props

    return (
        <button onClick={() => handleClick(starNumber)} style={{ color: currentStar >= starNumber ? "yellow" : currentStar === 0 ? "black" : "gray" }}>{starNumber}</button>
    )
}
// rfc: react func component