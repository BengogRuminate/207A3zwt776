import React from 'react';
import './css/About.css'

const CompanyDesc = () => {
    return(
        <>
        <div className='flexbox'>
            <div className='compDesc1'>
                We are a charity society that cares for the welfare
                abandoned pets. We take in pets that are unwanted by
                owners without any questions asked, and then list up
                these pets for adoption to any paw-rent that want 
                them. 
            </div><hr/>
            <div className='compDesc2'>
                <img src="abandonedimg.jpg" alt="Abandoned Pet" style={{width:'100%'}}/>
            </div>
            <div className='compDesc3'>
                <img src="adoptedimg.jpg" alt="Adopted Pet" style={{width:'100%'}}/>
            </div><hr/>
            <div className='compDesc4'>
                We strongly believe in our work to connect abandoned pets
                with both new and experienced paw-rents. We also believe that
                not every match is 100% right, so we do allow a return 
                with no questions asked.
            </div>
        </div>
        
        </>
    )
}

export default CompanyDesc