import React, { Component } from "react";
import { auth, firestore } from "../../../Database/firebase.utils";
// import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import './Slots.css'
import {GrReturn} from "react-icons/all";

const data = {
  slots: {
    slot1: "9:00am to 9:30am",
    slot2: "9:30am to 10:00am",
    slot3: "10:00am to 10:30am",
    slot4: "10:30am to 11:00am",
    slot5: "11:00am to 11:30am",
    slot6: "12:00am to 12:30am",
    slot7: "13:00am to 13:30am",
    slot8: "14:00am to 14:30am",


  }
};
export default class Slots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: "",
      msg:'',
      string:[],
      dat:''
    };
  }

  handelSubmit = (status, value, key) => {
    
  // event.preventDefault();
  const date = this.props.date;
  const userId = auth.currentUser.uid;
 const db = firestore.collection("booking").doc(userId).get().then(doc => {
   if (doc.exists) {
       let data = doc.data();
       this.setState({
         
           dat: data.date.toDate().toLocaleString(),
         
           
       });

       // eslint-disable-next-line react/no-direct-mutation-state
       this.setState({str: this.state.dat})
       // eslint-disable-next-line react/no-direct-mutation-state
       let dataa = this.state.dat.split(',')
       this.setState({
           dat:dataa[0]
           

       });
       
   } else {
   }
})
   .catch(error => {
       console.error(error);
   });

 
 console.log("hello",db)
 const subject = this.props.subject;


 const email = auth.currentUser.email;
 let bookedTime = {};

 if (status) {
   bookedTime[key] = value;
 } else {
   bookedTime[key] = null;
 }
// this.props.history.push("/user")

 firestore.collection("booking")
   .doc(userId)
   .set({
     date,
     subject,
     bookedTime,
     email,
     time:Object.keys(bookedTime)[0],
     dat:this.state.dat
     

   });


      
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  showMes = () => {
    this.setState({msg:'Booking Successful'})

  }

  render() {
  
    const slots = data.slots;
    const slotsArr = Object.keys(slots).map(k => {
      return (
        <div key={k}>
          <div >
            <button className=' bg-light-yellow  pa1 link dim black '
              onClick={
                (status) => this.handelSubmit(status, k, slots[k])
                
               }>
              {slots[k]}
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="flex justify-between mv2 center ">{slotsArr}</div>

        <h2 className='tc'>{this.state.msg} </h2>
        <div className=" tc w-80 pa3 mh4 ml4 mt2 mv2 frame">

          <a href="/user/userHistory" className='f4 link dim br2 ph3 pv2 mb2 dib white bg-light-red '><GrReturn/>Return</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
              href="#"
              onClick={this.showMes}
              className="f4 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue ">
            Save booking
          </a>
        </div>
      </div>
    );
  }
}
