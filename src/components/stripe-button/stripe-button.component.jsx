import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HhI0oIk7N2b0xuKuEGn2KhrHtTyii733tQ90N76GusOmbImr0rG381YqPqhuxWpJR5DFH4H4DLxTXNCbacELAVt00LZxlLx0L';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
           label = 'Pay Now'
           name = 'CRWN Clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://sendeyo.com/up/d/f3eb2117da'
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;