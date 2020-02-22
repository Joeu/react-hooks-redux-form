import React from 'react';

const Footer = () => (
  <footer className="footer">
    <hr />
    <div>
      <i className="fa fa-github-alt" onClick={() => window.open('http://github.com/joeu')} />
      <i className="fa fa-linkedin" onClick={() => window.open('http://www.linkedin.com/in/joeumar-souza/')} />
    </div>
  </footer>
)

export default Footer;