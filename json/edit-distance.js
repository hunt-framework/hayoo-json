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
        "word": "edit-distance"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing the edit distances between strings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.EditDistance",
          "name": "EditDistance",
          "package": "edit-distance",
          "source": "src/Text-EditDistance.html",
          "type": "module"
        },
        "index": {
          "description": "Computing the edit distances between strings",
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "EditDistance",
          "package": "edit-distance",
          "partial": "Edit Distance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.EditDistance",
          "name": "Costs",
          "package": "edit-distance",
          "source": "src/Text-EditDistance-EditCosts.html#Costs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "Costs",
          "package": "edit-distance",
          "partial": "Costs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#t:Costs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.EditDistance",
          "name": "EditCosts",
          "package": "edit-distance",
          "source": "src/Text-EditDistance-EditCosts.html#EditCosts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "EditCosts",
          "package": "edit-distance",
          "partial": "Edit Costs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#t:EditCosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.EditDistance",
          "name": "ConstantCost",
          "package": "edit-distance",
          "signature": "ConstantCost !Int",
          "source": "src/Text-EditDistance-EditCosts.html#Costs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "ConstantCost",
          "package": "edit-distance",
          "partial": "Constant Cost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:ConstantCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.EditDistance",
          "name": "EditCosts",
          "package": "edit-distance",
          "signature": "EditCosts",
          "source": "src/Text-EditDistance-EditCosts.html#EditCosts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "EditCosts",
          "package": "edit-distance",
          "partial": "Edit Costs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:EditCosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.EditDistance",
          "name": "VariableCost",
          "package": "edit-distance",
          "signature": "VariableCost (a -\u003e Int)",
          "source": "src/Text-EditDistance-EditCosts.html#Costs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "VariableCost",
          "normalized": "VariableCost(a-\u003eInt)",
          "package": "edit-distance",
          "partial": "Variable Cost",
          "signature": "VariableCost(a-\u003eInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:VariableCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.EditDistance",
          "name": "defaultEditCosts",
          "package": "edit-distance",
          "signature": "EditCosts",
          "source": "src/Text-EditDistance-EditCosts.html#defaultEditCosts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "defaultEditCosts",
          "package": "edit-distance",
          "partial": "Edit Costs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:defaultEditCosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost of deleting the specified character from the left string\n\u003c/p\u003e",
          "module": "Text.EditDistance",
          "name": "deletionCosts",
          "package": "edit-distance",
          "signature": "Costs Char",
          "source": "src/Text-EditDistance-EditCosts.html#EditCosts",
          "type": "function"
        },
        "index": {
          "description": "Cost of deleting the specified character from the left string",
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "deletionCosts",
          "package": "edit-distance",
          "partial": "Costs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:deletionCosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost of inserting the specified characters into the right string\n\u003c/p\u003e",
          "module": "Text.EditDistance",
          "name": "insertionCosts",
          "package": "edit-distance",
          "signature": "Costs Char",
          "source": "src/Text-EditDistance-EditCosts.html#EditCosts",
          "type": "function"
        },
        "index": {
          "description": "Cost of inserting the specified characters into the right string",
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "insertionCosts",
          "package": "edit-distance",
          "partial": "Costs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:insertionCosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the Levenshtein edit distance between two strings.  That is to say, the number of deletion,\n insertion and substitution operations that are required to make the two strings equal.  Note that\n this algorithm therefore does not make use of the \u003ccode\u003etranspositionCost\u003c/code\u003e field of the costs. See also:\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Levenshtein_distance\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.EditDistance",
          "name": "levenshteinDistance",
          "package": "edit-distance",
          "signature": "EditCosts -\u003e String -\u003e String -\u003e Int",
          "source": "src/Text-EditDistance.html#levenshteinDistance",
          "type": "function"
        },
        "index": {
          "description": "Find the Levenshtein edit distance between two strings That is to say the number of deletion insertion and substitution operations that are required to make the two strings equal Note that this algorithm therefore does not make use of the transpositionCost field of the costs See also http en.wikipedia.org wiki Levenshtein distance",
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "levenshteinDistance",
          "normalized": "EditCosts-\u003eString-\u003eString-\u003eInt",
          "package": "edit-distance",
          "partial": "Distance",
          "signature": "EditCosts-\u003eString-\u003eString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:levenshteinDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the \u003ca\u003erestricted\u003c/a\u003e Damerau-Levenshtein edit distance between two strings.  This algorithm calculates the cost of\n the so-called optimal string alignment, which does not always equal the appropriate edit distance. The cost of the optimal \n string alignment is the number of edit operations needed to make the input strings equal under the condition that no substring \n is edited more than once.  See also: \u003ca\u003ehttp://en.wikipedia.org/wiki/Damerau-Levenshtein_distance\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.EditDistance",
          "name": "restrictedDamerauLevenshteinDistance",
          "package": "edit-distance",
          "signature": "EditCosts -\u003e String -\u003e String -\u003e Int",
          "source": "src/Text-EditDistance.html#restrictedDamerauLevenshteinDistance",
          "type": "function"
        },
        "index": {
          "description": "Find the restricted Damerau-Levenshtein edit distance between two strings This algorithm calculates the cost of the so-called optimal string alignment which does not always equal the appropriate edit distance The cost of the optimal string alignment is the number of edit operations needed to make the input strings equal under the condition that no substring is edited more than once See also http en.wikipedia.org wiki Damerau-Levenshtein distance",
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "restrictedDamerauLevenshteinDistance",
          "normalized": "EditCosts-\u003eString-\u003eString-\u003eInt",
          "package": "edit-distance",
          "partial": "Damerau Levenshtein Distance",
          "signature": "EditCosts-\u003eString-\u003eString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:restrictedDamerauLevenshteinDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost of substituting a character from the left string with one from the right string -- with arguments in that order.\n\u003c/p\u003e",
          "module": "Text.EditDistance",
          "name": "substitutionCosts",
          "package": "edit-distance",
          "signature": "Costs (Char, Char)",
          "source": "src/Text-EditDistance-EditCosts.html#EditCosts",
          "type": "function"
        },
        "index": {
          "description": "Cost of substituting character from the left string with one from the right string with arguments in that order",
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "substitutionCosts",
          "normalized": "Costs(Char,Char)",
          "package": "edit-distance",
          "partial": "Costs",
          "signature": "Costs(Char,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:substitutionCosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost of moving one character backwards and the other forwards -- with arguments in that order.\n\u003c/p\u003e",
          "module": "Text.EditDistance",
          "name": "transpositionCosts",
          "package": "edit-distance",
          "signature": "Costs (Char, Char)",
          "source": "src/Text-EditDistance-EditCosts.html#EditCosts",
          "type": "function"
        },
        "index": {
          "description": "Cost of moving one character backwards and the other forwards with arguments in that order",
          "hierarchy": "Text EditDistance",
          "module": "Text.EditDistance",
          "name": "transpositionCosts",
          "normalized": "Costs(Char,Char)",
          "package": "edit-distance",
          "partial": "Costs",
          "signature": "Costs(Char,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edit-distance/docs/Text-EditDistance.html#v:transpositionCosts"
      }
    }
  ]
]