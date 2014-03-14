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
        "word": "dstring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDifference strings: a data structure for O(1) append on strings. Note that a\n \u003ccode\u003e\u003ca\u003eDString\u003c/a\u003e\u003c/code\u003e is just a newtype wrapper around a \u003ccode\u003e\u003ca\u003eDList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e. The reason we\n need a new type instead of just a type synonym is that we can have an\n \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e without using language extensions\n (\u003ccode\u003eTypeSynonymInstances\u003c/code\u003e or \u003ccode\u003eFlexibleInstances\u003c/code\u003e) so we can write overloaded\n string literals of type \u003ccode\u003e\u003ca\u003eDString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DString",
          "name": "DString",
          "package": "dstring",
          "source": "src/Data-DString.html",
          "type": "module"
        },
        "index": {
          "description": "Difference strings data structure for append on strings Note that DString is just newtype wrapper around DList Char The reason we need new type instead of just type synonym is that we can have an instance IsString DString without using language extensions TypeSynonymInstances or FlexibleInstances so we can write overloaded string literals of type DString",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "DString",
          "package": "dstring",
          "partial": "DString",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA difference string is a function that given a string, returns the original\n contents of the difference string prepended at the given string.\n\u003c/p\u003e\u003cp\u003eThis structure supports O(1) \u003ccode\u003emappend\u003c/code\u003e en \u003ccode\u003esnoc\u003c/code\u003e operations on strings making\n it very usefull for append-heavy uses such as logging and pretty printing.\n\u003c/p\u003e\u003cp\u003eYou can use it to efficiently show a tree for example: (Note that we use some\n handy functions from the \u003ccode\u003estring-combinators\u003c/code\u003e package)\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Data.DString (toShowS, fromShowS)\n import Data.String.Combinators ((\u003c+\u003e), parens, thenParens)\n\n data Tree a = Leaf a | Branch (Tree a) (Tree a)\n\n instance Show a =\u003e Show (Tree a) where\n     showsPrec prec t = toShowS $ (prec \u003e= funAppPrec) `thenParens` go t\n         where\n           go (Leaf x)     = \"Leaf\" \u003c+\u003e fromShowS (showsPrec funAppPrec x)\n           go (Branch l r) = \"Branch\" \u003c+\u003e parens (go l) \u003c+\u003e parens (go r)\n\n           funAppPrec = 10\n\u003c/pre\u003e",
          "module": "Data.DString",
          "name": "DString",
          "package": "dstring",
          "source": "src/Data-DString.html#DString",
          "type": "data"
        },
        "index": {
          "description": "difference string is function that given string returns the original contents of the difference string prepended at the given string This structure supports mappend en snoc operations on strings making it very usefull for append-heavy uses such as logging and pretty printing You can use it to efficiently show tree for example Note that we use some handy functions from the string-combinators package LANGUAGE OverloadedStrings import Data.DString toShowS fromShowS import Data.String.Combinators parens thenParens data Tree Leaf Branch Tree Tree instance Show Show Tree where showsPrec prec toShowS prec funAppPrec thenParens go where go Leaf Leaf fromShowS showsPrec funAppPrec go Branch Branch parens go parens go funAppPrec",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "DString",
          "package": "dstring",
          "partial": "DString",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#t:DString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(spine)\u003c/em\u003e, Concatenate difference strings.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "concat",
          "package": "dstring",
          "signature": "[DString] -\u003e DString",
          "source": "src/Data-DString.html#concat",
          "type": "function"
        },
        "index": {
          "description": "spine Concatenate difference strings",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "concat",
          "normalized": "[DString]-\u003eDString",
          "package": "dstring",
          "signature": "[DString]-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Prepend a Char to a difference string.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "cons",
          "package": "dstring",
          "signature": "Char -\u003e DString -\u003e DString",
          "source": "src/Data-DString.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Prepend Char to difference string",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "cons",
          "normalized": "Char-\u003eDString-\u003eDString",
          "package": "dstring",
          "signature": "Char-\u003eDString-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFoldr over difference strings.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "foldr",
          "package": "dstring",
          "signature": "(Char -\u003e α -\u003e α) -\u003e α -\u003e DString -\u003e α",
          "source": "src/Data-DString.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Foldr over difference strings",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eDString-\u003ea",
          "package": "dstring",
          "signature": "(Char-\u003eα-\u003eα)-\u003eα-\u003eDString-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert a difference list of \u003ccode\u003eChar\u003c/code\u003es to a difference string.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "fromDList",
          "package": "dstring",
          "signature": "DList Char -\u003e DString",
          "source": "src/Data-DString.html#fromDList",
          "type": "function"
        },
        "index": {
          "description": "Convert difference list of Char to difference string",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "fromDList",
          "normalized": "DList Char-\u003eDString",
          "package": "dstring",
          "partial": "DList",
          "signature": "DList Char-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:fromDList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert a \u003ccode\u003eShowS\u003c/code\u003e to a difference string.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "fromShowS",
          "package": "dstring",
          "signature": "ShowS -\u003e DString",
          "source": "src/Data-DString.html#fromShowS",
          "type": "function"
        },
        "index": {
          "description": "Convert ShowS to difference string",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "fromShowS",
          "normalized": "ShowS-\u003eDString",
          "package": "dstring",
          "partial": "Show",
          "signature": "ShowS-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:fromShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the head of the difference string.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "head",
          "package": "dstring",
          "signature": "DString -\u003e Char",
          "source": "src/Data-DString.html#head",
          "type": "function"
        },
        "index": {
          "description": "Return the head of the difference string",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "head",
          "normalized": "DString-\u003eChar",
          "package": "dstring",
          "signature": "DString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(length ds)\u003c/em\u003e, difference list elimination, head, tail.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "list",
          "package": "dstring",
          "signature": "α -\u003e (Char -\u003e DString -\u003e α) -\u003e DString -\u003e α",
          "source": "src/Data-DString.html#list",
          "type": "function"
        },
        "index": {
          "description": "length ds difference list elimination head tail",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "list",
          "normalized": "a-\u003e(Char-\u003eDString-\u003ea)-\u003eDString-\u003ea",
          "package": "dstring",
          "signature": "α-\u003e(Char-\u003eDString-\u003eα)-\u003eDString-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Build a difference string from a single \u003ccode\u003eChar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "singleton",
          "package": "dstring",
          "signature": "Char -\u003e DString",
          "source": "src/Data-DString.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Build difference string from single Char",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "singleton",
          "normalized": "Char-\u003eDString",
          "package": "dstring",
          "signature": "Char-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Append a \u003ccode\u003eChar\u003c/code\u003e to a difference string.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "snoc",
          "package": "dstring",
          "signature": "DString -\u003e Char -\u003e DString",
          "source": "src/Data-DString.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append Char to difference string",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "snoc",
          "normalized": "DString-\u003eChar-\u003eDString",
          "package": "dstring",
          "signature": "DString-\u003eChar-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the tail of the difference string.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "tail",
          "package": "dstring",
          "signature": "DString -\u003e DString",
          "source": "src/Data-DString.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Return the tail of the difference string",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "tail",
          "normalized": "DString-\u003eDString",
          "package": "dstring",
          "signature": "DString-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert a difference string to a difference list.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "toDList",
          "package": "dstring",
          "signature": "DString -\u003e DList Char",
          "source": "src/Data-DString.html#toDList",
          "type": "function"
        },
        "index": {
          "description": "Convert difference string to difference list",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "toDList",
          "normalized": "DString-\u003eDList Char",
          "package": "dstring",
          "partial": "DList",
          "signature": "DString-\u003eDList Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:toDList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert a difference string to a \u003ccode\u003eShowS\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "toShowS",
          "package": "dstring",
          "signature": "DString -\u003e ShowS",
          "source": "src/Data-DString.html#toShowS",
          "type": "function"
        },
        "index": {
          "description": "Convert difference string to ShowS",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "toShowS",
          "normalized": "DString-\u003eShowS",
          "package": "dstring",
          "partial": "Show",
          "signature": "DString-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:toShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Convert a difference string to a normal string.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "toString",
          "package": "dstring",
          "signature": "DString -\u003e String",
          "source": "src/Data-DString.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Convert difference string to normal string",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "toString",
          "normalized": "DString-\u003eString",
          "package": "dstring",
          "partial": "String",
          "signature": "DString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfoldr for difference strings.\n\u003c/p\u003e",
          "module": "Data.DString",
          "name": "unfoldr",
          "package": "dstring",
          "signature": "(α -\u003e Maybe (Char, α)) -\u003e α -\u003e DString",
          "source": "src/Data-DString.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "Unfoldr for difference strings",
          "hierarchy": "Data DString",
          "module": "Data.DString",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eDString",
          "package": "dstring",
          "signature": "(α-\u003eMaybe(Char,α))-\u003eα-\u003eDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dstring/docs/Data-DString.html#v:unfoldr"
      }
    }
  ]
]