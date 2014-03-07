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
        "word": "url-generic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe purpose of this package is to associate web pages each with a\n data type that contains all the necessary parameters for that page,\n by automatically deriving that representation from the data types\n themselves. It is an experimental package to test the idea.\n\u003c/p\u003e\u003cp\u003eThe data type constructors must be nullary or record, and there\n should only be one constructor (later this might be revised). The\n fields of the constructor \u003cem\u003eMUST\u003c/em\u003e each be prefixed with the name of\n the constructor, as per the common idiom when dealing with Haskell\n data types. This also ensures that no data-type-generated URL can\n be in conflict with another, code-wise or representation-wise.\n\u003c/p\u003e\u003cp\u003eFor example, consider a page displays some conference/event. It\n ought to be defined thiswise:\n\u003c/p\u003e\u003cpre\u003e\n data Event = Event { eventId     :: Maybe Integer -- ^ The event id.\n                    , eventScope  :: Bool          -- ^ Show the scope?\n                    , eventLayout :: Layout        -- ^ Layout for the page.\n                    }\n   deriving (Data,Typeable,Show)\n\u003c/pre\u003e\u003cp\u003eAnd an Enum type for layout:\n\u003c/p\u003e\u003cpre\u003e\n data Layout =\n   Wide | Thin | Collapsed\n   deriving (Typeable,Data,Show,Enum)\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003eShow\u003c/code\u003e is not required, but is included for inspection purposes.)\n\u003c/p\u003e\u003cp\u003eNow I can format that as a URL:\n\u003c/p\u003e\u003cpre\u003e\n \u003e formatURLPath $ Event (Just 0) False  Wide\n \"/event/id/0/layout/wide\"\n\u003c/pre\u003e\u003cp\u003eAnd parse that URL back in:\n\u003c/p\u003e\u003cpre\u003e\n \u003e parseURLPath \"/event/id/0/layout/wide\" :: Maybe Event\n Just (Event {eventId = Just 0, eventScope = False, eventLayout = Wide})\n\u003c/pre\u003e\u003cp\u003eNullary data types also work:\n\u003c/p\u003e\u003cpre\u003e\n data Home = Home\n   deriving (Data,Typeable,Show)\n\n\u003e parseURLPath \"/home\" :: Maybe Home\n Just Home\n \u003e formatURLPath Home\n \"/home\"\n \u003e \n\u003c/pre\u003e\u003cp\u003eThe supported types for URL parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Standard \u003ccode\u003eInteger\u003c/code\u003e type.\n\u003c/li\u003e\u003cli\u003e Standard \u003ccode\u003eBool\u003c/code\u003e type.\n\u003c/li\u003e\u003cli\u003e Any type with nullary constructors (such as \u003ccode\u003eLayout\u003c/code\u003e above.). \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eMaybe a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is one of the above. Maybe is useful for\n      optionally omitting parameters from URLs.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny other types cannot (should not (?)) be serialized at the URL-level.\n\u003c/p\u003e\u003cp\u003eThere is the possibility to read/write \u003ccode\u003eString\u003c/code\u003e, but it does make\n much sense to put arbitrary strings in URLs, so it does no special\n encoding/decoding for \u003ccode\u003eString\u003c/code\u003es. There is, however, the use case for\n encoding slugs, such as blog titles, e.g. \u003ccode\u003e/posts/name/my-blog-title\u003c/code\u003e, and that\n is why support is included. You must ensure that these are properly\n normalized yourself.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.URL.Generic",
          "name": "Generic",
          "package": "url-generic",
          "source": "src/Web-URL-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "The purpose of this package is to associate web pages each with data type that contains all the necessary parameters for that page by automatically deriving that representation from the data types themselves It is an experimental package to test the idea The data type constructors must be nullary or record and there should only be one constructor later this might be revised The fields of the constructor MUST each be prefixed with the name of the constructor as per the common idiom when dealing with Haskell data types This also ensures that no data-type-generated URL can be in conflict with another code-wise or representation-wise For example consider page displays some conference event It ought to be defined thiswise data Event Event eventId Maybe Integer The event id eventScope Bool Show the scope eventLayout Layout Layout for the page deriving Data Typeable Show And an Enum type for layout data Layout Wide Thin Collapsed deriving Typeable Data Show Enum Show is not required but is included for inspection purposes Now can format that as URL formatURLPath Event Just False Wide event id layout wide And parse that URL back in parseURLPath event id layout wide Maybe Event Just Event eventId Just eventScope False eventLayout Wide Nullary data types also work data Home Home deriving Data Typeable Show parseURLPath home Maybe Home Just Home formatURLPath Home home The supported types for URL parameters are Standard Integer type Standard Bool type Any type with nullary constructors such as Layout above Maybe where is one of the above Maybe is useful for optionally omitting parameters from URLs Any other types cannot should not be serialized at the URL-level There is the possibility to read write String but it does make much sense to put arbitrary strings in URLs so it does no special encoding decoding for String There is however the use case for encoding slugs such as blog titles e.g posts name my-blog-title and that is why support is included You must ensure that these are properly normalized yourself",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "Generic",
          "package": "url-generic",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple maybe alias.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "Parse",
          "package": "url-generic",
          "source": "src/Web-URL-Generic.html#Parse",
          "type": "type"
        },
        "index": {
          "description": "Simple maybe alias",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "Parse",
          "package": "url-generic",
          "partial": "Parse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#t:Parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert slug-ish \u003ccode\u003ecamel-case\u003c/code\u003e to uppercase \u003ccode\u003eCamelCase\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "dashesToUpper",
          "package": "url-generic",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Web-URL-Generic.html#dashesToUpper",
          "type": "function"
        },
        "index": {
          "description": "Convert slug-ish camel-case to uppercase CamelCase",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "dashesToUpper",
          "normalized": "[Char]-\u003e[Char]",
          "package": "url-generic",
          "partial": "To Upper",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:dashesToUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a record field to a slug-ish name e.g. \u003ccode\u003efooBarMu\u003c/code\u003e =\u003e \u003ccode\u003ebar-mu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "fieldToKey",
          "package": "url-generic",
          "signature": "a-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Normalize record field to slug-ish name e.g fooBarMu bar-mu",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "fieldToKey",
          "normalized": "a-\u003eString-\u003eString",
          "package": "url-generic",
          "partial": "To Key",
          "signature": "a-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:fieldToKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a constructor value to a URL.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "formatCons",
          "package": "url-generic",
          "signature": "a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Format constructor value to URL",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "formatCons",
          "normalized": "a-\u003eString",
          "package": "url-generic",
          "partial": "Cons",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:formatCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a constructor's field value to a URL parameter.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "formatURLParamValue",
          "package": "url-generic",
          "signature": "a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Format constructor field value to URL parameter",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "formatURLParamValue",
          "normalized": "a-\u003eString",
          "package": "url-generic",
          "partial": "URLParam Value",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:formatURLParamValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a record value, e.g. \u003ccode\u003eFoo { fooId = 1 }\u003c/code\u003e, into its\n corresponding URL path, e.g. \u003ccode\u003e/foo/id/1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "formatURLPath",
          "package": "url-generic",
          "signature": "a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Format record value e.g Foo fooId into its corresponding URL path e.g foo id",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "formatURLPath",
          "normalized": "a-\u003eString",
          "package": "url-generic",
          "partial": "URLPath",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:formatURLPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a URL string into a simple value (integer/bool/string).\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "fromURLString",
          "package": "url-generic",
          "signature": "String -\u003e Maybe a",
          "source": "src/Web-URL-Generic.html#fromURLString",
          "type": "function"
        },
        "index": {
          "description": "Parse URL string into simple value integer bool string",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "fromURLString",
          "normalized": "String-\u003eMaybe a",
          "package": "url-generic",
          "partial": "URLString",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:fromURLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a boolean (\u003ccode\u003etrue\u003c/code\u003e/\u003ccode\u003efalse\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "parseBool",
          "package": "url-generic",
          "signature": "String -\u003e Parse Bool",
          "source": "src/Web-URL-Generic.html#parseBool",
          "type": "function"
        },
        "index": {
          "description": "Parse boolean true false",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "parseBool",
          "normalized": "String-\u003eParse Bool",
          "package": "url-generic",
          "partial": "Bool",
          "signature": "String-\u003eParse Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:parseBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a constructor from a string.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "parseCons",
          "package": "url-generic",
          "signature": "String-\u003e [(String, String)]-\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "Parse constructor from string",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "parseCons",
          "normalized": "String-\u003e[(String,String)]-\u003eMaybe a",
          "package": "url-generic",
          "partial": "Cons",
          "signature": "String-\u003e[(String,String)]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:parseCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any constructor. It really only works well for nullary\n constructors like Enum values, but that in itself is very useful.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "parseData",
          "package": "url-generic",
          "signature": "String -\u003e Parse a",
          "source": "src/Web-URL-Generic.html#parseData",
          "type": "function"
        },
        "index": {
          "description": "Parse any constructor It really only works well for nullary constructors like Enum values but that in itself is very useful",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "parseData",
          "normalized": "String-\u003eParse a",
          "package": "url-generic",
          "partial": "Data",
          "signature": "String-\u003eParse a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:parseData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an integer.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "parseInteger",
          "package": "url-generic",
          "signature": "String -\u003e Parse Integer",
          "source": "src/Web-URL-Generic.html#parseInteger",
          "type": "function"
        },
        "index": {
          "description": "Parse an integer",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "parseInteger",
          "normalized": "String-\u003eParse Integer",
          "package": "url-generic",
          "partial": "Integer",
          "signature": "String-\u003eParse Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:parseInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a URL path, e.g. \u003ccode\u003e/foo/id/1\u003c/code\u003e, into its corresponding data\n type, e.g. \u003ccode\u003eFoo { fooId = 1 }\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "parseURLPath",
          "package": "url-generic",
          "signature": "String-\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "Parse URL path e.g foo id into its corresponding data type e.g Foo fooId",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "parseURLPath",
          "normalized": "String-\u003eMaybe a",
          "package": "url-generic",
          "partial": "URLPath",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:parseURLPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow any Haskell (Data instance) constructor e.g. \u003ccode\u003eFooBar\u003c/code\u003e to\n \u003ccode\u003efoo-bar\u003c/code\u003e. This is only reliable for nullary constructors like Enums\n and such. But that by itself is very useful, so it's worth including.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "showData",
          "package": "url-generic",
          "signature": "a -\u003e String",
          "source": "src/Web-URL-Generic.html#showData",
          "type": "function"
        },
        "index": {
          "description": "Show any Haskell Data instance constructor e.g FooBar to foo-bar This is only reliable for nullary constructors like Enums and such But that by itself is very useful so it worth including",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "showData",
          "normalized": "a-\u003eString",
          "package": "url-generic",
          "partial": "Data",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:showData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert uppercase \u003ccode\u003eCamelCase to slug-ish camel-case\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "upperToDashes",
          "package": "url-generic",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Web-URL-Generic.html#upperToDashes",
          "type": "function"
        },
        "index": {
          "description": "Convert uppercase CamelCase to slug-ish camel-case",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "upperToDashes",
          "normalized": "[Char]-\u003e[Char]",
          "package": "url-generic",
          "partial": "To Dashes",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:upperToDashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL string to association list.\n\u003c/p\u003e",
          "module": "Web.URL.Generic",
          "name": "urlToAssoc",
          "package": "url-generic",
          "signature": "String-\u003e [(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "URL string to association list",
          "hierarchy": "Web URL Generic",
          "module": "Web.URL.Generic",
          "name": "urlToAssoc",
          "normalized": "String-\u003e[(String,String)]",
          "package": "url-generic",
          "partial": "To Assoc",
          "signature": "String-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/url-generic/docs/Web-URL-Generic.html#v:urlToAssoc"
      }
    }
  ]
]