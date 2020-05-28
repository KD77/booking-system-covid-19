import React from "react";
import './About.css'
import {AiOutlineMail, GiAlarmClock, MdLocationOn, FiPhoneCall} from "react-icons/all";

const about = () => {
    return (

        <div>
            <article>
                <main className="br3 ba b--black-10 mv4 w-auto-l w-50-m w-25-l mw6 shadow-5 center">
                    {/*<Edit func ={this.header} />*/}
                    <div className='profileContent'>
                        <div className="details">
                            <ul className="center ">
                                {/*<Edit test={user} />*/}
                                {/*<Sidebar dat={props.currentUser}/>*/}
                                <li className="mv3">

                                    <label className="labelClass f3"><GiAlarmClock size = {30}/> Opening Hours: </label>
                                    <span className='f4'>Mon-Fri 9:00 - 14:30</span>
                                </li>

                                <li className="mv3 f3">
                                    <MdLocationOn/>
                                    <label className="labelClass"> Address: </label>
                                    <span className='f4'>LNU Street 2020, Växjö, Sweden</span>
                                </li>

                                <li className="mv3 f3">
                                    <MdLocationOn/>
                                    <label className="labelClass"> Post Number: </label>
                                    <span className='f4'>352 52</span>
                                </li>


                                <li className="mv3 f3">
                                    <AiOutlineMail/>
                                    <label className="labelClass"> Email: </label>
                                    <span className='f4'>Test@test.com</span>
                                </li>

                                <li className="mv3 f3">
                                    <FiPhoneCall/>
                                    <label className="labelClass"> Call us: </label>
                                    <span className='f4'>0712345678</span>
                                </li>




                            </ul>
                        </div>



                    </div>

                </main>


            </article>
        </div>

    )
}

export default about;