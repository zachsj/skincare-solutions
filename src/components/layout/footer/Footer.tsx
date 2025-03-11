import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="mailto: sjseomarketing@gmail.com" >
          Email Us
        </a>
      </p>
      <p>&copy; 2025 Skincare Solutions</p>
      <p className="disclaimer-text">Disclaimer </p>
      <span className="disclaimer-detail">
        The products mentioned on this website have worked well for me, but individual results may vary. Please perform a patch
        test before use and consult with a dermatologist if you have any concerns or pre-existing skin conditions.
      </span>
    </footer>
  )
}

export default Footer