export interface SectionData {
  path: string;
  label: string;
}

export const SECTIONS: SectionData[] = [
  { path: '/', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

export type Bubble = {
  id: number
  x: number
  y: number
}

export const BUBBLE_LIFETIME = 1000 // ms, keep in sync with CSS animation

export type GengarProps = {
  onReady?: () => void
}

export type ProjectItem = {
  name: string
  role: string
  period: string
  description: string
  tech: string[]
  links?: { label: string; href: string }[]
  image: string
}

export type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  tags: string[]
  image: string
}