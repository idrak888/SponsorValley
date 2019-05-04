import React, { Component } from 'react';
import * as firebase from 'firebase';
import Page from '../../../layouts/main';

class SeekerSignUp extends Component {
    componentDidMount() {
        document.querySelector('.page2').style.display = 'none';
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
    }
    signUpUser = () => {
        const loader = document.querySelector('.loader');
        const policy = document.querySelector('.policy');
        const err = document.querySelector('.err2');

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const who = document.getElementById('who').value;
        const platform = document.getElementById('platform').value;
        const category = document.getElementById('category').value;
        const businessLink = document.getElementById('businessLink').value;
        var platformOther = document.getElementById('platformOther').value;
        var categoryOther = document.getElementById('categoryOther').value;
        const password = document.getElementById('password').value;

        if (categoryOther == '') {
            categoryOther = 'none';
        }
        if (platformOther == '') {
            platformOther = 'none';
        }

        var userObj = {
            name, who, email, platform, category, platformOther, categoryOther, businessLink
        };
        console.log(userObj);

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            var user = firebase.auth().currentUser;
            var uid = user.uid;
            var providerData = user.providerData;
            policy.innerHTML = 'Creating account...';

            var db = firebase.firestore();

            db.collection("users").add({
                type: 'sponsor seeker account',
                name: userObj.name,
                who: userObj.who,
                email1: userObj.email,
                platform: userObj.platform,
                category: userObj.category,
                platformOther: userObj.platformOther,
                categoryOther: userObj.categoryOther,
                businessLink: userObj.businessLink
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                localStorage.setItem('user', JSON.stringify(userObj));
                localStorage.setItem('userId', docRef.id);

                setTimeout(() => {
                    policy.innerHTML = 'By clicking, I accept the Terms of Service Your privacy is protected.';
                    window.location = '/dashboard';
                }, 2000);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                err.innerHTML = error.message;
            });
        })
        .catch((error) => {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log(errorMessage);
            err.innerHTML = errorMessage;
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
        const inputs = document.querySelectorAll('.page1 .input');

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
    platformChange = (e) => {
        console.log(e.target.value);
        const input = document.querySelector('.platformOther');
        if (e.target.value == 'other') {
            input.style.display = 'block';
            input.classList.add('input');
        }else {
            input.style.display = 'none';
            input.classList.remove('input');
        }
    }
    categoryChange = (e) => {
        const input = document.querySelector('.categoryOther');
        if (e.target.value == 'other') {
            input.style.display = 'block';
            input.classList.add('input');
        }else {
            input.style.display = 'none';
            input.classList.remove('input');
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
                    <h4>Start finding sponsors</h4>
                    <p>Want to be a sponsor instead? Open a <a href="#" onClick={this.toSignUp}>sponsor</a> profile...</p>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="page1">
                        <h4>Basic information</h4>
                        <input className="input" id="name" type="text" placeholder="Your Name/Your Brand Name"/>
                        <br/>
                        <input className="input" id="email" type="text" name="name" placeholder="Your Email"/>
                        <br/>
                        <hr/>
                        <textarea className="input" id="who" rows="6" cols="20" placeholder="What do you do briefly? (min. words: 15)"></textarea>
                        <br/>
                        <br/>
                        <table align="center">
                            <div className="row">
                                <div className="col-xs-6">
                                    <span>Main platform: </span>
                                </div>
                                <div className="col-xs-6">
                                    <select id="platform" onChange={this.platformChange}>
                                        <option value="youtube">Youtube</option>
                                        <option value="blog">Blog</option>
                                        <option value="streamer">Streamer</option>
                                        <option value="event">Event promoter</option>
                                        <option value="other">Other (please mention below)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <input id="platformOther" className="platformOther" type="text" placeholder="Your main platform"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6">
                                    <span>Category: </span>
                                </div>
                                <div className="col-xs-6">
                                    <select id="category" onChange={this.categoryChange}>
                                        <option value="tech">Tech</option>
                                        <option value="humour">Humor</option>
                                        <option value="gaming">Gaming</option>
                                        <option value="finance">Finance</option>
                                        <option value="food">Food</option>
                                        <option value="fashionandlife">Fashion and Lifestyle</option>
                                        <option value="automobiles">Automobiles</option>
                                        <option value="science">Science</option>
                                        <option value="other">Other (please mention below)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <input id="categoryOther" className="categoryOther" type="text" placeholder="Your category"/>
                                </div>
                            </div>
                        </table>
                        <br/>
                        Business link: <br/>
                        <input className="input" id="businessLink" type="text" placeholder="Link to your platform's profile"/>
                        <br/>
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
                        <input className="input" id="password" type="password" name="password" placeholder="Create a password"/>
                        <br/>
                        <hr/>
                        <p>Paypal account</p>
                        <img src="https://cdn-images-1.medium.com/max/1200/1*Dw4-tOJ_9myFUywLd3qzjA.png" width="120" />
                        <br/>
                        <input className="input" type="text" placeholder="paypal info..."/>
                        <br/>
                        <input className="input" type="password" placeholder="paypal info..."/>
                        <br/>
                        <br/>
                        <p className="align-left policy">By clicking, I accept the Terms of Service
                        Your privacy is protected.</p>
                        <img className="loader" width="70" src="https://www.unlimitedvacationclub.com/assets/images/loading.gif" />
                        <br/>
                        <button className="btn btn-success" onClick={this.signUpUser} >Create account</button>
                        <br/>
                        <span className="err2 text-danger"></span>
                    <br/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </Page>
            </div>
        )
    }
}

export default SeekerSignUp;