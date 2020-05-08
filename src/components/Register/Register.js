import React from 'react';
//import './Register.css';

const Register = () => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor ="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100" type="text" name="name"  id="name" />
              </div>
              <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor ="last-name">Last name</label>
              <input className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100" type="text" name="last-name"  id="last-name" />
              </div>
              <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor ="social-security-number">Social Sercurity Number</label>
              <input className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100" type="text" name="name"  id="name" />
              </div>
              <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor ="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor ="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100" type="password" name="password"  id="password" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor ="address">Address</label>
              <input className="b pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100" type="text" name="address"  id="number" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor ="address">Post number</label>
              <input className="b pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100" type="text" name="postaddress"  id="number" />
            </div>
            
          </fieldset>
          <div className="mv3">
            <input className="b ph4 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
          </div>
          <div className="lh-copy mt3">
            
        
          </div>
        </form>
      </main>
      </article>
  );
}

export default Register; 