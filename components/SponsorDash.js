import React, { Component } from 'react';
import SponsorModule from './SponsorModule';
import * as firebase from 'firebase';
import axios from 'axios';
// import AddNew from './AddNew';

class SponsorDash extends Component {
    state = {
        logoUrl: '',
        sponsors: [],
        partners: [
            {name: 'TierZoo', status: 'Unfinished'},
            {name: 'Samonella Academy', status: 'Completed'},
            {name: 'Playbox8G', status: 'Cancelled'}
        ],
        notifications: [ 
            'New request from Playbox8G',
            'TierZoo: "Please send me your website link..."',
            'New request from The Inforgraphics Show',
            'Sponsorship with TierZoo was confirmed',
            'Payment was completed successfully'
        ]
    }
    componentDidMount() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
        console.log(this.props.id);
        axios.get("https://desolate-cove-35133.herokuapp.com/sponsors/" + localStorage.getItem('userId'))
        .then((doc) => {
            this.setState({sponsors:doc.data});
        });
        setTimeout(() => {
            var storageRef = firebase.storage().ref(this.props.companyName + '/' + 'image');
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
            var uploadTask = storageRef.child(this.props.companyName + '/image').put(file[0], metadata);

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
    showAddNew = () => {
        // document.querySelector('.AddNew').style.display = 'block';
    }
    renderSponsors = () => {
        if (this.state.sponsors.length == 0) {
            return <p className="text-secondary no-sponsors">No sponsorships yet. Start by adding</p>;
        }
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
            <div className="SponsorDash">

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
                            <div className="box responsive box1">
                                <div className="row">
                                    <div className="col-sm-6">
                                        {this.showLogo()}
                                        <br/>
                                        <h3>{this.props.companyName}</h3>
                                        {this.props.companyType}
                                        <br/>
                                        Email: {this.props.email}
                                    </div>
                                    <div className="col-sm-6">
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
                                </div>
                            </div>
                    <div className="row desktop">
                        <div className="col-sm-4">
                            <div className="box box1 side">
                                <h4 className="text-primary">Open Sponsorships</h4>
                                <br/>
                                <strong>Quick find</strong>
                                <br/>
                                <input type="search" placeholder="Search"/>
                                <br/>
                                {this.renderSponsors()}
                                {this.state.sponsors.map(i => {
                                    return <SponsorModule companyName={i.by} min={i.priceRange.minprice} max={i.priceRange.maxprice} description={i.description} date={i.dateCreated}/>;
                                })}
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="box box1">
                                <div className="row">
                                    <div className="col-sm-6">
                                        {this.showLogo()}
                                        <br/>
                                        <h3>{this.props.companyName}</h3>
                                        {this.props.companyType}
                                        <br/>
                                        Email: {this.props.email}
                                    </div>
                                    <div className="col-sm-6">
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
                                </div>
                            </div>
                        </div>
                    </div>
                <br/>
                <h4>Your partnerships</h4>
                <br/>
                <div className="slide-container">
                    {this.state.partners.map(p => {
                        return (
                            <div className="box box2">
                                <h5 className="text-primary">{p.name}</h5>
                                <br/>
                                Status: <p className="text-secondary">{p.status}</p>
                            </div>
                        )
                    })}
                </div>     
                <div className="sponsor-module-container">
                    <h4>Open sponsorships by {this.props.companyName}</h4>
                    <table align="center">
                        <tr>
                            <td>
                                <button className="btn btn-success">Edit</button>
                            </td>
                            <td>
                                <a href="/dashboard/addnew"><button className="btn btn-success">Add new +</button></a>
                            </td>
                        </tr>
                    </table>
                    <br/>
                    {this.renderSponsors()}
                    {this.state.sponsors.map(i => {
                        return <SponsorModule companyName={i.by} min={i.priceRange.minprice} max={i.priceRange.maxprice} description={i.description} date={i.dateCreated}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default SponsorDash;