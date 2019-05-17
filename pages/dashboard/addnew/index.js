import React, { Component } from 'react';
import axios from 'axios';
import Page from '../../../layouts/main';

class AddNew extends Component {
    postSponsor = (e) => {
        console.log('posting...');
        e.preventDefault();
        const btn = e.target;
        btn.disabled = true;

        const by = JSON.parse(localStorage.getItem('user')).companyName;
        var newDate = new Date();
        const date = '24th April 2019';

        const loader = document.querySelector('#loader');
        loader.style.display = 'block';

        const type = document.getElementById('type').value;
        const des = document.getElementById('des').value;
        const err = document.querySelector('#err');

        var max = document.getElementById('max').value;
        var min = document.getElementById('min').value;

        const priceRange = {minprice:min, maxprice:max};
        console.log({by, date, type, des, priceRange, requests:[], createdBy: localStorage.getItem('userId')});
        axios.post("https://desolate-cove-35133.herokuapp.com/sponsors", { 
            by,
            date,
            type,
            des,
            priceRange,
            requests: [],
            createdBy: localStorage.getItem('userId')
        }).then((doc) => {
            btn.disabled = false;
            loader.style.display = 'none';
            window.location.href = '/dashboard';
        }).catch(error => {
            btn.disabled = false;
            loader.style.display = 'none';
            err.innerHTML = 'Invalid data/Failed to upload';
        });
    }
    render(){
        return (
            <div className="AddNew">
                <Page>
                    <h2>Add new sponsorship <a href="/dashboard"><img className="cross" width="24" src="/static/widgets/back.png"/></a></h2>
                    <br/>
                    <form>
                        <textarea rows="5" id="des" cols="12" placeholder="What you need"></textarea>
                        <br/>
                        <label>Type of sponsorship:</label> 
                        <br/>
                        <input className="input" id="type" type="text" placeholder="e.g: Youtube Video; Blog post; Branded content" />
                        <br/>
                        <br/>
                        <label>Price Range (USD/$):</label>
                        <br/>
                        <table align="center">
                            <tr>
                                <td>
                                    <input type="number" id="min" placeholder="min-price"/>
                                </td>
                                <td>
                                    <input type="number" id="max" placeholder="max-price" />
                                </td>
                            </tr>
                        </table>
                        <br/>
                        <button onClick={this.postSponsor} className="btn btn-success">Post</button>
                        <img id="loader" className="loader" width="40" src="https://newvitruvian.com/images/transparent-google-loader-gif-4.gif" />
                        <br/>
                        <span className="text-danger err" id="err"></span>
                    </form>
                </Page>
            </div>
        );
    }
}

export default AddNew;