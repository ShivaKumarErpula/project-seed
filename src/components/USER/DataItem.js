import './DataItem.css'

const DataItem = props => {
    const {details} = props
    const {imgUrl, title} = details
    return (
        <li className="card-item">
            <img className="card-image" src={imgUrl} alt={title} />
            <h1 className="card-title">{title}</h1>
        </li>
    )
}

export default DataItem
