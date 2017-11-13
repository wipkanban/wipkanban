import React from 'react';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom';
import SubNav from './SubNav';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SubNav/><br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h6>
                            My companies&nbsp;|&nbsp;
                            <Link to="/companys" className="text-murrey">View all</Link>
                        </h6>
                        <div className="col-3">
                            <div className="card bg-light mb-3">
                                <div className="card-body">
                                    <div className="card-title">Guarida Imoveis</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-text">
                                                <strong>5 Projetcs</strong>
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-text">
                                                <strong>5 Boards</strong>
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-text">
                                                <strong>5 Teams</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Link className="text-murrey" to="/company">Go</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>
                            My projetcs&nbsp;|&nbsp;
                            <Link to="/projetcs" className="text-murrey">View all</Link>
                        </h6>
                        <div className="col-3">
                            <div className="card bg-light mb-3">
                                <div className="card-body">
                                    <div className="card-title">Projeto Inova</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-text">
                                                <strong>5 Boards</strong>
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-text">
                                                <strong>5 Teams</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Link className="text-murrey" to="/company">Go</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>
                            My boards&nbsp;|&nbsp;
                            <Link to="/boards" className="text-murrey">View all</Link>
                        </h6>
                        <div className="col-3">
                            <div className="card bg-light mb-3">
                                <div className="card-body">
                                    <div className="card-title">Atividades do mês</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-text">
                                                <strong>5 Phases</strong>
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-text">
                                                <strong>5 Tasks</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Link className="text-murrey" to="/company">Go</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;