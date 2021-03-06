const initialState = {
  todos: [
    {
      id: 1,
      value: 'Walk the dog.',
      completed: false
    }
  ],
  input: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT':
      return Object.assign({}, state, { input: action.payload });

    case 'ADD_TODO':
      if (state.input === '') {
        return Object.assign({}, state, { todos: state.todos, input: '' });
      }
      const newId = state.todos.length + 1;
      let newTodo = { id: newId, value: state.input, completed: false };
      let addTodos = state.todos.slice()
      addTodos.push(newTodo);
      return Object.assign({}, state, { todos: addTodos, input: '' });

    case 'TOGGLE_TODO':
      let toggleTodos = state.todos.slice();
      toggleTodos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
      return Object.assign({}, state, { todos: toggleTodos });

    case 'CLEAR_COMPLETED_TODOS':
      let clearCompletedTodos = state.todos.slice().filter(todo => !todo.completed);
      return Object.assign({}, state, { todos: clearCompletedTodos });

    case 'DELETE_TODO':
      let deleteTodos = state.todos.slice().filter(todo => todo.id !== action.payload);
      return Object.assign({}, state, { todos: deleteTodos });

    default:
      return state;
  }
};
