import React from "react"
import Link from 'next/link'
import Header from '../components/header'

export default () => (
  <div>
    <Header/>
    <div>About Page</div>
    <Link href="/index"><a>index</a></Link>
  </div>
)