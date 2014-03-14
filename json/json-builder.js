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
        "word": "json-builder"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal bits.   By using the constructors provided in this module,\n you can break the abstraction that json-builder provides and emit invalid\n JSON syntax.   Also, this module is not as stable as the public interface\n and can change at any time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Json.Builder.Internal",
          "name": "Internal",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal bits By using the constructors provided in this module you can break the abstraction that json-builder provides and emit invalid JSON syntax Also this module is not as stable as the public interface and can change at any time",
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Internal",
          "package": "json-builder",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e type represents syntax for a json array.  It has been given\n a singleton constructor \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e,  so that\n \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents the empty array and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two arrays.\n Arbitrary arrays can be constructed using these operators.\n\u003c/p\u003e",
          "module": "Data.Json.Builder.Internal",
          "name": "Array",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Array",
          "type": "newtype"
        },
        "index": {
          "description": "The Array type represents syntax for json array It has been given singleton constructor element and an instance of Monoid so that mempty represents the empty array and mappend concatinates two arrays Arbitrary arrays can be constructed using these operators",
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Array",
          "package": "json-builder",
          "partial": "Array",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCommaMonoid\u003c/a\u003e\u003c/code\u003e inserts commas between builders.  In order to\n satisify the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e identity laws,  \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e must be distinguished\n from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eComma\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  To demonstrate the difference:\n\u003c/p\u003e\u003cpre\u003e\n mconcat [\"foo\", \"\"    , \"bar\"]  ==  \"foo,,bar\"\n mconcat [\"foo\", Empty , \"bar\"]  ==  \"foo,bar\"\n\u003c/pre\u003e\u003cp\u003eThe strings in this example denote \u003ccode\u003eCommaMonoids\u003c/code\u003e via\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e = Comma . \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Thus \u003ccode\u003e\"\"\u003c/code\u003e is equivalent\n to \u003ccode\u003eComma mempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder.Internal",
          "name": "CommaMonoid",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#CommaMonoid",
          "type": "data"
        },
        "index": {
          "description": "CommaMonoid inserts commas between builders In order to satisify the Monoid identity laws Empty must be distinguished from Comma mempty To demonstrate the difference mconcat foo bar foo bar mconcat foo Empty bar foo bar The strings in this example denote CommaMonoids via fromString Comma fromString Thus is equivalent to Comma mempty",
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "CommaMonoid",
          "package": "json-builder",
          "partial": "Comma Monoid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:CommaMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEscaped\u003c/a\u003e\u003c/code\u003e type represents json string syntax.  The purpose of this\n type is so that json strings can be efficiently constructed from multiple\n Haskell strings without superfluous conversions or concatinations.\n\u003c/p\u003e\u003cp\u003eInternally, it is just a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e value which must produce a UTF-8 encoded\n bytestring with backslashes,  quotes,  and control characters appropriately\n escaped.   It also must not render the opening or closing quote,  which\n are instead rendered by \u003ccode\u003e\u003ca\u003etoJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder.Internal",
          "name": "Escaped",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Escaped",
          "type": "newtype"
        },
        "index": {
          "description": "The Escaped type represents json string syntax The purpose of this type is so that json strings can be efficiently constructed from multiple Haskell strings without superfluous conversions or concatinations Internally it is just Builder value which must produce UTF-8 encoded bytestring with backslashes quotes and control characters appropriately escaped It also must not render the opening or closing quote which are instead rendered by toJson",
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Escaped",
          "package": "json-builder",
          "partial": "Escaped",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Escaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e type represents valid json syntax.  It cannot be directly\n analyzed, however it can be turned into a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoBuilder\u003c/a\u003e\u003c/code\u003e,\n a (lazy) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoJsonBS\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoJsonLBS\u003c/a\u003e\u003c/code\u003e,  or used as a\n component of a json \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or json \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder.Internal",
          "name": "Json",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Json",
          "type": "newtype"
        },
        "index": {
          "description": "The Json type represents valid json syntax It cannot be directly analyzed however it can be turned into Builder via toBuilder lazy ByteString via toJsonBS or toJsonLBS or used as component of json Array or json Object using element or row",
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Json",
          "package": "json-builder",
          "partial": "Json",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type represents syntax for a json object.  It has a singleton\n constructor \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e, and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, so that \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents\n the empty object and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two objects.  Arbitrary objects\n can be constructed using these operators.\n\u003c/p\u003e\u003cp\u003eNote that duplicate field names will appear in the output, so it is up\n to the user of this interface to avoid duplicate field names.\n\u003c/p\u003e",
          "module": "Data.Json.Builder.Internal",
          "name": "Object",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Object",
          "type": "newtype"
        },
        "index": {
          "description": "The Object type represents syntax for json object It has singleton constructor row and an instance of Monoid so that mempty represents the empty object and mappend concatinates two objects Arbitrary objects can be constructed using these operators Note that duplicate field names will appear in the output so it is up to the user of this interface to avoid duplicate field names",
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Object",
          "package": "json-builder",
          "partial": "Object",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder.Internal",
          "name": "Array",
          "package": "json-builder",
          "signature": "Array CommaMonoid",
          "source": "src/Data-Json-Builder-Implementation.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Array",
          "package": "json-builder",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder.Internal",
          "name": "Comma",
          "package": "json-builder",
          "signature": "Comma !Builder",
          "source": "src/Data-Json-Builder-Implementation.html#CommaMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Comma",
          "package": "json-builder",
          "partial": "Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder.Internal",
          "name": "Empty",
          "package": "json-builder",
          "signature": "Empty",
          "source": "src/Data-Json-Builder-Implementation.html#CommaMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Empty",
          "package": "json-builder",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder.Internal",
          "name": "Escaped",
          "package": "json-builder",
          "signature": "Escaped Builder",
          "source": "src/Data-Json-Builder-Implementation.html#Escaped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Escaped",
          "package": "json-builder",
          "partial": "Escaped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Escaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder.Internal",
          "name": "Json",
          "package": "json-builder",
          "signature": "Json Builder",
          "source": "src/Data-Json-Builder-Implementation.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Json",
          "package": "json-builder",
          "partial": "Json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder.Internal",
          "name": "Object",
          "package": "json-builder",
          "signature": "Object CommaMonoid",
          "source": "src/Data-Json-Builder-Implementation.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder Internal",
          "module": "Data.Json.Builder.Internal",
          "name": "Object",
          "package": "json-builder",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder-Internal.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structure agnostic JSON serialization\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Json.Builder",
          "name": "Builder",
          "package": "json-builder",
          "source": "src/Data-Json-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "Data structure agnostic JSON serialization",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "Builder",
          "package": "json-builder",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e type represents syntax for a json array.  It has been given\n a singleton constructor \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e,  so that\n \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents the empty array and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two arrays.\n Arbitrary arrays can be constructed using these operators.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "Array",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Array",
          "type": "data"
        },
        "index": {
          "description": "The Array type represents syntax for json array It has been given singleton constructor element and an instance of Monoid so that mempty represents the empty array and mappend concatinates two arrays Arbitrary arrays can be constructed using these operators",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "Array",
          "package": "json-builder",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEscaped\u003c/a\u003e\u003c/code\u003e type represents json string syntax.  The purpose of this\n type is so that json strings can be efficiently constructed from multiple\n Haskell strings without superfluous conversions or concatinations.\n\u003c/p\u003e\u003cp\u003eInternally, it is just a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e value which must produce a UTF-8 encoded\n bytestring with backslashes,  quotes,  and control characters appropriately\n escaped.   It also must not render the opening or closing quote,  which\n are instead rendered by \u003ccode\u003e\u003ca\u003etoJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "Escaped",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Escaped",
          "type": "data"
        },
        "index": {
          "description": "The Escaped type represents json string syntax The purpose of this type is so that json strings can be efficiently constructed from multiple Haskell strings without superfluous conversions or concatinations Internally it is just Builder value which must produce UTF-8 encoded bytestring with backslashes quotes and control characters appropriately escaped It also must not render the opening or closing quote which are instead rendered by toJson",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "Escaped",
          "package": "json-builder",
          "partial": "Escaped",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Escaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "JsArray",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#JsArray",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "JsArray",
          "package": "json-builder",
          "partial": "Js Array",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:JsArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "JsObject",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#JsObject",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "JsObject",
          "package": "json-builder",
          "partial": "Js Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:JsObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eJsString\u003c/a\u003e\u003c/code\u003e typeclass represents types that can be render into json\n string syntax.  They are special because only strings can appear as field\n names of json objects.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "JsString",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#JsString",
          "type": "class"
        },
        "index": {
          "description": "The JsString typeclass represents types that can be render into json string syntax They are special because only strings can appear as field names of json objects",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "JsString",
          "package": "json-builder",
          "partial": "Js String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:JsString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e type represents valid json syntax.  It cannot be directly\n analyzed, however it can be turned into a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoBuilder\u003c/a\u003e\u003c/code\u003e,\n a (lazy) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003etoJsonBS\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoJsonLBS\u003c/a\u003e\u003c/code\u003e,  or used as a\n component of a json \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e or json \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "Json",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Json",
          "type": "data"
        },
        "index": {
          "description": "The Json type represents valid json syntax It cannot be directly analyzed however it can be turned into Builder via toBuilder lazy ByteString via toJsonBS or toJsonLBS or used as component of json Array or json Object using element or row",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "Json",
          "package": "json-builder",
          "partial": "Json",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "Monoid",
          "package": "json-builder",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "Monoid",
          "package": "json-builder",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type represents syntax for a json object.  It has a singleton\n constructor \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e, and an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, so that \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e represents\n the empty object and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e concatinates two objects.  Arbitrary objects\n can be constructed using these operators.\n\u003c/p\u003e\u003cp\u003eNote that duplicate field names will appear in the output, so it is up\n to the user of this interface to avoid duplicate field names.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "Object",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Object",
          "type": "data"
        },
        "index": {
          "description": "The Object type represents syntax for json object It has singleton constructor row and an instance of Monoid so that mempty represents the empty object and mappend concatinates two objects Arbitrary objects can be constructed using these operators Note that duplicate field names will appear in the output so it is up to the user of this interface to avoid duplicate field names",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "Object",
          "package": "json-builder",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e typeclass represents types that can be rendered\n into valid json syntax.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "Value",
          "package": "json-builder",
          "source": "src/Data-Json-Builder-Implementation.html#Value",
          "type": "class"
        },
        "index": {
          "description": "The Value typeclass represents types that can be rendered into valid json syntax",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "Value",
          "package": "json-builder",
          "partial": "Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e function constructs a json array consisting of exactly\n one value.  These arrays can be concatinated using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "element",
          "package": "json-builder",
          "signature": "a -\u003e Array",
          "source": "src/Data-Json-Builder-Implementation.html#element",
          "type": "function"
        },
        "index": {
          "description": "The element function constructs json array consisting of exactly one value These arrays can be concatinated using mappend",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "element",
          "normalized": "a-\u003eArray",
          "package": "json-builder",
          "signature": "a-\u003eArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "escape",
          "package": "json-builder",
          "signature": "a -\u003e Escaped",
          "source": "src/Data-Json-Builder-Implementation.html#escape",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "escape",
          "normalized": "a-\u003eEscaped",
          "package": "json-builder",
          "signature": "a-\u003eEscaped",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis renders as Json's \u003ccode\u003enull\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "jsNull",
          "package": "json-builder",
          "signature": "Json",
          "source": "src/Data-Json-Builder-Implementation.html#jsNull",
          "type": "function"
        },
        "index": {
          "description": "this renders as Json null value",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "jsNull",
          "package": "json-builder",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:jsNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "mappend",
          "package": "json-builder",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "json-builder",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "mconcat",
          "package": "json-builder",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "json-builder",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "mempty",
          "package": "json-builder",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "mempty",
          "package": "json-builder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erow\u003c/a\u003e\u003c/code\u003e function constructs a json object consisting of exactly\n one field.  These objects can be concatinated using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Json.Builder",
          "name": "row",
          "package": "json-builder",
          "signature": "k -\u003e a -\u003e Object",
          "source": "src/Data-Json-Builder-Implementation.html#row",
          "type": "function"
        },
        "index": {
          "description": "The row function constructs json object consisting of exactly one field These objects can be concatinated using mappend",
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "row",
          "normalized": "a-\u003eb-\u003eObject",
          "package": "json-builder",
          "signature": "k-\u003ea-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "toArray",
          "package": "json-builder",
          "signature": "a -\u003e Array",
          "source": "src/Data-Json-Builder-Implementation.html#toArray",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "toArray",
          "normalized": "a-\u003eArray",
          "package": "json-builder",
          "partial": "Array",
          "signature": "a-\u003eArray",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "toBuilder",
          "package": "json-builder",
          "signature": "a -\u003e Builder",
          "source": "src/Data-Json-Builder-Implementation.html#toBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "toBuilder",
          "normalized": "a-\u003eBuilder",
          "package": "json-builder",
          "partial": "Builder",
          "signature": "a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "toJson",
          "package": "json-builder",
          "signature": "a -\u003e Json",
          "source": "src/Data-Json-Builder-Implementation.html#toJson",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "toJson",
          "normalized": "a-\u003eJson",
          "package": "json-builder",
          "partial": "Json",
          "signature": "a-\u003eJson",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "toJsonBS",
          "package": "json-builder",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Json-Builder-Implementation.html#toJsonBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "toJsonBS",
          "normalized": "a-\u003eByteString",
          "package": "json-builder",
          "partial": "Json BS",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toJsonBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "toJsonLBS",
          "package": "json-builder",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Json-Builder-Implementation.html#toJsonLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "toJsonLBS",
          "normalized": "a-\u003eByteString",
          "package": "json-builder",
          "partial": "Json LBS",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toJsonLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Json.Builder",
          "name": "toObject",
          "package": "json-builder",
          "signature": "a -\u003e Object",
          "source": "src/Data-Json-Builder-Implementation.html#toObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Json Builder",
          "module": "Data.Json.Builder",
          "name": "toObject",
          "normalized": "a-\u003eObject",
          "package": "json-builder",
          "partial": "Object",
          "signature": "a-\u003eObject",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-builder/docs/Data-Json-Builder.html#v:toObject"
      }
    }
  ]
]