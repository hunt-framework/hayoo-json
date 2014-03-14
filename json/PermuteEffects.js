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
        "word": "PermuteEffects"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Permute",
          "name": "Permute",
          "package": "PermuteEffects",
          "source": "src/Control-Permute.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Permute",
          "module": "Control.Permute",
          "name": "Permute",
          "package": "PermuteEffects",
          "partial": "Permute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PermuteEffects/docs/Control-Permute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chain of effectful \u003ccode\u003ef\u003c/code\u003e-computations with composite result \u003ccode\u003ea\u003c/code\u003e.\n Individual computations (lifted into \u003ccode\u003eEffects\u003c/code\u003e using \u003ccode\u003e\u003ca\u003e*.\u003c/a\u003e\u003c/code\u003e below) have their\n own result types, which fit together in standard \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e fashion.\n Although these result types are lost in the composite type, the\n computations can still be moved around within the list (see \u003ccode\u003eswap\u003c/code\u003e and\n \u003ccode\u003efirsts\u003c/code\u003e in the source code for examples). This allows their permutations\n to be computed.\n\u003c/p\u003e",
          "module": "Control.Permute",
          "name": "Effects",
          "package": "PermuteEffects",
          "source": "src/Control-Permute.html#Effects",
          "type": "data"
        },
        "index": {
          "description": "chain of effectful computations with composite result Individual computations lifted into Effects using below have their own result types which fit together in standard Applicative fashion Although these result types are lost in the composite type the computations can still be moved around within the list see swap and firsts in the source code for examples This allows their permutations to be computed",
          "hierarchy": "Control Permute",
          "module": "Control.Permute",
          "name": "Effects",
          "package": "PermuteEffects",
          "partial": "Effects",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PermuteEffects/docs/Control-Permute.html#t:Effects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow a computation to be occur so many times in each permutation.\n\u003c/p\u003e",
          "module": "Control.Permute",
          "name": "(*.)",
          "package": "PermuteEffects",
          "signature": "Replicate a b -\u003e f a -\u003e Effects f b",
          "source": "src/Control-Permute.html#%2A.",
          "type": "function"
        },
        "index": {
          "description": "Allow computation to be occur so many times in each permutation",
          "hierarchy": "Control Permute",
          "module": "Control.Permute",
          "name": "(*.) *.",
          "normalized": "Replicate a b-\u003ec a-\u003eEffects c b",
          "package": "PermuteEffects",
          "signature": "Replicate a b-\u003ef a-\u003eEffects f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PermuteEffects/docs/Control-Permute.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a tree (using \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e for branching) of all permutations of the\n computations. The tree shape allows permutations to share common prefixes.\n This allows clever computations to quickly prune away uninteresting\n branches of permutations.\n\u003c/p\u003e",
          "module": "Control.Permute",
          "name": "perms",
          "package": "PermuteEffects",
          "signature": "Effects f a -\u003e f a",
          "source": "src/Control-Permute.html#perms",
          "type": "function"
        },
        "index": {
          "description": "Build tree using for branching of all permutations of the computations The tree shape allows permutations to share common prefixes This allows clever computations to quickly prune away uninteresting branches of permutations",
          "hierarchy": "Control Permute",
          "module": "Control.Permute",
          "name": "perms",
          "normalized": "Effects a b-\u003ea b",
          "package": "PermuteEffects",
          "signature": "Effects f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PermuteEffects/docs/Control-Permute.html#v:perms"
      }
    }
  ]
]