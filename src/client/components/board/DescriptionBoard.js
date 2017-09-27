import React, {Component} from 'react'

class DescriptionBoard extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Quadro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dahboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default DescriptionBoard;