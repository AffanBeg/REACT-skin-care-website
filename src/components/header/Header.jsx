import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from "react-icons/cg";
const Header = () => {
  return (
    <div className = {css.container}>
    <div className = {css.logo}>
        <img src= {Logo} alt="" />
        <span>shop</span>
    </div>
    <div className= {css.right}>
        <div className={css.menu}>
            <ul className= {css.menu}></ul>
                <li>Collections</li>
                <li>Brands</li>
                <li>New</li>
                <li>Soles</li>
                <li>ENG</li>
        </div>
        <input type="text" className= {css.search} placeholder="Search here"/>
        <CgShoppingBag className={css.cart}/>
    </div>
</div>
  )
}

export default Header