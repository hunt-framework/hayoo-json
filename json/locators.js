[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eBackground\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe had a need for identifiers that could be used by humans.\n\u003c/p\u003e\u003cp\u003eThe requirement to be able to say these over the phone complicates matters.\n Most people have approached this problem by using a phonetic alphabet. The\n trouble comes when you hear people saying stuff like \"A as in ... uh,\n Apple?\" (should be Alpha, of course) and \"U as in ... um, what's a word\n that starts with U?\" It gets worse. Ever been to a GPG keysigning? Listen\n to people attempt to read out the digits of their key fingerprints. ...C 3 E\n D  0 0 0 0  0 0 0 2 B D B D... \"Did you say 'C' or 'D'?\" and \"how\n many zeros was that?\" Brutal.\n\u003c/p\u003e\u003cp\u003eSo what we need is a symbol set where each digit is unambigious and doesn't\n collide with the phonetics of another symbol. This package provides\n Locator16, a set of 16 letters and numbers that, when spoken in English,\n have unique pronounciation.\n\u003c/p\u003e\u003cp\u003eAlso included is code to work in base 62, which is simply \u003ccode\u003e['0'\u003c/code\u003e-\u003ccode\u003e'9'\u003c/code\u003e,\n \u003ccode\u003e'A'\u003c/code\u003e-\u003ccode\u003e'Z'\u003c/code\u003e, and \u003ccode\u003e'a'\u003c/code\u003e-\u003ccode\u003e'z']\u003c/code\u003e. These are frequently used to express\n short codes in URL redirectors; you may find them a more useful encoding for\n expressing numbers than base 16 hexidecimal.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "module",
        "fct-source": "src/Data-Locator.html",
        "fct-type": "module",
        "title": "Locator"
      },
      "index": {
        "description": "Background We had need for identifiers that could be used by humans The requirement to be able to say these over the phone complicates matters Most people have approached this problem by using phonetic alphabet The trouble comes when you hear people saying stuff like as in uh Apple should be Alpha of course and as in um what word that starts with It gets worse Ever been to GPG keysigning Listen to people attempt to read out the digits of their key fingerprints Did you say or and how many zeros was that Brutal So what we need is symbol set where each digit is unambigious and doesn collide with the phonetics of another symbol This package provides Locator16 set of letters and numbers that when spoken in English have unique pronounciation Also included is code to work in base which is simply and These are frequently used to express short codes in URL redirectors you may find them more useful encoding for expressing numbers than base hexidecimal",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Locator",
        "normalized": "",
        "package": "locators",
        "partial": "Locator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#t:English16",
      "description": {
        "fct-descr": "\u003cp\u003eA symbol set with sixteen uniquely pronounceable digits.\n\u003c/p\u003e\u003cp\u003eThe fact there are sixteen symbols is more an indication of a certain degree\n of bullheaded-ness on the part of the author, and less of any kind of actual\n requirement. We might have a slighly better readback score if we dropped to\n 15 or 14 unique characters. It does mean you can match up with hexidecimal,\n which is not entirely without merit.\n\u003c/p\u003e\u003cp\u003eThe grouping of letters and numbers was the hard part; having come up with\n the set and deconflicted the choices, the ordering is then entirely\n arbitrary. Since there are some numbers, might as well have them at the same\n place they correspond to in base 10; the letters were then allocated in\n alpha order in the remaining slots.\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "data",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "data",
        "title": "English16"
      },
      "index": {
        "description": "symbol set with sixteen uniquely pronounceable digits The fact there are sixteen symbols is more an indication of certain degree of bullheaded-ness on the part of the author and less of any kind of actual requirement We might have slighly better readback score if we dropped to or unique characters It does mean you can match up with hexidecimal which is not entirely without merit The grouping of letters and numbers was the hard part having come up with the set and deconflicted the choices the ordering is then entirely arbitrary Since there are some numbers might as well have them at the same place they correspond to in base the letters were then allocated in alpha order in the remaining slots",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "English16",
        "normalized": "",
        "package": "locators",
        "partial": "English",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#t:Locator",
      "description": {
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "class",
        "fct-source": "src/Data-Locator-Locators.html#Locator",
        "fct-type": "class",
        "title": "Locator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Locator",
        "normalized": "",
        "package": "locators",
        "partial": "Locator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Charlie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'C'\u003c/code\u003e \u003cem\u003e3rd\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Charlie",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Charlie"
      },
      "index": {
        "description": "rd",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Charlie",
        "normalized": "",
        "package": "locators",
        "partial": "Charlie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Eight",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'8'\u003c/code\u003e \u003cem\u003e8th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Eight",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Eight"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Eight",
        "normalized": "",
        "package": "locators",
        "partial": "Eight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Four",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'4'\u003c/code\u003e \u003cem\u003e4th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Four",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Four"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Four",
        "normalized": "",
        "package": "locators",
        "partial": "Four",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Foxtrot",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'F'\u003c/code\u003e \u003cem\u003e5th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Foxtrot",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Foxtrot"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Foxtrot",
        "normalized": "",
        "package": "locators",
        "partial": "Foxtrot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Hotel",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'H'\u003c/code\u003e \u003cem\u003e6th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Hotel",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Hotel"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Hotel",
        "normalized": "",
        "package": "locators",
        "partial": "Hotel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Kilo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'K'\u003c/code\u003e \u003cem\u003e10th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Kilo",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Kilo"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Kilo",
        "normalized": "",
        "package": "locators",
        "partial": "Kilo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Lima",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'L'\u003c/code\u003e \u003cem\u003e11th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Lima",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Lima"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Lima",
        "normalized": "",
        "package": "locators",
        "partial": "Lima",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Mike",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'M'\u003c/code\u003e \u003cem\u003e12th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Mike",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Mike"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Mike",
        "normalized": "",
        "package": "locators",
        "partial": "Mike",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Nine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'9'\u003c/code\u003e \u003cem\u003e9th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Nine",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Nine"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Nine",
        "normalized": "",
        "package": "locators",
        "partial": "Nine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:One",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'1'\u003c/code\u003e \u003cem\u003e1st\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "One",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "st",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "One",
        "normalized": "",
        "package": "locators",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Romeo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'R'\u003c/code\u003e \u003cem\u003e13th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Romeo",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Romeo"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Romeo",
        "normalized": "",
        "package": "locators",
        "partial": "Romeo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Seven",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'7'\u003c/code\u003e \u003cem\u003e7th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Seven",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Seven"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Seven",
        "normalized": "",
        "package": "locators",
        "partial": "Seven",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Two",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'2'\u003c/code\u003e \u003cem\u003e2nd\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Two",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Two"
      },
      "index": {
        "description": "nd",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Two",
        "normalized": "",
        "package": "locators",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:XRay",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'X'\u003c/code\u003e \u003cem\u003e14th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "XRay",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "XRay"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "XRay",
        "normalized": "",
        "package": "locators",
        "partial": "XRay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Yankee",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'Y'\u003c/code\u003e \u003cem\u003e15th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Yankee",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Yankee"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Yankee",
        "normalized": "",
        "package": "locators",
        "partial": "Yankee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Zero",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e'0'\u003c/code\u003e \u003cem\u003e0th\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Zero",
        "fct-source": "src/Data-Locator-Locators.html#English16",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "th",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "Zero",
        "normalized": "",
        "package": "locators",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:digitToLocator",
      "description": {
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Char -\u003e α",
        "fct-source": "src/Data-Locator-Locators.html#digitToLocator",
        "fct-type": "method",
        "title": "digitToLocator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "digitToLocator",
        "normalized": "Char-\u003ea",
        "package": "locators",
        "partial": "To Locator",
        "signature": "Char-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:fromBase62",
      "description": {
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "String -\u003e Integer",
        "fct-source": "src/Data-Locator-Hashes.html#fromBase62",
        "fct-type": "function",
        "title": "fromBase62"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "fromBase62",
        "normalized": "String-\u003eInteger",
        "package": "locators",
        "partial": "Base",
        "signature": "String-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:fromLocator16",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a number encoded in Locator16, convert it back to an integer.\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "String -\u003e Int",
        "fct-source": "src/Data-Locator-Locators.html#fromLocator16",
        "fct-type": "function",
        "title": "fromLocator16"
      },
      "index": {
        "description": "Given number encoded in Locator16 convert it back to an integer",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "fromLocator16",
        "normalized": "String-\u003eInt",
        "package": "locators",
        "partial": "Locator",
        "signature": "String-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:hashStringToBase62",
      "description": {
        "fct-descr": "\u003cp\u003eTake an arbitrary string, hash it, then pad it with zeros up to be a\n \u003ccode\u003edigits\u003c/code\u003e-long string in base 62.\n\u003c/p\u003e\u003cp\u003eYou may be interested to know that the 160-bit SHA1 hash used here can be\n expressed without loss as 27 digits of base 62, for example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehashStringToBase62 27 \"Hello World\"\n\u003c/code\u003e\u003c/strong\u003e1T8Sj4C5jVU6iQXCwCwJEPSWX6u\n\u003c/pre\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-Locator-Hashes.html#hashStringToBase62",
        "fct-type": "function",
        "title": "hashStringToBase62"
      },
      "index": {
        "description": "Take an arbitrary string hash it then pad it with zeros up to be digits long string in base You may be interested to know that the bit SHA1 hash used here can be expressed without loss as digits of base for example hashStringToBase62 Hello World T8Sj4C5jVU6iQXCwCwJEPSWX6u",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "hashStringToBase62",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "locators",
        "partial": "String To Base",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:hashStringToLocator16a",
      "description": {
        "fct-descr": "\u003cp\u003eTake an arbitrary sequence of bytes, hash it with SHA1, then format as a\n short \u003ccode\u003edigits\u003c/code\u003e-long Locator16 string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehashStringToLocator16a 6 \"Hello World\"\n\u003c/code\u003e\u003c/strong\u003eM48HR0\n\u003c/pre\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-Locator-Locators.html#hashStringToLocator16a",
        "fct-type": "function",
        "title": "hashStringToLocator16a"
      },
      "index": {
        "description": "Take an arbitrary sequence of bytes hash it with SHA1 then format as short digits long Locator16 string hashStringToLocator16a Hello World M48HR0",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "hashStringToLocator16a",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "locators",
        "partial": "String To Locator",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:locatorToDigit",
      "description": {
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "α -\u003e Char",
        "fct-source": "src/Data-Locator-Locators.html#locatorToDigit",
        "fct-type": "method",
        "title": "locatorToDigit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "locatorToDigit",
        "normalized": "a-\u003eChar",
        "package": "locators",
        "partial": "To Digit",
        "signature": "α-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:toBase62",
      "description": {
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Integer -\u003e String",
        "fct-source": "src/Data-Locator-Hashes.html#toBase62",
        "fct-type": "function",
        "title": "toBase62"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "toBase62",
        "normalized": "Integer-\u003eString",
        "package": "locators",
        "partial": "Base",
        "signature": "Integer-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:toLocator16",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a number, convert it to a string in the Locator16 base 16 symbol\n alphabet. You can use this as a replacement for the standard '0'-'9'\n 'A'-'F' symbols traditionally used to express hexidemimal, though really\n the fact that we came up with 16 total unique symbols was a nice\n co-incidence, not a requirement.\n\u003c/p\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Int -\u003e String",
        "fct-source": "src/Data-Locator-Locators.html#toLocator16",
        "fct-type": "function",
        "title": "toLocator16"
      },
      "index": {
        "description": "Given number convert it to string in the Locator16 base symbol alphabet You can use this as replacement for the standard symbols traditionally used to express hexidemimal though really the fact that we came up with total unique symbols was nice co-incidence not requirement",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "toLocator16",
        "normalized": "Int-\u003eString",
        "package": "locators",
        "partial": "Locator",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:toLocator16a",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a number in Locator16a format. This uses the Locator16 symbol\n set, and additionally specifies that no symbol can be repeated. The \u003cem\u003ea\u003c/em\u003e in\n Locator16a represents that this transformation is done on the cheap; when\n converting if we end up with '9' '9' we simply pick the subsequent digit\n in the enum, in this case getting you '9' 'K'.\n\u003c/p\u003e\u003cp\u003eNote that the transformation is \u003cem\u003enot\u003c/em\u003e reversible. A number like \u003ccode\u003e4369\u003c/code\u003e\n (which is \u003ccode\u003e0x1111\u003c/code\u003e, incidentally) encodes as \u003ccode\u003e12C4\u003c/code\u003e. So do \u003ccode\u003e4370\u003c/code\u003e, \u003ccode\u003e4371\u003c/code\u003e,\n and \u003ccode\u003e4372\u003c/code\u003e. The point is not uniqueness, but readibility in adverse\n conditions. So while you can count locators, they don't map continuously to\n base10 integers.\n\u003c/p\u003e\u003cp\u003eThe first argument is the number of digits you'd like in the locator; if the\n number passed in is less than 16^limit, then the result will be padded.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoLocator16a 6 4369\n\u003c/code\u003e\u003c/strong\u003e12C40F\n\u003c/pre\u003e",
        "fct-module": "Data.Locator",
        "fct-package": "locators",
        "fct-signature": "Int -\u003e Int -\u003e String",
        "fct-source": "src/Data-Locator-Locators.html#toLocator16a",
        "fct-type": "function",
        "title": "toLocator16a"
      },
      "index": {
        "description": "Represent number in Locator16a format This uses the Locator16 symbol set and additionally specifies that no symbol can be repeated The in Locator16a represents that this transformation is done on the cheap when converting if we end up with we simply pick the subsequent digit in the enum in this case getting you Note that the transformation is not reversible number like which is x1111 incidentally encodes as C4 So do and The point is not uniqueness but readibility in adverse conditions So while you can count locators they don map continuously to base10 integers The first argument is the number of digits you like in the locator if the number passed in is less than limit then the result will be padded toLocator16a C40F",
        "hierarchy": "Data Locator",
        "module": "Data.Locator",
        "name": "toLocator16a",
        "normalized": "Int-\u003eInt-\u003eString",
        "package": "locators",
        "partial": "Locator",
        "signature": "Int-\u003eInt-\u003eString"
      }
    }
  }
]