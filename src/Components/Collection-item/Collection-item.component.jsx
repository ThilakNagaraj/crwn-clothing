import React from 'react';

import './Collection-item.styles.scss';
import CollectionPreview from '../Collection_Preview/collection-previwe.component';

const CollectionItems =  ({id,name,price,imageUrl}) => (
    <div className='collection-item'>
        <div 
           className='image'
           style={{
               backgroundImage:`url(${imageUrl})`
           }}
            />
               <div className='collectionfooter'>
                   <span className='name'>{name}</span>
                   <span className='price'>{price}</span>
               </div>

       

    </div>
)

export default CollectionItems;