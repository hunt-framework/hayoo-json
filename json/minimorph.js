[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple default rules for English morphology\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "module",
        "fct-source": "src/NLP-Minimorph-English.html",
        "fct-type": "module",
        "title": "English"
      },
      "index": {
        "description": "Simple default rules for English morphology",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "English",
        "normalized": "",
        "package": "minimorph",
        "partial": "English",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:acronymWantsAn",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ewantsAn\u003c/a\u003e\u003c/code\u003e that assumes the input string is pronounced\n   one letter at a time.\n\u003c/p\u003e\u003cpre\u003e wantsAn        \"x-ray\" == False\n acronymWantsAn \"x-ray\" == True\n\u003c/pre\u003e\u003cp\u003eNote that this won't do the right thing for words like \u003ccode\u003e\u003ca\u003eSCUBA\u003c/a\u003e\u003c/code\u003e.\n   You really have to reserve it for those separate-letter acronyms.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#acronymWantsAn",
        "fct-type": "function",
        "title": "acronymWantsAn"
      },
      "index": {
        "description": "Variant of wantsAn that assumes the input string is pronounced one letter at time wantsAn x-ray False acronymWantsAn x-ray True Note that this won do the right thing for words like SCUBA You really have to reserve it for those separate-letter acronyms",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "acronymWantsAn",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "Wants An",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:anNumerals",
      "description": {
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "[Text]",
        "fct-source": "src/NLP-Minimorph-English.html#anNumerals",
        "fct-type": "function",
        "title": "anNumerals"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "anNumerals",
        "normalized": "[Text]",
        "package": "minimorph",
        "partial": "Numerals",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:cardinal",
      "description": {
        "fct-descr": "\u003cpre\u003e cardinal 1 == \"one\"\n cardinal 2 == \"two\"\n cardinal 3 == \"three\"\n cardinal 11 == \"11\"\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Int -\u003e Text",
        "fct-source": "src/NLP-Minimorph-English.html#cardinal",
        "fct-type": "function",
        "title": "cardinal"
      },
      "index": {
        "description": "cardinal one cardinal two cardinal three cardinal",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "cardinal",
        "normalized": "Int-\u003eText",
        "package": "minimorph",
        "partial": "",
        "signature": "Int-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:commas",
      "description": {
        "fct-descr": "\u003cp\u003eNo Oxford commas, alas.\n\u003c/p\u003e\u003cpre\u003e commas \"and\" \"foo bar\"       == \"foo and bar\"\n commas \"and\" \"foo, bar, baz\" == \"foo, bar and baz\"\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e [Text] -\u003e Text",
        "fct-source": "src/NLP-Minimorph-English.html#commas",
        "fct-type": "function",
        "title": "commas"
      },
      "index": {
        "description": "No Oxford commas alas commas and foo bar foo and bar commas and foo bar baz foo bar and baz",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "commas",
        "normalized": "Text-\u003e[Text]-\u003eText",
        "package": "minimorph",
        "partial": "",
        "signature": "Text-\u003e[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:defaultNounPlural",
      "description": {
        "fct-descr": "\u003cp\u003eHeuristics for English plural for an unknown noun.\n\u003c/p\u003e\u003cpre\u003e defaultNounPlural \"egg\"    == \"eggs\"\n defaultNounPlural \"patch\"  == \"patches\"\n defaultNounPlural \"boy\"    == \"boys\"\n defaultNounPlural \"spy\"    == \"spies\"\n defaultNounPlural \"thesis\" == \"theses\"\n\u003c/pre\u003e\u003cp\u003ehttp:\u003cem/\u003ewww.paulnoll.com\u003cem\u003eBooks\u003c/em\u003eClear-English/English-plurals-1.html\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eEnglish_plural\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/NLP-Minimorph-English.html#defaultNounPlural",
        "fct-type": "function",
        "title": "defaultNounPlural"
      },
      "index": {
        "description": "Heuristics for English plural for an unknown noun defaultNounPlural egg eggs defaultNounPlural patch patches defaultNounPlural boy boys defaultNounPlural spy spies defaultNounPlural thesis theses http www.paulnoll.com Books Clear-English English-plurals-1.html http en.wikipedia.org wiki English plural",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "defaultNounPlural",
        "normalized": "Text-\u003eText",
        "package": "minimorph",
        "partial": "Noun Plural",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:defaultPossesive",
      "description": {
        "fct-descr": "\u003cp\u003eHeuristics for a possesive form for an unknown noun.\n\u003c/p\u003e\u003cpre\u003e defaultPossesive \"pass\"        == \"pass'\"\n defaultPossesive \"SOS\"         == \"SOS'\"\n defaultPossesive \"Mr Blinkin'\" == \"Mr Blinkin's\"\n defaultPossesive \"cry\"         == \"cry's\"\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/NLP-Minimorph-English.html#defaultPossesive",
        "fct-type": "function",
        "title": "defaultPossesive"
      },
      "index": {
        "description": "Heuristics for possesive form for an unknown noun defaultPossesive pass pass defaultPossesive SOS SOS defaultPossesive Mr Blinkin Mr Blinkin defaultPossesive cry cry",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "defaultPossesive",
        "normalized": "Text-\u003eText",
        "package": "minimorph",
        "partial": "Possesive",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:defaultVerbStuff",
      "description": {
        "fct-descr": "\u003cp\u003eHeuristics for 3rd person singular and past participle\n   for an unknown regular verb. Doubling of final consonants\n   can be handled via a table of (partially) irrefular verbs.\n\u003c/p\u003e\u003cpre\u003e defaultVerbStuff \"walk\"  == (\"walks\",  \"walked\")\n defaultVerbStuff \"push\"  == (\"pushes\", \"pushed\")\n defaultVerbStuff \"play\"  == (\"plays\",  \"played\")\n defaultVerbStuff \"cry\"   == (\"cries\",  \"cried\")\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e (Text, Text)",
        "fct-source": "src/NLP-Minimorph-English.html#defaultVerbStuff",
        "fct-type": "function",
        "title": "defaultVerbStuff"
      },
      "index": {
        "description": "Heuristics for rd person singular and past participle for an unknown regular verb Doubling of final consonants can be handled via table of partially irrefular verbs defaultVerbStuff walk walks walked defaultVerbStuff push pushes pushed defaultVerbStuff play plays played defaultVerbStuff cry cries cried",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "defaultVerbStuff",
        "normalized": "Text-\u003e(Text,Text)",
        "package": "minimorph",
        "partial": "Verb Stuff",
        "signature": "Text-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasCoSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eLast two letters are a consonant and \u003ccode\u003eo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#hasCoSuffix",
        "fct-type": "function",
        "title": "hasCoSuffix"
      },
      "index": {
        "description": "Last two letters are consonant and",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "hasCoSuffix",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "Co Suffix",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasCySuffix",
      "description": {
        "fct-descr": "\u003cp\u003eLast two letters are a consonant and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#hasCySuffix",
        "fct-type": "function",
        "title": "hasCySuffix"
      },
      "index": {
        "description": "Last two letters are consonant and",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "hasCySuffix",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "Cy Suffix",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasSemivowelPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eStarts with a semivowel.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#hasSemivowelPrefix",
        "fct-type": "function",
        "title": "hasSemivowelPrefix"
      },
      "index": {
        "description": "Starts with semivowel",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "hasSemivowelPrefix",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "Semivowel Prefix",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasSibilantSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eEnds with a sh sound.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#hasSibilantSuffix",
        "fct-type": "function",
        "title": "hasSibilantSuffix"
      },
      "index": {
        "description": "Ends with sh sound",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "hasSibilantSuffix",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "Sibilant Suffix",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasVowel_U_Prefix",
      "description": {
        "fct-descr": "\u003cp\u003eStarts with a vowel-y U sound\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#hasVowel_U_Prefix",
        "fct-type": "function",
        "title": "hasVowel_U_Prefix"
      },
      "index": {
        "description": "Starts with vowel-y sound",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "hasVowel_U_Prefix",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "Vowel Prefix",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:indefiniteDet",
      "description": {
        "fct-descr": "\u003cpre\u003e indefiniteDet \"dog\"  == \"a\"\n indefiniteDet \"egg\"  == \"an\"\n indefiniteDet \"ewe\"  == \"a\"\n indefiniteDet \"ewok\" == \"an\"\n indefiniteDet \"8th\"  == \"an\"\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/NLP-Minimorph-English.html#indefiniteDet",
        "fct-type": "function",
        "title": "indefiniteDet"
      },
      "index": {
        "description": "indefiniteDet dog indefiniteDet egg an indefiniteDet ewe indefiniteDet ewok an indefiniteDet th an",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "indefiniteDet",
        "normalized": "Text-\u003eText",
        "package": "minimorph",
        "partial": "Det",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:isConsonant",
      "description": {
        "fct-descr": "\u003cp\u003eIs a consonant.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Char -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#isConsonant",
        "fct-type": "function",
        "title": "isConsonant"
      },
      "index": {
        "description": "Is consonant",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "isConsonant",
        "normalized": "Char-\u003eBool",
        "package": "minimorph",
        "partial": "Consonant",
        "signature": "Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:isLetterWithInitialVowelSound",
      "description": {
        "fct-descr": "\u003cp\u003eLetters that when pronounced independently in English sound like they\n   begin with vowels.\n\u003c/p\u003e\u003cpre\u003e isLetterWithInitialVowelSound 'r' == True\n isLetterWithInitialVowelSound 'k' == False\n\u003c/pre\u003e\u003cp\u003e(In the above, \u003ccode\u003e\u003ccode\u003er\u003c/code\u003e\u003c/code\u003e is pronounced \u003ccode\u003e\u003ca\u003eare\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ccode\u003ek\u003c/code\u003e\u003c/code\u003e is pronounced\n   \u003ccode\u003e\u003ca\u003ekay\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Char -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#isLetterWithInitialVowelSound",
        "fct-type": "function",
        "title": "isLetterWithInitialVowelSound"
      },
      "index": {
        "description": "Letters that when pronounced independently in English sound like they begin with vowels isLetterWithInitialVowelSound True isLetterWithInitialVowelSound False In the above is pronounced are but is pronounced kay",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "isLetterWithInitialVowelSound",
        "normalized": "Char-\u003eBool",
        "package": "minimorph",
        "partial": "Letter With Initial Vowel Sound",
        "signature": "Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:isVowel",
      "description": {
        "fct-descr": "\u003cp\u003eIs a vowel.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Char -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#isVowel",
        "fct-type": "function",
        "title": "isVowel"
      },
      "index": {
        "description": "Is vowel",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "isVowel",
        "normalized": "Char-\u003eBool",
        "package": "minimorph",
        "partial": "Vowel",
        "signature": "Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:looksLikeAcronym",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if all upper case from second letter and up.\n\u003c/p\u003e\u003cpre\u003e looksLikeAcronym \"DNA\"  == True\n looksLikeAcronym \"tRNA\" == True\n looksLikeAcronym \"x\"    == False\n looksLikeAcronym \"DnA\"  == False\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#looksLikeAcronym",
        "fct-type": "function",
        "title": "looksLikeAcronym"
      },
      "index": {
        "description": "True if all upper case from second letter and up looksLikeAcronym DNA True looksLikeAcronym tRNA True looksLikeAcronym False looksLikeAcronym DnA False",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "looksLikeAcronym",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "Like Acronym",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:ordinal",
      "description": {
        "fct-descr": "\u003cpre\u003e ordinal 1 == \"first\"\n ordinal 2 == \"second\"\n ordinal 3 == \"third\"\n ordinal 11 == \"11th\"\n ordinal 42 == \"42nd\"\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Int -\u003e Text",
        "fct-source": "src/NLP-Minimorph-English.html#ordinal",
        "fct-type": "function",
        "title": "ordinal"
      },
      "index": {
        "description": "ordinal first ordinal second ordinal third ordinal th ordinal nd",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "ordinal",
        "normalized": "Int-\u003eText",
        "package": "minimorph",
        "partial": "",
        "signature": "Int-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:ordinalNotSpelled",
      "description": {
        "fct-descr": "\u003cpre\u003e ordinalNotSpelled 1 == \"1st\"\n ordinalNotSpelled 2 == \"2nd\"\n ordinalNotSpelled 11 == \"11th\"\n\u003c/pre\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Int -\u003e Text",
        "fct-source": "src/NLP-Minimorph-English.html#ordinalNotSpelled",
        "fct-type": "function",
        "title": "ordinalNotSpelled"
      },
      "index": {
        "description": "ordinalNotSpelled st ordinalNotSpelled nd ordinalNotSpelled th",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "ordinalNotSpelled",
        "normalized": "Int-\u003eText",
        "package": "minimorph",
        "partial": "Not Spelled",
        "signature": "Int-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:startsWithAcronym",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the first word (separating on either - or space)\n   looks like an acronym.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#startsWithAcronym",
        "fct-type": "function",
        "title": "startsWithAcronym"
      },
      "index": {
        "description": "True if the first word separating on either or space looks like an acronym",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "startsWithAcronym",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "With Acronym",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:wantsAn",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the indefinite determiner for a word would normally be\n   \u003ccode\u003ean\u003c/code\u003e as opposed to \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.English",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/NLP-Minimorph-English.html#wantsAn",
        "fct-type": "function",
        "title": "wantsAn"
      },
      "index": {
        "description": "True if the indefinite determiner for word would normally be an as opposed to",
        "hierarchy": "NLP Minimorph English",
        "module": "NLP.Minimorph.English",
        "name": "wantsAn",
        "normalized": "Text-\u003eBool",
        "package": "minimorph",
        "partial": "An",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#",
      "description": {
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "module",
        "fct-source": "src/NLP-Minimorph-Number.html",
        "fct-type": "module",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "Number",
        "normalized": "",
        "package": "minimorph",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#t:Number",
      "description": {
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "data",
        "fct-source": "src/NLP-Minimorph-Number.html#Number",
        "fct-type": "data",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "Number",
        "normalized": "",
        "package": "minimorph",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#t:SingPlu",
      "description": {
        "fct-descr": "\u003cp\u003eSingular and Plural.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "data",
        "fct-source": "src/NLP-Minimorph-Number.html#SingPlu",
        "fct-type": "data",
        "title": "SingPlu"
      },
      "index": {
        "description": "Singular and Plural",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "SingPlu",
        "normalized": "",
        "package": "minimorph",
        "partial": "Sing Plu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:Plural",
      "description": {
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "Plural",
        "fct-source": "src/NLP-Minimorph-Number.html#Number",
        "fct-type": "function",
        "title": "Plural"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "Plural",
        "normalized": "",
        "package": "minimorph",
        "partial": "Plural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:SP",
      "description": {
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "SP",
        "fct-source": "src/NLP-Minimorph-Number.html#SingPlu",
        "fct-type": "function",
        "title": "SP"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "SP",
        "normalized": "",
        "package": "minimorph",
        "partial": "SP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:Singular",
      "description": {
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "Singular",
        "fct-source": "src/NLP-Minimorph-Number.html#Number",
        "fct-type": "function",
        "title": "Singular"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "Singular",
        "normalized": "",
        "package": "minimorph",
        "partial": "Singular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:fromSP",
      "description": {
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "Number -\u003e SingPlu a -\u003e a",
        "fct-source": "src/NLP-Minimorph-Number.html#fromSP",
        "fct-type": "function",
        "title": "fromSP"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "fromSP",
        "normalized": "Number-\u003eSingPlu a-\u003ea",
        "package": "minimorph",
        "partial": "SP",
        "signature": "Number-\u003eSingPlu a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:pl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "a",
        "fct-source": "src/NLP-Minimorph-Number.html#SingPlu",
        "fct-type": "function",
        "title": "pl"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "pl",
        "normalized": "",
        "package": "minimorph",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:sg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Minimorph.Number",
        "fct-package": "minimorph",
        "fct-signature": "a",
        "fct-source": "src/NLP-Minimorph-Number.html#SingPlu",
        "fct-type": "function",
        "title": "sg"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Minimorph Number",
        "module": "NLP.Minimorph.Number",
        "name": "sg",
        "normalized": "",
        "package": "minimorph",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eText utility functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "NLP.Minimorph.Util",
        "fct-package": "minimorph",
        "fct-signature": "module",
        "fct-source": "src/NLP-Minimorph-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Text utility functions",
        "hierarchy": "NLP Minimorph Util",
        "module": "NLP.Minimorph.Util",
        "name": "Util",
        "normalized": "",
        "package": "minimorph",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSeparated by space unless one of them is empty (in which case just\n   the non-empty one).\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.Util",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Text -\u003e Text",
        "fct-source": "src/NLP-Minimorph-Util.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Separated by space unless one of them is empty in which case just the non-empty one",
        "hierarchy": "NLP Minimorph Util",
        "module": "NLP.Minimorph.Util",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Text-\u003eText-\u003eText",
        "package": "minimorph",
        "partial": "",
        "signature": "Text-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.Util",
        "fct-package": "minimorph",
        "fct-signature": "Text -\u003e Text -\u003e Text",
        "fct-source": "src/NLP-Minimorph-Util.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Identical to append",
        "hierarchy": "NLP Minimorph Util",
        "module": "NLP.Minimorph.Util",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Text-\u003eText-\u003eText",
        "package": "minimorph",
        "partial": "",
        "signature": "Text-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:showT",
      "description": {
        "fct-descr": "\u003cp\u003eShow a value in Text format.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.Util",
        "fct-package": "minimorph",
        "fct-signature": "a -\u003e Text",
        "fct-source": "src/NLP-Minimorph-Util.html#showT",
        "fct-type": "function",
        "title": "showT"
      },
      "index": {
        "description": "Show value in Text format",
        "hierarchy": "NLP Minimorph Util",
        "module": "NLP.Minimorph.Util",
        "name": "showT",
        "normalized": "a-\u003eText",
        "package": "minimorph",
        "partial": "",
        "signature": "a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:tDropEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etDropEnd n t\u003c/code\u003e drops the last \u003ccode\u003en\u003c/code\u003e letters of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.Util",
        "fct-package": "minimorph",
        "fct-signature": "Int -\u003e Text -\u003e Text",
        "fct-source": "src/NLP-Minimorph-Util.html#tDropEnd",
        "fct-type": "function",
        "title": "tDropEnd"
      },
      "index": {
        "description": "tDropEnd drops the last letters of",
        "hierarchy": "NLP Minimorph Util",
        "module": "NLP.Minimorph.Util",
        "name": "tDropEnd",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "minimorph",
        "partial": "Drop End",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:tTakeEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etTakeEnd n t\u003c/code\u003e returns the last \u003ccode\u003en\u003c/code\u003e letters of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.Minimorph.Util",
        "fct-package": "minimorph",
        "fct-signature": "Int -\u003e Text -\u003e Text",
        "fct-source": "src/NLP-Minimorph-Util.html#tTakeEnd",
        "fct-type": "function",
        "title": "tTakeEnd"
      },
      "index": {
        "description": "tTakeEnd returns the last letters of",
        "hierarchy": "NLP Minimorph Util",
        "module": "NLP.Minimorph.Util",
        "name": "tTakeEnd",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "minimorph",
        "partial": "Take End",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  }
]