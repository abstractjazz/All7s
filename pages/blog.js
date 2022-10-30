import AllPosts from '../components/Blog'
import { client } from '../lib/client'

export default function Blog(allPosts) {
    return (
     
      <div className="">
       <AllPosts postInfo = {allPosts.allPosts}/>
      </div>
    )
  }
  
  export const getServerSideProps = async () => {
      const query = '*[_type == "post"]'
      const allPosts = await client.fetch(query)
      return {
        props: {
          allPosts
        }
      }
    }
     

      
    
   
