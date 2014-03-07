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
        "word": "binary-generic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eYou can build your own type-specific stacks. For example the default stack\n looks like this, whereas the ordering determines, which function matches\n first for a specific type. This especially allows you to override the\n default choices:\n\u003c/p\u003e\u003cpre\u003e getExtDefault    :: Typeable a =\u003e Get a -\u003e Get a\n getExtDefault     = getExtInteger\n                   . getExtChar\n                   . getExtWord\n                   . getExtInt\n                   . getExtFloat\n                   . getExtText\n                   . getExtByteString\n\n putExtDefault    :: Typeable a =\u003e (a -\u003e Put) -\u003e a -\u003e Put\n putExtDefault     = putExtInteger\n                   . putExtChar\n                   . putExtWord\n                   . putExtInt\n                   . putExtFloat\n                   . putExtText\n                   . putExtByteString\n\u003c/pre\u003e\u003cp\u003eNotice that these stacks have to be grounded, ideally with something\n that handles algebraic types.\n Have a look at \u003ccode\u003eData.Binary.Generic\u003c/code\u003e how this is done for the default \n stack.\n\u003c/p\u003e\u003cp\u003eIMPORTANT: You cannot simply apply an extension to \u003ccode\u003egetGeneric\u003c/code\u003e or\n \u003ccode\u003eputGeneric\u003c/code\u003e, since these do a recursive call at the bottom level\n which points to the top of the stack.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Generic.Extensions",
          "name": "Extensions",
          "package": "binary-generic",
          "source": "src/Data-Binary-Generic-Extensions.html",
          "type": "module"
        },
        "index": {
          "description": "You can build your own type-specific stacks For example the default stack looks like this whereas the ordering determines which function matches first for specific type This especially allows you to override the default choices getExtDefault Typeable Get Get getExtDefault getExtInteger getExtChar getExtWord getExtInt getExtFloat getExtText getExtByteString putExtDefault Typeable Put Put putExtDefault putExtInteger putExtChar putExtWord putExtInt putExtFloat putExtText putExtByteString Notice that these stacks have to be grounded ideally with something that handles algebraic types Have look at Data.Binary.Generic how this is done for the default stack IMPORTANT You cannot simply apply an extension to getGeneric or putGeneric since these do recursive call at the bottom level which points to the top of the stack",
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "Extensions",
          "package": "binary-generic",
          "partial": "Extensions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "extGet",
          "package": "binary-generic",
          "signature": "m b -\u003e m a -\u003e m a",
          "source": "src/Data-Binary-Generic-Extensions.html#extGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "extGet",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "binary-generic",
          "partial": "Get",
          "signature": "m b-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:extGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "extPut",
          "package": "binary-generic",
          "signature": "(b -\u003e q) -\u003e (a -\u003e q) -\u003e a -\u003e q",
          "source": "src/Data-Binary-Generic-Extensions.html#extPut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "extPut",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003ec-\u003eb",
          "package": "binary-generic",
          "partial": "Put",
          "signature": "(b-\u003eq)-\u003e(a-\u003eq)-\u003ea-\u003eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:extPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtByteString",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtByteString",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Byte String",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtChar",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtChar",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Char",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtDefault",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtDefault",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Default",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtFloat",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtFloat",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Float",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtInt",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtInt",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Int",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtInteger",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtInteger",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Integer",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtText",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtText",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Text",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtWord",
          "package": "binary-generic",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Generic-Extensions.html#getExtWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "getExtWord",
          "normalized": "Get a-\u003eGet a",
          "package": "binary-generic",
          "partial": "Ext Word",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:getExtWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtByteString",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtByteString",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Byte String",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtChar",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtChar",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Char",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtDefault",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtDefault",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Default",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtFloat",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtFloat",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Float",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtInt",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtInt",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Int",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtInteger",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtInteger",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Integer",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtText",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtText",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Text",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtWord",
          "package": "binary-generic",
          "signature": "(a -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic-Extensions.html#putExtWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic Extensions",
          "module": "Data.Binary.Generic.Extensions",
          "name": "putExtWord",
          "normalized": "(a-\u003ePut)-\u003ea-\u003ePut",
          "package": "binary-generic",
          "partial": "Ext Word",
          "signature": "(a-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic-Extensions.html#v:putExtWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor any algebraic datatype just make it an instance of class \u003ccode\u003eData.Data.Data\u003c/code\u003e\n by simply deriving \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e on definition or try stand-alone-deriving. This\n allows the library to enumerate the value constructors and thereby\n encoding their index. Notice that serialisation depends on a type's\n structure. Serialisations might get unreadable if the type is altered.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetGeneric\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputGeneric\u003c/a\u003e\u003c/code\u003e implement a selection of type-specific \n defaults and are grounded by a canonical serialisation for all algebraic\n types that instantiate \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.\n Have a look at \u003ccode\u003eData.Binary.Generic.Extensions\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eIf you want to ground your own type-specific stack \u003ccode\u003emyStack\u003c/code\u003e of extensions\n write the following for the \u003ccode\u003eGet\u003c/code\u003e-part (the \u003ccode\u003ePut\u003c/code\u003e-part follows\n analogously):\n\u003c/p\u003e\u003cpre\u003e getMyStack :: Data a =\u003e Get a\n getMyStack  = myStack (getGenericByCallback getMyStack)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Binary.Generic",
          "name": "Generic",
          "package": "binary-generic",
          "source": "src/Data-Binary-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "For any algebraic datatype just make it an instance of class Data.Data.Data by simply deriving Data on definition or try stand-alone-deriving This allows the library to enumerate the value constructors and thereby encoding their index Notice that serialisation depends on type structure Serialisations might get unreadable if the type is altered getGeneric and putGeneric implement selection of type-specific defaults and are grounded by canonical serialisation for all algebraic types that instantiate Data Have look at Data.Binary.Generic.Extensions for details If you want to ground your own type-specific stack myStack of extensions write the following for the Get part the Put part follows analogously getMyStack Data Get getMyStack myStack getGenericByCallback getMyStack",
          "hierarchy": "Data Binary Generic",
          "module": "Data.Binary.Generic",
          "name": "Generic",
          "package": "binary-generic",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic",
          "name": "getAlgebraic",
          "package": "binary-generic",
          "signature": "Get a",
          "source": "src/Data-Binary-Generic.html#getAlgebraic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic",
          "module": "Data.Binary.Generic",
          "name": "getAlgebraic",
          "package": "binary-generic",
          "partial": "Algebraic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic.html#v:getAlgebraic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic",
          "name": "getGeneric",
          "package": "binary-generic",
          "signature": "Get a",
          "source": "src/Data-Binary-Generic.html#getGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic",
          "module": "Data.Binary.Generic",
          "name": "getGeneric",
          "package": "binary-generic",
          "partial": "Generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic.html#v:getGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic",
          "name": "getGenericByCallback",
          "package": "binary-generic",
          "signature": "Get d) -\u003e Get a",
          "source": "src/Data-Binary-Generic.html#getGenericByCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic",
          "module": "Data.Binary.Generic",
          "name": "getGenericByCallback",
          "normalized": "Get a)-\u003eGet b",
          "package": "binary-generic",
          "partial": "Generic By Callback",
          "signature": "Get d)-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic.html#v:getGenericByCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic",
          "name": "putAlgebraic",
          "package": "binary-generic",
          "signature": "a -\u003e Put",
          "source": "src/Data-Binary-Generic.html#putAlgebraic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic",
          "module": "Data.Binary.Generic",
          "name": "putAlgebraic",
          "normalized": "a-\u003ePut",
          "package": "binary-generic",
          "partial": "Algebraic",
          "signature": "a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic.html#v:putAlgebraic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic",
          "name": "putGeneric",
          "package": "binary-generic",
          "signature": "a -\u003e Put",
          "source": "src/Data-Binary-Generic.html#putGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic",
          "module": "Data.Binary.Generic",
          "name": "putGeneric",
          "normalized": "a-\u003ePut",
          "package": "binary-generic",
          "partial": "Generic",
          "signature": "a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic.html#v:putGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Generic",
          "name": "putGenericByCallback",
          "package": "binary-generic",
          "signature": "d -\u003e Put) -\u003e a -\u003e Put",
          "source": "src/Data-Binary-Generic.html#putGenericByCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Generic",
          "module": "Data.Binary.Generic",
          "name": "putGenericByCallback",
          "normalized": "a-\u003ePut)-\u003eb-\u003ePut",
          "package": "binary-generic",
          "partial": "Generic By Callback",
          "signature": "d-\u003ePut)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-generic/docs/Data-Binary-Generic.html#v:putGenericByCallback"
      }
    }
  ]
]