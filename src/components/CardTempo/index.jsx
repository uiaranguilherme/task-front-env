import { useState } from 'react';
import Card from '../Card';
import { Container } from './styles';


const CardTempo = () => {
    // base de dados API
    const [data, setData] = useState({})
    const [condition, setCondition] = useState({})
    //Chaves da Api Weather API
    const API_KEY = '8104557e07a140d59e8232105222001';
    const API_TEMP_BASE = "http://api.weatherapi.com/v1";

    if ("geolocation" in navigator) {
        const wattheID = navigator.geolocation.watchPosition(
            async position => {
                try{
                    const { latitude, longitude } = position.coords;
        
                    const req = await fetch(`${API_TEMP_BASE}/current.json?key=${API_KEY}&q=${latitude},${longitude}&lang=pt&aqi=no`)
                        .then(async (dados)=>{
                            let data = await dados.json()
                            setData(data.current);
                            setCondition(data.current.condition)
                        })
                        .catch(erro => console.log(erro.message));
    
                    
                }catch(error){
                    console.log(error.message)
                }
            }
        );
    
        // Corta contato com a API de localização do Browser
            setTimeout(()=>{
                navigator.geolocation.clearWatch(wattheID)
            }, 1000)
            console.log(data, condition)
      } else {
        setData("I'm sorry, but geolocation services are not supported by your browser.");
      }

    
            

    return (
        <Card width={"auto"} heigth={"auto"} >
            <Container>
                <div >
                    <img src={condition.icon} alt="" srcset="" />
                </div>
                <section>
                    <div>
                        <h3>Temperatura</h3>
                        <h4>{data.temp_c} cº</h4>
                    </div>
                    <div>
                        <h3>Sensação Términca</h3>
                        <h4>{data.feelslike_c}</h4>
                    </div>
                </section>
                <div>
                    <h5>{condition.text}</h5>
                </div>
            </Container>
        </Card>
    );
}
export default CardTempo