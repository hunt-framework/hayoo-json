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
        "word": "simpleprelude"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Prelude",
          "package": "simpleprelude",
          "source": "src/Prelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Prelude",
          "package": "simpleprelude",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Bool",
          "package": "simpleprelude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Bool",
          "package": "simpleprelude",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class is used to name the upper and lower limits of a\n type.  \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is not a superclass of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e since types that are not\n totally ordered may also have upper and lower bounds.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class may be derived for any enumeration type;\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e is the first constructor listed in the \u003ccode\u003edata\u003c/code\u003e declaration\n and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e is the last.\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e may also be derived for single-constructor datatypes whose\n constituent types are in \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Bounded",
          "package": "simpleprelude",
          "type": "class"
        },
        "index": {
          "description": "The Bounded class is used to name the upper and lower limits of type Ord is not superclass of Bounded since types that are not totally ordered may also have upper and lower bounds The Bounded class may be derived for any enumeration type minBound is the first constructor listed in the data declaration and maxBound is the last Bounded may also be derived for single-constructor datatypes whose constituent types are in Bounded",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Bounded",
          "package": "simpleprelude",
          "partial": "Bounded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Bounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters\n(see \u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).\nThis set extends the ISO 8859-1 (Latin-1) character set\n(the first 256 charachers), which is itself an extension of the ASCII\ncharacter set (the first 128 characters).\nA character literal in Haskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003ePrelude.toEnum\u003c/code\u003e and \u003ccode\u003ePrelude.fromEnum\u003c/code\u003e from the\n\u003ccode\u003ePrelude.Enum\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Char",
          "package": "simpleprelude",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first charachers which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use Prelude.toEnum and Prelude.fromEnum from the Prelude.Enum class respectively or equivalently ord and chr",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Char",
          "package": "simpleprelude",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type represents values with two possibilities: a value of\ntype \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is sometimes used to represent a value which is\neither correct or an error; by convention, the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor is\nused to hold an error value and the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor is used to\nhold a correct value (mnemonic: \"right\" also means \"correct\").\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Either",
          "package": "simpleprelude",
          "type": "data"
        },
        "index": {
          "description": "The Either type represents values with two possibilities value of type Either is either Left or Right The Either type is sometimes used to represent value which is either correct or an error by convention the Left constructor is used to hold an error value and the Right constructor is used to hold correct value mnemonic right also means correct",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Either",
          "package": "simpleprelude",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "Enum",
          "package": "simpleprelude",
          "type": "class"
        },
        "index": {
          "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Enum",
          "package": "simpleprelude",
          "partial": "Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "FilePath",
          "package": "simpleprelude",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "FilePath",
          "package": "simpleprelude",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003eData.Maybe.Maybe\u003c/code\u003e and \u003ccode\u003eSystem.IO.IO\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Functor",
          "package": "simpleprelude",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Data.Maybe.Maybe and System.IO.IO satisfy these laws",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Functor",
          "package": "simpleprelude",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "IO",
          "package": "simpleprelude",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "IO",
          "package": "simpleprelude",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell 98 type for exceptions in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n Any I/O operation may raise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e instead of returning a result.\n For a more general type of exception, including also those that arise\n in pure code, see \u003ca\u003eControl.Exception.Exception\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn Haskell 98, this is an opaque type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "IOError",
          "package": "simpleprelude",
          "type": "type"
        },
        "index": {
          "description": "The Haskell type for exceptions in the IO monad Any operation may raise an IOError instead of returning result For more general type of exception including also those that arise in pure code see Control.Exception.Exception In Haskell this is an opaque type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "IOError",
          "package": "simpleprelude",
          "partial": "IOError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:IOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Integer",
          "package": "simpleprelude",
          "type": "data"
        },
        "index": {
          "description": "Arbitrary-precision integers",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Integer",
          "package": "simpleprelude",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003eData.Either.Either\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Maybe",
          "package": "simpleprelude",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Data.Either.Either type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Maybe",
          "package": "simpleprelude",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003eData.Maybe.Maybe\u003c/code\u003e and \u003ccode\u003eSystem.IO.IO\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Monad",
          "package": "simpleprelude",
          "type": "class"
        },
        "index": {
          "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Data.Maybe.Maybe and System.IO.IO defined in the Prelude satisfy these laws",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Monad",
          "package": "simpleprelude",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Ordering",
          "package": "simpleprelude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Ordering",
          "package": "simpleprelude",
          "partial": "Ordering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003eText.Show.Show\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "Read",
          "package": "simpleprelude",
          "type": "class"
        },
        "index": {
          "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Text.Show.Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Read",
          "package": "simpleprelude",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for a type \u003ccode\u003ea\u003c/code\u003e, represented as a function that takes a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and returns a list of possible parses as \u003ccode\u003e(a,\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.\n\u003c/p\u003e\u003cp\u003eNote that this kind of backtracking parser is very inefficient;\n reading a large structure may be quite slow (cf \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ReadS",
          "package": "simpleprelude",
          "type": "type"
        },
        "index": {
          "description": "parser for type represented as function that takes String and returns list of possible parses as String pairs Note that this kind of backtracking parser is very inefficient reading large structure may be quite slow cf ReadP",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ReadS",
          "package": "simpleprelude",
          "partial": "Read",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:ReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003eText.Read.Read\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u . \n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude",
          "name": "Show",
          "package": "simpleprelude",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Text.Read.Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Show",
          "package": "simpleprelude",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eshows\u003c/code\u003e functions return a function that prepends the\n output \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  This allows constant-time\n concatenation of results using function composition.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ShowS",
          "package": "simpleprelude",
          "type": "type"
        },
        "index": {
          "description": "The shows functions return function that prepends the output String to an existing String This allows constant-time concatenation of results using function composition",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ShowS",
          "package": "simpleprelude",
          "partial": "Show",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:ShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "String",
          "package": "simpleprelude",
          "type": "type"
        },
        "index": {
          "description": "String is list of characters String constants in Haskell are values of type String",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "String",
          "package": "simpleprelude",
          "partial": "String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#t:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(||)",
          "package": "simpleprelude",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean or",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(||) ||",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "simpleprelude",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(!!)",
          "package": "simpleprelude",
          "signature": "[a] -\u003e Integer -\u003e a",
          "source": "src/Prelude.html#%21%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(!!) !!",
          "normalized": "[a]-\u003eInteger-\u003ea",
          "package": "simpleprelude",
          "signature": "[a]-\u003eInteger-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication operator.  This operator is redundant, since ordinary\n application \u003ccode\u003e(f x)\u003c/code\u003e means the same as \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e x)\u003c/code\u003e. However, \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e has\n low, right-associative binding precedence, so it sometimes allows\n parentheses to be omitted; for example:\n\u003c/p\u003e\u003cpre\u003e     f $ g $ h x  =  f (g (h x))\n\u003c/pre\u003e\u003cp\u003eIt is also useful in higher-order situations, such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e 0) xs\u003c/code\u003e,\n or \u003ccode\u003e\u003ccode\u003eData.List.zipWith\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e) fs xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "($)",
          "package": "simpleprelude",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Application operator This operator is redundant since ordinary application means the same as However has low right-associative binding precedence so it sometimes allows parentheses to be omitted for example It is also useful in higher-order situations such as map xs or Data.List.zipWith fs xs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "($) $",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "simpleprelude",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict (call-by-value) application, defined in terms of \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "($!)",
          "package": "simpleprelude",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Strict call-by-value application defined in terms of seq",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "($!) $!",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "simpleprelude",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(&&)",
          "package": "simpleprelude",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean and",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(&&) &&",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "simpleprelude",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(*)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(*) *",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(+)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(+) +",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two lists, i.e.,\n\u003c/p\u003e\u003cpre\u003e [x1, ..., xm] ++ [y1, ..., yn] == [x1, ..., xm, y1, ..., yn]\n [x1, ..., xm] ++ [y1, ...] == [x1, ..., xm, y1, ...]\n\u003c/pre\u003e\u003cp\u003eIf the first list is not finite, the result is the first list.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(++)",
          "package": "simpleprelude",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Append two lists i.e x1 xm y1 yn x1 xm y1 yn x1 xm y1 x1 xm y1 If the first list is not finite the result is the first list",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(++) ++",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(-)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(-) -",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(/=)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Prelude.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(/=) /=",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003c)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Prelude.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003c) \u003c",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003c=)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Prelude.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003c=) \u003c=",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, but with the arguments interchanged.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(=\u003c\u003c)",
          "package": "simpleprelude",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Same as but with the arguments interchanged",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "simpleprelude",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(==)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Prelude.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(==) ==",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003e)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Prelude.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e) \u003e",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003e=)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Prelude.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e=) \u003e=",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(\u003e\u003e)",
          "package": "simpleprelude",
          "signature": "m a -\u003e m b -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "simpleprelude",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(\u003e\u003e=)",
          "package": "simpleprelude",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "simpleprelude",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(^)",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#subtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(^) ^",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction composition.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(.)",
          "package": "simpleprelude",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Function composition",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(.) .",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "simpleprelude",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "EQ",
          "package": "simpleprelude",
          "signature": "EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "EQ",
          "package": "simpleprelude",
          "partial": "EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "False",
          "package": "simpleprelude",
          "signature": "False",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "False",
          "package": "simpleprelude",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:False"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "GT",
          "package": "simpleprelude",
          "signature": "GT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "GT",
          "package": "simpleprelude",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Just",
          "package": "simpleprelude",
          "signature": "Just a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Just",
          "package": "simpleprelude",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "LT",
          "package": "simpleprelude",
          "signature": "LT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "LT",
          "package": "simpleprelude",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Left",
          "package": "simpleprelude",
          "signature": "Left a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Left",
          "package": "simpleprelude",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Nothing",
          "package": "simpleprelude",
          "signature": "Nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Nothing",
          "package": "simpleprelude",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Right",
          "package": "simpleprelude",
          "signature": "Right b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Right",
          "package": "simpleprelude",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "True",
          "package": "simpleprelude",
          "signature": "True",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "True",
          "package": "simpleprelude",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:True"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "abs",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer",
          "source": "src/Prelude.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "abs",
          "normalized": "Integer-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if all elements\n of the list satisfy the predicate. For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "all",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list all determines if all elements of the list satisfy the predicate For the result to be True the list must be finite False however results from False value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "simpleprelude",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "and",
          "package": "simpleprelude",
          "signature": "[Bool] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "and returns the conjunction of Boolean list For the result to be True the list must be finite False however results from False value at finite index of finite or infinite list",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "and",
          "normalized": "[Bool]-\u003eBool",
          "package": "simpleprelude",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if any element\n of the list satisfies the predicate.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "any",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list any determines if any element of the list satisfies the predicate For the result to be False the list must be finite True however results from True value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "simpleprelude",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "appendFile",
          "package": "simpleprelude",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "simpleprelude",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.  It is usually\n used as an infix operator, and its typing forces its first argument\n (which is usually overloaded) to have the same type as the second.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "asTypeOf",
          "package": "simpleprelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "asTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the second",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "asTypeOf",
          "normalized": "a-\u003ea-\u003ea",
          "package": "simpleprelude",
          "partial": "Type Of",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:asTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e break (\u003e 3) [1,2,3,4,1,2,3,4] == ([1,2,3],[4,1,2,3,4])\n break (\u003c 9) [1,2,3] == ([],[1,2,3])\n break (\u003e 9) [1,2,3] == ([1,2,3],[])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "break",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "break applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that do not satisfy and second element is the remainder of the list break break break break is equivalent to span not",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "simpleprelude",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e function is deprecated. Please use the new exceptions\n variant, \u003ccode\u003eControl.Exception.catch\u003c/code\u003e from \u003ca\u003eControl.Exception\u003c/a\u003e, instead.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "catch",
          "package": "simpleprelude",
          "signature": "IO a -\u003e (IOError -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The catch function is deprecated Please use the new exceptions variant Control.Exception.catch from Control.Exception instead",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "catch",
          "normalized": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "package": "simpleprelude",
          "signature": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "compare",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Ordering",
          "source": "src/Prelude.html#compare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "compare",
          "normalized": "Integer-\u003eInteger-\u003eOrdering",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a list of lists.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "concat",
          "package": "simpleprelude",
          "signature": "[[a]] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of lists",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "concat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a list and concatenate the results.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "concatMap",
          "package": "simpleprelude",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Map function over list and concatenate the results",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "package": "simpleprelude",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "const",
          "package": "simpleprelude",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Constant function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "const",
          "normalized": "a-\u003eb-\u003ea",
          "package": "simpleprelude",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e converts an uncurried function to a curried function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "curry",
          "package": "simpleprelude",
          "signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "curry converts an uncurried function to curried function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "curry",
          "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "simpleprelude",
          "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite list into a circular one, or equivalently,\n the infinite repetition of the original list.  It is the identity\n on infinite lists.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "cycle",
          "package": "simpleprelude",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "cycle ties finite list into circular one or equivalently the infinite repetition of the original list It is the identity on infinite lists",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "cycle",
          "normalized": "[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "div",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#quot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "div",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "divMod",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e (Integer, Integer)",
          "source": "src/Prelude.html#quotRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "divMod",
          "normalized": "Integer-\u003eInteger-\u003e(Integer,Integer)",
          "package": "simpleprelude",
          "partial": "Mod",
          "signature": "Integer-\u003eInteger-\u003e(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:divMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "drop",
          "package": "simpleprelude",
          "signature": "Integer -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "drop",
          "normalized": "Integer-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "Integer-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e dropWhile (\u003c 3) [1,2,3,4,5,1,2,3] == [3,4,5,1,2,3]\n dropWhile (\u003c 9) [1,2,3] == []\n dropWhile (\u003c 0) [1,2,3] == [1,2,3]\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "dropWhile",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs dropWhile dropWhile dropWhile",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n If the value is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, apply the first function to \u003ccode\u003ea\u003c/code\u003e;\n if it is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, apply the second function to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "either",
          "package": "simpleprelude",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Case analysis for the Either type If the value is Left apply the first function to if it is Right apply the second function to",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "either",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "simpleprelude",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the list membership predicate, usually written in infix form,\n e.g., \u003ccode\u003ex `elem` xs\u003c/code\u003e.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from an element equal to \u003ccode\u003ex\u003c/code\u003e found at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "elem",
          "package": "simpleprelude",
          "signature": "a -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "elem is the list membership predicate usually written in infix form e.g elem xs For the result to be False the list must be finite True however results from an element equal to found at finite index of finite or infinite list",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "elem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "simpleprelude",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFrom",
          "package": "simpleprelude",
          "signature": "a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFrom",
          "normalized": "a-\u003e[a]",
          "package": "simpleprelude",
          "partial": "From",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFromThen",
          "package": "simpleprelude",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromThen",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "simpleprelude",
          "partial": "From Then",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:enumFromThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFromThenTo",
          "package": "simpleprelude",
          "signature": "a -\u003e a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "simpleprelude",
          "partial": "From Then To",
          "signature": "a-\u003ea-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFromTo",
          "package": "simpleprelude",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of n..m",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "simpleprelude",
          "partial": "From To",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e stops execution and displays an error message.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "error",
          "package": "simpleprelude",
          "signature": "[Char] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "error stops execution and displays an error message",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "error",
          "normalized": "[Char]-\u003ea",
          "package": "simpleprelude",
          "signature": "[Char]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "even",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Bool",
          "source": "src/Prelude.html#even",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "even",
          "normalized": "Integer-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fail",
          "package": "simpleprelude",
          "signature": "String -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "simpleprelude",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "filter",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes its (first) two arguments in the reverse order of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "flip",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "flip takes its first two arguments in the reverse order of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "flip",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "simpleprelude",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "fmap",
          "package": "simpleprelude",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "simpleprelude",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a list, reduces the list\n using the binary operator, from left to right:\n\u003c/p\u003e\u003cpre\u003e foldl f z [x1, x2, ..., xn] == (...((z `f` x1) `f` x2) `f`...) `f` xn\n\u003c/pre\u003e\u003cp\u003eThe list must be finite.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "foldl",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and list reduces the list using the binary operator from left to right foldl x1 x2 xn x1 x2 xn The list must be finite",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "simpleprelude",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "foldl1",
          "package": "simpleprelude",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "simpleprelude",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the right-identity of the operator), and a list, reduces the list\n using the binary operator, from right to left:\n\u003c/p\u003e\u003cpre\u003e foldr f z [x1, x2, ..., xn] == x1 `f` (x2 `f` ... (xn `f` z)...)\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "foldr",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and list reduces the list using the binary operator from right to left foldr x1 x2 xn x1 x2 xn",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "simpleprelude",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "foldr1",
          "package": "simpleprelude",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "simpleprelude",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fromEnum",
          "package": "simpleprelude",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromEnum",
          "normalized": "a-\u003eInt",
          "package": "simpleprelude",
          "partial": "Enum",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "fromInteger",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer",
          "source": "src/Prelude.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromInteger",
          "normalized": "Integer-\u003eInteger",
          "package": "simpleprelude",
          "partial": "Integer",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion from integral types\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fromIntegral",
          "package": "simpleprelude",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion from integral types",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromIntegral",
          "normalized": "a-\u003eb",
          "package": "simpleprelude",
          "partial": "Integral",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first component of a pair.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fst",
          "package": "simpleprelude",
          "signature": "(a, b) -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first component of pair",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fst",
          "normalized": "(a,b)-\u003ea",
          "package": "simpleprelude",
          "signature": "(a,b)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "gcd",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#subtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "gcd",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:gcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "getChar",
          "package": "simpleprelude",
          "signature": "IO Char",
          "type": "function"
        },
        "index": {
          "description": "Read character from the standard input device same as hGetChar stdin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "getChar",
          "package": "simpleprelude",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "getContents",
          "package": "simpleprelude",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "getContents",
          "package": "simpleprelude",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "getLine",
          "package": "simpleprelude",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Read line from the standard input device same as hGetLine stdin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "getLine",
          "package": "simpleprelude",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "head",
          "package": "simpleprelude",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of list which must be non-empty",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "head",
          "normalized": "[a]-\u003ea",
          "package": "simpleprelude",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "id",
          "package": "simpleprelude",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Identity function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "id",
          "normalized": "a-\u003ea",
          "package": "simpleprelude",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "ifThenElse",
          "package": "simpleprelude",
          "signature": "Bool -\u003e t -\u003e t -\u003e t",
          "source": "src/Prelude.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ifThenElse",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "simpleprelude",
          "partial": "Then Else",
          "signature": "Bool-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the elements of a list except the last one.\n The list must be non-empty.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "init",
          "package": "simpleprelude",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of list except the last one The list must be non-empty",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "init",
          "normalized": "[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eString-\u003eString\u003c/code\u003e\n as its argument.  The entire input from the standard input device is\n passed to this function as its argument, and the resulting string is\n output on the standard output device.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "interact",
          "package": "simpleprelude",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type String String as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "simpleprelude",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ioError",
          "package": "simpleprelude",
          "signature": "IOError -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Raise an IOError in the IO monad",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ioError",
          "normalized": "IOError-\u003eIO a",
          "package": "simpleprelude",
          "partial": "Error",
          "signature": "IOError-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:ioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite list of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "iterate",
          "package": "simpleprelude",
          "signature": "(a -\u003e a) -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite list of repeated applications of to iterate",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
          "package": "simpleprelude",
          "signature": "(a-\u003ea)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the last element of a list, which must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "last",
          "package": "simpleprelude",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of list which must be finite and non-empty",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "last",
          "normalized": "[a]-\u003ea",
          "package": "simpleprelude",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "lcm",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#subtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lcm",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:lcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "length",
          "package": "simpleprelude",
          "signature": "[a] -\u003e Integer",
          "source": "src/Prelude.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "length",
          "normalized": "[a]-\u003eInteger",
          "package": "simpleprelude",
          "signature": "[a]-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e function reads a single lexeme from the input, discarding\n initial white space, and returning the characters that constitute the\n lexeme.  If the input string contains only white space, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e returns a\n single successful `lexeme' consisting of the empty string.  (Thus\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e \"\" = [(\"\",\"\")]\u003c/code\u003e.)  If there is no legal lexeme at the\n beginning of the input string, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e fails (i.e. returns \u003ccode\u003e[]\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis lexer is not completely faithful to the Haskell lexical syntax\n in the following respects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Qualified names are not handled properly\n\u003c/li\u003e\u003cli\u003e Octal and hexadecimal numerics are not recognized as a single token\n\u003c/li\u003e\u003cli\u003e Comments are not treated properly\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude",
          "name": "lex",
          "package": "simpleprelude",
          "signature": "ReadS String",
          "type": "function"
        },
        "index": {
          "description": "The lex function reads single lexeme from the input discarding initial white space and returning the characters that constitute the lexeme If the input string contains only white space lex returns single successful lexeme consisting of the empty string Thus lex If there is no legal lexeme at the beginning of the input string lex fails i.e returns This lexer is not completely faithful to the Haskell lexical syntax in the following respects Qualified names are not handled properly Octal and hexadecimal numerics are not recognized as single token Comments are not treated properly",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lex",
          "package": "simpleprelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:lex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of strings at newline\n characters.  The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "lines",
          "package": "simpleprelude",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "lines breaks string up into list of strings at newline characters The resulting strings do not contain newlines",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "simpleprelude",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey assocs\u003c/code\u003e looks up a key in an association list.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "lookup",
          "package": "simpleprelude",
          "signature": "a -\u003e [(a, b)] -\u003e Maybe b",
          "type": "function"
        },
        "index": {
          "description": "lookup key assocs looks up key in an association list",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lookup",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
          "package": "simpleprelude",
          "signature": "a-\u003e[(a,b)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the list obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element\n of \u003ccode\u003exs\u003c/code\u003e, i.e.,\n\u003c/p\u003e\u003cpre\u003e map f [x1, x2, ..., xn] == [f x1, f x2, ..., f xn]\n map f [x1, x2, ...] == [f x1, f x2, ...]\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "map",
          "package": "simpleprelude",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "map xs is the list obtained by applying to each element of xs i.e map x1 x2 xn x1 x2 xn map x1 x2 x1 x2",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "simpleprelude",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "mapM",
          "package": "simpleprelude",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "simpleprelude",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence_\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "mapM_",
          "package": "simpleprelude",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
          "package": "simpleprelude",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "max",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "max",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "maxBound",
          "package": "simpleprelude",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "maxBound",
          "package": "simpleprelude",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:maxBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "maximum",
          "package": "simpleprelude",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from list which must be non-empty finite and of an ordered type It is special case of maximumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "maximum",
          "normalized": "[a]-\u003ea",
          "package": "simpleprelude",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e function takes a default value, a function, and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the function returns the\n default value.  Otherwise, it applies the function to the value inside\n the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and returns the result.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "maybe",
          "package": "simpleprelude",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The maybe function takes default value function and Maybe value If the Maybe value is Nothing the function returns the default value Otherwise it applies the function to the value inside the Just and returns the result",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "maybe",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
          "package": "simpleprelude",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "min",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "min",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "minBound",
          "package": "simpleprelude",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "minBound",
          "package": "simpleprelude",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:minBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "minimum",
          "package": "simpleprelude",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from list which must be non-empty finite and of an ordered type It is special case of minimumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "minimum",
          "normalized": "[a]-\u003ea",
          "package": "simpleprelude",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "mod",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#quot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "mod",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "negate",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer",
          "source": "src/Prelude.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "negate",
          "normalized": "Integer-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "not",
          "package": "simpleprelude",
          "signature": "Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean not",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "not",
          "normalized": "Bool-\u003eBool",
          "package": "simpleprelude",
          "signature": "Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "notElem",
          "package": "simpleprelude",
          "signature": "a -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "notElem is the negation of elem",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "notElem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "simpleprelude",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a list is empty.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "null",
          "package": "simpleprelude",
          "signature": "[a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test whether list is empty",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "simpleprelude",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "odd",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Bool",
          "source": "src/Prelude.html#even",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "odd",
          "normalized": "Integer-\u003eBool",
          "package": "simpleprelude",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "or",
          "package": "simpleprelude",
          "signature": "[Bool] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "or returns the disjunction of Boolean list For the result to be False the list must be finite True however results from True value at finite index of finite or infinite list",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "or",
          "normalized": "[Bool]-\u003eBool",
          "package": "simpleprelude",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "otherwise",
          "package": "simpleprelude",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "otherwise",
          "package": "simpleprelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "pred",
          "package": "simpleprelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the predecessor of value For numeric types pred subtracts",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "pred",
          "normalized": "a-\u003ea",
          "package": "simpleprelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "print",
          "package": "simpleprelude",
          "signature": "a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "simpleprelude",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "product",
          "package": "simpleprelude",
          "signature": "[Integer] -\u003e Integer",
          "source": "src/Prelude.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "product",
          "normalized": "[Integer]-\u003eInteger",
          "package": "simpleprelude",
          "signature": "[Integer]-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "putChar",
          "package": "simpleprelude",
          "signature": "Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write character to the standard output device same as hPutChar stdout",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "simpleprelude",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "putStr",
          "package": "simpleprelude",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "simpleprelude",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "putStrLn",
          "package": "simpleprelude",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "simpleprelude",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "quot",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#quot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "quot",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "quotRem",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e (Integer, Integer)",
          "source": "src/Prelude.html#quotRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "quotRem",
          "normalized": "Integer-\u003eInteger-\u003e(Integer,Integer)",
          "package": "simpleprelude",
          "partial": "Rem",
          "signature": "Integer-\u003eInteger-\u003e(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:quotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function reads input from a string, which must be\n completely consumed by the input process.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "read",
          "package": "simpleprelude",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The read function reads input from string which must be completely consumed by the input process",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "read",
          "normalized": "String-\u003ea",
          "package": "simpleprelude",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readFile",
          "package": "simpleprelude",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "simpleprelude",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e function is similar to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e except that it signals\n parse failure to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad instead of terminating the program.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readIO",
          "package": "simpleprelude",
          "signature": "String -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "simpleprelude",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of parsing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be are\n expected to use double quotes, rather than square brackets.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readList",
          "package": "simpleprelude",
          "signature": "ReadS [a]",
          "type": "method"
        },
        "index": {
          "description": "The method readList is provided to allow the programmer to give specialised way of parsing lists of values For example this is used by the predefined Read instance of the Char type where values of type String should be are expected to use double quotes rather than square brackets",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readList",
          "normalized": "ReadS[a]",
          "package": "simpleprelude",
          "partial": "List",
          "signature": "ReadS[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:readList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readLn",
          "package": "simpleprelude",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readLn",
          "package": "simpleprelude",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but surrounded with\n parentheses.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but optionally\n surrounded with parentheses.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readParen",
          "package": "simpleprelude",
          "signature": "Bool -\u003e ReadS a -\u003e ReadS a",
          "type": "function"
        },
        "index": {
          "description": "readParen True parses what parses but surrounded with parentheses readParen False parses what parses but optionally surrounded with parentheses",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readParen",
          "normalized": "Bool-\u003eReadS a-\u003eReadS a",
          "package": "simpleprelude",
          "partial": "Paren",
          "signature": "Bool-\u003eReadS a-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:readParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "reads",
          "package": "simpleprelude",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "equivalent to readsPrec with precedence of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "reads",
          "package": "simpleprelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempts to parse a value from the front of the string, returning\n a list of (parsed value, remaining string) pairs.  If there is no\n successful parse, the returned list is empty.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eText.Show.Show\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003eText.Show.showsPrec\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003eText.Show.showsPrec\u003c/code\u003e, and delivers the value that\n \u003ccode\u003eText.Show.showsPrec\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readsPrec",
          "package": "simpleprelude",
          "signature": "readsPrec",
          "type": "method"
        },
        "index": {
          "description": "attempts to parse value from the front of the string returning list of parsed value remaining string pairs If there is no successful parse the returned list is empty Derived instances of Read and Text.Show.Show satisfy the following is an element of readsPrec Text.Show.showsPrec That is readsPrec parses the string produced by Text.Show.showsPrec and delivers the value that Text.Show.showsPrec started with",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readsPrec",
          "package": "simpleprelude",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "rem",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#quot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "rem",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "repeat",
          "package": "simpleprelude",
          "signature": "a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite list with the value of every element",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "repeat",
          "normalized": "a-\u003e[a]",
          "package": "simpleprelude",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a list of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e the value of\n every element.\n It is an instance of the more general \u003ccode\u003eData.List.genericReplicate\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "replicate",
          "package": "simpleprelude",
          "signature": "Int -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "replicate is list of length with the value of every element It is an instance of the more general Data.List.genericReplicate in which may be of any integral type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "simpleprelude",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "return",
          "package": "simpleprelude",
          "signature": "a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Inject value into the monadic type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "simpleprelude",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "reverse",
          "package": "simpleprelude",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order xs must be finite",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "scanl",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "scanl1",
          "package": "simpleprelude",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Note that\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs.\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "scanr",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Note that head scanr xs foldr xs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "simpleprelude",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "scanr1",
          "package": "simpleprelude",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
          "module": "Prelude",
          "name": "seq",
          "package": "simpleprelude",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "seq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "simpleprelude",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "sequence",
          "package": "simpleprelude",
          "signature": "[m a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sequence",
          "normalized": "[a b]-\u003ea[b]",
          "package": "simpleprelude",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and ignore the results.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "sequence_",
          "package": "simpleprelude",
          "signature": "[m a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and ignore the results",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sequence_",
          "normalized": "[a b]-\u003ea()",
          "package": "simpleprelude",
          "signature": "[m a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "show",
          "package": "simpleprelude",
          "signature": "a -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "simpleprelude",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the character unchanged.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showChar",
          "package": "simpleprelude",
          "signature": "Char -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting Char to show function that simply prepends the character unchanged",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showChar",
          "normalized": "Char-\u003eShowS",
          "package": "simpleprelude",
          "partial": "Char",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:showChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showList",
          "package": "simpleprelude",
          "signature": "[a] -\u003e ShowS",
          "type": "method"
        },
        "index": {
          "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showList",
          "normalized": "[a]-\u003eShowS",
          "package": "simpleprelude",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:showList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function that surrounds the inner show function with\n parentheses when the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showParen",
          "package": "simpleprelude",
          "signature": "Bool -\u003e ShowS -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function that surrounds the inner show function with parentheses when the Bool parameter is True",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showParen",
          "normalized": "Bool-\u003eShowS-\u003eShowS",
          "package": "simpleprelude",
          "partial": "Paren",
          "signature": "Bool-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:showParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the string unchanged.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showString",
          "package": "simpleprelude",
          "signature": "String -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting String to show function that simply prepends the string unchanged",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showString",
          "normalized": "String-\u003eShowS",
          "package": "simpleprelude",
          "partial": "String",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:showString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "shows",
          "package": "simpleprelude",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "equivalent to showsPrec with precedence of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "shows",
          "normalized": "a-\u003eShowS",
          "package": "simpleprelude",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:shows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003eText.Read.Read\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003eText.Read.readsPrec\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003eText.Read.readsPrec\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showsPrec",
          "package": "simpleprelude",
          "signature": "showsPrec",
          "type": "method"
        },
        "index": {
          "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Text.Read.Read and Show satisfy the following is an element of Text.Read.readsPrec showsPrec That is Text.Read.readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showsPrec",
          "package": "simpleprelude",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "signum",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer",
          "source": "src/Prelude.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "signum",
          "normalized": "Integer-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second component of a pair.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "snd",
          "package": "simpleprelude",
          "signature": "(a, b) -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Extract the second component of pair",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "snd",
          "normalized": "(a,b)-\u003eb",
          "package": "simpleprelude",
          "signature": "(a,b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e span (\u003c 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])\n span (\u003c 9) [1,2,3] == ([1,2,3],[])\n span (\u003c 0) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "span",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "span applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that satisfy and second element is the remainder of the list span span span span xs is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "simpleprelude",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns a tuple where first element is \u003ccode\u003exs\u003c/code\u003e prefix of\n length \u003ccode\u003en\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e splitAt 6 \"Hello World!\" == (\"Hello \",\"World!\")\n splitAt 3 [1,2,3,4,5] == ([1,2,3],[4,5])\n splitAt 1 [1,2,3] == ([1],[2,3])\n splitAt 3 [1,2,3] == ([1,2,3],[])\n splitAt 4 [1,2,3] == ([1,2,3],[])\n splitAt 0 [1,2,3] == ([],[1,2,3])\n splitAt (-1) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003eIt is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e when \u003ccode\u003en\u003c/code\u003e is not \u003ccode\u003e_|_\u003c/code\u003e\n (\u003ccode\u003esplitAt _|_ xs = _|_\u003c/code\u003e).\n \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an instance of the more general \u003ccode\u003eData.List.genericSplitAt\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "splitAt",
          "package": "simpleprelude",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns tuple where first element is xs prefix of length and second element is the remainder of the list splitAt Hello World Hello World splitAt splitAt splitAt splitAt splitAt splitAt It is equivalent to take xs drop xs when is not splitAt xs splitAt is an instance of the more general Data.List.genericSplitAt in which may be of any integral type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "splitAt",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "simpleprelude",
          "partial": "At",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "subtract",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Prelude.html#subtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "subtract",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "simpleprelude",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "succ",
          "package": "simpleprelude",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the successor of value For numeric types succ adds",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "succ",
          "normalized": "a-\u003ea",
          "package": "simpleprelude",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sum",
          "package": "simpleprelude",
          "signature": "[Integer] -\u003e Integer",
          "source": "src/Prelude.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sum",
          "normalized": "[Integer]-\u003eInteger",
          "package": "simpleprelude",
          "signature": "[Integer]-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements after the head of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "tail",
          "package": "simpleprelude",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of list which must be non-empty",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "tail",
          "normalized": "[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "take",
          "package": "simpleprelude",
          "signature": "Integer -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "take",
          "normalized": "Integer-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "signature": "Integer-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e takeWhile (\u003c 3) [1,2,3,4,1,2,3,4] == [1,2]\n takeWhile (\u003c 9) [1,2,3] == [1,2,3]\n takeWhile (\u003c 0) [1,2,3] == []\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "takeWhile",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and list xs returns the longest prefix possibly empty of xs of elements that satisfy takeWhile takeWhile takeWhile",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "simpleprelude",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "toEnum",
          "package": "simpleprelude",
          "signature": "Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Convert from an Int",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "toEnum",
          "normalized": "Int-\u003ea",
          "package": "simpleprelude",
          "partial": "Enum",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:toEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "toInteger",
          "package": "simpleprelude",
          "signature": "Integer -\u003e Integer",
          "source": "src/Prelude.html#toInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "toInteger",
          "normalized": "Integer-\u003eInteger",
          "package": "simpleprelude",
          "partial": "Integer",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e converts a curried function to a function on pairs.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "uncurry",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "uncurry converts curried function to function on pairs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "package": "simpleprelude",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n It is expected that compilers will recognize this and insert error\n messages which are more appropriate to the context in which \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n appears. \n\u003c/p\u003e",
          "module": "Prelude",
          "name": "undefined",
          "package": "simpleprelude",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "special case of error It is expected that compilers will recognize this and insert error messages which are more appropriate to the context in which undefined appears",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "undefined",
          "package": "simpleprelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n It joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "unlines",
          "package": "simpleprelude",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unlines",
          "normalized": "[String]-\u003eString",
          "package": "simpleprelude",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e p f\u003c/code\u003e yields the result of applying \u003ccode\u003ef\u003c/code\u003e until \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "until",
          "package": "simpleprelude",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "until yields the result of applying until holds",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "until",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "simpleprelude",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n It joins words with separating spaces.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "unwords",
          "package": "simpleprelude",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unwords is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unwords",
          "normalized": "[String]-\u003eString",
          "package": "simpleprelude",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs into a list of first components\n and a list of second components.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "unzip",
          "package": "simpleprelude",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs into list of first components and list of second components",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "simpleprelude",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "unzip3",
          "package": "simpleprelude",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The unzip3 function takes list of triples and returns three lists analogous to unzip",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "simpleprelude",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e value with a string describing the error.\n The \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class raises a\n \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e, thus:\n\u003c/p\u003e\u003cpre\u003e instance Monad IO where \n   ...\n   fail s = ioError (userError s)\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "userError",
          "package": "simpleprelude",
          "signature": "String -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Construct an IOError value with string describing the error The fail method of the IO instance of the Monad class raises userError thus instance Monad IO where fail ioError userError",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "userError",
          "normalized": "String-\u003eIOError",
          "package": "simpleprelude",
          "partial": "Error",
          "signature": "String-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:userError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of words, which were delimited\n by white space.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "words",
          "package": "simpleprelude",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "words breaks string up into list of words which were delimited by white space",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "words",
          "normalized": "String-\u003e[String]",
          "package": "simpleprelude",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "writeFile",
          "package": "simpleprelude",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "simpleprelude",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two lists and returns a list of corresponding pairs.\n If one input list is short, excess elements of the longer list are\n discarded.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "zip",
          "package": "simpleprelude",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "type": "function"
        },
        "index": {
          "description": "zip takes two lists and returns list of corresponding pairs If one input list is short excess elements of the longer list are discarded",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "simpleprelude",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e takes three lists and returns a list of triples, analogous to\n \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "zip3",
          "package": "simpleprelude",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "type": "function"
        },
        "index": {
          "description": "zip3 takes three lists and returns list of triples analogous to zip",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zip3",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "simpleprelude",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given\n as the first argument, instead of a tupling function.\n For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two lists to produce the\n list of corresponding sums.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "zipWith",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two lists to produce the list of corresponding sums",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "simpleprelude",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e function takes a function which combines three\n elements, as well as three lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "zipWith3",
          "package": "simpleprelude",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith3 function takes function which combines three elements as well as three lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "simpleprelude",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simpleprelude/docs/Prelude.html#v:zipWith3"
      }
    }
  ]
]