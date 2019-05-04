import React, { Component } from 'react';
import SponsorDash from '../../components/SponsorDash';
import NonSponsorDash from '../../components/NonSponsorDash';
import Page from '../../layouts/main';

class Dashboard extends Component {
    state = {
        user: {},
        userId: ''
    }
    componentDidMount() {
        if (localStorage.getItem('user') == '') {
            document.querySelector('.NotLoggedIn').style.display = 'block';
            document.querySelector('.LoggedIn').style.display = 'none';
        }else {
            var user = localStorage.getItem('user');
            var userId = localStorage.getItem('userId');
            user = JSON.parse(user);
            this.setState({user, userId});

            console.log(this.state.user);
            document.querySelector('.LoggedIn').style.display = 'block';
            document.querySelector('.NotLoggedIn').style.display = 'none';

            this.renderDash();
        }
    }
    renderDash = () => {
        if (this.state.user.type == 'sponsor seeker account' || !this.state.user.type) {
            return <NonSponsorDash/>
        }else if (this.state.user.type == 'sponsor account' || this.state.user){
            return <SponsorDash id={this.state.userId}  companyName={this.state.user.companyName} companyType={this.state.user.productType} email={this.state.user.email1}/>
        }
    }
    render () {
        return (
            <div className="Dashboard">
                <Page>
                    <div className="NotLoggedIn">
                        <h2>You are not signed in.</h2>
                        <p>Start by <a href="/sponsor/signup">creating</a> an account or sign in with an existing one.</p>
                    </div>
                    <div className="LoggedIn">
                        {this.renderDash()}
                    </div>
                </Page>
            </div>
        );
    }
}

export default Dashboard;