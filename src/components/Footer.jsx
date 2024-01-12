import React from 'react';

function Footer() {
  return (
    <div className='footer-container'>
    <footer className="footer">
      <div className='footer-text'>
      &copy; {new Date().getFullYear()} Help My Lifts LLC. All Rights Reserved.
      <div className='nasm'>National Academy Of Sports Medicine Certified.</div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;