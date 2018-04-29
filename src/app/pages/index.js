import React from "react"
import Link from 'next/link'
import styled from 'styled-components'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../components/header'

try { injectTapEventPlugin(); } catch (e) {  }
const muiTheme = getMuiTheme({ userAgent: false });

export default () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Header />
    <div>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
      <Link href="/about"><a>about</a></Link>
    </div>
  </MuiThemeProvider>
)
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;