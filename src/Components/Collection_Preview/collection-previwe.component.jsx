import React from 'react';
import './collection-preview.styles.scss';
import CollectionItems from '../Collection-item/Collection-item.component'

const CollectionPreview = ({ title, items }) => (
    <div className= 'collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {  
                // items.map(item => (
                //     <CollectionItems key={item.id}>{item.name}</div>

                // items.map(({id, otheritemsprops}) => (
                //     <CollectionItems key={id} {...otheritemsprops}/>

                // )) 


                items
                .filter((item,idx) => idx < 4)
                .map(({id, ...otheritemsprops}) => (
                    <CollectionItems key={id} {...otheritemsprops}/>
                ))
                    
            }

        </div>
    </div>
)

export default CollectionPreview;

