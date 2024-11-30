import React, { useEffect, useState } from 'react';

const UseProduct = () => {
    const [products,setProducts] = useState()
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('https://branding-device-server.vercel.app/brand')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setLoader(false)
        })
    },[])
    return [products,loader]
};

export default UseProduct;