[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the MULTEXT-East morphosyntactic descriptors.\n\u003c/p\u003e\u003cp\u003eMULTEXT-East encodes values of morphosyntatic attributes in a single string,\n using positional encoding. Each attribute is represented by a single letter\n at a predefined position, while non-applicable attributes are represented by\n hyphens. For example, \u003ccode\u003eNcmsg\u003c/code\u003e denotes a common noun (\u003ccode\u003eNc\u003c/code\u003e) in masculine\n singular genitive (\u003ccode\u003emsg\u003c/code\u003e) case. For details, refer to \u003ca\u003ehttp://nl.ijs.si/ME\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eCurrently, only MULTEXT-East Version 3 is supported. MULTEXT-East Version 3\n covers morphosyntactic descriptions for Bulgarian, Croatian, Czech, English,\n Estonian, Hungarian, Lithuanian, Macedonian, Persian, Polish, Resian,\n Romanian, Russian, Serbian, Slovak, Slovene, and Ukrainian. For details,\n refer to \u003ca\u003ehttp://nl.ijs.si/ME/V3/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUsage example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet Just d1 = fromString \"Ncmsg\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epos d1\n\u003c/code\u003e\u003c/strong\u003eNoun\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efeatures d1\n\u003c/code\u003e\u003c/strong\u003e[NType Common,Gender Masculine,Number Singular,Case Genitive]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet d2 = unset NType d1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoString d2\n\u003c/code\u003e\u003c/strong\u003e\"N-msg\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ed1 == d2\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ed1 =~= d2\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "module",
        "fct-source": "src/Data-MultextEastMsd.html",
        "fct-type": "module",
        "title": "MultextEastMsd"
      },
      "index": {
        "description": "Implementation of the MULTEXT-East morphosyntactic descriptors MULTEXT-East encodes values of morphosyntatic attributes in single string using positional encoding Each attribute is represented by single letter at predefined position while non-applicable attributes are represented by hyphens For example Ncmsg denotes common noun Nc in masculine singular genitive msg case For details refer to http nl.ijs.si ME Currently only MULTEXT-East Version is supported MULTEXT-East Version covers morphosyntactic descriptions for Bulgarian Croatian Czech English Estonian Hungarian Lithuanian Macedonian Persian Polish Resian Romanian Russian Serbian Slovak Slovene and Ukrainian For details refer to http nl.ijs.si ME V3 Usage example let Just d1 fromString Ncmsg pos d1 Noun features d1 NType Common Gender Masculine Number Singular Case Genitive let d2 unset NType d1 toString d2 N-msg d1 d2 False d1 d2 True",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "MultextEastMsd",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Multext East Msd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:AType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#AType",
        "fct-type": "data",
        "title": "AType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "AType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "AType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Aspect",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Aspect",
        "fct-type": "data",
        "title": "Aspect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Aspect",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Aspect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Attribute",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "type",
        "fct-source": "src/Data-MultextEastMsd.html#Attribute",
        "fct-type": "type",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Attribute",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:CType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#CType",
        "fct-type": "data",
        "title": "CType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "CType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Case",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "data",
        "title": "Case"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Case",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Class",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "data",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Class",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:CoordType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "data",
        "title": "CoordType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CoordType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Coord Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Definiteness",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Definiteness",
        "fct-type": "data",
        "title": "Definiteness"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Definiteness",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Definiteness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Degree",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Degree",
        "fct-type": "data",
        "title": "Degree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Degree",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Feature",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "data",
        "title": "Feature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Feature",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Formation",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Formation",
        "fct-type": "data",
        "title": "Formation"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Formation",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Formation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Gender",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Gender",
        "fct-type": "data",
        "title": "Gender"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Gender",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Gender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:MForm",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#MForm",
        "fct-type": "data",
        "title": "MForm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "MForm",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "MForm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:MType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#MType",
        "fct-type": "data",
        "title": "MType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "MType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "MType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Msd",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Msd",
        "fct-type": "data",
        "title": "Msd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Msd",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Msd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:NType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#NType",
        "fct-type": "data",
        "title": "NType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "NType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "NType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Number",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Number",
        "fct-type": "data",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Number",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Person",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Person",
        "fct-type": "data",
        "title": "Person"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Person",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Person",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:PoS",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#PoS",
        "fct-type": "data",
        "title": "PoS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "PoS",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Po",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:SType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#SType",
        "fct-type": "data",
        "title": "SType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "SType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "SType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:SubType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#SubType",
        "fct-type": "data",
        "title": "SubType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "SubType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Sub Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Tense",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Tense",
        "fct-type": "data",
        "title": "Tense"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Tense",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Tense",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:VForm",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "data",
        "title": "VForm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "VForm",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "VForm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:VType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#VType",
        "fct-type": "data",
        "title": "VType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "VType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "VType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#t:Voice",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "data",
        "fct-source": "src/Data-MultextEastMsd.html#Voice",
        "fct-type": "data",
        "title": "Voice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Voice",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Voice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:-61--126--61-",
      "description": {
        "fct-descr": "\u003cp\u003eA wildcard-matching operator between two Msd patterns.\n Relation \u003ccode\u003e msd1 =~= msd2 \u003c/code\u003e holds iff \u003ccode\u003emsd1\u003c/code\u003e and \u003ccode\u003emsd2\u003c/code\u003e are of the same\n part-of-speech and the attributes common to \u003ccode\u003emsd1\u003c/code\u003e\n and \u003ccode\u003emsd2\u003c/code\u003e have identical values. The attributes of \u003ccode\u003emsd1\u003c/code\u003e that are not\n set in \u003ccode\u003emsd2\u003c/code\u003e (and conversely) are ignored in the comparison.\n In MULTEXT-East notation, this is tantamount to \n having character code \u003ccode\u003e-\u003c/code\u003e (hyphen) act as a wildcard.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-MultextEastMsd.html#%3D~%3D",
        "fct-type": "function",
        "title": "(=~=)"
      },
      "index": {
        "description": "wildcard-matching operator between two Msd patterns Relation msd1 msd2 holds iff msd1 and msd2 are of the same part-of-speech and the attributes common to msd1 and msd2 have identical values The attributes of msd1 that are not set in msd2 and conversely are ignored in the comparison In MULTEXT-East notation this is tantamount to having character code hyphen act as wildcard",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "(=~=) =~=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:AType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "AType AType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "AType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "AType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "AType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Abessive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Abessive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Abessive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Abessive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Abessive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Ablative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Ablative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Ablative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Ablative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Ablative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Accusative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Accusative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Accusative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Accusative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Accusative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Active",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Active",
        "fct-source": "src/Data-MultextEastMsd.html#Voice",
        "fct-type": "function",
        "title": "Active"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Active",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Adessive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Adessive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Adessive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Adessive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Adessive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Aditive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Aditive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Aditive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Aditive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Aditive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Adjective",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Adjective",
        "fct-source": "src/Data-MultextEastMsd.html#PoS",
        "fct-type": "function",
        "title": "Adjective"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Adjective",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Adjective",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Adposition",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Adposition",
        "fct-source": "src/Data-MultextEastMsd.html#PoS",
        "fct-type": "function",
        "title": "Adposition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Adposition",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Adposition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Allative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Allative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Allative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Allative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Allative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Animate",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Animate Bool",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Animate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Animate",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Animate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Aorist",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Aorist",
        "fct-source": "src/Data-MultextEastMsd.html#Tense",
        "fct-type": "function",
        "title": "Aorist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Aorist",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Aorist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Approx",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Approx",
        "fct-source": "src/Data-MultextEastMsd.html#MForm",
        "fct-type": "function",
        "title": "Approx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Approx",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Approx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Aspect",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Aspect Aspect",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Aspect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Aspect",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Aspect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Auxiliary",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Auxiliary",
        "fct-source": "src/Data-MultextEastMsd.html#VType",
        "fct-type": "function",
        "title": "Auxiliary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Auxiliary",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Auxiliary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Base",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Base",
        "fct-source": "src/Data-MultextEastMsd.html#VType",
        "fct-type": "function",
        "title": "Base"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Base",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Both",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Both",
        "fct-source": "src/Data-MultextEastMsd.html#MForm",
        "fct-type": "function",
        "title": "Both"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Both",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Both",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTCorrelat",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CTCorrelat",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "function",
        "title": "CTCorrelat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CTCorrelat",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "CTCorrelat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTRepetit",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CTRepetit",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "function",
        "title": "CTRepetit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CTRepetit",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "CTRepetit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTSentence",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CTSentence",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "function",
        "title": "CTSentence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CTSentence",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "CTSentence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTSimple",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CTSimple",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "function",
        "title": "CTSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CTSimple",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "CTSimple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CTWords",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CTWords",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "function",
        "title": "CTWords"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CTWords",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "CTWords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CType CType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "CType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "CType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Cardinal",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Cardinal",
        "fct-source": "src/Data-MultextEastMsd.html#MType",
        "fct-type": "function",
        "title": "Cardinal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Cardinal",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Cardinal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Case",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Case Case",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Case"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Case",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Causalis",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Causalis",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Causalis"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Causalis",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Causalis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Class",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Class Class",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Class",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Clitic",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Clitic Bool",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Clitic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Clitic",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Clitic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CliticS",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CliticS Bool",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "CliticS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CliticS",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Clitic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Collect",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Collect",
        "fct-source": "src/Data-MultextEastMsd.html#MType",
        "fct-type": "function",
        "title": "Collect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Collect",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Collect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Collective",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Collective",
        "fct-source": "src/Data-MultextEastMsd.html#Number",
        "fct-type": "function",
        "title": "Collective"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Collective",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Collective",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Common",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Common",
        "fct-source": "src/Data-MultextEastMsd.html#NType",
        "fct-type": "function",
        "title": "Common"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Common",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Comparative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Comparative",
        "fct-source": "src/Data-MultextEastMsd.html#Degree",
        "fct-type": "function",
        "title": "Comparative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Comparative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Comparative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Compound",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Compound",
        "fct-source": "src/Data-MultextEastMsd.html#Formation",
        "fct-type": "function",
        "title": "Compound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Compound",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Compound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Conditional",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Conditional",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Conditional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Conditional",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Conditional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Conjunction",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Conjunction",
        "fct-source": "src/Data-MultextEastMsd.html#PoS",
        "fct-type": "function",
        "title": "Conjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Conjunction",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Conjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:CoordType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "CoordType CoordType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "CoordType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "CoordType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Coord Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Coordinating",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Coordinating",
        "fct-source": "src/Data-MultextEastMsd.html#CType",
        "fct-type": "function",
        "title": "Coordinating"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Coordinating",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Coordinating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Copula",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Copula",
        "fct-source": "src/Data-MultextEastMsd.html#VType",
        "fct-type": "function",
        "title": "Copula"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Copula",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Copula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Count",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Count",
        "fct-source": "src/Data-MultextEastMsd.html#Number",
        "fct-type": "function",
        "title": "Count"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Count",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Courtesy",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Courtesy Bool",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Courtesy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Courtesy",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Courtesy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Dative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Dative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Dative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Dative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Dative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Definite",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "Definite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Definite",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Definite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite1",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Definite1",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "Definite1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Definite1",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Definite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite2",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Definite2",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "Definite2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Definite2",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Definite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definite34",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Definite34",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "Definite34"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Definite34",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Definite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Definiteness",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Definiteness Definiteness",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Definiteness"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Definiteness",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Definiteness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Degree",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Degree Degree",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Degree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Degree",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Delative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Delative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Delative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Delative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Delative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Demonstrative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Demonstrative",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "Demonstrative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Demonstrative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Demonstrative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Digit",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Digit",
        "fct-source": "src/Data-MultextEastMsd.html#MForm",
        "fct-type": "function",
        "title": "Digit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Digit",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Digit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Diminutive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Diminutive",
        "fct-source": "src/Data-MultextEastMsd.html#Degree",
        "fct-type": "function",
        "title": "Diminutive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Diminutive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Diminutive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Direct",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Direct",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Direct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Direct",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Direct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Distributive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Distributive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Distributive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Distributive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Distributive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Dual",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Dual",
        "fct-source": "src/Data-MultextEastMsd.html#Number",
        "fct-type": "function",
        "title": "Dual"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Dual",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Elative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Elative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Elative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Elative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Elative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:ElativeD",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "ElativeD",
        "fct-source": "src/Data-MultextEastMsd.html#Degree",
        "fct-type": "function",
        "title": "ElativeD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "ElativeD",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Elative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Essive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Essive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Essive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Essive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Essive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:EssiveFormal",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "EssiveFormal",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "EssiveFormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "EssiveFormal",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Essive Formal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Factive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Factive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Factive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Factive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Factive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Feminine",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Feminine",
        "fct-source": "src/Data-MultextEastMsd.html#Gender",
        "fct-type": "function",
        "title": "Feminine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Feminine",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Feminine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:First",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "First",
        "fct-source": "src/Data-MultextEastMsd.html#Person",
        "fct-type": "function",
        "title": "First"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "First",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Formation",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Formation Formation",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Formation"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Formation",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Formation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Fractal",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Fractal",
        "fct-source": "src/Data-MultextEastMsd.html#MType",
        "fct-type": "function",
        "title": "Fractal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Fractal",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Fractal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:FullArt",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "FullArt",
        "fct-source": "src/Data-MultextEastMsd.html#Definiteness",
        "fct-type": "function",
        "title": "FullArt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "FullArt",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Full Art",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Future",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Future",
        "fct-source": "src/Data-MultextEastMsd.html#Tense",
        "fct-type": "function",
        "title": "Future"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Future",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Gender",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Gender Gender",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Gender"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Gender",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Gender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Genitive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Genitive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Genitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Genitive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Genitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Gerund",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Gerund",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Gerund"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Gerund",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Gerund",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Illative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Illative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Illative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Illative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Illative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Imperative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Imperative",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Imperative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Imperative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Imperative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Imperfect",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Imperfect",
        "fct-source": "src/Data-MultextEastMsd.html#Tense",
        "fct-type": "function",
        "title": "Imperfect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Imperfect",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Imperfect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Indefinite",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Indefinite",
        "fct-source": "src/Data-MultextEastMsd.html#AType",
        "fct-type": "function",
        "title": "Indefinite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Indefinite",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Indefinite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:IndefiniteC",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "IndefiniteC",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "IndefiniteC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "IndefiniteC",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Indefinite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Indicative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Indicative",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Indicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Indicative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Indicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Inessive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Inessive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Inessive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Inessive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Inessive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Infinitive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Infinitive",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Infinitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Infinitive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Infinitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Initial",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Initial",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "function",
        "title": "Initial"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Initial",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Initial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Instrumental",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Instrumental",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Instrumental"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Instrumental",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Instrumental",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Interrogative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Interrogative",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "Interrogative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Interrogative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Interrogative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Komitative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Komitative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Komitative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Komitative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Komitative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Letter",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Letter",
        "fct-source": "src/Data-MultextEastMsd.html#MForm",
        "fct-type": "function",
        "title": "Letter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Letter",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Letter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Locative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Locative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Locative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Locative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Locative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:MForm",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "MForm MForm",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "MForm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "MForm",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "MForm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:MForm_",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "MForm_",
        "fct-source": "src/Data-MultextEastMsd.html#MForm",
        "fct-type": "function",
        "title": "MForm_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "MForm_",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "MForm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:MType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "MType MType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "MType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "MType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "MType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Main",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Main",
        "fct-source": "src/Data-MultextEastMsd.html#VType",
        "fct-type": "function",
        "title": "Main"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Main",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Masculine",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Masculine",
        "fct-source": "src/Data-MultextEastMsd.html#Gender",
        "fct-type": "function",
        "title": "Masculine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Masculine",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Masculine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Modal",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Modal",
        "fct-source": "src/Data-MultextEastMsd.html#VType",
        "fct-type": "function",
        "title": "Modal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Modal",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Modal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Multiple",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Multiple",
        "fct-source": "src/Data-MultextEastMsd.html#MType",
        "fct-type": "function",
        "title": "Multiple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Multiple",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Multiple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Multiplicative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Multiplicative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Multiplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Multiplicative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Multiplicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:NType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "NType NType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "NType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "NType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "NType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Negative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Negative Bool",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Negative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Negative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Neuter",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Neuter",
        "fct-source": "src/Data-MultextEastMsd.html#Gender",
        "fct-type": "function",
        "title": "Neuter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Neuter",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Neuter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:No",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "No",
        "fct-source": "src/Data-MultextEastMsd.html#Definiteness",
        "fct-type": "function",
        "title": "No"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "No",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Nominal",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Nominal",
        "fct-source": "src/Data-MultextEastMsd.html#Formation",
        "fct-type": "function",
        "title": "Nominal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Nominal",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Nominal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Nominative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Nominative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Nominative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Nominative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Nominative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:NonInitial",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "NonInitial",
        "fct-source": "src/Data-MultextEastMsd.html#CoordType",
        "fct-type": "function",
        "title": "NonInitial"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "NonInitial",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Non Initial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Noun",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Noun",
        "fct-source": "src/Data-MultextEastMsd.html#PoS",
        "fct-type": "function",
        "title": "Noun"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Noun",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Noun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Number",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Number Number",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Number",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Numeral",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Numeral",
        "fct-source": "src/Data-MultextEastMsd.html#PoS",
        "fct-type": "function",
        "title": "Numeral"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Numeral",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Numeral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Oblique",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Oblique",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Oblique"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Oblique",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Oblique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OneSTwoS",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "OneSTwoS",
        "fct-source": "src/Data-MultextEastMsd.html#Definiteness",
        "fct-type": "function",
        "title": "OneSTwoS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "OneSTwoS",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "One STwo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Ordinal",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Ordinal",
        "fct-source": "src/Data-MultextEastMsd.html#MType",
        "fct-type": "function",
        "title": "Ordinal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Ordinal",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Ordinal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OrdinalT",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "OrdinalT",
        "fct-source": "src/Data-MultextEastMsd.html#AType",
        "fct-type": "function",
        "title": "OrdinalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "OrdinalT",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Ordinal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OwnedNumber",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "OwnedNumber Number",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "OwnedNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "OwnedNumber",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Owned Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OwnerNumber",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "OwnerNumber Number",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "OwnerNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "OwnerNumber",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Owner Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:OwnerPerson",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "OwnerPerson Person",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "OwnerPerson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "OwnerPerson",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Owner Person",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Participle",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Participle",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Participle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Participle",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Participle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Partitive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Partitive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Partitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Partitive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Partitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Passive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Passive",
        "fct-source": "src/Data-MultextEastMsd.html#Voice",
        "fct-type": "function",
        "title": "Passive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Passive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Passive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Past",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Past",
        "fct-source": "src/Data-MultextEastMsd.html#Tense",
        "fct-type": "function",
        "title": "Past"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Past",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Past",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Perfective",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Perfective",
        "fct-source": "src/Data-MultextEastMsd.html#Aspect",
        "fct-type": "function",
        "title": "Perfective"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Perfective",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Perfective",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Person",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Person Person",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Person"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Person",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Person",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Pluperfect",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Pluperfect",
        "fct-source": "src/Data-MultextEastMsd.html#Tense",
        "fct-type": "function",
        "title": "Pluperfect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Pluperfect",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Pluperfect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Plural",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Plural",
        "fct-source": "src/Data-MultextEastMsd.html#Number",
        "fct-type": "function",
        "title": "Plural"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Plural",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Plural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Portmanteau",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Portmanteau",
        "fct-source": "src/Data-MultextEastMsd.html#CType",
        "fct-type": "function",
        "title": "Portmanteau"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Portmanteau",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Portmanteau",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Positive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Positive",
        "fct-source": "src/Data-MultextEastMsd.html#Degree",
        "fct-type": "function",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Positive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Possessive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Possessive",
        "fct-source": "src/Data-MultextEastMsd.html#AType",
        "fct-type": "function",
        "title": "Possessive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Possessive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Possessive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Postposition",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Postposition",
        "fct-source": "src/Data-MultextEastMsd.html#SType",
        "fct-type": "function",
        "title": "Postposition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Postposition",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Postposition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Preposition",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Preposition",
        "fct-source": "src/Data-MultextEastMsd.html#SType",
        "fct-type": "function",
        "title": "Preposition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Preposition",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Preposition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Present",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Present",
        "fct-source": "src/Data-MultextEastMsd.html#Tense",
        "fct-type": "function",
        "title": "Present"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Present",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Present",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Progressive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Progressive",
        "fct-source": "src/Data-MultextEastMsd.html#Aspect",
        "fct-type": "function",
        "title": "Progressive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Progressive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Progressive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Proper",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Proper",
        "fct-source": "src/Data-MultextEastMsd.html#NType",
        "fct-type": "function",
        "title": "Proper"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Proper",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Proper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Qualificative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Qualificative",
        "fct-source": "src/Data-MultextEastMsd.html#AType",
        "fct-type": "function",
        "title": "Qualificative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Qualificative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Qualificative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Quotative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Quotative",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Quotative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Quotative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Quotative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Relative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Relative",
        "fct-source": "src/Data-MultextEastMsd.html#Class",
        "fct-type": "function",
        "title": "Relative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Relative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Relative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Roman",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Roman",
        "fct-source": "src/Data-MultextEastMsd.html#MForm",
        "fct-type": "function",
        "title": "Roman"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Roman",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:STNegative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "STNegative",
        "fct-source": "src/Data-MultextEastMsd.html#SubType",
        "fct-type": "function",
        "title": "STNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "STNegative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "STNegative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:STPositive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "STPositive",
        "fct-source": "src/Data-MultextEastMsd.html#SubType",
        "fct-type": "function",
        "title": "STPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "STPositive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "STPositive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:SType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "SType SType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "SType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "SType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "SType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Second",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Second",
        "fct-source": "src/Data-MultextEastMsd.html#Person",
        "fct-type": "function",
        "title": "Second"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Second",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:ShortArt",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "ShortArt",
        "fct-source": "src/Data-MultextEastMsd.html#Definiteness",
        "fct-type": "function",
        "title": "ShortArt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "ShortArt",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Short Art",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Simple",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Simple",
        "fct-source": "src/Data-MultextEastMsd.html#Formation",
        "fct-type": "function",
        "title": "Simple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Simple",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Singular",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Singular",
        "fct-source": "src/Data-MultextEastMsd.html#Number",
        "fct-type": "function",
        "title": "Singular"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Singular",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Singular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Sociative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Sociative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Sociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Sociative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Sociative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Special",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Special",
        "fct-source": "src/Data-MultextEastMsd.html#MType",
        "fct-type": "function",
        "title": "Special"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Special",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Special",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:SubType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "SubType SubType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "SubType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "SubType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Sub Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Subjunctive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Subjunctive",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Subjunctive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Subjunctive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Subjunctive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Sublative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Sublative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Sublative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Sublative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Sublative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Subordinating",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Subordinating",
        "fct-source": "src/Data-MultextEastMsd.html#CType",
        "fct-type": "function",
        "title": "Subordinating"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Subordinating",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Subordinating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Superessive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Superessive",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Superessive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Superessive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Superessive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Superlative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Superlative",
        "fct-source": "src/Data-MultextEastMsd.html#Degree",
        "fct-type": "function",
        "title": "Superlative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Superlative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Superlative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Supine",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Supine",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Supine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Supine",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Supine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Temporalis",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Temporalis",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Temporalis"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Temporalis",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Temporalis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Tense",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Tense Tense",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Tense"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Tense",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Tense",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Terminative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Terminative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Terminative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Terminative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Terminative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Third",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Third",
        "fct-source": "src/Data-MultextEastMsd.html#Person",
        "fct-type": "function",
        "title": "Third"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Third",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Third",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Transgressive",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Transgressive",
        "fct-source": "src/Data-MultextEastMsd.html#VForm",
        "fct-type": "function",
        "title": "Transgressive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Transgressive",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Transgressive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Translative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Translative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Translative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Translative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Translative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:VForm",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "VForm VForm",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "VForm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "VForm",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "VForm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:VType",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "VType VType",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "VType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "VType",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "VType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Verb",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Verb",
        "fct-source": "src/Data-MultextEastMsd.html#PoS",
        "fct-type": "function",
        "title": "Verb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Verb",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Verb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Vocative",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Vocative",
        "fct-source": "src/Data-MultextEastMsd.html#Case",
        "fct-type": "function",
        "title": "Vocative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Vocative",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Vocative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Voice",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Voice Voice",
        "fct-source": "src/Data-MultextEastMsd.html#Feature",
        "fct-type": "function",
        "title": "Voice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Voice",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Voice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:Yes",
      "description": {
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Yes",
        "fct-source": "src/Data-MultextEastMsd.html#Definiteness",
        "fct-type": "function",
        "title": "Yes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "Yes",
        "normalized": "",
        "package": "multext-east-msd",
        "partial": "Yes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the attributes are set to the specified values.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "[Feature] -\u003e Msd -\u003e Bool",
        "fct-source": "src/Data-MultextEastMsd.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "Checks whether the attributes are set to the specified values",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "check",
        "normalized": "[Feature]-\u003eMsd-\u003eBool",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "[Feature]-\u003eMsd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:features",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the features (attribute-value pairs) of a \u003ccode\u003eMsd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Msd -\u003e [Feature]",
        "fct-source": "src/Data-MultextEastMsd.html#features",
        "fct-type": "function",
        "title": "features"
      },
      "index": {
        "description": "Returns the features attribute-value pairs of Msd",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "features",
        "normalized": "Msd-\u003e[Feature]",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "Msd-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a MULTEXT-East string notation into an \u003ccode\u003eMsd\u003c/code\u003e datatype.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if string is not a valid MULTEXT-East string.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "String -\u003e Maybe Msd",
        "fct-source": "src/Data-MultextEastMsd.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Converts MULTEXT-East string notation into an Msd datatype Returns Nothing if string is not valid MULTEXT-East string",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "fromString",
        "normalized": "String-\u003eMaybe Msd",
        "package": "multext-east-msd",
        "partial": "String",
        "signature": "String-\u003eMaybe Msd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGets the value of a specified attribute.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Attribute a -\u003e Msd -\u003e Maybe Feature",
        "fct-source": "src/Data-MultextEastMsd.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Gets the value of specified attribute",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "get",
        "normalized": "Attribute a-\u003eMsd-\u003eMaybe Feature",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "Attribute a-\u003eMsd-\u003eMaybe Feature"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:msd",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a morphosyntactic descriptor (an abstract \u003ccode\u003eMsd\u003c/code\u003e datatype) of \n a specified part-of-speech and with specified features (attribute-value \n pairs). Duplicated attributes and attributes not applicable to the given \n part-of-speech are ignored.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "PoS -\u003e [Feature] -\u003e Msd",
        "fct-source": "src/Data-MultextEastMsd.html#msd",
        "fct-type": "function",
        "title": "msd"
      },
      "index": {
        "description": "Constructs morphosyntactic descriptor an abstract Msd datatype of specified part-of-speech and with specified features attribute-value pairs Duplicated attributes and attributes not applicable to the given part-of-speech are ignored",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "msd",
        "normalized": "PoS-\u003e[Feature]-\u003eMsd",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "PoS-\u003e[Feature]-\u003eMsd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:pos",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a part-of-speech (\u003ccode\u003e\u003ca\u003ePoS\u003c/a\u003e\u003c/code\u003e value) of an \u003ccode\u003eMsd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Msd -\u003e PoS",
        "fct-source": "src/Data-MultextEastMsd.html#pos",
        "fct-type": "function",
        "title": "pos"
      },
      "index": {
        "description": "Returns part-of-speech PoS value of an Msd",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "pos",
        "normalized": "Msd-\u003ePoS",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "Msd-\u003ePoS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSets the specified features (attribute-value pairs). Duplicated \n attributes and  attributes not applicable to the given part-of-speech \n are ignored.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "[Feature] -\u003e Msd -\u003e Msd",
        "fct-source": "src/Data-MultextEastMsd.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Sets the specified features attribute-value pairs Duplicated attributes and attributes not applicable to the given part-of-speech are ignored",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "set",
        "normalized": "[Feature]-\u003eMsd-\u003eMsd",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "[Feature]-\u003eMsd-\u003eMsd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003eMsd\u003c/code\u003e datatype into a MULTEXT-East string notation.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Msd -\u003e String",
        "fct-source": "src/Data-MultextEastMsd.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Converts an Msd datatype into MULTEXT-East string notation",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "toString",
        "normalized": "Msd-\u003eString",
        "package": "multext-east-msd",
        "partial": "String",
        "signature": "Msd-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:unset",
      "description": {
        "fct-descr": "\u003cp\u003eUnsets the value of a specified attribute.\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "Attribute a -\u003e Msd -\u003e Msd",
        "fct-source": "src/Data-MultextEastMsd.html#unset",
        "fct-type": "function",
        "title": "unset"
      },
      "index": {
        "description": "Unsets the value of specified attribute",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "unset",
        "normalized": "Attribute a-\u003eMsd-\u003eMsd",
        "package": "multext-east-msd",
        "partial": "",
        "signature": "Attribute a-\u003eMsd-\u003eMsd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multext-east-msd/docs/Data-MultextEastMsd.html#v:validString",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the string conforms to the MULTEXT-East specification.\n Defined as:\n \u003ccode\u003e validString = isJust . fromString \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MultextEastMsd",
        "fct-package": "multext-east-msd",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Data-MultextEastMsd.html#validString",
        "fct-type": "function",
        "title": "validString"
      },
      "index": {
        "description": "Checks whether the string conforms to the MULTEXT-East specification Defined as validString isJust fromString",
        "hierarchy": "Data MultextEastMsd",
        "module": "Data.MultextEastMsd",
        "name": "validString",
        "normalized": "String-\u003eBool",
        "package": "multext-east-msd",
        "partial": "String",
        "signature": "String-\u003eBool"
      }
    }
  }
]