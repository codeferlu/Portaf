import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

const IconComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faJs} /> {/* JavaScript icon */}
      <FontAwesomeIcon icon={faHtml5} /> {/* HTML icon */}
      <FontAwesomeIcon icon={faCss3} /> {/* CSS icon */}
      <FontAwesomeIcon icon={faReact} /> {/* React icon */}
      <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
    </div>
  );
};

export default IconComponent;
