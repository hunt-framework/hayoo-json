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
        "word": "records"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRecord combinators built on top of the record core that \u003ca\u003eData.Record\u003c/a\u003e provides.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Record.Combinators",
          "name": "Combinators",
          "package": "records",
          "source": "src/Data-Record-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Record combinators built on top of the record core that Data.Record provides",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "Combinators",
          "package": "records",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatenation of two record schemes.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "Cat",
          "package": "records",
          "signature": "Cat",
          "type": "function"
        },
        "index": {
          "description": "Catenation of two record schemes",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "Cat",
          "package": "records",
          "partial": "Cat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#t:Cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up the value of a record field.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "(!!!)",
          "package": "records",
          "signature": "rec style -\u003e sepName -\u003e App style sepSort",
          "source": "src/Data-Record-Combinators.html#%21%21%21",
          "type": "function"
        },
        "index": {
          "description": "Looks up the value of record field",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "(!!!) !!!",
          "normalized": "a b-\u003ec-\u003eApp b d",
          "package": "records",
          "signature": "rec style-\u003esepName-\u003eApp style sepSort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:-33--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverwrites the values of multiple record fields. The first argument is the source record,\n        and the second argument lists the names of the fields to be modified together with their new\n        values.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "(///)",
          "package": "records",
          "signature": "rec style-\u003e replRec style-\u003e rec style",
          "type": "function"
        },
        "index": {
          "description": "Overwrites the values of multiple record fields The first argument is the source record and the second argument lists the names of the fields to be modified together with their new values",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "(///) ///",
          "normalized": "a b-\u003ec b-\u003ea b",
          "package": "records",
          "signature": "rec style-\u003ereplRec style-\u003erec style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:-47--47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges a record of functions and a record of arguments by applying the functions to the\n        corresponding arguments. The \u003ccode\u003e(\u003c\u003c*\u003e\u003e)\u003c/code\u003e&#160;function is almost a proper implementation\n        of&#160;\u003ccode\u003e(\u003c*\u003e)\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "(\u003c\u003c*\u003e\u003e)",
          "package": "records",
          "signature": "rec (style :-\u003e style')-\u003e rec style-\u003e rec style'",
          "type": "function"
        },
        "index": {
          "description": "Merges record of functions and record of arguments by applying the functions to the corresponding arguments The function is almost proper implementation of from the Applicative class",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "(\u003c\u003c*\u003e\u003e) \u003c\u003c*\u003e\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "records",
          "signature": "rec(style-\u003estyle')-\u003erec style-\u003erec style'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:-60--60--42--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a record field.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "(\\\\\\)",
          "package": "records",
          "signature": "rec style -\u003e sepName -\u003e remain style",
          "source": "src/Data-Record-Combinators.html#%5C%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Removes record field",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "(\\\\\\) \\\\\\",
          "normalized": "a b-\u003ec-\u003ed b",
          "package": "records",
          "signature": "rec style-\u003esepName-\u003eremain style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:-92--92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatenation of two records.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "cat",
          "package": "records",
          "signature": "rec1 style-\u003e rec2 style-\u003e Cat rec1 rec2 style",
          "type": "function"
        },
        "index": {
          "description": "Catenation of two records",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "cat",
          "normalized": "a b-\u003ea b-\u003eCat a a b",
          "package": "records",
          "signature": "rec style-\u003erec style-\u003eCat rec rec style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a record by applying a function to all its field values.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "map",
          "package": "records",
          "signature": "Universal (style :-\u003e style')-\u003e rec style-\u003e rec style'",
          "type": "function"
        },
        "index": {
          "description": "Transforms record by applying function to all its field values",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "map",
          "normalized": "Universal(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "records",
          "signature": "Universal(style-\u003estyle')-\u003erec style-\u003erec style'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a record by changing some of its field values. The first argument of \u003ccode\u003emodify\u003c/code\u003e is\n        called the modification record, and the second argument is called the data record. The\n        result is formed by applying each field value of the modification record to the\n        corresponding field value of the data record and replacing the latter by the result of the\n        application. Data record fields that have no corresponding field in the modification record\n        are left unchanged.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "modify",
          "package": "records",
          "signature": "modRec (style :-\u003e style)-\u003e rec style-\u003e rec style",
          "type": "function"
        },
        "index": {
          "description": "Modifies record by changing some of its field values The first argument of modify is called the modification record and the second argument is called the data record The result is formed by applying each field value of the modification record to the corresponding field value of the data record and replacing the latter by the result of the application Data record fields that have no corresponding field in the modification record are left unchanged",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "modify",
          "normalized": "a(b-\u003eb)-\u003ec b-\u003ec b",
          "package": "records",
          "signature": "modRec(style-\u003estyle)-\u003erec style-\u003erec style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a record whose fields all contain the same value. In contrast to the\n        \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e function from the Prelude, this function generates a finite data structure.\n        Thereby, the size of the generated record is determined by its type. \u003ccode\u003erepeat\u003c/code\u003e is almost a\n        proper implementation of \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "repeat",
          "package": "records",
          "signature": "Universal style-\u003e rec style",
          "type": "function"
        },
        "index": {
          "description": "Generates record whose fields all contain the same value In contrast to the repeat function from the Prelude this function generates finite data structure Thereby the size of the generated record is determined by its type repeat is almost proper implementation of pure from the Applicative class",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "repeat",
          "normalized": "Universal a-\u003eb a",
          "package": "records",
          "signature": "Universal style-\u003erec style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a record whose style is a constant function into the list of its field values.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "toList",
          "package": "records",
          "signature": "rec (Const kind val) -\u003e [val]",
          "source": "src/Data-Record-Combinators.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts record whose style is constant function into the list of its field values",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "toList",
          "normalized": "a(Const b c)-\u003e[c]",
          "package": "records",
          "partial": "List",
          "signature": "rec(Const kind val)-\u003e[val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixes the style of a record. When a record is constructed using \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003e(:&)\u003c/code\u003e, and \u003ccode\u003e(:=)\u003c/code\u003e,\n        the style of this record is not fixed. For example, the most general type of the record\n\u003c/p\u003e\u003cpre\u003e\nX :& Surname := \"Jeltsch\" :& Age := 33 :& Room := \"HG/2.39\"\n\u003c/pre\u003e\u003cp\u003eis\n\u003c/p\u003e\u003cpre\u003e\n(\u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e style sortSurname ~ String, Num (\u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e style sortAge), \u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e style sortRoom ~ String) =\u003e\n(X :& Surname ::: sortSurname :& Age ::: sortAge :& Room ::: sortRoom) style\n\u003c/pre\u003e\u003cp\u003eWe can fix the style of that record using the expression\n\u003c/p\u003e\u003cpre\u003e\nX :& Surname := \"Jeltsch\" :& Age := 33 :& Room := \"HG/2.39\" `withStyle` \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKindStar\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003ewhich has the most general type\n\u003c/p\u003e\u003cpre\u003e\n(Num age) =\u003e\n(X :& Surname ::: String :& Age ::: age :& Room ::: String) (\u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKindStar\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ewithStyle\u003c/code\u003e combinator is similar to \u003ccode\u003e\u003ca\u003easTypeOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "withStyle",
          "package": "records",
          "signature": "rec style -\u003e style -\u003e rec style",
          "source": "src/Data-Record-Combinators.html#withStyle",
          "type": "function"
        },
        "index": {
          "description": "Fixes the style of record When record is constructed using and the style of this record is not fixed For example the most general type of the record Surname Jeltsch Age Room HG is App style sortSurname String Num App style sortAge App style sortRoom String Surname sortSurname Age sortAge Room sortRoom style We can fix the style of that record using the expression Surname Jeltsch Age Room HG withStyle Id KindStar which has the most general type Num age Surname String Age age Room String Id KindStar The withStyle combinator is similar to asTypeOf",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "withStyle",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "records",
          "partial": "Style",
          "signature": "rec style-\u003estyle-\u003erec style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:withStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two records by applying a function to each pair of corresponding field values.\n\u003c/p\u003e",
          "module": "Data.Record.Combinators",
          "name": "zipWith",
          "package": "records",
          "signature": "Universal (style1 :-\u003e (style2 :-\u003e style'))-\u003e rec style1-\u003e rec style2-\u003e rec style'",
          "type": "function"
        },
        "index": {
          "description": "Merges two records by applying function to each pair of corresponding field values",
          "hierarchy": "Data Record Combinators",
          "module": "Data.Record.Combinators",
          "name": "zipWith",
          "normalized": "Universal(a-\u003e(a-\u003eb))-\u003ec a-\u003ec a-\u003ec b",
          "package": "records",
          "partial": "With",
          "signature": "Universal(style-\u003e(style-\u003estyle'))-\u003erec style-\u003erec style-\u003erec style'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record-Combinators.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRecord core support.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Record",
          "name": "Record",
          "package": "records",
          "source": "src/Data-Record.html",
          "type": "module"
        },
        "index": {
          "description": "Record core support",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Record",
          "package": "records",
          "partial": "Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-empty record schemes.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": ":&",
          "package": "records",
          "source": "src/Data-Record.html#%3A%26",
          "type": "data"
        },
        "index": {
          "description": "Non-empty record schemes",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":&",
          "package": "records",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t::-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of record fields.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": ":::",
          "package": "records",
          "source": "src/Data-Record.html#%3A%3A%3A",
          "type": "data"
        },
        "index": {
          "description": "The type of record fields",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":::",
          "package": "records",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t::::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance \u003ccode\u003eConvertible \u003cem\u003er\u003c/em\u003e \u003cem\u003er'\u003c/em\u003e\u003c/code\u003e exists if and only if \u003ccode\u003e\u003cem\u003er\u003c/em\u003e\u003c/code\u003e&#160;and&#160;\u003ccode\u003e\u003cem\u003er'\u003c/em\u003e\u003c/code\u003e are\n        record schemes, and records of a type \u003ccode\u003e\u003cem\u003er\u003c/em\u003e \u003cem\u003es\u003c/em\u003e\u003c/code\u003e can be converted into records of the type\n        \u003ccode\u003e\u003cem\u003er'\u003c/em\u003e \u003cem\u003es\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "Convertible",
          "package": "records",
          "source": "src/Data-Record.html#Convertible",
          "type": "class"
        },
        "index": {
          "description": "An instance Convertible exists if and only if and are record schemes and records of type can be converted into records of the type",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Convertible",
          "package": "records",
          "partial": "Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t:Convertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformations from the definition of a record combinator for some record scheme into its\n        definition for an expanded record scheme.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "Expander",
          "package": "records",
          "source": "src/Data-Record.html#Expander",
          "type": "newtype"
        },
        "index": {
          "description": "Transformations from the definition of record combinator for some record scheme into its definition for an expanded record scheme",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Expander",
          "package": "records",
          "partial": "Expander",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t:Expander"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of name types. For each field name&#160;\u003ccode\u003e\u003cem\u003eN\u003c/em\u003e\u003c/code\u003e, there should be a declaration of\n        the following form:\n\u003c/p\u003e\u003cpre\u003e\ndata \u003cem\u003eN\u003c/em\u003e = \u003cem\u003eN\u003c/em\u003e deriving (Show)\n\u003c/pre\u003e\u003cp\u003eThat way, the name can be represented in types by the type constructor&#160;\u003ccode\u003e\u003cem\u003eN\u003c/em\u003e\u003c/code\u003e, and in\n        expressions and patterns by the data constructor&#160;\u003ccode\u003e\u003cem\u003eN\u003c/em\u003e\u003c/code\u003e. Furthermore, the following\n        instance declaration should be added:\n\u003c/p\u003e\u003cpre\u003e\ninstance Name \u003cem\u003eN\u003c/em\u003e where\n&#160;\n    name = \u003cem\u003eN\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eSuch instance declarations allow record combinators to construct value-level representations\n        of names from type-level representations.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "Name",
          "package": "records",
          "source": "src/Data-Record.html#Name",
          "type": "class"
        },
        "index": {
          "description": "The class of name types For each field name there should be declaration of the following form data deriving Show That way the name can be represented in types by the type constructor and in expressions and patterns by the data constructor Furthermore the following instance declaration should be added instance Name where name Such instance declarations allow record combinators to construct value-level representations of names from type-level representations",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Name",
          "package": "records",
          "partial": "Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance \u003ccode\u003eRecord \u003cem\u003ek\u003c/em\u003e \u003cem\u003er\u003c/em\u003e\u003c/code\u003e exists if and only if \u003ccode\u003e\u003cem\u003er\u003c/em\u003e\u003c/code\u003e&#160;is a record scheme whose sorts\n        are of the subkind represented by&#160;\u003ccode\u003e\u003cem\u003ek\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "Record",
          "package": "records",
          "source": "src/Data-Record.html#Record",
          "type": "class"
        },
        "index": {
          "description": "An instance Record exists if and only if is record scheme whose sorts are of the subkind represented by",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Record",
          "package": "records",
          "partial": "Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance \u003ccode\u003eSeparation \u003cem\u003er\u003c/em\u003e \u003cem\u003er'\u003c/em\u003e \u003cem\u003en\u003c/em\u003e \u003cem\u003es\u003c/em\u003e\u003c/code\u003e exists if and only if the following conditions are\n        met:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003cem\u003er\u003c/em\u003e\u003c/code\u003e&#160;is a record scheme that contains the name&#160;\u003ccode\u003e\u003cem\u003en\u003c/em\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The last name-sort pair with the name&#160;\u003ccode\u003e\u003cem\u003en\u003c/em\u003e\u003c/code\u003e contains the sort&#160;\u003ccode\u003e\u003cem\u003es\u003c/em\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Removing that name-sort pair from&#160;\u003ccode\u003e\u003cem\u003er\u003c/em\u003e\u003c/code\u003e yields&#160;\u003ccode\u003e\u003cem\u003er'\u003c/em\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Record",
          "name": "Separation",
          "package": "records",
          "source": "src/Data-Record.html#Separation",
          "type": "class"
        },
        "index": {
          "description": "An instance Separation exists if and only if the following conditions are met is record scheme that contains the name The last name-sort pair with the name contains the sort Removing that name-sort pair from yields",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Separation",
          "package": "records",
          "partial": "Separation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t:Separation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty record scheme.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "X",
          "package": "records",
          "source": "src/Data-Record.html#X",
          "type": "data"
        },
        "index": {
          "description": "The empty record scheme",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "X",
          "package": "records",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-empty records.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": ":&",
          "package": "records",
          "signature": "(rec style) :& !(field style)",
          "source": "src/Data-Record.html#%3A%26",
          "type": "function"
        },
        "index": {
          "description": "Non-empty records",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":&",
          "package": "records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v::-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a record field from a name and a value.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": ":=",
          "package": "records",
          "signature": "name := (App style sort)",
          "source": "src/Data-Record.html#%3A%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "Constructs record field from name and value",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":=",
          "package": "records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "Expander",
          "package": "records",
          "signature": "sort)))",
          "source": "src/Data-Record.html#Expander",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Expander",
          "package": "records",
          "partial": "Expander",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v:Expander"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty record.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "X",
          "package": "records",
          "signature": "X",
          "source": "src/Data-Record.html#X",
          "type": "function"
        },
        "index": {
          "description": "The empty record",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "X",
          "package": "records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a record into another record.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "convert",
          "package": "records",
          "signature": "rec style -\u003e rec' style",
          "source": "src/Data-Record.html#convert",
          "type": "method"
        },
        "index": {
          "description": "Converts record into another record",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "convert",
          "normalized": "a b-\u003ec b",
          "package": "records",
          "signature": "rec style-\u003erec' style",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolding of record schemes. This function can be used to define combinators whose types\n            have the form \u003ccode\u003e(Record rec) =\u003e \u003cem\u003et\u003c/em\u003e rec\u003c/code\u003e by induction on the \u003ccode\u003erec\u003c/code\u003e parameter.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "fold",
          "package": "records",
          "signature": "fold",
          "source": "src/Data-Record.html#fold",
          "type": "method"
        },
        "index": {
          "description": "Folding of record schemes This function can be used to define combinators whose types have the form Record rec rec by induction on the rec parameter",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "fold",
          "package": "records",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sole inhabitant of the name type.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "name",
          "package": "records",
          "signature": "name",
          "source": "src/Data-Record.html#name",
          "type": "method"
        },
        "index": {
          "description": "The sole inhabitant of the name type",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "name",
          "package": "records",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the last field of the respective name and returns the remaining record and the\n            extracted field.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "separate",
          "package": "records",
          "signature": "sepSort) style)",
          "source": "src/Data-Record.html#separate",
          "type": "method"
        },
        "index": {
          "description": "Extracts the last field of the respective name and returns the remaining record and the extracted field",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "separate",
          "package": "records",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/records/docs/Data-Record.html#v:separate"
      }
    }
  ]
]