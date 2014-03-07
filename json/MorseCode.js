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
        "word": "MorseCode"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Morse",
          "name": "Morse",
          "package": "MorseCode",
          "source": "src/Text-Morse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Morse",
          "module": "Text.Morse",
          "name": "Morse",
          "package": "MorseCode",
          "partial": "Morse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MorseCode/docs/Text-Morse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter can encode to Morse Code?\n\u003c/p\u003e",
          "module": "Text.Morse",
          "name": "canEncodeToMorse",
          "package": "MorseCode",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Morse.html#canEncodeToMorse",
          "type": "function"
        },
        "index": {
          "description": "Character can encode to Morse Code",
          "hierarchy": "Text Morse",
          "module": "Text.Morse",
          "name": "canEncodeToMorse",
          "normalized": "Char-\u003eBool",
          "package": "MorseCode",
          "partial": "Encode To Morse",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MorseCode/docs/Text-Morse.html#v:canEncodeToMorse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet string from Morse Code.\n Invalid Morse Code will skip.\n\u003c/p\u003e",
          "module": "Text.Morse",
          "name": "decodeMorse",
          "package": "MorseCode",
          "signature": "String -\u003e String",
          "source": "src/Text-Morse.html#decodeMorse",
          "type": "function"
        },
        "index": {
          "description": "Get string from Morse Code Invalid Morse Code will skip",
          "hierarchy": "Text Morse",
          "module": "Text.Morse",
          "name": "decodeMorse",
          "normalized": "String-\u003eString",
          "package": "MorseCode",
          "partial": "Morse",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MorseCode/docs/Text-Morse.html#v:decodeMorse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert String to Morse Code.\n And ignore invalid Morse character.\n\u003c/p\u003e",
          "module": "Text.Morse",
          "name": "encodeMorse",
          "package": "MorseCode",
          "signature": "String -\u003e String",
          "source": "src/Text-Morse.html#encodeMorse",
          "type": "function"
        },
        "index": {
          "description": "Convert String to Morse Code And ignore invalid Morse character",
          "hierarchy": "Text Morse",
          "module": "Text.Morse",
          "name": "encodeMorse",
          "normalized": "String-\u003eString",
          "package": "MorseCode",
          "partial": "Morse",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MorseCode/docs/Text-Morse.html#v:encodeMorse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs valid Morse character.?\n\u003c/p\u003e",
          "module": "Text.Morse",
          "name": "isMorseChar",
          "package": "MorseCode",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Morse.html#isMorseChar",
          "type": "function"
        },
        "index": {
          "description": "Is valid Morse character",
          "hierarchy": "Text Morse",
          "module": "Text.Morse",
          "name": "isMorseChar",
          "normalized": "Char-\u003eBool",
          "package": "MorseCode",
          "partial": "Morse Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MorseCode/docs/Text-Morse.html#v:isMorseChar"
      }
    }
  ]
]