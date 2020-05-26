import React, { Component } from "react";
import { auth, firestore } from "../../firebase/firebase.utils";

const data = {
  slots: {
    slot1: "9:00am to 9:30am",
    slot2: "9:30am to 10:00am",
    slot3: "10:00am to 10:30am",
    slot4: "10:30am to 11:00am",
    slot5: "11:00am to 11:30am"
  }
};
export default class Slots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: ""
    };
  }

  handelSubmit = (status, value, key) => {
    // event.preventDefault();
    const date = this.props.date;
    const subject = this.props.subject;

    const userId = auth.currentUser.uid;
    let bookedTime = {};

    if (status) {
      bookedTime[key] = value;
    } else {
      bookedTime[key] = null;
    }
    firestore
      .collection("booking")
      .doc(userId)
      .set({
        date,
        subject,
        bookedTime
      });
  };

  render() {
    const slots = data.slots;
    const slotsArr = Object.keys(slots).map(k => {
      return (
        <div key={k}>
          <div class=" tc outline w-50 mr2 center">
            <button
              href="/"
              onClick={status => this.handelSubmit(status, k, slots[k])}
            >
              {slots[k]}
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div class="flex justify-around mv2">{slotsArr}</div>
        <div class="w-100 pa3 mt2">
          <button class="dark-gray center pv2 ph3 bg-white hover-bg-near-white ba b--moon-gray br2 shadow-1 w-100">
            Send
          </button>
        </div>
      </div>
    );
  }
}
