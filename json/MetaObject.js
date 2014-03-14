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
        "word": "MetaObject"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "Base",
          "package": "MetaObject",
          "source": "src/MO-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "Base",
          "package": "MetaObject",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "Arguments",
          "package": "MetaObject",
          "source": "src/MO-Base.html#Arguments",
          "type": "type"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "Arguments",
          "package": "MetaObject",
          "partial": "Arguments",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#t:Arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopen type to represent Code\n\u003c/p\u003e",
          "module": "MO.Base",
          "name": "Codeable",
          "package": "MetaObject",
          "source": "src/MO-Base.html#Codeable",
          "type": "class"
        },
        "index": {
          "description": "open type to represent Code",
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "Codeable",
          "package": "MetaObject",
          "partial": "Codeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#t:Codeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal monadic primitive code.\n\u003c/p\u003e",
          "module": "MO.Base",
          "name": "HsCode",
          "package": "MetaObject",
          "source": "src/MO-Base.html#HsCode",
          "type": "newtype"
        },
        "index": {
          "description": "Real monadic primitive code",
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "HsCode",
          "package": "MetaObject",
          "partial": "Hs Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#t:HsCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "Invocant",
          "package": "MetaObject",
          "source": "src/MO-Base.html#Invocant",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "Invocant",
          "package": "MetaObject",
          "partial": "Invocant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#t:Invocant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estub code which always return the same\n\u003c/p\u003e",
          "module": "MO.Base",
          "name": "NoCode",
          "package": "MetaObject",
          "source": "src/MO-Base.html#NoCode",
          "type": "newtype"
        },
        "index": {
          "description": "stub code which always return the same",
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "NoCode",
          "package": "MetaObject",
          "partial": "No Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#t:NoCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure code that works with any monad.\n\u003c/p\u003e",
          "module": "MO.Base",
          "name": "PureCode",
          "package": "MetaObject",
          "source": "src/MO-Base.html#PureCode",
          "type": "newtype"
        },
        "index": {
          "description": "Pure code that works with any monad",
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "PureCode",
          "package": "MetaObject",
          "partial": "Pure Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#t:PureCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "HsCode",
          "package": "MetaObject",
          "signature": "HsCode (Arguments m -\u003e m (Invocant m))",
          "source": "src/MO-Base.html#HsCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "HsCode",
          "normalized": "HsCode(Arguments a-\u003ea(Invocant a))",
          "package": "MetaObject",
          "partial": "Hs Code",
          "signature": "HsCode(Arguments m-\u003em(Invocant m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:HsCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "MkInvocant",
          "package": "MetaObject",
          "signature": "MkInvocant a (AnyResponder m)",
          "source": "src/MO-Base.html#Invocant",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "MkInvocant",
          "package": "MetaObject",
          "partial": "Mk Invocant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:MkInvocant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "NoCode",
          "package": "MetaObject",
          "signature": "NoCode (Invocant m)",
          "source": "src/MO-Base.html#NoCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "NoCode",
          "package": "MetaObject",
          "partial": "No Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:NoCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "PureCode",
          "package": "MetaObject",
          "signature": "Arguments m -\u003e Invocant m)",
          "source": "src/MO-Base.html#PureCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "PureCode",
          "normalized": "Arguments a-\u003eInvocant a)",
          "package": "MetaObject",
          "partial": "Pure Code",
          "signature": "Arguments m-\u003eInvocant m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:PureCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "getInvocant",
          "package": "MetaObject",
          "signature": "Arguments m -\u003e Maybe (Invocant m)",
          "source": "src/MO-Base.html#getInvocant",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "getInvocant",
          "normalized": "Arguments a-\u003eMaybe(Invocant a)",
          "package": "MetaObject",
          "partial": "Invocant",
          "signature": "Arguments m-\u003eMaybe(Invocant m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:getInvocant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "namedArg",
          "package": "MetaObject",
          "signature": "Arguments m -\u003e Atom -\u003e Maybe (Invocant m)",
          "source": "src/MO-Base.html#namedArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "namedArg",
          "normalized": "Arguments a-\u003eAtom-\u003eMaybe(Invocant a)",
          "package": "MetaObject",
          "partial": "Arg",
          "signature": "Arguments m-\u003eAtom-\u003eMaybe(Invocant m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:namedArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "run",
          "package": "MetaObject",
          "signature": "c -\u003e Arguments m -\u003e m (Invocant m)",
          "source": "src/MO-Base.html#run",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "run",
          "normalized": "a-\u003eArguments b-\u003eb(Invocant b)",
          "package": "MetaObject",
          "signature": "c-\u003eArguments m-\u003em(Invocant m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "stubInvocant",
          "package": "MetaObject",
          "signature": "Invocant m",
          "source": "src/MO-Base.html#stubInvocant",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "stubInvocant",
          "package": "MetaObject",
          "partial": "Invocant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:stubInvocant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Base",
          "name": "withInvocant",
          "package": "MetaObject",
          "signature": "Arguments m -\u003e Invocant m -\u003e Arguments m",
          "source": "src/MO-Base.html#withInvocant",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Base",
          "module": "MO.Base",
          "name": "withInvocant",
          "normalized": "Arguments a-\u003eInvocant a-\u003eArguments a",
          "package": "MetaObject",
          "partial": "Invocant",
          "signature": "Arguments m-\u003eInvocant m-\u003eArguments m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Base.html#v:withInvocant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "Capture",
          "package": "MetaObject",
          "source": "src/MO-Capture.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "Capture",
          "package": "MetaObject",
          "partial": "Capture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Capture is a frozen version of the arguments to an application.\n\u003c/p\u003e",
          "module": "MO.Capture",
          "name": "Capt",
          "package": "MetaObject",
          "source": "src/MO-Capture.html#Capt",
          "type": "data"
        },
        "index": {
          "description": "Capture is frozen version of the arguments to an application",
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "Capt",
          "package": "MetaObject",
          "partial": "Capt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#t:Capt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-invocant arguments.\n\u003c/p\u003e",
          "module": "MO.Capture",
          "name": "Feed",
          "package": "MetaObject",
          "source": "src/MO-Capture.html#Feed",
          "type": "data"
        },
        "index": {
          "description": "non-invocant arguments",
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "Feed",
          "package": "MetaObject",
          "partial": "Feed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#t:Feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "CaptMeth",
          "package": "MetaObject",
          "signature": "CaptMeth",
          "source": "src/MO-Capture.html#Capt",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "CaptMeth",
          "package": "MetaObject",
          "partial": "Capt Meth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:CaptMeth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "CaptSub",
          "package": "MetaObject",
          "signature": "CaptSub",
          "source": "src/MO-Capture.html#Capt",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "CaptSub",
          "package": "MetaObject",
          "partial": "Capt Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:CaptSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "MkFeed",
          "package": "MetaObject",
          "signature": "MkFeed",
          "source": "src/MO-Capture.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "MkFeed",
          "package": "MetaObject",
          "partial": "Mk Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:MkFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "c_feeds",
          "package": "MetaObject",
          "signature": "Seq (Feed a)",
          "source": "src/MO-Capture.html#Capt",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "c_feeds",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:c_feeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "c_invocant",
          "package": "MetaObject",
          "signature": "a",
          "source": "src/MO-Capture.html#Capt",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "c_invocant",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:c_invocant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "concatFeeds",
          "package": "MetaObject",
          "signature": "Seq (Feed a) -\u003e Feed a",
          "source": "src/MO-Capture.html#concatFeeds",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "concatFeeds",
          "normalized": "Seq(Feed a)-\u003eFeed a",
          "package": "MetaObject",
          "partial": "Feeds",
          "signature": "Seq(Feed a)-\u003eFeed a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:concatFeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "emptyFeed",
          "package": "MetaObject",
          "signature": "Feed a",
          "source": "src/MO-Capture.html#emptyFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "emptyFeed",
          "package": "MetaObject",
          "partial": "Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:emptyFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaps to [:a:] and not a since if the Sig stipulates\n   \u003ccode\u003ex, \u003ca\u003ex =\u003e 1, x =\u003e 2\u003c/a\u003e constructs \u003c/code\u003ex = (1, 2).\n\u003c/p\u003e",
          "module": "MO.Capture",
          "name": "f_nameds",
          "package": "MetaObject",
          "signature": "AtomMap (Seq a)",
          "source": "src/MO-Capture.html#Feed",
          "type": "function"
        },
        "index": {
          "description": "maps to and not since if the Sig stipulates constructs",
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "f_nameds",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:f_nameds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Capture",
          "name": "f_positionals",
          "package": "MetaObject",
          "signature": "Seq a",
          "source": "src/MO-Capture.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Capture",
          "module": "MO.Capture",
          "name": "f_positionals",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Capture.html#v:f_positionals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "Attribute",
          "package": "MetaObject",
          "source": "src/MO-Compile-Attribute.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "Attribute",
          "package": "MetaObject",
          "partial": "Attribute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "Attribute",
          "package": "MetaObject",
          "source": "src/MO-Compile-Attribute.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "Attribute",
          "package": "MetaObject",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "AttributeName",
          "package": "MetaObject",
          "source": "src/MO-Compile-Attribute.html#AttributeName",
          "type": "type"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "AttributeName",
          "package": "MetaObject",
          "partial": "Attribute Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#t:AttributeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "MkAttribute",
          "package": "MetaObject",
          "signature": "MkAttribute",
          "source": "src/MO-Compile-Attribute.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "MkAttribute",
          "package": "MetaObject",
          "partial": "Mk Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:MkAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "a_accessor_name",
          "package": "MetaObject",
          "signature": "AttributeName",
          "source": "src/MO-Compile-Attribute.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "a_accessor_name",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:a_accessor_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "a_default",
          "package": "MetaObject",
          "signature": "m (Invocant m)",
          "source": "src/MO-Compile-Attribute.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "a_default",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:a_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "a_is_private",
          "package": "MetaObject",
          "signature": "Bool",
          "source": "src/MO-Compile-Attribute.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "a_is_private",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:a_is_private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "a_name",
          "package": "MetaObject",
          "signature": "AttributeName",
          "source": "src/MO-Compile-Attribute.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "a_name",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:a_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "mkAttribute",
          "package": "MetaObject",
          "signature": "AttributeName -\u003e Invocant m -\u003e Attribute m",
          "source": "src/MO-Compile-Attribute.html#mkAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "mkAttribute",
          "normalized": "AttributeName-\u003eInvocant a-\u003eAttribute a",
          "package": "MetaObject",
          "partial": "Attribute",
          "signature": "AttributeName-\u003eInvocant m-\u003eAttribute m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:mkAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "mkAttributeMandatory",
          "package": "MetaObject",
          "signature": "AttributeName -\u003e Attribute m",
          "source": "src/MO-Compile-Attribute.html#mkAttributeMandatory",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "mkAttributeMandatory",
          "normalized": "AttributeName-\u003eAttribute a",
          "package": "MetaObject",
          "partial": "Attribute Mandatory",
          "signature": "AttributeName-\u003eAttribute m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:mkAttributeMandatory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "mkAttributeStub",
          "package": "MetaObject",
          "signature": "AttributeName -\u003e Attribute m",
          "source": "src/MO-Compile-Attribute.html#mkAttributeStub",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "mkAttributeStub",
          "normalized": "AttributeName-\u003eAttribute a",
          "package": "MetaObject",
          "partial": "Attribute Stub",
          "signature": "AttributeName-\u003eAttribute m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:mkAttributeStub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "mkPrivateAttribute",
          "package": "MetaObject",
          "signature": "AttributeName -\u003e Invocant m -\u003e Attribute m",
          "source": "src/MO-Compile-Attribute.html#mkPrivateAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "mkPrivateAttribute",
          "normalized": "AttributeName-\u003eInvocant a-\u003eAttribute a",
          "package": "MetaObject",
          "partial": "Private Attribute",
          "signature": "AttributeName-\u003eInvocant m-\u003eAttribute m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:mkPrivateAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "mkPrivateAttributeMandatory",
          "package": "MetaObject",
          "signature": "AttributeName -\u003e Attribute m",
          "source": "src/MO-Compile-Attribute.html#mkPrivateAttributeMandatory",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "mkPrivateAttributeMandatory",
          "normalized": "AttributeName-\u003eAttribute a",
          "package": "MetaObject",
          "partial": "Private Attribute Mandatory",
          "signature": "AttributeName-\u003eAttribute m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:mkPrivateAttributeMandatory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Attribute",
          "name": "mkPrivateAttributeStub",
          "package": "MetaObject",
          "signature": "AttributeName -\u003e Attribute m",
          "source": "src/MO-Compile-Attribute.html#mkPrivateAttributeStub",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Attribute",
          "module": "MO.Compile.Attribute",
          "name": "mkPrivateAttributeStub",
          "normalized": "AttributeName-\u003eAttribute a",
          "package": "MetaObject",
          "partial": "Private Attribute Stub",
          "signature": "AttributeName-\u003eAttribute m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Attribute.html#v:mkPrivateAttributeStub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "Class",
          "package": "MetaObject",
          "source": "src/MO-Compile-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "Class",
          "package": "MetaObject",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "AnyClass",
          "package": "MetaObject",
          "source": "src/MO-Compile-Class.html#AnyClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "AnyClass",
          "package": "MetaObject",
          "partial": "Any Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#t:AnyClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "Class",
          "package": "MetaObject",
          "source": "src/MO-Compile-Class.html#Class",
          "type": "class"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "Class",
          "package": "MetaObject",
          "partial": "Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "ClassName",
          "package": "MetaObject",
          "source": "src/MO-Compile-Class.html#ClassName",
          "type": "type"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "ClassName",
          "package": "MetaObject",
          "partial": "Class Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#t:ClassName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "MOClass",
          "package": "MetaObject",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "MOClass",
          "package": "MetaObject",
          "partial": "MOClass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#t:MOClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "MethodAttached",
          "package": "MetaObject",
          "source": "src/MO-Compile-Class.html#MethodAttached",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "MethodAttached",
          "package": "MetaObject",
          "partial": "Method Attached",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#t:MethodAttached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "MkClass",
          "package": "MetaObject",
          "signature": "MkClass !c",
          "source": "src/MO-Compile-Class.html#AnyClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "MkClass",
          "package": "MetaObject",
          "partial": "Mk Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:MkClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "MkMOClass",
          "package": "MetaObject",
          "signature": "MkMOClass",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "MkMOClass",
          "package": "MetaObject",
          "partial": "Mk MOClass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:MkMOClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "MkMethodAttached",
          "package": "MetaObject",
          "signature": "MkMethodAttached !c !a",
          "source": "src/MO-Compile-Class.html#MethodAttached",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "MkMethodAttached",
          "package": "MetaObject",
          "partial": "Mk Method Attached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:MkMethodAttached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "_bless",
          "package": "MetaObject",
          "signature": "MethodName",
          "source": "src/MO-Compile-Class.html#_bless",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "_bless",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:_bless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "all_attribute_methods",
          "package": "MetaObject",
          "signature": "c -\u003e [AnyMethod m]",
          "source": "src/MO-Compile-Class.html#all_attribute_methods",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "all_attribute_methods",
          "normalized": "a-\u003e[AnyMethod b]",
          "package": "MetaObject",
          "signature": "c-\u003e[AnyMethod m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:all_attribute_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "all_attributes",
          "package": "MetaObject",
          "signature": "c -\u003e [Attribute m]",
          "source": "src/MO-Compile-Class.html#all_attributes",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "all_attributes",
          "normalized": "a-\u003e[Attribute b]",
          "package": "MetaObject",
          "signature": "c-\u003e[Attribute m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:all_attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "all_methods",
          "package": "MetaObject",
          "signature": "c -\u003e [AnyMethod m]",
          "source": "src/MO-Compile-Class.html#all_methods",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "all_methods",
          "normalized": "a-\u003e[AnyMethod b]",
          "package": "MetaObject",
          "signature": "c-\u003e[AnyMethod m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:all_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "all_regular_methods",
          "package": "MetaObject",
          "signature": "c -\u003e [AnyMethod m]",
          "source": "src/MO-Compile-Class.html#all_regular_methods",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "all_regular_methods",
          "normalized": "a-\u003e[AnyMethod b]",
          "package": "MetaObject",
          "signature": "c-\u003e[AnyMethod m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:all_regular_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "attributes",
          "package": "MetaObject",
          "signature": "c -\u003e [Attribute m]",
          "source": "src/MO-Compile-Class.html#attributes",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "attributes",
          "normalized": "a-\u003e[Attribute b]",
          "package": "MetaObject",
          "signature": "c-\u003e[Attribute m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "blessMOClass",
          "package": "MetaObject",
          "signature": "c -\u003e AnyMethod m",
          "source": "src/MO-Compile-Class.html#blessMOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "blessMOClass",
          "normalized": "a-\u003eAnyMethod b",
          "package": "MetaObject",
          "partial": "MOClass",
          "signature": "c-\u003eAnyMethod m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:blessMOClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "class_interface",
          "package": "MetaObject",
          "signature": "c -\u003e AnyResponder m",
          "source": "src/MO-Compile-Class.html#class_interface",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "class_interface",
          "normalized": "a-\u003eAnyResponder b",
          "package": "MetaObject",
          "signature": "c-\u003eAnyResponder m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:class_interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "class_name",
          "package": "MetaObject",
          "signature": "c -\u003e ClassName",
          "source": "src/MO-Compile-Class.html#class_name",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "class_name",
          "normalized": "a-\u003eClassName",
          "package": "MetaObject",
          "signature": "c-\u003eClassName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:class_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "class_precedence_list",
          "package": "MetaObject",
          "signature": "c -\u003e [AnyClass m]",
          "source": "src/MO-Compile-Class.html#class_precedence_list",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "class_precedence_list",
          "normalized": "a-\u003e[AnyClass b]",
          "package": "MetaObject",
          "signature": "c-\u003e[AnyClass m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:class_precedence_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "emptyMOClass",
          "package": "MetaObject",
          "signature": "MOClass m",
          "source": "src/MO-Compile-Class.html#emptyMOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "emptyMOClass",
          "package": "MetaObject",
          "partial": "MOClass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:emptyMOClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "merged_roles",
          "package": "MetaObject",
          "signature": "c -\u003e Role m",
          "source": "src/MO-Compile-Class.html#merged_roles",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "merged_roles",
          "normalized": "a-\u003eRole b",
          "package": "MetaObject",
          "signature": "c-\u003eRole m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:merged_roles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "moc_attributes",
          "package": "MetaObject",
          "signature": "[Attribute m]",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "moc_attributes",
          "normalized": "[Attribute a]",
          "package": "MetaObject",
          "signature": "[Attribute m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:moc_attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "moc_name",
          "package": "MetaObject",
          "signature": "ClassName",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "moc_name",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:moc_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "moc_parents",
          "package": "MetaObject",
          "signature": "[AnyClass m]",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "moc_parents",
          "normalized": "[AnyClass a]",
          "package": "MetaObject",
          "signature": "[AnyClass m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:moc_parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "moc_private_methods",
          "package": "MetaObject",
          "signature": "Collection (AnyMethod m)",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "moc_private_methods",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:moc_private_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "moc_public_methods",
          "package": "MetaObject",
          "signature": "Collection (AnyMethod m)",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "moc_public_methods",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:moc_public_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "moc_roles",
          "package": "MetaObject",
          "signature": "[Role m]",
          "source": "src/MO-Compile-Class.html#MOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "moc_roles",
          "normalized": "[Role a]",
          "package": "MetaObject",
          "signature": "[Role m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:moc_roles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "newMOClass",
          "package": "MetaObject",
          "signature": "MOClass m -\u003e MOClass m",
          "source": "src/MO-Compile-Class.html#newMOClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "newMOClass",
          "normalized": "MOClass a-\u003eMOClass a",
          "package": "MetaObject",
          "partial": "MOClass",
          "signature": "MOClass m-\u003eMOClass m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:newMOClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "private_methods",
          "package": "MetaObject",
          "signature": "c -\u003e Collection (AnyMethod m)",
          "source": "src/MO-Compile-Class.html#private_methods",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "private_methods",
          "normalized": "a-\u003eCollection(AnyMethod b)",
          "package": "MetaObject",
          "signature": "c-\u003eCollection(AnyMethod m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:private_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "public_methods",
          "package": "MetaObject",
          "signature": "c -\u003e Collection (AnyMethod m)",
          "source": "src/MO-Compile-Class.html#public_methods",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "public_methods",
          "normalized": "a-\u003eCollection(AnyMethod b)",
          "package": "MetaObject",
          "signature": "c-\u003eCollection(AnyMethod m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:public_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "roles",
          "package": "MetaObject",
          "signature": "c -\u003e [Role m]",
          "source": "src/MO-Compile-Class.html#roles",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "roles",
          "normalized": "a-\u003e[Role b]",
          "package": "MetaObject",
          "signature": "c-\u003e[Role m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:roles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Class",
          "name": "superclasses",
          "package": "MetaObject",
          "signature": "c -\u003e [AnyClass m]",
          "source": "src/MO-Compile-Class.html#superclasses",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile Class",
          "module": "MO.Compile.Class",
          "name": "superclasses",
          "normalized": "a-\u003e[AnyClass b]",
          "package": "MetaObject",
          "signature": "c-\u003e[AnyClass m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Class.html#v:superclasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "Role",
          "package": "MetaObject",
          "source": "src/MO-Compile-Role.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "Role",
          "package": "MetaObject",
          "partial": "Role",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "Role",
          "package": "MetaObject",
          "source": "src/MO-Compile-Role.html#Role",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "Role",
          "package": "MetaObject",
          "partial": "Role",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#t:Role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "MkRole",
          "package": "MetaObject",
          "signature": "MkRole",
          "source": "src/MO-Compile-Role.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "MkRole",
          "package": "MetaObject",
          "partial": "Mk Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:MkRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "all_using_role_inheritance",
          "package": "MetaObject",
          "signature": "Role m -\u003e (Role m -\u003e Collection a) -\u003e Collection a",
          "source": "src/MO-Compile-Role.html#all_using_role_inheritance",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "all_using_role_inheritance",
          "normalized": "Role a-\u003e(Role a-\u003eCollection b)-\u003eCollection b",
          "package": "MetaObject",
          "signature": "Role m-\u003e(Role m-\u003eCollection a)-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:all_using_role_inheritance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "all_using_role_shadowing",
          "package": "MetaObject",
          "signature": "Role m -\u003e (Role m -\u003e Collection a) -\u003e Collection a",
          "source": "src/MO-Compile-Role.html#all_using_role_shadowing",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "all_using_role_shadowing",
          "normalized": "Role a-\u003e(Role a-\u003eCollection b)-\u003eCollection b",
          "package": "MetaObject",
          "signature": "Role m-\u003e(Role m-\u003eCollection a)-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:all_using_role_shadowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "emptyRole",
          "package": "MetaObject",
          "signature": "Role m",
          "source": "src/MO-Compile-Role.html#emptyRole",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "emptyRole",
          "package": "MetaObject",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:emptyRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "parent_roles",
          "package": "MetaObject",
          "signature": "Role m -\u003e [Role m]",
          "source": "src/MO-Compile-Role.html#parent_roles",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "parent_roles",
          "normalized": "Role a-\u003e[Role a]",
          "package": "MetaObject",
          "signature": "Role m-\u003e[Role m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:parent_roles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "r_attributes",
          "package": "MetaObject",
          "signature": "[Attribute m]",
          "source": "src/MO-Compile-Role.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "r_attributes",
          "normalized": "[Attribute a]",
          "package": "MetaObject",
          "signature": "[Attribute m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:r_attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "r_private_methods",
          "package": "MetaObject",
          "signature": "Collection (AnyMethod m)",
          "source": "src/MO-Compile-Role.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "r_private_methods",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:r_private_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "r_public_methods",
          "package": "MetaObject",
          "signature": "Collection (AnyMethod m)",
          "source": "src/MO-Compile-Role.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "r_public_methods",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:r_public_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "r_roles",
          "package": "MetaObject",
          "signature": "[Role m]",
          "source": "src/MO-Compile-Role.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "r_roles",
          "normalized": "[Role a]",
          "package": "MetaObject",
          "signature": "[Role m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:r_roles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "role_attributes",
          "package": "MetaObject",
          "signature": "Role m -\u003e [Attribute m]",
          "source": "src/MO-Compile-Role.html#role_attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "role_attributes",
          "normalized": "Role a-\u003e[Attribute a]",
          "package": "MetaObject",
          "signature": "Role m-\u003e[Attribute m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:role_attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "role_private_methods",
          "package": "MetaObject",
          "signature": "Role m -\u003e Collection (AnyMethod m)",
          "source": "src/MO-Compile-Role.html#role_public_methods",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "role_private_methods",
          "normalized": "Role a-\u003eCollection(AnyMethod a)",
          "package": "MetaObject",
          "signature": "Role m-\u003eCollection(AnyMethod m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:role_private_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile.Role",
          "name": "role_public_methods",
          "package": "MetaObject",
          "signature": "Role m -\u003e Collection (AnyMethod m)",
          "source": "src/MO-Compile-Role.html#role_public_methods",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile Role",
          "module": "MO.Compile.Role",
          "name": "role_public_methods",
          "normalized": "Role a-\u003eCollection(AnyMethod a)",
          "package": "MetaObject",
          "signature": "Role m-\u003eCollection(AnyMethod m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile-Role.html#v:role_public_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "Compile",
          "package": "MetaObject",
          "source": "src/MO-Compile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "Compile",
          "package": "MetaObject",
          "partial": "Compile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "AnyMethod",
          "package": "MetaObject",
          "source": "src/MO-Compile.html#AnyMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "AnyMethod",
          "package": "MetaObject",
          "partial": "Any Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#t:AnyMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "Method",
          "package": "MetaObject",
          "source": "src/MO-Compile.html#Method",
          "type": "class"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "Method",
          "package": "MetaObject",
          "partial": "Method",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "MethodCompiled",
          "package": "MetaObject",
          "source": "src/MO-Compile.html#MethodCompiled",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "MethodCompiled",
          "package": "MetaObject",
          "partial": "Method Compiled",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#t:MethodCompiled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "MethodName",
          "package": "MetaObject",
          "source": "src/MO-Compile.html#MethodName",
          "type": "type"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "MethodName",
          "package": "MetaObject",
          "partial": "Method Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#t:MethodName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "SimpleMethod",
          "package": "MetaObject",
          "source": "src/MO-Compile.html#SimpleMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "SimpleMethod",
          "package": "MetaObject",
          "partial": "Simple Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#t:SimpleMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "MkMethod",
          "package": "MetaObject",
          "signature": "MkMethod !a",
          "source": "src/MO-Compile.html#AnyMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "MkMethod",
          "package": "MetaObject",
          "partial": "Mk Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:MkMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "MkMethodCompiled",
          "package": "MetaObject",
          "signature": "MkMethodCompiled",
          "source": "src/MO-Compile.html#MethodCompiled",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "MkMethodCompiled",
          "package": "MetaObject",
          "partial": "Mk Method Compiled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:MkMethodCompiled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "MkSimpleMethod",
          "package": "MetaObject",
          "signature": "MkSimpleMethod",
          "source": "src/MO-Compile.html#SimpleMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "MkSimpleMethod",
          "package": "MetaObject",
          "partial": "Mk Simple Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:MkSimpleMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "methodCompile",
          "package": "MetaObject",
          "signature": "a -\u003e MethodCompiled m",
          "source": "src/MO-Compile.html#methodCompile",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "methodCompile",
          "normalized": "a-\u003eMethodCompiled b",
          "package": "MetaObject",
          "partial": "Compile",
          "signature": "a-\u003eMethodCompiled m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:methodCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "methodName",
          "package": "MetaObject",
          "signature": "a -\u003e MethodName",
          "source": "src/MO-Compile.html#methodName",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "methodName",
          "normalized": "a-\u003eMethodName",
          "package": "MetaObject",
          "partial": "Name",
          "signature": "a-\u003eMethodName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:methodName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "runMC",
          "package": "MetaObject",
          "signature": "Arguments m -\u003e m (Invocant m)",
          "source": "src/MO-Compile.html#MethodCompiled",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "runMC",
          "normalized": "Arguments a-\u003ea(Invocant a)",
          "package": "MetaObject",
          "partial": "MC",
          "signature": "Arguments m-\u003em(Invocant m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:runMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "sm_definition",
          "package": "MetaObject",
          "signature": "MethodCompiled m",
          "source": "src/MO-Compile.html#SimpleMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "sm_definition",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:sm_definition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Compile",
          "name": "sm_name",
          "package": "MetaObject",
          "signature": "MethodName",
          "source": "src/MO-Compile.html#SimpleMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Compile",
          "module": "MO.Compile",
          "name": "sm_name",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Compile.html#v:sm_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "Run",
          "package": "MetaObject",
          "source": "src/MO-Run.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "Run",
          "package": "MetaObject",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "AnyResponder",
          "package": "MetaObject",
          "source": "src/MO-Run.html#AnyResponder",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "AnyResponder",
          "package": "MetaObject",
          "partial": "Any Responder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#t:AnyResponder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "MethodInvocation",
          "package": "MetaObject",
          "source": "src/MO-Run.html#MethodInvocation",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "MethodInvocation",
          "package": "MetaObject",
          "partial": "Method Invocation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#t:MethodInvocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a static method table.\n\u003c/p\u003e",
          "module": "MO.Run",
          "name": "MethodTable",
          "package": "MetaObject",
          "source": "src/MO-Run.html#MethodTable",
          "type": "data"
        },
        "index": {
          "description": "This is static method table",
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "MethodTable",
          "package": "MetaObject",
          "partial": "Method Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#t:MethodTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "NoResponse",
          "package": "MetaObject",
          "source": "src/MO-Run.html#NoResponse",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "NoResponse",
          "package": "MetaObject",
          "partial": "No Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#t:NoResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "ResponderInterface",
          "package": "MetaObject",
          "source": "src/MO-Run.html#ResponderInterface",
          "type": "class"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "ResponderInterface",
          "package": "MetaObject",
          "partial": "Responder Interface",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#t:ResponderInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "MkMethodInvocation",
          "package": "MetaObject",
          "signature": "MkMethodInvocation",
          "source": "src/MO-Run.html#MethodInvocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "MkMethodInvocation",
          "package": "MetaObject",
          "partial": "Mk Method Invocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:MkMethodInvocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "MkMethodTable",
          "package": "MetaObject",
          "signature": "MkMethodTable",
          "source": "src/MO-Run.html#MethodTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "MkMethodTable",
          "package": "MetaObject",
          "partial": "Mk Method Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:MkMethodTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "MkResponder",
          "package": "MetaObject",
          "signature": "MkResponder !(m c)",
          "source": "src/MO-Run.html#AnyResponder",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "MkResponder",
          "package": "MetaObject",
          "partial": "Mk Responder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:MkResponder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "NoResponse",
          "package": "MetaObject",
          "signature": "NoResponse",
          "source": "src/MO-Run.html#NoResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "NoResponse",
          "package": "MetaObject",
          "partial": "No Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:NoResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "__",
          "package": "MetaObject",
          "signature": "a -\u003e Invocant m",
          "source": "src/MO-Run.html#__",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "__",
          "normalized": "a-\u003eInvocant b",
          "package": "MetaObject",
          "signature": "a-\u003eInvocant m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "dispatch",
          "package": "MetaObject",
          "signature": "a -\u003e Invocant m -\u003e MethodInvocation m -\u003e m (Invocant m)",
          "source": "src/MO-Run.html#dispatch",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "dispatch",
          "normalized": "a-\u003eInvocant b-\u003eMethodInvocation b-\u003eb(Invocant b)",
          "package": "MetaObject",
          "signature": "a-\u003eInvocant m-\u003eMethodInvocation m-\u003em(Invocant m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:dispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "emptyResponder",
          "package": "MetaObject",
          "signature": "AnyResponder m",
          "source": "src/MO-Run.html#emptyResponder",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "emptyResponder",
          "package": "MetaObject",
          "partial": "Responder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:emptyResponder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "fromInvocant",
          "package": "MetaObject",
          "signature": "Arguments m -\u003e m b",
          "source": "src/MO-Run.html#fromInvocant",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "fromInvocant",
          "normalized": "Arguments a-\u003ea b",
          "package": "MetaObject",
          "partial": "Invocant",
          "signature": "Arguments m-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:fromInvocant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "fromMethodList",
          "package": "MetaObject",
          "signature": "[(MethodName, MethodCompiled m)] -\u003e m a",
          "source": "src/MO-Run.html#fromMethodList",
          "type": "method"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "fromMethodList",
          "normalized": "[(MethodName,MethodCompiled a)]-\u003ea b",
          "package": "MetaObject",
          "partial": "Method List",
          "signature": "[(MethodName,MethodCompiled m)]-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:fromMethodList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "ivDispatch",
          "package": "MetaObject",
          "signature": "Invocant m -\u003e MethodInvocation m -\u003e m (Invocant m)",
          "source": "src/MO-Run.html#ivDispatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "ivDispatch",
          "normalized": "Invocant a-\u003eMethodInvocation a-\u003ea(Invocant a)",
          "package": "MetaObject",
          "partial": "Dispatch",
          "signature": "Invocant m-\u003eMethodInvocation m-\u003em(Invocant m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:ivDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "mi_arguments",
          "package": "MetaObject",
          "signature": "(Arguments m)",
          "source": "src/MO-Run.html#MethodInvocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "mi_arguments",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:mi_arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "mi_name",
          "package": "MetaObject",
          "signature": "MethodName",
          "source": "src/MO-Run.html#MethodInvocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "mi_name",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:mi_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "mkArgs",
          "package": "MetaObject",
          "signature": "[Invocant m] -\u003e Arguments m",
          "source": "src/MO-Run.html#mkArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "mkArgs",
          "normalized": "[Invocant a]-\u003eArguments a",
          "package": "MetaObject",
          "partial": "Args",
          "signature": "[Invocant m]-\u003eArguments m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:mkArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Run",
          "name": "mt_methods",
          "package": "MetaObject",
          "signature": "(AtomMap (MethodCompiled m))",
          "source": "src/MO-Run.html#MethodTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Run",
          "module": "MO.Run",
          "name": "mt_methods",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Run.html#v:mt_methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eC3 method resolution order implementation based on algorithm described\n in \u003cem\u003eThe Python 2.3 Method Resolution Order, v1.4\u003c/em\u003e, by Michele Simionato\n available at \u003ca\u003ehttp://www.python.org/download/releases/2.3/mro/\u003c/a\u003e. Some\n tests also copied from Perl module Algorithm::C3.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003emain\u003c/code\u003e function contains the test cases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MO.Util.C3",
          "name": "C3",
          "package": "MetaObject",
          "source": "src/MO-Util-C3.html",
          "type": "module"
        },
        "index": {
          "description": "C3 method resolution order implementation based on algorithm described in The Python Method Resolution Order v1.4 by Michele Simionato available at http www.python.org download releases mro Some tests also copied from Perl module Algorithm C3 The main function contains the test cases",
          "hierarchy": "MO Util C3",
          "module": "MO.Util.C3",
          "name": "C3",
          "package": "MetaObject",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util-C3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the a linearization using C3 algorithm. Takes a function\n and an element. We can apply the function in this element to obtain\n its parents.\n\u003c/p\u003e",
          "module": "MO.Util.C3",
          "name": "linearize",
          "package": "MetaObject",
          "signature": "(a -\u003e m [a]) -\u003e a -\u003e m [a]",
          "source": "src/MO-Util-C3.html#linearize",
          "type": "function"
        },
        "index": {
          "description": "Returns the linearization using C3 algorithm Takes function and an element We can apply the function in this element to obtain its parents",
          "hierarchy": "MO Util C3",
          "module": "MO.Util.C3",
          "name": "linearize",
          "normalized": "(a-\u003eb[a])-\u003ea-\u003eb[a]",
          "package": "MetaObject",
          "signature": "(a-\u003em[a])-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util-C3.html#v:linearize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "Util",
          "package": "MetaObject",
          "source": "src/MO-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "Util",
          "package": "MetaObject",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "Collection",
          "package": "MetaObject",
          "source": "src/MO-Util.html#Collection",
          "type": "data"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "Collection",
          "package": "MetaObject",
          "partial": "Collection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#t:Collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "(?\u003c=\u003e?)",
          "package": "MetaObject",
          "signature": "a -\u003e b -\u003e Ordering",
          "source": "src/MO-Util.html#%3F%3C%3D%3E%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "(?\u003c=\u003e?) ?\u003c=\u003e?",
          "normalized": "a-\u003eb-\u003eOrdering",
          "package": "MetaObject",
          "signature": "a-\u003eb-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:-63--60--61--62--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "(?==?)",
          "package": "MetaObject",
          "signature": "a -\u003e b -\u003e Bool",
          "source": "src/MO-Util.html#%3F%3D%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "(?==?) ?==?",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "MetaObject",
          "signature": "a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:-63--61--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "MkCollection",
          "package": "MetaObject",
          "signature": "MkCollection",
          "source": "src/MO-Util.html#Collection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "MkCollection",
          "package": "MetaObject",
          "partial": "Mk Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:MkCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "add",
          "package": "MetaObject",
          "signature": "Atom -\u003e a -\u003e Collection a -\u003e m (Collection a)",
          "source": "src/MO-Util.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "add",
          "normalized": "Atom-\u003ea-\u003eCollection a-\u003eb(Collection a)",
          "package": "MetaObject",
          "signature": "Atom-\u003ea-\u003eCollection a-\u003em(Collection a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "addressOf",
          "package": "MetaObject",
          "signature": "a -\u003e Word",
          "source": "src/MO-Util.html#addressOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "addressOf",
          "normalized": "a-\u003eWord",
          "package": "MetaObject",
          "partial": "Of",
          "signature": "a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:addressOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "c_names",
          "package": "MetaObject",
          "signature": "AtomMap a",
          "source": "src/MO-Util.html#Collection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "c_names",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:c_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "c_objects",
          "package": "MetaObject",
          "signature": "Set a",
          "source": "src/MO-Util.html#Collection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "c_objects",
          "package": "MetaObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:c_objects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "cmap",
          "package": "MetaObject",
          "signature": "(a -\u003e b) -\u003e Collection a -\u003e Collection b",
          "source": "src/MO-Util.html#cmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "cmap",
          "normalized": "(a-\u003eb)-\u003eCollection a-\u003eCollection b",
          "package": "MetaObject",
          "signature": "(a-\u003eb)-\u003eCollection a-\u003eCollection b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:cmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "emptyCollection",
          "package": "MetaObject",
          "signature": "Collection a",
          "source": "src/MO-Util.html#emptyCollection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "emptyCollection",
          "package": "MetaObject",
          "partial": "Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:emptyCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "includes",
          "package": "MetaObject",
          "signature": "Collection a -\u003e a -\u003e Bool",
          "source": "src/MO-Util.html#includes",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "includes",
          "normalized": "Collection a-\u003ea-\u003eBool",
          "package": "MetaObject",
          "signature": "Collection a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:includes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "includes_all",
          "package": "MetaObject",
          "signature": "Collection a -\u003e [a] -\u003e Bool",
          "source": "src/MO-Util.html#includes_all",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "includes_all",
          "normalized": "Collection a-\u003e[a]-\u003eBool",
          "package": "MetaObject",
          "signature": "Collection a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:includes_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "includes_any",
          "package": "MetaObject",
          "signature": "Collection a -\u003e [a] -\u003e Bool",
          "source": "src/MO-Util.html#includes_any",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "includes_any",
          "normalized": "Collection a-\u003e[a]-\u003eBool",
          "package": "MetaObject",
          "signature": "Collection a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:includes_any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "includes_any_name",
          "package": "MetaObject",
          "signature": "Collection a -\u003e [Atom] -\u003e Bool",
          "source": "src/MO-Util.html#includes_any_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "includes_any_name",
          "normalized": "Collection a-\u003e[Atom]-\u003eBool",
          "package": "MetaObject",
          "signature": "Collection a-\u003e[Atom]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:includes_any_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "includes_name",
          "package": "MetaObject",
          "signature": "Collection a -\u003e Atom -\u003e Bool",
          "source": "src/MO-Util.html#includes_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "includes_name",
          "normalized": "Collection a-\u003eAtom-\u003eBool",
          "package": "MetaObject",
          "signature": "Collection a-\u003eAtom-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:includes_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "insert",
          "package": "MetaObject",
          "signature": "Atom -\u003e a -\u003e Collection a -\u003e Collection a",
          "source": "src/MO-Util.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "insert",
          "normalized": "Atom-\u003ea-\u003eCollection a-\u003eCollection a",
          "package": "MetaObject",
          "signature": "Atom-\u003ea-\u003eCollection a-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "items",
          "package": "MetaObject",
          "signature": "Collection a -\u003e [a]",
          "source": "src/MO-Util.html#items",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "items",
          "normalized": "Collection a-\u003e[a]",
          "package": "MetaObject",
          "signature": "Collection a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "items_named",
          "package": "MetaObject",
          "signature": "Collection a -\u003e [(Atom, a)]",
          "source": "src/MO-Util.html#items_named",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "items_named",
          "normalized": "Collection a-\u003e[(Atom,a)]",
          "package": "MetaObject",
          "signature": "Collection a-\u003e[(Atom,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:items_named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "merge",
          "package": "MetaObject",
          "signature": "[Collection a] -\u003e [a]",
          "source": "src/MO-Util.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "merge",
          "normalized": "[Collection a]-\u003e[a]",
          "package": "MetaObject",
          "signature": "[Collection a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "merge'",
          "package": "MetaObject",
          "signature": "[Collection a] -\u003e AtomMap a",
          "source": "src/MO-Util.html#merge%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "merge'",
          "normalized": "[Collection a]-\u003eAtomMap a",
          "package": "MetaObject",
          "signature": "[Collection a]-\u003eAtomMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:merge-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "merge_collection",
          "package": "MetaObject",
          "signature": "[Collection a] -\u003e Collection a",
          "source": "src/MO-Util.html#merge_collection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "merge_collection",
          "normalized": "[Collection a]-\u003eCollection a",
          "package": "MetaObject",
          "signature": "[Collection a]-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:merge_collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "newCollection",
          "package": "MetaObject",
          "signature": "[(Atom, a)] -\u003e Collection a",
          "source": "src/MO-Util.html#newCollection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "newCollection",
          "normalized": "[(Atom,a)]-\u003eCollection a",
          "package": "MetaObject",
          "partial": "Collection",
          "signature": "[(Atom,a)]-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:newCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "newCollection'",
          "package": "MetaObject",
          "signature": "(a -\u003e Atom) -\u003e [a] -\u003e Collection a",
          "source": "src/MO-Util.html#newCollection%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "newCollection'",
          "normalized": "(a-\u003eAtom)-\u003e[a]-\u003eCollection a",
          "package": "MetaObject",
          "partial": "Collection'",
          "signature": "(a-\u003eAtom)-\u003e[a]-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:newCollection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "newCollectionMap",
          "package": "MetaObject",
          "signature": "AtomMap a -\u003e Collection a",
          "source": "src/MO-Util.html#newCollectionMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "newCollectionMap",
          "normalized": "AtomMap a-\u003eCollection a",
          "package": "MetaObject",
          "partial": "Collection Map",
          "signature": "AtomMap a-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:newCollectionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "on",
          "package": "MetaObject",
          "signature": "(b -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e c",
          "source": "src/MO-Util.html#on",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "on",
          "normalized": "(a-\u003ea-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003ec-\u003eb",
          "package": "MetaObject",
          "signature": "(b-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "remove",
          "package": "MetaObject",
          "signature": "Atom -\u003e a -\u003e Collection a -\u003e m (Collection a)",
          "source": "src/MO-Util.html#remove",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "remove",
          "normalized": "Atom-\u003ea-\u003eCollection a-\u003eb(Collection a)",
          "package": "MetaObject",
          "signature": "Atom-\u003ea-\u003eCollection a-\u003em(Collection a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "shadow",
          "package": "MetaObject",
          "signature": "[Collection a] -\u003e [a]",
          "source": "src/MO-Util.html#shadow",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "shadow",
          "normalized": "[Collection a]-\u003e[a]",
          "package": "MetaObject",
          "signature": "[Collection a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:shadow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "shadow'",
          "package": "MetaObject",
          "signature": "[Collection a] -\u003e AtomMap a",
          "source": "src/MO-Util.html#shadow%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "shadow'",
          "normalized": "[Collection a]-\u003eAtomMap a",
          "package": "MetaObject",
          "signature": "[Collection a]-\u003eAtomMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:shadow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "shadow_collection",
          "package": "MetaObject",
          "signature": "[Collection a] -\u003e Collection a",
          "source": "src/MO-Util.html#shadow_collection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "shadow_collection",
          "normalized": "[Collection a]-\u003eCollection a",
          "package": "MetaObject",
          "signature": "[Collection a]-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:shadow_collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "sym_inheritance",
          "package": "MetaObject",
          "signature": "b -\u003e (b -\u003e [b]) -\u003e (b -\u003e Collection a) -\u003e Collection a",
          "source": "src/MO-Util.html#sym_inheritance",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "sym_inheritance",
          "normalized": "a-\u003e(a-\u003e[a])-\u003e(a-\u003eCollection b)-\u003eCollection b",
          "package": "MetaObject",
          "signature": "b-\u003e(b-\u003e[b])-\u003e(b-\u003eCollection a)-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:sym_inheritance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "sym_merged_parents",
          "package": "MetaObject",
          "signature": "b -\u003e (b -\u003e [b]) -\u003e (b -\u003e Collection a) -\u003e Collection a",
          "source": "src/MO-Util.html#sym_merged_parents",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "sym_merged_parents",
          "normalized": "a-\u003e(a-\u003e[a])-\u003e(a-\u003eCollection b)-\u003eCollection b",
          "package": "MetaObject",
          "signature": "b-\u003e(b-\u003e[b])-\u003e(b-\u003eCollection a)-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:sym_merged_parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "sym_shadowing",
          "package": "MetaObject",
          "signature": "b -\u003e (b -\u003e [b]) -\u003e (b -\u003e Collection a) -\u003e Collection a",
          "source": "src/MO-Util.html#sym_shadowing",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "sym_shadowing",
          "normalized": "a-\u003e(a-\u003e[a])-\u003e(a-\u003eCollection b)-\u003eCollection b",
          "package": "MetaObject",
          "signature": "b-\u003e(b-\u003e[b])-\u003e(b-\u003eCollection a)-\u003eCollection a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:sym_shadowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen called, \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e outputs the string in its first argument, before \nreturning the second argument as its result. The \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function is not \nreferentially transparent, and should only be used for debugging, or for \nmonitoring execution. Some implementations of \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e may decorate the string \nthat's output to indicate that you're tracing. The function is implemented on\ntop of \u003ccode\u003e\u003ca\u003eputTraceMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MO.Util",
          "name": "trace",
          "package": "MetaObject",
          "signature": "String -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "When called trace outputs the string in its first argument before returning the second argument as its result The trace function is not referentially transparent and should only be used for debugging or for monitoring execution Some implementations of trace may decorate the string that output to indicate that you re tracing The function is implemented on top of putTraceMsg",
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "trace",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MetaObject",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "traceM",
          "package": "MetaObject",
          "signature": "String -\u003e m ()",
          "source": "src/MO-Util.html#traceM",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "traceM",
          "normalized": "String-\u003ea()",
          "package": "MetaObject",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:traceM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MO.Util",
          "name": "traceShow",
          "package": "MetaObject",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/MO-Util.html#traceShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "MO Util",
          "module": "MO.Util",
          "name": "traceShow",
          "normalized": "a-\u003eb-\u003eb",
          "package": "MetaObject",
          "partial": "Show",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MetaObject/docs/MO-Util.html#v:traceShow"
      }
    }
  ]
]