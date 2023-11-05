const baseUrl = 'http://localhost:3030/jsonstore/users';


export const getAll = async() => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const data = Object.values(result);
  

    return data;


}

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`)
    const result = await response.json()
    
    console.log(result)

    return result.user;
}

export const create = async({userData}) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    
    const result = await response.json();
    console.log('RESULT',result);

    return result.user;

}