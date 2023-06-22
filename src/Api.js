
export function getTranslators(){
    return callApi(`${process.env.REACT_APP_TRANSLATORS_API_URL}/api/TranslatorsManagement/GetTranslators`)
}


function callApi(url, method){
    return window.fetch(url, {
        method: method || 'GET',
    })
}