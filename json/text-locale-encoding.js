[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Encoding-Locale.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to encode and decode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to/from\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor performance, Text's native encoding functions are used if the conditions\n are right (LF NewlineMode and UTF encoding).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Encoding-Locale.html",
        "fct-type": "module",
        "title": "Locale"
      },
      "index": {
        "description": "This module provides functions to encode and decode Text to from ByteString using TextEncoding For performance Text native encoding functions are used if the conditions are right LF NewlineMode and UTF encoding",
        "hierarchy": "Data Text Encoding Locale",
        "module": "Data.Text.Encoding.Locale",
        "name": "Locale",
        "normalized": "",
        "package": "text-locale-encoding",
        "partial": "Locale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Encoding-Locale.html#v:decodeFromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Handle -\u003e ByteString -\u003e IO Text",
        "fct-source": "src/Data-Text-Encoding-Locale.html#decodeFromHandle",
        "fct-type": "function",
        "title": "decodeFromHandle"
      },
      "index": {
        "description": "Decode ByteString to Text using Handle TextEncoding and NewlineMode",
        "hierarchy": "Data Text Encoding Locale",
        "module": "Data.Text.Encoding.Locale",
        "name": "decodeFromHandle",
        "normalized": "Handle-\u003eByteString-\u003eIO Text",
        "package": "text-locale-encoding",
        "partial": "From Handle",
        "signature": "Handle-\u003eByteString-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Encoding-Locale.html#v:decodeLocale",
      "description": {
        "fct-descr": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using current locale\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "ByteString -\u003e IO Text",
        "fct-source": "src/Data-Text-Encoding-Locale.html#decodeLocale",
        "fct-type": "function",
        "title": "decodeLocale"
      },
      "index": {
        "description": "Decode ByteString to Text using current locale",
        "hierarchy": "Data Text Encoding Locale",
        "module": "Data.Text.Encoding.Locale",
        "name": "decodeLocale",
        "normalized": "ByteString-\u003eIO Text",
        "package": "text-locale-encoding",
        "partial": "Locale",
        "signature": "ByteString-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Encoding-Locale.html#v:decodeLocale-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using supplied \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "TextEncoding -\u003e NewlineMode -\u003e ByteString -\u003e IO Text",
        "fct-source": "src/Data-Text-Encoding-Locale.html#decodeLocale%27",
        "fct-type": "function",
        "title": "decodeLocale'"
      },
      "index": {
        "description": "Decode ByteString to Text using supplied TextEncoding and NewlineMode",
        "hierarchy": "Data Text Encoding Locale",
        "module": "Data.Text.Encoding.Locale",
        "name": "decodeLocale'",
        "normalized": "TextEncoding-\u003eNewlineMode-\u003eByteString-\u003eIO Text",
        "package": "text-locale-encoding",
        "partial": "Locale'",
        "signature": "TextEncoding-\u003eNewlineMode-\u003eByteString-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Encoding-Locale.html#v:encodeFromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Handle -\u003e Text -\u003e IO ByteString",
        "fct-source": "src/Data-Text-Encoding-Locale.html#encodeFromHandle",
        "fct-type": "function",
        "title": "encodeFromHandle"
      },
      "index": {
        "description": "Encode Text to ByteString using Handle TextEncoding and NewlineMode",
        "hierarchy": "Data Text Encoding Locale",
        "module": "Data.Text.Encoding.Locale",
        "name": "encodeFromHandle",
        "normalized": "Handle-\u003eText-\u003eIO ByteString",
        "package": "text-locale-encoding",
        "partial": "From Handle",
        "signature": "Handle-\u003eText-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Encoding-Locale.html#v:encodeLocale",
      "description": {
        "fct-descr": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using current locale\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Text -\u003e IO ByteString",
        "fct-source": "src/Data-Text-Encoding-Locale.html#encodeLocale",
        "fct-type": "function",
        "title": "encodeLocale"
      },
      "index": {
        "description": "Encode Text to ByteString using current locale",
        "hierarchy": "Data Text Encoding Locale",
        "module": "Data.Text.Encoding.Locale",
        "name": "encodeLocale",
        "normalized": "Text-\u003eIO ByteString",
        "package": "text-locale-encoding",
        "partial": "Locale",
        "signature": "Text-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Encoding-Locale.html#v:encodeLocale-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using supplied \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "TextEncoding -\u003e NewlineMode -\u003e Text -\u003e IO ByteString",
        "fct-source": "src/Data-Text-Encoding-Locale.html#encodeLocale%27",
        "fct-type": "function",
        "title": "encodeLocale'"
      },
      "index": {
        "description": "Encode Text to ByteString using supplied TextEncoding and NewlineMode",
        "hierarchy": "Data Text Encoding Locale",
        "module": "Data.Text.Encoding.Locale",
        "name": "encodeLocale'",
        "normalized": "TextEncoding-\u003eNewlineMode-\u003eText-\u003eIO ByteString",
        "package": "text-locale-encoding",
        "partial": "Locale'",
        "signature": "TextEncoding-\u003eNewlineMode-\u003eText-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-IO-Locale.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module offers much faster locale-aware I/O than \u003ca\u003eData.Text.IO\u003c/a\u003e due to\n the usage of \u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e to write the resulting \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n all at once, while \u003ca\u003eData.Text.IO\u003c/a\u003e writes characters one at a time, taking the\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e lock each time. Since functions in this module take the lock just\n once, they can safely be used from multiple threads without fear of messed up\n output.\n\u003c/p\u003e\u003cp\u003eFunctions in this module require at least twice as much memory as the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e they operate on to output it. For strings more than a half\n of available RAM in size, this may result in memory exhaustion.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.IO.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-IO-Locale.html",
        "fct-type": "module",
        "title": "Locale"
      },
      "index": {
        "description": "This module offers much faster locale-aware than Data.Text.IO due to the usage of hPutBuf to write the resulting ByteString all at once while Data.Text.IO writes characters one at time taking the Handle lock each time Since functions in this module take the lock just once they can safely be used from multiple threads without fear of messed up output Functions in this module require at least twice as much memory as the Text they operate on to output it For strings more than half of available RAM in size this may result in memory exhaustion This module is intended to be imported qualified",
        "hierarchy": "Data Text IO Locale",
        "module": "Data.Text.IO.Locale",
        "name": "Locale",
        "normalized": "",
        "package": "text-locale-encoding",
        "partial": "Locale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-IO-Locale.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e, but writes the \u003ccode\u003eText\u003c/code\u003e all at once.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO-Locale.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "Like appendFile but writes the Text all at once",
        "hierarchy": "Data Text IO Locale",
        "module": "Data.Text.IO.Locale",
        "name": "appendFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "text-locale-encoding",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-IO-Locale.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e, but writes the \u003ccode\u003eText\u003c/code\u003e all at once.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Handle -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO-Locale.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "Like hPutStr but writes the Text all at once",
        "hierarchy": "Data Text IO Locale",
        "module": "Data.Text.IO.Locale",
        "name": "hPutStr",
        "normalized": "Handle-\u003eText-\u003eIO()",
        "package": "text-locale-encoding",
        "partial": "Put Str",
        "signature": "Handle-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-IO-Locale.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehPutStrLn\u003c/a\u003e\u003c/code\u003e, but writes the \u003ccode\u003eText\u003c/code\u003e all at once.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Handle -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO-Locale.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "Like hPutStrLn but writes the Text all at once",
        "hierarchy": "Data Text IO Locale",
        "module": "Data.Text.IO.Locale",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eText-\u003eIO()",
        "package": "text-locale-encoding",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-IO-Locale.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but writes the \u003ccode\u003eText\u003c/code\u003e all at once.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO-Locale.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Like putStr but writes the Text all at once",
        "hierarchy": "Data Text IO Locale",
        "module": "Data.Text.IO.Locale",
        "name": "putStr",
        "normalized": "Text-\u003eIO()",
        "package": "text-locale-encoding",
        "partial": "Str",
        "signature": "Text-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-IO-Locale.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e, but writes the \u003ccode\u003eText\u003c/code\u003e all at once.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO-Locale.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "Like putStrLn but writes the Text all at once",
        "hierarchy": "Data Text IO Locale",
        "module": "Data.Text.IO.Locale",
        "name": "putStrLn",
        "normalized": "Text-\u003eIO()",
        "package": "text-locale-encoding",
        "partial": "Str Ln",
        "signature": "Text-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-IO-Locale.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e, but writes the \u003ccode\u003eText\u003c/code\u003e all at once.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO-Locale.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Like writeFile but writes the Text all at once",
        "hierarchy": "Data Text IO Locale",
        "module": "Data.Text.IO.Locale",
        "name": "writeFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "text-locale-encoding",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Lazy-Encoding-Locale.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to encode and decode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n to/from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor performance, Text's native encoding functions are used if the conditions\n are right (LF NewlineMode and UTF encoding).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-Encoding-Locale.html",
        "fct-type": "module",
        "title": "Locale"
      },
      "index": {
        "description": "This module provides functions to encode and decode Text to from ByteString using TextEncoding For performance Text native encoding functions are used if the conditions are right LF NewlineMode and UTF encoding",
        "hierarchy": "Data Text Lazy Encoding Locale",
        "module": "Data.Text.Lazy.Encoding.Locale",
        "name": "Locale",
        "normalized": "",
        "package": "text-locale-encoding",
        "partial": "Locale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Lazy-Encoding-Locale.html#v:decodeFromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Handle -\u003e ByteString -\u003e IO Text",
        "fct-source": "src/Data-Text-Lazy-Encoding-Locale.html#decodeFromHandle",
        "fct-type": "function",
        "title": "decodeFromHandle"
      },
      "index": {
        "description": "Decode ByteString to Text using Handle TextEncoding and NewlineMode",
        "hierarchy": "Data Text Lazy Encoding Locale",
        "module": "Data.Text.Lazy.Encoding.Locale",
        "name": "decodeFromHandle",
        "normalized": "Handle-\u003eByteString-\u003eIO Text",
        "package": "text-locale-encoding",
        "partial": "From Handle",
        "signature": "Handle-\u003eByteString-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Lazy-Encoding-Locale.html#v:decodeLocale",
      "description": {
        "fct-descr": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using current locale\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "ByteString -\u003e IO Text",
        "fct-source": "src/Data-Text-Lazy-Encoding-Locale.html#decodeLocale",
        "fct-type": "function",
        "title": "decodeLocale"
      },
      "index": {
        "description": "Decode ByteString to Text using current locale",
        "hierarchy": "Data Text Lazy Encoding Locale",
        "module": "Data.Text.Lazy.Encoding.Locale",
        "name": "decodeLocale",
        "normalized": "ByteString-\u003eIO Text",
        "package": "text-locale-encoding",
        "partial": "Locale",
        "signature": "ByteString-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Lazy-Encoding-Locale.html#v:decodeLocale-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using supplied \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "TextEncoding -\u003e NewlineMode -\u003e ByteString -\u003e IO Text",
        "fct-source": "src/Data-Text-Lazy-Encoding-Locale.html#decodeLocale%27",
        "fct-type": "function",
        "title": "decodeLocale'"
      },
      "index": {
        "description": "Decode ByteString to Text using supplied TextEncoding and NewlineMode",
        "hierarchy": "Data Text Lazy Encoding Locale",
        "module": "Data.Text.Lazy.Encoding.Locale",
        "name": "decodeLocale'",
        "normalized": "TextEncoding-\u003eNewlineMode-\u003eByteString-\u003eIO Text",
        "package": "text-locale-encoding",
        "partial": "Locale'",
        "signature": "TextEncoding-\u003eNewlineMode-\u003eByteString-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Lazy-Encoding-Locale.html#v:encodeFromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Handle -\u003e Text -\u003e IO ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding-Locale.html#encodeFromHandle",
        "fct-type": "function",
        "title": "encodeFromHandle"
      },
      "index": {
        "description": "Encode Text to ByteString using Handle TextEncoding and NewlineMode",
        "hierarchy": "Data Text Lazy Encoding Locale",
        "module": "Data.Text.Lazy.Encoding.Locale",
        "name": "encodeFromHandle",
        "normalized": "Handle-\u003eText-\u003eIO ByteString",
        "package": "text-locale-encoding",
        "partial": "From Handle",
        "signature": "Handle-\u003eText-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Lazy-Encoding-Locale.html#v:encodeLocale",
      "description": {
        "fct-descr": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using current locale\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "Text -\u003e IO ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding-Locale.html#encodeLocale",
        "fct-type": "function",
        "title": "encodeLocale"
      },
      "index": {
        "description": "Encode Text to ByteString using current locale",
        "hierarchy": "Data Text Lazy Encoding Locale",
        "module": "Data.Text.Lazy.Encoding.Locale",
        "name": "encodeLocale",
        "normalized": "Text-\u003eIO ByteString",
        "package": "text-locale-encoding",
        "partial": "Locale",
        "signature": "Text-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-locale-encoding/docs/Data-Text-Lazy-Encoding-Locale.html#v:encodeLocale-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using supplied \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding.Locale",
        "fct-package": "text-locale-encoding",
        "fct-signature": "TextEncoding -\u003e NewlineMode -\u003e Text -\u003e IO ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding-Locale.html#encodeLocale%27",
        "fct-type": "function",
        "title": "encodeLocale'"
      },
      "index": {
        "description": "Encode Text to ByteString using supplied TextEncoding and NewlineMode",
        "hierarchy": "Data Text Lazy Encoding Locale",
        "module": "Data.Text.Lazy.Encoding.Locale",
        "name": "encodeLocale'",
        "normalized": "TextEncoding-\u003eNewlineMode-\u003eText-\u003eIO ByteString",
        "package": "text-locale-encoding",
        "partial": "Locale'",
        "signature": "TextEncoding-\u003eNewlineMode-\u003eText-\u003eIO ByteString"
      }
    }
  }
]