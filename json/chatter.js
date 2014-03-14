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
        "word": "chatter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DefaultMap",
          "name": "DefaultMap",
          "package": "chatter",
          "source": "src/Data-DefaultMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "DefaultMap",
          "package": "chatter",
          "partial": "Default Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaulting Map; a Map that returns a default value when queried\n for a key that does not exist.\n\u003c/p\u003e",
          "module": "Data.DefaultMap",
          "name": "DefaultMap",
          "package": "chatter",
          "source": "src/Data-DefaultMap.html#DefaultMap",
          "type": "data"
        },
        "index": {
          "description": "Defaulting Map Map that returns default value when queried for key that does not exist",
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "DefaultMap",
          "package": "chatter",
          "partial": "Default Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#t:DefaultMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DefaultMap",
          "name": "DefMap",
          "package": "chatter",
          "signature": "DefMap",
          "source": "src/Data-DefaultMap.html#DefaultMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "DefMap",
          "package": "chatter",
          "partial": "Def Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:DefMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DefaultMap",
          "name": "defDefault",
          "package": "chatter",
          "signature": "v",
          "source": "src/Data-DefaultMap.html#DefaultMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "defDefault",
          "package": "chatter",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:defDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DefaultMap",
          "name": "defMap",
          "package": "chatter",
          "signature": "Map k v",
          "source": "src/Data-DefaultMap.html#DefaultMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "defMap",
          "package": "chatter",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:defMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty \u003ccode\u003e\u003ca\u003eDefaultMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.DefaultMap",
          "name": "empty",
          "package": "chatter",
          "signature": "v -\u003e DefaultMap k v",
          "source": "src/Data-DefaultMap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create an empty DefaultMap",
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "empty",
          "normalized": "a-\u003eDefaultMap b a",
          "package": "chatter",
          "signature": "v-\u003eDefaultMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over the values in the map.\n\u003c/p\u003e\u003cp\u003eNote that this *does* not fold\n over the default value -- this fold behaves in the same way as a\n standard \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.DefaultMap",
          "name": "foldl",
          "package": "chatter",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e DefaultMap k b -\u003e a",
          "source": "src/Data-DefaultMap.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Fold over the values in the map Note that this does not fold over the default value this fold behaves in the same way as standard foldl",
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eDefaultMap c b-\u003ea",
          "package": "chatter",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eDefaultMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eDefaultMap\u003c/a\u003e\u003c/code\u003e from a default value and a list.\n\u003c/p\u003e",
          "module": "Data.DefaultMap",
          "name": "fromList",
          "package": "chatter",
          "signature": "v -\u003e [(k, v)] -\u003e DefaultMap k v",
          "source": "src/Data-DefaultMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create DefaultMap from default value and list",
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "fromList",
          "normalized": "a-\u003e[(b,a)]-\u003eDefaultMap b a",
          "package": "chatter",
          "partial": "List",
          "signature": "v-\u003e[(k,v)]-\u003eDefaultMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the keys as a list.\n\u003c/p\u003e",
          "module": "Data.DefaultMap",
          "name": "keys",
          "package": "chatter",
          "signature": "DefaultMap k a -\u003e [k]",
          "source": "src/Data-DefaultMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Access the keys as list",
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "keys",
          "normalized": "DefaultMap a b-\u003e[a]",
          "package": "chatter",
          "signature": "DefaultMap k a-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the map for a value.  Returns the default if the key is not\n found.\n\u003c/p\u003e",
          "module": "Data.DefaultMap",
          "name": "lookup",
          "package": "chatter",
          "signature": "k -\u003e DefaultMap k v -\u003e v",
          "source": "src/Data-DefaultMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Query the map for value Returns the default if the key is not found",
          "hierarchy": "Data DefaultMap",
          "module": "Data.DefaultMap",
          "name": "lookup",
          "normalized": "a-\u003eDefaultMap a b-\u003eb",
          "package": "chatter",
          "signature": "k-\u003eDefaultMap k v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/Data-DefaultMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for reading mailman-style email archives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Corpora.Email",
          "name": "Email",
          "package": "chatter",
          "source": "src/NLP-Corpora-Email.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for reading mailman-style email archives",
          "hierarchy": "NLP Corpora Email",
          "module": "NLP.Corpora.Email",
          "name": "Email",
          "package": "chatter",
          "partial": "Email",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Email.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Corpora.Email",
          "name": "fullPlugArchive",
          "package": "chatter",
          "signature": "IO [Message]",
          "source": "src/NLP-Corpora-Email.html#fullPlugArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Corpora Email",
          "module": "NLP.Corpora.Email",
          "name": "fullPlugArchive",
          "normalized": "IO[Message]",
          "package": "chatter",
          "partial": "Plug Archive",
          "signature": "IO[Message]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Email.html#v:fullPlugArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Corpora.Email",
          "name": "plugArchiveText",
          "package": "chatter",
          "signature": "IO [Text]",
          "source": "src/NLP-Corpora-Email.html#plugArchiveText",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Corpora Email",
          "module": "NLP.Corpora.Email",
          "name": "plugArchiveText",
          "normalized": "IO[Text]",
          "package": "chatter",
          "partial": "Archive Text",
          "signature": "IO[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Email.html#v:plugArchiveText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Corpora.Email",
          "name": "plugArchiveTokens",
          "package": "chatter",
          "signature": "IO [[Text]]",
          "source": "src/NLP-Corpora-Email.html#plugArchiveTokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Corpora Email",
          "module": "NLP.Corpora.Email",
          "name": "plugArchiveTokens",
          "normalized": "IO[[Text]]",
          "package": "chatter",
          "partial": "Archive Tokens",
          "signature": "IO[[Text]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Email.html#v:plugArchiveTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the directory containing all the PLUG archives.\n\u003c/p\u003e",
          "module": "NLP.Corpora.Email",
          "name": "plugDataPath",
          "package": "chatter",
          "signature": "FilePath",
          "source": "src/NLP-Corpora-Email.html#plugDataPath",
          "type": "function"
        },
        "index": {
          "description": "Path to the directory containing all the PLUG archives",
          "hierarchy": "NLP Corpora Email",
          "module": "NLP.Corpora.Email",
          "name": "plugDataPath",
          "package": "chatter",
          "partial": "Data Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Email.html#v:plugDataPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Corpora.Email",
          "name": "readF",
          "package": "chatter",
          "signature": "FilePath -\u003e IO Text",
          "source": "src/NLP-Corpora-Email.html#readF",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Corpora Email",
          "module": "NLP.Corpora.Email",
          "name": "readF",
          "normalized": "FilePath-\u003eIO Text",
          "package": "chatter",
          "signature": "FilePath-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Email.html#v:readF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Corpora.Parsing",
          "name": "Parsing",
          "package": "chatter",
          "source": "src/NLP-Corpora-Parsing.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP Corpora Parsing",
          "module": "NLP.Corpora.Parsing",
          "name": "Parsing",
          "package": "chatter",
          "partial": "Parsing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Parsing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a POS-tagged corpus out of a Text string of the form:\n \u003ca\u003etoken/tag token/tag...\u003c/a\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereadPOS \"Dear/jj Sirs/nns :/: Let/vb\"\n\u003c/code\u003e\u003c/strong\u003e[(\"Dear\",JJ),(\"Sirs\",NNS),(\":\",Other \":\"),(\"Let\",VB)]\n\u003c/pre\u003e",
          "module": "NLP.Corpora.Parsing",
          "name": "readPOS",
          "package": "chatter",
          "signature": "Text -\u003e TaggedSentence",
          "source": "src/NLP-Corpora-Parsing.html#readPOS",
          "type": "function"
        },
        "index": {
          "description": "Read POS-tagged corpus out of Text string of the form token tag token tag readPOS Dear jj Sirs nns Let vb Dear JJ Sirs NNS Other Let VB",
          "hierarchy": "NLP Corpora Parsing",
          "module": "NLP.Corpora.Parsing",
          "name": "readPOS",
          "normalized": "Text-\u003eTaggedSentence",
          "package": "chatter",
          "partial": "POS",
          "signature": "Text-\u003eTaggedSentence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Parsing.html#v:readPOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all but the last element of a string, unless the string\n is empty, in which case it returns that string.\n\u003c/p\u003e",
          "module": "NLP.Corpora.Parsing",
          "name": "safeInit",
          "package": "chatter",
          "signature": "Text -\u003e Text",
          "source": "src/NLP-Corpora-Parsing.html#safeInit",
          "type": "function"
        },
        "index": {
          "description": "Returns all but the last element of string unless the string is empty in which case it returns that string",
          "hierarchy": "NLP Corpora Parsing",
          "module": "NLP.Corpora.Parsing",
          "name": "safeInit",
          "normalized": "Text-\u003eText",
          "package": "chatter",
          "partial": "Init",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Corpora-Parsing.html#v:safeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAverage Perceptron implementation of Part of speech tagging,\n adapted for Haskell from this python implementation, which is described on the blog post:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://honnibal.wordpress.com/2013/09/11/a-good-part-of-speechpos-tagger-in-about-200-lines-of-python/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe Perceptron code can be found on github:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttps://github.com/sloria/TextBlob/blob/dev/text/_perceptron.py\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "AvgPerceptron",
          "package": "chatter",
          "source": "src/NLP-POS-AvgPerceptron.html",
          "type": "module"
        },
        "index": {
          "description": "Average Perceptron implementation of Part of speech tagging adapted for Haskell from this python implementation which is described on the blog post http honnibal.wordpress.com a-good-part-of-speechpos-tagger-in-about-200-lines-of-python The Perceptron code can be found on github https github.com sloria TextBlob blob dev text perceptron.py",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "AvgPerceptron",
          "package": "chatter",
          "partial": "Avg Perceptron",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe classes that the perceptron assigns are represnted with a\n newtype-wrapped String.\n\u003c/p\u003e\u003cp\u003eEventually, I think this should become a typeclass, so the classes\n can be defined by the users of the Perceptron (such as custom POS\n tag ADTs, or more complex classes).\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Class",
          "package": "chatter",
          "source": "src/NLP-POS-AvgPerceptron.html#Class",
          "type": "newtype"
        },
        "index": {
          "description": "The classes that the perceptron assigns are represnted with newtype-wrapped String Eventually think this should become typeclass so the classes can be defined by the users of the Perceptron such as custom POS tag ADTs or more complex classes",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Class",
          "package": "chatter",
          "partial": "Class",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.AvgPerceptron",
          "name": "Feature",
          "package": "chatter",
          "source": "src/NLP-POS-AvgPerceptron.html#Feature",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Feature",
          "package": "chatter",
          "partial": "Feature",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#t:Feature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe perceptron model.\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Perceptron",
          "package": "chatter",
          "source": "src/NLP-POS-AvgPerceptron.html#Perceptron",
          "type": "data"
        },
        "index": {
          "description": "The perceptron model",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Perceptron",
          "package": "chatter",
          "partial": "Perceptron",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#t:Perceptron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypedef for doubles to make the code easier to read, and to make\n this simple to change if necessary.\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Weight",
          "package": "chatter",
          "source": "src/NLP-POS-AvgPerceptron.html#Weight",
          "type": "type"
        },
        "index": {
          "description": "Typedef for doubles to make the code easier to read and to make this simple to change if necessary",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Weight",
          "package": "chatter",
          "partial": "Weight",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#t:Weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.AvgPerceptron",
          "name": "Class",
          "package": "chatter",
          "signature": "Class String",
          "source": "src/NLP-POS-AvgPerceptron.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Class",
          "package": "chatter",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.AvgPerceptron",
          "name": "Feat",
          "package": "chatter",
          "signature": "Feat Text",
          "source": "src/NLP-POS-AvgPerceptron.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Feat",
          "package": "chatter",
          "partial": "Feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:Feat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.AvgPerceptron",
          "name": "Perceptron",
          "package": "chatter",
          "signature": "Perceptron",
          "source": "src/NLP-POS-AvgPerceptron.html#Perceptron",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "Perceptron",
          "package": "chatter",
          "partial": "Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:Perceptron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage the weights\n\u003c/p\u003e\u003cp\u003ePorted from Python:\n\u003c/p\u003e\u003cpre\u003e def average_weights(self):\n     for feat, weights in self.weights.items():\n         new_feat_weights = {}\n         for clas, weight in weights.items():\n             param = (feat, clas)\n             total = self._totals[param]\n             total += (self.i - self._tstamps[param]) * weight\n             averaged = round(total / float(self.i), 3)\n             if averaged:\n                 new_feat_weights[clas] = averaged\n         self.weights[feat] = new_feat_weights\n     return None\n\u003c/pre\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "averageWeights",
          "package": "chatter",
          "signature": "Perceptron -\u003e Perceptron",
          "source": "src/NLP-POS-AvgPerceptron.html#averageWeights",
          "type": "function"
        },
        "index": {
          "description": "Average the weights Ported from Python def average weights self for feat weights in self.weights.items new feat weights for clas weight in weights.items param feat clas total self totals param total self.i self tstamps param weight averaged round total float self.i if averaged new feat weights clas averaged self.weights feat new feat weights return None",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "averageWeights",
          "normalized": "Perceptron-\u003ePerceptron",
          "package": "chatter",
          "partial": "Weights",
          "signature": "Perceptron-\u003ePerceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:averageWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty perceptron, used to start training.\n\u003c/p\u003e",
          "module": "[\"NLP.POS.AvgPerceptron\",\"NLP.POS.AvgPerceptronTagger\"]",
          "name": "emptyPerceptron",
          "package": "chatter",
          "signature": "Perceptron",
          "source": "src/NLP-POS-AvgPerceptron.html#emptyPerceptron",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:emptyPerceptron\",\"http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:emptyPerceptron\"]"
        },
        "index": {
          "description": "An empty perceptron used to start training",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "emptyPerceptron",
          "package": "chatter",
          "partial": "Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:emptyPerceptron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of instances seen\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "instances",
          "package": "chatter",
          "signature": "Int",
          "source": "src/NLP-POS-AvgPerceptron.html#Perceptron",
          "type": "function"
        },
        "index": {
          "description": "Number of instances seen",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "instances",
          "package": "chatter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:instances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredict a class given a feature vector.\n\u003c/p\u003e\u003cp\u003ePorted from python:\n\u003c/p\u003e\u003cpre\u003e def predict(self, features):\n     '''Dot-product the features and current weights and return the best label.'''\n     scores = defaultdict(float)\n     for feat, value in features.items():\n         if feat not in self.weights or value == 0:\n             continue\n         weights = self.weights[feat]\n         for label, weight in weights.items():\n             scores[label] += value * weight\n     # Do a secondary alphabetic sort, for stability\n     return max(self.classes, key=lambda label: (scores[label], label))\n\u003c/pre\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "predict",
          "package": "chatter",
          "signature": "Perceptron -\u003e Map Feature Int -\u003e Maybe Class",
          "source": "src/NLP-POS-AvgPerceptron.html#predict",
          "type": "function"
        },
        "index": {
          "description": "Predict class given feature vector Ported from python def predict self features Dot-product the features and current weights and return the best label scores defaultdict float for feat value in features.items if feat not in self.weights or value continue weights self.weights feat for label weight in weights.items scores label value weight Do secondary alphabetic sort for stability return max self.classes key lambda label scores label label",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "predict",
          "normalized": "Perceptron-\u003eMap Feature Int-\u003eMaybe Class",
          "package": "chatter",
          "signature": "Perceptron-\u003eMap Feature Int-\u003eMaybe Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:predict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe accumulated values, for the averaging. These will be\n keyed by feature/clas tuples\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "totals",
          "package": "chatter",
          "signature": "Map (Feature, Class) Weight",
          "source": "src/NLP-POS-AvgPerceptron.html#Perceptron",
          "type": "function"
        },
        "index": {
          "description": "The accumulated values for the averaging These will be keyed by feature clas tuples",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "totals",
          "normalized": "Map(Feature,Class)Weight",
          "package": "chatter",
          "signature": "Map(Feature,Class)Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:totals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.AvgPerceptron",
          "name": "train",
          "package": "chatter",
          "signature": "Int -\u003e Perceptron -\u003e [(Map Feature Int, Class)] -\u003e IO Perceptron",
          "source": "src/NLP-POS-AvgPerceptron.html#train",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "train",
          "normalized": "Int-\u003ePerceptron-\u003e[(Map Feature Int,Class)]-\u003eIO Perceptron",
          "package": "chatter",
          "signature": "Int-\u003ePerceptron-\u003e[(Map Feature Int,Class)]-\u003eIO Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last time the feature was changed, for the averaging. Also\n keyed by feature/clas tuples\n (tstamps is short for timestamps)\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "tstamps",
          "package": "chatter",
          "signature": "Map (Feature, Class) Int",
          "source": "src/NLP-POS-AvgPerceptron.html#Perceptron",
          "type": "function"
        },
        "index": {
          "description": "The last time the feature was changed for the averaging Also keyed by feature clas tuples tstamps is short for timestamps",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "tstamps",
          "normalized": "Map(Feature,Class)Int",
          "package": "chatter",
          "signature": "Map(Feature,Class)Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:tstamps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the perceptron with a new example.\n\u003c/p\u003e\u003cpre\u003e update(self, truth, guess, features)\n    ...\n         self.i += 1\n         if truth == guess:\n             return None\n         for f in features:\n             weights = self.weights.setdefault(f, {}) -- setdefault is Map.findWithDefault, and destructive.\n             upd_feat(truth, f, weights.get(truth, 0.0), 1.0)\n             upd_feat(guess, f, weights.get(guess, 0.0), -1.0)\n         return None\n\u003c/pre\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "update",
          "package": "chatter",
          "signature": "Perceptron -\u003e Class -\u003e Class -\u003e [Feature] -\u003e Perceptron",
          "source": "src/NLP-POS-AvgPerceptron.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the perceptron with new example update self truth guess features self.i if truth guess return None for in features weights self.weights.setdefault setdefault is Map.findWithDefault and destructive upd feat truth weights.get truth upd feat guess weights.get guess return None",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "update",
          "normalized": "Perceptron-\u003eClass-\u003eClass-\u003e[Feature]-\u003ePerceptron",
          "package": "chatter",
          "signature": "Perceptron-\u003eClass-\u003eClass-\u003e[Feature]-\u003ePerceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach feature gets its own weight vector, so weights is a\n dict-of-dicts\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptron",
          "name": "weights",
          "package": "chatter",
          "signature": "Map Feature (Map Class Weight)",
          "source": "src/NLP-POS-AvgPerceptron.html#Perceptron",
          "type": "function"
        },
        "index": {
          "description": "Each feature gets its own weight vector so weights is dict-of-dicts",
          "hierarchy": "NLP POS AvgPerceptron",
          "module": "NLP.POS.AvgPerceptron",
          "name": "weights",
          "package": "chatter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptron.html#v:weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAvegeraged Perceptron Tagger\n\u003c/p\u003e\u003cp\u003eAdapted from the python implementation found here:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttps://github.com/sloria/textblob-aptagger/blob/master/textblob_aptagger/taggers.py\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "AvgPerceptronTagger",
          "package": "chatter",
          "source": "src/NLP-POS-AvgPerceptronTagger.html",
          "type": "module"
        },
        "index": {
          "description": "Avegeraged Perceptron Tagger Adapted from the python implementation found here https github.com sloria textblob-aptagger blob master textblob aptagger taggers.py",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "AvgPerceptronTagger",
          "package": "chatter",
          "partial": "Avg Perceptron Tagger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Averaged Perceptron Tagger using the specified back-off\n tagger as a fall-back, if one is specified.\n\u003c/p\u003e\u003cp\u003eThis uses a tokenizer adapted from the \u003ccode\u003etokenize\u003c/code\u003e package for a\n tokenizer, and Erik Kow's fullstop sentence segmenter\n (\u003ca\u003ehttp://hackage.haskell.org/package/fullstop\u003c/a\u003e) as a sentence\n splitter.\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "mkTagger",
          "package": "chatter",
          "signature": "Perceptron -\u003e Maybe POSTagger -\u003e POSTagger",
          "source": "src/NLP-POS-AvgPerceptronTagger.html#mkTagger",
          "type": "function"
        },
        "index": {
          "description": "Create an Averaged Perceptron Tagger using the specified back-off tagger as fall-back if one is specified This uses tokenizer adapted from the tokenize package for tokenizer and Erik Kow fullstop sentence segmenter http hackage.haskell.org package fullstop as sentence splitter",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "mkTagger",
          "normalized": "Perceptron-\u003eMaybe POSTagger-\u003ePOSTagger",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "Perceptron-\u003eMaybe POSTagger-\u003ePOSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:mkTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "readTagger",
          "package": "chatter",
          "signature": "ByteString -\u003e Maybe POSTagger -\u003e Either String POSTagger",
          "source": "src/NLP-POS-AvgPerceptronTagger.html#readTagger",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "readTagger",
          "normalized": "ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:readTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag a document (represented as a list of \u003ccode\u003e\u003ca\u003eSentence\u003c/a\u003e\u003c/code\u003es) with a\n trained \u003ccode\u003e\u003ca\u003ePerceptron\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ePorted from Python:\n\u003c/p\u003e\u003cpre\u003e def tag(self, corpus, tokenize=True):\n     '''Tags a string `corpus`.'''\n     # Assume untokenized corpus has \\n between sentences and ' ' between words\n     s_split = nltk.sent_tokenize if tokenize else lambda t: t.split('\\n')\n     w_split = nltk.word_tokenize if tokenize else lambda s: s.split()\n     def split_sents(corpus):\n         for s in s_split(corpus):\n             yield w_split(s)\n      prev, prev2 = self.START\n     tokens = []\n     for words in split_sents(corpus):\n         context = self.START + [self._normalize(w) for w in words] + self.END\n         for i, word in enumerate(words):\n             tag = self.tagdict.get(word)\n             if not tag:\n                 features = self._get_features(i, word, context, prev, prev2)\n                 tag = self.model.predict(features)\n             tokens.append((word, tag))\n             prev2 = prev\n             prev = tag\n     return tokens\n\u003c/pre\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "tag",
          "package": "chatter",
          "signature": "Perceptron -\u003e [Sentence] -\u003e [TaggedSentence]",
          "source": "src/NLP-POS-AvgPerceptronTagger.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Tag document represented as list of Sentence with trained Perceptron Ported from Python def tag self corpus tokenize True Tags string corpus Assume untokenized corpus has between sentences and between words split nltk.sent tokenize if tokenize else lambda t.split split nltk.word tokenize if tokenize else lambda s.split def split sents corpus for in split corpus yield split prev prev2 self.START tokens for words in split sents corpus context self.START self normalize for in words self.END for word in enumerate words tag self.tagdict.get word if not tag features self get features word context prev prev2 tag self.model.predict features tokens.append word tag prev2 prev prev tag return tokens",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "tag",
          "normalized": "Perceptron-\u003e[Sentence]-\u003e[TaggedSentence]",
          "package": "chatter",
          "signature": "Perceptron-\u003e[Sentence]-\u003e[TaggedSentence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag a single sentence.\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "tagSentence",
          "package": "chatter",
          "signature": "Perceptron -\u003e Sentence -\u003e TaggedSentence",
          "source": "src/NLP-POS-AvgPerceptronTagger.html#tagSentence",
          "type": "function"
        },
        "index": {
          "description": "Tag single sentence",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "tagSentence",
          "normalized": "Perceptron-\u003eSentence-\u003eTaggedSentence",
          "package": "chatter",
          "partial": "Sentence",
          "signature": "Perceptron-\u003eSentence-\u003eTaggedSentence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:tagSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "taggerID",
          "package": "chatter",
          "signature": "ByteString",
          "source": "src/NLP-POS-AvgPerceptronTagger.html#taggerID",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "taggerID",
          "package": "chatter",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:taggerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd training examples to a perceptron.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etagger \u003c- train emptyPerceptron \"Dear/jj Sirs/nns :/: Let/vb\\nUs/nn begin/vb\\n\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etag tagger $ map T.words $ T.lines \"Dear sir\"\n\u003c/code\u003e\u003c/strong\u003e\"Dear/jj Sirs/nns :/: Let/vb\"\n\u003c/pre\u003e\u003cp\u003eIf you're using multiple input files, this can be useful to improve\n performance (by folding over the files).  For example, see \u003ccode\u003e\u003ca\u003etrainOnFiles\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "train",
          "package": "chatter",
          "signature": "Perceptron-\u003e Text-\u003e IO Perceptron",
          "type": "function"
        },
        "index": {
          "description": "Add training examples to perceptron tagger train emptyPerceptron Dear jj Sirs nns Let vb nUs nn begin vb tag tagger map T.words T.lines Dear sir Dear jj Sirs nns Let vb If you re using multiple input files this can be useful to improve performance by folding over the files For example see trainOnFiles",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "train",
          "normalized": "Perceptron-\u003eText-\u003eIO Perceptron",
          "package": "chatter",
          "signature": "Perceptron-\u003eText-\u003eIO Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain a model from sentences.\n\u003c/p\u003e\u003cp\u003ePorted from Python:\n\u003c/p\u003e\u003cpre\u003e def train(self, sentences, save_loc=None, nr_iter=5):\n     self._make_tagdict(sentences)\n     self.model.classes = self.classes\n     prev, prev2 = START\n     for iter_ in range(nr_iter):\n         c = 0\n         n = 0\n         for words, tags in sentences:\n             context = START + [self._normalize(w) for w in words] + END\n             for i, word in enumerate(words):\n                 guess = self.tagdict.get(word)\n                 if not guess:\n                     feats = self._get_features(i, word, context, prev, prev2)\n                     guess = self.model.predict(feats)\n                     self.model.update(tags[i], guess, feats)\n                 prev2 = prev; prev = guess\n                 c += guess == tags[i]\n                 n += 1\n         random.shuffle(sentences)\n         logging.info(\"Iter {0}: {1}/{2}={3}\".format(iter_, c, n, _pc(c, n)))\n     self.model.average_weights()\n     # Pickle as a binary file\n     if save_loc is not None:\n         pickle.dump((self.model.weights, self.tagdict, self.classes),\n                      open(save_loc, 'wb'), -1)\n     return None\n\u003c/pre\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "trainInt",
          "package": "chatter",
          "signature": "Int-\u003e Perceptron-\u003e [TaggedSentence]-\u003e IO Perceptron",
          "type": "function"
        },
        "index": {
          "description": "Train model from sentences Ported from Python def train self sentences save loc None nr iter self make tagdict sentences self.model.classes self.classes prev prev2 START for iter in range nr iter for words tags in sentences context START self normalize for in words END for word in enumerate words guess self.tagdict.get word if not guess feats self get features word context prev prev2 guess self.model.predict feats self.model.update tags guess feats prev2 prev prev guess guess tags random.shuffle sentences logging.info Iter format iter pc self.model.average weights Pickle as binary file if save loc is not None pickle.dump self.model.weights self.tagdict self.classes open save loc wb return None",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "trainInt",
          "normalized": "Int-\u003ePerceptron-\u003e[TaggedSentence]-\u003eIO Perceptron",
          "package": "chatter",
          "partial": "Int",
          "signature": "Int-\u003ePerceptron-\u003e[TaggedSentence]-\u003eIO Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:trainInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain a new \u003ccode\u003e\u003ca\u003ePerceptron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe training corpus should be a collection of sentences, one\n sentence on each line, and with each token tagged with a part of\n speech.\n\u003c/p\u003e\u003cp\u003eFor example, the input:\n\u003c/p\u003e\u003cpre\u003e \"The/DT dog/NN jumped/VB ./.\\nThe/DT cat/NN slept/VB ./.\"\n\u003c/pre\u003e\u003cp\u003edefines two training sentences.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etagger \u003c- trainNew \"Dear/jj Sirs/nns :/: Let/vb\\nUs/nn begin/vb\\n\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etag tagger $ map T.words $ T.lines \"Dear sir\"\n\u003c/code\u003e\u003c/strong\u003e\"Dear/jj Sirs/nns :/: Let/vb\"\n\u003c/pre\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "trainNew",
          "package": "chatter",
          "signature": "Text -\u003e IO Perceptron",
          "source": "src/NLP-POS-AvgPerceptronTagger.html#trainNew",
          "type": "function"
        },
        "index": {
          "description": "Train new Perceptron The training corpus should be collection of sentences one sentence on each line and with each token tagged with part of speech For example the input The DT dog NN jumped VB nThe DT cat NN slept VB defines two training sentences tagger trainNew Dear jj Sirs nns Let vb nUs nn begin vb tag tagger map T.words T.lines Dear sir Dear jj Sirs nns Let vb",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "trainNew",
          "normalized": "Text-\u003eIO Perceptron",
          "package": "chatter",
          "partial": "New",
          "signature": "Text-\u003eIO Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:trainNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain a new \u003ccode\u003e\u003ca\u003ePerceptron\u003c/a\u003e\u003c/code\u003e on a corpus of files.\n\u003c/p\u003e",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "trainOnFiles",
          "package": "chatter",
          "signature": "[FilePath] -\u003e IO Perceptron",
          "source": "src/NLP-POS-AvgPerceptronTagger.html#trainOnFiles",
          "type": "function"
        },
        "index": {
          "description": "Train new Perceptron on corpus of files",
          "hierarchy": "NLP POS AvgPerceptronTagger",
          "module": "NLP.POS.AvgPerceptronTagger",
          "name": "trainOnFiles",
          "normalized": "[FilePath]-\u003eIO Perceptron",
          "package": "chatter",
          "partial": "On Files",
          "signature": "[FilePath]-\u003eIO Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-AvgPerceptronTagger.html#v:trainOnFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.LiteralTagger",
          "name": "LiteralTagger",
          "package": "chatter",
          "source": "src/NLP-POS-LiteralTagger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP POS LiteralTagger",
          "module": "NLP.POS.LiteralTagger",
          "name": "LiteralTagger",
          "package": "chatter",
          "partial": "Literal Tagger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-LiteralTagger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Literal Tagger using the specified back-off tagger as a\n fall-back, if one is specified.\n\u003c/p\u003e\u003cp\u003eThis uses a tokenizer adapted from the \u003ccode\u003etokenize\u003c/code\u003e package for a\n tokenizer, and Erik Kow's fullstop sentence segmenter as a sentence\n splitter.\n\u003c/p\u003e",
          "module": "NLP.POS.LiteralTagger",
          "name": "mkTagger",
          "package": "chatter",
          "signature": "Map Text Tag -\u003e Maybe POSTagger -\u003e POSTagger",
          "source": "src/NLP-POS-LiteralTagger.html#mkTagger",
          "type": "function"
        },
        "index": {
          "description": "Create Literal Tagger using the specified back-off tagger as fall-back if one is specified This uses tokenizer adapted from the tokenize package for tokenizer and Erik Kow fullstop sentence segmenter as sentence splitter",
          "hierarchy": "NLP POS LiteralTagger",
          "module": "NLP.POS.LiteralTagger",
          "name": "mkTagger",
          "normalized": "Map Text Tag-\u003eMaybe POSTagger-\u003ePOSTagger",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "Map Text Tag-\u003eMaybe POSTagger-\u003ePOSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-LiteralTagger.html#v:mkTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.LiteralTagger",
          "name": "readTagger",
          "package": "chatter",
          "signature": "ByteString -\u003e Maybe POSTagger -\u003e Either String POSTagger",
          "source": "src/NLP-POS-LiteralTagger.html#readTagger",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS LiteralTagger",
          "module": "NLP.POS.LiteralTagger",
          "name": "readTagger",
          "normalized": "ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-LiteralTagger.html#v:readTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.LiteralTagger",
          "name": "tag",
          "package": "chatter",
          "signature": "Map Text Tag -\u003e [Sentence] -\u003e [TaggedSentence]",
          "source": "src/NLP-POS-LiteralTagger.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS LiteralTagger",
          "module": "NLP.POS.LiteralTagger",
          "name": "tag",
          "normalized": "Map Text Tag-\u003e[Sentence]-\u003e[TaggedSentence]",
          "package": "chatter",
          "signature": "Map Text Tag-\u003e[Sentence]-\u003e[TaggedSentence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-LiteralTagger.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.LiteralTagger",
          "name": "tagSentence",
          "package": "chatter",
          "signature": "Map Text Tag -\u003e Sentence -\u003e TaggedSentence",
          "source": "src/NLP-POS-LiteralTagger.html#tagSentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS LiteralTagger",
          "module": "NLP.POS.LiteralTagger",
          "name": "tagSentence",
          "normalized": "Map Text Tag-\u003eSentence-\u003eTaggedSentence",
          "package": "chatter",
          "partial": "Sentence",
          "signature": "Map Text Tag-\u003eSentence-\u003eTaggedSentence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-LiteralTagger.html#v:tagSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.LiteralTagger",
          "name": "taggerID",
          "package": "chatter",
          "signature": "ByteString",
          "source": "src/NLP-POS-LiteralTagger.html#taggerID",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS LiteralTagger",
          "module": "NLP.POS.LiteralTagger",
          "name": "taggerID",
          "package": "chatter",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-LiteralTagger.html#v:taggerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis POS tagger deterministically tags tokens.  However, if it\n ever sees multiple tags for the same token, it will forget the tag\n it has learned.  This is useful for creating taggers that have very\n high precision, but very low recall.\n\u003c/p\u003e\u003cp\u003eUnambiguous taggers are also useful when defined with a\n non-deterministic backoff tagger, such as an\n \u003ca\u003eNLP.POS.AveragedPerceptronTagger\u003c/a\u003e, since the high-confidence tags\n will be applied first, followed by the more non-deterministic\n results of the backoff tagger.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "UnambiguousTagger",
          "package": "chatter",
          "source": "src/NLP-POS-UnambiguousTagger.html",
          "type": "module"
        },
        "index": {
          "description": "This POS tagger deterministically tags tokens However if it ever sees multiple tags for the same token it will forget the tag it has learned This is useful for creating taggers that have very high precision but very low recall Unambiguous taggers are also useful when defined with non-deterministic backoff tagger such as an NLP.POS.AveragedPerceptronTagger since the high-confidence tags will be applied first followed by the more non-deterministic results of the backoff tagger",
          "hierarchy": "NLP POS UnambiguousTagger",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "UnambiguousTagger",
          "package": "chatter",
          "partial": "Unambiguous Tagger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-UnambiguousTagger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unambiguous tagger, using the supplied \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a\n source of tags.\n\u003c/p\u003e",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "mkTagger",
          "package": "chatter",
          "signature": "Map Text Tag -\u003e Maybe POSTagger -\u003e POSTagger",
          "source": "src/NLP-POS-UnambiguousTagger.html#mkTagger",
          "type": "function"
        },
        "index": {
          "description": "Create an unambiguous tagger using the supplied Map as source of tags",
          "hierarchy": "NLP POS UnambiguousTagger",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "mkTagger",
          "normalized": "Map Text Tag-\u003eMaybe POSTagger-\u003ePOSTagger",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "Map Text Tag-\u003eMaybe POSTagger-\u003ePOSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-UnambiguousTagger.html#v:mkTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.UnambiguousTagger",
          "name": "readTagger",
          "package": "chatter",
          "signature": "ByteString -\u003e Maybe POSTagger -\u003e Either String POSTagger",
          "source": "src/NLP-POS-UnambiguousTagger.html#readTagger",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS UnambiguousTagger",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "readTagger",
          "normalized": "ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-UnambiguousTagger.html#v:readTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS.UnambiguousTagger",
          "name": "taggerID",
          "package": "chatter",
          "signature": "ByteString",
          "source": "src/NLP-POS-UnambiguousTagger.html#taggerID",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS UnambiguousTagger",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "taggerID",
          "package": "chatter",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-UnambiguousTagger.html#v:taggerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrainer method for unambiguous taggers.\n\u003c/p\u003e",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "train",
          "package": "chatter",
          "signature": "Map Text Tag -\u003e [TaggedSentence] -\u003e Map Text Tag",
          "source": "src/NLP-POS-UnambiguousTagger.html#train",
          "type": "function"
        },
        "index": {
          "description": "Trainer method for unambiguous taggers",
          "hierarchy": "NLP POS UnambiguousTagger",
          "module": "NLP.POS.UnambiguousTagger",
          "name": "train",
          "normalized": "Map Text Tag-\u003e[TaggedSentence]-\u003eMap Text Tag",
          "package": "chatter",
          "signature": "Map Text Tag-\u003e[TaggedSentence]-\u003eMap Text Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS-UnambiguousTagger.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module aims to make tagging text with parts of speech\n trivially easy.\n\u003c/p\u003e\u003cp\u003eIf you're new to \u003ccode\u003echatter\u003c/code\u003e and POS-tagging, then I\n suggest you simply try:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etagger \u003c- defaultTagger\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etagStr tagger \"This is a sample sentence.\"\n\u003c/code\u003e\u003c/strong\u003e\"This/dt is/bez a/at sample/nn sentence/nn ./.\"\n\u003c/pre\u003e\u003cp\u003eNote that we used \u003ccode\u003e\u003ca\u003etagStr\u003c/a\u003e\u003c/code\u003e, instead of \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003etagText\u003c/a\u003e\u003c/code\u003e.  Many\n people don't (yet!) use \u003ca\u003eData.Text\u003c/a\u003e by default, so there is a\n wrapper around \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e that packs and unpacks the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  This is\n innefficient, but it's just to get you started, and \u003ccode\u003e\u003ca\u003etagStr\u003c/a\u003e\u003c/code\u003e can be\n very handy when you're debugging an tagger in ghci (or cabal repl).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e exposes more details of the tokenization and tagging, since\n it returns a list of \u003ccode\u003e\u003ca\u003eTaggedSentence\u003c/a\u003e\u003c/code\u003es, but it doesn't print\n results as nicely.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.POS",
          "name": "POS",
          "package": "chatter",
          "source": "src/NLP-POS.html",
          "type": "module"
        },
        "index": {
          "description": "This module aims to make tagging text with parts of speech trivially easy If you re new to chatter and POS-tagging then suggest you simply try tagger defaultTagger tagStr tagger This is sample sentence This dt is bez at sample nn sentence nn Note that we used tagStr instead of tag or tagText Many people don yet use Data.Text by default so there is wrapper around tag that packs and unpacks the String This is innefficient but it just to get you started and tagStr can be very handy when you re debugging an tagger in ghci or cabal repl tag exposes more details of the tokenization and tagging since it returns list of TaggedSentence but it doesn print results as nicely",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "POS",
          "package": "chatter",
          "partial": "POS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS",
          "name": "defaultTagger",
          "package": "chatter",
          "signature": "IO POSTagger",
          "source": "src/NLP-POS.html#defaultTagger",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "defaultTagger",
          "package": "chatter",
          "partial": "Tagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:defaultTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS",
          "name": "deserialize",
          "package": "chatter",
          "signature": "Map ByteString (ByteString -\u003e Maybe POSTagger -\u003e Either String POSTagger) -\u003e ByteString -\u003e Either String POSTagger",
          "source": "src/NLP-POS.html#deserialize",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "deserialize",
          "normalized": "Map ByteString(ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger)-\u003eByteString-\u003eEither String POSTagger",
          "package": "chatter",
          "signature": "Map ByteString(ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger)-\u003eByteString-\u003eEither String POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a \u003ccode\u003ePOSTager\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMeasures accuracy over all tags in the test corpus.\n\u003c/p\u003e\u003cp\u003eAccuracy is calculated as:\n\u003c/p\u003e\u003cpre\u003e |tokens tagged correctly| / |all tokens|\n\u003c/pre\u003e",
          "module": "NLP.POS",
          "name": "eval",
          "package": "chatter",
          "signature": "POSTagger -\u003e [TaggedSentence] -\u003e Double",
          "source": "src/NLP-POS.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate POSTager Measures accuracy over all tags in the test corpus Accuracy is calculated as tokens tagged correctly all tokens",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "eval",
          "normalized": "POSTagger-\u003e[TaggedSentence]-\u003eDouble",
          "package": "chatter",
          "signature": "POSTagger-\u003e[TaggedSentence]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a tagger, using the interal \u003ccode\u003e\u003ca\u003etaggerTable\u003c/a\u003e\u003c/code\u003e.  If you need to\n specify your own mappings for new composite taggers, you should use\n \u003ccode\u003e\u003ca\u003edeserialize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function checks the filename to determine if the content\n should be decompressed.  If the file ends with \u003ca\u003e.gz\u003c/a\u003e, then we\n assume it is a gziped model.\n\u003c/p\u003e",
          "module": "NLP.POS",
          "name": "loadTagger",
          "package": "chatter",
          "signature": "FilePath -\u003e IO POSTagger",
          "source": "src/NLP-POS.html#loadTagger",
          "type": "function"
        },
        "index": {
          "description": "Load tagger using the interal taggerTable If you need to specify your own mappings for new composite taggers you should use deserialize This function checks the filename to determine if the content should be decompressed If the file ends with gz then we assume it is gziped model",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "loadTagger",
          "normalized": "FilePath-\u003eIO POSTagger",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "FilePath-\u003eIO POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:loadTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a \u003ccode\u003ePOSTager\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "NLP.POS",
          "name": "saveTagger",
          "package": "chatter",
          "signature": "POSTagger -\u003e FilePath -\u003e IO ()",
          "source": "src/NLP-POS.html#saveTagger",
          "type": "function"
        },
        "index": {
          "description": "Store POSTager to file",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "saveTagger",
          "normalized": "POSTagger-\u003eFilePath-\u003eIO()",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "POSTagger-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:saveTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.POS",
          "name": "serialize",
          "package": "chatter",
          "signature": "POSTagger -\u003e ByteString",
          "source": "src/NLP-POS.html#serialize",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "serialize",
          "normalized": "POSTagger-\u003eByteString",
          "package": "chatter",
          "signature": "POSTagger-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag a chunk of input text with part-of-speech tags, using the\n sentence splitter, tokenizer, and tagger contained in the \u003ccode\u003ePOSTager\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.POS",
          "name": "tag",
          "package": "chatter",
          "signature": "POSTagger -\u003e Text -\u003e [TaggedSentence]",
          "source": "src/NLP-POS.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Tag chunk of input text with part-of-speech tags using the sentence splitter tokenizer and tagger contained in the POSTager",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "tag",
          "normalized": "POSTagger-\u003eText-\u003e[TaggedSentence]",
          "package": "chatter",
          "signature": "POSTagger-\u003eText-\u003e[TaggedSentence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag the tokens in a string.\n\u003c/p\u003e\u003cp\u003eReturns a space-separated string of tokens, each token suffixed\n with the part of speech.  For example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etag tagger \"the dog jumped .\"\n\u003c/code\u003e\u003c/strong\u003e\"the/at dog/nn jumped/vbd ./.\"\n\u003c/pre\u003e",
          "module": "NLP.POS",
          "name": "tagStr",
          "package": "chatter",
          "signature": "POSTagger -\u003e String -\u003e String",
          "source": "src/NLP-POS.html#tagStr",
          "type": "function"
        },
        "index": {
          "description": "Tag the tokens in string Returns space-separated string of tokens each token suffixed with the part of speech For example tag tagger the dog jumped the at dog nn jumped vbd",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "tagStr",
          "normalized": "POSTagger-\u003eString-\u003eString",
          "package": "chatter",
          "partial": "Str",
          "signature": "POSTagger-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:tagStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText version of tagStr\n\u003c/p\u003e",
          "module": "NLP.POS",
          "name": "tagText",
          "package": "chatter",
          "signature": "POSTagger -\u003e Text -\u003e Text",
          "source": "src/NLP-POS.html#tagText",
          "type": "function"
        },
        "index": {
          "description": "Text version of tagStr",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "tagText",
          "normalized": "POSTagger-\u003eText-\u003eText",
          "package": "chatter",
          "partial": "Text",
          "signature": "POSTagger-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:tagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default table of tagger IDs to readTagger functions.  Each\n tagger packaged with Chatter should have an entry here.  By\n convention, the IDs use are the fully qualified module name of the\n tagger package.\n\u003c/p\u003e",
          "module": "NLP.POS",
          "name": "taggerTable",
          "package": "chatter",
          "signature": "Map ByteString (ByteString -\u003e Maybe POSTagger -\u003e Either String POSTagger)",
          "source": "src/NLP-POS.html#taggerTable",
          "type": "function"
        },
        "index": {
          "description": "The default table of tagger IDs to readTagger functions Each tagger packaged with Chatter should have an entry here By convention the IDs use are the fully qualified module name of the tagger package",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "taggerTable",
          "normalized": "Map ByteString(ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger)",
          "package": "chatter",
          "partial": "Table",
          "signature": "Map ByteString(ByteString-\u003eMaybe POSTagger-\u003eEither String POSTagger)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:taggerTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain a \u003ccode\u003e\u003ca\u003ePOSTagger\u003c/a\u003e\u003c/code\u003e on a corpus of sentences.\n\u003c/p\u003e\u003cp\u003eThis will recurse through the \u003ccode\u003e\u003ca\u003ePOSTagger\u003c/a\u003e\u003c/code\u003e stack, training all the\n backoff taggers as well.  In order to do that, this function has to\n be generic to the kind of taggers used, so it is not possible to\n train up a new POSTagger from nothing: \u003ccode\u003e\u003ca\u003etrain\u003c/a\u003e\u003c/code\u003e wouldn't know what\n tagger to create.\n\u003c/p\u003e\u003cp\u003eTo get around that restriction, you can use the various \u003ccode\u003emkTagger\u003c/code\u003e\n implementations, such as \u003ccode\u003e\u003ca\u003emkTagger\u003c/a\u003e\u003c/code\u003e or\n NLP.POS.AvgPerceptronTagger.mkTagger'.  For example:\n\u003c/p\u003e\u003cpre\u003e import NLP.POS.AvgPerceptronTagger as APT\n\n let newTagger = APT.mkTagger APT.emptyPerceptron Nothing\n posTgr \u003c- train newTagger trainingExamples\n\u003c/pre\u003e",
          "module": "NLP.POS",
          "name": "train",
          "package": "chatter",
          "signature": "POSTagger -\u003e [TaggedSentence] -\u003e IO POSTagger",
          "source": "src/NLP-POS.html#train",
          "type": "function"
        },
        "index": {
          "description": "Train POSTagger on corpus of sentences This will recurse through the POSTagger stack training all the backoff taggers as well In order to do that this function has to be generic to the kind of taggers used so it is not possible to train up new POSTagger from nothing train wouldn know what tagger to create To get around that restriction you can use the various mkTagger implementations such as mkTagger or NLP.POS.AvgPerceptronTagger.mkTagger For example import NLP.POS.AvgPerceptronTagger as APT let newTagger APT.mkTagger APT.emptyPerceptron Nothing posTgr train newTagger trainingExamples",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "train",
          "normalized": "POSTagger-\u003e[TaggedSentence]-\u003eIO POSTagger",
          "package": "chatter",
          "signature": "POSTagger-\u003e[TaggedSentence]-\u003eIO POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain a tagger on string input in the standard form for POS\n tagged corpora:\n\u003c/p\u003e\u003cpre\u003e trainStr tagger \"the/at dog/nn jumped/vbd ./.\"\n\u003c/pre\u003e",
          "module": "NLP.POS",
          "name": "trainStr",
          "package": "chatter",
          "signature": "POSTagger -\u003e String -\u003e IO POSTagger",
          "source": "src/NLP-POS.html#trainStr",
          "type": "function"
        },
        "index": {
          "description": "Train tagger on string input in the standard form for POS tagged corpora trainStr tagger the at dog nn jumped vbd",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "trainStr",
          "normalized": "POSTagger-\u003eString-\u003eIO POSTagger",
          "package": "chatter",
          "partial": "Str",
          "signature": "POSTagger-\u003eString-\u003eIO POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:trainStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eText\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003etrainStr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "NLP.POS",
          "name": "trainText",
          "package": "chatter",
          "signature": "POSTagger -\u003e Text -\u003e IO POSTagger",
          "source": "src/NLP-POS.html#trainText",
          "type": "function"
        },
        "index": {
          "description": "The Text version of trainStr",
          "hierarchy": "NLP POS",
          "module": "NLP.POS",
          "name": "trainText",
          "normalized": "POSTagger-\u003eText-\u003eIO POSTagger",
          "package": "chatter",
          "partial": "Text",
          "signature": "POSTagger-\u003eText-\u003eIO POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-POS.html#v:trainText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Similarity.VectorSim",
          "name": "VectorSim",
          "package": "chatter",
          "source": "src/NLP-Similarity-VectorSim.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "VectorSim",
          "package": "chatter",
          "partial": "Vector Sim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient (ish) representation for documents in the \u003ca\u003ebag of\n words\u003c/a\u003e sense.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "TermVector",
          "package": "chatter",
          "source": "src/NLP-Similarity-VectorSim.html#TermVector",
          "type": "type"
        },
        "index": {
          "description": "An efficient ish representation for documents in the bag of words sense",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "TermVector",
          "package": "chatter",
          "partial": "Term Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#t:TermVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Similarity.VectorSim",
          "name": "cosVec",
          "package": "chatter",
          "signature": "TermVector -\u003e TermVector -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#cosVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "cosVec",
          "normalized": "TermVector-\u003eTermVector-\u003eDouble",
          "package": "chatter",
          "partial": "Vec",
          "signature": "TermVector-\u003eTermVector-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:cosVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind the dot product of two vectors.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "dotProd",
          "package": "chatter",
          "signature": "TermVector -\u003e TermVector -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#dotProd",
          "type": "function"
        },
        "index": {
          "description": "find the dot product of two vectors",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "dotProd",
          "normalized": "TermVector-\u003eTermVector-\u003eDouble",
          "package": "chatter",
          "partial": "Prod",
          "signature": "TermVector-\u003eTermVector-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:dotProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the inverse document frequency.\n\u003c/p\u003e\u003cp\u003eThe IDF is, roughly speaking, a measure of how popular a term is.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "idf",
          "package": "chatter",
          "signature": "Text -\u003e Corpus -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#idf",
          "type": "function"
        },
        "index": {
          "description": "Calculate the inverse document frequency The IDF is roughly speaking measure of how popular term is",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "idf",
          "normalized": "Text-\u003eCorpus-\u003eDouble",
          "package": "chatter",
          "signature": "Text-\u003eCorpus-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:idf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the magnitude of a vector.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "magnitude",
          "package": "chatter",
          "signature": "TermVector -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#magnitude",
          "type": "function"
        },
        "index": {
          "description": "Calculate the magnitude of vector",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "magnitude",
          "normalized": "TermVector-\u003eDouble",
          "package": "chatter",
          "signature": "TermVector-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eTermVector\u003c/a\u003e\u003c/code\u003e from a tokenized document.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "mkVector",
          "package": "chatter",
          "signature": "Corpus -\u003e [Text] -\u003e TermVector",
          "source": "src/NLP-Similarity-VectorSim.html#mkVector",
          "type": "function"
        },
        "index": {
          "description": "Generate TermVector from tokenized document",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "mkVector",
          "normalized": "Corpus-\u003e[Text]-\u003eTermVector",
          "package": "chatter",
          "partial": "Vector",
          "signature": "Corpus-\u003e[Text]-\u003eTermVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:mkVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes similarity on full strings, using \u003ccode\u003ewords\u003c/code\u003e for\n tokenization, and no stemming.\n\u003c/p\u003e\u003cp\u003eThere *must* be at least one document in the corpus.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "sim",
          "package": "chatter",
          "signature": "Corpus -\u003e Text -\u003e Text -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#sim",
          "type": "function"
        },
        "index": {
          "description": "Invokes similarity on full strings using words for tokenization and no stemming There must be at least one document in the corpus",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "sim",
          "normalized": "Corpus-\u003eText-\u003eText-\u003eDouble",
          "package": "chatter",
          "signature": "Corpus-\u003eText-\u003eText-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine how similar two documents are.\n\u003c/p\u003e\u003cp\u003eThis function assumes that each document has been tokenized and (if\n desired) stemmed/case-normalized.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper around \u003ccode\u003e\u003ca\u003etvSim\u003c/a\u003e\u003c/code\u003e, which is a *much* more efficient\n implementation.  If you need to run similarity against any single\n document more than once, then you should create \u003ccode\u003e\u003ca\u003eTermVector\u003c/a\u003e\u003c/code\u003es for\n each of your documents and use \u003ccode\u003e\u003ca\u003etvSim\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003esimilarity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere *must* be at least one document in the corpus.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "similarity",
          "package": "chatter",
          "signature": "Corpus -\u003e [Text] -\u003e [Text] -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#similarity",
          "type": "function"
        },
        "index": {
          "description": "Determine how similar two documents are This function assumes that each document has been tokenized and if desired stemmed case-normalized This is wrapper around tvSim which is much more efficient implementation If you need to run similarity against any single document more than once then you should create TermVector for each of your documents and use tvSim instead of similarity There must be at least one document in the corpus",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "similarity",
          "normalized": "Corpus-\u003e[Text]-\u003e[Text]-\u003eDouble",
          "package": "chatter",
          "signature": "Corpus-\u003e[Text]-\u003e[Text]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:similarity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the raw frequency of a term in a body of text.\n\u003c/p\u003e\u003cp\u003eThe firt argument is the term to find, the second is a tokenized\n document. This function does not do any stemming or additional text\n modification.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "tf",
          "package": "chatter",
          "signature": "a -\u003e [a] -\u003e Int",
          "source": "src/NLP-Similarity-VectorSim.html#tf",
          "type": "function"
        },
        "index": {
          "description": "Return the raw frequency of term in body of text The firt argument is the term to find the second is tokenized document This function does not do any stemming or additional text modification",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "tf",
          "normalized": "a-\u003e[a]-\u003eInt",
          "package": "chatter",
          "signature": "a-\u003e[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:tf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the tf*idf measure for a term given a document and a\n corpus.\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "tf_idf",
          "package": "chatter",
          "signature": "Text -\u003e [Text] -\u003e Corpus -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#tf_idf",
          "type": "function"
        },
        "index": {
          "description": "Calculate the tf idf measure for term given document and corpus",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "tf_idf",
          "normalized": "Text-\u003e[Text]-\u003eCorpus-\u003eDouble",
          "package": "chatter",
          "signature": "Text-\u003e[Text]-\u003eCorpus-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:tf_idf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine how similar two documents are.\n\u003c/p\u003e\u003cp\u003eCalculates the similarity between two documents, represented as\n \u003ccode\u003eTermVectors\u003c/code\u003e\n\u003c/p\u003e",
          "module": "NLP.Similarity.VectorSim",
          "name": "tvSim",
          "package": "chatter",
          "signature": "TermVector -\u003e TermVector -\u003e Double",
          "source": "src/NLP-Similarity-VectorSim.html#tvSim",
          "type": "function"
        },
        "index": {
          "description": "Determine how similar two documents are Calculates the similarity between two documents represented as TermVectors",
          "hierarchy": "NLP Similarity VectorSim",
          "module": "NLP.Similarity.VectorSim",
          "name": "tvSim",
          "normalized": "TermVector-\u003eTermVector-\u003eDouble",
          "package": "chatter",
          "partial": "Sim",
          "signature": "TermVector-\u003eTermVector-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Similarity-VectorSim.html#v:tvSim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "Types",
          "package": "chatter",
          "source": "src/NLP-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "Types",
          "package": "chatter",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument corpus.\n\u003c/p\u003e\u003cp\u003eThis is a simple hashed corpus, the document content is not stored.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "Corpus",
          "package": "chatter",
          "source": "src/NLP-Types.html#Corpus",
          "type": "data"
        },
        "index": {
          "description": "Document corpus This is simple hashed corpus the document content is not stored",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "Corpus",
          "package": "chatter",
          "partial": "Corpus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#t:Corpus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePart of Speech tagger, with back-off tagger.\n\u003c/p\u003e\u003cp\u003eA sequence of pos taggers can be assembled by using backoff\n taggers.  When tagging text, the first tagger is run on the input,\n possibly tagging some tokens as unknown ('Tag \u003ca\u003eUnk\u003c/a\u003e').  The first\n backoff tagger is then recursively invoked on the text to fill in\n the unknown tags, but that may still leave some tokens marked with\n 'Tag \u003ca\u003eUnk\u003c/a\u003e'.  This process repeats until no more taggers are found.\n (The current implementation is not very efficient in this\n respect.).\n\u003c/p\u003e\u003cp\u003eBack off taggers are particularly useful when there is a set of\n domain specific vernacular that a general purpose statistical\n tagger does not know of.  A LitteralTagger can be created to map\n terms to fixed POS tags, and then delegate the bulk of the text to\n a statistical back off tagger, such as an AvgPerceptronTagger.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ePOSTagger\u003c/a\u003e\u003c/code\u003e values can be serialized and deserialized by using\n \u003ccode\u003e\u003ca\u003eserialize\u003c/a\u003e\u003c/code\u003e and NLP.POS.deserialize`. This is a bit tricky\n because the POSTagger abstracts away the implementation details of\n the particular tagging algorithm, and the model for that tagger (if\n any).  To support serialization, each POSTagger value must provide\n a serialize value that can be used to generate a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n representation of the model, as well as a unique id (also a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e).  Furthermore, that ID must be added to a `Map\n ByteString (ByteString -\u003e Maybe POSTagger -\u003e Either String\n POSTagger)` that is provided to \u003ccode\u003edeserialize\u003c/code\u003e.  The function in the\n map takes the output of \u003ccode\u003e\u003ca\u003eposSerialize\u003c/a\u003e\u003c/code\u003e, and possibly a backoff\n tagger, and reconstitutes the POSTagger that was serialized\n (assigning the proper functions, setting up closures as needed,\n etc.) Look at the source for \u003ccode\u003e\u003ca\u003etaggerTable\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ereadTagger\u003c/a\u003e\u003c/code\u003e for examples.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "POSTagger",
          "package": "chatter",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "data"
        },
        "index": {
          "description": "Part of Speech tagger with back-off tagger sequence of pos taggers can be assembled by using backoff taggers When tagging text the first tagger is run on the input possibly tagging some tokens as unknown Tag Unk The first backoff tagger is then recursively invoked on the text to fill in the unknown tags but that may still leave some tokens marked with Tag Unk This process repeats until no more taggers are found The current implementation is not very efficient in this respect Back off taggers are particularly useful when there is set of domain specific vernacular that general purpose statistical tagger does not know of LitteralTagger can be created to map terms to fixed POS tags and then delegate the bulk of the text to statistical back off tagger such as an AvgPerceptronTagger POSTagger values can be serialized and deserialized by using serialize and NLP.POS.deserialize This is bit tricky because the POSTagger abstracts away the implementation details of the particular tagging algorithm and the model for that tagger if any To support serialization each POSTagger value must provide serialize value that can be used to generate ByteString representation of the model as well as unique id also ByteString Furthermore that ID must be added to Map ByteString ByteString Maybe POSTagger Either String POSTagger that is provided to deserialize The function in the map takes the output of posSerialize and possibly backoff tagger and reconstitutes the POSTagger that was serialized assigning the proper functions setting up closures as needed etc Look at the source for taggerTable and readTagger for examples",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "POSTagger",
          "package": "chatter",
          "partial": "POSTagger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#t:POSTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "Sentence",
          "package": "chatter",
          "source": "src/NLP-Types.html#Sentence",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "Sentence",
          "package": "chatter",
          "partial": "Sentence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#t:Sentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "Tag",
          "package": "chatter",
          "source": "src/NLP-Types.html#Tag",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "Tag",
          "package": "chatter",
          "partial": "Tag",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "TaggedSentence",
          "package": "chatter",
          "source": "src/NLP-Types.html#TaggedSentence",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "TaggedSentence",
          "package": "chatter",
          "partial": "Tagged Sentence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#t:TaggedSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "Corpus",
          "package": "chatter",
          "signature": "Corpus",
          "source": "src/NLP-Types.html#Corpus",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "Corpus",
          "package": "chatter",
          "partial": "Corpus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:Corpus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "POSTagger",
          "package": "chatter",
          "signature": "POSTagger",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "POSTagger",
          "package": "chatter",
          "partial": "POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:POSTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "Tag",
          "package": "chatter",
          "signature": "Tag Text",
          "source": "src/NLP-Types.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "Tag",
          "package": "chatter",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a document to the corpus.\n\u003c/p\u003e\u003cp\u003eThis can be dangerous if the documents are pre-processed\n differently.  All corpus-related functions assume that the\n documents have all been tokenized and the tokens normalized, in the\n same way.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "addDocument",
          "package": "chatter",
          "signature": "Corpus -\u003e [Text] -\u003e Corpus",
          "source": "src/NLP-Types.html#addDocument",
          "type": "function"
        },
        "index": {
          "description": "Add document to the corpus This can be dangerous if the documents are pre-processed differently All corpus-related functions assume that the documents have all been tokenized and the tokens normalized in the same way",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "addDocument",
          "normalized": "Corpus-\u003e[Text]-\u003eCorpus",
          "package": "chatter",
          "partial": "Document",
          "signature": "Corpus-\u003e[Text]-\u003eCorpus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:addDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "addTerm",
          "package": "chatter",
          "signature": "Map Text Int -\u003e Text -\u003e Map Text Int",
          "source": "src/NLP-Types.html#addTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "addTerm",
          "normalized": "Map Text Int-\u003eText-\u003eMap Text Int",
          "package": "chatter",
          "partial": "Term",
          "signature": "Map Text Int-\u003eText-\u003eMap Text Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:addTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "addTerms",
          "package": "chatter",
          "signature": "Map Text Int -\u003e Set Text -\u003e Map Text Int",
          "source": "src/NLP-Types.html#addTerms",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "addTerms",
          "normalized": "Map Text Int-\u003eSet Text-\u003eMap Text Int",
          "package": "chatter",
          "partial": "Terms",
          "signature": "Map Text Int-\u003eSet Text-\u003eMap Text Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:addTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of documents in the corpus.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "corpLength",
          "package": "chatter",
          "signature": "Int",
          "source": "src/NLP-Types.html#Corpus",
          "type": "function"
        },
        "index": {
          "description": "The number of documents in the corpus",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "corpLength",
          "package": "chatter",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:corpLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA count of the number of documents each term occurred in.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "corpTermCounts",
          "package": "chatter",
          "signature": "Map Text Int",
          "source": "src/NLP-Types.html#Corpus",
          "type": "function"
        },
        "index": {
          "description": "count of the number of documents each term occurred in",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "corpTermCounts",
          "package": "chatter",
          "partial": "Term Counts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:corpTermCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "fromTag",
          "package": "chatter",
          "signature": "Tag -\u003e Text",
          "source": "src/NLP-Types.html#fromTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "fromTag",
          "normalized": "Tag-\u003eText",
          "package": "chatter",
          "partial": "Tag",
          "signature": "Tag-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:fromTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a corpus from a list of documents, represented by\n normalized tokens.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "mkCorpus",
          "package": "chatter",
          "signature": "[[Text]] -\u003e Corpus",
          "source": "src/NLP-Types.html#mkCorpus",
          "type": "function"
        },
        "index": {
          "description": "Create corpus from list of documents represented by normalized tokens",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "mkCorpus",
          "normalized": "[[Text]]-\u003eCorpus",
          "package": "chatter",
          "partial": "Corpus",
          "signature": "[[Text]]-\u003eCorpus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:mkCorpus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Types",
          "name": "parseTag",
          "package": "chatter",
          "signature": "Text -\u003e Tag",
          "source": "src/NLP-Types.html#parseTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "parseTag",
          "normalized": "Text-\u003eTag",
          "package": "chatter",
          "partial": "Tag",
          "signature": "Text-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:parseTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tagger to invoke on unknown tokens.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "posBackoff",
          "package": "chatter",
          "signature": "Maybe POSTagger",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "description": "tagger to invoke on unknown tokens",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "posBackoff",
          "package": "chatter",
          "partial": "Backoff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:posBackoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique id that will identify the\n algorithm used for this POS Tagger.  This\n is used in deserialization\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "posID",
          "package": "chatter",
          "signature": "ByteString",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "description": "unique id that will identify the algorithm used for this POS Tagger This is used in deserialization",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "posID",
          "package": "chatter",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:posID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore this POS tagger to a\n bytestring.  This does \u003cem\u003enot\u003c/em\u003e\n serialize the backoff taggers.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "posSerialize",
          "package": "chatter",
          "signature": "ByteString",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "description": "Store this POS tagger to bytestring This does not serialize the backoff taggers",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "posSerialize",
          "package": "chatter",
          "partial": "Serialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:posSerialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence splitter.  If your input is formatted as\n one sentence per line, then use \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e,\n otherwise try Erik Kow's fullstop library.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "posSplitter",
          "package": "chatter",
          "signature": "Text -\u003e [Text]",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "description": "sentence splitter If your input is formatted as one sentence per line then use lines otherwise try Erik Kow fullstop library",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "posSplitter",
          "normalized": "Text-\u003e[Text]",
          "package": "chatter",
          "partial": "Splitter",
          "signature": "Text-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:posSplitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial part-of-speech tagger.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "posTagger",
          "package": "chatter",
          "signature": "[Sentence] -\u003e [TaggedSentence]",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "description": "The initial part-of-speech tagger",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "posTagger",
          "normalized": "[Sentence]-\u003e[TaggedSentence]",
          "package": "chatter",
          "partial": "Tagger",
          "signature": "[Sentence]-\u003e[TaggedSentence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:posTagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tokenizer; (\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e will work.)\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "posTokenizer",
          "package": "chatter",
          "signature": "Text -\u003e Sentence",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "description": "tokenizer words will work",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "posTokenizer",
          "normalized": "Text-\u003eSentence",
          "package": "chatter",
          "partial": "Tokenizer",
          "signature": "Text-\u003eSentence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:posTokenizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraining function to train the immediate POS tagger.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "posTrainer",
          "package": "chatter",
          "signature": "[TaggedSentence] -\u003e IO POSTagger",
          "source": "src/NLP-Types.html#POSTagger",
          "type": "function"
        },
        "index": {
          "description": "Training function to train the immediate POS tagger",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "posTrainer",
          "normalized": "[TaggedSentence]-\u003eIO POSTagger",
          "package": "chatter",
          "partial": "Trainer",
          "signature": "[TaggedSentence]-\u003eIO POSTagger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:posTrainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the tags from a tagged sentence\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "stripTags",
          "package": "chatter",
          "signature": "TaggedSentence -\u003e Sentence",
          "source": "src/NLP-Types.html#stripTags",
          "type": "function"
        },
        "index": {
          "description": "Remove the tags from tagged sentence",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "stripTags",
          "normalized": "TaggedSentence-\u003eSentence",
          "package": "chatter",
          "partial": "Tags",
          "signature": "TaggedSentence-\u003eSentence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:stripTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant tag for \u003ca\u003eunknown\u003c/a\u003e\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "tagUNK",
          "package": "chatter",
          "signature": "Tag",
          "source": "src/NLP-Types.html#tagUNK",
          "type": "function"
        },
        "index": {
          "description": "Constant tag for unknown",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "tagUNK",
          "package": "chatter",
          "partial": "UNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:tagUNK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of documents that a term occurred in.\n\u003c/p\u003e",
          "module": "NLP.Types",
          "name": "termCounts",
          "package": "chatter",
          "signature": "Corpus -\u003e Text -\u003e Int",
          "source": "src/NLP-Types.html#termCounts",
          "type": "function"
        },
        "index": {
          "description": "Get the number of documents that term occurred in",
          "hierarchy": "NLP Types",
          "module": "NLP.Types",
          "name": "termCounts",
          "normalized": "Corpus-\u003eText-\u003eInt",
          "package": "chatter",
          "partial": "Counts",
          "signature": "Corpus-\u003eText-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chatter/docs/NLP-Types.html#v:termCounts"
      }
    }
  ]
]