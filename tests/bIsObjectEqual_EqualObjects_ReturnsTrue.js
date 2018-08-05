//bIsObjectEqual_EqualObjects_ReturnsTrue.js: Testing logic.

define([
	"bIsObjectEqual"
], function(
	bIsObjectEqual
) {
	return {
		"Name":"bIsObjectEqual_EqualObjects_ReturnsTrue",
		"Input": {
			"Comparator": { "Property": "Value" },
			"Comparand": { "Property": "Value" }
		},
		"Function": bIsObjectEqual,
		"ExpectedOutput": true
	};
});
