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
        "word": "first-class-patterns"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious types defined inductively as type families or data families\n on type-lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Tuple",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Base-Tuple.html",
          "type": "module"
        },
        "index": {
          "description": "Various types defined inductively as type families or data families on type-lists",
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Tuple",
          "package": "first-class-patterns",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Base.Tuple",
          "name": "Distribute",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Base-Tuple.html#Distribute",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Distribute",
          "package": "first-class-patterns",
          "partial": "Distribute",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#t:Distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurried functions. We have\n\u003c/p\u003e\u003cpre\u003eFun '[x1, ..., xn] r   =   x1 -\u003e ... -\u003e xn -\u003e r\u003c/pre\u003e",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Fun",
          "package": "first-class-patterns",
          "signature": "Fun",
          "type": "function"
        },
        "index": {
          "description": "Curried functions We have Fun x1 xn x1 xn",
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Fun",
          "package": "first-class-patterns",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#t:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Base.Tuple",
          "name": "Map",
          "package": "first-class-patterns",
          "signature": "Map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Map",
          "package": "first-class-patterns",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuples with types given by \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Tuple",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Base-Tuple.html#Tuple",
          "type": "data"
        },
        "index": {
          "description": "Tuples with types given by xs",
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "Tuple",
          "package": "first-class-patterns",
          "partial": "Tuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#t:Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation of tuples.\n\u003c/p\u003e",
          "module": "Data.Pattern.Base.Tuple",
          "name": "(\u003c\u003e)",
          "package": "first-class-patterns",
          "signature": "Tuple xs -\u003e Tuple ys -\u003e Tuple (xs :++: ys)",
          "source": "src/Data-Pattern-Base-Tuple.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatenation of tuples",
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "Tuple a-\u003eTuple b-\u003eTuple(a b)",
          "package": "first-class-patterns",
          "signature": "Tuple xs-\u003eTuple ys-\u003eTuple(xs ys)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Base.Tuple",
          "name": "distribute",
          "package": "first-class-patterns",
          "signature": "f (Tuple xs) -\u003e Tuple (Map f xs)",
          "source": "src/Data-Pattern-Base-Tuple.html#distribute",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "distribute",
          "normalized": "a(Tuple b)-\u003eTuple(Map a b)",
          "package": "first-class-patterns",
          "signature": "f(Tuple xs)-\u003eTuple(Map f xs)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#v:distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe singleton tuple\n\u003c/p\u003e",
          "module": "Data.Pattern.Base.Tuple",
          "name": "oneT",
          "package": "first-class-patterns",
          "signature": "a -\u003e Tuple `[a]`",
          "source": "src/Data-Pattern-Base-Tuple.html#oneT",
          "type": "function"
        },
        "index": {
          "description": "The singleton tuple",
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "oneT",
          "normalized": "a-\u003eTuple[a]",
          "package": "first-class-patterns",
          "signature": "a-\u003eTuple[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#v:oneT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a tuple by applying it to a curried function.\n\u003c/p\u003e",
          "module": "Data.Pattern.Base.Tuple",
          "name": "runTuple",
          "package": "first-class-patterns",
          "signature": "Tuple xs -\u003e Fun xs r -\u003e r",
          "source": "src/Data-Pattern-Base-Tuple.html#runTuple",
          "type": "function"
        },
        "index": {
          "description": "Runs tuple by applying it to curried function",
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "runTuple",
          "normalized": "Tuple a-\u003eFun a b-\u003eb",
          "package": "first-class-patterns",
          "partial": "Tuple",
          "signature": "Tuple xs-\u003eFun xs r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#v:runTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty tuple\n\u003c/p\u003e",
          "module": "Data.Pattern.Base.Tuple",
          "name": "zeroT",
          "package": "first-class-patterns",
          "signature": "Tuple `[]`",
          "source": "src/Data-Pattern-Base-Tuple.html#zeroT",
          "type": "function"
        },
        "index": {
          "description": "The empty tuple",
          "hierarchy": "Data Pattern Base Tuple",
          "module": "Data.Pattern.Base.Tuple",
          "name": "zeroT",
          "normalized": "Tuple[]",
          "package": "first-class-patterns",
          "signature": "Tuple[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-Tuple.html#v:zeroT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-level lists. These lists only describe the types, but contain\n no data. That is, they are phantom types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pattern.Base.TypeList",
          "name": "TypeList",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Base-TypeList.html",
          "type": "module"
        },
        "index": {
          "description": "Type-level lists These lists only describe the types but contain no data That is they are phantom types",
          "hierarchy": "Data Pattern Base TypeList",
          "module": "Data.Pattern.Base.TypeList",
          "name": "TypeList",
          "package": "first-class-patterns",
          "partial": "Type List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-TypeList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation of lists. Instances:\n\u003c/p\u003e\u003cpre\u003e type instance Nil     :++: xs = xs\n type instance (h:*:t) :++: xs = h :*: (t :++: xs)\n\u003c/pre\u003e",
          "module": "Data.Pattern.Base.TypeList",
          "name": ":++:",
          "package": "first-class-patterns",
          "signature": ":++:",
          "type": "function"
        },
        "index": {
          "description": "Concatenation of lists Instances type instance Nil xs xs type instance xs xs",
          "hierarchy": "Data Pattern Base TypeList",
          "module": "Data.Pattern.Base.TypeList",
          "name": ":++:",
          "package": "first-class-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base-TypeList.html#t::-43--43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main types used in the implementation of first-class patterns:\n \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eClause\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pattern.Base",
          "name": "Base",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Base.html",
          "type": "module"
        },
        "index": {
          "description": "The main types used in the implementation of first-class patterns Pattern and Clause",
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "Base",
          "package": "first-class-patterns",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern-match clauses. Typically something of the form\n\u003c/p\u003e\u003cpre\u003epattern \u003ccode\u003e\u003ca\u003e-\u003e\u003e\u003c/a\u003e\u003c/code\u003e function\u003c/pre\u003e\u003cp\u003ewhere the function takes one argument for each variable bound by\n   the pattern.\n\u003c/p\u003e\u003cp\u003eClauses can be constructed with \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e-\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, run with \u003ccode\u003etryMatch\u003c/code\u003e,\n   and manipulated by the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instances. In\n   particular, the \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e operator from the \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e class\n   is the way to list multiple cases in a pattern.\n\u003c/p\u003e",
          "module": "Data.Pattern.Base",
          "name": "Clause",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Base.html#Clause",
          "type": "data"
        },
        "index": {
          "description": "Pattern-match clauses Typically something of the form pattern function where the function takes one argument for each variable bound by the pattern Clauses can be constructed with run with tryMatch and manipulated by the Monad and MonadPlus instances In particular the operator from the Alternative class is the way to list multiple cases in pattern",
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "Clause",
          "package": "first-class-patterns",
          "partial": "Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#t:Clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pattern type. A value of type \u003ccode\u003ePattern vars a\u003c/code\u003e is a pattern\n   which matches values of type \u003ccode\u003ea\u003c/code\u003e and binds variables with types\n   given by the type-list \u003ccode\u003evars\u003c/code\u003e.  For example, something of type\n\u003c/p\u003e\u003cpre\u003e Pattern (a :*: c :*: Nil) (a,b,c)\n\u003c/pre\u003e\u003cp\u003eis a pattern which matches against a triple and binds values of\n   types \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e. (A pattern of this type can be constructed as\n   \u003ccode\u003etup3 var __ var\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eMany \"normal\" patterns can be conveniently defined using \u003ccode\u003emk0\u003c/code\u003e,\n   \u003ccode\u003emk1\u003c/code\u003e, \u003ccode\u003emk2\u003c/code\u003e, and so on.\n\u003c/p\u003e",
          "module": "Data.Pattern.Base",
          "name": "Pattern",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Base.html#Pattern",
          "type": "newtype"
        },
        "index": {
          "description": "The pattern type value of type Pattern vars is pattern which matches values of type and binds variables with types given by the type-list vars For example something of type Pattern Nil is pattern which matches against triple and binds values of types and pattern of this type can be constructed as tup3 var var Many normal patterns can be conveniently defined using mk0 mk1 mk2 and so on",
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "Pattern",
          "package": "first-class-patterns",
          "partial": "Pattern",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eClause\u003c/a\u003e\u003c/code\u003e from a pattern and a function which takes\n   one argument for each variable bound by the pattern. For example,\n\u003c/p\u003e\u003cpre\u003e pair __ nothing     -\u003e\u003e 3\n pair var nothing    -\u003e\u003e \\x -\u003e x + 3\n pair var (just var) -\u003e\u003e \\x y -\u003e x + y + 3\n\u003c/pre\u003e",
          "module": "Data.Pattern.Base",
          "name": "(-\u003e\u003e)",
          "package": "first-class-patterns",
          "signature": "Pattern vars a -\u003e Fun vars r -\u003e Clause a r",
          "source": "src/Data-Pattern-Base.html#-%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Construct Clause from pattern and function which takes one argument for each variable bound by the pattern For example pair nothing pair var nothing pair var just var",
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "(-\u003e\u003e) -\u003e\u003e",
          "normalized": "Pattern a b-\u003eFun a c-\u003eClause b c",
          "package": "first-class-patterns",
          "signature": "Pattern vars a-\u003eFun vars r-\u003eClause a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#v:-45--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative binary operation\n\u003c/p\u003e",
          "module": "Data.Pattern.Base",
          "name": "(\u003c|\u003e)",
          "package": "first-class-patterns",
          "signature": "forall a.  f a -\u003e f a -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "An associative binary operation",
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b c d-\u003ec d-\u003ec d",
          "package": "first-class-patterns",
          "signature": "forall a. f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Base",
          "name": "Pattern",
          "package": "first-class-patterns",
          "signature": "Pattern",
          "source": "src/Data-Pattern-Base.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "Pattern",
          "package": "first-class-patterns",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#v:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the underlying computation\n constituting a \u003ccode\u003e\u003ca\u003eClause\u003c/a\u003e\u003c/code\u003e. This\n function is not intended to be used\n directly; instead, see \u003ccode\u003ematch\u003c/code\u003e,\n \u003ccode\u003etryMatch\u003c/code\u003e, \u003ccode\u003emmatch\u003c/code\u003e, and \u003ccode\u003eelim\u003c/code\u003e from\n \u003ca\u003eData.Pattern.Common\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Base",
          "name": "runClause",
          "package": "first-class-patterns",
          "signature": "Clause a r -\u003e ReaderT a Maybe r",
          "source": "src/Data-Pattern-Base.html#runClause",
          "type": "function"
        },
        "index": {
          "description": "Extract the underlying computation constituting Clause This function is not intended to be used directly instead see match tryMatch mmatch and elim from Data.Pattern.Common",
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "runClause",
          "normalized": "Clause a b-\u003eReaderT a Maybe b",
          "package": "first-class-patterns",
          "partial": "Clause",
          "signature": "Clause a r-\u003eReaderT a Maybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#v:runClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Base",
          "name": "runPattern",
          "package": "first-class-patterns",
          "signature": "a -\u003e Maybe (Tuple vars)",
          "source": "src/Data-Pattern-Base.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Base",
          "module": "Data.Pattern.Base",
          "name": "runPattern",
          "normalized": "a-\u003eMaybe(Tuple b)",
          "package": "first-class-patterns",
          "partial": "Pattern",
          "signature": "a-\u003eMaybe(Tuple vars)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Base.html#v:runPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of useful pattern combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pattern.Common",
          "name": "Common",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern-Common.html",
          "type": "module"
        },
        "index": {
          "description": "collection of useful pattern combinators",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "Common",
          "package": "first-class-patterns",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient infix synonym for \u003ccode\u003e\u003ca\u003eview\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "(--\u003e)",
          "package": "first-class-patterns",
          "signature": "(a -\u003e b) -\u003e Pattern vs b -\u003e Pattern vs a",
          "source": "src/Data-Pattern-Common.html#--%3E",
          "type": "function"
        },
        "index": {
          "description": "Convenient infix synonym for view",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "(--\u003e) --\u003e",
          "normalized": "(a-\u003eb)-\u003ePattern c b-\u003ePattern c a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eb)-\u003ePattern vs b-\u003ePattern vs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient infix synonym for \u003ccode\u003e\u003ca\u003etryView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "(-?\u003e)",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe b) -\u003e Pattern vs b -\u003e Pattern vs a",
          "source": "src/Data-Pattern-Common.html#-%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Convenient infix synonym for tryView",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "(-?\u003e) -?\u003e",
          "normalized": "(a-\u003eMaybe b)-\u003ePattern c b-\u003ePattern c a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eMaybe b)-\u003ePattern vs b-\u003ePattern vs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:-45--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunctive (and) pattern: matches a value against two patterns,\n   and succeeds only if both succeed, binding variables from both.\n\u003c/p\u003e\u003cpre\u003e(/\\) = \u003ccode\u003e\u003ca\u003emk2\u003c/a\u003e\u003c/code\u003e (\\a -\u003e Just (a,a))\u003c/pre\u003e",
          "module": "Data.Pattern.Common",
          "name": "(/\\)",
          "package": "first-class-patterns",
          "signature": "Pattern vs1 a -\u003e Pattern vs2 a -\u003e Pattern (vs1 :++: vs2) a",
          "source": "src/Data-Pattern-Common.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "Conjunctive and pattern matches value against two patterns and succeeds only if both succeed binding variables from both mk2 Just",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "(/\\) /\\",
          "normalized": "Pattern a b-\u003ePattern a b-\u003ePattern(a a)b",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs a-\u003ePattern(vs vs)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunctive (or) pattern: matches a value against the first\n   pattern, or against the second pattern if the first one fails.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "(\\/)",
          "package": "first-class-patterns",
          "signature": "Pattern as a -\u003e Pattern as a -\u003e Pattern as a",
          "source": "src/Data-Pattern-Common.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "Disjunctive or pattern matches value against the first pattern or against the second pattern if the first one fails",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "(\\/) \\/",
          "normalized": "Pattern a b-\u003ePattern a b-\u003ePattern a b",
          "package": "first-class-patterns",
          "signature": "Pattern as a-\u003ePattern as a-\u003ePattern as a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWildcard pattern: always succeeds, binding no variables. (This is\n   written as two underscores.)\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "__",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` a",
          "source": "src/Data-Pattern-Common.html#__",
          "type": "function"
        },
        "index": {
          "description": "Wildcard pattern always succeeds binding no variables This is written as two underscores",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "__",
          "normalized": "Pattern[]a",
          "package": "first-class-patterns",
          "signature": "Pattern[]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a cons.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "cons",
          "package": "first-class-patterns",
          "signature": "Pattern vs1 a -\u003e Pattern vs2 [a] -\u003e Pattern (vs1 :++: vs2) [a]",
          "source": "src/Data-Pattern-Common.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Match cons",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "cons",
          "normalized": "Pattern a b-\u003ePattern a[b]-\u003ePattern(a a)[b]",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs[a]-\u003ePattern(vs vs)[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant pattern: test for equality to the given constant.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecst x = is (==x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "cst",
          "package": "first-class-patterns",
          "signature": "a -\u003e Pattern `[]` a",
          "source": "src/Data-Pattern-Common.html#cst",
          "type": "function"
        },
        "index": {
          "description": "Constant pattern test for equality to the given constant cst is",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "cst",
          "normalized": "a-\u003ePattern[]a",
          "package": "first-class-patterns",
          "signature": "a-\u003ePattern[]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:cst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eelim = flip \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eUseful for anonymous matching (or for building \"eliminators\",\n like \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e). For example:\n\u003c/p\u003e\u003cpre\u003e either withLeft withRight = elim $\n              left  var -\u003e\u003e withLeft\n          \u003c|\u003e right var -\u003e\u003e withRight\n\u003c/pre\u003e",
          "module": "Data.Pattern.Common",
          "name": "elim",
          "package": "first-class-patterns",
          "signature": "Clause a r -\u003e a -\u003e r",
          "source": "src/Data-Pattern-Common.html#elim",
          "type": "function"
        },
        "index": {
          "description": "elim flip match Useful for anonymous matching or for building eliminators like maybe and either For example either withLeft withRight elim left var withLeft right var withRight",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "elim",
          "normalized": "Clause a b-\u003ea-\u003eb",
          "package": "first-class-patterns",
          "signature": "Clause a r-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:elim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "false",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` Bool",
          "source": "src/Data-Pattern-Common.html#false",
          "type": "function"
        },
        "index": {
          "description": "Match False",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "false",
          "normalized": "Pattern[]Bool",
          "package": "first-class-patterns",
          "signature": "Pattern[]Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egive b\u003c/code\u003e always succeeds, ignoring the matched value and\n   providing the value \u003ccode\u003eb\u003c/code\u003e instead.  Useful in conjunction with\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for providing default values in cases that would otherwise\n   not bind any values.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "give",
          "package": "first-class-patterns",
          "signature": "b -\u003e Pattern `[b]` a",
          "source": "src/Data-Pattern-Common.html#give",
          "type": "function"
        },
        "index": {
          "description": "give always succeeds ignoring the matched value and providing the value instead Useful in conjunction with for providing default values in cases that would otherwise not bind any values",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "give",
          "normalized": "a-\u003ePattern[a]b",
          "package": "first-class-patterns",
          "signature": "b-\u003ePattern[b]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:give"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate pattern. Succeeds if the given predicate yields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n   fails otherwise.\n\u003c/p\u003e\u003cp\u003eCan be used with \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for some uses similar to pattern guards:\n\u003c/p\u003e\u003cpre\u003e match a $\n      left (var /\\ is even) -\u003e\u003e id\n  \u003c|\u003e left  __              -\u003e\u003e const 0\n  \u003c|\u003e right __              -\u003e\u003e const 1\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eis\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003emk0\u003c/a\u003e\u003c/code\u003e but with \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n ()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "is",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Bool) -\u003e Pattern `[]` a",
          "source": "src/Data-Pattern-Common.html#is",
          "type": "function"
        },
        "index": {
          "description": "Predicate pattern Succeeds if the given predicate yields True fails otherwise Can be used with for some uses similar to pattern guards match left var is even id left const right const Note that is is like mk0 but with Bool instead of Maybe",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "is",
          "normalized": "(a-\u003eBool)-\u003ePattern[]a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eBool)-\u003ePattern[]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "just",
          "package": "first-class-patterns",
          "signature": "Pattern vs a -\u003e Pattern vs (Maybe a)",
          "source": "src/Data-Pattern-Common.html#just",
          "type": "function"
        },
        "index": {
          "description": "Match the Just constructor of Maybe",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "just",
          "normalized": "Pattern a b-\u003ePattern a(Maybe b)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "left",
          "package": "first-class-patterns",
          "signature": "Pattern vs a -\u003e Pattern vs (Either a b)",
          "source": "src/Data-Pattern-Common.html#left",
          "type": "function"
        },
        "index": {
          "description": "Match the Left constructor of Either",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "left",
          "normalized": "Pattern a b-\u003ePattern a(Either b c)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e satisfies the identity \u003ccode\u003ematch a c = fromJust (tryMatch a c)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "match",
          "package": "first-class-patterns",
          "signature": "a -\u003e Clause a r -\u003e r",
          "source": "src/Data-Pattern-Common.html#match",
          "type": "function"
        },
        "index": {
          "description": "match satisfies the identity match fromJust tryMatch",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "match",
          "normalized": "a-\u003eClause a b-\u003eb",
          "package": "first-class-patterns",
          "signature": "a-\u003eClause a r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Common",
          "name": "mk0",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe ()) -\u003e Pattern `[]` a",
          "source": "src/Data-Pattern-Common.html#mk0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "mk0",
          "normalized": "(a-\u003eMaybe())-\u003ePattern[]a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eMaybe())-\u003ePattern[]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:mk0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Common",
          "name": "mk1",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe b) -\u003e Pattern vs b -\u003e Pattern vs a",
          "source": "src/Data-Pattern-Common.html#mk1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "mk1",
          "normalized": "(a-\u003eMaybe b)-\u003ePattern c b-\u003ePattern c a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eMaybe b)-\u003ePattern vs b-\u003ePattern vs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:mk1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Common",
          "name": "mk2",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe (b, c)) -\u003e Pattern vs1 b -\u003e Pattern vs2 c -\u003e Pattern (vs1 :++: vs2) a",
          "source": "src/Data-Pattern-Common.html#mk2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "mk2",
          "normalized": "(a-\u003eMaybe(b,c))-\u003ePattern d b-\u003ePattern d c-\u003ePattern(d d)a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eMaybe(b,c))-\u003ePattern vs b-\u003ePattern vs c-\u003ePattern(vs vs)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:mk2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Common",
          "name": "mk3",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe (b, c, d)) -\u003e Pattern vs1 b -\u003e Pattern vs2 c -\u003e Pattern vs3 d -\u003e Pattern (vs1 :++: (vs2 :++: vs3)) a",
          "source": "src/Data-Pattern-Common.html#mk3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "mk3",
          "normalized": "(a-\u003eMaybe(b,c,d))-\u003ePattern e b-\u003ePattern e c-\u003ePattern e d-\u003ePattern(e(e e))a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eMaybe(b,c,d))-\u003ePattern vs b-\u003ePattern vs c-\u003ePattern vs d-\u003ePattern(vs(vs vs))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:mk3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Common",
          "name": "mk4",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe (b, c, d, e)) -\u003e Pattern vs1 b -\u003e Pattern vs2 c -\u003e Pattern vs3 d -\u003e Pattern vs4 e -\u003e Pattern (vs1 :++: (vs2 :++: (vs3 :++: vs4))) a",
          "source": "src/Data-Pattern-Common.html#mk4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "mk4",
          "normalized": "(a-\u003eMaybe(b,c,d,e))-\u003ePattern f b-\u003ePattern f c-\u003ePattern f d-\u003ePattern f e-\u003ePattern(f(f(f f)))a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eMaybe(b,c,d,e))-\u003ePattern vs b-\u003ePattern vs c-\u003ePattern vs d-\u003ePattern vs e-\u003ePattern(vs(vs(vs vs)))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:mk4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pattern.Common",
          "name": "mk5",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe (b, c, d, e, f)) -\u003e Pattern vs1 b -\u003e Pattern vs2 c -\u003e Pattern vs3 d -\u003e Pattern vs4 e -\u003e Pattern vs5 f -\u003e Pattern (vs1 :++: (vs2 :++: (vs3 :++: (vs4 :++: vs5)))) a",
          "source": "src/Data-Pattern-Common.html#mk5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "mk5",
          "normalized": "(a-\u003eMaybe(b,c,d,e,f))-\u003ePattern g b-\u003ePattern g c-\u003ePattern g d-\u003ePattern g e-\u003ePattern g f-\u003ePattern(g(g(g(g g))))a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eMaybe(b,c,d,e,f))-\u003ePattern vs b-\u003ePattern vs c-\u003ePattern vs d-\u003ePattern vs e-\u003ePattern vs f-\u003ePattern(vs(vs(vs(vs vs))))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:mk5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emmatch m p = m \u003e\u003e= \u003ccode\u003e\u003ca\u003eelim\u003c/a\u003e\u003c/code\u003e p\u003c/pre\u003e\u003cp\u003eUseful for applicative-looking monadic pattern matching, as in\n\u003c/p\u003e\u003cpre\u003e ex7 :: IO ()\n ex7 = mmatch getLine $\n       cst \"\" -\u003e\u003e return ()\n   \u003c|\u003e var    -\u003e\u003e putStrLn . (\"You said \" ++)\n\u003c/pre\u003e",
          "module": "Data.Pattern.Common",
          "name": "mmatch",
          "package": "first-class-patterns",
          "signature": "m a -\u003e Clause a (m b) -\u003e m b",
          "source": "src/Data-Pattern-Common.html#mmatch",
          "type": "function"
        },
        "index": {
          "description": "mmatch elim Useful for applicative-looking monadic pattern matching as in ex7 IO ex7 mmatch getLine cst return var putStrLn You said",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "mmatch",
          "normalized": "a b-\u003eClause b(a c)-\u003ea c",
          "package": "first-class-patterns",
          "signature": "m a-\u003eClause a(m b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:mmatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the empty list.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "nil",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` [a]",
          "source": "src/Data-Pattern-Common.html#nil",
          "type": "function"
        },
        "index": {
          "description": "Match the empty list",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "nil",
          "normalized": "Pattern[][a]",
          "package": "first-class-patterns",
          "signature": "Pattern[][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "nothing",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` (Maybe a)",
          "source": "src/Data-Pattern-Common.html#nothing",
          "type": "function"
        },
        "index": {
          "description": "Match the Nothing constructor of Maybe",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "nothing",
          "normalized": "Pattern[](Maybe a)",
          "package": "first-class-patterns",
          "signature": "Pattern[](Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pattern match against a pair from a pair of patterns.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "pair",
          "package": "first-class-patterns",
          "signature": "Pattern vs1 a -\u003e Pattern vs2 b -\u003e Pattern (vs1 :++: vs2) (a, b)",
          "source": "src/Data-Pattern-Common.html#pair",
          "type": "function"
        },
        "index": {
          "description": "Construct pattern match against pair from pair of patterns",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "pair",
          "normalized": "Pattern a b-\u003ePattern a c-\u003ePattern(a a)(b,c)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs b-\u003ePattern(vs vs)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure pattern: never succeeds.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "pfail",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` a",
          "source": "src/Data-Pattern-Common.html#pfail",
          "type": "function"
        },
        "index": {
          "description": "Failure pattern never succeeds",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "pfail",
          "normalized": "Pattern[]a",
          "package": "first-class-patterns",
          "signature": "Pattern[]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:pfail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epfilter p\u003c/code\u003e matches every element of a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e data structure\n   against the pattern \u003ccode\u003ep\u003c/code\u003e, discarding elements that do not match.\n   From the matching elements, binds a list of values corresponding\n   to each pattern variable.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "pfilter",
          "package": "first-class-patterns",
          "signature": "Pattern vs a -\u003e Pattern (Map [] vs) (t a)",
          "source": "src/Data-Pattern-Common.html#pfilter",
          "type": "function"
        },
        "index": {
          "description": "pfilter matches every element of Foldable data structure against the pattern discarding elements that do not match From the matching elements binds list of values corresponding to each pattern variable",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "pfilter",
          "normalized": "Pattern a b-\u003ePattern(Map[]a)(c b)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern(Map[]vs)(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:pfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epfoldr p f b\u003c/code\u003e matches every element of a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e data\n   structure against the pattern \u003ccode\u003ep\u003c/code\u003e, discarding elements that do\n   not match.  Folds over the bindings produced by the matching\n   elements to produce a summary value.\n\u003c/p\u003e\u003cp\u003eThe same functionality could be achieved by matching with\n   \u003ccode\u003epfilter p\u003c/code\u003e and then appropriately combining and folding the\n   resulting lists of bound values.  In particular, if \u003ccode\u003ep\u003c/code\u003e binds\n   only one value we have\n\u003c/p\u003e\u003cpre\u003e match t (pfoldr p f b -\u003e\u003e id) === match t (pfilter p -\u003e\u003e foldr f b)\n\u003c/pre\u003e\u003cp\u003eHowever, when \u003ccode\u003ep\u003c/code\u003e binds more than one value, it can be convenient\n   to be able to process the bindings from each match together,\n   rather than having to deal with them once they are separated out\n   into separate lists.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "pfoldr",
          "package": "first-class-patterns",
          "signature": "Pattern vs a -\u003e Fun vs (b -\u003e b) -\u003e b -\u003e Pattern `[b]` (t a)",
          "source": "src/Data-Pattern-Common.html#pfoldr",
          "type": "function"
        },
        "index": {
          "description": "pfoldr matches every element of Foldable data structure against the pattern discarding elements that do not match Folds over the bindings produced by the matching elements to produce summary value The same functionality could be achieved by matching with pfilter and then appropriately combining and folding the resulting lists of bound values In particular if binds only one value we have match pfoldr id match pfilter foldr However when binds more than one value it can be convenient to be able to process the bindings from each match together rather than having to deal with them once they are separated out into separate lists",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "pfoldr",
          "normalized": "Pattern a b-\u003eFun a(c-\u003ec)-\u003ec-\u003ePattern[c](d b)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003eFun vs(b-\u003eb)-\u003eb-\u003ePattern[b](t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:pfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epmap p\u003c/code\u003e matches every element of a \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e data\n   structure against the pattern \u003ccode\u003ep\u003c/code\u003e.  The entire match fails if any\n   of the elements fail to match \u003ccode\u003ep\u003c/code\u003e.  If all the elements match,\n   binds a \u003ccode\u003et\u003c/code\u003e-structure full of bound values corresponding to each\n   variable bound in \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "pmap",
          "package": "first-class-patterns",
          "signature": "Pattern vs a -\u003e Pattern (Map t vs) (t a)",
          "source": "src/Data-Pattern-Common.html#pmap",
          "type": "function"
        },
        "index": {
          "description": "pmap matches every element of Traversable data structure against the pattern The entire match fails if any of the elements fail to match If all the elements match binds structure full of bound values corresponding to each variable bound in",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "pmap",
          "normalized": "Pattern a b-\u003ePattern(Map c a)(c b)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern(Map t vs)(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:pmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "right",
          "package": "first-class-patterns",
          "signature": "Pattern vs b -\u003e Pattern vs (Either a b)",
          "source": "src/Data-Pattern-Common.html#right",
          "type": "function"
        },
        "index": {
          "description": "Match the Right constructor of Either",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "right",
          "normalized": "Pattern a b-\u003ePattern a(Either c b)",
          "package": "first-class-patterns",
          "signature": "Pattern vs b-\u003ePattern vs(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a natural number which is the successor of another natural\n   (and match the predecessor with a nested pattern).  Together,\n   \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esuc\u003c/a\u003e\u003c/code\u003e allow viewing \u003ccode\u003eIntegral\u003c/code\u003e types as Peano numbers.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003esuc\u003c/a\u003e\u003c/code\u003e never matches negative numbers.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "suc",
          "package": "first-class-patterns",
          "signature": "Pattern vs a -\u003e Pattern vs a",
          "source": "src/Data-Pattern-Common.html#suc",
          "type": "function"
        },
        "index": {
          "description": "Match natural number which is the successor of another natural and match the predecessor with nested pattern Together zero and suc allow viewing Integral types as Peano numbers Note that suc never matches negative numbers",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "suc",
          "normalized": "Pattern a b-\u003ePattern a b",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:suc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "true",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` Bool",
          "source": "src/Data-Pattern-Common.html#true",
          "type": "function"
        },
        "index": {
          "description": "Match True",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "true",
          "normalized": "Pattern[]Bool",
          "package": "first-class-patterns",
          "signature": "Pattern[]Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Runs\" a \u003ccode\u003e\u003ca\u003eClause\u003c/a\u003e\u003c/code\u003e, by matching it against a value and returning\n   a result if it matches, or \u003ccode\u003eNothing\u003c/code\u003e if the match fails.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "tryMatch",
          "package": "first-class-patterns",
          "signature": "a -\u003e Clause a r -\u003e Maybe r",
          "source": "src/Data-Pattern-Common.html#tryMatch",
          "type": "function"
        },
        "index": {
          "description": "Runs Clause by matching it against value and returning result if it matches or Nothing if the match fails",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "tryMatch",
          "normalized": "a-\u003eClause a b-\u003eMaybe b",
          "package": "first-class-patterns",
          "partial": "Match",
          "signature": "a-\u003eClause a r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:tryMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial view pattern: do some (possibly failing) computation,\n   then pattern match on the result if the computation is successful.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "tryView",
          "package": "first-class-patterns",
          "signature": "(a -\u003e Maybe b) -\u003e Pattern vs b -\u003e Pattern vs a",
          "source": "src/Data-Pattern-Common.html#tryView",
          "type": "function"
        },
        "index": {
          "description": "Partial view pattern do some possibly failing computation then pattern match on the result if the computation is successful",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "tryView",
          "normalized": "(a-\u003eMaybe b)-\u003ePattern c b-\u003ePattern c a",
          "package": "first-class-patterns",
          "partial": "View",
          "signature": "(a-\u003eMaybe b)-\u003ePattern vs b-\u003ePattern vs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:tryView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "tup0",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` ()",
          "source": "src/Data-Pattern-Common.html#tup0",
          "type": "function"
        },
        "index": {
          "description": "synonym for unit",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "tup0",
          "normalized": "Pattern[]()",
          "package": "first-class-patterns",
          "signature": "Pattern[]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:tup0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003epair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "tup2",
          "package": "first-class-patterns",
          "signature": "Pattern vs1 a -\u003e Pattern vs2 b -\u003e Pattern (vs1 :++: vs2) (a, b)",
          "source": "src/Data-Pattern-Common.html#tup2",
          "type": "function"
        },
        "index": {
          "description": "synonym for pair",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "tup2",
          "normalized": "Pattern a b-\u003ePattern a c-\u003ePattern(a a)(b,c)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs b-\u003ePattern(vs vs)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:tup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a 3-tuple.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "tup3",
          "package": "first-class-patterns",
          "signature": "Pattern vs1 a -\u003e Pattern vs2 b -\u003e Pattern vs3 c -\u003e Pattern (vs1 :++: (vs2 :++: vs3)) (a, b, c)",
          "source": "src/Data-Pattern-Common.html#tup3",
          "type": "function"
        },
        "index": {
          "description": "Match tuple",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "tup3",
          "normalized": "Pattern a b-\u003ePattern a c-\u003ePattern a d-\u003ePattern(a(a a))(b,c,d)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs b-\u003ePattern vs c-\u003ePattern(vs(vs vs))(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a 4-tuple.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "tup4",
          "package": "first-class-patterns",
          "signature": "Pattern vs1 a -\u003e Pattern vs2 b -\u003e Pattern vs3 c -\u003e Pattern vs4 d -\u003e Pattern (vs1 :++: (vs2 :++: (vs3 :++: vs4))) (a, b, c, d)",
          "source": "src/Data-Pattern-Common.html#tup4",
          "type": "function"
        },
        "index": {
          "description": "Match tuple",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "tup4",
          "normalized": "Pattern a b-\u003ePattern a c-\u003ePattern a d-\u003ePattern a e-\u003ePattern(a(a(a a)))(b,c,d,e)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs b-\u003ePattern vs c-\u003ePattern vs d-\u003ePattern(vs(vs(vs vs)))(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:tup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a 5-tuple.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "tup5",
          "package": "first-class-patterns",
          "signature": "Pattern vs1 a -\u003e Pattern vs2 b -\u003e Pattern vs3 c -\u003e Pattern vs4 d -\u003e Pattern vs5 e -\u003e Pattern (vs1 :++: (vs2 :++: (vs3 :++: (vs4 :++: vs5)))) (a, b, c, d, e)",
          "source": "src/Data-Pattern-Common.html#tup5",
          "type": "function"
        },
        "index": {
          "description": "Match tuple",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "tup5",
          "normalized": "Pattern a b-\u003ePattern a c-\u003ePattern a d-\u003ePattern a e-\u003ePattern a f-\u003ePattern(a(a(a(a a))))(b,c,d,e,f)",
          "package": "first-class-patterns",
          "signature": "Pattern vs a-\u003ePattern vs b-\u003ePattern vs c-\u003ePattern vs d-\u003ePattern vs e-\u003ePattern(vs(vs(vs(vs vs))))(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:tup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict match on the unit value \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "unit",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` ()",
          "source": "src/Data-Pattern-Common.html#unit",
          "type": "function"
        },
        "index": {
          "description": "strict match on the unit value",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "unit",
          "normalized": "Pattern[]()",
          "package": "first-class-patterns",
          "signature": "Pattern[]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable pattern: always succeeds, and binds the value to a variable.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "var",
          "package": "first-class-patterns",
          "signature": "Pattern `[a]` a",
          "source": "src/Data-Pattern-Common.html#var",
          "type": "function"
        },
        "index": {
          "description": "Variable pattern always succeeds and binds the value to variable",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "var",
          "normalized": "Pattern[a]a",
          "package": "first-class-patterns",
          "signature": "Pattern[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView pattern: do some computation, then pattern match on the\n   result.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "view",
          "package": "first-class-patterns",
          "signature": "(a -\u003e b) -\u003e Pattern vs b -\u003e Pattern vs a",
          "source": "src/Data-Pattern-Common.html#view",
          "type": "function"
        },
        "index": {
          "description": "View pattern do some computation then pattern match on the result",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "view",
          "normalized": "(a-\u003eb)-\u003ePattern c b-\u003ePattern c a",
          "package": "first-class-patterns",
          "signature": "(a-\u003eb)-\u003ePattern vs b-\u003ePattern vs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch zero.\n\u003c/p\u003e",
          "module": "Data.Pattern.Common",
          "name": "zero",
          "package": "first-class-patterns",
          "signature": "Pattern `[]` a",
          "source": "src/Data-Pattern-Common.html#zero",
          "type": "function"
        },
        "index": {
          "description": "Match zero",
          "hierarchy": "Data Pattern Common",
          "module": "Data.Pattern.Common",
          "name": "zero",
          "normalized": "Pattern[]a",
          "package": "first-class-patterns",
          "signature": "Pattern[]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern-Common.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main module for first-class-patterns; to use the library it\n should suffice to import this module.  For a quick start using the\n library, see the examples below.\n\u003c/p\u003e\u003cp\u003eIf you want to read further, start with \u003ca\u003eData.Pattern.Base\u003c/a\u003e, which\n defines the basic pattern type and some basic combinators.  Then\n read \u003ca\u003eData.Pattern.Common\u003c/a\u003e, which defines a number of convenient\n combinators for constructing various sorts of patterns.\n\u003c/p\u003e\u003cp\u003eAs an example, the following functions, \u003ccode\u003eex1\u003c/code\u003e and \u003ccode\u003eex2\u003c/code\u003e, are\n semantically equivalent:\n\u003c/p\u003e\u003cpre\u003e\n  ex1, ex2 :: Num a =\u003e Either a (a, a) -\u003e a\n  ex1 a = \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e a $\n            \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecst\u003c/a\u003e\u003c/code\u003e 4)         \u003ccode\u003e\u003ca\u003e-\u003e\u003e\u003c/a\u003e\u003c/code\u003e 0\n        \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003evar\u003c/a\u003e\u003c/code\u003e             \u003ccode\u003e\u003ca\u003e-\u003e\u003e\u003c/a\u003e\u003c/code\u003e id\n        \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eright\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etup2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003evar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003evar\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e-\u003e\u003e\u003c/a\u003e\u003c/code\u003e (+)\n  ex2 a = case a of\n            Left 4      -\u003e 0\n            Left x      -\u003e x\n            Right (x,y) -\u003e x+y\n\u003c/pre\u003e\u003cp\u003eAlso, when optimisation is turned on, GHC will compile them to the\n same code.\n\u003c/p\u003e\u003cp\u003eXXX add more examples here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pattern",
          "name": "Pattern",
          "package": "first-class-patterns",
          "source": "src/Data-Pattern.html",
          "type": "module"
        },
        "index": {
          "description": "The main module for first-class-patterns to use the library it should suffice to import this module For quick start using the library see the examples below If you want to read further start with Data.Pattern.Base which defines the basic pattern type and some basic combinators Then read Data.Pattern.Common which defines number of convenient combinators for constructing various sorts of patterns As an example the following functions ex1 and ex2 are semantically equivalent ex1 ex2 Num Either ex1 match left cst left var id right tup2 var var ex2 case of Left Left Right Also when optimisation is turned on GHC will compile them to the same code XXX add more examples here",
          "hierarchy": "Data Pattern",
          "module": "Data.Pattern",
          "name": "Pattern",
          "package": "first-class-patterns",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/first-class-patterns/docs/Data-Pattern.html#"
      }
    }
  ]
]