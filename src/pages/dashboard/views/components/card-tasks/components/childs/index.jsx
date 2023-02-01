import { WhapperChildsTask, TaskDivider } from './styles'
import { BiTask } from 'react-icons/bi'
import { AiFillBug } from 'react-icons/ai'

const Childs = () => {
    return(
        <WhapperChildsTask>
            <TaskDivider>
                <BiTask/>
                45/46
            </TaskDivider>
            <TaskDivider>
                <AiFillBug/>
                45/46
            </TaskDivider>
        </WhapperChildsTask>
    )
}

export default Childs