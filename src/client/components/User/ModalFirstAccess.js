import React from "react";
import ModalBase from "../ModalBase";
import PropTypes from "prop-types";

const ModalFirstAccess = ({ user, onCloseModal }) => {
  return (
    <ModalBase
      onCloseModal={onCloseModal}
      title="Complete your profile"
      allowClose={false}
    >
      <div>
        <div className="row">
          <div className="col">
            <p>
              Please, complete your profile. Your can todo it more later
              clicking{" "}
              <a className="text-murrey" href="/myaccount">
                My acconut
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Lastname</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col">
            <label>Your photo</label>
            <p className="text-center">
              <img src="/images/user.jpg" alt="" className="img-thumbnail" />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>email</label>
              <input
                type="text"
                className="form-control"
                defaultValue={user.email}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              <a className="text-murrey" href="#">
                <small>Change password</small>
              </a>
              <hr />
            </p>
          </div>
          <div className="hide">
            <div className="col">
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Confirm password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-right">
            <button onClick={onCloseModal} className="btn">
              {"I'll do it later"}
            </button>
            {"  "}
            <button className="btn btn-murrey">
              Update <i className="fa fa-check" />
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

ModalFirstAccess.propTypes = {
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
  user: PropTypes.object
};

export default ModalFirstAccess;
