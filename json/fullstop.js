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
        "word": "fullstop"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.FullStop",
          "name": "FullStop",
          "package": "fullstop",
          "source": "src/NLP-FullStop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP FullStop",
          "module": "NLP.FullStop",
          "name": "FullStop",
          "package": "fullstop",
          "partial": "Full Stop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fullstop/docs/NLP-FullStop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esegment\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e splits \u003ccode\u003es\u003c/code\u003e into a list of sentences.\n\u003c/p\u003e\u003cp\u003eIt looks for punctuation characters that indicate an\n   end-of-sentence and tries to ignore some uses of\n   puncuation which do not correspond to ends of sentences\n\u003c/p\u003e\u003cp\u003eIt's a good idea to view the source code to this module,\n   especially the test suite.\n\u003c/p\u003e\u003cp\u003eI imagine this sort of task is actually ambiguous and that\n   you actually won't be able to write an exact segmenter.\n\u003c/p\u003e\u003cp\u003eIt may be a good idea to go see the literature on how to do\n   segmentation right, maybe implement something which returns\n   the N most probable segmentations instead.\n\u003c/p\u003e",
          "module": "NLP.FullStop",
          "name": "segment",
          "package": "fullstop",
          "signature": "String -\u003e [String]",
          "source": "src/NLP-FullStop.html#segment",
          "type": "function"
        },
        "index": {
          "description": "segment splits into list of sentences It looks for punctuation characters that indicate an end-of-sentence and tries to ignore some uses of puncuation which do not correspond to ends of sentences It good idea to view the source code to this module especially the test suite imagine this sort of task is actually ambiguous and that you actually won be able to write an exact segmenter It may be good idea to go see the literature on how to do segmentation right maybe implement something which returns the most probable segmentations instead",
          "hierarchy": "NLP FullStop",
          "module": "NLP.FullStop",
          "name": "segment",
          "normalized": "String-\u003e[String]",
          "package": "fullstop",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fullstop/docs/NLP-FullStop.html#v:segment"
      }
    }
  ]
]