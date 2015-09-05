'use strict';

describe('Directive: spacebarsupport', function () {

  // load the directive's module
  beforeEach(module('directivesTesterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<spacebarsupport></spacebarsupport>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the spacebarsupport directive');
  }));
});
