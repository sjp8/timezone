require('proof')(4, function (assert) {
    var tz = require('timezone')(require('timezone/sq_AL'))

    // sq_AL meridiem upper case
    assert(tz('2000-09-03 08:05:04', '%P', 'sq_AL'), 'pd', 'ante meridiem lower case')
    assert(tz('2000-09-03 23:05:04', '%P', 'sq_AL'), 'md', 'post meridiem lower case')

    // sq_AL meridiem lower case
    assert(tz('2000-09-03 08:05:04', '%p', 'sq_AL'), 'PD', 'ante meridiem upper case')
    assert(tz('2000-09-03 23:05:04', '%p', 'sq_AL'), 'MD', 'post meridiem upper case')
})
