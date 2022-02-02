import axios from 'axios';

export default class api {

    async createEvent (res) {
          
            try{

                await axios({
                    method : 'POST',
                    url: 'http://localhost:3333/event/create',
                    data: res,
                })
                .then( (response) => {
                    console.log({message: "Envio bem sucedido."})
                })
                .catch((erro) => console.log(erro))

            }catch(err){
                console.log({404: err})
            }
    }


    async listEvent (){

        try{

            await axios({
                method : 'get',
                url: 'http://localhost:3333/event/list',
                params: { email: 'guilherme@hotmail.com' },
            })
            .then( (response) => {
                const data = response
                console.log(data.data.list, {message: "Envio bem sucedido."})
            })
            .catch((erro) => console.log({ erro }))

        }catch(err){
            console.log({ 404: err })
        }
        
    }

    async updateEvent (params) {
        
        try{

            await axios({
                method: 'put',
                url: 'http://localhost:3333/event/list',
                params: { params }
            })
            .then((response) => console.log({res: "Sucesso!"}))
            .catch(err => console.log(err))
        }catch(err){
            console.log({404 : err})
        }
    }
}