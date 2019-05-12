import React, { Component } from 'react';
import * as firebase from 'firebase';
import axios from 'axios';

class NonSponsorDash extends Component {
    state = {
        logoUrl: '',
        notifications: [ 
            'Partnership with SkillShare was confirmed',
            'TronGroom: "Please mention our soaps too..."',
            'Partnership with TronGroom was confirmed'
        ]
    }
    componentDidMount() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
        
        setTimeout(() => {
            var storageRef = firebase.storage().ref(this.props.name + '/' + 'image');
            storageRef.getDownloadURL().then((url) => {
                this.setState({logoUrl:url});
            }).catch((error) => {
                
            });
        }, 10);
    }
    showPopup = () => {
        document.querySelector('.select-logo').style.display = 'block';
    }
    closePopup = () => {
        document.querySelector('.select-logo').style.display = 'none';
    }
    uploadLogo = e => {
        e.preventDefault();
        const uploadBtn = document.querySelector('.upload-btn');
        const loader = document.querySelector('.loader');

            var storageRef = firebase.storage().ref();
            uploadBtn.disabled = true;
            loader.style.display = 'inline-block';

            // File or Blob named mountains.jpg
            var file = document.querySelector('#file').files;

            // Create the file metadata
            var metadata = {
                contentType: 'image/jpeg'
            };

            // Upload file and metadata to the object 'images/mountains.jpg'
            var uploadTask = storageRef.child(this.props.name + '/image').put(file[0], metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
            }, function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

                case 'storage/canceled':
                // User canceled the upload
                break;
                case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
            }, function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                uploadBtn.disabled = false;
                window.location.reload();
            });
        });
    }
    showLogo = () => {
        if (this.state.logoUrl == '') {
            return (
                    <div className="enter-logo" onClick={this.showPopup}>
                        <span>Display your logo here!</span>
                    </div>
                    );
        }else {
            return <img src={this.state.logoUrl} onClick={this.showPopup} className="companyLogo img-fluid" width="100" />         
        }
    }
    render () {
        return (
            <div className="NonSponsorDash">
                <div className="select-logo">
                    <img className="cross" onClick={this.closePopup} src="/static/widgets/cross.png" />
                    <h3>Upload new logo</h3>
                    <br/>
                    <input id="file" type="file"/>
                    <br/>
                    <img className="loader" width="40" src="https://www.unlimitedvacationclub.com/assets/images/loading.gif" />
                    <br/>
                    <button className="btn btn-success upload-btn" onClick={this.uploadLogo}>Upload</button>
                    <p className="msg text-secondary"></p>
                </div>
                <div className="Top">
                    <h2>Dashboard</h2>
                </div>
                <div className="box box1">
                    <div className="row">
                        
                        <div className="col-sm-4">
                            <div className="info">
                                {this.showLogo()}
                                <br/>
                                <h3>{this.props.name}</h3>
                                <strong>{this.props.who}</strong>
                                <br/>
                                <br/>
                                Email: {this.props.email}
                                <br/>
                                <a href={this.props.link}>{this.props.link}</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <br/>
                            <strong className="text-primary">Notifications</strong>
                            <div className="notifications">
                                {this.state.notifications.map(n => {
                                    return (
                                        <div className="notification">
                                            <span className="text-secondary">{n}</span>
                                        </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="finance">
                                <h4>This month's earnings</h4>
                                <h2>$389</h2>
                                <p className="text-secondary">status: not paid</p>
                                <br/>
                            </div>

                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default NonSponsorDash;