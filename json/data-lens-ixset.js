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
        "word": "data-lens-ixset"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.IxSet",
          "name": "IxSet",
          "package": "data-lens-ixset",
          "source": "src/Data-Lens-IxSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Lens IxSet",
          "module": "Data.Lens.IxSet",
          "name": "IxSet",
          "package": "data-lens-ixset",
          "partial": "Ix Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-lens-ixset/docs/Data-Lens-IxSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFocus on a key in an indexed set, much like with \u003ccode\u003e\u003ca\u003emapLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e of people:\n\u003c/p\u003e\u003cpre\u003e\npeople = \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [ Person (FirstName \"Edward A.\") (LastName \"Kmett\")\n                  , Person (FirstName \"Simon\") (LastName \"P. Jones\")\n                  ]\n\u003c/pre\u003e\u003cp\u003eWe can now work with indices using lenses and fix Simon's last name:\n\u003c/p\u003e\u003cpre\u003e\npeople' = \u003ccode\u003e\u003ca\u003eixLens\u003c/a\u003e\u003c/code\u003e (FirstName \"Simon\") \u003ccode\u003e\u003ca\u003e^%=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e (lastName \u003ccode\u003e\u003ca\u003e^=\u003c/a\u003e\u003c/code\u003e LastName \"Peyton-Jones\") \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e people\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epeople'\n\u003c/code\u003e\u003c/strong\u003efromList [Person {_firstName = FirstName \"Edward A.\", _lastName = LastName \"Kmett\"}\n         ,Person {_firstName = FirstName \"Simon\", _lastName = LastName \"Peyton-Jones\"}]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(firstName ^$) \u003c$\u003e people' ^. ixLens (LastName \"Peyton-Jones\")\n\u003c/code\u003e\u003c/strong\u003eJust (FirstName \"Simon\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eixLens (LastName \"Peyton-Jones\") ^$ people\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003ePerhaps more commonly you're working with an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e from inside a state\nmonad such as \u003ccode\u003eUpdate\u003c/code\u003e from the \u003ccode\u003eacid-state\u003c/code\u003e package.  In that case usage\nis even easier:\n\u003c/p\u003e\u003cpre\u003e\nchangeLastName = \u003ccode\u003e\u003ca\u003eixLens\u003c/a\u003e\u003c/code\u003e (FirstName \"Simon\") \u003ccode\u003e%=\u003c/code\u003e \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e (lastName \u003ccode\u003e\u003ca\u003e^=\u003c/a\u003e\u003c/code\u003e LastName \"Peyton-Jones\")\n\u003c/pre\u003e\u003cp\u003eHere's the missing boilerplate, which also needs the packages \u003ccode\u003edata-lens-fd\u003c/code\u003e and \u003ccode\u003edata-lens-template\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE DeriveDataTypeable #-}\n{-# LANGUAGE TemplateHaskell #-}\n\nimport Data.Data\nimport Data.IxSet\nimport Data.Lens\nimport Data.Lens.IxSet\nimport Data.Lens.Template\n\nnewtype FirstName = FirstName \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n  deriving (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e)\n\nnewtype LastName = LastName \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n  deriving (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e)\n\ndata Person = Person { _firstName :: FirstName\n                     , _lastName  :: LastName\n                     } deriving (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e)\n\nmakeLens ''Person\n\ninstance \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e Person where\n  empty = \u003ccode\u003e\u003ca\u003eixSet\u003c/a\u003e\u003c/code\u003e [ \u003ccode\u003e\u003ca\u003eixGen\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e FirstName)\n                , \u003ccode\u003e\u003ca\u003eixGen\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e LastName)\n                ]\n\u003c/pre\u003e",
          "module": "Data.Lens.IxSet",
          "name": "ixLens",
          "package": "data-lens-ixset",
          "signature": "k -\u003e Lens (IxSet a) (Maybe a)",
          "source": "src/Data-Lens-IxSet.html#ixLens",
          "type": "function"
        },
        "index": {
          "description": "Focus on key in an indexed set much like with mapLens Given an IxSet of people people fromList Person FirstName Edward LastName Kmett Person FirstName Simon LastName Jones We can now work with indices using lenses and fix Simon last name people ixLens FirstName Simon fmap lastName LastName Peyton-Jones people people fromList Person firstName FirstName Edward lastName LastName Kmett Person firstName FirstName Simon lastName LastName Peyton-Jones firstName people ixLens LastName Peyton-Jones Just FirstName Simon ixLens LastName Peyton-Jones people Nothing Perhaps more commonly you re working with an IxSet from inside state monad such as Update from the acid-state package In that case usage is even easier changeLastName ixLens FirstName Simon fmap lastName LastName Peyton-Jones Here the missing boilerplate which also needs the packages data-lens-fd and data-lens-template LANGUAGE DeriveDataTypeable LANGUAGE TemplateHaskell import Data.Data import Data.IxSet import Data.Lens import Data.Lens.IxSet import Data.Lens.Template newtype FirstName FirstName String deriving Show Eq Ord Data Typeable newtype LastName LastName String deriving Show Eq Ord Data Typeable data Person Person firstName FirstName lastName LastName deriving Show Eq Ord Data Typeable makeLens Person instance Indexable Person where empty ixSet ixGen Proxy Proxy FirstName ixGen Proxy Proxy LastName",
          "hierarchy": "Data Lens IxSet",
          "module": "Data.Lens.IxSet",
          "name": "ixLens",
          "normalized": "a-\u003eLens(IxSet b)(Maybe b)",
          "package": "data-lens-ixset",
          "partial": "Lens",
          "signature": "k-\u003eLens(IxSet a)(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens-ixset/docs/Data-Lens-IxSet.html#v:ixLens"
      }
    }
  ]
]