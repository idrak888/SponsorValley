import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';


const signin = props => {
    const signInUser = (e) => {
        e.preventDefault();
        const err = document.querySelector('.err');
        const loader = document.querySelector('.loader');
        const email = document.querySelector('.email').value;
        const pass = document.querySelector('.pass').value;

        var db = firebase.firestore();

        loader.style.display = 'block';

        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(() => {
            db.collection("users").where("email1", "==", email)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data());
                    localStorage.setItem('user', JSON.stringify(doc.data()));
                    localStorage.setItem('userId', doc.id);
                });
            })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
            setTimeout(() => {
                loader.style.display = 'none';
                window.location.href = '/dashboard';
            }, 5000);
        })
        .catch(function(error) {
            loader.style.display = 'none';
            var errorMessage = error.message;
            
            err.innerHTML = errorMessage;
            setTimeout(() => {
                err.innerHTML = '';
            }, 2000);
        });
    }
    return (
        <div className="Signin">
            <br/>
            <img src="/static/favicon.png" />
            <br/>
            <strong>Sign in with existing user</strong><img className="cross" width="18" onClick={props.close} src="/static/widgets/cross.png"/>
            <br/>
            <br/>
            <form onSubmit={signInUser}>
                <input type="text" className="email input" name="email" placeholder="Email" />
                <br/>
                <input type="password" className="pass input" name="password" placeholder="Password" />
                <br/>
                <img className="loader" width="40" src="https://www.unlimitedvacationclub.com/assets/images/loading.gif" />
                <br/>
                <button className="btn btn-success" onClick={signInUser} >Sign In</button>
            </form>
            <br/>
            <span className="err text-danger"></span>
            <p>Don't have an account? <a href="#">Join now!</a></p>
        </div>
    );
}

export default signin;