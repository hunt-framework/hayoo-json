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
        "word": "multiset-comb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient combinatorial algorithms over multisets, including\n   generating all permutations, partitions, subsets, cycles, and\n   other combinatorial structures based on multisets.  Note that an\n   \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance on the elements is \u003cem\u003enot\u003c/em\u003e required; the\n   algorithms are careful to keep track of which things are (by\n   construction) equal to which other things, so equality testing is\n   not needed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "Multiset",
          "package": "multiset-comb",
          "source": "src/Math-Combinatorics-Multiset.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient combinatorial algorithms over multisets including generating all permutations partitions subsets cycles and other combinatorial structures based on multisets Note that an Eq or Ord instance on the elements is not required the algorithms are careful to keep track of which things are by construction equal to which other things so equality testing is not needed",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "Multiset",
          "package": "multiset-comb",
          "partial": "Multiset",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Combinatorics.Multiset",
          "name": "Count",
          "package": "multiset-comb",
          "source": "src/Math-Combinatorics-Multiset.html#Count",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "Count",
          "package": "multiset-comb",
          "partial": "Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#t:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multiset is represented as a list of (element, count) pairs.\n   We maintain the invariants that the counts are always positive,\n   and no element ever appears more than once.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "Multiset",
          "package": "multiset-comb",
          "source": "src/Math-Combinatorics-Multiset.html#Multiset",
          "type": "newtype"
        },
        "index": {
          "description": "multiset is represented as list of element count pairs We maintain the invariants that the counts are always positive and no element ever appears more than once",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "Multiset",
          "package": "multiset-comb",
          "partial": "Multiset",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#t:Multiset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement count vector.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "Vec",
          "package": "multiset-comb",
          "source": "src/Math-Combinatorics-Multiset.html#Vec",
          "type": "type"
        },
        "index": {
          "description": "Element count vector",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "Vec",
          "package": "multiset-comb",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient shorthand for \u003ccode\u003e\u003ca\u003econsMS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "(+:)",
          "package": "multiset-comb",
          "signature": "(a, Count) -\u003e Multiset a -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#%2B%3A",
          "type": "function"
        },
        "index": {
          "description": "convenient shorthand for consMS",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "(+:) +:",
          "normalized": "(a,Count)-\u003eMultiset a-\u003eMultiset a",
          "package": "multiset-comb",
          "signature": "(a,Count)-\u003eMultiset a-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Combinatorics.Multiset",
          "name": "MS",
          "package": "multiset-comb",
          "signature": "MS",
          "source": "src/Math-Combinatorics-Multiset.html#Multiset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "MS",
          "package": "multiset-comb",
          "partial": "MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an element with multiplicity to a multiset.  Precondition:\n   the new element is distinct from all elements already in the\n   multiset.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "consMS",
          "package": "multiset-comb",
          "signature": "(a, Count) -\u003e Multiset a -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#consMS",
          "type": "function"
        },
        "index": {
          "description": "Add an element with multiplicity to multiset Precondition the new element is distinct from all elements already in the multiset",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "consMS",
          "normalized": "(a,Count)-\u003eMultiset a-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "MS",
          "signature": "(a,Count)-\u003eMultiset a-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:consMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all distinct cycles, aka necklaces, with elements taken\n   from a multiset.  See J. Sawada, \"A fast algorithm to generate\n   necklaces with fixed content\", J. Theor. Comput. Sci. 301 (2003)\n   pp. 477-489.\n\u003c/p\u003e\u003cp\u003eGiven the ordering on the elements of the multiset based on their\n   position in the multiset representation (with \"smaller\"\n   elements first), in \u003ccode\u003emap reverse (cycles m)\u003c/code\u003e, each generated\n   cycle is lexicographically smallest among all its cyclic shifts,\n   and furthermore, the cycles occur in reverse lexicographic\n   order. (It's simply more convenient/efficient to generate the\n   cycles reversed in this way, and of course we get the same set of\n   cycles either way.)\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003ecycles (fromList \"aabbc\") ==\n   [\"cabba\",\"bcaba\",\"cbaba\",\"bbcaa\",\"bcbaa\",\"cbbaa\"]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "cycles",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e [[a]]",
          "source": "src/Math-Combinatorics-Multiset.html#cycles",
          "type": "function"
        },
        "index": {
          "description": "Generate all distinct cycles aka necklaces with elements taken from multiset See Sawada fast algorithm to generate necklaces with fixed content Theor Comput Sci pp Given the ordering on the elements of the multiset based on their position in the multiset representation with smaller elements first in map reverse cycles each generated cycle is lexicographically smallest among all its cyclic shifts and furthermore the cycles occur in reverse lexicographic order It simply more convenient efficient to generate the cycles reversed in this way and of course we get the same set of cycles either way For example cycles fromList aabbc cabba bcaba cbaba bbcaa bcbaa cbbaa",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "cycles",
          "normalized": "Multiset a-\u003e[[a]]",
          "package": "multiset-comb",
          "signature": "Multiset a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:cycles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm the disjoint union of two multisets; i.e. we assume the two\n   multisets share no elements in common.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "disjUnion",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e Multiset a -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#disjUnion",
          "type": "function"
        },
        "index": {
          "description": "Form the disjoint union of two multisets i.e we assume the two multisets share no elements in common",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "disjUnion",
          "normalized": "Multiset a-\u003eMultiset a-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "Union",
          "signature": "Multiset a-\u003eMultiset a-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:disjUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm the disjoint union of a collection of multisets.  We assume\n   that the multisets all have distinct elements.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "disjUnions",
          "package": "multiset-comb",
          "signature": "[Multiset a] -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#disjUnions",
          "type": "function"
        },
        "index": {
          "description": "Form the disjoint union of collection of multisets We assume that the multisets all have distinct elements",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "disjUnions",
          "normalized": "[Multiset a]-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "Unions",
          "signature": "[Multiset a]-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:disjUnions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multiset with no values in it.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "emptyMS",
          "package": "multiset-comb",
          "signature": "Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#emptyMS",
          "type": "function"
        },
        "index": {
          "description": "multiset with no values in it",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "emptyMS",
          "package": "multiset-comb",
          "partial": "MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:emptyMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eMultiset\u003c/a\u003e\u003c/code\u003e from a list of (element, count) pairs.\n   Precondition: the counts must all be positive, and there must not\n   be any duplicate elements.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromCounts",
          "package": "multiset-comb",
          "signature": "[(a, Count)] -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#fromCounts",
          "type": "function"
        },
        "index": {
          "description": "Construct Multiset from list of element count pairs Precondition the counts must all be positive and there must not be any duplicate elements",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromCounts",
          "normalized": "[(a,Count)]-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "Counts",
          "signature": "[(a,Count)]-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:fromCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a multiset with one copy of each element from a list of\n   distinct elements.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromDistinctList",
          "package": "multiset-comb",
          "signature": "[a] -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#fromDistinctList",
          "type": "function"
        },
        "index": {
          "description": "Make multiset with one copy of each element from list of distinct elements",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromDistinctList",
          "normalized": "[a]-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "Distinct List",
          "signature": "[a]-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:fromDistinctList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently convert a list to a multiset, given an \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance\n   for the elements.  This method is provided just for convenience.\n   you can also use \u003ccode\u003e\u003ca\u003efromListEq\u003c/a\u003e\u003c/code\u003e with only an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance, or\n   construct \u003ccode\u003e\u003ca\u003eMultiset\u003c/a\u003e\u003c/code\u003es directly using \u003ccode\u003e\u003ca\u003efromCounts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromList",
          "package": "multiset-comb",
          "signature": "[a] -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Efficiently convert list to multiset given an Ord instance for the elements This method is provided just for convenience you can also use fromListEq with only an Eq instance or construct Multiset directly using fromCounts",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromList",
          "normalized": "[a]-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "List",
          "signature": "[a]-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a multiset, given an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance for the\n   elements.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromListEq",
          "package": "multiset-comb",
          "signature": "[a] -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#fromListEq",
          "type": "function"
        },
        "index": {
          "description": "Convert list to multiset given an Eq instance for the elements",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "fromListEq",
          "normalized": "[a]-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "List Eq",
          "signature": "[a]-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:fromListEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract just the element counts from a multiset, forgetting the\n   elements.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "getCounts",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e [Count]",
          "source": "src/Math-Combinatorics-Multiset.html#getCounts",
          "type": "function"
        },
        "index": {
          "description": "Extract just the element counts from multiset forgetting the elements",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "getCounts",
          "normalized": "Multiset a-\u003e[Count]",
          "package": "multiset-comb",
          "partial": "Counts",
          "signature": "Multiset a-\u003e[Count]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:getCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all size-k submultisets.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "kSubsets",
          "package": "multiset-comb",
          "signature": "Count -\u003e Multiset a -\u003e [Multiset a]",
          "source": "src/Math-Combinatorics-Multiset.html#kSubsets",
          "type": "function"
        },
        "index": {
          "description": "Generate all size-k submultisets",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "kSubsets",
          "normalized": "Count-\u003eMultiset a-\u003e[Multiset a]",
          "package": "multiset-comb",
          "partial": "Subsets",
          "signature": "Count-\u003eMultiset a-\u003e[Multiset a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:kSubsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently generate all distinct multiset partitions.  Note that\n   each partition is represented as a multiset of parts (each of\n   which is a multiset) in order to properly reflect the fact that\n   some parts may occur multiple times.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "partitions",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e [Multiset (Multiset a)]",
          "source": "src/Math-Combinatorics-Multiset.html#partitions",
          "type": "function"
        },
        "index": {
          "description": "Efficiently generate all distinct multiset partitions Note that each partition is represented as multiset of parts each of which is multiset in order to properly reflect the fact that some parts may occur multiple times",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "partitions",
          "normalized": "Multiset a-\u003e[Multiset(Multiset a)]",
          "package": "multiset-comb",
          "signature": "Multiset a-\u003e[Multiset(Multiset a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:partitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all the distinct permutations of the elements of a\n   multiset.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003epermutations (fromList \"abb\") ==\n   [\"abb\",\"bba\",\"bab\"]\u003c/code\u003e, whereas \u003ccode\u003eData.List.permutations\n   \"abb\" == [\"abb\",\"bab\",\"bba\",\"bba\",\"bab\",\"abb\"]\u003c/code\u003e.\n   This function is equivalent to, but \u003cem\u003emuch\u003c/em\u003e more efficient than,\n   \u003ccode\u003enub . Data.List.permutations\u003c/code\u003e, and even works when the elements\n   have no \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eNote that this is a specialized version of \u003ccode\u003e\u003ca\u003epermutationsRLE\u003c/a\u003e\u003c/code\u003e,\n   where each run has been expanded via \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "permutations",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e [[a]]",
          "source": "src/Math-Combinatorics-Multiset.html#permutations",
          "type": "function"
        },
        "index": {
          "description": "List all the distinct permutations of the elements of multiset For example permutations fromList abb abb bba bab whereas Data.List.permutations abb abb bab bba bba bab abb This function is equivalent to but much more efficient than nub Data.List.permutations and even works when the elements have no Eq instance Note that this is specialized version of permutationsRLE where each run has been expanded via replicate",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "permutations",
          "normalized": "Multiset a-\u003e[[a]]",
          "package": "multiset-comb",
          "signature": "Multiset a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:permutations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all the distinct permutations of the elements of a multiset,\n   with each permutation run-length encoded. (Note that the\n   run-length encoding is a natural byproduct of the algorithm used,\n   not a separate postprocessing step.)\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003epermutationsRLE [(\u003ccode\u003ea\u003c/code\u003e,1), (\u003ccode\u003eb\u003c/code\u003e,2)] ==\n   [[(\u003ccode\u003ea\u003c/code\u003e,1),(\u003ccode\u003eb\u003c/code\u003e,2)],[(\u003ccode\u003eb\u003c/code\u003e,2),(\u003ccode\u003ea\u003c/code\u003e,1)],[(\u003ccode\u003eb\u003c/code\u003e,1),(\u003ccode\u003ea\u003c/code\u003e,1),(\u003ccode\u003eb\u003c/code\u003e,1)]]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(Note that although the output type is newtype-equivalent to\n   \u003ccode\u003e[Multiset a]\u003c/code\u003e, we don't call it that since the output may\n   violate the \u003ccode\u003e\u003ca\u003eMultiset\u003c/a\u003e\u003c/code\u003e invariant that no element should appear\n   more than once.  And indeed, morally this function does not\n   output multisets at all.)\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "permutationsRLE",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e [[(a, Count)]]",
          "source": "src/Math-Combinatorics-Multiset.html#permutationsRLE",
          "type": "function"
        },
        "index": {
          "description": "List all the distinct permutations of the elements of multiset with each permutation run-length encoded Note that the run-length encoding is natural byproduct of the algorithm used not separate postprocessing step For example permutationsRLE Note that although the output type is newtype-equivalent to Multiset we don call it that since the output may violate the Multiset invariant that no element should appear more than once And indeed morally this function does not output multisets at all",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "permutationsRLE",
          "normalized": "Multiset a-\u003e[[(a,Count)]]",
          "package": "multiset-comb",
          "partial": "RLE",
          "signature": "Multiset a-\u003e[[(a,Count)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:permutationsRLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a multiset of lists, and select one element from each list\n   in every possible combination to form a list of multisets.  We\n   assume that all the list elements are distinct.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "sequenceMS",
          "package": "multiset-comb",
          "signature": "Multiset [a] -\u003e [Multiset a]",
          "source": "src/Math-Combinatorics-Multiset.html#sequenceMS",
          "type": "function"
        },
        "index": {
          "description": "Take multiset of lists and select one element from each list in every possible combination to form list of multisets We assume that all the list elements are distinct",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "sequenceMS",
          "normalized": "Multiset[a]-\u003e[Multiset a]",
          "package": "multiset-comb",
          "partial": "MS",
          "signature": "Multiset[a]-\u003e[Multiset a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:sequenceMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a multiset with only a single value in it.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "singletonMS",
          "package": "multiset-comb",
          "signature": "a -\u003e Multiset a",
          "source": "src/Math-Combinatorics-Multiset.html#singletonMS",
          "type": "function"
        },
        "index": {
          "description": "Create multiset with only single value in it",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "singletonMS",
          "normalized": "a-\u003eMultiset a",
          "package": "multiset-comb",
          "partial": "MS",
          "signature": "a-\u003eMultiset a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:singletonMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the total size of a multiset.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "size",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e Int",
          "source": "src/Math-Combinatorics-Multiset.html#size",
          "type": "function"
        },
        "index": {
          "description": "Compute the total size of multiset",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "size",
          "normalized": "Multiset a-\u003eInt",
          "package": "multiset-comb",
          "signature": "Multiset a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all splittings of a multiset into two submultisets,\n   i.e. all size-two partitions.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "splits",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e [(Multiset a, Multiset a)]",
          "source": "src/Math-Combinatorics-Multiset.html#splits",
          "type": "function"
        },
        "index": {
          "description": "Generate all splittings of multiset into two submultisets i.e all size-two partitions",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "splits",
          "normalized": "Multiset a-\u003e[(Multiset a,Multiset a)]",
          "package": "multiset-comb",
          "signature": "Multiset a-\u003e[(Multiset a,Multiset a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:splits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Combinatorics.Multiset",
          "name": "toCounts",
          "package": "multiset-comb",
          "signature": "[(a, Count)]",
          "source": "src/Math-Combinatorics-Multiset.html#Multiset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "toCounts",
          "normalized": "[(a,Count)]",
          "package": "multiset-comb",
          "partial": "Counts",
          "signature": "[(a,Count)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:toCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a multiset to a list.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "toList",
          "package": "multiset-comb",
          "signature": "Multiset a -\u003e [a]",
          "source": "src/Math-Combinatorics-Multiset.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert multiset to list",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "toList",
          "normalized": "Multiset a-\u003e[a]",
          "package": "multiset-comb",
          "partial": "List",
          "signature": "Multiset a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all vector partitions, representing each partition as a\n   multiset of vectors.\n\u003c/p\u003e\u003cp\u003eThis code is a slight generalization of the code published in\n\u003c/p\u003e\u003cp\u003eBrent Yorgey. \"Generating Multiset Partitions\". In: The\n     Monad.Reader, Issue 8, September 2007.\n     \u003ca\u003ehttp://www.haskell.org/sitewiki/images/d/dd/TMR-Issue8.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSee that article for a detailed discussion of the code and how it works.\n\u003c/p\u003e",
          "module": "Math.Combinatorics.Multiset",
          "name": "vPartitions",
          "package": "multiset-comb",
          "signature": "Vec -\u003e [Multiset Vec]",
          "source": "src/Math-Combinatorics-Multiset.html#vPartitions",
          "type": "function"
        },
        "index": {
          "description": "Generate all vector partitions representing each partition as multiset of vectors This code is slight generalization of the code published in Brent Yorgey Generating Multiset Partitions In The Monad.Reader Issue September http www.haskell.org sitewiki images dd TMR-Issue8.pdf See that article for detailed discussion of the code and how it works",
          "hierarchy": "Math Combinatorics Multiset",
          "module": "Math.Combinatorics.Multiset",
          "name": "vPartitions",
          "normalized": "Vec-\u003e[Multiset Vec]",
          "package": "multiset-comb",
          "partial": "Partitions",
          "signature": "Vec-\u003e[Multiset Vec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset-comb/docs/Math-Combinatorics-Multiset.html#v:vPartitions"
      }
    }
  ]
]