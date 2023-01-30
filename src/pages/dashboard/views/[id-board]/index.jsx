import Layout from "../../../../layout"

const dados = [
    {
        fila: 'Em Analise',
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

        </Layout>
    )
}