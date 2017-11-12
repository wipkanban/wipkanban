import React from 'react';
import configureStore from './configureStore'
import {loadColumns} from './actions/boardActions';
import UniversalProvider from './UniversalProvider';

const store = configureStore();

store.dispatch(loadColumns());

const Root = () => <UniversalProvider store={store}/>;

export default Root;