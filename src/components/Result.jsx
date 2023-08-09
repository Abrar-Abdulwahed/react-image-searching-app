import PropTypes from 'prop-types';
const Result = ({images}) => {
  return (
    <div className="image-grid">
        {images.map(image => (
            <div key={image.id} className="image-div">
                <img src={image.webformatURL} alt={image.tags} />
                <p>{ image.tags}</p>
            </div>
        ))}
    </div>
  )
}

export default Result

Result.propTypes = {
    images: PropTypes.array,
};