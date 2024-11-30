import React from 'react';
import UseBrand from '../Hooks/UseBrand';
import { useNavigate } from 'react-router-dom';

const BrandCards = () => {
    const [brands] = UseBrand()
    const navigate = useNavigate()
    const handleClick =(brandName) =>{
        navigate(`addCart?branditem=${brandName}`)
    }

    return (
        <div>
            <h3 className='text-2xl text-center my-5  font-bold'>BrandCards All data</h3>
            <div  className='grid grid-cols-3 gap-6 '>
                {
                    brands?.map(brand => 
                        // parentDin
                        <div onClick={()=> handleClick(brand.brandName)} className='flex justify-between items-center border rounded-xl' key={brand.id}>
                            <div ><img className='h-[200px] rounded-md' src={brand.img} alt="" /></div>
                            <div className='text-xl font-bold'>{brand.brandName}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BrandCards;