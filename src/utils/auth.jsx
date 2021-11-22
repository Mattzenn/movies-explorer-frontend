export const BASE_URL = 'http://localhost:3000'
// const jwt = localStorage.getItem('token')

const handleResponse = response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password })
    })
        .then(handleResponse)
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    })
        .then(handleResponse)

}

export const checkToken = (token) => {
    console.log(`токен для проверки ${token}`)
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(handleResponse)
}

// export const ApiUserInfo = (token) => {
//     return fetch(`${BASE_URL}/users/me`, {
//         method: 'GET',

//         headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//         },
//     })
//         .then(handleResponse)

// }

