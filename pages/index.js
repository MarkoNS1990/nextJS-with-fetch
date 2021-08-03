import axios from 'axios'
import User from '../components/user'
import Link from 'next/link'

export default function Home({users}) {
  return (
    <>
      <h1>Users:</h1>
      {users.map(user=><User key={user.id} user={user}/>)}
      <h2>Link to <Link href='posts'><a>Posts</a></Link></h2>
    </>
    
  )
}

 export const getStaticProps = async()=>{
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
 
  console.log(res.data)

  return {
    props:{
      users:res.data
    }
  }

}