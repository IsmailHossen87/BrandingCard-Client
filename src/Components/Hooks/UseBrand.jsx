import React, { useEffect, useState } from 'react';

const UseBrand = () => {
    const [brands,setBrands] = useState()
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('brand.json')
        .then(res => res.json())
        .then(data =>{
            setBrands(data)
            setLoader(false)
        })
    },[])
    return[brands,loader]
};

export default UseBrand;