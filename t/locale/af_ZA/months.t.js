require('proof')(24, function (assert) {
    var tz = require('timezone')(require('timezone/af_ZA'))

    // af_ZA abbreviated months
    assert(tz('2000-01-01', '%b', 'af_ZA'), 'Jan', 'Jan')
    assert(tz('2000-02-01', '%b', 'af_ZA'), 'Feb', 'Feb')
    assert(tz('2000-03-01', '%b', 'af_ZA'), 'Mrt', 'Mar')
    assert(tz('2000-04-01', '%b', 'af_ZA'), 'Apr', 'Apr')
    assert(tz('2000-05-01', '%b', 'af_ZA'), 'Mei', 'May')
    assert(tz('2000-06-01', '%b', 'af_ZA'), 'Jun', 'Jun')
    assert(tz('2000-07-01', '%b', 'af_ZA'), 'Jul', 'Jul')
    assert(tz('2000-08-01', '%b', 'af_ZA'), 'Aug', 'Aug')
    assert(tz('2000-09-01', '%b', 'af_ZA'), 'Sep', 'Sep')
    assert(tz('2000-10-01', '%b', 'af_ZA'), 'Okt', 'Oct')
    assert(tz('2000-11-01', '%b', 'af_ZA'), 'Nov', 'Nov')
    assert(tz('2000-12-01', '%b', 'af_ZA'), 'Des', 'Dec')

    // ' + name + ' months
    assert(tz('2000-01-01', '%B', 'af_ZA'), 'Januarie', 'January')
    assert(tz('2000-02-01', '%B', 'af_ZA'), 'Februarie', 'February')
    assert(tz('2000-03-01', '%B', 'af_ZA'), 'Maart', 'March')
    assert(tz('2000-04-01', '%B', 'af_ZA'), 'April', 'April')
    assert(tz('2000-05-01', '%B', 'af_ZA'), 'Mei', 'May')
    assert(tz('2000-06-01', '%B', 'af_ZA'), 'Junie', 'June')
    assert(tz('2000-07-01', '%B', 'af_ZA'), 'Julie', 'July')
    assert(tz('2000-08-01', '%B', 'af_ZA'), 'Augustus', 'August')
    assert(tz('2000-09-01', '%B', 'af_ZA'), 'September', 'September')
    assert(tz('2000-10-01', '%B', 'af_ZA'), 'Oktober', 'October')
    assert(tz('2000-11-01', '%B', 'af_ZA'), 'November', 'November')
    assert(tz('2000-12-01', '%B', 'af_ZA'), 'Desember', 'December')
})
