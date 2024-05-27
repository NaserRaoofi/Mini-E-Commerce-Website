import React from 'react'
import Header from '../Home/Header/Header'
import style from './ProductPage.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Body from './MainBody/Body'



export default function ProductPage() {

  return (
    <div className={style.individualProduct}>
      <Header/>
      <Navbar/>
      <Search/>
      <Body/>

    </div>
  )
}
