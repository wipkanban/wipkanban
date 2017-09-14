import actionsType from '../actions/actionsType';
import update from 'immutability-helper';

const initialState = {
    openModal: false,
    columns: [
        {
            "id": 1,
            "title": "A fazer",
            "showInputEditNameColumn": false,
            "showInputNewTask": false,
            "tasks": [
                {
                    "id": 1,
                    "title": "Relatório - Análise detalhada do consultor",
                    "checklists": "0/4",
                    "data_cadastro": "2017-08-14 09:16:18.989836",
                    "data_inicio_timer": null,
                    "data_termino": null,
                    "datafinalizacao": null,
                    "descricao": "",
                    "idcoluna": 84,
                    "idtarefa": 520,
                    "idusuario": 3363,
                    "marcadores": [
                        {
                            "cor": "rgb(0, 89, 147)",
                            "idmarcador": 233,
                            "nome": "Melhoria"
                        }
                    ],
                    "membros": [
                        {
                            "idusuario": 734,
                            "image": "/images/734-foto-apresentacao_small.jpg",
                            "nome": "LEONARDO AMERICO KEISMAN"
                        }, {
                            "idusuario": 3363,
                            "image": "/images/3363-foto-apresentacao_small.jpg",
                            "nome": "MAICON MORETTO DOS SANTOS"
                        }
                    ],
                    "nome": "MAICON MORETTO DOS SANTOS",
                    "posicao": 0,
                    "qtdComentarios": 0,
                    "realizado_data": false,
                    "status": true,
                    "timer_concluido": false,
                    "timer_end": null,
                    "timer_start": null,
                    "timer_status": null,
                    "titulo": "filtro de  nome do colaborador e  status"
                }, {
                    "id": 2,
                    "title": "Detalhada do consultor",
                    "preview": false,
                    "checklists": "",
                    "membros": []
                }, {
                    "id": 3,
                    "title": "Novo car de qualquer coisa",
                    "preview": false,
                    "checklists": "",
                    "membros": []
                }
            ]
        }, {
            "id": 2,
            "title": "Fazendo",
            "showInputEditNameColumn": false,
            "showInputNewTask": false,
            "tasks": [
                {
                    "id": 4,
                    "title": "Relatório 4 - Análise detalhada do consultor",
                    "preview": false,
                    "checklists": "",
                    "membros": []
                }, {
                    "id": 5,
                    "title": " 5 - Detalhada do consultor",
                    "preview": false,
                    "checklists": "",
                    "membros": []
                }
            ]
        }
    ]

}

function getTaskIndex(state, idtask, columnIndex) {

    return state[columnIndex]
        .tasks
        .findIndex((task) => task.id === idtask);
}

function getColumnIndex(state, idcolumn) {
    return state.findIndex((column) => column.id === idcolumn);
}

const task = (state = initialState, action) => {

    let indexColumn;

    switch (action.type) {
        case actionsType.TOGGLE_INPUT_NEW_TASK:
            indexColumn = state
                .columns
                .findIndex((column) => column.id === action.id);

            let showInputNewTask = !state.columns[indexColumn].showInputNewTask;

            let newState = update(state, {

                columns: {
                    [indexColumn]: {
                        showInputNewTask: {
                            $set: showInputNewTask
                        }
                    }
                }

            });

            return newState;

        case actionsType.CREATE_NEW_TASK:

            indexColumn = state
                .columns
                .findIndex((column) => column.id === action.idcolumn);

            let task = {
                "id": Date.now(),
                "title": action.text,
                "preview": false,
                "checklists": "",
                "membros": []
            };

            return update(state, {

                columns: {
                    [indexColumn]: {
                        tasks: {
                            $push: [task]
                        }
                    }
                }

            });
        case actionsType.OPEN_MODAL_TASK:

            return {
                ...state,
                openModal: true
            }

        case actionsType.CLOSE_MODAL:

            return {
                ...state,
                openModal: false
            }

        case actionsType.UPDATE_TASK_POSITION:

            let columnIndex = getColumnIndex(state.columns, action.idcolumn);

            let columnIndexDragged = getColumnIndex(state.columns, action.idcolumnDragged);

            let cardIndex = getTaskIndex(state.columns, action.taskId, columnIndexDragged);

            let card = state.columns[columnIndexDragged].tasks[cardIndex];

            return update(state, {
                columns: {
                    [columnIndexDragged]: {
                        tasks: {
                            $splice: [
                                [cardIndex, 1]
                            ]
                        }
                    },
                    [columnIndex]: {
                        tasks: {
                            $push: [card]
                        }
                    }
                }
            });
        default:
            return state;

    }

};

export default task;