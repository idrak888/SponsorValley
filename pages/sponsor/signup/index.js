import React, { Component } from 'react';
import * as firebase from 'firebase';
import Page from '../../../layouts/main';

class SponsorSignUp extends Component {
    componentDidMount() {
        document.querySelector('.page2').style.display = 'none';
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
    }
    signUpUser = () => {
        const loader = document.querySelector('.loader');
        const policy = document.querySelector('.policy');
        const err = document.querySelector('.err');

        const companyName = document.getElementById('compName').value;
        const name = document.getElementById('name').value;
        const email1 = document.getElementById('email1').value;
        const productType = document.getElementById('productType').value;
        const compSize = document.getElementById('compSize').value;
        const compTargets = document.getElementById('compTargets').value;
        const password = document.getElementById('password').value;

        var userObj = {
            name, companyName, email1, productType, compSize, compTargets
        };
        console.log(userObj);

        firebase.auth().createUserWithEmailAndPassword(email1, password)
        .then(() => {
            var user = firebase.auth().currentUser;
            var uid = user.uid;
            var providerData = user.providerData;
            policy.innerHTML = 'Creating account...';

            var db = firebase.firestore();

            db.collection("users").add({
                type: 'sponsor account',
                name: userObj.name,
                companyName: userObj.companyName,
                email1: userObj.email1,
                productType: userObj.productType,
                compSize: userObj.compSize,
                compTargets: userObj.compTargets
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                localStorage.setItem('user', JSON.stringify(userObj));
                localStorage.setItem('userId', docRef.id);

                setTimeout(() => {
                    policy.style.innerHTML = 'By clicking, I accept the Terms of Service Your privacy is protected.';
                    window.location = '/#/dashboard/' + docRef.id;
                }, 2000);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                err.innerHTML = error.message;
            });
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            err.innerHTML = error;
        }); 
    }
    ShowPage1 = () => {
        const page1 = document.querySelector('.page1');
        const page2 = document.querySelector('.page2');

        page1.style.display = 'block';
        page2.style.display = 'none';
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
    }
    ShowPage2 = () => {
        
        const page1 = document.querySelector('.page1');
        const page2 = document.querySelector('.page2');
        const err = document.querySelector('.msg');
        const inputs = document.querySelectorAll('.page1 input');

        var empty = false;
        for (let i=0;i<inputs.length;i++) {
            if (inputs[i].value == '') {
                console.log('Empty');
                err.innerHTML = 'Please fill up all the blanks.'
                empty = true;
                setTimeout(() => {
                    err.innerHTML = '';
                }, 1400);
                break;
            } 
        }
        if (empty == false) {
            page2.style.display = 'block';
            page1.style.display = 'none';
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; 
        }
    }
    render(){
        return (
            <div className="SponsorSignUp">
                <Page>
                    <div className="Banner no-height"></div>
                    <br/>
                    <br/>
                    <br/>
                    <h4>Start sponsoring your business</h4>
                    <p>looking for sponsors instead? Open a <a href="/seek/signup">sponsor seeker</a> profile...</p>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="page1">
                        <h4>Basic information</h4>
                            <input className="input" id="compName" type="text" placeholder="Company Name"/>
                            <br/>
                            <input className="input" id="name" type="text" name="name" placeholder="Your name"/>
                            <br/>
                            <input className="input" id="email1" type="text" name="email" placeholder="Email"/>
                            <br/>
                            <hr/>
                            <input className="input" id="productType" type="text" placeholder="Type of Product/Service"/>
                            <br/>
                            <br/>
                            <table align="center">
                                <tr>
                                    <td>
                                        <span>Company size: </span>
                                    </td>
                                    <td>
                                        <select id="compSize">
                                            <option value="startup">Startup</option>
                                            <option value="corporation">Large corporation</option>
                                            <option value="individual">Individual</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Target sponsorship types: </span>
                                    </td>
                                    <td>
                                        <select id="compTargets">
                                            <option value="contentCreators">Content creators</option>
                                            <option value="bloggers">Bloggers</option>
                                            <option value="events">Events</option>
                                            <option value="mixed">Mixed</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <br/>
                            <button onClick={this.ShowPage2} className="btn btn-success">continue</button>
                        <br/>
                        <span className="text-danger msg"></span>
                        <span className="err text-danger"></span>
                        <br/>
                    </div>
                    <div className="page2">
                        <h4>Login and bank information</h4>
                        <span onClick={this.ShowPage1}>Back</span>
                        <br/>
                            <input className="input" id="password" type="password" name="password" placeholder="Password"/>
                            <br/>
                            <hr/>
                            <p>Payments</p>
                            <img src="https://cdn-images-1.medium.com/max/1200/1*Dw4-tOJ_9myFUywLd3qzjA.png" width="120" />
                            <br/>
                            <p className="info">*Please note that we only accept payments through <strong>paypal</strong> for the time being. You are not required to provide any information yet, however, future transactions will be completed through your paypal account.</p>
                            I accept <input type="checkbox" name="accept" value="accept" className="check"/>
                            <p className="align-left policy">By clicking, I accept the Terms of Service
                            Your privacy is protected.</p>
                            <img className="loader" width="70" src="https://www.unlimitedvacationclub.com/assets/images/loading.gif" />
                            <br/>
                            <button className="btn btn-success" onClick={this.signUpUser} >Create account</button>
                        <br/>
                        
                        <span className="err text-danger"></span>
                        <br/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Page>
            </div>
        )
    }
}

export default SponsorSignUp;