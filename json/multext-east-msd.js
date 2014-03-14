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
        "word": "multext-east-msd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the MULTEXT-East morphosyntactic descriptors.\n\u003c/p\u003e\u003cp\u003eMULTEXT-East encodes values of morphosyntatic attributes in a single string,\n using positional encoding. Each attribute is represented by a single letter\n at a predefined position, while non-applicable attributes are represented by\n hyphens. For example, \u003ccode\u003eNcmsg\u003c/code\u003e denotes a common noun (\u003ccode\u003eNc\u003c/code\u003e) in masculine\n singular genitive (\u003ccode\u003emsg\u003c/code\u003e) case. For details, refer to \u003ca\u003ehttp://nl.ijs.si/ME\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eCurrently, only MULTEXT-East Version 3 is supported. MULTEXT-East Version 3\n covers morphosyntactic descriptions for Bulgarian, Croatian, Czech, English,\n Estonian, Hungarian, Lithuanian, Macedonian, Persian, Polish, Resian,\n Romanian, Russian, Serbian, Slovak, Slovene, and Ukrainian. For details,\n refer to \u003ca\u003ehttp://nl.ijs.si/ME/V3/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUsage example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet Just d1 = fromString \"Ncmsg\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epos d1\n\u003c/code\u003e\u003c/strong\u003eNoun\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efeatures d1\n\u003c/code\u003e\u003c/strong\u003e[NType Common,Gender Masculine,Number Singular,Case Genitive]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet d2 = unset NType d1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoString d2\n\u003c/code\u003e\u003c/strong\u003e\"N-msg\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ed1 == d2\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ed1 =~= d2\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.MultextEastMsd",
          "name": "MultextEastMsd",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of the MULTEXT-East morphosyntactic descriptors MULTEXT-East encodes values of morphosyntatic attributes in single string using positional encoding Each attribute is represented by single letter at predefined position while non-applicable attributes are represented by hyphens For example Ncmsg denotes common noun Nc in masculine singular genitive msg case For details refer to http nl.ijs.si ME Currently only MULTEXT-East Version is supported MULTEXT-East Version covers morphosyntactic descriptions for Bulgarian Croatian Czech English Estonian Hungarian Lithuanian Macedonian Persian Polish Resian Romanian Russian Serbian Slovak Slovene and Ukrainian For details refer to http nl.ijs.si ME V3 Usage example let Just d1 fromString Ncmsg pos d1 Noun features d1 NType Common Gender Masculine Number Singular Case Genitive let d2 unset NType d1 toString d2 N-msg d1 d2 False d1 d2 True",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "MultextEastMsd",
          "package": "multext-east-msd",
          "partial": "Multext East Msd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "AType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#AType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "AType",
          "package": "multext-east-msd",
          "partial": "AType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:AType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Aspect",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Aspect",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Aspect",
          "package": "multext-east-msd",
          "partial": "Aspect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Aspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Attribute",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Attribute",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Attribute",
          "package": "multext-east-msd",
          "partial": "Attribute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#CType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CType",
          "package": "multext-east-msd",
          "partial": "CType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:CType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Case",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Case",
          "package": "multext-east-msd",
          "partial": "Case",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Class",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Class",
          "package": "multext-east-msd",
          "partial": "Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CoordType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CoordType",
          "package": "multext-east-msd",
          "partial": "Coord Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:CoordType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Definiteness",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Definiteness",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Definiteness",
          "package": "multext-east-msd",
          "partial": "Definiteness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Definiteness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Degree",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Degree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Degree",
          "package": "multext-east-msd",
          "partial": "Degree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Feature",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Feature",
          "package": "multext-east-msd",
          "partial": "Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Feature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Formation",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Formation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Formation",
          "package": "multext-east-msd",
          "partial": "Formation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Formation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Gender",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Gender",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Gender",
          "package": "multext-east-msd",
          "partial": "Gender",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "MForm",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#MForm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "MForm",
          "package": "multext-east-msd",
          "partial": "MForm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:MForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "MType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#MType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "MType",
          "package": "multext-east-msd",
          "partial": "MType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:MType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Msd",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Msd",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Msd",
          "package": "multext-east-msd",
          "partial": "Msd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Msd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "NType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#NType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "NType",
          "package": "multext-east-msd",
          "partial": "NType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:NType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Number",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Number",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Number",
          "package": "multext-east-msd",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Person",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Person",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Person",
          "package": "multext-east-msd",
          "partial": "Person",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "PoS",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#PoS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "PoS",
          "package": "multext-east-msd",
          "partial": "Po",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:PoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "SType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#SType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "SType",
          "package": "multext-east-msd",
          "partial": "SType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:SType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "SubType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#SubType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "SubType",
          "package": "multext-east-msd",
          "partial": "Sub Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:SubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Tense",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Tense",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Tense",
          "package": "multext-east-msd",
          "partial": "Tense",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Tense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "VForm",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "VForm",
          "package": "multext-east-msd",
          "partial": "VForm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:VForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "VType",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#VType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "VType",
          "package": "multext-east-msd",
          "partial": "VType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:VType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Voice",
          "package": "multext-east-msd",
          "source": "src/Data-MultextEastMsd.html#Voice",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Voice",
          "package": "multext-east-msd",
          "partial": "Voice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Voice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wildcard-matching operator between two Msd patterns.\n Relation \u003ccode\u003e msd1 =~= msd2 \u003c/code\u003e holds iff \u003ccode\u003emsd1\u003c/code\u003e and \u003ccode\u003emsd2\u003c/code\u003e are of the same\n part-of-speech and the attributes common to \u003ccode\u003emsd1\u003c/code\u003e\n and \u003ccode\u003emsd2\u003c/code\u003e have identical values. The attributes of \u003ccode\u003emsd1\u003c/code\u003e that are not\n set in \u003ccode\u003emsd2\u003c/code\u003e (and conversely) are ignored in the comparison.\n In MULTEXT-East notation, this is tantamount to \n having character code \u003ccode\u003e-\u003c/code\u003e (hyphen) act as a wildcard.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "(=~=)",
          "package": "multext-east-msd",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-MultextEastMsd.html#%3D~%3D",
          "type": "function"
        },
        "index": {
          "description": "wildcard-matching operator between two Msd patterns Relation msd1 msd2 holds iff msd1 and msd2 are of the same part-of-speech and the attributes common to msd1 and msd2 have identical values The attributes of msd1 that are not set in msd2 and conversely are ignored in the comparison In MULTEXT-East notation this is tantamount to having character code hyphen act as wildcard",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "(=~=) =~=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "multext-east-msd",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:-61--126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "AType",
          "package": "multext-east-msd",
          "signature": "AType AType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "AType",
          "package": "multext-east-msd",
          "partial": "AType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:AType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Abessive",
          "package": "multext-east-msd",
          "signature": "Abessive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Abessive",
          "package": "multext-east-msd",
          "partial": "Abessive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Abessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Ablative",
          "package": "multext-east-msd",
          "signature": "Ablative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Ablative",
          "package": "multext-east-msd",
          "partial": "Ablative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Ablative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Accusative",
          "package": "multext-east-msd",
          "signature": "Accusative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Accusative",
          "package": "multext-east-msd",
          "partial": "Accusative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Accusative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Active",
          "package": "multext-east-msd",
          "signature": "Active",
          "source": "src/Data-MultextEastMsd.html#Voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Active",
          "package": "multext-east-msd",
          "partial": "Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Active"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Adessive",
          "package": "multext-east-msd",
          "signature": "Adessive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Adessive",
          "package": "multext-east-msd",
          "partial": "Adessive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Adessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Aditive",
          "package": "multext-east-msd",
          "signature": "Aditive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Aditive",
          "package": "multext-east-msd",
          "partial": "Aditive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Aditive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Adjective",
          "package": "multext-east-msd",
          "signature": "Adjective",
          "source": "src/Data-MultextEastMsd.html#PoS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Adjective",
          "package": "multext-east-msd",
          "partial": "Adjective",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Adjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Adposition",
          "package": "multext-east-msd",
          "signature": "Adposition",
          "source": "src/Data-MultextEastMsd.html#PoS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Adposition",
          "package": "multext-east-msd",
          "partial": "Adposition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Adposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Allative",
          "package": "multext-east-msd",
          "signature": "Allative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Allative",
          "package": "multext-east-msd",
          "partial": "Allative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Allative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Animate",
          "package": "multext-east-msd",
          "signature": "Animate Bool",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Animate",
          "package": "multext-east-msd",
          "partial": "Animate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Animate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Aorist",
          "package": "multext-east-msd",
          "signature": "Aorist",
          "source": "src/Data-MultextEastMsd.html#Tense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Aorist",
          "package": "multext-east-msd",
          "partial": "Aorist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Aorist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Approx",
          "package": "multext-east-msd",
          "signature": "Approx",
          "source": "src/Data-MultextEastMsd.html#MForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Approx",
          "package": "multext-east-msd",
          "partial": "Approx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Aspect",
          "package": "multext-east-msd",
          "signature": "Aspect Aspect",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Aspect",
          "package": "multext-east-msd",
          "partial": "Aspect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Aspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Auxiliary",
          "package": "multext-east-msd",
          "signature": "Auxiliary",
          "source": "src/Data-MultextEastMsd.html#VType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Auxiliary",
          "package": "multext-east-msd",
          "partial": "Auxiliary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Auxiliary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Base",
          "package": "multext-east-msd",
          "signature": "Base",
          "source": "src/Data-MultextEastMsd.html#VType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Base",
          "package": "multext-east-msd",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Both",
          "package": "multext-east-msd",
          "signature": "Both",
          "source": "src/Data-MultextEastMsd.html#MForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Both",
          "package": "multext-east-msd",
          "partial": "Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CTCorrelat",
          "package": "multext-east-msd",
          "signature": "CTCorrelat",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CTCorrelat",
          "package": "multext-east-msd",
          "partial": "CTCorrelat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTCorrelat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CTRepetit",
          "package": "multext-east-msd",
          "signature": "CTRepetit",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CTRepetit",
          "package": "multext-east-msd",
          "partial": "CTRepetit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTRepetit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CTSentence",
          "package": "multext-east-msd",
          "signature": "CTSentence",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CTSentence",
          "package": "multext-east-msd",
          "partial": "CTSentence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CTSimple",
          "package": "multext-east-msd",
          "signature": "CTSimple",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CTSimple",
          "package": "multext-east-msd",
          "partial": "CTSimple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CTWords",
          "package": "multext-east-msd",
          "signature": "CTWords",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CTWords",
          "package": "multext-east-msd",
          "partial": "CTWords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CType",
          "package": "multext-east-msd",
          "signature": "CType CType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CType",
          "package": "multext-east-msd",
          "partial": "CType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Cardinal",
          "package": "multext-east-msd",
          "signature": "Cardinal",
          "source": "src/Data-MultextEastMsd.html#MType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Cardinal",
          "package": "multext-east-msd",
          "partial": "Cardinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Case",
          "package": "multext-east-msd",
          "signature": "Case Case",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Case",
          "package": "multext-east-msd",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Causalis",
          "package": "multext-east-msd",
          "signature": "Causalis",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Causalis",
          "package": "multext-east-msd",
          "partial": "Causalis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Causalis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Class",
          "package": "multext-east-msd",
          "signature": "Class Class",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Class",
          "package": "multext-east-msd",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Clitic",
          "package": "multext-east-msd",
          "signature": "Clitic Bool",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Clitic",
          "package": "multext-east-msd",
          "partial": "Clitic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Clitic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CliticS",
          "package": "multext-east-msd",
          "signature": "CliticS Bool",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CliticS",
          "package": "multext-east-msd",
          "partial": "Clitic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CliticS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Collect",
          "package": "multext-east-msd",
          "signature": "Collect",
          "source": "src/Data-MultextEastMsd.html#MType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Collect",
          "package": "multext-east-msd",
          "partial": "Collect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Collective",
          "package": "multext-east-msd",
          "signature": "Collective",
          "source": "src/Data-MultextEastMsd.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Collective",
          "package": "multext-east-msd",
          "partial": "Collective",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Collective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Common",
          "package": "multext-east-msd",
          "signature": "Common",
          "source": "src/Data-MultextEastMsd.html#NType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Common",
          "package": "multext-east-msd",
          "partial": "Common",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Common"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Comparative",
          "package": "multext-east-msd",
          "signature": "Comparative",
          "source": "src/Data-MultextEastMsd.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Comparative",
          "package": "multext-east-msd",
          "partial": "Comparative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Comparative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Compound",
          "package": "multext-east-msd",
          "signature": "Compound",
          "source": "src/Data-MultextEastMsd.html#Formation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Compound",
          "package": "multext-east-msd",
          "partial": "Compound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Compound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Conditional",
          "package": "multext-east-msd",
          "signature": "Conditional",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Conditional",
          "package": "multext-east-msd",
          "partial": "Conditional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Conditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Conjunction",
          "package": "multext-east-msd",
          "signature": "Conjunction",
          "source": "src/Data-MultextEastMsd.html#PoS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Conjunction",
          "package": "multext-east-msd",
          "partial": "Conjunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Conjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "CoordType",
          "package": "multext-east-msd",
          "signature": "CoordType CoordType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "CoordType",
          "package": "multext-east-msd",
          "partial": "Coord Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CoordType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Coordinating",
          "package": "multext-east-msd",
          "signature": "Coordinating",
          "source": "src/Data-MultextEastMsd.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Coordinating",
          "package": "multext-east-msd",
          "partial": "Coordinating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Coordinating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Copula",
          "package": "multext-east-msd",
          "signature": "Copula",
          "source": "src/Data-MultextEastMsd.html#VType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Copula",
          "package": "multext-east-msd",
          "partial": "Copula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Copula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Count",
          "package": "multext-east-msd",
          "signature": "Count",
          "source": "src/Data-MultextEastMsd.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Count",
          "package": "multext-east-msd",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Courtesy",
          "package": "multext-east-msd",
          "signature": "Courtesy Bool",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Courtesy",
          "package": "multext-east-msd",
          "partial": "Courtesy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Courtesy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Dative",
          "package": "multext-east-msd",
          "signature": "Dative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Dative",
          "package": "multext-east-msd",
          "partial": "Dative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Dative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Definite",
          "package": "multext-east-msd",
          "signature": "Definite",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Definite",
          "package": "multext-east-msd",
          "partial": "Definite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Definite1",
          "package": "multext-east-msd",
          "signature": "Definite1",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Definite1",
          "package": "multext-east-msd",
          "partial": "Definite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Definite2",
          "package": "multext-east-msd",
          "signature": "Definite2",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Definite2",
          "package": "multext-east-msd",
          "partial": "Definite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Definite34",
          "package": "multext-east-msd",
          "signature": "Definite34",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Definite34",
          "package": "multext-east-msd",
          "partial": "Definite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Definiteness",
          "package": "multext-east-msd",
          "signature": "Definiteness Definiteness",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Definiteness",
          "package": "multext-east-msd",
          "partial": "Definiteness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definiteness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Degree",
          "package": "multext-east-msd",
          "signature": "Degree Degree",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Degree",
          "package": "multext-east-msd",
          "partial": "Degree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Delative",
          "package": "multext-east-msd",
          "signature": "Delative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Delative",
          "package": "multext-east-msd",
          "partial": "Delative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Delative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Demonstrative",
          "package": "multext-east-msd",
          "signature": "Demonstrative",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Demonstrative",
          "package": "multext-east-msd",
          "partial": "Demonstrative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Demonstrative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Digit",
          "package": "multext-east-msd",
          "signature": "Digit",
          "source": "src/Data-MultextEastMsd.html#MForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Digit",
          "package": "multext-east-msd",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Diminutive",
          "package": "multext-east-msd",
          "signature": "Diminutive",
          "source": "src/Data-MultextEastMsd.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Diminutive",
          "package": "multext-east-msd",
          "partial": "Diminutive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Diminutive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Direct",
          "package": "multext-east-msd",
          "signature": "Direct",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Direct",
          "package": "multext-east-msd",
          "partial": "Direct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Distributive",
          "package": "multext-east-msd",
          "signature": "Distributive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Distributive",
          "package": "multext-east-msd",
          "partial": "Distributive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Distributive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Dual",
          "package": "multext-east-msd",
          "signature": "Dual",
          "source": "src/Data-MultextEastMsd.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Dual",
          "package": "multext-east-msd",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Elative",
          "package": "multext-east-msd",
          "signature": "Elative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Elative",
          "package": "multext-east-msd",
          "partial": "Elative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Elative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "ElativeD",
          "package": "multext-east-msd",
          "signature": "ElativeD",
          "source": "src/Data-MultextEastMsd.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "ElativeD",
          "package": "multext-east-msd",
          "partial": "Elative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:ElativeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Essive",
          "package": "multext-east-msd",
          "signature": "Essive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Essive",
          "package": "multext-east-msd",
          "partial": "Essive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Essive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "EssiveFormal",
          "package": "multext-east-msd",
          "signature": "EssiveFormal",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "EssiveFormal",
          "package": "multext-east-msd",
          "partial": "Essive Formal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:EssiveFormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Factive",
          "package": "multext-east-msd",
          "signature": "Factive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Factive",
          "package": "multext-east-msd",
          "partial": "Factive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Factive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Feminine",
          "package": "multext-east-msd",
          "signature": "Feminine",
          "source": "src/Data-MultextEastMsd.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Feminine",
          "package": "multext-east-msd",
          "partial": "Feminine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Feminine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "First",
          "package": "multext-east-msd",
          "signature": "First",
          "source": "src/Data-MultextEastMsd.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "First",
          "package": "multext-east-msd",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Formation",
          "package": "multext-east-msd",
          "signature": "Formation Formation",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Formation",
          "package": "multext-east-msd",
          "partial": "Formation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Formation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Fractal",
          "package": "multext-east-msd",
          "signature": "Fractal",
          "source": "src/Data-MultextEastMsd.html#MType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Fractal",
          "package": "multext-east-msd",
          "partial": "Fractal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Fractal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "FullArt",
          "package": "multext-east-msd",
          "signature": "FullArt",
          "source": "src/Data-MultextEastMsd.html#Definiteness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "FullArt",
          "package": "multext-east-msd",
          "partial": "Full Art",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:FullArt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Future",
          "package": "multext-east-msd",
          "signature": "Future",
          "source": "src/Data-MultextEastMsd.html#Tense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Future",
          "package": "multext-east-msd",
          "partial": "Future",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Gender",
          "package": "multext-east-msd",
          "signature": "Gender Gender",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Gender",
          "package": "multext-east-msd",
          "partial": "Gender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Genitive",
          "package": "multext-east-msd",
          "signature": "Genitive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Genitive",
          "package": "multext-east-msd",
          "partial": "Genitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Genitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Gerund",
          "package": "multext-east-msd",
          "signature": "Gerund",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Gerund",
          "package": "multext-east-msd",
          "partial": "Gerund",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Gerund"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Illative",
          "package": "multext-east-msd",
          "signature": "Illative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Illative",
          "package": "multext-east-msd",
          "partial": "Illative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Illative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Imperative",
          "package": "multext-east-msd",
          "signature": "Imperative",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Imperative",
          "package": "multext-east-msd",
          "partial": "Imperative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Imperative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Imperfect",
          "package": "multext-east-msd",
          "signature": "Imperfect",
          "source": "src/Data-MultextEastMsd.html#Tense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Imperfect",
          "package": "multext-east-msd",
          "partial": "Imperfect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Imperfect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Indefinite",
          "package": "multext-east-msd",
          "signature": "Indefinite",
          "source": "src/Data-MultextEastMsd.html#AType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Indefinite",
          "package": "multext-east-msd",
          "partial": "Indefinite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Indefinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "IndefiniteC",
          "package": "multext-east-msd",
          "signature": "IndefiniteC",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "IndefiniteC",
          "package": "multext-east-msd",
          "partial": "Indefinite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:IndefiniteC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Indicative",
          "package": "multext-east-msd",
          "signature": "Indicative",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Indicative",
          "package": "multext-east-msd",
          "partial": "Indicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Indicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Inessive",
          "package": "multext-east-msd",
          "signature": "Inessive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Inessive",
          "package": "multext-east-msd",
          "partial": "Inessive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Inessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Infinitive",
          "package": "multext-east-msd",
          "signature": "Infinitive",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Infinitive",
          "package": "multext-east-msd",
          "partial": "Infinitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Infinitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Initial",
          "package": "multext-east-msd",
          "signature": "Initial",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Initial",
          "package": "multext-east-msd",
          "partial": "Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Instrumental",
          "package": "multext-east-msd",
          "signature": "Instrumental",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Instrumental",
          "package": "multext-east-msd",
          "partial": "Instrumental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Instrumental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Interrogative",
          "package": "multext-east-msd",
          "signature": "Interrogative",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Interrogative",
          "package": "multext-east-msd",
          "partial": "Interrogative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Interrogative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Komitative",
          "package": "multext-east-msd",
          "signature": "Komitative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Komitative",
          "package": "multext-east-msd",
          "partial": "Komitative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Komitative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Letter",
          "package": "multext-east-msd",
          "signature": "Letter",
          "source": "src/Data-MultextEastMsd.html#MForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Letter",
          "package": "multext-east-msd",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Locative",
          "package": "multext-east-msd",
          "signature": "Locative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Locative",
          "package": "multext-east-msd",
          "partial": "Locative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Locative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "MForm",
          "package": "multext-east-msd",
          "signature": "MForm MForm",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "MForm",
          "package": "multext-east-msd",
          "partial": "MForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:MForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "MForm_",
          "package": "multext-east-msd",
          "signature": "MForm_",
          "source": "src/Data-MultextEastMsd.html#MForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "MForm_",
          "package": "multext-east-msd",
          "partial": "MForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:MForm_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "MType",
          "package": "multext-east-msd",
          "signature": "MType MType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "MType",
          "package": "multext-east-msd",
          "partial": "MType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:MType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Main",
          "package": "multext-east-msd",
          "signature": "Main",
          "source": "src/Data-MultextEastMsd.html#VType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Main",
          "package": "multext-east-msd",
          "partial": "Main",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Masculine",
          "package": "multext-east-msd",
          "signature": "Masculine",
          "source": "src/Data-MultextEastMsd.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Masculine",
          "package": "multext-east-msd",
          "partial": "Masculine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Masculine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Modal",
          "package": "multext-east-msd",
          "signature": "Modal",
          "source": "src/Data-MultextEastMsd.html#VType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Modal",
          "package": "multext-east-msd",
          "partial": "Modal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Modal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Multiple",
          "package": "multext-east-msd",
          "signature": "Multiple",
          "source": "src/Data-MultextEastMsd.html#MType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Multiple",
          "package": "multext-east-msd",
          "partial": "Multiple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Multiple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Multiplicative",
          "package": "multext-east-msd",
          "signature": "Multiplicative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Multiplicative",
          "package": "multext-east-msd",
          "partial": "Multiplicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "NType",
          "package": "multext-east-msd",
          "signature": "NType NType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "NType",
          "package": "multext-east-msd",
          "partial": "NType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:NType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Negative",
          "package": "multext-east-msd",
          "signature": "Negative Bool",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Negative",
          "package": "multext-east-msd",
          "partial": "Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Neuter",
          "package": "multext-east-msd",
          "signature": "Neuter",
          "source": "src/Data-MultextEastMsd.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Neuter",
          "package": "multext-east-msd",
          "partial": "Neuter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Neuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "No",
          "package": "multext-east-msd",
          "signature": "No",
          "source": "src/Data-MultextEastMsd.html#Definiteness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "No",
          "package": "multext-east-msd",
          "partial": "No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:No"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Nominal",
          "package": "multext-east-msd",
          "signature": "Nominal",
          "source": "src/Data-MultextEastMsd.html#Formation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Nominal",
          "package": "multext-east-msd",
          "partial": "Nominal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Nominal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Nominative",
          "package": "multext-east-msd",
          "signature": "Nominative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Nominative",
          "package": "multext-east-msd",
          "partial": "Nominative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Nominative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "NonInitial",
          "package": "multext-east-msd",
          "signature": "NonInitial",
          "source": "src/Data-MultextEastMsd.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "NonInitial",
          "package": "multext-east-msd",
          "partial": "Non Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:NonInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Noun",
          "package": "multext-east-msd",
          "signature": "Noun",
          "source": "src/Data-MultextEastMsd.html#PoS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Noun",
          "package": "multext-east-msd",
          "partial": "Noun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Noun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Number",
          "package": "multext-east-msd",
          "signature": "Number Number",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Number",
          "package": "multext-east-msd",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Numeral",
          "package": "multext-east-msd",
          "signature": "Numeral",
          "source": "src/Data-MultextEastMsd.html#PoS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Numeral",
          "package": "multext-east-msd",
          "partial": "Numeral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Numeral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Oblique",
          "package": "multext-east-msd",
          "signature": "Oblique",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Oblique",
          "package": "multext-east-msd",
          "partial": "Oblique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Oblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "OneSTwoS",
          "package": "multext-east-msd",
          "signature": "OneSTwoS",
          "source": "src/Data-MultextEastMsd.html#Definiteness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "OneSTwoS",
          "package": "multext-east-msd",
          "partial": "One STwo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OneSTwoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Ordinal",
          "package": "multext-east-msd",
          "signature": "Ordinal",
          "source": "src/Data-MultextEastMsd.html#MType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Ordinal",
          "package": "multext-east-msd",
          "partial": "Ordinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "OrdinalT",
          "package": "multext-east-msd",
          "signature": "OrdinalT",
          "source": "src/Data-MultextEastMsd.html#AType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "OrdinalT",
          "package": "multext-east-msd",
          "partial": "Ordinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OrdinalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "OwnedNumber",
          "package": "multext-east-msd",
          "signature": "OwnedNumber Number",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "OwnedNumber",
          "package": "multext-east-msd",
          "partial": "Owned Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OwnedNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "OwnerNumber",
          "package": "multext-east-msd",
          "signature": "OwnerNumber Number",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "OwnerNumber",
          "package": "multext-east-msd",
          "partial": "Owner Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OwnerNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "OwnerPerson",
          "package": "multext-east-msd",
          "signature": "OwnerPerson Person",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "OwnerPerson",
          "package": "multext-east-msd",
          "partial": "Owner Person",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OwnerPerson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Participle",
          "package": "multext-east-msd",
          "signature": "Participle",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Participle",
          "package": "multext-east-msd",
          "partial": "Participle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Participle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Partitive",
          "package": "multext-east-msd",
          "signature": "Partitive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Partitive",
          "package": "multext-east-msd",
          "partial": "Partitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Partitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Passive",
          "package": "multext-east-msd",
          "signature": "Passive",
          "source": "src/Data-MultextEastMsd.html#Voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Passive",
          "package": "multext-east-msd",
          "partial": "Passive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Passive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Past",
          "package": "multext-east-msd",
          "signature": "Past",
          "source": "src/Data-MultextEastMsd.html#Tense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Past",
          "package": "multext-east-msd",
          "partial": "Past",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Past"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Perfective",
          "package": "multext-east-msd",
          "signature": "Perfective",
          "source": "src/Data-MultextEastMsd.html#Aspect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Perfective",
          "package": "multext-east-msd",
          "partial": "Perfective",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Perfective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Person",
          "package": "multext-east-msd",
          "signature": "Person Person",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Person",
          "package": "multext-east-msd",
          "partial": "Person",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Pluperfect",
          "package": "multext-east-msd",
          "signature": "Pluperfect",
          "source": "src/Data-MultextEastMsd.html#Tense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Pluperfect",
          "package": "multext-east-msd",
          "partial": "Pluperfect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Pluperfect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Plural",
          "package": "multext-east-msd",
          "signature": "Plural",
          "source": "src/Data-MultextEastMsd.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Plural",
          "package": "multext-east-msd",
          "partial": "Plural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Portmanteau",
          "package": "multext-east-msd",
          "signature": "Portmanteau",
          "source": "src/Data-MultextEastMsd.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Portmanteau",
          "package": "multext-east-msd",
          "partial": "Portmanteau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Portmanteau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Positive",
          "package": "multext-east-msd",
          "signature": "Positive",
          "source": "src/Data-MultextEastMsd.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Positive",
          "package": "multext-east-msd",
          "partial": "Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Possessive",
          "package": "multext-east-msd",
          "signature": "Possessive",
          "source": "src/Data-MultextEastMsd.html#AType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Possessive",
          "package": "multext-east-msd",
          "partial": "Possessive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Possessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Postposition",
          "package": "multext-east-msd",
          "signature": "Postposition",
          "source": "src/Data-MultextEastMsd.html#SType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Postposition",
          "package": "multext-east-msd",
          "partial": "Postposition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Postposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Preposition",
          "package": "multext-east-msd",
          "signature": "Preposition",
          "source": "src/Data-MultextEastMsd.html#SType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Preposition",
          "package": "multext-east-msd",
          "partial": "Preposition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Preposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Present",
          "package": "multext-east-msd",
          "signature": "Present",
          "source": "src/Data-MultextEastMsd.html#Tense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Present",
          "package": "multext-east-msd",
          "partial": "Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Present"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Progressive",
          "package": "multext-east-msd",
          "signature": "Progressive",
          "source": "src/Data-MultextEastMsd.html#Aspect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Progressive",
          "package": "multext-east-msd",
          "partial": "Progressive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Progressive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Proper",
          "package": "multext-east-msd",
          "signature": "Proper",
          "source": "src/Data-MultextEastMsd.html#NType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Proper",
          "package": "multext-east-msd",
          "partial": "Proper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Proper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Qualificative",
          "package": "multext-east-msd",
          "signature": "Qualificative",
          "source": "src/Data-MultextEastMsd.html#AType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Qualificative",
          "package": "multext-east-msd",
          "partial": "Qualificative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Qualificative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Quotative",
          "package": "multext-east-msd",
          "signature": "Quotative",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Quotative",
          "package": "multext-east-msd",
          "partial": "Quotative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Quotative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Relative",
          "package": "multext-east-msd",
          "signature": "Relative",
          "source": "src/Data-MultextEastMsd.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Relative",
          "package": "multext-east-msd",
          "partial": "Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Roman",
          "package": "multext-east-msd",
          "signature": "Roman",
          "source": "src/Data-MultextEastMsd.html#MForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Roman",
          "package": "multext-east-msd",
          "partial": "Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Roman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "STNegative",
          "package": "multext-east-msd",
          "signature": "STNegative",
          "source": "src/Data-MultextEastMsd.html#SubType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "STNegative",
          "package": "multext-east-msd",
          "partial": "STNegative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:STNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "STPositive",
          "package": "multext-east-msd",
          "signature": "STPositive",
          "source": "src/Data-MultextEastMsd.html#SubType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "STPositive",
          "package": "multext-east-msd",
          "partial": "STPositive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:STPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "SType",
          "package": "multext-east-msd",
          "signature": "SType SType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "SType",
          "package": "multext-east-msd",
          "partial": "SType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:SType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Second",
          "package": "multext-east-msd",
          "signature": "Second",
          "source": "src/Data-MultextEastMsd.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Second",
          "package": "multext-east-msd",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "ShortArt",
          "package": "multext-east-msd",
          "signature": "ShortArt",
          "source": "src/Data-MultextEastMsd.html#Definiteness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "ShortArt",
          "package": "multext-east-msd",
          "partial": "Short Art",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:ShortArt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Simple",
          "package": "multext-east-msd",
          "signature": "Simple",
          "source": "src/Data-MultextEastMsd.html#Formation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Simple",
          "package": "multext-east-msd",
          "partial": "Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Singular",
          "package": "multext-east-msd",
          "signature": "Singular",
          "source": "src/Data-MultextEastMsd.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Singular",
          "package": "multext-east-msd",
          "partial": "Singular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Singular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Sociative",
          "package": "multext-east-msd",
          "signature": "Sociative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Sociative",
          "package": "multext-east-msd",
          "partial": "Sociative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Sociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Special",
          "package": "multext-east-msd",
          "signature": "Special",
          "source": "src/Data-MultextEastMsd.html#MType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Special",
          "package": "multext-east-msd",
          "partial": "Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "SubType",
          "package": "multext-east-msd",
          "signature": "SubType SubType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "SubType",
          "package": "multext-east-msd",
          "partial": "Sub Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:SubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Subjunctive",
          "package": "multext-east-msd",
          "signature": "Subjunctive",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Subjunctive",
          "package": "multext-east-msd",
          "partial": "Subjunctive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Subjunctive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Sublative",
          "package": "multext-east-msd",
          "signature": "Sublative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Sublative",
          "package": "multext-east-msd",
          "partial": "Sublative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Sublative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Subordinating",
          "package": "multext-east-msd",
          "signature": "Subordinating",
          "source": "src/Data-MultextEastMsd.html#CType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Subordinating",
          "package": "multext-east-msd",
          "partial": "Subordinating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Subordinating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Superessive",
          "package": "multext-east-msd",
          "signature": "Superessive",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Superessive",
          "package": "multext-east-msd",
          "partial": "Superessive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Superessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Superlative",
          "package": "multext-east-msd",
          "signature": "Superlative",
          "source": "src/Data-MultextEastMsd.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Superlative",
          "package": "multext-east-msd",
          "partial": "Superlative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Superlative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Supine",
          "package": "multext-east-msd",
          "signature": "Supine",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Supine",
          "package": "multext-east-msd",
          "partial": "Supine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Supine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Temporalis",
          "package": "multext-east-msd",
          "signature": "Temporalis",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Temporalis",
          "package": "multext-east-msd",
          "partial": "Temporalis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Temporalis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Tense",
          "package": "multext-east-msd",
          "signature": "Tense Tense",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Tense",
          "package": "multext-east-msd",
          "partial": "Tense",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Tense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Terminative",
          "package": "multext-east-msd",
          "signature": "Terminative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Terminative",
          "package": "multext-east-msd",
          "partial": "Terminative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Terminative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Third",
          "package": "multext-east-msd",
          "signature": "Third",
          "source": "src/Data-MultextEastMsd.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Third",
          "package": "multext-east-msd",
          "partial": "Third",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Third"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Transgressive",
          "package": "multext-east-msd",
          "signature": "Transgressive",
          "source": "src/Data-MultextEastMsd.html#VForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Transgressive",
          "package": "multext-east-msd",
          "partial": "Transgressive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Transgressive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Translative",
          "package": "multext-east-msd",
          "signature": "Translative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Translative",
          "package": "multext-east-msd",
          "partial": "Translative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Translative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "VForm",
          "package": "multext-east-msd",
          "signature": "VForm VForm",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "VForm",
          "package": "multext-east-msd",
          "partial": "VForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:VForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "VType",
          "package": "multext-east-msd",
          "signature": "VType VType",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "VType",
          "package": "multext-east-msd",
          "partial": "VType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:VType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Verb",
          "package": "multext-east-msd",
          "signature": "Verb",
          "source": "src/Data-MultextEastMsd.html#PoS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Verb",
          "package": "multext-east-msd",
          "partial": "Verb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Verb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Vocative",
          "package": "multext-east-msd",
          "signature": "Vocative",
          "source": "src/Data-MultextEastMsd.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Vocative",
          "package": "multext-east-msd",
          "partial": "Vocative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Vocative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Voice",
          "package": "multext-east-msd",
          "signature": "Voice Voice",
          "source": "src/Data-MultextEastMsd.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Voice",
          "package": "multext-east-msd",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Voice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MultextEastMsd",
          "name": "Yes",
          "package": "multext-east-msd",
          "signature": "Yes",
          "source": "src/Data-MultextEastMsd.html#Definiteness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "Yes",
          "package": "multext-east-msd",
          "partial": "Yes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Yes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the attributes are set to the specified values.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "check",
          "package": "multext-east-msd",
          "signature": "[Feature] -\u003e Msd -\u003e Bool",
          "source": "src/Data-MultextEastMsd.html#check",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the attributes are set to the specified values",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "check",
          "normalized": "[Feature]-\u003eMsd-\u003eBool",
          "package": "multext-east-msd",
          "signature": "[Feature]-\u003eMsd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the features (attribute-value pairs) of a \u003ccode\u003eMsd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "features",
          "package": "multext-east-msd",
          "signature": "Msd -\u003e [Feature]",
          "source": "src/Data-MultextEastMsd.html#features",
          "type": "function"
        },
        "index": {
          "description": "Returns the features attribute-value pairs of Msd",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "features",
          "normalized": "Msd-\u003e[Feature]",
          "package": "multext-east-msd",
          "signature": "Msd-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a MULTEXT-East string notation into an \u003ccode\u003eMsd\u003c/code\u003e datatype.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if string is not a valid MULTEXT-East string.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "fromString",
          "package": "multext-east-msd",
          "signature": "String -\u003e Maybe Msd",
          "source": "src/Data-MultextEastMsd.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Converts MULTEXT-East string notation into an Msd datatype Returns Nothing if string is not valid MULTEXT-East string",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "fromString",
          "normalized": "String-\u003eMaybe Msd",
          "package": "multext-east-msd",
          "partial": "String",
          "signature": "String-\u003eMaybe Msd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the value of a specified attribute.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "get",
          "package": "multext-east-msd",
          "signature": "Attribute a -\u003e Msd -\u003e Maybe Feature",
          "source": "src/Data-MultextEastMsd.html#get",
          "type": "function"
        },
        "index": {
          "description": "Gets the value of specified attribute",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "get",
          "normalized": "Attribute a-\u003eMsd-\u003eMaybe Feature",
          "package": "multext-east-msd",
          "signature": "Attribute a-\u003eMsd-\u003eMaybe Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a morphosyntactic descriptor (an abstract \u003ccode\u003eMsd\u003c/code\u003e datatype) of \n a specified part-of-speech and with specified features (attribute-value \n pairs). Duplicated attributes and attributes not applicable to the given \n part-of-speech are ignored.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "msd",
          "package": "multext-east-msd",
          "signature": "PoS -\u003e [Feature] -\u003e Msd",
          "source": "src/Data-MultextEastMsd.html#msd",
          "type": "function"
        },
        "index": {
          "description": "Constructs morphosyntactic descriptor an abstract Msd datatype of specified part-of-speech and with specified features attribute-value pairs Duplicated attributes and attributes not applicable to the given part-of-speech are ignored",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "msd",
          "normalized": "PoS-\u003e[Feature]-\u003eMsd",
          "package": "multext-east-msd",
          "signature": "PoS-\u003e[Feature]-\u003eMsd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:msd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a part-of-speech (\u003ccode\u003e\u003ca\u003ePoS\u003c/a\u003e\u003c/code\u003e value) of an \u003ccode\u003eMsd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "pos",
          "package": "multext-east-msd",
          "signature": "Msd -\u003e PoS",
          "source": "src/Data-MultextEastMsd.html#pos",
          "type": "function"
        },
        "index": {
          "description": "Returns part-of-speech PoS value of an Msd",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "pos",
          "normalized": "Msd-\u003ePoS",
          "package": "multext-east-msd",
          "signature": "Msd-\u003ePoS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the specified features (attribute-value pairs). Duplicated \n attributes and  attributes not applicable to the given part-of-speech \n are ignored.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "set",
          "package": "multext-east-msd",
          "signature": "[Feature] -\u003e Msd -\u003e Msd",
          "source": "src/Data-MultextEastMsd.html#set",
          "type": "function"
        },
        "index": {
          "description": "Sets the specified features attribute-value pairs Duplicated attributes and attributes not applicable to the given part-of-speech are ignored",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "set",
          "normalized": "[Feature]-\u003eMsd-\u003eMsd",
          "package": "multext-east-msd",
          "signature": "[Feature]-\u003eMsd-\u003eMsd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003eMsd\u003c/code\u003e datatype into a MULTEXT-East string notation.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "toString",
          "package": "multext-east-msd",
          "signature": "Msd -\u003e String",
          "source": "src/Data-MultextEastMsd.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Converts an Msd datatype into MULTEXT-East string notation",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "toString",
          "normalized": "Msd-\u003eString",
          "package": "multext-east-msd",
          "partial": "String",
          "signature": "Msd-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsets the value of a specified attribute.\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "unset",
          "package": "multext-east-msd",
          "signature": "Attribute a -\u003e Msd -\u003e Msd",
          "source": "src/Data-MultextEastMsd.html#unset",
          "type": "function"
        },
        "index": {
          "description": "Unsets the value of specified attribute",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "unset",
          "normalized": "Attribute a-\u003eMsd-\u003eMsd",
          "package": "multext-east-msd",
          "signature": "Attribute a-\u003eMsd-\u003eMsd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:unset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the string conforms to the MULTEXT-East specification.\n Defined as:\n \u003ccode\u003e validString = isJust . fromString \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MultextEastMsd",
          "name": "validString",
          "package": "multext-east-msd",
          "signature": "String -\u003e Bool",
          "source": "src/Data-MultextEastMsd.html#validString",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the string conforms to the MULTEXT-East specification Defined as validString isJust fromString",
          "hierarchy": "Data MultextEastMsd",
          "module": "Data.MultextEastMsd",
          "name": "validString",
          "normalized": "String-\u003eBool",
          "package": "multext-east-msd",
          "partial": "String",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:validString"
      }
    }
  ]
]