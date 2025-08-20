import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container cols">
        <div className="meta">
          <div className="kicker">Preventive Health</div>
          <div>View-only prototype. No personal data collected.</div>
        </div>
        <ul>
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
          <li><a href="#" aria-label="GitHub">GitHub</a></li>
          <li><a href="#" aria-label="Terms of Service">Terms</a></li>
          <li><a href="#" aria-label="Privacy Policy">Privacy</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
