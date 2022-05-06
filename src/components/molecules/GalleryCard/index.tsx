import { Link } from 'react-router-dom'
import { Pets } from 'models/pets'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

import { setCurrentSlide } from 'store/slidesSlice'
import { captionAnimation } from 'utils/animations'
import { cardAnimation } from 'utils/animations'
import { Caption, Figure } from './GalleryCard.styles'

const GalleryCard: React.FC<Pets> = ({
  id,
  name,
  images,
  shelter,
}): JSX.Element => {
  const dispatch = useDispatch()
  return (
    <motion.li variants={cardAnimation}>
      <Link
        to="/slideshow"
        onClick={() => dispatch(setCurrentSlide(id ? id : 0))}
      >
        <Figure>
          <img src={images.thumbnail} alt="" />
          <Caption variants={captionAnimation}>
            <h2>{name}</h2>
            <p>{shelter.name}</p>
          </Caption>
        </Figure>
      </Link>
    </motion.li>
  )
}

export default GalleryCard
