[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/charsetdetect/docs/Codec-Text-Detect.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDetect the likely character encoding for a stream of bytes using Mozilla's Universal Character Set Detector.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Text.Detect",
        "fct-package": "charsetdetect",
        "fct-signature": "module",
        "fct-source": "src/Codec-Text-Detect.html",
        "fct-type": "module",
        "title": "Detect"
      },
      "index": {
        "description": "Detect the likely character encoding for stream of bytes using Mozilla Universal Character Set Detector",
        "hierarchy": "Codec Text Detect",
        "module": "Codec.Text.Detect",
        "name": "Detect",
        "normalized": "",
        "package": "charsetdetect",
        "partial": "Detect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/charsetdetect/docs/Codec-Text-Detect.html#v:detectEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eDetect the encoding for a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and attempt to create a \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e suitable for decoding it.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.Detect",
        "fct-package": "charsetdetect",
        "fct-signature": "ByteString -\u003e IO (Maybe TextEncoding)",
        "fct-source": "src/Codec-Text-Detect.html#detectEncoding",
        "fct-type": "function",
        "title": "detectEncoding"
      },
      "index": {
        "description": "Detect the encoding for ByteString and attempt to create TextEncoding suitable for decoding it",
        "hierarchy": "Codec Text Detect",
        "module": "Codec.Text.Detect",
        "name": "detectEncoding",
        "normalized": "ByteString-\u003eIO(Maybe TextEncoding)",
        "package": "charsetdetect",
        "partial": "Encoding",
        "signature": "ByteString-\u003eIO(Maybe TextEncoding)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/charsetdetect/docs/Codec-Text-Detect.html#v:detectEncodingName",
      "description": {
        "fct-descr": "\u003cp\u003eDetect the likely encoding used by a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. At the time of writing, the encoding\n returned will be drawn from this list:\n\u003c/p\u003e\u003cpre\u003e Big5\n EUC-JP\n EUC-KR\n GB18030\n gb18030\n HZ-GB-2312\n IBM855\n IBM866\n ISO-2022-CN\n ISO-2022-JP\n ISO-2022-KR\n ISO-8859-2\n ISO-8859-5\n ISO-8859-7\n ISO-8859-8\n KOI8-R\n Shift_JIS\n TIS-620\n UTF-8\n UTF-16BE\n UTF-16LE\n UTF-32BE\n UTF-32LE\n windows-1250\n windows-1251\n windows-1252\n windows-1253\n windows-1255\n x-euc-tw\n X-ISO-10646-UCS-4-2143\n X-ISO-10646-UCS-4-3412\n x-mac-cyrillic\n\u003c/pre\u003e\u003cp\u003eNote that there are two capitalisations of \u003ccode\u003egb18030\u003c/code\u003e. For this reason (and to be future-proof against any future behaviour\n like this for newly-added character sets) we recommend that you compare character set names case insensitively.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.Detect",
        "fct-package": "charsetdetect",
        "fct-signature": "ByteString -\u003e Maybe String",
        "fct-source": "src/Codec-Text-Detect.html#detectEncodingName",
        "fct-type": "function",
        "title": "detectEncodingName"
      },
      "index": {
        "description": "Detect the likely encoding used by ByteString At the time of writing the encoding returned will be drawn from this list Big5 EUC-JP EUC-KR GB18030 gb18030 HZ-GB-2312 IBM855 IBM866 ISO-2022-CN ISO-2022-JP ISO-2022-KR ISO-8859-2 ISO-8859-5 ISO-8859-7 ISO-8859-8 KOI8-R Shift JIS TIS-620 UTF-8 UTF-16BE UTF-16LE UTF-32BE UTF-32LE windows-1250 windows-1251 windows-1252 windows-1253 windows-1255 x-euc-tw X-ISO-10646-UCS-4-2143 X-ISO-10646-UCS-4-3412 x-mac-cyrillic Note that there are two capitalisations of gb18030 For this reason and to be future-proof against any future behaviour like this for newly-added character sets we recommend that you compare character set names case insensitively",
        "hierarchy": "Codec Text Detect",
        "module": "Codec.Text.Detect",
        "name": "detectEncodingName",
        "normalized": "ByteString-\u003eMaybe String",
        "package": "charsetdetect",
        "partial": "Encoding Name",
        "signature": "ByteString-\u003eMaybe String"
      }
    }
  }
]