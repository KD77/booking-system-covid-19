import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer class="tc ph3 ph4-ns pv3 bt b--black-10 black-70 ">
                <a href="mailto:" class="link b f3 f3-ns dim black-70 lh-solid">notAvalidEmail@email.com</a>
                <p class="f4 db b ttu lh-solid">© 2020 Group 4 linneuniversitet</p>
                <div class="mt2">
                    <a href="https://www.1177.se" target="_blank" title="Emergency" class="f6 dib pr2 mid-gray dim">Emergency numbers</a>
                    <a href="https://polisen.se/en/the-swedish-police/contacting-the-police" target="_blank"   title="Police" class="f6 dib ph2 mid-gray dim">Police line</a>
                    <a href="https://lnu.se/" target="_blank" title="CoursePage" class="f6 dib pl2 mid-gray dim">Privacy</a>
                </div>
            </footer>



        );
    }
}

export default Footer;