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
        "word": "para"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA paragraph formatting utility.  Provided with input text that is\n   arbitrarily split amongst several strings, this utility will\n   reformat the text into paragraphs which do not exceed the\n   specified width.  Paragraphs are delimited by blank lines in the\n   input.\n\u003c/p\u003e\u003cp\u003eThis function is roughly equivalent to the Unix \u003ccode\u003efmt\u003c/code\u003e utility.\n\u003c/p\u003e\u003cp\u003eFeatures:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An indentation/prefix text may be specified.  This prefix is\n     used on the first paragraph line and determines the standard\n     indentation for all subsequent lines.  If no indentation is\n     specified, the blank indentation of the first line of the first\n     paragraph becomes the default indentation for all paragraphs.\n\u003c/li\u003e\u003cli\u003e Subsequent paragraphs may increase their indentation over the\n     default as determined by the indentation level of their first\n     line.  Indentation values less than that of the primary\n     paragraph are ignored.\n\u003c/li\u003e\u003cli\u003e Paragraph text is reformatted to fit the paragraph layout.\n\u003c/li\u003e\u003cli\u003e Extra whitespace is removed.\n\u003c/li\u003e\u003cli\u003e \"French spacing\" is used: if the current word is capitalized\n     and the previous word ended in a punctuation character, then\n     two spaces are used between the words instead of a single space\n     which is the default elsewhere.\n\u003c/li\u003e\u003cli\u003e Avoids orphan words.  The last line of a paragraph will usually\n     be formatted to contain at least 2 words, pulling from the line\n     above it.\n\u003c/li\u003e\u003cli\u003e Recognizes lists of items, where each item starts with * or -\n     or alphanumeric characters followed by a ) or . character.\n     Uses list-oriented per-item indentation independent of\n     paragraph indentation.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.Format.Para",
          "name": "Para",
          "package": "para",
          "source": "src/Text-Format-Para.html",
          "type": "module"
        },
        "index": {
          "description": "paragraph formatting utility Provided with input text that is arbitrarily split amongst several strings this utility will reformat the text into paragraphs which do not exceed the specified width Paragraphs are delimited by blank lines in the input This function is roughly equivalent to the Unix fmt utility Features An indentation prefix text may be specified This prefix is used on the first paragraph line and determines the standard indentation for all subsequent lines If no indentation is specified the blank indentation of the first line of the first paragraph becomes the default indentation for all paragraphs Subsequent paragraphs may increase their indentation over the default as determined by the indentation level of their first line Indentation values less than that of the primary paragraph are ignored Paragraph text is reformatted to fit the paragraph layout Extra whitespace is removed French spacing is used if the current word is capitalized and the previous word ended in punctuation character then two spaces are used between the words instead of single space which is the default elsewhere Avoids orphan words The last line of paragraph will usually be formatted to contain at least words pulling from the line above it Recognizes lists of items where each item starts with or or alphanumeric characters followed by or character Uses list-oriented per-item indentation independent of paragraph indentation",
          "hierarchy": "Text Format Para",
          "module": "Text.Format.Para",
          "name": "Para",
          "package": "para",
          "partial": "Para",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/para/docs/Text-Format-Para.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eformatParas\u003c/a\u003e\u003c/code\u003e function accepts an arbitrarily-divided list of\n   Strings along with a width and optional indentation/prefix and\n   returns an array of strings representing paragraphs formatted to\n   fit the specified width and indentation.\n\u003c/p\u003e",
          "module": "Text.Format.Para",
          "name": "formatParas",
          "package": "para",
          "signature": "Int-\u003e Maybe String-\u003e [String]-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "The formatParas function accepts an arbitrarily-divided list of Strings along with width and optional indentation prefix and returns an array of strings representing paragraphs formatted to fit the specified width and indentation",
          "hierarchy": "Text Format Para",
          "module": "Text.Format.Para",
          "name": "formatParas",
          "normalized": "Int-\u003eMaybe String-\u003e[String]-\u003e[String]",
          "package": "para",
          "partial": "Paras",
          "signature": "Int-\u003eMaybe String-\u003e[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/para/docs/Text-Format-Para.html#v:formatParas"
      }
    }
  ]
]