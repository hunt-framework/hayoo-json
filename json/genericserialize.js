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
        "word": "genericserialize"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements serialization to/from a subset of R5RS s-expressions.\n   Several limitations currently exist:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vectors are not recognized or generated.\n\u003c/li\u003e\u003cli\u003e (Quasi)quote notation is not supported.\n\u003c/li\u003e\u003cli\u003e Constructor names are parsed case-sensitively.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Generics.Serialization.SExp",
          "name": "SExp",
          "package": "genericserialize",
          "source": "src/Data-Generics-Serialization-SExp.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements serialization to from subset of R5RS s-expressions Several limitations currently exist Vectors are not recognized or generated Quasi quote notation is not supported Constructor names are parsed case-sensitively",
          "hierarchy": "Data Generics Serialization SExp",
          "module": "Data.Generics.Serialization.SExp",
          "name": "SExp",
          "package": "genericserialize",
          "partial": "SExp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-SExp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize an arbitrary value from an s-expression.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.SExp",
          "name": "sexpDeserialize",
          "package": "genericserialize",
          "signature": "m a",
          "source": "src/Data-Generics-Serialization-SExp.html#sexpDeserialize",
          "type": "function"
        },
        "index": {
          "description": "Deserialize an arbitrary value from an s-expression",
          "hierarchy": "Data Generics Serialization SExp",
          "module": "Data.Generics.Serialization.SExp",
          "name": "sexpDeserialize",
          "package": "genericserialize",
          "partial": "Deserialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-SExp.html#v:sexpDeserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize an arbitrary value to an s-expression.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.SExp",
          "name": "sexpSerialize",
          "package": "genericserialize",
          "signature": "a -\u003e m ()",
          "source": "src/Data-Generics-Serialization-SExp.html#sexpSerialize",
          "type": "function"
        },
        "index": {
          "description": "Serialize an arbitrary value to an s-expression",
          "hierarchy": "Data Generics Serialization SExp",
          "module": "Data.Generics.Serialization.SExp",
          "name": "sexpSerialize",
          "normalized": "a-\u003eb()",
          "package": "genericserialize",
          "partial": "Serialize",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-SExp.html#v:sexpSerialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a small number of tricky functions used to implement\n (de)serializers.  User code should not need to import this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "Standard",
          "package": "genericserialize",
          "source": "src/Data-Generics-Serialization-Standard.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides small number of tricky functions used to implement de serializers User code should not need to import this library",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "Standard",
          "package": "genericserialize",
          "partial": "Standard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute two monadic actions in sequence, returning the value of the first.\n This is mainly useful with parser combinators.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "(=\u003e\u003e)",
          "package": "genericserialize",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Data-Generics-Serialization-Standard.html#%3D%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Execute two monadic actions in sequence returning the value of the first This is mainly useful with parser combinators",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "(=\u003e\u003e) =\u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "genericserialize",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:-61--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a monadic action, piping the result through a pure function.  This\n is the same as flip liftM, and has the same fixity as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "(\u003e\u003e$)",
          "package": "genericserialize",
          "signature": "m a -\u003e (a -\u003e b) -\u003e m b",
          "source": "src/Data-Generics-Serialization-Standard.html#%3E%3E%24",
          "type": "function"
        },
        "index": {
          "description": "Execute monadic action piping the result through pure function This is the same as flip liftM and has the same fixity as",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "(\u003e\u003e$) \u003e\u003e$",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "genericserialize",
          "signature": "m a-\u003e(a-\u003eb)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:-62--62--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string at the rightmost occurence of a character matching a predicate.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "breakr",
          "package": "genericserialize",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-Generics-Serialization-Standard.html#breakr",
          "type": "function"
        },
        "index": {
          "description": "Split string at the rightmost occurence of character matching predicate",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "breakr",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "genericserialize",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:breakr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a string.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "escape",
          "package": "genericserialize",
          "signature": "Char -\u003e [Char] -\u003e [Char] -\u003e String -\u003e String",
          "source": "src/Data-Generics-Serialization-Standard.html#escape",
          "type": "function"
        },
        "index": {
          "description": "Escape string",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "escape",
          "normalized": "Char-\u003e[Char]-\u003e[Char]-\u003eString-\u003eString",
          "package": "genericserialize",
          "signature": "Char-\u003e[Char]-\u003e[Char]-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eext1Q\u003c/a\u003e\u003c/code\u003e, except for a binary type constructor\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "ext2Q",
          "package": "genericserialize",
          "signature": "t d1 d2 -\u003e q) -\u003e d -\u003e q",
          "source": "src/Data-Generics-Serialization-Standard.html#ext2Q",
          "type": "function"
        },
        "index": {
          "description": "Like ext1Q except for binary type constructor",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "ext2Q",
          "normalized": "a b b-\u003ec)-\u003eb-\u003ec",
          "package": "genericserialize",
          "signature": "t d d-\u003eq)-\u003ed-\u003eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:ext2Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e object into any monad, using the imbedding defined by\n fail and return.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "fromMaybeM",
          "package": "genericserialize",
          "signature": "String -\u003e Maybe a -\u003e m a",
          "source": "src/Data-Generics-Serialization-Standard.html#fromMaybeM",
          "type": "function"
        },
        "index": {
          "description": "Convert Maybe object into any monad using the imbedding defined by fail and return",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "fromMaybeM",
          "normalized": "String-\u003eMaybe a-\u003eb a",
          "package": "genericserialize",
          "partial": "Maybe",
          "signature": "String-\u003eMaybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:fromMaybeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an object using monadic actions to read the \u003ccode\u003e\u003ca\u003eConstr\u003c/a\u003e\u003c/code\u003e and all children.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "gDeser",
          "package": "genericserialize",
          "signature": "m a) -\u003e m d",
          "source": "src/Data-Generics-Serialization-Standard.html#gDeser",
          "type": "function"
        },
        "index": {
          "description": "Build an object using monadic actions to read the Constr and all children",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "gDeser",
          "normalized": "a b)-\u003ea c",
          "package": "genericserialize",
          "partial": "Deser",
          "signature": "m a)-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:gDeser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a monadic action over each element in an existing data object; also\n return the \u003ccode\u003e\u003ca\u003eConstr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "gSerial",
          "package": "genericserialize",
          "signature": "a -\u003e m ()) -\u003e d -\u003e (Constr, m ())",
          "source": "src/Data-Generics-Serialization-Standard.html#gSerial",
          "type": "function"
        },
        "index": {
          "description": "Run monadic action over each element in an existing data object also return the Constr",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "gSerial",
          "normalized": "a-\u003eb())-\u003ec-\u003e(Constr,b())",
          "package": "genericserialize",
          "partial": "Serial",
          "signature": "a-\u003em())-\u003ed-\u003e(Constr,m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:gSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one character and process it using a list of actions.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "getcase",
          "package": "genericserialize",
          "signature": "(a -\u003e m b) -\u003e [(a, m b)] -\u003e m b",
          "source": "src/Data-Generics-Serialization-Standard.html#getcase",
          "type": "function"
        },
        "index": {
          "description": "Get one character and process it using list of actions",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "getcase",
          "normalized": "(a-\u003eb c)-\u003e[(a,b c)]-\u003eb c",
          "package": "genericserialize",
          "signature": "(a-\u003em b)-\u003e[(a,m b)]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:getcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one character, then run a parser (e.g. space).\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "getv_t",
          "package": "genericserialize",
          "signature": "m b -\u003e m a",
          "source": "src/Data-Generics-Serialization-Standard.html#getv_t",
          "type": "function"
        },
        "index": {
          "description": "Get one character then run parser e.g space",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "getv_t",
          "normalized": "a b-\u003ea c",
          "package": "genericserialize",
          "signature": "m b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:getv_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return one or more characters parsed using a recognition function.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "manySat",
          "package": "genericserialize",
          "signature": "(a -\u003e Bool) -\u003e m [a]",
          "source": "src/Data-Generics-Serialization-Standard.html#manySat",
          "type": "function"
        },
        "index": {
          "description": "Parse and return one or more characters parsed using recognition function",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "manySat",
          "normalized": "(a-\u003eBool)-\u003eb[a]",
          "package": "genericserialize",
          "partial": "Sat",
          "signature": "(a-\u003eBool)-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:manySat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a designated character, error on a different character.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "match",
          "package": "genericserialize",
          "signature": "Char -\u003e m ()",
          "source": "src/Data-Generics-Serialization-Standard.html#match",
          "type": "function"
        },
        "index": {
          "description": "Parse designated character error on different character",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "match",
          "normalized": "Char-\u003ea()",
          "package": "genericserialize",
          "signature": "Char-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a string, error on discrepancy.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "matchs",
          "package": "genericserialize",
          "signature": "[Char] -\u003e m ()",
          "source": "src/Data-Generics-Serialization-Standard.html#matchs",
          "type": "function"
        },
        "index": {
          "description": "Match string error on discrepancy",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "matchs",
          "normalized": "[Char]-\u003ea()",
          "package": "genericserialize",
          "signature": "[Char]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:matchs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a designated character, then any amount of whitespace.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "matchws",
          "package": "genericserialize",
          "signature": "Char -\u003e m ()",
          "source": "src/Data-Generics-Serialization-Standard.html#matchws",
          "type": "function"
        },
        "index": {
          "description": "Parse designated character then any amount of whitespace",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "matchws",
          "normalized": "Char-\u003ea()",
          "package": "genericserialize",
          "signature": "Char-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:matchws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an escape and unescape function at the same time.  This allows\n you to only type the translations once.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "mkescape",
          "package": "genericserialize",
          "signature": "Char -\u003e [Char] -\u003e [Char] -\u003e (String -\u003e String, String -\u003e Maybe String)",
          "source": "src/Data-Generics-Serialization-Standard.html#mkescape",
          "type": "function"
        },
        "index": {
          "description": "Create an escape and unescape function at the same time This allows you to only type the translations once",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "mkescape",
          "normalized": "Char-\u003e[Char]-\u003e[Char]-\u003e(String-\u003eString,String-\u003eMaybe String)",
          "package": "genericserialize",
          "signature": "Char-\u003e[Char]-\u003e[Char]-\u003e(String-\u003eString,String-\u003eMaybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:mkescape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeek at one character and process it using a list of actions.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "peekcase",
          "package": "genericserialize",
          "signature": "m b -\u003e (a -\u003e m b) -\u003e [(a, m b)] -\u003e m b",
          "source": "src/Data-Generics-Serialization-Standard.html#peekcase",
          "type": "function"
        },
        "index": {
          "description": "Peek at one character and process it using list of actions",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "peekcase",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003e[(c,a b)]-\u003ea b",
          "package": "genericserialize",
          "signature": "m b-\u003e(a-\u003em b)-\u003e[(a,m b)]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:peekcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a value using a \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance.  This differs from \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e in that it\n uses a general monad and type infromation for error reporting.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "readM",
          "package": "genericserialize",
          "signature": "String -\u003e m a",
          "source": "src/Data-Generics-Serialization-Standard.html#readM",
          "type": "function"
        },
        "index": {
          "description": "Parse value using Read instance This differs from read in that it uses general monad and type infromation for error reporting",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "readM",
          "normalized": "String-\u003ea b",
          "package": "genericserialize",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:readM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse as many spaces as possible.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "space",
          "package": "genericserialize",
          "signature": "m ()",
          "source": "src/Data-Generics-Serialization-Standard.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parse as many spaces as possible",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "space",
          "normalized": "a()",
          "package": "genericserialize",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnescape a string.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "unescape",
          "package": "genericserialize",
          "signature": "Char -\u003e [Char] -\u003e [Char] -\u003e String -\u003e Maybe String",
          "source": "src/Data-Generics-Serialization-Standard.html#unescape",
          "type": "function"
        },
        "index": {
          "description": "Unescape string",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "unescape",
          "normalized": "Char-\u003e[Char]-\u003e[Char]-\u003eString-\u003eMaybe String",
          "package": "genericserialize",
          "signature": "Char-\u003e[Char]-\u003e[Char]-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:unescape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a monadic action repeatedly until it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e; all \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n values are returned in a list.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Standard",
          "name": "unfoldM",
          "package": "genericserialize",
          "signature": "m (Maybe a) -\u003e m [a]",
          "source": "src/Data-Generics-Serialization-Standard.html#unfoldM",
          "type": "function"
        },
        "index": {
          "description": "Run monadic action repeatedly until it returns Nothing all Just values are returned in list",
          "hierarchy": "Data Generics Serialization Standard",
          "module": "Data.Generics.Serialization.Standard",
          "name": "unfoldM",
          "normalized": "a(Maybe b)-\u003ea[b]",
          "package": "genericserialize",
          "signature": "m(Maybe a)-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Standard.html#v:unfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a limited form of stream used by the serializers,\n and utility functions for using serializers on lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "Streams",
          "package": "genericserialize",
          "source": "src/Data-Generics-Serialization-Streams.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides limited form of stream used by the serializers and utility functions for using serializers on lists",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "Streams",
          "package": "genericserialize",
          "partial": "Streams",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of \u003ccode\u003e\u003ca\u003eMonadWStream\u003c/a\u003e\u003c/code\u003e using difference lists.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "ListBuild",
          "package": "genericserialize",
          "source": "src/Data-Generics-Serialization-Streams.html#ListBuild",
          "type": "data"
        },
        "index": {
          "description": "An implementation of MonadWStream using difference lists",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "ListBuild",
          "package": "genericserialize",
          "partial": "List Build",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#t:ListBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of \u003ccode\u003e\u003ca\u003eMonadRStream\u003c/a\u003e\u003c/code\u003e using lists.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "ListRead",
          "package": "genericserialize",
          "source": "src/Data-Generics-Serialization-Streams.html#ListRead",
          "type": "data"
        },
        "index": {
          "description": "An implementation of MonadRStream using lists",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "ListRead",
          "package": "genericserialize",
          "partial": "List Read",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#t:ListRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of readable streams.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "MonadRStream",
          "package": "genericserialize",
          "source": "src/Data-Generics-Serialization-Streams.html#MonadRStream",
          "type": "class"
        },
        "index": {
          "description": "The class of readable streams",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "MonadRStream",
          "package": "genericserialize",
          "partial": "Monad RStream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#t:MonadRStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of streams that support write operations.  e is the type\n of elements written.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "MonadWStream",
          "package": "genericserialize",
          "source": "src/Data-Generics-Serialization-Streams.html#MonadWStream",
          "type": "class"
        },
        "index": {
          "description": "The class of streams that support write operations is the type of elements written",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "MonadWStream",
          "package": "genericserialize",
          "partial": "Monad WStream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#t:MonadWStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action in a \u003ccode\u003e\u003ca\u003eMonadWStream\u003c/a\u003e\u003c/code\u003e to produce a list, using \u003ccode\u003e\u003ca\u003eListBuild\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "buildList",
          "package": "genericserialize",
          "signature": "ListBuild e () -\u003e [e]",
          "source": "src/Data-Generics-Serialization-Streams.html#buildList",
          "type": "function"
        },
        "index": {
          "description": "Run an action in MonadWStream to produce list using ListBuild",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "buildList",
          "normalized": "ListBuild a()-\u003e[a]",
          "package": "genericserialize",
          "partial": "List",
          "signature": "ListBuild e()-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#v:buildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one element.  Invokes \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if there are no more to read.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "getv",
          "package": "genericserialize",
          "signature": "m e",
          "source": "src/Data-Generics-Serialization-Streams.html#getv",
          "type": "method"
        },
        "index": {
          "description": "Read one element Invokes fail if there are no more to read",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "getv",
          "package": "genericserialize",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#v:getv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamine the next element without removing it.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "peekv",
          "package": "genericserialize",
          "signature": "m (Maybe e)",
          "source": "src/Data-Generics-Serialization-Streams.html#peekv",
          "type": "method"
        },
        "index": {
          "description": "Examine the next element without removing it",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "peekv",
          "package": "genericserialize",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#v:peekv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Serialization.Streams",
          "name": "putv",
          "package": "genericserialize",
          "signature": "[e] -\u003e m ()",
          "source": "src/Data-Generics-Serialization-Streams.html#putv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "putv",
          "normalized": "[a]-\u003eb()",
          "package": "genericserialize",
          "signature": "[e]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#v:putv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action in a \u003ccode\u003e\u003ca\u003eMonadRStream\u003c/a\u003e\u003c/code\u003e to consume a list, using \u003ccode\u003e\u003ca\u003eListRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Serialization.Streams",
          "name": "withList",
          "package": "genericserialize",
          "signature": "ListRead e a -\u003e [e] -\u003e Maybe a",
          "source": "src/Data-Generics-Serialization-Streams.html#withList",
          "type": "function"
        },
        "index": {
          "description": "Run an action in MonadRStream to consume list using ListRead",
          "hierarchy": "Data Generics Serialization Streams",
          "module": "Data.Generics.Serialization.Streams",
          "name": "withList",
          "normalized": "ListRead a b-\u003e[a]-\u003eMaybe b",
          "package": "genericserialize",
          "partial": "List",
          "signature": "ListRead e a-\u003e[e]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genericserialize/docs/Data-Generics-Serialization-Streams.html#v:withList"
      }
    }
  ]
]