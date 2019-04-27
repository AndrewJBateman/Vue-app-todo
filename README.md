# Vue3 App Todo

* Vue app to display todo items with a checkbox to show item is done and a button to remove the todo item from the list.

**Note:** to open web links in a new window use: _ctrl+click on link_

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Data displayed using one-way data-binding and v-for loops.

## Screenshots

![Example screenshot](./img/todo.png)

## Technologies

* [Vue framework v2.6.10](https://vuejs.org/) used by adding the vue script to the body of the index.html page.

* [Vue DevTools extension for Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).

* [Code Garden ready-made css library](https://ez-css.now.sh/) used for basic styling.

## Setup

Open `index.html`. This is just a html page so it will not automatically reload if you change any of the source files.

## Code Examples

* App.js file: including data array and methods to add and remove todos

```javascript

const app = new Vue({
  el: '#app',
  data: {
	title: "hello",
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

```

## Status & To-Do List

* Status: Simple working app with basic UI.

* To-Do: add functionality - change todo checkbox to a proper button with 'todoDone()' function.

## Inspiration

* [Youtube: Coding Garden: Intro to Vue.js: Build a Todo App](https://www.youtube.com/watch?v=-X2hP9pOVss&t=553s)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!!!
