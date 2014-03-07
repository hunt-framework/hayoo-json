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
        "word": "minimorph"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple default rules for English morphology\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Minimorph.English",
          "name": "English",
          "package": "minimorph",
          "source": "src/NLP-Minimorph-English.html",
          "type": "module"
        },
        "index": {
          "description": "Simple default rules for English morphology",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "English",
          "package": "minimorph",
          "partial": "English",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ewantsAn\u003c/a\u003e\u003c/code\u003e that assumes the input string is pronounced\n   one letter at a time.\n\u003c/p\u003e\u003cpre\u003e wantsAn        \"x-ray\" == False\n acronymWantsAn \"x-ray\" == True\n\u003c/pre\u003e\u003cp\u003eNote that this won't do the right thing for words like \u003ccode\u003e\u003ca\u003eSCUBA\u003c/a\u003e\u003c/code\u003e.\n   You really have to reserve it for those separate-letter acronyms.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "acronymWantsAn",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#acronymWantsAn",
          "type": "function"
        },
        "index": {
          "description": "Variant of wantsAn that assumes the input string is pronounced one letter at time wantsAn x-ray False acronymWantsAn x-ray True Note that this won do the right thing for words like SCUBA You really have to reserve it for those separate-letter acronyms",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "acronymWantsAn",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "Wants An",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:acronymWantsAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.English",
          "name": "anNumerals",
          "package": "minimorph",
          "signature": "[Text]",
          "source": "src/NLP-Minimorph-English.html#anNumerals",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "anNumerals",
          "normalized": "[Text]",
          "package": "minimorph",
          "partial": "Numerals",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:anNumerals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e cardinal 1 == \"one\"\n cardinal 2 == \"two\"\n cardinal 3 == \"three\"\n cardinal 11 == \"11\"\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "cardinal",
          "package": "minimorph",
          "signature": "Int -\u003e Text",
          "source": "src/NLP-Minimorph-English.html#cardinal",
          "type": "function"
        },
        "index": {
          "description": "cardinal one cardinal two cardinal three cardinal",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "cardinal",
          "normalized": "Int-\u003eText",
          "package": "minimorph",
          "signature": "Int-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo Oxford commas, alas.\n\u003c/p\u003e\u003cpre\u003e commas \"and\" \"foo bar\"       == \"foo and bar\"\n commas \"and\" \"foo, bar, baz\" == \"foo, bar and baz\"\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "commas",
          "package": "minimorph",
          "signature": "Text -\u003e [Text] -\u003e Text",
          "source": "src/NLP-Minimorph-English.html#commas",
          "type": "function"
        },
        "index": {
          "description": "No Oxford commas alas commas and foo bar foo and bar commas and foo bar baz foo bar and baz",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "commas",
          "normalized": "Text-\u003e[Text]-\u003eText",
          "package": "minimorph",
          "signature": "Text-\u003e[Text]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:commas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeuristics for English plural for an unknown noun.\n\u003c/p\u003e\u003cpre\u003e defaultNounPlural \"egg\"    == \"eggs\"\n defaultNounPlural \"patch\"  == \"patches\"\n defaultNounPlural \"boy\"    == \"boys\"\n defaultNounPlural \"spy\"    == \"spies\"\n defaultNounPlural \"thesis\" == \"theses\"\n\u003c/pre\u003e\u003cp\u003ehttp:\u003cem/\u003ewww.paulnoll.com\u003cem\u003eBooks\u003c/em\u003eClear-English/English-plurals-1.html\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eEnglish_plural\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "defaultNounPlural",
          "package": "minimorph",
          "signature": "Text -\u003e Text",
          "source": "src/NLP-Minimorph-English.html#defaultNounPlural",
          "type": "function"
        },
        "index": {
          "description": "Heuristics for English plural for an unknown noun defaultNounPlural egg eggs defaultNounPlural patch patches defaultNounPlural boy boys defaultNounPlural spy spies defaultNounPlural thesis theses http www.paulnoll.com Books Clear-English English-plurals-1.html http en.wikipedia.org wiki English plural",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "defaultNounPlural",
          "normalized": "Text-\u003eText",
          "package": "minimorph",
          "partial": "Noun Plural",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:defaultNounPlural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeuristics for a possesive form for an unknown noun.\n\u003c/p\u003e\u003cpre\u003e defaultPossesive \"pass\"        == \"pass'\"\n defaultPossesive \"SOS\"         == \"SOS'\"\n defaultPossesive \"Mr Blinkin'\" == \"Mr Blinkin's\"\n defaultPossesive \"cry\"         == \"cry's\"\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "defaultPossesive",
          "package": "minimorph",
          "signature": "Text -\u003e Text",
          "source": "src/NLP-Minimorph-English.html#defaultPossesive",
          "type": "function"
        },
        "index": {
          "description": "Heuristics for possesive form for an unknown noun defaultPossesive pass pass defaultPossesive SOS SOS defaultPossesive Mr Blinkin Mr Blinkin defaultPossesive cry cry",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "defaultPossesive",
          "normalized": "Text-\u003eText",
          "package": "minimorph",
          "partial": "Possesive",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:defaultPossesive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeuristics for 3rd person singular and past participle\n   for an unknown regular verb. Doubling of final consonants\n   can be handled via a table of (partially) irrefular verbs.\n\u003c/p\u003e\u003cpre\u003e defaultVerbStuff \"walk\"  == (\"walks\",  \"walked\")\n defaultVerbStuff \"push\"  == (\"pushes\", \"pushed\")\n defaultVerbStuff \"play\"  == (\"plays\",  \"played\")\n defaultVerbStuff \"cry\"   == (\"cries\",  \"cried\")\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "defaultVerbStuff",
          "package": "minimorph",
          "signature": "Text -\u003e (Text, Text)",
          "source": "src/NLP-Minimorph-English.html#defaultVerbStuff",
          "type": "function"
        },
        "index": {
          "description": "Heuristics for rd person singular and past participle for an unknown regular verb Doubling of final consonants can be handled via table of partially irrefular verbs defaultVerbStuff walk walks walked defaultVerbStuff push pushes pushed defaultVerbStuff play plays played defaultVerbStuff cry cries cried",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "defaultVerbStuff",
          "normalized": "Text-\u003e(Text,Text)",
          "package": "minimorph",
          "partial": "Verb Stuff",
          "signature": "Text-\u003e(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:defaultVerbStuff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast two letters are a consonant and \u003ccode\u003eo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "hasCoSuffix",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#hasCoSuffix",
          "type": "function"
        },
        "index": {
          "description": "Last two letters are consonant and",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "hasCoSuffix",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "Co Suffix",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasCoSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast two letters are a consonant and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "hasCySuffix",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#hasCySuffix",
          "type": "function"
        },
        "index": {
          "description": "Last two letters are consonant and",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "hasCySuffix",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "Cy Suffix",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasCySuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts with a semivowel.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "hasSemivowelPrefix",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#hasSemivowelPrefix",
          "type": "function"
        },
        "index": {
          "description": "Starts with semivowel",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "hasSemivowelPrefix",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "Semivowel Prefix",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasSemivowelPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds with a sh sound.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "hasSibilantSuffix",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#hasSibilantSuffix",
          "type": "function"
        },
        "index": {
          "description": "Ends with sh sound",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "hasSibilantSuffix",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "Sibilant Suffix",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasSibilantSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts with a vowel-y U sound\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "hasVowel_U_Prefix",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#hasVowel_U_Prefix",
          "type": "function"
        },
        "index": {
          "description": "Starts with vowel-y sound",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "hasVowel_U_Prefix",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "Vowel Prefix",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:hasVowel_U_Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e indefiniteDet \"dog\"  == \"a\"\n indefiniteDet \"egg\"  == \"an\"\n indefiniteDet \"ewe\"  == \"a\"\n indefiniteDet \"ewok\" == \"an\"\n indefiniteDet \"8th\"  == \"an\"\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "indefiniteDet",
          "package": "minimorph",
          "signature": "Text -\u003e Text",
          "source": "src/NLP-Minimorph-English.html#indefiniteDet",
          "type": "function"
        },
        "index": {
          "description": "indefiniteDet dog indefiniteDet egg an indefiniteDet ewe indefiniteDet ewok an indefiniteDet th an",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "indefiniteDet",
          "normalized": "Text-\u003eText",
          "package": "minimorph",
          "partial": "Det",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:indefiniteDet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a consonant.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "isConsonant",
          "package": "minimorph",
          "signature": "Char -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#isConsonant",
          "type": "function"
        },
        "index": {
          "description": "Is consonant",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "isConsonant",
          "normalized": "Char-\u003eBool",
          "package": "minimorph",
          "partial": "Consonant",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:isConsonant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLetters that when pronounced independently in English sound like they\n   begin with vowels.\n\u003c/p\u003e\u003cpre\u003e isLetterWithInitialVowelSound 'r' == True\n isLetterWithInitialVowelSound 'k' == False\n\u003c/pre\u003e\u003cp\u003e(In the above, \u003ccode\u003e\u003ccode\u003er\u003c/code\u003e\u003c/code\u003e is pronounced \u003ccode\u003e\u003ca\u003eare\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ccode\u003ek\u003c/code\u003e\u003c/code\u003e is pronounced\n   \u003ccode\u003e\u003ca\u003ekay\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "isLetterWithInitialVowelSound",
          "package": "minimorph",
          "signature": "Char -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#isLetterWithInitialVowelSound",
          "type": "function"
        },
        "index": {
          "description": "Letters that when pronounced independently in English sound like they begin with vowels isLetterWithInitialVowelSound True isLetterWithInitialVowelSound False In the above is pronounced are but is pronounced kay",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "isLetterWithInitialVowelSound",
          "normalized": "Char-\u003eBool",
          "package": "minimorph",
          "partial": "Letter With Initial Vowel Sound",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:isLetterWithInitialVowelSound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a vowel.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "isVowel",
          "package": "minimorph",
          "signature": "Char -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#isVowel",
          "type": "function"
        },
        "index": {
          "description": "Is vowel",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "isVowel",
          "normalized": "Char-\u003eBool",
          "package": "minimorph",
          "partial": "Vowel",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:isVowel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if all upper case from second letter and up.\n\u003c/p\u003e\u003cpre\u003e looksLikeAcronym \"DNA\"  == True\n looksLikeAcronym \"tRNA\" == True\n looksLikeAcronym \"x\"    == False\n looksLikeAcronym \"DnA\"  == False\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "looksLikeAcronym",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#looksLikeAcronym",
          "type": "function"
        },
        "index": {
          "description": "True if all upper case from second letter and up looksLikeAcronym DNA True looksLikeAcronym tRNA True looksLikeAcronym False looksLikeAcronym DnA False",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "looksLikeAcronym",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "Like Acronym",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:looksLikeAcronym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e ordinal 1 == \"first\"\n ordinal 2 == \"second\"\n ordinal 3 == \"third\"\n ordinal 11 == \"11th\"\n ordinal 42 == \"42nd\"\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "ordinal",
          "package": "minimorph",
          "signature": "Int -\u003e Text",
          "source": "src/NLP-Minimorph-English.html#ordinal",
          "type": "function"
        },
        "index": {
          "description": "ordinal first ordinal second ordinal third ordinal th ordinal nd",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "ordinal",
          "normalized": "Int-\u003eText",
          "package": "minimorph",
          "signature": "Int-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e ordinalNotSpelled 1 == \"1st\"\n ordinalNotSpelled 2 == \"2nd\"\n ordinalNotSpelled 11 == \"11th\"\n\u003c/pre\u003e",
          "module": "NLP.Minimorph.English",
          "name": "ordinalNotSpelled",
          "package": "minimorph",
          "signature": "Int -\u003e Text",
          "source": "src/NLP-Minimorph-English.html#ordinalNotSpelled",
          "type": "function"
        },
        "index": {
          "description": "ordinalNotSpelled st ordinalNotSpelled nd ordinalNotSpelled th",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "ordinalNotSpelled",
          "normalized": "Int-\u003eText",
          "package": "minimorph",
          "partial": "Not Spelled",
          "signature": "Int-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:ordinalNotSpelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the first word (separating on either - or space)\n   looks like an acronym.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "startsWithAcronym",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#startsWithAcronym",
          "type": "function"
        },
        "index": {
          "description": "True if the first word separating on either or space looks like an acronym",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "startsWithAcronym",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "With Acronym",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:startsWithAcronym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the indefinite determiner for a word would normally be\n   \u003ccode\u003ean\u003c/code\u003e as opposed to \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.English",
          "name": "wantsAn",
          "package": "minimorph",
          "signature": "Text -\u003e Bool",
          "source": "src/NLP-Minimorph-English.html#wantsAn",
          "type": "function"
        },
        "index": {
          "description": "True if the indefinite determiner for word would normally be an as opposed to",
          "hierarchy": "NLP Minimorph English",
          "module": "NLP.Minimorph.English",
          "name": "wantsAn",
          "normalized": "Text-\u003eBool",
          "package": "minimorph",
          "partial": "An",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-English.html#v:wantsAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "Number",
          "package": "minimorph",
          "source": "src/NLP-Minimorph-Number.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "Number",
          "package": "minimorph",
          "partial": "Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "Number",
          "package": "minimorph",
          "source": "src/NLP-Minimorph-Number.html#Number",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "Number",
          "package": "minimorph",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingular and Plural.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.Number",
          "name": "SingPlu",
          "package": "minimorph",
          "source": "src/NLP-Minimorph-Number.html#SingPlu",
          "type": "data"
        },
        "index": {
          "description": "Singular and Plural",
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "SingPlu",
          "package": "minimorph",
          "partial": "Sing Plu",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#t:SingPlu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "Plural",
          "package": "minimorph",
          "signature": "Plural",
          "source": "src/NLP-Minimorph-Number.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "Plural",
          "package": "minimorph",
          "partial": "Plural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:Plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "SP",
          "package": "minimorph",
          "signature": "SP",
          "source": "src/NLP-Minimorph-Number.html#SingPlu",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "SP",
          "package": "minimorph",
          "partial": "SP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:SP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "Singular",
          "package": "minimorph",
          "signature": "Singular",
          "source": "src/NLP-Minimorph-Number.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "Singular",
          "package": "minimorph",
          "partial": "Singular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:Singular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "fromSP",
          "package": "minimorph",
          "signature": "Number -\u003e SingPlu a -\u003e a",
          "source": "src/NLP-Minimorph-Number.html#fromSP",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "fromSP",
          "normalized": "Number-\u003eSingPlu a-\u003ea",
          "package": "minimorph",
          "partial": "SP",
          "signature": "Number-\u003eSingPlu a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:fromSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "pl",
          "package": "minimorph",
          "signature": "a",
          "source": "src/NLP-Minimorph-Number.html#SingPlu",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "pl",
          "package": "minimorph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:pl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Minimorph.Number",
          "name": "sg",
          "package": "minimorph",
          "signature": "a",
          "source": "src/NLP-Minimorph-Number.html#SingPlu",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Minimorph Number",
          "module": "NLP.Minimorph.Number",
          "name": "sg",
          "package": "minimorph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Number.html#v:sg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eText utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Minimorph.Util",
          "name": "Util",
          "package": "minimorph",
          "source": "src/NLP-Minimorph-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Text utility functions",
          "hierarchy": "NLP Minimorph Util",
          "module": "NLP.Minimorph.Util",
          "name": "Util",
          "package": "minimorph",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparated by space unless one of them is empty (in which case just\n   the non-empty one).\n\u003c/p\u003e",
          "module": "NLP.Minimorph.Util",
          "name": "(\u003c+\u003e)",
          "package": "minimorph",
          "signature": "Text -\u003e Text -\u003e Text",
          "source": "src/NLP-Minimorph-Util.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Separated by space unless one of them is empty in which case just the non-empty one",
          "hierarchy": "NLP Minimorph Util",
          "module": "NLP.Minimorph.Util",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Text-\u003eText-\u003eText",
          "package": "minimorph",
          "signature": "Text-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.Util",
          "name": "(\u003c\u003e)",
          "package": "minimorph",
          "signature": "Text -\u003e Text -\u003e Text",
          "source": "src/NLP-Minimorph-Util.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Identical to append",
          "hierarchy": "NLP Minimorph Util",
          "module": "NLP.Minimorph.Util",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "Text-\u003eText-\u003eText",
          "package": "minimorph",
          "signature": "Text-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a value in Text format.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.Util",
          "name": "showT",
          "package": "minimorph",
          "signature": "a -\u003e Text",
          "source": "src/NLP-Minimorph-Util.html#showT",
          "type": "function"
        },
        "index": {
          "description": "Show value in Text format",
          "hierarchy": "NLP Minimorph Util",
          "module": "NLP.Minimorph.Util",
          "name": "showT",
          "normalized": "a-\u003eText",
          "package": "minimorph",
          "signature": "a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:showT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etDropEnd n t\u003c/code\u003e drops the last \u003ccode\u003en\u003c/code\u003e letters of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.Util",
          "name": "tDropEnd",
          "package": "minimorph",
          "signature": "Int -\u003e Text -\u003e Text",
          "source": "src/NLP-Minimorph-Util.html#tDropEnd",
          "type": "function"
        },
        "index": {
          "description": "tDropEnd drops the last letters of",
          "hierarchy": "NLP Minimorph Util",
          "module": "NLP.Minimorph.Util",
          "name": "tDropEnd",
          "normalized": "Int-\u003eText-\u003eText",
          "package": "minimorph",
          "partial": "Drop End",
          "signature": "Int-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:tDropEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etTakeEnd n t\u003c/code\u003e returns the last \u003ccode\u003en\u003c/code\u003e letters of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Minimorph.Util",
          "name": "tTakeEnd",
          "package": "minimorph",
          "signature": "Int -\u003e Text -\u003e Text",
          "source": "src/NLP-Minimorph-Util.html#tTakeEnd",
          "type": "function"
        },
        "index": {
          "description": "tTakeEnd returns the last letters of",
          "hierarchy": "NLP Minimorph Util",
          "module": "NLP.Minimorph.Util",
          "name": "tTakeEnd",
          "normalized": "Int-\u003eText-\u003eText",
          "package": "minimorph",
          "partial": "Take End",
          "signature": "Int-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimorph/docs/NLP-Minimorph-Util.html#v:tTakeEnd"
      }
    }
  ]
]