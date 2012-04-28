#!/usr/bin/env coffee
require("../proof") 17, ({ tz, moonwalk, utc }) ->
  detroit = tz require("../../zones/America/Detroit"), "America/Detroit"
  @equal detroit(tz("1905-01-01 05:32:11"), "%z"), "-0600", "seconds"
  @equal detroit(tz("1905-01-01 05:32:11"), "-1 millisecond", "%z"), "-0532", "seconds truncated"
  @equal detroit(tz("1905-01-01 05:32:11"), "%:z"), "-06:00", "minutes with colon"
  @equal detroit(tz("1905-01-01 05:32:11"), "-1 millisecond", "%:z"), "-05:32", "minutes with colon truncated"
  @equal detroit(tz("1905-01-01 05:32:11"), "%::z"), "-06:00:00", "unneeded seconds with colon"
  @equal detroit(tz("1905-01-01 05:32:11"), "-1 millisecond", "%::z"), "-05:32:11", "seconds with colon"
  @equal detroit(tz("1905-01-01 05:32:11"), "%:::z"), "-06", "enough colons"
  @equal detroit(tz("1905-01-01 05:32:11"), "-1 millisecond", "%:::z"), "-05:32:11", "more than enough colons"

  # Detroit did not observe DST in 1969. There is no rule in effect for 1969, so
  # we use the formatting information for the last rule change to set the
  # abbrevation variable.
  @equal detroit(moonwalk, "%Z"), "EST", "format no rule in effect"
  # Detroit did observe DST for a the year 1967.
  @equal detroit(moonwalk, "-2 years", "%Z"), "EDT", "format with letter"

  # RFC 3999 friendly offsets 
  @equal detroit(utc(2011, 0, 1, 0, 59), "America/Detroit", "%$"), "-05:00", "RFC 3999 hours and minutes"
  # TODO This didn't work.
  #@equal detroit(utc(2011, 0, 1, 0, 59), "UTC", "%$"), "Z", "RFC 399 UTC"
  @equal tz(utc(2011, 0, 1, 0, 59), "%$"), "Z", "RFC 399 UTC"
  @equal detroit(utc(1900, 0, 1, 0, 59), "America/Detroit", "%$"), "-05:32", "RFC 3999 hours and minutes truncated"
  @equal detroit(utc(1900, 0, 1, 0, 59), "America/Detroit", "%:$"), "-05:32:11", "RFC 3999 hours, minutes and seconds"

  tz = tz require("../../zones/Europe/Amsterdam")

  @equal tz("1916-01-03", "Europe/Amsterdam", "%Z"), "AMT", "dst full abbrev change back"
  @equal tz("1916-07-03", "Europe/Amsterdam", "%Z"), "NST", "dst full abbrev change forward"
  @equal tz("1916-11-03", "Europe/Amsterdam", "%Z"), "AMT", "dst full abbrev change back"

