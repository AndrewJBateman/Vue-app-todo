const app = new Vue({
	el: '#app',
	data: {
		title: "List of Todos",
		newTodo: "",
		todos: []
	},
	methods: {
		addTodo() {
			console.log('form submitted');
			this.todos.push({
				title: this.newTodo,
				done: false
			});
			this.newTodo = ""; /*clear input box*/
		},
		removeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos.splice(todoIndex, 1);
		},
		allDone() {
			this.todos.forEach(todo => {
				todo.done = true;
			});
		}
	}
})	