// the code For this registration For is copy of the sign in form
//which  is originally from the tachyons website
// and i have only slightly modified it

function Register({onRouteChange}){
    return(
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 pt3 pb3 center shadow-5">      
            <main className=" black-80" >
                <div className="measure  br3 w-100">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign up</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="name">Full Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                    </div>
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
                    <input onClick={()=> {onRouteChange('home')}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                    </div>
                   
                </div>
            </main>
    </article> 
    )
}

export default Register