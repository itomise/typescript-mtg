export type AnimalSize = 'large' | 'medium' | 'small'

export type AnimalType = {
  id: number
  size: AnimalSize
  name: string
  color: string
}

export const animals: AnimalType[] = [
  { id: 1, name: 'Tiger', size: 'large', color: 'yellow' },
  { id: 2, name: 'Cat', size: 'small', color: 'white' },
  { id: 3, name: 'Pig', size: 'medium', color: 'pink' },
]
