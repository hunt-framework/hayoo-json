[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Enumeratee.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZoomCache PCM enumeratee conversions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ZoomCache.PCM.Enumeratee",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "module",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html",
        "fct-type": "module",
        "title": "Enumeratee"
      },
      "index": {
        "description": "ZoomCache PCM enumeratee conversions",
        "hierarchy": "Data ZoomCache PCM Enumeratee",
        "module": "Data.ZoomCache.PCM.Enumeratee",
        "name": "Enumeratee",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Enumeratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Enumeratee.html#v:enumListPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Enumeratee",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Enumeratee [Offset Block] [(TimeStamp, [PCM Double])] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumListPCMDouble",
        "fct-type": "function",
        "title": "enumListPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Enumeratee",
        "module": "Data.ZoomCache.PCM.Enumeratee",
        "name": "enumListPCMDouble",
        "normalized": "Enumeratee[Offset Block][(TimeStamp,[PCM Double])]a b",
        "package": "zoom-cache-pcm",
        "partial": "List PCMDouble",
        "signature": "Enumeratee[Offset Block][(TimeStamp,[PCM Double])]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Enumeratee.html#v:enumPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Enumeratee",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Enumeratee [Offset Block] [(TimeStamp, PCM Double)] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumPCMDouble",
        "fct-type": "function",
        "title": "enumPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Enumeratee",
        "module": "Data.ZoomCache.PCM.Enumeratee",
        "name": "enumPCMDouble",
        "normalized": "Enumeratee[Offset Block][(TimeStamp,PCM Double)]a b",
        "package": "zoom-cache-pcm",
        "partial": "PCMDouble",
        "signature": "Enumeratee[Offset Block][(TimeStamp,PCM Double)]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Enumeratee.html#v:enumSummaryListPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Enumeratee",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Int -\u003e Enumeratee [Offset Block] [[Summary (PCM Double)]] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumSummaryListPCMDouble",
        "fct-type": "function",
        "title": "enumSummaryListPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Enumeratee",
        "module": "Data.ZoomCache.PCM.Enumeratee",
        "name": "enumSummaryListPCMDouble",
        "normalized": "Int-\u003eEnumeratee[Offset Block][[Summary(PCM Double)]]a b",
        "package": "zoom-cache-pcm",
        "partial": "Summary List PCMDouble",
        "signature": "Int-\u003eEnumeratee[Offset Block][[Summary(PCM Double)]]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Enumeratee.html#v:enumSummaryPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Enumeratee",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Int -\u003e Enumeratee [Offset Block] [Summary (PCM Double)] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumSummaryPCMDouble",
        "fct-type": "function",
        "title": "enumSummaryPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Enumeratee",
        "module": "Data.ZoomCache.PCM.Enumeratee",
        "name": "enumSummaryPCMDouble",
        "normalized": "Int-\u003eEnumeratee[Offset Block][Summary(PCM Double)]a b",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCMDouble",
        "signature": "Int-\u003eEnumeratee[Offset Block][Summary(PCM Double)]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Enumeratee.html#v:wholeTrackSummaryListPCMDouble",
      "description": {
        "fct-descr": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM.Enumeratee",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "[IdentifyCodec] -\u003e TrackNo -\u003e Iteratee (Offset ByteString) m [Summary (PCM Double)]",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#wholeTrackSummaryListPCMDouble",
        "fct-type": "function",
        "title": "wholeTrackSummaryListPCMDouble"
      },
      "index": {
        "description": "Read the summary of an entire track",
        "hierarchy": "Data ZoomCache PCM Enumeratee",
        "module": "Data.ZoomCache.PCM.Enumeratee",
        "name": "wholeTrackSummaryListPCMDouble",
        "normalized": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)a[Summary(PCM Double)]",
        "package": "zoom-cache-pcm",
        "partial": "Track Summary List PCMDouble",
        "signature": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)m[Summary(PCM Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Enumeratee.html#v:wholeTrackSummaryPCMDouble",
      "description": {
        "fct-descr": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM.Enumeratee",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "[IdentifyCodec] -\u003e TrackNo -\u003e Iteratee (Offset ByteString) m (Summary (PCM Double))",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#wholeTrackSummaryPCMDouble",
        "fct-type": "function",
        "title": "wholeTrackSummaryPCMDouble"
      },
      "index": {
        "description": "Read the summary of an entire track",
        "hierarchy": "Data ZoomCache PCM Enumeratee",
        "module": "Data.ZoomCache.PCM.Enumeratee",
        "name": "wholeTrackSummaryPCMDouble",
        "normalized": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)a(Summary(PCM Double))",
        "package": "zoom-cache-pcm",
        "partial": "Track Summary PCMDouble",
        "signature": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)m(Summary(PCM Double))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-IEEE754.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for PCM Audio of type Float and Double.\nThis module implements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for PCM.Float.\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (float)                                                   | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (float)                                                   | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Mean [DC Bias] (float)                                        | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (float)                                                   | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for PCM.Double.\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (double)                                                  | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (double)                                                  | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Mean [DC Bias] (double)                                       | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 60-63\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 64-67\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efloat\u003c/code\u003e:  big-endian IEEE 754-2008 binary32 (IEEE 754-1985 single)\n  \u003ccode\u003edouble\u003c/code\u003e: big-endian IEEE 754-2008 binary64 (IEEE 754-1985 double)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ZoomCache.PCM.IEEE754",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "module",
        "fct-source": "src/Data-ZoomCache-PCM-IEEE754.html",
        "fct-type": "module",
        "title": "IEEE754"
      },
      "index": {
        "description": "Default codec implementation for PCM Audio of type Float and Double This module implements the interfaces documented in Data.ZoomCache.Codec The table below describes the encoding of SummaryData for PCM.Float Min float Max float Mean DC Bias float RMS float The table below describes the encoding of SummaryData for PCM.Double Min double Max double Mean DC Bias double RMS double Field encoding formats float big-endian IEEE binary32 IEEE single double big-endian IEEE binary64 IEEE double",
        "hierarchy": "Data ZoomCache PCM IEEE754",
        "module": "Data.ZoomCache.PCM.IEEE754",
        "name": "IEEE754",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-IEEE754.html#t:SummaryData",
      "description": {
        "fct-descr": "\u003cp\u003eSummaries of a subsequence of values of type \u003ccode\u003ea\u003c/code\u003e. In the default\n instances for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, this is a record containing values\n such as the maximum, minimum and mean of the subsequence.\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM.IEEE754",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData",
        "fct-type": "function",
        "title": "SummaryData"
      },
      "index": {
        "description": "Summaries of subsequence of values of type In the default instances for Int and Double this is record containing values such as the maximum minimum and mean of the subsequence",
        "hierarchy": "Data ZoomCache PCM IEEE754",
        "module": "Data.ZoomCache.PCM.IEEE754",
        "name": "SummaryData",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Summary Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-IEEE754.html#t:SummaryWork",
      "description": {
        "fct-descr": "\u003cp\u003eIntermediate calculations\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM.IEEE754",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork",
        "fct-type": "function",
        "title": "SummaryWork"
      },
      "index": {
        "description": "Intermediate calculations",
        "hierarchy": "Data ZoomCache PCM IEEE754",
        "module": "Data.ZoomCache.PCM.IEEE754",
        "name": "SummaryWork",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Summary Work",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Int.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for PCM Audio of type Int. This module\nimplements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for 'PCM Int16':\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (int16)                     | Max (int16)                 | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Mean [DC Bias] (double)                                       | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for 'PCM Int' and\n'PCM Int32':\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (int32)                                                   | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (int32)                                                   | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Mean [DC Bias] (double)                                       | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for 'PCM Int64':\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (int64)                                                   | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (int64)                                                   | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Mean [DC Bias] (double)                                       | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 60-63\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 64-67\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint32\u003c/code\u003e:  32bit big endian\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint64\u003c/code\u003e:  64bit big endian\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edouble\u003c/code\u003e: big-endian IEEE 754-2008 binary64 (IEEE 754-1985 double)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ZoomCache.PCM.Int",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "module",
        "fct-source": "src/Data-ZoomCache-PCM-Int.html",
        "fct-type": "module",
        "title": "Int"
      },
      "index": {
        "description": "Default codec implementation for PCM Audio of type Int This module implements the interfaces documented in Data.ZoomCache.Codec The table below describes the encoding of SummaryData for PCM Int16 Min int16 Max int16 Mean DC Bias double RMS double The table below describes the encoding of SummaryData for PCM Int and PCM Int32 Min int32 Max int32 Mean DC Bias double RMS double The table below describes the encoding of SummaryData for PCM Int64 Min int64 Max int64 Mean DC Bias double RMS double Field encoding formats int32 bit big endian int64 bit big endian double big-endian IEEE binary64 IEEE double",
        "hierarchy": "Data ZoomCache PCM Int",
        "module": "Data.ZoomCache.PCM.Int",
        "name": "Int",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Int.html#t:SummaryData",
      "description": {
        "fct-descr": "\u003cp\u003eSummaries of a subsequence of values of type \u003ccode\u003ea\u003c/code\u003e. In the default\n instances for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, this is a record containing values\n such as the maximum, minimum and mean of the subsequence.\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM.Int",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData",
        "fct-type": "function",
        "title": "SummaryData"
      },
      "index": {
        "description": "Summaries of subsequence of values of type In the default instances for Int and Double this is record containing values such as the maximum minimum and mean of the subsequence",
        "hierarchy": "Data ZoomCache PCM Int",
        "module": "Data.ZoomCache.PCM.Int",
        "name": "SummaryData",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Summary Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Int.html#t:SummaryWork",
      "description": {
        "fct-descr": "\u003cp\u003eIntermediate calculations\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM.Int",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork",
        "fct-type": "function",
        "title": "SummaryWork"
      },
      "index": {
        "description": "Intermediate calculations",
        "hierarchy": "Data ZoomCache PCM Int",
        "module": "Data.ZoomCache.PCM.Int",
        "name": "SummaryWork",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Summary Work",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "module",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:appendSummaryPCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SampleOffsetDiff -\u003e SummaryData (PCM a) -\u003e SampleOffsetDiff -\u003e SummaryData (PCM a) -\u003e SummaryData (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#appendSummaryPCM",
        "fct-type": "function",
        "title": "appendSummaryPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "appendSummaryPCM",
        "normalized": "SampleOffsetDiff-\u003eSummaryData(PCM a)-\u003eSampleOffsetDiff-\u003eSummaryData(PCM a)-\u003eSummaryData(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCM",
        "signature": "SampleOffsetDiff-\u003eSummaryData(PCM a)-\u003eSampleOffsetDiff-\u003eSummaryData(PCM a)-\u003eSummaryData(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:deltaDecodePCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "[PCM a] -\u003e [PCM a]",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#deltaDecodePCM",
        "fct-type": "function",
        "title": "deltaDecodePCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "deltaDecodePCM",
        "normalized": "[PCM a]-\u003e[PCM a]",
        "package": "zoom-cache-pcm",
        "partial": "Decode PCM",
        "signature": "[PCM a]-\u003e[PCM a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:deltaEncodePCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e PCM a -\u003e PCM a",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#deltaEncodePCM",
        "fct-type": "function",
        "title": "deltaEncodePCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "deltaEncodePCM",
        "normalized": "SummaryWork(PCM a)-\u003ePCM a-\u003ePCM a",
        "package": "zoom-cache-pcm",
        "partial": "Encode PCM",
        "signature": "SummaryWork(PCM a)-\u003ePCM a-\u003ePCM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:fromSummaryPCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e Builder",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#fromSummaryPCM",
        "fct-type": "function",
        "title": "fromSummaryPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "fromSummaryPCM",
        "normalized": "SummaryData(PCM a)-\u003eBuilder",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCM",
        "signature": "SummaryData(PCM a)-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:initSummaryPCMBounded",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SampleOffset -\u003e SummaryWork (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#initSummaryPCMBounded",
        "fct-type": "function",
        "title": "initSummaryPCMBounded"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "initSummaryPCMBounded",
        "normalized": "SampleOffset-\u003eSummaryWork(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCMBounded",
        "signature": "SampleOffset-\u003eSummaryWork(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:mkSummaryPCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SampleOffsetDiff -\u003e SummaryWork (PCM a) -\u003e SummaryData (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#mkSummaryPCM",
        "fct-type": "function",
        "title": "mkSummaryPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "mkSummaryPCM",
        "normalized": "SampleOffsetDiff-\u003eSummaryWork(PCM a)-\u003eSummaryData(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCM",
        "signature": "SampleOffsetDiff-\u003eSummaryWork(PCM a)-\u003eSummaryData(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:readSummaryPCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Iteratee ByteString m (SummaryData (PCM a))",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#readSummaryPCM",
        "fct-type": "function",
        "title": "readSummaryPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "readSummaryPCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Internal.html#v:updateSummaryPCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Internal",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SampleOffset -\u003e PCM a -\u003e SummaryWork (PCM a) -\u003e SummaryWork (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Internal.html#updateSummaryPCM",
        "fct-type": "function",
        "title": "updateSummaryPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Internal",
        "module": "Data.ZoomCache.PCM.Internal",
        "name": "updateSummaryPCM",
        "normalized": "SampleOffset-\u003ePCM a-\u003eSummaryWork(PCM a)-\u003eSummaryWork(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCM",
        "signature": "SampleOffset-\u003ePCM a-\u003eSummaryWork(PCM a)-\u003eSummaryWork(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "module",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "Types",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#t:PCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "data",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#PCM",
        "fct-type": "data",
        "title": "PCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "PCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#t:ZoomPCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "class",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#ZoomPCM",
        "fct-type": "class",
        "title": "ZoomPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "ZoomPCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Zoom PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:PCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "PCM",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#PCM",
        "fct-type": "function",
        "title": "PCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "PCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmAvg",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmAvg",
        "fct-type": "method",
        "title": "pcmAvg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmAvg",
        "normalized": "SummaryData(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "Avg",
        "signature": "SummaryData(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmFromRaw",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmFromRaw",
        "fct-type": "method",
        "title": "pcmFromRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmFromRaw",
        "normalized": "a-\u003eBuilder",
        "package": "zoom-cache-pcm",
        "partial": "From Raw",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmMax",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMax",
        "fct-type": "method",
        "title": "pcmMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmMax",
        "normalized": "SummaryData(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Max",
        "signature": "SummaryData(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmMin",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMin",
        "fct-type": "method",
        "title": "pcmMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmMin",
        "normalized": "SummaryData(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Min",
        "signature": "SummaryData(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmMkSummary",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "a -\u003e a -\u003e Double -\u003e Double -\u003e SummaryData (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMkSummary",
        "fct-type": "method",
        "title": "pcmMkSummary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmMkSummary",
        "normalized": "a-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryData(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Mk Summary",
        "signature": "a-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryData(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmMkSummaryWork",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SampleOffset -\u003e a -\u003e a -\u003e a -\u003e Double -\u003e Double -\u003e SummaryWork (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMkSummaryWork",
        "fct-type": "method",
        "title": "pcmMkSummaryWork"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmMkSummaryWork",
        "normalized": "SampleOffset-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryWork(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Mk Summary Work",
        "signature": "SampleOffset-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryWork(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmRMS",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmRMS",
        "fct-type": "method",
        "title": "pcmRMS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmRMS",
        "normalized": "SummaryData(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "RMS",
        "signature": "SummaryData(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmWorkLast",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkLast",
        "fct-type": "method",
        "title": "pcmWorkLast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmWorkLast",
        "normalized": "SummaryWork(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Work Last",
        "signature": "SummaryWork(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmWorkMax",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkMax",
        "fct-type": "method",
        "title": "pcmWorkMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmWorkMax",
        "normalized": "SummaryWork(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Work Max",
        "signature": "SummaryWork(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmWorkMin",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkMin",
        "fct-type": "method",
        "title": "pcmWorkMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmWorkMin",
        "normalized": "SummaryWork(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Work Min",
        "signature": "SummaryWork(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmWorkSO",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e SampleOffset",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkSO",
        "fct-type": "method",
        "title": "pcmWorkSO"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmWorkSO",
        "normalized": "SummaryWork(PCM a)-\u003eSampleOffset",
        "package": "zoom-cache-pcm",
        "partial": "Work SO",
        "signature": "SummaryWork(PCM a)-\u003eSampleOffset"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmWorkSum",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkSum",
        "fct-type": "method",
        "title": "pcmWorkSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmWorkSum",
        "normalized": "SummaryWork(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "Work Sum",
        "signature": "SummaryWork(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:pcmWorkSumSq",
      "description": {
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkSumSq",
        "fct-type": "method",
        "title": "pcmWorkSumSq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "pcmWorkSumSq",
        "normalized": "SummaryWork(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "Work Sum Sq",
        "signature": "SummaryWork(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM-Types.html#v:unPCM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ZoomCache.PCM.Types",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "!a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#PCM",
        "fct-type": "function",
        "title": "unPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM Types",
        "module": "Data.ZoomCache.PCM.Types",
        "name": "unPCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "module",
        "fct-source": "src/Data-ZoomCache-PCM.html",
        "fct-type": "module",
        "title": "PCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "PCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#t:PCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "data",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#PCM",
        "fct-type": "data",
        "title": "PCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "PCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#t:ZoomPCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "class",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#ZoomPCM",
        "fct-type": "class",
        "title": "ZoomPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "ZoomPCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "Zoom PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:PCM",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "PCM",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#PCM",
        "fct-type": "function",
        "title": "PCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "PCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:enumListPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Enumeratee [Offset Block] [(TimeStamp, [PCM Double])] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumListPCMDouble",
        "fct-type": "function",
        "title": "enumListPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "enumListPCMDouble",
        "normalized": "Enumeratee[Offset Block][(TimeStamp,[PCM Double])]a b",
        "package": "zoom-cache-pcm",
        "partial": "List PCMDouble",
        "signature": "Enumeratee[Offset Block][(TimeStamp,[PCM Double])]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:enumPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Enumeratee [Offset Block] [(TimeStamp, PCM Double)] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumPCMDouble",
        "fct-type": "function",
        "title": "enumPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "enumPCMDouble",
        "normalized": "Enumeratee[Offset Block][(TimeStamp,PCM Double)]a b",
        "package": "zoom-cache-pcm",
        "partial": "PCMDouble",
        "signature": "Enumeratee[Offset Block][(TimeStamp,PCM Double)]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:enumSummaryListPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Int -\u003e Enumeratee [Offset Block] [[Summary (PCM Double)]] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumSummaryListPCMDouble",
        "fct-type": "function",
        "title": "enumSummaryListPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "enumSummaryListPCMDouble",
        "normalized": "Int-\u003eEnumeratee[Offset Block][[Summary(PCM Double)]]a b",
        "package": "zoom-cache-pcm",
        "partial": "Summary List PCMDouble",
        "signature": "Int-\u003eEnumeratee[Offset Block][[Summary(PCM Double)]]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:enumSummaryPCMDouble",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "Int -\u003e Enumeratee [Offset Block] [Summary (PCM Double)] m a",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#enumSummaryPCMDouble",
        "fct-type": "function",
        "title": "enumSummaryPCMDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "enumSummaryPCMDouble",
        "normalized": "Int-\u003eEnumeratee[Offset Block][Summary(PCM Double)]a b",
        "package": "zoom-cache-pcm",
        "partial": "Summary PCMDouble",
        "signature": "Int-\u003eEnumeratee[Offset Block][Summary(PCM Double)]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmAvg",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmAvg",
        "fct-type": "method",
        "title": "pcmAvg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmAvg",
        "normalized": "SummaryData(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "Avg",
        "signature": "SummaryData(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmFromRaw",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmFromRaw",
        "fct-type": "method",
        "title": "pcmFromRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmFromRaw",
        "normalized": "a-\u003eBuilder",
        "package": "zoom-cache-pcm",
        "partial": "From Raw",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmIdentifiers",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "[ByteString -\u003e Maybe Codec]",
        "fct-source": "src/Data-ZoomCache-PCM.html#pcmIdentifiers",
        "fct-type": "function",
        "title": "pcmIdentifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmIdentifiers",
        "normalized": "[ByteString-\u003eMaybe Codec]",
        "package": "zoom-cache-pcm",
        "partial": "Identifiers",
        "signature": "[ByteString-\u003eMaybe Codec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmMax",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMax",
        "fct-type": "method",
        "title": "pcmMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmMax",
        "normalized": "SummaryData(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Max",
        "signature": "SummaryData(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmMin",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMin",
        "fct-type": "method",
        "title": "pcmMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmMin",
        "normalized": "SummaryData(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Min",
        "signature": "SummaryData(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmMkSummary",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "a -\u003e a -\u003e Double -\u003e Double -\u003e SummaryData (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMkSummary",
        "fct-type": "method",
        "title": "pcmMkSummary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmMkSummary",
        "normalized": "a-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryData(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Mk Summary",
        "signature": "a-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryData(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmMkSummaryWork",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SampleOffset -\u003e a -\u003e a -\u003e a -\u003e Double -\u003e Double -\u003e SummaryWork (PCM a)",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmMkSummaryWork",
        "fct-type": "method",
        "title": "pcmMkSummaryWork"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmMkSummaryWork",
        "normalized": "SampleOffset-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryWork(PCM a)",
        "package": "zoom-cache-pcm",
        "partial": "Mk Summary Work",
        "signature": "SampleOffset-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryWork(PCM a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmRMS",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryData (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmRMS",
        "fct-type": "method",
        "title": "pcmRMS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmRMS",
        "normalized": "SummaryData(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "RMS",
        "signature": "SummaryData(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmWorkLast",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkLast",
        "fct-type": "method",
        "title": "pcmWorkLast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmWorkLast",
        "normalized": "SummaryWork(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Work Last",
        "signature": "SummaryWork(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmWorkMax",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkMax",
        "fct-type": "method",
        "title": "pcmWorkMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmWorkMax",
        "normalized": "SummaryWork(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Work Max",
        "signature": "SummaryWork(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmWorkMin",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkMin",
        "fct-type": "method",
        "title": "pcmWorkMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmWorkMin",
        "normalized": "SummaryWork(PCM a)-\u003ea",
        "package": "zoom-cache-pcm",
        "partial": "Work Min",
        "signature": "SummaryWork(PCM a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmWorkSO",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e SampleOffset",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkSO",
        "fct-type": "method",
        "title": "pcmWorkSO"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmWorkSO",
        "normalized": "SummaryWork(PCM a)-\u003eSampleOffset",
        "package": "zoom-cache-pcm",
        "partial": "Work SO",
        "signature": "SummaryWork(PCM a)-\u003eSampleOffset"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmWorkSum",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkSum",
        "fct-type": "method",
        "title": "pcmWorkSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmWorkSum",
        "normalized": "SummaryWork(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "Work Sum",
        "signature": "SummaryWork(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:pcmWorkSumSq",
      "description": {
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "SummaryWork (PCM a) -\u003e Double",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#pcmWorkSumSq",
        "fct-type": "method",
        "title": "pcmWorkSumSq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "pcmWorkSumSq",
        "normalized": "SummaryWork(PCM a)-\u003eDouble",
        "package": "zoom-cache-pcm",
        "partial": "Work Sum Sq",
        "signature": "SummaryWork(PCM a)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:unPCM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "!a",
        "fct-source": "src/Data-ZoomCache-PCM-Types.html#PCM",
        "fct-type": "function",
        "title": "unPCM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "unPCM",
        "normalized": "",
        "package": "zoom-cache-pcm",
        "partial": "PCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:wholeTrackSummaryListPCMDouble",
      "description": {
        "fct-descr": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "[IdentifyCodec] -\u003e TrackNo -\u003e Iteratee (Offset ByteString) m [Summary (PCM Double)]",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#wholeTrackSummaryListPCMDouble",
        "fct-type": "function",
        "title": "wholeTrackSummaryListPCMDouble"
      },
      "index": {
        "description": "Read the summary of an entire track",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "wholeTrackSummaryListPCMDouble",
        "normalized": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)a[Summary(PCM Double)]",
        "package": "zoom-cache-pcm",
        "partial": "Track Summary List PCMDouble",
        "signature": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)m[Summary(PCM Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zoom-cache-pcm/docs/Data-ZoomCache-PCM.html#v:wholeTrackSummaryPCMDouble",
      "description": {
        "fct-descr": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
        "fct-module": "Data.ZoomCache.PCM",
        "fct-package": "zoom-cache-pcm",
        "fct-signature": "[IdentifyCodec] -\u003e TrackNo -\u003e Iteratee (Offset ByteString) m (Summary (PCM Double))",
        "fct-source": "src/Data-ZoomCache-PCM-Enumeratee.html#wholeTrackSummaryPCMDouble",
        "fct-type": "function",
        "title": "wholeTrackSummaryPCMDouble"
      },
      "index": {
        "description": "Read the summary of an entire track",
        "hierarchy": "Data ZoomCache PCM",
        "module": "Data.ZoomCache.PCM",
        "name": "wholeTrackSummaryPCMDouble",
        "normalized": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)a(Summary(PCM Double))",
        "package": "zoom-cache-pcm",
        "partial": "Track Summary PCMDouble",
        "signature": "[IdentifyCodec]-\u003eTrackNo-\u003eIteratee(Offset ByteString)m(Summary(PCM Double))"
      }
    }
  }
]