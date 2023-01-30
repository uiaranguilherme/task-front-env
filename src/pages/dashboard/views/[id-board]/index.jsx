import Layout from "../../../../layout"
import Row from "./components/row"
import { WhapperPageBoardId } from './styles'

const dados = [
    {
        fila: {
            _id: '',
            name: 'Planejamento de Entrega',
            limit: 20
        },
        tasks: [
            {
                title: '',
                description: '',
                severidade: '',
                state: 'Em Analise',
                author: {
                    name: '',
                    email: '',
                },
                responsavel: {
                    name: '',
                    email: ''
                },
                createdAt: Date.now().toLocaleString(),
                changeAt: Date.now().toLocaleString(),
                tags: [
                    'Portal Pós Venda'
                ],
                iteration: {
                    _id: '',
                    name: ''
                },
                estimativa: {
                    original: '',
                    restante: '',
                    completo: '',
                },
                childs: [],
                discussion: [
                    {
                        name: '',
                        email: '',
                        comentario: ''
                    }
                ]
            }
        ]
    },
    {
        fila: {
            _id: '',
            name: 'Em Execução',
            limit: 20
        },
        tasks: [
            {
                title: '',
                description: '',
                severidade: '',
                state: 'Em Analise',
                author: {
                    name: '',
                    email: '',
                },
                responsavel: {
                    name: '',
                    email: ''
                },
                createdAt: Date.now().toLocaleString(),
                changeAt: Date.now().toLocaleString(),
                tags: [
                    'Portal Pós Venda'
                ],
                iteration: {
                    _id: '',
                    name: ''
                },
                estimativa: {
                    original: '',
                    restante: '',
                    completo: '',
                },
                childs: [],
                discussion: [
                    {
                        name: '',
                        email: '',
                        comentario: ''
                    }
                ]
            }
        ]
    },
    {
        fila: {
            _id: '',
            name: 'Em Teste',
            limit: 20
        },
        tasks: [
            {
                title: '',
                description: '',
                severidade: '',
                state: 'Em Analise',
                author: {
                    name: '',
                    email: '',
                },
                responsavel: {
                    name: '',
                    email: ''
                },
                createdAt: Date.now().toLocaleString(),
                changeAt: Date.now().toLocaleString(),
                tags: [
                    'Portal Pós Venda'
                ],
                iteration: {
                    _id: '',
                    name: ''
                },
                estimativa: {
                    original: '',
                    restante: '',
                    completo: '',
                },
                childs: [],
                discussion: [
                    {
                        name: '',
                        email: '',
                        comentario: ''
                    }
                ]
            }
        ]
    },
    {
        fila: {
            _id: '',
            name: 'Em Homologação',
            limit: 20
        },
        tasks: [
            {
                title: '',
                description: '',
                severidade: '',
                state: 'Em Analise',
                author: {
                    name: '',
                    email: '',
                },
                responsavel: {
                    name: '',
                    email: ''
                },
                createdAt: Date.now().toLocaleString(),
                changeAt: Date.now().toLocaleString(),
                tags: [
                    'Portal Pós Venda'
                ],
                iteration: {
                    _id: '',
                    name: ''
                },
                estimativa: {
                    original: '',
                    restante: '',
                    completo: '',
                },
                childs: [],
                discussion: [
                    {
                        name: '',
                        email: '',
                        comentario: ''
                    }
                ]
            }
        ]
    },
    {
        fila: {
            _id: '',
            name: 'Em Produção',
            limit: 20
        },
        tasks: [
            {
                title: '',
                description: '',
                severidade: '',
                state: 'Em Analise',
                author: {
                    name: '',
                    email: '',
                },
                responsavel: {
                    name: '',
                    email: ''
                },
                createdAt: Date.now().toLocaleString(),
                changeAt: Date.now().toLocaleString(),
                tags: [
                    'Portal Pós Venda'
                ],
                iteration: {
                    _id: '',
                    name: ''
                },
                estimativa: {
                    original: '',
                    restante: '',
                    completo: '',
                },
                childs: [],
                discussion: [
                    {
                        name: '',
                        email: '',
                        comentario: ''
                    }
                ]
            }
        ]
    },
    {
        fila: {
            _id: '',
            name: 'Em Produção',
            limit: 20
        },
        tasks: [
            {
                title: '',
                description: '',
                severidade: '',
                state: 'Em Analise',
                author: {
                    name: '',
                    email: '',
                },
                responsavel: {
                    name: '',
                    email: ''
                },
                createdAt: Date.now().toLocaleString(),
                changeAt: Date.now().toLocaleString(),
                tags: [
                    'Portal Pós Venda'
                ],
                iteration: {
                    _id: '',
                    name: ''
                },
                estimativa: {
                    original: '',
                    restante: '',
                    completo: '',
                },
                childs: [],
                discussion: [
                    {
                        name: '',
                        email: '',
                        comentario: ''
                    }
                ]
            }
        ]
    }
]


export const BoardPerId = () => {
    return(
        <Layout
            visibleSubHeader={false}
        >
            <WhapperPageBoardId>
                {dados.map((fila, index) => <Row {...fila}/>)}
            </WhapperPageBoardId>
        </Layout>
    )
}