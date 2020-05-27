import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Slots from "./Slots";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      subject: "",
      showSlots: false
    };
    console.log("date is", this.state.date);
    console.log("subject", this.state.subject);
  }

  //const [data,setDate]=useState(new Date());

  /*handelSubmit = (event, childData) => {
    event.preventDefault();
    const { date, subject } = this.state;
    

    firestore.collection("booking").add({
      date,
      subject,
      id:auth.currentUser.uid

    });
  };*/
  handleChange = event => {
    // const { name, value}=event.target.value;
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  onChange = date => {
    this.setState({
      date: date,
      showSlots: true
    });
    console.log(this.state.date);
    //this.props.history.push("/slots")
  };

  render() {
    return (
      <div class="mw8 ma3 bg-white br3 pa3 pa4-ns mv4 h-100 ba b--black-10 center">
        <div class="flex justify-center ">
          <div class=" flex flex-column center">
            <div class=" w-80 pa3 mt2 mh5 ml2">
              <label className="db tc fw6 lh-copy f6" htmlFor="subject">
                subject
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-light-gray hover-black w-80 outline-0-m center"
                type="text"
                name="subject"
                id="subject"
                onChange={this.handleChange}
              />
            </div>
            <div class=" w-80 pa3 mt2 center">
              <Calendar
                //onChange={this.onchange}
                value={this.state.date}
                onClickDay={this.onChange}
              />
            </div>

            <div>
              {this.state.showSlots ? (
                <Slots date={this.state.date} subject={this.state.subject} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
