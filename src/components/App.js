import React from 'react';
import Navigation from './Navigation';
import { ReactComponent as Logo} from './images/nav-logo.svg';
import IosStoreIcon from './images/ios-store.svg';
import PlayStoreIcon from './images/play-store.svg';
import PhoneImage from './images/phone.png';
import LoanImage from './images/cash.png';
import CollatImage from './images/mortgage.png';
import LowestImage from './images/tax.png';
import ArvoCalc from './images/arvo-calc.png';
import phone2 from './images/phone2.png';
import BrownSkin from './images/brownskin.png';
import JustandProg from './images/justandprog.png';
import SmallCircles from './images/smallcircles.png';
import TweeterLogo from './images/tweeter.png';
import FbLogo from './images/facebook.png';
import IgLogo from './images/instagram.png';
import LinkedinLogo from './images/linkedin.png';
import Crc from './images/crc.png';
import FirstCentral from './images/firstcentral.png';
import PayStack from './images/paystack.png';
import './styling/Index.css';
import './styling/Nav.css';
import './styling/Main.css';

const App = () => {
  return (
    <>
    <div class="bg-circle"></div>
    <div className="main-container">
      <Navigation />
      <div>
        <div>
          <div className="flex wrap">
            <div className="sec1">
              <p className="xl-text centered">The best way to invest your money and get quick access to loan.</p>
              <p className="sm-text">With ArvoFinance you can easily get a quick loan within an hour without collaterals and delays, you can also invest your money through our peer-to-peer platform.</p>
              <p className="dnld-text">Download and use on the go!</p>
              <div className="dnld-links">
                <i><img src={PlayStoreIcon} alt="download android app"/></i>
                <i><img src={IosStoreIcon} alt="download ios app"/></i>
              </div>
            </div>
            <div className="sec2">
              <div className="phone-image">
                <img src={PhoneImage} alt="phone"/>
              </div>            
            </div>
          </div>
          <div className="sec3">
            <div className="sec3-card">
              <div className="flex flex-jc-ct"><i><img src={LoanImage} alt='quick loans' /></i></div>
              <p className="align-center dom-color twenty-four">Quick Loans</p>
              <div className="card-detail align-center eighteen">At Arvo, we've developed our app to be as straightforward and convenient as possible. There is no need to take the time to travel to a location</div>
            </div>
            <div className="sec3-card">
              <div className="flex flex-jc-ct"><i><img src={CollatImage} alt='quick loans' /></i></div>
              <p className="align-center dom-color twenty-four">No Collaterals</p>
              <div className="card-detail align-center eighteen">Through a novelty structured loan, we are able to minise the risk associated with consumer loans in Nigeria. Making loans available for.</div>
            </div>
            <div className="sec3-card">
              <div className="flex flex-jc-ct"><i><img src={LowestImage} alt='quick loans' /></i></div>
              <p className="align-center dom-color twenty-four">Guaranteed Lowest Interest Rates</p>
              <div className="card-detail align-center eighteen">As a reasonable fintech company we design our products to ensure our customers get the lowest interest rates in the market.</div>
            </div>
          </div>
          <div className="sec4">
            <div className="sec4-a">
              <p className="md-text align-center white-text">INVEST WITH ARVO FINANCE</p>
              <p className="lg-text align-center white-text">
                The best way to invest your money and get quick access to loans.
              </p>
            </div>
            <div className="sec4-b flex flex-jc-ct flex-ai-ct">
              <div className="line"></div>
              <div className="divider-block fifteen flex">
                <div className="dom-color bold">ARVO LOANS</div>
                <div className="dom-color bold">P2P INVESTMENT</div>
              </div>
              <div className="line"></div>
            </div>
          </div>
          <div className="sec5 flex wrap flex-jc-ct">
            <div className="sec5-a">
              <div className="sec5-a1 flex flex-jc-ct"><img src={ArvoCalc} alt="arvo" /></div> 
              <p className="sec5-a2 align-center white-text">Arvo Loan</p>
              <div className="sec5-a3 twenty white-text centered">With ArvoFinance you can easily get a quick loan within an hour without collaterals and delays, you can also invest your money through our peer-to-peer platform.</div>
              <div className="sec5-a4 flex flex-jc-ct">
                <button className="accent-bg-1 dom-color h50 r5 no-border non-trans-btn bold">GET STARTED</button>
              </div>
            </div >
            <div className="sec5-b">
              <img src={phone2} alt="phone" />
            </div>
          </div>
          <div className="sec6">
            <div className="quat quat1"></div>
            <div className="quat quat2"></div>
            <div className="sec6-card centered">
              <div className="flex flex-jc-ct">
                <img src={BrownSkin} alt="avatar" />
              </div>
              <p className="dom-color twenty-two align-center">Best Investment App Ever</p>
              <p className="lg-text align-center eighteen">With ArvoFinance, you can easily get a quick loan within an hour without collateral and delays, you can also invest.</p>
              <div className="flex flex-jc-ct"><img src={SmallCircles} alt="carousel tabs" /></div>
            </div>
            <div className="sec6-items flex wrap flex-jc-ct">
              <div className="sec6-item"><img src={FirstCentral} alt="icon" /></div>
              <div className="sec6-item"><img src={Crc} alt="icon" /></div>
              <div className="sec6-item"><img src={JustandProg} alt="icon" /></div>
              <div className="sec6-item"><img src={PayStack} alt="icon" /></div>
            </div>
          </div>
          <div className="sec7 accent-bg-3">
            <div className="sec7-a twelvecol">
              <p className="sec7-a1 dom-color align-center thirty">Ready to get started?</p>
              <p className="lg-text align-center eighteen">With ArvoFinance, you can easily get a quick loan within an hour without collateral and delays, you can also invest.</p>
              <div className="flex flex-jc-ct">
                <button className="accent-bg-1 dom-color h50 r5 no-border non-trans-btn bold">CREATE AN ACCOUNT</button>
              </div>
            </div>
            <div className="sec7-b flex flex-jc-ct wrap">
              <div className="sec7-b-col"><div className="nav-logo pointer"><Logo /></div></div>
              <div className="sec7-b-col">
                <p className="twenty-two dom-color">Solutions</p>
                <ul className="list-none no-padding">
                  <li className="eighteen lh-32">FEDPAY</li>
                  <li className="eighteen lh-32">Online Application</li>
                  <li className="eighteen lh-32">Financial Planning</li>
                  <li className="eighteen lh-32">Collateral Free Loan</li>
                  <li className="eighteen lh-32">Affordable Interest Rates</li>
                </ul>
              </div>
              <div className="sec7-b-col">
                <p className="twenty-two dom-color">Resources</p>
                <ul className="list-none no-padding">
                  <li className="eighteen lh-32">Blog</li>
                  <li className="eighteen lh-32">Privacy Policy</li>
                  <li className="eighteen lh-32">Terms of service</li>
                  <li className="eighteen lh-32">Press</li>
                  <li className="eighteen lh-32">Contact Us</li>
                  <li className="eighteen lh-32">Fraud Alerts</li>
                </ul>
              </div>
              <div className="sec7-b-col">
                <p className="twenty-two dom-color">Support</p>
                <ul className="list-none no-padding">
                  <li className="eighteen lh-32">+2348021810034</li>
                  <li className="eighteen lh-32">hello@arvofinance.com</li>
                  <li className="eighteen lh-32">ombudsman</li>
                  <br />
                  <li className="socials">
                    <img src={TweeterLogo} alt="tweeter" />
                    <img src={FbLogo} alt="facebook" />
                    <img src={IgLogo} alt="instagram" />
                    <img src={LinkedinLogo} alt="linkedin" />
                  </li>
                </ul>
              </div>
            </div>
            <hr className="dom-color" />
            <div className="sec7-c">
              <div>
                <p>Download our App Now</p>
                <div className="sec7-c2">
                  <i><img src={PlayStoreIcon} alt="download android app" /></i>
                  <i><img src={IosStoreIcon} alt="download ios app" /></i>
                </div>
              </div>
              <p>© Arvo Finance 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
