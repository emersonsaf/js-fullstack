import axios from 'axios';

export const save = (data) => {
    const config = {
        method: 'POST',
        url: 'https://sheet.best/api/sheets/8709691d-4934-49ea-8924-bd5107613e1a',
        header: {
            "Content-Type": "application/json",
        },
        data
    }

    axios(config)
    .then((res)=>{
        console.log('Dados da planilha: ',res)
    })
    .catch(err => {
        console.log(err)
    })

}

