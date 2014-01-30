[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast conversion from or to lazy and strict bytestrings.\n   Serialized IntSets are represented as single continious bitmap.\n\u003c/p\u003e\u003cp\u003eThis module is kept separated due safe considerations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IntervalSet.ByteString",
        "fct-package": "intset",
        "fct-signature": "module",
        "fct-source": "src/Data-IntervalSet-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Fast conversion from or to lazy and strict bytestrings Serialized IntSets are represented as single continious bitmap This module is kept separated due safe considerations",
        "hierarchy": "Data IntervalSet ByteString",
        "module": "Data.IntervalSet.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "intset",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet-ByteString.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e from bitmap.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet.ByteString",
        "fct-package": "intset",
        "fct-signature": "BS.ByteString -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-ByteString.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Unpack IntSet from bitmap",
        "hierarchy": "Data IntervalSet ByteString",
        "module": "Data.IntervalSet.ByteString",
        "name": "fromByteString",
        "normalized": "BS.ByteString-\u003eIntSet",
        "package": "intset",
        "partial": "Byte String",
        "signature": "BS.ByteString-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet-ByteString.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003ePack the \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e as bitmap to the strict bytestring.\n\u003c/p\u003e\u003cp\u003eNOTE: negative elements are ignored!\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet.ByteString",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e BS.ByteString",
        "fct-source": "src/Data-IntervalSet-ByteString.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Pack the IntSet as bitmap to the strict bytestring NOTE negative elements are ignored",
        "hierarchy": "Data IntervalSet ByteString",
        "module": "Data.IntervalSet.ByteString",
        "name": "toByteString",
        "normalized": "IntSet-\u003eBS.ByteString",
        "package": "intset",
        "partial": "Byte String",
        "signature": "IntSet-\u003eBS.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of dense integer sets based on\n   Big-Endian PATRICIA trees with buddy suffix compression.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Fast Mergeable Integer Maps (1998) by Chris Okasaki, Andrew Gill\n       \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.37.5452\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis implementation performs espessially well then set contains\n   long integer invervals like \u003ccode\u003e[0..2047]\u003c/code\u003e that are just merged into\n   one interval description. This allow to perform many operations\n   in constant time and space. However if set contain sparse\n   integers like \u003ccode\u003e[1,12,7908,234,897]\u003c/code\u003e the same operations will take\n   \u003cem\u003eO(min(W, n))\u003c/em\u003e which is good enough in most cases.\n\u003c/p\u003e\u003cp\u003eConventions in complexity notation:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e n &#8212; number of elements in a set;\n\u003c/li\u003e\u003cli\u003e W &#8212; number bits in a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e. This is 32 or 64 at 32 and 64 bit\n     platforms respectively;\n\u003c/li\u003e\u003cli\u003e O(n) or O(k) &#8212; means this operation have complexity O(n) in\n     worst case (e.g. sparse set) or O(k) in best case (e.g. one\n     single interval).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that some operations will take centuries to compute. For\n   example \u003ccode\u003emap id universe\u003c/code\u003e will a long time to end as well as\n   \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003euniverse\u003c/code\u003e, \u003ccode\u003enaturals\u003c/code\u003e, \u003ccode\u003epositives\u003c/code\u003e or\n   \u003ccode\u003enegatives\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso note that some operations like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e have overriden from default fixity, so use these\n   operations with infix syntax carefully.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "module",
        "fct-source": "src/Data-IntervalSet.html",
        "fct-type": "module",
        "title": "IntervalSet"
      },
      "index": {
        "description": "An efficient implementation of dense integer sets based on Big-Endian PATRICIA trees with buddy suffix compression References Fast Mergeable Integer Maps by Chris Okasaki Andrew Gill http citeseerx.ist.psu.edu viewdoc summary doi This implementation performs espessially well then set contains long integer invervals like that are just merged into one interval description This allow to perform many operations in constant time and space However if set contain sparse integers like the same operations will take min which is good enough in most cases Conventions in complexity notation number of elements in set number bits in Key This is or at and bit platforms respectively or means this operation have complexity in worst case e.g sparse set or in best case e.g one single interval Note that some operations will take centuries to compute For example map id universe will long time to end as well as filter applied to universe naturals positives or negatives Also note that some operations like union intersection and difference have overriden from default fixity so use these operations with infix syntax carefully",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "IntervalSet",
        "normalized": "",
        "package": "intset",
        "partial": "Interval Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#t:Difference",
      "description": {
        "fct-descr": "\u003cp\u003eMonoid under \u003ccode\u003e\u003ca\u003esymDiff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDon't mix up \u003ccode\u003e\u003ca\u003esymDiff\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "data",
        "fct-source": "src/Data-IntervalSet-Internal.html#Difference",
        "fct-type": "data",
        "title": "Difference"
      },
      "index": {
        "description": "Monoid under symDiff Don mix up symDiff with difference",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Difference",
        "normalized": "",
        "package": "intset",
        "partial": "Difference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#t:IntSet",
      "description": {
        "fct-descr": "\u003cp\u003eInteger set.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "data",
        "fct-source": "src/Data-IntervalSet-Internal.html#IntSet",
        "fct-type": "data",
        "title": "IntSet"
      },
      "index": {
        "description": "Integer set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "IntSet",
        "normalized": "",
        "package": "intset",
        "partial": "Int Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#t:Intersection",
      "description": {
        "fct-descr": "\u003cp\u003eMonoid under \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou could use \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e as well.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "data",
        "fct-source": "src/Data-IntervalSet-Internal.html#Intersection",
        "fct-type": "data",
        "title": "Intersection"
      },
      "index": {
        "description": "Monoid under intersection You could use Product from Monoid as well",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Intersection",
        "normalized": "",
        "package": "intset",
        "partial": "Intersection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eType of IntSet elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "type",
        "fct-source": "src/Data-IntervalSet-Internal.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "Type of IntSet elements",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Key",
        "normalized": "",
        "package": "intset",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#t:Union",
      "description": {
        "fct-descr": "\u003cp\u003eMonoid under \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e. Used by default for \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou could use \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e as well.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "data",
        "fct-source": "src/Data-IntervalSet-Internal.html#Union",
        "fct-type": "data",
        "title": "Union"
      },
      "index": {
        "description": "Monoid under union Used by default for IntSet You could use Sum from Monoid as well",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Union",
        "normalized": "",
        "package": "intset",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:Bin",
      "description": {
        "fct-descr": "\u003cp\u003eLayout: prefix up to branching bit, mask for branching bit,\n   left subtree and right subtree.\n\u003c/p\u003e\u003cp\u003eIntSet = Bin: contains elements of left and right subtrees thus\n   just merge to subtrees.  All elements of left subtree is less\n   that from right subtree. Except non-negative numbers, they are\n   in left subtree of root bin, if any.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Bin !Prefix !Mask !IntSet !IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#IntSet",
        "fct-type": "function",
        "title": "Bin"
      },
      "index": {
        "description": "Layout prefix up to branching bit mask for branching bit left subtree and right subtree IntSet Bin contains elements of left and right subtrees thus just merge to subtrees All elements of left subtree is less that from right subtree Except non-negative numbers they are in left subtree of root bin if any",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Bin",
        "normalized": "",
        "package": "intset",
        "partial": "Bin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:Fin",
      "description": {
        "fct-descr": "\u003cp\u003eLayout: Prefix up to \u003cem\u003emask of bitmap size\u003c/em\u003e, and mask specifing\n   how large is set. There is no branching bit at all.\n   Tip is never full.\n\u003c/p\u003e\u003cp\u003eIntSet = Fin: contains all elements from prefix to\n   (prefix - mask - 1)\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Fin !Prefix !Mask",
        "fct-source": "src/Data-IntervalSet-Internal.html#IntSet",
        "fct-type": "function",
        "title": "Fin"
      },
      "index": {
        "description": "Layout Prefix up to mask of bitmap size and mask specifing how large is set There is no branching bit at all Tip is never full IntSet Fin contains all elements from prefix to prefix mask",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Fin",
        "normalized": "",
        "package": "intset",
        "partial": "Fin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:Nil",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty set. Contains nothing.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Nil",
        "fct-source": "src/Data-IntervalSet-Internal.html#IntSet",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "Empty set Contains nothing",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Nil",
        "normalized": "",
        "package": "intset",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:Tip",
      "description": {
        "fct-descr": "\u003cp\u003eLayout: Prefix up to \u003cem\u003emask of bitmap size\u003c/em\u003e, and bitmap\n   containing elements starting \u003cem\u003efrom the prefix\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eIntSet = Tip: contains elements\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Tip !Prefix !BitMap",
        "fct-source": "src/Data-IntervalSet-Internal.html#IntSet",
        "fct-type": "function",
        "title": "Tip"
      },
      "index": {
        "description": "Layout Prefix up to mask of bitmap size and bitmap containing elements starting from the prefix IntSet Tip contains elements",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "Tip",
        "normalized": "",
        "package": "intset",
        "partial": "Tip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n, W))\u003c/em\u003e. Delete a value from the set.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Delete value from the set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "delete",
        "normalized": "Key-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "Key-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + m)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Find difference of the two sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "or Find difference of the two sets",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "difference",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e is alias to \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e for compatibility.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e [Key]",
        "fct-source": "src/Data-IntervalSet-Internal.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "elems is alias to toList for compatibility",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "elems",
        "normalized": "IntSet-\u003e[Key]",
        "package": "intset",
        "partial": "",
        "signature": "IntSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty set.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "empty",
        "normalized": "",
        "package": "intset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy the predicate.\n\u003c/p\u003e\u003cp\u003eDo not use this operation with the \u003ccode\u003euniverse\u003c/code\u003e, \u003ccode\u003enaturals\u003c/code\u003e or\n   \u003ccode\u003enegatives\u003c/code\u003e sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "(Key -\u003e Bool) -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all elements that satisfy the predicate Do not use this operation with the universe naturals or negatives sets",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "filter",
        "normalized": "(Key-\u003eBool)-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "(Key-\u003eBool)-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n))\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Find maximal element of the set.\n  Is set is empty then max is undefined.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e Key",
        "fct-source": "src/Data-IntervalSet-Internal.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "min or Find maximal element of the set Is set is empty then max is undefined",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "findMax",
        "normalized": "IntSet-\u003eKey",
        "package": "intset",
        "partial": "Max",
        "signature": "IntSet-\u003eKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n))\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Find minimal element of the set.\n   If set is empty then min is undefined.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e Key",
        "fct-source": "src/Data-IntervalSet-Internal.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "min or Find minimal element of the set If set is empty then min is undefined",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "findMin",
        "normalized": "IntSet-\u003eKey",
        "package": "intset",
        "partial": "Min",
        "signature": "IntSet-\u003eKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Fold the element using the given right associative\n   binary operator.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "(Key -\u003e a -\u003e a) -\u003e a -\u003e IntSet -\u003e a",
        "fct-source": "src/Data-IntervalSet-Internal.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Fold the element using the given right associative binary operator",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "foldr",
        "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003eIntSet-\u003ea",
        "package": "intset",
        "partial": "",
        "signature": "(Key-\u003ea-\u003ea)-\u003ea-\u003eIntSet-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a set from an ascending list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "[Key] -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build set from an ascending list of elements",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "fromAscList",
        "normalized": "[Key]-\u003eIntSet",
        "package": "intset",
        "partial": "Asc List",
        "signature": "[Key]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n * min(W, n))\u003c/em\u003e or \u003cem\u003eO(n)\u003c/em\u003e.\n  Create a set from a list of its elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "[Key] -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "min or Create set from list of its elements",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "fromList",
        "normalized": "[Key]-\u003eIntSet",
        "package": "intset",
        "partial": "List",
        "signature": "[Key]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Add a value to the set.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min or Add value to the set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "insert",
        "normalized": "Key-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "Key-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + m)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Find maximal common subset of the two given\n sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "or Find maximal common subset of the two given sets",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "intersection",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:intersections",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(n) * spine)\u003c/em\u003e or \u003cem\u003eO(spine)\u003c/em\u003e.\n   Find out common subset of the list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "[IntSet] -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#intersections",
        "fct-type": "function",
        "title": "intersections"
      },
      "index": {
        "description": "max spine or spine Find out common subset of the list of sets",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "intersections",
        "normalized": "[IntSet]-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "[IntSet]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:interval",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Set containing elements from the specified range.\n\u003c/p\u003e\u003cpre\u003e interval a b = fromList [a..b]\n\u003c/pre\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e Key -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#interval",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "Set containing elements from the specified range interval fromList a..b",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "interval",
        "normalized": "Key-\u003eKey-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "Key-\u003eKey-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + m)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Test if the second set contain each element\n of the first.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-IntervalSet-Internal.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "or Test if the second set contain each element of the first",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "isSubsetOf",
        "normalized": "IntSet-\u003eIntSet-\u003eBool",
        "package": "intset",
        "partial": "Subset Of",
        "signature": "IntSet-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:isSupersetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + m)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Test if the second set is subset of the\n first.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-IntervalSet-Internal.html#isSupersetOf",
        "fct-type": "function",
        "title": "isSupersetOf"
      },
      "index": {
        "description": "or Test if the second set is subset of the first",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "isSupersetOf",
        "normalized": "IntSet-\u003eIntSet-\u003eBool",
        "package": "intset",
        "partial": "Superset Of",
        "signature": "IntSet-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n * min(W, n))\u003c/em\u003e.\n   Apply the function to each element of the set.\n\u003c/p\u003e\u003cp\u003eDo not use this operation with the \u003ccode\u003euniverse\u003c/code\u003e, \u003ccode\u003enaturals\u003c/code\u003e or\n   \u003ccode\u003enegatives\u003c/code\u003e sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "(Key -\u003e Key) -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "min Apply the function to each element of the set Do not use this operation with the universe naturals or negatives sets",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "map",
        "normalized": "(Key-\u003eKey)-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "(Key-\u003eKey)-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n))\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e.\n   Test if the value is element of the set.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-IntervalSet-Internal.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min or Test if the value is element of the set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "member",
        "normalized": "Key-\u003eIntSet-\u003eBool",
        "package": "intset",
        "partial": "",
        "signature": "Key-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n))\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e.\n   Test if the value is not an element of the set.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-IntervalSet-Internal.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "min or Test if the value is not an element of the set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "notMember",
        "normalized": "Key-\u003eIntSet-\u003eBool",
        "package": "intset",
        "partial": "Member",
        "signature": "Key-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this the empty set?\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e Bool",
        "fct-source": "src/Data-IntervalSet-Internal.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is this the empty set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "null",
        "normalized": "IntSet-\u003eBool",
        "package": "intset",
        "partial": "",
        "signature": "IntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Split a set using given predicate.\n\u003c/p\u003e\u003cpre\u003e forall f. fst . partition f = filter f\n forall f. snd . partition f = filter (not . f)\n\u003c/pre\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "(Key -\u003e Bool) -\u003e IntSet -\u003e (IntSet, IntSet)",
        "fct-source": "src/Data-IntervalSet-Internal.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Split set using given predicate forall fst partition filter forall snd partition filter not",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "partition",
        "normalized": "(Key-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)",
        "package": "intset",
        "partial": "",
        "signature": "(Key-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A set containing one element.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "set containing one element",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "singleton",
        "normalized": "Key-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "Key-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Cardinality of a set.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e Int",
        "fct-source": "src/Data-IntervalSet-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "or Cardinality of set",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "size",
        "normalized": "IntSet-\u003eInt",
        "package": "intset",
        "partial": "",
        "signature": "IntSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n)\u003c/em\u003e. Split the set such that the left projection of the\n resulting pair contains elements less than the key and right\n element contains greater than the key. The exact key is excluded\n from result:\n\u003c/p\u003e\u003cpre\u003e split 5 (fromList [0..10]) == (fromList [0..4], fromList [6..10])\n\u003c/pre\u003e\u003cp\u003ePerformance note: if need only lesser or greater keys, use\n   splitLT or splitGT respectively.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet -\u003e (IntSet, IntSet)",
        "fct-source": "src/Data-IntervalSet-Internal.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "min Split the set such that the left projection of the resulting pair contains elements less than the key and right element contains greater than the key The exact key is excluded from result split fromList fromList fromList Performance note if need only lesser or greater keys use splitLT or splitGT respectively",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "split",
        "normalized": "Key-\u003eIntSet-\u003e(IntSet,IntSet)",
        "package": "intset",
        "partial": "",
        "signature": "Key-\u003eIntSet-\u003e(IntSet,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:splitGT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n)\u003c/em\u003e. Takes subset such that each element is greater\n than the specified key. The exact key is excluded from result.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#splitGT",
        "fct-type": "function",
        "title": "splitGT"
      },
      "index": {
        "description": "min Takes subset such that each element is greater than the specified key The exact key is excluded from result",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "splitGT",
        "normalized": "Key-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "GT",
        "signature": "Key-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:splitLT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(W, n)\u003c/em\u003e. Takes subset such that each element is less\n than the specified key. The exact key is excluded from result.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "Key -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#splitLT",
        "fct-type": "function",
        "title": "splitLT"
      },
      "index": {
        "description": "min Takes subset such that each element is less than the specified key The exact key is excluded from result",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "splitLT",
        "normalized": "Key-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "LT",
        "signature": "Key-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:symDiff",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + m)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Find symmetric difference of the two sets:\n   resulting set containts elements that either in first or second\n   set, but not in both simultaneous.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#symDiff",
        "fct-type": "function",
        "title": "symDiff"
      },
      "index": {
        "description": "or Find symmetric difference of the two sets resulting set containts elements that either in first or second set but not in both simultaneous",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "symDiff",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "Diff",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n  Convert the set to a list of its element in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e [Key]",
        "fct-source": "src/Data-IntervalSet-Internal.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the set to list of its element in ascending order",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "toAscList",
        "normalized": "IntSet-\u003e[Key]",
        "package": "intset",
        "partial": "Asc List",
        "signature": "IntSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n  Convert the set to a list of its element in descending order.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e [Key]",
        "fct-source": "src/Data-IntervalSet-Internal.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "Convert the set to list of its element in descending order",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "toDescList",
        "normalized": "IntSet-\u003e[Key]",
        "package": "intset",
        "partial": "Desc List",
        "signature": "IntSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the set to a list of its elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e [Key]",
        "fct-source": "src/Data-IntervalSet-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the set to list of its elements",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "toList",
        "normalized": "IntSet-\u003e[Key]",
        "package": "intset",
        "partial": "List",
        "signature": "IntSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + m)\u003c/em\u003e or \u003cem\u003eO(1)\u003c/em\u003e. Find set which contains elements of both\n right and left sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "or Find set which contains elements of both right and left sets",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "union",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intset/docs/Data-IntervalSet.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(n)^2 * spine)\u003c/em\u003e or \u003cem\u003eO(spine)\u003c/em\u003e.\n   The union of list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntervalSet",
        "fct-package": "intset",
        "fct-signature": "[IntSet] -\u003e IntSet",
        "fct-source": "src/Data-IntervalSet-Internal.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "max spine or spine The union of list of sets",
        "hierarchy": "Data IntervalSet",
        "module": "Data.IntervalSet",
        "name": "unions",
        "normalized": "[IntSet]-\u003eIntSet",
        "package": "intset",
        "partial": "",
        "signature": "[IntSet]-\u003eIntSet"
      }
    }
  }
]