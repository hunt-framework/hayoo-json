[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/System-UTF8IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eSystem.UTF8IO\u003c/a\u003e defines the same entities as \u003ca\u003eSystem.IO\u003c/a\u003e but with UTF8 text I/O operations.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eSystem.UTF8IO\u003c/a\u003e re-exports \u003ca\u003eSystem.IO.UTF8\u003c/a\u003e (utf8-string package) and \u003ca\u003eSystem.IO\u003c/a\u003e but hides the duplicate definitions (in favor of \u003ca\u003eSystem.IO.UTF8\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.UTF8IO",
        "fct-package": "utf8-prelude",
        "fct-signature": "module",
        "fct-source": "src/System-UTF8IO.html",
        "fct-type": "module",
        "title": "UTF8IO"
      },
      "index": {
        "description": "System.UTF8IO defines the same entities as System.IO but with UTF8 text operations System.UTF8IO re-exports System.IO.UTF8 utf8-string package and System.IO but hides the duplicate definitions in favor of System.IO.UTF8",
        "hierarchy": "System UTF8IO",
        "module": "System.UTF8IO",
        "name": "UTF8IO",
        "normalized": "",
        "package": "utf8-prelude",
        "partial": "UTF IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/System-UTF8IO.html#v:getChar",
      "description": {
        "fct-descr": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eNote: The implementation of \u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e is not as efficient as it could be.\n\u003c/p\u003e",
        "fct-module": "System.UTF8IO",
        "fct-package": "utf8-prelude",
        "fct-signature": "IO Char",
        "fct-source": "src/System-UTF8IO.html#getChar",
        "fct-type": "function",
        "title": "getChar"
      },
      "index": {
        "description": "Read character from the standard input device same as hGetChar stdin Note The implementation of getChar is not as efficient as it could be",
        "hierarchy": "System UTF8IO",
        "module": "System.UTF8IO",
        "name": "getChar",
        "normalized": "",
        "package": "utf8-prelude",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/System-UTF8IO.html#v:hGetChar",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e reads a character from the file or channel \n managed by \u003ccode\u003ehdl\u003c/code\u003e, blocking until a character is available.\n\u003c/p\u003e\u003cp\u003eNote: The implementation of \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e is not as efficient as it could be.\n\u003c/p\u003e",
        "fct-module": "System.UTF8IO",
        "fct-package": "utf8-prelude",
        "fct-signature": "Handle -\u003e IO Char",
        "fct-source": "src/System-UTF8IO.html#hGetChar",
        "fct-type": "function",
        "title": "hGetChar"
      },
      "index": {
        "description": "Computation hGetChar hdl reads character from the file or channel managed by hdl blocking until character is available Note The implementation of hGetChar is not as efficient as it could be",
        "hierarchy": "System UTF8IO",
        "module": "System.UTF8IO",
        "name": "hGetChar",
        "normalized": "Handle-\u003eIO Char",
        "package": "utf8-prelude",
        "partial": "Get Char",
        "signature": "Handle-\u003eIO Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/System-UTF8IO.html#v:hLookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the next character from the handle \n without removing it from the input buffer, blocking until a character is available.\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e is not implemented; it halts with a run-time error.\n\u003c/p\u003e",
        "fct-module": "System.UTF8IO",
        "fct-package": "utf8-prelude",
        "fct-signature": "Handle -\u003e IO Char",
        "fct-source": "src/System-UTF8IO.html#hLookAhead",
        "fct-type": "function",
        "title": "hLookAhead"
      },
      "index": {
        "description": "Computation hLookAhead hdl returns the next character from the handle without removing it from the input buffer blocking until character is available Note hLookAhead is not implemented it halts with run-time error",
        "hierarchy": "System UTF8IO",
        "module": "System.UTF8IO",
        "name": "hLookAhead",
        "normalized": "Handle-\u003eIO Char",
        "package": "utf8-prelude",
        "partial": "Look Ahead",
        "signature": "Handle-\u003eIO Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/System-UTF8IO.html#v:hPrint",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPrint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl t\u003c/code\u003e writes the UTF8 string representation of \u003ccode\u003et\u003c/code\u003e\n to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e and appends a newline\n (same as \u003ccode\u003e\u003ca\u003ehPutStrLn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl .\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003ehPrint\u003c/a\u003e\u003c/code\u003e has the same behaviour as \u003ccode\u003eSystem.IO.hPrint\u003c/code\u003e because \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e always produces an ASCII string.\n\u003c/p\u003e",
        "fct-module": "System.UTF8IO",
        "fct-package": "utf8-prelude",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/System-UTF8IO.html#hPrint",
        "fct-type": "function",
        "title": "hPrint"
      },
      "index": {
        "description": "Computation hPrint hdl writes the UTF8 string representation of to the file or channel managed by hdl and appends newline same as hPutStrLn hdl show Note hPrint has the same behaviour as System.IO.hPrint because show always produces an ASCII string",
        "hierarchy": "System UTF8IO",
        "module": "System.UTF8IO",
        "name": "hPrint",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "utf8-prelude",
        "partial": "Print",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/System-UTF8IO.html#v:hPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl ch\u003c/code\u003e writes the character \u003ccode\u003ech\u003c/code\u003e to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e. \n Characters may be buffered if buffering is enabled for \u003ccode\u003ehdl\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eNote: The implementation of \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e is not as efficient as it could be.\n\u003c/p\u003e",
        "fct-module": "System.UTF8IO",
        "fct-package": "utf8-prelude",
        "fct-signature": "Handle -\u003e Char -\u003e IO ()",
        "fct-source": "src/System-UTF8IO.html#hPutChar",
        "fct-type": "function",
        "title": "hPutChar"
      },
      "index": {
        "description": "Computation hPutChar hdl ch writes the character ch to the file or channel managed by hdl Characters may be buffered if buffering is enabled for hdl Note The implementation of hPutChar is not as efficient as it could be",
        "hierarchy": "System UTF8IO",
        "module": "System.UTF8IO",
        "name": "hPutChar",
        "normalized": "Handle-\u003eChar-\u003eIO()",
        "package": "utf8-prelude",
        "partial": "Put Char",
        "signature": "Handle-\u003eChar-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/System-UTF8IO.html#v:putChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eNote: The implementation of \u003ccode\u003e\u003ca\u003eputChar\u003c/a\u003e\u003c/code\u003e is not as efficient as it could be.\n\u003c/p\u003e",
        "fct-module": "System.UTF8IO",
        "fct-package": "utf8-prelude",
        "fct-signature": "Char -\u003e IO ()",
        "fct-source": "src/System-UTF8IO.html#putChar",
        "fct-type": "function",
        "title": "putChar"
      },
      "index": {
        "description": "Write character to the standard output device same as hPutChar stdout Note The implementation of putChar is not as efficient as it could be",
        "hierarchy": "System UTF8IO",
        "module": "System.UTF8IO",
        "name": "putChar",
        "normalized": "Char-\u003eIO()",
        "package": "utf8-prelude",
        "partial": "Char",
        "signature": "Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/UTF8Prelude.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eUTF8Prelude\u003c/a\u003e defines the same entities as \u003ca\u003ePrelude\u003c/a\u003e but with UTF8 text I/O operations.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE NoImplicitPrelude #-}\n\n import UTF8Prelude\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e import Prelude()\n import UTF8Prelude\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e import qualified Prelude\n import UTF8Prelude\n\u003c/pre\u003e\u003cp\u003e\u003ca\u003eUTF8Prelude\u003c/a\u003e re-exports \u003ca\u003eSystem.UTF8IO\u003c/a\u003e but hides the definitions not defined in \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "UTF8Prelude",
        "fct-package": "utf8-prelude",
        "fct-signature": "module",
        "fct-source": "src/UTF8Prelude.html",
        "fct-type": "module",
        "title": "UTF8Prelude"
      },
      "index": {
        "description": "UTF8Prelude defines the same entities as Prelude but with UTF8 text operations Usage LANGUAGE NoImplicitPrelude import UTF8Prelude or import Prelude import UTF8Prelude or import qualified Prelude import UTF8Prelude UTF8Prelude re-exports System.UTF8IO but hides the definitions not defined in Prelude",
        "hierarchy": "UTF8Prelude",
        "module": "UTF8Prelude",
        "name": "UTF8Prelude",
        "normalized": "",
        "package": "utf8-prelude",
        "partial": "UTF Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-prelude/docs/UTF8Prelude.html#v:error",
      "description": {
        "fct-descr": "\u003cp\u003eUTF8 encoded error messages.\n\u003c/p\u003e",
        "fct-module": "UTF8Prelude",
        "fct-package": "utf8-prelude",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/UTF8Prelude.html#error",
        "fct-type": "function",
        "title": "error"
      },
      "index": {
        "description": "UTF8 encoded error messages",
        "hierarchy": "UTF8Prelude",
        "module": "UTF8Prelude",
        "name": "error",
        "normalized": "String-\u003ea",
        "package": "utf8-prelude",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  }
]