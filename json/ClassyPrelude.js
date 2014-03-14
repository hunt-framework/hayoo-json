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
        "word": "ClassyPrelude"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrelude replacement, use the NoImplicitPrelude extension before importing this.\n\u003c/p\u003e\u003cp\u003eIt deliberately omits all list-handling functions, import Data.List or use the generic versions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Prelude.Classy",
          "name": "Classy",
          "package": "ClassyPrelude",
          "source": "src/Prelude-Classy.html",
          "type": "module"
        },
        "index": {
          "description": "Prelude replacement use the NoImplicitPrelude extension before importing this It deliberately omits all list-handling functions import Data.List or use the generic versions",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Classy",
          "package": "ClassyPrelude",
          "partial": "Classy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class is used to name the upper and lower limits of a\n type.  \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is not a superclass of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e since types that are not\n totally ordered may also have upper and lower bounds.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class may be derived for any enumeration type;\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e is the first constructor listed in the \u003ccode\u003edata\u003c/code\u003e declaration\n and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e is the last.\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e may also be derived for single-constructor datatypes whose\n constituent types are in \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "Bounded",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "The Bounded class is used to name the upper and lower limits of type Ord is not superclass of Bounded since types that are not totally ordered may also have upper and lower bounds The Bounded class may be derived for any enumeration type minBound is the first constructor listed in the data declaration and maxBound is the last Bounded may also be derived for single-constructor datatypes whose constituent types are in Bounded",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Bounded",
          "package": "ClassyPrelude",
          "partial": "Bounded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Bounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters\n(see \u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).\nThis set extends the ISO 8859-1 (Latin-1) character set\n(the first 256 charachers), which is itself an extension of the ASCII\ncharacter set (the first 128 characters).\nA character literal in Haskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003ePrelude.toEnum\u003c/code\u003e and \u003ccode\u003ePrelude.fromEnum\u003c/code\u003e from the\n\u003ccode\u003ePrelude.Enum\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "Char",
          "package": "ClassyPrelude",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first charachers which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use Prelude.toEnum and Prelude.fromEnum from the Prelude.Enum class respectively or equivalently ord and chr",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Char",
          "package": "ClassyPrelude",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
          "module": "Prelude.Classy",
          "name": "Enum",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Enum",
          "package": "ClassyPrelude",
          "partial": "Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "IO",
          "package": "ClassyPrelude",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "IO",
          "package": "ClassyPrelude",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003ePrelude.minBound\u003c/code\u003e and \u003ccode\u003ePrelude.maxBound\u003c/code\u003e from the \u003ccode\u003ePrelude.Bounded\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "Int",
          "package": "ClassyPrelude",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using Prelude.minBound and Prelude.maxBound from the Prelude.Bounded class",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Int",
          "package": "ClassyPrelude",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "Integer",
          "package": "ClassyPrelude",
          "type": "data"
        },
        "index": {
          "description": "Arbitrary-precision integers",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Integer",
          "package": "ClassyPrelude",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral numbers, supporting integer division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003equotRem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "Integral",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Integral numbers supporting integer division Minimal complete definition quotRem and toInteger",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Integral",
          "package": "ClassyPrelude",
          "partial": "Integral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic numeric class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(-)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "Num",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Basic numeric class Minimal complete definition all except negate or",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Num",
          "package": "ClassyPrelude",
          "partial": "Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003eText.Show.Show\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
          "module": "Prelude.Classy",
          "name": "Read",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Text.Show.Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Read",
          "package": "ClassyPrelude",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003eText.Read.Read\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u . \n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude.Classy",
          "name": "Show",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Text.Read.Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "Show",
          "package": "ClassyPrelude",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "String",
          "package": "ClassyPrelude",
          "type": "type"
        },
        "index": {
          "description": "String is list of characters String constants in Haskell are values of type String",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "String",
          "package": "ClassyPrelude",
          "partial": "String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#t:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "($)",
          "package": "ClassyPrelude",
          "signature": "(t1 -\u003e t) -\u003e t1 -\u003e t",
          "source": "src/Prelude-Classy.html#%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "($) $",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "(t-\u003et)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "($!)",
          "package": "ClassyPrelude",
          "signature": "(t1 -\u003e t) -\u003e t1 -\u003e t",
          "source": "src/Prelude-Classy.html#%24%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "($!) $!",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "(t-\u003et)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "(*)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "(+)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "(-)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "(\u003c\u003e)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude-Classy.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to a non-negative integral power\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "(^)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to non-negative integral power",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "(^) ^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction composition.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "(.)",
          "package": "ClassyPrelude",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Function composition",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "(.) .",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "ClassyPrelude",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "abs",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Absolute value",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "abs",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "Prelude.Classy",
          "name": "appendFile",
          "package": "ClassyPrelude",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "ClassyPrelude",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.  It is usually\n used as an infix operator, and its typing forces its first argument\n (which is usually overloaded) to have the same type as the second.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "asTypeOf",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "asTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the second",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "asTypeOf",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "partial": "Type Of",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:asTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn either/maybe equivalent for Bool, often known as if'\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "bool",
          "package": "ClassyPrelude",
          "signature": "a-\u003e a-\u003e Bool-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "An either maybe equivalent for Bool often known as if",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "bool",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant function.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "const",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Constant function",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "const",
          "normalized": "a-\u003eb-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e converts an uncurried function to a curried function.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "curry",
          "package": "ClassyPrelude",
          "signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "curry converts an uncurried function to curried function",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "curry",
          "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "ClassyPrelude",
          "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward negative infinity\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "div",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward negative infinity",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "div",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "divMod",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous div and mod",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "divMod",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "ClassyPrelude",
          "partial": "Mod",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:divMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "enumFrom",
          "package": "ClassyPrelude",
          "signature": "a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "enumFrom",
          "normalized": "a-\u003e[a]",
          "package": "ClassyPrelude",
          "partial": "From",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "enumFromThen",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "enumFromThen",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "ClassyPrelude",
          "partial": "From Then",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:enumFromThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "enumFromThenTo",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "ClassyPrelude",
          "partial": "From Then To",
          "signature": "a-\u003ea-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "enumFromTo",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of n..m",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "ClassyPrelude",
          "partial": "From To",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e stops execution and displays an error message.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "error",
          "package": "ClassyPrelude",
          "signature": "[Char] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "error stops execution and displays an error message",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "error",
          "normalized": "[Char]-\u003ea",
          "package": "ClassyPrelude",
          "signature": "[Char]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "even",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "even",
          "normalized": "a-\u003eBool",
          "package": "ClassyPrelude",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the first component of the input through the argument\n   arrow, and copy the rest unchanged to the output.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "first",
          "package": "ClassyPrelude",
          "signature": "forall b c d.  a b c -\u003e a (b, d) (c, d)",
          "type": "function"
        },
        "index": {
          "description": "Send the first component of the input through the argument arrow and copy the rest unchanged to the output",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "first",
          "normalized": "a b c d e b c-\u003ee(b,f)(c,f)",
          "package": "ClassyPrelude",
          "signature": "forall b c d. a b c-\u003ea(b,d)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes its (first) two arguments in the reverse order of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "flip",
          "package": "ClassyPrelude",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "flip takes its first two arguments in the reverse order of",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "flip",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "ClassyPrelude",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "fromEnum",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "fromEnum",
          "normalized": "a-\u003eInt",
          "package": "ClassyPrelude",
          "partial": "Enum",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n An integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "fromInteger",
          "package": "ClassyPrelude",
          "signature": "Integer -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from an Integer An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Num",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "fromInteger",
          "normalized": "Integer-\u003ea",
          "package": "ClassyPrelude",
          "partial": "Integer",
          "signature": "Integer-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion from integral types\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "fromIntegral",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion from integral types",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "fromIntegral",
          "normalized": "a-\u003eb",
          "package": "ClassyPrelude",
          "partial": "Integral",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first component of a pair.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "fst",
          "package": "ClassyPrelude",
          "signature": "(a, b) -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first component of pair",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "fst",
          "normalized": "(a,b)-\u003ea",
          "package": "ClassyPrelude",
          "signature": "(a,b)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "getChar",
          "package": "ClassyPrelude",
          "signature": "IO Char",
          "type": "function"
        },
        "index": {
          "description": "Read character from the standard input device same as hGetChar stdin",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "getChar",
          "package": "ClassyPrelude",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "getLine",
          "package": "ClassyPrelude",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Read line from the standard input device same as hGetLine stdin",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "getLine",
          "package": "ClassyPrelude",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "id",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Identity function",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "id",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of strings at newline\n characters.  The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "lines",
          "package": "ClassyPrelude",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "lines breaks string up into list of strings at newline characters The resulting strings do not contain newlines",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "ClassyPrelude",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "maxBound",
          "package": "ClassyPrelude",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "maxBound",
          "package": "ClassyPrelude",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:maxBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "minBound",
          "package": "ClassyPrelude",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "minBound",
          "package": "ClassyPrelude",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:minBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger modulus, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `div` y)*y + (x `mod` y) == x\n\u003c/pre\u003e",
          "module": "Prelude.Classy",
          "name": "mod",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer modulus satisfying div mod",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "mod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary negation.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "negate",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Unary negation",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Classy",
          "name": "odd",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "odd",
          "normalized": "a-\u003eBool",
          "package": "ClassyPrelude",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "pred",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the predecessor of value For numeric types pred subtracts",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "pred",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "Prelude.Classy",
          "name": "print",
          "package": "ClassyPrelude",
          "signature": "a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "ClassyPrelude",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "putChar",
          "package": "ClassyPrelude",
          "signature": "Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write character to the standard output device same as hPutChar stdout",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "ClassyPrelude",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "putStr",
          "package": "ClassyPrelude",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "ClassyPrelude",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "putStrLn",
          "package": "ClassyPrelude",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "ClassyPrelude",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward zero\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "quot",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward zero",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "quot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "quotRem",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous quot and rem",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "quotRem",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "ClassyPrelude",
          "partial": "Rem",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:quotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function reads input from a string, which must be\n completely consumed by the input process.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "read",
          "package": "ClassyPrelude",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The read function reads input from string which must be completely consumed by the input process",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "read",
          "normalized": "String-\u003ea",
          "package": "ClassyPrelude",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read strictly, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "readFile",
          "package": "ClassyPrelude",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read strictly as with getContents",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "ClassyPrelude",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e function is similar to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e except that it signals\n parse failure to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad instead of terminating the program.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "readIO",
          "package": "ClassyPrelude",
          "signature": "String -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "ClassyPrelude",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of parsing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be are\n expected to use double quotes, rather than square brackets.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "readList",
          "package": "ClassyPrelude",
          "signature": "ReadS [a]",
          "type": "method"
        },
        "index": {
          "description": "The method readList is provided to allow the programmer to give specialised way of parsing lists of values For example this is used by the predefined Read instance of the Char type where values of type String should be are expected to use double quotes rather than square brackets",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "readList",
          "normalized": "ReadS[a]",
          "package": "ClassyPrelude",
          "partial": "List",
          "signature": "ReadS[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:readList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "readLn",
          "package": "ClassyPrelude",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "readLn",
          "package": "ClassyPrelude",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempts to parse a value from the front of the string, returning\n a list of (parsed value, remaining string) pairs.  If there is no\n successful parse, the returned list is empty.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eText.Show.Show\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003eText.Show.showsPrec\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003eText.Show.showsPrec\u003c/code\u003e, and delivers the value that\n \u003ccode\u003eText.Show.showsPrec\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "readsPrec",
          "package": "ClassyPrelude",
          "signature": "readsPrec",
          "type": "method"
        },
        "index": {
          "description": "attempts to parse value from the front of the string returning list of parsed value remaining string pairs If there is no successful parse the returned list is empty Derived instances of Read and Text.Show.Show satisfy the following is an element of readsPrec Text.Show.showsPrec That is readsPrec parses the string produced by Text.Show.showsPrec and delivers the value that Text.Show.showsPrec started with",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "readsPrec",
          "package": "ClassyPrelude",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger remainder, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `quot` y)*y + (x `rem` y) == x\n\u003c/pre\u003e",
          "module": "Prelude.Classy",
          "name": "rem",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer remainder satisfying quot rem",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "rem",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "second",
          "package": "ClassyPrelude",
          "signature": "forall b c d.  a b c -\u003e a (d, b) (d, c)",
          "type": "function"
        },
        "index": {
          "description": "mirror image of first The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "second",
          "normalized": "a b c d e b c-\u003ee(f,b)(f,c)",
          "package": "ClassyPrelude",
          "signature": "forall b c d. a b c-\u003ea(d,b)(d,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "seq",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "seq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "show",
          "package": "ClassyPrelude",
          "signature": "a -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "ClassyPrelude",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "showList",
          "package": "ClassyPrelude",
          "signature": "[a] -\u003e ShowS",
          "type": "method"
        },
        "index": {
          "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "showList",
          "normalized": "[a]-\u003eShowS",
          "package": "ClassyPrelude",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:showList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003eText.Read.Read\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003eText.Read.readsPrec\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003eText.Read.readsPrec\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "showsPrec",
          "package": "ClassyPrelude",
          "signature": "showsPrec",
          "type": "method"
        },
        "index": {
          "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Text.Read.Read and Show satisfy the following is an element of Text.Read.readsPrec showsPrec That is Text.Read.readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "showsPrec",
          "package": "ClassyPrelude",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "signum",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "signum",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second component of a pair.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "snd",
          "package": "ClassyPrelude",
          "signature": "(a, b) -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Extract the second component of pair",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "snd",
          "normalized": "(a,b)-\u003eb",
          "package": "ClassyPrelude",
          "signature": "(a,b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e-\u003c/code\u003e is treated specially in the Haskell grammar,\n \u003ccode\u003e(-\u003c/code\u003e \u003cem\u003ee\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is not a section, but an application of prefix negation.\n However, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is equivalent to the disallowed section.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "subtract",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "the same as flip Because is treated specially in the Haskell grammar is not section but an application of prefix negation However subtract exp is equivalent to the disallowed section",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "succ",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the successor of value For numeric types succ adds",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "succ",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "toEnum",
          "package": "ClassyPrelude",
          "signature": "Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Convert from an Int",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "toEnum",
          "normalized": "Int-\u003ea",
          "package": "ClassyPrelude",
          "partial": "Enum",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:toEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "toInteger",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "conversion to Integer",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "toInteger",
          "normalized": "a-\u003eInteger",
          "package": "ClassyPrelude",
          "partial": "Integer",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e converts a curried function to a function on pairs.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "uncurry",
          "package": "ClassyPrelude",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "uncurry converts curried function to function on pairs",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "package": "ClassyPrelude",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n It is expected that compilers will recognize this and insert error\n messages which are more appropriate to the context in which \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n appears. \n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "undefined",
          "package": "ClassyPrelude",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "special case of error It is expected that compilers will recognize this and insert error messages which are more appropriate to the context in which undefined appears",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "undefined",
          "package": "ClassyPrelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n It joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "unlines",
          "package": "ClassyPrelude",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "unlines",
          "normalized": "[String]-\u003eString",
          "package": "ClassyPrelude",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e p f\u003c/code\u003e yields the result of applying \u003ccode\u003ef\u003c/code\u003e until \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "until",
          "package": "ClassyPrelude",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "until yields the result of applying until holds",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "until",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n It joins words with separating spaces.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "unwords",
          "package": "ClassyPrelude",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unwords is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "unwords",
          "normalized": "[String]-\u003eString",
          "package": "ClassyPrelude",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of words, which were delimited\n by white space.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "words",
          "package": "ClassyPrelude",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "words breaks string up into list of words which were delimited by white space",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "words",
          "normalized": "String-\u003e[String]",
          "package": "ClassyPrelude",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Classy",
          "name": "writeFile",
          "package": "ClassyPrelude",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "Prelude Classy",
          "module": "Prelude.Classy",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "ClassyPrelude",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Classy.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrelude.Classy, plus some mathematical/floating-point functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Prelude.Math",
          "name": "Math",
          "package": "ClassyPrelude",
          "source": "src/Prelude-Math.html",
          "type": "module"
        },
        "index": {
          "description": "Prelude.Classy plus some mathematical floating-point functions",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "Math",
          "package": "ClassyPrelude",
          "partial": "Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "Double",
          "package": "ClassyPrelude",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "Double",
          "package": "ClassyPrelude",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "Float",
          "package": "ClassyPrelude",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "Float",
          "package": "ClassyPrelude",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigonometric and hyperbolic functions and related functions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecosh\u003c/a\u003e\u003c/code\u003e,\n      \u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "Floating",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Trigonometric and hyperbolic functions and related functions Minimal complete definition pi exp log sin cos sinh cosh asin acos atan asinh acosh and atanh",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "Floating",
          "package": "ClassyPrelude",
          "partial": "Floating",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#t:Floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional numbers, supporting real division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e and (\u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "Fractional",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Fractional numbers supporting real division Minimal complete definition fromRational and recip or",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "Fractional",
          "package": "ClassyPrelude",
          "partial": "Fractional",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#t:Fractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficient, machine-independent access to the components of a\n floating-point number.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      all except \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "RealFloat",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Efficient machine-independent access to the components of floating-point number Minimal complete definition all except exponent significand scaleFloat and atan2",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "RealFloat",
          "package": "ClassyPrelude",
          "partial": "Real Float",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#t:RealFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting components of fractions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "RealFrac",
          "package": "ClassyPrelude",
          "type": "class"
        },
        "index": {
          "description": "Extracting components of fractions Minimal complete definition properFraction",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "RealFrac",
          "package": "ClassyPrelude",
          "partial": "Real Frac",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#t:RealFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "(**)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "(**) **",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efractional division\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "(/)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "fractional division",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to an integral power\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "(^^)",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to an integral power",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "(^^) ^^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:-94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "acos",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "acos",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "acosh",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "acosh",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "asin",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "asin",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "asinh",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "asinh",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "atan",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "atan",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea version of arctangent taking two real floating-point arguments.\n For real floating \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e computes the angle\n (from the positive x-axis) of the vector from the origin to the\n point \u003ccode\u003e(x,y)\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e returns a value in the range [\u003ccode\u003e-pi\u003c/code\u003e,\n \u003ccode\u003epi\u003c/code\u003e].  It follows the Common Lisp semantics for the origin when\n signed zeroes are supported.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y 1\u003c/code\u003e, with \u003ccode\u003ey\u003c/code\u003e in a type\n that is \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e, should return the same value as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e.\n A default definition of \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e is provided, but implementors\n can provide a more accurate implementation.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "atan2",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "version of arctangent taking two real floating-point arguments For real floating and atan2 computes the angle from the positive x-axis of the vector from the origin to the point atan2 returns value in the range pi pi It follows the Common Lisp semantics for the origin when signed zeroes are supported atan2 with in type that is RealFloat should return the same value as atan default definition of atan2 is provided but implementors can provide more accurate implementation",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "atan2",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:atan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "atanh",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "atanh",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the least integer not less than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "ceiling",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "ceiling returns the least integer not less than",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "ceiling",
          "normalized": "a-\u003eb",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "cos",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "cos",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "cosh",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "cosh",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e applied to a real floating-point\n number returns the significand expressed as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and an\n appropriately scaled exponent (an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e).  If \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e\n yields \u003ccode\u003e(m,n)\u003c/code\u003e, then \u003ccode\u003ex\u003c/code\u003e is equal in value to \u003ccode\u003em*b^^n\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e\n is the floating-point radix, and furthermore, either \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e\n are both zero or else \u003ccode\u003eb^(d-1) \u003c= m \u003c b^d\u003c/code\u003e, where \u003ccode\u003ed\u003c/code\u003e is the value\n of \u003ccode\u003e\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.  In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e 0 = (0,0)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "decodeFloat",
          "package": "ClassyPrelude",
          "signature": "a -\u003e (Integer, Int)",
          "type": "method"
        },
        "index": {
          "description": "The function decodeFloat applied to real floating-point number returns the significand expressed as an Integer and an appropriately scaled exponent an Int If decodeFloat yields then is equal in value to where is the floating-point radix and furthermore either and are both zero or else d-1 where is the value of floatDigits In particular decodeFloat",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "decodeFloat",
          "normalized": "a-\u003e(Integer,Int)",
          "package": "ClassyPrelude",
          "partial": "Float",
          "signature": "a-\u003e(Integer,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:decodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e performs the inverse of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "encodeFloat",
          "package": "ClassyPrelude",
          "signature": "Integer -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "encodeFloat performs the inverse of decodeFloat",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "encodeFloat",
          "normalized": "Integer-\u003eInt-\u003ea",
          "package": "ClassyPrelude",
          "partial": "Float",
          "signature": "Integer-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:encodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "exp",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "exp",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe second component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "exponent",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "the second component of decodeFloat",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "exponent",
          "normalized": "a-\u003eInt",
          "package": "ClassyPrelude",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the number of digits of\n \u003ccode\u003e\u003ca\u003efloatRadix\u003c/a\u003e\u003c/code\u003e in the significand\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "floatDigits",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the number of digits of floatRadix in the significand",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "floatDigits",
          "normalized": "a-\u003eInt",
          "package": "ClassyPrelude",
          "partial": "Digits",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:floatDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the radix of the representation\n (often \u003ccode\u003e2\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "floatRadix",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the radix of the representation often",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "floatRadix",
          "normalized": "a-\u003eInteger",
          "package": "ClassyPrelude",
          "partial": "Radix",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:floatRadix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the lowest and highest values\n the exponent may assume\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "floatRange",
          "package": "ClassyPrelude",
          "signature": "a -\u003e (Int, Int)",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the lowest and highest values the exponent may assume",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "floatRange",
          "normalized": "a-\u003e(Int,Int)",
          "package": "ClassyPrelude",
          "partial": "Range",
          "signature": "a-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:floatRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the greatest integer not greater than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "floor",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "floor returns the greatest integer not greater than",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "floor",
          "normalized": "a-\u003eb",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e (that is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n A floating literal stands for an application of \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e\n to a value of type \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, so such literals have type\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "fromRational",
          "package": "ClassyPrelude",
          "signature": "Rational -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from Rational that is Ratio Integer floating literal stands for an application of fromRational to value of type Rational so such literals have type Fractional",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "fromRational",
          "normalized": "Rational-\u003ea",
          "package": "ClassyPrelude",
          "partial": "Rational",
          "signature": "Rational-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:fromRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the greatest (positive) integer that divides both \u003ccode\u003ex\u003c/code\u003e\n and \u003ccode\u003ey\u003c/code\u003e; for example \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e (-3) 6\u003c/code\u003e = \u003ccode\u003e3\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e (-3) (-6)\u003c/code\u003e = \u003ccode\u003e3\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 4\u003c/code\u003e = \u003ccode\u003e4\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 0\u003c/code\u003e raises a runtime error.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "gcd",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "gcd is the greatest positive integer that divides both and for example gcd gcd gcd gcd raises runtime error",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "gcd",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:gcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is too small to be represented in\n normalized format\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "isDenormalized",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is too small to be represented in normalized format",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "isDenormalized",
          "normalized": "a-\u003eBool",
          "package": "ClassyPrelude",
          "partial": "Denormalized",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:isDenormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE floating point number\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "isIEEE",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE floating point number",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "isIEEE",
          "normalized": "a-\u003eBool",
          "package": "ClassyPrelude",
          "partial": "IEEE",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:isIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE infinity or negative infinity\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "isInfinite",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE infinity or negative infinity",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "isInfinite",
          "normalized": "a-\u003eBool",
          "package": "ClassyPrelude",
          "partial": "Infinite",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:isInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE \"not-a-number\" (NaN) value\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "isNaN",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE not-a-number NaN value",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "isNaN",
          "normalized": "a-\u003eBool",
          "package": "ClassyPrelude",
          "partial": "Na",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:isNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE negative zero\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "isNegativeZero",
          "package": "ClassyPrelude",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE negative zero",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "isNegativeZero",
          "normalized": "a-\u003eBool",
          "package": "ClassyPrelude",
          "partial": "Negative Zero",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:isNegativeZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the smallest positive integer that both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e divide.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "lcm",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "lcm is the smallest positive integer that both and divide",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "lcm",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:lcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "log",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "log",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "logBase",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "logBase",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "partial": "Base",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "pi",
          "package": "ClassyPrelude",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "pi",
          "package": "ClassyPrelude",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e takes a real fractional number \u003ccode\u003ex\u003c/code\u003e\n and returns a pair \u003ccode\u003e(n,f)\u003c/code\u003e such that \u003ccode\u003ex = n+f\u003c/code\u003e, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is an integral number with the same sign as \u003ccode\u003ex\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e is a fraction with the same type and sign as \u003ccode\u003ex\u003c/code\u003e,\n   and with absolute value less than \u003ccode\u003e1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default definitions of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e functions are in terms of \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "properFraction",
          "package": "ClassyPrelude",
          "signature": "a -\u003e (b, a)",
          "type": "method"
        },
        "index": {
          "description": "The function properFraction takes real fractional number and returns pair such that and is an integral number with the same sign as and is fraction with the same type and sign as and with absolute value less than The default definitions of the ceiling floor truncate and round functions are in terms of properFraction",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "properFraction",
          "normalized": "a-\u003e(b,a)",
          "package": "ClassyPrelude",
          "partial": "Fraction",
          "signature": "a-\u003e(b,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:properFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion to fractional types\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "realToFrac",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion to fractional types",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "realToFrac",
          "normalized": "a-\u003eb",
          "package": "ClassyPrelude",
          "partial": "To Frac",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:realToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereciprocal fraction\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "recip",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "reciprocal fraction",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "recip",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the nearest integer to \u003ccode\u003ex\u003c/code\u003e;\n   the even integer if \u003ccode\u003ex\u003c/code\u003e is equidistant between two integers\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "round",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "round returns the nearest integer to the even integer if is equidistant between two integers",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "round",
          "normalized": "a-\u003eb",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiplies a floating-point number by an integer power of the radix\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "scaleFloat",
          "package": "ClassyPrelude",
          "signature": "Int -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "multiplies floating-point number by an integer power of the radix",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "scaleFloat",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "ClassyPrelude",
          "partial": "Float",
          "signature": "Int-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:scaleFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe first component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e, scaled to lie in the open\n interval (\u003ccode\u003e-1\u003c/code\u003e,\u003ccode\u003e1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "significand",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the first component of decodeFloat scaled to lie in the open interval",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "significand",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:significand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "sin",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "sin",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "sinh",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "sinh",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "sqrt",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "sqrt",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "tan",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "tan",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Math",
          "name": "tanh",
          "package": "ClassyPrelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "tanh",
          "normalized": "a-\u003ea",
          "package": "ClassyPrelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the integer nearest \u003ccode\u003ex\u003c/code\u003e between zero and \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Math",
          "name": "truncate",
          "package": "ClassyPrelude",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "truncate returns the integer nearest between zero and",
          "hierarchy": "Prelude Math",
          "module": "Prelude.Math",
          "name": "truncate",
          "normalized": "a-\u003eb",
          "package": "ClassyPrelude",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ClassyPrelude/docs/Prelude-Math.html#v:truncate"
      }
    }
  ]
]