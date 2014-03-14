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
        "word": "condorcet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Condorcet",
          "name": "Condorcet",
          "package": "condorcet",
          "source": "src/Condorcet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Condorcet",
          "module": "Condorcet",
          "name": "Condorcet",
          "package": "condorcet",
          "partial": "Condorcet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/condorcet/docs/Condorcet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBallots are a ranking of candidates.\n\u003c/p\u003e\u003cp\u003eBallots are lists, where each element is a list of candidates the rank\nthe same.  Earlier entries in the ballot list are ranked higher.\n\u003c/p\u003e\u003cp\u003eE.g., this ballot:\n\u003c/p\u003e\u003cpre\u003e [ [1,3], [4], [2] ]\n\u003c/pre\u003e\u003cp\u003eMeans that 1 and 3 are tied for first, outranking 4, and everyone beats 2.\n\u003c/p\u003e",
          "module": "Condorcet",
          "name": "Ballot",
          "package": "condorcet",
          "source": "src/Condorcet.html#Ballot",
          "type": "type"
        },
        "index": {
          "description": "Ballots are ranking of candidates Ballots are lists where each element is list of candidates the rank the same Earlier entries in the ballot list are ranked higher E.g this ballot Means that and are tied for first outranking and everyone beats",
          "hierarchy": "Condorcet",
          "module": "Condorcet",
          "name": "Ballot",
          "package": "condorcet",
          "partial": "Ballot",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/condorcet/docs/Condorcet.html#t:Ballot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCandidates are represented as integers.\n\u003c/p\u003e",
          "module": "Condorcet",
          "name": "Candidate",
          "package": "condorcet",
          "source": "src/Condorcet.html#Candidate",
          "type": "type"
        },
        "index": {
          "description": "Candidates are represented as integers",
          "hierarchy": "Condorcet",
          "module": "Condorcet",
          "name": "Candidate",
          "package": "condorcet",
          "partial": "Candidate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/condorcet/docs/Condorcet.html#t:Candidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e runs the process, taking a list of \u003ccode\u003e\u003ca\u003eBallot\u003c/a\u003e\u003c/code\u003es and returning a\n list of winning candidates.\n\u003c/p\u003e",
          "module": "Condorcet",
          "name": "run",
          "package": "condorcet",
          "signature": "[Ballot]-\u003e [Candidate]",
          "type": "function"
        },
        "index": {
          "description": "run runs the process taking list of Ballot and returning list of winning candidates",
          "hierarchy": "Condorcet",
          "module": "Condorcet",
          "name": "run",
          "normalized": "[Ballot]-\u003e[Candidate]",
          "package": "condorcet",
          "signature": "[Ballot]-\u003e[Candidate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/condorcet/docs/Condorcet.html#v:run"
      }
    }
  ]
]