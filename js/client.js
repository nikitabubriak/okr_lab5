class Client 
{
    getData(endpoint) 
    {
        return fetch (`https://my-json-server.typicode.com/nikitabubriak/okr_lab4/${endpoint}`)
            .then(response => response.json());
    }
}

export default Client;
