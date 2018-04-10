import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Header = styled.header`
  background: red;
`;

export default () => (
  <Header>
    <div>header</div>
    <Link href="/index"><a>index</a></Link>
  </Header>
)