const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {
    static all = () => {
        return fetch(endPoint)
            .then(response => response.json())
            .catch(err => console.log(`Couldn't get all todos`, err))
    }
}

export default TodoModel