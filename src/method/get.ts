import { animals } from '../data/animal'
import { Engineers } from '../data/user'

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

export const getEngineersLanguage = (): string[] => {
  return Engineers.reduce((previous: string[], user) => {
    if (typeof user.language === 'string') {
      previous.push(user.language)
    } else {
      user.language.forEach((lan) => {
        previous.push(lan)
      })
    }
    return previous
  }, [])
}
