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
        "word": "unix-time"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.UnixTime",
          "name": "UnixTime",
          "package": "unix-time",
          "source": "src/Data-UnixTime.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "UnixTime",
          "package": "unix-time",
          "partial": "Unix Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat of the strptime()/strftime() style.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "Format",
          "package": "unix-time",
          "source": "src/Data-UnixTime-Types.html#Format",
          "type": "type"
        },
        "index": {
          "description": "Format of the strptime strftime style",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "Format",
          "package": "unix-time",
          "partial": "Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure for UnixTime diff.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(3 :: UnixDiffTime) + 2\n\u003c/code\u003e\u003c/strong\u003eUnixDiffTime {udtSeconds = 5, udtMicroSecnods = 0}\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(2 :: UnixDiffTime) - 5\n\u003c/code\u003e\u003c/strong\u003eUnixDiffTime {udtSeconds = -3, udtMicroSecnods = 0}\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(3 :: UnixDiffTime) * 2\n\u003c/code\u003e\u003c/strong\u003eUnixDiffTime {udtSeconds = 6, udtMicroSecnods = 0}\n\u003c/pre\u003e",
          "module": "Data.UnixTime",
          "name": "UnixDiffTime",
          "package": "unix-time",
          "source": "src/Data-UnixTime-Types.html#UnixDiffTime",
          "type": "data"
        },
        "index": {
          "description": "Data structure for UnixTime diff UnixDiffTime UnixDiffTime udtSeconds udtMicroSecnods UnixDiffTime UnixDiffTime udtSeconds udtMicroSecnods UnixDiffTime UnixDiffTime udtSeconds udtMicroSecnods",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "UnixDiffTime",
          "package": "unix-time",
          "partial": "Unix Diff Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#t:UnixDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure for Unix time.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "UnixTime",
          "package": "unix-time",
          "source": "src/Data-UnixTime-Types.html#UnixTime",
          "type": "data"
        },
        "index": {
          "description": "Data structure for Unix time",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "UnixTime",
          "package": "unix-time",
          "partial": "Unix Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#t:UnixTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.UnixTime",
          "name": "UnixDiffTime",
          "package": "unix-time",
          "signature": "UnixDiffTime",
          "source": "src/Data-UnixTime-Types.html#UnixDiffTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "UnixDiffTime",
          "package": "unix-time",
          "partial": "Unix Diff Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:UnixDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.UnixTime",
          "name": "UnixTime",
          "package": "unix-time",
          "signature": "UnixTime",
          "source": "src/Data-UnixTime-Types.html#UnixTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "UnixTime",
          "package": "unix-time",
          "partial": "Unix Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:UnixTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdding difference to \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eUnixTime 100 2000 `addUnixDiffTime` microSecondsToUnixDiffTime (-1003000)\n\u003c/code\u003e\u003c/strong\u003eUnixTime {utSeconds = 98, utMicroSeconds = 999000}\n\u003c/pre\u003e",
          "module": "Data.UnixTime",
          "name": "addUnixDiffTime",
          "package": "unix-time",
          "signature": "UnixTime -\u003e UnixDiffTime -\u003e UnixTime",
          "source": "src/Data-UnixTime-Diff.html#addUnixDiffTime",
          "type": "function"
        },
        "index": {
          "description": "Adding difference to UnixTime UnixTime addUnixDiffTime microSecondsToUnixDiffTime UnixTime utSeconds utMicroSeconds",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "addUnixDiffTime",
          "normalized": "UnixTime-\u003eUnixDiffTime-\u003eUnixTime",
          "package": "unix-time",
          "partial": "Unix Diff Time",
          "signature": "UnixTime-\u003eUnixDiffTime-\u003eUnixTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:addUnixDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculating difference between two \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eUnixTime 100 2000 `diffUnixTime` UnixTime 98 2100\n\u003c/code\u003e\u003c/strong\u003eUnixDiffTime {udtSeconds = 1, udtMicroSecnods = 999900}\n\u003c/pre\u003e",
          "module": "Data.UnixTime",
          "name": "diffUnixTime",
          "package": "unix-time",
          "signature": "UnixTime -\u003e UnixTime -\u003e UnixDiffTime",
          "source": "src/Data-UnixTime-Diff.html#diffUnixTime",
          "type": "function"
        },
        "index": {
          "description": "Calculating difference between two UnixTime UnixTime diffUnixTime UnixTime UnixDiffTime udtSeconds udtMicroSecnods",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "diffUnixTime",
          "normalized": "UnixTime-\u003eUnixTime-\u003eUnixDiffTime",
          "package": "unix-time",
          "partial": "Unix Time",
          "signature": "UnixTime-\u003eUnixTime-\u003eUnixDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:diffUnixTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormatting \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in local time.\n This is a wrapper for strftime_l().\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "formatUnixTime",
          "package": "unix-time",
          "signature": "Format -\u003e UnixTime -\u003e IO ByteString",
          "source": "src/Data-UnixTime-Conv.html#formatUnixTime",
          "type": "function"
        },
        "index": {
          "description": "Formatting UnixTime to ByteString in local time This is wrapper for strftime",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "formatUnixTime",
          "normalized": "Format-\u003eUnixTime-\u003eIO ByteString",
          "package": "unix-time",
          "partial": "Unix Time",
          "signature": "Format-\u003eUnixTime-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:formatUnixTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormatting \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in GMT.\n This is a wrapper for strftime_l().\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eformatUnixTimeGMT webDateFormat $ UnixTime 0 0\n\u003c/code\u003e\u003c/strong\u003e\"Thu, 01 Jan 1970 00:00:00 GMT\"\n\u003c/pre\u003e",
          "module": "Data.UnixTime",
          "name": "formatUnixTimeGMT",
          "package": "unix-time",
          "signature": "Format -\u003e UnixTime -\u003e ByteString",
          "source": "src/Data-UnixTime-Conv.html#formatUnixTimeGMT",
          "type": "function"
        },
        "index": {
          "description": "Formatting UnixTime to ByteString in GMT This is wrapper for strftime formatUnixTimeGMT webDateFormat UnixTime Thu Jan GMT",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "formatUnixTimeGMT",
          "normalized": "Format-\u003eUnixTime-\u003eByteString",
          "package": "unix-time",
          "partial": "Unix Time GMT",
          "signature": "Format-\u003eUnixTime-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:formatUnixTimeGMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "fromClockTime",
          "package": "unix-time",
          "signature": "ClockTime -\u003e UnixTime",
          "source": "src/Data-UnixTime-Conv.html#fromClockTime",
          "type": "function"
        },
        "index": {
          "description": "From ClockTime to UnixTime",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "fromClockTime",
          "normalized": "ClockTime-\u003eUnixTime",
          "package": "unix-time",
          "partial": "Clock Time",
          "signature": "ClockTime-\u003eUnixTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:fromClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom \u003ccode\u003e\u003ca\u003eEpochTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e setting \u003ccode\u003e\u003ca\u003eutMicroSeconds\u003c/a\u003e\u003c/code\u003e to 0.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "fromEpochTime",
          "package": "unix-time",
          "signature": "EpochTime -\u003e UnixTime",
          "source": "src/Data-UnixTime-Conv.html#fromEpochTime",
          "type": "function"
        },
        "index": {
          "description": "From EpochTime to UnixTime setting utMicroSeconds to",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "fromEpochTime",
          "normalized": "EpochTime-\u003eUnixTime",
          "package": "unix-time",
          "partial": "Epoch Time",
          "signature": "EpochTime-\u003eUnixTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:fromEpochTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e from OS.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "getUnixTime",
          "package": "unix-time",
          "signature": "IO UnixTime",
          "source": "src/Data-UnixTime-Sys.html#getUnixTime",
          "type": "function"
        },
        "index": {
          "description": "Getting UnixTime from OS",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "getUnixTime",
          "package": "unix-time",
          "partial": "Unix Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:getUnixTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat for e-mail (RFC 5322).\n The value is \"%a, %d %b %Y %H:%M:%S %z\".\n This should be used with \u003ccode\u003e\u003ca\u003eformatUnixTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparseUnixTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "mailDateFormat",
          "package": "unix-time",
          "signature": "Format",
          "source": "src/Data-UnixTime-Conv.html#mailDateFormat",
          "type": "function"
        },
        "index": {
          "description": "Format for e-mail RFC The value is This should be used with formatUnixTime and parseUnixTime",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "mailDateFormat",
          "package": "unix-time",
          "partial": "Date Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:mailDateFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating difference from micro seconds.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emicroSecondsToUnixDiffTime 12345678\n\u003c/code\u003e\u003c/strong\u003eUnixDiffTime {udtSeconds = 12, udtMicroSecnods = 345678}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emicroSecondsToUnixDiffTime (-12345678)\n\u003c/code\u003e\u003c/strong\u003eUnixDiffTime {udtSeconds = -12, udtMicroSecnods = -345678}\n\u003c/pre\u003e",
          "module": "Data.UnixTime",
          "name": "microSecondsToUnixDiffTime",
          "package": "unix-time",
          "signature": "a -\u003e UnixDiffTime",
          "source": "src/Data-UnixTime-Diff.html#microSecondsToUnixDiffTime",
          "type": "function"
        },
        "index": {
          "description": "Creating difference from micro seconds microSecondsToUnixDiffTime UnixDiffTime udtSeconds udtMicroSecnods microSecondsToUnixDiffTime UnixDiffTime udtSeconds udtMicroSecnods",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "microSecondsToUnixDiffTime",
          "normalized": "a-\u003eUnixDiffTime",
          "package": "unix-time",
          "partial": "Seconds To Unix Diff Time",
          "signature": "a-\u003eUnixDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:microSecondsToUnixDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e interpreting as localtime.\n This is a wrapper for strptime_l().\n Many implementations of strptime_l() do not support %Z and\n some implementations of strptime_l() do not support %z, either.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "parseUnixTime",
          "package": "unix-time",
          "signature": "Format -\u003e ByteString -\u003e UnixTime",
          "source": "src/Data-UnixTime-Conv.html#parseUnixTime",
          "type": "function"
        },
        "index": {
          "description": "Parsing ByteString to UnixTime interpreting as localtime This is wrapper for strptime Many implementations of strptime do not support and some implementations of strptime do not support either",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "parseUnixTime",
          "normalized": "Format-\u003eByteString-\u003eUnixTime",
          "package": "unix-time",
          "partial": "Unix Time",
          "signature": "Format-\u003eByteString-\u003eUnixTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:parseUnixTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e interpreting as GMT.\n This is a wrapper for strptime_l().\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseUnixTimeGMT webDateFormat \"Thu, 01 Jan 1970 00:00:00 GMT\"\n\u003c/code\u003e\u003c/strong\u003eUnixTime {utSeconds = 0, utMicroSeconds = 0}\n\u003c/pre\u003e",
          "module": "Data.UnixTime",
          "name": "parseUnixTimeGMT",
          "package": "unix-time",
          "signature": "Format -\u003e ByteString -\u003e UnixTime",
          "source": "src/Data-UnixTime-Conv.html#parseUnixTimeGMT",
          "type": "function"
        },
        "index": {
          "description": "Parsing ByteString to UnixTime interpreting as GMT This is wrapper for strptime parseUnixTimeGMT webDateFormat Thu Jan GMT UnixTime utSeconds utMicroSeconds",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "parseUnixTimeGMT",
          "normalized": "Format-\u003eByteString-\u003eUnixTime",
          "package": "unix-time",
          "partial": "Unix Time GMT",
          "signature": "Format-\u003eByteString-\u003eUnixTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:parseUnixTimeGMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating difference from seconds.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esecondsToUnixDiffTime 100\n\u003c/code\u003e\u003c/strong\u003eUnixDiffTime {udtSeconds = 100, udtMicroSecnods = 0}\n\u003c/pre\u003e",
          "module": "Data.UnixTime",
          "name": "secondsToUnixDiffTime",
          "package": "unix-time",
          "signature": "a -\u003e UnixDiffTime",
          "source": "src/Data-UnixTime-Diff.html#secondsToUnixDiffTime",
          "type": "function"
        },
        "index": {
          "description": "Creating difference from seconds secondsToUnixDiffTime UnixDiffTime udtSeconds udtMicroSecnods",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "secondsToUnixDiffTime",
          "normalized": "a-\u003eUnixDiffTime",
          "package": "unix-time",
          "partial": "To Unix Diff Time",
          "signature": "a-\u003eUnixDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:secondsToUnixDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "toClockTime",
          "package": "unix-time",
          "signature": "UnixTime -\u003e ClockTime",
          "source": "src/Data-UnixTime-Conv.html#toClockTime",
          "type": "function"
        },
        "index": {
          "description": "From UnixTime to ClockTime",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "toClockTime",
          "normalized": "UnixTime-\u003eClockTime",
          "package": "unix-time",
          "partial": "Clock Time",
          "signature": "UnixTime-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:toClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom \u003ccode\u003e\u003ca\u003eUnixTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eEpochTime\u003c/a\u003e\u003c/code\u003e ignoring \u003ccode\u003e\u003ca\u003eutMicroSeconds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "toEpochTime",
          "package": "unix-time",
          "signature": "UnixTime -\u003e EpochTime",
          "source": "src/Data-UnixTime-Conv.html#toEpochTime",
          "type": "function"
        },
        "index": {
          "description": "From UnixTime to EpochTime ignoring utMicroSeconds",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "toEpochTime",
          "normalized": "UnixTime-\u003eEpochTime",
          "package": "unix-time",
          "partial": "Epoch Time",
          "signature": "UnixTime-\u003eEpochTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:toEpochTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMicro seconds (i.e. 10^(-6))\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "udtMicroSecnods",
          "package": "unix-time",
          "signature": "Int32",
          "source": "src/Data-UnixTime-Types.html#UnixDiffTime",
          "type": "function"
        },
        "index": {
          "description": "Micro seconds i.e",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "udtMicroSecnods",
          "package": "unix-time",
          "partial": "Micro Secnods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:udtMicroSecnods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeconds from 1st Jan 1970\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "udtSeconds",
          "package": "unix-time",
          "signature": "CTime",
          "source": "src/Data-UnixTime-Types.html#UnixDiffTime",
          "type": "function"
        },
        "index": {
          "description": "Seconds from st Jan",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "udtSeconds",
          "package": "unix-time",
          "partial": "Seconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:udtSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMicro seconds (i.e. 10^(-6))\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "utMicroSeconds",
          "package": "unix-time",
          "signature": "Int32",
          "source": "src/Data-UnixTime-Types.html#UnixTime",
          "type": "function"
        },
        "index": {
          "description": "Micro seconds i.e",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "utMicroSeconds",
          "package": "unix-time",
          "partial": "Micro Seconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:utMicroSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeconds from 1st Jan 1970\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "utSeconds",
          "package": "unix-time",
          "signature": "CTime",
          "source": "src/Data-UnixTime-Types.html#UnixTime",
          "type": "function"
        },
        "index": {
          "description": "Seconds from st Jan",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "utSeconds",
          "package": "unix-time",
          "partial": "Seconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:utSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat for web (RFC 2616).\n The value is \"%a, %d %b %Y %H:%M:%S GMT\".\n This should be used with \u003ccode\u003e\u003ca\u003eformatUnixTimeGMT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparseUnixTimeGMT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.UnixTime",
          "name": "webDateFormat",
          "package": "unix-time",
          "signature": "Format",
          "source": "src/Data-UnixTime-Conv.html#webDateFormat",
          "type": "function"
        },
        "index": {
          "description": "Format for web RFC The value is GMT This should be used with formatUnixTimeGMT and parseUnixTimeGMT",
          "hierarchy": "Data UnixTime",
          "module": "Data.UnixTime",
          "name": "webDateFormat",
          "package": "unix-time",
          "partial": "Date Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-time/docs/Data-UnixTime.html#v:webDateFormat"
      }
    }
  ]
]