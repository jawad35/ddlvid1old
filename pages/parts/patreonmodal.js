"use strict";
import { Router, Link} from '../../i18n';

const PatreonModal = ({ setIsAccountModal, MainFunc }) => {
  const Navigator = Router
    return (
        <div id="emailForm">
        <span className='close' onClick={() => {
            setIsAccountModal(false)
        }}>x</span>
        <div className="container checkoutwrapper">
            <h3>Support Us</h3>
            <div className='checkout-price'>
              {/* Join DDLVID <span className='check-price-label'>$3.99</span>/ */}
              <p>
              Ddlvid needs your help to keep running and developing.
              </p>
              <p>
              Please take a look at our patreon and support us there.The benefits are awesome!
              </p>
            </div>
           <div>
            <div className='account_modal_buttons'>
              <button onClick={() => MainFunc()}>
                Continue
              </button>
              <button onClick={() => window.open("https://www.patreon.com/ddlvid", "__blank")}>
                Support Us
              </button>
            </div>
           </div>
        </div>
    </div>
    )
}



export default (PatreonModal)