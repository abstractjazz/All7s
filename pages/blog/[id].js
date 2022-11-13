import { client } from '../../lib/client'
import post from '../../sanity_staksite/schemas/post'
import { PortableText } from '@portabletext/react'
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'

const bodyImageComponent = {
    types: {
        image :({value}) => <img src={value.imageUrl}/>
    }

}

const Details = ({title, body, mainImage, image}) => {
    const [imageUrl, setImageUrl] = useState ('');
   

    useEffect(() => {
    const imgBuilder = imageUrlBuilder({
        projectId: '1gxdk71x',
        dataset: 'production'
         })

    setImageUrl(imgBuilder.image(mainImage))
    }, [mainImage]);

    return (
       <div className="flex flex-col items-center mt-28">
        <h1 className="text-7xl font-Headline">{title}</h1>
        {imageUrl && <img className="" src={imageUrl}/>}
        <p className="w-3/4 text-xl mt-28 px-12"></p>
        <PortableText value={body} components={bodyImageComponent}/>
        {console.log(bodyImageComponent)}
      
     </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.id
    // console.log(pageSlug)
 
    if (!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url= `https://1gxdk71x.api.sanity.io/v1/data/query/production?query=${query}`
    const result = await fetch(url).then(res => res.json());
    const post = result.result[0]
    // console.log(post)
   

    if (!post) {
        return {
            notFound: true
        }

    } else {
        return {
        props: {
            title: post.title,
            body: post.body,
            mainImage: post.mainImage,  
            image: post.body
            }
        }
    }
}



export default Details;

// export const dataCheck = async () => {
//   const res = await fetch('https://1gxdk71x.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%0A')
//     const data = await res.json()
//     console.log(data)
// }
// dataCheck()

// export const getStaticPaths = async () => {
//   const res = await fetch('https://1gxdk71x.api.sanity.io/v2021-10-21/data/query/production?query={query}')
//   const data = await res.json()
//   console.log(data)
//   // const paths = data.map(post=>{
//   // //  return {
//   // //   params: {id: post.title.split(" ").join("-")}
//   // //  }
//   // })
  
//   return {
//     // paths,
//     // fallback: false 
//   }
// }


// export const getStaticProps = async (context) => {
// const id = context.params.id;
// const res = await fetch('https://1gxdk71x.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%0A/' + id)
// const data = await res.json()
// return {
//   props: {
//    post: data 
//     }
//   }
// }