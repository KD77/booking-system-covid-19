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
            dat:'',
            date:'',
            infosArray:[],
            bookedList:[],
            bookedTimedefault:'',
            testOne:[],
            dateOne:this.props.date,
            dateArray:[],
            slotArray:[],
            finalArray:[],
            numbers:'',
        };

    }

    handelSubmit = (status, value, key) => {

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
                let dataaa = this.state.dat.split(',')
                this.setState({
                    dat: dataaa[0]


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
                dat:this.state.infosArray[0],


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
    componentDidMount() {
        const dbBooked = firestore.collection("booking").get();
        // eslint-disable-next-line no-unused-vars
        const book=dbBooked
            .then(snapshot =>{
                snapshot.forEach(doc=>{
                    this.state.bookedList.push({
                        UID:doc.id,
                        subject:doc.data().subject,
                        bookedTimeDefault:doc.data().time,
                        dateC: doc.data().date.toDate().toLocaleString().split(','),
                    });
                    const newStateArray = this.state.bookedList;
                    this.setState({bookedList: newStateArray});



                    this.setState({
                        infosArray: this.state.dateOne.toLocaleString().split(","),
                    });


                });

            })
            .catch(error => {
                console.error(error);
            });





    }
    static getDerivedStateFromProps(nextProps) {
        return {date: nextProps.date };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.date !== this.props.date) {
            this.setState({dateOne: this.props.date});
            this.componentDidMount();
        }
    }














    render() {
        let com1;
        let com2;
        let com3;
        let com4;
        let com5;
        let com6;
        let com7;
        let com8;
        {

            this.state.bookedList.map((booking,index) => {
                const {bookedTimeDefault,dateC} = booking //destructuring

                let dateArray = this.state.dateArray.push(dateC[0].toString());
                let slotArray = this.state.slotArray.push(bookedTimeDefault.toString());


                let final = dateC[0].toString()+" "+bookedTimeDefault.toString();
                let finalArray = this.state.finalArray.push(final);
                console.log("testing mnbvc     "+this.state.finalArray);
            });
            let m = this.state.infosArray[0];
            let x = this.state.dateArray.toString().includes(m);


            let n1 = m+" 9:00am to 9:30am";
            let y1 = this.state.finalArray.toString().includes(n1);

            if( y1 === false  ){
                com1 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 1, "9:00am to 9:30am")
                               }>
                    {"9:00am to 9:30am"}
                </button>
            }


            let n2 = m+" 9:30am to 10:00am";
            let y2 = this.state.finalArray.toString().includes(n2);
            if(y2 === false  ){
                com2 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 2, "9:30am to 10:00am")
                               }>
                    {"9:30am to 10:00am"}
                </button>
            }

            let n3 = m+" 10:00am to 10:30am";
            let y3 = this.state.finalArray.toString().includes(n3);
            if( y3 === false  ){
                com3 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 3, "10:00am to 10:30am")
                               }>
                    {"10:00am to 10:30am"}
                </button>
            }

            let n4 = m+" 10:30am to 11:00am";
            let y4 = this.state.finalArray.toString().includes(n4);
            if( y4 === false  ){
                com4 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 4, "10:30am to 11:00am")
                               }>
                    {"10:30am to 11:00am"}
                </button>
            }


            let n5 = m +" 11:00am to 11:30am";
            let y5 = this.state.finalArray.toString().includes(n5);
            if(y5 === false  ){
                com5 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 5, "11:00am to 11:30am")
                               }>
                    {"11:00am to 11:30am"}
                </button>
            }

            let n6 = m+" 12:00am to 12:30am";
            let y6 = this.state.finalArray.toString().includes(n6);
            if(y6 === false  ){
                com6 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 6, "12:00am to 12:30am")
                               }>
                    {"12:00am to 12:30am"}
                </button>
            }


            let n7 = m+" 13:00am to 13:30am";
            let y7 = this.state.finalArray.toString().includes(n7);
            if( y7 === false  ){
                com7 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 7, "13:00am to 13:30am")
                               }>
                    {"13:00am to 13:30am"}
                </button>
            }


            let n8 = m+" 14:00am to 14:30am";
            let y8 = this.state.finalArray.toString().includes(n8);
            if(y8 === false  ){
                com8 = <button className=' bg-light-yellow  pa1 link dim black '
                               onClick={
                                   (status) => this.handelSubmit(status, 8, "14:00am to 14:30am")
                               }>
                    {"14:00am to 14:30am"}
                </button>
            }


        }


        return (
            <div>
                <div className="flex justify-between mv2 center ">{
                    <div >
                        <div >
                            {com1}{com2}{com3}{com4}{com5} {com6}{com7}{com8}
                        </div>

                    </div>
                }</div>


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
