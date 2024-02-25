import React from 'react'
import css from './Middle.module.css'
import MiddleImage from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
const Middle = () => {

  return (
    <div className={css.container}>

        {/*left side*/}
        <div className={css.h_sides}>
            <span className={css.text1}> skin protection cream</span>

            <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>Trendy Collections</span>
            </div>
        </div>

        {/*middle side hero image*/}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={MiddleImage} alt="" width={600}/>
            <div className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best offer for newcomers</span>

                    <div>
                        <BsArrowRight/>
                    </div>
                </div>

            </div>
        </div>

        {/*right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.4b</span>
                <span>Monthly Traffic</span>
            </div>

            <div className={css.customers}>
                <span>750m</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>

  )
}

export default Middle