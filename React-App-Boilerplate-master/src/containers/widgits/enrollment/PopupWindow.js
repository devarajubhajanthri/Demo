
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Button from "./../../../components/buttons/Button";

class PopupWindow extends Component {

    render() {
      return (
          <div>

  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
   Open modal
   </button>
   
  <div className="modal" id="myModal">
     <div className="modal-dialog">
         <div className="modal-content">
             <div className="modal-header">
                <p className="modal-title">Please Enter pass code sent to email and mobile phone:</p>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
        <div className="modal-body">
          <input type="number" className="form-control" id="usr" minLength="4" maxLength="6" name="OTP" placeholder="PASSCODE"/>
     </div> 

     <div className="modal-footer">
        <button type="button" className="" data-dismiss="modal">Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PopupWindow);
