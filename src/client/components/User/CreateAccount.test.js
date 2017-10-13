import React from 'react'
import {Provider} from 'react-redux';
import CreateAccount from './CreateAccount';

// setup file
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {mount, shallow} from 'enzyme'
configure({adapter: new Adapter()});
import configureStore from 'redux-mock-store'

describe('Create Account User', () => {

    let createAccount;

    const testValues = {
        state: {
            success: false,
            showPreloader: false
        },
        onCreateAccount: jest.fn()
    };

    beforeEach(() => {
        createAccount = shallow(<CreateAccount {...testValues}/>);
    });

    it('should have 5 inputs', () => {
        expect(createAccount.find('input').length).toEqual(5);
    });

    it('should have 1 button for submit', () => {
        expect(createAccount.find('button').length).toEqual(1);
    });

});