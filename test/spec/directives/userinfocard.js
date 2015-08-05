'use strict';

describe('Directive: userInfoCard', function () {

  // load the directive's module
  beforeEach(module('directivesTesterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-info-card></user-info-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userInfoCard directive');
  }));
});
