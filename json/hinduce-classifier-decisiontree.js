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
        "word": "hinduce-classifier-decisiontree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDecision tree learning, used in statistics, data mining and machine\n learning, uses a decision tree as a predictive model which maps\n observations about an item to conclusions about the item's target\n value. In these tree structures, leaves represent class labels and\n branches represent conjunctions of features that lead to those\n class labels.\n\u003c/p\u003e\u003cp\u003eIn data mining, a decision tree describes data but not decisions;\n rather the resulting classification tree can be an input for\n decision making.\n\u003c/p\u003e\u003cp\u003e(\u003ca\u003ehttps://en.wikipedia.org/wiki/Decision_tree_learning\u003c/a\u003e,\n Dec 6 2011)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecisionTree",
          "package": "hinduce-classifier-decisiontree",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html",
          "type": "module"
        },
        "index": {
          "description": "Decision tree learning used in statistics data mining and machine learning uses decision tree as predictive model which maps observations about an item to conclusions about the item target value In these tree structures leaves represent class labels and branches represent conjunctions of features that lead to those class labels In data mining decision tree describes data but not decisions rather the resulting classification tree can be an input for decision making https en.wikipedia.org wiki Decision tree learning Dec",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecisionTree",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Decision Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAutoDecide\u003c/code\u003e is used to generate possible splits based on actual\n attributes, in a straightforward fashion. Think of AutoDecide as a\n default implementation for \u003ccode\u003eDecider\u003c/code\u003e generation.\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "AutoDecide",
          "package": "hinduce-classifier-decisiontree",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#AutoDecide",
          "type": "class"
        },
        "index": {
          "description": "AutoDecide is used to generate possible splits based on actual attributes in straightforward fashion Think of AutoDecide as default implementation for Decider generation",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "AutoDecide",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Auto Decide",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#t:AutoDecide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA decision tree data structure that allows arbitrary numbers of\n children.  It has been proven that a binary tree is equally\n expressive, but considering that decision trees are a 'white box'\n model, we do not want to limit ourselves to the binary case because\n other numbers of children may make more sense to humans.\n\u003c/p\u003e\u003cp\u003eConverting between binary and arbitrary-child trees is feasible though,\n but probably not very interesting.\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DTree",
          "package": "hinduce-classifier-decisiontree",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTree",
          "type": "data"
        },
        "index": {
          "description": "decision tree data structure that allows arbitrary numbers of children It has been proven that binary tree is equally expressive but considering that decision trees are white box model we do not want to limit ourselves to the binary case because other numbers of children may make more sense to humans Converting between binary and arbitrary-child trees is feasible though but probably not very interesting",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DTree",
          "package": "hinduce-classifier-decisiontree",
          "partial": "DTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#t:DTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn algebra on decision trees\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DTreeAlgebra",
          "package": "hinduce-classifier-decisiontree",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTreeAlgebra",
          "type": "data"
        },
        "index": {
          "description": "An algebra on decision trees",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DTreeAlgebra",
          "package": "hinduce-classifier-decisiontree",
          "partial": "DTree Algebra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#t:DTreeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecide with Ord\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideOrd",
          "package": "hinduce-classifier-decisiontree",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DecideOrd",
          "type": "data"
        },
        "index": {
          "description": "Decide with Ord",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideOrd",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Decide Ord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#t:DecideOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecide with set ([]) membership, requiring Eq\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideSet",
          "package": "hinduce-classifier-decisiontree",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DecideSet",
          "type": "data"
        },
        "index": {
          "description": "Decide with set membership requiring Eq",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideSet",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Decide Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#t:DecideSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edecide\u003c/code\u003e defines the type and semantics of a split. For example,\n the split \"attr \u003c= 20\" is created by \u003ccode\u003eDecideOrd 20\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor every possible value of type \u003ccode\u003ebranch\u003c/code\u003e, an actual tree branch\n may be created. Allowing many distinct values in \u003ccode\u003ebranch\u003c/code\u003e is a bad\n idea. Too many of these may have little predictive value and\n exhaust the training database more quickly.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edecider\u003c/code\u003e: The representation of the decider\n \u003ccode\u003eattr\u003c/code\u003e: The data it needs\n \u003ccode\u003ebranch\u003c/code\u003e: The key of that leads to a branch\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "Decider",
          "package": "hinduce-classifier-decisiontree",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#Decider",
          "type": "class"
        },
        "index": {
          "description": "decide defines the type and semantics of split For example the split attr is created by DecideOrd For every possible value of type branch an actual tree branch may be created Allowing many distinct values in branch is bad idea Too many of these may have little predictive value and exhaust the training database more quickly decider The representation of the decider attr The data it needs branch The key of that leads to branch",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "Decider",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Decider",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#t:Decider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DTreeAlgebra",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DTreeAlgebra",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DTreeAlgebra",
          "package": "hinduce-classifier-decisiontree",
          "partial": "DTree Algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:DTreeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideOrd",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DecideOrd t",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DecideOrd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideOrd",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Decide Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:DecideOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideSet",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DecideSet [t]",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DecideSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "DecideSet",
          "normalized": "DecideSet[a]",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Decide Set",
          "signature": "DecideSet[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:DecideSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "Leaf",
          "package": "hinduce-classifier-decisiontree",
          "signature": "Leaf",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "Leaf",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "Node",
          "package": "hinduce-classifier-decisiontree",
          "signature": "Node",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "Node",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "autoDeciders",
          "package": "hinduce-classifier-decisiontree",
          "signature": "[attr] -\u003e [decider]",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#autoDeciders",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "autoDeciders",
          "normalized": "[a]-\u003e[b]",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Deciders",
          "signature": "[attr]-\u003e[decider]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:autoDeciders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eavgF a b = (a+b) / 2\u003c/code\u003e, to be used with genOrdsAvg\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "avgF",
          "package": "hinduce-classifier-decisiontree",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#avgF",
          "type": "function"
        },
        "index": {
          "description": "avgF to be used with genOrdsAvg",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "avgF",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hinduce-classifier-decisiontree",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:avgF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eavgI a b = (a+b) \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e 2\u003c/code\u003e, to be used with genOrdsAvg\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "avgI",
          "package": "hinduce-classifier-decisiontree",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#avgI",
          "type": "function"
        },
        "index": {
          "description": "avgI div to be used with genOrdsAvg",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "avgI",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hinduce-classifier-decisiontree",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:avgI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "buildDTree",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DeciderGenerator attr decider -\u003e (x -\u003e attr) -\u003e (x -\u003e label) -\u003e [x] -\u003e DTree decider branch label",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#buildDTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "buildDTree",
          "normalized": "DeciderGenerator a b-\u003e(c-\u003ea)-\u003e(c-\u003ed)-\u003e[c]-\u003eDTree b e d",
          "package": "hinduce-classifier-decisiontree",
          "partial": "DTree",
          "signature": "DeciderGenerator attr decider-\u003e(x-\u003eattr)-\u003e(x-\u003elabel)-\u003e[x]-\u003eDTree decider branch label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:buildDTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "dChildren",
          "package": "hinduce-classifier-decisiontree",
          "signature": "[(branch, DTree decider branch label)]",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "dChildren",
          "normalized": "[(a,DTree b a c)]",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Children",
          "signature": "[(branch,DTree decider branch label)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:dChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "dDecider",
          "package": "hinduce-classifier-decisiontree",
          "signature": "decider",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "dDecider",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Decider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:dDecider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "dLabel",
          "package": "hinduce-classifier-decisiontree",
          "signature": "label",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "dLabel",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:dLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistinguish values of type \u003ccode\u003eattr\u003c/code\u003e using \u003ccode\u003edecider\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "decide",
          "package": "hinduce-classifier-decisiontree",
          "signature": "decider -\u003e attr -\u003e branch",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#decide",
          "type": "method"
        },
        "index": {
          "description": "Distinguish values of type attr using decider",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "decide",
          "normalized": "a-\u003eb-\u003ec",
          "package": "hinduce-classifier-decisiontree",
          "signature": "decider-\u003eattr-\u003ebranch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:decide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "fleaf",
          "package": "hinduce-classifier-decisiontree",
          "signature": "label -\u003e a",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "fleaf",
          "normalized": "a-\u003eb",
          "package": "hinduce-classifier-decisiontree",
          "signature": "label-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:fleaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "fnode",
          "package": "hinduce-classifier-decisiontree",
          "signature": "decider -\u003e [(branch, a)] -\u003e a",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#DTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "fnode",
          "normalized": "a-\u003e[(b,c)]-\u003ec",
          "package": "hinduce-classifier-decisiontree",
          "signature": "decider-\u003e[(branch,a)]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:fnode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efold on a DTree\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "foldD",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DTreeAlgebra dec branch label a -\u003e DTree dec branch label -\u003e a",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#foldD",
          "type": "function"
        },
        "index": {
          "description": "fold on DTree",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "foldD",
          "normalized": "DTreeAlgebra a b c d-\u003eDTree a b c-\u003ed",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DTreeAlgebra dec branch label a-\u003eDTree dec branch label-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:foldD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genMany",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DeciderGenerator attr decider -\u003e DeciderGenerator [attr] (Ixd decider)",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#genMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genMany",
          "normalized": "DeciderGenerator a b-\u003eDeciderGenerator[a](Ixd b)",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Many",
          "signature": "DeciderGenerator attr decider-\u003eDeciderGenerator[attr](Ixd decider)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:genMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecider generator implementation for any ordered data; considers all sensible \u003ccode\u003e(\u003c= pivot)\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genOrds",
          "package": "hinduce-classifier-decisiontree",
          "signature": "[attr] -\u003e [DecideOrd attr]",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#genOrds",
          "type": "function"
        },
        "index": {
          "description": "Decider generator implementation for any ordered data considers all sensible pivot",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genOrds",
          "normalized": "[a]-\u003e[DecideOrd a]",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Ords",
          "signature": "[attr]-\u003e[DecideOrd attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:genOrds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecider generator for any ordered data; considers all possible \u003ccode\u003e(\u003c= pivot)\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genOrdsAvg",
          "package": "hinduce-classifier-decisiontree",
          "signature": "(attr -\u003e attr -\u003e attr) -\u003e [attr] -\u003e [DecideOrd attr]",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#genOrdsAvg",
          "type": "function"
        },
        "index": {
          "description": "Decider generator for any ordered data considers all possible pivot",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genOrdsAvg",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[DecideOrd a]",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Ords Avg",
          "signature": "(attr-\u003eattr-\u003eattr)-\u003e[attr]-\u003e[DecideOrd attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:genOrdsAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genPair",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DeciderGenerator attra decidera -\u003e DeciderGenerator attrb deciderb -\u003e DeciderGenerator (attra, attrb) (Either decidera deciderb)",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#genPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "genPair",
          "normalized": "DeciderGenerator a b-\u003eDeciderGenerator c d-\u003eDeciderGenerator(a,c)(Either b d)",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Pair",
          "signature": "DeciderGenerator attra decidera-\u003eDeciderGenerator attrb deciderb-\u003eDeciderGenerator(attra,attrb)(Either decidera deciderb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:genPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a decision tree to Graphviz Dot format.\n\u003c/p\u003e",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "toDot",
          "package": "hinduce-classifier-decisiontree",
          "signature": "DTree decider branch label -\u003e String",
          "source": "src/Data-HInduce-Classifier-DecisionTree.html#toDot",
          "type": "function"
        },
        "index": {
          "description": "Render decision tree to Graphviz Dot format",
          "hierarchy": "Data HInduce Classifier DecisionTree",
          "module": "Data.HInduce.Classifier.DecisionTree",
          "name": "toDot",
          "normalized": "DTree a b c-\u003eString",
          "package": "hinduce-classifier-decisiontree",
          "partial": "Dot",
          "signature": "DTree decider branch label-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-classifier-decisiontree/docs/Data-HInduce-Classifier-DecisionTree.html#v:toDot"
      }
    }
  ]
]