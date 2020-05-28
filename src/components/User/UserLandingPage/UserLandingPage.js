import React ,{Component} from "react";
import { auth, firestore } from "../../../Database/firebase.utils";

// khale user page
//hello
class UserLandingPage extends Component {
    constructor() {
        super();
 this.state = {
        user: {}
    };
        
        
    };
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
                            user: data
                        });
                    } else {
                        console.log("No such a user!");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        });
    }
    componentWillMount() {}
    signOut = () => {
        auth.signOut();
        this.props.history.replace('/')
    };

    render() {
        return (
            <article className="mw5 ma3 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 center">
                <div className="tc">
                    <img
                        src={require("../../../assets/images.png")}
                        className="br-100 h4 w4 dib ba b--black-05 pa2"
                        title="Photo of a kitty staring at you"
                     alt='logo'/></div>
                <div className="fl w-50 bg-white tc">

                    <h1 >{this.state.user.firstName}</h1>
                </div>
                <div className="fl w-50 bg-white tc">
                    <h1>{this.state.user.lastName}</h1>
                </div>
                <h2 className="f5 center fw4 gray mt0 tc ">{this.state.user.email}</h2>

                <div className="items-center tc">
                    <button
                        onClick={this.signOut}
                        className="dark-gray center pv2 ph3 bg-white hover-bg-near-white ba b--moon-gray br2 shadow-1"
                    >
                        Log out
                    </button>
                </div>
            </article>

        );
    }
}

export default UserLandingPage;