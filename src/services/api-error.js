//eslint-disable-next-line
export default {
    errorHandler: error => {
        const {response} = error;
        const status = response ? response.status : '';

        switch (status) {
            case 400:
            case 401:
            case 403:
            case 404:
            case 409:
            case 417:
            case 500:
            case 502:
                if(error.response.data)
                  throw error.response.data
                 else{
                     throw new Error('Sorry Internal Server Error')
                 }
            default:
                let errorObj = {
                    errorMessage: error.message||error.errorMessage||'Sorry, Internal Server Problem occurred.',
                    stack: error.stack
                };
                throw errorObj;
        }
    }

}
