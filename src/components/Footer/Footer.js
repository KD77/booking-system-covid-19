import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
            <footer class="tc ph3 ph4-ns pv3 bt b--black-10 black-70 ">
                <a href="mailto:" class="link b f3 f2-ns dim black-70 lh-solid">hello@email.com</a>
                <p class="f6 db b ttu lh-solid">© 2016 COMPANY Inc "pv4 ph3 ph5-m ph6-l mid-gray pb0 bg-black">.</p>
                <div class="mt2">
                    <a href="/language/" title="Language" class="f6 dib pr2 mid-gray dim">Language</a>
                    <a href="/terms/"    title="Terms" class="f6 dib ph2 mid-gray dim">Terms of Use</a>
                    <a href="/privacy/"  title="Privacy" class="f6 dib pl2 mid-gray dim">Privacy</a>
                </div>
            </footer>
            </div>



        );
    }
}

export default Footer;