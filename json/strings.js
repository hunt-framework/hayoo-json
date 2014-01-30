[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for working with strings, including \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eThis module aims at offering a consistent interface across all the available\n string types. It currently offers instances for the ordinary Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n type, \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt especially provides functions for some types, which are otherwise not\n available nativly (such as \u003ccode\u003ebreakOnSubstring\u003c/code\u003e which is not available for the\n lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e type, is offered by \u003ccode\u003e\u003ca\u003esBreak\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estrBreak\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "module",
        "fct-source": "src/Data-Strings.html",
        "fct-type": "module",
        "title": "Strings"
      },
      "index": {
        "description": "Functions for working with strings including Text ByteString etc This module aims at offering consistent interface across all the available string types It currently offers instances for the ordinary Haskell String type Text lazy Text ByteString and lazy ByteString It especially provides functions for some types which are otherwise not available nativly such as breakOnSubstring which is not available for the lazy Text type is offered by sBreak and strBreak",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "Strings",
        "normalized": "",
        "package": "strings",
        "partial": "Strings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#t:Str",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStr\u003c/a\u003e\u003c/code\u003e class provides functions for working with arbitrary Strings.\n It is basically the same interface as provided by the \u003ccode\u003e\u003ca\u003eStrings\u003c/a\u003e\u003c/code\u003e class.\n However, every input string is a Haskell String here, thus easing the\n usage of different string types with native Haskell String literals.\n\u003c/p\u003e\u003cp\u003eFor example \u003ccode\u003estrAppend \u003ca\u003esuffix\u003c/a\u003e\u003c/code\u003e works with any string type for which\n an instance of \u003ccode\u003eStr\u003c/code\u003e is defined. In order to maximize the ease of use\n of this library, the functions are prefixed with \u003ccode\u003estr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe complexity and efficiency of these functions depends on the underlying\n string type being used.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: It suffices to provide instances for\n \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStrings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "class",
        "fct-source": "src/Data-Strings.html#Str",
        "fct-type": "class",
        "title": "Str"
      },
      "index": {
        "description": "The Str class provides functions for working with arbitrary Strings It is basically the same interface as provided by the Strings class However every input string is Haskell String here thus easing the usage of different string types with native Haskell String literals For example strAppend suffix works with any string type for which an instance of Str is defined In order to maximize the ease of use of this library the functions are prefixed with str The complexity and efficiency of these functions depends on the underlying string type being used Minimal complete definition It suffices to provide instances for Eq and Strings",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "Str",
        "normalized": "",
        "package": "strings",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#t:Strings",
      "description": {
        "fct-descr": "\u003cp\u003eThe goal of this class is to offer the same interface for various\n types of strings (\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, etc.).\n If a certain type offers a native implementation for a given function,\n \u003ccode\u003e\u003ca\u003eStrings\u003c/a\u003e\u003c/code\u003e uses it. If not, a default implementation is given.\n\u003c/p\u003e\u003cp\u003eAll of these functions are prefixed with \u003ccode\u003es\u003c/code\u003e to avoid nameclashes\n with existing functions from the prelude.\n\u003c/p\u003e\u003cp\u003eThe complexity and efficiency of these functions depends on the underlying\n string type being used.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "class",
        "fct-source": "src/Data-Strings.html#Strings",
        "fct-type": "class",
        "title": "Strings"
      },
      "index": {
        "description": "The goal of this class is to offer the same interface for various types of strings ByteString Text Haskell String etc If certain type offers native implementation for given function Strings uses it If not default implementation is given All of these functions are prefixed with to avoid nameclashes with existing functions from the prelude The complexity and efficiency of these functions depends on the underlying string type being used",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "Strings",
        "normalized": "",
        "package": "strings",
        "partial": "Strings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:byteToChar",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Word8 -\u003e Char",
        "fct-source": "src/Data-Strings.html#byteToChar",
        "fct-type": "function",
        "title": "byteToChar"
      },
      "index": {
        "description": "Convert Word8 into Char",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "byteToChar",
        "normalized": "Word-\u003eChar",
        "package": "strings",
        "partial": "To Char",
        "signature": "Word-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:bytes",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e object form an ordinary Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n This function will encode a String using the UTF-8 character encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Data-Strings.html#bytes",
        "fct-type": "function",
        "title": "bytes"
      },
      "index": {
        "description": "Create ByteString object form an ordinary Haskell String This function will encode String using the UTF-8 character encoding",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "bytes",
        "normalized": "String-\u003eByteString",
        "package": "strings",
        "partial": "",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:charToByte",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e Word8",
        "fct-source": "src/Data-Strings.html#charToByte",
        "fct-type": "function",
        "title": "charToByte"
      },
      "index": {
        "description": "Convert Char into Word8",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "charToByte",
        "normalized": "Char-\u003eWord",
        "package": "strings",
        "partial": "To Byte",
        "signature": "Char-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a string from a Haskell String.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-Strings.html#fromString",
        "fct-type": "method",
        "title": "fromString"
      },
      "index": {
        "description": "Create string from Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "strings",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:fromUnicodeString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a string from a Haskell String. If the string does not support unicode,\n the Haskell String is encoded using UTF-8.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-Strings.html#fromUnicodeString",
        "fct-type": "method",
        "title": "fromUnicodeString"
      },
      "index": {
        "description": "Create string from Haskell String If the string does not support unicode the Haskell String is encoded using UTF-8",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "fromUnicodeString",
        "normalized": "String-\u003ea",
        "package": "strings",
        "partial": "Unicode String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:lazyBytes",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e object from an ordinary Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n This function will encode a String using the UTF-8 character encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Data-Strings.html#lazyBytes",
        "fct-type": "function",
        "title": "lazyBytes"
      },
      "index": {
        "description": "Create lazy ByteString object from an ordinary Haskell String This function will encode String using the UTF-8 character encoding",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "lazyBytes",
        "normalized": "String-\u003eByteString",
        "package": "strings",
        "partial": "Bytes",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:lazyText",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e object from an ordinary Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e Text",
        "fct-source": "src/Data-Strings.html#lazyText",
        "fct-type": "function",
        "title": "lazyText"
      },
      "index": {
        "description": "Create lazy Text object from an ordinary Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "lazyText",
        "normalized": "String-\u003eText",
        "package": "strings",
        "partial": "Text",
        "signature": "String-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sBreak",
      "description": {
        "fct-descr": "\u003cp\u003eBreaks the string on the first occurence of the given substring.\n\u003c/p\u003e\u003cpre\u003e strBreak \"xx\" \"1x2xx3xx4\" = (\"1x2\", \"xx3xx4\")\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Strings.html#sBreak",
        "fct-type": "method",
        "title": "sBreak"
      },
      "index": {
        "description": "Breaks the string on the first occurence of the given substring strBreak xx x2xx3xx4 x2 xx3xx4",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sBreak",
        "normalized": "a-\u003ea-\u003e(a,a)",
        "package": "strings",
        "partial": "Break",
        "signature": "a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sCapitalize",
      "description": {
        "fct-descr": "\u003cp\u003eTurn the first character into an upper case character.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#sCapitalize",
        "fct-type": "method",
        "title": "sCapitalize"
      },
      "index": {
        "description": "Turn the first character into an upper case character",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sCapitalize",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Capitalize",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sConcat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate all the strings in the list to a single string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Strings.html#sConcat",
        "fct-type": "method",
        "title": "sConcat"
      },
      "index": {
        "description": "Concatenate all the strings in the list to single string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sConcat",
        "normalized": "[a]-\u003ea",
        "package": "strings",
        "partial": "Concat",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sCons",
      "description": {
        "fct-descr": "\u003cp\u003eCons\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sCons",
        "fct-type": "method",
        "title": "sCons"
      },
      "index": {
        "description": "Cons",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sCons",
        "normalized": "Char-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Cons",
        "signature": "Char-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sDrop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sDrop",
        "fct-type": "method",
        "title": "sDrop"
      },
      "index": {
        "description": "drop generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sDrop",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Drop",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sDropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "(Char -\u003e Bool) -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sDropWhile",
        "fct-type": "method",
        "title": "sDropWhile"
      },
      "index": {
        "description": "dropWhile generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sDropWhile",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Drop While",
        "signature": "(Char-\u003eBool)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a",
        "fct-source": "src/Data-Strings.html#sEmpty",
        "fct-type": "method",
        "title": "sEmpty"
      },
      "index": {
        "description": "The empty string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sEmpty",
        "normalized": "",
        "package": "strings",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sEndsWith",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the string ends with the given string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Strings.html#sEndsWith",
        "fct-type": "method",
        "title": "sEndsWith"
      },
      "index": {
        "description": "Check if the string ends with the given string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sEndsWith",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "strings",
        "partial": "Ends With",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sFromString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a string from a Haskell String.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-Strings.html#sFromString",
        "fct-type": "method",
        "title": "sFromString"
      },
      "index": {
        "description": "Create string from Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sFromString",
        "normalized": "String-\u003ea",
        "package": "strings",
        "partial": "From String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sFromUnicodeString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a string from a Haskell String. If the string does not support unicode,\n the Haskell String is encoded using UTF-8.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-Strings.html#sFromUnicodeString",
        "fct-type": "method",
        "title": "sFromUnicodeString"
      },
      "index": {
        "description": "Create string from Haskell String If the string does not support unicode the Haskell String is encoded using UTF-8",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sFromUnicodeString",
        "normalized": "String-\u003ea",
        "package": "strings",
        "partial": "From Unicode String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sHead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Char",
        "fct-source": "src/Data-Strings.html#sHead",
        "fct-type": "method",
        "title": "sHead"
      },
      "index": {
        "description": "head generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sHead",
        "normalized": "a-\u003eChar",
        "package": "strings",
        "partial": "Head",
        "signature": "a-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sInit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#sInit",
        "fct-type": "method",
        "title": "sInit"
      },
      "index": {
        "description": "init generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sInit",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Init",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sLast",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Char",
        "fct-source": "src/Data-Strings.html#sLast",
        "fct-type": "method",
        "title": "sLast"
      },
      "index": {
        "description": "last generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sLast",
        "normalized": "a-\u003eChar",
        "package": "strings",
        "partial": "Last",
        "signature": "a-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sLen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Strings.html#sLen",
        "fct-type": "method",
        "title": "sLen"
      },
      "index": {
        "description": "length generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sLen",
        "normalized": "a-\u003eInt",
        "package": "strings",
        "partial": "Len",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all characters.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "(Char -\u003e Char) -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sMap",
        "fct-type": "method",
        "title": "sMap"
      },
      "index": {
        "description": "Map function over all characters",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sMap",
        "normalized": "(Char-\u003eChar)-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Map",
        "signature": "(Char-\u003eChar)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sNull",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the given string is empty or not. \u003ccode\u003enull\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-Strings.html#sNull",
        "fct-type": "method",
        "title": "sNull"
      },
      "index": {
        "description": "Check whether the given string is empty or not null generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sNull",
        "normalized": "a-\u003eBool",
        "package": "strings",
        "partial": "Null",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sPadBoth",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given character n times to both sides, such that\n the resulting string has the given length.\n\u003c/p\u003e\u003cpre\u003e strPadBoth '0' 8 \"4711\" == \"00471100\"\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sPadBoth",
        "fct-type": "method",
        "title": "sPadBoth"
      },
      "index": {
        "description": "Appends the given character times to both sides such that the resulting string has the given length strPadBoth",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sPadBoth",
        "normalized": "Char-\u003eInt-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Pad Both",
        "signature": "Char-\u003eInt-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sPadLeft",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given character n times to the left, such that\n the resulting string has the given length.\n\u003c/p\u003e\u003cpre\u003e strPadLeft '0' 8 \"4711\" == \"00004711\"\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sPadLeft",
        "fct-type": "method",
        "title": "sPadLeft"
      },
      "index": {
        "description": "Appends the given character times to the left such that the resulting string has the given length strPadLeft",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sPadLeft",
        "normalized": "Char-\u003eInt-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Pad Left",
        "signature": "Char-\u003eInt-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sPadRight",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given character n times to the right, such that\n the resulting string has the given length.\n\u003c/p\u003e\u003cpre\u003e strPadRight '0' 8 \"4711\" == \"47110000\"\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sPadRight",
        "fct-type": "method",
        "title": "sPadRight"
      },
      "index": {
        "description": "Appends the given character times to the right such that the resulting string has the given length strPadRight",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sPadRight",
        "normalized": "Char-\u003eInt-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Pad Right",
        "signature": "Char-\u003eInt-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sReplace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a substring with another string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sReplace",
        "fct-type": "method",
        "title": "sReplace"
      },
      "index": {
        "description": "Replace substring with another string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sReplace",
        "normalized": "a-\u003ea-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Replace",
        "signature": "a-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sReverse",
      "description": {
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#sReverse",
        "fct-type": "method",
        "title": "sReverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sReverse",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Reverse",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sSplit",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esBreak\u003c/a\u003e\u003c/code\u003e, but the string to break on is excluded from the result.\n\u003c/p\u003e\u003cpre\u003e strSplit \"xx\" \"1x2xx3xx4\" = (\"1x2\", \"3xx4\")\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a -\u003e (a, a, Bool)",
        "fct-source": "src/Data-Strings.html#sSplit",
        "fct-type": "method",
        "title": "sSplit"
      },
      "index": {
        "description": "Like sBreak but the string to break on is excluded from the result strSplit xx x2xx3xx4 x2 xx4",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sSplit",
        "normalized": "a-\u003ea-\u003e(a,a,Bool)",
        "package": "strings",
        "partial": "Split",
        "signature": "a-\u003ea-\u003e(a,a,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sSplitAll",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into multiple fragments, separated by the given substring.\n\u003c/p\u003e\u003cpre\u003e strSplitAll \"xx\" \"1x2xx3xx4\" = [\"1x2\", \"3\", \"4\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-source": "src/Data-Strings.html#sSplitAll",
        "fct-type": "method",
        "title": "sSplitAll"
      },
      "index": {
        "description": "Split string into multiple fragments separated by the given substring strSplitAll xx x2xx3xx4 x2",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sSplitAll",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "strings",
        "partial": "Split All",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sStartsWith",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the string starts with the given string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Strings.html#sStartsWith",
        "fct-type": "method",
        "title": "sStartsWith"
      },
      "index": {
        "description": "Check if the string starts with the given string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sStartsWith",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "strings",
        "partial": "Starts With",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sTail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#sTail",
        "fct-type": "method",
        "title": "sTail"
      },
      "index": {
        "description": "tail generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sTail",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Tail",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sTake",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sTake",
        "fct-type": "method",
        "title": "sTake"
      },
      "index": {
        "description": "take generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sTake",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Take",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sTakeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "(Char -\u003e Bool) -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#sTakeWhile",
        "fct-type": "method",
        "title": "sTakeWhile"
      },
      "index": {
        "description": "takeWhile generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sTakeWhile",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Take While",
        "signature": "(Char-\u003eBool)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sToString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the string into a Haskell String.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-Strings.html#sToString",
        "fct-type": "method",
        "title": "sToString"
      },
      "index": {
        "description": "Convert the string into Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sToString",
        "normalized": "a-\u003eString",
        "package": "strings",
        "partial": "To String",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sToWord8",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the string into a list of bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e [Word8]",
        "fct-source": "src/Data-Strings.html#sToWord8",
        "fct-type": "method",
        "title": "sToWord8"
      },
      "index": {
        "description": "Convert the string into list of bytes",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sToWord8",
        "normalized": "a-\u003e[Word]",
        "package": "strings",
        "partial": "To Word",
        "signature": "a-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:sTrim",
      "description": {
        "fct-descr": "\u003cp\u003eStrips white space characters off both ends of the string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#sTrim",
        "fct-type": "method",
        "title": "sTrim"
      },
      "index": {
        "description": "Strips white space characters off both ends of the string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "sTrim",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Trim",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strAppend",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to the string. \u003ccode\u003e++\u003c/code\u003e generalised.\n\u003c/p\u003e\u003cpre\u003e strAppend \" world\" \"hello\" = \"hello world\"\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strAppend",
        "fct-type": "method",
        "title": "strAppend"
      },
      "index": {
        "description": "Appends the given Haskell String to the string generalised strAppend world hello hello world",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strAppend",
        "normalized": "String-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Append",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strBreak",
      "description": {
        "fct-descr": "\u003cp\u003eBreaks the string on the first occurence of the given substring.\n\u003c/p\u003e\u003cpre\u003e strBreak \"xx\" \"1x2xx3xx4\" = (\"1x2\", \"xx3xx4\")\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Strings.html#strBreak",
        "fct-type": "method",
        "title": "strBreak"
      },
      "index": {
        "description": "Breaks the string on the first occurence of the given substring strBreak xx x2xx3xx4 x2 xx3xx4",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strBreak",
        "normalized": "String-\u003ea-\u003e(a,a)",
        "package": "strings",
        "partial": "Break",
        "signature": "String-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strCapitalize",
      "description": {
        "fct-descr": "\u003cp\u003eTurn the first character in the string to upper case.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#strCapitalize",
        "fct-type": "method",
        "title": "strCapitalize"
      },
      "index": {
        "description": "Turn the first character in the string to upper case",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strCapitalize",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Capitalize",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strConcat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003econcat\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Strings.html#strConcat",
        "fct-type": "method",
        "title": "strConcat"
      },
      "index": {
        "description": "concat generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strConcat",
        "normalized": "[a]-\u003ea",
        "package": "strings",
        "partial": "Concat",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strCons",
      "description": {
        "fct-descr": "\u003cp\u003eCons generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strCons",
        "fct-type": "method",
        "title": "strCons"
      },
      "index": {
        "description": "Cons generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strCons",
        "normalized": "Char-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Cons",
        "signature": "Char-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strDrop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strDrop",
        "fct-type": "method",
        "title": "strDrop"
      },
      "index": {
        "description": "drop generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strDrop",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Drop",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strEndsWith",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the string ends with the given Haskell String.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e String -\u003e Bool",
        "fct-source": "src/Data-Strings.html#strEndsWith",
        "fct-type": "method",
        "title": "strEndsWith"
      },
      "index": {
        "description": "Check if the string ends with the given Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strEndsWith",
        "normalized": "a-\u003eString-\u003eBool",
        "package": "strings",
        "partial": "Ends With",
        "signature": "a-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strEq",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the given Haskell String equals the string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "strEq",
        "fct-source": "src/Data-Strings.html#strEq",
        "fct-type": "method",
        "title": "strEq"
      },
      "index": {
        "description": "Check if the given Haskell String equals the string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strEq",
        "normalized": "",
        "package": "strings",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strHead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Char",
        "fct-source": "src/Data-Strings.html#strHead",
        "fct-type": "method",
        "title": "strHead"
      },
      "index": {
        "description": "head generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strHead",
        "normalized": "a-\u003eChar",
        "package": "strings",
        "partial": "Head",
        "signature": "a-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strInit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#strInit",
        "fct-type": "method",
        "title": "strInit"
      },
      "index": {
        "description": "init generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strInit",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Init",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strJoin",
      "description": {
        "fct-descr": "\u003cp\u003eGlue together multiple strings by a given Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e strJoin x = concat . intersperse x\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e [a] -\u003e a",
        "fct-source": "src/Data-Strings.html#strJoin",
        "fct-type": "method",
        "title": "strJoin"
      },
      "index": {
        "description": "Glue together multiple strings by given Haskell String strJoin concat intersperse",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strJoin",
        "normalized": "String-\u003e[a]-\u003ea",
        "package": "strings",
        "partial": "Join",
        "signature": "String-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strLast",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Char",
        "fct-source": "src/Data-Strings.html#strLast",
        "fct-type": "method",
        "title": "strLast"
      },
      "index": {
        "description": "last generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strLast",
        "normalized": "a-\u003eChar",
        "package": "strings",
        "partial": "Last",
        "signature": "a-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strLen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Strings.html#strLen",
        "fct-type": "method",
        "title": "strLen"
      },
      "index": {
        "description": "length generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strLen",
        "normalized": "a-\u003eInt",
        "package": "strings",
        "partial": "Len",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emap\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "(Char -\u003e Char) -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strMap",
        "fct-type": "method",
        "title": "strMap"
      },
      "index": {
        "description": "map generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strMap",
        "normalized": "(Char-\u003eChar)-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Map",
        "signature": "(Char-\u003eChar)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strNull",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the given string is empty or not. \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-Strings.html#strNull",
        "fct-type": "method",
        "title": "strNull"
      },
      "index": {
        "description": "Check whether the given string is empty or not null generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strNull",
        "normalized": "a-\u003eBool",
        "package": "strings",
        "partial": "Null",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strPadBoth",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given character n times to both sides, such that\n the resulting string has the given length.\n\u003c/p\u003e\u003cpre\u003e strPadBoth '0' 8 \"4711\" == \"00471100\"\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strPadBoth",
        "fct-type": "method",
        "title": "strPadBoth"
      },
      "index": {
        "description": "Appends the given character times to both sides such that the resulting string has the given length strPadBoth",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strPadBoth",
        "normalized": "Char-\u003eInt-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Pad Both",
        "signature": "Char-\u003eInt-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strPadLeft",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given character n times to the left, such that\n the resulting string has the given length.\n\u003c/p\u003e\u003cpre\u003e strPadLeft '0' 8 \"4711\" == \"00004711\"\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strPadLeft",
        "fct-type": "method",
        "title": "strPadLeft"
      },
      "index": {
        "description": "Appends the given character times to the left such that the resulting string has the given length strPadLeft",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strPadLeft",
        "normalized": "Char-\u003eInt-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Pad Left",
        "signature": "Char-\u003eInt-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strPadRight",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given character n times to the right, such that\n the resulting string has the given length.\n\u003c/p\u003e\u003cpre\u003e strPadRight '0' 8 \"4711\" == \"47110000\"\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Char -\u003e Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strPadRight",
        "fct-type": "method",
        "title": "strPadRight"
      },
      "index": {
        "description": "Appends the given character times to the right such that the resulting string has the given length strPadRight",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strPadRight",
        "normalized": "Char-\u003eInt-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Pad Right",
        "signature": "Char-\u003eInt-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strReplace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a substring with another string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "strReplace",
        "fct-source": "src/Data-Strings.html#strReplace",
        "fct-type": "method",
        "title": "strReplace"
      },
      "index": {
        "description": "Replace substring with another string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strReplace",
        "normalized": "",
        "package": "strings",
        "partial": "Replace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strReverse",
      "description": {
        "fct-descr": "\u003cp\u003eReverse the string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#strReverse",
        "fct-type": "method",
        "title": "strReverse"
      },
      "index": {
        "description": "Reverse the string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strReverse",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Reverse",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strSplit",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estrBreak\u003c/a\u003e\u003c/code\u003e, but the string to break on is excluded from the result.\n\u003c/p\u003e\u003cpre\u003e strSplit \"xx\" \"1x2xx3xx4\" = (\"1x2\", \"3xx4\")\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Strings.html#strSplit",
        "fct-type": "method",
        "title": "strSplit"
      },
      "index": {
        "description": "Like strBreak but the string to break on is excluded from the result strSplit xx x2xx3xx4 x2 xx4",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strSplit",
        "normalized": "String-\u003ea-\u003e(a,a)",
        "package": "strings",
        "partial": "Split",
        "signature": "String-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strSplitAll",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into multiple fragments, separated by the given substring.\n\u003c/p\u003e\u003cpre\u003e strSplitAll \"xx\" \"1x2xx3xx4\" = [\"1x2\", \"3\", \"4\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e a -\u003e [a]",
        "fct-source": "src/Data-Strings.html#strSplitAll",
        "fct-type": "method",
        "title": "strSplitAll"
      },
      "index": {
        "description": "Split string into multiple fragments separated by the given substring strSplitAll xx x2xx3xx4 x2",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strSplitAll",
        "normalized": "String-\u003ea-\u003e[a]",
        "package": "strings",
        "partial": "Split All",
        "signature": "String-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strStartsWith",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the string starts with the given Haskell String.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e String -\u003e Bool",
        "fct-source": "src/Data-Strings.html#strStartsWith",
        "fct-type": "method",
        "title": "strStartsWith"
      },
      "index": {
        "description": "Check if the string starts with the given Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strStartsWith",
        "normalized": "a-\u003eString-\u003eBool",
        "package": "strings",
        "partial": "Starts With",
        "signature": "a-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strTail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e generalised. This function is undefined if \u003ccode\u003e\u003ca\u003estrNull\u003c/a\u003e\u003c/code\u003e would return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#strTail",
        "fct-type": "method",
        "title": "strTail"
      },
      "index": {
        "description": "tail generalised This function is undefined if strNull would return True",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strTail",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Tail",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strTake",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e generalised.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Data-Strings.html#strTake",
        "fct-type": "method",
        "title": "strTake"
      },
      "index": {
        "description": "take generalised",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strTake",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "strings",
        "partial": "Take",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strToLower",
      "description": {
        "fct-descr": "\u003cp\u003eTurn all characters in the string to lower case.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#strToLower",
        "fct-type": "method",
        "title": "strToLower"
      },
      "index": {
        "description": "Turn all characters in the string to lower case",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strToLower",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "To Lower",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strToUpper",
      "description": {
        "fct-descr": "\u003cp\u003eTurn all characters in the string to upper case.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#strToUpper",
        "fct-type": "method",
        "title": "strToUpper"
      },
      "index": {
        "description": "Turn all characters in the string to upper case",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strToUpper",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "To Upper",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:strTrim",
      "description": {
        "fct-descr": "\u003cp\u003eStrips white space characters off both ends of the string.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Strings.html#strTrim",
        "fct-type": "method",
        "title": "strTrim"
      },
      "index": {
        "description": "Strips white space characters off both ends of the string",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "strTrim",
        "normalized": "a-\u003ea",
        "package": "strings",
        "partial": "Trim",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e object form an ordinary Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "String -\u003e Text",
        "fct-source": "src/Data-Strings.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Create Text object form an ordinary Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "text",
        "normalized": "String-\u003eText",
        "package": "strings",
        "partial": "",
        "signature": "String-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the string into a Haskell String.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-Strings.html#toString",
        "fct-type": "method",
        "title": "toString"
      },
      "index": {
        "description": "Convert the string into Haskell String",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "toString",
        "normalized": "a-\u003eString",
        "package": "strings",
        "partial": "String",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strings/docs/Data-Strings.html#v:toWord8",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the string into a list of bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Strings",
        "fct-package": "strings",
        "fct-signature": "a -\u003e [Word8]",
        "fct-source": "src/Data-Strings.html#toWord8",
        "fct-type": "method",
        "title": "toWord8"
      },
      "index": {
        "description": "Convert the string into list of bytes",
        "hierarchy": "Data Strings",
        "module": "Data.Strings",
        "name": "toWord8",
        "normalized": "a-\u003e[Word]",
        "package": "strings",
        "partial": "Word",
        "signature": "a-\u003e[Word]"
      }
    }
  }
]