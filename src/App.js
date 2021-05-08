import React,{Fragment} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Header,Container,Footer,Detail,Category,Experience,Personal,Question} from './components/'

export default function App(){
  return(
    <Fragment>
      <CssBaseline/>
      <Header/>
      <Container/>
      <Detail/>
      <Category/>
      <Experience/>
      <Personal/>
      <Question/>
      <Footer/>
    </Fragment>
  )
}
