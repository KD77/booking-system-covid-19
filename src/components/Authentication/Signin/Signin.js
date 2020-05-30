import React from 'react';
import './Signin.css';

// eslint-disable-next-line no-unused-vars
import firebase, { auth,creatUserProfileDocument } from '../../../Database/firebase.utils';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            authenticated: false,
            message : ''
        };
    }




    handelSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        await auth.signInWithEmailAndPassword(email, password).then((result) => {
            this.setState({
                email: '',
                password: ''
            });
            this.setState({authenticated: true})
            console.log('successfully login ')
        }).catch((error) => {
            console.error(error);

        });

            if (this.state.authenticated && email === 'admin@admin.com' ) {
                this.props.history.push('/Admin/listOfAppointment')
            }
            else if (this.state.authenticated) {
                this.props.history.push('/user/UserHistory')
            } else
                this.setState({message: 'Incorrect username or password. Please try again!'})
        }

    handelChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });

    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <form onSubmit={this.handelSubmit} className="measure ">

                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>

                                <input
                                    className="pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100 outline-0-m"
                                    type="email" name="email-address" id="email"
                                    onChange={this.handelChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent grow hover-bg-light-gray hover-black w-100 outline-0-m"
                                    type="password" name="password" id="password"
                                    onChange={this.handelChange}
                                />

                            </div>

                        </fieldset>
                        <div className="">
                            <h5 style={{color : "red"}}>{this.state.message}</h5>

                            <button className=" b ph3 pv2 input-reset ba b-black bg-transparent grow pointer f6 dib outline-0-m"
                                    type="submit"
                            > Login
                            </button>
                        </div>
                        <div className="lh-copy mt3">

                            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
                    </form>
                </main>
            </article>
        );

    }
}

export default Signin; 