// FRONTEND REQUIREMENTS:
// TWO FORMS:

// Registration Form:
// 1. firstName.
// 2. lastName.
// 3. userName.
// 4. password.
// 5. email.

// Login Form:
// 1. userName.
// 2. password.

// UI:
// Default Display: Guest.
// On user login: Display avatar with first letter of username.
// Default Display: Show all todos
// User UI: Display only user todos with status: "pending" or "done"
// Guest UI: See all Todos, and titles.

// API:
// Registration:
const API_BASE_URL = "API_URL"
const ENDPOINTS = {
	register: "/register",
	login: "/auth/login",
	addTodo: "/auth/addTodo",
	updateTodo: "/auth/updateTodo/todoId",
	todos: "/auth/todos",
	deleteTodo: "/auth/deleteTodo/todoId"
}
async function register() {
	const formData = {
		firstName,
		lastName,
		userName,
		email,
		password
	}
	const response = await fetch(`${API_BASE_URL}${ENDPOINTS.register}`, {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(formData)
	
	})

    const result = await response.json()
    console.log(result)
}

//Login 
async function login() {
    const loginData = {
        email,
        password
    }

    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.login}`, {
        method: "POST",
        headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(loginData)
        
    })

    const result = await response.json()
    console.log(result)
    localStorage.setItem("token", result.access_token)

}

