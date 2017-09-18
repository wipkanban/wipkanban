import React from 'react';

const Members = ({members}) => {
    
    return (
        <div className="col-lg-6 col-md-6">
            <p id="pAdicionarMembros">Membros |
                <a id="adicionarMembros" href="#">+ Adicionar
                    <span className="fa fa-users"></span>
                </a>
            </p>

            <p id="containerMembros">
                {members
                    .map(membro => (
                        <div key={membro.idusuario}>
                            <img src={membro.image} title={membro.nome} width="30" className="img-circle"/><br/>
                            <a title="Remover membro" className="text-danger" href="#">remover</a>
                        </div>
                    ))}
            </p>
            <div className="clearfix"></div>
        </div>
    )
};

export default Members;