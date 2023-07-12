import React from 'react'
import './Gallery.css'
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';


import 'lightgallery/css/lightgallery.css'
import LightGallery from 'lightgallery/react/Lightgallery.es5'


import i_1 from '../../imgs/gallery images/1.JPG'
import i_2 from '../../imgs/gallery images/2.JPG'
import i_3 from '../../imgs/gallery images/3.JPG'
import i_4 from '../../imgs/gallery images/4.JPG'
import i_5 from '../../imgs/gallery images/5.JPG'
import i_6 from '../../imgs/gallery images/6.JPG'
import i_7 from '../../imgs/gallery images/7.JPG'
import i_8 from '../../imgs/gallery images/8.JPG'
import i_9 from '../../imgs/gallery images/9.JPG'
import i_10 from '../../imgs/gallery images/10.JPG'
import i_11 from '../../imgs/gallery images/11.JPG'
import i_12 from '../../imgs/gallery images/12.JPG'
import i_13 from '../../imgs/gallery images/13.JPG'
import i_14 from '../../imgs/gallery images/14.JPG'
import i_15 from '../../imgs/gallery images/15.JPG'
import i_16 from '../../imgs/gallery images/16.JPG'
import i_17 from '../../imgs/gallery images/17.JPG'
import i_18 from '../../imgs/gallery images/18.JPG'
import i_19 from '../../imgs/gallery images/19.JPG'
import i_20 from '../../imgs/gallery images/20.JPG'
import i_21 from '../../imgs/gallery images/21.JPG'
import i_22 from '../../imgs/gallery images/22.JPG'
import i_23 from '../../imgs/gallery images/23.JPG'
import i_24 from '../../imgs/gallery images/24.JPG'







function Gallery() {

    const [img , setImg] = useState(false);

    function true_false() {
        img ? setImg(false) : setImg(true);
    }

    function add_class_preview(el) {
        true_false();
        document.querySelector('.g_prewiew img').src = el.target.src;
        console.log(el.target);
    }



  return (
    <div className='gallery_b'>
        <div className="banner gallery_banner">
        <h1>Gallery</h1>
        </div>
        <LightGallery speed={500} plugins={[]} className="glr">
            <img className='big' src={i_1} alt="" />
            <img src={i_2} alt="" />
            <img className='tall' src={i_3} alt="" />
            <img src={i_4} alt="" />
            <img src={i_5} alt="" />
            <img src={i_6} alt="" />
            <img className='tall' src={i_7} alt="" />
            <img src={i_8} alt="" />
            <img src={i_9} alt="" />
            <img className='wide' src={i_10} alt="" />
            <img src={i_11} alt="" />
            <img src={i_12} alt="" />
            <img src={i_13} alt="" />
            <img src={i_14} alt="" />
            <img className='wide' src={i_15} alt="" />
            <img src={i_16} alt="" />
            <img src={i_17} alt="" />
            <img src={i_18} alt="" />
            <img src={i_19} alt="" />
            <img className='wide' src={i_20} alt="" />
            <img className='big' src={i_21} alt="" />
            <img src={i_22} alt="" />
            <img src={i_23} alt="" />
            <img src={i_24} alt="" />
        </LightGallery>
    </div>
  )
}

export default Gallery
