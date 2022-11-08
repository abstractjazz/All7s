import { client } from '../../lib/client'

// export const dataCheck = async () => {
//   const res = await fetch('https://1gxdk71x.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%0A')
//     const data = await res.json()
//     console.log(data)
// }
// dataCheck()

// export const getStaticPaths = async () => {
//   const res = await fetch('https://1gxdk71x.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%0A')
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

const Details = ({}) => {
    return (
       <div className="flex flex-col items-center mt-28">
        <h1 className="text-7xl font-Headline">Blog post title body lives here</h1>
        <p className=" w-3/4 text-xl mt-28 px-12">Blog post body lives here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <br></br><br></br>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
        </p>
     </div>
    )
}

export default Details;
