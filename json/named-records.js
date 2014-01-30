[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlexible records with named fields.\n\u003c/p\u003e\u003cp\u003eNamed records allow you to define und use records\nwith labeled fields. These records are first class\nobjects. Record fields are labeled by names, which\ncan basically be any type. However, the names package\nprovides global name types and some syntactic sugar\nto use them.\n\u003c/p\u003e\u003cp\u003eHere is a complete walk-through, with Template Haskell\nsyntactic sugar.\n\u003c/p\u003e\u003cp\u003eThis is how a typical example preamble looks like:\n\u003c/p\u003e\u003cpre\u003e import Data.NamedRecord\n\u003c/pre\u003e\u003cp\u003eIn order to use names you need to declare them first\n(see the \u003ccode\u003enames\u003c/code\u003e package for further details):\n\u003c/p\u003e\u003cpre\u003e name \"firstName\"\n name \"lastName\"\n\u003c/pre\u003e\u003cp\u003eThese are two records \u003ccode\u003ePerson\u003c/code\u003e and \u003ccode\u003eUser\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e record \"Person\"\n     `has` \"firstName\" := ''String\n     `has` \"lastName\"  := ''String\n\n record \"User\"\n     `has` \"firstName\" := ''String\n     `has` \"lastName\"  := ''String\n     `has` \"loginName\" := ''String\n\u003c/pre\u003e\u003cp\u003eNote that these declarations create constructor\nfunctions \u003ccode\u003enewPerson\u003c/code\u003e and \u003ccode\u003enewUser\u003c/code\u003e, as well as\ntype synonyms \u003ccode\u003ePerson\u003c/code\u003e and \u003ccode\u003eUser\u003c/code\u003e (use \u003ccode\u003e-ddump-splices\u003c/code\u003e\nto see what has been generated).\n\u003c/p\u003e\u003cp\u003eHere are two instances of these recors:\n\u003c/p\u003e\u003cpre\u003e julian = newPerson\n    `set` firstName := \"Julian\"\n    `set` lastName  := \"Fleischer\"\n\n alexander = newUser\n    `set` firstName := \"Alexander\"\n    `set` lastName  := \"Carnicero\"\n    `set` loginName := \"alexander.carnicero\"\n\u003c/pre\u003e\u003cp\u003eWe can now create a \u003ccode\u003edisplayName\u003c/code\u003e function like\nthe following:\n\u003c/p\u003e\u003cpre\u003e displayName obj =\n     (obj `get` firstName) ++ \" \" ++\n     (obj `get` lastName)\n\u003c/pre\u003e\u003cp\u003eNote that this function will accept any record\nthat has a \u003ccode\u003efirstName\u003c/code\u003e and a \u003ccode\u003elastName\u003c/code\u003e field of\ntype \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edisplayName julian\n\u003c/code\u003e\u003c/strong\u003eJulian Fleischer\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edisplayName alexander\n\u003c/code\u003e\u003c/strong\u003eAlexander Carnicero\n\u003c/pre\u003e\u003cp\u003eAs mentioned above, records are first class citizens.\nThat means you can create them anywhere:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edisplayName (firstName := \"John\" :+ lastName := \"Doe\")\n\u003c/code\u003e\u003c/strong\u003eJohn Doe\n\u003c/pre\u003e\u003cp\u003eIt is also possible to declare default values:\n\u003c/p\u003e\u003cpre\u003e name \"serverName\"\n name \"port\"\n \n record \"ServerConfig\"\n     `has` \"serverName\" := ''String := \"localhost\"\n     `has` \"port\"       := ''Int := (4711 :: Int)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enewServerConfig\n\u003c/code\u003e\u003c/strong\u003eserverName := \"localhost\" :+ port := 4711\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enewServerConfig `set` serverName := \"example.org\"\n\u003c/code\u003e\u003c/strong\u003eserverName := \"example.org\" :+ port := 4711\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enewServerConfig `get` port\n\u003c/code\u003e\u003c/strong\u003e4711\n\u003c/pre\u003e\u003cp\u003eComplex expressions and types need to be quoted using\n\u003ccode\u003e[e| expr |]\u003c/code\u003e and \u003ccode\u003e[t| type |]\u003c/code\u003e like so:\n\u003c/p\u003e\u003cpre\u003e record \"Server\"\n     `has` \"requestHandler\" := [t| Request -\u003e Response |]\n                            := [e| \\x -\u003e answer x |]\n     `has` \"config\" := ''Config := [e| newConfig |]\n\u003c/pre\u003e\u003cp\u003eIt is furthermore possible to extend existing records\n(but due to stage restrictions in GHCs implementation of\nTemplate Haskell, two records of which one extends the other\ncan not be contained in the same module):\n\u003c/p\u003e\u003cpre\u003e module Sample2 where\n \n import Data.NamedRecord\n import Data.Word\n \n record \"Account\"\n     `has` \"id\"        := ''Word64\n \n     `has` \"loginName\" := ''String\n     `has` \"password\"  := ''String\n \n record \"Person\"\n     `has` \"id\"        := ''Word64\n \n     `has` \"firstName\" := ''String\n     `has` \"lastName\"  := ''String\n\u003c/pre\u003e\u003cpre\u003e module Sample where\n \n import Data.NamedRecord\n import Data.Word\n \n import Sample2\n \n record \"User\"\n     `extends` __Person\n     `extends` __Account\n \n     `has` \"id\"           := ''Word64\n     `has` \"emailAddress\" := ''String\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "module",
        "fct-source": "src/Data-NamedRecord.html",
        "fct-type": "module",
        "title": "NamedRecord"
      },
      "index": {
        "description": "Flexible records with named fields Named records allow you to define und use records with labeled fields These records are first class objects Record fields are labeled by names which can basically be any type However the names package provides global name types and some syntactic sugar to use them Here is complete walk-through with Template Haskell syntactic sugar This is how typical example preamble looks like import Data.NamedRecord In order to use names you need to declare them first see the names package for further details name firstName name lastName These are two records Person and User record Person has firstName String has lastName String record User has firstName String has lastName String has loginName String Note that these declarations create constructor functions newPerson and newUser as well as type synonyms Person and User use ddump-splices to see what has been generated Here are two instances of these recors julian newPerson set firstName Julian set lastName Fleischer alexander newUser set firstName Alexander set lastName Carnicero set loginName alexander.carnicero We can now create displayName function like the following displayName obj obj get firstName obj get lastName Note that this function will accept any record that has firstName and lastName field of type String displayName julian Julian Fleischer displayName alexander Alexander Carnicero As mentioned above records are first class citizens That means you can create them anywhere displayName firstName John lastName Doe John Doe It is also possible to declare default values name serverName name port record ServerConfig has serverName String localhost has port Int Int newServerConfig serverName localhost port newServerConfig set serverName example.org serverName example.org port newServerConfig get port Complex expressions and types need to be quoted using expr and type like so record Server has requestHandler Request Response answer has config Config newConfig It is furthermore possible to extend existing records but due to stage restrictions in GHCs implementation of Template Haskell two records of which one extends the other can not be contained in the same module module Sample2 where import Data.NamedRecord import Data.Word record Account has id Word64 has loginName String has password String record Person has id Word64 has firstName String has lastName String module Sample where import Data.NamedRecord import Data.Word import Sample2 record User extends Person extends Account has id Word64 has emailAddress String",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "NamedRecord",
        "normalized": "",
        "package": "named-records",
        "partial": "Named Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#t::-43-",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "data",
        "fct-source": "src/Data-NamedRecord.html#%3A%2B",
        "fct-type": "data",
        "title": ":+"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": ":+",
        "normalized": "",
        "package": "named-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#t::-61-",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "data",
        "fct-source": "src/Data-NamedRecord.html#%3A%3D",
        "fct-type": "data",
        "title": ":="
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": ":=",
        "normalized": "",
        "package": "named-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#t:New",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "class",
        "fct-source": "src/Data-NamedRecord.html#New",
        "fct-type": "class",
        "title": "New"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "New",
        "normalized": "",
        "package": "named-records",
        "partial": "New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#t:Property",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "class",
        "fct-source": "src/Data-NamedRecord.html#Property",
        "fct-type": "class",
        "title": "Property"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "Property",
        "normalized": "",
        "package": "named-records",
        "partial": "Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v::-43-",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "a :+ b",
        "fct-source": "src/Data-NamedRecord.html#%3A%2B",
        "fct-type": "function",
        "title": ":+"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": ":+",
        "normalized": "",
        "package": "named-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v::-61-",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "a := b",
        "fct-source": "src/Data-NamedRecord.html#%3A%3D",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": ":=",
        "normalized": "",
        "package": "named-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:add",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "b -\u003e a -\u003e a :+ b",
        "fct-source": "src/Data-NamedRecord.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "add",
        "normalized": "a-\u003eb-\u003eb a",
        "package": "named-records",
        "partial": "",
        "signature": "b-\u003ea-\u003ea b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:extends",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "Record -\u003e a -\u003e Record",
        "fct-source": "src/Data-NamedRecord.html#extends",
        "fct-type": "function",
        "title": "extends"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "extends",
        "normalized": "Record-\u003ea-\u003eRecord",
        "package": "named-records",
        "partial": "",
        "signature": "Record-\u003ea-\u003eRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:get",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "o -\u003e n -\u003e v",
        "fct-source": "src/Data-NamedRecord.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "get",
        "normalized": "a-\u003eb-\u003ec",
        "package": "named-records",
        "partial": "",
        "signature": "o-\u003en-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:has",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-NamedRecord.html#has",
        "fct-type": "function",
        "title": "has"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "has",
        "normalized": "a-\u003eb-\u003ec",
        "package": "named-records",
        "partial": "",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:name",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "String -\u003e Q [Dec]",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "name",
        "normalized": "String-\u003eQ[Dec]",
        "package": "named-records",
        "partial": "",
        "signature": "String-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:nameT",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "String -\u003e Q Type",
        "fct-type": "function",
        "title": "nameT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "nameT",
        "normalized": "String-\u003eQ Type",
        "package": "named-records",
        "partial": "",
        "signature": "String-\u003eQ Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:nameV",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "String -\u003e Q Exp",
        "fct-type": "function",
        "title": "nameV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "nameV",
        "normalized": "String-\u003eQ Exp",
        "package": "named-records",
        "partial": "",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:names",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "names"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "names",
        "normalized": "",
        "package": "named-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:new",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "o",
        "fct-source": "src/Data-NamedRecord.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "new",
        "normalized": "",
        "package": "named-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:record",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "String -\u003e Record",
        "fct-source": "src/Data-NamedRecord.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "record",
        "normalized": "String-\u003eRecord",
        "package": "named-records",
        "partial": "",
        "signature": "String-\u003eRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:record-39-",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "String -\u003e Record",
        "fct-source": "src/Data-NamedRecord.html#record%27",
        "fct-type": "function",
        "title": "record'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "record'",
        "normalized": "String-\u003eRecord",
        "package": "named-records",
        "partial": "",
        "signature": "String-\u003eRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:set",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "o -\u003e (n := v) -\u003e o",
        "fct-source": "src/Data-NamedRecord.html#set",
        "fct-type": "method",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "set",
        "normalized": "a-\u003e(b c)-\u003ea",
        "package": "named-records",
        "partial": "",
        "signature": "o-\u003e(n v)-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-records/docs/Data-NamedRecord.html#v:upd",
      "description": {
        "fct-module": "Data.NamedRecord",
        "fct-package": "named-records",
        "fct-signature": "o -\u003e (n := (v -\u003e v)) -\u003e o",
        "fct-source": "src/Data-NamedRecord.html#upd",
        "fct-type": "method",
        "title": "upd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NamedRecord",
        "module": "Data.NamedRecord",
        "name": "upd",
        "normalized": "a-\u003e(b(c-\u003ec))-\u003ea",
        "package": "named-records",
        "partial": "",
        "signature": "o-\u003e(n(v-\u003ev))-\u003eo"
      }
    }
  }
]