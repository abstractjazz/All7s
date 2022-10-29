import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId:'1gxdk71x',
    dataset: 'production'
    apiVersion: '2022-10-29',
    useCdn: true,
    token: ''
})