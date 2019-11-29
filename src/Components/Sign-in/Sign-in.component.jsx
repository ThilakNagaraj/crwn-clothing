import React from 'react';
import FormInput from '../../Components/form-input/form-input.component'
import CustomButton from '../Custome-Button/Custome-Button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'


import './Sign-in.style.scss';

class SingIn extends React.Component {
    state = {
            email: '',
            password: ''
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState ({ email:'', password:''})
    };

    handleChange = event => {
        const{value, name} = event.target;
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className = 'sign-in'>
                <h2>I alredy have an account</h2>
                <span>Sign in with your email amd password</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput
                        name="email" 
                        type="email"  
                        value={this.state.email} 
                        handleChange={this.handleChange}  
                        lable='email' 
                        required
                        />
                    

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        lable='password' 
                        required
                        />
                        
                        <div className='buttons'>
                            <CustomButton type="submit"> Sign in </CustomButton>
                            <CustomButton onClick= {signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                        </div>
                       
                </form>

            </div>
        )
    }
}

export default SingIn;