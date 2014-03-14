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
        "word": "ChristmasTree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule used internally by the \u003ca\u003eDerive\u003c/a\u003e module for binding group calculation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "BindingGroup",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Derive-BindingGroup.html",
          "type": "module"
        },
        "index": {
          "description": "Module used internally by the Derive module for binding group calculation",
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "BindingGroup",
          "package": "ChristmasTree",
          "partial": "Binding Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from types to the list of types (with specific constructor instantiations, the '[[Type]]') in the same binding group.\n\u003c/p\u003e",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "BindingGroup",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Derive-BindingGroup.html#BindingGroup",
          "type": "type"
        },
        "index": {
          "description": "Mapping from types to the list of types with specific constructor instantiations the Type in the same binding group",
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "BindingGroup",
          "package": "ChristmasTree",
          "partial": "Binding Group",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#t:BindingGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform representation of 'data' and 'newtype'\n\u003c/p\u003e",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "UserType",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Derive-BindingGroup.html#UserType",
          "type": "data"
        },
        "index": {
          "description": "Uniform representation of data and newtype",
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "UserType",
          "package": "ChristmasTree",
          "partial": "User Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#t:UserType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "UserD",
          "package": "ChristmasTree",
          "signature": "UserD Name [Name] [Con]",
          "source": "src/Text-GRead-Derive-BindingGroup.html#UserType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "UserD",
          "normalized": "UserD Name[Name][Con]",
          "package": "ChristmasTree",
          "partial": "User",
          "signature": "UserD Name[Name][Con]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#v:UserD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind cyclic type dependencies (binding groups)\n\u003c/p\u003e",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "getBindingGroup",
          "package": "ChristmasTree",
          "signature": "Name -\u003e Q BindingGroup",
          "source": "src/Text-GRead-Derive-BindingGroup.html#getBindingGroup",
          "type": "function"
        },
        "index": {
          "description": "Find cyclic type dependencies binding groups",
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "getBindingGroup",
          "normalized": "Name-\u003eQ BindingGroup",
          "package": "ChristmasTree",
          "partial": "Binding Group",
          "signature": "Name-\u003eQ BindingGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#v:getBindingGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a unified type for 'data' and 'newtype'\n\u003c/p\u003e",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "getUserType",
          "package": "ChristmasTree",
          "signature": "Name -\u003e Q UserType",
          "source": "src/Text-GRead-Derive-BindingGroup.html#getUserType",
          "type": "function"
        },
        "index": {
          "description": "Get unified type for data and newtype",
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "getUserType",
          "normalized": "Name-\u003eQ UserType",
          "package": "ChristmasTree",
          "partial": "User Type",
          "signature": "Name-\u003eQ UserType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#v:getUserType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "showBindingGroup",
          "package": "ChristmasTree",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Text-GRead-Derive-BindingGroup.html#showBindingGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "showBindingGroup",
          "normalized": "Name-\u003eQ Exp",
          "package": "ChristmasTree",
          "partial": "Binding Group",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#v:showBindingGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the types of a type application\n\u003c/p\u003e",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "unrollApp",
          "package": "ChristmasTree",
          "signature": "Type -\u003e [Type]",
          "source": "src/Text-GRead-Derive-BindingGroup.html#unrollApp",
          "type": "function"
        },
        "index": {
          "description": "Get the types of type application",
          "hierarchy": "Text GRead Derive BindingGroup",
          "module": "Text.GRead.Derive.BindingGroup",
          "name": "unrollApp",
          "normalized": "Type-\u003e[Type]",
          "package": "ChristmasTree",
          "partial": "App",
          "signature": "Type-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive-BindingGroup.html#v:unrollApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatically derive \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e instances for data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote!\u003c/em\u003e This is not a complete implementation and will not work for all datatypes.\n\u003c/p\u003e\u003cp\u003eUnsupported are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Multiple type arguments\n\u003c/li\u003e\u003cli\u003e Tuple, Function, List types\n\u003c/li\u003e\u003cli\u003e All primitive types (also when used in user defined types!)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse with care.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GRead.Derive",
          "name": "Derive",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Derive.html",
          "type": "module"
        },
        "index": {
          "description": "Automatically derive Gram instances for data types Note This is not complete implementation and will not work for all datatypes Unsupported are Multiple type arguments Tuple Function List types All primitive types also when used in user defined types Use with care",
          "hierarchy": "Text GRead Derive",
          "module": "Text.GRead.Derive",
          "name": "Derive",
          "package": "ChristmasTree",
          "partial": "Derive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e instance.  This is a Template Haskell function.  Usage example:\n\u003c/p\u003e\u003cpre\u003e\ndata T1 = C1 | C2 | C3\n\n$(deriveGrammar ''T1)\n\u003c/pre\u003e",
          "module": "Text.GRead.Derive",
          "name": "deriveGrammar",
          "package": "ChristmasTree",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Text-GRead-Derive.html#deriveGrammar",
          "type": "function"
        },
        "index": {
          "description": "Derive Gram instance This is Template Haskell function Usage example data T1 C1 C2 C3 deriveGrammar T1",
          "hierarchy": "Text GRead Derive",
          "module": "Text.GRead.Derive",
          "name": "deriveGrammar",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "ChristmasTree",
          "partial": "Grammar",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive.html#v:deriveGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimpler version of \u003ccode\u003e\u003ca\u003ederiveGrammar\u003c/a\u003e\u003c/code\u003e that doesn't do binding group\n    calculations.  Use this for large types without cyclic references to other\n    types.\n\u003c/p\u003e\u003cp\u003eFor example, if you want to derive the \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eT3\u003c/code\u003e and \u003ccode\u003eT4\u003c/code\u003e\n    below, you will need the normal \u003ccode\u003e\u003ca\u003ederiveGrammar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\ndata T3 = T3 T4 | C3\ndata T4 = T4 T3 | C4\n\u003c/pre\u003e",
          "module": "Text.GRead.Derive",
          "name": "deriveSimpleGrammar",
          "package": "ChristmasTree",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Text-GRead-Derive.html#deriveSimpleGrammar",
          "type": "function"
        },
        "index": {
          "description": "Simpler version of deriveGrammar that doesn do binding group calculations Use this for large types without cyclic references to other types For example if you want to derive the Gram for T3 and T4 below you will need the normal deriveGrammar data T3 T3 T4 C3 data T4 T4 T3 C4",
          "hierarchy": "Text GRead Derive",
          "module": "Text.GRead.Derive",
          "name": "deriveSimpleGrammar",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "ChristmasTree",
          "partial": "Simple Grammar",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Derive.html#v:deriveSimpleGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentation of Data Type Grammars.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GRead.Grammar",
          "name": "Grammar",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html",
          "type": "module"
        },
        "index": {
          "description": "Representation of Data Type Grammars",
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Grammar",
          "package": "ChristmasTree",
          "partial": "Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DGram",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#DGram",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DGram",
          "package": "ChristmasTree",
          "partial": "DGram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:DGram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type describing grammatical structures of data types,\n   including information about precedences. The type \u003ccode\u003eDGrammar a\u003c/code\u003e\n   describes the grammar of the data type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.GRead.Grammar",
          "name": "DGrammar",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#DGrammar",
          "type": "data"
        },
        "index": {
          "description": "Data type describing grammatical structures of data types including information about precedences The type DGrammar describes the grammar of the data type",
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DGrammar",
          "package": "ChristmasTree",
          "partial": "DGrammar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:DGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DLNontDefs",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#DLNontDefs",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DLNontDefs",
          "package": "ChristmasTree",
          "partial": "DLNont Defs",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:DLNontDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DProd",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#DProd",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DProd",
          "package": "ChristmasTree",
          "partial": "DProd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:DProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DProductions",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#DProductions",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DProductions",
          "package": "ChristmasTree",
          "partial": "DProductions",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:DProductions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DRef",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#DRef",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DRef",
          "package": "ChristmasTree",
          "partial": "DRef",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:DRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DSymbol",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#DSymbol",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DSymbol",
          "package": "ChristmasTree",
          "partial": "DSymbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:DSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of data types with typed grammar representation. It has to be\n instantiated in order to use the function \u003ccode\u003e\u003ca\u003egread\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eInstances can be derived automatically using the functions defined\n in the module \u003ca\u003eText.GRead.Derive\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixl 5 :\u003c:\n infixr 6 :\u003e:, :*:\n \n data T1  =  T1 :\u003c: T1\n          |  T1 :\u003e: T1\n          |  C1\n \n data T2 a  =  a :*: T2 a\n            |  C2\n\u003c/pre\u003e\u003cp\u003ethe instances of \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e can be\n\u003c/p\u003e\u003cpre\u003e _0 = Zero\n _1 = Suc _0\n \n instance Gram T1 where\n  grammar = DGrammar   _0 envT1\n \n envT1 :: Env DGram ((),T1) ((),T1) \n envT1 =  consD (nonts _0) Empty \n      where\n       nonts _T1 = DLNontDefs\n        [  (  DRef (_T1, 5) \n           ,  DPS  [  dNont (_T1, 5) .#. dTerm \":\u003c:\" .#.\n                      dNont (_T1, 6) .#. dEnd infixL ]\n           )\n        ,  (  DRef (_T1, 6) \n           ,  DPS  [  dNont (_T1, 7) .#. dTerm \":\u003e:\" .#.\n                      dNont (_T1, 6) .#. dEnd infixR ] \n           ) \n        ,  (  DRef (_T1,10) \n           ,  DPS  [  dTerm \"C1\"   .#. dEnd (const C1)\n                   ,  dTerm \"(\" .#. dNont (_T1,0) .#. \n                      dTerm \")\" .#. dEnd parenT ] \n           )\n        ]\n       infixL e1 _ e2   = e2 :\u003c: e1\n       infixR e1 _ e2   = e2 :\u003e: e1 \n \n instance Gram a =\u003e Gram (T2 a) where\n  grammar = DGrammar   _0  envT2 \n \n envT2 :: (Gram a) =\u003e Env DGram  (((),a),T2 a)\n                                 (((),a),T2 a)\n envT2 =  consD (nonts  _0 _1) $ \n          consG grammar Empty\n      where\n       nonts _T2 _A = DLNontDefs\n        [  (  DRef (_T2, 6)\n           ,  DPS  [  dNont (_A,   7)  .#. dTerm \":*:\" .#. \n                      dNont (_T2,  7)  .#. dEnd infixT ] \n           )\n        ,  (  DRef (_T2,10) \n           ,  DPS  [  dTerm \"C2\"   .#. dEnd (const C2)\n                   ,  dTerm \"(\"    .#. dNont (_T2,0) .#. \n                      dTerm \")\"    .#. dEnd parenT ] \n           )\n        ]\n       infixP   e1 _ e2  = e2 :+: e1\n       infixT   e1 _ e2  = e2 :*: e1 \n\u003c/pre\u003e\u003cp\u003eIn case of mutually recursive datatypes, their definitions have\n to be tupled together into a single environment.\n\u003c/p\u003e",
          "module": "Text.GRead.Grammar",
          "name": "Gram",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#Gram",
          "type": "class"
        },
        "index": {
          "description": "Class of data types with typed grammar representation It has to be instantiated in order to use the function gread Instances can be derived automatically using the functions defined in the module Text.GRead.Derive For example given the declarations infixl infixr data T1 T1 T1 T1 T1 C1 data T2 T2 C2 the instances of Gram can be Zero Suc instance Gram T1 where grammar DGrammar envT1 envT1 Env DGram T1 T1 envT1 consD nonts Empty where nonts T1 DLNontDefs DRef T1 DPS dNont T1 dTerm dNont T1 dEnd infixL DRef T1 DPS dNont T1 dTerm dNont T1 dEnd infixR DRef T1 DPS dTerm C1 dEnd const C1 dTerm dNont T1 dTerm dEnd parenT infixL e1 e2 e2 e1 infixR e1 e2 e2 e1 instance Gram Gram T2 where grammar DGrammar envT2 envT2 Gram Env DGram T2 T2 envT2 consD nonts consG grammar Empty where nonts T2 DLNontDefs DRef T2 DPS dNont dTerm dNont T2 dEnd infixT DRef T2 DPS dTerm C2 dEnd const C2 dTerm dNont T2 dTerm dEnd parenT infixP e1 e2 e2 e1 infixT e1 e2 e2 e1 In case of mutually recursive datatypes their definitions have to be tupled together into single environment",
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Gram",
          "package": "ChristmasTree",
          "partial": "Gram",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:Gram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Grammar",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#Grammar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Grammar",
          "package": "ChristmasTree",
          "partial": "Grammar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:Grammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Prod",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#Prod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Prod",
          "package": "ChristmasTree",
          "partial": "Prod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:Prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Productions",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#Productions",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Productions",
          "package": "ChristmasTree",
          "partial": "Productions",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:Productions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Symbol",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#Symbol",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Symbol",
          "package": "ChristmasTree",
          "partial": "Symbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Token",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Grammar.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Token",
          "package": "ChristmasTree",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "(.#.)",
          "package": "ChristmasTree",
          "signature": "DSymbol b env -\u003e DProd (b -\u003e a) env -\u003e DProd a env",
          "source": "src/Text-GRead-Grammar.html#.%23.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "(.#.) .#.",
          "normalized": "DSymbol a b-\u003eDProd(a-\u003ec)b-\u003eDProd c b",
          "package": "ChristmasTree",
          "signature": "DSymbol b env-\u003eDProd(b-\u003ea)env-\u003eDProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:.-35-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "(.*.)",
          "package": "ChristmasTree",
          "signature": "Symbol b env -\u003e Prod (b -\u003e a) env -\u003e Prod a env",
          "source": "src/Text-GRead-Grammar.html#.%2A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "(.*.) .*.",
          "normalized": "Symbol a b-\u003eProd(a-\u003ec)b-\u003eProd c b",
          "package": "ChristmasTree",
          "signature": "Symbol b env-\u003eProd(b-\u003ea)env-\u003eProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Close",
          "package": "ChristmasTree",
          "signature": "Close",
          "source": "src/Text-GRead-Grammar.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Close",
          "package": "ChristmasTree",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DEnd",
          "package": "ChristmasTree",
          "signature": "a -\u003e DProd a env",
          "source": "src/Text-GRead-Grammar.html#DProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DEnd",
          "normalized": "a-\u003eDProd a b",
          "package": "ChristmasTree",
          "partial": "DEnd",
          "signature": "a-\u003eDProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DGD",
          "package": "ChristmasTree",
          "signature": "DGD (DLNontDefs a env)",
          "source": "src/Text-GRead-Grammar.html#DGram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DGD",
          "package": "ChristmasTree",
          "partial": "DGD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DGD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DGG",
          "package": "ChristmasTree",
          "signature": "DGG (DGrammar a)",
          "source": "src/Text-GRead-Grammar.html#DGram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DGG",
          "package": "ChristmasTree",
          "partial": "DGG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DGG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA grammar consists of an environment (\u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e) with the\n   defined non-terminals and a reference (\u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e) to the\n   \u003cem\u003emain non-terminal\u003c/em\u003e in the environment.\n\u003c/p\u003e",
          "module": "Text.GRead.Grammar",
          "name": "DGrammar",
          "package": "ChristmasTree",
          "signature": "forall env . DGrammar (Ref a env) (Env DGram env env)",
          "source": "src/Text-GRead-Grammar.html#DGrammar",
          "type": "function"
        },
        "index": {
          "description": "grammar consists of an environment Env with the defined non-terminals and reference Ref to the main non-terminal in the environment",
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DGrammar",
          "package": "ChristmasTree",
          "partial": "DGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DLNontDefs",
          "package": "ChristmasTree",
          "signature": "DLNontDefs [(DRef a env, DProductions a env)]",
          "source": "src/Text-GRead-Grammar.html#DLNontDefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DLNontDefs",
          "normalized": "DLNontDefs[(DRef a b,DProductions a b)]",
          "package": "ChristmasTree",
          "partial": "DLNont Defs",
          "signature": "DLNontDefs[(DRef a env,DProductions a env)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DLNontDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DNont",
          "package": "ChristmasTree",
          "signature": "DRef a env -\u003e DSymbol a env",
          "source": "src/Text-GRead-Grammar.html#DSymbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DNont",
          "normalized": "DRef a b-\u003eDSymbol a b",
          "package": "ChristmasTree",
          "partial": "DNont",
          "signature": "DRef a env-\u003eDSymbol a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DNont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DPS",
          "package": "ChristmasTree",
          "signature": "DPS",
          "source": "src/Text-GRead-Grammar.html#DProductions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DPS",
          "package": "ChristmasTree",
          "partial": "DPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DRef",
          "package": "ChristmasTree",
          "signature": "DRef (Ref a env, Int)",
          "source": "src/Text-GRead-Grammar.html#DRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DRef",
          "normalized": "DRef(Ref a b,Int)",
          "package": "ChristmasTree",
          "partial": "DRef",
          "signature": "DRef(Ref a env,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DSeq",
          "package": "ChristmasTree",
          "signature": "DSymbol b env -\u003e DProd (b -\u003e a) env -\u003e DProd a env",
          "source": "src/Text-GRead-Grammar.html#DProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DSeq",
          "normalized": "DSymbol a b-\u003eDProd(a-\u003ec)b-\u003eDProd c b",
          "package": "ChristmasTree",
          "partial": "DSeq",
          "signature": "DSymbol b env-\u003eDProd(b-\u003ea)env-\u003eDProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "DTerm",
          "package": "ChristmasTree",
          "signature": "Token -\u003e DSymbol Token env",
          "source": "src/Text-GRead-Grammar.html#DSymbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "DTerm",
          "normalized": "Token-\u003eDSymbol Token a",
          "package": "ChristmasTree",
          "partial": "DTerm",
          "signature": "Token-\u003eDSymbol Token env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:DTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "End",
          "package": "ChristmasTree",
          "signature": "a -\u003e Prod a env",
          "source": "src/Text-GRead-Grammar.html#Prod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "End",
          "normalized": "a-\u003eProd a b",
          "package": "ChristmasTree",
          "partial": "End",
          "signature": "a-\u003eProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Grammar",
          "package": "ChristmasTree",
          "signature": "forall env . Grammar (Ref a env) (Env Productions env env)",
          "source": "src/Text-GRead-Grammar.html#Grammar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Grammar",
          "package": "ChristmasTree",
          "partial": "Grammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:Grammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Keyw",
          "package": "ChristmasTree",
          "signature": "Keyw String",
          "source": "src/Text-GRead-Grammar.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Keyw",
          "package": "ChristmasTree",
          "partial": "Keyw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:Keyw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Nont",
          "package": "ChristmasTree",
          "signature": "Ref a env -\u003e Symbol a env",
          "source": "src/Text-GRead-Grammar.html#Symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Nont",
          "normalized": "Ref a b-\u003eSymbol a b",
          "package": "ChristmasTree",
          "partial": "Nont",
          "signature": "Ref a env-\u003eSymbol a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:Nont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Open",
          "package": "ChristmasTree",
          "signature": "Open",
          "source": "src/Text-GRead-Grammar.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Open",
          "package": "ChristmasTree",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "PS",
          "package": "ChristmasTree",
          "signature": "PS",
          "source": "src/Text-GRead-Grammar.html#Productions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "PS",
          "package": "ChristmasTree",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Seq",
          "package": "ChristmasTree",
          "signature": "Symbol b env -\u003e Prod (b -\u003e a) env -\u003e Prod a env",
          "source": "src/Text-GRead-Grammar.html#Prod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Seq",
          "normalized": "Symbol a b-\u003eProd(a-\u003ec)b-\u003eProd c b",
          "package": "ChristmasTree",
          "partial": "Seq",
          "signature": "Symbol b env-\u003eProd(b-\u003ea)env-\u003eProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "Term",
          "package": "ChristmasTree",
          "signature": "Token -\u003e Symbol Token env",
          "source": "src/Text-GRead-Grammar.html#Symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "Term",
          "normalized": "Token-\u003eSymbol Token a",
          "package": "ChristmasTree",
          "partial": "Term",
          "signature": "Token-\u003eSymbol Token env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "append",
          "package": "ChristmasTree",
          "signature": "(a -\u003e b -\u003e c) -\u003e Prod a env -\u003e Symbol b env -\u003e Prod c env",
          "source": "src/Text-GRead-Grammar.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "append",
          "normalized": "(a-\u003eb-\u003ec)-\u003eProd a d-\u003eSymbol b d-\u003eProd c d",
          "package": "ChristmasTree",
          "signature": "(a-\u003eb-\u003ec)-\u003eProd a env-\u003eSymbol b env-\u003eProd c env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "consD",
          "package": "ChristmasTree",
          "signature": "DLNontDefs a env -\u003e Env DGram env def' -\u003e Env DGram env (def', a)",
          "source": "src/Text-GRead-Grammar.html#consD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "consD",
          "normalized": "DLNontDefs a b-\u003eEnv DGram b c-\u003eEnv DGram b(c,a)",
          "package": "ChristmasTree",
          "signature": "DLNontDefs a env-\u003eEnv DGram env def'-\u003eEnv DGram env(def',a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:consD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "consG",
          "package": "ChristmasTree",
          "signature": "DGrammar a -\u003e Env DGram use def' -\u003e Env DGram use (def', a)",
          "source": "src/Text-GRead-Grammar.html#consG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "consG",
          "normalized": "DGrammar a-\u003eEnv DGram b c-\u003eEnv DGram b(c,a)",
          "package": "ChristmasTree",
          "signature": "DGrammar a-\u003eEnv DGram use def'-\u003eEnv DGram use(def',a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:consG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "dEnd",
          "package": "ChristmasTree",
          "signature": "a -\u003e DProd a env",
          "source": "src/Text-GRead-Grammar.html#dEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "dEnd",
          "normalized": "a-\u003eDProd a b",
          "package": "ChristmasTree",
          "partial": "End",
          "signature": "a-\u003eDProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:dEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "dNont",
          "package": "ChristmasTree",
          "signature": "(Ref a env, Int) -\u003e DSymbol a env",
          "source": "src/Text-GRead-Grammar.html#dNont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "dNont",
          "normalized": "(Ref a b,Int)-\u003eDSymbol a b",
          "package": "ChristmasTree",
          "partial": "Nont",
          "signature": "(Ref a env,Int)-\u003eDSymbol a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:dNont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "dTerm",
          "package": "ChristmasTree",
          "signature": "[Char] -\u003e DSymbol Token env",
          "source": "src/Text-GRead-Grammar.html#dTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "dTerm",
          "normalized": "[Char]-\u003eDSymbol Token a",
          "package": "ChristmasTree",
          "partial": "Term",
          "signature": "[Char]-\u003eDSymbol Token env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:dTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "ext",
          "package": "ChristmasTree",
          "signature": "Env Productions env def' -\u003e [Prod a env] -\u003e Env Productions env (def', a)",
          "source": "src/Text-GRead-Grammar.html#ext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "ext",
          "normalized": "Env Productions a b-\u003e[Prod c a]-\u003eEnv Productions a(b,c)",
          "package": "ChristmasTree",
          "signature": "Env Productions env def'-\u003e[Prod a env]-\u003eEnv Productions env(def',a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:ext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egrammar\u003c/a\u003e\u003c/code\u003e returns the grammar representation of\n   the data type.\n\u003c/p\u003e",
          "module": "Text.GRead.Grammar",
          "name": "grammar",
          "package": "ChristmasTree",
          "signature": "DGrammar a",
          "source": "src/Text-GRead-Grammar.html#grammar",
          "type": "method"
        },
        "index": {
          "description": "The function grammar returns the grammar representation of the data type",
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "grammar",
          "package": "ChristmasTree",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:grammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "matchSym",
          "package": "ChristmasTree",
          "signature": "Symbol a env -\u003e Symbol b env -\u003e Maybe (Equal a b)",
          "source": "src/Text-GRead-Grammar.html#matchSym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "matchSym",
          "normalized": "Symbol a b-\u003eSymbol c b-\u003eMaybe(Equal a c)",
          "package": "ChristmasTree",
          "partial": "Sym",
          "signature": "Symbol a env-\u003eSymbol b env-\u003eMaybe(Equal a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:matchSym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "parenT",
          "package": "ChristmasTree",
          "signature": "t -\u003e t1 -\u003e t2 -\u003e t1",
          "source": "src/Text-GRead-Grammar.html#parenT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "parenT",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "ChristmasTree",
          "signature": "t-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:parenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "unDPS",
          "package": "ChristmasTree",
          "signature": "[DProd a env]",
          "source": "src/Text-GRead-Grammar.html#DProductions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "unDPS",
          "normalized": "[DProd a b]",
          "package": "ChristmasTree",
          "partial": "DPS",
          "signature": "[DProd a env]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:unDPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Grammar",
          "name": "unPS",
          "package": "ChristmasTree",
          "signature": "[Prod a env]",
          "source": "src/Text-GRead-Grammar.html#Productions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Grammar",
          "module": "Text.GRead.Grammar",
          "name": "unPS",
          "normalized": "[Prod a b]",
          "package": "ChristmasTree",
          "partial": "PS",
          "signature": "[Prod a env]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Grammar.html#v:unPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "GramTrafo",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-GramTrafo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "GramTrafo",
          "package": "ChristmasTree",
          "partial": "Gram Trafo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "GramTrafo",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#GramTrafo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "GramTrafo",
          "package": "ChristmasTree",
          "partial": "Gram Trafo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#t:GramTrafo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "MapA_X",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#MapA_X",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "MapA_X",
          "package": "ChristmasTree",
          "partial": "Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#t:MapA_X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "Mapping",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#Mapping",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "Mapping",
          "package": "ChristmasTree",
          "partial": "Mapping",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#t:Mapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "MapA_X",
          "package": "ChristmasTree",
          "signature": "MapA_X (forall x.  Symbol x env -\u003e Maybe (Ref (x -\u003e a) env'))",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#MapA_X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "MapA_X",
          "normalized": "MapA_X(a b Symbol c d-\u003eMaybe(Ref(c-\u003ee)f))",
          "package": "ChristmasTree",
          "partial": "Map",
          "signature": "MapA_X(forall x. Symbol x env-\u003eMaybe(Ref(x-\u003ea)env'))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:MapA_X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "Mapping",
          "package": "ChristmasTree",
          "signature": "Mapping (Env Ref new old)",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#Mapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "Mapping",
          "package": "ChristmasTree",
          "partial": "Mapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:Mapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "emptyMap",
          "package": "ChristmasTree",
          "signature": "MapA_X env a env'",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#emptyMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "emptyMap",
          "package": "ChristmasTree",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:emptyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "extendMap",
          "package": "ChristmasTree",
          "signature": "Symbol x env -\u003e MapA_X env a env' -\u003e MapA_X env a (env', x -\u003e a)",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#extendMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "extendMap",
          "normalized": "Symbol a b-\u003eMapA_X b c d-\u003eMapA_X b c(d,a-\u003ec)",
          "package": "ChristmasTree",
          "partial": "Map",
          "signature": "Symbol x env-\u003eMapA_X env a env'-\u003eMapA_X env a(env',x-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:extendMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "initMap",
          "package": "ChristmasTree",
          "signature": "GramTrafo env a s c d -\u003e Trafo Unit Productions s c d",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#initMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "initMap",
          "normalized": "GramTrafo a b c d e-\u003eTrafo Unit Productions c d e",
          "package": "ChristmasTree",
          "partial": "Map",
          "signature": "GramTrafo env a s c d-\u003eTrafo Unit Productions s c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:initMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "map2trans",
          "package": "ChristmasTree",
          "signature": "Mapping env s -\u003e T env s",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#map2trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "map2trans",
          "normalized": "Mapping a b-\u003eT a b",
          "package": "ChristmasTree",
          "signature": "Mapping env s-\u003eT env s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:map2trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "mapProd",
          "package": "ChristmasTree",
          "signature": "T env1 env2 -\u003e Prod a env1 -\u003e Prod a env2",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#mapProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "mapProd",
          "normalized": "T a a-\u003eProd b a-\u003eProd b a",
          "package": "ChristmasTree",
          "partial": "Prod",
          "signature": "T env env-\u003eProd a env-\u003eProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:mapProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "newNontR",
          "package": "ChristmasTree",
          "signature": "forall x env s a.  Symbol x env -\u003e GramTrafo env a s (Productions (x -\u003e a) s) (Ref (x -\u003e a) s)",
          "source": "src/Text-GRead-Transformations-GramTrafo.html#newNontR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations GramTrafo",
          "module": "Text.GRead.Transformations.GramTrafo",
          "name": "newNontR",
          "normalized": "a b c d e Symbol b c-\u003eGramTrafo c f d(Productions(b-\u003ef)d)(Ref(b-\u003ef)d)",
          "package": "ChristmasTree",
          "partial": "Nont",
          "signature": "forall x env s a. Symbol x env-\u003eGramTrafo env a s(Productions(x-\u003ea)s)(Ref(x-\u003ea)s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-GramTrafo.html#v:newNontR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "Group",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-Group.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "Group",
          "package": "ChristmasTree",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "DMapping",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-Group.html#DMapping",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "DMapping",
          "package": "ChristmasTree",
          "partial": "DMapping",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#t:DMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "DT",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-Group.html#DT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "DT",
          "package": "ChristmasTree",
          "partial": "DT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#t:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "GTrafo",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-Group.html#GTrafo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "GTrafo",
          "package": "ChristmasTree",
          "partial": "GTrafo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#t:GTrafo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "ListDR",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-Group.html#ListDR",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "ListDR",
          "package": "ChristmasTree",
          "partial": "List DR",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#t:ListDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "DMapping",
          "package": "ChristmasTree",
          "signature": "DMapping",
          "source": "src/Text-GRead-Transformations-Group.html#DMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "DMapping",
          "package": "ChristmasTree",
          "partial": "DMapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:DMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "DT",
          "package": "ChristmasTree",
          "signature": "DT",
          "source": "src/Text-GRead-Transformations-Group.html#DT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "DT",
          "package": "ChristmasTree",
          "partial": "DT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "ListDR",
          "package": "ChristmasTree",
          "signature": "ListDR",
          "source": "src/Text-GRead-Transformations-Group.html#ListDR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "ListDR",
          "package": "ChristmasTree",
          "partial": "List DR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:ListDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "dmap2trans",
          "package": "ChristmasTree",
          "signature": "DMapping env s -\u003e DT env s",
          "source": "src/Text-GRead-Transformations-Group.html#dmap2trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "dmap2trans",
          "normalized": "DMapping a b-\u003eDT a b",
          "package": "ChristmasTree",
          "signature": "DMapping env s-\u003eDT env s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:dmap2trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "dp2prod",
          "package": "ChristmasTree",
          "signature": "DProd a env -\u003e GTrafo s (DT env s) (Prod a s)",
          "source": "src/Text-GRead-Transformations-Group.html#dp2prod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "dp2prod",
          "normalized": "DProd a b-\u003eGTrafo c(DT b c)(Prod a c)",
          "package": "ChristmasTree",
          "signature": "DProd a env-\u003eGTrafo s(DT env s)(Prod a s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:dp2prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "gDGrams",
          "package": "ChristmasTree",
          "signature": "Env DGram env env' -\u003e GTrafo s (DT env s) (DMapping env' s)",
          "source": "src/Text-GRead-Transformations-Group.html#gDGrams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "gDGrams",
          "normalized": "Env DGram a b-\u003eGTrafo c(DT a c)(DMapping b c)",
          "package": "ChristmasTree",
          "partial": "DGrams",
          "signature": "Env DGram env env'-\u003eGTrafo s(DT env s)(DMapping env' s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:gDGrams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "gGrammar",
          "package": "ChristmasTree",
          "signature": "DGrammar a -\u003e GTrafo s t (ListDR a s)",
          "source": "src/Text-GRead-Transformations-Group.html#gGrammar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "gGrammar",
          "normalized": "DGrammar a-\u003eGTrafo b c(ListDR a b)",
          "package": "ChristmasTree",
          "partial": "Grammar",
          "signature": "DGrammar a-\u003eGTrafo s t(ListDR a s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:gGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "group",
          "package": "ChristmasTree",
          "signature": "DGrammar a -\u003e Grammar a",
          "source": "src/Text-GRead-Transformations-Group.html#group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "group",
          "normalized": "DGrammar a-\u003eGrammar a",
          "package": "ChristmasTree",
          "signature": "DGrammar a-\u003eGrammar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "ld2nt",
          "package": "ChristmasTree",
          "signature": "(DRef a env, DProductions a env) -\u003e GTrafo s (DT env s) (DRef a s)",
          "source": "src/Text-GRead-Transformations-Group.html#ld2nt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "ld2nt",
          "normalized": "(DRef a b,DProductions a b)-\u003eGTrafo c(DT b c)(DRef a c)",
          "package": "ChristmasTree",
          "signature": "(DRef a env,DProductions a env)-\u003eGTrafo s(DT env s)(DRef a s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:ld2nt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "mapDP2Prod",
          "package": "ChristmasTree",
          "signature": "DT env1 env2 -\u003e DProd a env1 -\u003e Prod a env2",
          "source": "src/Text-GRead-Transformations-Group.html#mapDP2Prod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "mapDP2Prod",
          "normalized": "DT a a-\u003eDProd b a-\u003eProd b a",
          "package": "ChristmasTree",
          "partial": "DP Prod",
          "signature": "DT env env-\u003eDProd a env-\u003eProd a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:mapDP2Prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "plookup",
          "package": "ChristmasTree",
          "signature": "Int -\u003e [DRef a s] -\u003e Ref a s",
          "source": "src/Text-GRead-Transformations-Group.html#plookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "plookup",
          "normalized": "Int-\u003e[DRef a b]-\u003eRef a b",
          "package": "ChristmasTree",
          "signature": "Int-\u003e[DRef a s]-\u003eRef a s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:plookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "unDMapping",
          "package": "ChristmasTree",
          "signature": "Env ListDR n o",
          "source": "src/Text-GRead-Transformations-Group.html#DMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "unDMapping",
          "package": "ChristmasTree",
          "partial": "DMapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:unDMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "unDT",
          "package": "ChristmasTree",
          "signature": "forall a.  DRef a env1 -\u003e Ref a env2",
          "source": "src/Text-GRead-Transformations-Group.html#DT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "unDT",
          "normalized": "a b DRef c d-\u003eRef c d",
          "package": "ChristmasTree",
          "partial": "DT",
          "signature": "forall a. DRef a env-\u003eRef a env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:unDT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.Group",
          "name": "unListDR",
          "package": "ChristmasTree",
          "signature": "[DRef a s]",
          "source": "src/Text-GRead-Transformations-Group.html#ListDR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations Group",
          "module": "Text.GRead.Transformations.Group",
          "name": "unListDR",
          "normalized": "[DRef a b]",
          "package": "ChristmasTree",
          "partial": "List DR",
          "signature": "[DRef a s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-Group.html#v:unListDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.LeftCorner",
          "name": "LeftCorner",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-LeftCorner.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GRead Transformations LeftCorner",
          "module": "Text.GRead.Transformations.LeftCorner",
          "name": "LeftCorner",
          "package": "ChristmasTree",
          "partial": "Left Corner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-LeftCorner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.LeftCorner",
          "name": "leftcorner",
          "package": "ChristmasTree",
          "signature": "forall a.  Grammar a -\u003e Grammar a",
          "source": "src/Text-GRead-Transformations-LeftCorner.html#leftcorner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations LeftCorner",
          "module": "Text.GRead.Transformations.LeftCorner",
          "name": "leftcorner",
          "normalized": "a b Grammar c-\u003eGrammar c",
          "package": "ChristmasTree",
          "signature": "forall a. Grammar a-\u003eGrammar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-LeftCorner.html#v:leftcorner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.LeftFact",
          "name": "LeftFact",
          "package": "ChristmasTree",
          "source": "src/Text-GRead-Transformations-LeftFact.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GRead Transformations LeftFact",
          "module": "Text.GRead.Transformations.LeftFact",
          "name": "LeftFact",
          "package": "ChristmasTree",
          "partial": "Left Fact",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-LeftFact.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead.Transformations.LeftFact",
          "name": "leftfactoring",
          "package": "ChristmasTree",
          "signature": "forall a.  Grammar a -\u003e Grammar a",
          "source": "src/Text-GRead-Transformations-LeftFact.html#leftfactoring",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead Transformations LeftFact",
          "module": "Text.GRead.Transformations.LeftFact",
          "name": "leftfactoring",
          "normalized": "a b Grammar c-\u003eGrammar c",
          "package": "ChristmasTree",
          "signature": "forall a. Grammar a-\u003eGrammar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead-Transformations-LeftFact.html#v:leftfactoring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlternative approach of \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e that composes grammars instead \n    of parsers. Grammars describing the data types are composed\n    dynamically, removing possible left-recursion and combining\n    common prefixes of alternatives.   \n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egread\u003c/a\u003e\u003c/code\u003e defined here is able to handle the \n    associativities defined for infix operators.\n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egread\u003c/a\u003e\u003c/code\u003e reads data in linear time, while the \n    function \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e has an exponential behavior in some cases \n    of data types with infix operators.\n\u003c/p\u003e\u003cp\u003eNon uniform data types are not supported, because they\n    generate infinite grammars.\n\u003c/p\u003e\u003cp\u003eThe library is documented in the paper: \u003cem\u003eHaskell, do you read me?: constructing and composing efficient top-down parsers at runtime\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBibtex entry: \u003ca\u003ehttp://www.cs.uu.nl/wiki/bin/viewfile/Center/TTTAS?rev=1;filename=GRead.bib\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor more documentation see the TTTAS webpage: \u003ca\u003ehttp://www.cs.uu.nl/wiki/bin/view/Center/TTTAS\u003c/a\u003e .\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GRead",
          "name": "GRead",
          "package": "ChristmasTree",
          "source": "src/Text-GRead.html",
          "type": "module"
        },
        "index": {
          "description": "Alternative approach of read that composes grammars instead of parsers Grammars describing the data types are composed dynamically removing possible left-recursion and combining common prefixes of alternatives The function gread defined here is able to handle the associativities defined for infix operators The function gread reads data in linear time while the function read has an exponential behavior in some cases of data types with infix operators Non uniform data types are not supported because they generate infinite grammars The library is documented in the paper Haskell do you read me constructing and composing efficient top-down parsers at runtime Bibtex entry http www.cs.uu.nl wiki bin viewfile Center TTTAS rev filename GRead.bib For more documentation see the TTTAS webpage http www.cs.uu.nl wiki bin view Center TTTAS",
          "hierarchy": "Text GRead",
          "module": "Text.GRead",
          "name": "GRead",
          "package": "ChristmasTree",
          "partial": "GRead",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of error repair messages.\n\u003c/p\u003e",
          "module": "Text.GRead",
          "name": "GReadMsg",
          "package": "ChristmasTree",
          "source": "src/Text-GRead.html#GReadMsg",
          "type": "type"
        },
        "index": {
          "description": "Type of error repair messages",
          "hierarchy": "Text GRead",
          "module": "Text.GRead",
          "name": "GReadMsg",
          "package": "ChristmasTree",
          "partial": "GRead Msg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead.html#t:GReadMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003egread\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Text.GRead",
          "name": "GReadResult",
          "package": "ChristmasTree",
          "source": "src/Text-GRead.html#GReadResult",
          "type": "data"
        },
        "index": {
          "description": "Type of gread results",
          "hierarchy": "Text GRead",
          "module": "Text.GRead",
          "name": "GReadResult",
          "package": "ChristmasTree",
          "partial": "GRead Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead.html#t:GReadResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead",
          "name": "Ok",
          "package": "ChristmasTree",
          "signature": "Ok a",
          "source": "src/Text-GRead.html#GReadResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead",
          "module": "Text.GRead",
          "name": "Ok",
          "package": "ChristmasTree",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GRead",
          "name": "Rep",
          "package": "ChristmasTree",
          "signature": "Rep a [GReadMsg]",
          "source": "src/Text-GRead.html#GReadResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GRead",
          "module": "Text.GRead",
          "name": "Rep",
          "normalized": "Rep a[GReadMsg]",
          "package": "ChristmasTree",
          "partial": "Rep",
          "signature": "Rep a[GReadMsg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead.html#v:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egread\u003c/a\u003e\u003c/code\u003e reads input from a string, which must be \n   completely consumed by the input process.\n   Returns \u003ccode\u003eOk value\u003c/code\u003e on a successful parse.\n   Otherwise returns \u003ccode\u003eRep value msgs\u003c/code\u003e, where the \u003ccode\u003evalue\u003c/code\u003e\n   results of parsing a repaired input. The list \u003ccode\u003emsgs\u003c/code\u003e \n   contains the \"corrections\" done to the input.\n\u003c/p\u003e\u003cp\u003eFor example, a \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e-like implementation can be:\n\u003c/p\u003e\u003cpre\u003e read :: (Gram a) =\u003e String -\u003e a\n read input = case gread input of\n                  Ok  a       -\u003e a\n                  Rep _ (m:_) -\u003e error $ show m\n\u003c/pre\u003e",
          "module": "Text.GRead",
          "name": "gread",
          "package": "ChristmasTree",
          "signature": "String -\u003e GReadResult a",
          "source": "src/Text-GRead.html#gread",
          "type": "function"
        },
        "index": {
          "description": "The gread reads input from string which must be completely consumed by the input process Returns Ok value on successful parse Otherwise returns Rep value msgs where the value results of parsing repaired input The list msgs contains the corrections done to the input For example read like implementation can be read Gram String read input case gread input of Ok Rep error show",
          "hierarchy": "Text GRead",
          "module": "Text.GRead",
          "name": "gread",
          "normalized": "String-\u003eGReadResult a",
          "package": "ChristmasTree",
          "signature": "String-\u003eGReadResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GRead.html#v:gread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GShow",
          "name": "GShow",
          "package": "ChristmasTree",
          "source": "src/Text-GShow.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GShow",
          "module": "Text.GShow",
          "name": "GShow",
          "package": "ChristmasTree",
          "partial": "GShow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GShow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GShow",
          "name": "GShow",
          "package": "ChristmasTree",
          "source": "src/Text-GShow.html#GShow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GShow",
          "module": "Text.GShow",
          "name": "GShow",
          "package": "ChristmasTree",
          "partial": "GShow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GShow.html#t:GShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GShow",
          "name": "app_prec",
          "package": "ChristmasTree",
          "signature": "Int",
          "source": "src/Text-GShow.html#app_prec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GShow",
          "module": "Text.GShow",
          "name": "app_prec",
          "package": "ChristmasTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GShow.html#v:app_prec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GShow",
          "name": "deriveShow",
          "package": "ChristmasTree",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Text-GShow.html#deriveShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GShow",
          "module": "Text.GShow",
          "name": "deriveShow",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "ChristmasTree",
          "partial": "Show",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GShow.html#v:deriveShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GShow",
          "name": "gshow",
          "package": "ChristmasTree",
          "signature": "a -\u003e String",
          "source": "src/Text-GShow.html#gshow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GShow",
          "module": "Text.GShow",
          "name": "gshow",
          "normalized": "a-\u003eString",
          "package": "ChristmasTree",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GShow.html#v:gshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GShow",
          "name": "gshowsPrec",
          "package": "ChristmasTree",
          "signature": "Int -\u003e a -\u003e ShowS",
          "source": "src/Text-GShow.html#gshowsPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GShow",
          "module": "Text.GShow",
          "name": "gshowsPrec",
          "normalized": "Int-\u003ea-\u003eShowS",
          "package": "ChristmasTree",
          "partial": "Prec",
          "signature": "Int-\u003ea-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChristmasTree/docs/Text-GShow.html#v:gshowsPrec"
      }
    }
  ]
]