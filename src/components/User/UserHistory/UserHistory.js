import React from 'react';
import {auth, firestore} from "../../../Database/firebase.utils";
import { FaUserCircle } from "react-icons/all";


class UserHistory extends React.Component {


    constructor() {
        super();
        this.state={
            subject:'',
            date:'',
            bookedTime:{},
            str:"",
            string:[],
            userExists:false,
        }
    }


    componentDidMount() {
        // eslint-disable-next-line no-unused-vars
        const user = auth.onAuthStateChanged(user => {
            // eslint-disable-next-line no-unused-vars
            const db = firestore.collection("booking").doc(user.uid).get().then(doc => {
                        if (doc.exists) {
                            let data = doc.data();
                            this.setState({
                                subject:data.subject,
                                bookedTime:data.bookedTime,
                                date: data.date.toDate().toLocaleString(),
                                userExists:true,
                            });

                            // eslint-disable-next-line react/no-direct-mutation-state
                            this.state.str = this.state.date;
                            // eslint-disable-next-line react/no-direct-mutation-state
                            this.state.string = this.state.str.split(",");
                            this.setState({
                                date:this.state.string[0],
                                userExists:true,

                            });
                        } else {
                        }
                    })
                        .catch(error => {
                            console.error(error);
                        });



        });

    }

    cancelAppointment(){
        // eslint-disable-next-line no-unused-vars
        const user = auth.onAuthStateChanged(user => {
            // eslint-disable-next-line no-unused-vars
            const db = firestore
                .collection("booking")
                .doc(user.uid)
                .delete()
                .then(function() {
                    window.location.reload();
                    console.log("Document successfully deleted!");
                })
                .catch(error => {
                    console.error(error);
                });
        });

    }


    render() {
        if(this.state.userExists) {
            return (
                <article>
                    <main className="br3 ba b--black-10 mv4 w-auto-l w-50-m w-25-l mw6 shadow-5 center">
                        <div>
                            <h2>Your booking:</h2>
                        </div>
                        <div className='profileContent'>
                            <div className="details">
                                <ul className="center ">

                                    <li className="mv3">
                                        <FaUserCircle/>
                                        <label className="labelClass"> Your subject: </label>
                                        <span>{this.state.subject}</span>
                                    </li>

                                    <li className="mv3">
                                        <FaUserCircle/>
                                        <label className="labelClass"> date : </label>
                                        <span>{this.state.date}</span>
                                    </li>

                                    <li className="mv3">
                                        <FaUserCircle/>
                                        <label className="labelClass"> Time: </label>
                                        <span> {Object.getOwnPropertyNames(this.state.bookedTime)}</span>
                                    </li>


                                </ul>
                            </div>


                            <div className="mv3">
                                <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' onClick={this.cancelAppointment}>Cancel Your Appointment</button>
                            </div>
                            <div className="mv3">
                                <a href="/user/booking">You can change your time from here</a>
                            </div>

                        </div>

                    </main>


                </article>
            );

        }else{
            return (
                <article>
                    <main className="br3 ba b--black-10 mv4 w-auto-l w-50-m w-25-l mw6 shadow-5 center">
                        <div>
                            <h2>
                                You do not have any appointment:
                            </h2>
                            <a href="/user/booking">You can book a time from here</a>


                        </div>
                    </main>
                </article>
            );
        }

    }

}
export default UserHistory;

