[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEntiry based records. To use this module, you have to write\n LANGUGAGE pragma\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TypeFamilies,TypeOperators,FlexibleContexts #-}\n\u003c/pre\u003e\u003cp\u003eOr OPTIONS_GHC pragma if you are lazy.\n\u003c/p\u003e\u003cpre\u003e {-# OPTIONS_GHC -fglasgow-exts #-}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "module",
        "fct-source": "src/Data-Has.html",
        "fct-type": "module",
        "title": "Has"
      },
      "index": {
        "description": "Entiry based records To use this module you have to write LANGUGAGE pragma LANGUAGE TypeFamilies TypeOperators FlexibleContexts Or OPTIONS GHC pragma if you are lazy OPTIONS GHC fglasgow-exts",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "Has",
        "normalized": "",
        "package": "has",
        "partial": "Has",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t::-38-:",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents concatenated rows or records.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": ":&:",
        "fct-type": "function",
        "title": ":&:"
      },
      "index": {
        "description": "Represents concatenated rows or records",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": ":&:",
        "normalized": "",
        "package": "has",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t::-62-",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents labelled field.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "type",
        "fct-source": "src/Data-Has.html#%3A%3E",
        "fct-type": "type",
        "title": ":\u003e"
      },
      "index": {
        "description": "Represents labelled field",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": ":\u003e",
        "normalized": "",
        "package": "has",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t::::",
      "description": {
        "fct-descr": "\u003cp\u003eCons a type onto type-list.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "data",
        "fct-source": "src/Data-Has-TypeList.html#%3A%3A%3A",
        "fct-type": "data",
        "title": ":::"
      },
      "index": {
        "description": "Cons type onto type-list",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": ":::",
        "normalized": "",
        "package": "has",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:Contains",
      "description": {
        "fct-descr": "\u003cp\u003eProvides injection and projection into type lists.\n\u003c/p\u003e\u003cp\u003eHolds \u003ccode\u003ee == prj (inj e s)\u003c/code\u003e for all \u003ccode\u003es\u003c/code\u003e and \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "class",
        "fct-source": "src/Data-Has-Engine.html#Contains",
        "fct-type": "class",
        "title": "Contains"
      },
      "index": {
        "description": "Provides injection and projection into type lists Holds prj inj for all and",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "Contains",
        "normalized": "",
        "package": "has",
        "partial": "Contains",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eField a\u003c/code\u003e is a type list which contains only one element of\n   \u003ccode\u003ea\u003c/code\u003e. And every field in the records should be this type.\n\u003c/p\u003e\u003cp\u003eIf you concatenate fields with \u003ccode\u003e(:&:)\u003c/code\u003e at type-level, \u003ccode\u003e(&)\u003c/code\u003e at\n   value-level, it becomes a record can be manipulated by functions\n   in this module.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "type",
        "fct-source": "src/Data-Has-Engine.html#Field",
        "fct-type": "type",
        "title": "Field"
      },
      "index": {
        "description": "Field is type list which contains only one element of And every field in the records should be this type If you concatenate fields with at type-level at value-level it becomes record can be manipulated by functions in this module",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "Field",
        "normalized": "",
        "package": "has",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:FieldOf",
      "description": {
        "fct-descr": "\u003cp\u003eField labelled with \u003ccode\u003ea\u003c/code\u003e, and contains \u003ccode\u003eTypeOf a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "FieldOf",
        "fct-type": "function",
        "title": "FieldOf"
      },
      "index": {
        "description": "Field labelled with and contains TypeOf",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "FieldOf",
        "normalized": "",
        "package": "has",
        "partial": "Field Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:Has",
      "description": {
        "fct-descr": "\u003cp\u003eMeaning of this constraint is \"This record \u003ccode\u003es\u003c/code\u003e has a field of\n   entity \u003ccode\u003ee\u003c/code\u003e.\" Here, I use the word \"constraint\" for class which\n   is useful on writing type signitures.\n\u003c/p\u003e\u003cp\u003eHolds \u003ccode\u003ev == (e .^ (e ^= v $ s))\u003c/code\u003e where \u003ccode\u003ee :: e; v ::\n   TypeOf e; s :: s\u003c/code\u003e for all \u003ccode\u003ee\u003c/code\u003e with \u003ccode\u003eTypeOf e\u003c/code\u003e and \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSame as \u003ccode\u003eKnows e (TypeOf e) s\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "class",
        "fct-source": "src/Data-Has.html#Has",
        "fct-type": "class",
        "title": "Has"
      },
      "index": {
        "description": "Meaning of this constraint is This record has field of entity Here use the word constraint for class which is useful on writing type signitures Holds where TypeOf for all with TypeOf and Same as Knows TypeOf",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "Has",
        "normalized": "",
        "package": "has",
        "partial": "Has",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:Knows",
      "description": {
        "fct-descr": "\u003cp\u003eInjects and projects a value of \u003ccode\u003ev\u003c/code\u003e  a corresponding field\n   in records \u003ccode\u003ea\u003c/code\u003e along entity \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHolds \u003ccode\u003ev == prjl e (injl e v r)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "class",
        "fct-source": "src/Data-Has.html#Knows",
        "fct-type": "class",
        "title": "Knows"
      },
      "index": {
        "description": "Injects and projects value of corresponding field in records along entity Holds prjl injl",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "Knows",
        "normalized": "",
        "package": "has",
        "partial": "Knows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:Labelled",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents labelled value.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "data",
        "fct-source": "src/Data-Has.html#Labelled",
        "fct-type": "data",
        "title": "Labelled"
      },
      "index": {
        "description": "Represents labelled value",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "Labelled",
        "normalized": "",
        "package": "has",
        "partial": "Labelled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:TyNil",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty type-list.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "data",
        "fct-source": "src/Data-Has-TypeList.html#TyNil",
        "fct-type": "data",
        "title": "TyNil"
      },
      "index": {
        "description": "The empty type-list",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "TyNil",
        "normalized": "",
        "package": "has",
        "partial": "Ty Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#t:TypeOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTypeOf a\u003c/code\u003e should indicate a type labelled by \u003ccode\u003ea\u003c/code\u003e. When defining\n   entities, declare instance of this family. If you want \u003ccode\u003eFoo\u003c/code\u003e\n   entity points to \u003ccode\u003eInt\u003c/code\u003e, you write\n\u003c/p\u003e\u003cpre\u003e data Foo = Foo; type instance TypeOf Foo = Int\n\u003c/pre\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "TypeOf",
        "fct-type": "function",
        "title": "TypeOf"
      },
      "index": {
        "description": "TypeOf should indicate type labelled by When defining entities declare instance of this family If you want Foo entity points to Int you write data Foo Foo type instance TypeOf Foo Int",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "TypeOf",
        "normalized": "",
        "package": "has",
        "partial": "Type Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenates between \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003es or records. Records are\n   concatenated rows. For example, Following expressions are\n   valid.\n\u003c/p\u003e\u003cpre\u003e -- Concatenation of rows (i.e. record)\n field \"string\" & field True\n\u003c/pre\u003e\u003cpre\u003e -- Concatenation of records\n (field 'c' & field ()) & (field False & field \"string\")\n\u003c/pre\u003e\u003cpre\u003e -- ... And concatenations between a field and a record\n field () & (field False & field \"string\")\n (field 'c' & field ()) & field False\n\u003c/pre\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "a -\u003e b -\u003e a :&: b",
        "fct-source": "src/Data-Has-Engine.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "Concatenates between Field or records Records are concatenated rows For example Following expressions are valid Concatenation of rows i.e record field string field True Concatenation of records field field field False field string And concatenations between field and record field field False field string field field field False",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "(&) &",
        "normalized": "a-\u003eb-\u003ea b",
        "package": "has",
        "partial": "",
        "signature": "a-\u003eb-\u003ea b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:-94--45-",
      "description": {
        "fct-descr": "\u003cp\u003eCreates field of \u003ccode\u003ee\u003c/code\u003e with given value \u003ccode\u003eTypeOf e\u003c/code\u003e.\n   Stealed from Chris Done's blog post: \u003ca\u003ehttp://chrisdone.com/posts/2010-11-22-duck-typing-in-haskell.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "e -\u003e TypeOf e -\u003e FieldOf e",
        "fct-source": "src/Data-Has.html#%5E-",
        "fct-type": "function",
        "title": "(^-)"
      },
      "index": {
        "description": "Creates field of with given value TypeOf Stealed from Chris Done blog post http chrisdone.com posts duck-typing-in-haskell.html",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "(^-) ^-",
        "normalized": "a-\u003eTypeOf a-\u003eFieldOf a",
        "package": "has",
        "partial": "",
        "signature": "e-\u003eTypeOf e-\u003eFieldOf e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:-94--61-",
      "description": {
        "fct-descr": "\u003cp\u003eWrites field of \u003ccode\u003ee\u003c/code\u003e in \u003ccode\u003er\u003c/code\u003e with \u003ccode\u003eTypeOf e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "e -\u003e TypeOf e -\u003e r -\u003e r",
        "fct-source": "src/Data-Has.html#%5E%3D",
        "fct-type": "function",
        "title": "(^=)"
      },
      "index": {
        "description": "Writes field of in with TypeOf",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "(^=) ^=",
        "normalized": "a-\u003eTypeOf a-\u003eb-\u003eb",
        "package": "has",
        "partial": "",
        "signature": "e-\u003eTypeOf e-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:-94-.",
      "description": {
        "fct-descr": "\u003cp\u003eReads \u003ccode\u003eTypeOf e\u003c/code\u003e from field of \u003ccode\u003ee\u003c/code\u003e in \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "e -\u003e r -\u003e TypeOf e",
        "fct-source": "src/Data-Has.html#%5E.",
        "fct-type": "function",
        "title": "(^.)"
      },
      "index": {
        "description": "Reads TypeOf from field of in",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "(^.) ^.",
        "normalized": "a-\u003eb-\u003eTypeOf a",
        "package": "has",
        "partial": "",
        "signature": "e-\u003er-\u003eTypeOf e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:-94-:",
      "description": {
        "fct-descr": "\u003cp\u003eModifies field of \u003ccode\u003ee\u003c/code\u003e in \u003ccode\u003er\u003c/code\u003e with given function \u003ccode\u003eTypeOf e -\u003e\n | TypeOf e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "e -\u003e (TypeOf e -\u003e TypeOf e) -\u003e r -\u003e r",
        "fct-source": "src/Data-Has.html#%5E%3A",
        "fct-type": "function",
        "title": "(^:)"
      },
      "index": {
        "description": "Modifies field of in with given function TypeOf TypeOf",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "(^:) ^:",
        "normalized": "a-\u003e(TypeOf a-\u003eTypeOf a)-\u003eb-\u003eb",
        "package": "has",
        "partial": "",
        "signature": "e-\u003e(TypeOf e-\u003eTypeOf e)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a labelled field.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "lab -\u003e a -\u003e lab :\u003e a",
        "fct-source": "src/Data-Has.html#.%3E",
        "fct-type": "function",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "Makes labelled field",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "(.\u003e) .\u003e",
        "normalized": "a-\u003eb-\u003ea b",
        "package": "has",
        "partial": "",
        "signature": "lab-\u003ea-\u003elab a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:field",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "a -\u003e Field a",
        "fct-source": "src/Data-Has-Engine.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "Creates Field of",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "field",
        "normalized": "a-\u003eField a",
        "package": "has",
        "partial": "",
        "signature": "a-\u003eField a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:fieldOf",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a field labelled by \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "TypeOf a -\u003e FieldOf a",
        "fct-source": "src/Data-Has.html#fieldOf",
        "fct-type": "function",
        "title": "fieldOf"
      },
      "index": {
        "description": "Creates field labelled by",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "fieldOf",
        "normalized": "TypeOf a-\u003eFieldOf a",
        "package": "has",
        "partial": "Of",
        "signature": "TypeOf a-\u003eFieldOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:injl",
      "description": {
        "fct-descr": "\u003cp\u003eInjects a value \u003ccode\u003ev\u003c/code\u003e into record \u003ccode\u003ea\u003c/code\u003e along \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "e -\u003e v -\u003e r -\u003e r",
        "fct-source": "src/Data-Has.html#injl",
        "fct-type": "method",
        "title": "injl"
      },
      "index": {
        "description": "Injects value into record along",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "injl",
        "normalized": "a-\u003eb-\u003ec-\u003ec",
        "package": "has",
        "partial": "",
        "signature": "e-\u003ev-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:prjl",
      "description": {
        "fct-descr": "\u003cp\u003eProjects a value \u003ccode\u003ev\u003c/code\u003e into record \u003ccode\u003ea\u003c/code\u003e along \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "e -\u003e r -\u003e v",
        "fct-source": "src/Data-Has.html#prjl",
        "fct-type": "method",
        "title": "prjl"
      },
      "index": {
        "description": "Projects value into record along",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "prjl",
        "normalized": "a-\u003eb-\u003ec",
        "package": "has",
        "partial": "",
        "signature": "e-\u003er-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/has/docs/Data-Has.html#v:updl",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates a value of \u003ccode\u003ev\u003c/code\u003e in a record \u003ccode\u003er\u003c/code\u003e using function of \u003ccode\u003ev -\u003e v\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Has",
        "fct-package": "has",
        "fct-signature": "e -\u003e (v -\u003e v) -\u003e r -\u003e r",
        "fct-source": "src/Data-Has.html#updl",
        "fct-type": "function",
        "title": "updl"
      },
      "index": {
        "description": "Updates value of in record using function of",
        "hierarchy": "Data Has",
        "module": "Data.Has",
        "name": "updl",
        "normalized": "a-\u003e(b-\u003eb)-\u003ec-\u003ec",
        "package": "has",
        "partial": "",
        "signature": "e-\u003e(v-\u003ev)-\u003er-\u003er"
      }
    }
  }
]