app.directive('game', function() {
  return {
    restrict: 'E',
    scope: {
      listing: '='
    },
    templateUrl: 'js/directives/game.html' 
  };
});
