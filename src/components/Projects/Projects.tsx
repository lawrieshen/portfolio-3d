import type { ProjectItem } from '../../types'
import './Projects.css'

const PROJECTS: ProjectItem[] = [
  {
    name: 'KEEN – Social Bucketlist App',
    role: 'Founding iOS Developer',
    period: '2025',
    description:
      'An iOS app that helps friends turn “we should do this sometime” into actual shared plans with events, bucketlists, and location-based suggestions.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'Google Places API'],
    image: '/images/projects/keen.png',
    links: [
      { label: 'Coming Soon', href: ''}
    ]
  },
  {
    name: 'TEMOS Blender Add-on',
    role: 'Text-to-Motion Integration',
    period: '2025',
    description:
      'A Blender add-on that connects the TEMOS text-to-motion model directly into Blender, letting artists generate 3D character motion from text prompts inside their scenes.',
    tech: ['Python', 'Blender', 'Text-to-Motion', 'SMPL', 'Deep Learning'],
    links: [
      { label: 'GitHub', href: 'https://github.com/lawrieshen/TEMOS-Blender-Addon' },
    ],
    image: '/images/projects/temos.png',
  },
  {
    name: '3D Personal Portfolio',
    role: '3D Web Experience',
    period: '2025',
    description:
      'A playful 3D personal portfolio built with React Three Fiber and GSAP, featuring a fully animated Gengar model and a glassmorphism UI for navigation.',
    tech: ['TypeScript', 'React', 'React Three Fiber', 'Three.js', 'GSAP'],
    links: [
      { label: 'Personal Website', href: '' },
      { label: 'GitHub', href: 'https://github.com/lawrieshen/portfolio-3d' },
    ],
    image: '/images/projects/personal.png',
  },
  {
    name: 'COMP4415 3D Authoring Website',
    role: 'Solo Developer & Technical Artist',
    period: '2025',
    description:
      'An interactive 3D storytelling website built for COMP4415 Multimedia Design & Authoring, combining custom animation, camera transitions, and responsive UI to explore 3D authoring on the web.',
    tech: ['TypeScript', 'React', 'React Three Fiber', 'Three.js', 'GSAP'],
    links: [
      { label: 'Course Project', href: 'https://vercel.com/lawrenceshen1213-gmailcoms-projects/lawrieshen-comp4415' },
      { label: 'GitHub', href: 'https://github.com/lawrieshen/COMP4415-3D-Website' },
    ],
    image: '/images/projects/comp4415.png',
  },
]

const ProjectCard = ({
  name,
  role,
  period,
  description,
  tech,
  links,
  image,
}: ProjectItem) => (
  <div className="project-card">
    <div className="project-body">
      <div className="project-header">
        <h3>{name}</h3>
        <span className="project-role">{role}</span>
      </div>
      <div className="project-meta">
        <span>{period}</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tech">
        {tech.map((t) => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>
    </div>

    {(links && links.length > 0) || image ? (
      <div className="project-footer">
        {links && links.length > 0 && (
          <div className="project-links">
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {image && (
          <div className="project-media">
            <img src={image} alt={`${name} preview`} />
          </div>
        )}
      </div>
    ) : null}
  </div>
)

export const Projects = () => (
  <div className="section-content">
    <h1>My Projects</h1>
    <div className="project-list">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  </div>
)
