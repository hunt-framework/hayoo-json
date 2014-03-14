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
        "word": "classy-prelude"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "ClassyPrelude",
          "package": "classy-prelude",
          "source": "src/ClassyPrelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "ClassyPrelude",
          "package": "classy-prelude",
          "partial": "Classy Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell defines operations to read and write characters from and to files,\n represented by values of type \u003ccode\u003eHandle\u003c/code\u003e.  Each value of this type is a\n \u003cem\u003ehandle\u003c/em\u003e: a record used by the Haskell run-time system to \u003cem\u003emanage\u003c/em\u003e I/O\n with file system objects.  A handle has at least the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether it manages input or output or both;\n\u003c/li\u003e\u003cli\u003e whether it is \u003cem\u003eopen\u003c/em\u003e, \u003cem\u003eclosed\u003c/em\u003e or \u003cem\u003esemi-closed\u003c/em\u003e;\n\u003c/li\u003e\u003cli\u003e whether the object is seekable;\n\u003c/li\u003e\u003cli\u003e whether buffering is disabled, or enabled on a line or block basis;\n\u003c/li\u003e\u003cli\u003e a buffer (whose length may be zero).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMost handles will also have a current I/O position indicating where the next\n input or output operation will occur.  A handle is \u003cem\u003ereadable\u003c/em\u003e if it\n manages only input or both input and output; likewise, it is \u003cem\u003ewritable\u003c/em\u003e if\n it manages only output or both input and output.  A handle is \u003cem\u003eopen\u003c/em\u003e when\n first allocated.\n Once it is closed it can no longer be used for either input or output,\n though an implementation cannot re-use its storage while references\n remain to it.  Handles are in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e classes.  The string\n produced by showing a handle is system dependent; it should include\n enough information to identify the handle for debugging.  A handle is\n equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e only to itself; no attempt\n is made to compare the internal state of different handles for equality.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "Handle",
          "package": "classy-prelude",
          "type": "data"
        },
        "index": {
          "description": "Haskell defines operations to read and write characters from and to files represented by values of type Handle Each value of this type is handle record used by the Haskell run-time system to manage with file system objects handle has at least the following properties whether it manages input or output or both whether it is open closed or semi-closed whether the object is seekable whether buffering is disabled or enabled on line or block basis buffer whose length may be zero Most handles will also have current position indicating where the next input or output operation will occur handle is readable if it manages only input or both input and output likewise it is writable if it manages only output or both input and output handle is open when first allocated Once it is closed it can no longer be used for either input or output though an implementation cannot re-use its storage while references remain to it Handles are in the Show and Eq classes The string produced by showing handle is system dependent it should include enough information to identify the handle for debugging handle is equal according to only to itself no attempt is made to compare the internal state of different handles for equality",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "Handle",
          "package": "classy-prelude",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData which can be read to and from files and handles.\n\u003c/p\u003e\u003cp\u003eNote that, for lazy sequences, these operations may perform\n lazy I/O.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "IOData",
          "package": "classy-prelude",
          "type": "class"
        },
        "index": {
          "description": "Data which can be read to and from files and handles Note that for lazy sequences these operations may perform lazy",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "IOData",
          "package": "classy-prelude",
          "partial": "IOData",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#t:IOData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "Semigroup",
          "package": "classy-prelude",
          "type": "class"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "Semigroup",
          "package": "classy-prelude",
          "partial": "Semigroup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#t:Semigroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ClassyPrelude",
          "name": "Show",
          "package": "classy-prelude",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "Show",
          "package": "classy-prelude",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a Semigroup for an arbitrary Monoid.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "WrappedMonoid",
          "package": "classy-prelude",
          "type": "data"
        },
        "index": {
          "description": "Provide Semigroup for an arbitrary Monoid",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "WrappedMonoid",
          "package": "classy-prelude",
          "partial": "Wrapped Monoid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#t:WrappedMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "(++)",
          "package": "classy-prelude",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/ClassyPrelude.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "(++) ++",
          "normalized": "a-\u003ea-\u003ea",
          "package": "classy-prelude",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation.\n\u003c/p\u003e\u003cpre\u003e (a \u003c\u003e b) \u003c\u003e c = a \u003c\u003e (b \u003c\u003e c)\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ea\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e we further require\n\u003c/p\u003e\u003cpre\u003e (\u003c\u003e) = mappend\n\u003c/pre\u003e",
          "module": "ClassyPrelude",
          "name": "(\u003c\u003e)",
          "package": "classy-prelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation If is also Monoid we further require mappend",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "classy-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "(\\\\)",
          "package": "classy-prelude",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/ClassyPrelude.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "An alias for difference",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "(\\\\) \\\\",
          "normalized": "a-\u003ea-\u003ea",
          "package": "classy-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "all",
          "package": "classy-prelude",
          "signature": "(Element c -\u003e Bool) -\u003e c -\u003e Bool",
          "source": "src/ClassyPrelude.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "all",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003eBool",
          "package": "classy-prelude",
          "signature": "(Element c-\u003eBool)-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "any",
          "package": "classy-prelude",
          "signature": "(Element c -\u003e Bool) -\u003e c -\u003e Bool",
          "source": "src/ClassyPrelude.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "any",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003eBool",
          "package": "classy-prelude",
          "signature": "(Element c-\u003eBool)-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asByteString",
          "package": "classy-prelude",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/ClassyPrelude.html#asByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asByteString",
          "normalized": "ByteString-\u003eByteString",
          "package": "classy-prelude",
          "partial": "Byte String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asHashMap",
          "package": "classy-prelude",
          "signature": "HashMap k v -\u003e HashMap k v",
          "source": "src/ClassyPrelude.html#asHashMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asHashMap",
          "normalized": "HashMap a b-\u003eHashMap a b",
          "package": "classy-prelude",
          "partial": "Hash Map",
          "signature": "HashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asHashMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asHashSet",
          "package": "classy-prelude",
          "signature": "HashSet a -\u003e HashSet a",
          "source": "src/ClassyPrelude.html#asHashSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asHashSet",
          "normalized": "HashSet a-\u003eHashSet a",
          "package": "classy-prelude",
          "partial": "Hash Set",
          "signature": "HashSet a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asHashSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asLByteString",
          "package": "classy-prelude",
          "signature": "LByteString -\u003e LByteString",
          "source": "src/ClassyPrelude.html#asLByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asLByteString",
          "normalized": "LByteString-\u003eLByteString",
          "package": "classy-prelude",
          "partial": "LByte String",
          "signature": "LByteString-\u003eLByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asLByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asLText",
          "package": "classy-prelude",
          "signature": "LText -\u003e LText",
          "source": "src/ClassyPrelude.html#asLText",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asLText",
          "normalized": "LText-\u003eLText",
          "package": "classy-prelude",
          "partial": "LText",
          "signature": "LText-\u003eLText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asLText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asList",
          "package": "classy-prelude",
          "signature": "[a] -\u003e [a]",
          "source": "src/ClassyPrelude.html#asList",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asList",
          "normalized": "[a]-\u003e[a]",
          "package": "classy-prelude",
          "partial": "List",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asMap",
          "package": "classy-prelude",
          "signature": "Map k v -\u003e Map k v",
          "source": "src/ClassyPrelude.html#asMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asMap",
          "normalized": "Map a b-\u003eMap a b",
          "package": "classy-prelude",
          "partial": "Map",
          "signature": "Map k v-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asMaybe",
          "package": "classy-prelude",
          "signature": "Maybe a -\u003e Maybe a",
          "source": "src/ClassyPrelude.html#asMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asMaybe",
          "normalized": "Maybe a-\u003eMaybe a",
          "package": "classy-prelude",
          "partial": "Maybe",
          "signature": "Maybe a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asSet",
          "package": "classy-prelude",
          "signature": "Set a -\u003e Set a",
          "source": "src/ClassyPrelude.html#asSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asSet",
          "normalized": "Set a-\u003eSet a",
          "package": "classy-prelude",
          "partial": "Set",
          "signature": "Set a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asText",
          "package": "classy-prelude",
          "signature": "Text -\u003e Text",
          "source": "src/ClassyPrelude.html#asText",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asText",
          "normalized": "Text-\u003eText",
          "package": "classy-prelude",
          "partial": "Text",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asUVector",
          "package": "classy-prelude",
          "signature": "UVector a -\u003e UVector a",
          "source": "src/ClassyPrelude.html#asUVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asUVector",
          "normalized": "UVector a-\u003eUVector a",
          "package": "classy-prelude",
          "partial": "UVector",
          "signature": "UVector a-\u003eUVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asUVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "asVector",
          "package": "classy-prelude",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ClassyPrelude.html#asVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "asVector",
          "normalized": "Vector a-\u003eVector a",
          "package": "classy-prelude",
          "partial": "Vector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:asVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the first argument evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then the result is the\n second argument.  Otherwise an \u003ccode\u003eAssertionFailed\u003c/code\u003e exception is raised,\n containing a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e with the source file and line number of the\n call to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAssertions can normally be turned on or off with a compiler flag\n (for GHC, assertions are normally on unless optimisation is turned on \n with \u003ccode\u003e-O\u003c/code\u003e or the \u003ccode\u003e-fignore-asserts\u003c/code\u003e\n option is given).  When assertions are turned off, the first\n argument to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e is ignored, and the second argument is\n returned as the result.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "assert",
          "package": "classy-prelude",
          "signature": "Bool -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "If the first argument evaluates to True then the result is the second argument Otherwise an AssertionFailed exception is raised containing String with the source file and line number of the call to assert Assertions can normally be turned on or off with compiler flag for GHC assertions are normally on unless optimisation is turned on with or the fignore-asserts option is given When assertions are turned off the first argument to assert is ignored and the second argument is returned as the result",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "assert",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "classy-prelude",
          "signature": "Bool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to lower case.\n\u003c/p\u003e\u003cp\u003eCharacter-based case conversion is lossy in comparison to string-based \u003ccode\u003e\u003ca\u003etoLower\u003c/a\u003e\u003c/code\u003e.\n For instance, '&#304;' will be converted to 'i', instead of \"i&#775;\".\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "charToLower",
          "package": "classy-prelude",
          "signature": "Char -\u003e Char",
          "source": "src/ClassyPrelude.html#charToLower",
          "type": "function"
        },
        "index": {
          "description": "Convert character to lower case Character-based case conversion is lossy in comparison to string-based toLower For instance will be converted to instead of",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "charToLower",
          "normalized": "Char-\u003eChar",
          "package": "classy-prelude",
          "partial": "To Lower",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:charToLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to upper case.\n\u003c/p\u003e\u003cp\u003eCharacter-based case conversion is lossy in comparison to string-based \u003ccode\u003e\u003ca\u003etoUpper\u003c/a\u003e\u003c/code\u003e.\n For instance, '&#223;' won't be converted to \"SS\".\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "charToUpper",
          "package": "classy-prelude",
          "signature": "Char -\u003e Char",
          "source": "src/ClassyPrelude.html#charToUpper",
          "type": "function"
        },
        "index": {
          "description": "Convert character to upper case Character-based case conversion is lossy in comparison to string-based toUpper For instance won be converted to SS",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "charToUpper",
          "normalized": "Char-\u003eChar",
          "package": "classy-prelude",
          "partial": "To Upper",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:charToUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "compareLength",
          "package": "classy-prelude",
          "signature": "c -\u003e i -\u003e Ordering",
          "source": "src/ClassyPrelude.html#compareLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "compareLength",
          "normalized": "a-\u003eb-\u003eOrdering",
          "package": "classy-prelude",
          "partial": "Length",
          "signature": "c-\u003ei-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:compareLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "concat",
          "package": "classy-prelude",
          "signature": "c -\u003e Element c",
          "source": "src/ClassyPrelude.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "concat",
          "normalized": "a-\u003eElement a",
          "package": "classy-prelude",
          "signature": "c-\u003eElement c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "concatMap",
          "package": "classy-prelude",
          "signature": "(Element c -\u003e m) -\u003e c -\u003e m",
          "source": "src/ClassyPrelude.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "concatMap",
          "normalized": "(Element a-\u003eb)-\u003ea-\u003eb",
          "package": "classy-prelude",
          "partial": "Map",
          "signature": "(Element c-\u003em)-\u003ec-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "defaultTimeLocale",
          "package": "classy-prelude",
          "signature": "TimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "defaultTimeLocale",
          "package": "classy-prelude",
          "partial": "Time Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:defaultTimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "foldM",
          "package": "classy-prelude",
          "signature": "(a -\u003e Element c -\u003e m a) -\u003e a -\u003e c -\u003e m a",
          "source": "src/ClassyPrelude.html#foldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "foldM",
          "normalized": "(a-\u003eElement b-\u003ec a)-\u003ea-\u003eb-\u003ec a",
          "package": "classy-prelude",
          "signature": "(a-\u003eElement c-\u003em a)-\u003ea-\u003ec-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "foldl'",
          "package": "classy-prelude",
          "signature": "(a -\u003e Element c -\u003e a) -\u003e a -\u003e c -\u003e a",
          "source": "src/ClassyPrelude.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "foldl'",
          "normalized": "(a-\u003eElement b-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "classy-prelude",
          "signature": "(a-\u003eElement c-\u003ea)-\u003ea-\u003ec-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "foldr",
          "package": "classy-prelude",
          "signature": "(Element c -\u003e b -\u003e b) -\u003e b -\u003e c -\u003e b",
          "source": "src/ClassyPrelude.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "foldr",
          "normalized": "(Element a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
          "package": "classy-prelude",
          "signature": "(Element c-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "forM",
          "package": "classy-prelude",
          "signature": "t a -\u003e (a -\u003e m b) -\u003e m (t b)",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "forM",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ec(a d)",
          "package": "classy-prelude",
          "signature": "t a-\u003e(a-\u003em b)-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "forM_",
          "package": "classy-prelude",
          "signature": "c -\u003e (Element c -\u003e m a) -\u003e m ()",
          "source": "src/ClassyPrelude.html#forM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "forM_",
          "normalized": "a-\u003e(Element a-\u003eb c)-\u003eb()",
          "package": "classy-prelude",
          "signature": "c-\u003e(Element c-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "fpFromString",
          "package": "classy-prelude",
          "signature": "String -\u003e FilePath",
          "source": "src/ClassyPrelude.html#fpFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "fpFromString",
          "normalized": "String-\u003eFilePath",
          "package": "classy-prelude",
          "partial": "From String",
          "signature": "String-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:fpFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "fpFromText",
          "package": "classy-prelude",
          "signature": "Text -\u003e FilePath",
          "source": "src/ClassyPrelude.html#fpFromText",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "fpFromText",
          "normalized": "Text-\u003eFilePath",
          "package": "classy-prelude",
          "partial": "From Text",
          "signature": "Text-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:fpFromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "fpToString",
          "package": "classy-prelude",
          "signature": "FilePath -\u003e String",
          "source": "src/ClassyPrelude.html#fpToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "fpToString",
          "normalized": "FilePath-\u003eString",
          "package": "classy-prelude",
          "partial": "To String",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:fpToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates a FilePath to a Text\n This translation is not correct for a (unix) filename\n which can contain arbitrary (non-unicode) bytes: those bytes will be discarded\n\u003c/p\u003e\u003cp\u003eThis means you cannot translate the Text back to the original file name.\n\u003c/p\u003e\u003cp\u003eIf you control or otherwise understand the filenames\n and believe them to be unicode valid consider using \u003ccode\u003e\u003ca\u003efpToTextEx\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efpToTextWarn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "fpToText",
          "package": "classy-prelude",
          "signature": "FilePath -\u003e Text",
          "source": "src/ClassyPrelude.html#fpToText",
          "type": "function"
        },
        "index": {
          "description": "Translates FilePath to Text This translation is not correct for unix filename which can contain arbitrary non-unicode bytes those bytes will be discarded This means you cannot translate the Text back to the original file name If you control or otherwise understand the filenames and believe them to be unicode valid consider using fpToTextEx or fpToTextWarn",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "fpToText",
          "normalized": "FilePath-\u003eText",
          "package": "classy-prelude",
          "partial": "To Text",
          "signature": "FilePath-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:fpToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates a FilePath to a Text\n Throws an exception if there are non-unicode\n sequences in the file name\n\u003c/p\u003e\u003cp\u003eUse this to assert that you know\n a filename will translate properly into a Text\n If you created the filename, this should be the case.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "fpToTextEx",
          "package": "classy-prelude",
          "signature": "FilePath -\u003e Text",
          "source": "src/ClassyPrelude.html#fpToTextEx",
          "type": "function"
        },
        "index": {
          "description": "Translates FilePath to Text Throws an exception if there are non-unicode sequences in the file name Use this to assert that you know filename will translate properly into Text If you created the filename this should be the case",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "fpToTextEx",
          "normalized": "FilePath-\u003eText",
          "package": "classy-prelude",
          "partial": "To Text Ex",
          "signature": "FilePath-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:fpToTextEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates a FilePath to a Text\n Warns if there are non-unicode\n sequences in the file name\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "fpToTextWarn",
          "package": "classy-prelude",
          "signature": "FilePath -\u003e m Text",
          "source": "src/ClassyPrelude.html#fpToTextWarn",
          "type": "function"
        },
        "index": {
          "description": "Translates FilePath to Text Warns if there are non-unicode sequences in the file name",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "fpToTextWarn",
          "normalized": "FilePath-\u003ea Text",
          "package": "classy-prelude",
          "partial": "To Text Warn",
          "signature": "FilePath-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:fpToTextWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "getLine",
          "package": "classy-prelude",
          "signature": "m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "getLine",
          "package": "classy-prelude",
          "partial": "Line",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e makes handle \u003ccode\u003ehdl\u003c/code\u003e closed.  Before the\n computation finishes, if \u003ccode\u003ehdl\u003c/code\u003e is writable its buffer is flushed as\n for \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e.\n Performing \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e on a handle that has already been closed has no effect; \n doing so is not an error.  All other operations on a closed handle will fail.\n If \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e fails for any reason, any further operations (apart from\n \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e) on the handle will still fail as if \u003ccode\u003ehdl\u003c/code\u003e had been successfully\n closed.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "hClose",
          "package": "classy-prelude",
          "signature": "Handle -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hClose hdl makes handle hdl closed Before the computation finishes if hdl is writable its buffer is flushed as for hFlush Performing hClose on handle that has already been closed has no effect doing so is not an error All other operations on closed handle will fail If hClose fails for any reason any further operations apart from hClose on the handle will still fail as if hdl had been successfully closed",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "hClose",
          "normalized": "Handle-\u003eIO()",
          "package": "classy-prelude",
          "partial": "Close",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "hGetChunk",
          "package": "classy-prelude",
          "signature": "Handle -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "hGetChunk",
          "normalized": "Handle-\u003ea b",
          "package": "classy-prelude",
          "partial": "Get Chunk",
          "signature": "Handle-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:hGetChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "hGetContents",
          "package": "classy-prelude",
          "signature": "Handle -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "hGetContents",
          "normalized": "Handle-\u003ea b",
          "package": "classy-prelude",
          "partial": "Get Contents",
          "signature": "Handle-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "hGetLine",
          "package": "classy-prelude",
          "signature": "Handle -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "hGetLine",
          "normalized": "Handle-\u003ea b",
          "package": "classy-prelude",
          "partial": "Get Line",
          "signature": "Handle-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "hPut",
          "package": "classy-prelude",
          "signature": "Handle -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "hPut",
          "normalized": "Handle-\u003ea-\u003eb()",
          "package": "classy-prelude",
          "partial": "Put",
          "signature": "Handle-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "hPutStrLn",
          "package": "classy-prelude",
          "signature": "Handle -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003ea-\u003eb()",
          "package": "classy-prelude",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame behavior as nub, but requires Hashable & Eq and is O(n log n)\n https:\u003cem/\u003egithub.com\u003cem\u003enh2\u003c/em\u003ehaskell-ordnub\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "hashNub",
          "package": "classy-prelude",
          "signature": "[a] -\u003e [a]",
          "source": "src/ClassyPrelude.html#hashNub",
          "type": "function"
        },
        "index": {
          "description": "same behavior as nub but requires Hashable Eq and is log https github.com nh2 haskell-ordnub",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "hashNub",
          "normalized": "[a]-\u003e[a]",
          "package": "classy-prelude",
          "partial": "Nub",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:hashNub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "intercalate",
          "package": "classy-prelude",
          "signature": "Element c -\u003e c -\u003e Element c",
          "source": "src/ClassyPrelude.html#intercalate",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "intercalate",
          "normalized": "Element a-\u003ea-\u003eElement a",
          "package": "classy-prelude",
          "signature": "Element c-\u003ec-\u003eElement c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "intersect",
          "package": "classy-prelude",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/ClassyPrelude.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "An alias for intersection",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "intersect",
          "normalized": "a-\u003ea-\u003ea",
          "package": "classy-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "length",
          "package": "classy-prelude",
          "signature": "c -\u003e Int",
          "source": "src/ClassyPrelude.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "classy-prelude",
          "signature": "c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "map",
          "package": "classy-prelude",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/ClassyPrelude.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "classy-prelude",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of a structure to a monadic action, evaluate\n these actions from left to right, and collect the results.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "mapM",
          "package": "classy-prelude",
          "signature": "(a -\u003e m b) -\u003e t a -\u003e m (t b)",
          "type": "function"
        },
        "index": {
          "description": "Map each element of structure to monadic action evaluate these actions from left to right and collect the results",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "classy-prelude",
          "signature": "(a-\u003em b)-\u003et a-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "mapM_",
          "package": "classy-prelude",
          "signature": "(Element c -\u003e m a) -\u003e c -\u003e m ()",
          "source": "src/ClassyPrelude.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "mapM_",
          "normalized": "(Element a-\u003eb c)-\u003ea-\u003eb()",
          "package": "classy-prelude",
          "signature": "(Element c-\u003em a)-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "null",
          "package": "classy-prelude",
          "signature": "c -\u003e Bool",
          "source": "src/ClassyPrelude.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "classy-prelude",
          "signature": "c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame behavior as nub, but requires Ord and is O(n log n)\n https:\u003cem/\u003egithub.com\u003cem\u003enh2\u003c/em\u003ehaskell-ordnub\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "ordNub",
          "package": "classy-prelude",
          "signature": "[a] -\u003e [a]",
          "source": "src/ClassyPrelude.html#ordNub",
          "type": "function"
        },
        "index": {
          "description": "same behavior as nub but requires Ord and is log https github.com nh2 haskell-ordnub",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "ordNub",
          "normalized": "[a]-\u003e[a]",
          "package": "classy-prelude",
          "partial": "Nub",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:ordNub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame behavior as nubBy, but requires Ord and is O(n log n)\n https:\u003cem/\u003egithub.com\u003cem\u003enh2\u003c/em\u003ehaskell-ordnub\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "ordNubBy",
          "package": "classy-prelude",
          "signature": "(a -\u003e b) -\u003e (a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/ClassyPrelude.html#ordNubBy",
          "type": "function"
        },
        "index": {
          "description": "same behavior as nubBy but requires Ord and is log https github.com nh2 haskell-ordnub",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "ordNubBy",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "classy-prelude",
          "partial": "Nub By",
          "signature": "(a-\u003eb)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:ordNubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "pack",
          "package": "classy-prelude",
          "signature": "[Element c] -\u003e c",
          "source": "src/ClassyPrelude.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "pack",
          "normalized": "[Element a]-\u003ea",
          "package": "classy-prelude",
          "signature": "[Element c]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "print",
          "package": "classy-prelude",
          "signature": "a -\u003e m ()",
          "source": "src/ClassyPrelude.html#print",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "print",
          "normalized": "a-\u003eb()",
          "package": "classy-prelude",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "product",
          "package": "classy-prelude",
          "signature": "c -\u003e Element c",
          "source": "src/ClassyPrelude.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "product",
          "normalized": "a-\u003eElement a",
          "package": "classy-prelude",
          "signature": "c-\u003eElement c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "readFile",
          "package": "classy-prelude",
          "signature": "FilePath -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "readFile",
          "normalized": "FilePath-\u003ea b",
          "package": "classy-prelude",
          "partial": "File",
          "signature": "FilePath-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "readMay",
          "package": "classy-prelude",
          "signature": "c -\u003e Maybe a",
          "source": "src/ClassyPrelude.html#readMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "readMay",
          "normalized": "a-\u003eMaybe b",
          "package": "classy-prelude",
          "partial": "May",
          "signature": "c-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:readMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepack from one type to another, dropping to a list in the middle.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003erepack = pack . unpack\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "repack",
          "package": "classy-prelude",
          "signature": "a -\u003e b",
          "source": "src/ClassyPrelude.html#repack",
          "type": "function"
        },
        "index": {
          "description": "Repack from one type to another dropping to list in the middle repack pack unpack",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "repack",
          "normalized": "a-\u003eb",
          "package": "classy-prelude",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:repack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "repeat",
          "package": "classy-prelude",
          "signature": "a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite list with the value of every element",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "repeat",
          "normalized": "a-\u003e[a]",
          "package": "classy-prelude",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a non-empty list with \u003ccode\u003e\u003c\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default definition should be sufficient, but this can be overridden for efficiency.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "sconcat",
          "package": "classy-prelude",
          "signature": "NonEmpty a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Reduce non-empty list with The default definition should be sufficient but this can be overridden for efficiency",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "sconcat",
          "normalized": "NonEmpty a-\u003ea",
          "package": "classy-prelude",
          "signature": "NonEmpty a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:sconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "show",
          "package": "classy-prelude",
          "signature": "a -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "classy-prelude",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "showList",
          "package": "classy-prelude",
          "signature": "[a] -\u003e ShowS",
          "type": "method"
        },
        "index": {
          "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "showList",
          "normalized": "[a]-\u003eShowS",
          "package": "classy-prelude",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:showList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "showsPrec",
          "package": "classy-prelude",
          "signature": "showsPrec",
          "type": "method"
        },
        "index": {
          "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "showsPrec",
          "package": "classy-prelude",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort elements using the user supplied function to project something out of\n each element.\n Inspired by \u003ca\u003ehttp://hackage.haskell.org/packages/archive/base/latest/doc/html/GHC-Exts.html#v:sortWith\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "sortWith",
          "package": "classy-prelude",
          "signature": "(Element c -\u003e a) -\u003e c -\u003e c",
          "source": "src/ClassyPrelude.html#sortWith",
          "type": "function"
        },
        "index": {
          "description": "Sort elements using the user supplied function to project something out of each element Inspired by http hackage.haskell.org packages archive base latest doc html GHC-Exts.html sortWith",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "sortWith",
          "normalized": "(Element a-\u003eb)-\u003ea-\u003ea",
          "package": "classy-prelude",
          "partial": "With",
          "signature": "(Element c-\u003ea)-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:sortWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard error channel.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "stderr",
          "package": "classy-prelude",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard error channel",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "stderr",
          "package": "classy-prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing input from the Haskell program's standard input channel.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "stdin",
          "package": "classy-prelude",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing input from the Haskell program standard input channel",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "stdin",
          "package": "classy-prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard output channel.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "stdout",
          "package": "classy-prelude",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard output channel",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "stdout",
          "package": "classy-prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "sum",
          "package": "classy-prelude",
          "signature": "c -\u003e Element c",
          "source": "src/ClassyPrelude.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "sum",
          "normalized": "a-\u003eElement a",
          "package": "classy-prelude",
          "signature": "c-\u003eElement c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a value (n + 1) times.\n\u003c/p\u003e\u003cpre\u003e times1p n a = a \u003c\u003e a \u003c\u003e ... \u003c\u003e a  -- using \u003c\u003e n times\n\u003c/pre\u003e\u003cp\u003eThe default definition uses peasant multiplication, exploiting associativity to only\n require \u003cem\u003eO(log n)\u003c/em\u003e uses of \u003ccode\u003e\u003c\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003etimes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "times1p",
          "package": "classy-prelude",
          "signature": "n -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Repeat value times times1p using times The default definition uses peasant multiplication exploiting associativity to only require log uses of See also times",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "times1p",
          "normalized": "a-\u003eb-\u003eb",
          "package": "classy-prelude",
          "signature": "n-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:times1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "tlshow",
          "package": "classy-prelude",
          "signature": "a -\u003e LText",
          "source": "src/ClassyPrelude.html#tlshow",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "tlshow",
          "normalized": "a-\u003eLText",
          "package": "classy-prelude",
          "signature": "a-\u003eLText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:tlshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "toList",
          "package": "classy-prelude",
          "signature": "c -\u003e [Element c]",
          "source": "src/ClassyPrelude.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "toList",
          "normalized": "a-\u003e[Element a]",
          "package": "classy-prelude",
          "partial": "List",
          "signature": "c-\u003e[Element c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function outputs the trace message given as its first argument,\nbefore returning the second argument as its result.\n\u003c/p\u003e\u003cp\u003eFor example, this returns the value of \u003ccode\u003ef x\u003c/code\u003e but first outputs the message.\n\u003c/p\u003e\u003cpre\u003e trace (\"calling f with x = \" ++ show x) (f x)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function should \u003cem\u003eonly\u003c/em\u003e be used for debugging, or for monitoring\nexecution. The function is not referentially transparent: its type indicates\nthat it is a pure function but it has the side effect of outputting the\ntrace message.\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "trace",
          "package": "classy-prelude",
          "signature": "String -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The trace function outputs the trace message given as its first argument before returning the second argument as its result For example this returns the value of but first outputs the message trace calling with show The trace function should only be used for debugging or for monitoring execution The function is not referentially transparent its type indicates that it is pure function but it has the side effect of outputting the trace message",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "trace",
          "normalized": "String-\u003ea-\u003ea",
          "package": "classy-prelude",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 0.5.9\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "traceId",
          "package": "classy-prelude",
          "signature": "String -\u003e String",
          "source": "src/ClassyPrelude.html#traceId",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "traceId",
          "normalized": "String-\u003eString",
          "package": "classy-prelude",
          "partial": "Id",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:traceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 0.5.9\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "traceM",
          "package": "classy-prelude",
          "signature": "String -\u003e m ()",
          "source": "src/ClassyPrelude.html#traceM",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "traceM",
          "normalized": "String-\u003ea()",
          "package": "classy-prelude",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:traceM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e, but uses \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e on the argument to convert it to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis makes it convenient for printing the values of interesting variables or\nexpressions inside a function. For example here we print the value of the\nvariables \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ez\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e f x y =\n     traceShow (x, z) $ result\n   where\n     z = ...\n     ...\n\u003c/pre\u003e",
          "module": "ClassyPrelude",
          "name": "traceShow",
          "package": "classy-prelude",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Like trace but uses show on the argument to convert it to String This makes it convenient for printing the values of interesting variables or expressions inside function For example here we print the value of the variables and traceShow result where",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "traceShow",
          "normalized": "a-\u003eb-\u003eb",
          "package": "classy-prelude",
          "partial": "Show",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:traceShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 0.5.9\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "traceShowId",
          "package": "classy-prelude",
          "signature": "a -\u003e a",
          "source": "src/ClassyPrelude.html#traceShowId",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "traceShowId",
          "normalized": "a-\u003ea",
          "package": "classy-prelude",
          "partial": "Show Id",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:traceShowId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 0.5.9\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "traceShowM",
          "package": "classy-prelude",
          "signature": "a -\u003e m ()",
          "source": "src/ClassyPrelude.html#traceShowM",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "traceShowM",
          "normalized": "a-\u003eb()",
          "package": "classy-prelude",
          "partial": "Show",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:traceShowM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "tshow",
          "package": "classy-prelude",
          "signature": "a -\u003e Text",
          "source": "src/ClassyPrelude.html#tshow",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "tshow",
          "normalized": "a-\u003eText",
          "package": "classy-prelude",
          "signature": "a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:tshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: It is highly recommended that you either avoid partial functions or provide meaningful error messages\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eWe define our own \u003ccode\u003eundefined\u003c/code\u003e which is marked as deprecated. This makes it\n useful to use during development, but let's you more easily getting\n notification if you accidentally ship partial code in production.\n\u003c/p\u003e\u003cp\u003eThe classy prelude recommendation for when you need to really have a partial\n function in production is to use \u003ccode\u003eerror\u003c/code\u003e with a very descriptive message so\n that, in case an exception is thrown, you get more information than\n \u003ccode\u003ePrelude.undefined\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.5\n\u003c/p\u003e",
          "module": "ClassyPrelude",
          "name": "undefined",
          "package": "classy-prelude",
          "signature": "a",
          "source": "src/ClassyPrelude.html#undefined",
          "type": "function"
        },
        "index": {
          "description": "Deprecated It is highly recommended that you either avoid partial functions or provide meaningful error messages We define our own undefined which is marked as deprecated This makes it useful to use during development but let you more easily getting notification if you accidentally ship partial code in production The classy prelude recommendation for when you need to really have partial function in production is to use error with very descriptive message so that in case an exception is thrown you get more information than Prelude.undefined Since",
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "undefined",
          "package": "classy-prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unions",
          "package": "classy-prelude",
          "signature": "c -\u003e Element c",
          "source": "src/ClassyPrelude.html#unions",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unions",
          "normalized": "a-\u003eElement a",
          "package": "classy-prelude",
          "signature": "c-\u003eElement c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unpack",
          "package": "classy-prelude",
          "signature": "c -\u003e [Element c]",
          "source": "src/ClassyPrelude.html#unpack",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unpack",
          "normalized": "a-\u003e[Element a]",
          "package": "classy-prelude",
          "signature": "c-\u003e[Element c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unzip",
          "package": "classy-prelude",
          "signature": "forall a b.  f (a, b) -\u003e (f a, f b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unzip",
          "normalized": "a b c d(b,e)-\u003e(d b,d e)",
          "package": "classy-prelude",
          "signature": "forall a b. f(a,b)-\u003e(f a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unzip3",
          "package": "classy-prelude",
          "signature": "forall a b c.  f (a, b, c) -\u003e (f a, f b, f c)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unzip3",
          "normalized": "a b c d e(b,c,f)-\u003e(e b,e c,e f)",
          "package": "classy-prelude",
          "signature": "forall a b c. f(a,b,c)-\u003e(f a,f b,f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unzip4",
          "package": "classy-prelude",
          "signature": "forall a b c d.  f (a, b, c, d) -\u003e (f a, f b, f c, f d)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unzip4",
          "normalized": "a b c d e f(b,c,d,g)-\u003e(f b,f c,f d,f g)",
          "package": "classy-prelude",
          "signature": "forall a b c d. f(a,b,c,d)-\u003e(f a,f b,f c,f d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unzip5",
          "package": "classy-prelude",
          "signature": "forall a b c d e.  f (a, b, c, d, e) -\u003e (f a, f b, f c, f d, f e)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unzip5",
          "normalized": "a b c d e f g(b,c,d,e,h)-\u003e(g b,g c,g d,g e,g h)",
          "package": "classy-prelude",
          "signature": "forall a b c d e. f(a,b,c,d,e)-\u003e(f a,f b,f c,f d,f e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unzip6",
          "package": "classy-prelude",
          "signature": "forall a b c d e g.  f (a, b, c, d, e, g) -\u003e (f a, f b, f c, f d, f e, f g)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unzip6",
          "normalized": "a b c d e f g h(b,c,d,e,f,i)-\u003e(h b,h c,h d,h e,h f,h i)",
          "package": "classy-prelude",
          "signature": "forall a b c d e g. f(a,b,c,d,e,g)-\u003e(f a,f b,f c,f d,f e,f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "unzip7",
          "package": "classy-prelude",
          "signature": "forall a b c d e g h.  f (a, b, c, d, e, g, h) -\u003e (f a, f b, f c, f d, f e, f g, f h)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "unzip7",
          "normalized": "a b c d e f g h i(b,c,d,e,f,g,j)-\u003e(i b,i c,i d,i e,i f,i g,i j)",
          "package": "classy-prelude",
          "signature": "forall a b c d e g h. f(a,b,c,d,e,g,h)-\u003e(f a,f b,f c,f d,f e,f g,f h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:unzip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "writeFile",
          "package": "classy-prelude",
          "signature": "FilePath -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "writeFile",
          "normalized": "FilePath-\u003ea-\u003eb()",
          "package": "classy-prelude",
          "partial": "File",
          "signature": "FilePath-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zip",
          "package": "classy-prelude",
          "signature": "forall a b.  f a -\u003e f b -\u003e f (a, b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zip",
          "normalized": "a b c d b-\u003ed e-\u003ed(b,e)",
          "package": "classy-prelude",
          "signature": "forall a b. f a-\u003ef b-\u003ef(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zip3",
          "package": "classy-prelude",
          "signature": "forall a b c.  f a -\u003e f b -\u003e f c -\u003e f (a, b, c)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zip3",
          "normalized": "a b c d e b-\u003ee c-\u003ee f-\u003ee(b,c,f)",
          "package": "classy-prelude",
          "signature": "forall a b c. f a-\u003ef b-\u003ef c-\u003ef(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zip4",
          "package": "classy-prelude",
          "signature": "forall a b c d.  f a -\u003e f b -\u003e f c -\u003e f d -\u003e f (a, b, c, d)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zip4",
          "normalized": "a b c d e f b-\u003ef c-\u003ef d-\u003ef g-\u003ef(b,c,d,g)",
          "package": "classy-prelude",
          "signature": "forall a b c d. f a-\u003ef b-\u003ef c-\u003ef d-\u003ef(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zip5",
          "package": "classy-prelude",
          "signature": "forall a b c d e.  f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e -\u003e f (a, b, c, d, e)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zip5",
          "normalized": "a b c d e f g b-\u003eg c-\u003eg d-\u003eg e-\u003eg h-\u003eg(b,c,d,e,h)",
          "package": "classy-prelude",
          "signature": "forall a b c d e. f a-\u003ef b-\u003ef c-\u003ef d-\u003ef e-\u003ef(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zip6",
          "package": "classy-prelude",
          "signature": "forall a b c d e g.  f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e -\u003e f g -\u003e f (a, b, c, d, e, g)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zip6",
          "normalized": "a b c d e f g h b-\u003eh c-\u003eh d-\u003eh e-\u003eh f-\u003eh i-\u003eh(b,c,d,e,f,i)",
          "package": "classy-prelude",
          "signature": "forall a b c d e g. f a-\u003ef b-\u003ef c-\u003ef d-\u003ef e-\u003ef g-\u003ef(a,b,c,d,e,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zip7",
          "package": "classy-prelude",
          "signature": "forall a b c d e g h.  f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e -\u003e f g -\u003e f h -\u003e f (a, b, c, d, e, g, h)",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zip7",
          "normalized": "a b c d e f g h i b-\u003ei c-\u003ei d-\u003ei e-\u003ei f-\u003ei g-\u003ei j-\u003ei(b,c,d,e,f,g,j)",
          "package": "classy-prelude",
          "signature": "forall a b c d e g h. f a-\u003ef b-\u003ef c-\u003ef d-\u003ef e-\u003ef g-\u003ef h-\u003ef(a,b,c,d,e,g,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zipWith",
          "package": "classy-prelude",
          "signature": "forall a b c.  (a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zipWith",
          "normalized": "a b c d(b-\u003ec-\u003ee)-\u003ef b-\u003ef c-\u003ef e",
          "package": "classy-prelude",
          "partial": "With",
          "signature": "forall a b c.(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zipWith3",
          "package": "classy-prelude",
          "signature": "forall a b c d.  (a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zipWith3",
          "normalized": "a b c d e(b-\u003ec-\u003ed-\u003ef)-\u003eg b-\u003eg c-\u003eg d-\u003eg f",
          "package": "classy-prelude",
          "partial": "With",
          "signature": "forall a b c d.(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zipWith4",
          "package": "classy-prelude",
          "signature": "forall a b c d e.  (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zipWith4",
          "normalized": "a b c d e f(b-\u003ec-\u003ed-\u003ee-\u003eg)-\u003eh b-\u003eh c-\u003eh d-\u003eh e-\u003eh g",
          "package": "classy-prelude",
          "partial": "With",
          "signature": "forall a b c d e.(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zipWith5",
          "package": "classy-prelude",
          "signature": "forall a b c d e g.  (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e g) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e -\u003e f g",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zipWith5",
          "normalized": "a b c d e f g(b-\u003ec-\u003ed-\u003ee-\u003ef-\u003eh)-\u003ei b-\u003ei c-\u003ei d-\u003ei e-\u003ei f-\u003ei h",
          "package": "classy-prelude",
          "partial": "With",
          "signature": "forall a b c d e g.(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003eg)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e-\u003ef g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zipWith6",
          "package": "classy-prelude",
          "signature": "forall a b c d e g h.  (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e g -\u003e h) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e -\u003e f g -\u003e f h",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zipWith6",
          "normalized": "a b c d e f g h(b-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003ei)-\u003ej b-\u003ej c-\u003ej d-\u003ej e-\u003ej f-\u003ej g-\u003ej i",
          "package": "classy-prelude",
          "partial": "With",
          "signature": "forall a b c d e g h.(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003eg-\u003eh)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e-\u003ef g-\u003ef h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ClassyPrelude",
          "name": "zipWith7",
          "package": "classy-prelude",
          "signature": "forall a b c d e g h i.  (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e g -\u003e h -\u003e i) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e -\u003e f g -\u003e f h -\u003e f i",
          "type": "function"
        },
        "index": {
          "hierarchy": "ClassyPrelude",
          "module": "ClassyPrelude",
          "name": "zipWith7",
          "normalized": "a b c d e f g h i(b-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ej)-\u003ek b-\u003ek c-\u003ek d-\u003ek e-\u003ek f-\u003ek g-\u003ek h-\u003ek j",
          "package": "classy-prelude",
          "partial": "With",
          "signature": "forall a b c d e g h i.(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003eg-\u003eh-\u003ei)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e-\u003ef g-\u003ef h-\u003ef i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/classy-prelude/docs/ClassyPrelude.html#v:zipWith7"
      }
    }
  ]
]