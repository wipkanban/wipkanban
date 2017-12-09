import {connect} from 'react-redux';
import * as actions from '../../actions/Login';
import FormLogin from './FormLogin';

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin(email, password, event) {
            dispatch(actions.login(email, password));
            event.preventDefault();
        }
    }
};

const mapStateToProps = (state) => ({state: state.loginReducer});

const FormLoginContainer = connect(mapStateToProps, mapDispatchToProps)(FormLogin);

export default FormLoginContainer;