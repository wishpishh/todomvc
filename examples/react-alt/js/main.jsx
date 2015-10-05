/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React*/

var app = app || {};

(function () {
	'use strict';

	var TodoApp = app.TodoApp;

	React.render(
		<TodoApp/>,
		document.getElementsByClassName('todoapp')[0]
	);
})();