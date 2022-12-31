import './index.css'

const LocationCards = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-location">
      <div className="location-card-container">
        <img className="image" src={imageUrl} alt={name} />
        <div className="heading-description-container">
          <h1 className="heading">{name}</h1>
          <p className="paragraph">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default LocationCards
