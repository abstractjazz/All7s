import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    try {
      // Create Checkout Sessions from body params.

      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types:['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {allowed_countries: ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CW', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF',]},
        shipping_options: [
            {shipping_rate: 'shr_1MCyrXKz69mUHYoDaik2Q9zA'},
            {shipping_rate: 'shr_1MCyurKz69mUHYoDd5AYtLUg'}
        ],
        line_items: req.body.map((item) => {
            const img = item.image[0].asset._ref;
            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/1gxdk71x/production/').replace('-webp','.webp','-jpg','.jpg','-png','.png');
            
            console.log('IMAGE', newImage)
            return {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: item.name,
                    images: [newImage],
                  },
                  unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
        }}),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

     const session = await stripe.checkout.sessions.create(params);
     console.log('SESSIONID', session.id)
     res.status(200).json(session);
    // res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
 
}

