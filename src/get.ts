import { animals } from './data'

export const getAnimalName = (
  id: number,
  isLowerCase?: boolean
): string | undefined => {
  const target = animals.find((animal) => animal.id === id)

  const targetName = target?.name

  if (isLowerCase) {
    return targetName?.toLowerCase()
  }

  if (!targetName) return undefined
  return targetName
}
