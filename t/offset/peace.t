#!/usr/bin/env coffee
require("../proof") 5, ({ tz }) ->
  detroit = tz require("../../zones/America/Detroit"), "America/Detroit"
  @equal tz(detroit("1945-08-14 18:59:00"), "%F %T"), "1945-08-14 22:59:00", "to UTC before peace time"
  @equal tz(detroit("1945-08-14 19:00:00"), "%F %T"), "1945-08-14 23:00:00", "to UTC before peace time"

  @equal detroit(tz("1945-08-14 23:00:00"), "-1 millisecond", "%Z"), "EWT", "from UTC before peace time"
  @equal detroit(tz("1945-08-14 23:00:00"), "%Z"), "EPT", "from UTC at peace time"
  @equal detroit(tz("1945-08-14 23:00:00"), "+1 millisecond", "%Z"), "EPT", "from UTC after peace time"