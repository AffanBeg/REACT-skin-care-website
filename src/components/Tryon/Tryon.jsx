import React from 'react'
import css from './Tryon.module.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Tryon = () => {
  return (
    <div className={css.Tryon}>
      <div className={css.left}>
        <span>Virtual Try-On!</span>
        <span>Never buy the wrong shade again</span>
        <span>Try now</span>
        <img src= {Shade} alt="" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
        <ReactCompareImage leftImage={Before} 
        rightImage={After}/>
        </div>
      </div>
    </div>
  )
}

export default Tryon