import React from 'react';
import MenuItem from '../menu-item/menu-items.components'
import './directory.styles.scss'


class Directory extends React.Component {
    state = {
        sections : [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                size: 'large',
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                size: 'large',
                linkUrl: 'shop/mens'
              }
        ]
    }
    render() {
        return (
            <div className='directory-menu'>
                {/* {this.state.sections.map(({title, imageUrl, id, size})=> (
                    <MenuItem key={id} imageurl={imageUrl} title={title} size={size}/> 
                    Below line are same as above once, we have spread the list of props bec the Prop name is same as value*/}

                    {this.state.sections.map(({ id, ...OtherSectionProps})=> (
                        <MenuItem key={id} {...OtherSectionProps}/>

                )) 
                }
            </div>
        )

    }
}

    export default Directory ;