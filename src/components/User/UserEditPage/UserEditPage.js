import React, {Component} from "react";
import {auth, firestore} from "../../../Database/firebase.utils";
import {FaUserCircle, AiOutlineMail ,MdLocationOn} from "react-icons/all";
import './UserEditPage.css'

class UserEditPage extends Component{

    constructor() {
        super();
        this.state={
            editMode:false,
            key:'',
            firstName:'',
            lastName:'',
            socialSecurityNumber:'',
            address:'',
            postNumber:'',
            email:'',
            password:'',

        };

    }


    componentDidMount() {
        // eslint-disable-next-line no-unused-vars
        const user = auth.onAuthStateChanged(user => {
            // eslint-disable-next-line no-unused-vars
            const db = firestore
                .collection("users")
                .doc(user.uid)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        let data = doc.data();
                        this.setState({
                            key:doc.id,
                            firstName:data.firstName,
                            lastName:data.lastName,
                            socialSecurityNumber:data.socialSecurityNumber,
                            address:data.address,
                            postNumber:data.postNumber,
                            email:data.email,
                            password:data.password,
                        });
                        // console.log("test from here",this.state.firstName);
                    } else {
                        console.log("No such a user!");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        });

    }

    handleChange=event=>{
        this.setState({
            [event.target.id]: event.target.value,
            email:this.state.email,
            password:this.state.password,
        });

    }


    handleSubmit=(e)=>{
        e.preventDefault();
        const { email, password, firstName, lastName, socialSecurityNumber, address, postNumber} =this.state;
        const updateRef = firestore.collection("users").doc(this.state.key);
        updateRef.set({
            firstName,
            lastName,
            socialSecurityNumber,
            address,
            postNumber,
            email,
            password,
        }).then(docRef=>{
            this.setState({
                key:'',
                firstName:'',
                lastName:'',
                socialSecurityNumber:'',
                address:'',
                postNumber:'',
                email:'',
                password:'',
            });
            window.location.reload(false);
        }).catch((error)=>{
            console.error("error editing document: ", error)
        });
    }
    activeEditMode=()=>{
        this.setState({
            editMode:true,
        });
    }
    render(){
        if(!this.state.editMode){
            return (
                <article>
                    <main className="br3 ba b--black-10 mv4 w-auto-l w-50-m w-25-l mw6 shadow-5 center">
                        <div>
                            <h2>My Profile</h2>
                        </div>
                        {/*<Edit func ={this.header} />*/}
                        <div className='profileContent'>
                            <div className="details">
                                <ul className="center ">
                                    {/*<Edit test={user} />*/}
                                    {/*<Sidebar dat={props.currentUser}/>*/}
                                    <li className="mv3">
                                        <FaUserCircle/>
                                        <label className="labelClass"> Name: </label>
                                        <span>{this.state.firstName}</span>
                                    </li>

                                    <li className="mv3">
                                        <FaUserCircle/>
                                        <label className="labelClass"> LastName: </label>
                                        <span> {this.state.lastName}</span>
                                    </li>

                                    <li className="mv3">
                                        <FaUserCircle/>
                                        <label className="labelClass"> Social Security Number: </label>
                                        <span>{this.state.socialSecurityNumber}</span>
                                    </li>

                                    <li className="mv3">
                                        <AiOutlineMail/>
                                        <label className="labelClass"> Email: </label>
                                        <span> {this.state.email}</span>
                                    </li>

                                    <li className="mv3">
                                        <MdLocationOn/>
                                        <label className="labelClass"> Address: </label>
                                        <span>{this.state.address}</span>
                                    </li>

                                    <li className="mv3">
                                        <MdLocationOn/>
                                        <label className="labelClass"> Post Number: </label>
                                        <span> {this.state.postNumber}
                                        </span>
                                    </li>
                                </ul>
                            </div>


                            <div className="mv3">
                                <button className='f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue' onClick={this.activeEditMode}>Update</button>
                                {/*<a href="/EditMode">*/}
                                {/*    edit*/}
                                {/*</a>*/}
                            </div>
                        </div>

                    </main>


                </article>
            );

        }else{
            return(
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <form onSubmit={this.handleSubmit} className="measure ">

                            <fieldset id="edit" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Edit your details</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6"   htmlFor ="name">Name</label>

                                    <input className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100 outline-0-m" type="text" name="name"  id="firstName"
                                           value={this.state.firstName}
                                           onChange={this.handleChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6"  htmlFor ="last-name">Last name</label>
                                    <input className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100 outline-0-m" type="text" name="last-name"  id="lastName"
                                           value={this.state.lastName}
                                           onChange={this.handleChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor ="social-security-number">Social security Number</label>
                                    <input className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100 outline-0-m" type="text" name="name"  id="socialSecurityNumber"
                                           value={this.state.socialSecurityNumber}
                                           onChange={this.handleChange}
                                    />
                                </div>

                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6"  htmlFor ="address">Address</label>
                                    <input className="b pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100 outline-0-m" type="text" name="address"  id="address"
                                           value={this.state.address}
                                           onChange={this.handleChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor ="address">Post number</label>
                                    <input className="b pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100 outline-0-m" type="text" name="postaddress"  id="postNumber"
                                           value={this.state.postNumber}
                                           onChange={this.handleChange}
                                    />
                                </div>
                            </fieldset>

                            <div className="mv3">
                                <button className= "b ph4 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib outline-0-m" type="submit">Save</button>
                            </div>

                        </form>
                    </main>
                </article>
            );
        }


    }



}


export default UserEditPage;
