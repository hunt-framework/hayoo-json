[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast search of lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values. Breaking,\n splitting and replacing using a deterministic finite automaton.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lazy-Search-DFA.html",
        "fct-type": "module",
        "title": "DFA"
      },
      "index": {
        "description": "Fast search of lazy ByteString values Breaking splitting and replacing using deterministic finite automaton",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "DFA",
        "normalized": "",
        "package": "stringsearch",
        "partial": "DFA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:breakAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e behind the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. An empty second component means that either the pattern\n   does not occur in the target or the first occurrence of pattern is at\n   the very end of target. If you need to discriminate between those cases,\n   use breakFindAfter.\n   If the pattern is empty, the first component is empty.\n   For a non-empty pattern, the first component is generated lazily,\n   thus the first parts of it can be available before the pattern has\n   been found or determined to be absent.\n \u003ccode\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakAfter"
      },
      "index": {
        "description": "breakAfter pattern target splits target behind the first occurrence of pattern An empty second component means that either the pattern does not occur in the target or the first occurrence of pattern is at the very end of target If you need to discriminate between those cases use breakFindAfter If the pattern is empty the first component is empty For non-empty pattern the first component is generated lazily thus the first parts of it can be available before the pattern has been found or determined to be absent uncurry append breakAfter pattern id",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "breakAfter",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "After",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:breakFindAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakFindAfter\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e does the same as \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e but additionally indicates\n   whether the pattern is present in the target.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakFindAfter\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pat\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ((ByteString, ByteString), Bool)",
        "fct-type": "function",
        "title": "breakFindAfter"
      },
      "index": {
        "description": "breakFindAfter does the same as breakAfter but additionally indicates whether the pattern is present in the target fst breakFindAfter pat breakAfter pat",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "breakFindAfter",
        "normalized": "ByteString-\u003eByteString-\u003e((ByteString,ByteString),Bool)",
        "package": "stringsearch",
        "partial": "Find After",
        "signature": "ByteString-\u003eByteString-\u003e((ByteString,ByteString),Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:breakOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. If the pattern does not occur in the target, the\n   second component of the result is empty, otherwise it starts with\n   \u003ccode\u003epattern\u003c/code\u003e. If the pattern is empty, the first component is empty.\n   For a non-empty pattern, the first component is generated lazily,\n   thus the first parts of it can be available before the pattern has\n   been found or determined to be absent.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakOn"
      },
      "index": {
        "description": "breakOn pattern target splits target at the first occurrence of pattern If the pattern does not occur in the target the second component of the result is empty otherwise it starts with pattern If the pattern is empty the first component is empty For non-empty pattern the first component is generated lazily thus the first parts of it can be available before the pattern has been found or determined to be absent uncurry append breakOn pattern id",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "breakOn",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "On",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "indices finds the starting indices of all possibly overlapping occurrences of the pattern in the target string If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "indices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:nonOverlappingIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all\n   non-overlapping occurrences of the pattern in the target string.\n   It is more efficient than removing indices from the list produced\n   by \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "nonOverlappingIndices"
      },
      "index": {
        "description": "nonOverlappingIndices finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is more efficient than removing indices from the list produced by indices",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "nonOverlappingIndices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "Overlapping Indices",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub text\u003c/code\u003e replaces all (non-overlapping) occurrences of\n   \u003ccode\u003epat\u003c/code\u003e in \u003ccode\u003etext\u003c/code\u003e with \u003ccode\u003esub\u003c/code\u003e. If occurrences of \u003ccode\u003epat\u003c/code\u003e overlap, the first\n   occurrence that does not overlap with a replaced previous occurrence\n   is substituted. Occurrences of \u003ccode\u003epat\u003c/code\u003e arising from a substitution\n   will not be substituted. For example:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"olog\" \"banana\" = \"bologna\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"o\" \"bananana\" = \"bono\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"aab\" \"abaa\" \"aaabb\" = \"aabaab\"\n\u003c/pre\u003e\u003cp\u003eThe result is a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n   which is lazily produced, without copying.\n   Equality of pattern and substitution is not checked, but\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat pat text == text\n\u003c/pre\u003e\u003cp\u003eholds (the internal structure is generally different).\n   If the pattern is empty but not the substitution, the result\n   is equivalent to (were they \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es) \u003ccode\u003ecycle sub\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor non-empty \u003ccode\u003epat\u003c/code\u003e and \u003ccode\u003esub\u003c/code\u003e a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e sub . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub\n\u003c/pre\u003e\u003cp\u003eand analogous relations hold for other types of \u003ccode\u003esub\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e rep-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "replace pat sub text replaces all non-overlapping occurrences of pat in text with sub If occurrences of pat overlap the first occurrence that does not overlap with replaced previous occurrence is substituted Occurrences of pat arising from substitution will not be substituted For example replace ana olog banana bologna replace ana bananana bono replace aab abaa aaabb aabaab The result is lazy ByteString which is lazily produced without copying Equality of pattern and substitution is not checked but replace pat pat text text holds the internal structure is generally different If the pattern is empty but not the substitution the result is equivalent to were they String cycle sub For non-empty pat and sub lazy ByteString concat intersperse sub split pat replace pat sub and analogous relations hold for other types of sub",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "replace",
        "normalized": "ByteString-\u003ea-\u003eByteString-\u003eByteString",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003erep-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e, removing \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty,\n   the result is an infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, if \u003ccode\u003etarget\u003c/code\u003e\n   is empty but not \u003ccode\u003epattern\u003c/code\u003e, the result is an empty list, otherwise\n   the following relations hold (where \u003ccode\u003epatL\u003c/code\u003e is the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n   corresponding to \u003ccode\u003epat\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e patL . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target) ==\n               \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e pattern target) + 1,\n\u003c/pre\u003e\u003cp\u003eno fragment in the result contains an occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "split pattern target splits target at each non-overlapping occurrence of pattern removing pattern If pattern is empty the result is an infinite list of empty ByteString if target is empty but not pattern the result is an empty list otherwise the following relations hold where patL is the lazy ByteString corresponding to pat concat intersperse patL split pat id length split pattern target length nonOverlappingIndices pattern target no fragment in the result contains an occurrence of pattern",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "split",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:splitKeepEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e after each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty, the result is an\n   infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, otherwise the following\n   relations hold:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern = 'id,'\n\u003c/pre\u003e\u003cp\u003eall fragments in the result except possibly the last end with\n   \u003ccode\u003epattern\u003c/code\u003e, no fragment contains more than one occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepEnd"
      },
      "index": {
        "description": "splitKeepEnd pattern target splits target after each non-overlapping occurrence of pattern If pattern is empty the result is an infinite list of empty ByteString otherwise the following relations hold concat splitKeepEnd pattern id all fragments in the result except possibly the last end with pattern no fragment contains more than one occurrence of pattern",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "splitKeepEnd",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep End",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-DFA.html#v:splitKeepFront",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepFront\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e, except that \u003ccode\u003etarget\u003c/code\u003e is split\n   before each occurrence of \u003ccode\u003epattern\u003c/code\u003e and hence all fragments\n   with the possible exception of the first begin with \u003ccode\u003epattern\u003c/code\u003e.\n   No fragment contains more than one non-overlapping occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepFront"
      },
      "index": {
        "description": "splitKeepFront is like splitKeepEnd except that target is split before each occurrence of pattern and hence all fragments with the possible exception of the first begin with pattern No fragment contains more than one non-overlapping occurrence of pattern",
        "hierarchy": "Data ByteString Lazy Search DFA",
        "module": "Data.ByteString.Lazy.Search.DFA",
        "name": "splitKeepFront",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep Front",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-KMP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast search of lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values using the\n Knuth-Morris-Pratt algorithm.\n\u003c/p\u003e\u003cp\u003eA description of the algorithm can be found at\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Knuth-Morris-Pratt_algorithm\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOriginal authors: Justin Bailey (jgbailey at gmail.com) and\n Chris Kuklewicz (haskell at list.mightyreason.com).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.KMP",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lazy-Search-KMP.html",
        "fct-type": "module",
        "title": "KMP"
      },
      "index": {
        "description": "Fast search of lazy ByteString values using the Knuth-Morris-Pratt algorithm description of the algorithm can be found at http en.wikipedia.org wiki Knuth-Morris-Pratt algorithm Original authors Justin Bailey jgbailey at gmail.com and Chris Kuklewicz haskell at list.mightyreason.com",
        "hierarchy": "Data ByteString Lazy Search KMP",
        "module": "Data.ByteString.Lazy.Search.KMP",
        "name": "KMP",
        "normalized": "",
        "package": "stringsearch",
        "partial": "KMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-KMP.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.KMP",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "indices finds the starting indices of all possibly overlapping occurrences of the pattern in the target string If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Lazy Search KMP",
        "module": "Data.ByteString.Lazy.Search.KMP",
        "name": "indices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-KMP.html#v:nonOverlappingIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all\n   non-overlapping occurrences of the pattern in the target string.\n   It is more efficient than removing indices from the list produced\n   by \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.KMP",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "nonOverlappingIndices"
      },
      "index": {
        "description": "nonOverlappingIndices finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is more efficient than removing indices from the list produced by indices",
        "hierarchy": "Data ByteString Lazy Search KMP",
        "module": "Data.ByteString.Lazy.Search.KMP",
        "name": "nonOverlappingIndices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "Overlapping Indices",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-KMP.html#v:strictify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003estrictify\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e transforms a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a strict\n   \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, to make it a suitable pattern for the searching\n   functions.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.KMP",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Lazy-Search-KMP.html#strictify",
        "fct-type": "function",
        "title": "strictify"
      },
      "index": {
        "description": "strictify transforms lazy ByteString into strict ByteString to make it suitable pattern for the searching functions",
        "hierarchy": "Data ByteString Lazy Search KMP",
        "module": "Data.ByteString.Lazy.Search.KMP",
        "name": "strictify",
        "normalized": "ByteString-\u003eByteString",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-KarpRabin.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimultaneous search for multiple patterns in a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n using the Karp-Rabin algorithm.\n\u003c/p\u003e\u003cp\u003eA description of the algorithm for a single pattern can be found at\n \u003ca\u003ehttp://www-igm.univ-mlv.fr/~lecroq/string/node5.html#SECTION0050\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.KarpRabin",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lazy-Search-KarpRabin.html",
        "fct-type": "module",
        "title": "KarpRabin"
      },
      "index": {
        "description": "Simultaneous search for multiple patterns in lazy ByteString using the Karp-Rabin algorithm description of the algorithm for single pattern can be found at http www-igm.univ-mlv.fr lecroq string node5.html SECTION0050",
        "hierarchy": "Data ByteString Lazy Search KarpRabin",
        "module": "Data.ByteString.Lazy.Search.KarpRabin",
        "name": "KarpRabin",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Karp Rabin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search-KarpRabin.html#v:indicesOfAny",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindicesOfAny\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds all occurrences of any of several non-empty strict\n   patterns in a lazy target string. If no non-empty patterns are given,\n   the result is an empty list. Otherwise the result list contains\n   the pairs of all indices where any of the (non-empty) patterns start\n   and the list of all patterns starting at that index, the patterns being\n   represented by their (zero-based) position in the pattern list.\n   Empty patterns are filtered out before processing begins.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search.KarpRabin",
        "fct-package": "stringsearch",
        "fct-signature": "[ByteString]-\u003e ByteString-\u003e [(Int64, [Int])]",
        "fct-type": "function",
        "title": "indicesOfAny"
      },
      "index": {
        "description": "indicesOfAny finds all occurrences of any of several non-empty strict patterns in lazy target string If no non-empty patterns are given the result is an empty list Otherwise the result list contains the pairs of all indices where any of the non-empty patterns start and the list of all patterns starting at that index the patterns being represented by their zero-based position in the pattern list Empty patterns are filtered out before processing begins",
        "hierarchy": "Data ByteString Lazy Search KarpRabin",
        "module": "Data.ByteString.Lazy.Search.KarpRabin",
        "name": "indicesOfAny",
        "normalized": "[ByteString]-\u003eByteString-\u003e[(Int,[Int])]",
        "package": "stringsearch",
        "partial": "Of Any",
        "signature": "[ByteString]-\u003eByteString-\u003e[(Int,[Int])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast overlapping Boyer-Moore search of lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values. Breaking, splitting and replacing\n using the Boyer-Moore algorithm.\n\u003c/p\u003e\u003cp\u003eDescriptions of the algorithm can be found at\n \u003ca\u003ehttp://www-igm.univ-mlv.fr/~lecroq/string/node14.html#SECTION00140\u003c/a\u003e\n and\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Boyer-Moore_string_search_algorithm\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOriginal authors: Daniel Fischer (daniel.is.fischer at googlemail.com) and\n Chris Kuklewicz (haskell at list.mightyreason.com).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lazy-Search.html",
        "fct-type": "module",
        "title": "Search"
      },
      "index": {
        "description": "Fast overlapping Boyer-Moore search of lazy ByteString values Breaking splitting and replacing using the Boyer-Moore algorithm Descriptions of the algorithm can be found at http www-igm.univ-mlv.fr lecroq string node14.html SECTION00140 and http en.wikipedia.org wiki Boyer-Moore string search algorithm Original authors Daniel Fischer daniel.is.fischer at googlemail.com and Chris Kuklewicz haskell at list.mightyreason.com",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "Search",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:breakAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e behind the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. An empty second component means that either the pattern\n   does not occur in the target or the first occurrence of pattern is at\n   the very end of target. If you need to discriminate between those cases,\n   use breakFindAfter.\n   If the pattern is empty, the first component is empty.\n   For a non-empty pattern, the first component is generated lazily,\n   thus the first parts of it can be available before the pattern has\n   been found or determined to be absent.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakAfter"
      },
      "index": {
        "description": "breakAfter pattern target splits target behind the first occurrence of pattern An empty second component means that either the pattern does not occur in the target or the first occurrence of pattern is at the very end of target If you need to discriminate between those cases use breakFindAfter If the pattern is empty the first component is empty For non-empty pattern the first component is generated lazily thus the first parts of it can be available before the pattern has been found or determined to be absent uncurry append breakAfter pattern id",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "breakAfter",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "After",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:breakFindAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakFindAfter\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e does the same as \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e but additionally indicates\n   whether the pattern is present in the target.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakFindAfter\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pat\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ((ByteString, ByteString), Bool)",
        "fct-type": "function",
        "title": "breakFindAfter"
      },
      "index": {
        "description": "breakFindAfter does the same as breakAfter but additionally indicates whether the pattern is present in the target fst breakFindAfter pat breakAfter pat",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "breakFindAfter",
        "normalized": "ByteString-\u003eByteString-\u003e((ByteString,ByteString),Bool)",
        "package": "stringsearch",
        "partial": "Find After",
        "signature": "ByteString-\u003eByteString-\u003e((ByteString,ByteString),Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:breakOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. If the pattern does not occur in the target, the\n   second component of the result is empty, otherwise it starts with\n   \u003ccode\u003epattern\u003c/code\u003e. If the pattern is empty, the first component is empty.\n   For a non-empty pattern, the first component is generated lazily,\n   thus the first parts of it can be available before the pattern has\n   been found or determined to be absent.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakOn"
      },
      "index": {
        "description": "breakOn pattern target splits target at the first occurrence of pattern If the pattern does not occur in the target the second component of the result is empty otherwise it starts with pattern If the pattern is empty the first component is empty For non-empty pattern the first component is generated lazily thus the first parts of it can be available before the pattern has been found or determined to be absent uncurry append breakOn pattern id",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "breakOn",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "On",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "indices finds the starting indices of all possibly overlapping occurrences of the pattern in the target string If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "indices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:nonOverlappingIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all\n   non-overlapping occurrences of the pattern in the target string.\n   It is more efficient than removing indices from the list produced\n   by \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "nonOverlappingIndices"
      },
      "index": {
        "description": "nonOverlappingIndices finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is more efficient than removing indices from the list produced by indices",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "nonOverlappingIndices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "Overlapping Indices",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub text\u003c/code\u003e replaces all (non-overlapping) occurrences of\n   \u003ccode\u003epat\u003c/code\u003e in \u003ccode\u003etext\u003c/code\u003e with \u003ccode\u003esub\u003c/code\u003e. If occurrences of \u003ccode\u003epat\u003c/code\u003e overlap, the first\n   occurrence that does not overlap with a replaced previous occurrence\n   is substituted. Occurrences of \u003ccode\u003epat\u003c/code\u003e arising from a substitution\n   will not be substituted. For example:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"olog\" \"banana\" = \"bologna\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"o\" \"bananana\" = \"bono\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"aab\" \"abaa\" \"aaabb\" = \"aabaab\"\n\u003c/pre\u003e\u003cp\u003eThe result is a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n   which is lazily produced, without copying.\n   Equality of pattern and substitution is not checked, but\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat pat text == text\n\u003c/pre\u003e\u003cp\u003eholds (the internal structure is generally different).\n   If the pattern is empty but not the substitution, the result\n   is equivalent to (were they \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es) \u003ccode\u003ecycle sub\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor non-empty \u003ccode\u003epat\u003c/code\u003e and \u003ccode\u003esub\u003c/code\u003e a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e sub . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub\n\u003c/pre\u003e\u003cp\u003eand analogous relations hold for other types of \u003ccode\u003esub\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e rep-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "replace pat sub text replaces all non-overlapping occurrences of pat in text with sub If occurrences of pat overlap the first occurrence that does not overlap with replaced previous occurrence is substituted Occurrences of pat arising from substitution will not be substituted For example replace ana olog banana bologna replace ana bananana bono replace aab abaa aaabb aabaab The result is lazy ByteString which is lazily produced without copying Equality of pattern and substitution is not checked but replace pat pat text text holds the internal structure is generally different If the pattern is empty but not the substitution the result is equivalent to were they String cycle sub For non-empty pat and sub lazy ByteString concat intersperse sub split pat replace pat sub and analogous relations hold for other types of sub",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "replace",
        "normalized": "ByteString-\u003ea-\u003eByteString-\u003eByteString",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003erep-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e, removing \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty,\n   the result is an infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, if \u003ccode\u003etarget\u003c/code\u003e\n   is empty but not \u003ccode\u003epattern\u003c/code\u003e, the result is an empty list, otherwise\n   the following relations hold (where \u003ccode\u003epatL\u003c/code\u003e is the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n   corresponding to \u003ccode\u003epat\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e patL . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target) ==\n               \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e pattern target) + 1,\n\u003c/pre\u003e\u003cp\u003eno fragment in the result contains an occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "split pattern target splits target at each non-overlapping occurrence of pattern removing pattern If pattern is empty the result is an infinite list of empty ByteString if target is empty but not pattern the result is an empty list otherwise the following relations hold where patL is the lazy ByteString corresponding to pat concat intersperse patL split pat id length split pattern target length nonOverlappingIndices pattern target no fragment in the result contains an occurrence of pattern",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "split",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:splitKeepEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e after each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty, the result is an\n   infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, otherwise the following\n   relations hold:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\n\u003c/pre\u003e\u003cp\u003eall fragments in the result except possibly the last end with\n   \u003ccode\u003epattern\u003c/code\u003e, no fragment contains more than one occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepEnd"
      },
      "index": {
        "description": "splitKeepEnd pattern target splits target after each non-overlapping occurrence of pattern If pattern is empty the result is an infinite list of empty ByteString otherwise the following relations hold concat splitKeepEnd pattern id all fragments in the result except possibly the last end with pattern no fragment contains more than one occurrence of pattern",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "splitKeepEnd",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep End",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:splitKeepFront",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepFront\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e, except that \u003ccode\u003etarget\u003c/code\u003e is split\n   before each occurrence of \u003ccode\u003epattern\u003c/code\u003e and hence all fragments\n   with the possible exception of the first begin with \u003ccode\u003epattern\u003c/code\u003e.\n   No fragment contains more than one non-overlapping occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepFront"
      },
      "index": {
        "description": "splitKeepFront is like splitKeepEnd except that target is split before each occurrence of pattern and hence all fragments with the possible exception of the first begin with pattern No fragment contains more than one non-overlapping occurrence of pattern",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "splitKeepFront",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep Front",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Lazy-Search.html#v:strictify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003estrictify\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e converts a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n   to make it a suitable pattern.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Lazy-Search.html#strictify",
        "fct-type": "function",
        "title": "strictify"
      },
      "index": {
        "description": "strictify converts lazy ByteString to strict ByteString to make it suitable pattern",
        "hierarchy": "Data ByteString Lazy Search",
        "module": "Data.ByteString.Lazy.Search",
        "name": "strictify",
        "normalized": "ByteString-\u003eByteString",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-BoyerMoore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use the new interface instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eFast overlapping Boyer-Moore search of both strict and lazy\n \u003ccode\u003eByteString\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eDescriptions of the algorithm can be found at\n \u003ca\u003ehttp://www-igm.univ-mlv.fr/~lecroq/string/node14.html#SECTION00140\u003c/a\u003e\n and\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Boyer-Moore_string_search_algorithm\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOriginal authors: Daniel Fischer (daniel.is.fischer at googlemail.com) and\n Chris Kuklewicz (haskell at list.mightyreason.com).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Search.BoyerMoore",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Search-BoyerMoore.html",
        "fct-type": "module",
        "title": "BoyerMoore"
      },
      "index": {
        "description": "Deprecated Use the new interface instead Fast overlapping Boyer-Moore search of both strict and lazy ByteString values Descriptions of the algorithm can be found at http www-igm.univ-mlv.fr lecroq string node14.html SECTION00140 and http en.wikipedia.org wiki Boyer-Moore string search algorithm Original authors Daniel Fischer daniel.is.fischer at googlemail.com and Chris Kuklewicz haskell at list.mightyreason.com",
        "hierarchy": "Data ByteString Search BoyerMoore",
        "module": "Data.ByteString.Search.BoyerMoore",
        "name": "BoyerMoore",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Boyer Moore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-BoyerMoore.html#v:matchLL",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchLL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   It is a simple wrapper for \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.BoyerMoore",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "matchLL"
      },
      "index": {
        "description": "matchLL finds the starting indices of all possibly overlapping occurrences of the pattern in the target string It is simple wrapper for indices If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Search BoyerMoore",
        "module": "Data.ByteString.Search.BoyerMoore",
        "name": "matchLL",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "LL",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-BoyerMoore.html#v:matchLS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchLS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   It is a simple wrapper for \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.BoyerMoore",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "matchLS"
      },
      "index": {
        "description": "matchLS finds the starting indices of all possibly overlapping occurrences of the pattern in the target string It is simple wrapper for indices If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Search BoyerMoore",
        "module": "Data.ByteString.Search.BoyerMoore",
        "name": "matchLS",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "LS",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-BoyerMoore.html#v:matchSL",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchSL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   It is an alias for \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.BoyerMoore",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "matchSL"
      },
      "index": {
        "description": "matchSL finds the starting indices of all possibly overlapping occurrences of the pattern in the target string It is an alias for indices If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Search BoyerMoore",
        "module": "Data.ByteString.Search.BoyerMoore",
        "name": "matchSL",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "SL",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-BoyerMoore.html#v:matchSS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchSS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   It is an alias for \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.BoyerMoore",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "matchSS"
      },
      "index": {
        "description": "matchSS finds the starting indices of all possibly overlapping occurrences of the pattern in the target string It is an alias for indices If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Search BoyerMoore",
        "module": "Data.ByteString.Search.BoyerMoore",
        "name": "matchSS",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "SS",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast search of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values. Breaking, splitting and\n replacing using a deterministic finite automaton.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Search-DFA.html",
        "fct-type": "module",
        "title": "DFA"
      },
      "index": {
        "description": "Fast search of strict ByteString values Breaking splitting and replacing using deterministic finite automaton",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "DFA",
        "normalized": "",
        "package": "stringsearch",
        "partial": "DFA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:breakAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e behind the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. An empty second component means that either the pattern\n   does not occur in the target or the first occurrence of pattern is at\n   the very end of target. To discriminate between those cases, use e.g.\n   \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakAfter"
      },
      "index": {
        "description": "breakAfter pattern target splits target behind the first occurrence of pattern An empty second component means that either the pattern does not occur in the target or the first occurrence of pattern is at the very end of target To discriminate between those cases use e.g isSuffixOf uncurry append breakAfter pattern id",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "breakAfter",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "After",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:breakOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. If the pattern does not occur in the target, the\n   second component of the result is empty, otherwise it starts with\n   \u003ccode\u003epattern\u003c/code\u003e. If the pattern is empty, the first component is empty.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakOn"
      },
      "index": {
        "description": "breakOn pattern target splits target at the first occurrence of pattern If the pattern does not occur in the target the second component of the result is empty otherwise it starts with pattern If the pattern is empty the first component is empty uncurry append breakOn pattern id",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "breakOn",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "On",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "indices finds the starting indices of all possibly overlapping occurrences of the pattern in the target string If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "indices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:nonOverlappingIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all\n   non-overlapping occurrences of the pattern in the target string.\n   It is more efficient than removing indices from the list produced\n   by \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "nonOverlappingIndices"
      },
      "index": {
        "description": "nonOverlappingIndices finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is more efficient than removing indices from the list produced by indices",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "nonOverlappingIndices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "Overlapping Indices",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub text\u003c/code\u003e replaces all (non-overlapping) occurrences of\n   \u003ccode\u003epat\u003c/code\u003e in \u003ccode\u003etext\u003c/code\u003e with \u003ccode\u003esub\u003c/code\u003e. If occurrences of \u003ccode\u003epat\u003c/code\u003e overlap, the first\n   occurrence that does not overlap with a replaced previous occurrence\n   is substituted. Occurrences of \u003ccode\u003epat\u003c/code\u003e arising from a substitution\n   will not be substituted. For example:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"olog\" \"banana\" = \"bologna\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"o\" \"bananana\" = \"bono\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"aab\" \"abaa\" \"aaabb\" = \"aabaab\"\n\u003c/pre\u003e\u003cp\u003eThe result is a \u003cem\u003elazy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n   which is lazily produced, without copying.\n   Equality of pattern and substitution is not checked, but\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat pat text == text\n\u003c/pre\u003e\u003cp\u003eholds. If the pattern is empty but not the substitution, the result\n   is equivalent to (were they \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es) \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e sub\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor non-empty \u003ccode\u003epat\u003c/code\u003e and \u003ccode\u003esub\u003c/code\u003e a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e sub . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub\n\u003c/pre\u003e\u003cp\u003eand analogous relations hold for other types of \u003ccode\u003esub\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e rep-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "replace pat sub text replaces all non-overlapping occurrences of pat in text with sub If occurrences of pat overlap the first occurrence that does not overlap with replaced previous occurrence is substituted Occurrences of pat arising from substitution will not be substituted For example replace ana olog banana bologna replace ana bananana bono replace aab abaa aaabb aabaab The result is lazy ByteString which is lazily produced without copying Equality of pattern and substitution is not checked but concat toChunks replace pat pat text text holds If the pattern is empty but not the substitution the result is equivalent to were they String cycle sub For non-empty pat and sub strict ByteString fromChunks intersperse sub split pat replace pat sub and analogous relations hold for other types of sub",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "replace",
        "normalized": "ByteString-\u003ea-\u003eByteString-\u003eByteString",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003erep-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e, removing \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty,\n   the result is an infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, if \u003ccode\u003etarget\u003c/code\u003e\n   is empty but not \u003ccode\u003epattern\u003c/code\u003e, the result is an empty list, otherwise\n   the following relations hold:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e pat . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target) ==\n               \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e pattern target) + 1,\n\u003c/pre\u003e\u003cp\u003eno fragment in the result contains an occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "split pattern target splits target at each non-overlapping occurrence of pattern removing pattern If pattern is empty the result is an infinite list of empty ByteString if target is empty but not pattern the result is an empty list otherwise the following relations hold concat intersperse pat split pat id length split pattern target length nonOverlappingIndices pattern target no fragment in the result contains an occurrence of pattern",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "split",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:splitKeepEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e after each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty, the result is an\n   infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, otherwise the following\n   relations hold:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\n\u003c/pre\u003e\u003cp\u003eall fragments in the result except possibly the last end with\n   \u003ccode\u003epattern\u003c/code\u003e, no fragment contains more than one occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepEnd"
      },
      "index": {
        "description": "splitKeepEnd pattern target splits target after each non-overlapping occurrence of pattern If pattern is empty the result is an infinite list of empty ByteString otherwise the following relations hold concat splitKeepEnd pattern id all fragments in the result except possibly the last end with pattern no fragment contains more than one occurrence of pattern",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "splitKeepEnd",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep End",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-DFA.html#v:splitKeepFront",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepFront\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e, except that \u003ccode\u003etarget\u003c/code\u003e is split\n   before each occurrence of \u003ccode\u003epattern\u003c/code\u003e and hence all fragments\n   with the possible exception of the first begin with \u003ccode\u003epattern\u003c/code\u003e.\n   No fragment contains more than one non-overlapping occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.DFA",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepFront"
      },
      "index": {
        "description": "splitKeepFront is like splitKeepEnd except that target is split before each occurrence of pattern and hence all fragments with the possible exception of the first begin with pattern No fragment contains more than one non-overlapping occurrence of pattern",
        "hierarchy": "Data ByteString Search DFA",
        "module": "Data.ByteString.Search.DFA",
        "name": "splitKeepFront",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep Front",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KMP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast search of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values using the\n Knuth-Morris-Pratt algorithm.\n\u003c/p\u003e\u003cp\u003eA description of the algorithm can be found at\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Knuth-Morris-Pratt_algorithm\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOriginal authors: Justin Bailey (jgbailey at gmail.com) and\n Chris Kuklewicz (haskell at list.mightyreason.com).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Search.KMP",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Search-KMP.html",
        "fct-type": "module",
        "title": "KMP"
      },
      "index": {
        "description": "Fast search of strict ByteString values using the Knuth-Morris-Pratt algorithm description of the algorithm can be found at http en.wikipedia.org wiki Knuth-Morris-Pratt algorithm Original authors Justin Bailey jgbailey at gmail.com and Chris Kuklewicz haskell at list.mightyreason.com",
        "hierarchy": "Data ByteString Search KMP",
        "module": "Data.ByteString.Search.KMP",
        "name": "KMP",
        "normalized": "",
        "package": "stringsearch",
        "partial": "KMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KMP.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.KMP",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "indices finds the starting indices of all possibly overlapping occurrences of the pattern in the target string If the pattern is empty the result is length target",
        "hierarchy": "Data ByteString Search KMP",
        "module": "Data.ByteString.Search.KMP",
        "name": "indices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KMP.html#v:nonOverlappingIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all\n   non-overlapping occurrences of the pattern in the target string.\n   It is more efficient than removing indices from the list produced\n   by \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.KMP",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "nonOverlappingIndices"
      },
      "index": {
        "description": "nonOverlappingIndices finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is more efficient than removing indices from the list produced by indices",
        "hierarchy": "Data ByteString Search KMP",
        "module": "Data.ByteString.Search.KMP",
        "name": "nonOverlappingIndices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "Overlapping Indices",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KarpRabin.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimultaneous search for multiple patterns in a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n using the Karp-Rabin algorithm.\n\u003c/p\u003e\u003cp\u003eA description of the algorithm for a single pattern can be found at\n \u003ca\u003ehttp://www-igm.univ-mlv.fr/~lecroq/string/node5.html#SECTION0050\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Search.KarpRabin",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Search-KarpRabin.html",
        "fct-type": "module",
        "title": "KarpRabin"
      },
      "index": {
        "description": "Simultaneous search for multiple patterns in strict ByteString using the Karp-Rabin algorithm description of the algorithm for single pattern can be found at http www-igm.univ-mlv.fr lecroq string node5.html SECTION0050",
        "hierarchy": "Data ByteString Search KarpRabin",
        "module": "Data.ByteString.Search.KarpRabin",
        "name": "KarpRabin",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Karp Rabin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KarpRabin.html#v:indicesOfAny",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindicesOfAny\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds all occurrences of any of several non-empty patterns\n   in a strict target string. If no non-empty patterns are given,\n   the result is an empty list. Otherwise the result list contains\n   the pairs of all indices where any of the (non-empty) patterns start\n   and the list of all patterns starting at that index, the patterns being\n   represented by their (zero-based) position in the pattern list.\n   Empty patterns are filtered out before processing begins.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.KarpRabin",
        "fct-package": "stringsearch",
        "fct-signature": "[ByteString]-\u003e ByteString-\u003e [(Int, [Int])]",
        "fct-type": "function",
        "title": "indicesOfAny"
      },
      "index": {
        "description": "indicesOfAny finds all occurrences of any of several non-empty patterns in strict target string If no non-empty patterns are given the result is an empty list Otherwise the result list contains the pairs of all indices where any of the non-empty patterns start and the list of all patterns starting at that index the patterns being represented by their zero-based position in the pattern list Empty patterns are filtered out before processing begins",
        "hierarchy": "Data ByteString Search KarpRabin",
        "module": "Data.ByteString.Search.KarpRabin",
        "name": "indicesOfAny",
        "normalized": "[ByteString]-\u003eByteString-\u003e[(Int,[Int])]",
        "package": "stringsearch",
        "partial": "Of Any",
        "signature": "[ByteString]-\u003eByteString-\u003e[(Int,[Int])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KnuthMorrisPratt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use the new interface instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eFast non-overlapping Knuth-Morris-Pratt search of both strict and\n lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eA description of the algorithm can be found at\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Knuth-Morris-Pratt_algorithm\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOriginal authors: Justin Bailey (jgbailey at gmail.com) and\n Chris Kuklewicz (haskell at list.mightyreason.com).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Search.KnuthMorrisPratt",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Search-KnuthMorrisPratt.html",
        "fct-type": "module",
        "title": "KnuthMorrisPratt"
      },
      "index": {
        "description": "Deprecated Use the new interface instead Fast non-overlapping Knuth-Morris-Pratt search of both strict and lazy ByteString values description of the algorithm can be found at http en.wikipedia.org wiki Knuth-Morris-Pratt algorithm Original authors Justin Bailey jgbailey at gmail.com and Chris Kuklewicz haskell at list.mightyreason.com",
        "hierarchy": "Data ByteString Search KnuthMorrisPratt",
        "module": "Data.ByteString.Search.KnuthMorrisPratt",
        "name": "KnuthMorrisPratt",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Knuth Morris Pratt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KnuthMorrisPratt.html#v:matchLL",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchLL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all \u003cem\u003enon-overlapping\u003c/em\u003e occurrences\n   of the pattern in the target string. It is a simple wrapper around\n   \u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e strictifying\n   the pattern.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.KnuthMorrisPratt",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "matchLL"
      },
      "index": {
        "description": "matchLL finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is simple wrapper around nonOverlappingIndices strictifying the pattern",
        "hierarchy": "Data ByteString Search KnuthMorrisPratt",
        "module": "Data.ByteString.Search.KnuthMorrisPratt",
        "name": "matchLL",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "LL",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KnuthMorrisPratt.html#v:matchLS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchLS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all \u003cem\u003enon-overlapping\u003c/em\u003e occurrences\n   of the pattern in the target string. It is a simple wrapper around\n   \u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e strictifying\n   the pattern.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.KnuthMorrisPratt",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "matchLS"
      },
      "index": {
        "description": "matchLS finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is simple wrapper around nonOverlappingIndices strictifying the pattern",
        "hierarchy": "Data ByteString Search KnuthMorrisPratt",
        "module": "Data.ByteString.Search.KnuthMorrisPratt",
        "name": "matchLS",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "LS",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KnuthMorrisPratt.html#v:matchSL",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchSL\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all \u003cem\u003enon-overlapping\u003c/em\u003e occurrences\n   of the pattern in the target string. It is an alias for\n   \u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.KnuthMorrisPratt",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int64]",
        "fct-type": "function",
        "title": "matchSL"
      },
      "index": {
        "description": "matchSL finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is an alias for nonOverlappingIndices",
        "hierarchy": "Data ByteString Search KnuthMorrisPratt",
        "module": "Data.ByteString.Search.KnuthMorrisPratt",
        "name": "matchSL",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "SL",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-KnuthMorrisPratt.html#v:matchSS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ematchSS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all \u003cem\u003enon-overlapping\u003c/em\u003e occurrences\n   of the pattern in the target string. It is an alias for\n   \u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.KnuthMorrisPratt",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "matchSS"
      },
      "index": {
        "description": "matchSS finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is an alias for nonOverlappingIndices",
        "hierarchy": "Data ByteString Search KnuthMorrisPratt",
        "module": "Data.ByteString.Search.KnuthMorrisPratt",
        "name": "matchSS",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "SS",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-Substitution.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass for values to be substituted into strict and lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n by the \u003ccode\u003ereplace\u003c/code\u003e functions defined in this package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Search.Substitution",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Search-Substitution.html",
        "fct-type": "module",
        "title": "Substitution"
      },
      "index": {
        "description": "Class for values to be substituted into strict and lazy ByteString by the replace functions defined in this package",
        "hierarchy": "Data ByteString Search Substitution",
        "module": "Data.ByteString.Search.Substitution",
        "name": "Substitution",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Substitution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-Substitution.html#t:Substitution",
      "description": {
        "fct-descr": "\u003cp\u003eType class of meaningful substitutions for replace functions\n   on ByteStrings. Instances for strict and lazy ByteStrings are\n   provided here.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.Substitution",
        "fct-package": "stringsearch",
        "fct-signature": "class",
        "fct-source": "src/Data-ByteString-Search-Substitution.html#Substitution",
        "fct-type": "class",
        "title": "Substitution"
      },
      "index": {
        "description": "Type class of meaningful substitutions for replace functions on ByteStrings Instances for strict and lazy ByteStrings are provided here",
        "hierarchy": "Data ByteString Search Substitution",
        "module": "Data.ByteString.Search.Substitution",
        "name": "Substitution",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Substitution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-Substitution.html#v:prependCycle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eprependCycle\u003c/a\u003e\u003c/code\u003e sub lazyBS\u003c/code\u003e shall prepend infinitely many copies\n   of \u003ccode\u003esub\u003c/code\u003e to \u003ccode\u003elazyBS\u003c/code\u003e without entering an infinite loop in case\n   of an empty \u003ccode\u003esub\u003c/code\u003e, so e.g.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003eprependCycle\u003c/a\u003e\u003c/code\u003e \"\" \"ab\" == \"ab\"\n\u003c/pre\u003e\u003cp\u003eshall (quickly) evaluate to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n For non-empty \u003ccode\u003esub\u003c/code\u003e, the cycle shall be constructed efficiently.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.Substitution",
        "fct-package": "stringsearch",
        "fct-signature": "a -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Search-Substitution.html#prependCycle",
        "fct-type": "method",
        "title": "prependCycle"
      },
      "index": {
        "description": "prependCycle sub lazyBS shall prepend infinitely many copies of sub to lazyBS without entering an infinite loop in case of an empty sub so e.g prependCycle ab ab shall quickly evaluate to True For non-empty sub the cycle shall be constructed efficiently",
        "hierarchy": "Data ByteString Search Substitution",
        "module": "Data.ByteString.Search.Substitution",
        "name": "prependCycle",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "stringsearch",
        "partial": "Cycle",
        "signature": "a-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search-Substitution.html#v:substitution",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esubstitution\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e transforms a value to a substitution function.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search.Substitution",
        "fct-package": "stringsearch",
        "fct-signature": "a -\u003e [ByteString] -\u003e [ByteString]",
        "fct-source": "src/Data-ByteString-Search-Substitution.html#substitution",
        "fct-type": "method",
        "title": "substitution"
      },
      "index": {
        "description": "substitution transforms value to substitution function",
        "hierarchy": "Data ByteString Search Substitution",
        "module": "Data.ByteString.Search.Substitution",
        "name": "substitution",
        "normalized": "a-\u003e[ByteString]-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "",
        "signature": "a-\u003e[ByteString]-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast overlapping Boyer-Moore search of strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values. Breaking, splitting and replacing\n using the Boyer-Moore algorithm.\n\u003c/p\u003e\u003cp\u003eDescriptions of the algorithm can be found at\n \u003ca\u003ehttp://www-igm.univ-mlv.fr/~lecroq/string/node14.html#SECTION00140\u003c/a\u003e\n and\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Boyer-Moore_string_search_algorithm\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOriginal authors: Daniel Fischer (daniel.is.fischer at googlemail.com) and\n Chris Kuklewicz (haskell at list.mightyreason.com).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Search.html",
        "fct-type": "module",
        "title": "Search"
      },
      "index": {
        "description": "Fast overlapping Boyer-Moore search of strict ByteString values Breaking splitting and replacing using the Boyer-Moore algorithm Descriptions of the algorithm can be found at http www-igm.univ-mlv.fr lecroq string node14.html SECTION00140 and http en.wikipedia.org wiki Boyer-Moore string search algorithm Original authors Daniel Fischer daniel.is.fischer at googlemail.com and Chris Kuklewicz haskell at list.mightyreason.com",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "Search",
        "normalized": "",
        "package": "stringsearch",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:breakAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e behind the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. An empty second component means that either the pattern\n   does not occur in the target or the first occurrence of pattern is at\n   the very end of target. To discriminate between those cases, use e.g.\n   \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakAfter\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakAfter"
      },
      "index": {
        "description": "breakAfter pattern target splits target behind the first occurrence of pattern An empty second component means that either the pattern does not occur in the target or the first occurrence of pattern is at the very end of target To discriminate between those cases use e.g isSuffixOf uncurry append breakAfter pattern id",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "breakAfter",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "After",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:breakOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at the first occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e. If the pattern does not occur in the target, the\n   second component of the result is empty, otherwise it starts with\n   \u003ccode\u003epattern\u003c/code\u003e. If the pattern is empty, the first component is empty.\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
        "fct-type": "function",
        "title": "breakOn"
      },
      "index": {
        "description": "breakOn pattern target splits target at the first occurrence of pattern If the pattern does not occur in the target the second component of the result is empty otherwise it starts with pattern If the pattern is empty the first component is empty uncurry append breakOn pattern id",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "breakOn",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "stringsearch",
        "partial": "On",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all possibly overlapping\n   occurrences of the pattern in the target string.\n   If the pattern is empty, the result is \u003ccode\u003e[0 .. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e target]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn general, \u003ccode\u003e\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e pat target\u003c/code\u003e is a much more\n   efficient version of \u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "indices finds the starting indices of all possibly overlapping occurrences of the pattern in the target string If the pattern is empty the result is length target In general not null indices pat target is much more efficient version of isInfixOf",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "indices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:nonOverlappingIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e finds the starting indices of all\n   non-overlapping occurrences of the pattern in the target string.\n   It is more efficient than removing indices from the list produced\n   by \u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [Int]",
        "fct-type": "function",
        "title": "nonOverlappingIndices"
      },
      "index": {
        "description": "nonOverlappingIndices finds the starting indices of all non-overlapping occurrences of the pattern in the target string It is more efficient than removing indices from the list produced by indices",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "nonOverlappingIndices",
        "normalized": "ByteString-\u003eByteString-\u003e[Int]",
        "package": "stringsearch",
        "partial": "Overlapping Indices",
        "signature": "ByteString-\u003eByteString-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub text\u003c/code\u003e replaces all (non-overlapping) occurrences of\n   \u003ccode\u003epat\u003c/code\u003e in \u003ccode\u003etext\u003c/code\u003e with \u003ccode\u003esub\u003c/code\u003e. If occurrences of \u003ccode\u003epat\u003c/code\u003e overlap, the first\n   occurrence that does not overlap with a replaced previous occurrence\n   is substituted. Occurrences of \u003ccode\u003epat\u003c/code\u003e arising from a substitution\n   will not be substituted. For example:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"olog\" \"banana\" = \"bologna\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"ana\" \"o\" \"bananana\" = \"bono\"\n   \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e \"aab\" \"abaa\" \"aaabb\" = \"aabaab\"\n\u003c/pre\u003e\u003cp\u003eThe result is a \u003cem\u003elazy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n   which is lazily produced, without copying.\n   Equality of pattern and substitution is not checked, but\n\u003c/p\u003e\u003cpre\u003e\n   (\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat pat text) == text\n\u003c/pre\u003e\u003cp\u003eholds. If the pattern is empty but not the substitution, the result\n   is equivalent to (were they \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es) \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e sub\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor non-empty \u003ccode\u003epat\u003c/code\u003e and \u003ccode\u003esub\u003c/code\u003e a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e sub . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003ereplace\u003c/a\u003e\u003c/code\u003e pat sub\n\u003c/pre\u003e\u003cp\u003eand analogous relations hold for other types of \u003ccode\u003esub\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e rep-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "replace pat sub text replaces all non-overlapping occurrences of pat in text with sub If occurrences of pat overlap the first occurrence that does not overlap with replaced previous occurrence is substituted Occurrences of pat arising from substitution will not be substituted For example replace ana olog banana bologna replace ana bananana bono replace aab abaa aaabb aabaab The result is lazy ByteString which is lazily produced without copying Equality of pattern and substitution is not checked but concat toChunks replace pat pat text text holds If the pattern is empty but not the substitution the result is equivalent to were they String cycle sub For non-empty pat and sub strict ByteString fromChunks intersperse sub split pat replace pat sub and analogous relations hold for other types of sub",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "replace",
        "normalized": "ByteString-\u003ea-\u003eByteString-\u003eByteString",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003erep-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e at each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e, removing \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty,\n   the result is an infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, if \u003ccode\u003etarget\u003c/code\u003e\n   is empty but not \u003ccode\u003epattern\u003c/code\u003e, the result is an empty list, otherwise\n   the following relations hold:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e pat . \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pat = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e pattern target) ==\n               \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enonOverlappingIndices\u003c/a\u003e\u003c/code\u003e pattern target) + 1,\n\u003c/pre\u003e\u003cp\u003eno fragment in the result contains an occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "split pattern target splits target at each non-overlapping occurrence of pattern removing pattern If pattern is empty the result is an infinite list of empty ByteString if target is empty but not pattern the result is an empty list otherwise the following relations hold concat intersperse pat split pat id length split pattern target length nonOverlappingIndices pattern target no fragment in the result contains an occurrence of pattern",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "split",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:splitKeepEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern target\u003c/code\u003e splits \u003ccode\u003etarget\u003c/code\u003e after each (non-overlapping)\n   occurrence of \u003ccode\u003epattern\u003c/code\u003e. If \u003ccode\u003epattern\u003c/code\u003e is empty, the result is an\n   infinite list of empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, otherwise the following\n   relations hold:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e pattern = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\n\u003c/pre\u003e\u003cp\u003eall fragments in the result except possibly the last end with\n   \u003ccode\u003epattern\u003c/code\u003e, no fragment contains more than one occurrence of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepEnd"
      },
      "index": {
        "description": "splitKeepEnd pattern target splits target after each non-overlapping occurrence of pattern If pattern is empty the result is an infinite list of empty ByteString otherwise the following relations hold concat splitKeepEnd pattern id all fragments in the result except possibly the last end with pattern no fragment contains more than one occurrence of pattern",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "splitKeepEnd",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep End",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringsearch/docs/Data-ByteString-Search.html#v:splitKeepFront",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitKeepFront\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003esplitKeepEnd\u003c/a\u003e\u003c/code\u003e, except that \u003ccode\u003etarget\u003c/code\u003e is split\n   before each occurrence of \u003ccode\u003epattern\u003c/code\u003e and hence all fragments\n   with the possible exception of the first begin with \u003ccode\u003epattern\u003c/code\u003e.\n   No fragment contains more than one non-overlapping occurrence\n   of \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Search",
        "fct-package": "stringsearch",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]",
        "fct-type": "function",
        "title": "splitKeepFront"
      },
      "index": {
        "description": "splitKeepFront is like splitKeepEnd except that target is split before each occurrence of pattern and hence all fragments with the possible exception of the first begin with pattern No fragment contains more than one non-overlapping occurrence of pattern",
        "hierarchy": "Data ByteString Search",
        "module": "Data.ByteString.Search",
        "name": "splitKeepFront",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "stringsearch",
        "partial": "Keep Front",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  }
]