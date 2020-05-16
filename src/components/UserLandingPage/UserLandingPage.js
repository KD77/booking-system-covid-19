import React ,{Component} from "react";
import { auth, firestore } from "../../firebase/firebase.utils";

// khale user page
//hello
class UserLandingPage extends Component {
    state = {
        user: {}
    };

    unsubscribe = null;

    componentDidMount() {
        const user = auth.onAuthStateChanged(user => {
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
            <article class="mw5 ma3 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 center">
                <div class="tc">
                    <img
                        src={require("../../assets/images.png")}
                        class="br-100 h4 w4 dib ba b--black-05 pa2"
                        title="Photo of a kitty staring at you"
                    /></div>
                <div class="fl w-50 bg-white tc">

                    <h1 >{this.state.user.firstName}</h1>
                </div>
                <div class="fl w-50 bg-white tc">
                    <h1>{this.state.user.lastName}</h1>
                </div>
                <h2 class="f5 center fw4 gray mt0 tc ">{this.state.user.email}</h2>





                <div class="items-center tc">
                    <button
                        onClick={this.signOut}
                        class="dark-gray center pv2 ph3 bg-white hover-bg-near-white ba b--moon-gray br2 shadow-1"
                    >
                        Log out
                    </button>
                </div>
            </article>

        );
    }
}

export default UserLandingPage;