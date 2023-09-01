import React, { useState } from 'react';
import './gallery.scss';

function Gallery(props){

    const [image, setImage] = useState('https://feature.com/cdn/shop/products/Air-Jordan-1-Retro-High-OG-Craft-Skyline---Vivid-Orange-Black-Iced-Lilac-DX0054-805---03-23-23---Feature--JP-KN.jpg?v=1679767566&width=3072');
    const [selected, setSelected] = useState(0);
    const product = [
        "https://feature.com/cdn/shop/products/Air-Jordan-1-Retro-High-OG-Craft-Skyline---Vivid-Orange-Black-Iced-Lilac-DX0054-805---03-23-23---Feature--JP-KN.jpg?v=1679767566&width=3072",
        "https://feature.com/cdn/shop/products/Air-Jordan-1-Retro-High-OG-Craft-Skyline---Vivid-Orange-Black-Iced-Lilac-DX0054-805---03-23-23---Feature--JP-4.jpg?v=1679767566&width=3072",
        "https://feature.com/cdn/shop/products/Air-Jordan-1-Retro-High-OG-Craft-Skyline---Vivid-Orange-Black-Iced-Lilac-DX0054-805---03-23-23---Feature--JP-5.jpg?v=1679767566&width=3072",
        "https://feature.com/cdn/shop/products/Air-Jordan-1-Retro-High-OG-Craft-Skyline---Vivid-Orange-Black-Iced-Lilac-DX0054-805---03-23-23---Feature--JP-6.jpg?v=1679767566&width=3072",
        "https://feature.com/cdn/shop/products/Air-Jordan-1-Retro-High-OG-Craft-Skyline---Vivid-Orange-Black-Iced-Lilac-DX0054-805---03-23-23---Feature--JP-02.jpg?v=1679942444&width=3072"
    ];

    const handleClick = (idx, img) => {
        console.log("Image: ", img);
        console.log("Index: ", idx);
        setSelected(idx);
        setImage(img);
        console.log("Set Image: ", image);
    }

    const galleryNext = () => {
        if(selected < product.length - 1){
            setSelected(selected + 1);
            setImage(product[selected + 1]);
        }else{
            setSelected(0);
            setImage(product[0]);
        }
    }

    return(
        <div className="gallery">
            <div className="gallery--container">
                <div className="gallery--main">
                    <div className="gallery--image" style={{backgroundImage:`url(${image})`}}></div>
                    <div className="gallery--actions">
                        <div className="gallery-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 5L9 11.75L15.75 18.5" stroke="#010101" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="gallery-next" onClick={ () => { galleryNext() }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.625 5.15381L15.375 11.9038L8.625 18.6538" stroke="#010101" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="gallery--details">
                    {product.map((img, idx) => {
                        let thumb = (selected === idx) ? 'gallery--thumbnail selected' : 'gallery--thumbnail';
                        return(
                            <div className={thumb} key={idx} onClick={ () => handleClick(idx, img) }><img src={img} alt="" /></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery;