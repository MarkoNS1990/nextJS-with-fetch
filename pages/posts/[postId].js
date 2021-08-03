import axios from 'axios'

function Post({post}) {
    return (
        <div>
            {post.title}
        </div>
    )
}

export default Post

export async function getStaticPaths(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

    const paths = res.data.map(post=>{
        return {
            params: {
                postId:`${post.id}`
            }
        }
    })
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    console.log(res.data)

    return {
        props : {
            post : res.data
        }
    }

}