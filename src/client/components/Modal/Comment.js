import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment, date_created, image, name}) => {
    return (
        <div className="comentario">
            <img src={image} title={name} className="pull-left rounded-circle" width="30"/>
            <a
                title="Editar comentário"
                href="#"
                className="btnEditarComentario float-right btn btn-sm">
                <i className="fa fa-edit"></i>
            </a>
            <a
                title="Excluir comentário"
                href="#"
                className="btnRemoverComentario float-right btn btn-sm text-danger">
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

Comment.propTypes = {
    comment: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Comment;