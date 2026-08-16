import React from 'react';
import { FaFileContract } from 'react-icons/fa';
import './Rules.css';

function Rules() {
  return (
    <div className="rules-wrapper">
      <div className="legal-link-container">
        <FaFileContract size={20} className="legal-icon" />
        <a 
          href="https://drive.google.com/file/d/1Zlkz5PfZ1JVERV0YiNGL6AMl6H9H6PcV/view" 
          target="_blank"   
          rel="noreferrer"
          className="legal-link"
        >
          Правила посещения зала
        </a>
      </div>
    </div>
  );
}

export default Rules;
