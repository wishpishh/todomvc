/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */


var app = app || {};

(function () {
	'use strict';

	var Utils = app.Utils;
	var LOCALSTORAGE_NAMESPACE = 'react-alt-todo';

	var TodoStore = function() {
		this.todos = Utils.store(LOCALSTORAGE_NAMESPACE + '.todos');
		this.nowShowing = Utils.store(LOCALSTORAGE_NAMESPACE + '.nowShowing') || app.ALL_TODOS;
		this.editing = Utils.store(LOCALSTORAGE_NAMESPACE + '.editing') || null;

		this.bindListeners({
			addTodo: app.todoActions.addTodo,
			toggleAll: app.todoActions.toggleAll,
			toggle: app.todoActions.toggle,
			destroy: app.todoActions.destroy,
			save: app.todoActions.save,
			clearCompleted: app.todoActions.clearCompleted,
			edit: app.todoActions.edit,
			show: app.todoActions.show
		});
	};

	TodoStore.prototype.addTodo = function(todo) {
		this.todos = this.todos.concat(todo);
		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.todos);
	};

	TodoStore.prototype.toggleAll = function(checked) {
		this.todos = this.todos.map(function(todo) {
			return Utils.extend({}, todo, {completed: checked});
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.todos);
	};

	TodoStore.prototype.toggle = function(todoToToggle) {
		this.todos = this.todos.map(function(todo) {
			return todo !== todoToToggle ?
				todo :
				Utils.extend({}, todo, {completed: !todo.completed});
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.todos);
	};

	TodoStore.prototype.destroy = function(todoToDestroy) {
		this.todos = this.todos.filter(function(todo) {
			return todo !== todoToDestroy;
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.todos);
	};

	TodoStore.prototype.save = function(command) {
		this.todos = this.todos.map(function(todo) {
			return todo !== command.todoToSave ?
				todo :
				Utils.extend({}, command.todoToSave, {title: command.text});
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.todos);
	};

	TodoStore.prototype.clearCompleted = function() {
		this.todos = this.todos.filter(function(todo) {
			return !todo.completed;
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.todos);
	};

	TodoStore.prototype.edit = function(id) {
		this.editing = id;

		Utils.store(LOCALSTORAGE_NAMESPACE + '.editing', this.editing);
	};

	TodoStore.prototype.show = function(nowShowing) {
		this.nowShowing = nowShowing;

		Utils.store(LOCALSTORAGE_NAMESPACE + '.nowShowing', this.nowShowing);
	};

	TodoStore.displayName = 'TodoStore';

	app.todoStore = app.alt.createStore(TodoStore);
}());