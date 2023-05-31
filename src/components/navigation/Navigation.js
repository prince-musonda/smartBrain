function Navigation({signedIn,onRouteChange}){
    if(signedIn){
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <p onClick = {() => onRouteChange('signIn')} className="f3 dim link underline pa3 pointer black">Sign Out</p>
            </nav>
        );
    }else{
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <p onClick = {()=>{onRouteChange('signIn')}} className="f3 dim link underline pa3 pointer black">Sign In</p>
                <p onClick = {()=>{onRouteChange('register')}} className="f3 dim link underline pa3 pointer black">Sign Up</p>
            </nav>
        );
    }
        
    
}

export default Navigation