import React from 'react';

const Comment = ({id, comment, date_created, image,name}) => {
    return (
        <div className="comentario">
            <img src={image} title={name} className="pull-left img-circle" width="30"/>
            <a
                title="Editar comentário"
                href="#"
                className="btnEditarComentario pull-right btn btn-default btn-xs">
                <i className="fa fa-edit"></i>
            </a>
            <a
                title="Excluir comentário"
                href="#"
                className="btnRemoverComentario pull-right btn btn-default btn-xs text-danger">
                <i className="fa fa-remove"></i>
            </a>
            <div>
                <p>&nbsp;&nbsp;&nbsp;
                    <b>{name}</b><br/>
                    &nbsp;&nbsp;&nbsp;{date_created}
                </p>
            </div>
            <div className="text-comentario">{comment}</div>
        </div>
    )
}

export default Comment;