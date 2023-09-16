"use strict";

import PropTypes from 'prop-types';
import { Router, withTranslation } from '../i18n';
import Header from './parts/header';
import Footer from './parts/footer';
import AD2HS from './parts/ad2hs';

const PaymentSuccess = ({ t }) => {
const Navigator = Router
    return (
      <div>
          <main>
            <Header/>
<div className='payment-succcess-card-wrapper'>
            <div className="payment-succcess-card">
        <div className='checmark-wrapper'>
          <i className="checkmark">✓</i>
        </div>
          <h1>Payment Success</h1> 
          <p>Thanks! We received your purchase request<br/> You can use our services now!</p>
          <button style={{marginTop:'40px'}} onClick={() =>  Navigator.push("/")}>Continue</button>
        </div>
         
        </div>
        </main>
        <Footer />
            
        <AD2HS />
      </div>
    )
}

PaymentSuccess.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('paymentsuccess')(PaymentSuccess)