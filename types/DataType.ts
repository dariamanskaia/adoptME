interface Shelter {
  image: string
  name: string
}

interface Hero {
  small: string
  large: string
}

interface Images {
  thumbnail: string
  hero: Hero
  gallery: string
}

interface DataType {
  _id: string
  name: string
  year: number
  description: string
  source: string
  shelter: Shelter
  images: Images
}

export default DataType
