require('proof')(3, prove)

function prove (assert) {
    var tz = require('timezone'), util = require('../util')
    var detroit = tz(require('timezone/America/Detroit'), 'America/Detroit')
    assert(detroit(tz('1975-01-01 05:00'), '-1 millisecond', '%z'), '-0500', 'from UTC before boundary')
    assert(detroit(tz('1975-01-01 05:00'), '%z'), '-0500', 'from UTC at boundary')
    assert(detroit(tz('1975-01-01 05:00'), '+1 millisecond', '%z'), '-0500', 'from UTC after boundary')
}
