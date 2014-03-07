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
        "word": "data-fin"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA newtype of \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e for finite subsets of the natural numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "Int16",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int16.html",
          "type": "module"
        },
        "index": {
          "description": "newtype of Int16 for finite subsets of the natural numbers",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "Int16",
          "package": "data-fin",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finite set of integers \u003ccode\u003eFin n = { i :: Int16 | 0 \u003c= i \u003c n }\u003c/code\u003e\n with the usual ordering. This is typed as if using the standard\n GADT presentation of \u003ccode\u003eFin n\u003c/code\u003e, however it is actually implemented\n by a plain \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "Fin",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int16.html#Fin",
          "type": "data"
        },
        "index": {
          "description": "finite set of integers Fin Int16 with the usual ordering This is typed as if using the standard GADT presentation of Fin however it is actually implemented by plain Int16",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "Fin",
          "package": "data-fin",
          "partial": "Fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#t:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinal-sum functor, on morphisms. If we view the maps as\n bipartite graphs, then the new map is the result of placing the\n left and right maps next to one another. This is similar to\n \u003ccode\u003e(+++)\u003c/code\u003e from \u003ca\u003eControl.Arrow\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Number.Fin.Int16\",\"Data.Number.Fin.Int32\",\"Data.Number.Fin.Int64\",\"Data.Number.Fin.Int8\",\"Data.Number.Fin.Integer\"]",
          "name": "fplus",
          "package": "data-fin",
          "signature": "(Fin m -\u003e Fin m')-\u003e (Fin n -\u003e Fin n')-\u003e Fin o -\u003e Fin o'",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:fplus\",\"http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:fplus\",\"http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:fplus\",\"http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:fplus\",\"http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:fplus\"]"
        },
        "index": {
          "description": "The ordinal-sum functor on morphisms If we view the maps as bipartite graphs then the new map is the result of placing the left and right maps next to one another This is similar to from Control.Arrow",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "fplus",
          "normalized": "(Fin a-\u003eFin b)-\u003e(Fin c-\u003eFin d)-\u003eFin e-\u003eFin f",
          "package": "data-fin",
          "signature": "(Fin m-\u003eFin m')-\u003e(Fin n-\u003eFin n')-\u003eFin o-\u003eFin o'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:fplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of a \u003ccode\u003eFin n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.,\u003c/em\u003e if somehow the \u003ccode\u003eFin n\u003c/code\u003e value was constructed invalidly,\n then this function will throw an exception. However, this should\n \u003cem\u003enever\u003c/em\u003e happen. If it does, contact the maintainer since this\n indicates a bug/insecurity in this library.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "fromFin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int16",
          "source": "src/Data-Number-Fin-Int16.html#fromFin",
          "type": "function"
        },
        "index": {
          "description": "Extract the value of Fin N.B if somehow the Fin value was constructed invalidly then this function will throw an exception However this should never happen If it does contact the maintainer since this indicates bug insecurity in this library",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "fromFin",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:fromFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always \u003ccode\u003en-1\u003c/code\u003e, but it's helpful because you may not know what\n \u003ccode\u003en\u003c/code\u003e is at the time.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "maxBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int16",
          "source": "src/Data-Number-Fin-Int16.html#maxBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the maxBound of Fin as plain integer This is always n-1 but it helpful because you may not know what is at the time",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "maxBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:maxBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum-element view. This strengthens the type by removing\n the maximum element:\n\u003c/p\u003e\u003cpre\u003e maxView maxBound = Nothing\n maxView x        = Just x  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "maxView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int16.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "The maximum-element view This strengthens the type by removing the maximum element maxView maxBound Nothing maxView Just morally speaking The opposite of this function is weaken maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "maxView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e which allows strengthening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003em\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e. When the choice of\n \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "maxViewLE",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int16.html#maxViewLE",
          "type": "function"
        },
        "index": {
          "description": "variant of maxView which allows strengthening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is weakenLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "maxViewLE",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View LE",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:maxViewLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always zero, but is provided for symmetry with \u003ccode\u003e\u003ca\u003emaxBoundOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "minBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int16",
          "source": "src/Data-Number-Fin-Int16.html#minBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the minBound of Fin as plain integer This is always zero but is provided for symmetry with maxBoundOf",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "minBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:minBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinal-sum functor, on objects. This internalizes the\n disjoint union, mapping \u003ccode\u003eFin m + Fin n\u003c/code\u003e into \u003ccode\u003eFin(m+n)\u003c/code\u003e by\n placing the image of the summands next to one another in the\n codomain, thereby preserving the structure of both summands.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "plus",
          "package": "data-fin",
          "signature": "Either (Fin m) (Fin n) -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int16.html#plus",
          "type": "function"
        },
        "index": {
          "description": "The ordinal-sum functor on objects This internalizes the disjoint union mapping Fin Fin into Fin by placing the image of the summands next to one another in the codomain thereby preserving the structure of both summands",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "plus",
          "normalized": "Either(Fin a)(Fin b)-\u003eFin c",
          "package": "data-fin",
          "signature": "Either(Fin m)(Fin n)-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predecessor view. This strengthens the type by shifting\n everything down by one:\n\u003c/p\u003e\u003cpre\u003e predView 0 = Nothing\n predView x = Just (x-1)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003ewiden\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "predView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int16.html#predView",
          "type": "function"
        },
        "index": {
          "description": "The predecessor view This strengthens the type by shifting everything down by one predView Nothing predView Just x-1 morally speaking The opposite of this function is widen predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "predView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:predView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "showFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e String",
          "source": "src/Data-Number-Fin-Int16.html#showFinType",
          "type": "function"
        },
        "index": {
          "description": "Like show except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "showFinType",
          "normalized": "Fin a-\u003eString",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:showFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "showsFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e ShowS",
          "source": "src/Data-Number-Fin-Int16.html#showsFinType",
          "type": "function"
        },
        "index": {
          "description": "Like shows except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "showsFinType",
          "normalized": "Fin a-\u003eShowS",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:showsFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"degeneracy maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard\n simplices. Traditionally spelled with sigma or eta. For each\n \u003ccode\u003ei\u003c/code\u003e, it is the unique surjective monotonic map that covers \u003ccode\u003ei\u003c/code\u003e\n twice. That is,\n\u003c/p\u003e\u003cpre\u003e thick i = (\\j -\u003e if j \u003c= i then j else pred j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thick i (i+1) == i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "thick",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n -\u003e Fin m",
          "source": "src/Data-Number-Fin-Int16.html#thick",
          "type": "function"
        },
        "index": {
          "description": "The degeneracy maps for Fin viewed as the standard simplices Traditionally spelled with sigma or eta For each it is the unique surjective monotonic map that covers twice That is thick if then else pred morally speaking Which has the important universal property that thick",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "thick",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n-\u003eFin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:thick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"face maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard simplices\n (aka: the thinning view). Traditionally spelled with delta or\n epsilon. For each \u003ccode\u003ei\u003c/code\u003e, it is the unique injective monotonic map\n that skips \u003ccode\u003ei\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e thin i = (\\j -\u003e if j \u003c i then j else succ j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thin i j /= i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "thin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int16.html#thin",
          "type": "function"
        },
        "index": {
          "description": "The face maps for Fin viewed as the standard simplices aka the thinning view Traditionally spelled with delta or epsilon For each it is the unique injective monotonic map that skips That is thin if then else succ morally speaking Which has the important universal property that thin",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "thin",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin n-\u003eFin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:thin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. Use of this function will\n generally require an explicit type signature in order to know\n which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "toFin",
          "package": "data-fin",
          "signature": "Int16 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int16.html#toFin",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "toFin",
          "normalized": "Int-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Int-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:toFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed integers into \u003ccode\u003eFin n\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the first\n argument. We use rank-2 polymorphism to render the type-level\n \u003ccode\u003en\u003c/code\u003e existentially quantified, thereby hiding the dependent type\n from the compiler. However, \u003ccode\u003en\u003c/code\u003e will in fact be a skolem, so we\n can't provide the continuation with proof that \u003ccode\u003eNat n\u003c/code\u003e ---\n unfortunately, rendering this function of little use.\n\u003c/p\u003e\u003cpre\u003e toFinCPS n k i\n     | 0 \u003c= i && i \u003c n  = Just (k i)  -- morally speaking...\n     | otherwise        = Nothing\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "toFinCPS",
          "package": "data-fin",
          "signature": "Fin n -\u003e r) -\u003e Int16 -\u003e Maybe r",
          "source": "src/Data-Number-Fin-Int16.html#toFinCPS",
          "type": "function"
        },
        "index": {
          "description": "Safely embed integers into Fin where is the first argument We use rank-2 polymorphism to render the type-level existentially quantified thereby hiding the dependent type from the compiler However will in fact be skolem so we can provide the continuation with proof that Nat unfortunately rendering this function of little use toFinCPS Just morally speaking otherwise Nothing",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "toFinCPS",
          "normalized": "Fin a-\u003eb)-\u003eInt-\u003eMaybe b",
          "package": "data-fin",
          "partial": "Fin CPS",
          "signature": "Fin n-\u003er)-\u003eInt-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:toFinCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. This variant of \u003ccode\u003e\u003ca\u003etoFin\u003c/a\u003e\u003c/code\u003e\n uses a proxy to avoid the need for type signatures.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "toFinProxy",
          "package": "data-fin",
          "signature": "Proxy n -\u003e Int16 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int16.html#toFinProxy",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin This variant of toFin uses proxy to avoid the need for type signatures",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "toFinProxy",
          "normalized": "Proxy a-\u003eInt-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin Proxy",
          "signature": "Proxy n-\u003eInt-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:toFinProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "unplus",
          "package": "data-fin",
          "signature": "Fin o -\u003e Either (Fin m) (Fin n)",
          "source": "src/Data-Number-Fin-Int16.html#unplus",
          "type": "function"
        },
        "index": {
          "description": "The inverse of plus",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "unplus",
          "normalized": "Fin a-\u003eEither(Fin b)(Fin c)",
          "package": "data-fin",
          "signature": "Fin o-\u003eEither(Fin m)(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:unplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e fromFin (weaken x) == fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "weaken",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int16.html#weaken",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to minBound That is fromFin weaken fromFin The opposite of this function is maxView maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "weaken",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:weaken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e which allows weakening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxViewLE\u003c/a\u003e\u003c/code\u003e. When the choice\n of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "weakenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int16.html#weakenLE",
          "type": "function"
        },
        "index": {
          "description": "variant of weaken which allows weakening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is maxViewLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "weakenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:weakenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE m o\u003c/code\u003e. This is the\n left half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "weakenPlus",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int16.html#weakenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of weakenLE because we cannot automatically deduce that Add NatLE This is the left half of plus",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "weakenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin m-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:weakenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is, we shift everything\n up by one:\n\u003c/p\u003e\u003cpre\u003e fromFin (widen x) == 1 + fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003epredView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "widen",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int16.html#widen",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to maxBound That is we shift everything up by one fromFin widen fromFin The opposite of this function is predView predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "widen",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:widen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into any larger one, keeping the same\n position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e maxBoundOf y - fromFin y == maxBoundOf x - fromFin x\n     where y = widenLE x\n\u003c/pre\u003e\u003cp\u003eUse of this function will generally require an explicit type\n signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "widenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int16.html#widenLE",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into any larger one keeping the same position relative to maxBound That is maxBoundOf fromFin maxBoundOf fromFin where widenLE Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "widenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:widenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003ewidenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE n o\u003c/code\u003e. This is the\n right half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int16",
          "name": "widenPlus",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int16.html#widenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of widenLE because we cannot automatically deduce that Add NatLE This is the right half of plus",
          "hierarchy": "Data Number Fin Int16",
          "module": "Data.Number.Fin.Int16",
          "name": "widenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin n-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int16.html#v:widenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA newtype of \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e for finite subsets of the natural numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "Int32",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int32.html",
          "type": "module"
        },
        "index": {
          "description": "newtype of Int32 for finite subsets of the natural numbers",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "Int32",
          "package": "data-fin",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finite set of integers \u003ccode\u003eFin n = { i :: Int32 | 0 \u003c= i \u003c n }\u003c/code\u003e\n with the usual ordering. This is typed as if using the standard\n GADT presentation of \u003ccode\u003eFin n\u003c/code\u003e, however it is actually implemented\n by a plain \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "Fin",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int32.html#Fin",
          "type": "data"
        },
        "index": {
          "description": "finite set of integers Fin Int32 with the usual ordering This is typed as if using the standard GADT presentation of Fin however it is actually implemented by plain Int32",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "Fin",
          "package": "data-fin",
          "partial": "Fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#t:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of a \u003ccode\u003eFin n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.,\u003c/em\u003e if somehow the \u003ccode\u003eFin n\u003c/code\u003e value was constructed invalidly,\n then this function will throw an exception. However, this should\n \u003cem\u003enever\u003c/em\u003e happen. If it does, contact the maintainer since this\n indicates a bug/insecurity in this library.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "fromFin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int32",
          "source": "src/Data-Number-Fin-Int32.html#fromFin",
          "type": "function"
        },
        "index": {
          "description": "Extract the value of Fin N.B if somehow the Fin value was constructed invalidly then this function will throw an exception However this should never happen If it does contact the maintainer since this indicates bug insecurity in this library",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "fromFin",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:fromFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always \u003ccode\u003en-1\u003c/code\u003e, but it's helpful because you may not know what\n \u003ccode\u003en\u003c/code\u003e is at the time.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "maxBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int32",
          "source": "src/Data-Number-Fin-Int32.html#maxBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the maxBound of Fin as plain integer This is always n-1 but it helpful because you may not know what is at the time",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "maxBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:maxBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum-element view. This strengthens the type by removing\n the maximum element:\n\u003c/p\u003e\u003cpre\u003e maxView maxBound = Nothing\n maxView x        = Just x  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "maxView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int32.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "The maximum-element view This strengthens the type by removing the maximum element maxView maxBound Nothing maxView Just morally speaking The opposite of this function is weaken maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "maxView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e which allows strengthening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003em\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e. When the choice of\n \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "maxViewLE",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int32.html#maxViewLE",
          "type": "function"
        },
        "index": {
          "description": "variant of maxView which allows strengthening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is weakenLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "maxViewLE",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View LE",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:maxViewLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always zero, but is provided for symmetry with \u003ccode\u003e\u003ca\u003emaxBoundOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "minBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int32",
          "source": "src/Data-Number-Fin-Int32.html#minBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the minBound of Fin as plain integer This is always zero but is provided for symmetry with maxBoundOf",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "minBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:minBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinal-sum functor, on objects. This internalizes the\n disjoint union, mapping \u003ccode\u003eFin m + Fin n\u003c/code\u003e into \u003ccode\u003eFin(m+n)\u003c/code\u003e by\n placing the image of the summands next to one another in the\n codomain, thereby preserving the structure of both summands.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "plus",
          "package": "data-fin",
          "signature": "Either (Fin m) (Fin n) -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int32.html#plus",
          "type": "function"
        },
        "index": {
          "description": "The ordinal-sum functor on objects This internalizes the disjoint union mapping Fin Fin into Fin by placing the image of the summands next to one another in the codomain thereby preserving the structure of both summands",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "plus",
          "normalized": "Either(Fin a)(Fin b)-\u003eFin c",
          "package": "data-fin",
          "signature": "Either(Fin m)(Fin n)-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predecessor view. This strengthens the type by shifting\n everything down by one:\n\u003c/p\u003e\u003cpre\u003e predView 0 = Nothing\n predView x = Just (x-1)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003ewiden\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "predView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int32.html#predView",
          "type": "function"
        },
        "index": {
          "description": "The predecessor view This strengthens the type by shifting everything down by one predView Nothing predView Just x-1 morally speaking The opposite of this function is widen predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "predView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:predView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "showFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e String",
          "source": "src/Data-Number-Fin-Int32.html#showFinType",
          "type": "function"
        },
        "index": {
          "description": "Like show except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "showFinType",
          "normalized": "Fin a-\u003eString",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:showFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "showsFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e ShowS",
          "source": "src/Data-Number-Fin-Int32.html#showsFinType",
          "type": "function"
        },
        "index": {
          "description": "Like shows except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "showsFinType",
          "normalized": "Fin a-\u003eShowS",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:showsFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"degeneracy maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard\n simplices. Traditionally spelled with sigma or eta. For each\n \u003ccode\u003ei\u003c/code\u003e, it is the unique surjective monotonic map that covers \u003ccode\u003ei\u003c/code\u003e\n twice. That is,\n\u003c/p\u003e\u003cpre\u003e thick i = (\\j -\u003e if j \u003c= i then j else pred j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thick i (i+1) == i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "thick",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n -\u003e Fin m",
          "source": "src/Data-Number-Fin-Int32.html#thick",
          "type": "function"
        },
        "index": {
          "description": "The degeneracy maps for Fin viewed as the standard simplices Traditionally spelled with sigma or eta For each it is the unique surjective monotonic map that covers twice That is thick if then else pred morally speaking Which has the important universal property that thick",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "thick",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n-\u003eFin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:thick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"face maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard simplices\n (aka: the thinning view). Traditionally spelled with delta or\n epsilon. For each \u003ccode\u003ei\u003c/code\u003e, it is the unique injective monotonic map\n that skips \u003ccode\u003ei\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e thin i = (\\j -\u003e if j \u003c i then j else succ j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thin i j /= i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "thin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int32.html#thin",
          "type": "function"
        },
        "index": {
          "description": "The face maps for Fin viewed as the standard simplices aka the thinning view Traditionally spelled with delta or epsilon For each it is the unique injective monotonic map that skips That is thin if then else succ morally speaking Which has the important universal property that thin",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "thin",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin n-\u003eFin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:thin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. Use of this function will\n generally require an explicit type signature in order to know\n which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "toFin",
          "package": "data-fin",
          "signature": "Int32 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int32.html#toFin",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "toFin",
          "normalized": "Int-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Int-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:toFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed integers into \u003ccode\u003eFin n\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the first\n argument. We use rank-2 polymorphism to render the type-level\n \u003ccode\u003en\u003c/code\u003e existentially quantified, thereby hiding the dependent type\n from the compiler. However, \u003ccode\u003en\u003c/code\u003e will in fact be a skolem, so we\n can't provide the continuation with proof that \u003ccode\u003eNat n\u003c/code\u003e ---\n unfortunately, rendering this function of little use.\n\u003c/p\u003e\u003cpre\u003e toFinCPS n k i\n     | 0 \u003c= i && i \u003c n  = Just (k i)  -- morally speaking...\n     | otherwise        = Nothing\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "toFinCPS",
          "package": "data-fin",
          "signature": "Fin n -\u003e r) -\u003e Int32 -\u003e Maybe r",
          "source": "src/Data-Number-Fin-Int32.html#toFinCPS",
          "type": "function"
        },
        "index": {
          "description": "Safely embed integers into Fin where is the first argument We use rank-2 polymorphism to render the type-level existentially quantified thereby hiding the dependent type from the compiler However will in fact be skolem so we can provide the continuation with proof that Nat unfortunately rendering this function of little use toFinCPS Just morally speaking otherwise Nothing",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "toFinCPS",
          "normalized": "Fin a-\u003eb)-\u003eInt-\u003eMaybe b",
          "package": "data-fin",
          "partial": "Fin CPS",
          "signature": "Fin n-\u003er)-\u003eInt-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:toFinCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. This variant of \u003ccode\u003e\u003ca\u003etoFin\u003c/a\u003e\u003c/code\u003e\n uses a proxy to avoid the need for type signatures.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "toFinProxy",
          "package": "data-fin",
          "signature": "Proxy n -\u003e Int32 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int32.html#toFinProxy",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin This variant of toFin uses proxy to avoid the need for type signatures",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "toFinProxy",
          "normalized": "Proxy a-\u003eInt-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin Proxy",
          "signature": "Proxy n-\u003eInt-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:toFinProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "unplus",
          "package": "data-fin",
          "signature": "Fin o -\u003e Either (Fin m) (Fin n)",
          "source": "src/Data-Number-Fin-Int32.html#unplus",
          "type": "function"
        },
        "index": {
          "description": "The inverse of plus",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "unplus",
          "normalized": "Fin a-\u003eEither(Fin b)(Fin c)",
          "package": "data-fin",
          "signature": "Fin o-\u003eEither(Fin m)(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:unplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e fromFin (weaken x) == fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "weaken",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int32.html#weaken",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to minBound That is fromFin weaken fromFin The opposite of this function is maxView maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "weaken",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:weaken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e which allows weakening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxViewLE\u003c/a\u003e\u003c/code\u003e. When the choice\n of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "weakenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int32.html#weakenLE",
          "type": "function"
        },
        "index": {
          "description": "variant of weaken which allows weakening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is maxViewLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "weakenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:weakenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE m o\u003c/code\u003e. This is the\n left half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "weakenPlus",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int32.html#weakenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of weakenLE because we cannot automatically deduce that Add NatLE This is the left half of plus",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "weakenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin m-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:weakenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is, we shift everything\n up by one:\n\u003c/p\u003e\u003cpre\u003e fromFin (widen x) == 1 + fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003epredView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "widen",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int32.html#widen",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to maxBound That is we shift everything up by one fromFin widen fromFin The opposite of this function is predView predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "widen",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:widen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into any larger one, keeping the same\n position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e maxBoundOf y - fromFin y == maxBoundOf x - fromFin x\n     where y = widenLE x\n\u003c/pre\u003e\u003cp\u003eUse of this function will generally require an explicit type\n signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "widenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int32.html#widenLE",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into any larger one keeping the same position relative to maxBound That is maxBoundOf fromFin maxBoundOf fromFin where widenLE Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "widenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:widenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003ewidenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE n o\u003c/code\u003e. This is the\n right half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int32",
          "name": "widenPlus",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int32.html#widenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of widenLE because we cannot automatically deduce that Add NatLE This is the right half of plus",
          "hierarchy": "Data Number Fin Int32",
          "module": "Data.Number.Fin.Int32",
          "name": "widenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin n-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int32.html#v:widenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA newtype of \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e for finite subsets of the natural numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "Int64",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int64.html",
          "type": "module"
        },
        "index": {
          "description": "newtype of Int64 for finite subsets of the natural numbers",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "Int64",
          "package": "data-fin",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finite set of integers \u003ccode\u003eFin n = { i :: Int64 | 0 \u003c= i \u003c n }\u003c/code\u003e\n with the usual ordering. This is typed as if using the standard\n GADT presentation of \u003ccode\u003eFin n\u003c/code\u003e, however it is actually implemented\n by a plain \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "Fin",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int64.html#Fin",
          "type": "data"
        },
        "index": {
          "description": "finite set of integers Fin Int64 with the usual ordering This is typed as if using the standard GADT presentation of Fin however it is actually implemented by plain Int64",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "Fin",
          "package": "data-fin",
          "partial": "Fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#t:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of a \u003ccode\u003eFin n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.,\u003c/em\u003e if somehow the \u003ccode\u003eFin n\u003c/code\u003e value was constructed invalidly,\n then this function will throw an exception. However, this should\n \u003cem\u003enever\u003c/em\u003e happen. If it does, contact the maintainer since this\n indicates a bug/insecurity in this library.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "fromFin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int64",
          "source": "src/Data-Number-Fin-Int64.html#fromFin",
          "type": "function"
        },
        "index": {
          "description": "Extract the value of Fin N.B if somehow the Fin value was constructed invalidly then this function will throw an exception However this should never happen If it does contact the maintainer since this indicates bug insecurity in this library",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "fromFin",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:fromFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always \u003ccode\u003en-1\u003c/code\u003e, but it's helpful because you may not know what\n \u003ccode\u003en\u003c/code\u003e is at the time.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "maxBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int64",
          "source": "src/Data-Number-Fin-Int64.html#maxBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the maxBound of Fin as plain integer This is always n-1 but it helpful because you may not know what is at the time",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "maxBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:maxBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum-element view. This strengthens the type by removing\n the maximum element:\n\u003c/p\u003e\u003cpre\u003e maxView maxBound = Nothing\n maxView x        = Just x  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "maxView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int64.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "The maximum-element view This strengthens the type by removing the maximum element maxView maxBound Nothing maxView Just morally speaking The opposite of this function is weaken maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "maxView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e which allows strengthening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003em\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e. When the choice of\n \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "maxViewLE",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int64.html#maxViewLE",
          "type": "function"
        },
        "index": {
          "description": "variant of maxView which allows strengthening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is weakenLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "maxViewLE",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View LE",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:maxViewLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always zero, but is provided for symmetry with \u003ccode\u003e\u003ca\u003emaxBoundOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "minBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int64",
          "source": "src/Data-Number-Fin-Int64.html#minBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the minBound of Fin as plain integer This is always zero but is provided for symmetry with maxBoundOf",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "minBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:minBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinal-sum functor, on objects. This internalizes the\n disjoint union, mapping \u003ccode\u003eFin m + Fin n\u003c/code\u003e into \u003ccode\u003eFin(m+n)\u003c/code\u003e by\n placing the image of the summands next to one another in the\n codomain, thereby preserving the structure of both summands.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "plus",
          "package": "data-fin",
          "signature": "Either (Fin m) (Fin n) -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int64.html#plus",
          "type": "function"
        },
        "index": {
          "description": "The ordinal-sum functor on objects This internalizes the disjoint union mapping Fin Fin into Fin by placing the image of the summands next to one another in the codomain thereby preserving the structure of both summands",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "plus",
          "normalized": "Either(Fin a)(Fin b)-\u003eFin c",
          "package": "data-fin",
          "signature": "Either(Fin m)(Fin n)-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predecessor view. This strengthens the type by shifting\n everything down by one:\n\u003c/p\u003e\u003cpre\u003e predView 0 = Nothing\n predView x = Just (x-1)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003ewiden\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "predView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int64.html#predView",
          "type": "function"
        },
        "index": {
          "description": "The predecessor view This strengthens the type by shifting everything down by one predView Nothing predView Just x-1 morally speaking The opposite of this function is widen predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "predView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:predView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "showFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e String",
          "source": "src/Data-Number-Fin-Int64.html#showFinType",
          "type": "function"
        },
        "index": {
          "description": "Like show except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "showFinType",
          "normalized": "Fin a-\u003eString",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:showFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "showsFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e ShowS",
          "source": "src/Data-Number-Fin-Int64.html#showsFinType",
          "type": "function"
        },
        "index": {
          "description": "Like shows except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "showsFinType",
          "normalized": "Fin a-\u003eShowS",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:showsFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"degeneracy maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard\n simplices. Traditionally spelled with sigma or eta. For each\n \u003ccode\u003ei\u003c/code\u003e, it is the unique surjective monotonic map that covers \u003ccode\u003ei\u003c/code\u003e\n twice. That is,\n\u003c/p\u003e\u003cpre\u003e thick i = (\\j -\u003e if j \u003c= i then j else pred j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thick i (i+1) == i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "thick",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n -\u003e Fin m",
          "source": "src/Data-Number-Fin-Int64.html#thick",
          "type": "function"
        },
        "index": {
          "description": "The degeneracy maps for Fin viewed as the standard simplices Traditionally spelled with sigma or eta For each it is the unique surjective monotonic map that covers twice That is thick if then else pred morally speaking Which has the important universal property that thick",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "thick",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n-\u003eFin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:thick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"face maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard simplices\n (aka: the thinning view). Traditionally spelled with delta or\n epsilon. For each \u003ccode\u003ei\u003c/code\u003e, it is the unique injective monotonic map\n that skips \u003ccode\u003ei\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e thin i = (\\j -\u003e if j \u003c i then j else succ j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thin i j /= i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "thin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int64.html#thin",
          "type": "function"
        },
        "index": {
          "description": "The face maps for Fin viewed as the standard simplices aka the thinning view Traditionally spelled with delta or epsilon For each it is the unique injective monotonic map that skips That is thin if then else succ morally speaking Which has the important universal property that thin",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "thin",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin n-\u003eFin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:thin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. Use of this function will\n generally require an explicit type signature in order to know\n which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "toFin",
          "package": "data-fin",
          "signature": "Int64 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int64.html#toFin",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "toFin",
          "normalized": "Int-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Int-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:toFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed integers into \u003ccode\u003eFin n\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the first\n argument. We use rank-2 polymorphism to render the type-level\n \u003ccode\u003en\u003c/code\u003e existentially quantified, thereby hiding the dependent type\n from the compiler. However, \u003ccode\u003en\u003c/code\u003e will in fact be a skolem, so we\n can't provide the continuation with proof that \u003ccode\u003eNat n\u003c/code\u003e ---\n unfortunately, rendering this function of little use.\n\u003c/p\u003e\u003cpre\u003e toFinCPS n k i\n     | 0 \u003c= i && i \u003c n  = Just (k i)  -- morally speaking...\n     | otherwise        = Nothing\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "toFinCPS",
          "package": "data-fin",
          "signature": "Fin n -\u003e r) -\u003e Int64 -\u003e Maybe r",
          "source": "src/Data-Number-Fin-Int64.html#toFinCPS",
          "type": "function"
        },
        "index": {
          "description": "Safely embed integers into Fin where is the first argument We use rank-2 polymorphism to render the type-level existentially quantified thereby hiding the dependent type from the compiler However will in fact be skolem so we can provide the continuation with proof that Nat unfortunately rendering this function of little use toFinCPS Just morally speaking otherwise Nothing",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "toFinCPS",
          "normalized": "Fin a-\u003eb)-\u003eInt-\u003eMaybe b",
          "package": "data-fin",
          "partial": "Fin CPS",
          "signature": "Fin n-\u003er)-\u003eInt-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:toFinCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. This variant of \u003ccode\u003e\u003ca\u003etoFin\u003c/a\u003e\u003c/code\u003e\n uses a proxy to avoid the need for type signatures.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "toFinProxy",
          "package": "data-fin",
          "signature": "Proxy n -\u003e Int64 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int64.html#toFinProxy",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin This variant of toFin uses proxy to avoid the need for type signatures",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "toFinProxy",
          "normalized": "Proxy a-\u003eInt-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin Proxy",
          "signature": "Proxy n-\u003eInt-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:toFinProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "unplus",
          "package": "data-fin",
          "signature": "Fin o -\u003e Either (Fin m) (Fin n)",
          "source": "src/Data-Number-Fin-Int64.html#unplus",
          "type": "function"
        },
        "index": {
          "description": "The inverse of plus",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "unplus",
          "normalized": "Fin a-\u003eEither(Fin b)(Fin c)",
          "package": "data-fin",
          "signature": "Fin o-\u003eEither(Fin m)(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:unplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e fromFin (weaken x) == fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "weaken",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int64.html#weaken",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to minBound That is fromFin weaken fromFin The opposite of this function is maxView maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "weaken",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:weaken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e which allows weakening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxViewLE\u003c/a\u003e\u003c/code\u003e. When the choice\n of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "weakenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int64.html#weakenLE",
          "type": "function"
        },
        "index": {
          "description": "variant of weaken which allows weakening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is maxViewLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "weakenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:weakenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE m o\u003c/code\u003e. This is the\n left half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "weakenPlus",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int64.html#weakenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of weakenLE because we cannot automatically deduce that Add NatLE This is the left half of plus",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "weakenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin m-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:weakenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is, we shift everything\n up by one:\n\u003c/p\u003e\u003cpre\u003e fromFin (widen x) == 1 + fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003epredView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "widen",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int64.html#widen",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to maxBound That is we shift everything up by one fromFin widen fromFin The opposite of this function is predView predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "widen",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:widen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into any larger one, keeping the same\n position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e maxBoundOf y - fromFin y == maxBoundOf x - fromFin x\n     where y = widenLE x\n\u003c/pre\u003e\u003cp\u003eUse of this function will generally require an explicit type\n signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "widenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int64.html#widenLE",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into any larger one keeping the same position relative to maxBound That is maxBoundOf fromFin maxBoundOf fromFin where widenLE Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "widenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:widenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003ewidenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE n o\u003c/code\u003e. This is the\n right half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int64",
          "name": "widenPlus",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int64.html#widenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of widenLE because we cannot automatically deduce that Add NatLE This is the right half of plus",
          "hierarchy": "Data Number Fin Int64",
          "module": "Data.Number.Fin.Int64",
          "name": "widenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin n-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int64.html#v:widenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA newtype of \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e for finite subsets of the natural numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "Int8",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int8.html",
          "type": "module"
        },
        "index": {
          "description": "newtype of Int8 for finite subsets of the natural numbers",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "Int8",
          "package": "data-fin",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finite set of integers \u003ccode\u003eFin n = { i :: Int8 | 0 \u003c= i \u003c n }\u003c/code\u003e\n with the usual ordering. This is typed as if using the standard\n GADT presentation of \u003ccode\u003eFin n\u003c/code\u003e, however it is actually implemented\n by a plain \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "Fin",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Int8.html#Fin",
          "type": "data"
        },
        "index": {
          "description": "finite set of integers Fin Int8 with the usual ordering This is typed as if using the standard GADT presentation of Fin however it is actually implemented by plain Int8",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "Fin",
          "package": "data-fin",
          "partial": "Fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#t:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of a \u003ccode\u003eFin n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.,\u003c/em\u003e if somehow the \u003ccode\u003eFin n\u003c/code\u003e value was constructed invalidly,\n then this function will throw an exception. However, this should\n \u003cem\u003enever\u003c/em\u003e happen. If it does, contact the maintainer since this\n indicates a bug/insecurity in this library.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "fromFin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int8",
          "source": "src/Data-Number-Fin-Int8.html#fromFin",
          "type": "function"
        },
        "index": {
          "description": "Extract the value of Fin N.B if somehow the Fin value was constructed invalidly then this function will throw an exception However this should never happen If it does contact the maintainer since this indicates bug insecurity in this library",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "fromFin",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:fromFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always \u003ccode\u003en-1\u003c/code\u003e, but it's helpful because you may not know what\n \u003ccode\u003en\u003c/code\u003e is at the time.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "maxBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int8",
          "source": "src/Data-Number-Fin-Int8.html#maxBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the maxBound of Fin as plain integer This is always n-1 but it helpful because you may not know what is at the time",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "maxBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:maxBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum-element view. This strengthens the type by removing\n the maximum element:\n\u003c/p\u003e\u003cpre\u003e maxView maxBound = Nothing\n maxView x        = Just x  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "maxView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int8.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "The maximum-element view This strengthens the type by removing the maximum element maxView maxBound Nothing maxView Just morally speaking The opposite of this function is weaken maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "maxView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e which allows strengthening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003em\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e. When the choice of\n \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "maxViewLE",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int8.html#maxViewLE",
          "type": "function"
        },
        "index": {
          "description": "variant of maxView which allows strengthening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is weakenLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "maxViewLE",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View LE",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:maxViewLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always zero, but is provided for symmetry with \u003ccode\u003e\u003ca\u003emaxBoundOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "minBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Int8",
          "source": "src/Data-Number-Fin-Int8.html#minBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the minBound of Fin as plain integer This is always zero but is provided for symmetry with maxBoundOf",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "minBoundOf",
          "normalized": "Fin a-\u003eInt",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:minBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinal-sum functor, on objects. This internalizes the\n disjoint union, mapping \u003ccode\u003eFin m + Fin n\u003c/code\u003e into \u003ccode\u003eFin(m+n)\u003c/code\u003e by\n placing the image of the summands next to one another in the\n codomain, thereby preserving the structure of both summands.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "plus",
          "package": "data-fin",
          "signature": "Either (Fin m) (Fin n) -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int8.html#plus",
          "type": "function"
        },
        "index": {
          "description": "The ordinal-sum functor on objects This internalizes the disjoint union mapping Fin Fin into Fin by placing the image of the summands next to one another in the codomain thereby preserving the structure of both summands",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "plus",
          "normalized": "Either(Fin a)(Fin b)-\u003eFin c",
          "package": "data-fin",
          "signature": "Either(Fin m)(Fin n)-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predecessor view. This strengthens the type by shifting\n everything down by one:\n\u003c/p\u003e\u003cpre\u003e predView 0 = Nothing\n predView x = Just (x-1)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003ewiden\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "predView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Int8.html#predView",
          "type": "function"
        },
        "index": {
          "description": "The predecessor view This strengthens the type by shifting everything down by one predView Nothing predView Just x-1 morally speaking The opposite of this function is widen predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "predView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:predView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "showFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e String",
          "source": "src/Data-Number-Fin-Int8.html#showFinType",
          "type": "function"
        },
        "index": {
          "description": "Like show except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "showFinType",
          "normalized": "Fin a-\u003eString",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:showFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "showsFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e ShowS",
          "source": "src/Data-Number-Fin-Int8.html#showsFinType",
          "type": "function"
        },
        "index": {
          "description": "Like shows except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "showsFinType",
          "normalized": "Fin a-\u003eShowS",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:showsFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"degeneracy maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard\n simplices. Traditionally spelled with sigma or eta. For each\n \u003ccode\u003ei\u003c/code\u003e, it is the unique surjective monotonic map that covers \u003ccode\u003ei\u003c/code\u003e\n twice. That is,\n\u003c/p\u003e\u003cpre\u003e thick i = (\\j -\u003e if j \u003c= i then j else pred j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thick i (i+1) == i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "thick",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n -\u003e Fin m",
          "source": "src/Data-Number-Fin-Int8.html#thick",
          "type": "function"
        },
        "index": {
          "description": "The degeneracy maps for Fin viewed as the standard simplices Traditionally spelled with sigma or eta For each it is the unique surjective monotonic map that covers twice That is thick if then else pred morally speaking Which has the important universal property that thick",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "thick",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n-\u003eFin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:thick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"face maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard simplices\n (aka: the thinning view). Traditionally spelled with delta or\n epsilon. For each \u003ccode\u003ei\u003c/code\u003e, it is the unique injective monotonic map\n that skips \u003ccode\u003ei\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e thin i = (\\j -\u003e if j \u003c i then j else succ j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thin i j /= i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "thin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int8.html#thin",
          "type": "function"
        },
        "index": {
          "description": "The face maps for Fin viewed as the standard simplices aka the thinning view Traditionally spelled with delta or epsilon For each it is the unique injective monotonic map that skips That is thin if then else succ morally speaking Which has the important universal property that thin",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "thin",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin n-\u003eFin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:thin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. Use of this function will\n generally require an explicit type signature in order to know\n which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "toFin",
          "package": "data-fin",
          "signature": "Int8 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int8.html#toFin",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "toFin",
          "normalized": "Int-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Int-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:toFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed integers into \u003ccode\u003eFin n\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the first\n argument. We use rank-2 polymorphism to render the type-level\n \u003ccode\u003en\u003c/code\u003e existentially quantified, thereby hiding the dependent type\n from the compiler. However, \u003ccode\u003en\u003c/code\u003e will in fact be a skolem, so we\n can't provide the continuation with proof that \u003ccode\u003eNat n\u003c/code\u003e ---\n unfortunately, rendering this function of little use.\n\u003c/p\u003e\u003cpre\u003e toFinCPS n k i\n     | 0 \u003c= i && i \u003c n  = Just (k i)  -- morally speaking...\n     | otherwise        = Nothing\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "toFinCPS",
          "package": "data-fin",
          "signature": "Fin n -\u003e r) -\u003e Int8 -\u003e Maybe r",
          "source": "src/Data-Number-Fin-Int8.html#toFinCPS",
          "type": "function"
        },
        "index": {
          "description": "Safely embed integers into Fin where is the first argument We use rank-2 polymorphism to render the type-level existentially quantified thereby hiding the dependent type from the compiler However will in fact be skolem so we can provide the continuation with proof that Nat unfortunately rendering this function of little use toFinCPS Just morally speaking otherwise Nothing",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "toFinCPS",
          "normalized": "Fin a-\u003eb)-\u003eInt-\u003eMaybe b",
          "package": "data-fin",
          "partial": "Fin CPS",
          "signature": "Fin n-\u003er)-\u003eInt-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:toFinCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. This variant of \u003ccode\u003e\u003ca\u003etoFin\u003c/a\u003e\u003c/code\u003e\n uses a proxy to avoid the need for type signatures.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "toFinProxy",
          "package": "data-fin",
          "signature": "Proxy n -\u003e Int8 -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Int8.html#toFinProxy",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin This variant of toFin uses proxy to avoid the need for type signatures",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "toFinProxy",
          "normalized": "Proxy a-\u003eInt-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin Proxy",
          "signature": "Proxy n-\u003eInt-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:toFinProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "unplus",
          "package": "data-fin",
          "signature": "Fin o -\u003e Either (Fin m) (Fin n)",
          "source": "src/Data-Number-Fin-Int8.html#unplus",
          "type": "function"
        },
        "index": {
          "description": "The inverse of plus",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "unplus",
          "normalized": "Fin a-\u003eEither(Fin b)(Fin c)",
          "package": "data-fin",
          "signature": "Fin o-\u003eEither(Fin m)(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:unplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e fromFin (weaken x) == fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "weaken",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int8.html#weaken",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to minBound That is fromFin weaken fromFin The opposite of this function is maxView maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "weaken",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:weaken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e which allows weakening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxViewLE\u003c/a\u003e\u003c/code\u003e. When the choice\n of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "weakenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int8.html#weakenLE",
          "type": "function"
        },
        "index": {
          "description": "variant of weaken which allows weakening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is maxViewLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "weakenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:weakenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE m o\u003c/code\u003e. This is the\n left half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "weakenPlus",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int8.html#weakenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of weakenLE because we cannot automatically deduce that Add NatLE This is the left half of plus",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "weakenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin m-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:weakenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is, we shift everything\n up by one:\n\u003c/p\u003e\u003cpre\u003e fromFin (widen x) == 1 + fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003epredView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "widen",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int8.html#widen",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to maxBound That is we shift everything up by one fromFin widen fromFin The opposite of this function is predView predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "widen",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:widen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into any larger one, keeping the same\n position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e maxBoundOf y - fromFin y == maxBoundOf x - fromFin x\n     where y = widenLE x\n\u003c/pre\u003e\u003cp\u003eUse of this function will generally require an explicit type\n signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "widenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Int8.html#widenLE",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into any larger one keeping the same position relative to maxBound That is maxBoundOf fromFin maxBoundOf fromFin where widenLE Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "widenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:widenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003ewidenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE n o\u003c/code\u003e. This is the\n right half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Int8",
          "name": "widenPlus",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin o",
          "source": "src/Data-Number-Fin-Int8.html#widenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of widenLE because we cannot automatically deduce that Add NatLE This is the right half of plus",
          "hierarchy": "Data Number Fin Int8",
          "module": "Data.Number.Fin.Int8",
          "name": "widenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin n-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Int8.html#v:widenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA newtype of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for finite subsets of the natural numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "Integer",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Integer.html",
          "type": "module"
        },
        "index": {
          "description": "newtype of Integer for finite subsets of the natural numbers",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "Integer",
          "package": "data-fin",
          "partial": "Integer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finite set of integers \u003ccode\u003eFin n = { i :: Integer | 0 \u003c= i \u003c n }\u003c/code\u003e\n with the usual ordering. This is typed as if using the standard\n GADT presentation of \u003ccode\u003eFin n\u003c/code\u003e, however it is actually implemented\n by a plain \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you care more about performance than mathematical accuracy,\n see \u003ca\u003eData.Number.Fin.Int32\u003c/a\u003e for an alternative implementation\n as a newtype of \u003ccode\u003eInt32\u003c/code\u003e. Note, however, that doing so makes it\n harder to reason about code since it introduces many corner\n cases.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "Fin",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-Integer.html#Fin",
          "type": "data"
        },
        "index": {
          "description": "finite set of integers Fin Integer with the usual ordering This is typed as if using the standard GADT presentation of Fin however it is actually implemented by plain Integer If you care more about performance than mathematical accuracy see Data.Number.Fin.Int32 for an alternative implementation as newtype of Int32 Note however that doing so makes it harder to reason about code since it introduces many corner cases",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "Fin",
          "package": "data-fin",
          "partial": "Fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#t:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of a \u003ccode\u003eFin n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.,\u003c/em\u003e if somehow the \u003ccode\u003eFin n\u003c/code\u003e value was constructed invalidly,\n then this function will throw an exception. However, this should\n \u003cem\u003enever\u003c/em\u003e happen. If it does, contact the maintainer since this\n indicates a bug/insecurity in this library.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "fromFin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Integer",
          "source": "src/Data-Number-Fin-Integer.html#fromFin",
          "type": "function"
        },
        "index": {
          "description": "Extract the value of Fin N.B if somehow the Fin value was constructed invalidly then this function will throw an exception However this should never happen If it does contact the maintainer since this indicates bug insecurity in this library",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "fromFin",
          "normalized": "Fin a-\u003eInteger",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Fin n-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:fromFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always \u003ccode\u003en-1\u003c/code\u003e, but it's helpful because you may not know what\n \u003ccode\u003en\u003c/code\u003e is at the time.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "maxBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Integer",
          "source": "src/Data-Number-Fin-Integer.html#maxBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the maxBound of Fin as plain integer This is always n-1 but it helpful because you may not know what is at the time",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "maxBoundOf",
          "normalized": "Fin a-\u003eInteger",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:maxBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum-element view. This strengthens the type by removing\n the maximum element:\n\u003c/p\u003e\u003cpre\u003e maxView maxBound = Nothing\n maxView x        = Just x  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "maxView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Integer.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "The maximum-element view This strengthens the type by removing the maximum element maxView maxBound Nothing maxView Just morally speaking The opposite of this function is weaken maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "maxView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e which allows strengthening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003em\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e. When the choice of\n \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "maxViewLE",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Integer.html#maxViewLE",
          "type": "function"
        },
        "index": {
          "description": "variant of maxView which allows strengthening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is weakenLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "maxViewLE",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View LE",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:maxViewLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eFin n\u003c/code\u003e as a plain integer. This is\n always zero, but is provided for symmetry with \u003ccode\u003e\u003ca\u003emaxBoundOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "minBoundOf",
          "package": "data-fin",
          "signature": "Fin n -\u003e Integer",
          "source": "src/Data-Number-Fin-Integer.html#minBoundOf",
          "type": "function"
        },
        "index": {
          "description": "Return the minBound of Fin as plain integer This is always zero but is provided for symmetry with maxBoundOf",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "minBoundOf",
          "normalized": "Fin a-\u003eInteger",
          "package": "data-fin",
          "partial": "Bound Of",
          "signature": "Fin n-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:minBoundOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinal-sum functor, on objects. This internalizes the\n disjoint union, mapping \u003ccode\u003eFin m + Fin n\u003c/code\u003e into \u003ccode\u003eFin(m+n)\u003c/code\u003e by\n placing the image of the summands next to one another in the\n codomain, thereby preserving the structure of both summands.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "plus",
          "package": "data-fin",
          "signature": "Either (Fin m) (Fin n) -\u003e Fin o",
          "source": "src/Data-Number-Fin-Integer.html#plus",
          "type": "function"
        },
        "index": {
          "description": "The ordinal-sum functor on objects This internalizes the disjoint union mapping Fin Fin into Fin by placing the image of the summands next to one another in the codomain thereby preserving the structure of both summands",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "plus",
          "normalized": "Either(Fin a)(Fin b)-\u003eFin c",
          "package": "data-fin",
          "signature": "Either(Fin m)(Fin n)-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predecessor view. This strengthens the type by shifting\n everything down by one:\n\u003c/p\u003e\u003cpre\u003e predView 0 = Nothing\n predView x = Just (x-1)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003ewiden\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "predView",
          "package": "data-fin",
          "signature": "Fin n -\u003e Maybe (Fin m)",
          "source": "src/Data-Number-Fin-Integer.html#predView",
          "type": "function"
        },
        "index": {
          "description": "The predecessor view This strengthens the type by shifting everything down by one predView Nothing predView Just x-1 morally speaking The opposite of this function is widen predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "predView",
          "normalized": "Fin a-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "View",
          "signature": "Fin n-\u003eMaybe(Fin m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:predView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "showFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e String",
          "source": "src/Data-Number-Fin-Integer.html#showFinType",
          "type": "function"
        },
        "index": {
          "description": "Like show except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "showFinType",
          "normalized": "Fin a-\u003eString",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:showFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e, except it shows the type itself instead of the\n value.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "showsFinType",
          "package": "data-fin",
          "signature": "Fin n -\u003e ShowS",
          "source": "src/Data-Number-Fin-Integer.html#showsFinType",
          "type": "function"
        },
        "index": {
          "description": "Like shows except it shows the type itself instead of the value",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "showsFinType",
          "normalized": "Fin a-\u003eShowS",
          "package": "data-fin",
          "partial": "Fin Type",
          "signature": "Fin n-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:showsFinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"degeneracy maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard\n simplices. Traditionally spelled with sigma or eta. For each\n \u003ccode\u003ei\u003c/code\u003e, it is the unique surjective monotonic map that covers \u003ccode\u003ei\u003c/code\u003e\n twice. That is,\n\u003c/p\u003e\u003cpre\u003e thick i = (\\j -\u003e if j \u003c= i then j else pred j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thick i (i+1) == i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "thick",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n -\u003e Fin m",
          "source": "src/Data-Number-Fin-Integer.html#thick",
          "type": "function"
        },
        "index": {
          "description": "The degeneracy maps for Fin viewed as the standard simplices Traditionally spelled with sigma or eta For each it is the unique surjective monotonic map that covers twice That is thick if then else pred morally speaking Which has the important universal property that thick",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "thick",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n-\u003eFin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:thick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"face maps\" for \u003ccode\u003eFin\u003c/code\u003e viewed as the standard simplices\n (aka: the thinning view). Traditionally spelled with delta or\n epsilon. For each \u003ccode\u003ei\u003c/code\u003e, it is the unique injective monotonic map\n that skips \u003ccode\u003ei\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e thin i = (\\j -\u003e if j \u003c i then j else succ j)  -- morally speaking...\n\u003c/pre\u003e\u003cp\u003eWhich has the important universal property that:\n\u003c/p\u003e\u003cpre\u003e thin i j /= i\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "thin",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Integer.html#thin",
          "type": "function"
        },
        "index": {
          "description": "The face maps for Fin viewed as the standard simplices aka the thinning view Traditionally spelled with delta or epsilon For each it is the unique injective monotonic map that skips That is thin if then else succ morally speaking Which has the important universal property that thin",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "thin",
          "normalized": "Fin a-\u003eFin b-\u003eFin a",
          "package": "data-fin",
          "signature": "Fin n-\u003eFin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:thin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. Use of this function will\n generally require an explicit type signature in order to know\n which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "toFin",
          "package": "data-fin",
          "signature": "Integer -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Integer.html#toFin",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "toFin",
          "normalized": "Integer-\u003eMaybe(Fin a)",
          "package": "data-fin",
          "partial": "Fin",
          "signature": "Integer-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:toFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed integers into \u003ccode\u003eFin n\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the first\n argument. We use rank-2 polymorphism to render the type-level\n \u003ccode\u003en\u003c/code\u003e existentially quantified, thereby hiding the dependent type\n from the compiler. However, \u003ccode\u003en\u003c/code\u003e will in fact be a skolem, so we\n can't provide the continuation with proof that \u003ccode\u003eNat n\u003c/code\u003e ---\n unfortunately, rendering this function of little use.\n\u003c/p\u003e\u003cpre\u003e toFinCPS n k i\n     | 0 \u003c= i && i \u003c n  = Just (k i)  -- morally speaking...\n     | otherwise        = Nothing\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "toFinCPS",
          "package": "data-fin",
          "signature": "Fin n -\u003e r) -\u003e Integer -\u003e Maybe r",
          "source": "src/Data-Number-Fin-Integer.html#toFinCPS",
          "type": "function"
        },
        "index": {
          "description": "Safely embed integers into Fin where is the first argument We use rank-2 polymorphism to render the type-level existentially quantified thereby hiding the dependent type from the compiler However will in fact be skolem so we can provide the continuation with proof that Nat unfortunately rendering this function of little use toFinCPS Just morally speaking otherwise Nothing",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "toFinCPS",
          "normalized": "Fin a-\u003eb)-\u003eInteger-\u003eMaybe b",
          "package": "data-fin",
          "partial": "Fin CPS",
          "signature": "Fin n-\u003er)-\u003eInteger-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:toFinCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely embed a number into \u003ccode\u003eFin n\u003c/code\u003e. This variant of \u003ccode\u003e\u003ca\u003etoFin\u003c/a\u003e\u003c/code\u003e\n uses a proxy to avoid the need for type signatures.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "toFinProxy",
          "package": "data-fin",
          "signature": "proxy n -\u003e Integer -\u003e Maybe (Fin n)",
          "source": "src/Data-Number-Fin-Integer.html#toFinProxy",
          "type": "function"
        },
        "index": {
          "description": "Safely embed number into Fin This variant of toFin uses proxy to avoid the need for type signatures",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "toFinProxy",
          "normalized": "a b-\u003eInteger-\u003eMaybe(Fin b)",
          "package": "data-fin",
          "partial": "Fin Proxy",
          "signature": "proxy n-\u003eInteger-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:toFinProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "unplus",
          "package": "data-fin",
          "signature": "Fin o -\u003e Either (Fin m) (Fin n)",
          "source": "src/Data-Number-Fin-Integer.html#unplus",
          "type": "function"
        },
        "index": {
          "description": "The inverse of plus",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "unplus",
          "normalized": "Fin a-\u003eEither(Fin b)(Fin c)",
          "package": "data-fin",
          "signature": "Fin o-\u003eEither(Fin m)(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:unplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e fromFin (weaken x) == fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxView . weaken                == Just\n maybe maxBound weaken . maxView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "weaken",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Integer.html#weaken",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to minBound That is fromFin weaken fromFin The opposite of this function is maxView maxView weaken Just maybe maxBound weaken maxView id",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "weaken",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:weaken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eweaken\u003c/a\u003e\u003c/code\u003e which allows weakening the type by\n multiple steps. Use of this function will generally require an\n explicit type signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003emaxViewLE\u003c/a\u003e\u003c/code\u003e. When the choice\n of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e is held constant, we have that:\n\u003c/p\u003e\u003cpre\u003e maxViewLE . weakenLE      == Just\n fmap weakenLE . maxViewLE == (\\i -\u003e if i \u003c m then Just i else Nothing)\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "weakenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Integer.html#weakenLE",
          "type": "function"
        },
        "index": {
          "description": "variant of weaken which allows weakening the type by multiple steps Use of this function will generally require an explicit type signature in order to know which to use The opposite of this function is maxViewLE When the choice of and is held constant we have that maxViewLE weakenLE Just fmap weakenLE maxViewLE if then Just else Nothing",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "weakenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:weakenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003eweakenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE m o\u003c/code\u003e. This is the\n left half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "weakenPlus",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin o",
          "source": "src/Data-Number-Fin-Integer.html#weakenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of weakenLE because we cannot automatically deduce that Add NatLE This is the left half of plus",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "weakenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin m-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:weakenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into the next larger one, keeping the\n same position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is, we shift everything\n up by one:\n\u003c/p\u003e\u003cpre\u003e fromFin (widen x) == 1 + fromFin x\n\u003c/pre\u003e\u003cp\u003eThe opposite of this function is \u003ccode\u003e\u003ca\u003epredView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e predView . widen         == Just\n maybe 0 widen . predView == id\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "widen",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Integer.html#widen",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into the next larger one keeping the same position relative to maxBound That is we shift everything up by one fromFin widen fromFin The opposite of this function is predView predView widen Just maybe widen predView id",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "widen",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:widen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a finite domain into any larger one, keeping the same\n position relative to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e. That is,\n\u003c/p\u003e\u003cpre\u003e maxBoundOf y - fromFin y == maxBoundOf x - fromFin x\n     where y = widenLE x\n\u003c/pre\u003e\u003cp\u003eUse of this function will generally require an explicit type\n signature in order to know which \u003ccode\u003en\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "widenLE",
          "package": "data-fin",
          "signature": "Fin m -\u003e Fin n",
          "source": "src/Data-Number-Fin-Integer.html#widenLE",
          "type": "function"
        },
        "index": {
          "description": "Embed finite domain into any larger one keeping the same position relative to maxBound That is maxBoundOf fromFin maxBoundOf fromFin where widenLE Use of this function will generally require an explicit type signature in order to know which to use",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "widenLE",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "LE",
          "signature": "Fin m-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:widenLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-signature variant of \u003ccode\u003e\u003ca\u003ewidenLE\u003c/a\u003e\u003c/code\u003e because we cannot\n automatically deduce that \u003ccode\u003eAdd m n o ==\u003e NatLE n o\u003c/code\u003e. This is the\n right half of \u003ccode\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.Integer",
          "name": "widenPlus",
          "package": "data-fin",
          "signature": "Fin n -\u003e Fin o",
          "source": "src/Data-Number-Fin-Integer.html#widenPlus",
          "type": "function"
        },
        "index": {
          "description": "type-signature variant of widenLE because we cannot automatically deduce that Add NatLE This is the right half of plus",
          "hierarchy": "Data Number Fin Integer",
          "module": "Data.Number.Fin.Integer",
          "name": "widenPlus",
          "normalized": "Fin a-\u003eFin b",
          "package": "data-fin",
          "partial": "Plus",
          "signature": "Fin n-\u003eFin o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-Integer.html#v:widenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-level decimal natural numbers. This is based on [1], and is\n intended to work with [2] (though we use the \u003ccode\u003ereflection\u003c/code\u003e package\n for the actual reification part).\n\u003c/p\u003e\u003cp\u003eRecent versions of GHC have type-level natural number literals.\n Ideally, this module would be completely obviated by that work.\n Unfortunately, the type-level literals aren't quite ready for\n prime time yet, because they do not have a solver. Thus, we're\n implementing here stuff that should be handled natively by GHC\n in the future. A lot of this also duplicates the functionality\n in \u003ccode\u003eHList:Data.HList.FakePrelude\u003c/code\u003e[3], which is (or should be)\n obviated by the new data kinds extension.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e1\u003c/dt\u003e\u003cdd\u003e Oleg Kiselyov and Chung-chieh Shan. (2007) \u003cem\u003eLightweight\u003c/em\u003e\n     \u003cem\u003estatic resources: Sexy types for embedded and systems\u003c/em\u003e\n     \u003cem\u003eprogramming\u003c/em\u003e. Proc. Trends in Functional Programming.\n     New York, 2--4 April 2007.\n     \u003ca\u003ehttp://okmij.org/ftp/Haskell/types.html#binary-arithm\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003e2\u003c/dt\u003e\u003cdd\u003e Oleg Kiselyov and Chung-chieh Shan. (2004) \u003cem\u003eImplicit\u003c/em\u003e\n     \u003cem\u003econfigurations: or, type classes reflect the values of\u003c/em\u003e\n     \u003cem\u003etypes\u003c/em\u003e. Proc. ACM SIGPLAN 2004 workshop on Haskell.\n     Snowbird, Utah, USA, 22 September 2004. pp.33--44.\n     \u003ca\u003ehttp://okmij.org/ftp/Haskell/types.html#Prepose\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003e3\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://hackage.haskell.org/package/HList\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "TyDecimal",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html",
          "type": "module"
        },
        "index": {
          "description": "Type-level decimal natural numbers This is based on and is intended to work with though we use the reflection package for the actual reification part Recent versions of GHC have type-level natural number literals Ideally this module would be completely obviated by that work Unfortunately the type-level literals aren quite ready for prime time yet because they do not have solver Thus we re implementing here stuff that should be handled natively by GHC in the future lot of this also duplicates the functionality in HList Data.HList.FakePrelude which is or should be obviated by the new data kinds extension Oleg Kiselyov and Chung-chieh Shan Lightweight static resources Sexy types for embedded and systems programming Proc Trends in Functional Programming New York April http okmij.org ftp Haskell types.html binary-arithm Oleg Kiselyov and Chung-chieh Shan Implicit configurations or type classes reflect the values of types Proc ACM SIGPLAN workshop on Haskell Snowbird Utah USA September pp.33--44 http okmij.org ftp Haskell types.html Prepose http hackage.haskell.org package HList",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "TyDecimal",
          "package": "data-fin",
          "partial": "Ty Decimal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe connective. This should only be used left associatively\n (it associates to the left naturally). Decimal digits are\n lexicographically big-endian, so they're written as usual;\n however, they're structurally little-endian due to the left\n associativity.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": ":.",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#%3A.",
          "type": "data"
        },
        "index": {
          "description": "The connective This should only be used left associatively it associates to the left naturally Decimal digits are lexicographically big-endian so they re written as usual however they re structurally little-endian due to the left associativity",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": ":.",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe addition relation with full dependencies. Modes:\n\u003c/p\u003e\u003cpre\u003e Add x y (x+y)\n Add x (z-x) z  -- when it's defined.\n Add (z-y) y z  -- when it's defined.\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Add",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#Add",
          "type": "class"
        },
        "index": {
          "description": "The addition relation with full dependencies Modes Add Add z-x when it defined Add z-y when it defined",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Add",
          "package": "data-fin",
          "partial": "Add",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that the comparison relation \u003ccode\u003er\u003c/code\u003e (\u003ccode\u003eLT_\u003c/code\u003e, \u003ccode\u003eEQ_\u003c/code\u003e, or\n \u003ccode\u003eGT_\u003c/code\u003e) holds between \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e; by structural induction on the\n first, and then the second argument.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Compare",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#Compare",
          "type": "class"
        },
        "index": {
          "description": "Assert that the comparison relation LT EQ or GT holds between and by structural induction on the first and then the second argument",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Compare",
          "package": "data-fin",
          "partial": "Compare",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:Compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 0.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D0",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D0",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D0",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 1.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D1",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D1",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D1",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 2.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D2",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D2",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D2",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 3.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D3",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D3",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D3",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 4.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D4",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D4",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D4",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 5.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D5",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D5",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D5",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 6.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D6",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D6",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D6",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 7.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D7",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D7",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D7",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 8.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D8",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D8",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D8",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe digit 9.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D9",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#D9",
          "type": "data"
        },
        "index": {
          "description": "The digit",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "D9",
          "package": "data-fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:D9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "EQ_",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyOrdering.html#EQ_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "EQ_",
          "package": "data-fin",
          "partial": "EQ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:EQ_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "GT_",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyOrdering.html#GT_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "GT_",
          "package": "data-fin",
          "partial": "GT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:GT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "LT_",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyOrdering.html#LT_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "LT_",
          "package": "data-fin",
          "partial": "LT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:LT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt16",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundInt16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt16",
          "package": "data-fin",
          "partial": "Max Bound Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt32",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundInt32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt32",
          "package": "data-fin",
          "partial": "Max Bound Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt64",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundInt64",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt64",
          "package": "data-fin",
          "partial": "Max Bound Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt8",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundInt8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundInt8",
          "package": "data-fin",
          "partial": "Max Bound Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord16",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundWord16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord16",
          "package": "data-fin",
          "partial": "Max Bound Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord32",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundWord32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord32",
          "package": "data-fin",
          "partial": "Max Bound Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord64",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundWord64",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord64",
          "package": "data-fin",
          "partial": "Max Bound Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord8",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#MaxBoundWord8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "MaxBoundWord8",
          "package": "data-fin",
          "partial": "Max Bound Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:MaxBoundWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003en\u003c/code\u003e a well-formed type of kind \u003ccode\u003eNat\u003c/code\u003e? The only well-formed\n types of kind \u003ccode\u003eNat\u003c/code\u003e are type-level natural numbers in structurally\n little-endian decimal.\n\u003c/p\u003e\u003cp\u003eThe hidden type class \u003ccode\u003e(Nat_ n)\u003c/code\u003e entails \u003ccode\u003e(Reifies n Integer)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Nat",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#Nat",
          "type": "class"
        },
        "index": {
          "description": "Is well-formed type of kind Nat The only well-formed types of kind Nat are type-level natural numbers in structurally little-endian decimal The hidden type class Nat entails Reifies Integer",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Nat",
          "package": "data-fin",
          "partial": "Nat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that \u003ccode\u003ex \u003c= y\u003c/code\u003e. This is a popular constraint, so we\n implement it specially. We could have said that \u003ccode\u003eAdd n x y =\u003e\n NatLE x y\u003c/code\u003e, but the following inductive definition is a bit\n more optimal.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "NatLE",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#NatLE",
          "type": "class"
        },
        "index": {
          "description": "Assert that This is popular constraint so we implement it specially We could have said that Add NatLE but the following inductive definition is bit more optimal",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "NatLE",
          "package": "data-fin",
          "partial": "Nat LE",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:NatLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that \u003ccode\u003ex \u003c y\u003c/code\u003e. This is just a shorthand for \u003ccode\u003ex \u003c= pred y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "NatLT",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#NatLT",
          "type": "class"
        },
        "index": {
          "description": "Assert that This is just shorthand for pred",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "NatLT",
          "package": "data-fin",
          "partial": "Nat LT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:NatLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003en\u003c/code\u003e a well-formed type of kind \u003ccode\u003eNatNE0\u003c/code\u003e? The only well-formed\n types of kind \u003ccode\u003eNatNE0\u003c/code\u003e are the non-zero well-formed types of\n kind \u003ccode\u003eNat\u003c/code\u003e;, i.e., the type-level whole numbers in structurally\n little-endian decimal.\n\u003c/p\u003e\u003cp\u003eThe hidden type class \u003ccode\u003e(NatNE0_ n)\u003c/code\u003e entails \u003ccode\u003e(Nat_ n)\u003c/code\u003e and\n \u003ccode\u003e(Reifies n Integer)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "NatNE0",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#NatNE0",
          "type": "class"
        },
        "index": {
          "description": "Is well-formed type of kind NatNE0 The only well-formed types of kind NatNE0 are the non-zero well-formed types of kind Nat i.e the type-level whole numbers in structurally little-endian decimal The hidden type class NatNE0 entails Nat and Reifies Integer",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "NatNE0",
          "package": "data-fin",
          "partial": "Nat NE",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:NatNE0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe successor/predecessor relation; by structural induction\n on the first argument. Modes:\n\u003c/p\u003e\u003cpre\u003e Succ x (succ x)  -- i.e., given x, return the successor of x\n Succ (pred y) y  -- i.e., given y, return the predecessor of y\n\u003c/pre\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Succ",
          "package": "data-fin",
          "source": "src/Data-Number-Fin-TyDecimal.html#Succ",
          "type": "class"
        },
        "index": {
          "description": "The successor predecessor relation by structural induction on the first argument Modes Succ succ i.e given return the successor of Succ pred i.e given return the predecessor of",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "Succ",
          "package": "data-fin",
          "partial": "Succ",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#t:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "add",
          "package": "data-fin",
          "signature": "Proxy x -\u003e Proxy y -\u003e Proxy z",
          "source": "src/Data-Number-Fin-TyDecimal.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "add",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
          "package": "data-fin",
          "signature": "Proxy x-\u003eProxy y-\u003eProxy z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN.B., this will be ill-typed if \u003ccode\u003ex\u003c/code\u003e is greater than \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "assert_NatLE",
          "package": "data-fin",
          "signature": "Proxy x -\u003e Proxy y -\u003e ()",
          "source": "src/Data-Number-Fin-TyDecimal.html#assert_NatLE",
          "type": "function"
        },
        "index": {
          "description": "N.B this will be ill-typed if is greater than",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "assert_NatLE",
          "normalized": "Proxy a-\u003eProxy b-\u003e()",
          "package": "data-fin",
          "partial": "Nat LE",
          "signature": "Proxy x-\u003eProxy y-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:assert_NatLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "compare",
          "package": "data-fin",
          "signature": "Proxy x -\u003e Proxy y -\u003e Proxy r",
          "source": "src/Data-Number-Fin-TyDecimal.html#compare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "compare",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
          "package": "data-fin",
          "signature": "Proxy x-\u003eProxy y-\u003eProxy r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose the larger of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "max",
          "package": "data-fin",
          "signature": "Proxy x -\u003e Proxy y -\u003e Proxy z",
          "source": "src/Data-Number-Fin-TyDecimal.html#max",
          "type": "function"
        },
        "index": {
          "description": "Choose the larger of and",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "max",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
          "package": "data-fin",
          "signature": "Proxy x-\u003eProxy y-\u003eProxy z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose the smaller of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "min",
          "package": "data-fin",
          "signature": "Proxy x -\u003e Proxy y -\u003e Proxy z",
          "source": "src/Data-Number-Fin-TyDecimal.html#min",
          "type": "function"
        },
        "index": {
          "description": "Choose the smaller of and",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "min",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
          "package": "data-fin",
          "signature": "Proxy x-\u003eProxy y-\u003eProxy z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN.B., this will be ill-typed if \u003ccode\u003ex\u003c/code\u003e is greater than \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "minus",
          "package": "data-fin",
          "signature": "Proxy z -\u003e Proxy x -\u003e Proxy y",
          "source": "src/Data-Number-Fin-TyDecimal.html#minus",
          "type": "function"
        },
        "index": {
          "description": "N.B this will be ill-typed if is greater than",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "minus",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
          "package": "data-fin",
          "signature": "Proxy z-\u003eProxy x-\u003eProxy y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat0",
          "package": "data-fin",
          "signature": "Proxy D0",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat0",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat1",
          "package": "data-fin",
          "signature": "Proxy D1",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat1",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat2",
          "package": "data-fin",
          "signature": "Proxy D2",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat2",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat3",
          "package": "data-fin",
          "signature": "Proxy D3",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat3",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat4",
          "package": "data-fin",
          "signature": "Proxy D4",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat4",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat5",
          "package": "data-fin",
          "signature": "Proxy D5",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat5",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat6",
          "package": "data-fin",
          "signature": "Proxy D6",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat6",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat7",
          "package": "data-fin",
          "signature": "Proxy D7",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat7",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat8",
          "package": "data-fin",
          "signature": "Proxy D8",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat8",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat9",
          "package": "data-fin",
          "signature": "Proxy D9",
          "source": "src/Data-Number-Fin-TyDecimal.html#nat9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "nat9",
          "package": "data-fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:nat9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "pred",
          "package": "data-fin",
          "signature": "Proxy y -\u003e Proxy x",
          "source": "src/Data-Number-Fin-TyDecimal.html#pred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "pred",
          "normalized": "Proxy a-\u003eProxy b",
          "package": "data-fin",
          "signature": "Proxy y-\u003eProxy x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN.B., this will be ill-typed if \u003ccode\u003ex\u003c/code\u003e is greater than \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "subtract",
          "package": "data-fin",
          "signature": "Proxy x -\u003e Proxy z -\u003e Proxy y",
          "source": "src/Data-Number-Fin-TyDecimal.html#subtract",
          "type": "function"
        },
        "index": {
          "description": "N.B this will be ill-typed if is greater than",
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "subtract",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
          "package": "data-fin",
          "signature": "Proxy x-\u003eProxy z-\u003eProxy y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fin.TyDecimal",
          "name": "succ",
          "package": "data-fin",
          "signature": "Proxy x -\u003e Proxy y",
          "source": "src/Data-Number-Fin-TyDecimal.html#succ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fin TyDecimal",
          "module": "Data.Number.Fin.TyDecimal",
          "name": "succ",
          "normalized": "Proxy a-\u003eProxy b",
          "package": "data-fin",
          "signature": "Proxy x-\u003eProxy y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin-TyDecimal.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNewtypes of built-in numeric types for finite subsets of the\n natural numbers. The default implementation is the newtype of\n \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, since the type-level numbers are unbounded so this\n is the most natural. Alternative implementations are available\n as nearly drop-in replacements. The reason for using modules\n that provide the same API, rather than using type classes or\n type families, is that those latter approaches introduce a lot\n of additional complexity for very little benefit. Using multiple\n different representations of finite sets in the same module seems\n like an uncommon use case. Albeit, this impedes writing\n representation-agnostic functions...\n\u003c/p\u003e\u003cp\u003eWhen the underlying type can only represent finitely many values,\n this introduces many corner cases which makes reasoning about\n programs more difficult. However, the main use case for these\n finite representations is because we know we'll only be dealing\n with \"small\" sets, so we'll never actually encounter the corner\n cases. Thus, this library does not try to handle the corner\n cases, but rather rules them out with the type system.\n\u003c/p\u003e\u003cp\u003eMany of the operations on finite sets arise from the (skeleton\n of the) augmented simplex category. For example, the ordinal-sum\n functor provides the monoidal structure of that category. For\n more details on the mathematics, see\n \u003ca\u003ehttp://ncatlab.org/nlab/show/simplex+category\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Fin",
          "name": "Fin",
          "package": "data-fin",
          "source": "src/Data-Number-Fin.html",
          "type": "module"
        },
        "index": {
          "description": "Newtypes of built-in numeric types for finite subsets of the natural numbers The default implementation is the newtype of Integer since the type-level numbers are unbounded so this is the most natural Alternative implementations are available as nearly drop-in replacements The reason for using modules that provide the same API rather than using type classes or type families is that those latter approaches introduce lot of additional complexity for very little benefit Using multiple different representations of finite sets in the same module seems like an uncommon use case Albeit this impedes writing representation-agnostic functions When the underlying type can only represent finitely many values this introduces many corner cases which makes reasoning about programs more difficult However the main use case for these finite representations is because we know we ll only be dealing with small sets so we ll never actually encounter the corner cases Thus this library does not try to handle the corner cases but rather rules them out with the type system Many of the operations on finite sets arise from the skeleton of the augmented simplex category For example the ordinal-sum functor provides the monoidal structure of that category For more details on the mathematics see http ncatlab.org nlab show simplex category",
          "hierarchy": "Data Number Fin",
          "module": "Data.Number.Fin",
          "name": "Fin",
          "package": "data-fin",
          "partial": "Fin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fin/docs/Data-Number-Fin.html#"
      }
    }
  ]
]