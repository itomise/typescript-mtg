export type EngineerType = {
  id: string
  name: string
  role: 'front-end' | 'back-end' | 'network' | 'device'
  language: string | string[]
}
