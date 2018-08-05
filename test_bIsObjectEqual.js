//test_bIsObjectEqual.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "bIsObjectEqual",
  "tests/bIsObjectEqual_EqualObjects_ReturnsTrue"
], function(
  TestSuite,
  log,
  bIsObjectEqual,
  bIsObjectEqual_EqualObjects_ReturnsTrue
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_bIsObjectEqual initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "bIsObjectEqual" );
           xTestSuite.add( bIsObjectEqual_EqualObjects_ReturnsTrue ); 
      xTestSuite.test();
    }
  });
});
