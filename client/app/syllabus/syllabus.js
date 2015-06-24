angular.module('classroom.syllabus', ['classroom.services'])

.controller('SyllabusController', function ($rootScope, $scope, $state, GetSyllabus) {
  $scope.isCollapsed = false;
  GetSyllabus.lessons().then(function(data) {
    $scope.lessons = angular.fromJson(data.data);
  });

  $scope.logout = function () {
    delete $rootScope.currentUser;
    delete localStorage.jwtToken;
    $state.go('landing.login');
  };
});
