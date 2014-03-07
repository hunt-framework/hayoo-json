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
        "word": "split"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation module for \u003ca\u003eData.List.Split\u003c/a\u003e, a combinator library\n for splitting lists.  See the \u003ca\u003eData.List.Split\u003c/a\u003e documentation for\n more description and examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Split.Internals",
          "name": "Internals",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation module for Data.List.Split combinator library for splitting lists See the Data.List.Split documentation for more description and examples",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Internals",
          "package": "split",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag chunks as delimiters or text.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "Chunk",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#Chunk",
          "type": "data"
        },
        "index": {
          "description": "Tag chunks as delimiters or text",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Chunk",
          "package": "split",
          "partial": "Chunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with multiple consecutive delimiters?\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "CondensePolicy",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#CondensePolicy",
          "type": "data"
        },
        "index": {
          "description": "What to do with multiple consecutive delimiters",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "CondensePolicy",
          "package": "split",
          "partial": "Condense Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#t:CondensePolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with delimiters?\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "DelimPolicy",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#DelimPolicy",
          "type": "data"
        },
        "index": {
          "description": "What to do with delimiters",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "DelimPolicy",
          "package": "split",
          "partial": "Delim Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#t:DelimPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA delimiter is a list of predicates on elements, matched by some\n   contiguous subsequence of a list.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "Delimiter",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#Delimiter",
          "type": "newtype"
        },
        "index": {
          "description": "delimiter is list of predicates on elements matched by some contiguous subsequence of list",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Delimiter",
          "package": "split",
          "partial": "Delimiter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#t:Delimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with a blank chunk at either end of the list\n   (\u003cem\u003ei.e.\u003c/em\u003e when the list begins or ends with a delimiter).\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "EndPolicy",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#EndPolicy",
          "type": "data"
        },
        "index": {
          "description": "What to do with blank chunk at either end of the list i.e when the list begins or ends with delimiter",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "EndPolicy",
          "package": "split",
          "partial": "End Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#t:EndPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal representation of a split list that tracks which pieces\n   are delimiters and which aren't.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "SplitList",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#SplitList",
          "type": "type"
        },
        "index": {
          "description": "Internal representation of split list that tracks which pieces are delimiters and which aren",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "SplitList",
          "package": "split",
          "partial": "Split List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#t:SplitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splitting strategy.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "Splitter",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "data"
        },
        "index": {
          "description": "splitting strategy",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Splitter",
          "package": "split",
          "partial": "Splitter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#t:Splitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCondense into a single delimiter.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "Condense",
          "package": "split",
          "signature": "Condense",
          "source": "src/Data-List-Split-Internals.html#CondensePolicy",
          "type": "function"
        },
        "index": {
          "description": "Condense into single delimiter",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Condense",
          "package": "split",
          "partial": "Condense",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:Condense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Split.Internals",
          "name": "Delim",
          "package": "split",
          "signature": "Delim [a]",
          "source": "src/Data-List-Split-Internals.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Delim",
          "normalized": "Delim[a]",
          "package": "split",
          "partial": "Delim",
          "signature": "Delim[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:Delim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Split.Internals",
          "name": "Delimiter",
          "package": "split",
          "signature": "Delimiter [a -\u003e Bool]",
          "source": "src/Data-List-Split-Internals.html#Delimiter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Delimiter",
          "normalized": "Delimiter[a-\u003eBool]",
          "package": "split",
          "partial": "Delimiter",
          "signature": "Delimiter[a-\u003eBool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:Delimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop delimiters from the output.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "Drop",
          "package": "split",
          "signature": "Drop",
          "source": "src/Data-List-Split-Internals.html#DelimPolicy",
          "type": "function"
        },
        "index": {
          "description": "Drop delimiters from the output",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Drop",
          "package": "split",
          "partial": "Drop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:Drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Split.Internals",
          "name": "DropBlank",
          "package": "split",
          "signature": "DropBlank",
          "source": "src/Data-List-Split-Internals.html#EndPolicy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "DropBlank",
          "package": "split",
          "partial": "Drop Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:DropBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep consecutive\n   delimiters separate, but\n   don't insert blank chunks in\n   between them.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "DropBlankFields",
          "package": "split",
          "signature": "DropBlankFields",
          "source": "src/Data-List-Split-Internals.html#CondensePolicy",
          "type": "function"
        },
        "index": {
          "description": "Keep consecutive delimiters separate but don insert blank chunks in between them",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "DropBlankFields",
          "package": "split",
          "partial": "Drop Blank Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:DropBlankFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep delimiters as separate chunks\n   of the output.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "Keep",
          "package": "split",
          "signature": "Keep",
          "source": "src/Data-List-Split-Internals.html#DelimPolicy",
          "type": "function"
        },
        "index": {
          "description": "Keep delimiters as separate chunks of the output",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Keep",
          "package": "split",
          "partial": "Keep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:Keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Split.Internals",
          "name": "KeepBlank",
          "package": "split",
          "signature": "KeepBlank",
          "source": "src/Data-List-Split-Internals.html#EndPolicy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "KeepBlank",
          "package": "split",
          "partial": "Keep Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:KeepBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert blank chunks\n   between consecutive\n   delimiters.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "KeepBlankFields",
          "package": "split",
          "signature": "KeepBlankFields",
          "source": "src/Data-List-Split-Internals.html#CondensePolicy",
          "type": "function"
        },
        "index": {
          "description": "Insert blank chunks between consecutive delimiters",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "KeepBlankFields",
          "package": "split",
          "partial": "Keep Blank Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:KeepBlankFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep delimiters in the output,\n   prepending them to the following\n   chunk.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "KeepLeft",
          "package": "split",
          "signature": "KeepLeft",
          "source": "src/Data-List-Split-Internals.html#DelimPolicy",
          "type": "function"
        },
        "index": {
          "description": "Keep delimiters in the output prepending them to the following chunk",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "KeepLeft",
          "package": "split",
          "partial": "Keep Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:KeepLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep delimiters in the output,\n   appending them to the previous chunk.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "KeepRight",
          "package": "split",
          "signature": "KeepRight",
          "source": "src/Data-List-Split-Internals.html#DelimPolicy",
          "type": "function"
        },
        "index": {
          "description": "Keep delimiters in the output appending them to the previous chunk",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "KeepRight",
          "package": "split",
          "partial": "Keep Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:KeepRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Split.Internals",
          "name": "Splitter",
          "package": "split",
          "signature": "Splitter",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Splitter",
          "package": "split",
          "partial": "Splitter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:Splitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Split.Internals",
          "name": "Text",
          "package": "split",
          "signature": "Text [a]",
          "source": "src/Data-List-Split-Internals.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "Text",
          "normalized": "Text[a]",
          "package": "split",
          "partial": "Text",
          "signature": "Text[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard build function, specialized to building lists.\n\u003c/p\u003e\u003cp\u003eUsually build is given the rank-2 type\n\u003c/p\u003e\u003cpre\u003e build :: (forall b. (a -\u003e b -\u003e b) -\u003e b -\u003e b) -\u003e [a]\n\u003c/pre\u003e\u003cp\u003ebut since we only use it when \u003ccode\u003e(b ~ [a])\u003c/code\u003e, we give it the more\n   restricted type signature in order to avoid needing a\n   non-Haskell2010 extension.\n\u003c/p\u003e\u003cp\u003eNote that the 0.1.4.3 release of this package did away with a\n   custom \u003ccode\u003ebuild\u003c/code\u003e implementation in favor of importing one from\n   \u003ca\u003eGHC.Exts\u003c/a\u003e, which was (reportedly) faster for some applications.\n   However, in the interest of simplicity and complete Haskell2010\n   compliance as \u003ccode\u003esplit\u003c/code\u003e is being included in the Haskel Platform,\n   version 0.2.1.0 has gone back to defining \u003ccode\u003ebuild\u003c/code\u003e manually.  This\n   is in line with \u003ccode\u003esplit\u003c/code\u003e's design philosophy of having efficiency\n   as a non-goal.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "build",
          "package": "split",
          "signature": "((a -\u003e [a] -\u003e [a]) -\u003e [a] -\u003e [a]) -\u003e [a]",
          "source": "src/Data-List-Split-Internals.html#build",
          "type": "function"
        },
        "index": {
          "description": "Standard build function specialized to building lists Usually build is given the rank-2 type build forall but since we only use it when we give it the more restricted type signature in order to avoid needing non-Haskell2010 extension Note that the release of this package did away with custom build implementation in favor of importing one from GHC.Exts which was reportedly faster for some applications However in the interest of simplicity and complete Haskell2010 compliance as split is being included in the Haskel Platform version has gone back to defining build manually This is in line with split design philosophy of having efficiency as non-goal",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "build",
          "normalized": "((a-\u003e[a]-\u003e[a])-\u003e[a]-\u003e[a])-\u003e[a]",
          "package": "split",
          "signature": "((a-\u003e[a]-\u003e[a])-\u003e[a]-\u003e[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA useful recursion pattern for processing a list to produce a new\n   list, often used for \"chopping\" up the input list.  Typically\n   chop is called with some function that will consume an initial\n   prefix of the list and produce a value and the rest of the list.\n\u003c/p\u003e\u003cp\u003eFor example, many common Prelude functions can be implemented in\n   terms of \u003ccode\u003echop\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e group :: (Eq a) =\u003e [a] -\u003e [[a]]\n group = chop (\\ xs@(x:_) -\u003e span (==x) xs)\n\n words :: String -\u003e [String]\n words = filter (not . null) . chop (span (not . isSpace) . dropWhile isSpace)\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "chop",
          "package": "split",
          "signature": "([a] -\u003e (b, [a])) -\u003e [a] -\u003e [b]",
          "source": "src/Data-List-Split-Internals.html#chop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:chop\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:chop\"]"
        },
        "index": {
          "description": "useful recursion pattern for processing list to produce new list often used for chopping up the input list Typically chop is called with some function that will consume an initial prefix of the list and produce value and the rest of the list For example many common Prelude functions can be implemented in terms of chop group Eq group chop xs span xs words String String words filter not null chop span not isSpace dropWhile isSpace",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "chop",
          "normalized": "([a]-\u003e(b,[a]))-\u003e[a]-\u003e[b]",
          "package": "split",
          "signature": "([a]-\u003e(b,[a]))-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:chop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003echunksOf\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e splits a list into length-n pieces.  The last\n   piece will be shorter if \u003ccode\u003en\u003c/code\u003e does not evenly divide the length of\n   the list.  If \u003ccode\u003en \u003c= 0\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003echunksOf\u003c/a\u003e\u003c/code\u003e n l\u003c/code\u003e returns an infinite list\n   of empty lists.  For example:\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003echunksOf\u003c/a\u003e\u003c/code\u003e n []\u003c/code\u003e is \u003ccode\u003e[]\u003c/code\u003e, not \u003ccode\u003e[[]]\u003c/code\u003e.  This is\n   intentional, and is consistent with a recursive definition of\n   \u003ccode\u003e\u003ca\u003echunksOf\u003c/a\u003e\u003c/code\u003e; it satisfies the property that\n\u003c/p\u003e\u003cpre\u003echunksOf n xs ++ chunksOf n ys == chunksOf n (xs ++ ys)\u003c/pre\u003e\u003cp\u003ewhenever \u003ccode\u003en\u003c/code\u003e evenly divides the length of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "chunksOf",
          "package": "split",
          "signature": "Int -\u003e [e] -\u003e [[e]]",
          "source": "src/Data-List-Split-Internals.html#chunksOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:chunksOf\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:chunksOf\"]"
        },
        "index": {
          "description": "chunksOf splits list into length-n pieces The last piece will be shorter if does not evenly divide the length of the list If chunksOf returns an infinite list of empty lists For example Note that chunksOf is not This is intentional and is consistent with recursive definition of chunksOf it satisfies the property that chunksOf xs chunksOf ys chunksOf xs ys whenever evenly divides the length of xs",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "chunksOf",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "Of",
          "signature": "Int-\u003e[e]-\u003e[[e]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:chunksOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCondense multiple consecutive delimiters into one.  For example:\n\u003c/p\u003e\u003cpre\u003e split (condense $ oneOf \"xyz\") \"aazbxyzcxd\" == [\"aa\",\"z\",\"b\",\"xyz\",\"c\",\"x\",\"d\"]\n split (dropDelims $ oneOf \"xyz\") \"aazbxyzcxd\" == [\"aa\",\"b\",\"\",\"\",\"c\",\"d\"]\n split (condense . dropDelims $ oneOf \"xyz\") \"aazbxyzcxd\" == [\"aa\",\"b\",\"c\",\"d\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "condense",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#condense",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:condense\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:condense\"]"
        },
        "index": {
          "description": "Condense multiple consecutive delimiters into one For example split condense oneOf xyz aazbxyzcxd aa xyz split dropDelims oneOf xyz aazbxyzcxd aa split condense dropDelims oneOf xyz aazbxyzcxd aa",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "condense",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:condense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with multiple\n   consecutive delimiters\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "condensePolicy",
          "package": "split",
          "signature": "CondensePolicy",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "function"
        },
        "index": {
          "description": "What to do with multiple consecutive delimiters",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "condensePolicy",
          "package": "split",
          "partial": "Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:condensePolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default splitting strategy: keep delimiters in the output\n   as separate chunks, don't condense multiple consecutive\n   delimiters into one, keep initial and final blank chunks.\n   Default delimiter is the constantly false predicate.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003edefaultSplitter\u003c/a\u003e\u003c/code\u003e should normally not be used; use\n   \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eonSublist\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003ewhenElt\u003c/a\u003e\u003c/code\u003e instead, which are the same as\n   the \u003ccode\u003e\u003ca\u003edefaultSplitter\u003c/a\u003e\u003c/code\u003e with just the delimiter overridden.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edefaultSplitter\u003c/a\u003e\u003c/code\u003e strategy with any delimiter gives a\n   maximally information-preserving splitting strategy, in the sense\n   that (a) taking the \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e of the output yields the original\n   list, and (b) given only the output list, we can reconstruct a\n   \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e which would produce the same output list again given\n   the original input list.  This default strategy can be overridden\n   to allow discarding various sorts of information.\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "defaultSplitter",
          "package": "split",
          "signature": "Splitter a",
          "source": "src/Data-List-Split-Internals.html#defaultSplitter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:defaultSplitter\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:defaultSplitter\"]"
        },
        "index": {
          "description": "The default splitting strategy keep delimiters in the output as separate chunks don condense multiple consecutive delimiters into one keep initial and final blank chunks Default delimiter is the constantly false predicate Note that defaultSplitter should normally not be used use oneOf onSublist or whenElt instead which are the same as the defaultSplitter with just the delimiter overridden The defaultSplitter strategy with any delimiter gives maximally information-preserving splitting strategy in the sense that taking the concat of the output yields the original list and given only the output list we can reconstruct Splitter which would produce the same output list again given the original input list This default strategy can be overridden to allow discarding various sorts of information",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "defaultSplitter",
          "package": "split",
          "partial": "Splitter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:defaultSplitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with delimiters (drop\n   from output, keep as separate\n   elements in output, or merge with\n   previous or following chunks)\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "delimPolicy",
          "package": "split",
          "signature": "DelimPolicy",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "function"
        },
        "index": {
          "description": "What to do with delimiters drop from output keep as separate elements in output or merge with previous or following chunks",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "delimPolicy",
          "package": "split",
          "partial": "Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:delimPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat delimiter to split on\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "delimiter",
          "package": "split",
          "signature": "Delimiter a",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "function"
        },
        "index": {
          "description": "What delimiter to split on",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "delimiter",
          "package": "split",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:delimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCondense multiple consecutive delimiters into one if the\n   \u003ccode\u003e\u003ca\u003eCondensePolicy\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eCondense\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "doCondense",
          "package": "split",
          "signature": "CondensePolicy -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#doCondense",
          "type": "function"
        },
        "index": {
          "description": "Condense multiple consecutive delimiters into one if the CondensePolicy is Condense",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "doCondense",
          "normalized": "CondensePolicy-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Condense",
          "signature": "CondensePolicy-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:doCondense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop delimiters if the \u003ccode\u003e\u003ca\u003eDelimPolicy\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eDrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "doDrop",
          "package": "split",
          "signature": "DelimPolicy -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#doDrop",
          "type": "function"
        },
        "index": {
          "description": "Drop delimiters if the DelimPolicy is Drop",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "doDrop",
          "normalized": "DelimPolicy-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Drop",
          "signature": "DelimPolicy-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:doDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge delimiters into adjacent chunks according to the \u003ccode\u003e\u003ca\u003eDelimPolicy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "doMerge",
          "package": "split",
          "signature": "DelimPolicy -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#doMerge",
          "type": "function"
        },
        "index": {
          "description": "Merge delimiters into adjacent chunks according to the DelimPolicy",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "doMerge",
          "normalized": "DelimPolicy-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Merge",
          "signature": "DelimPolicy-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:doMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop all blank chunks from the output, and condense consecutive\n   delimiters into one.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edropInitBlank\u003c/a\u003e\u003c/code\u003e\n   . \u003ccode\u003e\u003ca\u003edropFinalBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econdense\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e split (oneOf \":\") \"::b:::a\" == [\"\",\":\",\"\",\":\",\"b\",\":\",\"\",\":\",\"\",\":\",\"a\"]\n split (dropBlanks $ oneOf \":\") \"::b:::a\" == [\"::\",\"b\",\":::\",\"a\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "dropBlanks",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#dropBlanks",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropBlanks\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:dropBlanks\"]"
        },
        "index": {
          "description": "Drop all blank chunks from the output and condense consecutive delimiters into one Equivalent to dropInitBlank dropFinalBlank condense For example split oneOf split dropBlanks oneOf",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "dropBlanks",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "partial": "Blanks",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropBlanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop delimiters from the output (the default is to keep\n   them). For example,\n\u003c/p\u003e\u003cpre\u003e split (oneOf \":\") \"a:b:c\" == [\"a\", \":\", \"b\", \":\", \"c\"]\n split (dropDelims $ oneOf \":\") \"a:b:c\" == [\"a\", \"b\", \"c\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "dropDelims",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#dropDelims",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropDelims\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:dropDelims\"]"
        },
        "index": {
          "description": "Drop delimiters from the output the default is to keep them For example split oneOf split dropDelims oneOf",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "dropDelims",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "partial": "Delims",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropDelims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop a final blank chunk according to the given \u003ccode\u003e\u003ca\u003eEndPolicy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "dropFinal",
          "package": "split",
          "signature": "EndPolicy -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#dropFinal",
          "type": "function"
        },
        "index": {
          "description": "Drop final blank chunk according to the given EndPolicy",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "dropFinal",
          "normalized": "EndPolicy-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Final",
          "signature": "EndPolicy-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't generate a blank chunk if there is a delimiter at the end.\n   For example:\n\u003c/p\u003e\u003cpre\u003e split (oneOf \":\") \"a:b:\" == [\"a\",\":\",\"b\",\":\",\"\"]\n split (dropFinalBlank $ oneOf \":\") \"a:b:\" == [\"a\",\":\",\"b\",\":\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "dropFinalBlank",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#dropFinalBlank",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropFinalBlank\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:dropFinalBlank\"]"
        },
        "index": {
          "description": "Don generate blank chunk if there is delimiter at the end For example split oneOf split dropFinalBlank oneOf",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "dropFinalBlank",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "partial": "Final Blank",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropFinalBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't generate a blank chunk if there is a delimiter at the\n   beginning.  For example:\n\u003c/p\u003e\u003cpre\u003e split (oneOf \":\") \":a:b\" == [\"\",\":\",\"a\",\":\",\"b\"]\n split (dropInitBlank $ oneOf \":\") \":a:b\" == [\":\",\"a\",\":\",\"b\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "dropInitBlank",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#dropInitBlank",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropInitBlank\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:dropInitBlank\"]"
        },
        "index": {
          "description": "Don generate blank chunk if there is delimiter at the beginning For example split oneOf split dropInitBlank oneOf",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "dropInitBlank",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "partial": "Init Blank",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropInitBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop an initial blank chunk according to the given \u003ccode\u003e\u003ca\u003eEndPolicy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "dropInitial",
          "package": "split",
          "signature": "EndPolicy -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#dropInitial",
          "type": "function"
        },
        "index": {
          "description": "Drop an initial blank chunk according to the given EndPolicy",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "dropInitial",
          "normalized": "EndPolicy-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Initial",
          "signature": "EndPolicy-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't generate blank chunks between consecutive delimiters.\n   For example:\n\u003c/p\u003e\u003cpre\u003e split (oneOf \":\") \"::b:::a\" == [\"\",\":\",\"\",\":\",\"b\",\":\",\"\",\":\",\"\",\":\",\"a\"]\n split (dropInnerBlanks $ oneOf \":\") \"::b:::a\" == [\"\", \":\",\":\",\"b\",\":\",\":\",\":\",\"a\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "dropInnerBlanks",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#dropInnerBlanks",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropInnerBlanks\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:dropInnerBlanks\"]"
        },
        "index": {
          "description": "Don generate blank chunks between consecutive delimiters For example split oneOf split dropInnerBlanks oneOf",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "dropInnerBlanks",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "partial": "Inner Blanks",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:dropInnerBlanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit into chunks terminated by the given subsequence.\n   Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropFinalBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropDelims\u003c/a\u003e\u003c/code\u003e\n   . \u003ccode\u003e\u003ca\u003eonSublist\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e endBy \";\" \"foo;bar;baz;\" == [\"foo\",\"bar\",\"baz\"]\n\u003c/pre\u003e\u003cp\u003eNote also that the \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e function from \u003ca\u003eData.List\u003c/a\u003e is equivalent\n   to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eendBy\u003c/a\u003e\u003c/code\u003e \"\\n\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "endBy",
          "package": "split",
          "signature": "[a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#endBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endBy\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:endBy\"]"
        },
        "index": {
          "description": "Split into chunks terminated by the given subsequence Equivalent to split dropFinalBlank dropDelims onSublist For example endBy foo bar baz foo bar baz Note also that the lines function from Data.List is equivalent to endBy",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "endBy",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "By",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit into chunks terminated by one of the given elements.\n   Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropFinalBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropDelims\u003c/a\u003e\u003c/code\u003e\n   . \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e endByOneOf \";,\" \"foo;bar,baz;\" == [\"foo\",\"bar\",\"baz\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "endByOneOf",
          "package": "split",
          "signature": "[a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#endByOneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endByOneOf\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:endByOneOf\"]"
        },
        "index": {
          "description": "Split into chunks terminated by one of the given elements Equivalent to split dropFinalBlank dropDelims oneOf For example endByOneOf foo bar baz foo bar baz",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "endByOneOf",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "By One Of",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endByOneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a strategy that splits a list into chunks that all end with\n   the given subsequence, except possibly the last.  Equivalent to\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003edropFinalBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ekeepDelimsR\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eonSublist\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e split (endsWith \"ly\") \"happilyslowlygnarlylily\" == [\"happily\",\"slowly\",\"gnarly\",\"lily\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "endsWith",
          "package": "split",
          "signature": "[a] -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#endsWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endsWith\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:endsWith\"]"
        },
        "index": {
          "description": "Make strategy that splits list into chunks that all end with the given subsequence except possibly the last Equivalent to dropFinalBlank keepDelimsR onSublist For example split endsWith ly happilyslowlygnarlylily happily slowly gnarly lily",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "endsWith",
          "normalized": "[a]-\u003eSplitter a",
          "package": "split",
          "partial": "With",
          "signature": "[a]-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a strategy that splits a list into chunks that all end with\n   one of the given elements, except possibly the last.  Equivalent\n   to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edropFinalBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ekeepDelimsR\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e split (condense $ endsWithOneOf \".,?! \") \"Hi, there!  How are you?\" == [\"Hi, \",\"there!  \",\"How \",\"are \",\"you?\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "endsWithOneOf",
          "package": "split",
          "signature": "[a] -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#endsWithOneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endsWithOneOf\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:endsWithOneOf\"]"
        },
        "index": {
          "description": "Make strategy that splits list into chunks that all end with one of the given elements except possibly the last Equivalent to dropFinalBlank keepDelimsR oneOf For example split condense endsWithOneOf Hi there How are you Hi there How are you",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "endsWithOneOf",
          "normalized": "[a]-\u003eSplitter a",
          "package": "split",
          "partial": "With One Of",
          "signature": "[a]-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:endsWithOneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop a final blank?\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "finalBlankPolicy",
          "package": "split",
          "signature": "EndPolicy",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "function"
        },
        "index": {
          "description": "Drop final blank",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "finalBlankPolicy",
          "package": "split",
          "partial": "Blank Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:finalBlankPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUntag a \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "fromElem",
          "package": "split",
          "signature": "Chunk a -\u003e [a]",
          "source": "src/Data-List-Split-Internals.html#fromElem",
          "type": "function"
        },
        "index": {
          "description": "Untag Chunk",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "fromElem",
          "normalized": "Chunk a-\u003e[a]",
          "package": "split",
          "partial": "Elem",
          "signature": "Chunk a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:fromElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop an initial blank?\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "initBlankPolicy",
          "package": "split",
          "signature": "EndPolicy",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "function"
        },
        "index": {
          "description": "Drop an initial blank",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "initBlankPolicy",
          "package": "split",
          "partial": "Blank Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:initBlankPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert blank chunks between any remaining consecutive delimiters\n   (unless the condense policy is \u003ccode\u003e\u003ca\u003eDropBlankFields\u003c/a\u003e\u003c/code\u003e), and at the\n   beginning or end if the first or last element is a delimiter.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "insertBlanks",
          "package": "split",
          "signature": "CondensePolicy -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#insertBlanks",
          "type": "function"
        },
        "index": {
          "description": "Insert blank chunks between any remaining consecutive delimiters unless the condense policy is DropBlankFields and at the beginning or end if the first or last element is delimiter",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "insertBlanks",
          "normalized": "CondensePolicy-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Blanks",
          "signature": "CondensePolicy-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:insertBlanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert blank chunks between consecutive delimiters.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "insertBlanks'",
          "package": "split",
          "signature": "CondensePolicy -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#insertBlanks%27",
          "type": "function"
        },
        "index": {
          "description": "Insert blank chunks between consecutive delimiters",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "insertBlanks'",
          "normalized": "CondensePolicy-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Blanks'",
          "signature": "CondensePolicy-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:insertBlanks-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e is a delimiter.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "isDelim",
          "package": "split",
          "signature": "Chunk a -\u003e Bool",
          "source": "src/Data-List-Split-Internals.html#isDelim",
          "type": "function"
        },
        "index": {
          "description": "Test whether Chunk is delimiter",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "isDelim",
          "normalized": "Chunk a-\u003eBool",
          "package": "split",
          "partial": "Delim",
          "signature": "Chunk a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:isDelim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e is text.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "isText",
          "package": "split",
          "signature": "Chunk a -\u003e Bool",
          "source": "src/Data-List-Split-Internals.html#isText",
          "type": "function"
        },
        "index": {
          "description": "Test whether Chunk is text",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "isText",
          "normalized": "Chunk a-\u003eBool",
          "package": "split",
          "partial": "Text",
          "signature": "Chunk a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:isText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep delimiters in the output by prepending them to adjacent\n   chunks.  For example:\n\u003c/p\u003e\u003cpre\u003e split (keepDelimsL $ oneOf \"xyz\") \"aazbxyzcxd\" == [\"aa\",\"zb\",\"x\",\"y\",\"zc\",\"xd\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "keepDelimsL",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#keepDelimsL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:keepDelimsL\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:keepDelimsL\"]"
        },
        "index": {
          "description": "Keep delimiters in the output by prepending them to adjacent chunks For example split keepDelimsL oneOf xyz aazbxyzcxd aa zb zc xd",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "keepDelimsL",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "partial": "Delims",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:keepDelimsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep delimiters in the output by appending them to adjacent\n   chunks. For example:\n\u003c/p\u003e\u003cpre\u003e split (keepDelimsR $ oneOf \"xyz\") \"aazbxyzcxd\" == [\"aaz\",\"bx\",\"y\",\"z\",\"cx\",\"d\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "keepDelimsR",
          "package": "split",
          "signature": "Splitter a -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#keepDelimsR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:keepDelimsR\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:keepDelimsR\"]"
        },
        "index": {
          "description": "Keep delimiters in the output by appending them to adjacent chunks For example split keepDelimsR oneOf xyz aazbxyzcxd aaz bx cx",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "keepDelimsR",
          "normalized": "Splitter a-\u003eSplitter a",
          "package": "split",
          "partial": "Delims",
          "signature": "Splitter a-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:keepDelimsR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit into \"lines\", with line boundaries indicated by the given\n   predicate. Satisfies \u003ccode\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e === linesBy (=='\\n')\u003c/code\u003e; equivalent to\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropFinalBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropDelims\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ewhenElt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e linesBy (=='x') \"dogxxxcatxbirdxx\" == [\"dog\",\"\",\"\",\"cat\",\"bird\",\"\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "linesBy",
          "package": "split",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#linesBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:linesBy\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:linesBy\"]"
        },
        "index": {
          "description": "Split into lines with line boundaries indicated by the given predicate Satisfies lines linesBy equivalent to split dropFinalBlank dropDelims whenElt For example linesBy dogxxxcatxbirdxx dog cat bird",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "linesBy",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "By",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:linesBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to match a delimiter at the start of a list, either failing\n   or decomposing the list into the portion which matched the delimiter\n   and the remainder.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "matchDelim",
          "package": "split",
          "signature": "Delimiter a -\u003e [a] -\u003e Maybe ([a], [a])",
          "source": "src/Data-List-Split-Internals.html#matchDelim",
          "type": "function"
        },
        "index": {
          "description": "Try to match delimiter at the start of list either failing or decomposing the list into the portion which matched the delimiter and the remainder",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "matchDelim",
          "normalized": "Delimiter a-\u003e[a]-\u003eMaybe([a],[a])",
          "package": "split",
          "partial": "Delim",
          "signature": "Delimiter a-\u003e[a]-\u003eMaybe([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:matchDelim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge delimiters with adjacent chunks to the right (yes, that's\n   not a typo: the delimiters should end up on the left of the\n   chunks, so they are merged with chunks to their right).\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "mergeLeft",
          "package": "split",
          "signature": "SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#mergeLeft",
          "type": "function"
        },
        "index": {
          "description": "Merge delimiters with adjacent chunks to the right yes that not typo the delimiters should end up on the left of the chunks so they are merged with chunks to their right",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "mergeLeft",
          "normalized": "SplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Left",
          "signature": "SplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:mergeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge delimiters with adjacent chunks to the left.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "mergeRight",
          "package": "split",
          "signature": "SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#mergeRight",
          "type": "function"
        },
        "index": {
          "description": "Merge delimiters with adjacent chunks to the left",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "mergeRight",
          "normalized": "SplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Right",
          "signature": "SplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:mergeRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splitting strategy that splits on the given list, when it is\n   encountered as an exact subsequence.  For example:\n\u003c/p\u003e\u003cpre\u003e split (onSublist \"xyz\") \"aazbxyzcxd\" == [\"aazb\",\"xyz\",\"cxd\"]\n\u003c/pre\u003e\u003cp\u003eNote that splitting on the empty list is a special case, which\n   splits just before every element of the list being split.  For example:\n\u003c/p\u003e\u003cpre\u003e split (onSublist \"\") \"abc\" == [\"\",\"\",\"a\",\"\",\"b\",\"\",\"c\"]\n split (dropDelims . dropBlanks $ onSublist \"\") \"abc\" == [\"a\",\"b\",\"c\"]\n\u003c/pre\u003e\u003cp\u003eHowever, if you want to break a list into singleton elements like\n   this, you are better off using \u003ccode\u003e\u003ccode\u003e\u003ca\u003echunksOf\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e, or better yet,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (:[])\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "onSublist",
          "package": "split",
          "signature": "[a] -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#onSublist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:onSublist\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:onSublist\"]"
        },
        "index": {
          "description": "splitting strategy that splits on the given list when it is encountered as an exact subsequence For example split onSublist xyz aazbxyzcxd aazb xyz cxd Note that splitting on the empty list is special case which splits just before every element of the list being split For example split onSublist abc split dropDelims dropBlanks onSublist abc However if you want to break list into singleton elements like this you are better off using chunksOf or better yet map",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "onSublist",
          "normalized": "[a]-\u003eSplitter a",
          "package": "split",
          "partial": "Sublist",
          "signature": "[a]-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:onSublist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splitting strategy that splits on any one of the given\n   elements.  For example:\n\u003c/p\u003e\u003cpre\u003e split (oneOf \"xyz\") \"aazbxyzcxd\" == [\"aa\",\"z\",\"b\",\"x\",\"\",\"y\",\"\",\"z\",\"c\",\"x\",\"d\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "oneOf",
          "package": "split",
          "signature": "[a] -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#oneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:oneOf\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:oneOf\"]"
        },
        "index": {
          "description": "splitting strategy that splits on any one of the given elements For example split oneOf xyz aazbxyzcxd aa",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "oneOf",
          "normalized": "[a]-\u003eSplitter a",
          "package": "split",
          "partial": "Of",
          "signature": "[a]-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a split list in the internal tagged representation, produce\n   a new internal tagged representation corresponding to the final\n   output, according to the strategy defined by the given\n   \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Split.Internals",
          "name": "postProcess",
          "package": "split",
          "signature": "Splitter a -\u003e SplitList a -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#postProcess",
          "type": "function"
        },
        "index": {
          "description": "Given split list in the internal tagged representation produce new internal tagged representation corresponding to the final output according to the strategy defined by the given Splitter",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "postProcess",
          "normalized": "Splitter a-\u003eSplitList a-\u003eSplitList a",
          "package": "split",
          "partial": "Process",
          "signature": "Splitter a-\u003eSplitList a-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:postProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a list according to the given splitting strategy.  This is\n   how to \"run\" a \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e that has been built using the other\n   combinators.\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "split",
          "package": "split",
          "signature": "Splitter a -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#split",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:split\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:split\"]"
        },
        "index": {
          "description": "Split list according to the given splitting strategy This is how to run Splitter that has been built using the other combinators",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "split",
          "normalized": "Splitter a-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "signature": "Splitter a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a delimiter to use, split a list into an internal\n   representation with chunks tagged as delimiters or text.  This\n   transformation is lossless; in particular,\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efromElem\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplitInternal\u003c/a\u003e\u003c/code\u003e d l) == l.\n\u003c/pre\u003e",
          "module": "Data.List.Split.Internals",
          "name": "splitInternal",
          "package": "split",
          "signature": "Delimiter a -\u003e [a] -\u003e SplitList a",
          "source": "src/Data-List-Split-Internals.html#splitInternal",
          "type": "function"
        },
        "index": {
          "description": "Given delimiter to use split list into an internal representation with chunks tagged as delimiters or text This transformation is lossless in particular concatMap fromElem splitInternal",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "splitInternal",
          "normalized": "Delimiter a-\u003e[a]-\u003eSplitList a",
          "package": "split",
          "partial": "Internal",
          "signature": "Delimiter a-\u003e[a]-\u003eSplitList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on the given sublist.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n   . \u003ccode\u003e\u003ca\u003edropDelims\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eonSublist\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e splitOn \"..\" \"a..b...c....d..\" == [\"a\",\"b\",\".c\",\"\",\"d\",\"\"]\n\u003c/pre\u003e\u003cp\u003eIn some parsing combinator frameworks this is also known as\n   \u003ccode\u003esepBy\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this is the right inverse of the \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function\n   from \u003ca\u003eData.List\u003c/a\u003e, that is,\n\u003c/p\u003e\u003cpre\u003e intercalate x . splitOn x === id\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitOn\u003c/a\u003e\u003c/code\u003e x . \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is the identity on\n   certain lists, but it is tricky to state the precise conditions\n   under which this holds.  (For example, it is not enough to say\n   that \u003ccode\u003ex\u003c/code\u003e does not occur in any elements of the input list.\n   Working out why is left as an exercise for the reader.)\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "splitOn",
          "package": "split",
          "signature": "[a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#splitOn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitOn\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:splitOn\"]"
        },
        "index": {
          "description": "Split on the given sublist Equivalent to split dropDelims onSublist For example splitOn a..b...c....d In some parsing combinator frameworks this is also known as sepBy Note that this is the right inverse of the intercalate function from Data.List that is intercalate splitOn id splitOn intercalate is the identity on certain lists but it is tricky to state the precise conditions under which this holds For example it is not enough to say that does not occur in any elements of the input list Working out why is left as an exercise for the reader",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "splitOn",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "On",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on any of the given elements.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n   . \u003ccode\u003e\u003ca\u003edropDelims\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e splitOneOf \";.,\" \"foo,bar;baz.glurk\" == [\"foo\",\"bar\",\"baz\",\"glurk\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "splitOneOf",
          "package": "split",
          "signature": "[a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#splitOneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitOneOf\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:splitOneOf\"]"
        },
        "index": {
          "description": "Split on any of the given elements Equivalent to split dropDelims oneOf For example splitOneOf foo bar baz.glurk foo bar baz glurk",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "splitOneOf",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "One Of",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitOneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a list into chunks of the given lengths. For example:\n\u003c/p\u003e\u003cpre\u003e splitPlaces [2,3,4] [1..20] == [[1,2],[3,4,5],[6,7,8,9]]\n splitPlaces [4,9] [1..10] == [[1,2,3,4],[5,6,7,8,9,10]]\n splitPlaces [4,9,3] [1..10] == [[1,2,3,4],[5,6,7,8,9,10]]\n\u003c/pre\u003e\u003cp\u003eIf the input list is longer than the total of the given lengths,\n   then the remaining elements are dropped. If the list is shorter\n   than the total of the given lengths, then the result may contain\n   fewer chunks than requested, and the last chunk may be shorter\n   than requested.\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "splitPlaces",
          "package": "split",
          "signature": "[a] -\u003e [e] -\u003e [[e]]",
          "source": "src/Data-List-Split-Internals.html#splitPlaces",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitPlaces\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:splitPlaces\"]"
        },
        "index": {
          "description": "Split list into chunks of the given lengths For example splitPlaces splitPlaces splitPlaces If the input list is longer than the total of the given lengths then the remaining elements are dropped If the list is shorter than the total of the given lengths then the result may contain fewer chunks than requested and the last chunk may be shorter than requested",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "splitPlaces",
          "normalized": "[a]-\u003e[b]-\u003e[[b]]",
          "package": "split",
          "partial": "Places",
          "signature": "[a]-\u003e[e]-\u003e[[e]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitPlaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a list into chunks of the given lengths. Unlike\n   \u003ccode\u003e\u003ca\u003esplitPlaces\u003c/a\u003e\u003c/code\u003e, the output list will always be the same length as\n   the first input argument. If the input list is longer than the\n   total of the given lengths, then the remaining elements are\n   dropped. If the list is shorter than the total of the given\n   lengths, then the last several chunks will be shorter than\n   requested or empty. For example:\n\u003c/p\u003e\u003cpre\u003e splitPlacesBlanks [2,3,4] [1..20] == [[1,2],[3,4,5],[6,7,8,9]]\n splitPlacesBlanks [4,9] [1..10] == [[1,2,3,4],[5,6,7,8,9,10]]\n splitPlacesBlanks [4,9,3] [1..10] == [[1,2,3,4],[5,6,7,8,9,10],[]]\n\u003c/pre\u003e\u003cp\u003eNotice the empty list in the output of the third example, which\n   differs from the behavior of \u003ccode\u003e\u003ca\u003esplitPlaces\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "splitPlacesBlanks",
          "package": "split",
          "signature": "[a] -\u003e [e] -\u003e [[e]]",
          "source": "src/Data-List-Split-Internals.html#splitPlacesBlanks",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitPlacesBlanks\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:splitPlacesBlanks\"]"
        },
        "index": {
          "description": "Split list into chunks of the given lengths Unlike splitPlaces the output list will always be the same length as the first input argument If the input list is longer than the total of the given lengths then the remaining elements are dropped If the list is shorter than the total of the given lengths then the last several chunks will be shorter than requested or empty For example splitPlacesBlanks splitPlacesBlanks splitPlacesBlanks Notice the empty list in the output of the third example which differs from the behavior of splitPlaces",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "splitPlacesBlanks",
          "normalized": "[a]-\u003e[b]-\u003e[[b]]",
          "package": "split",
          "partial": "Places Blanks",
          "signature": "[a]-\u003e[e]-\u003e[[e]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitPlacesBlanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on elements satisfying the given predicate.  Equivalent to\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropDelims\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ewhenElt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e splitWhen (\u003c0) [1,3,-4,5,7,-9,0,2] == [[1,3],[5,7],[0,2]]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "splitWhen",
          "package": "split",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#splitWhen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitWhen\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:splitWhen\"]"
        },
        "index": {
          "description": "Split on elements satisfying the given predicate Equivalent to split dropDelims whenElt For example splitWhen",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "splitWhen",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "When",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:splitWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a strategy that splits a list into chunks that all start\n   with the given subsequence (except possibly the first).\n   Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edropInitBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ekeepDelimsL\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eonSublist\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n   For example:\n\u003c/p\u003e\u003cpre\u003e split (startsWith \"app\") \"applyapplicativeapplaudapproachapple\" == [\"apply\",\"applicative\",\"applaud\",\"approach\",\"apple\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "startsWith",
          "package": "split",
          "signature": "[a] -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#startsWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:startsWith\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:startsWith\"]"
        },
        "index": {
          "description": "Make strategy that splits list into chunks that all start with the given subsequence except possibly the first Equivalent to dropInitBlank keepDelimsL onSublist For example split startsWith app applyapplicativeapplaudapproachapple apply applicative applaud approach apple",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "startsWith",
          "normalized": "[a]-\u003eSplitter a",
          "package": "split",
          "partial": "With",
          "signature": "[a]-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:startsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a strategy that splits a list into chunks that all start\n   with one of the given elements (except possibly the first).\n   Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edropInitBlank\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ekeepDelimsL\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For\n   example:\n\u003c/p\u003e\u003cpre\u003e split (startsWithOneOf ['A'..'Z']) \"ACamelCaseIdentifier\" == [\"A\",\"Camel\",\"Case\",\"Identifier\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "startsWithOneOf",
          "package": "split",
          "signature": "[a] -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#startsWithOneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:startsWithOneOf\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:startsWithOneOf\"]"
        },
        "index": {
          "description": "Make strategy that splits list into chunks that all start with one of the given elements except possibly the first Equivalent to dropInitBlank keepDelimsL oneOf For example split startsWithOneOf ACamelCaseIdentifier Camel Case Identifier",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "startsWithOneOf",
          "normalized": "[a]-\u003eSplitter a",
          "package": "split",
          "partial": "With One Of",
          "signature": "[a]-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:startsWithOneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splitting strategy that splits on any elements that satisfy the\n   given predicate.  For example:\n\u003c/p\u003e\u003cpre\u003e split (whenElt (\u003c0)) [2,4,-3,6,-9,1] == [[2,4],[-3],[6],[-9],[1]]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "whenElt",
          "package": "split",
          "signature": "(a -\u003e Bool) -\u003e Splitter a",
          "source": "src/Data-List-Split-Internals.html#whenElt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:whenElt\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:whenElt\"]"
        },
        "index": {
          "description": "splitting strategy that splits on any elements that satisfy the given predicate For example split whenElt",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "whenElt",
          "normalized": "(a-\u003eBool)-\u003eSplitter a",
          "package": "split",
          "partial": "Elt",
          "signature": "(a-\u003eBool)-\u003eSplitter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:whenElt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit into \"words\", with word boundaries indicated by the given\n   predicate.  Satisfies \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e === wordsBy\n   \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edropBlanks\u003c/a\u003e\u003c/code\u003e\n   . \u003ccode\u003e\u003ca\u003edropDelims\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ewhenElt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e wordsBy (=='x') \"dogxxxcatxbirdxx\" == [\"dog\",\"cat\",\"bird\"]\n\u003c/pre\u003e",
          "module": "[\"Data.List.Split.Internals\",\"Data.List.Split\"]",
          "name": "wordsBy",
          "package": "split",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-Split-Internals.html#wordsBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:wordsBy\",\"http://hackage.haskell.org/package/split/docs/Data-List-Split.html#v:wordsBy\"]"
        },
        "index": {
          "description": "Split into words with word boundaries indicated by the given predicate Satisfies words wordsBy isSpace equivalent to split dropBlanks dropDelims whenElt For example wordsBy dogxxxcatxbirdxx dog cat bird",
          "hierarchy": "Data List Split Internals",
          "module": "Data.List.Split.Internals",
          "name": "wordsBy",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "split",
          "partial": "By",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split-Internals.html#v:wordsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eData.List.Split\u003c/a\u003e module contains a wide range of strategies\n for splitting lists with respect to some sort of delimiter, mostly\n implemented through a unified combinator interface.  The goal is to\n be flexible yet simple.  See below for usage, examples, and\n detailed documentation of all exported functions.  If you want to\n learn about the implementation, see \u003ca\u003eData.List.Split.Internals\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA darcs repository containing the source (including a module with\n over 40 QuickCheck properties) can be found at\n \u003ca\u003ehttp://hub.darcs.net/byorgey/split\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Split",
          "name": "Split",
          "package": "split",
          "source": "src/Data-List-Split.html",
          "type": "module"
        },
        "index": {
          "description": "The Data.List.Split module contains wide range of strategies for splitting lists with respect to some sort of delimiter mostly implemented through unified combinator interface The goal is to be flexible yet simple See below for usage examples and detailed documentation of all exported functions If you want to learn about the implementation see Data.List.Split.Internals darcs repository containing the source including module with over QuickCheck properties can be found at http hub.darcs.net byorgey split",
          "hierarchy": "Data List Split",
          "module": "Data.List.Split",
          "name": "Split",
          "package": "split",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splitting strategy.\n\u003c/p\u003e",
          "module": "Data.List.Split",
          "name": "Splitter",
          "package": "split",
          "source": "src/Data-List-Split-Internals.html#Splitter",
          "type": "data"
        },
        "index": {
          "description": "splitting strategy",
          "hierarchy": "Data List Split",
          "module": "Data.List.Split",
          "name": "Splitter",
          "package": "split",
          "partial": "Splitter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split/docs/Data-List-Split.html#t:Splitter"
      }
    }
  ]
]