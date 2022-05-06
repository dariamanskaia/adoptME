export interface Pets {
  id?: number
  name: string
  year: number
  description: string
  source: string
  shelter: Shelter
  images: Images
}

export interface Shelter {
  image: string
  name: string
}

export interface Images {
  thumbnail: string
  hero: Hero
  gallery: string
}

export interface Hero {
  small: string
  large: string
}
