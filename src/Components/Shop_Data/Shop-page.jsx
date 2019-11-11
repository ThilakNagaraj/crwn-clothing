import React from 'react';
import  SHOP_DATA from './Shop-Data';
import { keyToTestName } from 'jest-snapshot/build/utils';
import CollectionPreview from '../Collection_Preview//collection-previwe.component'


class ShopPage extends React.Component {
    constructor(props){
        super(props);
    
    this.state ={ 
        Collections : SHOP_DATA
        }
    };

    render(){
        const {Collections} = this.state;
        return(
            <div className='ShopPage'>
            {
              Collections.map(({id, ...otherCollectionProps }) => (
                    < CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
               
            </div>
        )
    }
}

export default ShopPage;
