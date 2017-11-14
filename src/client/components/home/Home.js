import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import {Link} from 'react-router-dom';
import SubNav from './SubNav';

const Home = () => {
    return (
        <div>
            <NavbarContainer/>
            <SubNav/><br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h6>
                            My companies&nbsp;|&nbsp;
                            <Link to="/companys" className="text-murrey">View all</Link>
                        </h6>

                        <div
                            className="col-lg-3 bg-success rounded"
                            style={{
                            height: '100px'
                        }}>
                            <a href="#" className="float-right text-white">
                                <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <h4 className="text-white">GuaridaImóveis</h4>
                            <p>5 Projecs</p>
                            <p>5 Projecs</p>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>
                            My projetcs&nbsp;|&nbsp;
                            <Link to="/projetcs" className="text-murrey">View all</Link>
                        </h6>
                        <h5>You do not have any registered projects yet.</h5><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>
                            My boards&nbsp;|&nbsp;
                            <Link to="/boards" className="text-murrey">View all</Link>
                        </h6>
                        <h5>You do not have any registered boards yet.</h5><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>
                            My teams&nbsp;|&nbsp;
                            <Link to="/boards" className="text-murrey">View all</Link>
                        </h6>
                        <h5>You do not have any registered teams yet.</h5><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;