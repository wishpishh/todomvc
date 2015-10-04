/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */

var app = app || {};

(function () {
	'use strict';

	var Utils = app.Utils;

	app.todoActions = app.alt.createActions({
		addTodo: function (title) {
			this.dispatch({
				id: Utils.uuid(),
				title: title,
				completed: false
			});
		},
		toggleAll: function (checked) {
			this.dispatch(checked);
		},
		toggle: function (todoToToggle) {
			this.dispatch(todoToToggle);
		},
		destroy: function (todoToDestroy) {
			this.dispatch(todoToDestroy);
		},
		save: function (todoToSave, text) {
			this.dispatch({
				todoToSave: todoToSave,
				text: text
			});
		},
		clearCompleted: function () {
			this.dispatch();
		},
		edit: function (id) {
			this.dispatch(id);
		},
		show: function (nowShowing) {
			this.dispatch(nowShowing);
		}
	});
})();
