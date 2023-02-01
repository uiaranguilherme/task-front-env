import { WhapperInfoTask, Box, Label, Input, Select } from'./styles'
import { formatDate } from '../../../../../utils/formatDate';

const Properties = (props) => {

    return(
        <WhapperInfoTask>
            <Box>
                <Label>Severity</Label>
                <Select value={props.severity}>
                    <option value="1 - Baixo">1 - Baixo</option>
                    <option value="2 - Alto">2 - Alto</option>
                    <option value="3 - Médio">3 - Médio</option>
                </Select>
            </Box>
            <Box>
                <Label>Create At</Label>
                <Input type='date' value={formatDate(props.createdAt)}/>
            </Box>
            <Box>
                <Label>Change At</Label>
                <Input type='date' value={formatDate(props.changeAt)}/>
            </Box>
            <Box title='Estimativa Original'>
                <Label>Original</Label>
                <Input value={props.estimated.original}/>
            </Box>
            <Box title='Estimativa Restante'>
                <Label>Remaining</Label>
                <Input value={props.estimated.remaining}/>
            </Box>
            <Box title='Estimativa Completa'>
                <Label>Complete</Label>
                <Input value={props.estimated.complete}/>
            </Box>
            <Box title='Bloqueio'>
                <Label>Block</Label>
                <Select value={props.block ? 'true' : 'false'}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </Select>
            </Box>
            <Box title='Tipo do bloqueio'>
                <Label>Type</Label>
                <Select value={props.block.type}>
                    <option value="local">Local</option>
                    <option value="Interna">Interna</option>
                </Select>
            </Box>
            <Box title='Motivo do bloqueio'>
                <Label>Reason</Label>
                <Input value={props.block.reason}/>
            </Box>
        </WhapperInfoTask>
    ); 
}

export default Properties