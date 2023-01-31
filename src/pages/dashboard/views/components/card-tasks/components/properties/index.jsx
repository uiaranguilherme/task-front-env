import { WhapperInfoTask, Box } from'./styles'
import Input from '../../../../../../../components/input'

const Properties = (props) => {

    console.log(props.changeAt.replaceAll('/', '-'));
    console.log(props.changeAt);
    return(
        <WhapperInfoTask>
            <Box>
                <label>Severity</label>
                <input value={props.severity}/>
            </Box>
            <Box>
                <label>Create At</label>
                <input type='date' value={props.createdAt.replaceAll('/', '-')}/>
            </Box>
            <Box>
                <label>Change At</label>
                <input type='date' value={props.changeAt.replaceAll('/', '-')}/>
            </Box>
            <Box title='Estimativa Original'>
                <label>Original</label>
                <input value={props.estimated.original}/>
            </Box>
            <Box title='Estimativa Restante'>
                <label>Remaining</label>
                <input value={props.estimated.remaining}/>
            </Box>
            <Box title='Estimativa Completa'>
                <label>Complete</label>
                <input value={props.estimated.complete}/>
            </Box>
            <Box title='Bloqueio'>
                <label>Block</label>
                <input value={props.block ? true : false}/>
            </Box>
            <Box title='Tipo do bloqueio'>
                <label>Type</label>
                <input value={props.block.type}/>
            </Box>
            <Box title='Motivo do bloqueio'>
                <label>Reason</label>
                <input value={props.block.reason}/>
            </Box>
        </WhapperInfoTask>
    ); 
}

export default Properties