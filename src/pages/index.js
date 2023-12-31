import * as React from "react"
import TopBar from "./components/TopBar"
import HeaderPicture from "./components/HeaderPicture"

import './index.css'
import MainArticle from "./components/MainArticle"
import Content from "./components/Content"
import MainLayout from "./components/MainLayout"
import Footer from "./components/Footer"

const IndexPage = () => {
  return (
    <MainLayout>
      <TopBar/>
      <HeaderPicture />
      <Content>
        <MainArticle/>
      </Content>
      <Footer/>
  
    </MainLayout>
  )
}

export default IndexPage

export const Head = () => <title>Girls and the Gang</title>
