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
      <div className="mw8 ma3 bg-white br3 pa3 pa4-ns mv4 h-100 ba b--black-10 center">
        <div className="flex justify-center ">
          <div className=" flex flex-column center">

            <div className="pb2 center ">
              <div className='tc'>
              <input
                  placeholder='Reason for booking'
                className="pa2 input-reset ba bg-transparent hover-bg-light-gray hover-black w-auto outline-0-m center"
                type="text"
                name="subject"
                id="subject"
                onChange={this.handleChange}
              />
              </div>
            </div>

            <div className=" ">
              <Calendar className='center '
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
