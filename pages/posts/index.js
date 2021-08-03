import axios from 'axios'
import Link from 'next/link'

function PostsList({posts}){
    
    return (
        <>
        <h2>List of posts</h2>
        <Link href='/'><a>Home</a></Link>
        {posts.map(post=>{
            return(
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                     <h2 >{post.id} {post.title}</h2>
                     </Link>
                    <hr/>
                </div>
                
                
            )
        })}
        </>
    )
}

export default PostsList;

export async function getStaticProps(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    
    return{
        props: {
            posts: res.data
        }
    }
}