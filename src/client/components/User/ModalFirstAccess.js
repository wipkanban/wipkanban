import React from "react";
import ModalBase from "../ModalBase";
import PropTypes from "prop-types";

const ModalFirstAccess = ({ user, onCloseModal, onUpdateProfile }) => {
  let nameInput, lastNameInput, emailInput, phoneInput, imageInput;

  const onSubmit = event => {
    event.preventDefault();

    onUpdateProfile({
      _id: user._id,
      name: nameInput.value,
      lastname: lastNameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      firstAccess: false,
      image: imageInput.files[0]
    });
  };

  return (
    <ModalBase
      onCloseModal={onCloseModal}
      title="Complete your profile"
      allowClose={false}
    >
      <form onSubmit={onSubmit} encType="multipart/form-data">
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
                <input
                  required="required"
                  type="text"
                  className="form-control"
                  defaultValue={user.name}
                  ref={el => (nameInput = el)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Lastname</label>
                <input
                  required="required"
                  type="text"
                  className="form-control"
                  defaultValue={user.lastname}
                  ref={el => (lastNameInput = el)}
                />
              </div>
            </div>
            <div className="col">
              <label>Your photo</label>
              <p className="text-center">
                <img src={user.image} alt="" className="img-thumbnail" />
              </p>
              <p>
                <input className="form-control" type="file" ref={el => (imageInput = el)} />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Email</label>
                <input
                  required="required"
                  type="text"
                  className="form-control"
                  defaultValue={user.email}
                  ref={el => (emailInput = el)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user.phone}
                  ref={el => (phoneInput = el)}
                />
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
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  onCloseModal(user._id);
                }}
                className="btn btn-outline-murrey"
              >
                {"I'll do it later"}
              </a>
              {"  "}
              <button className="btn btn-murrey">
                Update <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </ModalBase>
  );
};

ModalFirstAccess.propTypes = {
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
  onUpdateProfile: PropTypes.func,
  user: PropTypes.object
};

export default ModalFirstAccess;
