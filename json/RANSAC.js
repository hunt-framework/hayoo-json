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
        "word": "RANSAC"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe RANdom SAmple Consensus (RANSAC) algorithm for estimating the\n parameters of a mathematical model from a data set. See\n \u003ca\u003ehttp://en.wikipedia.org/wiki/RANSAC\u003c/a\u003e for more information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Ransac",
          "name": "Ransac",
          "package": "RANSAC",
          "source": "src/Numeric-Ransac.html",
          "type": "module"
        },
        "index": {
          "description": "The RANdom SAmple Consensus RANSAC algorithm for estimating the parameters of mathematical model from data set See http en.wikipedia.org wiki RANSAC for more information",
          "hierarchy": "Numeric Ransac",
          "module": "Numeric.Ransac",
          "name": "Ransac",
          "package": "RANSAC",
          "partial": "Ransac",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RANSAC/docs/Numeric-Ransac.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eransac iter sampleSize agreePct fit residual goodFit pts\u003c/code\u003e draws\n \u003ccode\u003eiter\u003c/code\u003e samples of size \u003ccode\u003esampleSize\u003c/code\u003e from \u003ccode\u003epts\u003c/code\u003e. The \u003ccode\u003efit\u003c/code\u003e function\n is used to produce a model from each of these samples. The elements\n of \u003ccode\u003epts\u003c/code\u003e whose residuals pass the \u003ccode\u003egoodFit\u003c/code\u003e predicate with respect\n to this model are identified as \u003cem\u003einliers\u003c/em\u003e, and used to update the\n model. The model for which the size of the inliers set is at least\n \u003ccode\u003eagreePct\u003c/code\u003e percent of the entire data set and whose error over all\n points is minimal among all sampled models is returned. If no\n acceptable model is found (i.e. no model whose inliers were at\n least \u003ccode\u003eagreePct\u003c/code\u003e percent of the entire data set), \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Numeric.Ransac",
          "name": "ransac",
          "package": "RANSAC",
          "signature": "Int -\u003e Int -\u003e Float -\u003e (v a -\u003e Maybe c) -\u003e (c -\u003e a -\u003e d) -\u003e (d -\u003e Bool) -\u003e v a -\u003e IO (Maybe (c, v a))",
          "source": "src/Numeric-Ransac.html#ransac",
          "type": "function"
        },
        "index": {
          "description": "ransac iter sampleSize agreePct fit residual goodFit pts draws iter samples of size sampleSize from pts The fit function is used to produce model from each of these samples The elements of pts whose residuals pass the goodFit predicate with respect to this model are identified as inliers and used to update the model The model for which the size of the inliers set is at least agreePct percent of the entire data set and whose error over all points is minimal among all sampled models is returned If no acceptable model is found i.e no model whose inliers were at least agreePct percent of the entire data set Nothing is returned",
          "hierarchy": "Numeric Ransac",
          "module": "Numeric.Ransac",
          "name": "ransac",
          "normalized": "Int-\u003eInt-\u003eFloat-\u003e(a b-\u003eMaybe c)-\u003e(c-\u003eb-\u003ed)-\u003e(d-\u003eBool)-\u003ea b-\u003eIO(Maybe(c,a b))",
          "package": "RANSAC",
          "signature": "Int-\u003eInt-\u003eFloat-\u003e(v a-\u003eMaybe c)-\u003e(c-\u003ea-\u003ed)-\u003e(d-\u003eBool)-\u003ev a-\u003eIO(Maybe(c,v a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RANSAC/docs/Numeric-Ransac.html#v:ransac"
      }
    }
  ]
]