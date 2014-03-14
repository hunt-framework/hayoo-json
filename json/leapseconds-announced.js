[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "leapseconds-announced"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a static \u003ccode\u003e\u003ca\u003eLeapSecondTable\u003c/a\u003e\u003c/code\u003e \"containing\"\nthe leap seconds announced at library release time. This version\nwill become invalidated when/if the International Earth Rotation\nand Reference Systems Service (IERS) announces a new leap second at\n\u003ca\u003ehttp://hpiers.obspm.fr/eoppc/bul/bulc/bulletinc.dat\u003c/a\u003e.\nAt that time a new version of the library will be released, against\nwhich any code wishing to remain up to date should be recompiled.\n\u003c/p\u003e\u003cp\u003eThis module is intended to provide a quick-and-dirty leap second solution\nfor one-off analyses concerned only with the past and present (i.e. up\nuntil the next as of yet unannounced leap second), or for applications\nwhich can afford to be recompiled against an updated library as often\nas every six months.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.Clock.AnnouncedLeapSeconds",
          "name": "AnnouncedLeapSeconds",
          "package": "leapseconds-announced",
          "source": "src/Data-Time-Clock-AnnouncedLeapSeconds.html",
          "type": "module"
        },
        "index": {
          "description": "Provides static LeapSecondTable containing the leap seconds announced at library release time This version will become invalidated when if the International Earth Rotation and Reference Systems Service IERS announces new leap second at http hpiers.obspm.fr eoppc bul bulc bulletinc.dat At that time new version of the library will be released against which any code wishing to remain up to date should be recompiled This module is intended to provide quick-and-dirty leap second solution for one-off analyses concerned only with the past and present i.e up until the next as of yet unannounced leap second or for applications which can afford to be recompiled against an updated library as often as every six months",
          "hierarchy": "Data Time Clock AnnouncedLeapSeconds",
          "module": "Data.Time.Clock.AnnouncedLeapSeconds",
          "name": "AnnouncedLeapSeconds",
          "package": "leapseconds-announced",
          "partial": "Announced Leap Seconds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leapseconds-announced/docs/Data-Time-Clock-AnnouncedLeapSeconds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLeapSecondTable\u003c/a\u003e\u003c/code\u003e containing all leap seconds\n up to 2012-07-01.\n\u003c/p\u003e",
          "module": "Data.Time.Clock.AnnouncedLeapSeconds",
          "name": "lst",
          "package": "leapseconds-announced",
          "signature": "LeapSecondTable",
          "source": "src/Data-Time-Clock-AnnouncedLeapSeconds.html#lst",
          "type": "function"
        },
        "index": {
          "description": "LeapSecondTable containing all leap seconds up to",
          "hierarchy": "Data Time Clock AnnouncedLeapSeconds",
          "module": "Data.Time.Clock.AnnouncedLeapSeconds",
          "name": "lst",
          "package": "leapseconds-announced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leapseconds-announced/docs/Data-Time-Clock-AnnouncedLeapSeconds.html#v:lst"
      }
    }
  ]
]