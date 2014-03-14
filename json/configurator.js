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
        "word": "configurator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with configuration files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Configurator.Types",
          "name": "Types",
          "package": "configurator",
          "source": "src/Data-Configurator-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for working with configuration files",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Types",
          "package": "configurator",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirections for automatically reloading \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "AutoConfig",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
          "type": "data"
        },
        "index": {
          "description": "Directions for automatically reloading Config data",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "AutoConfig",
          "package": "configurator",
          "partial": "Auto Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:AutoConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to be invoked if a configuration property is changed.\n\u003c/p\u003e\u003cp\u003eIf this action is invoked and throws an exception, the \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e\n function will be called.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "ChangeHandler",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#ChangeHandler",
          "type": "type"
        },
        "index": {
          "description": "An action to be invoked if configuration property is changed If this action is invoked and throws an exception the onError function will be called",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "ChangeHandler",
          "package": "configurator",
          "partial": "Change Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:ChangeHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration data.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "Config",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration data",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Config",
          "package": "configurator",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occurred while processing a configuration file.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "ConfigError",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#ConfigError",
          "type": "data"
        },
        "index": {
          "description": "An error occurred while processing configuration file",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "ConfigError",
          "package": "configurator",
          "partial": "Config Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:ConfigError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents types that can be automatically and safely\n converted \u003cem\u003efrom\u003c/em\u003e a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003cem\u003eto\u003c/em\u003e a destination type.  If conversion\n fails because the types are not compatible, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eFor an example of compatibility, a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e cannot\n be \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003eed to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "Configured",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#Configured",
          "type": "class"
        },
        "index": {
          "description": "This class represents types that can be automatically and safely converted from Value to destination type If conversion fails because the types are not compatible Nothing is returned For an example of compatibility Value of Bool True cannot be convert ed to an Int",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Configured",
          "package": "configurator",
          "partial": "Configured",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Configured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occurred while lookup up the given \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "KeyError",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#KeyError",
          "type": "data"
        },
        "index": {
          "description": "An error occurred while lookup up the given Name",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "KeyError",
          "package": "configurator",
          "partial": "Key Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:KeyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "Name",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#Name",
          "type": "type"
        },
        "index": {
          "description": "The name of Config value",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Name",
          "package": "configurator",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pattern specifying the name of a property that has changed.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e class.  If you use the\n \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension and want to write a\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e-matching pattern as a literal string, do so by suffixing\n it with \"\u003ccode\u003e.*\u003c/code\u003e\", for example as follows:\n\u003c/p\u003e\u003cpre\u003e \"foo.*\"\n\u003c/pre\u003e\u003cp\u003eIf a pattern written as a literal string does not end with\n \"\u003ccode\u003e.*\u003c/code\u003e\", it is assumed to be \u003ccode\u003e\u003ca\u003eexact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "Pattern",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#Pattern",
          "type": "data"
        },
        "index": {
          "description": "pattern specifying the name of property that has changed This type is an instance of the IsString class If you use the OverloadedStrings language extension and want to write prefix matching pattern as literal string do so by suffixing it with for example as follows foo If pattern written as literal string does not end with it is assumed to be exact",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Pattern",
          "package": "configurator",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value in a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "Value",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#Value",
          "type": "data"
        },
        "index": {
          "description": "value in Config",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Value",
          "package": "configurator",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configurator.Types",
          "name": "Worth",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#Worth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Worth",
          "package": "configurator",
          "partial": "Worth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Worth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configurator.Types",
          "name": "AutoConfig",
          "package": "configurator",
          "signature": "AutoConfig",
          "source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "AutoConfig",
          "package": "configurator",
          "partial": "Auto Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:AutoConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Boolean. Represented in a configuration file as \u003ccode\u003eon\u003c/code\u003e\n or \u003ccode\u003eoff\u003c/code\u003e, \u003ccode\u003etrue\u003c/code\u003e or \u003ccode\u003efalse\u003c/code\u003e (case sensitive).\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "Bool",
          "package": "configurator",
          "signature": "Bool Bool",
          "source": "src/Data-Configurator-Types-Internal.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Boolean Represented in configuration file as on or off true or false case sensitive",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Bool",
          "package": "configurator",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configurator.Types",
          "name": "KeyError",
          "package": "configurator",
          "signature": "KeyError Name",
          "source": "src/Data-Configurator-Types-Internal.html#KeyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "KeyError",
          "package": "configurator",
          "partial": "Key Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:KeyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeterogeneous list.  Represented in a configuration\n file as an opening square bracket \"\u003ccode\u003e[\u003c/code\u003e\", followed by a\n comma-separated series of values, ending with a closing\n square bracket \"\u003ccode\u003e]\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "List",
          "package": "configurator",
          "signature": "List [Value]",
          "source": "src/Data-Configurator-Types-Internal.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Heterogeneous list Represented in configuration file as an opening square bracket followed by comma-separated series of values ending with closing square bracket",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "List",
          "normalized": "List[Value]",
          "package": "configurator",
          "partial": "List",
          "signature": "List[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "Number",
          "package": "configurator",
          "signature": "Number Rational",
          "source": "src/Data-Configurator-Types-Internal.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Integer",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Number",
          "package": "configurator",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Configurator.Types\",\"Data.Configurator\"]",
          "name": "Optional",
          "package": "configurator",
          "signature": "Optional",
          "source": "src/Data-Configurator-Types-Internal.html#Worth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Optional\",\"http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:Optional\"]"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Optional",
          "package": "configurator",
          "partial": "Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configurator.Types",
          "name": "ParseError",
          "package": "configurator",
          "signature": "ParseError FilePath String",
          "source": "src/Data-Configurator-Types-Internal.html#ConfigError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "ParseError",
          "package": "configurator",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Configurator.Types\",\"Data.Configurator\"]",
          "name": "Required",
          "package": "configurator",
          "signature": "Required",
          "source": "src/Data-Configurator-Types-Internal.html#Worth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Required\",\"http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:Required\"]"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "Required",
          "package": "configurator",
          "partial": "Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Unicode string.  Represented in a configuration file\n as text surrounded by double quotes.\n\u003c/p\u003e\u003cp\u003eEscape sequences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\\n\u003c/code\u003e - newline\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\r\u003c/code\u003e - carriage return\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\t\u003c/code\u003e - horizontal tab\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\\\\u003c/code\u003e - backslash\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\\"\u003c/code\u003e - quotes\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\u\u003c/code\u003e\u003cem\u003exxxx\u003c/em\u003e - Unicode character, encoded as four\n   hexadecimal digits\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\u\u003c/code\u003e\u003cem\u003exxxx\u003c/em\u003e\u003ccode\u003e\\u\u003c/code\u003e\u003cem\u003exxxx\u003c/em\u003e - Unicode character (as two\n   UTF-16 surrogates)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Configurator.Types",
          "name": "String",
          "package": "configurator",
          "signature": "String Text",
          "source": "src/Data-Configurator-Types-Internal.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Unicode string Represented in configuration file as text surrounded by double quotes Escape sequences newline carriage return horizontal tab backslash quotes xxxx Unicode character encoded as four hexadecimal digits xxxx xxxx Unicode character as two UTF-16 surrogates",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "String",
          "package": "configurator",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configurator.Types",
          "name": "convert",
          "package": "configurator",
          "signature": "Value -\u003e Maybe a",
          "source": "src/Data-Configurator-Types-Internal.html#convert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "convert",
          "normalized": "Value-\u003eMaybe a",
          "package": "configurator",
          "signature": "Value-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval (in seconds) at which to check for updates to config\n files.  The smallest allowed interval is one second.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "interval",
          "package": "configurator",
          "signature": "Int",
          "source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
          "type": "function"
        },
        "index": {
          "description": "Interval in seconds at which to check for updates to config files The smallest allowed interval is one second",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "interval",
          "package": "configurator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction invoked when an attempt to reload a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e or notify\n a \u003ccode\u003e\u003ca\u003eChangeHandler\u003c/a\u003e\u003c/code\u003e causes an exception to be thrown.\n\u003c/p\u003e\u003cp\u003eIf this action rethrows its exception or throws a new\n exception, the modification checking thread will be killed.\n You may want your application to treat that as a fatal error,\n as its configuration may no longer be consistent.\n\u003c/p\u003e",
          "module": "Data.Configurator.Types",
          "name": "onError",
          "package": "configurator",
          "signature": "SomeException -\u003e IO ()",
          "source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
          "type": "function"
        },
        "index": {
          "description": "Action invoked when an attempt to reload Config or notify ChangeHandler causes an exception to be thrown If this action rethrows its exception or throws new exception the modification checking thread will be killed You may want your application to treat that as fatal error as its configuration may no longer be consistent",
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "onError",
          "normalized": "SomeException-\u003eIO()",
          "package": "configurator",
          "partial": "Error",
          "signature": "SomeException-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:onError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Configurator.Types\",\"Data.Configurator\"]",
          "name": "worth",
          "package": "configurator",
          "signature": "a",
          "source": "src/Data-Configurator-Types-Internal.html#Worth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:worth\",\"http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:worth\"]"
        },
        "index": {
          "hierarchy": "Data Configurator Types",
          "module": "Data.Configurator.Types",
          "name": "worth",
          "package": "configurator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:worth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple (yet powerful) library for working with configuration\n files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Configurator",
          "name": "Configurator",
          "package": "configurator",
          "source": "src/Data-Configurator.html",
          "type": "module"
        },
        "index": {
          "description": "simple yet powerful library for working with configuration files",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "Configurator",
          "package": "configurator",
          "partial": "Configurator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configurator",
          "name": "Worth",
          "package": "configurator",
          "source": "src/Data-Configurator-Types-Internal.html#Worth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "Worth",
          "package": "configurator",
          "partial": "Worth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#t:Worth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd additional files to named groups in a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e, causing it to be\n reloaded to add their contents.  If the prefixes are non-empty, they should\n end in dots.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "addGroupsToConfig",
          "package": "configurator",
          "signature": "[(Name, Worth FilePath)] -\u003e Config -\u003e IO ()",
          "source": "src/Data-Configurator.html#addGroupsToConfig",
          "type": "function"
        },
        "index": {
          "description": "Add additional files to named groups in Config causing it to be reloaded to add their contents If the prefixes are non-empty they should end in dots",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "addGroupsToConfig",
          "normalized": "[(Name,Worth FilePath)]-\u003eConfig-\u003eIO()",
          "package": "configurator",
          "partial": "Groups To Config",
          "signature": "[(Name,Worth FilePath)]-\u003eConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:addGroupsToConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd additional files to a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e, causing it to be reloaded to add\n their contents.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "addToConfig",
          "package": "configurator",
          "signature": "[Worth FilePath] -\u003e Config -\u003e IO ()",
          "source": "src/Data-Configurator.html#addToConfig",
          "type": "function"
        },
        "index": {
          "description": "Add additional files to Config causing it to be reloaded to add their contents",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "addToConfig",
          "normalized": "[Worth FilePath]-\u003eConfig-\u003eIO()",
          "package": "configurator",
          "partial": "To Config",
          "signature": "[Worth FilePath]-\u003eConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:addToConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults for automatic \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e reloading when using\n \u003ccode\u003e\u003ca\u003eautoReload\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003einterval\u003c/a\u003e\u003c/code\u003e is one second, while the \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e\n action ignores its argument and does nothing.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "autoConfig",
          "package": "configurator",
          "signature": "AutoConfig",
          "source": "src/Data-Configurator.html#autoConfig",
          "type": "function"
        },
        "index": {
          "description": "Defaults for automatic Config reloading when using autoReload The interval is one second while the onError action ignores its argument and does nothing",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "autoConfig",
          "package": "configurator",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:autoConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e from the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es, and start a reload\n thread.\n\u003c/p\u003e\u003cp\u003eAt intervals, a thread checks for modifications to both the\n original files and any files they refer to in \u003ccode\u003eimport\u003c/code\u003e directives,\n and reloads the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e if any files have been modified.\n\u003c/p\u003e\u003cp\u003eIf the initial attempt to load the configuration files fails, an\n exception is thrown.  If the initial load succeeds, but a\n subsequent attempt fails, the \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e handler is invoked.\n\u003c/p\u003e\u003cp\u003eFile names have any environment variables expanded prior to the\n first time they are opened, so you can specify a file name such as\n \u003ccode\u003e\"$(HOME)/myapp.cfg\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "autoReload",
          "package": "configurator",
          "signature": "AutoConfig-\u003e [Worth FilePath]-\u003e IO (Config, ThreadId)",
          "type": "function"
        },
        "index": {
          "description": "Load Config from the given FilePath and start reload thread At intervals thread checks for modifications to both the original files and any files they refer to in import directives and reloads the Config if any files have been modified If the initial attempt to load the configuration files fails an exception is thrown If the initial load succeeds but subsequent attempt fails the onError handler is invoked File names have any environment variables expanded prior to the first time they are opened so you can specify file name such as HOME myapp.cfg",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "autoReload",
          "normalized": "AutoConfig-\u003e[Worth FilePath]-\u003eIO(Config,ThreadId)",
          "package": "configurator",
          "partial": "Reload",
          "signature": "AutoConfig-\u003e[Worth FilePath]-\u003eIO(Config,ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:autoReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configurator",
          "name": "autoReloadGroups",
          "package": "configurator",
          "signature": "AutoConfig -\u003e [(Name, Worth FilePath)] -\u003e IO (Config, ThreadId)",
          "source": "src/Data-Configurator.html#autoReloadGroups",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "autoReloadGroups",
          "normalized": "AutoConfig-\u003e[(Name,Worth FilePath)]-\u003eIO(Config,ThreadId)",
          "package": "configurator",
          "partial": "Reload Groups",
          "signature": "AutoConfig-\u003e[(Name,Worth FilePath)]-\u003eIO(Config,ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:autoReloadGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a simple dump of a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "display",
          "package": "configurator",
          "signature": "Config -\u003e IO ()",
          "source": "src/Data-Configurator.html#display",
          "type": "function"
        },
        "index": {
          "description": "Perform simple dump of Config to stdout",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "display",
          "normalized": "Config-\u003eIO()",
          "package": "configurator",
          "signature": "Config-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA completely empty configuration.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "empty",
          "package": "configurator",
          "signature": "Config",
          "source": "src/Data-Configurator.html#empty",
          "type": "function"
        },
        "index": {
          "description": "completely empty configuration",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "empty",
          "package": "configurator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pattern that must match exactly.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "exact",
          "package": "configurator",
          "signature": "Text -\u003e Pattern",
          "source": "src/Data-Configurator-Types-Internal.html#exact",
          "type": "function"
        },
        "index": {
          "description": "pattern that must match exactly",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "exact",
          "normalized": "Text-\u003ePattern",
          "package": "configurator",
          "signature": "Text-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e that maps names to values.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "getMap",
          "package": "configurator",
          "signature": "Config -\u003e IO (HashMap Name Value)",
          "source": "src/Data-Configurator.html#getMap",
          "type": "function"
        },
        "index": {
          "description": "Fetch the HashMap that maps names to values",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "getMap",
          "normalized": "Config-\u003eIO(HashMap Name Value)",
          "package": "configurator",
          "partial": "Map",
          "signature": "Config-\u003eIO(HashMap Name Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:getMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e from the contents of the named files. Throws an\n exception on error, such as if files do not exist or contain errors.\n\u003c/p\u003e\u003cp\u003eFile names have any environment variables expanded prior to the\n first time they are opened, so you can specify a file name such as\n \u003ccode\u003e\"$(HOME)/myapp.cfg\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "load",
          "package": "configurator",
          "signature": "[Worth FilePath] -\u003e IO Config",
          "source": "src/Data-Configurator.html#load",
          "type": "function"
        },
        "index": {
          "description": "Create Config from the contents of the named files Throws an exception on error such as if files do not exist or contain errors File names have any environment variables expanded prior to the first time they are opened so you can specify file name such as HOME myapp.cfg",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "load",
          "normalized": "[Worth FilePath]-\u003eIO Config",
          "package": "configurator",
          "signature": "[Worth FilePath]-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e from the contents of the named files, placing them\n into named prefixes.  If a prefix is non-empty, it should end in a\n dot.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "loadGroups",
          "package": "configurator",
          "signature": "[(Name, Worth FilePath)] -\u003e IO Config",
          "source": "src/Data-Configurator.html#loadGroups",
          "type": "function"
        },
        "index": {
          "description": "Create Config from the contents of the named files placing them into named prefixes If prefix is non-empty it should end in dot",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "loadGroups",
          "normalized": "[(Name,Worth FilePath)]-\u003eIO Config",
          "package": "configurator",
          "partial": "Groups",
          "signature": "[(Name,Worth FilePath)]-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:loadGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a name in the given \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  If a binding exists, and\n the value can be \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003eed to the desired type, return the\n converted value, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "lookup",
          "package": "configurator",
          "signature": "Config -\u003e Name -\u003e IO (Maybe a)",
          "source": "src/Data-Configurator.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Look up name in the given Config If binding exists and the value can be convert ed to the desired type return the converted value otherwise Nothing",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "lookup",
          "normalized": "Config-\u003eName-\u003eIO(Maybe a)",
          "package": "configurator",
          "signature": "Config-\u003eName-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a name in the given \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  If a binding exists, and\n the value can be converted to the desired type, return it,\n otherwise return the default value.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "lookupDefault",
          "package": "configurator",
          "signature": "a-\u003e Config-\u003e Name-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Look up name in the given Config If binding exists and the value can be converted to the desired type return it otherwise return the default value",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "lookupDefault",
          "normalized": "a-\u003eConfig-\u003eName-\u003eIO a",
          "package": "configurator",
          "partial": "Default",
          "signature": "a-\u003eConfig-\u003eName-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:lookupDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pattern that matches on a prefix of a property name.  Given\n \u003ccode\u003e\"foo\"\u003c/code\u003e, this will match \u003ccode\u003e\"foo.bar\"\u003c/code\u003e, but not \u003ccode\u003e\"foo\"\u003c/code\u003e or\n \u003ccode\u003e\"foobar\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "prefix",
          "package": "configurator",
          "signature": "Text -\u003e Pattern",
          "source": "src/Data-Configurator-Types-Internal.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "pattern that matches on prefix of property name Given foo this will match foo.bar but not foo or foobar",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "prefix",
          "normalized": "Text-\u003ePattern",
          "package": "configurator",
          "signature": "Text-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForcibly reload a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e. Throws an exception on error, such as\n if files no longer exist or contain errors.  If the provided \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e is\n a \u003ccode\u003e\u003ca\u003esubconfig\u003c/a\u003e\u003c/code\u003e, this will reload the entire top-level configuration, not just\n the local section.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "reload",
          "package": "configurator",
          "signature": "Config -\u003e IO ()",
          "source": "src/Data-Configurator.html#reload",
          "type": "function"
        },
        "index": {
          "description": "Forcibly reload Config Throws an exception on error such as if files no longer exist or contain errors If the provided Config is subconfig this will reload the entire top-level configuration not just the local section",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "reload",
          "normalized": "Config-\u003eIO()",
          "package": "configurator",
          "signature": "Config-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:reload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a name in the given \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  If a binding exists, and\n the value can be \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003eed to the desired type, return the\n converted value, otherwise throw a \u003ccode\u003e\u003ca\u003eKeyError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "require",
          "package": "configurator",
          "signature": "Config -\u003e Name -\u003e IO a",
          "source": "src/Data-Configurator.html#require",
          "type": "function"
        },
        "index": {
          "description": "Look up name in the given Config If binding exists and the value can be convert ed to the desired type return the converted value otherwise throw KeyError",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "require",
          "normalized": "Config-\u003eName-\u003eIO a",
          "package": "configurator",
          "signature": "Config-\u003eName-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e corresponding to just a single group of the original\n \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  The subconfig can be used just like the original \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e, but\n see the documentation for \u003ccode\u003e\u003ca\u003ereload\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "subconfig",
          "package": "configurator",
          "signature": "Name -\u003e Config -\u003e Config",
          "source": "src/Data-Configurator.html#subconfig",
          "type": "function"
        },
        "index": {
          "description": "Gives Config corresponding to just single group of the original Config The subconfig can be used just like the original Config but see the documentation for reload",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "subconfig",
          "normalized": "Name-\u003eConfig-\u003eConfig",
          "package": "configurator",
          "signature": "Name-\u003eConfig-\u003eConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:subconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe for notifications.  The given action will be invoked\n when any change occurs to a configuration property matching the\n supplied pattern.\n\u003c/p\u003e",
          "module": "Data.Configurator",
          "name": "subscribe",
          "package": "configurator",
          "signature": "Config -\u003e Pattern -\u003e ChangeHandler -\u003e IO ()",
          "source": "src/Data-Configurator.html#subscribe",
          "type": "function"
        },
        "index": {
          "description": "Subscribe for notifications The given action will be invoked when any change occurs to configuration property matching the supplied pattern",
          "hierarchy": "Data Configurator",
          "module": "Data.Configurator",
          "name": "subscribe",
          "normalized": "Config-\u003ePattern-\u003eChangeHandler-\u003eIO()",
          "package": "configurator",
          "signature": "Config-\u003ePattern-\u003eChangeHandler-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:subscribe"
      }
    }
  ]
]