import React from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types';

const Comments = ({comments}) => {

    return (
        <div className="row">
            <div className="col-lg-12">
                <hr/>
                <p>
                    <b>Comentários</b>
                </p>
                <div id="containerComentarios">
                    {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
                </div><hr/>
                <div className="clearfix"></div>
                <div>
                    <div className="float-left">
                        <img
                            src="/guarida/server-ftp/programas/usuarios/funcionarios/361-foto-apresentacao_small.jpg"
                            className="rounded-circle"
                            width="25"/>
                    </div>
                    <div className="float-left col-lg-11 col-md-11 col-sm-11 col-xs-10">
                        <div
                            id="conteudoComentario"
                            placeholder="Escreva uma comentário"
                            contentEditable="true"
                            style={{
                            width: "100%",
                            minHeight: "50px",
                            border: "1px solid #c7c1c1"
                        }}></div>
                        <div className="alert-warning">
                            <p>
                                <b>Você pode marcar qualquer membro do quadro digitando {"@"}
                                    e o nome do membro. O membro marcado recebe um email do comentário.</b>
                            </p>

                        </div>
                        <div className="text-right">
                            <button className="btn btn-success" id="btnEnviarComentário">
                                Enviar
                                <i className="fa fa-save"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

Comments.propTypes = {
    comments: PropTypes.array.isRequired
}

export default Comments;