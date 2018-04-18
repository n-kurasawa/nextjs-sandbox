import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = styled.header`
  flex-grow: 1
`;

export default () => (
  <Header>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <Link href="/index"><a>index</a></Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Header>
)