import type { ExperienceItem } from '../../types'
import './Experience.css'

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Frontend Development Intern',
    company: 'Aptent Digital',
    location: 'Sydney, Australia',
    period: 'Dec 2024 – Jun 2025',
    bullets: [
      "Maintained Bondi Icebergs Club's reservation systems and analytics dashboards.",
      'Worked with QR-based tracking, data visualisation, and performance optimisations.',
    ],
    tags: ['Web Dev', 'JavaScript', 'Dart', 'Flutter', 'Firebase'],
    image: '/images/experience/aptent.jpeg',
  },
  {
    role: 'iOS Software Developer',
    company: 'Mii (Health Tech Startup)',
    location: 'Sydney, Australia',
    period: 'Jun 2024 – Nov 2024',
    bullets: [
      'Developed iOS features for medication tracking and secure sign-up.',
      'Integrated Firebase Auth and Firestore with a clean MVVM architecture.',
    ],
    tags: ['iOS Dev', 'Swift', 'Firebase', 'MVVM', 'SwiftUI'],
    image: '/images/experience/mii.jpeg',
  },
  {
    role: 'Student Software Developer',
    company: 'Ampol',
    location: 'Sydney, Australia',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Developed and prototyped OCR-powered tooling to help digitise and streamline document workflows for internal teams.',
      'Collaborated with engineers and stakeholders to refine requirements, iterate on features, and present technical findings to non-technical audiences.',
    ],
    tags: ['Python', 'Java', 'OCR', 'Computer Vision', 'Prototyping', 'Stakeholder Collaboration'],
    image: '/images/experience/ampol.jpeg',
  },
  {
    role: 'Junior Project Portfolio Analyst',
    company: 'Hummingbird Solutions',
    location: 'Sydney, Australia',
    period: 'Jan 2023 – Jun 2023',
    bullets: [
      'Supported project portfolio tracking and reporting for enterprise clients.',
      'Collaborated with stakeholders to keep delivery on schedule.',
    ],
    tags: ['Project Management', 'Stakeholders', 'Communication'],
    image: '/images/experience/hummingbirdsolutions.jpeg',
  },
]

const ExperienceCard = ({
  role,
  company,
  location,
  period,
  bullets,
  tags,
  image,
}: ExperienceItem) => (
  <div className="experience-card">
    <div className="experience-media">
      <img src={image} alt={`${company} logo`} />
    </div>

    <div className="experience-body">
      <div className="experience-header">
        <h3>{role}</h3>
        <span className="experience-company">{company}</span>
      </div>
      <div className="experience-meta">
        <span>{location}</span>
        <span>•</span>
        <span>{period}</span>
      </div>
      <ul className="experience-bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="experience-tags">
        {tags.map((tag) => (
          <span key={tag} className="experience-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export const Experience = () => (
  <div className="section-content">
    <h1>My Experience</h1>
    <div className="experience-list">
      {EXPERIENCES.map((exp) => (
        <ExperienceCard key={exp.role + exp.company} {...exp} />
      ))}
    </div>
  </div>
)
