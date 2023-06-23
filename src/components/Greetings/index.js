import './index.css'

const Greetings = props => {
  const {eachImage} = props
  const {imageUrl, imageAltText} = eachImage
  return <img src={imageUrl} alt={imageAltText} className="image" />
}

export default Greetings
