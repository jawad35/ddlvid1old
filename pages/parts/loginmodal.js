"use strict";
import { Router, Link} from '../../i18n';

const LoginModal = ({ setIsAccountModal }) => {
  const Navigator = Router
    return (
        <div id="emailForm">
        <span className='close' onClick={() => setIsAccountModal(false)}>x</span>
        <div className="container checkoutwrapper">
            <h3>Account</h3>
            <div className='checkout-price'>
              {/* Join DDLVID <span className='check-price-label'>$3.99</span>/ */}
              You need an account to use DDlVid
            </div>
           <div>
            <div className='account_modal_buttons'>
            <Link href={'/login'}>
              <button>
                  <span style={{color:'white'}}>Login</span>
              </button>
              </Link>
              <Link href={'/signup'}>
              <button>
                  <span style={{color:'white'}}>Sign Up</span>
              </button>
              </Link>
            </div>
           </div>
        </div>
    </div>
    )
}



export default (LoginModal)