import Task from "../../Task";
import { Container, PreCreate } from "./styles";

const CreatedTasks = () => {
// PARA CARDS CRIADOS A COR DEVE SER "RED",
// PARA CRIAR MAIS TASKS É NECESSÁRIO ADICIONAR AS TASKS COM SEGUINTES PARAMETROS,
//  1º subtasks = SÃO AS TASKS SECUNDÁRIAS,
//  2º title = NOME DA TASK A SER CRIADA,
//  3º descricao = DESCRIÇÃO DA TASK PRINCIPAL,
//  4º tecLista = LISTA DE TÉCNICAS, OU TECNOLOGIAS EMPREGADAS PARA POR EM PRÁTICA A TASK
//  5ª color = A COR QUE DESEJA QUE O BOTÃO SEJA,
//  6º NomeButton = O NOME DO BOTÃO EM CADA TASK.


    return (
        <Container>
            <PreCreate>Em Processo</PreCreate>
            <section>
              {
              // Aqui vai as tasks
              }
            </section>
        </Container>
    );
}

export default CreatedTasks