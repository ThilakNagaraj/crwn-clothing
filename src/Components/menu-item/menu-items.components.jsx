import React from 'react';
import './menu-items.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageurl, size,history,linkUrl, match}) => (
    
(
    <div className={`${size} menu-item`} 
        onClick={ () => history.push(`${match.url}${linkUrl}`)}>
               
        <div className='background-image' style={{backgroundImage: `url(${imageurl})`}} ></div>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
               
            </div>
               )
                
)


export default withRouter(MenuItem);
//withRouter is a Function where we have to pass the component to get back super power componten .. 
// to access history and location and Match history props
