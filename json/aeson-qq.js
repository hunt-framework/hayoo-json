[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-qq/docs/Data-Aeson-QQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package expose the function \u003ccode\u003eaesonQQ\u003c/code\u003e that compile time converts json code into a \u003ccode\u003eData.Aeson.Value\u003c/code\u003e.\n    \u003ccode\u003eaesonQQ\u003c/code\u003e got the signature\n\u003c/p\u003e\u003cpre\u003e aesonQQ :: QuasiQuoter\n\u003c/pre\u003e\u003cp\u003eand is used like\n\u003c/p\u003e\u003cpre\u003e myCode = [aesonQQ| {age: 23, name: \"Pelle\", likes: [\"mac\",\"Haskell\"] } |]\n\u003c/pre\u003e\u003cp\u003ewhere it is important that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e you got no space in \u003ccode\u003e[aesonQQ|\u003c/code\u003e and\n\u003c/li\u003e\u003cli\u003e no additional code after \u003ccode\u003e|]\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe quasiquatation can also bind to variables like\n\u003c/p\u003e\u003cpre\u003e myCode = [aesonQQ| {age: \u003c|age|\u003e, name: \u003c|name|\u003e} |]\n where age = 34 :: Integer\n       name = \"Pelle\"\n\u003c/pre\u003e\u003cp\u003ewhere the function  \u003ccode\u003etoJSON\u003c/code\u003e will be called on \u003ccode\u003eage\u003c/code\u003e and \u003ccode\u003ename\u003c/code\u003e runtime.\n\u003c/p\u003e\u003cp\u003eYou can also insert Haskell code: \n\u003c/p\u003e\u003cpre\u003e myCode = [aesonQQ| {age: \u003c|age + 34 :: Integer|\u003e, name: \u003c|map toUpper name|\u003e} |]\n where age = 34 :: Integer\n       name = \"Pelle\"\n\u003c/pre\u003e\u003cp\u003eYou can use a similar syntax if you want to insert a value of type Data.Aeson.Value like\n\u003c/p\u003e\u003cpre\u003e myCode = [aesonQQ| {\"age\": \u003c\u003cage\u003e\u003e} |]\n\u003c/pre\u003e\u003cp\u003eIf you want to replace the name of the key in a hash you'll use the $-syntax:\n\u003c/p\u003e\u003cpre\u003e foo = [aesonQQ| {$bar: 42} |]\n bar = \"age\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson.QQ",
        "fct-package": "aeson-qq",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-QQ.html",
        "fct-type": "module",
        "title": "QQ"
      },
      "index": {
        "description": "This package expose the function aesonQQ that compile time converts json code into Data.Aeson.Value aesonQQ got the signature aesonQQ QuasiQuoter and is used like myCode aesonQQ age name Pelle likes mac Haskell where it is important that you got no space in aesonQQ and no additional code after The quasiquatation can also bind to variables like myCode aesonQQ age age name name where age Integer name Pelle where the function toJSON will be called on age and name runtime You can also insert Haskell code myCode aesonQQ age age Integer name map toUpper name where age Integer name Pelle You can use similar syntax if you want to insert value of type Data.Aeson.Value like myCode aesonQQ age age If you want to replace the name of the key in hash you ll use the syntax foo aesonQQ bar bar age",
        "hierarchy": "Data Aeson QQ",
        "module": "Data.Aeson.QQ",
        "name": "QQ",
        "normalized": "",
        "package": "aeson-qq",
        "partial": "QQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-qq/docs/Data-Aeson-QQ.html#v:aesonQQ",
      "description": {
        "fct-module": "Data.Aeson.QQ",
        "fct-package": "aeson-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-Aeson-QQ.html#aesonQQ",
        "fct-type": "function",
        "title": "aesonQQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson QQ",
        "module": "Data.Aeson.QQ",
        "name": "aesonQQ",
        "normalized": "",
        "package": "aeson-qq",
        "partial": "QQ",
        "signature": ""
      }
    }
  }
]