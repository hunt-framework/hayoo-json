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
        "word": "phonetic-code"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePhonix codes (Gadd 1990) augment slightly improved Soundex codes\n  with a preprocessing step for cleaning up certain n-grams.  Since\n  the preprocessing step contains more than 150 rules processed by\n  a slow custom-written scanner, this implementation is not too fast.\n\u003c/p\u003e\u003cp\u003eThis code was based on a number of sources, including\n the CPAN Phonix code calculator\n Text::Phonetic::Phonix.pm . Because the paper describing\n the codes is not freely available and I'm lazy, I did not use\n it as a reference.\n Also because Phonix involves over 150 substitution rules,\n I transformed the Perl ones, which was easier than\n generating them from scratch.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PhoneticCode.Phonix",
          "name": "Phonix",
          "package": "phonetic-code",
          "source": "src/Text-PhoneticCode-Phonix.html",
          "type": "module"
        },
        "index": {
          "description": "Phonix codes Gadd augment slightly improved Soundex codes with preprocessing step for cleaning up certain n-grams Since the preprocessing step contains more than rules processed by slow custom-written scanner this implementation is not too fast This code was based on number of sources including the CPAN Phonix code calculator Text Phonetic Phonix.pm Because the paper describing the codes is not freely available and lazy did not use it as reference Also because Phonix involves over substitution rules transformed the Perl ones which was easier than generating them from scratch",
          "hierarchy": "Text PhoneticCode Phonix",
          "module": "Text.PhoneticCode.Phonix",
          "name": "Phonix",
          "package": "phonetic-code",
          "partial": "Phonix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Phonix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a \u003ca\u003efull\u003c/a\u003e phonix code; i.e., do not drop any\n encodable characters from the result.  The leading\n character of the code will be folded to uppercase.\n Non-alphabetics are not encoded. If no alphabetics are\n present, the phonix code will be \u003ca\u003e0\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere appear to be many, many variants of phonix\n implemented on the web, and I'm too cheap and lazy to go\n find the original paper by Gadd (1990) that actually\n describes the original algorithm.  Thus, I am taking some\n big guesses on intent here as I implement.\n Corrections, especially those involving getting me a copy\n of the article, are welcome.\n\u003c/p\u003e\u003cp\u003eDropping the \u003ca\u003etrailing sound\u003c/a\u003e seems to be\n an integral part of Gadd's technique, but I'm not sure how\n it is supposed to be done.  I am currently compressing runs\n of vowels, and then dropping the trailing digit or vowel\n from the code.\n\u003c/p\u003e\u003cp\u003eAnother area of confusion is whether to compress strings of\n the same code, as in Soundex, or merely strings of the same\n consonant.  I have chosen the former.\n\u003c/p\u003e",
          "module": "Text.PhoneticCode.Phonix",
          "name": "phonix",
          "package": "phonetic-code",
          "signature": "String -\u003e String",
          "source": "src/Text-PhoneticCode-Phonix.html#phonix",
          "type": "function"
        },
        "index": {
          "description": "Compute full phonix code i.e do not drop any encodable characters from the result The leading character of the code will be folded to uppercase Non-alphabetics are not encoded If no alphabetics are present the phonix code will be There appear to be many many variants of phonix implemented on the web and too cheap and lazy to go find the original paper by Gadd that actually describes the original algorithm Thus am taking some big guesses on intent here as implement Corrections especially those involving getting me copy of the article are welcome Dropping the trailing sound seems to be an integral part of Gadd technique but not sure how it is supposed to be done am currently compressing runs of vowels and then dropping the trailing digit or vowel from the code Another area of confusion is whether to compress strings of the same code as in Soundex or merely strings of the same consonant have chosen the former",
          "hierarchy": "Text PhoneticCode Phonix",
          "module": "Text.PhoneticCode.Phonix",
          "name": "phonix",
          "normalized": "String-\u003eString",
          "package": "phonetic-code",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Phonix.html#v:phonix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray of phonix codes for single characters.  The\n array maps uppercase letters (only) to a character\n representing a code in the range ['1'..'8'] or \u003ccode\u003e?\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PhoneticCode.Phonix",
          "name": "phonixCodes",
          "package": "phonetic-code",
          "signature": "Array Char Char",
          "source": "src/Text-PhoneticCode-Phonix.html#phonixCodes",
          "type": "function"
        },
        "index": {
          "description": "Array of phonix codes for single characters The array maps uppercase letters only to character representing code in the range or",
          "hierarchy": "Text PhoneticCode Phonix",
          "module": "Text.PhoneticCode.Phonix",
          "name": "phonixCodes",
          "package": "phonetic-code",
          "partial": "Codes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Phonix.html#v:phonixCodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitution rules for Phonix canonicalization.  \u003ca\u003e^\u003c/a\u003e (\u003ca\u003e$\u003c/a\u003e)\n is used to anchor a pattern to the beginning (end) of the word.\n \u003ca\u003ec\u003c/a\u003e (\u003ca\u003ev\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e) at the beginning or end of a pattern match\n a consonant (vowel, arbitrary character).  A character matched\n in this fashion is automatically tacked onto the beginning (end)\n of the pattern.\n\u003c/p\u003e",
          "module": "Text.PhoneticCode.Phonix",
          "name": "phonixRules",
          "package": "phonetic-code",
          "signature": "[(String, String)]",
          "source": "src/Text-PhoneticCode-Phonix.html#phonixRules",
          "type": "function"
        },
        "index": {
          "description": "Substitution rules for Phonix canonicalization is used to anchor pattern to the beginning end of the word at the beginning or end of pattern match consonant vowel arbitrary character character matched in this fashion is automatically tacked onto the beginning end of the pattern",
          "hierarchy": "Text PhoneticCode Phonix",
          "module": "Text.PhoneticCode.Phonix",
          "name": "phonixRules",
          "normalized": "[(String,String)]",
          "package": "phonetic-code",
          "partial": "Rules",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Phonix.html#v:phonixRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSoundex is a phonetic coding algorithm.\n  It transforms word into a similarity hash based on an\n  approximation of its sounds.  Thus, similar-sounding\n  words tend to have the same hash.\n\u003c/p\u003e\u003cp\u003eThis implementation is based on a number of sources,\n  including a description of soundex at\n    http:\u003cem/\u003ewikipedia.org\u003cem\u003ewiki\u003c/em\u003eSoundex\n  and in Knuth's \u003ca\u003eThe Art of Computer Programming\u003c/a\u003e 2nd ed\n  v1 pp394-395.  A very helpful reference on the details\n  and differences among soundex algorithms is \u003ca\u003eSoundex:\n  The True Story\u003c/a\u003e,\n    http:\u003cem/\u003ewest-penwith.org.uk\u003cem\u003emisc\u003c/em\u003esoundex.htm\n  accessed 11 September 2008.\n\u003c/p\u003e\u003cp\u003eThis code was originally written for the \u003ca\u003ethimk\u003c/a\u003e spelling suggestion\n  application in Nickle (http:\u003cem/\u003enickle.org) in July 2002\n  based on a description from\n    http:\u003cem/\u003ewww.geocities.com\u003cem\u003eHeartland\u003c/em\u003eHills\u003cem\u003e3916\u003c/em\u003esoundex.html\n  which is now\n    http:\u003cem/\u003ewww.searchforancestors.com/soundex.html\n  The code was ported September 2008; the Soundex variants were also\n  added at this time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PhoneticCode.Soundex",
          "name": "Soundex",
          "package": "phonetic-code",
          "source": "src/Text-PhoneticCode-Soundex.html",
          "type": "module"
        },
        "index": {
          "description": "Soundex is phonetic coding algorithm It transforms word into similarity hash based on an approximation of its sounds Thus similar-sounding words tend to have the same hash This implementation is based on number of sources including description of soundex at http wikipedia.org wiki Soundex and in Knuth The Art of Computer Programming nd ed v1 pp394-395 very helpful reference on the details and differences among soundex algorithms is Soundex The True Story http west-penwith.org.uk misc soundex.htm accessed September This code was originally written for the thimk spelling suggestion application in Nickle http nickle.org in July based on description from http www.geocities.com Heartland Hills soundex.html which is now http www.searchforancestors.com soundex.html The code was ported September the Soundex variants were also added at this time",
          "hierarchy": "Text PhoneticCode Soundex",
          "module": "Text.PhoneticCode.Soundex",
          "name": "Soundex",
          "package": "phonetic-code",
          "partial": "Soundex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Soundex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a \u003ca\u003efull\u003c/a\u003e soundex code; i.e., do not drop any\n encodable characters from the result.  The leading\n character of the code will be folded to uppercase.\n Non-alphabetics are not encoded. If no alphabetics are\n present, the soundex code will be \u003ca\u003e0\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe two commonly encountered forms of soundex are Simplified\n and another known as American, Miracode, NARA or Knuth.  This\n code will calculate either---passing True gets NARA, and False\n gets Simplified.\n\u003c/p\u003e",
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundex",
          "package": "phonetic-code",
          "signature": "Bool -\u003e String -\u003e String",
          "source": "src/Text-PhoneticCode-Soundex.html#soundex",
          "type": "function"
        },
        "index": {
          "description": "Compute full soundex code i.e do not drop any encodable characters from the result The leading character of the code will be folded to uppercase Non-alphabetics are not encoded If no alphabetics are present the soundex code will be The two commonly encountered forms of soundex are Simplified and another known as American Miracode NARA or Knuth This code will calculate either---passing True gets NARA and False gets Simplified",
          "hierarchy": "Text PhoneticCode Soundex",
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundex",
          "normalized": "Bool-\u003eString-\u003eString",
          "package": "phonetic-code",
          "signature": "Bool-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Soundex.html#v:soundex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray of soundex codes for single characters.  The\n  array maps uppercase letters (only) to a character\n  representing a code in the range ['1'..'7'] or \u003ccode\u003e?\u003c/code\u003e.  Code\n  '7' is returned as a coding convenience for\n  American\u003cem\u003eMiracode\u003c/em\u003eNARA/Knuth soundex.\n\u003c/p\u003e",
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundexCodes",
          "package": "phonetic-code",
          "signature": "Array Char Char",
          "source": "src/Text-PhoneticCode-Soundex.html#soundexCodes",
          "type": "function"
        },
        "index": {
          "description": "Array of soundex codes for single characters The array maps uppercase letters only to character representing code in the range or Code is returned as coding convenience for American Miracode NARA Knuth soundex",
          "hierarchy": "Text PhoneticCode Soundex",
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundexCodes",
          "package": "phonetic-code",
          "partial": "Codes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Soundex.html#v:soundexCodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundexNARA",
          "package": "phonetic-code",
          "signature": "String -\u003e String",
          "source": "src/Text-PhoneticCode-Soundex.html#soundexNARA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PhoneticCode Soundex",
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundexNARA",
          "normalized": "String-\u003eString",
          "package": "phonetic-code",
          "partial": "NARA",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Soundex.html#v:soundexNARA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundexSimple",
          "package": "phonetic-code",
          "signature": "String -\u003e String",
          "source": "src/Text-PhoneticCode-Soundex.html#soundexSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PhoneticCode Soundex",
          "module": "Text.PhoneticCode.Soundex",
          "name": "soundexSimple",
          "normalized": "String-\u003eString",
          "package": "phonetic-code",
          "partial": "Simple",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/phonetic-code/docs/Text-PhoneticCode-Soundex.html#v:soundexSimple"
      }
    }
  ]
]