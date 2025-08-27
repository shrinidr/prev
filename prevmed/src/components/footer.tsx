import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container cols">
        <div className="meta">
          <div className="kicker">Preventivity </div>
          <div className='patanai'>Our website services and content is for <br/>informational purposes only. Preventivity does <br/> not provide medical advice, diagnosis, or treatment. </div>
        </div>
        <ul className='ulla'>
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
          <li><a href="#" aria-label="Terms of Service">Terms</a></li>
          <li><a href="#" aria-label="Privacy Policy">Privacy</a></li>
        </ul>
        <div className='bulla'> Contact us: <a href="mailto:contact@preventivity.org"><b>contact@preventivity.org</b></a></div>
      </div>
    </footer>
  )
}

export default Footer
