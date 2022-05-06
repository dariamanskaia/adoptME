import styled from 'styled-components/macro'
import Macy from 'macy'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import queries from 'styles/breakpoints'
import data from 'data/data.json'
// import dataSource from 'data'
import GalleryCard from 'components/molecules/GalleryCard'
import { pageAnimation, galleryAnimation } from 'utils/animations'
import { resetSlider } from 'store/slidesSlice'

// const dev = true
// eslint-disable-next-line @typescript-eslint/ban-types

const Wrapper = styled(motion.main)`
  padding: 1.5rem;
  margin: 0 auto;
  max-width: var(--max-width);
  @media ${queries.tabletUp} {
    padding-top: 2.5rem;
  }
`

const List = styled(motion.ul)`
  margin: 0;

  img {
    width: 120%;
  }
`

const macyOptions = {
  container: '#macy-grid',
  trueOrder: true,
  mobileFirst: true,
  margin: 24,
  columns: 1,
  breakAt: {
    1000: 4,
    650: {
      margin: 40,
      columns: 2,
    },
  },
}
const Gallery = (): JSX.Element => {
  // The following lines are commited for a future test
  // Firts steps to connect to DB
  // const [data, setData] = useState([
  //   {
  //     _id: '',
  //     name: '',
  //     year: 0,
  //     description: '',
  //     source: '',
  //     shelter: {
  //       image: '',
  //       name: '',
  //     },
  //     images: {
  //       thumbnail: '',
  //       hero: {
  //         small: '',
  //         large: '',
  //       },
  //       gallery: '',
  //     },
  //   },
  // ])

  const dispatch = useDispatch()

  // const getDataFromAPI = async () => {
  //   if (dev) {
  //     setData(data)
  //   } else {
  //     const apiData = await dataSource()
  //     setData(apiData)
  //   }
  // }

  useEffect(() => {
    dispatch(resetSlider())
  }, [dispatch])

  useEffect(() => {
    new Macy(macyOptions)
    // getDataFromAPI()
  }, [])

  return (
    <Wrapper exit="exit" variants={pageAnimation} initial="hide" animate="show">
      <h1 className="sr-only">Main Gallery</h1>
      <List
        id="macy-grid"
        initial="hide"
        animate="show"
        variants={galleryAnimation}
      >
        {data.map((pets, index) => {
          return <GalleryCard {...pets} id={index} key={index} />
        })}
      </List>
    </Wrapper>
  )
}

export default Gallery
