"use strict";
import { useContext } from 'react';
import { Router, Link} from '../../i18n';
import { UserContext } from '../../Context';

const CheckOutModal = ({MainFunc, setIsModalOpen, priceId}) => {
  const Navigator = Router
  const [state, setState] = useContext(UserContext);

    const CreateStripeSession = async () => {
        const { data: response } = await Axios.post(
          "",
          {
            priceId,
          }
        );
        Navigator.push(response.url)
        // window.location.href = response.url;
      };
    return (
        <div id="emailForm">
          <span className='close' onClick={() => setIsModalOpen(false)}>x</span>
          <div className="container checkoutwrapper">
              <h3>Checkout</h3>
              <div className='checkout-price'>
                Join DDLVID <span className='check-price-label'>$3.99</span>/mo
              </div>
             <div>
              <p>Here's what Included</p>
              <div className='chechout-items'>
                <div className='c-item'>
                  - Unlimited High Quality video Downloads
                </div>
                <div className='c-item'>
                  - Unlimited Url Shortens
                </div>
                <div className='c-item'>
                  - Safest Online Community, No Malware or advertise
                </div>
                <div className='c-item'>
                  - Discord Access
                </div>
                <div className='c-item'>
                  - Meme Club Membership
                </div>
                <div className='c-item'>
                  - Twitter and Telegram Bot Usage
                </div>
              </div>
             {/* <p>
                  <input
                      type="email"
                      placeholder="Enter your email address"
                      // onChange={(e) => setEmail(e.target.value)}
                  />
              </p> */}
              <strong style={{marginTop:'40px'}}>Note:</strong>
              <div>You must have to login before checkout <Link  href="/login"><a style={{color:'#0093E9'}}>Login!</a></Link></div>
              <p style={{textAlign: 'center'}}>
                  <button onClick={() => {
                    if (state?.data) {
                      if (state?.data && subscriptionData?.length === 0) {
                        CreateStripeSession()
                      } else {
                        MainFunc()
                      }
                    } else {
                      Navigator.push('/login')
                    }
                  }}>Checkout</button>
              </p>
             </div>
          </div>
      </div>
    )
}



export default (CheckOutModal)