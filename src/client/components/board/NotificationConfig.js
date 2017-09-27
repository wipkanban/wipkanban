import React, {Component} from 'react'

class NotificationConfig extends Component {

    render() {
        return (
            <div className="btn-group">

                <button
                    type="button"
                    className="btn btn-success dropdown-toggle btn-sm"
                    data-toggle="dropdown">
                    <span className="fa fa-bell"></span>
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                    <li>
                        <a className="notificacao" href="#1">

                            <b>Me avise de todos os eventos do quadro.</b><br/>
                            Você será notificado de qualquer criação,<br/>
                            alteração ou comentário que acontecer no quadro.
                        </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a className="notificacao" href="#2">

                            <b>Me avise dos eventos em que estou envolvido.</b><br/>
                            Você será notificado apenas nas suas tarefas.
                        </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a className="notificacao" href="#3">

                            <b>Não me avise. Eu vou consultar quando quiser.</b><br/>
                            Você não receberá nenhuma notificação.
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NotificationConfig;