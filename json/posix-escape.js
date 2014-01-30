[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-escape/docs/System-Posix-Escape-Unicode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuote Unicode arguments to be passed through the Unix shell.\n\u003c/p\u003e\u003cp\u003eIf you are escaping ASCII-only strings, use \u003ccode\u003eSystem.Posix.Escape\u003c/code\u003e as a safer\nalternative.\n\u003c/p\u003e\u003cp\u003eIf you are escaping untrusted input, you must guarantee that the Unicode\ncharacters of the escaped \u003ccode\u003eString\u003c/code\u003e will be serialized using the character\nencoding expected by \u003ccode\u003e/bin/sh\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome software incorrectly interprets characters as bytes, and will use only the\nlow 8 bits of each Unicode code point.  This includes version 1.0 of the\nHaskell \u003ccode\u003eprocess\u003c/code\u003e package, which is bundled with GHC 7.0.  Under such\ncircumstances this module \u003cem\u003ewill not\u003c/em\u003e prevent malicious input from escaping the\nquotation.\n\u003c/p\u003e\u003cp\u003eThis bug was fixed in \u003ccode\u003eprocess-1.1\u003c/code\u003e, which ships with GHC 7.2:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/4006\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/1414\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo repeat: Escaping untrusted input using this module and passing it to the\n\u003ccode\u003eprocess\u003c/code\u003e package in GHC 7.0 is NOT SAFE and can allow MALICIOUS CODE\nEXECUTION.  Use \u003ccode\u003eSystem.Posix.Escape\u003c/code\u003e as a safer alternative.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Escape.Unicode",
        "fct-package": "posix-escape",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Escape-Unicode.html",
        "fct-type": "module",
        "title": "Unicode"
      },
      "index": {
        "description": "Quote Unicode arguments to be passed through the Unix shell If you are escaping ASCII-only strings use System.Posix.Escape as safer alternative If you are escaping untrusted input you must guarantee that the Unicode characters of the escaped String will be serialized using the character encoding expected by bin sh Some software incorrectly interprets characters as bytes and will use only the low bits of each Unicode code point This includes version of the Haskell process package which is bundled with GHC Under such circumstances this module will not prevent malicious input from escaping the quotation This bug was fixed in process-1.1 which ships with GHC http hackage.haskell.org trac ghc ticket http hackage.haskell.org trac ghc ticket To repeat Escaping untrusted input using this module and passing it to the process package in GHC is NOT SAFE and can allow MALICIOUS CODE EXECUTION Use System.Posix.Escape as safer alternative",
        "hierarchy": "System Posix Escape Unicode",
        "module": "System.Posix.Escape.Unicode",
        "name": "Unicode",
        "normalized": "",
        "package": "posix-escape",
        "partial": "Unicode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-escape/docs/System-Posix-Escape-Unicode.html#v:escape",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a \u003ccode\u003eString\u003c/code\u003e so it can be used within a Unix shell command line, and\n end up as a single argument to the program invoked.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Escape.Unicode",
        "fct-package": "posix-escape",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Posix-Escape-Unicode.html#escape",
        "fct-type": "function",
        "title": "escape"
      },
      "index": {
        "description": "Wrap String so it can be used within Unix shell command line and end up as single argument to the program invoked",
        "hierarchy": "System Posix Escape Unicode",
        "module": "System.Posix.Escape.Unicode",
        "name": "escape",
        "normalized": "String-\u003eString",
        "package": "posix-escape",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-escape/docs/System-Posix-Escape-Unicode.html#v:escapeMany",
      "description": {
        "fct-descr": "\u003cp\u003eWrap some \u003ccode\u003eString\u003c/code\u003es as separate arguments, by inserting spaces before and\n after each.  This will break if, for example, prefixed with a backslash.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Escape.Unicode",
        "fct-package": "posix-escape",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/System-Posix-Escape-Unicode.html#escapeMany",
        "fct-type": "function",
        "title": "escapeMany"
      },
      "index": {
        "description": "Wrap some String as separate arguments by inserting spaces before and after each This will break if for example prefixed with backslash",
        "hierarchy": "System Posix Escape Unicode",
        "module": "System.Posix.Escape.Unicode",
        "name": "escapeMany",
        "normalized": "[String]-\u003eString",
        "package": "posix-escape",
        "partial": "Many",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-escape/docs/System-Posix-Escape.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuote ASCII arguments to be passed through the Unix shell.\n\u003c/p\u003e\u003cp\u003eFor safety, these functions drop all non-ASCII characters.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Escape",
        "fct-package": "posix-escape",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Escape.html",
        "fct-type": "module",
        "title": "Escape"
      },
      "index": {
        "description": "Quote ASCII arguments to be passed through the Unix shell For safety these functions drop all non-ASCII characters",
        "hierarchy": "System Posix Escape",
        "module": "System.Posix.Escape",
        "name": "Escape",
        "normalized": "",
        "package": "posix-escape",
        "partial": "Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-escape/docs/System-Posix-Escape.html#v:escape",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a \u003ccode\u003eString\u003c/code\u003e so it can be used within a Unix shell command line, and\n end up as a single argument to the program invoked.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Escape",
        "fct-package": "posix-escape",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Posix-Escape.html#escape",
        "fct-type": "function",
        "title": "escape"
      },
      "index": {
        "description": "Wrap String so it can be used within Unix shell command line and end up as single argument to the program invoked",
        "hierarchy": "System Posix Escape",
        "module": "System.Posix.Escape",
        "name": "escape",
        "normalized": "String-\u003eString",
        "package": "posix-escape",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-escape/docs/System-Posix-Escape.html#v:escapeMany",
      "description": {
        "fct-descr": "\u003cp\u003eWrap some \u003ccode\u003eString\u003c/code\u003es as separate arguments, by inserting spaces before and\n after each.  This will break if, for example, prefixed with a backslash.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Escape",
        "fct-package": "posix-escape",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/System-Posix-Escape.html#escapeMany",
        "fct-type": "function",
        "title": "escapeMany"
      },
      "index": {
        "description": "Wrap some String as separate arguments by inserting spaces before and after each This will break if for example prefixed with backslash",
        "hierarchy": "System Posix Escape",
        "module": "System.Posix.Escape",
        "name": "escapeMany",
        "normalized": "[String]-\u003eString",
        "package": "posix-escape",
        "partial": "Many",
        "signature": "[String]-\u003eString"
      }
    }
  }
]