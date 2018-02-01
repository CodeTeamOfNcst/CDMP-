beforeEach(function () {
    jasmine.addMatchers({
        toContainWord: function () {
            return {
                compare: function (actual, expected) {
                    var result = {};
                    result.pass = (actual.indexOf(expected) !== -1);
                    if( result.pass ) {
                        result.message = "Expected " + actual + " to contain " + expected + ".";
                    } else {
                        result.message = "Expected " + actual + " to contain " + expected + ", but it does not.";
                    }
                    return result;
                }
            }
        }
    });
});