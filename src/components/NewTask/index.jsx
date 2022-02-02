import { useState } from "react";
import { Container, SameTaskIcon, TitleTask, DescriTask, SubTask, SameIconTask, FormContent } from "./styles";
import { Form } from "@unform/web";

import Card from '../Card';
import Button from '../Button';
import Input from '../Form/Input';

import api from '../../services/api.services';

const NewTask = () => {
    // estados dos inputs
    // estado do nome da task
    const [taskName, setTaskName] = useState('');
    
    
    //estado das sub-tarefas (array)
    const [task, setTask] = useState([ ]);
    
    //estado da descrição da task
    const [ taskDescription, setTaskDescription ] = useState('')

    //função de pegar dados por submit
    function getData(data){
        setTask([...task, data.task])
    }

    //função para enviar a nova task para backend:
    // Para Requisições em POST é necessário ter os seguintes dados:
    //"email": um email cadastrado na plataforma;
	//"eventName": o nome do evento a ser criado;
	//"description": a descrição do evento;
	//"subtask": um array com com as sub-tarefas;
	//"process": 
    const res = {
        email: "guilherme@hotmail.com",
	    eventName: taskName,
	    description: taskDescription, 
	    subtask: task,
        etiquetas: [],
	    process: 'create', 
    }

    //requisição ao banco de dados
    

    return (
        <Card width={"auto"} heigth={"auto"}>
            <Container>
                    <TitleTask>
                            <Form onChange={(e) => {setTaskName(e.target.value); console.log(taskName)}}>
                                <Input name={"taskName"} placeholder={'Task Name'}/>
                            </Form>
                    </TitleTask>
                    <DescriTask>
                        <textarea type="text" placeholder="Decribe the new task?" onChange={(e) => setTaskDescription(e.target.value)}/>
                    </DescriTask>
                    <SubTask>
                        <div>   
                            <SameTaskIcon/>
                            <p>Create New Sub-tasks</p>
                        </div>
                        <section>
                            <div>
                                <Form onSubmit={getData}>
                                    <FormContent>
                                        <button type="submit" ><SameIconTask/></button>
                                        <Input  name={"task"}/>
                                    </FormContent>
                                </Form>
                            </div>
                            <ul>
                                {
                                    task.map((item) => {return <li key={item}>{item}</li>})
                                }
                            </ul>
                        </section>
                    </SubTask>
                    
                    <Button color={"black"} name={"Criar"} funcao={() => api.createEvent(res)}/>
            </Container>
        </Card>
    );
};

export default NewTask;