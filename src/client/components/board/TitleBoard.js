import React, {Component} from 'react'

class TitleBoard extends Component {

    render() {
        return (
            <div>
                <input type="hidden" id="idquadro" defaultValue={this.props.title}/>
                <h1 id="nomeQuadro">{this.props.title}</h1>
                <div className="form-group hide" id="campoNomeQuadro">
                    <input
                        type="text"
                        required="required"
                        className="form-control input-lg"
                        name="nome"/>
                </div>
            </div>
        );
    }

}

export default TitleBoard;