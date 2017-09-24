import React, {Component} from 'react'

class DescriptionBoard extends Component {

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="#tasks" data-toggle="tab">Quadro</a>
                        </li>
                        <li>
                            <a href="#dashboard" data-toggle="tab" id="carregarDashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="#team" data-toggle="tab">Time</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default DescriptionBoard;