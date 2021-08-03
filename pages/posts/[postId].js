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
    return {
        paths:[
            {
                params:{postId:'1'}
            },
            {
                params:{postId:'2'}
            },
            {
                params:{postId:'3'}
            },
        ],
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