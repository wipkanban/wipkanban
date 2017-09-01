import React, {Component} from 'react'
import TitleBoard from './TitleBoard'
import NotificationConfig from './NotificationConfig'
import PermissionConfig from './PermissionConfig'
import ConfigureBoard from './ConfigureBoard'
import DescriptionBoard from './DescriptionBoard'
import Board from './Board'
import {Container} from 'flux/utils';
import CardActionCreators from '../../actions/CardActionCreators';
import CardStore from '../../stores/CardStore';
// Polyfills
import 'babel-polyfill';
import 'whatwg-fetch';

class BoardContainer extends Component {

    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        CardActionCreators.fetchCards();
    }

    updateCardPosition(cardId, afterId) {
        // Only proceed if hovering over a different card
        if (cardId !== afterId) {
            // Find the index of the card
            let cardIndex = this
                .state
                .cards
                .findIndex((card) => card.id == cardId);
            // Get the current card
            let card = this.state.cards[cardIndex]
            // Find the index of the card the user is hovering over
            let afterIndex = this
                .state
                .cards
                .findIndex((card) => card.id == afterId);
            // Use splice to remove the card and reinsert it a the new index

        }
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">

                        <TitleBoard title="Projeto Inova"/>

                        <NotificationConfig/>
                        &nbsp;
                        <PermissionConfig/>
                        &nbsp;
                        <ConfigureBoard/>
                        <br/><br/>

                    </div>
                </div>
                <div className="row">
                    <DescriptionBoard/>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tab-content">
                            <div className="tab-pane" id="dashboard"></div>

                            <div className="tab-pane active" id="tasks">
                                <div className="text-right hide">
                                    <div className="btn-group">
                                        <button id="btnMostrarQuadro" type="button" className="btn btn-blue active">Quadro</button>
                                        <button id="btnMostrarGantt" type="button" className="btn btn-blue">Gantt</button>
                                    </div>
                                </div>

                                <Board
                                    columns={this.state.columns}
                                    updateCardPosition={this
                                    .updateCardPosition
                                    .bind(this)}/>

                                <div id="gantt" className="hide"><br/>
                                    <div id="gantt_chart"></div>
                                </div>
                            </div>
                            <div className="tab-pane" id="team"></div>
                        </div>

                    </div>
                </div>
            </div>

        )

    }

};

BoardContainer.getStores = () => ([CardStore]);
BoardContainer.calculateState = (prevState) => ({
    columns: CardStore.getState()
});
export default Container.create(BoardContainer);