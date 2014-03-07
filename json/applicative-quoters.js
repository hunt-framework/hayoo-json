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
        "word": "applicative-quoters"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApplicative do. Philippa Cowderoy's idea, some explanations due Edward\n Kmett\n\u003c/p\u003e\u003cp\u003ePointful version of \u003ca\u003eLanguage.Haskell.Meta.QQ.Idiom\u003c/a\u003e. Note the only\n expression which has the bound variables in scope is the last one.\n\u003c/p\u003e\u003cp\u003eThis lets you work with applicatives without the order of fields in an data\n constructor becoming such a burden.\n\u003c/p\u003e\u003cp\u003eIn a similar role as \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e in do notation, if match failures can be\n expected, the result is an \u003ccode\u003eApplicative f =\u003e f (Maybe a)\u003c/code\u003e, rather than\n \u003ccode\u003eApplicative f =\u003e f a\u003c/code\u003e, where \u003ccode\u003ea\u003c/code\u003e may be partially defined.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.QQ.ADo",
          "name": "ADo",
          "package": "applicative-quoters",
          "source": "src/Control-Applicative-QQ-ADo.html",
          "type": "module"
        },
        "index": {
          "description": "Applicative do Philippa Cowderoy idea some explanations due Edward Kmett Pointful version of Language.Haskell.Meta.QQ.Idiom Note the only expression which has the bound variables in scope is the last one This lets you work with applicatives without the order of fields in an data constructor becoming such burden In similar role as fail in do notation if match failures can be expected the result is an Applicative Maybe rather than Applicative where may be partially defined",
          "hierarchy": "Control Applicative QQ ADo",
          "module": "Control.Applicative.QQ.ADo",
          "name": "ADo",
          "package": "applicative-quoters",
          "partial": "ADo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/applicative-quoters/docs/Control-Applicative-QQ-ADo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e [$ado| a \u003c- \"foo\"; b \u003c- \"bar\"; (a,b) |]\n [('f','b'),('f','a'),('f','r'),('o','b'),('o','a'),('o','r'),('o','b'),('o','a'),('o','r')]\n\u003c/pre\u003e\u003cpre\u003e ghci\u003e [$ado| Just a \u003c- [Just 1,Nothing,Just 2]; b \u003c- \"fo\"; (a,b) |]\n [Just (1,'f'),Just (1,'o'),Nothing,Nothing,Just (2,'f'),Just (2,'o')]\n\u003c/pre\u003e\u003cp\u003eNotice that the last statement is not of an applicative type, so when translating\n from monadic do, drop the final \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e (do x \u003c- [1,2,3]; return (x + 1)) == [$ado| x \u003c- [1,2,3]; x + 1 |]\n\u003c/pre\u003e",
          "module": "Control.Applicative.QQ.ADo",
          "name": "ado",
          "package": "applicative-quoters",
          "signature": "QuasiQuoter",
          "source": "src/Control-Applicative-QQ-ADo.html#ado",
          "type": "function"
        },
        "index": {
          "description": "Usage ghci ado foo bar ghci ado Just Just Nothing Just fo Just Just Nothing Nothing Just Just Notice that the last statement is not of an applicative type so when translating from monadic do drop the final return do return ado",
          "hierarchy": "Control Applicative QQ ADo",
          "module": "Control.Applicative.QQ.ADo",
          "name": "ado",
          "package": "applicative-quoters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/applicative-quoters/docs/Control-Applicative-QQ-ADo.html#v:ado"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eado\u003c/a\u003e\u003c/code\u003e that does not implicitly add a Maybe when patterns may fail:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e [$ado'| Just a \u003c- [Just 1,Nothing,Just 2]; b \u003c- \"fo\"; (a,b) |]\n [(1,'f'),(1,'o'),*** Exception: \u003cinteractive\u003e:...\n\u003c/pre\u003e",
          "module": "Control.Applicative.QQ.ADo",
          "name": "ado'",
          "package": "applicative-quoters",
          "signature": "QuasiQuoter",
          "source": "src/Control-Applicative-QQ-ADo.html#ado%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of ado that does not implicitly add Maybe when patterns may fail ghci ado Just Just Nothing Just fo Exception interactive",
          "hierarchy": "Control Applicative QQ ADo",
          "module": "Control.Applicative.QQ.ADo",
          "name": "ado'",
          "package": "applicative-quoters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/applicative-quoters/docs/Control-Applicative-QQ-ADo.html#v:ado-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIdiom brackets. Vixey's idea.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.QQ.Idiom",
          "name": "Idiom",
          "package": "applicative-quoters",
          "source": "src/Control-Applicative-QQ-Idiom.html",
          "type": "module"
        },
        "index": {
          "description": "Idiom brackets Vixey idea",
          "hierarchy": "Control Applicative QQ Idiom",
          "module": "Control.Applicative.QQ.Idiom",
          "name": "Idiom",
          "package": "applicative-quoters",
          "partial": "Idiom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/applicative-quoters/docs/Control-Applicative-QQ-Idiom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns function application into \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e, and puts a \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e on the beginning.\n\u003c/p\u003e\u003cpre\u003e [i| subtract [1,2,3] [10,20,30] |]\n -\u003e pure subtract \u003c*\u003e [1,2,3] \u003c*\u003e [10,20,30]\n -\u003e [9,19,29,8,18,28,7,17,27]\n\u003c/pre\u003e\u003cp\u003eDoes not apply to nested applications:\n\u003c/p\u003e\u003cpre\u003e getZipList [i| subtract (ZipList [1,2,3]) (ZipList [10,20,30]) |]\n -\u003e getZipList (pure subtract \u003c*\u003e ZipList [1,2,3] \u003c*\u003e ZipList [10,20,30])\n -\u003e [9,18,27]\n\u003c/pre\u003e\u003cp\u003eWill treat \u003ccode\u003e[i| x `op` y |]\u003c/code\u003e as \u003ccode\u003e[i| op x y |]\u003c/code\u003e as long as neither x nor y\n are an infix expression. If they are, will likely complain that it doesn't\n have fixity information (unless haskell-src-meta becomes clever enough to\n resolve that itself).\n\u003c/p\u003e",
          "module": "Control.Applicative.QQ.Idiom",
          "name": "i",
          "package": "applicative-quoters",
          "signature": "QuasiQuoter",
          "source": "src/Control-Applicative-QQ-Idiom.html#i",
          "type": "function"
        },
        "index": {
          "description": "Turns function application into and puts pure on the beginning subtract pure subtract Does not apply to nested applications getZipList subtract ZipList ZipList getZipList pure subtract ZipList ZipList Will treat op as op as long as neither nor are an infix expression If they are will likely complain that it doesn have fixity information unless haskell-src-meta becomes clever enough to resolve that itself",
          "hierarchy": "Control Applicative QQ Idiom",
          "module": "Control.Applicative.QQ.Idiom",
          "name": "i",
          "package": "applicative-quoters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/applicative-quoters/docs/Control-Applicative-QQ-Idiom.html#v:i"
      }
    }
  ]
]