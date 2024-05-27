import React from 'react'
import Header from './Header/Header'
import style from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Body from '../Home/Mainbody/Body'



export default function Home() {
  return (
    <div className={style.Maincontainer}>
     
      <Header/>
      <Navbar/>
      <Search/>
      <Body />
   
    </div>
  )
}
