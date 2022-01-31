import { Container, TaskDescription, SubTask, TecList, Icon } from "./styles";
import Card from './../Card';
import Button from './../Button';


const Task = ( {subtasks, title, descricao, tecLista, color, NomeButton} ) => {

    return(
        <Card>
            <Container>
                <div>
                    <h2>{title}</h2>
                </div>
                <TaskDescription>
                    <h4>{descricao}</h4>
                </TaskDescription>
                <SubTask>
                    <ul>
                        {subtasks.map((item) => <li><Icon onClick={(e) => {

                            if(e.target.classList.toggle('checked')){
                                e.target.classList.add('checked')
                            }else{
                                e.target.classList.remove('checked')
                            }
                            
                        }}/> <p>{item.name}</p></li>)}
                    </ul>
                </SubTask>
                <TecList>
                    {tecLista.map((item) => <div>{item}</div>)}
                </TecList>
                <Button color={color} name={NomeButton} />
            </Container>
        </Card>
    );
}
export default Task;