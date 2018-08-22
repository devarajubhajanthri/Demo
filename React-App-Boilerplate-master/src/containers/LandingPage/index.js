import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../components/buttons/Button";
import Logo from "./../../components/Logo";
import NavMenu from "./../../components/nav/NavMenu";
import NavItem from "./../../components/nav/NavItem";
import PopupWindow from "./../../containers/widgits/enrollment/PopupWindow";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Vineet"
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.setState({
          name: "Vineet"
        })
    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name !== nextState.name) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUnMount() {

    }

    componentWillReceiveProps(nextPorps) {
        console.log(nextPorps);
    }

    enrollMerchant = () => {
        console.log("enroll");
    }

    loginMerchant = () => {
        console.log("login");
    }

    loginAdmin = () => {
        console.log("login admin");
    }

    render() {
      return (
          <div>
              <Logo/>
              <NavMenu>
                  <NavItem path="/login">Merchant Login</NavItem>
                  <NavItem path="/somepath1">How it works?</NavItem>
                  <NavItem path="/somepath2">Why Funds advance</NavItem>
                  <PopupWindow path="/PopupWindow">Pop-Up Window Page</PopupWindow>
              </NavMenu>
              <div>
                  <Button onClick={this.enrollMerchant} buttonName="Enroll"/>
                  <Button onClick={this.loginMerchant} buttonName="Merchant Login" />
                  <Button onClick={this.loginAdmin} buttonName="Admin Login" />
              </div>


<br/>

<button type="button" className="" data-toggle="modal" data-target="#myModal">
  Open modal
</button>


<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-header">
        <p className="modal-title" style={{color:"red"}}>Please Enter pass code sent to email and mobile phone:</p>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

    
      <div className="modal-body">

<input className="form-control form-control-sm" type="text" placeholder="PASSCODE" minLength="4" maxLength="6" name="OTP" size="10" required />
       
      </div>
      <div className="modal-footer">
        <button type="button" className="" data-dismiss="modal" style={{textalign:"center"}}>Submit</button>
      </div>

    </div>
  </div>
</div>

         
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
