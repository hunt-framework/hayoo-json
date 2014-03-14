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
        "word": "locators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eBackground\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe had a need for identifiers that could be used by humans.\n\u003c/p\u003e\u003cp\u003eThe requirement to be able to say these over the phone complicates matters.\n Most people have approached this problem by using a phonetic alphabet. The\n trouble comes when you hear people saying stuff like \"A as in ... uh,\n Apple?\" (should be Alpha, of course) and \"U as in ... um, what's a word\n that starts with U?\" It gets worse. Ever been to a GPG keysigning? Listen\n to people attempt to read out the digits of their key fingerprints. ...C 3 E\n D  0 0 0 0  0 0 0 2 B D B D... \"Did you say 'C' or 'D'?\" and \"how\n many zeros was that?\" Brutal.\n\u003c/p\u003e\u003cp\u003eSo what we need is a symbol set where each digit is unambigious and doesn't\n collide with the phonetics of another symbol. This package provides\n Locator16, a set of 16 letters and numbers that, when spoken in English,\n have unique pronounciation.\n\u003c/p\u003e\u003cp\u003eAlso included is code to work in base 62, which is simply \u003ccode\u003e['0'\u003c/code\u003e-\u003ccode\u003e'9'\u003c/code\u003e,\n \u003ccode\u003e'A'\u003c/code\u003e-\u003ccode\u003e'Z'\u003c/code\u003e, and \u003ccode\u003e'a'\u003c/code\u003e-\u003ccode\u003e'z']\u003c/code\u003e. These are frequently used to express\n short codes in URL redirectors; you may find them a more useful encoding for\n expressing numbers than base 16 hexidecimal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Locator",
          "name": "Locator",
          "package": "locators",
          "source": "src/Data-Locator.html",
          "type": "module"
        },
        "index": {
          "description": "Background We had need for identifiers that could be used by humans The requirement to be able to say these over the phone complicates matters Most people have approached this problem by using phonetic alphabet The trouble comes when you hear people saying stuff like as in uh Apple should be Alpha of course and as in um what word that starts with It gets worse Ever been to GPG keysigning Listen to people attempt to read out the digits of their key fingerprints Did you say or and how many zeros was that Brutal So what we need is symbol set where each digit is unambigious and doesn collide with the phonetics of another symbol This package provides Locator16 set of letters and numbers that when spoken in English have unique pronounciation Also included is code to work in base which is simply and These are frequently used to express short codes in URL redirectors you may find them more useful encoding for expressing numbers than base hexidecimal",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Locator",
          "package": "locators",
          "partial": "Locator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol set with sixteen uniquely pronounceable digits.\n\u003c/p\u003e\u003cp\u003eThe fact there are sixteen symbols is more an indication of a certain degree\n of bullheaded-ness on the part of the author, and less of any kind of actual\n requirement. We might have a slighly better readback score if we dropped to\n 15 or 14 unique characters. It does mean you can match up with hexidecimal,\n which is not entirely without merit.\n\u003c/p\u003e\u003cp\u003eThe grouping of letters and numbers was the hard part; having come up with\n the set and deconflicted the choices, the ordering is then entirely\n arbitrary. Since there are some numbers, might as well have them at the same\n place they correspond to in base 10; the letters were then allocated in\n alpha order in the remaining slots.\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "English16",
          "package": "locators",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "data"
        },
        "index": {
          "description": "symbol set with sixteen uniquely pronounceable digits The fact there are sixteen symbols is more an indication of certain degree of bullheaded-ness on the part of the author and less of any kind of actual requirement We might have slighly better readback score if we dropped to or unique characters It does mean you can match up with hexidecimal which is not entirely without merit The grouping of letters and numbers was the hard part having come up with the set and deconflicted the choices the ordering is then entirely arbitrary Since there are some numbers might as well have them at the same place they correspond to in base the letters were then allocated in alpha order in the remaining slots",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "English16",
          "package": "locators",
          "partial": "English",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#t:English16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locator",
          "name": "Locator",
          "package": "locators",
          "source": "src/Data-Locator-Locators.html#Locator",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Locator",
          "package": "locators",
          "partial": "Locator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#t:Locator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'C'\u003c/code\u003e \u003cem\u003e3rd\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Charlie",
          "package": "locators",
          "signature": "Charlie",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "rd",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Charlie",
          "package": "locators",
          "partial": "Charlie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Charlie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'8'\u003c/code\u003e \u003cem\u003e8th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Eight",
          "package": "locators",
          "signature": "Eight",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Eight",
          "package": "locators",
          "partial": "Eight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Eight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'4'\u003c/code\u003e \u003cem\u003e4th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Four",
          "package": "locators",
          "signature": "Four",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Four",
          "package": "locators",
          "partial": "Four",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'F'\u003c/code\u003e \u003cem\u003e5th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Foxtrot",
          "package": "locators",
          "signature": "Foxtrot",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Foxtrot",
          "package": "locators",
          "partial": "Foxtrot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Foxtrot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'H'\u003c/code\u003e \u003cem\u003e6th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Hotel",
          "package": "locators",
          "signature": "Hotel",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Hotel",
          "package": "locators",
          "partial": "Hotel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Hotel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'K'\u003c/code\u003e \u003cem\u003e10th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Kilo",
          "package": "locators",
          "signature": "Kilo",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Kilo",
          "package": "locators",
          "partial": "Kilo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Kilo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'L'\u003c/code\u003e \u003cem\u003e11th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Lima",
          "package": "locators",
          "signature": "Lima",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Lima",
          "package": "locators",
          "partial": "Lima",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Lima"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'M'\u003c/code\u003e \u003cem\u003e12th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Mike",
          "package": "locators",
          "signature": "Mike",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Mike",
          "package": "locators",
          "partial": "Mike",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Mike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'9'\u003c/code\u003e \u003cem\u003e9th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Nine",
          "package": "locators",
          "signature": "Nine",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Nine",
          "package": "locators",
          "partial": "Nine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Nine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'1'\u003c/code\u003e \u003cem\u003e1st\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "One",
          "package": "locators",
          "signature": "One",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "st",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "One",
          "package": "locators",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'R'\u003c/code\u003e \u003cem\u003e13th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Romeo",
          "package": "locators",
          "signature": "Romeo",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Romeo",
          "package": "locators",
          "partial": "Romeo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Romeo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'7'\u003c/code\u003e \u003cem\u003e7th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Seven",
          "package": "locators",
          "signature": "Seven",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Seven",
          "package": "locators",
          "partial": "Seven",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Seven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'2'\u003c/code\u003e \u003cem\u003e2nd\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Two",
          "package": "locators",
          "signature": "Two",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "nd",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Two",
          "package": "locators",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'X'\u003c/code\u003e \u003cem\u003e14th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "XRay",
          "package": "locators",
          "signature": "XRay",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "XRay",
          "package": "locators",
          "partial": "XRay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:XRay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'Y'\u003c/code\u003e \u003cem\u003e15th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Yankee",
          "package": "locators",
          "signature": "Yankee",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Yankee",
          "package": "locators",
          "partial": "Yankee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Yankee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e'0'\u003c/code\u003e \u003cem\u003e0th\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "Zero",
          "package": "locators",
          "signature": "Zero",
          "source": "src/Data-Locator-Locators.html#English16",
          "type": "function"
        },
        "index": {
          "description": "th",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "Zero",
          "package": "locators",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locator",
          "name": "digitToLocator",
          "package": "locators",
          "signature": "Char -\u003e α",
          "source": "src/Data-Locator-Locators.html#digitToLocator",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "digitToLocator",
          "normalized": "Char-\u003ea",
          "package": "locators",
          "partial": "To Locator",
          "signature": "Char-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:digitToLocator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locator",
          "name": "fromBase62",
          "package": "locators",
          "signature": "String -\u003e Integer",
          "source": "src/Data-Locator-Hashes.html#fromBase62",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "fromBase62",
          "normalized": "String-\u003eInteger",
          "package": "locators",
          "partial": "Base",
          "signature": "String-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:fromBase62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a number encoded in Locator16, convert it back to an integer.\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "fromLocator16",
          "package": "locators",
          "signature": "String -\u003e Int",
          "source": "src/Data-Locator-Locators.html#fromLocator16",
          "type": "function"
        },
        "index": {
          "description": "Given number encoded in Locator16 convert it back to an integer",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "fromLocator16",
          "normalized": "String-\u003eInt",
          "package": "locators",
          "partial": "Locator",
          "signature": "String-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:fromLocator16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake an arbitrary string, hash it, then pad it with zeros up to be a\n \u003ccode\u003edigits\u003c/code\u003e-long string in base 62.\n\u003c/p\u003e\u003cp\u003eYou may be interested to know that the 160-bit SHA1 hash used here can be\n expressed without loss as 27 digits of base 62, for example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehashStringToBase62 27 \"Hello World\"\n\u003c/code\u003e\u003c/strong\u003e1T8Sj4C5jVU6iQXCwCwJEPSWX6u\n\u003c/pre\u003e",
          "module": "Data.Locator",
          "name": "hashStringToBase62",
          "package": "locators",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Locator-Hashes.html#hashStringToBase62",
          "type": "function"
        },
        "index": {
          "description": "Take an arbitrary string hash it then pad it with zeros up to be digits long string in base You may be interested to know that the bit SHA1 hash used here can be expressed without loss as digits of base for example hashStringToBase62 Hello World T8Sj4C5jVU6iQXCwCwJEPSWX6u",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "hashStringToBase62",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "locators",
          "partial": "String To Base",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:hashStringToBase62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake an arbitrary sequence of bytes, hash it with SHA1, then format as a\n short \u003ccode\u003edigits\u003c/code\u003e-long Locator16 string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehashStringToLocator16a 6 \"Hello World\"\n\u003c/code\u003e\u003c/strong\u003eM48HR0\n\u003c/pre\u003e",
          "module": "Data.Locator",
          "name": "hashStringToLocator16a",
          "package": "locators",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Locator-Locators.html#hashStringToLocator16a",
          "type": "function"
        },
        "index": {
          "description": "Take an arbitrary sequence of bytes hash it with SHA1 then format as short digits long Locator16 string hashStringToLocator16a Hello World M48HR0",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "hashStringToLocator16a",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "locators",
          "partial": "String To Locator",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:hashStringToLocator16a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locator",
          "name": "locatorToDigit",
          "package": "locators",
          "signature": "α -\u003e Char",
          "source": "src/Data-Locator-Locators.html#locatorToDigit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "locatorToDigit",
          "normalized": "a-\u003eChar",
          "package": "locators",
          "partial": "To Digit",
          "signature": "α-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:locatorToDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locator",
          "name": "toBase62",
          "package": "locators",
          "signature": "Integer -\u003e String",
          "source": "src/Data-Locator-Hashes.html#toBase62",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "toBase62",
          "normalized": "Integer-\u003eString",
          "package": "locators",
          "partial": "Base",
          "signature": "Integer-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:toBase62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a number, convert it to a string in the Locator16 base 16 symbol\n alphabet. You can use this as a replacement for the standard '0'-'9'\n 'A'-'F' symbols traditionally used to express hexidemimal, though really\n the fact that we came up with 16 total unique symbols was a nice\n co-incidence, not a requirement.\n\u003c/p\u003e",
          "module": "Data.Locator",
          "name": "toLocator16",
          "package": "locators",
          "signature": "Int -\u003e String",
          "source": "src/Data-Locator-Locators.html#toLocator16",
          "type": "function"
        },
        "index": {
          "description": "Given number convert it to string in the Locator16 base symbol alphabet You can use this as replacement for the standard symbols traditionally used to express hexidemimal though really the fact that we came up with total unique symbols was nice co-incidence not requirement",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "toLocator16",
          "normalized": "Int-\u003eString",
          "package": "locators",
          "partial": "Locator",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:toLocator16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a number in Locator16a format. This uses the Locator16 symbol\n set, and additionally specifies that no symbol can be repeated. The \u003cem\u003ea\u003c/em\u003e in\n Locator16a represents that this transformation is done on the cheap; when\n converting if we end up with '9' '9' we simply pick the subsequent digit\n in the enum, in this case getting you '9' 'K'.\n\u003c/p\u003e\u003cp\u003eNote that the transformation is \u003cem\u003enot\u003c/em\u003e reversible. A number like \u003ccode\u003e4369\u003c/code\u003e\n (which is \u003ccode\u003e0x1111\u003c/code\u003e, incidentally) encodes as \u003ccode\u003e12C4\u003c/code\u003e. So do \u003ccode\u003e4370\u003c/code\u003e, \u003ccode\u003e4371\u003c/code\u003e,\n and \u003ccode\u003e4372\u003c/code\u003e. The point is not uniqueness, but readibility in adverse\n conditions. So while you can count locators, they don't map continuously to\n base10 integers.\n\u003c/p\u003e\u003cp\u003eThe first argument is the number of digits you'd like in the locator; if the\n number passed in is less than 16^limit, then the result will be padded.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoLocator16a 6 4369\n\u003c/code\u003e\u003c/strong\u003e12C40F\n\u003c/pre\u003e",
          "module": "Data.Locator",
          "name": "toLocator16a",
          "package": "locators",
          "signature": "Int -\u003e Int -\u003e String",
          "source": "src/Data-Locator-Locators.html#toLocator16a",
          "type": "function"
        },
        "index": {
          "description": "Represent number in Locator16a format This uses the Locator16 symbol set and additionally specifies that no symbol can be repeated The in Locator16a represents that this transformation is done on the cheap when converting if we end up with we simply pick the subsequent digit in the enum in this case getting you Note that the transformation is not reversible number like which is x1111 incidentally encodes as C4 So do and The point is not uniqueness but readibility in adverse conditions So while you can count locators they don map continuously to base10 integers The first argument is the number of digits you like in the locator if the number passed in is less than limit then the result will be padded toLocator16a C40F",
          "hierarchy": "Data Locator",
          "module": "Data.Locator",
          "name": "toLocator16a",
          "normalized": "Int-\u003eInt-\u003eString",
          "package": "locators",
          "partial": "Locator",
          "signature": "Int-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/locators/docs/Data-Locator.html#v:toLocator16a"
      }
    }
  ]
]