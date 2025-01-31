import React from 'react';
import './LandingPage.css';



let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const LandingPage = () => {
    
  return (
      <div>
          <article>
              <header className=" color sans-serif">
                  <div className="mw9 center pa4 pt5-ns ph7-l ">
                      <time className="f6 mb2 dib ttu tracked"><small>{date}</small></time>
                      <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                       <span className="bg-black-50 lh-copy white pa1 tracked-tight">
                         Health Care At Your Desk
                        </span>
                      </h3>
                      <h4 className="f3 fw1 georgia i">Book Your Appointment Online.</h4>
                       <div className='tc'>
                        <a className="  f3 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue " href="covid" title="CovidTest">
                          <strong>COVID-19 Online Test</strong>
                        </a>
                       </div>
                  </div>
              </header>
          </article>

          <body className='body123'>

          <h1 id='h1'>How to Protect Yourself</h1>

          {/*Corona animation container */}
          <div className="animatediv">
              <img src="https://atheistiran.com/wp-content/uploads/2020/03/corona-virus.png" alt='covid'/>
          </div>

          {/*Image on top of the Main menu container */}
          <img src="https://atheistiran.com/wp-content/uploads/2020/03/people-mask.png" className="TopImage" alt='people'/>

          {/*Main Menu Start */}
          <ul className="menu shadow">

              <li>
                  <a href="#CleanYourHand">Clean your hands often</a>
              </li>

              <li>
                  <a href="#AvoidCloseContact">Avoid close contact</a>
              </li>

              <li>
                  <a href="#StayHome">Stay home if you’re sick</a>
              </li>

              <li>
                  <a href="#CoverCoughs">Cover coughs and sneezes</a>
              </li>

              <li>
                  <a href="#WearAFacemask">Wear a facemask if you are sick</a>
              </li>

              <li>
                  <a href="#CleanAndDisinfect">Clean and Disinfect </a>
              </li>
          </ul>

          {/*Main Menu End */}

          {/*Free Space container  */}
          <div style={{marginTop:'25%'}}></div>



          {/*Message Boxes  */}
          <h2 id='h2'>Clean Your Hand</h2>
          <div className="messagebox shadow" id="CleanYourHand">
              <ul>
                  <li><strong>Wash your hands</strong> often with soap and water for at least 20 seconds
                      especially after you have been in a public place, or after blowing your nose, coughing, or
                      sneezing.
                  </li>

                  <li>If soap and water are not readily available, <strong>use a hand sanitizer that contains
                      at least 60% alcohol</strong>. Cover all surfaces of your hands and rub them together
                      until they feel dry.
                  </li>

                  <li><strong>Avoid touching</strong> <strong>your eyes, nose, and mouth</strong> with
                      unwashed hands.
                  </li>
              </ul>
          </div>


          <h2 id='h2'>Avoid Close Contact</h2>
          <div className="messagebox shadow" id="AvoidCloseContact">

              <ul>
                  <li><strong>Avoid close contact</strong> with people who are sick</li>
                  <li>Put <strong>distance between yourself and other</strong> <strong>people</strong> if COVID-19 is
                      spreading in your community. This is especially important for people who are at higher risk of getting
                      very sick.
                  </li>
              </ul>
          </div>


          <h2 id='h2'>Stay Home</h2>
          <div className="messagebox shadow" id="StayHome">

              <li><strong>Stay home</strong> if you are sick, except to get medical care. Learn what to do if you are sick.
              </li>
          </div>


          <h2 id='h2'>Cover Coughs</h2>
          <div className="messagebox shadow" id="CoverCoughs">

              <ul>
                  <li><strong>Cover your mouth and nose</strong> with a tissue when you cough or sneeze or use the inside of
                      your elbow.
                  </li>
                  <li><strong>Throw used tissues</strong> in the trash.</li>
                  <li>Immediately <strong>wash your hands</strong> with soap and water for at least 20 seconds. If soap and
                      water are not readily available, clean your hands with a hand sanitizer that contains at least 60%
                      alcohol.
                  </li>
              </ul>

          </div>


          <h2 id='h2'>Wear A Facemask</h2>
          <div className="messagebox shadow" id="WearAFacemask">

              <ul>
                  <li><strong>If you are sick:</strong> You should wear a facemask when you are around other people (e.g.,
                      sharing a room or vehicle) and before you enter a healthcare provider’s office. If you are not able to
                      wear a facemask (for example, because it causes trouble breathing), then you should do your best to
                      cover your coughs and sneezes, and people who are caring for you should wear a facemask if they enter
                      your room.
                  </li>

                  <li><strong>If you are NOT sick: </strong>You do not need to wear a facemask unless you are caring for
                      someone who is sick (and they are not able to wear a facemask). Facemasks may be in short supply and
                      they should be saved for caregivers.
                  </li>

              </ul>
          </div>


          <h2 id='h2'>Clean And Disinfect</h2>

          <div className="messagebox shadow" id="CleanAndDisinfect">


              <ul>
                  <li><strong>Clean AND disinfect frequently touched surfaces daily</strong>. This includes tables, doorknobs,
                      light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.
                  </li>
                  <li><strong>If surfaces are dirty, clean them:</strong> Use detergent or soap and water prior to
                      disinfection.
                  </li>
              </ul>
          </div>

          <div id="WashHandsTxt">Wash Your Hands</div>

          </body>

      </div>
  );
}

export default LandingPage;