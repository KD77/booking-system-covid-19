import React from 'react';
import { firestore} from "../../firebase/firebase.utils";
import {FaUserCircle} from "react-icons/all";


class ListOfAppointments extends React.Component {

    constructor() {
        super();
        this.state={
            bookedList:[],
            usersList:[],
            nursesList:[],
            UID:'',
            subject:'',
            date:'',
            bookedTime:'',
            str:"",
            string:[],
            userExists:false,
            dateC:[],
            editMode:false,
            userName:'',
            userLastName:'',
            userPhoneNumber:'',
            userEmail:'',
            indexId:''

        }

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
                        bookedTime:doc.data().bookedTime,
                        dateC: doc.data().date.toDate().toLocaleString().split(','),
                    });
                    const newStateArray = this.state.bookedList;
                    this.setState({bookedList: newStateArray});
                });
            })
            .catch(error => {
                console.error(error);
            });


        const dbNurses = firestore.collection("nurses").get();
        const nurses=dbNurses
            .then(snapshot =>{
                snapshot.forEach(doc=>{
                    this.state.nursesList.push({
                        nurseName: doc.data().name,
                        nurseLastName: doc.data().lastName,
                    });
                    const newStateArray = this.state.nursesList;
                    this.setState({nursesList: newStateArray});
                });
            })
            .catch(error => {
                console.error(error);
            });

    }

    assignIt=(userId, indexId)=>{
        this.setState({
            editMode:true,
            UID:userId,
            indexId:indexId
        });
        // console.log("test user id",userId);
        console.log(this.state.bookedList[indexId]);

        const db = firestore
            .collection("users")
            .doc(userId)
            .get()
            .then(doc => {
                let data = doc.data();
                this.setState({
                    userName:data.firstName,
                    userLastName:data.lastName,
                    userPhoneNumber:data.phoneNumber,
                    userEmail:data.email,
                });

            })
            .catch(error => {
                console.error(error);
            });
    }


    renderTableData() {
        return this.state.bookedList.map((booking,index) => {

            const {subject, dateC, bookedTime} = booking //destructuring
                // console.log(this.state.nursesList);
            return (
                <tr className="stripe-dark">
                    <td className="pa3">{subject}</td>
                    <td className="pa3">{dateC[0]}</td>
                    <td className="pa3">{Object.getOwnPropertyNames(bookedTime)}</td>
                    <td className="pa3">
                        <div className="mv3">
                            <button className='f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => this.assignIt(this.state.bookedList[index].UID,index)}>Assign A Doctor</button>
                        </div>
                    </td>
                </tr>

            )
    })
    }

    render() {

        if(!this.state.editMode){
            return(

                <div  className="pa4">
                    <div className="overflow-auto">
                        <table className="f6 w-100 mw8 center" cellSpacing="0">
                            <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Subject</th>
                                <th className="fw6 tl pa3 bg-white">Date</th>
                                <th className="fw6 tl pa3 bg-white">Time</th>
                            </tr>
                            </thead>
                            <tbody className="lh-copy">
                            {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>



            );
        }else {
            return (

                    <article>
                        <main className="br3 ba b--black-10 mv4 w-auto-l w-50-m w-25-l mw6 shadow-5 center">
                            <div>
                                <h2>Details: </h2>
                            </div>

                            <div>
                                <table className="f6 w-100 mw8 center" cellSpacing="0">
                                    <thead>
                                    <tr className="stripe-dark">
                                        <th className="fw6 tl pa3 bg-white">Subject</th>
                                        <th className="fw6 tl pa3 bg-white">Date</th>
                                        <th className="fw6 tl pa3 bg-white">Time</th>
                                    </tr>
                                    </thead>
                                    <tbody className="lh-copy">
                                    <tr className="stripe-dark">
                                        <td className="pa3">{this.state.bookedList[this.state.indexId].subject}</td>
                                        <td className="pa3">{this.state.bookedList[this.state.indexId].dateC[0]}</td>
                                        <td className="pa3">{Object.getOwnPropertyNames(this.state.bookedList[this.state.indexId].bookedTime)}</td>
                                    </tr>
                                    </tbody>
                                </table>


                            </div>


                            <div className='profileContent'>
                                <div className="details">
                                    <ul className="center ">
                                        <li className="mv3">
                                            <FaUserCircle/>
                                            <label className="labelClass"> Name: </label>
                                            <span>{this.state.userName}</span>
                                        </li>

                                        <li className="mv3">
                                            <FaUserCircle/>
                                            <label className="labelClass"> Last Name: </label>
                                            <span>{this.state.userLastName}</span>
                                        </li>

                                        <li className="mv3">
                                            <FaUserCircle/>
                                            <label className="labelClass"> Email: </label>
                                            <span> {this.state.userEmail}</span>
                                        </li>

                                    </ul>
                                    <div>
                                        <select id="types" className="w-100 db h2 f6 bg-near-white ba b--sliver gray"
                                                name="">
                                            <option value="">Nurses List</option>
                                            <option label="Adam" value="2">Space Type
                                            </option>
                                            <option label="Kalid" value="12">Space Type
                                            </option>
                                            <option label="Nitin" value="22">Space Type
                                            </option>
                                            <option label="Ramin" value="32">Space Type
                                            </option>
                                            <option label="Rashed" value="42">Space Type
                                            </option>
                                        </select>
                                        <button
                                            className="mv2 pv2 ph3 pointer b br2 hover-bg-dark-green bg-green white bn f7 ttu tracked"
                                            type="submit">Assign
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </main>
                    </article>

            );
        }


    }
}

export default ListOfAppointments;
