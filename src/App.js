import React,{Fragment} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Header,Container,Footer,Detail,ProductCategories,ProductHowItWorks,Personal,Question} from './components/'

export default function App(){
  return(
    <Fragment>
      <CssBaseline/>
      <Header/>
      <Container/>
      <Detail/>
      <ProductCategories/>
      <ProductHowItWorks/>
      <Personal/>
      <Question/>
      <Footer/>
    </Fragment>
  )
}
