const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {
    static all = () => {
        return fetch(endPoint)
            .then(response => response.json())
            .catch(err => console.log(`Couldn't get all todos`, err))
    }

    static delete = (todo) => {
        return fetch(`${endPoint}/${todo._id}`, {
            method: "DELETE"
        }).then(response => response.json())
        .catch(err => console.log('Could not delete todo \n', err))
    }

    static update = (todo) => {
        return fetch(`${endPoint}/${todo._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(todo)
        })
          .then(response => response.json())
          .catch(err => console.log('Could not update todo \n', err))
      };

    static create = (todo) => {
        return fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).then(res => res.json()).catch(err => console.log(`Couldn't add todo `, err))
    }
}

export default TodoModel