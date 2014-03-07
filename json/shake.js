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
        "word": "shake"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module reexports the six necessary type classes that every \u003ccode\u003eRule\u003c/code\u003e type must support.\n   You can use this module to define new rules without depending on the \u003ccode\u003ebinary\u003c/code\u003e, \u003ccode\u003edeepseq\u003c/code\u003e and \u003ccode\u003ehashable\u003c/code\u003e packages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.Classes",
          "name": "Classes",
          "package": "shake",
          "source": "src/Development-Shake-Classes.html",
          "type": "module"
        },
        "index": {
          "description": "This module reexports the six necessary type classes that every Rule type must support You can use this module to define new rules without depending on the binary deepseq and hashable packages",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "Classes",
          "package": "shake",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eBinary\u003c/code\u003e class provides \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, methods to encode and\n decode a Haskell value to a lazy ByteString. It mirrors the Read and\n Show classes for textual representation of Haskell types, and is\n suitable for serialising Haskell values to disk, over the network.\n\u003c/p\u003e\u003cp\u003eFor parsing and generating simple external binary formats (e.g. C\n structures), Binary may be used, but in general is not suitable\n for complex protocols. Instead use the Put and Get primitives\n directly.\n\u003c/p\u003e\u003cp\u003eInstances of Binary should satisfy the following property:\n\u003c/p\u003e\u003cpre\u003e decode . encode == id\n\u003c/pre\u003e\u003cp\u003eThat is, the \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e methods should be the inverse of each\n other. A range of instances are provided for basic Haskell types. \n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "Binary",
          "package": "shake",
          "type": "class"
        },
        "index": {
          "description": "The Binary class provides put and get methods to encode and decode Haskell value to lazy ByteString It mirrors the Read and Show classes for textual representation of Haskell types and is suitable for serialising Haskell values to disk over the network For parsing and generating simple external binary formats e.g structures Binary may be used but in general is not suitable for complex protocols Instead use the Put and Get primitives directly Instances of Binary should satisfy the following property decode encode id That is the get and put methods should be the inverse of each other range of instances are provided for basic Haskell types",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "Binary",
          "package": "shake",
          "partial": "Binary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "Eq",
          "package": "shake",
          "type": "class"
        },
        "index": {
          "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "Eq",
          "package": "shake",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of types that can be converted to a hash value.\n\u003c/p\u003e\u003cp\u003eMinimal implementation: \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "Hashable",
          "package": "shake",
          "type": "class"
        },
        "index": {
          "description": "The class of types that can be converted to hash value Minimal implementation hashWithSalt",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "Hashable",
          "package": "shake",
          "partial": "Hashable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#t:Hashable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "NFData",
          "package": "shake",
          "type": "class"
        },
        "index": {
          "description": "class of types that can be fully evaluated",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "NFData",
          "package": "shake",
          "partial": "NFData",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#t:NFData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Development.Shake.Classes",
          "name": "Show",
          "package": "shake",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "Show",
          "package": "shake",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "Typeable",
          "package": "shake",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "Typeable",
          "package": "shake",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Shake.Classes",
          "name": "(/=)",
          "package": "shake",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "(/=) /=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "shake",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Shake.Classes",
          "name": "(==)",
          "package": "shake",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "(==) ==",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "shake",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value in the Get monad\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "get",
          "package": "shake",
          "signature": "Get t",
          "type": "method"
        },
        "index": {
          "description": "Decode value in the Get monad",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "get",
          "package": "shake",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e, but no salt is used. The default\n implementation uses \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e with some default salt.\n Instances might want to implement this method to provide a more\n efficient implementation than the default implementation.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "hash",
          "package": "shake",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Like hashWithSalt but no salt is used The default implementation uses hashWithSalt with some default salt Instances might want to implement this method to provide more efficient implementation than the default implementation",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "hash",
          "normalized": "a-\u003eInt",
          "package": "shake",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a hash value for the argument, using the given salt.\n\u003c/p\u003e\u003cp\u003eThe general contract of \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If two values are equal according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then\n    applying the \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e method on each of the two values\n    \u003cem\u003emust\u003c/em\u003e produce the same integer result if the same salt is\n    used in each case.\n\u003c/li\u003e\u003cli\u003e It is \u003cem\u003enot\u003c/em\u003e required that if two values are unequal\n    according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then applying the\n    \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e method on each of the two values must produce\n    distinct integer results. However, the programmer should be\n    aware that producing distinct integer results for unequal\n    values may improve the performance of hashing-based data\n    structures.\n\u003c/li\u003e\u003cli\u003e This method can be used to compute different hash values for\n    the same input by providing a different salt in each\n    application of the method. This implies that any instance\n    that defines \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e \u003cem\u003emust\u003c/em\u003e make use of the salt in\n    its implementation.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Development.Shake.Classes",
          "name": "hashWithSalt",
          "package": "shake",
          "signature": "Int -\u003e a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Return hash value for the argument using the given salt The general contract of hashWithSalt is If two values are equal according to the method then applying the hashWithSalt method on each of the two values must produce the same integer result if the same salt is used in each case It is not required that if two values are unequal according to the method then applying the hashWithSalt method on each of the two values must produce distinct integer results However the programmer should be aware that producing distinct integer results for unequal values may improve the performance of hashing-based data structures This method can be used to compute different hash values for the same input by providing different salt in each application of the method This implies that any instance that defines hashWithSalt must make use of the salt in its implementation",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "hashWithSalt",
          "normalized": "Int-\u003ea-\u003eInt",
          "package": "shake",
          "partial": "With Salt",
          "signature": "Int-\u003ea-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:hashWithSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value in the Put monad.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "put",
          "package": "shake",
          "signature": "t -\u003e Put",
          "type": "method"
        },
        "index": {
          "description": "Encode value in the Put monad",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "put",
          "normalized": "a-\u003ePut",
          "package": "shake",
          "signature": "t-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ernf should reduce its argument to normal form (that is, fully\n evaluate all sub-components), and then return '()'.\n\u003c/p\u003e\u003cp\u003eThe default implementation of \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e is \n\u003c/p\u003e\u003cpre\u003e rnf a = a `seq` ()\n\u003c/pre\u003e\u003cp\u003ewhich may be convenient when defining instances for data types with\n no unevaluated fields (e.g. enumerations).\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "rnf",
          "package": "shake",
          "signature": "a -\u003e ()",
          "type": "method"
        },
        "index": {
          "description": "rnf should reduce its argument to normal form that is fully evaluate all sub-components and then return The default implementation of rnf is rnf seq which may be convenient when defining instances for data types with no unevaluated fields e.g enumerations",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "rnf",
          "normalized": "a-\u003e()",
          "package": "shake",
          "signature": "a-\u003e()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:rnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "show",
          "package": "shake",
          "signature": "a -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "shake",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "showList",
          "package": "shake",
          "signature": "[a] -\u003e ShowS",
          "type": "method"
        },
        "index": {
          "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "showList",
          "normalized": "[a]-\u003eShowS",
          "package": "shake",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:showList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "showsPrec",
          "package": "shake",
          "signature": "showsPrec",
          "type": "method"
        },
        "index": {
          "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "showsPrec",
          "package": "shake",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a value of type \u003ccode\u003ea\u003c/code\u003e and returns a concrete representation\n of that type.  The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by\n any instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, so that it is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as\n the argument.\n\u003c/p\u003e",
          "module": "Development.Shake.Classes",
          "name": "typeOf",
          "package": "shake",
          "signature": "a -\u003e TypeRep",
          "type": "method"
        },
        "index": {
          "description": "Takes value of type and returns concrete representation of that type The value of the argument should be ignored by any instance of Typeable so that it is safe to pass undefined as the argument",
          "hierarchy": "Development Shake Classes",
          "module": "Development.Shake.Classes",
          "name": "typeOf",
          "normalized": "a-\u003eTypeRep",
          "package": "shake",
          "partial": "Of",
          "signature": "a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Classes.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eDeprecated:\u003c/em\u003e This module should no longer be imported as all the functions are available directly\n   from \u003ca\u003eDevelopment.Shake\u003c/a\u003e. In future versions this module will be removed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.Command",
          "name": "Command",
          "package": "shake",
          "source": "src/Development-Shake-Command.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated This module should no longer be imported as all the functions are available directly from Development.Shake In future versions this module will be removed",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Command",
          "package": "shake",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions passed to \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e to control how processes are executed.\n\u003c/p\u003e",
          "module": "Development.Shake.Command",
          "name": "CmdOption",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "data"
        },
        "index": {
          "description": "Options passed to command or cmd to control how processes are executed",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "CmdOption",
          "package": "shake",
          "partial": "Cmd Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#t:CmdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for specifying what results you want to collect from a process.\n   Values are formed of \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e and tuples of those.\n\u003c/p\u003e",
          "module": "Development.Shake.Command",
          "name": "CmdResult",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#CmdResult",
          "type": "class"
        },
        "index": {
          "description": "class for specifying what results you want to collect from process Values are formed of Stdout Stderr Exit and tuples of those",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "CmdResult",
          "package": "shake",
          "partial": "Cmd Result",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#t:CmdResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e of the process.\n   If you do not collect the exit code, any \u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e will cause an exception.\n\u003c/p\u003e",
          "module": "Development.Shake.Command",
          "name": "Exit",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#Exit",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the ExitCode of the process If you do not collect the exit code any ExitFailure will cause an exception",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Exit",
          "package": "shake",
          "partial": "Exit",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#t:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003estderr\u003c/code\u003e of the process.\n   If you are collecting the \u003ccode\u003estderr\u003c/code\u003e, it will not be echoed to the terminal, unless you include \u003ccode\u003e\u003ca\u003eEchoStderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Command",
          "name": "Stderr",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#Stderr",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the stderr of the process If you are collecting the stderr it will not be echoed to the terminal unless you include EchoStderr",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Stderr",
          "package": "shake",
          "partial": "Stderr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#t:Stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003estdout\u003c/code\u003e of the process.\n   If you are collecting the \u003ccode\u003estdout\u003c/code\u003e, it will not be echoed to the terminal, unless you include \u003ccode\u003e\u003ca\u003eEchoStdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Command",
          "name": "Stdout",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#Stdout",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the stdout of the process If you are collecting the stdout it will not be echoed to the terminal unless you include EchoStdout",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Stdout",
          "package": "shake",
          "partial": "Stdout",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#t:Stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat the \u003ccode\u003estdin\u003c/code\u003e/\u003ccode\u003estdout\u003c/code\u003e/\u003ccode\u003estderr\u003c/code\u003e messages as binary. By default streams use text encoding.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "BinaryPipes",
          "package": "shake",
          "signature": "BinaryPipes",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:BinaryPipes\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:BinaryPipes\"]"
        },
        "index": {
          "description": "Treat the stdin stdout stderr messages as binary By default streams use text encoding",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "BinaryPipes",
          "package": "shake",
          "partial": "Binary Pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:BinaryPipes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the current directory in the spawned process. By default uses this processes current directory.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Cwd",
          "package": "shake",
          "signature": "Cwd FilePath",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Cwd\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Cwd\"]"
        },
        "index": {
          "description": "Change the current directory in the spawned process By default uses this processes current directory",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Cwd",
          "package": "shake",
          "partial": "Cwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Cwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould I echo the \u003ccode\u003estderr\u003c/code\u003e? Defaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e unless a \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e result is required.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "EchoStderr",
          "package": "shake",
          "signature": "EchoStderr Bool",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:EchoStderr\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:EchoStderr\"]"
        },
        "index": {
          "description": "Should echo the stderr Defaults to True unless Stderr result is required",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "EchoStderr",
          "package": "shake",
          "partial": "Echo Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:EchoStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould I echo the \u003ccode\u003estdout\u003c/code\u003e? Defaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e unless a \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e result is required.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "EchoStdout",
          "package": "shake",
          "signature": "EchoStdout Bool",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:EchoStdout\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:EchoStdout\"]"
        },
        "index": {
          "description": "Should echo the stdout Defaults to True unless Stdout result is required",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "EchoStdout",
          "package": "shake",
          "partial": "Echo Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:EchoStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the environment variables in the spawned process. By default uses this processes environment.\n   Use \u003ccode\u003e\u003ca\u003eaddPath\u003c/a\u003e\u003c/code\u003e to modify the \u003ccode\u003e$PATH\u003c/code\u003e variable, or \u003ccode\u003e\u003ca\u003eaddEnv\u003c/a\u003e\u003c/code\u003e to modify other variables.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Env",
          "package": "shake",
          "signature": "Env [(String, String)]",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Env\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Env\"]"
        },
        "index": {
          "description": "Change the environment variables in the spawned process By default uses this processes environment Use addPath to modify the PATH variable or addEnv to modify other variables",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Env",
          "normalized": "Env[(String,String)]",
          "package": "shake",
          "partial": "Env",
          "signature": "Env[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Exit",
          "package": "shake",
          "signature": "Exit",
          "source": "src/Development-Shake-Command.html#Exit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Exit\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Exit\"]"
        },
        "index": {
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Exit",
          "package": "shake",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass the command to the shell without escaping - any arguments will be joined with spaces. By default arguments are escaped properly.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Shell",
          "package": "shake",
          "signature": "Shell",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Shell\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Shell\"]"
        },
        "index": {
          "description": "Pass the command to the shell without escaping any arguments will be joined with spaces By default arguments are escaped properly",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Shell",
          "package": "shake",
          "partial": "Shell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Shell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Stderr",
          "package": "shake",
          "signature": "Stderr",
          "source": "src/Development-Shake-Command.html#Stderr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Stderr\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Stderr\"]"
        },
        "index": {
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Stderr",
          "package": "shake",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven as the \u003ccode\u003estdin\u003c/code\u003e of the spawned process. By default no \u003ccode\u003estdin\u003c/code\u003e is given.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Stdin",
          "package": "shake",
          "signature": "Stdin String",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Stdin\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Stdin\"]"
        },
        "index": {
          "description": "Given as the stdin of the spawned process By default no stdin is given",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Stdin",
          "package": "shake",
          "partial": "Stdin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Stdout",
          "package": "shake",
          "signature": "Stdout",
          "source": "src/Development-Shake-Command.html#Stdout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Stdout\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Stdout\"]"
        },
        "index": {
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Stdout",
          "package": "shake",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName to use with \u003ccode\u003e\u003ca\u003etraced\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\"\"\u003c/code\u003e for no tracing. By default traces using the name of the executable.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "Traced",
          "package": "shake",
          "signature": "Traced String",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Traced\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Traced\"]"
        },
        "index": {
          "description": "Name to use with traced or for no tracing By default traces using the name of the executable",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "Traced",
          "package": "shake",
          "partial": "Traced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:Traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould I include the \u003ccode\u003estderr\u003c/code\u003e in the exception if the command fails? Defaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "WithStderr",
          "package": "shake",
          "signature": "WithStderr Bool",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:WithStderr\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:WithStderr\"]"
        },
        "index": {
          "description": "Should include the stderr in the exception if the command fails Defaults to True",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "WithStderr",
          "package": "shake",
          "partial": "With Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:WithStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a \u003ccode\u003e\u003ca\u003eCmdOption\u003c/a\u003e\u003c/code\u003e of value \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e that is the current environment, plus the argument\n   environment variables. For example:\n\u003c/p\u003e\u003cpre\u003e\n opt \u003c- \u003ccode\u003e\u003ca\u003eaddEnv\u003c/a\u003e\u003c/code\u003e [(\"CFLAGS\",\"-O2\")]\n \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e opt \"gcc -c main.c\"\n\u003c/pre\u003e\u003cp\u003eWould add the environment variable \u003ccode\u003e$CFLAGS\u003c/code\u003e with value \u003ccode\u003e-O2\u003c/code\u003e. If the variable \u003ccode\u003e$CFLAGS\u003c/code\u003e\n   was already defined it would be overwritten. If you wish to modify \u003ccode\u003e$PATH\u003c/code\u003e see \u003ccode\u003e\u003ca\u003eaddPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "addEnv",
          "package": "shake",
          "signature": "[(String, String)] -\u003e m CmdOption",
          "source": "src/Development-Shake-Command.html#addEnv",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:addEnv\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:addEnv\"]"
        },
        "index": {
          "description": "Produce CmdOption of value Env that is the current environment plus the argument environment variables For example opt addEnv CFLAGS O2 cmd opt gcc main.c Would add the environment variable CFLAGS with value O2 If the variable CFLAGS was already defined it would be overwritten If you wish to modify PATH see addPath",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "addEnv",
          "normalized": "[(String,String)]-\u003ea CmdOption",
          "package": "shake",
          "partial": "Env",
          "signature": "[(String,String)]-\u003em CmdOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:addEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a \u003ccode\u003e\u003ca\u003eCmdOption\u003c/a\u003e\u003c/code\u003e of value \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e that is the current environment, plus a\n   prefix and suffix to the \u003ccode\u003e$PATH\u003c/code\u003e environment variable. For example:\n\u003c/p\u003e\u003cpre\u003e\n opt \u003c- \u003ccode\u003e\u003ca\u003eaddPath\u003c/a\u003e\u003c/code\u003e [\"/usr/special\"] []\n \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e opt \"userbinary --version\"\n\u003c/pre\u003e\u003cp\u003eWould prepend \u003ccode\u003e/usr/special\u003c/code\u003e to the current \u003ccode\u003e$PATH\u003c/code\u003e, and the command would pick\n   \u003ccode\u003e/usr/special/userbinary\u003c/code\u003e, if it exists. To add other variables see \u003ccode\u003e\u003ca\u003eaddEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "addPath",
          "package": "shake",
          "signature": "[String] -\u003e [String] -\u003e m CmdOption",
          "source": "src/Development-Shake-Command.html#addPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:addPath\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:addPath\"]"
        },
        "index": {
          "description": "Produce CmdOption of value Env that is the current environment plus prefix and suffix to the PATH environment variable For example opt addPath usr special cmd opt userbinary version Would prepend usr special to the current PATH and the command would pick usr special userbinary if it exists To add other variables see addEnv",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "addPath",
          "normalized": "[String]-\u003e[String]-\u003ea CmdOption",
          "package": "shake",
          "partial": "Path",
          "signature": "[String]-\u003e[String]-\u003em CmdOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:addPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a system command. Before running \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e make sure you \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e any files\n   that are used by the command.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eString\u003c/code\u003e arguments are treated as whitespace separated arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e[String]\u003c/code\u003e arguments are treated as literal arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCmdOption\u003c/a\u003e\u003c/code\u003e arguments are used as options.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo take the examples from \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n () \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -c myfile.c\"                                  -- compile a file, throwing an exception on failure\n \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -c\" [myfile]                              -- run a command, recording the exit code\n (\u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e err) \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -c myfile.c\"                -- run a command, recording the exit code and error output\n \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e out \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -MM myfile.c\"                         -- run a command, recording the output\n \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCwd\u003c/a\u003e\u003c/code\u003e \"generated\") \"gcc -c\" [myfile] :: \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e ()         -- run a command in a directory\n\u003c/pre\u003e\u003cp\u003eWhen passing file arguments we use \u003ccode\u003e[myfile]\u003c/code\u003e so that if the \u003ccode\u003emyfile\u003c/code\u003e variable contains spaces they are properly escaped.\n\u003c/p\u003e\u003cp\u003eIf you use \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e inside a \u003ccode\u003edo\u003c/code\u003e block and do not use the result, you may get a compile-time error about being\n   unable to deduce \u003ccode\u003e\u003ca\u003eCmdResult\u003c/a\u003e\u003c/code\u003e. To avoid this error, bind the result to \u003ccode\u003e()\u003c/code\u003e, or include a type signature.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e command can also be run in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, but then \u003ccode\u003e\u003ca\u003eTraced\u003c/a\u003e\u003c/code\u003e is ignored and command lines are not echoed.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "cmd",
          "package": "shake",
          "signature": "args :-\u003e Action r",
          "source": "src/Development-Shake-Command.html#cmd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:cmd\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:cmd\"]"
        },
        "index": {
          "description": "Execute system command Before running cmd make sure you need any files that are used by the command String arguments are treated as whitespace separated arguments String arguments are treated as literal arguments CmdOption arguments are used as options To take the examples from command cmd gcc myfile.c compile file throwing an exception on failure Exit cmd gcc myfile run command recording the exit code Exit Stderr err cmd gcc myfile.c run command recording the exit code and error output Stdout out cmd gcc MM myfile.c run command recording the output cmd Cwd generated gcc myfile Action run command in directory When passing file arguments we use myfile so that if the myfile variable contains spaces they are properly escaped If you use cmd inside do block and do not use the result you may get compile-time error about being unable to deduce CmdResult To avoid this error bind the result to or include type signature The cmd command can also be run in the IO monad but then Traced is ignored and command lines are not echoed",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "cmd",
          "normalized": "a-\u003eAction b",
          "package": "shake",
          "signature": "args-\u003eAction r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a system command. Before running \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e make sure you \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e any files\n   that are used by the command.\n\u003c/p\u003e\u003cp\u003eThis function takes a list of options (often just \u003ccode\u003e[]\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003eCmdOption\u003c/a\u003e\u003c/code\u003e for the available\n   options), the name of the executable (either a full name, or a program on the \u003ccode\u003e$PATH\u003c/code\u003e) and\n   a list of arguments. The result is often \u003ccode\u003e()\u003c/code\u003e, but can be a tuple containg any of \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e. Some examples:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-c\",\"myfile.c\"]                          -- compile a file, throwing an exception on failure\n \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c \u003c- \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-c\",myfile]                     -- run a command, recording the exit code\n (\u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e err) \u003c- \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-c\",\"myfile.c\"]   -- run a command, recording the exit code and error output\n \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e out \u003c- \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-MM\",\"myfile.c\"]            -- run a command, recording the output\n \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eCwd\u003c/a\u003e\u003c/code\u003e \"generated\"] \"gcc\" [\"-c\",myfile]               -- run a command in a directory\n\u003c/pre\u003e\u003cp\u003eUnless you retrieve the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e, any \u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e will throw an error, including\n   the \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e in the exception message. If you capture the \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e, that stream will not be echoed to the console,\n   unless you use the option \u003ccode\u003e\u003ca\u003eEchoStdout\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eEchoStderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you use \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e inside a \u003ccode\u003edo\u003c/code\u003e block and do not use the result, you may get a compile-time error about being\n   unable to deduce \u003ccode\u003e\u003ca\u003eCmdResult\u003c/a\u003e\u003c/code\u003e. To avoid this error, use \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "command",
          "package": "shake",
          "signature": "[CmdOption] -\u003e String -\u003e [String] -\u003e Action r",
          "source": "src/Development-Shake-Command.html#command",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:command\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:command\"]"
        },
        "index": {
          "description": "Execute system command Before running command make sure you need any files that are used by the command This function takes list of options often just see CmdOption for the available options the name of the executable either full name or program on the PATH and list of arguments The result is often but can be tuple containg any of Stdout Stderr and Exit Some examples command gcc myfile.c compile file throwing an exception on failure Exit command gcc myfile run command recording the exit code Exit Stderr err command gcc myfile.c run command recording the exit code and error output Stdout out command gcc MM myfile.c run command recording the output command Cwd generated gcc myfile run command in directory Unless you retrieve the ExitCode using Exit any ExitFailure will throw an error including the Stderr in the exception message If you capture the Stdout or Stderr that stream will not be echoed to the console unless you use the option EchoStdout or EchoStderr If you use command inside do block and do not use the result you may get compile-time error about being unable to deduce CmdResult To avoid this error use command",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "command",
          "normalized": "[CmdOption]-\u003eString-\u003e[String]-\u003eAction a",
          "package": "shake",
          "signature": "[CmdOption]-\u003eString-\u003e[String]-\u003eAction r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e where you do not require any results, used to avoid errors about being unable\n   to deduce \u003ccode\u003e\u003ca\u003eCmdResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "command_",
          "package": "shake",
          "signature": "[CmdOption] -\u003e String -\u003e [String] -\u003e Action ()",
          "source": "src/Development-Shake-Command.html#command_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:command_\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:command_\"]"
        },
        "index": {
          "description": "version of command where you do not require any results used to avoid errors about being unable to deduce CmdResult",
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "command_",
          "normalized": "[CmdOption]-\u003eString-\u003e[String]-\u003eAction()",
          "package": "shake",
          "signature": "[CmdOption]-\u003eString-\u003e[String]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:command_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "fromExit",
          "package": "shake",
          "signature": "ExitCode",
          "source": "src/Development-Shake-Command.html#Exit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:fromExit\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:fromExit\"]"
        },
        "index": {
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "fromExit",
          "package": "shake",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:fromExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "fromStderr",
          "package": "shake",
          "signature": "String",
          "source": "src/Development-Shake-Command.html#Stderr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:fromStderr\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:fromStderr\"]"
        },
        "index": {
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "fromStderr",
          "package": "shake",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:fromStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Development.Shake.Command\",\"Development.Shake\"]",
          "name": "fromStdout",
          "package": "shake",
          "signature": "String",
          "source": "src/Development-Shake-Command.html#Stdout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:fromStdout\",\"http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:fromStdout\"]"
        },
        "index": {
          "hierarchy": "Development Shake Command",
          "module": "Development.Shake.Command",
          "name": "fromStdout",
          "package": "shake",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Command.html#v:fromStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for parsing and using config files in a Shake build system. Config files\n   consist of variable bindings, for example:\n\u003c/p\u003e\u003cpre\u003e # This is my Config file\n HEADERS_DIR = /path/to/dir\n CFLAGS = -g -I${HEADERS_DIR}\n CFLAGS = $CFLAGS -O2\n include extra/file.cfg\n\u003c/pre\u003e\u003cp\u003eThis defines the variable \u003ccode\u003eHEADERS_DIR\u003c/code\u003e (equal to \u003ccode\u003e/path/to/dir\u003c/code\u003e), and\n   \u003ccode\u003eCFLAGS\u003c/code\u003e (equal to \u003ccode\u003e-g -I/path/to/dir -O2\u003c/code\u003e), and also includes the configuration\n   statements in the file \u003ccode\u003eextra/file.cfg\u003c/code\u003e. The full lexical syntax for configuration\n   files is defined here: \u003ca\u003ehttp://martine.github.io/ninja/manual.html#_lexical_syntax\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo use the configuration file either use \u003ccode\u003e\u003ca\u003ereadConfigFile\u003c/a\u003e\u003c/code\u003e to parse the configuration file\n   and use the values directly, or \u003ccode\u003e\u003ca\u003eusingConfigFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e to track the configuration\n   values, so they become build dependencies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.Config",
          "name": "Config",
          "package": "shake",
          "source": "src/Development-Shake-Config.html",
          "type": "module"
        },
        "index": {
          "description": "module for parsing and using config files in Shake build system Config files consist of variable bindings for example This is my Config file HEADERS DIR path to dir CFLAGS HEADERS DIR CFLAGS CFLAGS O2 include extra file.cfg This defines the variable HEADERS DIR equal to path to dir and CFLAGS equal to path to dir O2 and also includes the configuration statements in the file extra file.cfg The full lexical syntax for configuration files is defined here http martine.github.io ninja manual.html lexical syntax To use the configuration file either use readConfigFile to parse the configuration file and use the values directly or usingConfigFile and getConfig to track the configuration values so they become build dependencies",
          "hierarchy": "Development Shake Config",
          "module": "Development.Shake.Config",
          "name": "Config",
          "package": "shake",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the value of a configuration variable, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to indicate the variable\n   has no binding. Any build system using \u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e \u003cem\u003emust\u003c/em\u003e call either \u003ccode\u003e\u003ca\u003eusingConfigFile\u003c/a\u003e\u003c/code\u003e\n   or \u003ccode\u003e\u003ca\u003eusingConfig\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e function will introduce a dependency on the configuration\n   variable (but not the whole configuration file), and if the configuration variable changes, the rule will be rerun.\n   As an example:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eusingConfigFile\u003c/a\u003e\u003c/code\u003e \"myconfiguration.cfg\"\n \"*.o\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n     cflags \u003c- \u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e \"CFLAGS\"\n     \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc\" [out \u003ccode\u003e-\u003c.\u003e\u003c/code\u003e \"c\"] (fromMaybe \"\" cflags)\n\u003c/pre\u003e",
          "module": "Development.Shake.Config",
          "name": "getConfig",
          "package": "shake",
          "signature": "String -\u003e Action (Maybe String)",
          "source": "src/Development-Shake-Config.html#getConfig",
          "type": "function"
        },
        "index": {
          "description": "Obtain the value of configuration variable returns Nothing to indicate the variable has no binding Any build system using getConfig must call either usingConfigFile or usingConfig The getConfig function will introduce dependency on the configuration variable but not the whole configuration file and if the configuration variable changes the rule will be rerun As an example usingConfigFile myconfiguration.cfg out do cflags getConfig CFLAGS cmd gcc out fromMaybe cflags",
          "hierarchy": "Development Shake Config",
          "module": "Development.Shake.Config",
          "name": "getConfig",
          "normalized": "String-\u003eAction(Maybe String)",
          "package": "shake",
          "partial": "Config",
          "signature": "String-\u003eAction(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Config.html#v:getConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a config file, returning a list of the variables and their bindings.\n   Config files use the Ninja lexical syntax:\n   \u003ca\u003ehttp://martine.github.io/ninja/manual.html#_lexical_syntax\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Development.Shake.Config",
          "name": "readConfigFile",
          "package": "shake",
          "signature": "FilePath -\u003e IO (HashMap String String)",
          "source": "src/Development-Shake-Config.html#readConfigFile",
          "type": "function"
        },
        "index": {
          "description": "Read config file returning list of the variables and their bindings Config files use the Ninja lexical syntax http martine.github.io ninja manual.html lexical syntax",
          "hierarchy": "Development Shake Config",
          "module": "Development.Shake.Config",
          "name": "readConfigFile",
          "normalized": "FilePath-\u003eIO(HashMap String String)",
          "package": "shake",
          "partial": "Config File",
          "signature": "FilePath-\u003eIO(HashMap String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Config.html#v:readConfigFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the values to use with \u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e, generally prefer\n   \u003ccode\u003e\u003ca\u003eusingConfigFile\u003c/a\u003e\u003c/code\u003e unless you also need access to the values\n   of variables outside \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Config",
          "name": "usingConfig",
          "package": "shake",
          "signature": "HashMap String String -\u003e Rules ()",
          "source": "src/Development-Shake-Config.html#usingConfig",
          "type": "function"
        },
        "index": {
          "description": "Specify the values to use with getConfig generally prefer usingConfigFile unless you also need access to the values of variables outside Action",
          "hierarchy": "Development Shake Config",
          "module": "Development.Shake.Config",
          "name": "usingConfig",
          "normalized": "HashMap String String-\u003eRules()",
          "package": "shake",
          "partial": "Config",
          "signature": "HashMap String String-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Config.html#v:usingConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the file to use with \u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Config",
          "name": "usingConfigFile",
          "package": "shake",
          "signature": "FilePath -\u003e Rules ()",
          "source": "src/Development-Shake-Config.html#usingConfigFile",
          "type": "function"
        },
        "index": {
          "description": "Specify the file to use with getConfig",
          "hierarchy": "Development Shake Config",
          "module": "Development.Shake.Config",
          "name": "usingConfigFile",
          "normalized": "FilePath-\u003eRules()",
          "package": "shake",
          "partial": "Config File",
          "signature": "FilePath-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Config.html#v:usingConfigFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e operations, to be used instead of \u003ca\u003eSystem.FilePath\u003c/a\u003e\n   when writing build systems. In build systems, when using the file name\n   as a key for indexing rules, it is important that two different strings do\n   not refer to the same on-disk file. We therefore follow the conventions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Always use \u003ccode\u003e/\u003c/code\u003e as the directory separator, even on Windows.\n\u003c/li\u003e\u003cli\u003e When combining \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e values with \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e we squash any \u003ccode\u003e/./\u003c/code\u003e components.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Development.Shake.FilePath",
          "name": "FilePath",
          "package": "shake",
          "source": "src/Development-Shake-FilePath.html",
          "type": "module"
        },
        "index": {
          "description": "module for FilePath operations to be used instead of System.FilePath when writing build systems In build systems when using the file name as key for indexing rules it is important that two different strings do not refer to the same on-disk file We therefore follow the conventions Always use as the directory separator even on Windows When combining FilePath values with we squash any components",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "FilePath",
          "package": "shake",
          "partial": "File Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current extension and add another, an alias for \u003ccode\u003e\u003ca\u003ereplaceExtension\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.FilePath",
          "name": "(-\u003c.\u003e)",
          "package": "shake",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/Development-Shake-FilePath.html#-%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "Remove the current extension and add another an alias for replaceExtension",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "(-\u003c.\u003e) -\u003c.\u003e",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "shake",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:-45--60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two file paths, an alias for \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.FilePath",
          "name": "(\u003c/\u003e)",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Development-Shake-FilePath.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Combine two file paths an alias for combine",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "shake",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two file paths. Any leading \u003ccode\u003e./\u003c/code\u003e or \u003ccode\u003e../\u003c/code\u003e components in the right file\n   are eliminated.\n\u003c/p\u003e\u003cpre\u003e combine \"aaa/bbb\" \"ccc\" == \"aaa/bbb/ccc\"\n combine \"aaa/bbb\" \"./ccc\" == \"aaa/bbb/ccc\"\n combine \"aaa/bbb\" \"../ccc\" == \"aaa/ccc\"\n\u003c/pre\u003e",
          "module": "Development.Shake.FilePath",
          "name": "combine",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Development-Shake-FilePath.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two file paths Any leading or components in the right file are eliminated combine aaa bbb ccc aaa bbb ccc combine aaa bbb ccc aaa bbb ccc combine aaa bbb ccc aaa ccc",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "combine",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "shake",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the first directory from a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e. Should only be used on\n   relative paths.\n\u003c/p\u003e\u003cpre\u003e dropDirectory1 \"aaa/bbb\" == \"bbb\"\n dropDirectory1 \"aaa/\" == \"\"\n dropDirectory1 \"aaa\" == \"\"\n dropDirectory1 \"\" == \"\"\n\u003c/pre\u003e",
          "module": "Development.Shake.FilePath",
          "name": "dropDirectory1",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Development-Shake-FilePath.html#dropDirectory1",
          "type": "function"
        },
        "index": {
          "description": "Drop the first directory from FilePath Should only be used on relative paths dropDirectory1 aaa bbb bbb dropDirectory1 aaa dropDirectory1 aaa dropDirectory1",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "dropDirectory1",
          "normalized": "FilePath-\u003eFilePath",
          "package": "shake",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:dropDirectory1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extension of executables, \u003ccode\u003e\"exe\"\u003c/code\u003e on Windows and \u003ccode\u003e\"\"\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Development.Shake.FilePath",
          "name": "exe",
          "package": "shake",
          "signature": "String",
          "source": "src/Development-Shake-FilePath.html#exe",
          "type": "function"
        },
        "index": {
          "description": "The extension of executables exe on Windows and otherwise",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "exe",
          "package": "shake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:exe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, trying to do:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All \u003ccode\u003e\u003ca\u003epathSeparators\u003c/a\u003e\u003c/code\u003e become \u003ccode\u003e/\u003c/code\u003e\n * \u003ccode\u003efoo/bar/../baz\u003c/code\u003e becomes \u003ccode\u003efoo/baz\u003c/code\u003e\n * \u003ccode\u003efoo/./bar\u003c/code\u003e becomes \u003ccode\u003efoo/bar\u003c/code\u003e\n * \u003ccode\u003efoo//bar\u003c/code\u003e becomes \u003ccode\u003efoo/bar\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is not based on the normalise function from the filepath library, as that function\n   is quite broken.\n\u003c/p\u003e",
          "module": "Development.Shake.FilePath",
          "name": "normalise",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Development-Shake-FilePath.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "Normalise FilePath trying to do All pathSeparators become foo bar baz becomes foo baz foo bar becomes foo bar foo bar becomes foo bar This function is not based on the normalise function from the filepath library as that function is quite broken",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "normalise",
          "normalized": "FilePath-\u003eFilePath",
          "package": "shake",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the first component of a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e. Should only be used on\n   relative paths.\n\u003c/p\u003e\u003cpre\u003e takeDirectory1 \"aaa/bbb\" == \"aaa\"\n takeDirectory1 \"aaa/\" == \"aaa\"\n takeDirectory1 \"aaa\" == \"aaa\"\n\u003c/pre\u003e",
          "module": "Development.Shake.FilePath",
          "name": "takeDirectory1",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Development-Shake-FilePath.html#takeDirectory1",
          "type": "function"
        },
        "index": {
          "description": "Take the first component of FilePath Should only be used on relative paths takeDirectory1 aaa bbb aaa takeDirectory1 aaa aaa takeDirectory1 aaa aaa",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "takeDirectory1",
          "normalized": "FilePath-\u003eFilePath",
          "package": "shake",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:takeDirectory1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to native path separators, namely \u003ccode\u003e\\\u003c/code\u003e on Windows. \n\u003c/p\u003e",
          "module": "Development.Shake.FilePath",
          "name": "toNative",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Development-Shake-FilePath.html#toNative",
          "type": "function"
        },
        "index": {
          "description": "Convert to native path separators namely on Windows",
          "hierarchy": "Development Shake FilePath",
          "module": "Development.Shake.FilePath",
          "name": "toNative",
          "normalized": "FilePath-\u003eFilePath",
          "package": "shake",
          "partial": "Native",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-FilePath.html#v:toNative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is used for defining new types of rules for Shake build systems.\n   Most users will find the built-in set of rules sufficient.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.Rule",
          "name": "Rule",
          "package": "shake",
          "source": "src/Development-Shake-Rule.html",
          "type": "module"
        },
        "index": {
          "description": "This module is used for defining new types of rules for Shake build systems Most users will find the built-in set of rules sufficient",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "Rule",
          "package": "shake",
          "partial": "Rule",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a pair of types that can be used by Shake rules.\n   To import all the type classes required see \u003ca\u003eDevelopment.Shake.Classes\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "Rule",
          "package": "shake",
          "source": "src/Development-Shake-Core.html#Rule",
          "type": "class"
        },
        "index": {
          "description": "Define pair of types that can be used by Shake rules To import all the type classes required see Development.Shake.Classes",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "Rule",
          "package": "shake",
          "partial": "Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an alias for the six type classes required for things involved in Shake \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003es.\n   This alias is only available in GHC 7.4 and above, and requires the \u003ccode\u003eConstraintKinds\u003c/code\u003e extension.\n\u003c/p\u003e\u003cp\u003eTo define your own values meeting the necessary constraints it is convenient to use the extensions\n   \u003ccode\u003eGeneralizedNewtypeDeriving\u003c/code\u003e and \u003ccode\u003eDeriveDataTypeable\u003c/code\u003e to write:\n\u003c/p\u003e\u003cpre\u003e newtype MyType = MyType (String, Bool) deriving (Show,Typeable,Eq,Hashable,Binary,NFData)\n\u003c/pre\u003e",
          "module": "Development.Shake.Rule",
          "name": "ShakeValue",
          "package": "shake",
          "source": "src/Development-Shake-Core.html#ShakeValue",
          "type": "type"
        },
        "index": {
          "description": "Define an alias for the six type classes required for things involved in Shake Rule This alias is only available in GHC and above and requires the ConstraintKinds extension To define your own values meeting the necessary constraints it is convenient to use the extensions GeneralizedNewtypeDeriving and DeriveDataTypeable to write newtype MyType MyType String Bool deriving Show Typeable Eq Hashable Binary NFData",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "ShakeValue",
          "package": "shake",
          "partial": "Shake Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#t:ShakeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a rule, returning the associated values. If possible, the rules will be run in parallel.\n   This function requires that appropriate rules have been added with \u003ccode\u003e\u003ca\u003erule\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003edefaultRule\u003c/a\u003e\u003c/code\u003e.\n   All \u003ccode\u003ekey\u003c/code\u003e values passed to \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e become dependencies of the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "apply",
          "package": "shake",
          "signature": "[key] -\u003e Action [value]",
          "source": "src/Development-Shake-Core.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Execute rule returning the associated values If possible the rules will be run in parallel This function requires that appropriate rules have been added with rule or defaultRule All key values passed to apply become dependencies of the Action",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "apply",
          "normalized": "[a]-\u003eAction[b]",
          "package": "shake",
          "signature": "[key]-\u003eAction[value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a single rule, equivalent to calling \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e with a singleton list. Where possible,\n   use \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e to allow parallelism.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "apply1",
          "package": "shake",
          "signature": "key -\u003e Action value",
          "source": "src/Development-Shake-Core.html#apply1",
          "type": "function"
        },
        "index": {
          "description": "Apply single rule equivalent to calling apply with singleton list Where possible use apply to allow parallelism",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "apply1",
          "normalized": "a-\u003eAction b",
          "package": "shake",
          "signature": "key-\u003eAction value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:apply1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erule\u003c/a\u003e\u003c/code\u003e, but lower priority, if no \u003ccode\u003e\u003ca\u003erule\u003c/a\u003e\u003c/code\u003e exists then \u003ccode\u003e\u003ca\u003edefaultRule\u003c/a\u003e\u003c/code\u003e is checked.\n   All default rules must be disjoint.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "defaultRule",
          "package": "shake",
          "signature": "(key -\u003e Maybe (Action value)) -\u003e Rules ()",
          "source": "src/Development-Shake-Core.html#defaultRule",
          "type": "function"
        },
        "index": {
          "description": "Like rule but lower priority if no rule exists then defaultRule is checked All default rules must be disjoint",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "defaultRule",
          "normalized": "(a-\u003eMaybe(Action b))-\u003eRules()",
          "package": "shake",
          "partial": "Rule",
          "signature": "(key-\u003eMaybe(Action value))-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:defaultRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a rule to build a key, returning an appropriate \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e. All rules must be disjoint.\n   To define lower priority rules use \u003ccode\u003e\u003ca\u003edefaultRule\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "rule",
          "package": "shake",
          "signature": "(key -\u003e Maybe (Action value)) -\u003e Rules ()",
          "source": "src/Development-Shake-Core.html#rule",
          "type": "function"
        },
        "index": {
          "description": "Add rule to build key returning an appropriate Action All rules must be disjoint To define lower priority rules use defaultRule",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "rule",
          "normalized": "(a-\u003eMaybe(Action b))-\u003eRules()",
          "package": "shake",
          "signature": "(key-\u003eMaybe(Action value))-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the \u003ccode\u003evalue\u003c/code\u003e associated with a \u003ccode\u003ekey\u003c/code\u003e, if available.\n\u003c/p\u003e\u003cp\u003eAs an example for filenames/timestamps, if the file exists you should return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n   the timestamp, but otherwise return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. For rules whose values are not\n   stored externally, \u003ccode\u003e\u003ca\u003estoredValue\u003c/a\u003e\u003c/code\u003e should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "storedValue",
          "package": "shake",
          "signature": "ShakeOptions -\u003e key -\u003e IO (Maybe value)",
          "source": "src/Development-Shake-Core.html#storedValue",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the value associated with key if available As an example for filenames timestamps if the file exists you should return Just the timestamp but otherwise return Nothing For rules whose values are not stored externally storedValue should return Nothing",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "storedValue",
          "normalized": "ShakeOptions-\u003ea-\u003eIO(Maybe b)",
          "package": "shake",
          "partial": "Value",
          "signature": "ShakeOptions-\u003ekey-\u003eIO(Maybe value)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:storedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow any matching key to violate the tracking rules.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "trackAllow",
          "package": "shake",
          "signature": "(key -\u003e Bool) -\u003e Action ()",
          "source": "src/Development-Shake-Core.html#trackAllow",
          "type": "function"
        },
        "index": {
          "description": "Allow any matching key to violate the tracking rules",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "trackAllow",
          "normalized": "(a-\u003eBool)-\u003eAction()",
          "package": "shake",
          "partial": "Allow",
          "signature": "(key-\u003eBool)-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:trackAllow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack that a key has been changed by the action preceeding it.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "trackChange",
          "package": "shake",
          "signature": "key -\u003e Action ()",
          "source": "src/Development-Shake-Core.html#trackChange",
          "type": "function"
        },
        "index": {
          "description": "Track that key has been changed by the action preceeding it",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "trackChange",
          "normalized": "a-\u003eAction()",
          "package": "shake",
          "partial": "Change",
          "signature": "key-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:trackChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack that a key has been used by the action preceeding it.\n\u003c/p\u003e",
          "module": "Development.Shake.Rule",
          "name": "trackUse",
          "package": "shake",
          "signature": "key -\u003e Action ()",
          "source": "src/Development-Shake-Core.html#trackUse",
          "type": "function"
        },
        "index": {
          "description": "Track that key has been used by the action preceeding it",
          "hierarchy": "Development Shake Rule",
          "module": "Development.Shake.Rule",
          "name": "trackUse",
          "normalized": "a-\u003eAction()",
          "package": "shake",
          "partial": "Use",
          "signature": "key-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Rule.html#v:trackUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003ecommand\u003c/code\u003e or \u003ccode\u003ecmd\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eDeprecated: Please use command or cmd instead. This module will be removed in a future version.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis module provides versions of the \u003ccode\u003e\u003ca\u003esystem'\u003c/a\u003e\u003c/code\u003e family of functions\n   which take a variable number of arguments.\n\u003c/p\u003e\u003cp\u003eAll these functions take a variable number of arguments.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eString\u003c/code\u003e arguments are treated as whitespace separated arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e[String]\u003c/code\u003e arguments are treated as literal arguments.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs an example, to run \u003ccode\u003eghc --make -O2 inputs -o output\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003esys\u003c/a\u003e\u003c/code\u003e \"ghc --make -O2\" inputs \"-o\" [output]\n\u003c/pre\u003e\u003cp\u003eNote that we enclose \u003ccode\u003eoutput\u003c/code\u003e as a list so that if the output name contains spaces they are\n   appropriately escaped.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.Sys",
          "name": "Sys",
          "package": "shake",
          "source": "src/Development-Shake-Sys.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use command or cmd instead Deprecated Please use command or cmd instead This module will be removed in future version This module provides versions of the system family of functions which take variable number of arguments All these functions take variable number of arguments String arguments are treated as whitespace separated arguments String arguments are treated as literal arguments As an example to run ghc make O2 inputs output sys ghc make O2 inputs output Note that we enclose output as list so that if the output name contains spaces they are appropriately escaped",
          "hierarchy": "Development Shake Sys",
          "module": "Development.Shake.Sys",
          "name": "Sys",
          "package": "shake",
          "partial": "Sys",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Sys.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable arity function to accumulate a list of arguments.\n\u003c/p\u003e",
          "module": "Development.Shake.Sys",
          "name": "args",
          "package": "shake",
          "signature": "v :-\u003e [String]",
          "source": "src/Development-Shake-Sys.html#args",
          "type": "function"
        },
        "index": {
          "description": "variable arity function to accumulate list of arguments",
          "hierarchy": "Development Shake Sys",
          "module": "Development.Shake.Sys",
          "name": "args",
          "normalized": "a-\u003e[String]",
          "package": "shake",
          "signature": "v-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Sys.html#v:args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable arity version of \u003ccode\u003e\u003ca\u003esystem'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Sys",
          "name": "sys",
          "package": "shake",
          "signature": "String -\u003e v :-\u003e Action ()",
          "source": "src/Development-Shake-Sys.html#sys",
          "type": "function"
        },
        "index": {
          "description": "variable arity version of system",
          "hierarchy": "Development Shake Sys",
          "module": "Development.Shake.Sys",
          "name": "sys",
          "normalized": "String-\u003ea-\u003eAction()",
          "package": "shake",
          "signature": "String-\u003ev-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Sys.html#v:sys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable arity version of \u003ccode\u003e\u003ca\u003esystemCwd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Sys",
          "name": "sysCwd",
          "package": "shake",
          "signature": "FilePath -\u003e String -\u003e v :-\u003e Action ()",
          "source": "src/Development-Shake-Sys.html#sysCwd",
          "type": "function"
        },
        "index": {
          "description": "variable arity version of systemCwd",
          "hierarchy": "Development Shake Sys",
          "module": "Development.Shake.Sys",
          "name": "sysCwd",
          "normalized": "FilePath-\u003eString-\u003ea-\u003eAction()",
          "package": "shake",
          "partial": "Cwd",
          "signature": "FilePath-\u003eString-\u003ev-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Sys.html#v:sysCwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable arity version of \u003ccode\u003e\u003ca\u003esystemOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake.Sys",
          "name": "sysOutput",
          "package": "shake",
          "signature": "String -\u003e v :-\u003e Action (String, String)",
          "source": "src/Development-Shake-Sys.html#sysOutput",
          "type": "function"
        },
        "index": {
          "description": "variable arity version of systemOutput",
          "hierarchy": "Development Shake Sys",
          "module": "Development.Shake.Sys",
          "name": "sysOutput",
          "normalized": "String-\u003ea-\u003eAction(String,String)",
          "package": "shake",
          "partial": "Output",
          "signature": "String-\u003ev-\u003eAction(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Sys.html#v:sysOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for useful utility functions for Shake build systems.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.Util",
          "name": "Util",
          "package": "shake",
          "source": "src/Development-Shake-Util.html",
          "type": "module"
        },
        "index": {
          "description": "module for useful utility functions for Shake build systems",
          "hierarchy": "Development Shake Util",
          "module": "Development.Shake.Util",
          "name": "Util",
          "package": "shake",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepend on the dependencies listed in a Makefile. Does not depend on the Makefile itself.\n\u003c/p\u003e\u003cpre\u003e needMakefileDependencies file = need . concatMap snd . parseMakefile =\u003c\u003c liftIO (readFile file)\n\u003c/pre\u003e",
          "module": "Development.Shake.Util",
          "name": "needMakefileDependencies",
          "package": "shake",
          "signature": "FilePath -\u003e Action ()",
          "source": "src/Development-Shake-Util.html#needMakefileDependencies",
          "type": "function"
        },
        "index": {
          "description": "Depend on the dependencies listed in Makefile Does not depend on the Makefile itself needMakefileDependencies file need concatMap snd parseMakefile liftIO readFile file",
          "hierarchy": "Development Shake Util",
          "module": "Development.Shake.Util",
          "name": "needMakefileDependencies",
          "normalized": "FilePath-\u003eAction()",
          "package": "shake",
          "partial": "Makefile Dependencies",
          "signature": "FilePath-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Util.html#v:needMakefileDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepend on the dependencies listed in a Makefile. Does not depend on the Makefile itself.\n   Use this function to indicate that you have \u003cem\u003ealready\u003c/em\u003e used the files in question.\n\u003c/p\u003e\u003cpre\u003e neededMakefileDependencies file = needed . concatMap snd . parseMakefile =\u003c\u003c liftIO (readFile file)\n\u003c/pre\u003e",
          "module": "Development.Shake.Util",
          "name": "neededMakefileDependencies",
          "package": "shake",
          "signature": "FilePath -\u003e Action ()",
          "source": "src/Development-Shake-Util.html#neededMakefileDependencies",
          "type": "function"
        },
        "index": {
          "description": "Depend on the dependencies listed in Makefile Does not depend on the Makefile itself Use this function to indicate that you have already used the files in question neededMakefileDependencies file needed concatMap snd parseMakefile liftIO readFile file",
          "hierarchy": "Development Shake Util",
          "module": "Development.Shake.Util",
          "name": "neededMakefileDependencies",
          "normalized": "FilePath-\u003eAction()",
          "package": "shake",
          "partial": "Makefile Dependencies",
          "signature": "FilePath-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Util.html#v:neededMakefileDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the text of a Makefile, extract the list of targets and dependencies. Assumes a\n   small subset of Makefile syntax, mostly that generated by \u003ccode\u003egcc -MM\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e parseMakefile \"a: b c\\nd : e\" == [(\"a\",[\"b\",\"c\"]),(\"d\",[\"e\"])]\n\u003c/pre\u003e",
          "module": "Development.Shake.Util",
          "name": "parseMakefile",
          "package": "shake",
          "signature": "String -\u003e [(FilePath, [FilePath])]",
          "source": "src/Development-Shake-Util.html#parseMakefile",
          "type": "function"
        },
        "index": {
          "description": "Given the text of Makefile extract the list of targets and dependencies Assumes small subset of Makefile syntax mostly that generated by gcc MM parseMakefile nd",
          "hierarchy": "Development Shake Util",
          "module": "Development.Shake.Util",
          "name": "parseMakefile",
          "normalized": "String-\u003e[(FilePath,[FilePath])]",
          "package": "shake",
          "partial": "Makefile",
          "signature": "String-\u003e[(FilePath,[FilePath])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Util.html#v:parseMakefile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshakeArgsWith\u003c/a\u003e\u003c/code\u003e, but instead of accumulating a list of flags, apply functions to a default value.\n   Usually used to populate a record structure. As an example of a build system that can use either \u003ccode\u003egcc\u003c/code\u003e or \u003ccode\u003edistcc\u003c/code\u003e for compiling:\n\u003c/p\u003e\u003cpre\u003e\nimport System.Console.GetOpt\n\ndata Flags = Flags {distCC :: Bool} deriving Eq\nflags = [Option \"\" [\"distcc\"] (NoArg $ Right $ \\x -\u003e x{distCC=True}) \"Run distributed.\"]\n\nmain = \u003ccode\u003e\u003ca\u003eshakeArgsAccumulate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e flags (Flags False) $ \\flags targets -\u003e return $ Just $ do\n     if null targets then \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e [\"result.exe\"] else \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e targets\n     let compiler = if distCC flags then \"distcc\" else \"gcc\"\n     \"*.o\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n         \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e ...\n         \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e compiler ...\n     ...\n\u003c/pre\u003e\u003cp\u003eNow you can pass \u003ccode\u003e--distcc\u003c/code\u003e to use the \u003ccode\u003edistcc\u003c/code\u003e compiler.\n\u003c/p\u003e",
          "module": "Development.Shake.Util",
          "name": "shakeArgsAccumulate",
          "package": "shake",
          "signature": "ShakeOptions -\u003e [OptDescr (Either String (a -\u003e a))] -\u003e a -\u003e (a -\u003e [String] -\u003e IO (Maybe (Rules ()))) -\u003e IO ()",
          "source": "src/Development-Shake-Util.html#shakeArgsAccumulate",
          "type": "function"
        },
        "index": {
          "description": "Like shakeArgsWith but instead of accumulating list of flags apply functions to default value Usually used to populate record structure As an example of build system that can use either gcc or distcc for compiling import System.Console.GetOpt data Flags Flags distCC Bool deriving Eq flags Option distcc NoArg Right distCC True Run distributed main shakeArgsAccumulate shakeOptions flags Flags False flags targets return Just do if null targets then want result.exe else want targets let compiler if distCC flags then distcc else gcc out do need cmd compiler Now you can pass distcc to use the distcc compiler",
          "hierarchy": "Development Shake Util",
          "module": "Development.Shake.Util",
          "name": "shakeArgsAccumulate",
          "normalized": "ShakeOptions-\u003e[OptDescr(Either String(a-\u003ea))]-\u003ea-\u003e(a-\u003e[String]-\u003eIO(Maybe(Rules())))-\u003eIO()",
          "package": "shake",
          "partial": "Args Accumulate",
          "signature": "ShakeOptions-\u003e[OptDescr(Either String(a-\u003ea))]-\u003ea-\u003e(a-\u003e[String]-\u003eIO(Maybe(Rules())))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake-Util.html#v:shakeArgsAccumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is used for defining Shake build systems. As a simple example of a Shake build system,\n   let us build the file \u003ccode\u003eresult.tar\u003c/code\u003e from the files listed by \u003ccode\u003eresult.txt\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eDevelopment.Shake\u003c/a\u003e\nimport \u003ca\u003eDevelopment.Shake.FilePath\u003c/a\u003e\n\nmain = \u003ccode\u003e\u003ca\u003eshakeArgs\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e $ do\n    \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e [\"result.tar\"]\n    \"*.tar\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n        contents \u003c- \u003ccode\u003e\u003ca\u003ereadFileLines\u003c/a\u003e\u003c/code\u003e $ out \u003ccode\u003e\u003ca\u003e-\u003c.\u003e\u003c/a\u003e\u003c/code\u003e \"txt\"\n        \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e contents\n        \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"tar -cf\" [out] contents\n\u003c/pre\u003e\u003cp\u003eWe start by importing the modules defining both Shake and routines for manipulating \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e values.\n   We define \u003ccode\u003emain\u003c/code\u003e to call \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e with the default \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e. As the second argument to\n   \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e, we provide a set of rules. There are two common forms of rules, \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e to specify target files,\n   and \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e to define a rule which builds a \u003ccode\u003e\u003ca\u003eFilePattern\u003c/a\u003e\u003c/code\u003e. We use \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e to require that after the build\n   completes the file \u003ccode\u003eresult.tar\u003c/code\u003e should be ready.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e*.tar\u003c/code\u003e rule describes how to build files with the extension \u003ccode\u003e.tar\u003c/code\u003e, including \u003ccode\u003eresult.tar\u003c/code\u003e.\n   We \u003ccode\u003e\u003ca\u003ereadFileLines\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003eresult.txt\u003c/code\u003e, after changing the \u003ccode\u003e.tar\u003c/code\u003e extension to \u003ccode\u003e.txt\u003c/code\u003e. We read each line\n   into the variable \u003ccode\u003econtents\u003c/code\u003e -- being a list of the files that should go into \u003ccode\u003eresult.tar\u003c/code\u003e. Next, we\n   depend (\u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e) all the files in \u003ccode\u003econtents\u003c/code\u003e. If any of these files change, the rule will be repeated.\n   Finally we call the \u003ccode\u003etar\u003c/code\u003e program. If either \u003ccode\u003eresult.txt\u003c/code\u003e changes, or any of the files listed by \u003ccode\u003eresult.txt\u003c/code\u003e\n   change, then \u003ccode\u003eresult.tar\u003c/code\u003e will be rebuilt.\n\u003c/p\u003e\u003cp\u003eTo find out more:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The user manual contains a longer example and background information on how to use Shake\n   \u003ca\u003ehttps://github.com/ndmitchell/shake/blob/master/docs/Manual.md#readme\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e The home page has links to additional information \u003ca\u003ehttps://github.com/ndmitchell/shake#readme\u003c/a\u003e, including\n   a mailing list.\n\u003c/li\u003e\u003cli\u003e The theory behind Shake is described in an ICFP 2012 paper, \u003cem\u003eShake Before Building -- Replacing Make with Haskell\u003c/em\u003e\n   \u003ca\u003ehttp://community.haskell.org/~ndm/downloads/paper-shake_before_building-10_sep_2012.pdf\u003c/a\u003e. The associated talk\n   forms a short overview of Shake \u003ca\u003ehttp://www.youtube.com/watch?v=xYCPpXVlqFM\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003e== WRITING A BUILD SYSTEM ==============================\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWhen writing a Shake build system, start by defining what you \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e, then write rules\n   with \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e to produce the results. Before calling \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e you should ensure that any files the command\n   requires are demanded with calls to \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e. We offer the following advice to Shake users:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003eghc --make\u003c/code\u003e or \u003ccode\u003ecabal\u003c/code\u003e is capable of building your project, use that instead. Custom build systems are\n   necessary for many complex projects, but many projects are not complex.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eshakeArgs\u003c/a\u003e\u003c/code\u003e function automatically handles command line arguments. To define non-file targets use \u003ccode\u003e\u003ca\u003ephony\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Put all result files in a distinguished directory, for example \u003ccode\u003e_make\u003c/code\u003e. You can implement a \u003ccode\u003eclean\u003c/code\u003e\n   command by removing that directory, using \u003ccode\u003e\u003ccode\u003e\u003ca\u003eremoveFilesAfter\u003c/a\u003e\u003c/code\u003e \"_make\" [\"//*\"]\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e To obtain parallel builds set \u003ccode\u003e\u003ca\u003eshakeThreads\u003c/a\u003e\u003c/code\u003e to a number greater than 1.\n\u003c/li\u003e\u003cli\u003e Lots of compilers produce \u003ccode\u003e.o\u003c/code\u003e files. To avoid overlapping rules, use \u003ccode\u003e.c.o\u003c/code\u003e for C compilers,\n   \u003ccode\u003e.hs.o\u003c/code\u003e for Haskell compilers etc.\n\u003c/li\u003e\u003cli\u003e Do not be afraid to mix Shake rules, system commands and other Haskell libraries -- use each for what\n   it does best.\n\u003c/li\u003e\u003cli\u003e The more accurate the dependencies are, the better. Use additional rules like \u003ccode\u003e\u003ca\u003edoesFileExist\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003egetDirectoryFiles\u003c/a\u003e\u003c/code\u003e to track information other than just the contents of files. For information in the environment\n   that you suspect will change regularly (perhaps \u003ccode\u003eghc\u003c/code\u003e version number), either write the information to\n   a file with \u003ccode\u003e\u003ca\u003ealwaysRerun\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteFileChanged\u003c/a\u003e\u003c/code\u003e, or use \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003e== GHC BUILD FLAGS ==============================\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFor large build systems the choice of GHC flags can have a significant impact. We recommend:\n\u003c/p\u003e\u003cpre\u003e ghc --make MyBuildSystem -rtsopts \"-with-rtsopts=-I0 -qg -qb\"\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Compile without \u003ccode\u003e-threaded\u003c/code\u003e: In GHC 7.6 and earlier bug 7646 \u003ca\u003ehttp://ghc.haskell.org/trac/ghc/ticket/7646\u003c/a\u003e\n     can cause a race condition in build systems that write files then read them. Omitting \u003ccode\u003e-threaded\u003c/code\u003e will\n     still allow your \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e actions to run in parallel, so most build systems will still run in parallel.\n\u003c/li\u003e\u003cli\u003e Compile with \u003ccode\u003e-rtsopts\u003c/code\u003e: Allow the setting of further GHC options at runtime.\n\u003c/li\u003e\u003cli\u003e Run with \u003ccode\u003e-I0\u003c/code\u003e: Disable idle garbage collection. In a build system regularly running many system\n     commands the program appears \"idle\" very often, triggering regular unnecessary garbage collection, stealing\n     resources from the program doing actual work.\n\u003c/li\u003e\u003cli\u003e Run with \u003ccode\u003e-qg -qb\u003c/code\u003e: Disable parallel garbage collection. Parallel garbage collection in Shake\n     programs typically goes slower than sequential garbage collection, while occupying many cores that\n     can be used for running system commands.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eAcknowledgements\u003c/em\u003e: Thanks to Austin Seipp for properly integrating the profiling code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake",
          "name": "Shake",
          "package": "shake",
          "source": "src/Development-Shake.html",
          "type": "module"
        },
        "index": {
          "description": "This module is used for defining Shake build systems As simple example of Shake build system let us build the file result.tar from the files listed by result.txt import Development.Shake import Development.Shake.FilePath main shakeArgs shakeOptions do want result.tar tar out do contents readFileLines out txt need contents cmd tar cf out contents We start by importing the modules defining both Shake and routines for manipulating FilePath values We define main to call shake with the default shakeOptions As the second argument to shake we provide set of rules There are two common forms of rules want to specify target files and to define rule which builds FilePattern We use want to require that after the build completes the file result.tar should be ready The tar rule describes how to build files with the extension tar including result.tar We readFileLines on result.txt after changing the tar extension to txt We read each line into the variable contents being list of the files that should go into result.tar Next we depend need all the files in contents If any of these files change the rule will be repeated Finally we call the tar program If either result.txt changes or any of the files listed by result.txt change then result.tar will be rebuilt To find out more The user manual contains longer example and background information on how to use Shake https github.com ndmitchell shake blob master docs Manual.md readme The home page has links to additional information https github.com ndmitchell shake readme including mailing list The theory behind Shake is described in an ICFP paper Shake Before Building Replacing Make with Haskell http community.haskell.org ndm downloads paper-shake before building-10 sep pdf The associated talk forms short overview of Shake http www.youtube.com watch xYCPpXVlqFM WRITING BUILD SYSTEM When writing Shake build system start by defining what you want then write rules with to produce the results Before calling cmd you should ensure that any files the command requires are demanded with calls to need We offer the following advice to Shake users If ghc make or cabal is capable of building your project use that instead Custom build systems are necessary for many complex projects but many projects are not complex The shakeArgs function automatically handles command line arguments To define non-file targets use phony Put all result files in distinguished directory for example make You can implement clean command by removing that directory using removeFilesAfter make To obtain parallel builds set shakeThreads to number greater than Lots of compilers produce files To avoid overlapping rules use c.o for compilers hs.o for Haskell compilers etc Do not be afraid to mix Shake rules system commands and other Haskell libraries use each for what it does best The more accurate the dependencies are the better Use additional rules like doesFileExist and getDirectoryFiles to track information other than just the contents of files For information in the environment that you suspect will change regularly perhaps ghc version number either write the information to file with alwaysRerun and writeFileChanged or use addOracle GHC BUILD FLAGS For large build systems the choice of GHC flags can have significant impact We recommend ghc make MyBuildSystem rtsopts with-rtsopts I0 qg qb Compile without threaded In GHC and earlier bug http ghc.haskell.org trac ghc ticket can cause race condition in build systems that write files then read them Omitting threaded will still allow your cmd actions to run in parallel so most build systems will still run in parallel Compile with rtsopts Allow the setting of further GHC options at runtime Run with I0 Disable idle garbage collection In build system regularly running many system commands the program appears idle very often triggering regular unnecessary garbage collection stealing resources from the program doing actual work Run with qg qb Disable parallel garbage collection Parallel garbage collection in Shake programs typically goes slower than sequential garbage collection while occupying many cores that can be used for running system commands Acknowledgements Thanks to Austin Seipp for properly integrating the profiling code",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Shake",
          "package": "shake",
          "partial": "Shake",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monad, use \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e to raise \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions into it, and \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e to execute files.\n   Action values are used by \u003ccode\u003e\u003ca\u003erule\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monad tracks the dependencies of a \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Action",
          "package": "shake",
          "source": "src/Development-Shake-Core.html#Action",
          "type": "data"
        },
        "index": {
          "description": "The Action monad use liftIO to raise IO actions into it and need to execute files Action values are used by rule and action The Action monad tracks the dependencies of Rule",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Action",
          "package": "shake",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current assumptions made by the build system, used by \u003ccode\u003e\u003ca\u003eshakeAssume\u003c/a\u003e\u003c/code\u003e. These options\n   allow the end user to specify that any rules run are either to be treated as clean, or as\n   dirty, regardless of what the build system thinks.\n\u003c/p\u003e\u003cp\u003eThese assumptions only operate on files reached by the current \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e commands. Any\n   other files in the database are left unchanged.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Assume",
          "package": "shake",
          "source": "src/Development-Shake-Types.html#Assume",
          "type": "data"
        },
        "index": {
          "description": "The current assumptions made by the build system used by shakeAssume These options allow the end user to specify that any rules run are either to be treated as clean or as dirty regardless of what the build system thinks These assumptions only operate on files reached by the current action commands Any other files in the database are left unchanged",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Assume",
          "package": "shake",
          "partial": "Assume",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Assume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions passed to \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e to control how processes are executed.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "CmdOption",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#CmdOption",
          "type": "data"
        },
        "index": {
          "description": "Options passed to command or cmd to control how processes are executed",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "CmdOption",
          "package": "shake",
          "partial": "Cmd Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:CmdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for specifying what results you want to collect from a process.\n   Values are formed of \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e and tuples of those.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "CmdResult",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#CmdResult",
          "type": "class"
        },
        "index": {
          "description": "class for specifying what results you want to collect from process Values are formed of Stdout Stderr Exit and tuples of those",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "CmdResult",
          "package": "shake",
          "partial": "Cmd Result",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:CmdResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e of the process.\n   If you do not collect the exit code, any \u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e will cause an exception.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Exit",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#Exit",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the ExitCode of the process If you do not collect the exit code any ExitFailure will cause an exception",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Exit",
          "package": "shake",
          "partial": "Exit",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for file patterns, containing \u003ccode\u003e//\u003c/code\u003e and \u003ccode\u003e*\u003c/code\u003e. For the syntax\n   and semantics of \u003ccode\u003e\u003ca\u003eFilePattern\u003c/a\u003e\u003c/code\u003e see \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "FilePattern",
          "package": "shake",
          "source": "src/Development-Shake-FilePattern.html#FilePattern",
          "type": "type"
        },
        "index": {
          "description": "type synonym for file patterns containing and For the syntax and semantics of FilePattern see",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "FilePattern",
          "package": "shake",
          "partial": "File Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:FilePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich lint checks to perform, used by \u003ccode\u003e\u003ca\u003eshakeLint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Lint",
          "package": "shake",
          "source": "src/Development-Shake-Types.html#Lint",
          "type": "data"
        },
        "index": {
          "description": "Which lint checks to perform used by shakeLint",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Lint",
          "package": "shake",
          "partial": "Lint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Lint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the current state of the build, obtained by passing a callback function\n   to \u003ccode\u003e\u003ca\u003eshakeProgress\u003c/a\u003e\u003c/code\u003e. Typically a program will use \u003ccode\u003e\u003ca\u003eprogressDisplay\u003c/a\u003e\u003c/code\u003e to poll this value and produce\n   status messages, which is implemented using this data type.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Progress",
          "package": "shake",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "Information about the current state of the build obtained by passing callback function to shakeProgress Typically program will use progressDisplay to poll this value and produce status messages which is implemented using this data type",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Progress",
          "package": "shake",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing an external resource which the build system should respect. There\n   are two ways to create \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003es in Shake:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enewResource\u003c/a\u003e\u003c/code\u003e creates a finite resource, stopping too many actions running\n   simultaneously.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enewThrottle\u003c/a\u003e\u003c/code\u003e creates a throttled resource, stopping too many actions running\n   over a short time period.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese resources are used with \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e when defining rules. Typically only\n   system commands (such as \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e) should be run inside \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e,\n   not commands such as \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe careful that the actions run within \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e do not themselves require further\n   resources, or you may get a \"thread blocked indefinitely in an MVar operation\" exception.\n   If an action requires multiple resources, use \u003ccode\u003e\u003ca\u003ewithResources\u003c/a\u003e\u003c/code\u003e to avoid deadlock.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Resource",
          "package": "shake",
          "source": "src/Development-Shake-Resource.html#Resource",
          "type": "data"
        },
        "index": {
          "description": "type representing an external resource which the build system should respect There are two ways to create Resource in Shake newResource creates finite resource stopping too many actions running simultaneously newThrottle creates throttled resource stopping too many actions running over short time period These resources are used with withResource when defining rules Typically only system commands such as cmd should be run inside withResource not commands such as need Be careful that the actions run within withResource do not themselves require further resources or you may get thread blocked indefinitely in an MVar operation exception If an action requires multiple resources use withResources to avoid deadlock",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Resource",
          "package": "shake",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a set of rules. Rules can be created with calls to functions such as \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e. Rules are combined\n   with either the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance, or (more commonly) the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance and \u003ccode\u003edo\u003c/code\u003e notation. To define your own\n   custom types of rule, see \u003ca\u003eDevelopment.Shake.Rule\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Rules",
          "package": "shake",
          "source": "src/Development-Shake-Core.html#Rules",
          "type": "data"
        },
        "index": {
          "description": "Define set of rules Rules can be created with calls to functions such as or action Rules are combined with either the Monoid instance or more commonly the Monad instance and do notation To define your own custom types of rule see Development.Shake.Rule",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Rules",
          "package": "shake",
          "partial": "Rules",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError representing all expected exceptions thrown by Shake.\n   Problems when executing rules will be raising using this exception type.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "ShakeException",
          "package": "shake",
          "source": "src/Development-Shake-Errors.html#ShakeException",
          "type": "data"
        },
        "index": {
          "description": "Error representing all expected exceptions thrown by Shake Problems when executing rules will be raising using this exception type",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "ShakeException",
          "package": "shake",
          "partial": "Shake Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:ShakeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to control the execution of Shake, usually specified by overriding fields in\n   \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e{\u003ccode\u003e\u003ca\u003eshakeThreads\u003c/a\u003e\u003c/code\u003e=4, \u003ccode\u003e\u003ca\u003eshakeReport\u003c/a\u003e\u003c/code\u003e=Just \"report.html\"}\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance for this type reports the \u003ccode\u003e\u003ca\u003eshakeProgress\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshakeOutput\u003c/a\u003e\u003c/code\u003e fields as having the abstract type \u003ccode\u003eFunction\u003c/code\u003e,\n   because \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e cannot be defined for functions.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "ShakeOptions",
          "package": "shake",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "data"
        },
        "index": {
          "description": "Options to control the execution of Shake usually specified by overriding fields in shakeOptions shakeOptions shakeThreads shakeReport Just report.html The Data instance for this type reports the shakeProgress and shakeOutput fields as having the abstract type Function because Data cannot be defined for functions",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "ShakeOptions",
          "package": "shake",
          "partial": "Shake Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:ShakeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003estderr\u003c/code\u003e of the process.\n   If you are collecting the \u003ccode\u003estderr\u003c/code\u003e, it will not be echoed to the terminal, unless you include \u003ccode\u003e\u003ca\u003eEchoStderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Stderr",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#Stderr",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the stderr of the process If you are collecting the stderr it will not be echoed to the terminal unless you include EchoStderr",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Stderr",
          "package": "shake",
          "partial": "Stderr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003estdout\u003c/code\u003e of the process.\n   If you are collecting the \u003ccode\u003estdout\u003c/code\u003e, it will not be echoed to the terminal, unless you include \u003ccode\u003e\u003ca\u003eEchoStdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Stdout",
          "package": "shake",
          "source": "src/Development-Shake-Command.html#Stdout",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the stdout of the process If you are collecting the stdout it will not be echoed to the terminal unless you include EchoStdout",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Stdout",
          "package": "shake",
          "partial": "Stdout",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe verbosity data type, used by \u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Verbosity",
          "package": "shake",
          "source": "src/Development-Shake-Types.html#Verbosity",
          "type": "data"
        },
        "index": {
          "description": "The verbosity data type used by shakeVerbosity",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Verbosity",
          "package": "shake",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix operator alias for \u003ccode\u003e\u003ca\u003ephony\u003c/a\u003e\u003c/code\u003e, for sake of consistency with normal\n   rules.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "(~\u003e)",
          "package": "shake",
          "signature": "String -\u003e Action () -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-File.html#~%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix operator alias for phony for sake of consistency with normal rules",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "(~\u003e) ~\u003e",
          "normalized": "String-\u003eAction()-\u003eRules()",
          "package": "shake",
          "signature": "String-\u003eAction()-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a set of patterns, and if any of them match, run the associated rule. See \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "(**\u003e)",
          "package": "shake",
          "signature": "[FilePattern] -\u003e (FilePath -\u003e Action ()) -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-File.html#%2A%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Define set of patterns and if any of them match run the associated rule See",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "(**\u003e) **\u003e",
          "normalized": "[FilePattern]-\u003e(FilePath-\u003eAction())-\u003eRules()",
          "package": "shake",
          "signature": "[FilePattern]-\u003e(FilePath-\u003eAction())-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:-42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a rule that matches a \u003ccode\u003e\u003ca\u003eFilePattern\u003c/a\u003e\u003c/code\u003e. No file required by the system must be\n   matched by more than one pattern. For the pattern rules, see \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e.\n   This function will create the directory for the result file, if necessary.\n\u003c/p\u003e\u003cpre\u003e\n \"*.asm.o\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n     let src = \u003ccode\u003e\u003ca\u003edropExtension\u003c/a\u003e\u003c/code\u003e out\n     \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e [src]\n     \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"as\" [src] \"-o\" [out]\n\u003c/pre\u003e\u003cp\u003eTo define a build system for multiple compiled languages, we recommend using \u003ccode\u003e.asm.o\u003c/code\u003e,\n   \u003ccode\u003e.cpp.o\u003c/code\u003e, \u003ccode\u003e.hs.o\u003c/code\u003e, to indicate which language produces an object file.\n   I.e., the file \u003ccode\u003efoo.cpp\u003c/code\u003e produces object file \u003ccode\u003efoo.cpp.o\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that matching is case-sensitive, even on Windows.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "(*\u003e)",
          "package": "shake",
          "signature": "FilePattern -\u003e (FilePath -\u003e Action ()) -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-File.html#%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Define rule that matches FilePattern No file required by the system must be matched by more than one pattern For the pattern rules see This function will create the directory for the result file if necessary asm.o out do let src dropExtension out need src cmd as src out To define build system for multiple compiled languages we recommend using asm.o cpp.o hs.o to indicate which language produces an object file I.e the file foo.cpp produces object file foo.cpp.o Note that matching is case-sensitive even on Windows",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "(*\u003e) *\u003e",
          "normalized": "FilePattern-\u003e(FilePath-\u003eAction())-\u003eRules()",
          "package": "shake",
          "signature": "FilePattern-\u003e(FilePath-\u003eAction())-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a rule for building multiple files at the same time.\n   As an example, a single invokation of GHC produces both \u003ccode\u003e.hi\u003c/code\u003e and \u003ccode\u003e.o\u003c/code\u003e files:\n\u003c/p\u003e\u003cpre\u003e\n [\"*.o\",\"*.hi\"] \u003ccode\u003e\u003ca\u003e*\u003e\u003e\u003c/a\u003e\u003c/code\u003e \\[o,hi] -\u003e do\n     let hs = o \u003ccode\u003e\u003ca\u003e-\u003c.\u003e\u003c/a\u003e\u003c/code\u003e \"hs\"\n     \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e ... -- all files the .hs import\n     \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"ghc -c\" [hs]\n\u003c/pre\u003e\u003cp\u003eHowever, in practice, it's usually easier to define rules with \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e and make the \u003ccode\u003e.hi\u003c/code\u003e depend\n   on the \u003ccode\u003e.o\u003c/code\u003e. When defining rules that build multiple files, all the \u003ccode\u003e\u003ca\u003eFilePattern\u003c/a\u003e\u003c/code\u003e values must\n   have the same sequence of \u003ccode\u003e//\u003c/code\u003e and \u003ccode\u003e*\u003c/code\u003e wildcards in the same order.\n   This function will create directories for the result files, if necessary.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "(*\u003e\u003e)",
          "package": "shake",
          "signature": "[FilePattern] -\u003e ([FilePath] -\u003e Action ()) -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-Files.html#%2A%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Define rule for building multiple files at the same time As an example single invokation of GHC produces both hi and files hi hi do let hs hs need all files the hs import cmd ghc hs However in practice it usually easier to define rules with and make the hi depend on the When defining rules that build multiple files all the FilePattern values must have the same sequence of and wildcards in the same order This function will create directories for the result files if necessary",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "(*\u003e\u003e) *\u003e\u003e",
          "normalized": "[FilePattern]-\u003e([FilePath]-\u003eAction())-\u003eRules()",
          "package": "shake",
          "signature": "[FilePattern]-\u003e([FilePath]-\u003eAction())-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:-42--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a \u003ccode\u003e\u003ca\u003eFilePattern\u003c/a\u003e\u003c/code\u003e against a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, There are only two special forms:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e*\u003c/code\u003e matches an entire path component, excluding any separators.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e//\u003c/code\u003e matches an arbitrary number of path components.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSome examples that match:\n\u003c/p\u003e\u003cpre\u003e\n \"//*.c\" \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e \"foo/bar/baz.c\"\n \"*.c\" \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e \"baz.c\"\n \"//*.c\" \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e \"baz.c\"\n \"test.c\" \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e \"test.c\"\n\u003c/pre\u003e\u003cp\u003eExamples that \u003cem\u003edon't\u003c/em\u003e match:\n\u003c/p\u003e\u003cpre\u003e\n \"*.c\" \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e \"foo/bar.c\"\n \"*/*.c\" \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e \"foo/bar/baz.c\"\n\u003c/pre\u003e\u003cp\u003eAn example that only matches on Windows:\n\u003c/p\u003e\u003cpre\u003e\n \"foo/bar\" \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e \"foo\\\\bar\"\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "(?==)",
          "package": "shake",
          "signature": "FilePattern -\u003e FilePath -\u003e Bool",
          "source": "src/Development-Shake-FilePattern.html#%3F%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Match FilePattern against FilePath There are only two special forms matches an entire path component excluding any separators matches an arbitrary number of path components Some examples that match foo bar baz.c baz.c baz.c test.c test.c Examples that don match foo bar.c foo bar baz.c An example that only matches on Windows foo bar foo bar",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "(?==) ?==",
          "normalized": "FilePattern-\u003eFilePath-\u003eBool",
          "package": "shake",
          "signature": "FilePattern-\u003eFilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:-63--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a rule to build files. If the first argument returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for a given file,\n   the second argument will be used to build it. Usually \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e is sufficient, but \u003ccode\u003e\u003ca\u003e?\u003e\u003c/a\u003e\u003c/code\u003e gives\n   additional power. For any file used by the build system, only one rule should return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n   This function will create the directory for the result file, if necessary.\n\u003c/p\u003e\u003cpre\u003e\n (all isUpper . \u003ccode\u003e\u003ca\u003etakeBaseName\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e?\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n     let src = \u003ccode\u003e\u003ca\u003ereplaceBaseName\u003c/a\u003e\u003c/code\u003e out $ map toLower $ takeBaseName out\n     \u003ccode\u003e\u003ca\u003ewriteFile'\u003c/a\u003e\u003c/code\u003e out . map toUpper =\u003c\u003c \u003ccode\u003e\u003ca\u003ereadFile'\u003c/a\u003e\u003c/code\u003e src\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "(?\u003e)",
          "package": "shake",
          "signature": "(FilePath -\u003e Bool) -\u003e (FilePath -\u003e Action ()) -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-File.html#%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Define rule to build files If the first argument returns True for given file the second argument will be used to build it Usually is sufficient but gives additional power For any file used by the build system only one rule should return True This function will create the directory for the result file if necessary all isUpper takeBaseName out do let src replaceBaseName out map toLower takeBaseName out writeFile out map toUpper readFile src",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "(?\u003e) ?\u003e",
          "normalized": "(FilePath-\u003eBool)-\u003e(FilePath-\u003eAction())-\u003eRules()",
          "package": "shake",
          "signature": "(FilePath-\u003eBool)-\u003e(FilePath-\u003eAction())-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:-63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a rule for building multiple files at the same time, a more powerful\n   and more dangerous version of \u003ccode\u003e\u003ca\u003e*\u003e\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGiven an application \u003ccode\u003etest ?\u003e\u003e ...\u003c/code\u003e, \u003ccode\u003etest\u003c/code\u003e should return \u003ccode\u003eJust\u003c/code\u003e if the rule applies, and should\n   return the list of files that will be produced. This list \u003cem\u003emust\u003c/em\u003e include the file passed as an argument and should\n   obey the invariant:\n\u003c/p\u003e\u003cpre\u003e forAll $ \\x ys -\u003e test x == Just ys ==\u003e x `elem` ys && all ((== Just ys) . test) ys\n\u003c/pre\u003e\u003cp\u003eAs an example of a function satisfying the invariaint:\n\u003c/p\u003e\u003cpre\u003e\ntest x | \u003ccode\u003e\u003ca\u003etakeExtension\u003c/a\u003e\u003c/code\u003e x `elem` [\".hi\",\".o\"]\n        = Just [\u003ccode\u003e\u003ca\u003edropExtension\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e \"hi\", \u003ccode\u003e\u003ca\u003edropExtension\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e \"o\"]\ntest _ = Nothing\n\u003c/pre\u003e\u003cp\u003eRegardless of whether \u003ccode\u003eFoo.hi\u003c/code\u003e or \u003ccode\u003eFoo.o\u003c/code\u003e is passed, the function always returns \u003ccode\u003e[Foo.hi, Foo.o]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "(?\u003e\u003e)",
          "package": "shake",
          "signature": "(FilePath -\u003e Maybe [FilePath]) -\u003e ([FilePath] -\u003e Action ()) -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-Files.html#%3F%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Define rule for building multiple files at the same time more powerful and more dangerous version of Given an application test test should return Just if the rule applies and should return the list of files that will be produced This list must include the file passed as an argument and should obey the invariant forAll ys test Just ys elem ys all Just ys test ys As an example of function satisfying the invariaint test takeExtension elem hi Just dropExtension hi dropExtension test Nothing Regardless of whether Foo.hi or Foo.o is passed the function always returns Foo.hi Foo.o",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "(?\u003e\u003e) ?\u003e\u003e",
          "normalized": "(FilePath-\u003eMaybe[FilePath])-\u003e([FilePath]-\u003eAction())-\u003eRules()",
          "package": "shake",
          "signature": "(FilePath-\u003eMaybe[FilePath])-\u003e([FilePath]-\u003eAction())-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:-63--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eThis assumption is unsafe, and may lead to incorrect build results in this run, and in future runs\u003c/em\u003e.\n   Assume and record that all rules reached are clean and do not require rebuilding, provided the rule\n   has a \u003ccode\u003e\u003ca\u003estoredValue\u003c/a\u003e\u003c/code\u003e and has been built before. Useful if you have modified a file in some\n   inconsequential way, such as only the comments or whitespace, and wish to avoid a rebuild.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "AssumeClean",
          "package": "shake",
          "signature": "AssumeClean",
          "source": "src/Development-Shake-Types.html#Assume",
          "type": "function"
        },
        "index": {
          "description": "This assumption is unsafe and may lead to incorrect build results in this run and in future runs Assume and record that all rules reached are clean and do not require rebuilding provided the rule has storedValue and has been built before Useful if you have modified file in some inconsequential way such as only the comments or whitespace and wish to avoid rebuild",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "AssumeClean",
          "package": "shake",
          "partial": "Assume Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:AssumeClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssume that all rules reached are dirty and require rebuilding, equivalent to \u003ccode\u003e\u003ca\u003estoredValue\u003c/a\u003e\u003c/code\u003e always\n   returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Useful to undo the results of \u003ccode\u003e\u003ca\u003eAssumeClean\u003c/a\u003e\u003c/code\u003e, for benchmarking rebuild speed and\n   for rebuilding if untracked dependencies have changed. This assumption is safe, but may cause\n   more rebuilding than necessary.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "AssumeDirty",
          "package": "shake",
          "signature": "AssumeDirty",
          "source": "src/Development-Shake-Types.html#Assume",
          "type": "function"
        },
        "index": {
          "description": "Assume that all rules reached are dirty and require rebuilding equivalent to storedValue always returning Nothing Useful to undo the results of AssumeClean for benchmarking rebuild speed and for rebuilding if untracked dependencies have changed This assumption is safe but may cause more rebuilding than necessary",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "AssumeDirty",
          "package": "shake",
          "partial": "Assume Dirty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:AssumeDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eThis assumption is unsafe, and may lead to incorrect build results in this run\u003c/em\u003e.\n   Assume that all rules reached are clean in this run. Only useful for benchmarking, to remove any overhead\n   from running \u003ccode\u003e\u003ca\u003estoredValue\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "AssumeSkip",
          "package": "shake",
          "signature": "AssumeSkip",
          "source": "src/Development-Shake-Types.html#Assume",
          "type": "function"
        },
        "index": {
          "description": "This assumption is unsafe and may lead to incorrect build results in this run Assume that all rules reached are clean in this run Only useful for benchmarking to remove any overhead from running storedValue operations",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "AssumeSkip",
          "package": "shake",
          "partial": "Assume Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:AssumeSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint errors, full command line and status messages when starting a rule.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Chatty",
          "package": "shake",
          "signature": "Chatty",
          "source": "src/Development-Shake-Types.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Print errors full command line and status messages when starting rule",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Chatty",
          "package": "shake",
          "partial": "Chatty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Chatty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint messages for virtually everything (mostly for debugging).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Diagnostic",
          "package": "shake",
          "signature": "Diagnostic",
          "source": "src/Development-Shake-Types.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Print messages for virtually everything mostly for debugging",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Diagnostic",
          "package": "shake",
          "partial": "Diagnostic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Diagnostic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most basic form of linting. Checks that the current directory does not change and that results do not change after they\n   are first written. Any calls to \u003ccode\u003eneeded\u003c/code\u003e will assert that they do not cause a rule to be rebuilt.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "LintBasic",
          "package": "shake",
          "signature": "LintBasic",
          "source": "src/Development-Shake-Types.html#Lint",
          "type": "function"
        },
        "index": {
          "description": "The most basic form of linting Checks that the current directory does not change and that results do not change after they are first written Any calls to needed will assert that they do not cause rule to be rebuilt",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "LintBasic",
          "package": "shake",
          "partial": "Lint Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:LintBasic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack which files are accessed by command line programs run by \u003ccode\u003ecommand\u003c/code\u003e or \u003ccode\u003ecmd\u003c/code\u003e, using \u003ccode\u003etracker.exe\u003c/code\u003e as supplied\n   with the Microsoft .NET 4.5 SDK (Windows only). Also performs all checks from \u003ccode\u003e\u003ca\u003eLintBasic\u003c/a\u003e\u003c/code\u003e. Note that some programs are not\n   tracked properly, particularly cygwin programs (it seems).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "LintTracker",
          "package": "shake",
          "signature": "LintTracker",
          "source": "src/Development-Shake-Types.html#Lint",
          "type": "function"
        },
        "index": {
          "description": "Track which files are accessed by command line programs run by command or cmd using tracker.exe as supplied with the Microsoft NET SDK Windows only Also performs all checks from LintBasic Note that some programs are not tracked properly particularly cygwin programs it seems",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "LintTracker",
          "package": "shake",
          "partial": "Lint Tracker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:LintTracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint errors and full command lines when running a \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Loud",
          "package": "shake",
          "signature": "Loud",
          "source": "src/Development-Shake-Types.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Print errors and full command lines when running command or cmd command",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Loud",
          "package": "shake",
          "partial": "Loud",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Loud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint errors and \u003ccode\u003e# \u003cem\u003ecommand-name\u003c/em\u003e \u003cem\u003efile-name\u003c/em\u003e\u003c/code\u003e when running a \u003ccode\u003e\u003ca\u003etraced\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Normal",
          "package": "shake",
          "signature": "Normal",
          "source": "src/Development-Shake-Types.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Print errors and command-name file-name when running traced command",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Normal",
          "package": "shake",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Shake",
          "name": "Progress",
          "package": "shake",
          "signature": "Progress",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Progress",
          "package": "shake",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly print essential messages, typically errors.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Quiet",
          "package": "shake",
          "signature": "Quiet",
          "source": "src/Development-Shake-Types.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Only print essential messages typically errors",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Quiet",
          "package": "shake",
          "partial": "Quiet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Quiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Shake",
          "name": "ShakeException",
          "package": "shake",
          "signature": "ShakeException",
          "source": "src/Development-Shake-Errors.html#ShakeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "ShakeException",
          "package": "shake",
          "partial": "Shake Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:ShakeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Shake",
          "name": "ShakeOptions",
          "package": "shake",
          "signature": "ShakeOptions",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "ShakeOptions",
          "package": "shake",
          "partial": "Shake Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:ShakeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't print any messages.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "Silent",
          "package": "shake",
          "signature": "Silent",
          "source": "src/Development-Shake-Types.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Don print any messages",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "Silent",
          "package": "shake",
          "partial": "Silent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:Silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action, usually used for specifying top-level requirements.\n\u003c/p\u003e\u003cpre\u003e\n main = \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e $ do\n    \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e $ do\n        b \u003c- \u003ccode\u003e\u003ca\u003edoesFileExist\u003c/a\u003e\u003c/code\u003e \"file.src\"\n        when b $ \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e [\"file.out\"]\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e builds \u003ccode\u003efile.out\u003c/code\u003e, but only if \u003ccode\u003efile.src\u003c/code\u003e exists. The \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e\n   will be run in every build execution (unless \u003ccode\u003e\u003ca\u003ewithoutActions\u003c/a\u003e\u003c/code\u003e is used), so only cheap\n   operations should be performed. All arguments to \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e may be run in parallel, in any order.\n\u003c/p\u003e\u003cp\u003eFor the standard requirement of only \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003eing a fixed list of files in the \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e,\n   see \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "action",
          "package": "shake",
          "signature": "Action a -\u003e Rules ()",
          "source": "src/Development-Shake-Core.html#action",
          "type": "function"
        },
        "index": {
          "description": "Run an action usually used for specifying top-level requirements main shake shakeOptions do action do doesFileExist file.src when need file.out This action builds file.out but only if file.src exists The action will be run in every build execution unless withoutActions is used so only cheap operations should be performed All arguments to action may be run in parallel in any order For the standard requirement of only need ing fixed list of files in the action see want",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "action",
          "normalized": "Action a-\u003eRules()",
          "package": "shake",
          "signature": "Action a-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e, perform some \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, even if there is an exception.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "actionFinally",
          "package": "shake",
          "signature": "Action a -\u003e IO b -\u003e Action a",
          "source": "src/Development-Shake-Core.html#actionFinally",
          "type": "function"
        },
        "index": {
          "description": "After an Action perform some IO even if there is an exception",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "actionFinally",
          "normalized": "Action a-\u003eIO b-\u003eAction a",
          "package": "shake",
          "partial": "Finally",
          "signature": "Action a-\u003eIO b-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:actionFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an exception is raised by the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e, perform some \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "actionOnException",
          "package": "shake",
          "signature": "Action a -\u003e IO b -\u003e Action a",
          "source": "src/Development-Shake-Core.html#actionOnException",
          "type": "function"
        },
        "index": {
          "description": "If an exception is raised by the Action perform some IO",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "actionOnException",
          "normalized": "Action a-\u003eIO b-\u003eAction a",
          "package": "shake",
          "partial": "On Exception",
          "signature": "Action a-\u003eIO b-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:actionOnException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd extra information which rules can depend on.\n   An oracle is a function from a question type \u003ccode\u003eq\u003c/code\u003e, to an answer type \u003ccode\u003ea\u003c/code\u003e.\n   As an example, we can define an oracle allowing you to depend on the current version of GHC:\n\u003c/p\u003e\u003cpre\u003e\n newtype GhcVersion = GhcVersion () deriving (Show,Typeable,Eq,Hashable,Binary,NFData)\n rules = do\n     \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e $ \\(GhcVersion _) -\u003e fmap \u003ccode\u003e\u003ca\u003efromStdout\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"ghc --numeric-version\"\n     ... rules ...\n\u003c/pre\u003e\u003cp\u003eIf a rule calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003easkOracle\u003c/a\u003e\u003c/code\u003e (GhcVersion ())\u003c/code\u003e, that rule will be rerun whenever the GHC version changes.\n   Some notes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e We define \u003ccode\u003eGhcVersion\u003c/code\u003e with a \u003ccode\u003enewtype\u003c/code\u003e around \u003ccode\u003e()\u003c/code\u003e, allowing the use of \u003ccode\u003eGeneralizedNewtypeDeriving\u003c/code\u003e.\n   All the necessary type classes are exported from \u003ca\u003eDevelopment.Shake.Classes\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Each call to \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e must use a different type of question.\n\u003c/li\u003e\u003cli\u003e Actions passed to \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e will be run in every build they are required,\n   but if their value does not change they will not invalidate any rules depending on them.\n   To get a similar behaviour using data stored in files, see \u003ccode\u003e\u003ca\u003ealwaysRerun\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If the value returned by \u003ccode\u003e\u003ca\u003easkOracle\u003c/a\u003e\u003c/code\u003e is ignored then \u003ccode\u003e\u003ca\u003easkOracleWith\u003c/a\u003e\u003c/code\u003e may help avoid ambiguous type messages.\n   Alternatively, use the result of \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e, which is \u003ccode\u003e\u003ca\u003easkOracle\u003c/a\u003e\u003c/code\u003e restricted to the correct type.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs a more complex example, consider tracking Haskell package versions:\n\u003c/p\u003e\u003cpre\u003e\nnewtype GhcPkgList = GhcPkgList () deriving (Show,Typeable,Eq,Hashable,Binary,NFData)\nnewtype GhcPkgVersion = GhcPkgVersion String deriving (Show,Typeable,Eq,Hashable,Binary,NFData)\n\nrules = do\n    getPkgList \u003c- \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e $ \\GhcPkgList{} -\u003e do\n        Stdout out \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"ghc-pkg list --simple-output\"\n        return [(reverse b, reverse a) | x \u003c- words out, let (a,_:b) = break (== '-') $ reverse x]\n    --\n    getPkgVersion \u003c- \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e $ \\(GhcPkgVersion pkg) -\u003e do\n        pkgs \u003c- getPkgList $ GhcPkgList ()\n        return $ lookup pkg pkgs\n    --\n    \"myrule\" *\u003e \\_ -\u003e do\n        getPkgVersion $ GhcPkgVersion \"shake\"\n        ... rule using the shake version ...\n\u003c/pre\u003e\u003cp\u003eUsing these definitions, any rule depending on the version of \u003ccode\u003eshake\u003c/code\u003e\n   should call \u003ccode\u003egetPkgVersion $ GhcPkgVersion \"shake\"\u003c/code\u003e to rebuild when \u003ccode\u003eshake\u003c/code\u003e is upgraded.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "addOracle",
          "package": "shake",
          "signature": "(q -\u003e Action a) -\u003e Rules (q -\u003e Action a)",
          "source": "src/Development-Shake-Rules-Oracle.html#addOracle",
          "type": "function"
        },
        "index": {
          "description": "Add extra information which rules can depend on An oracle is function from question type to an answer type As an example we can define an oracle allowing you to depend on the current version of GHC newtype GhcVersion GhcVersion deriving Show Typeable Eq Hashable Binary NFData rules do addOracle GhcVersion fmap fromStdout cmd ghc numeric-version rules If rule calls askOracle GhcVersion that rule will be rerun whenever the GHC version changes Some notes We define GhcVersion with newtype around allowing the use of GeneralizedNewtypeDeriving All the necessary type classes are exported from Development.Shake.Classes Each call to addOracle must use different type of question Actions passed to addOracle will be run in every build they are required but if their value does not change they will not invalidate any rules depending on them To get similar behaviour using data stored in files see alwaysRerun If the value returned by askOracle is ignored then askOracleWith may help avoid ambiguous type messages Alternatively use the result of addOracle which is askOracle restricted to the correct type As more complex example consider tracking Haskell package versions newtype GhcPkgList GhcPkgList deriving Show Typeable Eq Hashable Binary NFData newtype GhcPkgVersion GhcPkgVersion String deriving Show Typeable Eq Hashable Binary NFData rules do getPkgList addOracle GhcPkgList do Stdout out cmd ghc-pkg list simple-output return reverse reverse words out let break reverse getPkgVersion addOracle GhcPkgVersion pkg do pkgs getPkgList GhcPkgList return lookup pkg pkgs myrule do getPkgVersion GhcPkgVersion shake rule using the shake version Using these definitions any rule depending on the version of shake should call getPkgVersion GhcPkgVersion shake to rebuild when shake is upgraded",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "addOracle",
          "normalized": "(a-\u003eAction b)-\u003eRules(a-\u003eAction b)",
          "package": "shake",
          "partial": "Oracle",
          "signature": "(q-\u003eAction a)-\u003eRules(q-\u003eAction a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:addOracle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the matching behaviour of rules so rules do not have to be disjoint, but are instead matched\n   in order. Only recommended for small blocks containing a handful of rules.\n\u003c/p\u003e\u003cpre\u003e\n alternatives $ do\n     \"hello.txt\" *\u003e \\out -\u003e writeFile' out \"special\"\n     \"*.txt\" *\u003e \\out -\u003e writeFile' out \"normal\"\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "alternatives",
          "package": "shake",
          "signature": "Rules () -\u003e Rules ()",
          "source": "src/Development-Shake-Core.html#alternatives",
          "type": "function"
        },
        "index": {
          "description": "Change the matching behaviour of rules so rules do not have to be disjoint but are instead matched in order Only recommended for small blocks containing handful of rules alternatives do hello.txt out writeFile out special txt out writeFile out normal",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "alternatives",
          "normalized": "Rules()-\u003eRules()",
          "package": "shake",
          "signature": "Rules()-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:alternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways rerun the associated action. Useful for defining rules that query\n   the environment. For example:\n\u003c/p\u003e\u003cpre\u003e\n \"ghcVersion.txt\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n     \u003ccode\u003e\u003ca\u003ealwaysRerun\u003c/a\u003e\u003c/code\u003e\n     \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e stdout \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"ghc --numeric-version\"\n     \u003ccode\u003e\u003ca\u003ewriteFileChanged\u003c/a\u003e\u003c/code\u003e out stdout\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "alwaysRerun",
          "package": "shake",
          "signature": "Action ()",
          "source": "src/Development-Shake-Rules-Rerun.html#alwaysRerun",
          "type": "function"
        },
        "index": {
          "description": "Always rerun the associated action Useful for defining rules that query the environment For example ghcVersion.txt out do alwaysRerun Stdout stdout cmd ghc numeric-version writeFileChanged out stdout",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "alwaysRerun",
          "normalized": "Action()",
          "package": "shake",
          "partial": "Rerun",
          "signature": "Action()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:alwaysRerun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information previously added with \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e. The question/answer types must match those provided\n   to \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "askOracle",
          "package": "shake",
          "signature": "q -\u003e Action a",
          "source": "src/Development-Shake-Rules-Oracle.html#askOracle",
          "type": "function"
        },
        "index": {
          "description": "Get information previously added with addOracle The question answer types must match those provided to addOracle",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "askOracle",
          "normalized": "a-\u003eAction b",
          "package": "shake",
          "partial": "Oracle",
          "signature": "q-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:askOracle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information previously added with \u003ccode\u003e\u003ca\u003eaddOracle\u003c/a\u003e\u003c/code\u003e. The second argument is not used, but can\n   be useful to fix the answer type, avoiding ambiguous type error messages.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "askOracleWith",
          "package": "shake",
          "signature": "q -\u003e a -\u003e Action a",
          "source": "src/Development-Shake-Rules-Oracle.html#askOracleWith",
          "type": "function"
        },
        "index": {
          "description": "Get information previously added with addOracle The second argument is not used but can be useful to fix the answer type avoiding ambiguous type error messages",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "askOracleWith",
          "normalized": "a-\u003eb-\u003eAction b",
          "package": "shake",
          "partial": "Oracle With",
          "signature": "q-\u003ea-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:askOracleWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyFile' old new\u003c/code\u003e copies the existing file from \u003ccode\u003eold\u003c/code\u003e to \u003ccode\u003enew\u003c/code\u003e.\n   The \u003ccode\u003eold\u003c/code\u003e file will be tracked as a dependency.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "copyFile'",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath -\u003e Action ()",
          "source": "src/Development-Shake-Derived.html#copyFile%27",
          "type": "function"
        },
        "index": {
          "description": "copyFile old new copies the existing file from old to new The old file will be tracked as dependency",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "copyFile'",
          "normalized": "FilePath-\u003eFilePath-\u003eAction()",
          "package": "shake",
          "partial": "File'",
          "signature": "FilePath-\u003eFilePath-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:copyFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of rules which were have been built in this run.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "countBuilt",
          "package": "shake",
          "signature": "Int",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Number of rules which were have been built in this run",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "countBuilt",
          "package": "shake",
          "partial": "Built",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:countBuilt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of rules which were required, but were already in a valid state.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "countSkipped",
          "package": "shake",
          "signature": "Int",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Number of rules which were required but were already in valid state",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "countSkipped",
          "package": "shake",
          "partial": "Skipped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:countSkipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of rules which are currently required (ignoring dependencies that do not change), but not built.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "countTodo",
          "package": "shake",
          "signature": "Int",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Number of rules which are currently required ignoring dependencies that do not change but not built",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "countTodo",
          "package": "shake",
          "partial": "Todo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:countTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of rules which have been built previously, but are not yet known to be required.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "countUnknown",
          "package": "shake",
          "signature": "Int",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Number of rules which have been built previously but are not yet known to be required",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "countUnknown",
          "package": "shake",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:countUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the directory exists. The existence of the directory is tracked as a\n   dependency, and if the directory is created or delete the rule will rerun in subsequent builds.\n\u003c/p\u003e\u003cp\u003eYou should not call \u003ccode\u003e\u003ca\u003edoesDirectoryExist\u003c/a\u003e\u003c/code\u003e on directories which can be created by the build system.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "doesDirectoryExist",
          "package": "shake",
          "signature": "FilePath -\u003e Action Bool",
          "source": "src/Development-Shake-Rules-Directory.html#doesDirectoryExist",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the directory exists The existence of the directory is tracked as dependency and if the directory is created or delete the rule will rerun in subsequent builds You should not call doesDirectoryExist on directories which can be created by the build system",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "doesDirectoryExist",
          "normalized": "FilePath-\u003eAction Bool",
          "package": "shake",
          "partial": "Directory Exist",
          "signature": "FilePath-\u003eAction Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:doesDirectoryExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file exists. The existence of the file is tracked as a\n   dependency, and if the file is created or deleted the rule will rerun in subsequent builds.\n\u003c/p\u003e\u003cp\u003eYou should not call \u003ccode\u003e\u003ca\u003edoesFileExist\u003c/a\u003e\u003c/code\u003e on files which can be created by the build system.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "doesFileExist",
          "package": "shake",
          "signature": "FilePath -\u003e Action Bool",
          "source": "src/Development-Shake-Rules-Directory.html#doesFileExist",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the file exists The existence of the file is tracked as dependency and if the file is created or deleted the rule will rerun in subsequent builds You should not call doesFileExist on files which can be created by the build system",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "doesFileExist",
          "normalized": "FilePath-\u003eAction Bool",
          "package": "shake",
          "partial": "File Exist",
          "signature": "FilePath-\u003eAction Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:doesFileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the contents of a directory. The result will be sorted, and will not contain\n   the entries \u003ccode\u003e.\u003c/code\u003e or \u003ccode\u003e..\u003c/code\u003e (unlike the standard Haskell version). The resulting paths will be relative\n   to the first argument. The result is tracked as a\n   dependency, and if it changes the rule will rerun in subsequent builds.\n\u003c/p\u003e\u003cp\u003eIt is usually simpler to call either \u003ccode\u003e\u003ca\u003egetDirectoryFiles\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetDirectoryDirs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "getDirectoryContents",
          "package": "shake",
          "signature": "FilePath -\u003e Action [FilePath]",
          "source": "src/Development-Shake-Rules-Directory.html#getDirectoryContents",
          "type": "function"
        },
        "index": {
          "description": "Get the contents of directory The result will be sorted and will not contain the entries or unlike the standard Haskell version The resulting paths will be relative to the first argument The result is tracked as dependency and if it changes the rule will rerun in subsequent builds It is usually simpler to call either getDirectoryFiles or getDirectoryDirs",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "getDirectoryContents",
          "normalized": "FilePath-\u003eAction[FilePath]",
          "package": "shake",
          "partial": "Directory Contents",
          "signature": "FilePath-\u003eAction[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:getDirectoryContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directories in a directory, not including \u003ccode\u003e.\u003c/code\u003e or \u003ccode\u003e..\u003c/code\u003e.\n   All directories are relative to the argument directory. The result is tracked as a\n   dependency, and if it changes the rule will rerun in subsequent builds.\n\u003c/p\u003e\u003cpre\u003e getDirectoryDirs \"/Users\"\n    -- Return all directories in the /Users directory\n    -- e.g. [\"Emily\",\"Henry\",\"Neil\"]\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "getDirectoryDirs",
          "package": "shake",
          "signature": "FilePath -\u003e Action [FilePath]",
          "source": "src/Development-Shake-Rules-Directory.html#getDirectoryDirs",
          "type": "function"
        },
        "index": {
          "description": "Get the directories in directory not including or All directories are relative to the argument directory The result is tracked as dependency and if it changes the rule will rerun in subsequent builds getDirectoryDirs Users Return all directories in the Users directory e.g Emily Henry Neil",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "getDirectoryDirs",
          "normalized": "FilePath-\u003eAction[FilePath]",
          "package": "shake",
          "partial": "Directory Dirs",
          "signature": "FilePath-\u003eAction[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:getDirectoryDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the files anywhere under a directory that match any of a set of patterns.\n   For the interpretation of the patterns see \u003ccode\u003e\u003ca\u003e?==\u003c/a\u003e\u003c/code\u003e. All results will be\n   relative to the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e argument. The result is tracked as a\n   dependency, and if it changes the rule will rerun in subsequent builds.\n   Some examples:\n\u003c/p\u003e\u003cpre\u003e getDirectoryFiles \"Config\" [\"//*.xml\"]\n     -- All .xml files anywhere under the Config directory\n     -- If Config/foo/bar.xml exists it will return [\"foo/bar.xml\"]\n getDirectoryFiles \"Modules\" [\"*.hs\",\"*.lhs\"]\n     -- All .hs or .lhs in the Modules directory\n     -- If Modules/foo.hs and Modules/foo.lhs exist, it will return [\"foo.hs\",\"foo.lhs\"]\n\u003c/pre\u003e\u003cp\u003eIf you require a qualified file name it is often easier to use \u003ccode\u003e\"\"\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e argument,\n   for example the following two expressions are equivalent:\n\u003c/p\u003e\u003cpre\u003e fmap (map (\"Config\" \u003c/\u003e)) (getDirectoryFiles \"Config\" [\"//*.xml\"])\n getDirectoryFiles \"\" [\"Config//*.xml\"]\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "getDirectoryFiles",
          "package": "shake",
          "signature": "FilePath -\u003e [FilePattern] -\u003e Action [FilePath]",
          "source": "src/Development-Shake-Rules-Directory.html#getDirectoryFiles",
          "type": "function"
        },
        "index": {
          "description": "Get the files anywhere under directory that match any of set of patterns For the interpretation of the patterns see All results will be relative to the FilePath argument The result is tracked as dependency and if it changes the rule will rerun in subsequent builds Some examples getDirectoryFiles Config xml All xml files anywhere under the Config directory If Config foo bar.xml exists it will return foo bar.xml getDirectoryFiles Modules hs lhs All hs or lhs in the Modules directory If Modules foo.hs and Modules foo.lhs exist it will return foo.hs foo.lhs If you require qualified file name it is often easier to use as FilePath argument for example the following two expressions are equivalent fmap map Config getDirectoryFiles Config xml getDirectoryFiles Config xml",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "getDirectoryFiles",
          "normalized": "FilePath-\u003e[FilePattern]-\u003eAction[FilePath]",
          "package": "shake",
          "partial": "Directory Files",
          "signature": "FilePath-\u003e[FilePattern]-\u003eAction[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:getDirectoryFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value of the environment variable, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n   if the variable is not set. The environment variable is tracked as a\n   dependency, and if it changes the rule will rerun in subsequent builds.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "getEnv",
          "package": "shake",
          "signature": "String -\u003e Action (Maybe String)",
          "source": "src/Development-Shake-Rules-Directory.html#getEnv",
          "type": "function"
        },
        "index": {
          "description": "Return Just the value of the environment variable or Nothing if the variable is not set The environment variable is tracked as dependency and if it changes the rule will rerun in subsequent builds",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "getEnv",
          "normalized": "String-\u003eAction(Maybe String)",
          "package": "shake",
          "partial": "Env",
          "signature": "String-\u003eAction(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the initial \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e, these will not change during the build process.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "getShakeOptions",
          "package": "shake",
          "signature": "Action ShakeOptions",
          "source": "src/Development-Shake-Core.html#getShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Get the initial ShakeOptions these will not change during the build process",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "getShakeOptions",
          "package": "shake",
          "partial": "Shake Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:getShakeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current verbosity level, originally set by \u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e. If you\n   want to output information to the console, you are recommended to use\n   \u003ccode\u003e\u003ca\u003eputLoud\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eputNormal\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eputQuiet\u003c/a\u003e\u003c/code\u003e, which ensures multiple messages are\n   not interleaved. The verbosity can be modified locally by \u003ccode\u003e\u003ca\u003ewithVerbosity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "getVerbosity",
          "package": "shake",
          "signature": "Action Verbosity",
          "source": "src/Development-Shake-Core.html#getVerbosity",
          "type": "function"
        },
        "index": {
          "description": "Get the current verbosity level originally set by shakeVerbosity If you want to output information to the console you are recommended to use putLoud putNormal putQuiet which ensures multiple messages are not interleaved The verbosity can be modified locally by withVerbosity",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "getVerbosity",
          "package": "shake",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:getVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts out \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, becomes \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a target name if a rule fails.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "isFailure",
          "package": "shake",
          "signature": "(Maybe String)",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Starts out Nothing becomes Just target name if rule fails",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "isFailure",
          "package": "shake",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:isFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "liftIO",
          "package": "shake",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "shake",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a dependency on the file arguments, ensuring they are built before continuing.\n   The file arguments may be built in parallel, in any order. This function is particularly\n   necessary when calling \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e. As an example:\n\u003c/p\u003e\u003cpre\u003e\n \"//*.rot13\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n     let src = \u003ccode\u003e\u003ca\u003edropExtension\u003c/a\u003e\u003c/code\u003e out\n     \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e [src]\n     \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"rot13\" [src] \"-o\" [out]\n\u003c/pre\u003e\u003cp\u003eUsually \u003ccode\u003eneed [foo,bar]\u003c/code\u003e is preferable to \u003ccode\u003eneed [foo] \u003e\u003e need [bar]\u003c/code\u003e as the former allows greater\n   parallelism, while the latter requires \u003ccode\u003efoo\u003c/code\u003e to finish building before starting to build \u003ccode\u003ebar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "need",
          "package": "shake",
          "signature": "[FilePath] -\u003e Action ()",
          "source": "src/Development-Shake-Rules-File.html#need",
          "type": "function"
        },
        "index": {
          "description": "Add dependency on the file arguments ensuring they are built before continuing The file arguments may be built in parallel in any order This function is particularly necessary when calling cmd or command As an example rot13 out do let src dropExtension out need src cmd rot13 src out Usually need foo bar is preferable to need foo need bar as the former allows greater parallelism while the latter requires foo to finish building before starting to build bar",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "need",
          "normalized": "[FilePath]-\u003eAction()",
          "package": "shake",
          "signature": "[FilePath]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:need"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e, but if \u003ccode\u003e\u003ca\u003eshakeLint\u003c/a\u003e\u003c/code\u003e is set, check that the file does not rebuild.\n   Used for adding dependencies on files that have already been used in this rule.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "needed",
          "package": "shake",
          "signature": "[FilePath] -\u003e Action ()",
          "source": "src/Development-Shake-Rules-File.html#needed",
          "type": "function"
        },
        "index": {
          "description": "Like need but if shakeLint is set check that the file does not rebuild Used for adding dependencies on files that have already been used in this rule",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "needed",
          "normalized": "[FilePath]-\u003eAction()",
          "package": "shake",
          "signature": "[FilePath]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:needed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an action on a key, produce a cached version that will execute the action at most once per key.\n   Using the cached result will still result include any dependencies that the action requires.\n   Each call to \u003ccode\u003e\u003ca\u003enewCache\u003c/a\u003e\u003c/code\u003e creates a separate cache that is independent of all other calls to \u003ccode\u003e\u003ca\u003enewCache\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is useful when creating files that store intermediate values,\n   to avoid the overhead of repeatedly reading from disk, particularly if the file requires expensive parsing.\n   As an example:\n\u003c/p\u003e\u003cpre\u003e\n digits \u003c- \u003ccode\u003e\u003ca\u003enewCache\u003c/a\u003e\u003c/code\u003e $ \\file -\u003e do\n     src \u003c- readFile' file\n     return $ length $ filter isDigit src\n \"*.digits\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\x -\u003e do\n     v1 \u003c- digits (\u003ccode\u003edropExtension\u003c/code\u003e x)\n     v2 \u003c- digits (\u003ccode\u003edropExtension\u003c/code\u003e x)\n     \u003ccode\u003e\u003ca\u003ewriteFile'\u003c/a\u003e\u003c/code\u003e x $ show (v1,v2)\n\u003c/pre\u003e\u003cp\u003eTo create the result \u003ccode\u003eMyFile.txt.digits\u003c/code\u003e the file \u003ccode\u003eMyFile.txt\u003c/code\u003e will be read and counted, but only at most\n   once per execution.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "newCache",
          "package": "shake",
          "signature": "(k -\u003e Action v) -\u003e Rules (k -\u003e Action v)",
          "source": "src/Development-Shake-Core.html#newCache",
          "type": "function"
        },
        "index": {
          "description": "Given an action on key produce cached version that will execute the action at most once per key Using the cached result will still result include any dependencies that the action requires Each call to newCache creates separate cache that is independent of all other calls to newCache This function is useful when creating files that store intermediate values to avoid the overhead of repeatedly reading from disk particularly if the file requires expensive parsing As an example digits newCache file do src readFile file return length filter isDigit src digits do v1 digits dropExtension v2 digits dropExtension writeFile show v1 v2 To create the result MyFile.txt.digits the file MyFile.txt will be read and counted but only at most once per execution",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "newCache",
          "normalized": "(a-\u003eAction b)-\u003eRules(a-\u003eAction b)",
          "package": "shake",
          "partial": "Cache",
          "signature": "(k-\u003eAction v)-\u003eRules(k-\u003eAction v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:newCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003enewCache\u003c/a\u003e\u003c/code\u003e that runs in IO, and can be called before calling \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e.\n   Most people should use \u003ccode\u003e\u003ca\u003enewCache\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "newCacheIO",
          "package": "shake",
          "signature": "(k -\u003e Action v) -\u003e IO (k -\u003e Action v)",
          "source": "src/Development-Shake-Core.html#newCacheIO",
          "type": "function"
        },
        "index": {
          "description": "version of newCache that runs in IO and can be called before calling shake Most people should use newCache instead",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "newCacheIO",
          "normalized": "(a-\u003eAction b)-\u003eIO(a-\u003eAction b)",
          "package": "shake",
          "partial": "Cache IO",
          "signature": "(k-\u003eAction v)-\u003eIO(k-\u003eAction v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:newCacheIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a finite resource, given a name (for error messages) and a quantity of the resource that exists.\n   Shake will ensure that actions using the same finite resource do not execute in parallel.\n   As an example, only one set of calls to the Excel API can occur at one time, therefore\n   Excel is a finite resource of quantity 1. You can write:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e{\u003ccode\u003e\u003ca\u003eshakeThreads\u003c/a\u003e\u003c/code\u003e=2} $ do\n    \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e [\"a.xls\",\"b.xls\"]\n    excel \u003c- \u003ccode\u003e\u003ca\u003enewResource\u003c/a\u003e\u003c/code\u003e \"Excel\" 1\n    \"*.xls\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e\n        \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e excel 1 $\n            \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"excel\" out ...\n\u003c/pre\u003e\u003cp\u003eNow the two calls to \u003ccode\u003eexcel\u003c/code\u003e will not happen in parallel.\n\u003c/p\u003e\u003cp\u003eAs another example, calls to compilers are usually CPU bound but calls to linkers are usually\n   disk bound. Running 8 linkers will often cause an 8 CPU system to grid to a halt. We can limit\n   ourselves to 4 linkers with:\n\u003c/p\u003e\u003cpre\u003e\n disk \u003c- \u003ccode\u003e\u003ca\u003enewResource\u003c/a\u003e\u003c/code\u003e \"Disk\" 4\n \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e [show i \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e \"exe\" | i \u003c- [1..100]]\n \"*.exe\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e\n     \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e disk 1 $\n         \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"ld -o\" [out] ...\n \"*.o\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e\n     \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"cl -o\" [out] ...\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "newResource",
          "package": "shake",
          "signature": "String -\u003e Int -\u003e Rules Resource",
          "source": "src/Development-Shake-Core.html#newResource",
          "type": "function"
        },
        "index": {
          "description": "Create finite resource given name for error messages and quantity of the resource that exists Shake will ensure that actions using the same finite resource do not execute in parallel As an example only one set of calls to the Excel API can occur at one time therefore Excel is finite resource of quantity You can write shake shakeOptions shakeThreads do want a.xls b.xls excel newResource Excel xls out withResource excel cmd excel out Now the two calls to excel will not happen in parallel As another example calls to compilers are usually CPU bound but calls to linkers are usually disk bound Running linkers will often cause an CPU system to grid to halt We can limit ourselves to linkers with disk newResource Disk want show exe exe out withResource disk cmd ld out out cmd cl out",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "newResource",
          "normalized": "String-\u003eInt-\u003eRules Resource",
          "package": "shake",
          "partial": "Resource",
          "signature": "String-\u003eInt-\u003eRules Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:newResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003enewResource\u003c/a\u003e\u003c/code\u003e that runs in IO, and can be called before calling \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e.\n   Most people should use \u003ccode\u003e\u003ca\u003enewResource\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "newResourceIO",
          "package": "shake",
          "signature": "String -\u003e Int -\u003e IO Resource",
          "source": "src/Development-Shake-Resource.html#newResourceIO",
          "type": "function"
        },
        "index": {
          "description": "version of newResource that runs in IO and can be called before calling shake Most people should use newResource instead",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "newResourceIO",
          "normalized": "String-\u003eInt-\u003eIO Resource",
          "package": "shake",
          "partial": "Resource IO",
          "signature": "String-\u003eInt-\u003eIO Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:newResourceIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a throttled resource, given a name (for error messages) and a number of resources (the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e) that can be\n   used per time period (the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in seconds). Shake will ensure that actions using the same throttled resource\n   do not exceed the limits. As an example, let us assume that making more than 1 request every 5 seconds to\n   Google results in our client being blacklisted, we can write:\n\u003c/p\u003e\u003cpre\u003e\n google \u003c- \u003ccode\u003e\u003ca\u003enewThrottle\u003c/a\u003e\u003c/code\u003e \"Google\" 1 5\n \"*.url\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n     \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e google 1 $\n         \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"wget\" [\"http://google.com?q=\" ++ \u003ccode\u003e\u003ca\u003etakeBaseName\u003c/a\u003e\u003c/code\u003e out] \"-O\" [out]\n\u003c/pre\u003e\u003cp\u003eNow we will wait at least 5 seconds after querying Google before performing another query. If Google change the rules to\n   allow 12 requests per minute we can instead use \u003ccode\u003e\u003ccode\u003e\u003ca\u003enewThrottle\u003c/a\u003e\u003c/code\u003e \"Google\" 12 60\u003c/code\u003e, which would allow\n   greater parallelisation, and avoid throttling entirely if only a small number of requests are necessary.\n\u003c/p\u003e\u003cp\u003eIn the original example we never make a fresh request until 5 seconds after the previous request has \u003cem\u003ecompleted\u003c/em\u003e. If we instead\n   want to throttle requests since the previous request \u003cem\u003estarted\u003c/em\u003e we can write:\n\u003c/p\u003e\u003cpre\u003e\n google \u003c- \u003ccode\u003e\u003ca\u003enewThrottle\u003c/a\u003e\u003c/code\u003e \"Google\" 1 5\n \"*.url\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n     \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e google 1 $ return ()\n     \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"wget\" [\"http://google.com?q=\" ++ \u003ccode\u003e\u003ca\u003etakeBaseName\u003c/a\u003e\u003c/code\u003e out] \"-O\" [out]\n\u003c/pre\u003e\u003cp\u003eHowever, the rule may not continue running immediately after \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e completes, so while\n   we will never exceed an average of 1 request every 5 seconds, we may end up running an unbounded number of\n   requests simultaneously. If this limitation causes a problem in practice it can be fixed.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "newThrottle",
          "package": "shake",
          "signature": "String -\u003e Int -\u003e Double -\u003e Rules Resource",
          "source": "src/Development-Shake-Core.html#newThrottle",
          "type": "function"
        },
        "index": {
          "description": "Create throttled resource given name for error messages and number of resources the Int that can be used per time period the Double in seconds Shake will ensure that actions using the same throttled resource do not exceed the limits As an example let us assume that making more than request every seconds to Google results in our client being blacklisted we can write google newThrottle Google url out do withResource google cmd wget http google.com takeBaseName out out Now we will wait at least seconds after querying Google before performing another query If Google change the rules to allow requests per minute we can instead use newThrottle Google which would allow greater parallelisation and avoid throttling entirely if only small number of requests are necessary In the original example we never make fresh request until seconds after the previous request has completed If we instead want to throttle requests since the previous request started we can write google newThrottle Google url out do withResource google return cmd wget http google.com takeBaseName out out However the rule may not continue running immediately after withResource completes so while we will never exceed an average of request every seconds we may end up running an unbounded number of requests simultaneously If this limitation causes problem in practice it can be fixed",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "newThrottle",
          "normalized": "String-\u003eInt-\u003eDouble-\u003eRules Resource",
          "package": "shake",
          "partial": "Throttle",
          "signature": "String-\u003eInt-\u003eDouble-\u003eRules Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:newThrottle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003enewThrottle\u003c/a\u003e\u003c/code\u003e that runs in IO, and can be called before calling \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e.\n   Most people should use \u003ccode\u003e\u003ca\u003enewResource\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "newThrottleIO",
          "package": "shake",
          "signature": "String -\u003e Int -\u003e Double -\u003e IO Resource",
          "source": "src/Development-Shake-Resource.html#newThrottleIO",
          "type": "function"
        },
        "index": {
          "description": "version of newThrottle that runs in IO and can be called before calling shake Most people should use newResource instead",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "newThrottleIO",
          "normalized": "String-\u003eInt-\u003eDouble-\u003eIO Resource",
          "package": "shake",
          "partial": "Throttle IO",
          "signature": "String-\u003eInt-\u003eDouble-\u003eIO Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:newThrottleIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine order-only dependencies, these are dependencies that will always\n   be built before continuing, but which aren't dependencies of this action.\n   Mostly useful for defining generated dependencies you think might be real dependencies.\n   If they turn out to be real dependencies, you should add an explicit dependency afterwards.\n\u003c/p\u003e\u003cpre\u003e\n \"source.o\" *\u003e \\out -\u003e do\n     \u003ccode\u003e\u003ca\u003eorderOnly\u003c/a\u003e\u003c/code\u003e [\"header.h\"]\n     () \u003c- \u003ccode\u003ecmd\u003c/code\u003e \"gcc -c source.c -o source.o -MMD -MF source.m\"\n     \u003ccode\u003eneededMakefileDependencies\u003c/code\u003e \"source.m\"\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003eheader.h\u003c/code\u003e is included by \u003ccode\u003esource.c\u003c/code\u003e then the call to \u003ccode\u003eneedMakefileDependencies\u003c/code\u003e will cause\n   it to be added as a real dependency. If it isn't, then the rule won't rebuild if it changes,\n   and you will have lost some opportunity for parallelism.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "orderOnly",
          "package": "shake",
          "signature": "[FilePath] -\u003e Action ()",
          "source": "src/Development-Shake-Rules-OrderOnly.html#orderOnly",
          "type": "function"
        },
        "index": {
          "description": "Define order-only dependencies these are dependencies that will always be built before continuing but which aren dependencies of this action Mostly useful for defining generated dependencies you think might be real dependencies If they turn out to be real dependencies you should add an explicit dependency afterwards source.o out do orderOnly header.h cmd gcc source.c source.o MMD MF source.m neededMakefileDependencies source.m If header.h is included by source.c then the call to needMakefileDependencies will cause it to be added as real dependency If it isn then the rule won rebuild if it changes and you will have lost some opportunity for parallelism",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "orderOnly",
          "normalized": "[FilePath]-\u003eAction()",
          "package": "shake",
          "partial": "Only",
          "signature": "[FilePath]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:orderOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a phony action -- an action that does not produce a file, and will be rerun\n   in every execution that requires it. You can demand \u003ccode\u003e\u003ca\u003ephony\u003c/a\u003e\u003c/code\u003e rules using \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e.\n   Phony actions are never executed more than once in a single build run.\n\u003c/p\u003e\u003cp\u003ePhony actions are intended to define command-line abbreviations. If you \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e a phony action\n   in a rule then every execution where that rule is required will rerun both the rule and the phony\n   action.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "phony",
          "package": "shake",
          "signature": "String -\u003e Action () -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-File.html#phony",
          "type": "function"
        },
        "index": {
          "description": "Declare phony action an action that does not produce file and will be rerun in every execution that requires it You can demand phony rules using want need Phony actions are never executed more than once in single build run Phony actions are intended to define command-line abbreviations If you need phony action in rule then every execution where that rule is required will rerun both the rule and the phony action",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "phony",
          "normalized": "String-\u003eAction()-\u003eRules()",
          "package": "shake",
          "signature": "String-\u003eAction()-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:phony"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sampling interval (in seconds) and a way to display the status message,\n   produce a function suitable for using as \u003ccode\u003e\u003ca\u003eshakeProgress\u003c/a\u003e\u003c/code\u003e.\n   This function polls the progress information every \u003cem\u003en\u003c/em\u003e seconds, produces a status\n   message and displays it using the display function.\n\u003c/p\u003e\u003cp\u003eTypical status messages will take the form of \u003ccode\u003e1m25s (15%)\u003c/code\u003e, indicating that the build\n   is predicted to complete in 1 minute 25 seconds (85 seconds total), and 15% of the necessary build time has elapsed.\n   This function uses past observations to predict future behaviour, and as such, is only\n   guessing. The time is likely to go up as well as down, and will be less accurate from a\n   clean build (as the system has fewer past observations).\n\u003c/p\u003e\u003cp\u003eThe current implementation is to predict the time remaining (based on \u003ccode\u003e\u003ca\u003etimeTodo\u003c/a\u003e\u003c/code\u003e) and the\n   work already done (\u003ccode\u003e\u003ca\u003etimeBuilt\u003c/a\u003e\u003c/code\u003e). The percentage is then calculated as \u003ccode\u003eremaining / (done + remaining)\u003c/code\u003e,\n   while time left is calculated by scaling \u003ccode\u003eremaining\u003c/code\u003e by the observed work rate in this build,\n   roughly \u003ccode\u003edone / time_elapsed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "progressDisplay",
          "package": "shake",
          "signature": "Double -\u003e (String -\u003e IO ()) -\u003e IO Progress -\u003e IO ()",
          "source": "src/Development-Shake-Progress.html#progressDisplay",
          "type": "function"
        },
        "index": {
          "description": "Given sampling interval in seconds and way to display the status message produce function suitable for using as shakeProgress This function polls the progress information every seconds produces status message and displays it using the display function Typical status messages will take the form of m25s indicating that the build is predicted to complete in minute seconds seconds total and of the necessary build time has elapsed This function uses past observations to predict future behaviour and as such is only guessing The time is likely to go up as well as down and will be less accurate from clean build as the system has fewer past observations The current implementation is to predict the time remaining based on timeTodo and the work already done timeBuilt The percentage is then calculated as remaining done remaining while time left is calculated by scaling remaining by the observed work rate in this build roughly done time elapsed",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "progressDisplay",
          "normalized": "Double-\u003e(String-\u003eIO())-\u003eIO Progress-\u003eIO()",
          "package": "shake",
          "partial": "Display",
          "signature": "Double-\u003e(String-\u003eIO())-\u003eIO Progress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:progressDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the program \u003ccode\u003eshake-progress\u003c/code\u003e if it is on the \u003ccode\u003e$PATH\u003c/code\u003e. The program is called with\n   the following arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e--title=string\u003c/code\u003e - the string passed to \u003ccode\u003eprogressProgram\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e--state=Normal\u003c/code\u003e, or one of \u003ccode\u003eNoProgress\u003c/code\u003e, \u003ccode\u003eNormal\u003c/code\u003e, or \u003ccode\u003eError\u003c/code\u003e to indicate\n   what state the progress bar should be in.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e--value=25\u003c/code\u003e - the percent of the build that has completed, if not in \u003ccode\u003eNoProgress\u003c/code\u003e state.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe program will not be called consecutively with the same \u003ccode\u003e--state\u003c/code\u003e and \u003ccode\u003e--value\u003c/code\u003e options.\n\u003c/p\u003e\u003cp\u003eWindows 7 or higher users can get taskbar progress notifications by placing the following\n   program in their \u003ccode\u003e$PATH\u003c/code\u003e: \u003ca\u003ehttps://github.com/ndmitchell/shake/releases\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "progressProgram",
          "package": "shake",
          "signature": "IO (String -\u003e IO ())",
          "source": "src/Development-Shake-Progress.html#progressProgram",
          "type": "function"
        },
        "index": {
          "description": "Call the program shake-progress if it is on the PATH The program is called with the following arguments title string the string passed to progressProgram state Normal or one of NoProgress Normal or Error to indicate what state the progress bar should be in value the percent of the build that has completed if not in NoProgress state The program will not be called consecutively with the same state and value options Windows or higher users can get taskbar progress notifications by placing the following program in their PATH https github.com ndmitchell shake releases",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "progressProgram",
          "normalized": "IO(String-\u003eIO())",
          "package": "shake",
          "partial": "Program",
          "signature": "IO(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:progressProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple method for displaying progress messages, suitable for using as \u003ccode\u003e\u003ca\u003eshakeProgress\u003c/a\u003e\u003c/code\u003e.\n   This function writes the current progress to the titlebar every five seconds using \u003ccode\u003e\u003ca\u003eprogressTitlebar\u003c/a\u003e\u003c/code\u003e,\n   and calls any \u003ccode\u003eshake-progress\u003c/code\u003e program on the \u003ccode\u003e$PATH\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eprogressProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "progressSimple",
          "package": "shake",
          "signature": "IO Progress -\u003e IO ()",
          "source": "src/Development-Shake-Progress.html#progressSimple",
          "type": "function"
        },
        "index": {
          "description": "simple method for displaying progress messages suitable for using as shakeProgress This function writes the current progress to the titlebar every five seconds using progressTitlebar and calls any shake-progress program on the PATH using progressProgram",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "progressSimple",
          "normalized": "IO Progress-\u003eIO()",
          "package": "shake",
          "partial": "Simple",
          "signature": "IO Progress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:progressSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the title of the current console window to the given text. If the\n   environment variable \u003ccode\u003e$TERM\u003c/code\u003e is set to \u003ccode\u003exterm\u003c/code\u003e this uses xterm escape sequences.\n   On Windows, if not detected as an xterm, this function uses the \u003ccode\u003eSetConsoleTitle\u003c/code\u003e API.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "progressTitlebar",
          "package": "shake",
          "signature": "String -\u003e IO ()",
          "source": "src/Development-Shake-Progress.html#progressTitlebar",
          "type": "function"
        },
        "index": {
          "description": "Set the title of the current console window to the given text If the environment variable TERM is set to xterm this uses xterm escape sequences On Windows if not detected as an xterm this function uses the SetConsoleTitle API",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "progressTitlebar",
          "normalized": "String-\u003eIO()",
          "package": "shake",
          "partial": "Titlebar",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:progressTitlebar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a message to the output when the verbosity (\u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e) is appropriate.\n   The output will not be interleaved with any other Shake messages\n   (other than those generated by system commands).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "putLoud",
          "package": "shake",
          "signature": "String -\u003e Action ()",
          "source": "src/Development-Shake-Core.html#putLoud",
          "type": "function"
        },
        "index": {
          "description": "Write message to the output when the verbosity shakeVerbosity is appropriate The output will not be interleaved with any other Shake messages other than those generated by system commands",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "putLoud",
          "normalized": "String-\u003eAction()",
          "package": "shake",
          "partial": "Loud",
          "signature": "String-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:putLoud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a message to the output when the verbosity (\u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e) is appropriate.\n   The output will not be interleaved with any other Shake messages\n   (other than those generated by system commands).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "putNormal",
          "package": "shake",
          "signature": "String -\u003e Action ()",
          "source": "src/Development-Shake-Core.html#putNormal",
          "type": "function"
        },
        "index": {
          "description": "Write message to the output when the verbosity shakeVerbosity is appropriate The output will not be interleaved with any other Shake messages other than those generated by system commands",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "putNormal",
          "normalized": "String-\u003eAction()",
          "package": "shake",
          "partial": "Normal",
          "signature": "String-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:putNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a message to the output when the verbosity (\u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e) is appropriate.\n   The output will not be interleaved with any other Shake messages\n   (other than those generated by system commands).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "putQuiet",
          "package": "shake",
          "signature": "String -\u003e Action ()",
          "source": "src/Development-Shake-Core.html#putQuiet",
          "type": "function"
        },
        "index": {
          "description": "Write message to the output when the verbosity shakeVerbosity is appropriate The output will not be interleaved with any other Shake messages other than those generated by system commands",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "putQuiet",
          "normalized": "String-\u003eAction()",
          "package": "shake",
          "partial": "Quiet",
          "signature": "String-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:putQuiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action with \u003ccode\u003e\u003ca\u003eQuiet\u003c/a\u003e\u003c/code\u003e verbosity, in particular messages produced by \u003ccode\u003e\u003ca\u003etraced\u003c/a\u003e\u003c/code\u003e\n   (including from \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e) will not be printed to the screen.\n   Will not update the \u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e returned by \u003ccode\u003e\u003ca\u003egetShakeOptions\u003c/a\u003e\u003c/code\u003e and will\n   not turn off any \u003ccode\u003e\u003ca\u003eDiagnostic\u003c/a\u003e\u003c/code\u003e tracing.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "quietly",
          "package": "shake",
          "signature": "Action a -\u003e Action a",
          "source": "src/Development-Shake-Core.html#quietly",
          "type": "function"
        },
        "index": {
          "description": "Run an action with Quiet verbosity in particular messages produced by traced including from cmd or command will not be printed to the screen Will not update the shakeVerbosity returned by getShakeOptions and will not turn off any Diagnostic tracing",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "quietly",
          "normalized": "Action a-\u003eAction a",
          "package": "shake",
          "signature": "Action a-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:quietly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a file, after calling \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e. The argument file will be tracked as a dependency.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "readFile'",
          "package": "shake",
          "signature": "FilePath -\u003e Action String",
          "source": "src/Development-Shake-Derived.html#readFile%27",
          "type": "function"
        },
        "index": {
          "description": "Read file after calling need The argument file will be tracked as dependency",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "readFile'",
          "normalized": "FilePath-\u003eAction String",
          "package": "shake",
          "partial": "File'",
          "signature": "FilePath-\u003eAction String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadFile'\u003c/a\u003e\u003c/code\u003e which also splits the result into lines.\n   The argument file will be tracked as a dependency.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "readFileLines",
          "package": "shake",
          "signature": "FilePath -\u003e Action [String]",
          "source": "src/Development-Shake-Derived.html#readFileLines",
          "type": "function"
        },
        "index": {
          "description": "version of readFile which also splits the result into lines The argument file will be tracked as dependency",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "readFileLines",
          "normalized": "FilePath-\u003eAction[String]",
          "package": "shake",
          "partial": "File Lines",
          "signature": "FilePath-\u003eAction[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:readFileLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all empty directories and files that match any of the patterns beneath a directory.\n   Some examples:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eremoveFiles\u003c/a\u003e\u003c/code\u003e \"output\" [\"//*\"]\n \u003ccode\u003e\u003ca\u003eremoveFiles\u003c/a\u003e\u003c/code\u003e \".\" [\"//*.hi\",\"//*.o\"]\n\u003c/pre\u003e\u003cp\u003eThis function is often useful when writing a \u003ccode\u003eclean\u003c/code\u003e action for your build system,\n   often as a \u003ccode\u003ephony\u003c/code\u003e rule.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "removeFiles",
          "package": "shake",
          "signature": "FilePath -\u003e [FilePattern] -\u003e IO ()",
          "source": "src/Development-Shake-Rules-Directory.html#removeFiles",
          "type": "function"
        },
        "index": {
          "description": "Remove all empty directories and files that match any of the patterns beneath directory Some examples removeFiles output removeFiles hi This function is often useful when writing clean action for your build system often as phony rule",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "removeFiles",
          "normalized": "FilePath-\u003e[FilePattern]-\u003eIO()",
          "package": "shake",
          "partial": "Files",
          "signature": "FilePath-\u003e[FilePattern]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:removeFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove files, like \u003ccode\u003e\u003ca\u003eremoveFiles\u003c/a\u003e\u003c/code\u003e, but executed after the build completes successfully.\n   Useful for implementing \u003ccode\u003eclean\u003c/code\u003e actions that delete files Shake may have open for building.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "removeFilesAfter",
          "package": "shake",
          "signature": "FilePath -\u003e [FilePattern] -\u003e Action ()",
          "source": "src/Development-Shake-Rules-Directory.html#removeFilesAfter",
          "type": "function"
        },
        "index": {
          "description": "Remove files like removeFiles but executed after the build completes successfully Useful for implementing clean actions that delete files Shake may have open for building",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "removeFilesAfter",
          "normalized": "FilePath-\u003e[FilePattern]-\u003eAction()",
          "package": "shake",
          "partial": "Files After",
          "signature": "FilePath-\u003e[FilePattern]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:removeFilesAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain entry point for running Shake build systems. For an example see the top of the module \u003ca\u003eDevelopment.Shake\u003c/a\u003e.\n   Use \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e to specify how the system runs, and \u003ccode\u003e\u003ca\u003eRules\u003c/a\u003e\u003c/code\u003e to specify what to build. The function will throw\n   an exception if the build fails.\n\u003c/p\u003e\u003cp\u003eTo use command line flags to modify \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e see \u003ccode\u003e\u003ca\u003eshakeArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shake",
          "package": "shake",
          "signature": "ShakeOptions -\u003e Rules () -\u003e IO ()",
          "source": "src/Development-Shake-Shake.html#shake",
          "type": "function"
        },
        "index": {
          "description": "Main entry point for running Shake build systems For an example see the top of the module Development.Shake Use ShakeOptions to specify how the system runs and Rules to specify what to build The function will throw an exception if the build fails To use command line flags to modify ShakeOptions see shakeArgs",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shake",
          "normalized": "ShakeOptions-\u003eRules()-\u003eIO()",
          "package": "shake",
          "signature": "ShakeOptions-\u003eRules()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e[]\u003c/code\u003e. A list of substrings that should be abbreviated in status messages, and their corresponding abbreviation.\n   Commonly used to replace the long paths (e.g. \u003ccode\u003e.make/i586-linux-gcc/output\u003c/code\u003e) with an abbreviation (e.g. \u003ccode\u003e$OUT\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeAbbreviations",
          "package": "shake",
          "signature": "[(String, String)]",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to list of substrings that should be abbreviated in status messages and their corresponding abbreviation Commonly used to replace the long paths e.g make i586-linux-gcc output with an abbreviation e.g OUT",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeAbbreviations",
          "normalized": "[(String,String)]",
          "package": "shake",
          "partial": "Abbreviations",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeAbbreviations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a build system using command line arguments for configuration.\n   The available flags are those from \u003ccode\u003e\u003ca\u003eshakeOptDescrs\u003c/a\u003e\u003c/code\u003e, along with a few additional\n   \u003ccode\u003emake\u003c/code\u003e compatible flags that are not represented in \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e--print-directory\u003c/code\u003e.\n   If there are no file arguments then the \u003ccode\u003e\u003ca\u003eRules\u003c/a\u003e\u003c/code\u003e are used directly, otherwise the file arguments\n   are \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003eed (after calling \u003ccode\u003e\u003ca\u003ewithoutActions\u003c/a\u003e\u003c/code\u003e). As an example:\n\u003c/p\u003e\u003cpre\u003e\n main = \u003ccode\u003e\u003ca\u003eshakeArgs\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e{\u003ccode\u003e\u003ca\u003eshakeFiles\u003c/a\u003e\u003c/code\u003e = \"_make/\", \u003ccode\u003e\u003ca\u003eshakeProgress\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eprogressSimple\u003c/a\u003e\u003c/code\u003e} $ do\n     \u003ccode\u003e\u003ca\u003ephony\u003c/a\u003e\u003c/code\u003e \"clean\" $ \u003ccode\u003e\u003ca\u003eremoveFilesAfter\u003c/a\u003e\u003c/code\u003e \"_make\" [\"//*\"]\n     \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e [\"_make/neil.txt\",\"_make/emily.txt\"]\n     \"_make/*.txt\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e\n         ... build action here ...\n\u003c/pre\u003e\u003cp\u003eThis build system will default to building \u003ccode\u003eneil.txt\u003c/code\u003e and \u003ccode\u003eemily.txt\u003c/code\u003e, while showing progress messages,\n   and putting the Shake files in locations such as \u003ccode\u003e_make/.database\u003c/code\u003e. Some example command line flags:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003emain --no-progress\u003c/code\u003e will turn off progress messages.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003emain -j6\u003c/code\u003e will build on 6 threads.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003emain --help\u003c/code\u003e will display a list of supported flags.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003emain clean\u003c/code\u003e will not build anything, but will remove the \u003ccode\u003e_make\u003c/code\u003e directory, including the\n   any \u003ccode\u003e\u003ca\u003eshakeFiles\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003emain _make/henry.txt\u003c/code\u003e will not build \u003ccode\u003eneil.txt\u003c/code\u003e or \u003ccode\u003eemily.txt\u003c/code\u003e, but will instead build \u003ccode\u003ehenry.txt\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Development.Shake",
          "name": "shakeArgs",
          "package": "shake",
          "signature": "ShakeOptions -\u003e Rules () -\u003e IO ()",
          "source": "src/Development-Shake-Args.html#shakeArgs",
          "type": "function"
        },
        "index": {
          "description": "Run build system using command line arguments for configuration The available flags are those from shakeOptDescrs along with few additional make compatible flags that are not represented in ShakeOptions such as print-directory If there are no file arguments then the Rules are used directly otherwise the file arguments are want ed after calling withoutActions As an example main shakeArgs shakeOptions shakeFiles make shakeProgress progressSimple do phony clean removeFilesAfter make want make neil.txt make emily.txt make txt out build action here This build system will default to building neil.txt and emily.txt while showing progress messages and putting the Shake files in locations such as make database Some example command line flags main no-progress will turn off progress messages main j6 will build on threads main help will display list of supported flags main clean will not build anything but will remove the make directory including the any shakeFiles main make henry.txt will not build neil.txt or emily.txt but will instead build henry.txt",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeArgs",
          "normalized": "ShakeOptions-\u003eRules()-\u003eIO()",
          "package": "shake",
          "partial": "Args",
          "signature": "ShakeOptions-\u003eRules()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eshakeArgs\u003c/a\u003e\u003c/code\u003e with more flexible handling of command line arguments.\n   The caller of \u003ccode\u003e\u003ca\u003eshakeArgsWith\u003c/a\u003e\u003c/code\u003e can add additional flags (the second argument) and chose how to convert\n   the flags/arguments into rules (the third argument). Given:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eshakeArgsWith\u003c/a\u003e\u003c/code\u003e opts flags (\\flagValues argValues -\u003e result)\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eopts\u003c/code\u003e is the initial \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e value, which may have some fields overriden by command line flags.\n   This argument is usually \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e, perhaps with a few fields overriden.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eflags\u003c/code\u003e is a list of flag descriptions, which either produce a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e containing an error\n   message (typically for flags with invalid arguments, .e.g. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \"could not parse as int\"\u003c/code\u003e), or a value\n   that is passed as \u003ccode\u003eflagValues\u003c/code\u003e. If you have no custom flags, pass \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eflagValues\u003c/code\u003e is a list of custom flags that the user supplied. If \u003ccode\u003eflags == []\u003c/code\u003e then this list will\n   be \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eargValues\u003c/code\u003e is a list of non-flag arguments, which are often treated as files and passed to \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eresult\u003c/code\u003e should produce a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to indicate that no building needs to take place, or a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n   providing the rules that should be used.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs an example of a build system that can use either \u003ccode\u003egcc\u003c/code\u003e or \u003ccode\u003edistcc\u003c/code\u003e for compiling:\n\u003c/p\u003e\u003cpre\u003e\nimport System.Console.GetOpt\n\ndata Flags = DistCC deriving Eq\nflags = [Option \"\" [\"distcc\"] (NoArg $ Right DistCC) \"Run distributed.\"]\n\nmain = \u003ccode\u003e\u003ca\u003eshakeArgsWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e flags $ \\flags targets -\u003e return $ Just $ do\n     if null targets then \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e [\"result.exe\"] else \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e targets\n     let compiler = if DistCC `elem` flags then \"distcc\" else \"gcc\"\n     \"*.o\" \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e \\out -\u003e do\n         \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e ...\n         \u003ccode\u003ecmd\u003c/code\u003e compiler ...\n     ...\n\u003c/pre\u003e\u003cp\u003eNow you can pass \u003ccode\u003e--distcc\u003c/code\u003e to use the \u003ccode\u003edistcc\u003c/code\u003e compiler.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeArgsWith",
          "package": "shake",
          "signature": "ShakeOptions -\u003e [OptDescr (Either String a)] -\u003e ([a] -\u003e [String] -\u003e IO (Maybe (Rules ()))) -\u003e IO ()",
          "source": "src/Development-Shake-Args.html#shakeArgsWith",
          "type": "function"
        },
        "index": {
          "description": "version of shakeArgs with more flexible handling of command line arguments The caller of shakeArgsWith can add additional flags the second argument and chose how to convert the flags arguments into rules the third argument Given shakeArgsWith opts flags flagValues argValues result opts is the initial ShakeOptions value which may have some fields overriden by command line flags This argument is usually shakeOptions perhaps with few fields overriden flags is list of flag descriptions which either produce String containing an error message typically for flags with invalid arguments e.g Left could not parse as int or value that is passed as flagValues If you have no custom flags pass flagValues is list of custom flags that the user supplied If flags then this list will be argValues is list of non-flag arguments which are often treated as files and passed to want result should produce Nothing to indicate that no building needs to take place or Just providing the rules that should be used As an example of build system that can use either gcc or distcc for compiling import System.Console.GetOpt data Flags DistCC deriving Eq flags Option distcc NoArg Right DistCC Run distributed main shakeArgsWith shakeOptions flags flags targets return Just do if null targets then want result.exe else want targets let compiler if DistCC elem flags then distcc else gcc out do need cmd compiler Now you can pass distcc to use the distcc compiler",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeArgsWith",
          "normalized": "ShakeOptions-\u003e[OptDescr(Either String a)]-\u003e([a]-\u003e[String]-\u003eIO(Maybe(Rules())))-\u003eIO()",
          "package": "shake",
          "partial": "Args With",
          "signature": "ShakeOptions-\u003e[OptDescr(Either String a)]-\u003e([a]-\u003e[String]-\u003eIO(Maybe(Rules())))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeArgsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Assume all build objects are clean/dirty, see \u003ccode\u003e\u003ca\u003eAssume\u003c/a\u003e\u003c/code\u003e for details.\n   Can be used to implement \u003ccode\u003emake --touch\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeAssume",
          "package": "shake",
          "signature": "Maybe Assume",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to Nothing Assume all build objects are clean dirty see Assume for details Can be used to implement make touch",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeAssume",
          "package": "shake",
          "partial": "Assume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeAssume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying exception that was raised.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeExceptionInner",
          "package": "shake",
          "signature": "SomeException",
          "source": "src/Development-Shake-Errors.html#ShakeException",
          "type": "function"
        },
        "index": {
          "description": "The underlying exception that was raised",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeExceptionInner",
          "package": "shake",
          "partial": "Exception Inner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeExceptionInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe stack of targets, where the \u003ccode\u003e\u003ca\u003eshakeExceptionTarget\u003c/a\u003e\u003c/code\u003e is last.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeExceptionStack",
          "package": "shake",
          "signature": "[String]",
          "source": "src/Development-Shake-Errors.html#ShakeException",
          "type": "function"
        },
        "index": {
          "description": "The stack of targets where the shakeExceptionTarget is last",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeExceptionStack",
          "normalized": "[String]",
          "package": "shake",
          "partial": "Exception Stack",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeExceptionStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe target that was being built when the exception occured.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeExceptionTarget",
          "package": "shake",
          "signature": "String",
          "source": "src/Development-Shake-Errors.html#ShakeException",
          "type": "function"
        },
        "index": {
          "description": "The target that was being built when the exception occured",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeExceptionTarget",
          "package": "shake",
          "partial": "Exception Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeExceptionTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e.shake\u003c/code\u003e. The prefix of the filename used for storing Shake metadata files.\n   All metadata files will be named \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshakeFiles\u003c/a\u003e\u003c/code\u003e.\u003cem\u003eextension\u003c/em\u003e\u003c/code\u003e, for some \u003ccode\u003e\u003cem\u003eextension\u003c/em\u003e\u003c/code\u003e.\n   If the \u003ccode\u003e\u003ca\u003eshakeFiles\u003c/a\u003e\u003c/code\u003e directory does not exist it will be created.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeFiles",
          "package": "shake",
          "signature": "FilePath",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to shake The prefix of the filename used for storing Shake metadata files All metadata files will be named shakeFiles extension for some extension If the shakeFiles directory does not exist it will be created",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeFiles",
          "package": "shake",
          "partial": "Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e 10\u003c/code\u003e. How often to flush Shake metadata files in seconds, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to never flush explicitly.\n   It is possible that on abnormal termination (not Haskell exceptions) any rules that completed in the last\n   \u003ccode\u003e\u003ca\u003eshakeFlush\u003c/a\u003e\u003c/code\u003e seconds will be lost.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeFlush",
          "package": "shake",
          "signature": "Maybe Double",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to Just How often to flush Shake metadata files in seconds or Nothing to never flush explicitly It is possible that on abnormal termination not Haskell exceptions any rules that completed in the last shakeFlush seconds will be lost",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeFlush",
          "package": "shake",
          "partial": "Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Change \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e to line buffering while running Shake.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeLineBuffering",
          "package": "shake",
          "signature": "Bool",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to True Change stdout and stderr to line buffering while running Shake",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeLineBuffering",
          "package": "shake",
          "partial": "Line Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeLineBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Perform sanity checks during building, see \u003ccode\u003e\u003ca\u003eLint\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeLint",
          "package": "shake",
          "signature": "Maybe Lint",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to Nothing Perform sanity checks during building see Lint for details",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeLint",
          "package": "shake",
          "partial": "Lint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeLint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of command line options that can be used to modify \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e. Each option returns\n   either an error message (invalid argument to the flag) or a function that changes some fields\n   in \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e. The command line flags are \u003ccode\u003emake\u003c/code\u003e compatible where possbile, but additional\n   flags have been added for the extra options Shake supports.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeOptDescrs",
          "package": "shake",
          "signature": "[OptDescr (Either String (ShakeOptions -\u003e ShakeOptions))]",
          "source": "src/Development-Shake-Args.html#shakeOptDescrs",
          "type": "function"
        },
        "index": {
          "description": "list of command line options that can be used to modify ShakeOptions Each option returns either an error message invalid argument to the flag or function that changes some fields in ShakeOptions The command line flags are make compatible where possbile but additional flags have been added for the extra options Shake supports",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeOptDescrs",
          "normalized": "[OptDescr(Either String(ShakeOptions-\u003eShakeOptions))]",
          "package": "shake",
          "partial": "Opt Descrs",
          "signature": "[OptDescr(Either String(ShakeOptions-\u003eShakeOptions))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeOptDescrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default set of \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeOptions",
          "package": "shake",
          "signature": "ShakeOptions",
          "source": "src/Development-Shake-Types.html#shakeOptions",
          "type": "function"
        },
        "index": {
          "description": "The default set of ShakeOptions",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeOptions",
          "package": "shake",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to writing using \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e. A function called to output messages from Shake, along with the \u003ccode\u003e\u003ca\u003eVerbosity\u003c/a\u003e\u003c/code\u003e at\n   which that message should be printed. This function will be called atomically from all other \u003ccode\u003e\u003ca\u003eshakeOutput\u003c/a\u003e\u003c/code\u003e functions.\n   The \u003ccode\u003e\u003ca\u003eVerbosity\u003c/a\u003e\u003c/code\u003e will always be greater than or higher than \u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeOutput",
          "package": "shake",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to writing using putStrLn function called to output messages from Shake along with the Verbosity at which that message should be printed This function will be called atomically from all other shakeOutput functions The Verbosity will always be greater than or higher than shakeVerbosity",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeOutput",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "shake",
          "partial": "Output",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to no action. A function called when the build starts, allowing progress to be reported.\n   The function is called on a separate thread, and that thread is killed when the build completes.\n   For applications that want to display progress messages, \u003ccode\u003e\u003ca\u003eprogressSimple\u003c/a\u003e\u003c/code\u003e is often sufficient, but more advanced\n   users should look at the \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeProgress",
          "package": "shake",
          "signature": "IO Progress -\u003e IO ()",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to no action function called when the build starts allowing progress to be reported The function is called on separate thread and that thread is killed when the build completes For applications that want to display progress messages progressSimple is often sufficient but more advanced users should look at the Progress data type",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeProgress",
          "normalized": "IO Progress-\u003eIO()",
          "package": "shake",
          "partial": "Progress",
          "signature": "IO Progress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Write an HTML profiling report to a file, showing which\n   rules rebuilt, why, and how much time they took. Useful for improving the speed of your build systems.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeReport",
          "package": "shake",
          "signature": "Maybe FilePath",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to Nothing Write an HTML profiling report to file showing which rules rebuilt why and how much time they took Useful for improving the speed of your build systems",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeReport",
          "package": "shake",
          "partial": "Report",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Should you run command line actions, set to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e to skip actions whose output streams and exit code\n   are not used. Useful for profiling the non-command portion of the build system.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeRunCommands",
          "package": "shake",
          "signature": "Bool",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Default to True Should you run command line actions set to False to skip actions whose output streams and exit code are not used Useful for profiling the non-command portion of the build system",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeRunCommands",
          "package": "shake",
          "partial": "Run Commands",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeRunCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. Operate in staunch mode, where building continues even after errors,\n   similar to \u003ccode\u003emake --keep-going\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeStaunch",
          "package": "shake",
          "signature": "Bool",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to False Operate in staunch mode where building continues even after errors similar to make keep-going",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeStaunch",
          "package": "shake",
          "partial": "Staunch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeStaunch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. Write a message to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshakeFiles\u003c/a\u003e\u003c/code\u003e.storage\u003c/code\u003e whenever a storage event happens which may impact\n   on the current stored progress. Examples include database version number changes, database compaction or corrupt files.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeStorageLog",
          "package": "shake",
          "signature": "Bool",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to False Write message to shakeFiles storage whenever storage event happens which may impact on the current stored progress Examples include database version number changes database compaction or corrupt files",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeStorageLog",
          "package": "shake",
          "partial": "Storage Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeStorageLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e1\u003c/code\u003e. Maximum number of rules to run in parallel, similar to \u003ccode\u003emake --jobs=\u003cem\u003eN\u003c/em\u003e\u003c/code\u003e.\n   For many build systems, a number equal to or slightly less than the number of physical processors\n   works well.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeThreads",
          "package": "shake",
          "signature": "Int",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to Maximum number of rules to run in parallel similar to make jobs For many build systems number equal to or slightly less than the number of physical processors works well",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeThreads",
          "package": "shake",
          "partial": "Threads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. Print timing information for each stage at the end.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeTimings",
          "package": "shake",
          "signature": "Bool",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to False Print timing information for each stage at the end",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeTimings",
          "package": "shake",
          "partial": "Timings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeTimings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e. What level of messages should be printed out.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeVerbosity",
          "package": "shake",
          "signature": "Verbosity",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to Normal What level of messages should be printed out",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeVerbosity",
          "package": "shake",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003e1\u003c/a\u003e\u003c/code\u003e. The version number of your build rules.\n   Change the version number to force a complete rebuild, such as when making\n   significant changes to the rules that require a wipe. The version number should be\n   set in the source code, and not passed on the command line.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "shakeVersion",
          "package": "shake",
          "signature": "String",
          "source": "src/Development-Shake-Types.html#ShakeOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults to The version number of your build rules Change the version number to force complete rebuild such as when making significant changes to the rules that require wipe The version number should be set in the source code and not passed on the command line",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "shakeVersion",
          "package": "shake",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:shakeVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated:\u003c/em\u003e Please use \u003ccode\u003ecommand\u003c/code\u003e or \u003ccode\u003ecmd\u003c/code\u003e instead.\n   This function will be removed in a future version.\n\u003c/p\u003e\u003cp\u003eExecute a system command. This function will raise an error if the exit code is non-zero.\n   Before running \u003ccode\u003e\u003ca\u003esystem'\u003c/a\u003e\u003c/code\u003e make sure you \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e any required files.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "system'",
          "package": "shake",
          "signature": "FilePath -\u003e [String] -\u003e Action ()",
          "source": "src/Development-Shake-Derived.html#system%27",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use command or cmd instead This function will be removed in future version Execute system command This function will raise an error if the exit code is non-zero Before running system make sure you need any required files",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "system'",
          "normalized": "FilePath-\u003e[String]-\u003eAction()",
          "package": "shake",
          "signature": "FilePath-\u003e[String]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:system-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated:\u003c/em\u003e Please use \u003ccode\u003ecommand\u003c/code\u003e or \u003ccode\u003ecmd\u003c/code\u003e instead, with \u003ccode\u003eCwd\u003c/code\u003e.\n   This function will be removed in a future version.\n\u003c/p\u003e\u003cp\u003eExecute a system command with a specified current working directory (first argument).\n   This function will raise an error if the exit code is non-zero.\n   Before running \u003ccode\u003e\u003ca\u003esystemCwd\u003c/a\u003e\u003c/code\u003e make sure you \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e any required files.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003esystemCwd\u003c/a\u003e\u003c/code\u003e \"/usr/MyDirectory\" \"pwd\" []\n\u003c/pre\u003e",
          "module": "Development.Shake",
          "name": "systemCwd",
          "package": "shake",
          "signature": "FilePath -\u003e FilePath -\u003e [String] -\u003e Action ()",
          "source": "src/Development-Shake-Derived.html#systemCwd",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use command or cmd instead with Cwd This function will be removed in future version Execute system command with specified current working directory first argument This function will raise an error if the exit code is non-zero Before running systemCwd make sure you need any required files systemCwd usr MyDirectory pwd",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "systemCwd",
          "normalized": "FilePath-\u003eFilePath-\u003e[String]-\u003eAction()",
          "package": "shake",
          "partial": "Cwd",
          "signature": "FilePath-\u003eFilePath-\u003e[String]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:systemCwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated:\u003c/em\u003e Please use \u003ccode\u003ecommand\u003c/code\u003e or \u003ccode\u003ecmd\u003c/code\u003e instead, with \u003ccode\u003eStdout\u003c/code\u003e or \u003ccode\u003eStderr\u003c/code\u003e.\n   This function will be removed in a future version.\n\u003c/p\u003e\u003cp\u003eExecute a system command, returning \u003ccode\u003e(stdout,stderr)\u003c/code\u003e.\n   This function will raise an error if the exit code is non-zero.\n   Before running \u003ccode\u003e\u003ca\u003esystemOutput\u003c/a\u003e\u003c/code\u003e make sure you \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e any required files.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "systemOutput",
          "package": "shake",
          "signature": "FilePath -\u003e [String] -\u003e Action (String, String)",
          "source": "src/Development-Shake-Derived.html#systemOutput",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use command or cmd instead with Stdout or Stderr This function will be removed in future version Execute system command returning stdout stderr This function will raise an error if the exit code is non-zero Before running systemOutput make sure you need any required files",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "systemOutput",
          "normalized": "FilePath-\u003e[String]-\u003eAction(String,String)",
          "package": "shake",
          "partial": "Output",
          "signature": "FilePath-\u003e[String]-\u003eAction(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:systemOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime spent building \u003ccode\u003e\u003ca\u003ecountBuilt\u003c/a\u003e\u003c/code\u003e rules.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "timeBuilt",
          "package": "shake",
          "signature": "Double",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Time spent building countBuilt rules",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "timeBuilt",
          "package": "shake",
          "partial": "Built",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:timeBuilt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime spent building \u003ccode\u003e\u003ca\u003ecountSkipped\u003c/a\u003e\u003c/code\u003e rules in previous runs.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "timeSkipped",
          "package": "shake",
          "signature": "Double",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Time spent building countSkipped rules in previous runs",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "timeSkipped",
          "package": "shake",
          "partial": "Skipped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:timeSkipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime spent building \u003ccode\u003e\u003ca\u003ecountTodo\u003c/a\u003e\u003c/code\u003e rules in previous runs, plus the number which have no known time (have never been built before).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "timeTodo",
          "package": "shake",
          "signature": "(Double, Int)",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Time spent building countTodo rules in previous runs plus the number which have no known time have never been built before",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "timeTodo",
          "normalized": "(Double,Int)",
          "package": "shake",
          "partial": "Todo",
          "signature": "(Double,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:timeTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime spent building \u003ccode\u003e\u003ca\u003ecountUnknown\u003c/a\u003e\u003c/code\u003e rules in previous runs.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "timeUnknown",
          "package": "shake",
          "signature": "Double",
          "source": "src/Development-Shake-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Time spent building countUnknown rules in previous runs",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "timeUnknown",
          "package": "shake",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:timeUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an action to the trace list, along with the start/end time of running the IO action.\n   The \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e functions automatically call \u003ccode\u003e\u003ca\u003etraced\u003c/a\u003e\u003c/code\u003e.\n   The trace list is used for profile reports (see \u003ccode\u003e\u003ca\u003eshakeReport\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "traced",
          "package": "shake",
          "signature": "String -\u003e IO a -\u003e Action a",
          "source": "src/Development-Shake-Core.html#traced",
          "type": "function"
        },
        "index": {
          "description": "Write an action to the trace list along with the start end time of running the IO action The cmd and command functions automatically call traced The trace list is used for profile reports see shakeReport",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "traced",
          "normalized": "String-\u003eIO a-\u003eAction a",
          "package": "shake",
          "signature": "String-\u003eIO a-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow accessing a file in this rule, ignoring any 'trackRead'\\/'trackWrite' calls matching\n   the pattern.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "trackAllow",
          "package": "shake",
          "signature": "[FilePattern] -\u003e Action ()",
          "source": "src/Development-Shake-Rules-File.html#trackAllow",
          "type": "function"
        },
        "index": {
          "description": "Allow accessing file in this rule ignoring any trackRead trackWrite calls matching the pattern",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "trackAllow",
          "normalized": "[FilePattern]-\u003eAction()",
          "package": "shake",
          "partial": "Allow",
          "signature": "[FilePattern]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:trackAllow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack that a file was read by the action preceeding it. If \u003ccode\u003e\u003ca\u003eshakeLint\u003c/a\u003e\u003c/code\u003e is activated\n   then these files must be dependencies of this rule. Calls to \u003ccode\u003e\u003ca\u003etrackRead\u003c/a\u003e\u003c/code\u003e are\n   automatically inserted in \u003ccode\u003e\u003ca\u003eLintTracker\u003c/a\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "trackRead",
          "package": "shake",
          "signature": "[FilePath] -\u003e Action ()",
          "source": "src/Development-Shake-Rules-File.html#trackRead",
          "type": "function"
        },
        "index": {
          "description": "Track that file was read by the action preceeding it If shakeLint is activated then these files must be dependencies of this rule Calls to trackRead are automatically inserted in LintTracker mode",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "trackRead",
          "normalized": "[FilePath]-\u003eAction()",
          "package": "shake",
          "partial": "Read",
          "signature": "[FilePath]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:trackRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack that a file was written by the action preceeding it. If \u003ccode\u003e\u003ca\u003eshakeLint\u003c/a\u003e\u003c/code\u003e is activated\n   then these files must either be the target of this rule, or never referred to by the build system.\n   Calls to \u003ccode\u003e\u003ca\u003etrackWrite\u003c/a\u003e\u003c/code\u003e are automatically inserted in \u003ccode\u003e\u003ca\u003eLintTracker\u003c/a\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "trackWrite",
          "package": "shake",
          "signature": "[FilePath] -\u003e Action ()",
          "source": "src/Development-Shake-Rules-File.html#trackWrite",
          "type": "function"
        },
        "index": {
          "description": "Track that file was written by the action preceeding it If shakeLint is activated then these files must either be the target of this rule or never referred to by the build system Calls to trackWrite are automatically inserted in LintTracker mode",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "trackWrite",
          "normalized": "[FilePath]-\u003eAction()",
          "package": "shake",
          "partial": "Write",
          "signature": "[FilePath]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:trackWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action without counting to the thread limit, typically used for actions that execute\n   on remote machines using barely any local CPU resources. Unsafe as it allows the \u003ccode\u003e\u003ca\u003eshakeThreads\u003c/a\u003e\u003c/code\u003e limit to be exceeded.\n   You cannot depend on a rule (e.g. \u003ccode\u003eneed\u003c/code\u003e) while the extra thread is executing.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "unsafeExtraThread",
          "package": "shake",
          "signature": "Action a -\u003e Action a",
          "source": "src/Development-Shake-Core.html#unsafeExtraThread",
          "type": "function"
        },
        "index": {
          "description": "Run an action without counting to the thread limit typically used for actions that execute on remote machines using barely any local CPU resources Unsafe as it allows the shakeThreads limit to be exceeded You cannot depend on rule e.g need while the extra thread is executing",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "unsafeExtraThread",
          "normalized": "Action a-\u003eAction a",
          "package": "shake",
          "partial": "Extra Thread",
          "signature": "Action a-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:unsafeExtraThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire that the argument files are built by the rules, used to specify the target.\n\u003c/p\u003e\u003cpre\u003e\n main = \u003ccode\u003e\u003ca\u003eshake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshakeOptions\u003c/a\u003e\u003c/code\u003e $ do\n    \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e [\"Main.exe\"]\n    ...\n\u003c/pre\u003e\u003cp\u003eThis program will build \u003ccode\u003eMain.exe\u003c/code\u003e, given sufficient rules. All arguments to all \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e calls\n   may be built in parallel, in any order.\n\u003c/p\u003e\u003cp\u003eThis function is defined in terms of \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e, use \u003ccode\u003e\u003ca\u003eaction\u003c/a\u003e\u003c/code\u003e if you need more complex\n   targets than \u003ccode\u003e\u003ca\u003ewant\u003c/a\u003e\u003c/code\u003e allows.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "want",
          "package": "shake",
          "signature": "[FilePath] -\u003e Rules ()",
          "source": "src/Development-Shake-Rules-File.html#want",
          "type": "function"
        },
        "index": {
          "description": "Require that the argument files are built by the rules used to specify the target main shake shakeOptions do want Main.exe This program will build Main.exe given sufficient rules All arguments to all want calls may be built in parallel in any order This function is defined in terms of action and need use action if you need more complex targets than want allows",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "want",
          "normalized": "[FilePath]-\u003eRules()",
          "package": "shake",
          "signature": "[FilePath]-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:want"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action which uses part of a finite resource. For more details see \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e.\n   You cannot depend on a rule (e.g. \u003ccode\u003eneed\u003c/code\u003e) while a resource is held.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "withResource",
          "package": "shake",
          "signature": "Resource -\u003e Int -\u003e Action a -\u003e Action a",
          "source": "src/Development-Shake-Core.html#withResource",
          "type": "function"
        },
        "index": {
          "description": "Run an action which uses part of finite resource For more details see Resource You cannot depend on rule e.g need while resource is held",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "withResource",
          "normalized": "Resource-\u003eInt-\u003eAction a-\u003eAction a",
          "package": "shake",
          "partial": "Resource",
          "signature": "Resource-\u003eInt-\u003eAction a-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:withResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action which uses part of several finite resources. Acquires the resources in a stable\n   order, to prevent deadlock. If all rules requiring more than one resource acquire those\n   resources with a single call to \u003ccode\u003e\u003ca\u003ewithResources\u003c/a\u003e\u003c/code\u003e, resources will not deadlock.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "withResources",
          "package": "shake",
          "signature": "[(Resource, Int)] -\u003e Action a -\u003e Action a",
          "source": "src/Development-Shake-Core.html#withResources",
          "type": "function"
        },
        "index": {
          "description": "Run an action which uses part of several finite resources Acquires the resources in stable order to prevent deadlock If all rules requiring more than one resource acquire those resources with single call to withResources resources will not deadlock",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "withResources",
          "normalized": "[(Resource,Int)]-\u003eAction a-\u003eAction a",
          "package": "shake",
          "partial": "Resources",
          "signature": "[(Resource,Int)]-\u003eAction a-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:withResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action with a particular verbosity level.\n   Will not update the \u003ccode\u003e\u003ca\u003eshakeVerbosity\u003c/a\u003e\u003c/code\u003e returned by \u003ccode\u003e\u003ca\u003egetShakeOptions\u003c/a\u003e\u003c/code\u003e and will\n   not have any impact on \u003ccode\u003e\u003ca\u003eDiagnostic\u003c/a\u003e\u003c/code\u003e tracing.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "withVerbosity",
          "package": "shake",
          "signature": "Verbosity -\u003e Action a -\u003e Action a",
          "source": "src/Development-Shake-Core.html#withVerbosity",
          "type": "function"
        },
        "index": {
          "description": "Run an action with particular verbosity level Will not update the shakeVerbosity returned by getShakeOptions and will not have any impact on Diagnostic tracing",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "withVerbosity",
          "normalized": "Verbosity-\u003eAction a-\u003eAction a",
          "package": "shake",
          "partial": "Verbosity",
          "signature": "Verbosity-\u003eAction a-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:withVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all actions specified in a set of rules, usually used for implementing\n   command line specification of what to build.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "withoutActions",
          "package": "shake",
          "signature": "Rules () -\u003e Rules ()",
          "source": "src/Development-Shake-Core.html#withoutActions",
          "type": "function"
        },
        "index": {
          "description": "Remove all actions specified in set of rules usually used for implementing command line specification of what to build",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "withoutActions",
          "normalized": "Rules()-\u003eRules()",
          "package": "shake",
          "partial": "Actions",
          "signature": "Rules()-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:withoutActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a file, lifted to the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "writeFile'",
          "package": "shake",
          "signature": "FilePath -\u003e String -\u003e Action ()",
          "source": "src/Development-Shake-Derived.html#writeFile%27",
          "type": "function"
        },
        "index": {
          "description": "Write file lifted to the Action monad",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "writeFile'",
          "normalized": "FilePath-\u003eString-\u003eAction()",
          "package": "shake",
          "partial": "File'",
          "signature": "FilePath-\u003eString-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:writeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a file, but only if the contents would change.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "writeFileChanged",
          "package": "shake",
          "signature": "FilePath -\u003e String -\u003e Action ()",
          "source": "src/Development-Shake-Derived.html#writeFileChanged",
          "type": "function"
        },
        "index": {
          "description": "Write file but only if the contents would change",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "writeFileChanged",
          "normalized": "FilePath-\u003eString-\u003eAction()",
          "package": "shake",
          "partial": "File Changed",
          "signature": "FilePath-\u003eString-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:writeFileChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewriteFile'\u003c/a\u003e\u003c/code\u003e which writes out a list of lines.\n\u003c/p\u003e",
          "module": "Development.Shake",
          "name": "writeFileLines",
          "package": "shake",
          "signature": "FilePath -\u003e [String] -\u003e Action ()",
          "source": "src/Development-Shake-Derived.html#writeFileLines",
          "type": "function"
        },
        "index": {
          "description": "version of writeFile which writes out list of lines",
          "hierarchy": "Development Shake",
          "module": "Development.Shake",
          "name": "writeFileLines",
          "normalized": "FilePath-\u003e[String]-\u003eAction()",
          "package": "shake",
          "partial": "File Lines",
          "signature": "FilePath-\u003e[String]-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake/docs/Development-Shake.html#v:writeFileLines"
      }
    }
  ]
]