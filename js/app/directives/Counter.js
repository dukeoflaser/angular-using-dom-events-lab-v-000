function Counter() {
	return {
		controller: function () {
			this.count = 0;
		},
		controllerAs: 'counter',
		link: function(scope, element, attr, ctrl) {
			element.on('click', function(){
				console.log(ctrl.count);
				ctrl.count++;
				scope.$apply();
			});

			scope.$on('$destroy', function(){
				element.off();
			});
		},
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ counter.count }}</div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('counter', Counter);
