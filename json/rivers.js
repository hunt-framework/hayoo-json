[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is an attempt to construct many and varied examples of \u003ca\u003eRiver\u003c/a\u003es and\n \u003ca\u003eStreams\u003c/a\u003e. At the moment, the concept of what \u003ca\u003eRiver\u003c/a\u003es are (or are not) is \n not entirely clear in the mind of any particular person on Earth, myself foremost\n amoung the befuddled.\n\u003c/p\u003e\u003cp\u003ePrimarily because I lay claim to inventing the idea, this is a worrisome situation.\n Nevertheless, whatever these things are, regular old \u003ca\u003eData.Stream\u003c/a\u003e streams (and kin)\n are subsets (or sub-classes, or.. sub-something) of these things, and hence they must \n qualify to be mapped in this ecosystem (by definition).\n\u003c/p\u003e\u003cp\u003eAs of now, these example originate primarily from three excellent papers on Streams\n and their properties. More precisey, they originate from my haphazard and occasionally\n mindless transcription of what I saw from these documents. Therefore, the authors of\n the following papers deserve \u003cem\u003emuch of the credit\u003c/em\u003e, but bear \u003cem\u003enone of the responsibility\u003c/em\u003e\n of the contents of this module.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCONTRACTIVE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Graham Hutton and Mauro Jaskelioff, \"Representing contractive functions on streams\",\n\u003c/li\u003e\u003cli\u003e Submitted to the \u003cem\u003eJournal of Functional Programming\u003c/em\u003e (October 2011).\n\u003c/li\u003e\u003cli\u003e Link: \u003ca\u003ehttp://www.cs.nott.ac.uk/~gmh/bib.html#contractive\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e PDF: \u003ca\u003ehttp://www.cs.nott.ac.uk/~gmh/contractive.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ePEARL-UFP\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Ralph Hinze, \"Functional pearl: streams and unique fixed points\".\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eProceedings of the 13th ACM SIGPLAN international conference on Functional Programming (ICFP '08)\u003c/em\u003e\n       (22-24 September 2008). pp. 189-200. (c) ACM\n\u003c/li\u003e\u003cli\u003e Link: \u003ca\u003ehttp://www.cs.ox.ac.uk/ralf.hinze/publications/index.html#B9\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e PDF: \u003ca\u003ehttp://www.cs.ox.ac.uk/ralf.hinze/publications/ICFP08.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ePROVING-UFP\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Ralf Hinze and Daniel W. H. James, \"Proving The Unique Fixed-Point Principle Correct\"\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eProceeding of the 16th ACM SIGPLAN international conference on Functional programming (ICFP '11)\u003c/em\u003e\n       (September 2011). pp. 359-371. (c) ACM\n\u003c/li\u003e\u003cli\u003e Link: \u003ca\u003ehttp://www.cs.ox.ac.uk/people/daniel.james/unique.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e PDF: \u003ca\u003ehttp://www.cs.ox.ac.uk/people/daniel.james/unique/unique-conf.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module should clearly document the behavior of \u003cem\u003eall\u003c/em\u003e functions. In fact, the\n code in this module is generally not intended to be imported and used directly. Instead\n the purpose of this module is to:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e show *many* examples of Streams, especially non-trivial ones (ie, more complicated than \u003ccode\u003efibionacci\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e provide visual (and eventually, pictoral) *proof* of equality (insofar that this is possible)\n\u003c/li\u003e\u003cli\u003e ... more things\n\u003c/li\u003e\u003cli\u003e ... should go here\n\u003c/li\u003e\u003cli\u003e ... becuase there's a point to all of this, right?\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eNote: To accomidate the documentation, the text-width of this document is 129 characters.\n\u003c/p\u003e\u003cp\u003eAs a witness to the correctness of the examples, I include the result of running doctest:\n\u003c/p\u003e\u003cpre\u003e $ doctest Data/Rivers/Ecology.hs\n Cases: 74  Tried: 74  Errors: 0  Failures: 0\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "module",
        "fct-source": "src/Data-Rivers-Ecology.html",
        "fct-type": "module",
        "title": "Ecology"
      },
      "index": {
        "description": "This module is an attempt to construct many and varied examples of River and Streams At the moment the concept of what River are or are not is not entirely clear in the mind of any particular person on Earth myself foremost amoung the befuddled Primarily because lay claim to inventing the idea this is worrisome situation Nevertheless whatever these things are regular old Data.Stream streams and kin are subsets or sub-classes or sub-something of these things and hence they must qualify to be mapped in this ecosystem by definition As of now these example originate primarily from three excellent papers on Streams and their properties More precisey they originate from my haphazard and occasionally mindless transcription of what saw from these documents Therefore the authors of the following papers deserve much of the credit but bear none of the responsibility of the contents of this module CONTRACTIVE Graham Hutton and Mauro Jaskelioff Representing contractive functions on streams Submitted to the Journal of Functional Programming October Link http www.cs.nott.ac.uk gmh bib.html contractive PDF http www.cs.nott.ac.uk gmh contractive.pdf PEARL-UFP Ralph Hinze Functional pearl streams and unique fixed points Proceedings of the th ACM SIGPLAN international conference on Functional Programming ICFP September pp ACM Link http www.cs.ox.ac.uk ralf.hinze publications index.html B9 PDF http www.cs.ox.ac.uk ralf.hinze publications ICFP08.pdf PROVING-UFP Ralf Hinze and Daniel James Proving The Unique Fixed-Point Principle Correct Proceeding of the th ACM SIGPLAN international conference on Functional programming ICFP September pp ACM Link http www.cs.ox.ac.uk people daniel.james unique.html PDF http www.cs.ox.ac.uk people daniel.james unique unique-conf.pdf This module should clearly document the behavior of all functions In fact the code in this module is generally not intended to be imported and used directly Instead the purpose of this module is to show many examples of Streams especially non-trivial ones ie more complicated than fibionacci provide visual and eventually pictoral proof of equality insofar that this is possible more things should go here becuase there point to all of this right Note To accomidate the documentation the text-width of this document is characters As witness to the correctness of the examples include the result of running doctest doctest Data Rivers Ecology.hs Cases Tried Errors Failures",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "Ecology",
        "normalized": "",
        "package": "rivers",
        "partial": "Ecology",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:a000290",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A000290\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ bsum $ 2 * sNat + 1\n\u003c/code\u003e\u003c/strong\u003e[0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#a000290",
        "fct-type": "function",
        "title": "a000290"
      },
      "index": {
        "description": "take fromOEIS A000290 stake bsum sNat",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "a000290",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:a000330",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 16 $ 0 : fromOEIS \"A000330\"\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,5,14,30,55,91,140,204,285,385,506,650,819,1015]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 16 $ a000330\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,5,14,30,55,91,140,204,285,385,506,650,819,1015]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#a000330",
        "fct-type": "function",
        "title": "a000330"
      },
      "index": {
        "description": "take fromOEIS A000330 stake a000330",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "a000330",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:a002605",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 15 $ fromOEIS \"A002605\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,6,16,44,120,328,896,2448,6688,18272,49920,136384,372608]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 15 $ revFix a002605\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,6,16,44,120,328,896,2448,6688,18272,49920,136384,372608]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#a002605",
        "fct-type": "function",
        "title": "a002605"
      },
      "index": {
        "description": "take fromOEIS A002605 stake revFix a002605",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "a002605",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:a004526",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A004526\"\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ a004526\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#a004526",
        "fct-type": "function",
        "title": "a004526"
      },
      "index": {
        "description": "take fromOEIS A004526 stake a004526",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "a004526",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:a090017",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 15 $ fromOEIS \"A090017\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,4,18,80,356,1584,7048,31360,139536,620864,2762528,12291840,54692416,243353344]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 15 $ revFix a090017\n\u003c/code\u003e\u003c/strong\u003e[0,1,4,18,80,356,1584,7048,31360,139536,620864,2762528,12291840,54692416,243353344]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#a090017",
        "fct-type": "function",
        "title": "a090017"
      },
      "index": {
        "description": "take fromOEIS A090017 stake revFix a090017",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "a090017",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:a092323",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A092323\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,3,3,3,3,7,7,7,7,7,7,7,7,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ (diff sNat - msb)\n\u003c/code\u003e\u003c/strong\u003e[0,-1,-1,-3,-3,-3,-3,-7,-7,-7,-7,-7,-7,-7,-7,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#a092323",
        "fct-type": "function",
        "title": "a092323"
      },
      "index": {
        "description": "take fromOEIS A092323 stake diff sNat msb",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "a092323",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:a122803",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#a122803",
        "fct-type": "function",
        "title": "a122803"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "a122803",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:altCarry",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFIXME\u003c/code\u003e: Incorrect!\n\u003c/p\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#altCarry",
        "fct-type": "function",
        "title": "altCarry"
      },
      "index": {
        "description": "FIXME Incorrect",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "altCarry",
        "normalized": "",
        "package": "rivers",
        "partial": "Carry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:apd2",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#apd2",
        "fct-type": "function",
        "title": "apd2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "apd2",
        "normalized": "[a]-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:apd3",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "Coalg (Integer, (Integer, Integer, Integer, Integer, Integer, Integer, Integer, Integer)) Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#apd3",
        "fct-type": "function",
        "title": "apd3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "apd3",
        "normalized": "Coalg(Integer,(Integer,Integer,Integer,Integer,Integer,Integer,Integer,Integer))Integer Integer",
        "package": "rivers",
        "partial": "",
        "signature": "Coalg(Integer,(Integer,Integer,Integer,Integer,Integer,Integer,Integer,Integer))Integer Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:apolloD2",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A060790\"\n\u003c/code\u003e\u003c/strong\u003e[1,2,2,3,15,38,110,323,927,2682,7754,22403,64751,187134,540822,1563011,4517183,13054898,37729362,109039875]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ revFix apolloD2\n\u003c/code\u003e\u003c/strong\u003e[2.0,2.0,3.0,15.0,38.0,110.0,323.0,927.0,2682.0,7754.0,22403.0,64751.0,187134.0,540822.0,1563011.0,4517183.0,1.3054898e7,3.7729362e7,1.09039875e8,3.15131087e8]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#apolloD2",
        "fct-type": "function",
        "title": "apolloD2"
      },
      "index": {
        "description": "take fromOEIS A060790 stake revFix apolloD2 e7 e7 e8 e8",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "apolloD2",
        "normalized": "[a]-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:apolloD2alt",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ revFix apolloD2alt\n\u003c/code\u003e\u003c/strong\u003e[2.0,2.0,3.0,-1.0,2.0,2.0,3.0,-1.0,2.0,2.0,3.0,-1.0,2.0,2.0,3.0,-1.0,2.0,2.0,3.0,-1.0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#apolloD2alt",
        "fct-type": "function",
        "title": "apolloD2alt"
      },
      "index": {
        "description": "stake revFix apolloD2alt",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "apolloD2alt",
        "normalized": "[a]-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:athue",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A010060\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ athue\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#athue",
        "fct-type": "function",
        "title": "athue"
      },
      "index": {
        "description": "take fromOEIS A010060 stake athue",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "athue",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:bin",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ bin\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#bin",
        "fct-type": "function",
        "title": "bin"
      },
      "index": {
        "description": "stake bin",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "bin",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:binlike1",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ binlike1\n\u003c/code\u003e\u003c/strong\u003e[0,1,0,1,2,0,0,1,2,2,4,0,0,0,0,1,2,2,4,2,4,4,8,0,0,0,0,0,0,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#binlike1",
        "fct-type": "function",
        "title": "binlike1"
      },
      "index": {
        "description": "stake binlike1",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "binlike1",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:binlike2",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ binlike2\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,0,1,2,0,2,1,0,2,2,0,4,2,0,1,4,0,2,2,0,2,4,0,4,4,0,2,8]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#binlike2",
        "fct-type": "function",
        "title": "binlike2"
      },
      "index": {
        "description": "stake binlike2",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "binlike2",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:blah",
      "description": {
        "fct-descr": "\u003cpre\u003ediverges!!\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#blah",
        "fct-type": "function",
        "title": "blah"
      },
      "index": {
        "description": "diverges",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "blah",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cFib",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#cFib",
        "fct-type": "function",
        "title": "cFib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cFib",
        "normalized": "",
        "package": "rivers",
        "partial": "Fib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cFibH",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(a, b) -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#cFibH",
        "fct-type": "function",
        "title": "cFibH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cFibH",
        "normalized": "(a,b)-\u003ea",
        "package": "rivers",
        "partial": "Fib",
        "signature": "(a,b)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cFibT",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 29 $ cFib\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(a, a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Rivers-Ecology.html#cFibT",
        "fct-type": "function",
        "title": "cFibT"
      },
      "index": {
        "description": "stake cFib",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cFibT",
        "normalized": "(a,a)-\u003ea-\u003e(a,a)",
        "package": "rivers",
        "partial": "Fib",
        "signature": "(a,a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cNat",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ cNat\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#cNat",
        "fct-type": "function",
        "title": "cNat"
      },
      "index": {
        "description": "stake cNat",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cNat",
        "normalized": "",
        "package": "rivers",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cNatH",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "t -\u003e t",
        "fct-source": "src/Data-Rivers-Ecology.html#cNatH",
        "fct-type": "function",
        "title": "cNatH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cNatH",
        "normalized": "a-\u003ea",
        "package": "rivers",
        "partial": "Nat",
        "signature": "t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cNatT",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e t -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#cNatT",
        "fct-type": "function",
        "title": "cNatT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cNatT",
        "normalized": "a-\u003eb-\u003ea",
        "package": "rivers",
        "partial": "Nat",
        "signature": "a-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cOne",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ cOne\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#cOne",
        "fct-type": "function",
        "title": "cOne"
      },
      "index": {
        "description": "stake cOne",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cOne",
        "normalized": "",
        "package": "rivers",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cOneH",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "t -\u003e t",
        "fct-source": "src/Data-Rivers-Ecology.html#cOneH",
        "fct-type": "function",
        "title": "cOneH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cOneH",
        "normalized": "a-\u003ea",
        "package": "rivers",
        "partial": "One",
        "signature": "t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cOneT",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "t -\u003e t -\u003e t",
        "fct-source": "src/Data-Rivers-Ecology.html#cOneT",
        "fct-type": "function",
        "title": "cOneT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cOneT",
        "normalized": "a-\u003ea-\u003ea",
        "package": "rivers",
        "partial": "One",
        "signature": "t-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cPell",
      "description": {
        "fct-descr": "\u003cp\u003eGenerating Function:\n\u003c/p\u003e\u003cp\u003ez\n --------------------\n   z^2  +  2z  -  1\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A000129\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,5,12,29,70,169,408,985,2378,5741,13860,33461,80782,195025,470832,1136689,2744210,6625109]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#cPell",
        "fct-type": "function",
        "title": "cPell"
      },
      "index": {
        "description": "Generating Function take fromOEIS A000129",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cPell",
        "normalized": "",
        "package": "rivers",
        "partial": "Pell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cPellH",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(a, a) -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#cPellH",
        "fct-type": "function",
        "title": "cPellH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cPellH",
        "normalized": "(a,a)-\u003ea",
        "package": "rivers",
        "partial": "Pell",
        "signature": "(a,a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cPellT",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ cPell\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,5,12,29,70,169,408,985,2378,5741,13860,33461,80782,195025,470832,1136689,2744210,6625109]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(a, a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Rivers-Ecology.html#cPellT",
        "fct-type": "function",
        "title": "cPellT"
      },
      "index": {
        "description": "stake cPell",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cPellT",
        "normalized": "(a,a)-\u003ea-\u003e(a,a)",
        "package": "rivers",
        "partial": "Pell",
        "signature": "(a,a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cZero",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ cZero\n\u003c/code\u003e\u003c/strong\u003e[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#cZero",
        "fct-type": "function",
        "title": "cZero"
      },
      "index": {
        "description": "stake cZero",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cZero",
        "normalized": "",
        "package": "rivers",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cZeroH",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "([a], Int) -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#cZeroH",
        "fct-type": "function",
        "title": "cZeroH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cZeroH",
        "normalized": "([a],Int)-\u003ea",
        "package": "rivers",
        "partial": "Zero",
        "signature": "([a],Int)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:cZeroT",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "([a], t) -\u003e a -\u003e ([a], t)",
        "fct-source": "src/Data-Rivers-Ecology.html#cZeroT",
        "fct-type": "function",
        "title": "cZeroT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "cZeroT",
        "normalized": "([a],b)-\u003ea-\u003e([a],b)",
        "package": "rivers",
        "partial": "Zero",
        "signature": "([a],t)-\u003ea-\u003e([a],t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:carry",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A007814\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ carry\n\u003c/code\u003e\u003c/strong\u003e[0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#carry",
        "fct-type": "function",
        "title": "carry"
      },
      "index": {
        "description": "take fromOEIS A007814 stake carry",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "carry",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:d2xpadovan",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 31 $ fromOEIS \"A133034\"\n\u003c/code\u003e\u003c/strong\u003e[1,0,1,1,1,0,0,1,0,1,1,1,2,2,3,4,5,7,9,12,16,21,28,37,49,65,86,114,151,200,265]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ diff $ diff $ revFix rpadovan\n\u003c/code\u003e\u003c/strong\u003e[0,1,-1,1,0,0,1,0,1,1,1,2,2,3,4,5,7,9,12,16,21,28,37,49,65,86,114,151,200,265]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#d2xpadovan",
        "fct-type": "function",
        "title": "d2xpadovan"
      },
      "index": {
        "description": "take fromOEIS A133034 stake diff diff revFix rpadovan",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "d2xpadovan",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:dxFib",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A039834\"\n\u003c/code\u003e\u003c/strong\u003e[1,1,0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ [1] \u003c\u003c| diff sFib\n\u003c/code\u003e\u003c/strong\u003e[1,1,0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#dxFib",
        "fct-type": "function",
        "title": "dxFib"
      },
      "index": {
        "description": "take fromOEIS A039834 stake diff sFib",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "dxFib",
        "normalized": "",
        "package": "rivers",
        "partial": "Fib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:dxLucas",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A061084\"\n\u003c/code\u003e\u003c/strong\u003e[1,2,1,3,4,7,11,18,29,47,76,123,199,322,521,843,1364,2207,3571,5778]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ diff sLucas\n\u003c/code\u003e\u003c/strong\u003e[-1,2,1,3,4,7,11,18,29,47,76,123,199,322,521,843,1364,2207,3571,5778]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#dxLucas",
        "fct-type": "function",
        "title": "dxLucas"
      },
      "index": {
        "description": "take fromOEIS A061084 stake diff sLucas",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "dxLucas",
        "normalized": "",
        "package": "rivers",
        "partial": "Lucas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:fib2n",
      "description": {
        "fct-descr": "\u003cp\u003eThe Fib (2*n) and Lucas (2*n) numbers\n\u003c/p\u003e\u003cp\u003edromIp1L is evidently a bisect function\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ dropIp1L sFib\n\u003c/code\u003e\u003c/strong\u003e[0,1,3,8,21,55,144,377,987,2584,6765,17711,46368,121393,317811,832040,2178309,5702887,14930352,39088169]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A001906\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,3,8,21,55,144,377,987,2584,6765,17711,46368,121393,317811,832040,2178309,5702887,14930352,39088169]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#fib2n",
        "fct-type": "function",
        "title": "fib2n"
      },
      "index": {
        "description": "The Fib and Lucas numbers dromIp1L is evidently bisect function stake dropIp1L sFib take fromOEIS A001906",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "fib2n",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:fib4np1",
      "description": {
        "fct-descr": "\u003cp\u003eThe Fibionacci (4n + 1) and Lucas (4n + 1) numbers\n\u003c/p\u003e\u003cp\u003edrop0L is evidently a bisect twice function\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 10 $ drop0L sFib\n\u003c/code\u003e\u003c/strong\u003e[1,5,34,233,1597,10946,75025,514229,3524578,24157817]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ fromOEIS \"A033889\"\n\u003c/code\u003e\u003c/strong\u003e[1,5,34,233,1597,10946,75025,514229,3524578,24157817]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#fib4np1",
        "fct-type": "function",
        "title": "fib4np1"
      },
      "index": {
        "description": "The Fibionacci and Lucas numbers drop0L is evidently bisect twice function stake drop0L sFib take fromOEIS A033889",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "fib4np1",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:fibpfib",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 21 $ [1] \u003c\u003c| plus sFib sFib\n\u003c/code\u003e\u003c/strong\u003e[1,0,2,2,4,6,10,16,26,42,68,110,178,288,466,754,1220,1974,3194,5168,8362]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 21 $ fromOEIS \"A006355\"\n\u003c/code\u003e\u003c/strong\u003e[1,0,2,2,4,6,10,16,26,42,68,110,178,288,466,754,1220,1974,3194,5168,8362]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#fibpfib",
        "fct-type": "function",
        "title": "fibpfib"
      },
      "index": {
        "description": "stake plus sFib sFib take fromOEIS A006355",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "fibpfib",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:fr",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(t, t, t, t, t, t, t, t) -\u003e (t, t, t, t, t, t, t, t)",
        "fct-source": "src/Data-Rivers-Ecology.html#fr",
        "fct-type": "function",
        "title": "fr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "fr",
        "normalized": "(a,a,a,a,a,a,a,a)-\u003e(a,a,a,a,a,a,a,a)",
        "package": "rivers",
        "partial": "",
        "signature": "(t,t,t,t,t,t,t,t)-\u003e(t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:frac",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A025480\"\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,0,2,1,3,0,4,2,5,1,6,3,7,0,8,4,9,2,10,5,11,1,12,6,13,3,14,7]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ frac\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,0,2,1,3,0,4,2,5,1,6,3,7,0,8,4,9,2,10,5,11,1,12,6,13,3,14,7]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#frac",
        "fct-type": "function",
        "title": "frac"
      },
      "index": {
        "description": "take fromOEIS A025480 stake frac",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "frac",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:gFibs",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 29 $ fwdFix gFibs\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#gFibs",
        "fct-type": "function",
        "title": "gFibs"
      },
      "index": {
        "description": "stake fwdFix gFibs",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "gFibs",
        "normalized": "",
        "package": "rivers",
        "partial": "Fibs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:gNat",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#gNat",
        "fct-type": "function",
        "title": "gNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "gNat",
        "normalized": "",
        "package": "rivers",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:gNat-39-",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ fwdFix gNat\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/Data-Rivers-Ecology.html#gNat%27",
        "fct-type": "function",
        "title": "gNat'"
      },
      "index": {
        "description": "stake fwdFix gNat",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "gNat'",
        "normalized": "[a]-\u003eInt",
        "package": "rivers",
        "partial": "Nat'",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:gOne",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#gOne",
        "fct-type": "function",
        "title": "gOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "gOne",
        "normalized": "",
        "package": "rivers",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:gOne-39-",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ fwdFix gOne\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#gOne%27",
        "fct-type": "function",
        "title": "gOne'"
      },
      "index": {
        "description": "stake fwdFix gOne",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "gOne'",
        "normalized": "",
        "package": "rivers",
        "partial": "One'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:gZero",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ fwdFix gZero\n\u003c/code\u003e\u003c/strong\u003e[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#gZero",
        "fct-type": "function",
        "title": "gZero"
      },
      "index": {
        "description": "stake fwdFix gZero",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "gZero",
        "normalized": "",
        "package": "rivers",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:god",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A000265\"\n\u003c/code\u003e\u003c/strong\u003e[1,1,3,1,5,3,7,1,9,5,11,3,13,7,15,1,17,9,19,5,21,11,23,3,25,13,27,7,29,15]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ god\n\u003c/code\u003e\u003c/strong\u003e[1,1,3,1,5,3,7,1,9,5,11,3,13,7,15,1,17,9,19,5,21,11,23,3,25,13,27,7,29,15]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#god",
        "fct-type": "function",
        "title": "god"
      },
      "index": {
        "description": "take fromOEIS A000265 stake god",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "god",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:hamming",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A051037\"\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4,5,6,8,9,10,12,15,16,18,20,24,25,27,30,32,36,40,45,48,50,54,60,64,72,75,80]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ hamming\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4,5,6,8,9,10,12,15,16,18,20,24,25,27,30,32,36,40,45,48,50,54,60,64,72,75,80]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#hamming",
        "fct-type": "function",
        "title": "hamming"
      },
      "index": {
        "description": "take fromOEIS A051037 stake hamming",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "hamming",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:horadam0142",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 15 $ fromOEIS \"A085449\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,8,24,80,256,832,2688,8704,28160,91136,294912,954368,3088384]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 15 $ revFix horadam0142\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,8,24,80,256,832,2688,8704,28160,91136,294912,954368,3088384]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#horadam0142",
        "fct-type": "function",
        "title": "horadam0142"
      },
      "index": {
        "description": "take fromOEIS A085449 stake revFix horadam0142",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "horadam0142",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:iterk2nk",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 21 $ 1 : fromOEIS \"A078008\"\n\u003c/code\u003e\u003c/strong\u003e[1,1,0,2,2,6,10,22,42,86,170,342,682,1366,2730,5462,10922,21846,43690,87382,174762]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#iterk2nk",
        "fct-type": "function",
        "title": "iterk2nk"
      },
      "index": {
        "description": "take fromOEIS A078008",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "iterk2nk",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:iterk2nkH",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(a, b) -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#iterk2nkH",
        "fct-type": "function",
        "title": "iterk2nkH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "iterk2nkH",
        "normalized": "(a,b)-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "(a,b)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:iterk2nkT",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 21 $ [1,1] \u003c\u003c| iterk2nk\n\u003c/code\u003e\u003c/strong\u003e[1,1,0,2,2,6,10,22,42,86,170,342,682,1366,2730,5462,10922,21846,43690,87382,174762]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(a, a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Rivers-Ecology.html#iterk2nkT",
        "fct-type": "function",
        "title": "iterk2nkT"
      },
      "index": {
        "description": "stake iterk2nk",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "iterk2nkT",
        "normalized": "(a,a)-\u003ea-\u003e(a,a)",
        "package": "rivers",
        "partial": "",
        "signature": "(a,a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:jacob",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A001045\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,3,5,11,21,43,85,171,341,683,1365,2731,5461,10923,21845,43691,87381,174763]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ jacob\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,3,5,11,21,43,85,171,341,683,1365,2731,5461,10923,21845,43691,87381,174763]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#jacob",
        "fct-type": "function",
        "title": "jacob"
      },
      "index": {
        "description": "take fromOEIS A001045 stake jacob",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "jacob",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:jacobl",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A014551\"\n\u003c/code\u003e\u003c/strong\u003e[2,1,5,7,17,31,65,127,257,511,1025,2047,4097,8191,16385,32767,65537,131071,262145,524287]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ jacobl\n\u003c/code\u003e\u003c/strong\u003e[2,1,5,7,17,31,65,127,257,511,1025,2047,4097,8191,16385,32767,65537,131071,262145,524287]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#jacobl",
        "fct-type": "function",
        "title": "jacobl"
      },
      "index": {
        "description": "take fromOEIS A014551 stake jacobl",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "jacobl",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:jos",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ drop 1 $ fromOEIS \"A006257\"\n\u003c/code\u003e\u003c/strong\u003e[1,1,3,1,3,5,7,1,3,5,7,9,11,13,15,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ jos\n\u003c/code\u003e\u003c/strong\u003e[1,1,3,1,3,5,7,1,3,5,7,9,11,13,15,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#jos",
        "fct-type": "function",
        "title": "jos"
      },
      "index": {
        "description": "take drop fromOEIS A006257 stake jos",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "jos",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:josAlt",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ josAlt\n\u003c/code\u003e\u003c/strong\u003e[1,1,3,1,3,5,7,1,3,5,7,9,11,13,15,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#josAlt",
        "fct-type": "function",
        "title": "josAlt"
      },
      "index": {
        "description": "stake josAlt",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "josAlt",
        "normalized": "",
        "package": "rivers",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:lsb",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A000035\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ bsum 0 |~| 1\n\u003c/code\u003e\u003c/strong\u003e[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#lsb",
        "fct-type": "function",
        "title": "lsb"
      },
      "index": {
        "description": "take fromOEIS A000035 stake bsum",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "lsb",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:luc2n",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ dropIp1L sLucas\n\u003c/code\u003e\u003c/strong\u003e[2,3,7,18,47,123,322,843,2207,5778,15127,39603,103682,271443,710647,1860498,4870847,12752043,33385282,87403803]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 20 $ fromOEIS \"A005248\"\n\u003c/code\u003e\u003c/strong\u003e[2,3,7,18,47,123,322,843,2207,5778,15127,39603,103682,271443,710647,1860498,4870847,12752043,33385282,87403803]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#luc2n",
        "fct-type": "function",
        "title": "luc2n"
      },
      "index": {
        "description": "stake dropIp1L sLucas take fromOEIS A005248",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "luc2n",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:luc4np1",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 10 $ drop0L sLucas\n\u003c/code\u003e\u003c/strong\u003e[1,11,76,521,3571,24476,167761,1149851,7881196,54018521]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ fromOEIS \"A056914\"\n\u003c/code\u003e\u003c/strong\u003e[1,11,76,521,3571,24476,167761,1149851,7881196,54018521]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#luc4np1",
        "fct-type": "function",
        "title": "luc4np1"
      },
      "index": {
        "description": "stake drop0L sLucas take fromOEIS A056914",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "luc4np1",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:montest",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#montest",
        "fct-type": "function",
        "title": "montest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "montest",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:msb",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ drop 1 $ fromOEIS \"A053644\"\n\u003c/code\u003e\u003c/strong\u003e[1,2,2,4,4,4,4,8,8,8,8,8,8,8,8,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ msb\n\u003c/code\u003e\u003c/strong\u003e[1,2,2,4,4,4,4,8,8,8,8,8,8,8,8,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#msb",
        "fct-type": "function",
        "title": "msb"
      },
      "index": {
        "description": "take drop fromOEIS A053644 stake msb",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "msb",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:natnat",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ natnat\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#natnat",
        "fct-type": "function",
        "title": "natnat"
      },
      "index": {
        "description": "stake natnat",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "natnat",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:padovan",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A134816\"\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,2,2,3,4,5,7,9,12,16,21,28,37,49,65,86,114,151,200,265,351,465,616,816,1081,1432,1897,2513]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ padovan\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,2,2,3,4,5,7,9,12,16,21,28,37,49,65,86,114,151,200,265,351,465,616,816,1081,1432,1897,2513]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#padovan",
        "fct-type": "function",
        "title": "padovan"
      },
      "index": {
        "description": "take fromOEIS A134816 stake padovan",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "padovan",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:padovanPP11010",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A000931\"\n\u003c/code\u003e\u003c/strong\u003e[1,0,0,1,0,1,1,1,2,2,3,4,5,7,9,12,16,21,28,37,49,65,86,114,151,200,265,351,465,616]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ padovanPP11010\n\u003c/code\u003e\u003c/strong\u003e[1,0,0,1,0,1,1,1,2,2,3,4,5,7,9,12,16,21,28,37,49,65,86,114,151,200,265,351,465,616]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#padovanPP11010",
        "fct-type": "function",
        "title": "padovanPP11010"
      },
      "index": {
        "description": "take fromOEIS A000931 stake padovanPP11010",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "padovanPP11010",
        "normalized": "",
        "package": "rivers",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:perrin",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A001608\"\n\u003c/code\u003e\u003c/strong\u003e[3,0,2,3,2,5,5,7,10,12,17,22,29,39,51,68,90,119,158,209,277,367,486,644,853,1130,1497,1983,2627,3480]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ perrin\n\u003c/code\u003e\u003c/strong\u003e[3,0,2,3,2,5,5,7,10,12,17,22,29,39,51,68,90,119,158,209,277,367,486,644,853,1130,1497,1983,2627,3480]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#perrin",
        "fct-type": "function",
        "title": "perrin"
      },
      "index": {
        "description": "take fromOEIS A001608 stake perrin",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "perrin",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:pot",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 15 $ pot\n\u003c/code\u003e\u003c/strong\u003e[True,True,False,True,False,False,False,True,False,False,False,False,False,False,False]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Bool",
        "fct-source": "src/Data-Rivers-Ecology.html#pot",
        "fct-type": "function",
        "title": "pot"
      },
      "index": {
        "description": "stake pot True True False True False False False True False False False False False False False",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "pot",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:pothree",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#pothree",
        "fct-type": "function",
        "title": "pothree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "pothree",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:proy",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "(a, a, a, a, a, a, a, a) -\u003e Integer -\u003e a",
        "fct-source": "src/Data-Rivers-Ecology.html#proy",
        "fct-type": "function",
        "title": "proy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "proy",
        "normalized": "(a,a,a,a,a,a,a,a)-\u003eInteger-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a)-\u003eInteger-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rLucas",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 28 $ revFix rLucas\n\u003c/code\u003e\u003c/strong\u003e[2,1,3,4,7,11,18,29,47,76,123,199,322,521,843,1364,2207,3571,5778,9349,15127,24476,39603,64079,103682,167761,271443,439204]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rLucas",
        "fct-type": "function",
        "title": "rLucas"
      },
      "index": {
        "description": "stake revFix rLucas",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rLucas",
        "normalized": "",
        "package": "rivers",
        "partial": "Lucas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rNat",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ revFix rNat\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rNat",
        "fct-type": "function",
        "title": "rNat"
      },
      "index": {
        "description": "stake revFix rNat",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rNat",
        "normalized": "",
        "package": "rivers",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rOne",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ revFix rOne\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rOne",
        "fct-type": "function",
        "title": "rOne"
      },
      "index": {
        "description": "stake revFix rOne",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rOne",
        "normalized": "",
        "package": "rivers",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rZero",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ revFix rZero\n\u003c/code\u003e\u003c/strong\u003e[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rZero",
        "fct-type": "function",
        "title": "rZero"
      },
      "index": {
        "description": "stake revFix rZero",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rZero",
        "normalized": "",
        "package": "rivers",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:revGfibs",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 29 $ revFix revGfibs\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#revGfibs",
        "fct-type": "function",
        "title": "revGfibs"
      },
      "index": {
        "description": "stake revFix revGfibs",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "revGfibs",
        "normalized": "",
        "package": "rivers",
        "partial": "Gfibs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:revPowersOf3",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 15 $ fromOEIS \"A000244\"\n\u003c/code\u003e\u003c/strong\u003e[1,3,9,27,81,243,729,2187,6561,19683,59049,177147,531441,1594323,4782969]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 15 $ revPowersOf3\n\u003c/code\u003e\u003c/strong\u003e[1,3,9,27,81,243,729,2187,6561,19683,59049,177147,531441,1594323,4782969]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#revPowersOf3",
        "fct-type": "function",
        "title": "revPowersOf3"
      },
      "index": {
        "description": "take fromOEIS A000244 stake revPowersOf3",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "revPowersOf3",
        "normalized": "",
        "package": "rivers",
        "partial": "Powers Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:revPowersOfN2",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 15 $ fromOEIS \"A122803\"\n\u003c/code\u003e\u003c/strong\u003e[1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 15 $ revPowersOfN2\n\u003c/code\u003e\u003c/strong\u003e[1,-2,4,-8,16,-32,64,-128,256,-512,1024,-2048,4096,-8192,16384]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#revPowersOfN2",
        "fct-type": "function",
        "title": "revPowersOfN2"
      },
      "index": {
        "description": "take fromOEIS A122803 stake revPowersOfN2",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "revPowersOfN2",
        "normalized": "",
        "package": "rivers",
        "partial": "Powers Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rjacob",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ revFix rjacob\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,3,5,11,21,43,85,171,341,683,1365,2731,5461,10923,21845,43691,87381,174763]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rjacob",
        "fct-type": "function",
        "title": "rjacob"
      },
      "index": {
        "description": "stake revFix rjacob",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rjacob",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rjacobl",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ revFix rjacobl\n\u003c/code\u003e\u003c/strong\u003e[2,1,5,7,17,31,65,127,257,511,1025,2047,4097,8191,16385,32767,65537,131071,262145,524287]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rjacobl",
        "fct-type": "function",
        "title": "rjacobl"
      },
      "index": {
        "description": "stake revFix rjacobl",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rjacobl",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rpadovan",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ revFix rpadovan\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,2,2,3,4,5,7,9,12,16,21,28,37,49,65,86,114,151,200,265,351,465,616,816,1081,1432,1897,2513]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rpadovan",
        "fct-type": "function",
        "title": "rpadovan"
      },
      "index": {
        "description": "stake revFix rpadovan",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rpadovan",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rpell",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 20 $ revFix rpell\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,5,12,29,70,169,408,985,2378,5741,13860,33461,80782,195025,470832,1136689,2744210,6625109]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rpell",
        "fct-type": "function",
        "title": "rpell"
      },
      "index": {
        "description": "stake revFix rpell",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rpell",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:rperrin",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ revFix rperrin\n\u003c/code\u003e\u003c/strong\u003e[3,0,2,3,2,5,5,7,10,12,17,22,29,39,51,68,90,119,158,209,277,367,486,644,853,1130,1497,1983,2627,3480]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "G Integer Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#rperrin",
        "fct-type": "function",
        "title": "rperrin"
      },
      "index": {
        "description": "stake revFix rperrin",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "rperrin",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sFac",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ fromOEIS \"A000142\"\n\u003c/code\u003e\u003c/strong\u003e[1,1,2,6,24,120,720,5040,40320,362880]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 10 $ sFac\n\u003c/code\u003e\u003c/strong\u003e[1,1,2,6,24,120,720,5040,40320,362880]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sFac",
        "fct-type": "function",
        "title": "sFac"
      },
      "index": {
        "description": "take fromOEIS A000142 stake sFac",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sFac",
        "normalized": "",
        "package": "rivers",
        "partial": "Fac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sFib",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 29 $ fromOEIS \"A000045\"\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 29 $ sFib\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sFib",
        "fct-type": "function",
        "title": "sFib"
      },
      "index": {
        "description": "take fromOEIS A000045 stake sFib",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sFib",
        "normalized": "",
        "package": "rivers",
        "partial": "Fib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sFib2",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 29 $ sFib2\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sFib2",
        "fct-type": "function",
        "title": "sFib2"
      },
      "index": {
        "description": "stake sFib2",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sFib2",
        "normalized": "",
        "package": "rivers",
        "partial": "Fib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sLucas",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 28 $ fromOEIS \"A000032\"\n\u003c/code\u003e\u003c/strong\u003e[2,1,3,4,7,11,18,29,47,76,123,199,322,521,843,1364,2207,3571,5778,9349,15127,24476,39603,64079,103682,167761,271443,439204]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 28 $ sLucas\n\u003c/code\u003e\u003c/strong\u003e[2,1,3,4,7,11,18,29,47,76,123,199,322,521,843,1364,2207,3571,5778,9349,15127,24476,39603,64079,103682,167761,271443,439204]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sLucas",
        "fct-type": "function",
        "title": "sLucas"
      },
      "index": {
        "description": "take fromOEIS A000032 stake sLucas",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sLucas",
        "normalized": "",
        "package": "rivers",
        "partial": "Lucas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sNat",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A000027\"\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ sNat\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sNat",
        "fct-type": "function",
        "title": "sNat"
      },
      "index": {
        "description": "take fromOEIS A000027 stake sNat",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sNat",
        "normalized": "",
        "package": "rivers",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sNatIt",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ siterate (+1) 0\n\u003c/code\u003e\u003c/strong\u003e[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sNatIt",
        "fct-type": "function",
        "title": "sNatIt"
      },
      "index": {
        "description": "stake siterate",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sNatIt",
        "normalized": "",
        "package": "rivers",
        "partial": "Nat It",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sOne",
      "description": {
        "fct-descr": "\u003cp\u003eBelieve it or not, this is in OEIS:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A000012\"\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ sOne\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sOne",
        "fct-type": "function",
        "title": "sOne"
      },
      "index": {
        "description": "Believe it or not this is in OEIS take fromOEIS A000012 stake sOne",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sOne",
        "normalized": "",
        "package": "rivers",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sOnes",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ sOnes\n\u003c/code\u003e\u003c/strong\u003e[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sOnes",
        "fct-type": "function",
        "title": "sOnes"
      },
      "index": {
        "description": "stake sOnes",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sOnes",
        "normalized": "",
        "package": "rivers",
        "partial": "Ones",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sZero",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ sZero\n\u003c/code\u003e\u003c/strong\u003e[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sZero",
        "fct-type": "function",
        "title": "sZero"
      },
      "index": {
        "description": "stake sZero",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sZero",
        "normalized": "",
        "package": "rivers",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:streamApD3",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 32 $ streamApD3\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,1,1,2,2,3,4,8,9,9,15,32,32,33,56,120,121,121,209,450,450,451,780,1680,1681,1681,2911,6272,6272,6273]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#streamApD3",
        "fct-type": "function",
        "title": "streamApD3"
      },
      "index": {
        "description": "stake streamApD3",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "streamApD3",
        "normalized": "",
        "package": "rivers",
        "partial": "Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:streamApD3-39-",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 4 $ streamApD3'\n\u003c/code\u003e\u003c/strong\u003e[(0,0,1,1,1,2,2,3),(4,8,9,9,15,32,32,33),(56,120,121,121,209,450,450,451),(780,1680,1681,1681,2911,6272,6272,6273)]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S (Integer, Integer, Integer, Integer, Integer, Integer, Integer, Integer)",
        "fct-source": "src/Data-Rivers-Ecology.html#streamApD3%27",
        "fct-type": "function",
        "title": "streamApD3'"
      },
      "index": {
        "description": "stake streamApD3",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "streamApD3'",
        "normalized": "S(Integer,Integer,Integer,Integer,Integer,Integer,Integer,Integer)",
        "package": "rivers",
        "partial": "Ap",
        "signature": "S(Integer,Integer,Integer,Integer,Integer,Integer,Integer,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:sumcarry",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 30 $ fromOEIS \"A011371\"\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,1,3,3,4,4,7,7,8,8,10,10,11,11,15,15,16,16,18,18,19,19,22,22,23,23,25,25]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ sumcarry\n\u003c/code\u003e\u003c/strong\u003e[0,0,1,1,3,3,4,4,7,7,8,8,10,10,11,11,15,15,16,16,18,18,19,19,22,22,23,23,25,25]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#sumcarry",
        "fct-type": "function",
        "title": "sumcarry"
      },
      "index": {
        "description": "take fromOEIS A011371 stake sumcarry",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "sumcarry",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:thue",
      "description": {
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#thue",
        "fct-type": "function",
        "title": "thue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "thue",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:thue-39-",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ thue\n\u003c/code\u003e\u003c/strong\u003e[0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "S Integer",
        "fct-source": "src/Data-Rivers-Ecology.html#thue%27",
        "fct-type": "function",
        "title": "thue'"
      },
      "index": {
        "description": "stake thue",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "thue'",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Ecology.html#v:tree",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estake 30 $ tree 0\n\u003c/code\u003e\u003c/strong\u003e[0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Rivers.Ecology",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e S a",
        "fct-source": "src/Data-Rivers-Ecology.html#tree",
        "fct-type": "function",
        "title": "tree"
      },
      "index": {
        "description": "stake tree",
        "hierarchy": "Data Rivers Ecology",
        "module": "Data.Rivers.Ecology",
        "name": "tree",
        "normalized": "a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Idiom.html#",
      "description": {
        "fct-module": "Data.Rivers.Idiom",
        "fct-package": "rivers",
        "fct-signature": "module",
        "fct-source": "src/Data-Rivers-Idiom.html",
        "fct-type": "module",
        "title": "Idiom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Idiom",
        "module": "Data.Rivers.Idiom",
        "name": "Idiom",
        "normalized": "",
        "package": "rivers",
        "partial": "Idiom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Idiom.html#t:Idiom",
      "description": {
        "fct-module": "Data.Rivers.Idiom",
        "fct-package": "rivers",
        "fct-signature": "class",
        "fct-source": "src/Data-Rivers-Idiom.html#Idiom",
        "fct-type": "class",
        "title": "Idiom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Idiom",
        "module": "Data.Rivers.Idiom",
        "name": "Idiom",
        "normalized": "",
        "package": "rivers",
        "partial": "Idiom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Idiom.html#v:-60--62-",
      "description": {
        "fct-module": "Data.Rivers.Idiom",
        "fct-package": "rivers",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Rivers-Idiom.html#%3C%3E",
        "fct-type": "method",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Idiom",
        "module": "Data.Rivers.Idiom",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "rivers",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Idiom.html#v:pure",
      "description": {
        "fct-module": "Data.Rivers.Idiom",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Data-Rivers-Idiom.html#pure",
        "fct-type": "method",
        "title": "pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Idiom",
        "module": "Data.Rivers.Idiom",
        "name": "pure",
        "normalized": "a-\u003eb a",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Idiom.html#v:smap",
      "description": {
        "fct-module": "Data.Rivers.Idiom",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Rivers-Idiom.html#smap",
        "fct-type": "method",
        "title": "smap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Idiom",
        "module": "Data.Rivers.Idiom",
        "name": "smap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Idiom.html#v:srepeat",
      "description": {
        "fct-module": "Data.Rivers.Idiom",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Data-Rivers-Idiom.html#srepeat",
        "fct-type": "method",
        "title": "srepeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Idiom",
        "module": "Data.Rivers.Idiom",
        "name": "srepeat",
        "normalized": "a-\u003eb a",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Idiom.html#v:zip",
      "description": {
        "fct-module": "Data.Rivers.Idiom",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Rivers-Idiom.html#zip",
        "fct-type": "method",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Idiom",
        "module": "Data.Rivers.Idiom",
        "name": "zip",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-NumExt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdds a few useful operators/functions to |Num|.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Rivers.NumExt",
        "fct-package": "rivers",
        "fct-signature": "module",
        "fct-source": "src/Data-Rivers-NumExt.html",
        "fct-type": "module",
        "title": "NumExt"
      },
      "index": {
        "description": "Adds few useful operators functions to Num",
        "hierarchy": "Data Rivers NumExt",
        "module": "Data.Rivers.NumExt",
        "name": "NumExt",
        "normalized": "",
        "package": "rivers",
        "partial": "Num Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-NumExt.html#t:NumExt",
      "description": {
        "fct-module": "Data.Rivers.NumExt",
        "fct-package": "rivers",
        "fct-signature": "class",
        "fct-source": "src/Data-Rivers-NumExt.html#NumExt",
        "fct-type": "class",
        "title": "NumExt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers NumExt",
        "module": "Data.Rivers.NumExt",
        "name": "NumExt",
        "normalized": "",
        "package": "rivers",
        "partial": "Num Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-NumExt.html#v:-47-",
      "description": {
        "fct-module": "Data.Rivers.NumExt",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Rivers-NumExt.html#%2F",
        "fct-type": "method",
        "title": "(/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers NumExt",
        "module": "Data.Rivers.NumExt",
        "name": "(/) /",
        "normalized": "a-\u003ea-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-NumExt.html#v:fact",
      "description": {
        "fct-module": "Data.Rivers.NumExt",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Rivers-NumExt.html#fact",
        "fct-type": "method",
        "title": "fact"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers NumExt",
        "module": "Data.Rivers.NumExt",
        "name": "fact",
        "normalized": "a-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-NumExt.html#v:fall",
      "description": {
        "fct-module": "Data.Rivers.NumExt",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Rivers-NumExt.html#fall",
        "fct-type": "method",
        "title": "fall"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers NumExt",
        "module": "Data.Rivers.NumExt",
        "name": "fall",
        "normalized": "a-\u003ea-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMy module for streams\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "module",
        "fct-source": "src/Data-Rivers-Streams.html",
        "fct-type": "module",
        "title": "Streams"
      },
      "index": {
        "description": "My module for streams",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "Streams",
        "normalized": "",
        "package": "rivers",
        "partial": "Streams",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#t:Coalg",
      "description": {
        "fct-descr": "\u003cp\u003eYour standard Co-Algebra (dual to Algebra).\n\u003c/p\u003e",
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "type",
        "fct-source": "src/Data-Rivers-Streams.html#Coalg",
        "fct-type": "type",
        "title": "Coalg"
      },
      "index": {
        "description": "Your standard Co-Algebra dual to Algebra",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "Coalg",
        "normalized": "",
        "package": "rivers",
        "partial": "Coalg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#t:G",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003egenerating function\u003c/a\u003e for Streams.\n\u003c/p\u003e",
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "type",
        "fct-source": "src/Data-Rivers-Streams.html#G",
        "fct-type": "type",
        "title": "G"
      },
      "index": {
        "description": "generating function for Streams",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "G",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#t:S",
      "description": {
        "fct-descr": "\u003cp\u003eYour standard \u003cem\u003eStreams\u003c/em\u003e, renamed to \u003ccode\u003eS\u003c/code\u003e because \u003ccode\u003eS\u003c/code\u003e looks like a meandering\n        stream.\n\u003c/p\u003e",
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "data",
        "fct-source": "src/Data-Rivers-Streams.html#S",
        "fct-type": "data",
        "title": "S"
      },
      "index": {
        "description": "Your standard Streams renamed to because looks like meandering stream",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "S",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eAn infinite Tree. Used to represent \u003cem\u003eStreams\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "data",
        "fct-source": "src/Data-Rivers-Streams.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "An infinite Tree Used to represent Streams",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "Tree",
        "normalized": "",
        "package": "rivers",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:-124--126--124-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#%7C~%7C",
        "fct-type": "function",
        "title": "(|~|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "(|~|) |~|",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:-124--33--124-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#%7C%21%7C",
        "fct-type": "function",
        "title": "(|!|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "(|!|) |!|",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:-60--124--124-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#%3C%7C%7C",
        "fct-type": "function",
        "title": "(\u003c||)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "(\u003c||) \u003c||",
        "normalized": "a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:-60--60--124-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "[a]-\u003e S a-\u003e S a",
        "fct-type": "function",
        "title": "(\u003c\u003c|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "(\u003c\u003c|) \u003c\u003c|",
        "normalized": "[a]-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "[a]-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:Cons",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Cons v (S v)",
        "fct-source": "src/Data-Rivers-Streams.html#S",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "Cons",
        "normalized": "",
        "package": "rivers",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:Node",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Node o (a -\u003e Tree a o)",
        "fct-source": "src/Data-Rivers-Streams.html#Tree",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "Node",
        "normalized": "Node a(b-\u003eTree b a)",
        "package": "rivers",
        "partial": "Node",
        "signature": "Node o(a-\u003eTree a o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:ago",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Integer -\u003e S a -\u003e a",
        "fct-source": "src/Data-Rivers-Streams.html#ago",
        "fct-type": "function",
        "title": "ago"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "ago",
        "normalized": "Integer-\u003eS a-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "Integer-\u003eS a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:allEqual",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "[a] -\u003e Bool",
        "fct-source": "src/Data-Rivers-Streams.html#allEqual",
        "fct-type": "function",
        "title": "allEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "allEqual",
        "normalized": "[a]-\u003eBool",
        "package": "rivers",
        "partial": "Equal",
        "signature": "[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:alternate",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#alternate",
        "fct-type": "function",
        "title": "alternate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "alternate",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:anyA",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a",
        "fct-source": "src/Data-Rivers-Streams.html#anyA",
        "fct-type": "function",
        "title": "anyA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "anyA",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:asum",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#asum",
        "fct-type": "function",
        "title": "asum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "asum",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:branches",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Tree a b -\u003e a -\u003e Tree a b",
        "fct-source": "src/Data-Rivers-Streams.html#branches",
        "fct-type": "function",
        "title": "branches"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "branches",
        "normalized": "Tree a b-\u003ea-\u003eTree a b",
        "package": "rivers",
        "partial": "",
        "signature": "Tree a b-\u003ea-\u003eTree a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:bsum",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#bsum",
        "fct-type": "function",
        "title": "bsum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "bsum",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:cfix",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Coalg c a a -\u003e c -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#cfix",
        "fct-type": "function",
        "title": "cfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "cfix",
        "normalized": "Coalg a b b-\u003ea-\u003eS b",
        "package": "rivers",
        "partial": "",
        "signature": "Coalg c a a-\u003ec-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:combStreams",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-source": "src/Data-Rivers-Streams.html#combStreams",
        "fct-type": "function",
        "title": "combStreams"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "combStreams",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "rivers",
        "partial": "Streams",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:csum",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#csum",
        "fct-type": "function",
        "title": "csum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "csum",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:diff",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "diff",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:drop0L",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#drop0L",
        "fct-type": "function",
        "title": "drop0L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "drop0L",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:dropIp1L",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#dropIp1L",
        "fct-type": "function",
        "title": "dropIp1L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "dropIp1L",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "Ip",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:dup",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#dup",
        "fct-type": "function",
        "title": "dup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "dup",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:fix",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e a) -\u003e a",
        "fct-source": "src/Data-Rivers-Streams.html#fix",
        "fct-type": "function",
        "title": "fix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "fix",
        "normalized": "(a-\u003ea)-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:fromFG",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#fromFG",
        "fct-type": "function",
        "title": "fromFG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "fromFG",
        "normalized": "G a a-\u003eS a",
        "package": "rivers",
        "partial": "FG",
        "signature": "G a a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:fromJust",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Maybe a -\u003e a",
        "fct-source": "src/Data-Rivers-Streams.html#fromJust",
        "fct-type": "function",
        "title": "fromJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "fromJust",
        "normalized": "Maybe a-\u003ea",
        "package": "rivers",
        "partial": "Just",
        "signature": "Maybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:fromOEIS",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "String -\u003e [Integer]",
        "fct-source": "src/Data-Rivers-Streams.html#fromOEIS",
        "fct-type": "function",
        "title": "fromOEIS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "fromOEIS",
        "normalized": "String-\u003e[Integer]",
        "package": "rivers",
        "partial": "OEIS",
        "signature": "String-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:fromRG",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(G a a, [a]) -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#fromRG",
        "fct-type": "function",
        "title": "fromRG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "fromRG",
        "normalized": "(G a a,[a])-\u003eS a",
        "package": "rivers",
        "partial": "RG",
        "signature": "(G a a,[a])-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:fromT",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Tree a a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#fromT",
        "fct-type": "function",
        "title": "fromT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "fromT",
        "normalized": "Tree a a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "Tree a a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:fwdFix",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#fwdFix",
        "fct-type": "function",
        "title": "fwdFix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "fwdFix",
        "normalized": "G a a-\u003eS a",
        "package": "rivers",
        "partial": "Fix",
        "signature": "G a a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:groW",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Coalg c a b -\u003e c -\u003e S a -\u003e S b",
        "fct-source": "src/Data-Rivers-Streams.html#groW",
        "fct-type": "function",
        "title": "groW"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "groW",
        "normalized": "Coalg a b c-\u003ea-\u003eS b-\u003eS c",
        "package": "rivers",
        "partial": "",
        "signature": "Coalg c a b-\u003ec-\u003eS a-\u003eS b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:group",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S [a]",
        "fct-source": "src/Data-Rivers-Streams.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "group",
        "normalized": "S a-\u003eS[a]",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:grow",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a b -\u003e S a -\u003e S b",
        "fct-source": "src/Data-Rivers-Streams.html#grow",
        "fct-type": "function",
        "title": "grow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "grow",
        "normalized": "G a b-\u003eS a-\u003eS b",
        "package": "rivers",
        "partial": "",
        "signature": "G a b-\u003eS a-\u003eS b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:hOfFG",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a b -\u003e b",
        "fct-source": "src/Data-Rivers-Streams.html#hOfFG",
        "fct-type": "function",
        "title": "hOfFG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "hOfFG",
        "normalized": "G a b-\u003eb",
        "package": "rivers",
        "partial": "Of FG",
        "signature": "G a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:hOfRG",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(G a b, [a]) -\u003e b",
        "fct-source": "src/Data-Rivers-Streams.html#hOfRG",
        "fct-type": "function",
        "title": "hOfRG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "hOfRG",
        "normalized": "(G a b,[a])-\u003eb",
        "package": "rivers",
        "partial": "Of RG",
        "signature": "(G a b,[a])-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:inits",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S [a]",
        "fct-source": "src/Data-Rivers-Streams.html#inits",
        "fct-type": "function",
        "title": "inits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "inits",
        "normalized": "S a-\u003eS[a]",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:interleave",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#interleave",
        "fct-type": "function",
        "title": "interleave"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "interleave",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:interleave-39-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#interleave%27",
        "fct-type": "function",
        "title": "interleave'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "interleave'",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:interleave3",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#interleave3",
        "fct-type": "function",
        "title": "interleave3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "interleave3",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:intersperse",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "intersperse",
        "normalized": "a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:inv",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#inv",
        "fct-type": "function",
        "title": "inv"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "inv",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:label",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Tree a b -\u003e b",
        "fct-source": "src/Data-Rivers-Streams.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "label",
        "normalized": "Tree a b-\u003eb",
        "package": "rivers",
        "partial": "",
        "signature": "Tree a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:main",
      "description": {
        "fct-descr": "\u003cp\u003eunzip, specialized to Stream tuples\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e, removes any elements from \u003ccode\u003exs\u003c/code\u003e that do not satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function may diverge if there is no element of\n \u003ccode\u003exs\u003c/code\u003e that satisfies \u003ccode\u003ep\u003c/code\u003e, e.g.  \u003ccode\u003efilter odd (repeat 0)\u003c/code\u003e will loop.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the longest prefix of the stream\n \u003ccode\u003exs\u003c/code\u003e for which the predicate \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function may diverge if every element of \u003ccode\u003exs\u003c/code\u003e\n satisfies \u003ccode\u003ep\u003c/code\u003e, e.g.  \u003ccode\u003edropWhile even (repeat 0)\u003c/code\u003e will loop.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esspan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the longest prefix of \u003ccode\u003exs\u003c/code\u003e that satisfies\n \u003ccode\u003ep\u003c/code\u003e, together with the remainder of the stream.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e function is equivalent to \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003enot . p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e function takes an integer \u003ccode\u003en\u003c/code\u003e and a stream \u003ccode\u003exs\u003c/code\u003e\n and returns a pair consisting of the prefix of \u003ccode\u003exs\u003c/code\u003e of length\n \u003ccode\u003en\u003c/code\u003e and the remaining stream immediately following this prefix.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003epartition\u003c/code\u003e function takes a predicate \u003ccode\u003ep\u003c/code\u003e and a stream\n \u003ccode\u003exs\u003c/code\u003e, and returns a pair of streams. The first stream corresponds\n to the elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e holds; the second stream\n corresponds to the elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e does not hold.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: One of the elements of the tuple may be undefined. For\n example, \u003ccode\u003efst (partition even (repeat 0)) == repeat 0\u003c/code\u003e; on the\n other hand \u003ccode\u003esnd (partition even (repeat 0))\u003c/code\u003e is undefined.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a stream and returns a stream of\n lists such that flattening the resulting stream is equal to the\n argument.  Moreover, each sublist in the resulting stream\n contains only equal elements.  For example,\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e drops the first \u003ccode\u003en\u003c/code\u003e elements off the front of\n the sequence \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003estails\u003c/code\u003e function takes a stream \u003ccode\u003exs\u003c/code\u003e and returns all the\n suffixes of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003emerge, version 2                                  [Hinze UFP p.35]\n\u003c/p\u003e\u003cp\u003emap, version 1\n | map, version 2\n | map2, really zip?\n\u003c/p\u003e\u003cp\u003efrom Unique Fixed Point p.35\n\u003c/p\u003e\u003cp\u003eunion for streams\n\u003c/p\u003e\u003cp\u003eInterleave two Streams \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e, alternating elements\n from each list.\n\u003c/p\u003e\u003cpre\u003e [x1,x2,...] `interleave` [y1,y2,...] == [x1,y1,x2,y2,...]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ey\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e creates an alternating stream of\n elements from \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003einfix prepend\n\u003c/p\u003e\u003cp\u003eturn something\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the infinite repetition of \u003ccode\u003exs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e cycle [1,2,3] = Cons 1 (Cons 2 (Cons 3 (Cons 1 (Cons 2 ...\n\u003c/pre\u003e\u003cp\u003eArithmatic, Jumping, ...\n\u003c/p\u003e\u003cp\u003emultiplication\n | stream inversion\n | finite (forward) difference\n | duplicate the head of the stream\n | even (indexed) elements\n | odd (indexed) elements\n | even (indexed) elements, v2\n | odd (indexed) elements, v2\n | drop function, results in (4*n - 1)\n | drop function, results in (2*n)\n | an alternative tail function\n\u003c/p\u003e\u003cp\u003ea kind of sum function\n | right inverse of diff\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.45\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.49\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.4\n\u003c/p\u003e\u003cp\u003eiterate (inductively) over a stream\n\u003c/p\u003e\u003cp\u003ethis can't be stopped? \n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.39\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.41\n\u003c/p\u003e\u003cp\u003e2D operator?\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.45\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.45\n\u003c/p\u003e\u003cp\u003emutually recursive\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.45\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.45\n\u003c/p\u003e\u003cpre\u003e scan f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003escan'\u003c/code\u003e is a strict scan.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003escan1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scan1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003escan1'\u003c/code\u003e is a strict scan that has no starting value.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e computes the transposition of a stream of streams.\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.45\n\u003c/p\u003e\u003cp\u003efrom Hinze UFP p.45\n\u003c/p\u003e\u003cp\u003estandard fix-point function\n | standard fix-point function, specialized to Streams (forward ordering)\n | standard fix-point function, specialized to Streams (reverse ordering)\n\u003c/p\u003e\u003cp\u003etransform a generator to a Stream operator\n | transform a generator to a Stream operator - v2?\n | transform a Stream operator to a generator\n | transform a generator, along with a reversed list, into a Stream operator\n\u003c/p\u003e\u003cp\u003esmart constructor for Tree labels\n | smart constructor for Tree branches\n | translate a Tree to a Generator\n | translate a Generator to a Tree\n | translate a Tree element to a Stream element\n | translate a Generator element to a Stream element\n | fromFG helper function (head) \n | fromFG helper function (tail)\n | fromRG: translate a Generator (and a reversed list) to a Stream element\n | fromRG helper function (head)\n | fromRG helper function (tail)\n\u003c/p\u003e\u003cp\u003eunfold operator, specialized to Co-Algebras\n | standard fix-point function, specialized to Co-Algebras\n | generate a Stream operator, given a Co-Algebra\n\u003c/p\u003e\u003cp\u003eutility function to lookup sequence in OEIS\n | utility function to check of all elements of a list are equal\n | utility function to unwrap a (known good) Maybe\n | utility function to map over adjacent elements in a list\n\u003c/p\u003e\u003cp\u003ePower Series \u003ca\u003eGlasses\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHorner's Rule on Streams\n\u003c/p\u003e\u003cp\u003es = sconst (shead t) + (z |*| stail s)\n\u003c/p\u003e\u003cp\u003eimplies\n\u003c/p\u003e\u003cp\u003ez |*| s = 0 \u003c|| s\n\u003c/p\u003e",
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-Rivers-Streams.html#main",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "unzip specialized to Stream tuples filter xs removes any elements from xs that do not satisfy Beware this function may diverge if there is no element of xs that satisfies e.g filter odd repeat will loop takeWhile xs returns the longest prefix of the stream xs for which the predicate holds dropWhile xs returns the suffix remaining after takeWhile xs Beware this function may diverge if every element of xs satisfies e.g dropWhile even repeat will loop sspan xs returns the longest prefix of xs that satisfies together with the remainder of the stream The break function is equivalent to span not The splitAt function takes an integer and stream xs and returns pair consisting of the prefix of xs of length and the remaining stream immediately following this prefix Beware passing negative integer as the first argument will cause an error The partition function takes predicate and stream xs and returns pair of streams The first stream corresponds to the elements of xs for which holds the second stream corresponds to the elements of xs for which does not hold Beware One of the elements of the tuple may be undefined For example fst partition even repeat repeat on the other hand snd partition even repeat is undefined The group function takes stream and returns stream of lists such that flattening the resulting stream is equal to the argument Moreover each sublist in the resulting stream contains only equal elements For example drop xs drops the first elements off the front of the sequence xs Beware passing negative integer as the first argument will cause an error The stails function takes stream xs and returns all the suffixes of xs merge version Hinze UFP p.35 map version map version map2 really zip from Unique Fixed Point p.35 union for streams Interleave two Streams xs and ys alternating elements from each list x1 x2 interleave y1 y2 x1 y1 x2 y2 intersperse xs creates an alternating stream of elements from xs and infix prepend turn something cycle xs returns the infinite repetition of xs cycle Cons Cons Cons Cons Cons Arithmatic Jumping multiplication stream inversion finite forward difference duplicate the head of the stream even indexed elements odd indexed elements even indexed elements v2 odd indexed elements v2 drop function results in drop function results in an alternative tail function kind of sum function right inverse of diff from Hinze UFP p.45 from Hinze UFP p.49 from Hinze UFP p.4 iterate inductively over stream this can be stopped from Hinze UFP p.39 from Hinze UFP p.41 operator from Hinze UFP p.45 from Hinze UFP p.45 mutually recursive from Hinze UFP p.45 from Hinze UFP p.45 scan x1 x2 x1 x1 x2 scan is strict scan scan1 is variant of scan that has no starting value argument scan1 x1 x2 x1 x1 x2 scan1 is strict scan that has no starting value transpose computes the transposition of stream of streams from Hinze UFP p.45 from Hinze UFP p.45 standard fix-point function standard fix-point function specialized to Streams forward ordering standard fix-point function specialized to Streams reverse ordering transform generator to Stream operator transform generator to Stream operator v2 transform Stream operator to generator transform generator along with reversed list into Stream operator smart constructor for Tree labels smart constructor for Tree branches translate Tree to Generator translate Generator to Tree translate Tree element to Stream element translate Generator element to Stream element fromFG helper function head fromFG helper function tail fromRG translate Generator and reversed list to Stream element fromRG helper function head fromRG helper function tail unfold operator specialized to Co-Algebras standard fix-point function specialized to Co-Algebras generate Stream operator given Co-Algebra utility function to lookup sequence in OEIS utility function to check of all elements of list are equal utility function to unwrap known good Maybe utility function to map over adjacent elements in list Power Series Glasses Horner Rule on Streams sconst shead stail implies",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "main",
        "normalized": "IO()",
        "package": "rivers",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:map1",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b) -\u003e S a -\u003e S b",
        "fct-source": "src/Data-Rivers-Streams.html#map1",
        "fct-type": "function",
        "title": "map1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "map1",
        "normalized": "(a-\u003eb)-\u003eS a-\u003eS b",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eS a-\u003eS b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:mapAdjacent",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-Rivers-Streams.html#mapAdjacent",
        "fct-type": "function",
        "title": "mapAdjacent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "mapAdjacent",
        "normalized": "(a-\u003ea-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "rivers",
        "partial": "Adjacent",
        "signature": "(a-\u003ea-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:merge",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "merge",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:plus",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#plus",
        "fct-type": "function",
        "title": "plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "plus",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:rep",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(S a -\u003e S b) -\u003e G a b",
        "fct-source": "src/Data-Rivers-Streams.html#rep",
        "fct-type": "function",
        "title": "rep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "rep",
        "normalized": "(S a-\u003eS b)-\u003eG a b",
        "package": "rivers",
        "partial": "",
        "signature": "(S a-\u003eS b)-\u003eG a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:revFix",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#revFix",
        "fct-type": "function",
        "title": "revFix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "revFix",
        "normalized": "G a a-\u003eS a",
        "package": "rivers",
        "partial": "Fix",
        "signature": "G a a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:rgen",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a b -\u003e S a -\u003e S b",
        "fct-source": "src/Data-Rivers-Streams.html#rgen",
        "fct-type": "function",
        "title": "rgen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "rgen",
        "normalized": "G a b-\u003eS a-\u003eS b",
        "package": "rivers",
        "partial": "",
        "signature": "G a b-\u003eS a-\u003eS b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:rgen-39-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a b -\u003e [a] -\u003e S a -\u003e S b",
        "fct-source": "src/Data-Rivers-Streams.html#rgen%27",
        "fct-type": "function",
        "title": "rgen'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "rgen'",
        "normalized": "G a b-\u003e[a]-\u003eS a-\u003eS b",
        "package": "rivers",
        "partial": "",
        "signature": "G a b-\u003e[a]-\u003eS a-\u003eS b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sEven",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#sEven",
        "fct-type": "function",
        "title": "sEven"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sEven",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "Even",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sMap",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b) -\u003e S a -\u003e S b",
        "fct-source": "src/Data-Rivers-Streams.html#sMap",
        "fct-type": "function",
        "title": "sMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sMap",
        "normalized": "(a-\u003eb)-\u003eS a-\u003eS b",
        "package": "rivers",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003eS a-\u003eS b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sMap2",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e S a -\u003e S b -\u003e S c",
        "fct-source": "src/Data-Rivers-Streams.html#sMap2",
        "fct-type": "function",
        "title": "sMap2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sMap2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eS a-\u003eS b-\u003eS c",
        "package": "rivers",
        "partial": "Map",
        "signature": "(a-\u003eb-\u003ec)-\u003eS a-\u003eS b-\u003eS c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sMap3",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e S a -\u003e S b -\u003e S c -\u003e S d",
        "fct-source": "src/Data-Rivers-Streams.html#sMap3",
        "fct-type": "function",
        "title": "sMap3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sMap3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eS a-\u003eS b-\u003eS c-\u003eS d",
        "package": "rivers",
        "partial": "Map",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eS a-\u003eS b-\u003eS c-\u003eS d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sMap4",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e S a -\u003e S b -\u003e S c -\u003e S d -\u003e S e",
        "fct-source": "src/Data-Rivers-Streams.html#sMap4",
        "fct-type": "function",
        "title": "sMap4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sMap4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eS a-\u003eS b-\u003eS c-\u003eS d-\u003eS e",
        "package": "rivers",
        "partial": "Map",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eS a-\u003eS b-\u003eS c-\u003eS d-\u003eS e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sOdd",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#sOdd",
        "fct-type": "function",
        "title": "sOdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sOdd",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "Odd",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sbreak",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e Bool) -\u003e S a -\u003e ([a], S a)",
        "fct-source": "src/Data-Rivers-Streams.html#sbreak",
        "fct-type": "function",
        "title": "sbreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sbreak",
        "normalized": "(a-\u003eBool)-\u003eS a-\u003e([a],S a)",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eS a-\u003e([a],S a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:scan",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e S b -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "scan",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eS b-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eS b-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:scan-39-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e S b -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#scan%27",
        "fct-type": "function",
        "title": "scan'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "scan'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eS b-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eS b-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:scan1",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#scan1",
        "fct-type": "function",
        "title": "scan1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "scan1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:scan1-39-",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#scan1%27",
        "fct-type": "function",
        "title": "scan1'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "scan1'",
        "normalized": "(a-\u003ea-\u003ea)-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sconst",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#sconst",
        "fct-type": "function",
        "title": "sconst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sconst",
        "normalized": "a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:scycle",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "[a] -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#scycle",
        "fct-type": "function",
        "title": "scycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "scycle",
        "normalized": "[a]-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "[a]-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sdrop",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Int -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#sdrop",
        "fct-type": "function",
        "title": "sdrop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sdrop",
        "normalized": "Int-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "Int-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sdropWhile",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e Bool) -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#sdropWhile",
        "fct-type": "function",
        "title": "sdropWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sdropWhile",
        "normalized": "(a-\u003eBool)-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:seven",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#seven",
        "fct-type": "function",
        "title": "seven"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "seven",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sfilter",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e Bool) -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#sfilter",
        "fct-type": "function",
        "title": "sfilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sfilter",
        "normalized": "(a-\u003eBool)-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:shead",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e a",
        "fct-source": "src/Data-Rivers-Streams.html#shead",
        "fct-type": "function",
        "title": "shead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "shead",
        "normalized": "S a-\u003ea",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:siterate",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#siterate",
        "fct-type": "function",
        "title": "siterate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "siterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:smerge",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#smerge",
        "fct-type": "function",
        "title": "smerge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "smerge",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sodd",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#sodd",
        "fct-type": "function",
        "title": "sodd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sodd",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:spartition",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e Bool) -\u003e S a -\u003e (S a, S a)",
        "fct-source": "src/Data-Rivers-Streams.html#spartition",
        "fct-type": "function",
        "title": "spartition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "spartition",
        "normalized": "(a-\u003eBool)-\u003eS a-\u003e(S a,S a)",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eS a-\u003e(S a,S a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sspan",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e Bool) -\u003e S a -\u003e ([a], S a)",
        "fct-source": "src/Data-Rivers-Streams.html#sspan",
        "fct-type": "function",
        "title": "sspan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sspan",
        "normalized": "(a-\u003eBool)-\u003eS a-\u003e([a],S a)",
        "package": "rivers",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eS a-\u003e([a],S a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:ssplitAt",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Int -\u003e S a -\u003e ([a], S a)",
        "fct-source": "src/Data-Rivers-Streams.html#ssplitAt",
        "fct-type": "function",
        "title": "ssplitAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "ssplitAt",
        "normalized": "Int-\u003eS a-\u003e([a],S a)",
        "package": "rivers",
        "partial": "At",
        "signature": "Int-\u003eS a-\u003e([a],S a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:stail",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#stail",
        "fct-type": "function",
        "title": "stail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "stail",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:stake",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Integer -\u003e S a -\u003e [a]",
        "fct-source": "src/Data-Rivers-Streams.html#stake",
        "fct-type": "function",
        "title": "stake"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "stake",
        "normalized": "Integer-\u003eS a-\u003e[a]",
        "package": "rivers",
        "partial": "",
        "signature": "Integer-\u003eS a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:stakeWhile",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e Bool) -\u003e S a -\u003e [a]",
        "fct-source": "src/Data-Rivers-Streams.html#stakeWhile",
        "fct-type": "function",
        "title": "stakeWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "stakeWhile",
        "normalized": "(a-\u003eBool)-\u003eS a-\u003e[a]",
        "package": "rivers",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eS a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:sunzip",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S (a, b) -\u003e (S a, S b)",
        "fct-source": "src/Data-Rivers-Streams.html#sunzip",
        "fct-type": "function",
        "title": "sunzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "sunzip",
        "normalized": "S(a,b)-\u003e(S a,S b)",
        "package": "rivers",
        "partial": "",
        "signature": "S(a,b)-\u003e(S a,S b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:szipWith",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e S a -\u003e S b -\u003e S c",
        "fct-source": "src/Data-Rivers-Streams.html#szipWith",
        "fct-type": "function",
        "title": "szipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "szipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eS a-\u003eS b-\u003eS c",
        "package": "rivers",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eS a-\u003eS b-\u003eS c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:tOfFG",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a b -\u003e a -\u003e G a b",
        "fct-source": "src/Data-Rivers-Streams.html#tOfFG",
        "fct-type": "function",
        "title": "tOfFG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "tOfFG",
        "normalized": "G a b-\u003ea-\u003eG a b",
        "package": "rivers",
        "partial": "Of FG",
        "signature": "G a b-\u003ea-\u003eG a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:tOfRG",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "(G a b, [a]) -\u003e a -\u003e (G a b, [a])",
        "fct-source": "src/Data-Rivers-Streams.html#tOfRG",
        "fct-type": "function",
        "title": "tOfRG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "tOfRG",
        "normalized": "(G a b,[a])-\u003ea-\u003e(G a b,[a])",
        "package": "rivers",
        "partial": "Of RG",
        "signature": "(G a b,[a])-\u003ea-\u003e(G a b,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:tail2",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#tail2",
        "fct-type": "function",
        "title": "tail2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "tail2",
        "normalized": "S a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:tails",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S (S a)",
        "fct-source": "src/Data-Rivers-Streams.html#tails",
        "fct-type": "function",
        "title": "tails"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "tails",
        "normalized": "S a-\u003eS(S a)",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS(S a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:times",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#times",
        "fct-type": "function",
        "title": "times"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "times",
        "normalized": "a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:toG",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Tree a b -\u003e G a b",
        "fct-source": "src/Data-Rivers-Streams.html#toG",
        "fct-type": "function",
        "title": "toG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "toG",
        "normalized": "Tree a b-\u003eG a b",
        "package": "rivers",
        "partial": "",
        "signature": "Tree a b-\u003eG a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:toT",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "G a b -\u003e Tree a b",
        "fct-source": "src/Data-Rivers-Streams.html#toT",
        "fct-type": "function",
        "title": "toT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "toT",
        "normalized": "G a b-\u003eTree a b",
        "package": "rivers",
        "partial": "",
        "signature": "G a b-\u003eTree a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:transpose",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S (S a) -\u003e S (S a)",
        "fct-source": "src/Data-Rivers-Streams.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "transpose",
        "normalized": "S(S a)-\u003eS(S a)",
        "package": "rivers",
        "partial": "",
        "signature": "S(S a)-\u003eS(S a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:turn",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Data-Rivers-Streams.html#turn",
        "fct-type": "function",
        "title": "turn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "turn",
        "normalized": "a-\u003e[a]",
        "package": "rivers",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:unfold",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "Coalg c a b -\u003e c -\u003e Tree a b",
        "fct-source": "src/Data-Rivers-Streams.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "unfold",
        "normalized": "Coalg a b c-\u003ea-\u003eTree b c",
        "package": "rivers",
        "partial": "",
        "signature": "Coalg c a b-\u003ec-\u003eTree a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:union",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a -\u003e S a -\u003e S a",
        "fct-source": "src/Data-Rivers-Streams.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "union",
        "normalized": "S a-\u003eS a-\u003eS a",
        "package": "rivers",
        "partial": "",
        "signature": "S a-\u003eS a-\u003eS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rivers/docs/Data-Rivers-Streams.html#v:z0",
      "description": {
        "fct-module": "Data.Rivers.Streams",
        "fct-package": "rivers",
        "fct-signature": "S a",
        "fct-source": "src/Data-Rivers-Streams.html#z0",
        "fct-type": "function",
        "title": "z0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rivers Streams",
        "module": "Data.Rivers.Streams",
        "name": "z0",
        "normalized": "",
        "package": "rivers",
        "partial": "",
        "signature": ""
      }
    }
  }
]