[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlist/docs/Network-PublicSuffixList-DataStructure.html#",
      "description": {
        "fct-module": "Network.PublicSuffixList.DataStructure",
        "fct-package": "publicsuffixlist",
        "fct-signature": "module",
        "fct-source": "src/Network-PublicSuffixList-DataStructure.html",
        "fct-type": "module",
        "title": "DataStructure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network PublicSuffixList DataStructure",
        "module": "Network.PublicSuffixList.DataStructure",
        "name": "DataStructure",
        "normalized": "",
        "package": "publicsuffixlist",
        "partial": "Data Structure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlist/docs/Network-PublicSuffixList-DataStructure.html#v:dataStructure",
      "description": {
        "fct-descr": "\u003cp\u003eThe opaque data structure that \u003ccode\u003eisSuffix\u003c/code\u003e can query. This data structure was generated at 2013-04-11 07:27:06.592735 UTC\n\u003c/p\u003e",
        "fct-module": "Network.PublicSuffixList.DataStructure",
        "fct-package": "publicsuffixlist",
        "fct-signature": "DataStructure",
        "fct-source": "src/Network-PublicSuffixList-DataStructure.html#dataStructure",
        "fct-type": "function",
        "title": "dataStructure"
      },
      "index": {
        "description": "The opaque data structure that isSuffix can query This data structure was generated at UTC",
        "hierarchy": "Network PublicSuffixList DataStructure",
        "module": "Network.PublicSuffixList.DataStructure",
        "name": "dataStructure",
        "normalized": "",
        "package": "publicsuffixlist",
        "partial": "Structure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlist/docs/Network-PublicSuffixList-Lookup.html#",
      "description": {
        "fct-module": "Network.PublicSuffixList.Lookup",
        "fct-package": "publicsuffixlist",
        "fct-signature": "module",
        "fct-source": "src/Network-PublicSuffixList-Lookup.html",
        "fct-type": "module",
        "title": "Lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Network PublicSuffixList Lookup",
        "module": "Network.PublicSuffixList.Lookup",
        "name": "Lookup",
        "normalized": "",
        "package": "publicsuffixlist",
        "partial": "Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlist/docs/Network-PublicSuffixList-Lookup.html#v:effectiveTLDPlusOne",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeffectiveTLDPlusOne = effectiveTLDPlusOne' Network.PublicSuffixList.DataStructure.dataStructure\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Network.PublicSuffixList.Lookup",
        "fct-package": "publicsuffixlist",
        "fct-signature": "Text -\u003e Maybe Text",
        "fct-source": "src/Network-PublicSuffixList-Lookup.html#effectiveTLDPlusOne",
        "fct-type": "function",
        "title": "effectiveTLDPlusOne"
      },
      "index": {
        "description": "effectiveTLDPlusOne effectiveTLDPlusOne Network.PublicSuffixList.DataStructure.dataStructure",
        "hierarchy": "Network PublicSuffixList Lookup",
        "module": "Network.PublicSuffixList.Lookup",
        "name": "effectiveTLDPlusOne",
        "normalized": "Text-\u003eMaybe Text",
        "package": "publicsuffixlist",
        "partial": "TLDPlus One",
        "signature": "Text-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlist/docs/Network-PublicSuffixList-Lookup.html#v:effectiveTLDPlusOne-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThis function returns whether or not this domain is owned by a\nregistrar or a regular person. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that this is a registrar\ndomain; 'Just x' means it's owned by a person. This is used to determine\nif a cookie is allowed to bet set for a particular domain. For\nexample, you shouldn't be able to set a cookie for \"com\".\n\u003c/p\u003e\u003cp\u003eIf the value is 'Just x', then the x value is what is known as the\neffective TLD plus one. This is one segment more than the suffix of the\ndomain. For example, the eTLD+1 for \u003ca\u003ethis.is.a.subdom.com\u003c/a\u003e is Just\n\u003ca\u003esubdom.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNote that this function expects lowercase ASCII strings. These strings\nshould be gotten from the toASCII algorithm as described in RFC 3490.\nThese strings should not start or end with the '.' character, and should\nnot have two '.' characters next to each other.\n(The toASCII algorithm is implemented in the 'idna' hackage package,\nthough that package doesn't always map strings to lowercase)\n\u003c/p\u003e",
        "fct-module": "Network.PublicSuffixList.Lookup",
        "fct-package": "publicsuffixlist",
        "fct-signature": "DataStructure -\u003e Text -\u003e Maybe Text",
        "fct-source": "src/Network-PublicSuffixList-Lookup.html#effectiveTLDPlusOne%27",
        "fct-type": "function",
        "title": "effectiveTLDPlusOne'"
      },
      "index": {
        "description": "This function returns whether or not this domain is owned by registrar or regular person Nothing means that this is registrar domain Just means it owned by person This is used to determine if cookie is allowed to bet set for particular domain For example you shouldn be able to set cookie for com If the value is Just then the value is what is known as the effective TLD plus one This is one segment more than the suffix of the domain For example the eTLD for this.is.a.subdom.com is Just subdom.com Note that this function expects lowercase ASCII strings These strings should be gotten from the toASCII algorithm as described in RFC These strings should not start or end with the character and should not have two characters next to each other The toASCII algorithm is implemented in the idna hackage package though that package doesn always map strings to lowercase",
        "hierarchy": "Network PublicSuffixList Lookup",
        "module": "Network.PublicSuffixList.Lookup",
        "name": "effectiveTLDPlusOne'",
        "normalized": "DataStructure-\u003eText-\u003eMaybe Text",
        "package": "publicsuffixlist",
        "partial": "TLDPlus One'",
        "signature": "DataStructure-\u003eText-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlist/docs/Network-PublicSuffixList-Lookup.html#v:isSuffix",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisSuffix = isSuffix' Network.PublicSuffixList.DataStructure.dataStructure\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Network.PublicSuffixList.Lookup",
        "fct-package": "publicsuffixlist",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/Network-PublicSuffixList-Lookup.html#isSuffix",
        "fct-type": "function",
        "title": "isSuffix"
      },
      "index": {
        "description": "isSuffix isSuffix Network.PublicSuffixList.DataStructure.dataStructure",
        "hierarchy": "Network PublicSuffixList Lookup",
        "module": "Network.PublicSuffixList.Lookup",
        "name": "isSuffix",
        "normalized": "Text-\u003eBool",
        "package": "publicsuffixlist",
        "partial": "Suffix",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlist/docs/Network-PublicSuffixList-Lookup.html#v:isSuffix-39-",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisSuffix' dataStructure = isNothing . effectiveTLDPlusOne' dataStructure\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Network.PublicSuffixList.Lookup",
        "fct-package": "publicsuffixlist",
        "fct-signature": "DataStructure -\u003e Text -\u003e Bool",
        "fct-source": "src/Network-PublicSuffixList-Lookup.html#isSuffix%27",
        "fct-type": "function",
        "title": "isSuffix'"
      },
      "index": {
        "description": "isSuffix dataStructure isNothing effectiveTLDPlusOne dataStructure",
        "hierarchy": "Network PublicSuffixList Lookup",
        "module": "Network.PublicSuffixList.Lookup",
        "name": "isSuffix'",
        "normalized": "DataStructure-\u003eText-\u003eBool",
        "package": "publicsuffixlist",
        "partial": "Suffix'",
        "signature": "DataStructure-\u003eText-\u003eBool"
      }
    }
  }
]