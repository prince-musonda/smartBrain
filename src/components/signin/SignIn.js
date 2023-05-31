// the code For this sign form is originally from the tachyons website
// and i have only slightly modified it

function SignIn({onRouteChange}){
    return(
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 pt3 center shadow-5">      
            <main className=" black-80" >
                <div className="measure  br3 w-100">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input onClick={()=> {onRouteChange('home')}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p className="f6 link dim black db pointer" onClick={()=>{onRouteChange('register')}} >Don't have an acoount? Sign Up</p>
                    </div>
                </div>
            </main>
    </article> 
    )
}

export default SignIn