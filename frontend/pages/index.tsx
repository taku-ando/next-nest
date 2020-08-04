import Link from 'next/link'
import Layout from '../components/Layout'
import axios from "axios"
import { useState } from 'react'

const IndexPage = () => {
  const [screenName, setScreenName] = useState("")
  const [password, setPassword] = useState("")

  const register = async () => {

    const res = await axios.post('/api/users/register', {
      screenName,
      password
    }).catch(e => {
      console.log (e)
    })
    console.log(res)
  }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      screenName
      <input type="text" value={screenName} onChange={(e) => setScreenName(e.target.value)} />
      password
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>ユーザー登録</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
