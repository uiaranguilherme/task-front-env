import { useState } from "react";
import { Container, SameTaskIcon, TitleTask, DescriTask, SubTask, SameIconTask, FormContent } from "./styles";
import { Form } from "@unform/web";
import axios from '../axios';

import Card from '../Card';
import Tag from '../Tag';
import Button from '../Button';
import Input from '../Form/Input';

const NewTask = () => {
    // estados dos inputs
    const [taskName, setTaskName] = useState('');
    const [id, setId] = useState(0);
    const [task, setTask] = useState([ ]);

    //função de pegar dados por submit
    function getData(data){
        setTask([...task, {id: setId(id + 1), name: data.task}])
    }

    //função para enviar a nova task para backend

    return (
        <Card width={"auto"} heigth={"auto"}>
            <Container>
                    <TitleTask>
                            <Form onSubmit={(data) => {setTaskName(data.taskName)}}>
                                <Input name={"taskName"} placeholder={'Task Name'}/>
                            </Form>
                        <h3>
                            {taskName}
                        </h3>
                    </TitleTask>
                    <DescriTask>
                        <textarea type="text" placeholder="Decribe the new task?" />
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
                                    task.map((item) => {return <li key={item.id}>{item.name}</li>})
                                }
                            </ul>
                        </section>
                    </SubTask>
                    
                    <Tag/>
                    
                    <Button color={"black"} name={"Criar"} />
            </Container>
        </Card>
    );
};

export default NewTask;