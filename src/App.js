import './App.css';
import { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank';
import SignIn from './components/signin/SignIn'
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg';
import detect from './detection-logic';


class App extends Component{
  constructor(){
    super()
    this.state = {
      imageUrl: '',
      boundingBoxes : [],
      route: 'signIn',
      signedIn: false
    }
  }

  onTextChange = (e) => {
    this.setState({imageUrl : e.target.value})
  }

  onSubmit = async () => {
   const faceLocationsArray = await detect(this.state.imageUrl);
    this.setState({boundingBoxes:faceLocationsArray})
  }

  // managing changes between log in form, registration form and the main app
  onRouteChange = (route) =>{
    if(route === 'signIn'){
      this.setState({route:'signIn'})
      this.setState({signedIn: false});
    }else if(route === 'home'){
      this.setState({route:'home'})
      this.setState({signedIn: true});
    }else if(route === 'register'){
      this.setState({route:'register'})
      this.setState({signedIn: false});
    }
  }


  render(){
   const {imageUrl,boundingBoxes,route,signedIn} = this.state;
   return(
      <div className="App">
         <ParticlesBg type ='cobweb' num ={40} color={"#ffffff"} bg={true}/>
          <Navigation signedIn = {signedIn} onRouteChange={this.onRouteChange}/>
        {
          route === 'signIn'?
            <SignIn onRouteChange={this.onRouteChange}/>
              :
            (route === 'register'? <Register onRouteChange={this.onRouteChange}/> 
                :
              <>
                <Logo/>
                <Rank/>
                <ImageLinkForm onChange={this.onTextChange} onSubmit={this.onSubmit}/>
                <FaceRecognition imageUrl={this.state.imageUrl} boundingBoxes = {boundingBoxes}/>
              </>
            )
          
        }
        
       
       
      </div>
   );
    
  }
 
}

export default App;
