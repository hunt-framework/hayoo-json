[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with configuration files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "module",
        "fct-source": "src/Data-Configurator-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types for working with configuration files",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Types",
        "normalized": "",
        "package": "configurator",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:AutoConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDirections for automatically reloading \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
        "fct-type": "data",
        "title": "AutoConfig"
      },
      "index": {
        "description": "Directions for automatically reloading Config data",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "AutoConfig",
        "normalized": "",
        "package": "configurator",
        "partial": "Auto Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:ChangeHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAn action to be invoked if a configuration property is changed.\n\u003c/p\u003e\u003cp\u003eIf this action is invoked and throws an exception, the \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e\n function will be called.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "type",
        "fct-source": "src/Data-Configurator-Types-Internal.html#ChangeHandler",
        "fct-type": "type",
        "title": "ChangeHandler"
      },
      "index": {
        "description": "An action to be invoked if configuration property is changed If this action is invoked and throws an exception the onError function will be called",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "ChangeHandler",
        "normalized": "",
        "package": "configurator",
        "partial": "Change Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration data.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration data",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Config",
        "normalized": "",
        "package": "configurator",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:ConfigError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error occurred while processing a configuration file.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#ConfigError",
        "fct-type": "data",
        "title": "ConfigError"
      },
      "index": {
        "description": "An error occurred while processing configuration file",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "ConfigError",
        "normalized": "",
        "package": "configurator",
        "partial": "Config Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Configured",
      "description": {
        "fct-descr": "\u003cp\u003eThis class represents types that can be automatically and safely\n converted \u003cem\u003efrom\u003c/em\u003e a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003cem\u003eto\u003c/em\u003e a destination type.  If conversion\n fails because the types are not compatible, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eFor an example of compatibility, a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e cannot\n be \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003eed to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "class",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Configured",
        "fct-type": "class",
        "title": "Configured"
      },
      "index": {
        "description": "This class represents types that can be automatically and safely converted from Value to destination type If conversion fails because the types are not compatible Nothing is returned For an example of compatibility Value of Bool True cannot be convert ed to an Int",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Configured",
        "normalized": "",
        "package": "configurator",
        "partial": "Configured",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:KeyError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error occurred while lookup up the given \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#KeyError",
        "fct-type": "data",
        "title": "KeyError"
      },
      "index": {
        "description": "An error occurred while lookup up the given Name",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "KeyError",
        "normalized": "",
        "package": "configurator",
        "partial": "Key Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "type",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "The name of Config value",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Name",
        "normalized": "",
        "package": "configurator",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Pattern",
      "description": {
        "fct-descr": "\u003cp\u003eA pattern specifying the name of a property that has changed.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e class.  If you use the\n \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension and want to write a\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e-matching pattern as a literal string, do so by suffixing\n it with \"\u003ccode\u003e.*\u003c/code\u003e\", for example as follows:\n\u003c/p\u003e\u003cpre\u003e \"foo.*\"\n\u003c/pre\u003e\u003cp\u003eIf a pattern written as a literal string does not end with\n \"\u003ccode\u003e.*\u003c/code\u003e\", it is assumed to be \u003ccode\u003e\u003ca\u003eexact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Pattern",
        "fct-type": "data",
        "title": "Pattern"
      },
      "index": {
        "description": "pattern specifying the name of property that has changed This type is an instance of the IsString class If you use the OverloadedStrings language extension and want to write prefix matching pattern as literal string do so by suffixing it with for example as follows foo If pattern written as literal string does not end with it is assumed to be exact",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Pattern",
        "normalized": "",
        "package": "configurator",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA value in a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "value in Config",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Value",
        "normalized": "",
        "package": "configurator",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#t:Worth",
      "description": {
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "data",
        "title": "Worth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Worth",
        "normalized": "",
        "package": "configurator",
        "partial": "Worth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:AutoConfig",
      "description": {
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "AutoConfig",
        "fct-source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
        "fct-type": "function",
        "title": "AutoConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "AutoConfig",
        "normalized": "",
        "package": "configurator",
        "partial": "Auto Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Bool",
      "description": {
        "fct-descr": "\u003cp\u003eA Boolean. Represented in a configuration file as \u003ccode\u003eon\u003c/code\u003e\n or \u003ccode\u003eoff\u003c/code\u003e, \u003ccode\u003etrue\u003c/code\u003e or \u003ccode\u003efalse\u003c/code\u003e (case sensitive).\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "Bool Bool",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Bool"
      },
      "index": {
        "description": "Boolean Represented in configuration file as on or off true or false case sensitive",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Bool",
        "normalized": "",
        "package": "configurator",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:KeyError",
      "description": {
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "KeyError Name",
        "fct-source": "src/Data-Configurator-Types-Internal.html#KeyError",
        "fct-type": "function",
        "title": "KeyError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "KeyError",
        "normalized": "",
        "package": "configurator",
        "partial": "Key Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:List",
      "description": {
        "fct-descr": "\u003cp\u003eHeterogeneous list.  Represented in a configuration\n file as an opening square bracket \"\u003ccode\u003e[\u003c/code\u003e\", followed by a\n comma-separated series of values, ending with a closing\n square bracket \"\u003ccode\u003e]\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "List [Value]",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "Heterogeneous list Represented in configuration file as an opening square bracket followed by comma-separated series of values ending with closing square bracket",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "List",
        "normalized": "List[Value]",
        "package": "configurator",
        "partial": "List",
        "signature": "List[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Number",
      "description": {
        "fct-descr": "\u003cp\u003eInteger.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "Number Rational",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "Integer",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Number",
        "normalized": "",
        "package": "configurator",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Optional",
      "description": {
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "Optional",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "function",
        "title": "Optional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Optional",
        "normalized": "",
        "package": "configurator",
        "partial": "Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:ParseError",
      "description": {
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "ParseError FilePath String",
        "fct-source": "src/Data-Configurator-Types-Internal.html#ConfigError",
        "fct-type": "function",
        "title": "ParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "ParseError",
        "normalized": "",
        "package": "configurator",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:Required",
      "description": {
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "Required",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "function",
        "title": "Required"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "Required",
        "normalized": "",
        "package": "configurator",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:String",
      "description": {
        "fct-descr": "\u003cp\u003eA Unicode string.  Represented in a configuration file\n as text surrounded by double quotes.\n\u003c/p\u003e\u003cp\u003eEscape sequences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\\n\u003c/code\u003e - newline\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\r\u003c/code\u003e - carriage return\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\t\u003c/code\u003e - horizontal tab\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\\\\u003c/code\u003e - backslash\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\\"\u003c/code\u003e - quotes\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\u\u003c/code\u003e\u003cem\u003exxxx\u003c/em\u003e - Unicode character, encoded as four\n   hexadecimal digits\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\\u\u003c/code\u003e\u003cem\u003exxxx\u003c/em\u003e\u003ccode\u003e\\u\u003c/code\u003e\u003cem\u003exxxx\u003c/em\u003e - Unicode character (as two\n   UTF-16 surrogates)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "String Text",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "Unicode string Represented in configuration file as text surrounded by double quotes Escape sequences newline carriage return horizontal tab backslash quotes xxxx Unicode character encoded as four hexadecimal digits xxxx xxxx Unicode character as two UTF-16 surrogates",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "String",
        "normalized": "",
        "package": "configurator",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:convert",
      "description": {
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "Value -\u003e Maybe a",
        "fct-source": "src/Data-Configurator-Types-Internal.html#convert",
        "fct-type": "method",
        "title": "convert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "convert",
        "normalized": "Value-\u003eMaybe a",
        "package": "configurator",
        "partial": "",
        "signature": "Value-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:interval",
      "description": {
        "fct-descr": "\u003cp\u003eInterval (in seconds) at which to check for updates to config\n files.  The smallest allowed interval is one second.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "Int",
        "fct-source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "Interval in seconds at which to check for updates to config files The smallest allowed interval is one second",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "interval",
        "normalized": "",
        "package": "configurator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:onError",
      "description": {
        "fct-descr": "\u003cp\u003eAction invoked when an attempt to reload a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e or notify\n a \u003ccode\u003e\u003ca\u003eChangeHandler\u003c/a\u003e\u003c/code\u003e causes an exception to be thrown.\n\u003c/p\u003e\u003cp\u003eIf this action rethrows its exception or throws a new\n exception, the modification checking thread will be killed.\n You may want your application to treat that as a fatal error,\n as its configuration may no longer be consistent.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "SomeException -\u003e IO ()",
        "fct-source": "src/Data-Configurator-Types-Internal.html#AutoConfig",
        "fct-type": "function",
        "title": "onError"
      },
      "index": {
        "description": "Action invoked when an attempt to reload Config or notify ChangeHandler causes an exception to be thrown If this action rethrows its exception or throws new exception the modification checking thread will be killed You may want your application to treat that as fatal error as its configuration may no longer be consistent",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "onError",
        "normalized": "SomeException-\u003eIO()",
        "package": "configurator",
        "partial": "Error",
        "signature": "SomeException-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator-Types.html#v:worth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Configurator.Types",
        "fct-package": "configurator",
        "fct-signature": "a",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "function",
        "title": "worth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator Types",
        "module": "Data.Configurator.Types",
        "name": "worth",
        "normalized": "",
        "package": "configurator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple (yet powerful) library for working with configuration\n files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "module",
        "fct-source": "src/Data-Configurator.html",
        "fct-type": "module",
        "title": "Configurator"
      },
      "index": {
        "description": "simple yet powerful library for working with configuration files",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "Configurator",
        "normalized": "",
        "package": "configurator",
        "partial": "Configurator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#t:Worth",
      "description": {
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "data",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "data",
        "title": "Worth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "Worth",
        "normalized": "",
        "package": "configurator",
        "partial": "Worth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:Optional",
      "description": {
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Optional",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "function",
        "title": "Optional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "Optional",
        "normalized": "",
        "package": "configurator",
        "partial": "Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:Required",
      "description": {
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Required",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "function",
        "title": "Required"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "Required",
        "normalized": "",
        "package": "configurator",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:addGroupsToConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAdd additional files to named groups in a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e, causing it to be\n reloaded to add their contents.  If the prefixes are non-empty, they should\n end in dots.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "[(Name, Worth FilePath)] -\u003e Config -\u003e IO ()",
        "fct-source": "src/Data-Configurator.html#addGroupsToConfig",
        "fct-type": "function",
        "title": "addGroupsToConfig"
      },
      "index": {
        "description": "Add additional files to named groups in Config causing it to be reloaded to add their contents If the prefixes are non-empty they should end in dots",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "addGroupsToConfig",
        "normalized": "[(Name,Worth FilePath)]-\u003eConfig-\u003eIO()",
        "package": "configurator",
        "partial": "Groups To Config",
        "signature": "[(Name,Worth FilePath)]-\u003eConfig-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:addToConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAdd additional files to a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e, causing it to be reloaded to add\n their contents.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "[Worth FilePath] -\u003e Config -\u003e IO ()",
        "fct-source": "src/Data-Configurator.html#addToConfig",
        "fct-type": "function",
        "title": "addToConfig"
      },
      "index": {
        "description": "Add additional files to Config causing it to be reloaded to add their contents",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "addToConfig",
        "normalized": "[Worth FilePath]-\u003eConfig-\u003eIO()",
        "package": "configurator",
        "partial": "To Config",
        "signature": "[Worth FilePath]-\u003eConfig-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:autoConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDefaults for automatic \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e reloading when using\n \u003ccode\u003e\u003ca\u003eautoReload\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003einterval\u003c/a\u003e\u003c/code\u003e is one second, while the \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e\n action ignores its argument and does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "AutoConfig",
        "fct-source": "src/Data-Configurator.html#autoConfig",
        "fct-type": "function",
        "title": "autoConfig"
      },
      "index": {
        "description": "Defaults for automatic Config reloading when using autoReload The interval is one second while the onError action ignores its argument and does nothing",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "autoConfig",
        "normalized": "",
        "package": "configurator",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:autoReload",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e from the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es, and start a reload\n thread.\n\u003c/p\u003e\u003cp\u003eAt intervals, a thread checks for modifications to both the\n original files and any files they refer to in \u003ccode\u003eimport\u003c/code\u003e directives,\n and reloads the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e if any files have been modified.\n\u003c/p\u003e\u003cp\u003eIf the initial attempt to load the configuration files fails, an\n exception is thrown.  If the initial load succeeds, but a\n subsequent attempt fails, the \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e handler is invoked.\n\u003c/p\u003e\u003cp\u003eFile names have any environment variables expanded prior to the\n first time they are opened, so you can specify a file name such as\n \u003ccode\u003e\"$(HOME)/myapp.cfg\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "AutoConfig-\u003e [Worth FilePath]-\u003e IO (Config, ThreadId)",
        "fct-type": "function",
        "title": "autoReload"
      },
      "index": {
        "description": "Load Config from the given FilePath and start reload thread At intervals thread checks for modifications to both the original files and any files they refer to in import directives and reloads the Config if any files have been modified If the initial attempt to load the configuration files fails an exception is thrown If the initial load succeeds but subsequent attempt fails the onError handler is invoked File names have any environment variables expanded prior to the first time they are opened so you can specify file name such as HOME myapp.cfg",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "autoReload",
        "normalized": "AutoConfig-\u003e[Worth FilePath]-\u003eIO(Config,ThreadId)",
        "package": "configurator",
        "partial": "Reload",
        "signature": "AutoConfig-\u003e[Worth FilePath]-\u003eIO(Config,ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:autoReloadGroups",
      "description": {
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "AutoConfig -\u003e [(Name, Worth FilePath)] -\u003e IO (Config, ThreadId)",
        "fct-source": "src/Data-Configurator.html#autoReloadGroups",
        "fct-type": "function",
        "title": "autoReloadGroups"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "autoReloadGroups",
        "normalized": "AutoConfig-\u003e[(Name,Worth FilePath)]-\u003eIO(Config,ThreadId)",
        "package": "configurator",
        "partial": "Reload Groups",
        "signature": "AutoConfig-\u003e[(Name,Worth FilePath)]-\u003eIO(Config,ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a simple dump of a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Config -\u003e IO ()",
        "fct-source": "src/Data-Configurator.html#display",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "Perform simple dump of Config to stdout",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "display",
        "normalized": "Config-\u003eIO()",
        "package": "configurator",
        "partial": "",
        "signature": "Config-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eA completely empty configuration.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Config",
        "fct-source": "src/Data-Configurator.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "completely empty configuration",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "empty",
        "normalized": "",
        "package": "configurator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:exact",
      "description": {
        "fct-descr": "\u003cp\u003eA pattern that must match exactly.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Text -\u003e Pattern",
        "fct-source": "src/Data-Configurator-Types-Internal.html#exact",
        "fct-type": "function",
        "title": "exact"
      },
      "index": {
        "description": "pattern that must match exactly",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "exact",
        "normalized": "Text-\u003ePattern",
        "package": "configurator",
        "partial": "",
        "signature": "Text-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:getMap",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e that maps names to values.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Config -\u003e IO (HashMap Name Value)",
        "fct-source": "src/Data-Configurator.html#getMap",
        "fct-type": "function",
        "title": "getMap"
      },
      "index": {
        "description": "Fetch the HashMap that maps names to values",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "getMap",
        "normalized": "Config-\u003eIO(HashMap Name Value)",
        "package": "configurator",
        "partial": "Map",
        "signature": "Config-\u003eIO(HashMap Name Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e from the contents of the named files. Throws an\n exception on error, such as if files do not exist or contain errors.\n\u003c/p\u003e\u003cp\u003eFile names have any environment variables expanded prior to the\n first time they are opened, so you can specify a file name such as\n \u003ccode\u003e\"$(HOME)/myapp.cfg\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "[Worth FilePath] -\u003e IO Config",
        "fct-source": "src/Data-Configurator.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "Create Config from the contents of the named files Throws an exception on error such as if files do not exist or contain errors File names have any environment variables expanded prior to the first time they are opened so you can specify file name such as HOME myapp.cfg",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "load",
        "normalized": "[Worth FilePath]-\u003eIO Config",
        "package": "configurator",
        "partial": "",
        "signature": "[Worth FilePath]-\u003eIO Config"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:loadGroups",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e from the contents of the named files, placing them\n into named prefixes.  If a prefix is non-empty, it should end in a\n dot.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "[(Name, Worth FilePath)] -\u003e IO Config",
        "fct-source": "src/Data-Configurator.html#loadGroups",
        "fct-type": "function",
        "title": "loadGroups"
      },
      "index": {
        "description": "Create Config from the contents of the named files placing them into named prefixes If prefix is non-empty it should end in dot",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "loadGroups",
        "normalized": "[(Name,Worth FilePath)]-\u003eIO Config",
        "package": "configurator",
        "partial": "Groups",
        "signature": "[(Name,Worth FilePath)]-\u003eIO Config"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a name in the given \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  If a binding exists, and\n the value can be \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003eed to the desired type, return the\n converted value, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Config -\u003e Name -\u003e IO (Maybe a)",
        "fct-source": "src/Data-Configurator.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up name in the given Config If binding exists and the value can be convert ed to the desired type return the converted value otherwise Nothing",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "lookup",
        "normalized": "Config-\u003eName-\u003eIO(Maybe a)",
        "package": "configurator",
        "partial": "",
        "signature": "Config-\u003eName-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:lookupDefault",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a name in the given \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  If a binding exists, and\n the value can be converted to the desired type, return it,\n otherwise return the default value.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "a-\u003e Config-\u003e Name-\u003e IO a",
        "fct-type": "function",
        "title": "lookupDefault"
      },
      "index": {
        "description": "Look up name in the given Config If binding exists and the value can be converted to the desired type return it otherwise return the default value",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "lookupDefault",
        "normalized": "a-\u003eConfig-\u003eName-\u003eIO a",
        "package": "configurator",
        "partial": "Default",
        "signature": "a-\u003eConfig-\u003eName-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eA pattern that matches on a prefix of a property name.  Given\n \u003ccode\u003e\"foo\"\u003c/code\u003e, this will match \u003ccode\u003e\"foo.bar\"\u003c/code\u003e, but not \u003ccode\u003e\"foo\"\u003c/code\u003e or\n \u003ccode\u003e\"foobar\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Text -\u003e Pattern",
        "fct-source": "src/Data-Configurator-Types-Internal.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "pattern that matches on prefix of property name Given foo this will match foo.bar but not foo or foobar",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "prefix",
        "normalized": "Text-\u003ePattern",
        "package": "configurator",
        "partial": "",
        "signature": "Text-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:reload",
      "description": {
        "fct-descr": "\u003cp\u003eForcibly reload a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e. Throws an exception on error, such as\n if files no longer exist or contain errors.  If the provided \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e is\n a \u003ccode\u003e\u003ca\u003esubconfig\u003c/a\u003e\u003c/code\u003e, this will reload the entire top-level configuration, not just\n the local section.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Config -\u003e IO ()",
        "fct-source": "src/Data-Configurator.html#reload",
        "fct-type": "function",
        "title": "reload"
      },
      "index": {
        "description": "Forcibly reload Config Throws an exception on error such as if files no longer exist or contain errors If the provided Config is subconfig this will reload the entire top-level configuration not just the local section",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "reload",
        "normalized": "Config-\u003eIO()",
        "package": "configurator",
        "partial": "",
        "signature": "Config-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:require",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a name in the given \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  If a binding exists, and\n the value can be \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003eed to the desired type, return the\n converted value, otherwise throw a \u003ccode\u003e\u003ca\u003eKeyError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Config -\u003e Name -\u003e IO a",
        "fct-source": "src/Data-Configurator.html#require",
        "fct-type": "function",
        "title": "require"
      },
      "index": {
        "description": "Look up name in the given Config If binding exists and the value can be convert ed to the desired type return the converted value otherwise throw KeyError",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "require",
        "normalized": "Config-\u003eName-\u003eIO a",
        "package": "configurator",
        "partial": "",
        "signature": "Config-\u003eName-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:subconfig",
      "description": {
        "fct-descr": "\u003cp\u003eGives a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e corresponding to just a single group of the original\n \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.  The subconfig can be used just like the original \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e, but\n see the documentation for \u003ccode\u003e\u003ca\u003ereload\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Name -\u003e Config -\u003e Config",
        "fct-source": "src/Data-Configurator.html#subconfig",
        "fct-type": "function",
        "title": "subconfig"
      },
      "index": {
        "description": "Gives Config corresponding to just single group of the original Config The subconfig can be used just like the original Config but see the documentation for reload",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "subconfig",
        "normalized": "Name-\u003eConfig-\u003eConfig",
        "package": "configurator",
        "partial": "",
        "signature": "Name-\u003eConfig-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:subscribe",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe for notifications.  The given action will be invoked\n when any change occurs to a configuration property matching the\n supplied pattern.\n\u003c/p\u003e",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "Config -\u003e Pattern -\u003e ChangeHandler -\u003e IO ()",
        "fct-source": "src/Data-Configurator.html#subscribe",
        "fct-type": "function",
        "title": "subscribe"
      },
      "index": {
        "description": "Subscribe for notifications The given action will be invoked when any change occurs to configuration property matching the supplied pattern",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "subscribe",
        "normalized": "Config-\u003ePattern-\u003eChangeHandler-\u003eIO()",
        "package": "configurator",
        "partial": "",
        "signature": "Config-\u003ePattern-\u003eChangeHandler-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configurator/docs/Data-Configurator.html#v:worth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Configurator",
        "fct-package": "configurator",
        "fct-signature": "a",
        "fct-source": "src/Data-Configurator-Types-Internal.html#Worth",
        "fct-type": "function",
        "title": "worth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configurator",
        "module": "Data.Configurator",
        "name": "worth",
        "normalized": "",
        "package": "configurator",
        "partial": "",
        "signature": ""
      }
    }
  }
]