import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

        <div >

            <h3 id='h3'>More Information?</h3>

            {/*Table Start */}
            <table className="Tbl">
                <tr>
                    <th>WHO</th>
                    <th>CORONAVIRUS OUTBREAK</th>
                    <th>Novel Coronavirus Situation</th>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.who.int">
                            <img src="https://devpolicy.org/wp-content/uploads/2015/02/image13.png"
                                 alt="world health organization"
                                 style={{width: '100px'}}/>
                        </a>
                    </td>
                    <td>
                        <a href="https://www.worldometers.info/coronavirus/">
                            <img src="https://www.worldometers.info/img/worldometers-logo.gif" alt='who'/>
                        </a>
                    </td>
                    <td>
                        <a href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd">
                            <img src="https://experience.arcgis.com/site/widgets/landing/dist/runtime/assets/exb-logo.png"
                                 style={{width: '100px'}} alt='exb'/>
                        </a>
                    </td>
                </tr>
            </table>

            {/*Table End */}

            <div className="pv4 ph3 ph5-m ph6-l mid-gray">
                    <small className="f6 db tc">© 2020 <b className="ttu">MEDICAL APPOINTMENT Inc</b>., All Rights Reserved</small>
                <div className="tc mt3">
                    <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
                    <a href="/terms/" title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
                    <a href="/privacy/" title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
                </div>
            </div>
        </div>



        );
    }
}

export default Footer;