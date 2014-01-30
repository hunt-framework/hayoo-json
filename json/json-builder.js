[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal bits.   By using the constructors provided in this module,\n you can break the abstraction that json-builder provides and emit invalid\n JSON syntax.   Also, this module is not as stable as the public interface\n and can change at any time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "module",
        "fct-source": "src/Data-Json-Builder-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal bits By using the constructors provided in this module you can break the abstraction that json-builder provides and emit invalid JSON syntax Also this module is not as stable as the public interface and can change at any time",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "json-builder",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e type represents syntax for a json array.  It has been given\n a singleton constructor \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e,  so that\n \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents the empty array and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two arrays.\n Arbitrary arrays can be constructed using these operators.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Array",
        "fct-type": "newtype",
        "title": "Array"
      },
      "index": {
        "description": "The Array type represents syntax for json array It has been given singleton constructor element and an instance of Monoid so that mempty represents the empty array and mappend concatinates two arrays Arbitrary arrays can be constructed using these operators",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Array",
        "normalized": "",
        "package": "json-builder",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:CommaMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCommaMonoid\u003c/a\u003e\u003c/code\u003e inserts commas between builders.  In order to\n satisify the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e identity laws,  \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e must be distinguished\n from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eComma\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  To demonstrate the difference:\n\u003c/p\u003e\u003cpre\u003e\n mconcat [\"foo\", \"\"    , \"bar\"]  ==  \"foo,,bar\"\n mconcat [\"foo\", Empty , \"bar\"]  ==  \"foo,bar\"\n\u003c/pre\u003e\u003cp\u003eThe strings in this example denote \u003ccode\u003eCommaMonoids\u003c/code\u003e via\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e = Comma . \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Thus \u003ccode\u003e\"\"\u003c/code\u003e is equivalent\n to \u003ccode\u003eComma mempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-Json-Builder-Implementation.html#CommaMonoid",
        "fct-type": "data",
        "title": "CommaMonoid"
      },
      "index": {
        "description": "CommaMonoid inserts commas between builders In order to satisify the Monoid identity laws Empty must be distinguished from Comma mempty To demonstrate the difference mconcat foo bar foo bar mconcat foo Empty bar foo bar The strings in this example denote CommaMonoids via fromString Comma fromString Thus is equivalent to Comma mempty",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "CommaMonoid",
        "normalized": "",
        "package": "json-builder",
        "partial": "Comma Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Escaped",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEscaped\u003c/a\u003e\u003c/code\u003e type represents json string syntax.  The purpose of this\n type is so that json strings can be efficiently constructed from multiple\n Haskell strings without superfluous conversions or concatinations.\n\u003c/p\u003e\u003cp\u003eInternally, it is just a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e value which must produce a UTF-8 encoded\n bytestring with backslashes,  quotes,  and control characters appropriately\n escaped.   It also must not render the opening or closing quote,  which\n are instead rendered by \u003ccode\u003e\u003ca\u003etoJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Escaped",
        "fct-type": "newtype",
        "title": "Escaped"
      },
      "index": {
        "description": "The Escaped type represents json string syntax The purpose of this type is so that json strings can be efficiently constructed from multiple Haskell strings without superfluous conversions or concatinations Internally it is just Builder value which must produce UTF-8 encoded bytestring with backslashes quotes and control characters appropriately escaped It also must not render the opening or closing quote which are instead rendered by toJson",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Escaped",
        "normalized": "",
        "package": "json-builder",
        "partial": "Escaped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Json",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e type represents valid json syntax.  It cannot be directly\n analyzed, however it can be turned into a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoBuilder\u003c/a\u003e\u003c/code\u003e,\n a (lazy) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoJsonBS\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoJsonLBS\u003c/a\u003e\u003c/code\u003e,  or used as a\n component of a json \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or json \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Json",
        "fct-type": "newtype",
        "title": "Json"
      },
      "index": {
        "description": "The Json type represents valid json syntax It cannot be directly analyzed however it can be turned into Builder via toBuilder lazy ByteString via toJsonBS or toJsonLBS or used as component of json Array or json Object using element or row",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Json",
        "normalized": "",
        "package": "json-builder",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type represents syntax for a json object.  It has a singleton\n constructor \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e, and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, so that \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents\n the empty object and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two objects.  Arbitrary objects\n can be constructed using these operators.\n\u003c/p\u003e\u003cp\u003eNote that duplicate field names will appear in the output, so it is up\n to the user of this interface to avoid duplicate field names.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Object",
        "fct-type": "newtype",
        "title": "Object"
      },
      "index": {
        "description": "The Object type represents syntax for json object It has singleton constructor row and an instance of Monoid so that mempty represents the empty object and mappend concatinates two objects Arbitrary objects can be constructed using these operators Note that duplicate field names will appear in the output so it is up to the user of this interface to avoid duplicate field names",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Object",
        "normalized": "",
        "package": "json-builder",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Array",
      "description": {
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "Array CommaMonoid",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Array",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Array",
        "normalized": "",
        "package": "json-builder",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Comma",
      "description": {
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "Comma !Builder",
        "fct-source": "src/Data-Json-Builder-Implementation.html#CommaMonoid",
        "fct-type": "function",
        "title": "Comma"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Comma",
        "normalized": "",
        "package": "json-builder",
        "partial": "Comma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Empty",
      "description": {
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "Empty",
        "fct-source": "src/Data-Json-Builder-Implementation.html#CommaMonoid",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Empty",
        "normalized": "",
        "package": "json-builder",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Escaped",
      "description": {
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "Escaped Builder",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Escaped",
        "fct-type": "function",
        "title": "Escaped"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Escaped",
        "normalized": "",
        "package": "json-builder",
        "partial": "Escaped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Json",
      "description": {
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "Json Builder",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Json",
        "fct-type": "function",
        "title": "Json"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Json",
        "normalized": "",
        "package": "json-builder",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Object",
      "description": {
        "fct-module": "Data.Json.Builder.Internal",
        "fct-package": "json-builder",
        "fct-signature": "Object CommaMonoid",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Object",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder Internal",
        "module": "Data.Json.Builder.Internal",
        "name": "Object",
        "normalized": "",
        "package": "json-builder",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structure agnostic JSON serialization\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "module",
        "fct-source": "src/Data-Json-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Data structure agnostic JSON serialization",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "json-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e type represents syntax for a json array.  It has been given\n a singleton constructor \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e,  so that\n \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents the empty array and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two arrays.\n Arbitrary arrays can be constructed using these operators.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Array",
        "fct-type": "data",
        "title": "Array"
      },
      "index": {
        "description": "The Array type represents syntax for json array It has been given singleton constructor element and an instance of Monoid so that mempty represents the empty array and mappend concatinates two arrays Arbitrary arrays can be constructed using these operators",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "Array",
        "normalized": "",
        "package": "json-builder",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Escaped",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEscaped\u003c/a\u003e\u003c/code\u003e type represents json string syntax.  The purpose of this\n type is so that json strings can be efficiently constructed from multiple\n Haskell strings without superfluous conversions or concatinations.\n\u003c/p\u003e\u003cp\u003eInternally, it is just a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e value which must produce a UTF-8 encoded\n bytestring with backslashes,  quotes,  and control characters appropriately\n escaped.   It also must not render the opening or closing quote,  which\n are instead rendered by \u003ccode\u003e\u003ca\u003etoJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Escaped",
        "fct-type": "data",
        "title": "Escaped"
      },
      "index": {
        "description": "The Escaped type represents json string syntax The purpose of this type is so that json strings can be efficiently constructed from multiple Haskell strings without superfluous conversions or concatinations Internally it is just Builder value which must produce UTF-8 encoded bytestring with backslashes quotes and control characters appropriately escaped It also must not render the opening or closing quote which are instead rendered by toJson",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "Escaped",
        "normalized": "",
        "package": "json-builder",
        "partial": "Escaped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:JsArray",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "class",
        "fct-source": "src/Data-Json-Builder-Implementation.html#JsArray",
        "fct-type": "class",
        "title": "JsArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "JsArray",
        "normalized": "",
        "package": "json-builder",
        "partial": "Js Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:JsObject",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "class",
        "fct-source": "src/Data-Json-Builder-Implementation.html#JsObject",
        "fct-type": "class",
        "title": "JsObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "JsObject",
        "normalized": "",
        "package": "json-builder",
        "partial": "Js Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:JsString",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eJsString\u003c/a\u003e\u003c/code\u003e typeclass represents types that can be render into json\n string syntax.  They are special because only strings can appear as field\n names of json objects.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "class",
        "fct-source": "src/Data-Json-Builder-Implementation.html#JsString",
        "fct-type": "class",
        "title": "JsString"
      },
      "index": {
        "description": "The JsString typeclass represents types that can be render into json string syntax They are special because only strings can appear as field names of json objects",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "JsString",
        "normalized": "",
        "package": "json-builder",
        "partial": "Js String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Json",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e type represents valid json syntax.  It cannot be directly\n analyzed, however it can be turned into a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoBuilder\u003c/a\u003e\u003c/code\u003e,\n a (lazy) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoJsonBS\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoJsonLBS\u003c/a\u003e\u003c/code\u003e,  or used as a\n component of a json \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or json \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Json",
        "fct-type": "data",
        "title": "Json"
      },
      "index": {
        "description": "The Json type represents valid json syntax It cannot be directly analyzed however it can be turned into Builder via toBuilder lazy ByteString via toJsonBS or toJsonLBS or used as component of json Array or json Object using element or row",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "Json",
        "normalized": "",
        "package": "json-builder",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "Monoid",
        "normalized": "",
        "package": "json-builder",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type represents syntax for a json object.  It has a singleton\n constructor \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e, and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, so that \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents\n the empty object and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two objects.  Arbitrary objects\n can be constructed using these operators.\n\u003c/p\u003e\u003cp\u003eNote that duplicate field names will appear in the output, so it is up\n to the user of this interface to avoid duplicate field names.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Object",
        "fct-type": "data",
        "title": "Object"
      },
      "index": {
        "description": "The Object type represents syntax for json object It has singleton constructor row and an instance of Monoid so that mempty represents the empty object and mappend concatinates two objects Arbitrary objects can be constructed using these operators Note that duplicate field names will appear in the output so it is up to the user of this interface to avoid duplicate field names",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "Object",
        "normalized": "",
        "package": "json-builder",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e typeclass represents types that can be rendered\n into valid json syntax.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "class",
        "fct-source": "src/Data-Json-Builder-Implementation.html#Value",
        "fct-type": "class",
        "title": "Value"
      },
      "index": {
        "description": "The Value typeclass represents types that can be rendered into valid json syntax",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "Value",
        "normalized": "",
        "package": "json-builder",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:element",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e function constructs a json array consisting of exactly\n one value.  These arrays can be concatinated using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e Array",
        "fct-source": "src/Data-Json-Builder-Implementation.html#element",
        "fct-type": "function",
        "title": "element"
      },
      "index": {
        "description": "The element function constructs json array consisting of exactly one value These arrays can be concatinated using mappend",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "element",
        "normalized": "a-\u003eArray",
        "package": "json-builder",
        "partial": "",
        "signature": "a-\u003eArray"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:escape",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e Escaped",
        "fct-source": "src/Data-Json-Builder-Implementation.html#escape",
        "fct-type": "method",
        "title": "escape"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "escape",
        "normalized": "a-\u003eEscaped",
        "package": "json-builder",
        "partial": "",
        "signature": "a-\u003eEscaped"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:jsNull",
      "description": {
        "fct-descr": "\u003cp\u003ethis renders as Json's \u003ccode\u003enull\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "Json",
        "fct-source": "src/Data-Json-Builder-Implementation.html#jsNull",
        "fct-type": "function",
        "title": "jsNull"
      },
      "index": {
        "description": "this renders as Json null value",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "jsNull",
        "normalized": "",
        "package": "json-builder",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:mappend",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "mappend"
      },
      "index": {
        "description": "An associative operation",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "mappend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "json-builder",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:mconcat",
      "description": {
        "fct-descr": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "[a] -\u003e a",
        "fct-type": "method",
        "title": "mconcat"
      },
      "index": {
        "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "mconcat",
        "normalized": "[a]-\u003ea",
        "package": "json-builder",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:mempty",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "mempty"
      },
      "index": {
        "description": "Identity of mappend",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "mempty",
        "normalized": "",
        "package": "json-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:row",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e function constructs a json object consisting of exactly\n one field.  These objects can be concatinated using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "k -\u003e a -\u003e Object",
        "fct-source": "src/Data-Json-Builder-Implementation.html#row",
        "fct-type": "function",
        "title": "row"
      },
      "index": {
        "description": "The row function constructs json object consisting of exactly one field These objects can be concatinated using mappend",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "row",
        "normalized": "a-\u003eb-\u003eObject",
        "package": "json-builder",
        "partial": "",
        "signature": "k-\u003ea-\u003eObject"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toArray",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e Array",
        "fct-source": "src/Data-Json-Builder-Implementation.html#toArray",
        "fct-type": "method",
        "title": "toArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "toArray",
        "normalized": "a-\u003eArray",
        "package": "json-builder",
        "partial": "Array",
        "signature": "a-\u003eArray"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toBuilder",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-Json-Builder-Implementation.html#toBuilder",
        "fct-type": "function",
        "title": "toBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "toBuilder",
        "normalized": "a-\u003eBuilder",
        "package": "json-builder",
        "partial": "Builder",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toJson",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e Json",
        "fct-source": "src/Data-Json-Builder-Implementation.html#toJson",
        "fct-type": "method",
        "title": "toJson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "toJson",
        "normalized": "a-\u003eJson",
        "package": "json-builder",
        "partial": "Json",
        "signature": "a-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toJsonBS",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Json-Builder-Implementation.html#toJsonBS",
        "fct-type": "function",
        "title": "toJsonBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "toJsonBS",
        "normalized": "a-\u003eByteString",
        "package": "json-builder",
        "partial": "Json BS",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toJsonLBS",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Json-Builder-Implementation.html#toJsonLBS",
        "fct-type": "function",
        "title": "toJsonLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "toJsonLBS",
        "normalized": "a-\u003eByteString",
        "package": "json-builder",
        "partial": "Json LBS",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toObject",
      "description": {
        "fct-module": "Data.Json.Builder",
        "fct-package": "json-builder",
        "fct-signature": "a -\u003e Object",
        "fct-source": "src/Data-Json-Builder-Implementation.html#toObject",
        "fct-type": "method",
        "title": "toObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Json Builder",
        "module": "Data.Json.Builder",
        "name": "toObject",
        "normalized": "a-\u003eObject",
        "package": "json-builder",
        "partial": "Object",
        "signature": "a-\u003eObject"
      }
    }
  }
]