function getApi(path){
    return window.fetch(getApiUrl(path));
}

function sendToApi(path, method, data){
    return window.fetch(getApiUrl(path), {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), 
    });
}

function getApiUrl(path){
    return `${process.env.REACT_APP_TRANSLATORS_API_URL}/api/${path}`;
}

export function getTranslators(){
    return getApi('TranslatorsManagement/GetTranslators');
}

export function addTranslator(translator){
    return sendToApi('TranslatorsManagement/AddTranslator', 'POST', translator);
}
