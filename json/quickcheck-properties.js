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
        "word": "quickcheck-properties"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of delayed comparison and composition of\n   properties\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Internal",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of delayed comparison and composition of properties",
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Internal",
          "package": "quickcheck-properties",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues to be compared for equality\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Equal",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#Equal",
          "type": "data"
        },
        "index": {
          "description": "Values to be compared for equality",
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Equal",
          "package": "quickcheck-properties",
          "partial": "Equal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#t:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecurse through function to apply comparison to \u003ccode\u003e\u003ca\u003eEqual\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Equalable",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#Equalable",
          "type": "class"
        },
        "index": {
          "description": "Recurse through function to apply comparison to Equal",
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Equalable",
          "package": "quickcheck-properties",
          "partial": "Equalable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#t:Equalable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "AndE",
          "package": "quickcheck-properties",
          "signature": "AndE (Equal a) (Equal a)",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "AndE",
          "package": "quickcheck-properties",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:AndE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Equal",
          "package": "quickcheck-properties",
          "signature": "Equal a a",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "Equal",
          "package": "quickcheck-properties",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "NotE",
          "package": "quickcheck-properties",
          "signature": "NotE (Equal a)",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "NotE",
          "package": "quickcheck-properties",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:NotE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "OrE",
          "package": "quickcheck-properties",
          "signature": "OrE (Equal a) (Equal a)",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "OrE",
          "package": "quickcheck-properties",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:OrE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare value using custom comparison function\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "equalWith",
          "package": "quickcheck-properties",
          "signature": "(Result a -\u003e Result a -\u003e Bool) -\u003e a -\u003e Compared a",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#equalWith",
          "type": "method"
        },
        "index": {
          "description": "Compare value using custom comparison function",
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "equalWith",
          "normalized": "(Result a-\u003eResult a-\u003eBool)-\u003ea-\u003eCompared a",
          "package": "quickcheck-properties",
          "partial": "With",
          "signature": "(Result a-\u003eResult a-\u003eBool)-\u003ea-\u003eCompared a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:equalWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap property \n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "mapEqual",
          "package": "quickcheck-properties",
          "signature": "(Equal (Result a) -\u003e Equal (Result a)) -\u003e a -\u003e a",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#mapEqual",
          "type": "method"
        },
        "index": {
          "description": "Map property",
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "mapEqual",
          "normalized": "(Equal(Result a)-\u003eEqual(Result a))-\u003ea-\u003ea",
          "package": "quickcheck-properties",
          "partial": "Equal",
          "signature": "(Equal(Result a)-\u003eEqual(Result a))-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:mapEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate boolean expression inside \u003ccode\u003e\u003ca\u003eEqual\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "runEqual",
          "package": "quickcheck-properties",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Equal a -\u003e Bool",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#runEqual",
          "type": "function"
        },
        "index": {
          "description": "Evaluate boolean expression inside Equal",
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "runEqual",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eEqual a-\u003eBool",
          "package": "quickcheck-properties",
          "partial": "Equal",
          "signature": "(a-\u003ea-\u003eBool)-\u003eEqual a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:runEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip properties\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "zipEquals",
          "package": "quickcheck-properties",
          "signature": "(Equal (Result a) -\u003e Equal (Result a) -\u003e Equal (Result a)) -\u003e a -\u003e a -\u003e a",
          "source": "src/Test-QuickCheck-Property-Common-Internal.html#zipEquals",
          "type": "method"
        },
        "index": {
          "description": "Zip properties",
          "hierarchy": "Test QuickCheck Property Common Internal",
          "module": "Test.QuickCheck.Property.Common.Internal",
          "name": "zipEquals",
          "normalized": "(Equal(Result a)-\u003eEqual(Result a)-\u003eEqual(Result a))-\u003ea-\u003ea-\u003ea",
          "package": "quickcheck-properties",
          "partial": "Equals",
          "signature": "(Equal(Result a)-\u003eEqual(Result a)-\u003eEqual(Result a))-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common-Internal.html#v:zipEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provide set of generic properties for laws of standard\n type classes and limited way to compose them. Here are some\n examples:\n\u003c/p\u003e\u003cp\u003eTesting monoid laws\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equickCheck $ eq $ prop_Monoid (T :: T [Int])\n\u003c/code\u003e\u003c/strong\u003e+++ OK, passed 100 tests.\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equickCheck $ eq $ prop_Monoid (T :: T (Maybe [Int]))\n\u003c/code\u003e\u003c/strong\u003e+++ OK, passed 100 tests.\n\u003c/pre\u003e\u003cp\u003eTesting functor laws\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equickCheck $ eq $ prop_FunctorCompose (+2) (+199) (T :: T [Int])\n\u003c/code\u003e\u003c/strong\u003e+++ OK, passed 100 tests.\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eFixing type\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAll properties in this library are polymorphic. For example\n property for checking associativity of \u003ccode\u003emappend\u003c/code\u003e could have\n following type:\n\u003c/p\u003e\u003cpre\u003e prop_mappend :: (Eq a, Monoid a) =\u003e a -\u003e a -\u003e a -\u003e Bool\n\u003c/pre\u003e\u003cp\u003eBut if one tries to pass this expression to \u003ccode\u003equickCheck\u003c/code\u003e GHC will\n rightfully complain that type is too generic. Indeed there is no\n way to figure out what is type of a. Obvious way to fix type of \u003ccode\u003ea\u003c/code\u003e\n is to add type signature. However it's too cumbersome to write\n signature for 3 parameter function. \n\u003c/p\u003e\u003cp\u003eAnother approach was taken instead. All properties take dummy\n parameter which fix type:\n\u003c/p\u003e\u003cpre\u003e prop_Mappend :: (Eq a, Monoid a) =\u003e T a -\u003e a -\u003e a -\u003e a -\u003e Bool\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is phanom typed unit. It ensures that only type information\n could be passed to function. For example test invokation could look\n like this:\n\u003c/p\u003e\u003cpre\u003e quickCheck $ prop_Mappend (T :: T [Int])\n\u003c/pre\u003e\u003cp\u003eBy convention all user supplied parameters are placed before T and\n all quickcheck supplied parameters are after T.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComparing for equality\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA lot of QuickCheck properties have form \u003ccode\u003eexpression = another\n expression\u003c/code\u003e. It's natural to compare them for equality however not\n all types have \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance. Functions are most prominent example.\n\u003c/p\u003e\u003cp\u003eThere are three generic ways to compare values for equality.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e operator\n\u003c/li\u003e\u003cli\u003e Convert value to some type with Eq instance and compare\n     them. Caller must ensure that such conversion make sence\n\u003c/li\u003e\u003cli\u003e Most generic: use custom comparison function.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eFunctions \u003ccode\u003e\u003ca\u003eeq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eeqOn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eeqWith\u003c/a\u003e\u003c/code\u003e transform property with delayed\n comparison of equality to one which could be tested with quickCheck.\n\u003c/p\u003e\u003cp\u003eThis approach naturally generelizes to arbitrary boolean\n expressions of properties with this form. \n\u003c/p\u003e\u003cp\u003eDelaying of comparison and composition of properties is implemented\n using \u003ccode\u003e\u003ca\u003eEqual\u003c/a\u003e\u003c/code\u003e data type and \u003ccode\u003e\u003ca\u003eEqualable\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "Common",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Common.html",
          "type": "module"
        },
        "index": {
          "description": "This library provide set of generic properties for laws of standard type classes and limited way to compose them Here are some examples Testing monoid laws quickCheck eq prop Monoid Int OK passed tests quickCheck eq prop Monoid Maybe Int OK passed tests Testing functor laws quickCheck eq prop FunctorCompose Int OK passed tests Fixing type All properties in this library are polymorphic For example property for checking associativity of mappend could have following type prop mappend Eq Monoid Bool But if one tries to pass this expression to quickCheck GHC will rightfully complain that type is too generic Indeed there is no way to figure out what is type of Obvious way to fix type of is to add type signature However it too cumbersome to write signature for parameter function Another approach was taken instead All properties take dummy parameter which fix type prop Mappend Eq Monoid Bool is phanom typed unit It ensures that only type information could be passed to function For example test invokation could look like this quickCheck prop Mappend Int By convention all user supplied parameters are placed before and all quickcheck supplied parameters are after Comparing for equality lot of QuickCheck properties have form expression another expression It natural to compare them for equality however not all types have Eq instance Functions are most prominent example There are three generic ways to compare values for equality Use operator Convert value to some type with Eq instance and compare them Caller must ensure that such conversion make sence Most generic use custom comparison function Functions eq eqOn and eqWith transform property with delayed comparison of equality to one which could be tested with quickCheck This approach naturally generelizes to arbitrary boolean expressions of properties with this form Delaying of comparison and composition of properties is implemented using Equal data type and Equalable type class",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "Common",
          "package": "quickcheck-properties",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type is used to fix concrete data in properties\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "T",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Common.html#T",
          "type": "data"
        },
        "index": {
          "description": "Data type is used to fix concrete data in properties",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "T",
          "package": "quickcheck-properties",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne of properties is true\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "(.||.)",
          "package": "quickcheck-properties",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Test-QuickCheck-Property-Common.html#.%7C%7C.",
          "type": "function"
        },
        "index": {
          "description": "One of properties is true",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "(.||.) .||.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "quickcheck-properties",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth properties are true.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "(.&&.)",
          "package": "quickcheck-properties",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Test-QuickCheck-Property-Common.html#.%26%26.",
          "type": "function"
        },
        "index": {
          "description": "Both properties are true",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "(.&&.) .&&.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "quickcheck-properties",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience sinonym for \u003ccode\u003e\u003ca\u003eEqual\u003c/a\u003e\u003c/code\u003e. Delay comparison for equality\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "(.==.)",
          "package": "quickcheck-properties",
          "signature": "a -\u003e a -\u003e Equal a",
          "source": "src/Test-QuickCheck-Property-Common.html#.%3D%3D.",
          "type": "function"
        },
        "index": {
          "description": "Convenience sinonym for Equal Delay comparison for equality",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "(.==.) .==.",
          "normalized": "a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "signature": "a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property.Common",
          "name": "T",
          "package": "quickcheck-properties",
          "signature": "T",
          "source": "src/Test-QuickCheck-Property-Common.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "T",
          "package": "quickcheck-properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare values using \u003ccode\u003e==\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "eq",
          "package": "quickcheck-properties",
          "signature": "a -\u003e Compared a",
          "source": "src/Test-QuickCheck-Property-Common.html#eq",
          "type": "function"
        },
        "index": {
          "description": "Compare values using",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "eq",
          "normalized": "a-\u003eCompared a",
          "package": "quickcheck-properties",
          "signature": "a-\u003eCompared a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert values to types which could be compare\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "eqOn",
          "package": "quickcheck-properties",
          "signature": "(Result a -\u003e b) -\u003e a -\u003e Compared a",
          "source": "src/Test-QuickCheck-Property-Common.html#eqOn",
          "type": "function"
        },
        "index": {
          "description": "Convert values to types which could be compare",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "eqOn",
          "normalized": "(Result a-\u003eb)-\u003ea-\u003eCompared a",
          "package": "quickcheck-properties",
          "partial": "On",
          "signature": "(Result a-\u003eb)-\u003ea-\u003eCompared a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:eqOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare with custom function. Just a shorter sinonym for equalWith\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "eqWith",
          "package": "quickcheck-properties",
          "signature": "(Result a -\u003e Result a -\u003e Bool) -\u003e a -\u003e Compared a",
          "source": "src/Test-QuickCheck-Property-Common.html#eqWith",
          "type": "function"
        },
        "index": {
          "description": "Compare with custom function Just shorter sinonym for equalWith",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "eqWith",
          "normalized": "(Result a-\u003eResult a-\u003eBool)-\u003ea-\u003eCompared a",
          "package": "quickcheck-properties",
          "partial": "With",
          "signature": "(Result a-\u003eResult a-\u003eBool)-\u003ea-\u003eCompared a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:eqWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty is false\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Common",
          "name": "notE",
          "package": "quickcheck-properties",
          "signature": "a -\u003e a",
          "source": "src/Test-QuickCheck-Property-Common.html#notE",
          "type": "function"
        },
        "index": {
          "description": "Property is false",
          "hierarchy": "Test QuickCheck Property Common",
          "module": "Test.QuickCheck.Property.Common",
          "name": "notE",
          "normalized": "a-\u003ea",
          "package": "quickcheck-properties",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Common.html#v:notE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctor laws\n\u003c/p\u003e\u003cpre\u003e fmap id = id\n fmap f . fmap g = fmap (f . g)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Property.Functor",
          "name": "Functor",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Functor.html",
          "type": "module"
        },
        "index": {
          "description": "Functor laws fmap id id fmap fmap fmap",
          "hierarchy": "Test QuickCheck Property Functor",
          "module": "Test.QuickCheck.Property.Functor",
          "name": "Functor",
          "package": "quickcheck-properties",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt's not possible to generate arbitrary functions. Therefore they\n   are passed as arguments. \n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Functor",
          "name": "prop_FunctorCompose",
          "package": "quickcheck-properties",
          "signature": "(a -\u003e b)-\u003e (b -\u003e c)-\u003e T (f a)-\u003e f a-\u003e Equal (f c)",
          "type": "function"
        },
        "index": {
          "description": "It not possible to generate arbitrary functions Therefore they are passed as arguments",
          "hierarchy": "Test QuickCheck Property Functor",
          "module": "Test.QuickCheck.Property.Functor",
          "name": "prop_FunctorCompose",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003eT(d a)-\u003ed a-\u003eEqual(d c)",
          "package": "quickcheck-properties",
          "partial": "Functor Compose",
          "signature": "(a-\u003eb)-\u003e(b-\u003ec)-\u003eT(f a)-\u003ef a-\u003eEqual(f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Functor.html#v:prop_FunctorCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efmap id = id\u003c/pre\u003e",
          "module": "Test.QuickCheck.Property.Functor",
          "name": "prop_FunctorId",
          "package": "quickcheck-properties",
          "signature": "T (f a) -\u003e f a -\u003e Equal (f a)",
          "source": "src/Test-QuickCheck-Property-Functor.html#prop_FunctorId",
          "type": "function"
        },
        "index": {
          "description": "fmap id id",
          "hierarchy": "Test QuickCheck Property Functor",
          "module": "Test.QuickCheck.Property.Functor",
          "name": "prop_FunctorId",
          "normalized": "T(a b)-\u003ea b-\u003eEqual(a b)",
          "package": "quickcheck-properties",
          "partial": "Functor Id",
          "signature": "T(f a)-\u003ef a-\u003eEqual(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Functor.html#v:prop_FunctorId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric properties of functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "Generic",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Generic properties of functions",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "Generic",
          "package": "quickcheck-properties",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that function is associative\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Associative",
          "package": "quickcheck-properties",
          "signature": "(a -\u003e a -\u003e a) -\u003e T a -\u003e a -\u003e a -\u003e a -\u003e Equal a",
          "source": "src/Test-QuickCheck-Property-Generic.html#prop_Associative",
          "type": "function"
        },
        "index": {
          "description": "Test that function is associative",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Associative",
          "normalized": "(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Associative",
          "signature": "(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_Associative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that function is commutative\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Commutative",
          "package": "quickcheck-properties",
          "signature": "(a -\u003e a -\u003e b) -\u003e T (a, b) -\u003e a -\u003e a -\u003e Equal b",
          "source": "src/Test-QuickCheck-Property-Generic.html#prop_Commutative",
          "type": "function"
        },
        "index": {
          "description": "Test that function is commutative",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Commutative",
          "normalized": "(a-\u003ea-\u003eb)-\u003eT(a,b)-\u003ea-\u003ea-\u003eEqual b",
          "package": "quickcheck-properties",
          "partial": "Commutative",
          "signature": "(a-\u003ea-\u003eb)-\u003eT(a,b)-\u003ea-\u003ea-\u003eEqual b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_Commutative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that identity and associative operation satisfy monoid laws.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_GenMonoid",
          "package": "quickcheck-properties",
          "signature": "a-\u003e (a -\u003e a -\u003e a)-\u003e T a-\u003e a-\u003e a-\u003e a-\u003e Equal a",
          "type": "function"
        },
        "index": {
          "description": "Test that identity and associative operation satisfy monoid laws",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_GenMonoid",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Gen Monoid",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_GenMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that identity, associative operation and inverse satisfy group laws\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Group",
          "package": "quickcheck-properties",
          "signature": "a-\u003e (a -\u003e a -\u003e a)-\u003e (a -\u003e a)-\u003e T a-\u003e a-\u003e a-\u003e a-\u003e Equal a",
          "type": "function"
        },
        "index": {
          "description": "Test that identity associative operation and inverse satisfy group laws",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Group",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003eT a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Group",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003eT a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that inverse operation is correct.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_GroupInverse",
          "package": "quickcheck-properties",
          "signature": "a-\u003e (a -\u003e a -\u003e a)-\u003e (a -\u003e a)-\u003e T a-\u003e a-\u003e Equal a",
          "type": "function"
        },
        "index": {
          "description": "Test that inverse operation is correct",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_GroupInverse",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Group Inverse",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_GroupInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that value is both right and left identity\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Identity",
          "package": "quickcheck-properties",
          "signature": "a-\u003e (a -\u003e a -\u003e a)-\u003e T a-\u003e a-\u003e Equal a",
          "type": "function"
        },
        "index": {
          "description": "Test that value is both right and left identity",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Identity",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Identity",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that value is a left identity\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_LeftIdentity",
          "package": "quickcheck-properties",
          "signature": "a-\u003e (a -\u003e a -\u003e a)-\u003e T a-\u003e a-\u003e Equal a",
          "type": "function"
        },
        "index": {
          "description": "Test that value is left identity",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_LeftIdentity",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Left Identity",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_LeftIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that relation is reflective. \n\u003c/p\u003e\u003cpre\u003e f x x = True\n\u003c/pre\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Reflexive",
          "package": "quickcheck-properties",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e T a -\u003e a -\u003e Bool",
          "source": "src/Test-QuickCheck-Property-Generic.html#prop_Reflexive",
          "type": "function"
        },
        "index": {
          "description": "Test that relation is reflective True",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_Reflexive",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eT a-\u003ea-\u003eBool",
          "package": "quickcheck-properties",
          "partial": "Reflexive",
          "signature": "(a-\u003ea-\u003eBool)-\u003eT a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_Reflexive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that value is a left identity\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_RightIdentity",
          "package": "quickcheck-properties",
          "signature": "a-\u003e (a -\u003e a -\u003e a)-\u003e T a-\u003e a-\u003e Equal a",
          "type": "function"
        },
        "index": {
          "description": "Test that value is left identity",
          "hierarchy": "Test QuickCheck Property Generic",
          "module": "Test.QuickCheck.Property.Generic",
          "name": "prop_RightIdentity",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Right Identity",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003eT a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Generic.html#v:prop_RightIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProperties for \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e type class\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "Monoid",
          "package": "quickcheck-properties",
          "source": "src/Test-QuickCheck-Property-Monoid.html",
          "type": "module"
        },
        "index": {
          "description": "Properties for Monoid type class",
          "hierarchy": "Test QuickCheck Property Monoid",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "Monoid",
          "package": "quickcheck-properties",
          "partial": "Monoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Monoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e is associative\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_Mappend",
          "package": "quickcheck-properties",
          "signature": "T a -\u003e a -\u003e a -\u003e a -\u003e Equal a",
          "source": "src/Test-QuickCheck-Property-Monoid.html#prop_Mappend",
          "type": "function"
        },
        "index": {
          "description": "mappend is associative",
          "hierarchy": "Test QuickCheck Property Monoid",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_Mappend",
          "normalized": "T a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Mappend",
          "signature": "T a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Monoid.html#v:prop_Mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll properties of monoid\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_Monoid",
          "package": "quickcheck-properties",
          "signature": "T a -\u003e a -\u003e a -\u003e a -\u003e Equal a",
          "source": "src/Test-QuickCheck-Property-Monoid.html#prop_Monoid",
          "type": "function"
        },
        "index": {
          "description": "All properties of monoid",
          "hierarchy": "Test QuickCheck Property Monoid",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_Monoid",
          "normalized": "T a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Monoid",
          "signature": "T a-\u003ea-\u003ea-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Monoid.html#v:prop_Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is identity\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_MonoidIdentity",
          "package": "quickcheck-properties",
          "signature": "T a -\u003e a -\u003e Equal a",
          "source": "src/Test-QuickCheck-Property-Monoid.html#prop_MonoidIdentity",
          "type": "function"
        },
        "index": {
          "description": "mempty is identity",
          "hierarchy": "Test QuickCheck Property Monoid",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_MonoidIdentity",
          "normalized": "T a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Monoid Identity",
          "signature": "T a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Monoid.html#v:prop_MonoidIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is left identity\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_MonoidLeft",
          "package": "quickcheck-properties",
          "signature": "T a -\u003e a -\u003e Equal a",
          "source": "src/Test-QuickCheck-Property-Monoid.html#prop_MonoidLeft",
          "type": "function"
        },
        "index": {
          "description": "mempty is left identity",
          "hierarchy": "Test QuickCheck Property Monoid",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_MonoidLeft",
          "normalized": "T a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Monoid Left",
          "signature": "T a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Monoid.html#v:prop_MonoidLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is right identity\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_MonoidRight",
          "package": "quickcheck-properties",
          "signature": "T a -\u003e a -\u003e Equal a",
          "source": "src/Test-QuickCheck-Property-Monoid.html#prop_MonoidRight",
          "type": "function"
        },
        "index": {
          "description": "mempty is right identity",
          "hierarchy": "Test QuickCheck Property Monoid",
          "module": "Test.QuickCheck.Property.Monoid",
          "name": "prop_MonoidRight",
          "normalized": "T a-\u003ea-\u003eEqual a",
          "package": "quickcheck-properties",
          "partial": "Monoid Right",
          "signature": "T a-\u003ea-\u003eEqual a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-properties/docs/Test-QuickCheck-Property-Monoid.html#v:prop_MonoidRight"
      }
    }
  ]
]