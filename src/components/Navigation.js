import React, { useState } from 'react';
import { ReactComponent as CloseIcon} from './images/nav-close.svg';
import { ReactComponent as Logo} from './images/nav-logo.svg';
import { ReactComponent as MenuIcon} from './images/menu-icon.svg';

const Navigation = () => {
  const [nav, toggle] = useState('closed');

  const navState = nav === 'closed' ? 'off' : 'open';

  return (
    <div className={`nav-container ${nav}`}>
      <div className="nav-content">
        <div className="nav-control">
          <div className="nav-logo flex flex-ai-ct pointer"><Logo /></div>
          <div className="nav-cancel"
            onClick={() => nav === 'closed' ? toggle('open') : toggle('closed')}
          >
            {nav === 'closed' ? <MenuIcon /> : <CloseIcon />}
          </div>
        </div>
        <div className={`flex-cont ${navState}`}>
          <ul className="nav-items">
            <a href="/"><li className="nav-item">About Us</li></a>
            <a href="/"><li className="nav-item">How it Works</li></a>
            <a href="/"><li className="nav-item">Contact Us</li></a>
            <a href="/"><li className="nav-item">FAQs</li></a>
            <a href="/"><li className="nav-item">FEDPAY</li></a>
          </ul>
          <div className="nav-buttons">
            <button className="curvy-btn signin-btn h40">SIGN IN</button>
            <button className="curvy-btn download-btn">DOWNLOAD APP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
