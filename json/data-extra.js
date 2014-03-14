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
        "word": "data-extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions for dealing with Bool.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bool.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Bool-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions for dealing with Bool",
          "hierarchy": "Data Bool Extra",
          "module": "Data.Bool.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Bool-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebool false true p = if p then true else false\n\u003c/p\u003e",
          "module": "Data.Bool.Extra",
          "name": "bool",
          "package": "data-extra",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Data-Bool-Extra.html#bool",
          "type": "function"
        },
        "index": {
          "description": "bool false true if then true else false",
          "hierarchy": "Data Bool Extra",
          "module": "Data.Bool.Extra",
          "name": "bool",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "data-extra",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Bool-Extra.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econd false true p v = if p v then true v else false v\n\u003c/p\u003e",
          "module": "Data.Bool.Extra",
          "name": "cond",
          "package": "data-extra",
          "signature": "(a -\u003e b) -\u003e (a -\u003e b) -\u003e (a -\u003e Bool) -\u003e a -\u003e b",
          "source": "src/Data-Bool-Extra.html#cond",
          "type": "function"
        },
        "index": {
          "description": "cond false true if then true else false",
          "hierarchy": "Data Bool Extra",
          "module": "Data.Bool.Extra",
          "name": "cond",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eBool)-\u003ea-\u003eb",
          "package": "data-extra",
          "signature": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eBool)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Bool-Extra.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions for dealing with Either.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Either.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Either-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions for dealing with Either",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the left value or a default.\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "fromLeft",
          "package": "data-extra",
          "signature": "a -\u003e Either a b -\u003e a",
          "source": "src/Data-Either-Extra.html#fromLeft",
          "type": "function"
        },
        "index": {
          "description": "Extract the left value or default",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "fromLeft",
          "normalized": "a-\u003eEither a b-\u003ea",
          "package": "data-extra",
          "partial": "Left",
          "signature": "a-\u003eEither a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:fromLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the right value or a default.\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "fromRight",
          "package": "data-extra",
          "signature": "b -\u003e Either a b -\u003e b",
          "source": "src/Data-Either-Extra.html#fromRight",
          "type": "function"
        },
        "index": {
          "description": "Extract the right value or default",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "fromRight",
          "normalized": "a-\u003eEither b a-\u003ea",
          "package": "data-extra",
          "partial": "Right",
          "signature": "b-\u003eEither a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a value Left?\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "isLeft",
          "package": "data-extra",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Data-Either-Extra.html#isLeft",
          "type": "function"
        },
        "index": {
          "description": "Is value Left",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "isLeft",
          "normalized": "Either a b-\u003eBool",
          "package": "data-extra",
          "partial": "Left",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a value Right?\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "isRight",
          "package": "data-extra",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Data-Either-Extra.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "Is value Right",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "isRight",
          "normalized": "Either a b-\u003eBool",
          "package": "data-extra",
          "partial": "Right",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe get the left side of an Either.\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "leftToMaybe",
          "package": "data-extra",
          "signature": "Either a b -\u003e Maybe a",
          "source": "src/Data-Either-Extra.html#leftToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Maybe get the left side of an Either",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "leftToMaybe",
          "normalized": "Either a b-\u003eMaybe a",
          "package": "data-extra",
          "partial": "To Maybe",
          "signature": "Either a b-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:leftToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map for Either values.\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "mapEither",
          "package": "data-extra",
          "signature": "(a -\u003e b1) -\u003e (b -\u003e b2) -\u003e Either a b -\u003e Either b1 b2",
          "source": "src/Data-Either-Extra.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "map for Either values",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "mapEither",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003eEither a b-\u003eEither b b",
          "package": "data-extra",
          "partial": "Either",
          "signature": "(a-\u003eb)-\u003e(b-\u003eb)-\u003eEither a b-\u003eEither b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe get the right side of an Either.\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "rightToMaybe",
          "package": "data-extra",
          "signature": "Either a b -\u003e Maybe b",
          "source": "src/Data-Either-Extra.html#rightToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Maybe get the right side of an Either",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "rightToMaybe",
          "normalized": "Either a b-\u003eMaybe b",
          "package": "data-extra",
          "partial": "To Maybe",
          "signature": "Either a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:rightToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a value is Left, do something with it, monadically.\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "whenLeft",
          "package": "data-extra",
          "signature": "Either a b -\u003e (a -\u003e m c) -\u003e m ()",
          "source": "src/Data-Either-Extra.html#whenLeft",
          "type": "function"
        },
        "index": {
          "description": "When value is Left do something with it monadically",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "whenLeft",
          "normalized": "Either a b-\u003e(a-\u003ec d)-\u003ec()",
          "package": "data-extra",
          "partial": "Left",
          "signature": "Either a b-\u003e(a-\u003em c)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:whenLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a value is Right, do something with it, monadically.\n\u003c/p\u003e",
          "module": "Data.Either.Extra",
          "name": "whenRight",
          "package": "data-extra",
          "signature": "Either a b -\u003e (b -\u003e m c) -\u003e m ()",
          "source": "src/Data-Either-Extra.html#whenRight",
          "type": "function"
        },
        "index": {
          "description": "When value is Right do something with it monadically",
          "hierarchy": "Data Either Extra",
          "module": "Data.Either.Extra",
          "name": "whenRight",
          "normalized": "Either a b-\u003e(b-\u003ec d)-\u003ec()",
          "package": "data-extra",
          "partial": "Right",
          "signature": "Either a b-\u003e(b-\u003em c)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Either-Extra.html#v:whenRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra utilities for equality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Eq.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Eq-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra utilities for equality",
          "hierarchy": "Data Eq Extra",
          "module": "Data.Eq.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Eq-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function before passing it to equality.\n\u003c/p\u003e",
          "module": "Data.Eq.Extra",
          "name": "equating",
          "package": "data-extra",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e Bool",
          "source": "src/Data-Eq-Extra.html#equating",
          "type": "function"
        },
        "index": {
          "description": "Apply function before passing it to equality",
          "hierarchy": "Data Eq Extra",
          "module": "Data.Eq.Extra",
          "name": "equating",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eBool",
          "package": "data-extra",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Eq-Extra.html#v:equating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra Data.* functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra Data functions",
          "hierarchy": "Data Extra",
          "module": "Data.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions for dealing with lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-List-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions for dealing with lists",
          "hierarchy": "Data List Extra",
          "module": "Data.List.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-List-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first item of a list or something else.\n\u003c/p\u003e",
          "module": "Data.List.Extra",
          "name": "firstOr",
          "package": "data-extra",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Data-List-Extra.html#firstOr",
          "type": "function"
        },
        "index": {
          "description": "Return the first item of list or something else",
          "hierarchy": "Data List Extra",
          "module": "Data.List.Extra",
          "name": "firstOr",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "data-extra",
          "partial": "Or",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-List-Extra.html#v:firstOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpposite of map.\n\u003c/p\u003e",
          "module": "Data.List.Extra",
          "name": "for",
          "package": "data-extra",
          "signature": "[a] -\u003e (a -\u003e b) -\u003e [b]",
          "source": "src/Data-List-Extra.html#for",
          "type": "function"
        },
        "index": {
          "description": "Opposite of map",
          "hierarchy": "Data List Extra",
          "module": "Data.List.Extra",
          "name": "for",
          "normalized": "[a]-\u003e(a-\u003eb)-\u003e[b]",
          "package": "data-extra",
          "signature": "[a]-\u003e(a-\u003eb)-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-List-Extra.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe get the last element in the list.\n\u003c/p\u003e",
          "module": "Data.List.Extra",
          "name": "lastToMaybe",
          "package": "data-extra",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Data-List-Extra.html#lastToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Maybe get the last element in the list",
          "hierarchy": "Data List Extra",
          "module": "Data.List.Extra",
          "name": "lastToMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "data-extra",
          "partial": "To Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-List-Extra.html#v:lastToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a list is non-null, pass it to a function, otherwise use the\n default.\n\u003c/p\u003e",
          "module": "Data.List.Extra",
          "name": "list",
          "package": "data-extra",
          "signature": "b -\u003e ([a] -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Data-List-Extra.html#list",
          "type": "function"
        },
        "index": {
          "description": "When list is non-null pass it to function otherwise use the default",
          "hierarchy": "Data List Extra",
          "module": "Data.List.Extra",
          "name": "list",
          "normalized": "a-\u003e([b]-\u003ea)-\u003e[b]-\u003ea",
          "package": "data-extra",
          "signature": "b-\u003e([a]-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-List-Extra.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the maximum of a list or return zero.\n\u003c/p\u003e",
          "module": "Data.List.Extra",
          "name": "maxList",
          "package": "data-extra",
          "signature": "[t] -\u003e t",
          "source": "src/Data-List-Extra.html#maxList",
          "type": "function"
        },
        "index": {
          "description": "Get the maximum of list or return zero",
          "hierarchy": "Data List Extra",
          "module": "Data.List.Extra",
          "name": "maxList",
          "normalized": "[a]-\u003ea",
          "package": "data-extra",
          "partial": "List",
          "signature": "[t]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-List-Extra.html#v:maxList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the union of the given lists.\n\u003c/p\u003e",
          "module": "Data.List.Extra",
          "name": "unionOf",
          "package": "data-extra",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-List-Extra.html#unionOf",
          "type": "function"
        },
        "index": {
          "description": "Get the union of the given lists",
          "hierarchy": "Data List Extra",
          "module": "Data.List.Extra",
          "name": "unionOf",
          "normalized": "[[a]]-\u003e[a]",
          "package": "data-extra",
          "partial": "Of",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-List-Extra.html#v:unionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions for dealing with Maybe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Maybe.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Maybe-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions for dealing with Maybe",
          "hierarchy": "Data Maybe Extra",
          "module": "Data.Maybe.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Maybe-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the sole element of the list or nothing.\n\u003c/p\u003e",
          "module": "Data.Maybe.Extra",
          "name": "sole",
          "package": "data-extra",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Data-Maybe-Extra.html#sole",
          "type": "function"
        },
        "index": {
          "description": "Return the sole element of the list or nothing",
          "hierarchy": "Data Maybe Extra",
          "module": "Data.Maybe.Extra",
          "name": "sole",
          "normalized": "[a]-\u003eMaybe a",
          "package": "data-extra",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Maybe-Extra.html#v:sole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a value is Just, do something with it, monadically.\n\u003c/p\u003e",
          "module": "Data.Maybe.Extra",
          "name": "whenJust",
          "package": "data-extra",
          "signature": "Maybe a -\u003e (a -\u003e m c) -\u003e m ()",
          "source": "src/Data-Maybe-Extra.html#whenJust",
          "type": "function"
        },
        "index": {
          "description": "When value is Just do something with it monadically",
          "hierarchy": "Data Maybe Extra",
          "module": "Data.Maybe.Extra",
          "name": "whenJust",
          "normalized": "Maybe a-\u003e(a-\u003eb c)-\u003eb()",
          "package": "data-extra",
          "partial": "Just",
          "signature": "Maybe a-\u003e(a-\u003em c)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Maybe-Extra.html#v:whenJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the predicate is true, return maybe the action's return value.\n\u003c/p\u003e",
          "module": "Data.Maybe.Extra",
          "name": "whenMaybe",
          "package": "data-extra",
          "signature": "Bool -\u003e m a -\u003e m (Maybe a)",
          "source": "src/Data-Maybe-Extra.html#whenMaybe",
          "type": "function"
        },
        "index": {
          "description": "When the predicate is true return maybe the action return value",
          "hierarchy": "Data Maybe Extra",
          "module": "Data.Maybe.Extra",
          "name": "whenMaybe",
          "normalized": "Bool-\u003ea b-\u003ea(Maybe b)",
          "package": "data-extra",
          "partial": "Maybe",
          "signature": "Bool-\u003em a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Maybe-Extra.html#v:whenMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions for numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Number-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions for numbers",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound away from zero (ceiling if positive, floor otherwise).\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "awayFromZero",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#awayFromZero",
          "type": "function"
        },
        "index": {
          "description": "Round away from zero ceiling if positive floor otherwise",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "awayFromZero",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "From Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:awayFromZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for fromIntegral.\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "fi",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#fi",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for fromIntegral",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "fi",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:fi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for fromIntegral. Deprecated in favour of the more popular fi.\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "int",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#int",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for fromIntegral Deprecated in favour of the more popular fi",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "int",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a number rounded down 0.5?\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "isHalf",
          "package": "data-extra",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Number-Extra.html#isHalf",
          "type": "function"
        },
        "index": {
          "description": "Is number rounded down",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "isHalf",
          "normalized": "a-\u003eBool",
          "package": "data-extra",
          "partial": "Half",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:isHalf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ca\u003enearestTowardZero\u003c/a\u003e but rounds away from zero (by positive or negative).\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "nearestAwayFromZero",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#nearestAwayFromZero",
          "type": "function"
        },
        "index": {
          "description": "Same as nearestTowardZero but rounds away from zero by positive or negative",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "nearestAwayFromZero",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Away From Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:nearestAwayFromZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound up (round).\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "nearestBanker",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#nearestBanker",
          "type": "function"
        },
        "index": {
          "description": "Round up round",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "nearestBanker",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Banker",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:nearestBanker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ca\u003enearestTowardZero\u003c/a\u003e but to infinity instead of zero.\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "nearestTowardInf",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#nearestTowardInf",
          "type": "function"
        },
        "index": {
          "description": "Same as nearestTowardZero but to infinity instead of zero",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "nearestTowardInf",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Toward Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:nearestTowardInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ca\u003enearestTowardZero\u003c/a\u003e but towards negative instead of zero.\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "nearestTowardNegInf",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#nearestTowardNegInf",
          "type": "function"
        },
        "index": {
          "description": "Same as nearestTowardZero but towards negative instead of zero",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "nearestTowardNegInf",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Toward Neg Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:nearestTowardNegInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound torwards zero (if half go towards zero, otherwise up to 1).\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "nearestTowardZero",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#nearestTowardZero",
          "type": "function"
        },
        "index": {
          "description": "Round torwards zero if half go towards zero otherwise up to",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "nearestTowardZero",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Toward Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:nearestTowardZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound upwards (ceiling).\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "towardInf",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#towardInf",
          "type": "function"
        },
        "index": {
          "description": "Round upwards ceiling",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "towardInf",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:towardInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound backwards (floor).\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "towardNegInf",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#towardNegInf",
          "type": "function"
        },
        "index": {
          "description": "Round backwards floor",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "towardNegInf",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Neg Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:towardNegInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound toward zero (truncate).\n\u003c/p\u003e",
          "module": "Data.Number.Extra",
          "name": "towardZero",
          "package": "data-extra",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-Extra.html#towardZero",
          "type": "function"
        },
        "index": {
          "description": "Round toward zero truncate",
          "hierarchy": "Data Number Extra",
          "module": "Data.Number.Extra",
          "name": "towardZero",
          "normalized": "a-\u003eb",
          "package": "data-extra",
          "partial": "Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Number-Extra.html#v:towardZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions and classes for dealing with Strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.String.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-String-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions and classes for dealing with Strings",
          "hierarchy": "Data String Extra",
          "module": "Data.String.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-String-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for converting to strings.\n\u003c/p\u003e",
          "module": "Data.String.Extra",
          "name": "ToString",
          "package": "data-extra",
          "source": "src/Data-String-Extra.html#ToString",
          "type": "class"
        },
        "index": {
          "description": "class for converting to strings",
          "hierarchy": "Data String Extra",
          "module": "Data.String.Extra",
          "name": "ToString",
          "package": "data-extra",
          "partial": "To String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-String-Extra.html#t:ToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower case a string.\n\u003c/p\u003e",
          "module": "Data.String.Extra",
          "name": "lower",
          "package": "data-extra",
          "signature": "String -\u003e String",
          "source": "src/Data-String-Extra.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Lower case string",
          "hierarchy": "Data String Extra",
          "module": "Data.String.Extra",
          "name": "lower",
          "normalized": "String-\u003eString",
          "package": "data-extra",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-String-Extra.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Extra",
          "name": "toString",
          "package": "data-extra",
          "signature": "a -\u003e String",
          "source": "src/Data-String-Extra.html#toString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Extra",
          "module": "Data.String.Extra",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "data-extra",
          "partial": "String",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-String-Extra.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a string.\n\u003c/p\u003e",
          "module": "Data.String.Extra",
          "name": "trim",
          "package": "data-extra",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Data-String-Extra.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Trim string",
          "hierarchy": "Data String Extra",
          "module": "Data.String.Extra",
          "name": "trim",
          "normalized": "[Char]-\u003e[Char]",
          "package": "data-extra",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-String-Extra.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper case a string.\n\u003c/p\u003e",
          "module": "Data.String.Extra",
          "name": "upper",
          "package": "data-extra",
          "signature": "String -\u003e String",
          "source": "src/Data-String-Extra.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Upper case string",
          "hierarchy": "Data String Extra",
          "module": "Data.String.Extra",
          "name": "upper",
          "normalized": "String-\u003eString",
          "package": "data-extra",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-String-Extra.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions and classes for dealing with Text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Text-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions and classes for dealing with Text",
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for converting from Text.\n\u003c/p\u003e",
          "module": "Data.Text.Extra",
          "name": "FromText",
          "package": "data-extra",
          "source": "src/Data-Text-Extra.html#FromText",
          "type": "class"
        },
        "index": {
          "description": "class for converting from Text",
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "FromText",
          "package": "data-extra",
          "partial": "From Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#t:FromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for converting to Text.\n\u003c/p\u003e",
          "module": "Data.Text.Extra",
          "name": "ToText",
          "package": "data-extra",
          "source": "src/Data-Text-Extra.html#ToText",
          "type": "class"
        },
        "index": {
          "description": "class for converting to Text",
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "ToText",
          "package": "data-extra",
          "partial": "To Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#t:ToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBig 'em up.\n\u003c/p\u003e",
          "module": "Data.Text.Extra",
          "name": "bigUp",
          "package": "data-extra",
          "signature": "a -\u003e Text",
          "source": "src/Data-Text-Extra.html#bigUp",
          "type": "function"
        },
        "index": {
          "description": "Big em up",
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "bigUp",
          "normalized": "a-\u003eText",
          "package": "data-extra",
          "partial": "Up",
          "signature": "a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#v:bigUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.Extra",
          "name": "fromLazyText",
          "package": "data-extra",
          "signature": "Text -\u003e Maybe a",
          "source": "src/Data-Text-Extra.html#fromLazyText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "fromLazyText",
          "normalized": "Text-\u003eMaybe a",
          "package": "data-extra",
          "partial": "Lazy Text",
          "signature": "Text-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#v:fromLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.Extra",
          "name": "fromText",
          "package": "data-extra",
          "signature": "Text -\u003e Maybe a",
          "source": "src/Data-Text-Extra.html#fromText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "fromText",
          "normalized": "Text-\u003eMaybe a",
          "package": "data-extra",
          "partial": "Text",
          "signature": "Text-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#v:fromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.Extra",
          "name": "toLazyText",
          "package": "data-extra",
          "signature": "a -\u003e Text",
          "source": "src/Data-Text-Extra.html#toLazyText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "toLazyText",
          "normalized": "a-\u003eText",
          "package": "data-extra",
          "partial": "Lazy Text",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#v:toLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.Extra",
          "name": "toText",
          "package": "data-extra",
          "signature": "a -\u003e Text",
          "source": "src/Data-Text-Extra.html#toText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Text Extra",
          "module": "Data.Text.Extra",
          "name": "toText",
          "normalized": "a-\u003eText",
          "package": "data-extra",
          "partial": "Text",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Text-Extra.html#v:toText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra date functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Time-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra date functions",
          "hierarchy": "Data Time Extra",
          "module": "Data.Time.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Time-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrivial benchmark for some monadic action.\n\u003c/p\u003e",
          "module": "Data.Time.Extra",
          "name": "bench",
          "package": "data-extra",
          "signature": "Integer -\u003e m a -\u003e m (a, NominalDiffTime)",
          "source": "src/Data-Time-Extra.html#bench",
          "type": "function"
        },
        "index": {
          "description": "Trivial benchmark for some monadic action",
          "hierarchy": "Data Time Extra",
          "module": "Data.Time.Extra",
          "name": "bench",
          "normalized": "Integer-\u003ea b-\u003ea(b,NominalDiffTime)",
          "package": "data-extra",
          "signature": "Integer-\u003em a-\u003em(a,NominalDiffTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Time-Extra.html#v:bench"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current day.\n\u003c/p\u003e",
          "module": "Data.Time.Extra",
          "name": "getDay",
          "package": "data-extra",
          "signature": "t -\u003e Integer",
          "source": "src/Data-Time-Extra.html#getDay",
          "type": "function"
        },
        "index": {
          "description": "Get the current day",
          "hierarchy": "Data Time Extra",
          "module": "Data.Time.Extra",
          "name": "getDay",
          "normalized": "a-\u003eInteger",
          "package": "data-extra",
          "partial": "Day",
          "signature": "t-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Time-Extra.html#v:getDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current month.\n\u003c/p\u003e",
          "module": "Data.Time.Extra",
          "name": "getMonth",
          "package": "data-extra",
          "signature": "t -\u003e Integer",
          "source": "src/Data-Time-Extra.html#getMonth",
          "type": "function"
        },
        "index": {
          "description": "Get the current month",
          "hierarchy": "Data Time Extra",
          "module": "Data.Time.Extra",
          "name": "getMonth",
          "normalized": "a-\u003eInteger",
          "package": "data-extra",
          "partial": "Month",
          "signature": "t-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Time-Extra.html#v:getMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current year.\n\u003c/p\u003e",
          "module": "Data.Time.Extra",
          "name": "getYear",
          "package": "data-extra",
          "signature": "t -\u003e Integer",
          "source": "src/Data-Time-Extra.html#getYear",
          "type": "function"
        },
        "index": {
          "description": "Get the current year",
          "hierarchy": "Data Time Extra",
          "module": "Data.Time.Extra",
          "name": "getYear",
          "normalized": "a-\u003eInteger",
          "package": "data-extra",
          "partial": "Year",
          "signature": "t-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Time-Extra.html#v:getYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a time span as one time relative to another.\n\u003c/p\u003e",
          "module": "Data.Time.Extra",
          "name": "relative",
          "package": "data-extra",
          "signature": "UTCTime-\u003e UTCTime-\u003e Bool-\u003e Text",
          "type": "function"
        },
        "index": {
          "description": "Display time span as one time relative to another",
          "hierarchy": "Data Time Extra",
          "module": "Data.Time.Extra",
          "name": "relative",
          "normalized": "UTCTime-\u003eUTCTime-\u003eBool-\u003eText",
          "package": "data-extra",
          "signature": "UTCTime-\u003eUTCTime-\u003eBool-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Time-Extra.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a stop-watch at the start and end of a computation.\n\u003c/p\u003e",
          "module": "Data.Time.Extra",
          "name": "stopwatch",
          "package": "data-extra",
          "signature": "m a -\u003e m (a, NominalDiffTime)",
          "source": "src/Data-Time-Extra.html#stopwatch",
          "type": "function"
        },
        "index": {
          "description": "Run stop-watch at the start and end of computation",
          "hierarchy": "Data Time Extra",
          "module": "Data.Time.Extra",
          "name": "stopwatch",
          "normalized": "a b-\u003ea(b,NominalDiffTime)",
          "package": "data-extra",
          "signature": "m a-\u003em(a,NominalDiffTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Time-Extra.html#v:stopwatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTuple utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tuple.Extra",
          "name": "Extra",
          "package": "data-extra",
          "source": "src/Data-Tuple-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Tuple utilities",
          "hierarchy": "Data Tuple Extra",
          "module": "Data.Tuple.Extra",
          "name": "Extra",
          "package": "data-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Tuple-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap tuple's elements.\n\u003c/p\u003e",
          "module": "Data.Tuple.Extra",
          "name": "swap",
          "package": "data-extra",
          "signature": "(t1, t) -\u003e (t, t1)",
          "source": "src/Data-Tuple-Extra.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swap tuple elements",
          "hierarchy": "Data Tuple Extra",
          "module": "Data.Tuple.Extra",
          "name": "swap",
          "normalized": "(a,a)-\u003e(a,a)",
          "package": "data-extra",
          "signature": "(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-extra/docs/Data-Tuple-Extra.html#v:swap"
      }
    }
  ]
]