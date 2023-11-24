function skillsMember() {
  return {
    restrict: "E",
    scope: {
      member: "=",
    },
    templateUrl: "templates/skills-member.html",
    controller: function ($scope) {
      $scope.getSkillLevel = function (level) {
        return new Array(level);
      };
    },
  };
}
