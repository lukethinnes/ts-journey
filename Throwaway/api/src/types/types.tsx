export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Pointer 
  location: Pointer 
  image: string
  episode: string[]
  url: string
  created: string
}

interface Pointer {
  name: string
  url: string
}
