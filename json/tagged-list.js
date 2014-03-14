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
        "word": "tagged-list"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "Tagged",
          "package": "tagged-list",
          "source": "src/Data-List-Tagged.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "Tagged",
          "package": "tagged-list",
          "partial": "Tagged",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eATL\u003c/a\u003e\u003c/code\u003e is a newtype wrapper around some functor of \u003ccode\u003e\u003ca\u003eTaggedList\u003c/a\u003e\u003c/code\u003e which flips the two type arguments;  this type was introduced to make it easier to define inductive operations on functors of TaggedLists.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "ATL",
          "package": "tagged-list",
          "source": "src/Data-List-Tagged.html#ATL",
          "type": "newtype"
        },
        "index": {
          "description": "ATL is newtype wrapper around some functor of TaggedList which flips the two type arguments this type was introduced to make it easier to define inductive operations on functors of TaggedLists",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "ATL",
          "package": "tagged-list",
          "partial": "ATL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#t:ATL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTL\u003c/a\u003e\u003c/code\u003e is a newtype wrapper around a \u003ccode\u003e\u003ca\u003eTaggedList\u003c/a\u003e\u003c/code\u003e which flips the two type arguments;  this type was introduced to make it easier to define inductive operations on TaggedLists.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "TL",
          "package": "tagged-list",
          "source": "src/Data-List-Tagged.html#TL",
          "type": "newtype"
        },
        "index": {
          "description": "TL is newtype wrapper around TaggedList which flips the two type arguments this type was introduced to make it easier to define inductive operations on TaggedLists",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "TL",
          "package": "tagged-list",
          "partial": "TL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#t:TL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTaggedList\u003c/a\u003e\u003c/code\u003e is a data structure that represents a linked-list tagged with a phantom type-level natural number representing the length of the list.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "TaggedList",
          "package": "tagged-list",
          "source": "src/Data-List-Tagged.html#TaggedList",
          "type": "data"
        },
        "index": {
          "description": "TaggedList is data structure that represents linked-list tagged with phantom type-level natural number representing the length of the list",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "TaggedList",
          "package": "tagged-list",
          "partial": "Tagged List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#t:TaggedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class TupleConvertable provides methods for converting tagged lists to and from tuples.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "TupleConvertable",
          "package": "tagged-list",
          "source": "src/Data-List-Tagged.html#TupleConvertable",
          "type": "class"
        },
        "index": {
          "description": "The class TupleConvertable provides methods for converting tagged lists to and from tuples",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "TupleConvertable",
          "package": "tagged-list",
          "partial": "Tuple Convertable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#t:TupleConvertable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTupleOf is a type family that maps type-level natural numbers (from N0 to N15) to tuples with the corresponding number of entries.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "TupleOf",
          "package": "tagged-list",
          "signature": "TupleOf",
          "type": "function"
        },
        "index": {
          "description": "TupleOf is type family that maps type-level natural numbers from N0 to N15 to tuples with the corresponding number of entries",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "TupleOf",
          "package": "tagged-list",
          "partial": "Tuple Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#t:TupleOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUntaggedList\u003c/a\u003e\u003c/code\u003e is a wrapper around TaggedList that lets you hide the length tag;  the purpose of this is to allow for situations in which you have a tagged list with an unknown length.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "UntaggedList",
          "package": "tagged-list",
          "source": "src/Data-List-Tagged.html#UntaggedList",
          "type": "data"
        },
        "index": {
          "description": "UntaggedList is wrapper around TaggedList that lets you hide the length tag the purpose of this is to allow for situations in which you have tagged list with an unknown length",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "UntaggedList",
          "package": "tagged-list",
          "partial": "Untagged List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#t:UntaggedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": ":.",
          "package": "tagged-list",
          "signature": "α -\u003e TaggedList n α -\u003e TaggedList (SuccessorTo n) α",
          "source": "src/Data-List-Tagged.html#TaggedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": ":.",
          "normalized": "a-\u003eTaggedList b a-\u003eTaggedList(SuccessorTo b)a",
          "package": "tagged-list",
          "signature": "α-\u003eTaggedList n α-\u003eTaggedList(SuccessorTo n)α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "ATL",
          "package": "tagged-list",
          "signature": "ATL",
          "source": "src/Data-List-Tagged.html#ATL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "ATL",
          "package": "tagged-list",
          "partial": "ATL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:ATL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "E",
          "package": "tagged-list",
          "signature": "TaggedList Zero α",
          "source": "src/Data-List-Tagged.html#TaggedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "E",
          "package": "tagged-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "TL",
          "package": "tagged-list",
          "signature": "TL",
          "source": "src/Data-List-Tagged.html#TL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "TL",
          "package": "tagged-list",
          "partial": "TL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:TL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "UntaggedList",
          "package": "tagged-list",
          "signature": "UntaggedList (TaggedList n α)",
          "source": "src/Data-List-Tagged.html#UntaggedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "UntaggedList",
          "package": "tagged-list",
          "partial": "Untagged List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:UntaggedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends two tagged lists.\n\u003c/p\u003e\u003cp\u003e(Note: The order of the arguments to Plus is important since append is defined recursively over its *first* argument.)\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "append",
          "package": "tagged-list",
          "signature": "TaggedList m α -\u003e TaggedList n α -\u003e TaggedList (Plus m n) α",
          "source": "src/Data-List-Tagged.html#append",
          "type": "function"
        },
        "index": {
          "description": "Appends two tagged lists Note The order of the arguments to Plus is important since append is defined recursively over its first argument",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "append",
          "normalized": "TaggedList a b-\u003eTaggedList c b-\u003eTaggedList(Plus a c)b",
          "package": "tagged-list",
          "signature": "TaggedList m α-\u003eTaggedList n α-\u003eTaggedList(Plus m n)α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts the tag of a list, given a proof that the new tag is equal to the old tag.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "castTag",
          "package": "tagged-list",
          "signature": "(m :=: n) -\u003e TaggedList m α -\u003e TaggedList n α",
          "source": "src/Data-List-Tagged.html#castTag",
          "type": "function"
        },
        "index": {
          "description": "Casts the tag of list given proof that the new tag is equal to the old tag",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "castTag",
          "normalized": "(a b)-\u003eTaggedList a c-\u003eTaggedList b c",
          "package": "tagged-list",
          "partial": "Tag",
          "signature": "(m n)-\u003eTaggedList m α-\u003eTaggedList n α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:castTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two lists, which may be of different sizes;  \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned if the lists do not have the same size.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "eqLists",
          "package": "tagged-list",
          "signature": "TaggedList m α -\u003e TaggedList n α -\u003e Bool",
          "source": "src/Data-List-Tagged.html#eqLists",
          "type": "function"
        },
        "index": {
          "description": "Compares two lists which may be of different sizes False is returned if the lists do not have the same size",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "eqLists",
          "normalized": "TaggedList a b-\u003eTaggedList c b-\u003eBool",
          "package": "tagged-list",
          "partial": "Lists",
          "signature": "TaggedList m α-\u003eTaggedList n α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:eqLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the input list of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e values has only \u003ccode\u003eRights\u003c/code\u003e, then this function returns a tagged list of the same length with the values contained in each \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e.  Otherwise, this function returns an ordinary list with the values contained in each \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "extractRightsOrLefts",
          "package": "tagged-list",
          "signature": "TaggedList n (Either α β) -\u003e Either [α] (TaggedList n β)",
          "source": "src/Data-List-Tagged.html#extractRightsOrLefts",
          "type": "function"
        },
        "index": {
          "description": "If the input list of Either values has only Rights then this function returns tagged list of the same length with the values contained in each Right Otherwise this function returns an ordinary list with the values contained in each Left",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "extractRightsOrLefts",
          "normalized": "TaggedList a(Either b c)-\u003eEither[b](TaggedList a c)",
          "package": "tagged-list",
          "partial": "Rights Or Lefts",
          "signature": "TaggedList n(Either α β)-\u003eEither[α](TaggedList n β)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:extractRightsOrLefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list to a \u003ccode\u003e\u003ca\u003eTaggedList\u003c/a\u003e\u003c/code\u003e, returning _|_ if the length of the list does not match the length tag of the return type.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "fromList",
          "package": "tagged-list",
          "signature": "[α] -\u003e TaggedList n α",
          "source": "src/Data-List-Tagged.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Converts list to TaggedList returning if the length of the list does not match the length tag of the return type",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "fromList",
          "normalized": "[a]-\u003eTaggedList b a",
          "package": "tagged-list",
          "partial": "List",
          "signature": "[α]-\u003eTaggedList n α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an arbitrary list to an \u003ccode\u003e\u003ca\u003eUntaggedList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "fromListAsUntagged",
          "package": "tagged-list",
          "signature": "[α] -\u003e UntaggedList α",
          "source": "src/Data-List-Tagged.html#fromListAsUntagged",
          "type": "function"
        },
        "index": {
          "description": "Converts an arbitrary list to an UntaggedList",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "fromListAsUntagged",
          "normalized": "[a]-\u003eUntaggedList a",
          "package": "tagged-list",
          "partial": "List As Untagged",
          "signature": "[α]-\u003eUntaggedList α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:fromListAsUntagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "fromTuple",
          "package": "tagged-list",
          "signature": "TupleOf n α -\u003e TaggedList n α",
          "source": "src/Data-List-Tagged.html#fromTuple",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "fromTuple",
          "normalized": "TupleOf a b-\u003eTaggedList a b",
          "package": "tagged-list",
          "partial": "Tuple",
          "signature": "TupleOf n α-\u003eTaggedList n α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:fromTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the head of a tagged list.\n\u003c/p\u003e\u003cp\u003eNote that unlike its List counterpart, this function never returns _|_ since the existence of at least one element is guaranteed by the type system.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "head",
          "package": "tagged-list",
          "signature": "TaggedList (SuccessorTo n) α -\u003e α",
          "source": "src/Data-List-Tagged.html#head",
          "type": "function"
        },
        "index": {
          "description": "Returns the head of tagged list Note that unlike its List counterpart this function never returns since the existence of at least one element is guaranteed by the type system",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "head",
          "normalized": "TaggedList(SuccessorTo a)b-\u003eb",
          "package": "tagged-list",
          "signature": "TaggedList(SuccessorTo n)α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends two lists together, and returns both the result and a splitter function that allows you to take another list of the same size as the result (though possible of a different type) and split it back into two lists of the sizes of the arguments to this function.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "join",
          "package": "tagged-list",
          "signature": "TaggedList m α -\u003e TaggedList n α -\u003e (TaggedList (Plus m n) α, TaggedList (Plus m n) β -\u003e (TaggedList m β, TaggedList n β))",
          "source": "src/Data-List-Tagged.html#join",
          "type": "function"
        },
        "index": {
          "description": "Appends two lists together and returns both the result and splitter function that allows you to take another list of the same size as the result though possible of different type and split it back into two lists of the sizes of the arguments to this function",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "join",
          "normalized": "TaggedList a b-\u003eTaggedList c b-\u003e(TaggedList(Plus a c)b,TaggedList(Plus a c)d-\u003e(TaggedList a d,TaggedList c d))",
          "package": "tagged-list",
          "signature": "TaggedList m α-\u003eTaggedList n α-\u003e(TaggedList(Plus m n)α,TaggedList(Plus m n)β-\u003e(TaggedList m β,TaggedList n β))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of the list as a value-level natural number.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "length",
          "package": "tagged-list",
          "signature": "TaggedList n α -\u003e N n",
          "source": "src/Data-List-Tagged.html#length",
          "type": "function"
        },
        "index": {
          "description": "Returns the length of the list as value-level natural number",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "length",
          "normalized": "TaggedList a b-\u003eN a",
          "package": "tagged-list",
          "signature": "TaggedList n α-\u003eN n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to every element of the list.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "map",
          "package": "tagged-list",
          "signature": "(α -\u003e β) -\u003e TaggedList n α -\u003e TaggedList n β",
          "source": "src/Data-List-Tagged.html#map",
          "type": "function"
        },
        "index": {
          "description": "Applies function to every element of the list",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eTaggedList c a-\u003eTaggedList c b",
          "package": "tagged-list",
          "signature": "(α-\u003eβ)-\u003eTaggedList n α-\u003eTaggedList n β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an action for every element in the list and returns ().\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "mapM_",
          "package": "tagged-list",
          "signature": "(α -\u003e m β) -\u003e TaggedList n α -\u003e m ()",
          "source": "src/Data-List-Tagged.html#mapM_",
          "type": "function"
        },
        "index": {
          "description": "Performs an action for every element in the list and returns",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003eTaggedList d a-\u003eb()",
          "package": "tagged-list",
          "signature": "(α-\u003em β)-\u003eTaggedList n α-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces all of the elements in a given tagged list with the members of an ordinary list, returning _|_ if the length of the list does not match the length tag.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "replace",
          "package": "tagged-list",
          "signature": "[α] -\u003e TaggedList n β -\u003e TaggedList n α",
          "source": "src/Data-List-Tagged.html#replace",
          "type": "function"
        },
        "index": {
          "description": "Replaces all of the elements in given tagged list with the members of an ordinary list returning if the length of the list does not match the length tag",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "replace",
          "normalized": "[a]-\u003eTaggedList b c-\u003eTaggedList b a",
          "package": "tagged-list",
          "signature": "[α]-\u003eTaggedList n β-\u003eTaggedList n α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the tail of a tagged list.\n\u003c/p\u003e\u003cp\u003eNote that unlike its List counterpart, this function never returns _|_ since the existence of at least one element is guaranteed by the type system.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "tail",
          "package": "tagged-list",
          "signature": "TaggedList (SuccessorTo n) α -\u003e TaggedList n α",
          "source": "src/Data-List-Tagged.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Returns the tail of tagged list Note that unlike its List counterpart this function never returns since the existence of at least one element is guaranteed by the type system",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "tail",
          "normalized": "TaggedList(SuccessorTo a)b-\u003eTaggedList a b",
          "package": "tagged-list",
          "signature": "TaggedList(SuccessorTo n)α-\u003eTaggedList n α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a tagged list to an ordinary list.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "toList",
          "package": "tagged-list",
          "signature": "TaggedList n α -\u003e [α]",
          "source": "src/Data-List-Tagged.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts tagged list to an ordinary list",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "toList",
          "normalized": "TaggedList a b-\u003e[b]",
          "package": "tagged-list",
          "partial": "List",
          "signature": "TaggedList n α-\u003e[α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "toTuple",
          "package": "tagged-list",
          "signature": "TaggedList n α -\u003e TupleOf n α",
          "source": "src/Data-List-Tagged.html#toTuple",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "toTuple",
          "normalized": "TaggedList a b-\u003eTupleOf a b",
          "package": "tagged-list",
          "partial": "Tuple",
          "signature": "TaggedList n α-\u003eTupleOf n α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:toTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "unwrapATL",
          "package": "tagged-list",
          "signature": "t (TaggedList n α)",
          "source": "src/Data-List-Tagged.html#ATL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "unwrapATL",
          "package": "tagged-list",
          "partial": "ATL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:unwrapATL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tagged",
          "name": "unwrapTL",
          "package": "tagged-list",
          "signature": "TaggedList n α",
          "source": "src/Data-List-Tagged.html#TL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "unwrapTL",
          "package": "tagged-list",
          "partial": "TL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:unwrapTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a convenience function for lifting a function on \u003ccode\u003e\u003ca\u003eTL\u003c/a\u003e\u003c/code\u003e to a function on \u003ccode\u003e\u003ca\u003eTaggedList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(Note:  \u003ccode\u003e\u003ca\u003eTL\u003c/a\u003e\u003c/code\u003e is just a newtype wrapper around \u003ccode\u003e\u003ca\u003eTaggedList\u003c/a\u003e\u003c/code\u003e that swaps the two type arguments to make it easier to perform inductive operations.)\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "withTL",
          "package": "tagged-list",
          "signature": "(TL α n -\u003e TL β n) -\u003e TaggedList n α -\u003e TaggedList n β",
          "source": "src/Data-List-Tagged.html#withTL",
          "type": "function"
        },
        "index": {
          "description": "This is convenience function for lifting function on TL to function on TaggedList Note TL is just newtype wrapper around TaggedList that swaps the two type arguments to make it easier to perform inductive operations",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "withTL",
          "normalized": "(TL a b-\u003eTL c b)-\u003eTaggedList b a-\u003eTaggedList b c",
          "package": "tagged-list",
          "partial": "TL",
          "signature": "(TL α n-\u003eTL β n)-\u003eTaggedList n α-\u003eTaggedList n β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:withTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a list of functions to a list of inputs.\n\u003c/p\u003e",
          "module": "Data.List.Tagged",
          "name": "zipf",
          "package": "tagged-list",
          "signature": "TaggedList n (α -\u003e β) -\u003e TaggedList n α -\u003e TaggedList n β",
          "source": "src/Data-List-Tagged.html#zipf",
          "type": "function"
        },
        "index": {
          "description": "Applies list of functions to list of inputs",
          "hierarchy": "Data List Tagged",
          "module": "Data.List.Tagged",
          "name": "zipf",
          "normalized": "TaggedList a(b-\u003ec)-\u003eTaggedList a b-\u003eTaggedList a c",
          "package": "tagged-list",
          "signature": "TaggedList n(α-\u003eβ)-\u003eTaggedList n α-\u003eTaggedList n β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-list/docs/Data-List-Tagged.html#v:zipf"
      }
    }
  ]
]