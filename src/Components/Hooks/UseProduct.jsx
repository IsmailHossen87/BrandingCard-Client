import React, { useEffect, useState } from 'react';

const UseProduct = () => {
    const [products,setProducts] = useState()
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/brand')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setLoader(false)
        })
    },[])
    return [products,loader]
};

export default UseProduct;