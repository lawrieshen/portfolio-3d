import './Contact.css'

export const Contact = () => (
  <div className="section-content">
    <h1>Get In Touch</h1>
    <p>
      Feel free to reach out if you’d like to chat about projects, internships, works, or anything
      3D / iOS / web dev related. You can email me at{" "}
      <a href="mailto:lawrence.cw.shen@gmail.com" className="inline-link">
        lawrence.cw.shen@gmail.com
      </a>{" "}
      or find me on GitHub and LinkedIn below.
    </p>

    <div className="contact-list">
      <a
        href="https://github.com/lawrieshen"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <img src="/images/contact/github-mark.png" alt="GitHub" className="contact-icon" />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/lawrence-cw-shen/"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <img src="/images/contact/linkedin.webp" alt="LinkedIn" className="contact-icon" />
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
)
