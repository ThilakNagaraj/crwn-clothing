import React from 'react';
import './homepage.style.scss'
import Directory from '../../Components/directory/directory.components'

const HomePage = (props) => {
    console.log(props);
    
  return (  
     <div className='homepage'>
        <Directory/>
    </div>
    )

}

export default HomePage;