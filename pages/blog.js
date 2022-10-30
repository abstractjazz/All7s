import AllPosts from '../components/Blog'
import { client } from '../lib/client'

export default function Blog(allPosts) {
    return (
     
      <div className="">
        {console.log(allPosts.posts)}
       <AllPosts postInfo={allPosts.posts}/>
      </div>
    )
  }
  
  export const getServerSideProps = async () => {
      const query = '*[_type == "post"]'
      const posts = await client.fetch(query)
      return {
        props: {
          allPosts
        }
      }
    }
     

      
    
   
