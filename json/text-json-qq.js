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
        "word": "text-json-qq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package expose the function \u003ccode\u003ejsonQQ\u003c/code\u003e that compile time converts json code into a \u003ccode\u003eText.JSON.JSValue\u003c/code\u003e.\n    \u003ccode\u003ejsonQQ\u003c/code\u003e got the signature\n\u003c/p\u003e\u003cpre\u003e jsonQQ :: QuasiQuoter\n\u003c/pre\u003e\u003cp\u003eand is used like\n\u003c/p\u003e\u003cpre\u003e myCode = [jsonQQ| {age: 23, name: \"Pelle\", likes: [\"mac\",\"Haskell\"] } |]\n\u003c/pre\u003e\u003cp\u003ewhere it is important that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e you got no space in \u003ccode\u003e[jsonQQ|\u003c/code\u003e and\n\u003c/li\u003e\u003cli\u003e no additional code after \u003ccode\u003e|]\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe quasiquatation can also bind to variables like\n\u003c/p\u003e\u003cpre\u003e myCode = [jsonQQ| {age: \u003c|age|\u003e, name: \u003c|name|\u003e} |]\n where age = 34 :: Integer\n       name = \"Pelle\"\n\u003c/pre\u003e\u003cp\u003ewhere the function  \u003ccode\u003etoJSON\u003c/code\u003e will be called on \u003ccode\u003eage\u003c/code\u003e and \u003ccode\u003ename\u003c/code\u003e runtime.\n\u003c/p\u003e\u003cp\u003eYou can also insert Haskell code: \n\u003c/p\u003e\u003cpre\u003e myCode = [jsonQQ| {age: \u003c|age + 34 :: Integer|\u003e, name: \u003c|map toUpper name|\u003e} |]\n where age = 34 :: Integer\n       name = \"Pelle\"\n\u003c/pre\u003e\u003cp\u003eYou can use a similar syntax if you want to insert a value of type JSValue like\n\u003c/p\u003e\u003cpre\u003e myCode = [jsonQQ| {\"age\": \u003c\u003cage\u003e\u003e} |]\n\u003c/pre\u003e\u003cp\u003eIf you want to replace the name of the key in a hash you'll use the $-syntax:\n\u003c/p\u003e\u003cpre\u003e foo = [jsonQQ| {$bar: 42} |]\n bar = \"age\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.JSON.QQ",
          "name": "QQ",
          "package": "text-json-qq",
          "source": "src/Text-JSON-QQ.html",
          "type": "module"
        },
        "index": {
          "description": "This package expose the function jsonQQ that compile time converts json code into Text.JSON.JSValue jsonQQ got the signature jsonQQ QuasiQuoter and is used like myCode jsonQQ age name Pelle likes mac Haskell where it is important that you got no space in jsonQQ and no additional code after The quasiquatation can also bind to variables like myCode jsonQQ age age name name where age Integer name Pelle where the function toJSON will be called on age and name runtime You can also insert Haskell code myCode jsonQQ age age Integer name map toUpper name where age Integer name Pelle You can use similar syntax if you want to insert value of type JSValue like myCode jsonQQ age age If you want to replace the name of the key in hash you ll use the syntax foo jsonQQ bar bar age",
          "hierarchy": "Text JSON QQ",
          "module": "Text.JSON.QQ",
          "name": "QQ",
          "package": "text-json-qq",
          "partial": "QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-json-qq/docs/Text-JSON-QQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.QQ",
          "name": "jsonQQ",
          "package": "text-json-qq",
          "signature": "QuasiQuoter",
          "source": "src/Text-JSON-QQ.html#jsonQQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON QQ",
          "module": "Text.JSON.QQ",
          "name": "jsonQQ",
          "package": "text-json-qq",
          "partial": "QQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-json-qq/docs/Text-JSON-QQ.html#v:jsonQQ"
      }
    }
  ]
]