import React from 'react';
import './LandingPage.css';
import signIn from '../Signin/Signin'

const LandingPage = (props) => {
    
  return (
      <article className="bg-white center mw5 ba b--black-10 mv4">
          <img src={require("../../assets/background.jpg")} className="w-auto  h-auto justify-center " alt="background"/>
          <div className="pa3">
              <a className=" flex items-center justify-center pa4  link dim dark-gray " href="covid" title="CovidTest">
                  <strong>Do an online test!</strong>
              </a>
              <h>{}</h>
          </div>
      </article>
  );
}

export default LandingPage;