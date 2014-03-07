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
        "word": "hsc3-lang"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariants of standard numerical operators with SC3 extension\n behaviour.  Pointwise operations in SuperCollider language extend\n the shorter input by cycling.\n\u003c/p\u003e\u003cpre\u003e [1,2] +. [3,4,5] == [1,2,1] +. [3,4,5]\n [1,2] +. [3,4,5] == [4,6,6]\n\u003c/pre\u003e\u003cp\u003eThe function underlying the list numerical instances is \u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zipWith (+) [1,2] [3,4,5] == [4,6]\n zipWith_c (+) [1,2] [3,4,5] == [4,6,6]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "Extension",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Extension.html",
          "type": "module"
        },
        "index": {
          "description": "Variants of standard numerical operators with SC3 extension behaviour Pointwise operations in SuperCollider language extend the shorter input by cycling The function underlying the list numerical instances is zipWith zipWith zipWith",
          "hierarchy": "Sound SC3 Lang Collection Extension",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "Extension",
          "package": "hsc3-lang",
          "partial": "Extension",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Extension.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass defining \u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e which is a cycle extending variant of\n \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "Extending",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Extension.html#Extending",
          "type": "class"
        },
        "index": {
          "description": "Class defining zipWith which is cycle extending variant of zipWith",
          "hierarchy": "Sound SC3 Lang Collection Extension",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "Extending",
          "package": "hsc3-lang",
          "partial": "Extending",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Extension.html#t:Extending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(*.)",
          "package": "hsc3-lang",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Sound-SC3-Lang-Collection-Extension.html#%2A.",
          "type": "function"
        },
        "index": {
          "description": "zipWith",
          "hierarchy": "Sound SC3 Lang Collection Extension",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(*.) *.",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "hsc3-lang",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Extension.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(+.)",
          "package": "hsc3-lang",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Sound-SC3-Lang-Collection-Extension.html#%2B.",
          "type": "function"
        },
        "index": {
          "description": "zipWith",
          "hierarchy": "Sound SC3 Lang Collection Extension",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(+.) +.",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "hsc3-lang",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Extension.html#v:-43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(-.)",
          "package": "hsc3-lang",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Sound-SC3-Lang-Collection-Extension.html#-.",
          "type": "function"
        },
        "index": {
          "description": "zipWith",
          "hierarchy": "Sound SC3 Lang Collection Extension",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(-.) -.",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "hsc3-lang",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Extension.html#v:-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(/.)",
          "package": "hsc3-lang",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Sound-SC3-Lang-Collection-Extension.html#%2F.",
          "type": "function"
        },
        "index": {
          "description": "zipWith",
          "hierarchy": "Sound SC3 Lang Collection Extension",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "(/.) /.",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "hsc3-lang",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Extension.html#v:-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "zipWith_c",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Sound-SC3-Lang-Collection-Extension.html#zipWith_c",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Collection Extension",
          "module": "Sound.SC3.Lang.Collection.Extension",
          "name": "zipWith_c",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "hsc3-lang",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Extension.html#v:zipWith_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eList instances of the standard haskell numerical classes with SC3\n extension behaviour.  Provides instances for \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e [1,2] + [3,4,5] == [4,6,6]\n [1,2,3] * [4,5] == [4,10,12]\n\u003c/pre\u003e\u003cp\u003eLiterals are interpreted as single element lists.\n\u003c/p\u003e\u003cpre\u003e [1,2,3] + 4 == [5,6,7]\n [1,2,3] * 4 == [4,8,12]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Collection.Numerical.Extending",
          "name": "Extending",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Numerical-Extending.html",
          "type": "module"
        },
        "index": {
          "description": "List instances of the standard haskell numerical classes with SC3 extension behaviour Provides instances for Num Fractional and Floating Literals are interpreted as single element lists",
          "hierarchy": "Sound SC3 Lang Collection Numerical Extending",
          "module": "Sound.SC3.Lang.Collection.Numerical.Extending",
          "name": "Extending",
          "package": "hsc3-lang",
          "partial": "Extending",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Numerical-Extending.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eList instances of the standard haskell numerical classes with\n standard haskell truncating behaviour.  Provides instances for\n \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e [1,2] + [3,4,5] == [4,6]\n [1,2,3] * [4,5] == [4,10]\n\u003c/pre\u003e\u003cp\u003eLiterals are interpreted as infinte lists.\n\u003c/p\u003e\u003cpre\u003e [1,2,3] + 4 == [5,6,7]\n [1,2,3] * 4 == [4,8,12]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Collection.Numerical.Truncating",
          "name": "Truncating",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Numerical-Truncating.html",
          "type": "module"
        },
        "index": {
          "description": "List instances of the standard haskell numerical classes with standard haskell truncating behaviour Provides instances for Num Fractional and Floating Literals are interpreted as infinte lists",
          "hierarchy": "Sound SC3 Lang Collection Numerical Truncating",
          "module": "Sound.SC3.Lang.Collection.Numerical.Truncating",
          "name": "Truncating",
          "package": "hsc3-lang",
          "partial": "Truncating",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Numerical-Truncating.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to allow using the \u003ca\u003eSound.OpenSoundControl\u003c/a\u003e \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e as\n a \u003cem\u003euniversal\u003c/em\u003e data type.  In addition to the functions defined\n below it provides instances for:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e :set -XOverloadedStrings\n \"string\" :: Datum\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eEqE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e Int32 5 /=* Int32 6 == Int32 1\n Double 5 ==* Double 5 == Double 1\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e 5 :: Datum\n 5 + 4 :: Datum\n negate 5 :: Datum\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e 5.0 :: Datum\n (5 / 4) :: Datum\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e pi :: Datum\n sqrt (Int32 4) == Double 2\n (2.0 ** 3.0) :: Datum\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e toRational (Double 1.5) == (3/2 :: Rational)\n (realToFrac (1.5 :: Double) :: Datum) == Double 1.5\n (realToFrac (Double 1.5) :: Datum) == Double 1.5\n (realToFrac (Double 1.5) :: Double) == 1.5\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e round (Double 1.4) == 1\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eRealFracE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e roundE (Double 1.4) == Double 1\n ceilingE (Double 1.4) == Double 2\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e isNaN (sqrt (negate (Int32 1))) == True\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e Double 7.5 \u003e Int32 7\n string \"because\" \u003e string \"again\"\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eOrdE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e Int32 7 \u003e* Int32 7 == Int32 0\n Double 7.5 \u003e* Int32 7 == Double 1\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e [Int32 0 .. Int32 4] == [Int32 0,Int32 1,Int32 2,Int32 3,Int32 4]\n [Double 1 .. Double 3] == [Double 1,Double 2,Double 3]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e System.Random.randomRIO (Int32 0,Int32 9):: IO Datum\n System.Random.randomRIO (Float 0,Float 1):: IO Datum\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "Datum",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to allow using the Sound.OpenSoundControl Datum as universal data type In addition to the functions defined below it provides instances for Datum are IsString set XOverloadedStrings string Datum Datum are EqE Int32 Int32 Int32 Double Double Double Datum are Num Datum Datum negate Datum Datum are Fractional Datum Datum Datum are Floating pi Datum sqrt Int32 Double Datum Datum are Real toRational Double Rational realToFrac Double Datum Double realToFrac Double Datum Double realToFrac Double Double Datum are RealFrac round Double Datum are RealFracE roundE Double Double ceilingE Double Double Datum are RealFloat isNaN sqrt negate Int32 True Datum are Ord Double Int32 string because string again Datum are OrdE Int32 Int32 Int32 Double Int32 Double Datum are Enum Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double Double Double Datum are Random System.Random.randomRIO Int32 Int32 IO Datum System.Random.randomRIO Float Float IO Datum",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "Datum",
          "package": "hsc3-lang",
          "partial": "Datum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary \u003cem\u003eat\u003c/em\u003e function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "BinAt",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#BinAt",
          "type": "type"
        },
        "index": {
          "description": "Binary at function",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "BinAt",
          "package": "hsc3-lang",
          "partial": "Bin At",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#t:BinAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binary operator.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "BinOp",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#BinOp",
          "type": "type"
        },
        "index": {
          "description": "binary operator",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "BinOp",
          "package": "hsc3-lang",
          "partial": "Bin Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#t:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTernary \u003cem\u003eat\u003c/em\u003e function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "TriAt",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#TriAt",
          "type": "type"
        },
        "index": {
          "description": "Ternary at function",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "TriAt",
          "package": "hsc3-lang",
          "partial": "Tri At",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#t:TriAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary operator.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "UOp",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#UOp",
          "type": "type"
        },
        "index": {
          "description": "Unary operator",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "UOp",
          "package": "hsc3-lang",
          "partial": "UOp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#t:UOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect unary \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e functions at\n \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e fields, or \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e atD show show show show (Int 5) == \"5\"\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD",
          "package": "hsc3-lang",
          "signature": "(Int32 -\u003e a) -\u003e (Int64 -\u003e a) -\u003e (Float -\u003e a) -\u003e (Double -\u003e a) -\u003e Datum -\u003e a",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#atD",
          "type": "function"
        },
        "index": {
          "description": "Direct unary Int32 Int64 Float and Double functions at Datum fields or error atD show show show show Int",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD",
          "normalized": "(Int-\u003ea)-\u003e(Int-\u003ea)-\u003e(Float-\u003ea)-\u003e(Double-\u003ea)-\u003eDatum-\u003ea",
          "package": "hsc3-lang",
          "signature": "(Int-\u003ea)-\u003e(Int-\u003ea)-\u003e(Float-\u003ea)-\u003e(Double-\u003ea)-\u003eDatum-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:atD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e \u003cem\u003eat\u003c/em\u003e operator to \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003edatum_promote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e atD' floatRadix (Int 5) == 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD'",
          "package": "hsc3-lang",
          "signature": "(Double -\u003e a) -\u003e Datum -\u003e a",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#atD%27",
          "type": "function"
        },
        "index": {
          "description": "Lift Double at operator to Datum via datum promote atD floatRadix Int",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD'",
          "normalized": "(Double-\u003ea)-\u003eDatum-\u003ea",
          "package": "hsc3-lang",
          "partial": "D'",
          "signature": "(Double-\u003ea)-\u003eDatum-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:atD-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect binary \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e functions at \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e\n fields, or \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD2",
          "package": "hsc3-lang",
          "signature": "BinAt Int32 a -\u003e BinAt Int64 a -\u003e BinAt Float a -\u003e BinAt Double a -\u003e BinAt Datum a",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#atD2",
          "type": "function"
        },
        "index": {
          "description": "Direct binary Int Float and Double functions at Datum fields or error",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD2",
          "normalized": "BinAt Int a-\u003eBinAt Int a-\u003eBinAt Float a-\u003eBinAt Double a-\u003eBinAt Datum a",
          "package": "hsc3-lang",
          "signature": "BinAt Int a-\u003eBinAt Int a-\u003eBinAt Float a-\u003eBinAt Double a-\u003eBinAt Datum a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:atD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect ternary \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e functions at \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e\n fields, or \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD3",
          "package": "hsc3-lang",
          "signature": "TriAt Int32 a -\u003e TriAt Int64 a -\u003e TriAt Float a -\u003e TriAt Double a -\u003e TriAt Datum a",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#atD3",
          "type": "function"
        },
        "index": {
          "description": "Direct ternary Int Float and Double functions at Datum fields or error",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "atD3",
          "normalized": "TriAt Int a-\u003eTriAt Int a-\u003eTriAt Float a-\u003eTriAt Double a-\u003eTriAt Datum a",
          "package": "hsc3-lang",
          "signature": "TriAt Int a-\u003eTriAt Int a-\u003eTriAt Float a-\u003eTriAt Double a-\u003eTriAt Datum a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:atD3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an equivalent set of \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e unary\n functions to \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map (liftD abs abs abs abs) [Int32 5,Float (-5)] == [Int32 5,Float 5]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD",
          "package": "hsc3-lang",
          "signature": "UOp Int32 -\u003e UOp Int64 -\u003e UOp Float -\u003e UOp Double -\u003e UOp Datum",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#liftD",
          "type": "function"
        },
        "index": {
          "description": "Lift an equivalent set of Int32 Int64 Float and Double unary functions to Datum map liftD abs abs abs abs Int32 Float Int32 Float",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD",
          "normalized": "UOp Int-\u003eUOp Int-\u003eUOp Float-\u003eUOp Double-\u003eUOp Datum",
          "package": "hsc3-lang",
          "signature": "UOp Int-\u003eUOp Int-\u003eUOp Float-\u003eUOp Double-\u003eUOp Datum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:liftD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e unary operator to \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003edatum_promote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e liftD' negate (Int 5) == Double (-5)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD'",
          "package": "hsc3-lang",
          "signature": "UOp Double -\u003e UOp Datum",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#liftD%27",
          "type": "function"
        },
        "index": {
          "description": "Lift Double unary operator to Datum via datum promote liftD negate Int Double",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD'",
          "normalized": "UOp Double-\u003eUOp Datum",
          "package": "hsc3-lang",
          "partial": "D'",
          "signature": "UOp Double-\u003eUOp Datum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:liftD-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e binary operators\n generate \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e operator.  If \u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e are of equal type result\n type is equal, else result type is \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e liftD2 (+) (+) (+) (+) (Float 1) (Float 2) == Float 3\n liftD2 (*) (*) (*) (*) (Int32 3) (Float 4) == Double 12\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD2",
          "package": "hsc3-lang",
          "signature": "BinOp Int32 -\u003e BinOp Int64 -\u003e BinOp Float -\u003e BinOp Double -\u003e BinOp Datum",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#liftD2",
          "type": "function"
        },
        "index": {
          "description": "Given Int32 Int64 Float and Double binary operators generate Datum operator If Datum are of equal type result type is equal else result type is Double liftD2 Float Float Float liftD2 Int32 Float Double",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD2",
          "normalized": "BinOp Int-\u003eBinOp Int-\u003eBinOp Float-\u003eBinOp Double-\u003eBinOp Datum",
          "package": "hsc3-lang",
          "signature": "BinOp Int-\u003eBinOp Int-\u003eBinOp Float-\u003eBinOp Double-\u003eBinOp Datum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:liftD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003edatum_promote\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003eliftD2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e liftD2' (+) (Float 1) (Float 2) == Double 3\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD2'",
          "package": "hsc3-lang",
          "signature": "BinOp Double -\u003e BinOp Datum",
          "source": "src/Sound-SC3-Lang-Collection-Universal-Datum.html#liftD2%27",
          "type": "function"
        },
        "index": {
          "description": "datum promote variant of liftD2 liftD2 Float Float Double",
          "hierarchy": "Sound SC3 Lang Collection Universal Datum",
          "module": "Sound.SC3.Lang.Collection.Universal.Datum",
          "name": "liftD2'",
          "normalized": "BinOp Double-\u003eBinOp Datum",
          "package": "hsc3-lang",
          "signature": "BinOp Double-\u003eBinOp Datum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection-Universal-Datum.html#v:liftD2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn cases where a method takes arguments, these precede the\n collection argument in the haskell variant, so that \u003ccode\u003ec.m(i,j)\u003c/code\u003e\n becomes \u003ccode\u003em i j c\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "Collection",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Collection.html",
          "type": "module"
        },
        "index": {
          "description": "In cases where method takes arguments these precede the collection argument in the haskell variant so that c.m becomes",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "Collection",
          "package": "hsc3-lang",
          "partial": "Collection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.any\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003edetect\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e any' (\\i _ -\u003e even i) [1,2,3,4] == True\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "any'",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Collection.html#any%27",
          "type": "function"
        },
        "index": {
          "description": "Collection.any is True if detect is not Nothing any even True",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "any'",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "hsc3-lang",
          "signature": "(a-\u003ei-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:any-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eArray.clipExtend\u003c/code\u003e extends sequence by repeating last element.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5].clipExtend(9) == [1,2,3,4,5,5,5,5,5]\n clipExtend 9 [1,2,3,4,5] == [1,2,3,4,5,5,5,5,5]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "clipExtend",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#clipExtend",
          "type": "function"
        },
        "index": {
          "description": "Array.clipExtend extends sequence by repeating last element clipExtend clipExtend",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "clipExtend",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "partial": "Extend",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:clipExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.clump\u003c/code\u003e is a synonym for\n \u003ccode\u003e\u003ca\u003echunksOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5,6,7,8].clump(3) == [[1,2,3],[4,5,6],[7,8]]\n clump 3 [1,2,3,4,5,6,7,8] == [[1,2,3],[4,5,6],[7,8]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "clump",
          "package": "hsc3-lang",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Collection.html#clump",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.clump is synonym for chunksOf clump clump",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "clump",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "hsc3-lang",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:clump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.clumps\u003c/code\u003e is a synonym for\n \u003ccode\u003e\u003ca\u003esplitPlaces\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5,6,7,8].clumps([1,2]) == [[1],[2,3],[4],[5,6],[7],[8]]\n clumps [1,2] [1,2,3,4,5,6,7,8] == [[1],[2,3],[4],[5,6],[7],[8]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "clumps",
          "package": "hsc3-lang",
          "signature": "[Int] -\u003e [a] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Collection.html#clumps",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.clumps is synonym for splitPlaces clumps clumps",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "clumps",
          "normalized": "[Int]-\u003e[a]-\u003e[[a]]",
          "package": "hsc3-lang",
          "signature": "[Int]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:clumps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.collect\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e with element indices.\n\u003c/p\u003e\u003cpre\u003e collect (\\i _ -\u003e i + 10) [1,2,3,4] == [11,12,13,14]\n collect (\\_ j -\u003e j + 11) [1,2,3,4] == [11,12,13,14]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "collect",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e b) -\u003e [a] -\u003e [b]",
          "source": "src/Sound-SC3-Lang-Collection.html#collect",
          "type": "function"
        },
        "index": {
          "description": "Collection.collect is map with element indices collect collect",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "collect",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[c]",
          "package": "hsc3-lang",
          "signature": "(a-\u003ei-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.count\u003c/code\u003e is \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e count (\\i _ -\u003e even i) [1,2,3,4] == 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "count",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e Bool) -\u003e [a] -\u003e i",
          "source": "src/Sound-SC3-Lang-Collection.html#count",
          "type": "function"
        },
        "index": {
          "description": "Collection.count is length select count even",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "count",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003eb",
          "package": "hsc3-lang",
          "signature": "(a-\u003ei-\u003eBool)-\u003e[a]-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite variant of \u003ccode\u003e\u003ca\u003eclipExtend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "cycleClip",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#cycleClip",
          "type": "function"
        },
        "index": {
          "description": "Infinite variant of clipExtend",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "cycleClip",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "partial": "Clip",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:cycleClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite variant of \u003ccode\u003e\u003ca\u003efoldExtend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "cycleFold",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#cycleFold",
          "type": "function"
        },
        "index": {
          "description": "Infinite variant of foldExtend",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "cycleFold",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "partial": "Fold",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:cycleFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.detect\u003c/code\u003e is \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e detect (\\i _ -\u003e even i) [1,2,3,4] == Just 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "detect",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e Bool) -\u003e [a] -\u003e Maybe a",
          "source": "src/Sound-SC3-Lang-Collection.html#detect",
          "type": "function"
        },
        "index": {
          "description": "Collection.detect is first select detect even Just",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "detect",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "package": "hsc3-lang",
          "signature": "(a-\u003ei-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:detect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.detectIndex\u003c/code\u003e is the index locating variant of \u003ccode\u003e\u003ca\u003edetect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e detectIndex (\\i _ -\u003e even i) [1,2,3,4] == Just 1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "detectIndex",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e Bool) -\u003e [a] -\u003e Maybe i",
          "source": "src/Sound-SC3-Lang-Collection.html#detectIndex",
          "type": "function"
        },
        "index": {
          "description": "Collection.detectIndex is the index locating variant of detect detectIndex even Just",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "detectIndex",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003eMaybe b",
          "package": "hsc3-lang",
          "partial": "Index",
          "signature": "(a-\u003ei-\u003eBool)-\u003e[a]-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:detectIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.differentiate\u003c/code\u003e is the pairwise difference\n between elements, with an implicit \u003ccode\u003e0\u003c/code\u003e at the start.\n\u003c/p\u003e\u003cpre\u003e \u003e [3,4,1,1].differentiate == [3,1,-3,0]\n differentiate [3,4,1,1] == [3,1,-3,0]\n\u003c/pre\u003e\u003cpre\u003e \u003e [0,3,1].differentiate == [0,3,-2]\n differentiate [0,3,1] == [0,3,-2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "differentiate",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#differentiate",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.differentiate is the pairwise difference between elements with an implicit at the start differentiate differentiate differentiate differentiate",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "differentiate",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:differentiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.drop\u003c/code\u003e is, for positive \u003cem\u003en\u003c/em\u003e a synonym for\n \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, for negative \u003cem\u003en\u003c/em\u003e a variant on \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e based on the\n \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of \u003cem\u003el\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5].drop(3) == [4,5]\n L.drop 3 [1,2,3,4,5] == [4,5]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,2,3,4,5].drop(-3) == [1,2]\n Sound.SC3.Lang.Collection.drop (-3) [1,2,3,4,5] == [1,2]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,2].drop(-4) == []\n Sound.SC3.Lang.Collection.drop (-4) [1,2] == []\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "drop",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#drop",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.drop is for positive synonym for drop for negative variant on take based on the length of drop L.drop drop Sound.SC3.Lang.Collection.drop drop Sound.SC3.Lang.Collection.drop",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "drop",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.every\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003cem\u003ef\u003c/em\u003e applies at all elements.\n\u003c/p\u003e\u003cpre\u003e every (\\i _ -\u003e even i) [1,2,3,4] == False\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "every",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Collection.html#every",
          "type": "function"
        },
        "index": {
          "description": "Collection.every is True if applies at all elements every even False",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "every",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "hsc3-lang",
          "signature": "(a-\u003ei-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:every"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCycle input sequences to \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e of input.\n\u003c/p\u003e\u003cpre\u003e extendSequences [[1],[2,3],[4,5,6]] == [[1,1,1],[2,3,2],[4,5,6]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "extendSequences",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Collection.html#extendSequences",
          "type": "function"
        },
        "index": {
          "description": "Cycle input sequences to extension of input extendSequences",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "extendSequences",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "hsc3-lang",
          "partial": "Sequences",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:extendSequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to calculate a list equal in length to the longest input\n list, therefore being productive over infinite lists.\n\u003c/p\u003e\u003cpre\u003e extension [[1],[2,3],[4,5,6]] == [(),(),()]\n take 3 (extension [[1],[2..]]) == [(),(),()]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "extension",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [()]",
          "source": "src/Sound-SC3-Lang-Collection.html#extension",
          "type": "function"
        },
        "index": {
          "description": "Function to calculate list equal in length to the longest input list therefore being productive over infinite lists extension take extension",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "extension",
          "normalized": "[[a]]-\u003e[()]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003e[()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.*fib\u003c/code\u003e is the Fibonacci series where \u003cem\u003en\u003c/em\u003e\n is number of elements, \u003cem\u003ei\u003c/em\u003e is the initial step and \u003cem\u003ej\u003c/em\u003e the initial\n value.\n\u003c/p\u003e\u003cpre\u003e \u003e Array.fib(5,2,32) == [32,34,66,100,166]\n fib 5 2 32 == [32,34,66,100,166]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "fib",
          "package": "hsc3-lang",
          "signature": "i -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#fib",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection fib is the Fibonacci series where is number of elements is the initial step and the initial value Array.fib fib",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "fib",
          "normalized": "a-\u003eb-\u003eb-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:fib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.*fill\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e over indices to \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e fill 4 (* 2) == [0,2,4,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "fill",
          "package": "hsc3-lang",
          "signature": "n -\u003e (n -\u003e a) -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Collection fill is map over indices to fill",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "fill",
          "normalized": "a-\u003e(a-\u003eb)-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "n-\u003e(n-\u003ea)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.first\u003c/code\u003e is a total variant of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [3,4,5].first == 3\n first [3,4,5] == Just 3\n first' [3,4,5] == 3\n\u003c/pre\u003e\u003cpre\u003e \u003e [].first == nil\n first [] == Nothing\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "first",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e Maybe t",
          "source": "src/Sound-SC3-Lang-Collection.html#first",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.first is total variant of head first first Just first first nil first Nothing",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "first",
          "normalized": "[a]-\u003eMaybe a",
          "package": "hsc3-lang",
          "signature": "[t]-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "first'",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e t",
          "source": "src/Sound-SC3-Lang-Collection.html#first%27",
          "type": "function"
        },
        "index": {
          "description": "Synonym for head",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "first'",
          "normalized": "[a]-\u003ea",
          "package": "hsc3-lang",
          "signature": "[t]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:first-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.flop\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e that\n cycles input sequences and extends rather than truncates.\n\u003c/p\u003e\u003cpre\u003e \u003e [(1..3),(4..5),(6..9)].flop == [[1,4,6],[2,5,7],[3,4,8],[1,5,9]]\n flop [[1..3],[4..5],[6..9]] == [[1,4,6],[2,5,7],[3,4,8],[1,5,9]]\n\u003c/pre\u003e\u003cpre\u003e \u003e [[1,2,3],[4,5,6],[7,8]].flop == [[1,4,7],[2,5,8],[3,6,7]]\n flop [[1,2,3],[4,5,6],[7,8]] == [[1,4,7],[2,5,8],[3,6,7]]\n\u003c/pre\u003e\u003cp\u003eThe null case at \u003ccode\u003e\u003ca\u003eflop\u003c/a\u003e\u003c/code\u003e is not handled equivalently to SC3\n\u003c/p\u003e\u003cpre\u003e \u003e [].flop == [[]]\n flop [] /= [[]]\n flop [] == []\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eflop\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eextendSequences\u003c/a\u003e\u003c/code\u003e functions are non-strict and\n productive.\n\u003c/p\u003e\u003cpre\u003e take 4 (flop [[1..3],[4..]]) == [[1,4],[2,5],[3,6],[1,7]]\n map (take 4) (extendSequences [[1..3],[4..]]) == [[1,2,3,1],[4,5,6,7]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "flop",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Collection.html#flop",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.flop is variant of transpose that cycles input sequences and extends rather than truncates flop flop flop flop The null case at flop is not handled equivalently to SC3 flop flop flop The flop and extendSequences functions are non-strict and productive take flop map take extendSequences",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "flop",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:flop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.foldExtend\u003c/code\u003e extends sequence by \u003cem\u003efolding\u003c/em\u003e backwards at end.\n \u003ccode\u003e\u003ca\u003efoldExtend\u003c/a\u003e\u003c/code\u003e is in terms of \u003ccode\u003e\u003ca\u003ecycleFold\u003c/a\u003e\u003c/code\u003e, which is in terms of\n \u003ccode\u003e\u003ca\u003emirror1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5].foldExtend(10)\n foldExtend 10 [1,2,3,4,5] == [1,2,3,4,5,4,3,2,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "foldExtend",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#foldExtend",
          "type": "function"
        },
        "index": {
          "description": "List.foldExtend extends sequence by folding backwards at end foldExtend is in terms of cycleFold which is in terms of mirror1 foldExtend foldExtend",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "foldExtend",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "partial": "Extend",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:foldExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Signal is half the size of a Wavetable, each element is the sum\n of two adjacent elements of the Wavetable.\n\u003c/p\u003e\u003cpre\u003e from_wavetable [-0.5,0.5,0,0.5,1.5,-0.5,1,-0.5] == [0.0,0.5,1.0,0.5]\n let s = [0,0.5,1,0.5] in from_wavetable (to_wavetable s) == s\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "from_wavetable",
          "package": "hsc3-lang",
          "signature": "[n] -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Collection.html#from_wavetable",
          "type": "function"
        },
        "index": {
          "description": "Signal is half the size of Wavetable each element is the sum of two adjacent elements of the Wavetable from wavetable let in from wavetable to wavetable",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "from_wavetable",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[n]-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:from_wavetable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.*geom\u003c/code\u003e is a geometric series with arguments\n \u003cem\u003esize\u003c/em\u003e, \u003cem\u003estart\u003c/em\u003e and \u003cem\u003egrow\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e Array.geom(5,3,6) == [3,18,108,648,3888]\n geom 5 3 6 == [3,18,108,648,3888]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "geom",
          "package": "hsc3-lang",
          "signature": "i -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#geom",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection geom is geometric series with arguments size start and grow Array.geom geom",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "geom",
          "normalized": "a-\u003eb-\u003eb-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:geom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction equal to \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e of \u003cem\u003ef\u003c/em\u003e of \u003cem\u003ee\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e select (ignoringIndex even) [1,2,3,4] == [2,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "ignoringIndex",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b) -\u003e a -\u003e z -\u003e b",
          "source": "src/Sound-SC3-Lang-Collection.html#ignoringIndex",
          "type": "function"
        },
        "index": {
          "description": "Function equal to const of of select ignoringIndex even",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "ignoringIndex",
          "normalized": "(a-\u003eb)-\u003ea-\u003ec-\u003eb",
          "package": "hsc3-lang",
          "partial": "Index",
          "signature": "(a-\u003eb)-\u003ea-\u003ez-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:ignoringIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.indexIn\u003c/code\u003e is the index of nearest element.\n\u003c/p\u003e\u003cpre\u003e indexIn 5.2 [2,3,5,6] == 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexIn",
          "package": "hsc3-lang",
          "signature": "a -\u003e [a] -\u003e Int",
          "source": "src/Sound-SC3-Lang-Collection.html#indexIn",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.indexIn is the index of nearest element indexIn",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexIn",
          "normalized": "a-\u003e[a]-\u003eInt",
          "package": "hsc3-lang",
          "partial": "In",
          "signature": "a-\u003e[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:indexIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.indexInBetween\u003c/code\u003e is the linearly\n interpolated fractional index.\n\u003c/p\u003e\u003cpre\u003e indexInBetween 5.2 [2,3,5,6] == 2.2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexInBetween",
          "package": "hsc3-lang",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Sound-SC3-Lang-Collection.html#indexInBetween",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.indexInBetween is the linearly interpolated fractional index indexInBetween",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexInBetween",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "hsc3-lang",
          "partial": "In Between",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:indexInBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.indexOf\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e with\n reversed arguments.\n\u003c/p\u003e\u003cpre\u003e \u003e [3,4,100,5].indexOf(100) == 2\n indexOf [3,4,100,5] 100 == Just 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOf",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e a -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Collection.html#indexOf",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.indexOf is variant of elemIndex with reversed arguments indexOf indexOf Just",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOf",
          "normalized": "[a]-\u003ea-\u003eMaybe Int",
          "package": "hsc3-lang",
          "partial": "Of",
          "signature": "[a]-\u003ea-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:indexOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003eindexOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOf'",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e a -\u003e Int",
          "source": "src/Sound-SC3-Lang-Collection.html#indexOf%27",
          "type": "function"
        },
        "index": {
          "description": "fromJust variant of indexOf",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOf'",
          "normalized": "[a]-\u003ea-\u003eInt",
          "package": "hsc3-lang",
          "partial": "Of'",
          "signature": "[a]-\u003ea-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:indexOf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.indexOfEqual\u003c/code\u003e is just \u003ccode\u003e\u003ca\u003eindexOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOfEqual",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e a -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Collection.html#indexOfEqual",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.indexOfEqual is just indexOf",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOfEqual",
          "normalized": "[a]-\u003ea-\u003eMaybe Int",
          "package": "hsc3-lang",
          "partial": "Of Equal",
          "signature": "[a]-\u003ea-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:indexOfEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.indexOfGreaterThan\u003c/code\u003e is the index of the\n first greater element.\n\u003c/p\u003e\u003cpre\u003e indexOfGreaterThan 70 [10,5,77,55,12,123] == Just 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOfGreaterThan",
          "package": "hsc3-lang",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Collection.html#indexOfGreaterThan",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.indexOfGreaterThan is the index of the first greater element indexOfGreaterThan Just",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "indexOfGreaterThan",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "hsc3-lang",
          "partial": "Of Greater Than",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:indexOfGreaterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.inject\u003c/code\u003e is a variant on \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e inject 0 (+) [1..5] == 15\n inject 1 (*) [1..5] == 120\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "inject",
          "package": "hsc3-lang",
          "signature": "a -\u003e (a -\u003e b -\u003e a) -\u003e [b] -\u003e a",
          "source": "src/Sound-SC3-Lang-Collection.html#inject",
          "type": "function"
        },
        "index": {
          "description": "Collection.inject is variant on foldl inject inject",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "inject",
          "normalized": "a-\u003e(a-\u003eb-\u003ea)-\u003e[b]-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003e(a-\u003eb-\u003ea)-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.integrate\u003c/code\u003e is the incremental sum of\n elements.\n\u003c/p\u003e\u003cpre\u003e \u003e [3,4,1,1].integrate == [3,7,8,9]\n integrate [3,4,1,1] == [3,7,8,9]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "integrate",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#integrate",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.integrate is the incremental sum of elements integrate integrate",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "integrate",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:integrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.isEmpty\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e isEmpty [] == True\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "isEmpty",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Collection.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Collection.isEmpty is null isEmpty True",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "isEmpty",
          "normalized": "[a]-\u003eBool",
          "package": "hsc3-lang",
          "partial": "Empty",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.keep\u003c/code\u003e is, for positive \u003cem\u003en\u003c/em\u003e a synonym for\n \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e, and for negative \u003cem\u003en\u003c/em\u003e a variant on \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e based on the\n \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of \u003cem\u003el\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5].keep(3) == [1,2,3]\n keep 3 [1,2,3,4,5] == [1,2,3]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,2,3,4,5].keep(-3) == [3,4,5]\n keep (-3) [1,2,3,4,5] == [3,4,5]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,2].keep(-4) == [1,2]\n keep (-4) [1,2] == [1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "keep",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#keep",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.keep is for positive synonym for take and for negative variant on drop based on the length of keep keep keep keep keep keep",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "keep",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.lace\u003c/code\u003e is a concatenated transposition of cycled\n subsequences.\n\u003c/p\u003e\u003cpre\u003e \u003e [[1,2,3],[6],[8,9]].lace(12) == [1,6,8,2,6,9,3,6,8,1,6,9]\n lace 12 [[1,2,3],[6],[8,9]] == [1,6,8,2,6,9,3,6,8,1,6,9]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "lace",
          "package": "hsc3-lang",
          "signature": "i -\u003e [[a]] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#lace",
          "type": "function"
        },
        "index": {
          "description": "List.lace is concatenated transposition of cycled subsequences lace lace",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "lace",
          "normalized": "a-\u003e[[b]]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:lace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.last\u003c/code\u003e is a synonym for \u003ccode\u003e\u003ca\u003elastM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "last",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e Maybe t",
          "source": "src/Sound-SC3-Lang-Collection.html#last",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.last is synonym for lastM",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "last",
          "normalized": "[a]-\u003eMaybe a",
          "package": "hsc3-lang",
          "signature": "[t]-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "last'",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e t",
          "source": "src/Sound-SC3-Lang-Collection.html#last%27",
          "type": "function"
        },
        "index": {
          "description": "Synonym for last",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "last'",
          "normalized": "[a]-\u003ea",
          "package": "hsc3-lang",
          "signature": "[t]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:last-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal variant of \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e (1..5).last == 5\n lastM [1..5] == Just 5\n L.last [1..5] == 5\n\u003c/pre\u003e\u003cpre\u003e \u003e [].last == nil\n lastM [] == Nothing\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "lastM",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e Maybe t",
          "source": "src/Sound-SC3-Lang-Collection.html#lastM",
          "type": "function"
        },
        "index": {
          "description": "Total variant of last last lastM Just L.last last nil lastM Nothing",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "lastM",
          "normalized": "[a]-\u003eMaybe a",
          "package": "hsc3-lang",
          "signature": "[t]-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:lastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.maxItem\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e maxItem (ignoringIndex (* 2)) [1,2,3,4] == 8\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "maxItem",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Sound-SC3-Lang-Collection.html#maxItem",
          "type": "function"
        },
        "index": {
          "description": "Collection.maxItem is maximum collect maxItem ignoringIndex",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "maxItem",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003ec",
          "package": "hsc3-lang",
          "partial": "Item",
          "signature": "(a-\u003ei-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:maxItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.minItem\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e minItem (ignoringIndex (* 2)) [1,2,3,4] == 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "minItem",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Sound-SC3-Lang-Collection.html#minItem",
          "type": "function"
        },
        "index": {
          "description": "Collection.minItem is maximum collect minItem ignoringIndex",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "minItem",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003ec",
          "package": "hsc3-lang",
          "partial": "Item",
          "signature": "(a-\u003ei-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:minItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.mirror\u003c/code\u003e concatentates with \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e to make a\n palindrome.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4].mirror == [1,2,3,4,3,2,1]\n mirror [1,2,3,4] == [1,2,3,4,3,2,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "mirror",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#mirror",
          "type": "function"
        },
        "index": {
          "description": "List.mirror concatentates with tail of reverse to make palindrome mirror mirror",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "mirror",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.mirror1\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003emirror\u003c/a\u003e\u003c/code\u003e but with last element removed.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4].mirror1 == [1,2,3,4,3,2]\n mirror1 [1,2,3,4] == [1,2,3,4,3,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "mirror1",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#mirror1",
          "type": "function"
        },
        "index": {
          "description": "List.mirror1 is as mirror but with last element removed mirror1 mirror1",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "mirror1",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:mirror1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.mirror2\u003c/code\u003e concatenate with \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e to make a palindrome,\n as \u003ccode\u003e\u003ca\u003emirror\u003c/a\u003e\u003c/code\u003e does, but with the center element duplicated.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4].mirror2 == [1,2,3,4,4,3,2,1]\n mirror2 [1,2,3,4] == [1,2,3,4,4,3,2,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "mirror2",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#mirror2",
          "type": "function"
        },
        "index": {
          "description": "List.mirror2 concatenate with reverse to make palindrome as mirror does but with the center element duplicated mirror2 mirror2",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "mirror2",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:mirror2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eArrayedCollection.normalizeSum\u003c/code\u003e ensures sum of elements is one.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3].normalizeSum == [1/6,1/3,0.5]\n normalizeSum [1,2,3] == [1/6,2/6,3/6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "normalizeSum",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#normalizeSum",
          "type": "function"
        },
        "index": {
          "description": "ArrayedCollection.normalizeSum ensures sum of elements is one normalizeSum normalizeSum",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "normalizeSum",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "partial": "Sum",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:normalizeSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.occurencesOf\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e occurencesOf 2 [1,2,3,4] == 1\n occurencesOf 't' \"test\" == 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "occurencesOf",
          "package": "hsc3-lang",
          "signature": "a -\u003e [a] -\u003e i",
          "source": "src/Sound-SC3-Lang-Collection.html#occurencesOf",
          "type": "function"
        },
        "index": {
          "description": "Collection.occurencesOf is an variant of count occurencesOf occurencesOf test",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "occurencesOf",
          "normalized": "a-\u003e[a]-\u003eb",
          "package": "hsc3-lang",
          "partial": "Of",
          "signature": "a-\u003e[a]-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:occurencesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.reject\u003c/code\u003e is negated \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e with element indices.\n\u003c/p\u003e\u003cpre\u003e reject (\\i _ -\u003e even i) [1,2,3,4] == [1,3]\n reject (\\_ j -\u003e even j) [1,2,3,4] == [2,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "reject",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#reject",
          "type": "function"
        },
        "index": {
          "description": "Collection.reject is negated filter with element indices reject even reject even",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "reject",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "(a-\u003ei-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:reject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eArray.rotate\u003c/code\u003e is in terms of \u003ccode\u003e\u003ca\u003erotateLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erotateRight\u003c/a\u003e\u003c/code\u003e,\n where negative \u003cem\u003en\u003c/em\u003e rotates left and positive \u003cem\u003en\u003c/em\u003e rotates right.\n\u003c/p\u003e\u003cpre\u003e \u003e (1..5).rotate(1) == [5,1,2,3,4]\n rotate 1 [1..5] == [5,1,2,3,4]\n\u003c/pre\u003e\u003cpre\u003e \u003e (1..5).rotate(-1) == [2,3,4,5,1]\n rotate (-1) [1..5] == [2,3,4,5,1]\n\u003c/pre\u003e\u003cpre\u003e \u003e (1..5).rotate(3) == [3,4,5,1,2]\n rotate 3 [1..5] == [3,4,5,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "rotate",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Array.rotate is in terms of rotateLeft and rotateRight where negative rotates left and positive rotates right rotate rotate rotate rotate rotate rotate",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "rotate",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate \u003cem\u003en\u003c/em\u003e places to the left.\n\u003c/p\u003e\u003cpre\u003e rotateLeft 1 [1..5] == [2,3,4,5,1]\n rotateLeft 3 [1..7] == [4,5,6,7,1,2,3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "rotateLeft",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#rotateLeft",
          "type": "function"
        },
        "index": {
          "description": "Rotate places to the left rotateLeft rotateLeft",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "rotateLeft",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "partial": "Left",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:rotateLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate \u003cem\u003en\u003c/em\u003e places to the right.\n\u003c/p\u003e\u003cpre\u003e rotateRight 1 [1..5] == [5,1,2,3,4]\n rotateRight 3 [1..7] == [5,6,7,1,2,3,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "rotateRight",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#rotateRight",
          "type": "function"
        },
        "index": {
          "description": "Rotate places to the right rotateRight rotateRight",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "rotateRight",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "partial": "Right",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:rotateRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.select\u003c/code\u003e is \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e with element indices.\n\u003c/p\u003e\u003cpre\u003e select (\\i _ -\u003e even i) [1,2,3,4] == [2,4]\n select (\\_ j -\u003e even j) [1,2,3,4] == [1,3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "select",
          "package": "hsc3-lang",
          "signature": "(a -\u003e i -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#select",
          "type": "function"
        },
        "index": {
          "description": "Collection.select is filter with element indices select even select even",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "select",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "(a-\u003ei-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.separate\u003c/code\u003e applies the predicate \u003ccode\u003ef\u003c/code\u003e to\n each adjacent pair of elements at \u003cem\u003el\u003c/em\u003e. If the predicate is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n then a separation is made between the elements.\n\u003c/p\u003e\u003cpre\u003e \u003e [3,2,1,2,3,2].separate({|a,b| a\u003cb}) == [[3,2,1],[2],[3,2]]\n separate (\u003c) [3,2,1,2,3,2] == [[3,2,1],[2],[3,2]]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,2,3,5,6,8].separate({|a,b| (b - a) \u003e 1}) == [[1,2,3],[5,6],[8]]\n separate (\\a b -\u003e (b - a) \u003e 1) [1,2,3,5,6,8] == [[1,2,3],[5,6],[8]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "separate",
          "package": "hsc3-lang",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Collection.html#separate",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.separate applies the predicate to each adjacent pair of elements at If the predicate is True then separation is made between the elements separate separate separate separate",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "separate",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "hsc3-lang",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:separate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eseparate\u003c/a\u003e\u003c/code\u003e that performs initial separation.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "separateAt",
          "package": "hsc3-lang",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Sound-SC3-Lang-Collection.html#separateAt",
          "type": "function"
        },
        "index": {
          "description": "Variant of separate that performs initial separation",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "separateAt",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "hsc3-lang",
          "partial": "At",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:separateAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.*series\u003c/code\u003e is an arithmetic series with\n arguments \u003cem\u003esize\u003c/em\u003e, \u003cem\u003estart\u003c/em\u003e and \u003cem\u003estep\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e Array.series(5,10,2) == [10,12,14,16,18]\n series 5 10 2 == [10,12 .. 18]\n\u003c/pre\u003e\u003cp\u003eNote that this is quite different from the SimpleNumber.series\n method, which is equal to \u003ccode\u003e\u003ca\u003eenumFromThenTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e 5.series(7,10) == [5,7,9]\n enumFromThenTo 5 7 10 == [5,7,9]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "series",
          "package": "hsc3-lang",
          "signature": "i -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#series",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection series is an arithmetic series with arguments size start and step Array.series series Note that this is quite different from the SimpleNumber.series method which is equal to enumFromThenTo series enumFromThenTo",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "series",
          "normalized": "a-\u003eb-\u003eb-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.size\u003c/code\u003e is \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e size [1,2,3,4] == 4\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "size",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e n",
          "source": "src/Sound-SC3-Lang-Collection.html#size",
          "type": "function"
        },
        "index": {
          "description": "Collection.size is length size",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "size",
          "normalized": "[a]-\u003eb",
          "package": "hsc3-lang",
          "signature": "[a]-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.slide\u003c/code\u003e is an identity window function with subsequences of\n length \u003cem\u003ew\u003c/em\u003e and stride of \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5,6].slide(3,1)\n slide 3 1 [1,2,3,4,5,6] == [1,2,3,2,3,4,3,4,5,4,5,6]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,2,3,4,5,6].slide(3,2)\n slide 3 2 [1,2,3,4,5,6] == [1,2,3,3,4,5]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,2,3,4,5,6].slide(4,2)\n slide 4 2 [1,2,3,4,5,6] == [1,2,3,4,3,4,5,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "slide",
          "package": "hsc3-lang",
          "signature": "i -\u003e i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#slide",
          "type": "function"
        },
        "index": {
          "description": "List.slide is an identity window function with subsequences of length and stride of slide slide slide slide slide slide",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "slide",
          "normalized": "a-\u003ea-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003ei-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.stutter\u003c/code\u003e repeats each element \u003cem\u003en\u003c/em\u003e times.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3].stutter(2) == [1,1,2,2,3,3]\n stutter 2 [1,2,3] == [1,1,2,2,3,3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "stutter",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#stutter",
          "type": "function"
        },
        "index": {
          "description": "List.stutter repeats each element times stutter stutter",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "stutter",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:stutter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCollection.sum\u003c/code\u003e is \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e sum' (ignoringIndex (* 2)) [1,2,3,4] == 20\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "sum'",
          "package": "hsc3-lang",
          "signature": "(b -\u003e i -\u003e a) -\u003e [b] -\u003e a",
          "source": "src/Sound-SC3-Lang-Collection.html#sum%27",
          "type": "function"
        },
        "index": {
          "description": "Collection.sum is sum collect sum ignoringIndex",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "sum'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003ec",
          "package": "hsc3-lang",
          "signature": "(b-\u003ei-\u003ea)-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:sum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of 2-tuples of adjacent elements.\n\u003c/p\u003e\u003cpre\u003e t2_adjacent [1..6] == [(1,2),(3,4),(5,6)]\n t2_adjacent [1..5] == [(1,2),(3,4)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_adjacent",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e [(t, t)]",
          "source": "src/Sound-SC3-Lang-Collection.html#t2_adjacent",
          "type": "function"
        },
        "index": {
          "description": "List of tuples of adjacent elements t2 adjacent t2 adjacent",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_adjacent",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "hsc3-lang",
          "signature": "[t]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:t2_adjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcat of 2-tuples.\n\u003c/p\u003e\u003cpre\u003e t2_concat (t2_adjacent [1..6]) == [1..6]\n t2_concat (t2_overlap [1..4]) == [1,2,2,3,3,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_concat",
          "package": "hsc3-lang",
          "signature": "[(a, a)] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#t2_concat",
          "type": "function"
        },
        "index": {
          "description": "Concat of tuples t2 concat t2 adjacent t2 concat t2 overlap",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_concat",
          "normalized": "[(a,a)]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[(a,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:t2_concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of 2-tuples of overlapping elements.\n\u003c/p\u003e\u003cpre\u003e t2_overlap [1..4] == [(1,2),(2,3),(3,4)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_overlap",
          "package": "hsc3-lang",
          "signature": "[b] -\u003e [(b, b)]",
          "source": "src/Sound-SC3-Lang-Collection.html#t2_overlap",
          "type": "function"
        },
        "index": {
          "description": "List of tuples of overlapping elements t2 overlap",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_overlap",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "hsc3-lang",
          "signature": "[b]-\u003e[(b,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:t2_overlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of 2-tuples of elements at distance (stride) \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e t2_window 3 [1..9] == [(1,2),(4,5),(7,8)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_window",
          "package": "hsc3-lang",
          "signature": "i -\u003e [t] -\u003e [(t, t)]",
          "source": "src/Sound-SC3-Lang-Collection.html#t2_window",
          "type": "function"
        },
        "index": {
          "description": "List of tuples of elements at distance stride t2 window",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "t2_window",
          "normalized": "a-\u003e[b]-\u003e[(b,b)]",
          "package": "hsc3-lang",
          "signature": "i-\u003e[t]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:t2_window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Wavetable is has \u003cem\u003en * 2 + 2\u003c/em\u003e elements, where \u003cem\u003en\u003c/em\u003e is the number\n of elements of the Signal.  Each signal element \u003cem\u003ee0\u003c/em\u003e expands to the\n two elements \u003cem\u003e(2 * e0 - e1, e1 - e0)\u003c/em\u003e where \u003cem\u003ee1\u003c/em\u003e is the next\n element, or zero at the final element.  Properly wavetables are\n only of power of two element signals.\n\u003c/p\u003e\u003cpre\u003e \u003e Signal[0,0.5,1,0.5].asWavetable == Wavetable[-0.5,0.5,0,0.5,1.5,-0.5,1,-0.5]\n\u003c/pre\u003e\u003cpre\u003e to_wavetable [0,0.5,1,0.5] == [-0.5,0.5,0,0.5,1.5,-0.5,1,-0.5]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "to_wavetable",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#to_wavetable",
          "type": "function"
        },
        "index": {
          "description": "Wavetable is has elements where is the number of elements of the Signal Each signal element e0 expands to the two elements e0 e1 e1 e0 where e1 is the next element or zero at the final element Properly wavetables are only of power of two element signals Signal asWavetable Wavetable to wavetable",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "to_wavetable",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:to_wavetable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eArrayedCollection.windex\u003c/code\u003e takes a list of probabilities, which\n should sum to \u003cem\u003en\u003c/em\u003e, and returns the an index value given a (0,\u003cem\u003en\u003c/em\u003e)\n input.\n\u003c/p\u003e\u003cpre\u003e mapMaybe (windex [0.1,0.3,0.6]) [0,0.1 .. 0.4] == [0,1,1,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "windex",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e a -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Collection.html#windex",
          "type": "function"
        },
        "index": {
          "description": "ArrayedCollection.windex takes list of probabilities which should sum to and returns the an index value given input mapMaybe windex",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "windex",
          "normalized": "[a]-\u003ea-\u003eMaybe Int",
          "package": "hsc3-lang",
          "signature": "[a]-\u003ea-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:windex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.wrapExtend\u003c/code\u003e extends a sequence by\n \u003cem\u003ecycling\u003c/em\u003e.  \u003ccode\u003e\u003ca\u003ewrapExtend\u003c/a\u003e\u003c/code\u003e is in terms of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,3,4,5].wrapExtend(9) == [1,2,3,4,5,1,2,3,4]\n wrapExtend 9 [1,2,3,4,5] == [1,2,3,4,5,1,2,3,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "wrapExtend",
          "package": "hsc3-lang",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Collection.html#wrapExtend",
          "type": "function"
        },
        "index": {
          "description": "List.wrapExtend extends sequence by cycling wrapExtend is in terms of take and cycle wrapExtend wrapExtend",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "wrapExtend",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "partial": "Extend",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:wrapExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e based variant of applicative \u003ccode\u003e\u003c*\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zap_c [(+1),negate] [1..6] == [2,-2,4,-4,6,-6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zap_c",
          "package": "hsc3-lang",
          "signature": "[a -\u003e b] -\u003e [a] -\u003e [b]",
          "source": "src/Sound-SC3-Lang-Collection.html#zap_c",
          "type": "function"
        },
        "index": {
          "description": "zipWith based variant of applicative zap negate",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zap_c",
          "normalized": "[a-\u003eb]-\u003e[a]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "[a-\u003eb]-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:zap_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith3_c\u003c/a\u003e\u003c/code\u003e based variant of \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zip3_c [1] [2,3] [4,5,6] == [(1,2,4),(1,3,5),(1,2,6)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zip3_c",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "source": "src/Sound-SC3-Lang-Collection.html#zip3_c",
          "type": "function"
        },
        "index": {
          "description": "zipWith3 based variant of zip3 zip3",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zip3_c",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:zip3_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e that cycles the shorter inputs.\n\u003c/p\u003e\u003cpre\u003e zipWith3_c (,,) [1] [2,3] [4,5,6] == [(1,2,4),(1,3,5),(1,2,6)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zipWith3_c",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "source": "src/Sound-SC3-Lang-Collection.html#zipWith3_c",
          "type": "function"
        },
        "index": {
          "description": "Variant of zipWith3 that cycles the shorter inputs zipWith3",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zipWith3_c",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "hsc3-lang",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:zipWith3_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e that cycles the shorter input.\n\u003c/p\u003e\u003cpre\u003e zipWith_c (+) [1,2] [3,4,5] == [4,6,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zipWith_c",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/Sound-SC3-Lang-Collection.html#zipWith_c",
          "type": "function"
        },
        "index": {
          "description": "Variant of zipWith that cycles the shorter input zipWith",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zipWith_c",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "hsc3-lang",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:zipWith_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith_c\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zip_c [1,2] [3,4,5] == [(1,3),(2,4),(1,5)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zip_c",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/Sound-SC3-Lang-Collection.html#zip_c",
          "type": "function"
        },
        "index": {
          "description": "zipWith variant of zip zip",
          "hierarchy": "Sound SC3 Lang Collection",
          "module": "Sound.SC3.Lang.Collection",
          "name": "zip_c",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Collection.html#v:zip_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eSC3\u003c/code\u003e duration model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Duration",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Duration.html",
          "type": "module"
        },
        "index": {
          "description": "The SC3 duration model",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Duration",
          "package": "hsc3-lang",
          "partial": "Duration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of the \u003ccode\u003eSC3\u003c/code\u003e \u003ccode\u003eDuration\u003c/code\u003e model.\n\u003c/p\u003e\u003cpre\u003e delta (defaultDur {dur = 2,stretch = 2}) == 4\n occ defaultDur == 0.8\n let d = defaultDur {fwd' = Just 0} in (delta d,fwd d) == (1,0)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Dur",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "data"
        },
        "index": {
          "description": "Variant of the SC3 Duration model delta defaultDur dur stretch occ defaultDur let defaultDur fwd Just in delta fwd",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Dur",
          "package": "hsc3-lang",
          "partial": "Dur",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#t:Dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues that have duration.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eocc\u003c/code\u003e is the interval from the start through to the end of the\n current event, ie. the time span the event \u003cem\u003eoccupies\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edelta\u003c/code\u003e is the interval from the start of the current event to the\n start of the next \u003cem\u003esequential\u003c/em\u003e event.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efwd\u003c/code\u003e is the interval from the start of the current event to the\n start of the next \u003cem\u003eparallel\u003c/em\u003e event.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Durational",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Durational",
          "type": "class"
        },
        "index": {
          "description": "Values that have duration occ is the interval from the start through to the end of the current event ie the time span the event occupies delta is the interval from the start of the current event to the start of the next sequential event fwd is the interval from the start of the current event to the start of the next parallel event",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Durational",
          "package": "hsc3-lang",
          "partial": "Durational",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#t:Durational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDur\u003c/a\u003e\u003c/code\u003e represented as an eight-tuple of optional values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "OptDur",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#OptDur",
          "type": "type"
        },
        "index": {
          "description": "Dur represented as an eight-tuple of optional values",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "OptDur",
          "package": "hsc3-lang",
          "partial": "Opt Dur",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#t:OptDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEight tuple.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "T8",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#T8",
          "type": "type"
        },
        "index": {
          "description": "Eight tuple",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "T8",
          "package": "hsc3-lang",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#t:T8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Dur",
          "package": "hsc3-lang",
          "signature": "Dur",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "Dur",
          "package": "hsc3-lang",
          "partial": "Dur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:Dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eDur\u003c/a\u003e\u003c/code\u003e value, equal to one second.\n\u003c/p\u003e\u003cpre\u003e delta defaultDur == 1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "defaultDur",
          "package": "hsc3-lang",
          "signature": "Dur",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#defaultDur",
          "type": "function"
        },
        "index": {
          "description": "Default Dur value equal to one second delta defaultDur",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "defaultDur",
          "package": "hsc3-lang",
          "partial": "Dur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:defaultDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "delta",
          "package": "hsc3-lang",
          "signature": "d -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#delta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "delta",
          "normalized": "a-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "d-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta time\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "delta'",
          "package": "hsc3-lang",
          "signature": "Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Delta time",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "delta'",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:delta-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration (in pulses)\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "dur",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Duration in pulses",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "dur",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "fwd",
          "package": "hsc3-lang",
          "signature": "d -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#fwd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "fwd",
          "normalized": "a-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "d-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:fwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible non-sequential delta time field\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "fwd'",
          "package": "hsc3-lang",
          "signature": "Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Possible non-sequential delta time field",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "fwd'",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:fwd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLag value\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "lag",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Lag value",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "lag",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:lag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLegato multipler\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "legato",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Legato multipler",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "legato",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:legato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "occ",
          "package": "hsc3-lang",
          "signature": "d -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#occ",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "occ",
          "normalized": "a-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "d-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:occ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate \u003ccode\u003e\u003ca\u003eOptDur\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eDur\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "optDur",
          "package": "hsc3-lang",
          "signature": "OptDur -\u003e Dur",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#optDur",
          "type": "function"
        },
        "index": {
          "description": "Translate OptDur to Dur",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "optDur",
          "normalized": "OptDur-\u003eDur",
          "package": "hsc3-lang",
          "partial": "Dur",
          "signature": "OptDur-\u003eDur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:optDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStretch multiplier\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "stretch",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Stretch multiplier",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "stretch",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:stretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSustain time\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "sustain'",
          "package": "hsc3-lang",
          "signature": "Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Sustain time",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "sustain'",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:sustain-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTempo (in pulses per minute)\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "tempo",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Duration.html#Dur",
          "type": "function"
        },
        "index": {
          "description": "Tempo in pulses per minute",
          "hierarchy": "Sound SC3 Lang Control Duration",
          "module": "Sound.SC3.Lang.Control.Duration",
          "name": "tempo",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Duration.html#v:tempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e is a (\u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e) map.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html",
          "type": "module"
        },
        "index": {
          "description": "An Event is Key Field map",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event",
          "package": "hsc3-lang",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e is a (\u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e) map.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Event",
          "type": "type"
        },
        "index": {
          "description": "An Event is Key Field map",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event",
          "package": "hsc3-lang",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered sequence of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event_Seq",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Event_Seq",
          "type": "newtype"
        },
        "index": {
          "description": "Ordered sequence of Event",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event_Seq",
          "package": "hsc3-lang",
          "partial": "Event Seq",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:Event_Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric \u003ccode\u003e\u003ca\u003eF_Value\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Num",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#F_Num",
          "type": "class"
        },
        "index": {
          "description": "Numeric Value types",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Num",
          "package": "hsc3-lang",
          "partial": "Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:F_Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of types that can be lifted to \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Value",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#F_Value",
          "type": "class"
        },
        "index": {
          "description": "Set of types that can be lifted to Field",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Value",
          "package": "hsc3-lang",
          "partial": "Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:F_Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent field.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e 5 :: Field\n 4 + 5 :: Field\n negate 5 :: Field\n f_array [2,3] + f_array [4,5] == f_array [6,8]\n f_array [1,2,3] + f_array [4,5] == f_array [5,7,7]\n 4 + f_array [5,6] == f_array [9,10]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Field",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Event field Field are Num Field Field negate Field array array array array array array array array",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Field",
          "package": "hsc3-lang",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the \u003cem\u003ekey\u003c/em\u003e at an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e :set -XOverloadedStrings\n [K_dur,\"pan\"] == [K_dur,K_param \"pan\"]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Key",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "data"
        },
        "index": {
          "description": "The type of the key at an Event set XOverloadedStrings dur pan dur param pan",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Key",
          "package": "hsc3-lang",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo tuple of \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "T2",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#T2",
          "type": "type"
        },
        "index": {
          "description": "Two tuple of",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "T2",
          "package": "hsc3-lang",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree tuple of \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "T3",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Event.html#T3",
          "type": "type"
        },
        "index": {
          "description": "Three tuple of",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "T3",
          "package": "hsc3-lang",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#t:T3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event_Seq",
          "package": "hsc3-lang",
          "signature": "Event_Seq",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Event_Seq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "Event_Seq",
          "package": "hsc3-lang",
          "partial": "Event Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:Event_Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Double",
          "package": "hsc3-lang",
          "signature": "F_Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Double",
          "package": "hsc3-lang",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:F_Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Instr",
          "package": "hsc3-lang",
          "signature": "F_Instr",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Instr",
          "package": "hsc3-lang",
          "partial": "Instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:F_Instr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_String",
          "package": "hsc3-lang",
          "signature": "F_String",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_String",
          "package": "hsc3-lang",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:F_String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Vector",
          "package": "hsc3-lang",
          "signature": "F_Vector",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "F_Vector",
          "package": "hsc3-lang",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:F_Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_amp",
          "package": "hsc3-lang",
          "signature": "K_amp",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_amp",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_ctranspose",
          "package": "hsc3-lang",
          "signature": "K_ctranspose",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_ctranspose",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_ctranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_db",
          "package": "hsc3-lang",
          "signature": "K_db",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_db",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_degree",
          "package": "hsc3-lang",
          "signature": "K_degree",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_degree",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_delta",
          "package": "hsc3-lang",
          "signature": "K_delta",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_delta",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_detune",
          "package": "hsc3-lang",
          "signature": "K_detune",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_detune",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_detune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_dur",
          "package": "hsc3-lang",
          "signature": "K_dur",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_dur",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_freq",
          "package": "hsc3-lang",
          "signature": "K_freq",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_freq",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_fwd'",
          "package": "hsc3-lang",
          "signature": "K_fwd'",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_fwd'",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_fwd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_gtranspose",
          "package": "hsc3-lang",
          "signature": "K_gtranspose",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_gtranspose",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_gtranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_harmonic",
          "package": "hsc3-lang",
          "signature": "K_harmonic",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_harmonic",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_harmonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_id",
          "package": "hsc3-lang",
          "signature": "K_id",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_id",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_instr",
          "package": "hsc3-lang",
          "signature": "K_instr",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_instr",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_instr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_lag",
          "package": "hsc3-lang",
          "signature": "K_lag",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_lag",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_lag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_latency",
          "package": "hsc3-lang",
          "signature": "K_latency",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_latency",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_latency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_legato",
          "package": "hsc3-lang",
          "signature": "K_legato",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_legato",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_legato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_midinote",
          "package": "hsc3-lang",
          "signature": "K_midinote",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_midinote",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_midinote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_mtranspose",
          "package": "hsc3-lang",
          "signature": "K_mtranspose",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_mtranspose",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_mtranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_note",
          "package": "hsc3-lang",
          "signature": "K_note",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_note",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_octave",
          "package": "hsc3-lang",
          "signature": "K_octave",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_octave",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_octave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_param",
          "package": "hsc3-lang",
          "signature": "K_param String",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_param",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_rest",
          "package": "hsc3-lang",
          "signature": "K_rest",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_rest",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_root",
          "package": "hsc3-lang",
          "signature": "K_root",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_root",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_scale",
          "package": "hsc3-lang",
          "signature": "K_scale",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_scale",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_stepsPerOctave",
          "package": "hsc3-lang",
          "signature": "K_stepsPerOctave",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_stepsPerOctave",
          "package": "hsc3-lang",
          "partial": "Per Octave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_stepsPerOctave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_stretch",
          "package": "hsc3-lang",
          "signature": "K_stretch",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_stretch",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_stretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_sustain",
          "package": "hsc3-lang",
          "signature": "K_sustain",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_sustain",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_sustain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_tempo",
          "package": "hsc3-lang",
          "signature": "K_tempo",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_tempo",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_tempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_type",
          "package": "hsc3-lang",
          "signature": "K_type",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "K_type",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:K_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert \u003cem\u003efwd\u003c/em\u003e \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003es into a time-stamped \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e sequence.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_add_fwd",
          "package": "hsc3-lang",
          "signature": "[(Time, Event)] -\u003e [Event]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_add_fwd",
          "type": "function"
        },
        "index": {
          "description": "Insert fwd Key into time-stamped Event sequence",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_add_fwd",
          "normalized": "[(Time,Event)]-\u003e[Event]",
          "package": "hsc3-lang",
          "signature": "[(Time,Event)]-\u003e[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_add_fwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe linear amplitude of the amplitude model at \u003cem\u003ee\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e e_amp Nothing (e_from_list [(K_db,-60)]) == 0.001\n e_amp Nothing (e_from_list [(K_amp,0.01)]) == 0.01\n e_amp Nothing mempty == 0.1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_amp",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Event -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_amp",
          "type": "function"
        },
        "index": {
          "description": "The linear amplitude of the amplitude model at amp Nothing from list db amp Nothing from list amp amp Nothing mempty",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_amp",
          "normalized": "Maybe Int-\u003eEvent-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eEvent-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform \u003ccode\u003e\u003ca\u003eEvent_Seq\u003c/a\u003e\u003c/code\u003e into a sequence of \u003ccode\u003eSC3\u003c/code\u003e \u003cem\u003e(on,off)\u003c/em\u003e \u003ccode\u003eBundles\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e e_bundle_seq 0 (Event_Seq (replicate 5 mempty))\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_bundle_seq",
          "package": "hsc3-lang",
          "signature": "Time -\u003e Event_Seq -\u003e [T2 Bundle]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_bundle_seq",
          "type": "function"
        },
        "index": {
          "description": "Transform Event Seq into sequence of SC3 on off Bundles bundle seq Event Seq replicate mempty",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_bundle_seq",
          "normalized": "Time-\u003eEvent_Seq-\u003e[T Bundle]",
          "package": "hsc3-lang",
          "signature": "Time-\u003eEvent_Seq-\u003e[T Bundle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_bundle_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003eSC3\u003c/code\u003e \u003cem\u003e(on,off)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eBundle\u003c/a\u003e\u003c/code\u003es describing \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_bundles",
          "package": "hsc3-lang",
          "signature": "Time -\u003e Int -\u003e Dur -\u003e Event -\u003e (Maybe (T2 Bundle), Int)",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_bundles",
          "type": "function"
        },
        "index": {
          "description": "Generate SC3 on off Bundle describing Event",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_bundles",
          "normalized": "Time-\u003eInt-\u003eDur-\u003eEvent-\u003e(Maybe(T Bundle),Int)",
          "package": "hsc3-lang",
          "signature": "Time-\u003eInt-\u003eDur-\u003eEvent-\u003e(Maybe(T Bundle),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_bundles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003cem\u003edb\u003c/em\u003e field of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e e_db Nothing mempty == (-20)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_db",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Event -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_db",
          "type": "function"
        },
        "index": {
          "description": "Lookup db field of Event db Nothing mempty",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_db",
          "normalized": "Maybe Int-\u003eEvent-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eEvent-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003eDur\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e D.delta (e_dur Nothing mempty) == 1\n D.fwd (e_dur Nothing (e_from_list [(K_dur,1),(K_stretch,2)])) == 2\n\u003c/pre\u003e\u003cpre\u003e let e = e_from_list [(K_dur,1),(K_legato,0.5)]\n in D.occ (e_dur Nothing e) == 0.5\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_dur",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Event -\u003e Dur",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_dur",
          "type": "function"
        },
        "index": {
          "description": "Generate Dur from Event D.delta dur Nothing mempty D.fwd dur Nothing from list dur stretch let from list dur legato in D.occ dur Nothing",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_dur",
          "normalized": "Maybe Int-\u003eEvent-\u003eDur",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eEvent-\u003eDur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eValue\u003c/code\u003e editor for \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e, with default value in case\n \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e is not present.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_edit",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Field -\u003e (Field -\u003e Field) -\u003e Event -\u003e Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_edit",
          "type": "function"
        },
        "index": {
          "description": "Value editor for Key at Event with default value in case Key is not present",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_edit",
          "normalized": "Key-\u003eField-\u003e(Field-\u003eField)-\u003eEvent-\u003eEvent",
          "package": "hsc3-lang",
          "signature": "Key-\u003eField-\u003e(Field-\u003eField)-\u003eEvent-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_edit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003eedit_v\u003c/code\u003e with no default value.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_edit'",
          "package": "hsc3-lang",
          "signature": "Key -\u003e (Field -\u003e Field) -\u003e Event -\u003e Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_edit%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of edit with no default value",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_edit'",
          "normalized": "Key-\u003e(Field-\u003eField)-\u003eEvent-\u003eEvent",
          "package": "hsc3-lang",
          "signature": "Key-\u003e(Field-\u003eField)-\u003eEvent-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_edit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialised \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_empty",
          "package": "hsc3-lang",
          "signature": "Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_empty",
          "type": "function"
        },
        "index": {
          "description": "Type-specialised mempty",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_empty",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent from association list.\n\u003c/p\u003e\u003cpre\u003e e_get K_id (e_from_list [(K_id,1)]) == Just 1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_from_list",
          "package": "hsc3-lang",
          "signature": "[(Key, Field)] -\u003e Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_from_list",
          "type": "function"
        },
        "index": {
          "description": "Event from association list get id from list id Just",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_from_list",
          "normalized": "[(Key,Field)]-\u003eEvent",
          "package": "hsc3-lang",
          "signature": "[(Key,Field)]-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_from_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003cem\u003ek\u003c/em\u003e in \u003cem\u003ee\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e e_get K_id mempty == Nothing\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Event -\u003e Maybe Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get",
          "type": "function"
        },
        "index": {
          "description": "Lookup in get id mempty Nothing",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get",
          "normalized": "Key-\u003eEvent-\u003eMaybe Field",
          "package": "hsc3-lang",
          "signature": "Key-\u003eEvent-\u003eMaybe Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_array",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Event -\u003e Maybe [Double]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_array",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_array",
          "normalized": "Key-\u003eEvent-\u003eMaybe[Double]",
          "package": "hsc3-lang",
          "signature": "Key-\u003eEvent-\u003eMaybe[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get_ix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let e = e_from_list [(K_scale,f_array [0,2])]\n in e_get_array_ix Nothing K_scale e == Just [0,2]\n\u003c/pre\u003e\u003cpre\u003e let e = e_from_list [(K_scale,f_ref (f_array [0,2]))]\n in e_get_array_ix (Just 0) K_scale e == Just [0,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_array_ix",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Key -\u003e Event -\u003e Maybe [Double]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_array_ix",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get ix let from list scale array in get array ix Nothing scale Just let from list scale ref array in get array ix Just scale Just",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_array_ix",
          "normalized": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe[Double]",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_array_ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_bool",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Event -\u003e Maybe Bool",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_bool",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_bool",
          "normalized": "Key-\u003eEvent-\u003eMaybe Bool",
          "package": "hsc3-lang",
          "signature": "Key-\u003eEvent-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_double",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Event -\u003e Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_double",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_double",
          "normalized": "Key-\u003eEvent-\u003eMaybe Double",
          "package": "hsc3-lang",
          "signature": "Key-\u003eEvent-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get_ix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_double_ix",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Key -\u003e Event -\u003e Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_double_ix",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get ix",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_double_ix",
          "normalized": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Double",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_double_ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_instr",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Event -\u003e Maybe Instr",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_instr",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_instr",
          "normalized": "Key-\u003eEvent-\u003eMaybe Instr",
          "package": "hsc3-lang",
          "signature": "Key-\u003eEvent-\u003eMaybe Instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_instr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get_ix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_instr_ix",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Key -\u003e Event -\u003e Maybe Instr",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_instr_ix",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get ix",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_instr_ix",
          "normalized": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Instr",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_instr_ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_int",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Event -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_int",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_int",
          "normalized": "Key-\u003eEvent-\u003eMaybe Int",
          "package": "hsc3-lang",
          "signature": "Key-\u003eEvent-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ee_get_ix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_int_ix",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Key -\u003e Event -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_int_ix",
          "type": "function"
        },
        "index": {
          "description": "Type specialised get ix",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_int_ix",
          "normalized": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Int",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_int_ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediate or vector element lookup.\n\u003c/p\u003e\u003cpre\u003e e_get_ix Nothing K_id (e_from_list [(K_id,1)]) == Just 1\n\u003c/pre\u003e\u003cpre\u003e let n = f_array [0,1,2]\n in e_get_ix Nothing K_id (e_from_list [(K_id,n)]) == Just n\n\u003c/pre\u003e\u003cpre\u003e let n = f_array [0..9]\n in e_get_ix (Just 5) K_id (e_from_list [(K_id,n)]) == Just 5\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_ix",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Key -\u003e Event -\u003e Maybe Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_get_ix",
          "type": "function"
        },
        "index": {
          "description": "Immediate or vector element lookup get ix Nothing id from list id Just let array in get ix Nothing id from list id Just let array in get ix Just id from list id Just",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_get_ix",
          "normalized": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Field",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eKey-\u003eEvent-\u003eMaybe Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_get_ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e identifier.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_id",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Event -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_id",
          "type": "function"
        },
        "index": {
          "description": "Event identifier",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_id",
          "normalized": "Maybe Int-\u003eEvent-\u003eMaybe Int",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eEvent-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert (\u003cem\u003ek\u003c/em\u003e,\u003cem\u003ev\u003c/em\u003e) into \u003cem\u003ee\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e e_get K_id (e_insert K_id 1 mempty) == Just 1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_insert",
          "package": "hsc3-lang",
          "signature": "Key -\u003e Field -\u003e Event -\u003e Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_insert",
          "type": "function"
        },
        "index": {
          "description": "Insert into get id insert id mempty Just",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_insert",
          "normalized": "Key-\u003eField-\u003eEvent-\u003eEvent",
          "package": "hsc3-lang",
          "signature": "Key-\u003eField-\u003eEvent-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e have a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003erest\u003c/code\u003e key.\n\u003c/p\u003e\u003cpre\u003e e_is_rest mempty == False\n e_is_rest (e_from_list [(K_rest,1)]) == True\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_is_rest",
          "package": "hsc3-lang",
          "signature": "Event -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_is_rest",
          "type": "function"
        },
        "index": {
          "description": "Does Event have True rest key is rest mempty False is rest from list rest True",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_is_rest",
          "normalized": "Event-\u003eBool",
          "package": "hsc3-lang",
          "signature": "Event-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_is_rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage \u003cem\u003elatency\u003c/em\u003e of event.\n\u003c/p\u003e\u003cpre\u003e e_latency mempty == 0.1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_latency",
          "package": "hsc3-lang",
          "signature": "Event -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_latency",
          "type": "function"
        },
        "index": {
          "description": "Message latency of event latency mempty",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_latency",
          "normalized": "Event-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "Event-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_latency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum vector length at \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e e_mce_depth (e_from_list [(K_id,1)]) == Nothing\n e_mce_depth (e_from_list [(K_id,1),(K_param \"b\",f_array [2,3])]) == Just 2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_mce_depth",
          "package": "hsc3-lang",
          "signature": "Event -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_mce_depth",
          "type": "function"
        },
        "index": {
          "description": "Maximum vector length at Event mce depth from list id Nothing mce depth from list id param array Just",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_mce_depth",
          "normalized": "Event-\u003eMaybe Int",
          "package": "hsc3-lang",
          "signature": "Event-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_mce_depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ee_mce_extend\u003c/a\u003e\u003c/code\u003e variant.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_mce_expand",
          "package": "hsc3-lang",
          "signature": "Event -\u003e Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_mce_expand",
          "type": "function"
        },
        "index": {
          "description": "mce extend variant",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_mce_expand",
          "normalized": "Event-\u003eEvent",
          "package": "hsc3-lang",
          "signature": "Event-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_mce_expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend vectors at \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e if required, returning \u003ccode\u003e\u003ca\u003ee_mce_depth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let {e = e_from_list [(K_id,f_array [1,2]),(K_param \"b\",f_array [2,3,4])]\n     ;r = e_from_list [(K_id,f_array [1,2,1]),(K_param \"b\",f_array [2,3,4])]}\n in e_mce_extend e == Just (3,r)\n\u003c/pre\u003e\u003cpre\u003e let e = e_from_list [(K_id,1)]\n in e_mce_extend e == Nothing\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_mce_extend",
          "package": "hsc3-lang",
          "signature": "Event -\u003e Maybe (Int, Event)",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_mce_extend",
          "type": "function"
        },
        "index": {
          "description": "Extend vectors at Event if required returning mce depth let from list id array param array from list id array param array in mce extend Just let from list id in mce extend Nothing",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_mce_extend",
          "normalized": "Event-\u003eMaybe(Int,Event)",
          "package": "hsc3-lang",
          "signature": "Event-\u003eMaybe(Int,Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_mce_extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of \u003ccode\u003eadd_fwd\u003c/code\u003e and \u003ccode\u003emerge'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_merge",
          "package": "hsc3-lang",
          "signature": "(Time, [Event]) -\u003e (Time, [Event]) -\u003e [Event]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_merge",
          "type": "function"
        },
        "index": {
          "description": "Composition of add fwd and merge",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_merge",
          "normalized": "(Time,[Event])-\u003e(Time,[Event])-\u003e[Event]",
          "package": "hsc3-lang",
          "signature": "(Time,[Event])-\u003e(Time,[Event])-\u003e[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two time-stamped \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e sequences.  Note that this uses\n \u003ccode\u003e\u003ca\u003efwd\u003c/a\u003e\u003c/code\u003e to calculate start times.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_merge'",
          "package": "hsc3-lang",
          "signature": "(Time, [Event]) -\u003e (Time, [Event]) -\u003e [(Time, Event)]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_merge%27",
          "type": "function"
        },
        "index": {
          "description": "Merge two time-stamped Event sequences Note that this uses fwd to calculate start times",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_merge'",
          "normalized": "(Time,[Event])-\u003e(Time,[Event])-\u003e[(Time,Event)]",
          "package": "hsc3-lang",
          "signature": "(Time,[Event])-\u003e(Time,[Event])-\u003e[(Time,Event)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_merge-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003eSC3\u003c/code\u003e \u003cem\u003e(on,off)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e sets describing \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_messages",
          "package": "hsc3-lang",
          "signature": "Dur -\u003e Event -\u003e Int -\u003e Maybe Int -\u003e Maybe (T2 [Message])",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_messages",
          "type": "function"
        },
        "index": {
          "description": "Generate SC3 on off Message sets describing Event",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_messages",
          "normalized": "Dur-\u003eEvent-\u003eInt-\u003eMaybe Int-\u003eMaybe(T[Message])",
          "package": "hsc3-lang",
          "signature": "Dur-\u003eEvent-\u003eInt-\u003eMaybe Int-\u003eMaybe(T[Message])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_messages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMCE variant of \u003ccode\u003e\u003ca\u003ee_messages\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_messages_mce",
          "package": "hsc3-lang",
          "signature": "Dur -\u003e Event -\u003e Int -\u003e (Maybe (T2 [Message]), Int)",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_messages_mce",
          "type": "function"
        },
        "index": {
          "description": "MCE variant of messages",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_messages_mce",
          "normalized": "Dur-\u003eEvent-\u003eInt-\u003e(Maybe(T[Message]),Int)",
          "package": "hsc3-lang",
          "signature": "Dur-\u003eEvent-\u003eInt-\u003e(Maybe(T[Message]),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_messages_mce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform (productively) an \u003ccode\u003e\u003ca\u003eEvent_Seq\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eNRT\u003c/a\u003e\u003c/code\u003e score.\n\u003c/p\u003e\u003cpre\u003e let {n1 = nrt_bundles (e_nrt (Event_Seq (replicate 5 mempty)))\n     ;n2 = take 10 (nrt_bundles (e_nrt (Event_Seq (repeat mempty))))}\n in n1 == n2\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_nrt",
          "package": "hsc3-lang",
          "signature": "Event_Seq -\u003e NRT",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_nrt",
          "type": "function"
        },
        "index": {
          "description": "Transform productively an Event Seq into an NRT score let n1 nrt bundles nrt Event Seq replicate mempty n2 take nrt bundles nrt Event Seq repeat mempty in n1 n2",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_nrt",
          "normalized": "Event_Seq-\u003eNRT",
          "package": "hsc3-lang",
          "signature": "Event_Seq-\u003eNRT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_nrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN-ary variant of \u003ccode\u003e\u003ca\u003ee_merge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e e_par [(0,repeat (e_from_list [(K_id,1)]))\n       ,(0,repeat (e_from_list [(K_param \"b\",2)]))\n       ,(0,repeat (e_from_list [(K_param \"c\",3)]))]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_par",
          "package": "hsc3-lang",
          "signature": "[(Time, [Event])] -\u003e [Event]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_par",
          "type": "function"
        },
        "index": {
          "description": "N-ary variant of merge par repeat from list id repeat from list param repeat from list param",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_par",
          "normalized": "[(Time,[Event])]-\u003e[Event]",
          "package": "hsc3-lang",
          "signature": "[(Time,[Event])]-\u003e[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract non-\u003ccode\u003ereserved\u003c/code\u003e \u003ccode\u003eKeys\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let e = e_from_list [(K_freq,1),(K_param \"p\",1),(K_scale,f_ref (f_array [0,3,7]))]\n in e_parameters Nothing e == [(\"p\",1)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_parameters",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Event -\u003e [(String, Double)]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_parameters",
          "type": "function"
        },
        "index": {
          "description": "Extract non reserved Keys from Event let from list freq param scale ref array in parameters Nothing",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_parameters",
          "normalized": "Maybe Int-\u003eEvent-\u003e[(String,Double)]",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eEvent-\u003e[(String,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003ePitch\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e P.midinote (e_pitch Nothing mempty) == 60\n P.freq (e_pitch Nothing (e_from_list [(K_degree,5)])) == 440\n\u003c/pre\u003e\u003cpre\u003e let e = e_from_list [(K_degree,5),(K_scale,f_array [0,2,3,5,7,8,10])]\n in P.midinote (e_pitch Nothing e) == 68\n\u003c/pre\u003e\u003cpre\u003e let e = e_from_list [(K_degree,5),(K_scale,f_ref (f_array [0,2,3,5,7,8,10]))]\n in P.midinote (e_pitch (Just 0) (e_mce_expand e)) == 68\n\u003c/pre\u003e\u003cpre\u003e P.freq (e_pitch Nothing (e_from_list [(K_midinote,69)])) == 440\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_pitch",
          "package": "hsc3-lang",
          "signature": "Maybe Int -\u003e Event -\u003e Pitch",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_pitch",
          "type": "function"
        },
        "index": {
          "description": "Generate Pitch from Event P.midinote pitch Nothing mempty P.freq pitch Nothing from list degree let from list degree scale array in P.midinote pitch Nothing let from list degree scale ref array in P.midinote pitch Just mce expand P.freq pitch Nothing from list midinote",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_pitch",
          "normalized": "Maybe Int-\u003eEvent-\u003ePitch",
          "package": "hsc3-lang",
          "signature": "Maybe Int-\u003eEvent-\u003ePitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudition \u003ccode\u003e\u003ca\u003eEvent_Seq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_play",
          "package": "hsc3-lang",
          "signature": "Event_Seq -\u003e m ()",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_play",
          "type": "function"
        },
        "index": {
          "description": "Audition Event Seq",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_play",
          "normalized": "Event_Seq-\u003ea()",
          "package": "hsc3-lang",
          "signature": "Event_Seq-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e with \u003cem\u003erest\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_rest",
          "package": "hsc3-lang",
          "signature": "Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_rest",
          "type": "function"
        },
        "index": {
          "description": "mempty with rest",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_rest",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_seq_events",
          "package": "hsc3-lang",
          "signature": "[Event]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Event_Seq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_seq_events",
          "normalized": "[Event]",
          "package": "hsc3-lang",
          "signature": "[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_seq_events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent from association list.\n\u003c/p\u003e\u003cpre\u003e let a = [(K_id,1)] in e_to_list (e_from_list a) == a\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_to_list",
          "package": "hsc3-lang",
          "signature": "Event -\u003e [(Key, Field)]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_to_list",
          "type": "function"
        },
        "index": {
          "description": "Event from association list let id in to list from list",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_to_list",
          "normalized": "Event-\u003e[(Key,Field)]",
          "package": "hsc3-lang",
          "signature": "Event-\u003e[(Key,Field)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_to_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003etype\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e e_type mempty == \"s_new\"\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_type",
          "package": "hsc3-lang",
          "signature": "Event -\u003e String",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_type",
          "type": "function"
        },
        "index": {
          "description": "Event type type mempty new",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_type",
          "normalized": "Event-\u003eString",
          "package": "hsc3-lang",
          "signature": "Event-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch on event types, in sequence: s_new, n_set, rest.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_type_match",
          "package": "hsc3-lang",
          "signature": "Event -\u003e T3 (Event -\u003e t) -\u003e t",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_type_match",
          "type": "function"
        },
        "index": {
          "description": "Match on event types in sequence new set rest",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_type_match",
          "normalized": "Event-\u003eT(Event-\u003ea)-\u003ea",
          "package": "hsc3-lang",
          "signature": "Event-\u003eT(Event-\u003et)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_type_match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003ee_type_match\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_type_match'",
          "package": "hsc3-lang",
          "signature": "Event -\u003e T3 t -\u003e t",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_type_match%27",
          "type": "function"
        },
        "index": {
          "description": "const variant of type match",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_type_match'",
          "normalized": "Event-\u003eT a-\u003ea",
          "package": "hsc3-lang",
          "signature": "Event-\u003eT t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_type_match-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es, if required.\n\u003c/p\u003e\u003cpre\u003e let {e = e_from_list [(K_id,1),(K_param \"b\",f_array [2,3])]\n     ;r = [e_from_list [(K_id,1),(K_param \"b\",2)],e_from_list [(K_id,1),(K_param \"b\",3)]]}\n in e_un_mce e == Just r\n\u003c/pre\u003e\u003cpre\u003e let {e = e_from_list [(K_id,f_array [1,2]),(K_param \"b\",f_array [3,4,5])]\n     ;r = e_from_list [(K_id,1),(K_param \"b\",5)]}\n in fmap (!! 2) (e_un_mce e) == Just r\n\u003c/pre\u003e\u003cpre\u003e e_un_mce (e_from_list [(K_id,1)]) == Nothing\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_un_mce",
          "package": "hsc3-lang",
          "signature": "Event -\u003e Maybe [Event]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_un_mce",
          "type": "function"
        },
        "index": {
          "description": "Parallel Event if required let from list id param array from list id param from list id param in un mce Just let from list id array param array from list id param in fmap un mce Just un mce from list id Nothing",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_un_mce",
          "normalized": "Event-\u003eMaybe[Event]",
          "package": "hsc3-lang",
          "signature": "Event-\u003eMaybe[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_un_mce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ee_un_mce\u003c/a\u003e\u003c/code\u003e variant.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_un_mce'",
          "package": "hsc3-lang",
          "signature": "Event -\u003e [Event]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_un_mce%27",
          "type": "function"
        },
        "index": {
          "description": "un mce variant",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_un_mce'",
          "normalized": "Event-\u003e[Event]",
          "package": "hsc3-lang",
          "signature": "Event-\u003e[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_un_mce-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialised \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let {l = [(K_id,0)];r = [(K_degree,1)]}\n in e_from_list l \u003c\u003e e_from_list r == e_from_list (l \u003c\u003e r)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_union",
          "package": "hsc3-lang",
          "signature": "Event -\u003e Event -\u003e Event",
          "source": "src/Sound-SC3-Lang-Control-Event.html#e_union",
          "type": "function"
        },
        "index": {
          "description": "Type-specialised mappend let id degree in from list from list from list",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "e_union",
          "normalized": "Event-\u003eEvent-\u003eEvent",
          "package": "hsc3-lang",
          "signature": "Event-\u003eEvent-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:e_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform vector constructor.\n\u003c/p\u003e\u003cpre\u003e f_array [1,2] == F_Vector [F_Double 1,F_Double 2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_array",
          "package": "hsc3-lang",
          "signature": "[Double] -\u003e Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_array",
          "type": "function"
        },
        "index": {
          "description": "Uniform vector constructor array Vector Double Double",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_array",
          "normalized": "[Double]-\u003eField",
          "package": "hsc3-lang",
          "signature": "[Double]-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt floating branch of \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_atf",
          "package": "hsc3-lang",
          "signature": "(Double -\u003e a) -\u003e Field -\u003e a",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_atf",
          "type": "function"
        },
        "index": {
          "description": "At floating branch of Field",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_atf",
          "normalized": "(Double-\u003ea)-\u003eField-\u003ea",
          "package": "hsc3-lang",
          "signature": "(Double-\u003ea)-\u003eField-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_atf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt floating branches of \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_atf2",
          "package": "hsc3-lang",
          "signature": "(Double -\u003e Double -\u003e a) -\u003e Field -\u003e Field -\u003e a",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_atf2",
          "type": "function"
        },
        "index": {
          "description": "At floating branches of Field",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_atf2",
          "normalized": "(Double-\u003eDouble-\u003ea)-\u003eField-\u003eField-\u003ea",
          "package": "hsc3-lang",
          "signature": "(Double-\u003eDouble-\u003ea)-\u003eField-\u003eField-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_atf2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt floating branches of \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_atf3",
          "package": "hsc3-lang",
          "signature": "(Double -\u003e Double -\u003e Double -\u003e a) -\u003e Field -\u003e Field -\u003e Field -\u003e a",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_atf3",
          "type": "function"
        },
        "index": {
          "description": "At floating branches of Field",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_atf3",
          "normalized": "(Double-\u003eDouble-\u003eDouble-\u003ea)-\u003eField-\u003eField-\u003eField-\u003ea",
          "package": "hsc3-lang",
          "signature": "(Double-\u003eDouble-\u003eDouble-\u003ea)-\u003eField-\u003eField-\u003eField-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_atf3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumerical binary operator.\n\u003c/p\u003e\u003cpre\u003e f_binop (+) (F_Double 1) (F_Double 2) == F_Double 3\n f_binop (*) (f_array [1,2,3]) (f_array [3,4,5]) == f_array [3,8,15]\n f_binop (/) (F_Double 9) (F_Double 3) == F_Double 3\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_binop",
          "package": "hsc3-lang",
          "signature": "(Double -\u003e Double -\u003e Double) -\u003e Field -\u003e Field -\u003e Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_binop",
          "type": "function"
        },
        "index": {
          "description": "Numerical binary operator binop Double Double Double binop array array array binop Double Double Double",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_binop",
          "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003eField-\u003eField-\u003eField",
          "package": "hsc3-lang",
          "signature": "(Double-\u003eDouble-\u003eDouble)-\u003eField-\u003eField-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_binop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e0\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ef_double\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_bool_err",
          "package": "hsc3-lang",
          "signature": "String -\u003e Field -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_bool_err",
          "type": "function"
        },
        "index": {
          "description": "Run at double",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_bool_err",
          "normalized": "String-\u003eField-\u003eBool",
          "package": "hsc3-lang",
          "signature": "String-\u003eField-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_bool_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ef_double\u003c/a\u003e\u003c/code\u003e with specified error message.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double_err",
          "package": "hsc3-lang",
          "signature": "String -\u003e Field -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_double_err",
          "type": "function"
        },
        "index": {
          "description": "Variant of double with specified error message",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double_err",
          "normalized": "String-\u003eField-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "String-\u003eField-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_double_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexed variant of \u003ccode\u003e\u003ca\u003ef_double_err\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e f_double_err_ix \"\" Nothing 1 == 1\n f_double_err_ix \"\" (Just 1) (f_array [0,1]) == 1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double_err_ix",
          "package": "hsc3-lang",
          "signature": "String -\u003e Maybe Int -\u003e Field -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_double_err_ix",
          "type": "function"
        },
        "index": {
          "description": "Indexed variant of double err double err ix Nothing double err ix Just array",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double_err_ix",
          "normalized": "String-\u003eMaybe Int-\u003eField-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "String-\u003eMaybe Int-\u003eField-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_double_err_ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe variant of \u003ccode\u003e\u003ca\u003ef_double\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double_m",
          "package": "hsc3-lang",
          "signature": "Field -\u003e Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_double_m",
          "type": "function"
        },
        "index": {
          "description": "Maybe variant of double",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_double_m",
          "normalized": "Field-\u003eMaybe Double",
          "package": "hsc3-lang",
          "signature": "Field-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_double_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_instr",
          "package": "hsc3-lang",
          "signature": "Instr",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_instr",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_instr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ef_instr\u003c/a\u003e\u003c/code\u003e with specified error message.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_instr_err",
          "package": "hsc3-lang",
          "signature": "String -\u003e Field -\u003e Instr",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_instr_err",
          "type": "function"
        },
        "index": {
          "description": "Variant of instr with specified error message",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_instr_err",
          "normalized": "String-\u003eField-\u003eInstr",
          "package": "hsc3-lang",
          "signature": "String-\u003eField-\u003eInstr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_instr_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe variant of \u003ccode\u003e\u003ca\u003ef_instr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_instr_m",
          "package": "hsc3-lang",
          "signature": "Field -\u003e Maybe Instr",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_instr_m",
          "type": "function"
        },
        "index": {
          "description": "Maybe variant of instr",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_instr_m",
          "normalized": "Field-\u003eMaybe Instr",
          "package": "hsc3-lang",
          "signature": "Field-\u003eMaybe Instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_instr_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ef_double\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_int_err",
          "package": "hsc3-lang",
          "signature": "String -\u003e Field -\u003e Int",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_int_err",
          "type": "function"
        },
        "index": {
          "description": "Run round at double",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_int_err",
          "normalized": "String-\u003eField-\u003eInt",
          "package": "hsc3-lang",
          "signature": "String-\u003eField-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_int_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap \u003cem\u003efn\u003c/em\u003e over vector elements at \u003cem\u003ef\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e f_map negate (f_array [0,1]) == f_array [0,-1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_map",
          "package": "hsc3-lang",
          "signature": "(Field -\u003e Field) -\u003e Field -\u003e Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_map",
          "type": "function"
        },
        "index": {
          "description": "Map fn over vector elements at map negate array array",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_map",
          "normalized": "(Field-\u003eField)-\u003eField-\u003eField",
          "package": "hsc3-lang",
          "signature": "(Field-\u003eField)-\u003eField-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend to \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e to \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e f_mce_extend 3 (f_array [1,2]) == f_array [1,2,1]\n f_mce_extend 3 1 == f_array [1,1,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_mce_extend",
          "package": "hsc3-lang",
          "signature": "Int -\u003e Field -\u003e Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_mce_extend",
          "type": "function"
        },
        "index": {
          "description": "Extend to Field to mce extend array array mce extend array",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_mce_extend",
          "normalized": "Int-\u003eField-\u003eField",
          "package": "hsc3-lang",
          "signature": "Int-\u003eField-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_mce_extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003cem\u003ereader\u003c/em\u003e with specified error message.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_reader_err",
          "package": "hsc3-lang",
          "signature": "String -\u003e String -\u003e (Field -\u003e Maybe a) -\u003e Field -\u003e a",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_reader_err",
          "type": "function"
        },
        "index": {
          "description": "Variant of reader with specified error message",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_reader_err",
          "normalized": "String-\u003eString-\u003e(Field-\u003eMaybe a)-\u003eField-\u003ea",
          "package": "hsc3-lang",
          "signature": "String-\u003eString-\u003e(Field-\u003eMaybe a)-\u003eField-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_reader_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle element \u003ccode\u003e\u003ca\u003eF_Vector\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cpre\u003e f_ref 1 == f_array [1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_ref",
          "package": "hsc3-lang",
          "signature": "Field -\u003e Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_ref",
          "type": "function"
        },
        "index": {
          "description": "Single element Vector constructor ref array",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_ref",
          "normalized": "Field-\u003eField",
          "package": "hsc3-lang",
          "signature": "Field-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_string",
          "package": "hsc3-lang",
          "signature": "String",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_string",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumerical unary operator.\n\u003c/p\u003e\u003cpre\u003e f_uop negate (F_Double 1) == F_Double (-1)\n f_uop negate (F_Vector [F_Double 0,F_Double 1]) == f_array [0,-1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_uop",
          "package": "hsc3-lang",
          "signature": "(Double -\u003e Double) -\u003e Field -\u003e Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_uop",
          "type": "function"
        },
        "index": {
          "description": "Numerical unary operator uop negate Double Double uop negate Vector Double Double array",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_uop",
          "normalized": "(Double-\u003eDouble)-\u003eField-\u003eField",
          "package": "hsc3-lang",
          "signature": "(Double-\u003eDouble)-\u003eField-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_uop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_vector",
          "package": "hsc3-lang",
          "signature": "[Field]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_vector",
          "normalized": "[Field]",
          "package": "hsc3-lang",
          "signature": "[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ef_vector_m\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e f_vector_length (f_array [1..5]) == Just 5\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_vector_length",
          "package": "hsc3-lang",
          "signature": "Field -\u003e Maybe Int",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_vector_length",
          "type": "function"
        },
        "index": {
          "description": "length of vector vector length array Just",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_vector_length",
          "normalized": "Field-\u003eMaybe Int",
          "package": "hsc3-lang",
          "signature": "Field-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_vector_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe variant of \u003ccode\u003e\u003ca\u003ef_vector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_vector_m",
          "package": "hsc3-lang",
          "signature": "Field -\u003e Maybe [Field]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#f_vector_m",
          "type": "function"
        },
        "index": {
          "description": "Maybe variant of vector",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "f_vector_m",
          "normalized": "Field-\u003eMaybe[Field]",
          "package": "hsc3-lang",
          "signature": "Field-\u003eMaybe[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:f_vector_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e \u003ccode\u003e\u003ca\u003ek_reserved\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003enot\u003c/em\u003e \u003ccode\u003e\u003ca\u003ek_vector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e k_is_parameter (K_param \"pan\",0) == True\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_is_parameter",
          "package": "hsc3-lang",
          "signature": "(Key, a) -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Control-Event.html#k_is_parameter",
          "type": "function"
        },
        "index": {
          "description": "Is Key not reserved and not vector is parameter param pan True",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_is_parameter",
          "normalized": "(Key,a)-\u003eBool",
          "package": "hsc3-lang",
          "signature": "(Key,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:k_is_parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSC3 name of \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map k_name [K_freq,K_dur,K_param \"pan\"] == [\"freq\",\"dur\",\"pan\"]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_name",
          "package": "hsc3-lang",
          "signature": "Key -\u003e String",
          "source": "src/Sound-SC3-Lang-Control-Event.html#k_name",
          "type": "function"
        },
        "index": {
          "description": "SC3 name of Key map name freq dur param pan freq dur pan",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_name",
          "normalized": "Key-\u003eString",
          "package": "hsc3-lang",
          "signature": "Key-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:k_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of reserved \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003es used in pitch, duration and amplitude\n models.  These are keys that may be provided explicitly, but if not\n will be calculated implicitly.\n\u003c/p\u003e\u003cpre\u003e (K_freq `elem` k_reserved) == True\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_reserved",
          "package": "hsc3-lang",
          "signature": "[Key]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#k_reserved",
          "type": "function"
        },
        "index": {
          "description": "List of reserved Key used in pitch duration and amplitude models These are keys that may be provided explicitly but if not will be calculated implicitly freq elem reserved True",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_reserved",
          "normalized": "[Key]",
          "package": "hsc3-lang",
          "signature": "[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:k_reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_vector",
          "package": "hsc3-lang",
          "signature": "[Key]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#k_vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "k_vector",
          "normalized": "[Key]",
          "package": "hsc3-lang",
          "signature": "[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:k_vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e:\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "mcons",
          "package": "hsc3-lang",
          "signature": "Maybe a -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#mcons",
          "type": "function"
        },
        "index": {
          "description": "Maybe variant of",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "mcons",
          "normalized": "Maybe a-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "Maybe a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:mcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-biased merge of two sorted sequence of temporal values.\n\u003c/p\u003e\u003cpre\u003e let m = t_merge (zip [0,2,4,6] ['a'..]) (zip [0,3,6] ['A'..])\n in m == [(0,'a'),(0,'A'),(2,'b'),(3,'B'),(4,'c'),(6,'d'),(6,'C')]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "t_merge",
          "package": "hsc3-lang",
          "signature": "[(t, a)] -\u003e [(t, a)] -\u003e [(t, a)]",
          "source": "src/Sound-SC3-Lang-Control-Event.html#t_merge",
          "type": "function"
        },
        "index": {
          "description": "Left-biased merge of two sorted sequence of temporal values let merge zip zip in",
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "t_merge",
          "normalized": "[(a,b)]-\u003e[(a,b)]-\u003e[(a,b)]",
          "package": "hsc3-lang",
          "signature": "[(t,a)]-\u003e[(t,a)]-\u003e[(t,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:t_merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "toF",
          "package": "hsc3-lang",
          "signature": "a -\u003e Field",
          "source": "src/Sound-SC3-Lang-Control-Event.html#toF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Event",
          "module": "Sound.SC3.Lang.Control.Event",
          "name": "toF",
          "normalized": "a-\u003eField",
          "package": "hsc3-lang",
          "signature": "a-\u003eField",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Event.html#v:toF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn instrument abstraction and a \u003cem\u003edefault\u003c/em\u003e instrument for patterns.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instrument",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html",
          "type": "module"
        },
        "index": {
          "description": "An instrument abstraction and default instrument for patterns",
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instrument",
          "package": "hsc3-lang",
          "partial": "Instrument",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInstr\u003c/a\u003e\u003c/code\u003e is either a \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e or the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e naming a\n \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instr",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#Instr",
          "type": "data"
        },
        "index": {
          "description": "An Instr is either Synthdef or the String naming Synthdef",
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instr",
          "package": "hsc3-lang",
          "partial": "Instr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#t:Instr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instr_Def",
          "package": "hsc3-lang",
          "signature": "Instr_Def",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#Instr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instr_Def",
          "package": "hsc3-lang",
          "partial": "Instr Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:Instr_Def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instr_Ref",
          "package": "hsc3-lang",
          "signature": "Instr_Ref",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#Instr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "Instr_Ref",
          "package": "hsc3-lang",
          "partial": "Instr Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:Instr_Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInstr\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003edefaultSynthdef\u003c/a\u003e\u003c/code\u003e, ie. \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "defaultInstr",
          "package": "hsc3-lang",
          "signature": "Instr",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#defaultInstr",
          "type": "function"
        },
        "index": {
          "description": "Instr of defaultSynthdef ie def of Synthdef",
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "defaultInstr",
          "package": "hsc3-lang",
          "partial": "Instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:defaultInstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_def",
          "package": "hsc3-lang",
          "signature": "Synthdef",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#Instr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_def",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:i_def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eInstr\u003c/a\u003e\u003c/code\u003e have a name.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_name",
          "package": "hsc3-lang",
          "signature": "Instr -\u003e String",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#i_name",
          "type": "function"
        },
        "index": {
          "description": "All Instr have name",
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_name",
          "normalized": "Instr-\u003eString",
          "package": "hsc3-lang",
          "signature": "Instr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:i_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_ref",
          "package": "hsc3-lang",
          "signature": "String",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#Instr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_ref",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:i_ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eI_Def\u003c/code\u003e subsequent are \u003ccode\u003eI_Ref\u003c/code\u003e, else all \u003ccode\u003eI_Ref\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_repeat",
          "package": "hsc3-lang",
          "signature": "Instr -\u003e [Instr]",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#i_repeat",
          "type": "function"
        },
        "index": {
          "description": "If Def subsequent are Ref else all Ref",
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_repeat",
          "normalized": "Instr-\u003e[Instr]",
          "package": "hsc3-lang",
          "signature": "Instr-\u003e[Instr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:i_repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_send_release",
          "package": "hsc3-lang",
          "signature": "Bool",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#Instr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_send_release",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:i_send_release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eInstr\u003c/a\u003e\u003c/code\u003e may have a \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_synthdef",
          "package": "hsc3-lang",
          "signature": "Instr -\u003e Maybe Synthdef",
          "source": "src/Sound-SC3-Lang-Control-Instrument.html#i_synthdef",
          "type": "function"
        },
        "index": {
          "description": "All Instr may have Synthdef",
          "hierarchy": "Sound SC3 Lang Control Instrument",
          "module": "Sound.SC3.Lang.Control.Instrument",
          "name": "i_synthdef",
          "normalized": "Instr-\u003eMaybe Synthdef",
          "package": "hsc3-lang",
          "signature": "Instr-\u003eMaybe Synthdef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Instrument.html#v:i_synthdef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor a single input controller, key events always arrive in\n sequence (ie. on-\u003eoff), ie. for any key on message we can allocate\n an ID and associate it with the key, an off message can retrieve\n the ID given the key.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Midi",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Midi.html",
          "type": "module"
        },
        "index": {
          "description": "For single input controller key events always arrive in sequence ie on off ie for any key on message we can allocate an ID and associate it with the key an off message can retrieve the ID given the key",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Midi",
          "package": "hsc3-lang",
          "partial": "Midi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eControl_Change\u003c/a\u003e\u003c/code\u003e midi messages have, in some cases, commonly\n defined meanings.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Control_Message",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "data"
        },
        "index": {
          "description": "Control Change midi messages have in some cases commonly defined meanings",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Control_Message",
          "package": "hsc3-lang",
          "partial": "Control Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#t:Control_Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of allocated \u003ccode\u003e\u003ca\u003eNode_Id\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "K",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#K",
          "type": "data"
        },
        "index": {
          "description": "Map of allocated Node Id",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "K",
          "package": "hsc3-lang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e specialised to \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "KT",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#KT",
          "type": "type"
        },
        "index": {
          "description": "StateT of specialised to Int",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "KT",
          "package": "hsc3-lang",
          "partial": "KT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#t:KT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.midi.org/techspecs/midimessages.php\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Midi_Message",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "data"
        },
        "index": {
          "description": "http www.midi.org techspecs midimessages.php",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Midi_Message",
          "package": "hsc3-lang",
          "partial": "Midi Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#t:Midi_Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMidi_Receiver\u003c/a\u003e\u003c/code\u003e is passed a \u003ccode\u003e\u003ca\u003eMidi_Message\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eNode_Id\u003c/a\u003e\u003c/code\u003e.\n For \u003ccode\u003e\u003ca\u003eNote_On\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNote_Off\u003c/a\u003e\u003c/code\u003e messages the \u003ccode\u003e\u003ca\u003eNode_Id\u003c/a\u003e\u003c/code\u003e is positive,\n for all other message it is \u003ccode\u003e-1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Midi_Receiver",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Receiver",
          "type": "type"
        },
        "index": {
          "description": "The Midi Receiver is passed Midi Message and Node Id For Note On and Note Off messages the Node Id is positive for all other message it is",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Midi_Receiver",
          "package": "hsc3-lang",
          "partial": "Midi Receiver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#t:Midi_Receiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSC3\u003c/code\u003e node identifiers are integers.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Node_Id",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Node_Id",
          "type": "type"
        },
        "index": {
          "description": "SC3 node identifiers are integers",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Node_Id",
          "package": "hsc3-lang",
          "partial": "Node Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#t:Node_Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "All_Notes_Off",
          "package": "hsc3-lang",
          "signature": "All_Notes_Off a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "All_Notes_Off",
          "package": "hsc3-lang",
          "partial": "All Notes Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:All_Notes_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "All_Sound_Off",
          "package": "hsc3-lang",
          "signature": "All_Sound_Off a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "All_Sound_Off",
          "package": "hsc3-lang",
          "partial": "All Sound Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:All_Sound_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Balance",
          "package": "hsc3-lang",
          "signature": "Balance a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Balance",
          "package": "hsc3-lang",
          "partial": "Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Bank_Select",
          "package": "hsc3-lang",
          "signature": "Bank_Select a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Bank_Select",
          "package": "hsc3-lang",
          "partial": "Bank Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Bank_Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Breath_Controller",
          "package": "hsc3-lang",
          "signature": "Breath_Controller a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Breath_Controller",
          "package": "hsc3-lang",
          "partial": "Breath Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Breath_Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Chanel_Aftertouch",
          "package": "hsc3-lang",
          "signature": "Chanel_Aftertouch a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Chanel_Aftertouch",
          "package": "hsc3-lang",
          "partial": "Chanel Aftertouch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Chanel_Aftertouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Control_Change",
          "package": "hsc3-lang",
          "signature": "Control_Change a a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Control_Change",
          "package": "hsc3-lang",
          "partial": "Control Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Control_Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Expression_Controller",
          "package": "hsc3-lang",
          "signature": "Expression_Controller a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Expression_Controller",
          "package": "hsc3-lang",
          "partial": "Expression Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Expression_Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Foot_Controller",
          "package": "hsc3-lang",
          "signature": "Foot_Controller a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Foot_Controller",
          "package": "hsc3-lang",
          "partial": "Foot Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Foot_Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "K",
          "package": "hsc3-lang",
          "signature": "K (Map (a, a) Node_Id) Node_Id",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "K",
          "normalized": "K(Map(a,a)Node_Id)Node_Id",
          "package": "hsc3-lang",
          "signature": "K(Map(a,a)Node_Id)Node_Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Local_Control",
          "package": "hsc3-lang",
          "signature": "Local_Control a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Local_Control",
          "package": "hsc3-lang",
          "partial": "Local Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Local_Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Modulation_Wheel",
          "package": "hsc3-lang",
          "signature": "Modulation_Wheel a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Modulation_Wheel",
          "package": "hsc3-lang",
          "partial": "Modulation Wheel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Modulation_Wheel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Mono_Mode_On",
          "package": "hsc3-lang",
          "signature": "Mono_Mode_On a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Mono_Mode_On",
          "package": "hsc3-lang",
          "partial": "Mono Mode On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Mono_Mode_On"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Note_Off",
          "package": "hsc3-lang",
          "signature": "Note_Off a a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Note_Off",
          "package": "hsc3-lang",
          "partial": "Note Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Note_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Note_On",
          "package": "hsc3-lang",
          "signature": "Note_On a a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Note_On",
          "package": "hsc3-lang",
          "partial": "Note On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Note_On"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Omni_Mode_Off",
          "package": "hsc3-lang",
          "signature": "Omni_Mode_Off a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Omni_Mode_Off",
          "package": "hsc3-lang",
          "partial": "Omni Mode Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Omni_Mode_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Omni_Mode_On",
          "package": "hsc3-lang",
          "signature": "Omni_Mode_On a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Omni_Mode_On",
          "package": "hsc3-lang",
          "partial": "Omni Mode On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Omni_Mode_On"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Pan",
          "package": "hsc3-lang",
          "signature": "Pan a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Pan",
          "package": "hsc3-lang",
          "partial": "Pan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Pan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Pitch_Bend",
          "package": "hsc3-lang",
          "signature": "Pitch_Bend a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Pitch_Bend",
          "package": "hsc3-lang",
          "partial": "Pitch Bend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Pitch_Bend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Poly_Mode_On",
          "package": "hsc3-lang",
          "signature": "Poly_Mode_On a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Poly_Mode_On",
          "package": "hsc3-lang",
          "partial": "Poly Mode On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Poly_Mode_On"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Polyphic_Key_Pressure",
          "package": "hsc3-lang",
          "signature": "Polyphic_Key_Pressure a a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Polyphic_Key_Pressure",
          "package": "hsc3-lang",
          "partial": "Polyphic Key Pressure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Polyphic_Key_Pressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Portamento_On_Off",
          "package": "hsc3-lang",
          "signature": "Portamento_On_Off a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Portamento_On_Off",
          "package": "hsc3-lang",
          "partial": "Portamento On Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Portamento_On_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Portamento_Time",
          "package": "hsc3-lang",
          "signature": "Portamento_Time a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Portamento_Time",
          "package": "hsc3-lang",
          "partial": "Portamento Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Portamento_Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Program_Change",
          "package": "hsc3-lang",
          "signature": "Program_Change a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Program_Change",
          "package": "hsc3-lang",
          "partial": "Program Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Program_Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Reset_All_Controllers",
          "package": "hsc3-lang",
          "signature": "Reset_All_Controllers a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Reset_All_Controllers",
          "package": "hsc3-lang",
          "partial": "Reset All Controllers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Reset_All_Controllers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Soft_Pedal_On_Off",
          "package": "hsc3-lang",
          "signature": "Soft_Pedal_On_Off a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Soft_Pedal_On_Off",
          "package": "hsc3-lang",
          "partial": "Soft Pedal On Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Soft_Pedal_On_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Sostenuto_On_Off",
          "package": "hsc3-lang",
          "signature": "Sostenuto_On_Off a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Sostenuto_On_Off",
          "package": "hsc3-lang",
          "partial": "Sostenuto On Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Sostenuto_On_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Sustain_On_Off",
          "package": "hsc3-lang",
          "signature": "Sustain_On_Off a a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Sustain_On_Off",
          "package": "hsc3-lang",
          "partial": "Sustain On Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Sustain_On_Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Undefined",
          "package": "hsc3-lang",
          "signature": "Undefined",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Control_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Undefined",
          "package": "hsc3-lang",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Unknown",
          "package": "hsc3-lang",
          "signature": "Unknown [a]",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#Midi_Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "Unknown",
          "normalized": "Unknown[a]",
          "package": "hsc3-lang",
          "partial": "Unknown",
          "signature": "Unknown[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two 7-bit values into a 14-bit value.\n\u003c/p\u003e\u003cpre\u003e map (uncurry b_join) [(0,0),(0,64),(127,127)] == [0,8192,16383]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "b_join",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#b_join",
          "type": "function"
        },
        "index": {
          "description": "Join two bit values into bit value map uncurry join",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "b_join",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:b_join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003eb_join\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map b_sep [0,8192,16383] == [(0,0),(0,64),(127,127)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "b_sep",
          "package": "hsc3-lang",
          "signature": "t -\u003e (t, t)",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#b_sep",
          "type": "function"
        },
        "index": {
          "description": "Inverse of join map sep",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "b_sep",
          "normalized": "a-\u003e(a,a)",
          "package": "hsc3-lang",
          "signature": "t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:b_sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eControl_Change\u003c/a\u003e\u003c/code\u003e midi messages may, in some cases, have commonly\n defined meanings.\n\u003c/p\u003e\u003cpre\u003e control_message (0,123,0) == All_Notes_Off 0\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "control_message",
          "package": "hsc3-lang",
          "signature": "(a, a, a) -\u003e Control_Message a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#control_message",
          "type": "function"
        },
        "index": {
          "description": "Control Change midi messages may in some cases have commonly defined meanings control message All Notes Off",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "control_message",
          "normalized": "(a,a,a)-\u003eControl_Message a",
          "package": "hsc3-lang",
          "signature": "(a,a,a)-\u003eControl_Message a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:control_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNode_Id\u003c/a\u003e\u003c/code\u003e allocator.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "k_alloc",
          "package": "hsc3-lang",
          "signature": "(Int, Int) -\u003e KT Node_Id",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#k_alloc",
          "type": "function"
        },
        "index": {
          "description": "Node Id allocator",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "k_alloc",
          "normalized": "(Int,Int)-\u003eKT Node_Id",
          "package": "hsc3-lang",
          "signature": "(Int,Int)-\u003eKT Node_Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:k_alloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNode_Id\u003c/a\u003e\u003c/code\u003e retrieval.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "k_get",
          "package": "hsc3-lang",
          "signature": "(Int, Int) -\u003e KT Node_Id",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#k_get",
          "type": "function"
        },
        "index": {
          "description": "Node Id retrieval",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "k_get",
          "normalized": "(Int,Int)-\u003eKT Node_Id",
          "package": "hsc3-lang",
          "signature": "(Int,Int)-\u003eKT Node_Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:k_get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialise \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e with starting \u003ccode\u003e\u003ca\u003eNode_Id\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "k_init",
          "package": "hsc3-lang",
          "signature": "Node_Id -\u003e K a",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#k_init",
          "type": "function"
        },
        "index": {
          "description": "Initialise with starting Node Id",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "k_init",
          "normalized": "Node_Id-\u003eK a",
          "package": "hsc3-lang",
          "signature": "Node_Id-\u003eK a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:k_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse incoming midi messages, do \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e allocation, and run\n \u003ccode\u003e\u003ca\u003eMidi_Receiver\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "midi_act",
          "package": "hsc3-lang",
          "signature": "Midi_Receiver IO Int -\u003e Message -\u003e StateT (K Int) IO ()",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#midi_act",
          "type": "function"
        },
        "index": {
          "description": "Parse incoming midi messages do allocation and run Midi Receiver",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "midi_act",
          "normalized": "Midi_Receiver IO Int-\u003eMessage-\u003eStateT(K Int)IO()",
          "package": "hsc3-lang",
          "signature": "Midi_Receiver IO Int-\u003eMessage-\u003eStateT(K Int)IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:midi_act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003emidi-osc\u003c/code\u003e \u003ccode\u003e\u003cem\u003emidi\u003c/em\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "parse_b",
          "package": "hsc3-lang",
          "signature": "Message -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#parse_b",
          "type": "function"
        },
        "index": {
          "description": "Parse midi-osc midi message",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "parse_b",
          "normalized": "Message-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "Message-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:parse_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eparse_b\u003c/a\u003e\u003c/code\u003e that give status byte as low and high.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "parse_c",
          "package": "hsc3-lang",
          "signature": "Message -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#parse_c",
          "type": "function"
        },
        "index": {
          "description": "Variant of parse that give status byte as low and high",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "parse_c",
          "normalized": "Message-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "Message-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:parse_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eparse_c\u003c/a\u003e\u003c/code\u003e that constructs a \u003ccode\u003e\u003ca\u003eMidi_Message\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "parse_m",
          "package": "hsc3-lang",
          "signature": "Message -\u003e Midi_Message n",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#parse_m",
          "type": "function"
        },
        "index": {
          "description": "Variant of parse that constructs Midi Message",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "parse_m",
          "normalized": "Message-\u003eMidi_Message a",
          "package": "hsc3-lang",
          "signature": "Message-\u003eMidi_Message n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:parse_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun midi system, handles \u003ccode\u003e\u003ca\u003eAsyncException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "start_midi",
          "package": "hsc3-lang",
          "signature": "(UDP -\u003e Midi_Receiver IO Int) -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-Midi.html#start_midi",
          "type": "function"
        },
        "index": {
          "description": "Run midi system handles AsyncException",
          "hierarchy": "Sound SC3 Lang Control Midi",
          "module": "Sound.SC3.Lang.Control.Midi",
          "name": "start_midi",
          "normalized": "(UDP-\u003eMidi_Receiver IO Int)-\u003eIO()",
          "package": "hsc3-lang",
          "signature": "(UDP-\u003eMidi_Receiver IO Int)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Midi.html#v:start_midi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eSC2\u003c/code\u003e \u003ccode\u003eOverlapTexture\u003c/code\u003e related functions.\n\u003c/p\u003e\u003cp\u003eGenerate sequences of overlapping instances of a \u003ccode\u003e\u003ca\u003eUGen\u003c/a\u003e\u003c/code\u003e graph or\n family of graphs.  The \u003ccode\u003e\u003ca\u003eOverlapTexture\u003c/a\u003e\u003c/code\u003e functions add an \u003ccode\u003e\u003ca\u003eEnvelope\u003c/a\u003e\u003c/code\u003e\n and calculate inter-onset times and durations.  There are variants\n for different graph constructors, and to allow for a\n post-processing stage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html",
          "type": "module"
        },
        "index": {
          "description": "SC2 OverlapTexture related functions Generate sequences of overlapping instances of UGen graph or family of graphs The OverlapTexture functions add an Envelope and calculate inter-onset times and durations There are variants for different graph constructors and to allow for post-processing stage",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture",
          "package": "hsc3-lang",
          "partial": "Overlap Texture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic state transform function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "MSTF",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#MSTF",
          "type": "type"
        },
        "index": {
          "description": "Monadic state transform function",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "MSTF",
          "package": "hsc3-lang",
          "partial": "MSTF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#t:MSTF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl parameters for \u003ccode\u003e\u003ca\u003eoverlapTextureU\u003c/a\u003e\u003c/code\u003e and related functions.\n Components are: 1. sustain time, 2. transition time, 3. number of\n overlaping (simultaneous) nodes and 4. number of nodes altogether.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#OverlapTexture",
          "type": "type"
        },
        "index": {
          "description": "Control parameters for overlapTextureU and related functions Components are sustain time transition time number of overlaping simultaneous nodes and number of nodes altogether",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture",
          "package": "hsc3-lang",
          "partial": "Overlap Texture",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#t:OverlapTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord of \u003ccode\u003e\u003ca\u003eOverlapTexture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture_",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#OverlapTexture_",
          "type": "data"
        },
        "index": {
          "description": "Record of OverlapTexture",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture_",
          "package": "hsc3-lang",
          "partial": "Overlap Texture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#t:OverlapTexture_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePost processing function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "PPF",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#PPF",
          "type": "type"
        },
        "index": {
          "description": "Post processing function",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "PPF",
          "package": "hsc3-lang",
          "partial": "PPF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#t:PPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003cem\u003elegato\u003c/em\u003e,\u003cem\u003eduration\u003c/em\u003e) parameters. The \u003cem\u003eduration\u003c/em\u003e is the\n inter-offset time, \u003cem\u003elegato\u003c/em\u003e is the scalar giving the sounding time\n in relation to the inter-offset time.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "Texture_DT",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#Texture_DT",
          "type": "type"
        },
        "index": {
          "description": "legato duration parameters The duration is the inter-offset time legato is the scalar giving the sounding time in relation to the inter-offset time",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "Texture_DT",
          "package": "hsc3-lang",
          "partial": "Texture DT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#t:Texture_DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUGen generating state transform function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "USTF",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#USTF",
          "type": "type"
        },
        "index": {
          "description": "UGen generating state transform function",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "USTF",
          "package": "hsc3-lang",
          "partial": "USTF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#t:USTF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl parameters for \u003ccode\u003e\u003ca\u003exfadeTextureU\u003c/a\u003e\u003c/code\u003e and related functions.\n Components are: 1. sustain time, 2. transition time, 3. number of\n nodes instatiated altogether.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "XFadeTexture",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#XFadeTexture",
          "type": "type"
        },
        "index": {
          "description": "Control parameters for xfadeTextureU and related functions Components are sustain time transition time number of nodes instatiated altogether",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "XFadeTexture",
          "package": "hsc3-lang",
          "partial": "XFade Texture",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#t:XFadeTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture",
          "package": "hsc3-lang",
          "signature": "OverlapTexture",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#OverlapTexture_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "OverlapTexture",
          "package": "hsc3-lang",
          "partial": "Overlap Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:OverlapTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a monadic state transforming function \u003cem\u003ef\u003c/em\u003e that operates with\n a delta \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e indicating the duration to pause before re-running\n the function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "dt_rescheduler_m",
          "package": "hsc3-lang",
          "signature": "MSTF (st, Time) m -\u003e (st, Time) -\u003e m ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#dt_rescheduler_m",
          "type": "function"
        },
        "index": {
          "description": "Run monadic state transforming function that operates with delta Time indicating the duration to pause before re-running the function",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "dt_rescheduler_m",
          "normalized": "MSTF(a,Time)b-\u003e(a,Time)-\u003eb()",
          "package": "hsc3-lang",
          "signature": "MSTF(st,Time)m-\u003e(st,Time)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:dt_rescheduler_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e from envelope parameters for \u003ccode\u003e\u003ca\u003ewith_env\u003c/a\u003e\u003c/code\u003e and\n a continuous signal.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "gen_synth",
          "package": "hsc3-lang",
          "signature": "(Double, Double) -\u003e UGen -\u003e Synthdef",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#gen_synth",
          "type": "function"
        },
        "index": {
          "description": "Generate Synthdef from envelope parameters for with env and continuous signal",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "gen_synth",
          "normalized": "(Double,Double)-\u003eUGen-\u003eSynthdef",
          "package": "hsc3-lang",
          "signature": "(Double,Double)-\u003eUGen-\u003eSynthdef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:gen_synth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "max_repeats",
          "package": "hsc3-lang",
          "signature": "Int",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#OverlapTexture_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "max_repeats",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:max_repeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eenvGen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eUGen\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eenvLinen'\u003c/a\u003e\u003c/code\u003e structure with given\n \u003cem\u003esustain\u003c/em\u003e and \u003cem\u003etransition\u003c/em\u003e times.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "mk_env",
          "package": "hsc3-lang",
          "signature": "UGen -\u003e UGen -\u003e UGen",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#mk_env",
          "type": "function"
        },
        "index": {
          "description": "Make an envGen UGen with envLinen structure with given sustain and transition times",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "mk_env",
          "normalized": "UGen-\u003eUGen-\u003eUGen",
          "package": "hsc3-lang",
          "signature": "UGen-\u003eUGen-\u003eUGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:mk_env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eoverlapTextureU\u003c/a\u003e\u003c/code\u003e where the continuous signal is in\n the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureM",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e IO UGen -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureM",
          "type": "function"
        },
        "index": {
          "description": "Variant of overlapTextureU where the continuous signal is in the IO monad",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureM",
          "normalized": "OverlapTexture-\u003eIO UGen-\u003eIO()",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eIO UGen-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an \u003cem\u003eevent\u003c/em\u003e pattern from \u003ccode\u003e\u003ca\u003eOverlapTexture\u003c/a\u003e\u003c/code\u003e control\n parameters and a continuous signal.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureP",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e UGen -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureP",
          "type": "function"
        },
        "index": {
          "description": "Generate an event pattern from OverlapTexture control parameters and continuous signal",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureP",
          "normalized": "OverlapTexture-\u003eUGen-\u003eP Event",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eUGen-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eoverlapTextureP\u003c/a\u003e\u003c/code\u003e where the continuous signal for each\n \u003cem\u003eevent\u003c/em\u003e is derived from a state transform function seeded with\n given initial state.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureP_st",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e USTF st -\u003e st -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureP_st",
          "type": "function"
        },
        "index": {
          "description": "Variant of overlapTextureP where the continuous signal for each event is derived from state transform function seeded with given initial state",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureP_st",
          "normalized": "OverlapTexture-\u003eUSTF a-\u003ea-\u003eP Event",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eUSTF st-\u003est-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureP_st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying function of \u003ccode\u003e\u003ca\u003eoverlapTextureM\u003c/a\u003e\u003c/code\u003e with explicit \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureR",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e IO UGen -\u003e MSTF (Int, Time) m",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureR",
          "type": "function"
        },
        "index": {
          "description": "Underlying function of overlapTextureM with explicit Transport",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureR",
          "normalized": "OverlapTexture-\u003eIO UGen-\u003eMSTF(Int,Time)a",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eIO UGen-\u003eMSTF(Int,Time)m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudition pattern given by \u003ccode\u003e\u003ca\u003eoverlapTextureP_st\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureS",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e USTF st -\u003e st -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureS",
          "type": "function"
        },
        "index": {
          "description": "Audition pattern given by overlapTextureP st",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureS",
          "normalized": "OverlapTexture-\u003eUSTF a-\u003ea-\u003eIO()",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eUSTF st-\u003est-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eoverlapTextureS\u003c/a\u003e\u003c/code\u003e with post-processing stage.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureS_pp",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e USTF st -\u003e st -\u003e Int -\u003e PPF -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureS_pp",
          "type": "function"
        },
        "index": {
          "description": "Variant of overlapTextureS with post-processing stage",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureS_pp",
          "normalized": "OverlapTexture-\u003eUSTF a-\u003ea-\u003eInt-\u003ePPF-\u003eIO()",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eUSTF st-\u003est-\u003eInt-\u003ePPF-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureS_pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudition pattern given by \u003ccode\u003e\u003ca\u003eoverlapTextureP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e import Sound.SC3.ID\n import Sound.SC3.Lang.Control.OverlapTexture\n\n let {o = sinOsc AR (rand '&#945;' 440 880) 0\n     ;u = pan2 o (rand '&#946;' (-1) 1) (rand '&#947;' 0.1 0.2)}\n in overlapTextureU (3,1,6,9) u\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureU",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e UGen -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureU",
          "type": "function"
        },
        "index": {
          "description": "Audition pattern given by overlapTextureP import Sound.SC3.ID import Sound.SC3.Lang.Control.OverlapTexture let sinOsc AR rand pan2 rand rand in overlapTextureU",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureU",
          "normalized": "OverlapTexture-\u003eUGen-\u003eIO()",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eUGen-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eoverlapTextureU\u003c/a\u003e\u003c/code\u003e with post-processing stage.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureU_pp",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e UGen -\u003e Int -\u003e PPF -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTextureU_pp",
          "type": "function"
        },
        "index": {
          "description": "Variant of overlapTextureU with post-processing stage",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTextureU_pp",
          "normalized": "OverlapTexture-\u003eUGen-\u003eInt-\u003ePPF-\u003eIO()",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eUGen-\u003eInt-\u003ePPF-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTextureU_pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003cem\u003elegato\u003c/em\u003e (duration of sound proportional to inter-offset\n time) and \u003cem\u003eduration\u003c/em\u003e (inter-offset time) parameters from\n \u003ccode\u003e\u003ca\u003eOverlapTexture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e overlapTexture_dt (3,1,5,maxBound) == (5,1)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTexture_dt",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e Texture_DT",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTexture_dt",
          "type": "function"
        },
        "index": {
          "description": "Extract legato duration of sound proportional to inter-offset time and duration inter-offset time parameters from OverlapTexture overlapTexture dt maxBound",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTexture_dt",
          "normalized": "OverlapTexture-\u003eTexture_DT",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003eTexture_DT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTexture_dt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract envelope parameters (sustain and transition times) for\n \u003ccode\u003e\u003ca\u003ewith_env\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eOverlapTexture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTexture_env",
          "package": "hsc3-lang",
          "signature": "OverlapTexture -\u003e (Double, Double)",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#overlapTexture_env",
          "type": "function"
        },
        "index": {
          "description": "Extract envelope parameters sustain and transition times for with env from OverlapTexture",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlapTexture_env",
          "normalized": "OverlapTexture-\u003e(Double,Double)",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "OverlapTexture-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlapTexture_env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlaps",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#OverlapTexture_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "overlaps",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudition \u003cem\u003eevent\u003c/em\u003e pattern with specified post-processing function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "post_process_a",
          "package": "hsc3-lang",
          "signature": "P Event -\u003e Int -\u003e (UGen -\u003e UGen) -\u003e m ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#post_process_a",
          "type": "function"
        },
        "index": {
          "description": "Audition event pattern with specified post-processing function",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "post_process_a",
          "normalized": "P Event-\u003eInt-\u003e(UGen-\u003eUGen)-\u003ea()",
          "package": "hsc3-lang",
          "signature": "P Event-\u003eInt-\u003e(UGen-\u003eUGen)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:post_process_a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e from a signal processing function over the\n indicated number of channels.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "post_process_s",
          "package": "hsc3-lang",
          "signature": "Int -\u003e (UGen -\u003e UGen) -\u003e Synthdef",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#post_process_s",
          "type": "function"
        },
        "index": {
          "description": "Generate Synthdef from signal processing function over the indicated number of channels",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "post_process_s",
          "normalized": "Int-\u003e(UGen-\u003eUGen)-\u003eSynthdef",
          "package": "hsc3-lang",
          "signature": "Int-\u003e(UGen-\u003eUGen)-\u003eSynthdef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:post_process_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "sustain_time",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#OverlapTexture_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "sustain_time",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:sustain_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "transition_time",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#OverlapTexture_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "transition_time",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:transition_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ewith_env_u\u003c/a\u003e\u003c/code\u003e where envelope parameters are lifted from\n \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eUGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "with_env",
          "package": "hsc3-lang",
          "signature": "(Double, Double) -\u003e UGen -\u003e UGen",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#with_env",
          "type": "function"
        },
        "index": {
          "description": "Variant of with env where envelope parameters are lifted from Double to UGen",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "with_env",
          "normalized": "(Double,Double)-\u003eUGen-\u003eUGen",
          "package": "hsc3-lang",
          "signature": "(Double,Double)-\u003eUGen-\u003eUGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:with_env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003ccode\u003e\u003ca\u003emk_env\u003c/a\u003e\u003c/code\u003e envelope to input signal and write to output bus \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "with_env_u",
          "package": "hsc3-lang",
          "signature": "UGen -\u003e UGen -\u003e UGen -\u003e UGen",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#with_env_u",
          "type": "function"
        },
        "index": {
          "description": "Apply mk env envelope to input signal and write to output bus",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "with_env_u",
          "normalized": "UGen-\u003eUGen-\u003eUGen-\u003eUGen",
          "package": "hsc3-lang",
          "signature": "UGen-\u003eUGen-\u003eUGen-\u003eUGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:with_env_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an \u003cem\u003eevent\u003c/em\u003e pattern from \u003ccode\u003e\u003ca\u003eXFadeTexture\u003c/a\u003e\u003c/code\u003e control\n parameters and a continuous signal.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTextureP",
          "package": "hsc3-lang",
          "signature": "XFadeTexture -\u003e UGen -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#xfadeTextureP",
          "type": "function"
        },
        "index": {
          "description": "Generate an event pattern from XFadeTexture control parameters and continuous signal",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTextureP",
          "normalized": "XFadeTexture-\u003eUGen-\u003eP Event",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "XFadeTexture-\u003eUGen-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:xfadeTextureP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudition pattern given by \u003ccode\u003e\u003ca\u003exfadeTextureP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let {o = sinOsc AR (rand '&#945;' 440 880) 0\n     ;u = pan2 o (rand '&#946;' (-1) 1) (rand '&#947;' 0.1 0.2)}\n in xfadeTextureU (1,3,6) u\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTextureU",
          "package": "hsc3-lang",
          "signature": "XFadeTexture -\u003e UGen -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#xfadeTextureU",
          "type": "function"
        },
        "index": {
          "description": "Audition pattern given by xfadeTextureP let sinOsc AR rand pan2 rand rand in xfadeTextureU",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTextureU",
          "normalized": "XFadeTexture-\u003eUGen-\u003eIO()",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "XFadeTexture-\u003eUGen-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:xfadeTextureU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003exfadeTextureU\u003c/a\u003e\u003c/code\u003e with post-processing stage.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTextureU_pp",
          "package": "hsc3-lang",
          "signature": "XFadeTexture -\u003e UGen -\u003e Int -\u003e PPF -\u003e IO ()",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#xfadeTextureU_pp",
          "type": "function"
        },
        "index": {
          "description": "Variant of xfadeTextureU with post-processing stage",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTextureU_pp",
          "normalized": "XFadeTexture-\u003eUGen-\u003eInt-\u003ePPF-\u003eIO()",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "XFadeTexture-\u003eUGen-\u003eInt-\u003ePPF-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:xfadeTextureU_pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003cem\u003elegato\u003c/em\u003e and \u003cem\u003eduration\u003c/em\u003e paramaters from \u003ccode\u003e\u003ca\u003eXFadeTexture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTexture_dt",
          "package": "hsc3-lang",
          "signature": "XFadeTexture -\u003e Texture_DT",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#xfadeTexture_dt",
          "type": "function"
        },
        "index": {
          "description": "Extract legato and duration paramaters from XFadeTexture",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTexture_dt",
          "normalized": "XFadeTexture-\u003eTexture_DT",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "XFadeTexture-\u003eTexture_DT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:xfadeTexture_dt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract envelope parameters for \u003ccode\u003e\u003ca\u003ewith_env\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eXFadeTexture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTexture_env",
          "package": "hsc3-lang",
          "signature": "XFadeTexture -\u003e (Double, Double)",
          "source": "src/Sound-SC3-Lang-Control-OverlapTexture.html#xfadeTexture_env",
          "type": "function"
        },
        "index": {
          "description": "Extract envelope parameters for with env from XFadeTexture",
          "hierarchy": "Sound SC3 Lang Control OverlapTexture",
          "module": "Sound.SC3.Lang.Control.OverlapTexture",
          "name": "xfadeTexture_env",
          "normalized": "XFadeTexture-\u003e(Double,Double)",
          "package": "hsc3-lang",
          "partial": "Texture",
          "signature": "XFadeTexture-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-OverlapTexture.html#v:xfadeTexture_env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eSC3\u003c/code\u003e pitch model implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitch",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html",
          "type": "module"
        },
        "index": {
          "description": "SC3 pitch model implementation",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitch",
          "package": "hsc3-lang",
          "partial": "Pitch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePitch\u003c/a\u003e\u003c/code\u003e represented as tuple of optional values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "OptPitch",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#OptPitch",
          "type": "type"
        },
        "index": {
          "description": "Pitch represented as tuple of optional values",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "OptPitch",
          "package": "hsc3-lang",
          "partial": "Opt Pitch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#t:OptPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe supercollider language pitch model is organised as a tree\n with three separate layers, and is designed to allow separate\n processes to manipulate aspects of the model independently.\n\u003c/p\u003e\u003cp\u003eThe haskell variant implements \u003ccode\u003e\u003ca\u003ePitch\u003c/a\u003e\u003c/code\u003e as a labeled data type, with\n a default value such that scale degree 5 is the A above middle C.\n\u003c/p\u003e\u003cpre\u003e freq (defaultPitch {degree = 5}) == 440\n\u003c/pre\u003e\u003cp\u003eThe note is given as a degree, with a modal transposition, indexing\n a scale interpreted relative to an equally tempered octave divided\n into the indicated number of steps.\n\u003c/p\u003e\u003cp\u003eThe midinote is derived from the note by adding the indicated\n root, octave and gamut transpositions.\n\u003c/p\u003e\u003cp\u003eThe frequency is derived by a chromatic transposition of the\n midinote, with a harmonic multiplier.\n\u003c/p\u003e\u003cpre\u003e let {p = defaultPitch\n     ;n = p {stepsPerOctave = 12\n            ,scale = [0,2,4,5,7,9,11]\n            ,degree = 0\n            ,mtranspose = 5}\n     ;m = n {root = 0\n            ,octave = 5\n            ,gtranspose = 0}\n     ;f = m {ctranspose = 0\n            ,harmonic = 1}}\n in (note n,midinote m,freq f) == (9,69,440)\n\u003c/pre\u003e\u003cp\u003eBy editing the values of aspects of a pitch, processes can\n cooperate.  Below one process controls the note by editing the\n modal transposition, a second edits the octave.\n\u003c/p\u003e\u003cpre\u003e let {edit_mtranspose p d = p {mtranspose = mtranspose p + d}\n     ;edit_octave p o = p {octave = octave p + o}\n     ;p' = repeat defaultPitch\n     ;q = zipWith edit_mtranspose p' [0,2,4,3,5]\n     ;r = zipWith edit_octave q [0,-1,0,1,0]\n     ;f = map midinote}\n in (f q,f r) == ([60,64,67,65,69],[60,52,67,77,69])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitch",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "data"
        },
        "index": {
          "description": "The supercollider language pitch model is organised as tree with three separate layers and is designed to allow separate processes to manipulate aspects of the model independently The haskell variant implements Pitch as labeled data type with default value such that scale degree is the above middle freq defaultPitch degree The note is given as degree with modal transposition indexing scale interpreted relative to an equally tempered octave divided into the indicated number of steps The midinote is derived from the note by adding the indicated root octave and gamut transpositions The frequency is derived by chromatic transposition of the midinote with harmonic multiplier let defaultPitch stepsPerOctave scale degree mtranspose root octave gtranspose ctranspose harmonic in note midinote freq By editing the values of aspects of pitch processes can cooperate Below one process controls the note by editing the modal transposition second edits the octave let edit mtranspose mtranspose mtranspose edit octave octave octave repeat defaultPitch zipWith edit mtranspose zipWith edit octave map midinote in",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitch",
          "package": "hsc3-lang",
          "partial": "Pitch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#t:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePitched\u003c/a\u003e\u003c/code\u003e values, minimal definition is \u003ccode\u003e\u003ca\u003emidinote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e midinote (defaultPitch {degree = 5}) == 69\n freq (defaultPitch {degree = 5,detune = 10}) == 440 + 10\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitched",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitched",
          "type": "class"
        },
        "index": {
          "description": "Pitched values minimal definition is midinote midinote defaultPitch degree freq defaultPitch degree detune",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitched",
          "package": "hsc3-lang",
          "partial": "Pitched",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#t:Pitched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple in 6-1-6 arrangement.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "T616",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#T616",
          "type": "type"
        },
        "index": {
          "description": "Tuple in arrangement",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "T616",
          "package": "hsc3-lang",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#t:T616"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitch",
          "package": "hsc3-lang",
          "signature": "Pitch",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "Pitch",
          "package": "hsc3-lang",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "ctranspose",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "ctranspose",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:ctranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default \u003ccode\u003e\u003ca\u003ePitch\u003c/a\u003e\u003c/code\u003e value of middle C given as degree \u003ccode\u003e0\u003c/code\u003e of a C\n major scale.\n\u003c/p\u003e\u003cpre\u003e let {p = defaultPitch\n     ;r = ([0,2,4,5,7,9,11],12,0,5,0)}\n in (scale p,stepsPerOctave p,root p,octave p,degree p) == r\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "defaultPitch",
          "package": "hsc3-lang",
          "signature": "Pitch",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#defaultPitch",
          "type": "function"
        },
        "index": {
          "description": "default Pitch value of middle given as degree of major scale let defaultPitch in scale stepsPerOctave root octave degree",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "defaultPitch",
          "package": "hsc3-lang",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:defaultPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "degree",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "degree",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "detune",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "detune",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:detune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "freq",
          "package": "hsc3-lang",
          "signature": "p -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#freq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "freq",
          "normalized": "a-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "p-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "freq'",
          "package": "hsc3-lang",
          "signature": "Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "freq'",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:freq-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "gtranspose",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "gtranspose",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:gtranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "harmonic",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "harmonic",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:harmonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "midinote",
          "package": "hsc3-lang",
          "signature": "p -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#midinote",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "midinote",
          "normalized": "a-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "p-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:midinote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "midinote'",
          "package": "hsc3-lang",
          "signature": "Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "midinote'",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:midinote-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "mtranspose",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "mtranspose",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:mtranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate \u003cem\u003enote\u003c/em\u003e field.\n\u003c/p\u003e\u003cpre\u003e note (defaultPitch {degree = 5}) == 9\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "note",
          "package": "hsc3-lang",
          "signature": "Pitch -\u003e Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#note",
          "type": "function"
        },
        "index": {
          "description": "Calculate note field note defaultPitch degree",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "note",
          "normalized": "Pitch-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "Pitch-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "note'",
          "package": "hsc3-lang",
          "signature": "Maybe Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "note'",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:note-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "octave",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "octave",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:octave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform \u003ccode\u003e\u003ca\u003eOptPitch\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003ePitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "optPitch",
          "package": "hsc3-lang",
          "signature": "OptPitch -\u003e Pitch",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#optPitch",
          "type": "function"
        },
        "index": {
          "description": "Transform OptPitch to Pitch",
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "optPitch",
          "normalized": "OptPitch-\u003ePitch",
          "package": "hsc3-lang",
          "partial": "Pitch",
          "signature": "OptPitch-\u003ePitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:optPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "root",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "root",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "scale",
          "package": "hsc3-lang",
          "signature": "[Double]",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "scale",
          "normalized": "[Double]",
          "package": "hsc3-lang",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "stepsPerOctave",
          "package": "hsc3-lang",
          "signature": "Double",
          "source": "src/Sound-SC3-Lang-Control-Pitch.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Control Pitch",
          "module": "Sound.SC3.Lang.Control.Pitch",
          "name": "stepsPerOctave",
          "package": "hsc3-lang",
          "partial": "Per Octave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Control-Pitch.html#v:stepsPerOctave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003ehttp://www.csounds.com/manual/html/MiscModalFreq.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Data.Modal",
          "name": "Modal",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Data-Modal.html",
          "type": "module"
        },
        "index": {
          "description": "http www.csounds.com manual html MiscModalFreq.html",
          "hierarchy": "Sound SC3 Lang Data Modal",
          "module": "Sound.SC3.Lang.Data.Modal",
          "name": "Modal",
          "package": "hsc3-lang",
          "partial": "Modal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Modal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable of modal frequencies for subset of \u003ccode\u003e\u003ca\u003emodal_frequency_ratios\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Data.Modal",
          "name": "modal_frequencies",
          "package": "hsc3-lang",
          "signature": "[(String, [n])]",
          "source": "src/Sound-SC3-Lang-Data-Modal.html#modal_frequencies",
          "type": "function"
        },
        "index": {
          "description": "Table of modal frequencies for subset of modal frequency ratios",
          "hierarchy": "Sound SC3 Lang Data Modal",
          "module": "Sound.SC3.Lang.Data.Modal",
          "name": "modal_frequencies",
          "normalized": "[(String,[a])]",
          "package": "hsc3-lang",
          "signature": "[(String,[n])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Modal.html#v:modal_frequencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable of modal frequency ratios for specified sound sources.\n\u003c/p\u003e\u003cpre\u003e import Sound.SC3\n\u003c/pre\u003e\u003cpre\u003e let {f = 221\n     ;Just r = lookup \"Tibetan bowl (180mm)\" modal_frequency_ratios\n     ;u n = replicate (length r) n\n     ;k = klankSpec (map (* f) r) (u 1) (u 16)}\n in audition (out 0 (klank (impulse AR 0.125 0 * 0.1) 1 0 1 k))\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Data.Modal",
          "name": "modal_frequency_ratios",
          "package": "hsc3-lang",
          "signature": "[(String, [n])]",
          "source": "src/Sound-SC3-Lang-Data-Modal.html#modal_frequency_ratios",
          "type": "function"
        },
        "index": {
          "description": "Table of modal frequency ratios for specified sound sources import Sound.SC3 let Just lookup Tibetan bowl mm modal frequency ratios replicate length klankSpec map in audition out klank impulse AR",
          "hierarchy": "Sound SC3 Lang Data Modal",
          "module": "Sound.SC3.Lang.Data.Modal",
          "name": "modal_frequency_ratios",
          "normalized": "[(String,[a])]",
          "package": "hsc3-lang",
          "signature": "[(String,[n])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Modal.html#v:modal_frequency_ratios"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData set giving formant locations for \u003ccode\u003e\u003ca\u003eVowel\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Vowel",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html",
          "type": "module"
        },
        "index": {
          "description": "Data set giving formant locations for Vowel",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Vowel",
          "package": "hsc3-lang",
          "partial": "Vowel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVowel tuple of form (\u003ccode\u003e\u003ca\u003eVoice\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eVowel\u003c/a\u003e\u003c/code\u003e,\u003cem\u003efreq\u003c/em\u003e,\u003cem\u003edb\u003c/em\u003e,\u003cem\u003ebw\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Fdata",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Fdata",
          "type": "type"
        },
        "index": {
          "description": "Vowel tuple of form Voice Vowel freq db bw",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Fdata",
          "package": "hsc3-lang",
          "partial": "Fdata",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#t:Fdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of formant indices.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Fn",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Fn",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of formant indices",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Fn",
          "package": "hsc3-lang",
          "partial": "Fn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#t:Fn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of voices.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Voice",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Voice",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of voices",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Voice",
          "package": "hsc3-lang",
          "partial": "Voice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#t:Voice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of vowels.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Vowel",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Vowel",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of vowels",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Vowel",
          "package": "hsc3-lang",
          "partial": "Vowel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#t:Vowel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "A",
          "package": "hsc3-lang",
          "signature": "A",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Vowel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "A",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Alto",
          "package": "hsc3-lang",
          "signature": "Alto",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Alto",
          "package": "hsc3-lang",
          "partial": "Alto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:Alto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Bass",
          "package": "hsc3-lang",
          "signature": "Bass",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Bass",
          "package": "hsc3-lang",
          "partial": "Bass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:Bass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "CounterTenor",
          "package": "hsc3-lang",
          "signature": "CounterTenor",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "CounterTenor",
          "package": "hsc3-lang",
          "partial": "Counter Tenor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:CounterTenor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "E",
          "package": "hsc3-lang",
          "signature": "E",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Vowel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "E",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F0",
          "package": "hsc3-lang",
          "signature": "F0",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Fn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F0",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:F0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F1",
          "package": "hsc3-lang",
          "signature": "F1",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Fn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F1",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:F1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F2",
          "package": "hsc3-lang",
          "signature": "F2",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Fn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F2",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:F2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F3",
          "package": "hsc3-lang",
          "signature": "F3",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Fn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F3",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:F3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F4",
          "package": "hsc3-lang",
          "signature": "F4",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Fn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "F4",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:F4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "I",
          "package": "hsc3-lang",
          "signature": "I",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Vowel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "I",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "O",
          "package": "hsc3-lang",
          "signature": "O",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Vowel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "O",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Soprano",
          "package": "hsc3-lang",
          "signature": "Soprano",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Soprano",
          "package": "hsc3-lang",
          "partial": "Soprano",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:Soprano"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Tenor",
          "package": "hsc3-lang",
          "signature": "Tenor",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "Tenor",
          "package": "hsc3-lang",
          "partial": "Tenor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:Tenor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "U",
          "package": "hsc3-lang",
          "signature": "U",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#Vowel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "U",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup formant \u003ccode\u003e\u003ca\u003eFdata\u003c/a\u003e\u003c/code\u003e given \u003ccode\u003e\u003ca\u003eVoice\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVowel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fdata Bass I == (Bass,I,[250,1750,2600,3050,3340]\n                        ,[0,-30,-16,-22,-28]\n                        ,[60,90,100,120,120])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "fdata",
          "package": "hsc3-lang",
          "signature": "Voice -\u003e Vowel -\u003e Fdata n",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#fdata",
          "type": "function"
        },
        "index": {
          "description": "Lookup formant Fdata given Voice and Vowel fdata Bass Bass",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "fdata",
          "normalized": "Voice-\u003eVowel-\u003eFdata a",
          "package": "hsc3-lang",
          "signature": "Voice-\u003eVowel-\u003eFdata n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:fdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFdata\u003c/a\u003e\u003c/code\u003e table.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "fdata_table",
          "package": "hsc3-lang",
          "signature": "[Fdata n]",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#fdata_table",
          "type": "function"
        },
        "index": {
          "description": "Fdata table",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "fdata_table",
          "normalized": "[Fdata a]",
          "package": "hsc3-lang",
          "signature": "[Fdata n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:fdata_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003ccode\u003e\u003ca\u003eFn\u003c/a\u003e\u003c/code\u003eth formant triple of an \u003ccode\u003e\u003ca\u003eFdata\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e formant F1 (fdata Bass I) == (1750,-30,90)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "formant",
          "package": "hsc3-lang",
          "signature": "Fn -\u003e Fdata n -\u003e (n, n, n)",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#formant",
          "type": "function"
        },
        "index": {
          "description": "Extract Fn th formant triple of an Fdata formant F1 fdata Bass",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "formant",
          "normalized": "Fn-\u003eFdata a-\u003e(a,a,a)",
          "package": "hsc3-lang",
          "signature": "Fn-\u003eFdata n-\u003e(n,n,n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:formant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormant triples of an \u003ccode\u003e\u003ca\u003eFdata\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e formants (fdata Bass I) == [(250,0,60)\n                            ,(1750,-30,90)\n                            ,(2600,-16,100)\n                            ,(3050,-22,120)\n                            ,(3340,-28,120)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "formants",
          "package": "hsc3-lang",
          "signature": "Fdata n -\u003e [(n, n, n)]",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#formants",
          "type": "function"
        },
        "index": {
          "description": "Formant triples of an Fdata formants fdata Bass",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "formants",
          "normalized": "Fdata a-\u003e[(a,a,a)]",
          "package": "hsc3-lang",
          "signature": "Fdata n-\u003e[(n,n,n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:formants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a triple from a three element list.\n\u003c/p\u003e\u003cpre\u003e triple [1..3] == Just (1,2,3)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "triple",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Maybe (a, a, a)",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#triple",
          "type": "function"
        },
        "index": {
          "description": "Construct triple from three element list triple Just",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "triple",
          "normalized": "[a]-\u003eMaybe(a,a,a)",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eMaybe(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial variant of \u003ccode\u003e\u003ca\u003etriple\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e triple' [1..3] == (1,2,3)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "triple'",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e (a, a, a)",
          "source": "src/Sound-SC3-Lang-Data-Vowel.html#triple%27",
          "type": "function"
        },
        "index": {
          "description": "Partial variant of triple triple",
          "hierarchy": "Sound SC3 Lang Data Vowel",
          "module": "Sound.SC3.Lang.Data.Vowel",
          "name": "triple'",
          "normalized": "[a]-\u003e(a,a,a)",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Data-Vowel.html#v:triple-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003cem\u003ewarp\u003c/em\u003e is a mapping from the space \u003ccode\u003e[0,1]\u003c/code\u003e to a user defined\n space \u003cem\u003e[l,r]\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "Warp",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Math-Warp.html",
          "type": "module"
        },
        "index": {
          "description": "warp is mapping from the space to user defined space",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "Warp",
          "package": "hsc3-lang",
          "partial": "Warp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarp direction.  \u003ccode\u003e\u003ca\u003eW_Map\u003c/a\u003e\u003c/code\u003e is forward, \u003ccode\u003e\u003ca\u003eW_Unmap\u003c/a\u003e\u003c/code\u003e is reverse.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "W_Direction",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#W_Direction",
          "type": "data"
        },
        "index": {
          "description": "Warp direction Map is forward Unmap is reverse",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "W_Direction",
          "package": "hsc3-lang",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#t:W_Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarp type\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "Warp",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#Warp",
          "type": "type"
        },
        "index": {
          "description": "Warp type",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "Warp",
          "package": "hsc3-lang",
          "partial": "Warp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#t:Warp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "W_Map",
          "package": "hsc3-lang",
          "signature": "W_Map",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#W_Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "W_Map",
          "package": "hsc3-lang",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:W_Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "W_Unmap",
          "package": "hsc3-lang",
          "signature": "W_Unmap",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#W_Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "W_Unmap",
          "package": "hsc3-lang",
          "partial": "Unmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:W_Unmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward warp.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "w_map",
          "package": "hsc3-lang",
          "signature": "Warp t -\u003e t -\u003e t",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#w_map",
          "type": "function"
        },
        "index": {
          "description": "Forward warp",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "w_map",
          "normalized": "Warp a-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "Warp t-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:w_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse warp.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "w_unmap",
          "package": "hsc3-lang",
          "signature": "Warp t -\u003e t -\u003e t",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#w_unmap",
          "type": "function"
        },
        "index": {
          "description": "Reverse warp",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "w_unmap",
          "normalized": "Warp a-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "Warp t-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:w_unmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCosine warp\n\u003c/p\u003e\u003cpre\u003e \u003e w = CosineWarp(ControlSpec(1,2))\n \u003e [0,0.25,0.5,0.75,1].collect{|n| w.map(n)}\n\u003c/pre\u003e\u003cpre\u003e map (warpCosine 1 2 W_Map) [0,0.25,0.5,0.75,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpCosine",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Warp a",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#warpCosine",
          "type": "function"
        },
        "index": {
          "description": "Cosine warp CosineWarp ControlSpec collect w.map map warpCosine Map",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpCosine",
          "normalized": "a-\u003ea-\u003eWarp a",
          "package": "hsc3-lang",
          "partial": "Cosine",
          "signature": "a-\u003ea-\u003eWarp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:warpCosine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA curve warp given by a real \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e w_map (warpCurve (-3) 1 2) 0.25 == 1.5552791692202022\n w_map (warpCurve (-3) 1 2) 0.50 == 1.8175744761936437\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpCurve",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e a -\u003e Warp a",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#warpCurve",
          "type": "function"
        },
        "index": {
          "description": "curve warp given by real map warpCurve map warpCurve",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpCurve",
          "normalized": "a-\u003ea-\u003ea-\u003eWarp a",
          "package": "hsc3-lang",
          "partial": "Curve",
          "signature": "a-\u003ea-\u003ea-\u003eWarp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:warpCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDB fader warp. Left and right values are implicitly negative\n infinity and zero.  An input of \u003ccode\u003e0\u003c/code\u003e gives \u003ccode\u003e-180\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map (round . warpDbFader W_Map) [0,0.5,1] == [-180,-12,0]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpDbFader",
          "package": "hsc3-lang",
          "signature": "Warp a",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#warpDbFader",
          "type": "function"
        },
        "index": {
          "description": "DB fader warp Left and right values are implicitly negative infinity and zero An input of gives map round warpDbFader Map",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpDbFader",
          "package": "hsc3-lang",
          "partial": "Db Fader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:warpDbFader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe left and right must both be non zero and have the same sign.\n\u003c/p\u003e\u003cpre\u003e \u003e w = ExponentialWarp(ControlSpec(1,2))\n \u003e [0,0.5,1].collect{|n| w.map(n)} == [1,pow(2,0.5),2]\n\u003c/pre\u003e\u003cpre\u003e map (warpExponential 1 2 W_Map) [0,0.5,1] == [1,2 ** 0.5,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpExponential",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Warp a",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#warpExponential",
          "type": "function"
        },
        "index": {
          "description": "The left and right must both be non zero and have the same sign ExponentialWarp ControlSpec collect w.map pow map warpExponential Map",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpExponential",
          "normalized": "a-\u003ea-\u003eWarp a",
          "package": "hsc3-lang",
          "partial": "Exponential",
          "signature": "a-\u003ea-\u003eWarp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:warpExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFader warp.  Left and right values are implicitly zero and one.\n\u003c/p\u003e\u003cpre\u003e map (warpFader W_Map) [0,0.5,1] == [0,0.25,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpFader",
          "package": "hsc3-lang",
          "signature": "Warp a",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#warpFader",
          "type": "function"
        },
        "index": {
          "description": "Fader warp Left and right values are implicitly zero and one map warpFader Map",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpFader",
          "package": "hsc3-lang",
          "partial": "Fader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:warpFader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA linear real value map.\n\u003c/p\u003e\u003cpre\u003e \u003e w = LinearWarp(ControlSpec(1,2))\n \u003e [0,0.5,1].collect{|n| w.map(n)} == [1,1.5,2]\n\u003c/pre\u003e\u003cpre\u003e map (w_map (warpLinear 1 2)) [0,1/2,1] == [1,3/2,2]\n map (warpLinear (-1) 1 W_Map) [0,1/2,1] == [-1,0,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpLinear",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Warp a",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#warpLinear",
          "type": "function"
        },
        "index": {
          "description": "linear real value map LinearWarp ControlSpec collect w.map map map warpLinear map warpLinear Map",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpLinear",
          "normalized": "a-\u003ea-\u003eWarp a",
          "package": "hsc3-lang",
          "partial": "Linear",
          "signature": "a-\u003ea-\u003eWarp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:warpLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSine warp\n\u003c/p\u003e\u003cpre\u003e map (warpSine 1 2 W_Map) [0,0.25,0.5,0.75,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpSine",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Warp a",
          "source": "src/Sound-SC3-Lang-Math-Warp.html#warpSine",
          "type": "function"
        },
        "index": {
          "description": "Sine warp map warpSine Map",
          "hierarchy": "Sound SC3 Lang Math Warp",
          "module": "Sound.SC3.Lang.Math.Warp",
          "name": "warpSine",
          "normalized": "a-\u003ea-\u003eWarp a",
          "package": "hsc3-lang",
          "partial": "Sine",
          "signature": "a-\u003ea-\u003eWarp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Warp.html#v:warpSine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWindowing functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "Window",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Math-Window.html",
          "type": "module"
        },
        "index": {
          "description": "Windowing functions",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "Window",
          "package": "hsc3-lang",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA discrete \u003cem\u003en\u003c/em\u003e element rendering of a \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "Table",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Math-Window.html#Table",
          "type": "type"
        },
        "index": {
          "description": "discrete element rendering of Window",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "Table",
          "package": "hsc3-lang",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function from a (0,1) normalised input to an output.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "Window",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Math-Window.html#Window",
          "type": "type"
        },
        "index": {
          "description": "function from normalised input to an output",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "Window",
          "package": "hsc3-lang",
          "partial": "Window",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular modified Bessel function of fractional order zero.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "bessel0",
          "package": "hsc3-lang",
          "signature": "Double -\u003e Double",
          "source": "src/Sound-SC3-Lang-Math-Window.html#bessel0",
          "type": "function"
        },
        "index": {
          "description": "Regular modified Bessel function of fractional order zero",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "bessel0",
          "normalized": "Double-\u003eDouble",
          "package": "hsc3-lang",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:bessel0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGaussian window, &#952; \u003c= 0.5.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "gaussian",
          "package": "hsc3-lang",
          "signature": "a -\u003e Window a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#gaussian",
          "type": "function"
        },
        "index": {
          "description": "Gaussian window",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "gaussian",
          "normalized": "a-\u003eWindow a",
          "package": "hsc3-lang",
          "signature": "a-\u003eWindow a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:gaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewindow_table\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003egaussian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e import Sound.SC3.Plot\n plotTable [gaussian_table 1024 0.25,gaussian_table 1024 0.5]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "gaussian_table",
          "package": "hsc3-lang",
          "signature": "n -\u003e b -\u003e [b]",
          "source": "src/Sound-SC3-Lang-Math-Window.html#gaussian_table",
          "type": "function"
        },
        "index": {
          "description": "window table gaussian import Sound.SC3.Plot plotTable gaussian table gaussian table",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "gaussian_table",
          "normalized": "a-\u003eb-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "n-\u003eb-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:gaussian_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHamming raised cosine window.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hamming",
          "package": "hsc3-lang",
          "signature": "Window a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#hamming",
          "type": "function"
        },
        "index": {
          "description": "Hamming raised cosine window",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hamming",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:hamming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewindow_table\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ehamming\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eplotTable [hann_table 128,hamming_table 128]\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hamming_table",
          "package": "hsc3-lang",
          "signature": "Int -\u003e [Double]",
          "source": "src/Sound-SC3-Lang-Math-Window.html#hamming_table",
          "type": "function"
        },
        "index": {
          "description": "window table hamming plotTable hann table hamming table",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hamming_table",
          "normalized": "Int-\u003e[Double]",
          "package": "hsc3-lang",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:hamming_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHann raised cosine window.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hann",
          "package": "hsc3-lang",
          "signature": "Window a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#hann",
          "type": "function"
        },
        "index": {
          "description": "Hann raised cosine window",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hann",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:hann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewindow_table\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ehann\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eplotTable [hann_table 128]\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hann_table",
          "package": "hsc3-lang",
          "signature": "Int -\u003e [Double]",
          "source": "src/Sound-SC3-Lang-Math-Window.html#hann_table",
          "type": "function"
        },
        "index": {
          "description": "window table hann plotTable hann table",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "hann_table",
          "normalized": "Int-\u003e[Double]",
          "package": "hsc3-lang",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:hann_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKaiser windowing function, &#946; is shape (1,2,8).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "kaiser",
          "package": "hsc3-lang",
          "signature": "Double -\u003e Window Double",
          "source": "src/Sound-SC3-Lang-Math-Window.html#kaiser",
          "type": "function"
        },
        "index": {
          "description": "Kaiser windowing function is shape",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "kaiser",
          "normalized": "Double-\u003eWindow Double",
          "package": "hsc3-lang",
          "signature": "Double-\u003eWindow Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:kaiser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewindow_table\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ekaiser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003elet k = kaiser_table 128 in plotTable [k 1,k 2,k 8]\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "kaiser_table",
          "package": "hsc3-lang",
          "signature": "Int -\u003e Double -\u003e [Double]",
          "source": "src/Sound-SC3-Lang-Math-Window.html#kaiser_table",
          "type": "function"
        },
        "index": {
          "description": "window table kaiser let kaiser table in plotTable",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "kaiser_table",
          "normalized": "Int-\u003eDouble-\u003e[Double]",
          "package": "hsc3-lang",
          "signature": "Int-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:kaiser_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esinc\u003c/a\u003e\u003c/code\u003e window.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "lanczos",
          "package": "hsc3-lang",
          "signature": "Window Double",
          "source": "src/Sound-SC3-Lang-Math-Window.html#lanczos",
          "type": "function"
        },
        "index": {
          "description": "sinc window",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "lanczos",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:lanczos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewindow_table\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elanczos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eplotTable [lanczos_table (2^9)]\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "lanczos_table",
          "package": "hsc3-lang",
          "signature": "n -\u003e [Double]",
          "source": "src/Sound-SC3-Lang-Math-Window.html#lanczos_table",
          "type": "function"
        },
        "index": {
          "description": "window table lanczos plotTable lanczos table",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "lanczos_table",
          "normalized": "a-\u003e[Double]",
          "package": "hsc3-lang",
          "signature": "n-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:lanczos_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnit (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) window, also known as a Dirichlet window.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "rectangular",
          "package": "hsc3-lang",
          "signature": "Window a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#rectangular",
          "type": "function"
        },
        "index": {
          "description": "Unit id window also known as Dirichlet window",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "rectangular",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:rectangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e window.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "sine",
          "package": "hsc3-lang",
          "signature": "Window a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#sine",
          "type": "function"
        },
        "index": {
          "description": "sin window",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "sine",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:sine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewindow_table\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eplotTable [sine_table 128]\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "sine_table",
          "package": "hsc3-lang",
          "signature": "n -\u003e [b]",
          "source": "src/Sound-SC3-Lang-Math-Window.html#sine_table",
          "type": "function"
        },
        "index": {
          "description": "window table sine plotTable sine table",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "sine_table",
          "normalized": "a-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "n-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:sine_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003en\u003c/em\u003e ^ 2.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "square",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#square",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "square",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriangular window, ie. Bartlett window with zero end-points.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "triangular",
          "package": "hsc3-lang",
          "signature": "Window a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#triangular",
          "type": "function"
        },
        "index": {
          "description": "Triangular window ie Bartlett window with zero end-points",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "triangular",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:triangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewindow_table\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etriangular\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eplotTable [triangular_table (2^9)]\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "triangular_table",
          "package": "hsc3-lang",
          "signature": "n -\u003e [b]",
          "source": "src/Sound-SC3-Lang-Math-Window.html#triangular_table",
          "type": "function"
        },
        "index": {
          "description": "window table triangular plotTable triangular table",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "triangular_table",
          "normalized": "a-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "n-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:triangular_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an \u003cem\u003en\u003c/em\u003e element table from a (0,1) normalised window\n function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "window_table",
          "package": "hsc3-lang",
          "signature": "n -\u003e Window a -\u003e Table a",
          "source": "src/Sound-SC3-Lang-Math-Window.html#window_table",
          "type": "function"
        },
        "index": {
          "description": "Generate an element table from normalised window function",
          "hierarchy": "Sound SC3 Lang Math Window",
          "module": "Sound.SC3.Lang.Math.Window",
          "name": "window_table",
          "normalized": "a-\u003eWindow b-\u003eTable b",
          "package": "hsc3-lang",
          "signature": "n-\u003eWindow a-\u003eTable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math-Window.html#v:window_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003esclang\u003c/code\u003e math functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "Math",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Math.html",
          "type": "module"
        },
        "index": {
          "description": "sclang math functions",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "Math",
          "package": "hsc3-lang",
          "partial": "Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.ampdb\u003c/code\u003e converts linear amplitude to decibels.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,0.5,0.25,0.13,6e-2].collect({|i| i.ampdb.round}) == [0,-6,-12,-18,-24]\n map (round . ampdb) [1,0.5,0.25,0.13,6e-2] == [0,-6,-12,-18,-24]\n\u003c/pre\u003e\u003cpre\u003e \u003e [1,0.7,0.5,0.35,0.25].collect({|i| i.ampdb.round}) == [0,-3,-6,-9,-12]\n map (round . ampdb) [1,0.7,0.5,0.35,0.25] == [0,-3,-6,-9,-12]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "ampdb",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Math.html#ampdb",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.ampdb converts linear amplitude to decibels e-2 collect i.ampdb.round map round ampdb e-2 collect i.ampdb.round map round ampdb",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "ampdb",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:ampdb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e0\u003c/code\u003e is false, \u003ccode\u003e1\u003c/code\u003e is True, else error.\n\u003c/p\u003e\u003cpre\u003e map bitChar \"01\" == [False,True]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "bitChar",
          "package": "hsc3-lang",
          "signature": "Char -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Math.html#bitChar",
          "type": "function"
        },
        "index": {
          "description": "is false is True else error map bitChar False True",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "bitChar",
          "normalized": "Char-\u003eBool",
          "package": "hsc3-lang",
          "partial": "Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:bitChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.dbamp\u003c/code\u003e converts decibels to a linear amplitude.\n\u003c/p\u003e\u003cpre\u003e \u003e [0,-3,-6,-9,-12].collect({|i| (i.dbamp * 100).floor}) == [100,70,50,35,25]\n map (floor . (* 100) . dbamp) [0,-3,-6,-9,-12] == [100,70,50,35,25]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "dbamp",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Math.html#dbamp",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.dbamp converts decibels to linear amplitude collect i.dbamp floor map floor dbamp",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "dbamp",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:dbamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.degreeToKey\u003c/code\u003e translates degree, scale and steps per\n octave to key.\n\u003c/p\u003e\u003cpre\u003e \u003e (0..5).collect({|i| i.degreeToKey([0,1,5,9,11],12)}) == [0,1,5,9,11,12]\n map (degreeToKey [0,1,5,9,11] 12) [0..5] == [0,1,5,9,11,12]\n\u003c/pre\u003e\u003cpre\u003e degreeToKey [0,2,4,5,7,9,11] 12 5 == 9\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "degreeToKey",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Math.html#degreeToKey",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.degreeToKey translates degree scale and steps per octave to key collect i.degreeToKey map degreeToKey degreeToKey",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "degreeToKey",
          "normalized": "[a]-\u003ea-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "partial": "To Key",
          "signature": "[a]-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:degreeToKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eUGen.exprand\u003c/code\u003e shifts a linear (0,1) value to an exponential\n range.\n\u003c/p\u003e\u003cpre\u003e map (floor . exprange 10 100) [0,0.5,1] == [10,31,100]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "exprange",
          "package": "hsc3-lang",
          "signature": "b -\u003e b -\u003e b -\u003e b",
          "source": "src/Sound-SC3-Lang-Math.html#exprange",
          "type": "function"
        },
        "index": {
          "description": "UGen.exprand shifts linear value to an exponential range map floor exprange",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "exprange",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "b-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:exprange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePsuedo-inifite bounded value.\n\u003c/p\u003e\u003cpre\u003e inf == maxBound\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "inf",
          "package": "hsc3-lang",
          "signature": "a",
          "source": "src/Sound-SC3-Lang-Math.html#inf",
          "type": "function"
        },
        "index": {
          "description": "Psuedo-inifite bounded value inf maxBound",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "inf",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate for \u003ccode\u003e\u003ca\u003einf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e isInf inf == True\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "isInf",
          "package": "hsc3-lang",
          "signature": "a -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Math.html#isInf",
          "type": "function"
        },
        "index": {
          "description": "Predicate for inf isInf inf True",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "isInf",
          "normalized": "a-\u003eBool",
          "package": "hsc3-lang",
          "partial": "Inf",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:isInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.linexp\u003c/code\u003e shifts from linear to exponential ranges.\n\u003c/p\u003e\u003cpre\u003e \u003e [1,1.5,2].collect({|i| i.linexp(1,2,10,100).floor}) == [10,31,100]\n map (floor . linexp 1 2 10 100) [1,1.5,2] == [10,31,100]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "linexp",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Math.html#linexp",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.linexp shifts from linear to exponential ranges collect i.linexp floor map floor linexp",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "linexp",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:linexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.log10\u003c/code\u003e is the base 10 logarithm.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "log10",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Math.html#log10",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.log10 is the base logarithm",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "log10",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:log10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.midicps\u003c/code\u003e translates from midi note number to cycles\n per second.\n\u003c/p\u003e\u003cpre\u003e \u003e [57,69].collect({|i| i.midicps}) == [220,440]\n map midicps [57,69] == [220,440]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "midicps",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Math.html#midicps",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.midicps translates from midi note number to cycles per second collect i.midicps map midicps",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "midicps",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:midicps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a sequence of 0 and 1 characters as a BE bit sequence\n\u003c/p\u003e\u003cpre\u003e parseBits \"101\" == 5\n parseBits \"00001111\" == 15\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Math",
          "name": "parseBits",
          "package": "hsc3-lang",
          "signature": "String -\u003e a",
          "source": "src/Sound-SC3-Lang-Math.html#parseBits",
          "type": "function"
        },
        "index": {
          "description": "Parse sequence of and characters as BE bit sequence parseBits parseBits",
          "hierarchy": "Sound SC3 Lang Math",
          "module": "Sound.SC3.Lang.Math",
          "name": "parseBits",
          "normalized": "String-\u003ea",
          "package": "hsc3-lang",
          "partial": "Bits",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Math.html#v:parseBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003esclang\u003c/code\u003e pattern library functions.\n See \u003ca\u003ehttp://rd.slavepianos.org/?t=hsc3-texts\u003c/a\u003e for tutorial.\n\u003c/p\u003e\u003cp\u003eSC3 \u003cem\u003evalue\u003c/em\u003e patterns: \u003ccode\u003e\u003ca\u003epbrown\u003c/a\u003e\u003c/code\u003e (Pbrown), \u003ccode\u003e\u003ca\u003epclutch\u003c/a\u003e\u003c/code\u003e (Pclutch),\n \u003ccode\u003e\u003ca\u003epcollect\u003c/a\u003e\u003c/code\u003e (Pcollect), \u003ccode\u003e\u003ca\u003epconst\u003c/a\u003e\u003c/code\u003e (Pconst), \u003ccode\u003e\u003ca\u003epdegreeToKey\u003c/a\u003e\u003c/code\u003e\n (PdegreeToKey), \u003ccode\u003e\u003ca\u003epdiff\u003c/a\u003e\u003c/code\u003e (Pdiff), \u003ccode\u003e\u003ca\u003epdrop\u003c/a\u003e\u003c/code\u003e (Pdrop), \u003ccode\u003e\u003ca\u003epdurStutter\u003c/a\u003e\u003c/code\u003e\n (PdurStutter), \u003ccode\u003e\u003ca\u003epexprand\u003c/a\u003e\u003c/code\u003e (Pexprand), \u003ccode\u003e\u003ca\u003epfinval\u003c/a\u003e\u003c/code\u003e (Pfinval), \u003ccode\u003e\u003ca\u003epfuncn\u003c/a\u003e\u003c/code\u003e\n (Pfuncn), \u003ccode\u003e\u003ca\u003epgeom\u003c/a\u003e\u003c/code\u003e (Pgeom), \u003ccode\u003e\u003ca\u003epif\u003c/a\u003e\u003c/code\u003e (Pif), \u003ccode\u003e\u003ca\u003eplace\u003c/a\u003e\u003c/code\u003e (Place), \u003ccode\u003e\u003ca\u003epn\u003c/a\u003e\u003c/code\u003e (Pn),\n \u003ccode\u003e\u003ca\u003eppatlace\u003c/a\u003e\u003c/code\u003e (Ppatlace), \u003ccode\u003e\u003ca\u003eprand\u003c/a\u003e\u003c/code\u003e (Prand), \u003ccode\u003e\u003ca\u003epreject\u003c/a\u003e\u003c/code\u003e (Preject),\n \u003ccode\u003e\u003ca\u003eprorate\u003c/a\u003e\u003c/code\u003e (Prorate), \u003ccode\u003e\u003ca\u003epselect\u003c/a\u003e\u003c/code\u003e (Pselect), \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e (Pseq), \u003ccode\u003e\u003ca\u003epser\u003c/a\u003e\u003c/code\u003e\n (Pser), \u003ccode\u003e\u003ca\u003epseries\u003c/a\u003e\u003c/code\u003e (Pseries), \u003ccode\u003e\u003ca\u003epshuf\u003c/a\u003e\u003c/code\u003e (Pshuf), \u003ccode\u003e\u003ca\u003epslide\u003c/a\u003e\u003c/code\u003e (Pslide),\n \u003ccode\u003e\u003ca\u003epstutter\u003c/a\u003e\u003c/code\u003e (Pstutter), \u003ccode\u003e\u003ca\u003epswitch1\u003c/a\u003e\u003c/code\u003e (Pswitch1), \u003ccode\u003e\u003ca\u003epswitch\u003c/a\u003e\u003c/code\u003e (Pswitch),\n \u003ccode\u003e\u003ca\u003eptuple\u003c/a\u003e\u003c/code\u003e (Ptuple), \u003ccode\u003e\u003ca\u003epwhite\u003c/a\u003e\u003c/code\u003e (Pwhite), \u003ccode\u003e\u003ca\u003epwrand\u003c/a\u003e\u003c/code\u003e (Pwrand), \u003ccode\u003e\u003ca\u003epwrap\u003c/a\u003e\u003c/code\u003e\n (Pwrap), \u003ccode\u003e\u003ca\u003epxrand\u003c/a\u003e\u003c/code\u003e (Pxrand).\n\u003c/p\u003e\u003cp\u003eSC3 \u003cem\u003eevent\u003c/em\u003e patterns: \u003ccode\u003e\u003ca\u003epadd\u003c/a\u003e\u003c/code\u003e (Padd), \u003ccode\u003e\u003ca\u003epbind\u003c/a\u003e\u003c/code\u003e (Pbind), \u003ccode\u003e\u003ca\u003epkey\u003c/a\u003e\u003c/code\u003e\n (PKey), \u003ccode\u003e\u003ca\u003epmono\u003c/a\u003e\u003c/code\u003e (Pmono), \u003ccode\u003e\u003ca\u003epmul\u003c/a\u003e\u003c/code\u003e (Pmul), \u003ccode\u003e\u003ca\u003eppar\u003c/a\u003e\u003c/code\u003e (Ppar), \u003ccode\u003e\u003ca\u003epstretch\u003c/a\u003e\u003c/code\u003e\n (Pstretch), \u003ccode\u003e\u003ca\u003eptpar\u003c/a\u003e\u003c/code\u003e (Ptpar).  \u003ccode\u003e\u003ca\u003epedit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epinstr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epmce2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epsynth\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSC3 variant patterns: \u003ccode\u003e\u003ca\u003epbrown\u003c/a\u003e\u003c/code\u003e', \u003ccode\u003e\u003ca\u003eprand'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprorate'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epseq1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epseqn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epser1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epseqr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epwhite'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epwhitei\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSC3 collection patterns: \u003ccode\u003e\u003ca\u003epfold\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eHaskell patterns: \u003ccode\u003e\u003ca\u003epappend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epbool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epconcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epcons\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epcountpost\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epcountpre\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epcycle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epempty\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003epfilter\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ephold\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epinterleave\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003epjoin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprepeat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epreplicate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprsd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epscanl\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epsplitPlaces\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epsplitPlaces'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eptail\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eptake\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eptrigger\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epzip\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epzipWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ID",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html",
          "type": "module"
        },
        "index": {
          "description": "sclang pattern library functions See http rd.slavepianos.org hsc3-texts for tutorial SC3 value patterns pbrown Pbrown pclutch Pclutch pcollect Pcollect pconst Pconst pdegreeToKey PdegreeToKey pdiff Pdiff pdrop Pdrop pdurStutter PdurStutter pexprand Pexprand pfinval Pfinval pfuncn Pfuncn pgeom Pgeom pif Pif place Place pn Pn ppatlace Ppatlace prand Prand preject Preject prorate Prorate pselect Pselect pseq Pseq pser Pser pseries Pseries pshuf Pshuf pslide Pslide pstutter Pstutter pswitch1 Pswitch1 pswitch Pswitch ptuple Ptuple pwhite Pwhite pwrand Pwrand pwrap Pwrap pxrand Pxrand SC3 event patterns padd Padd pbind Pbind pkey PKey pmono Pmono pmul Pmul ppar Ppar pstretch Pstretch ptpar Ptpar pedit pinstr pmce2 psynth punion SC3 variant patterns pbrown prand prorate pseq1 pseqn pser1 pseqr pwhite pwhitei SC3 collection patterns pfold Haskell patterns pappend pbool pconcat pcons pcountpost pcountpre pcycle pempty pfilter phold pinterleave pjoin prepeat preplicate prsd pscanl psplitPlaces psplitPlaces ptail ptake ptrigger pzip pzipWith",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ID",
          "package": "hsc3-lang",
          "partial": "ID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePatterns are opaque.  \u003ccode\u003eP a\u003c/code\u003e is a pattern with elements of type\n \u003ccode\u003ea\u003c/code\u003e.  Patterns are constructed, manipulated and destructured using\n the functions provided, ie. the pattern instances for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e, and the pattern specific functions\n \u003ccode\u003e\u003ca\u003eundecided\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e F.toList (toP [1,2,3] * 2) == [2,4,6]\n\u003c/pre\u003e\u003cp\u003ePatterns are \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es.  \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e applies a function to each element\n of a pattern.\n\u003c/p\u003e\u003cpre\u003e fmap (* 2) (toP [1,2,3,4,5]) == toP [2,4,6,8,10]\n\u003c/pre\u003e\u003cp\u003ePatterns are \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003es.  \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is the empty pattern, and\n \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e) makes a sequence of two patterns.\n\u003c/p\u003e\u003cpre\u003e 1 \u003c\u003e mempty \u003c\u003e 2 == toP [1,2]\n\u003c/pre\u003e\u003cp\u003ePatterns are \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.  The pattern instance is pointwise &\n truncating, unlike the combinatorial instance for ordinary lists.\n \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e lifts a value into an infinite pattern of itself, \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n applies a pattern of functions to a pattern of values.  This is\n distinct from the list instance which is monadic, ie. \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e liftA2 (+) (toP [1,2]) (toP [3,4,5]) == toP [4,6]\n liftA2 (+) [1,2] [3,4,5] == [4,5,6,5,6,7]\n\u003c/pre\u003e\u003cp\u003ePatterns are \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es, and therefore allow \u003cem\u003edo\u003c/em\u003e notation.\n\u003c/p\u003e\u003cpre\u003e let p = do {x \u003c- toP [1,2]; y \u003c- toP [3,4,5]; return (x,y)}\n in p == toP [(1,3),(1,4),(1,5),(2,3),(2,4),(2,5)]\n\u003c/pre\u003e\u003cp\u003ePatterns are \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003eerical.  The instances can be derived from the\n \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cpre\u003e 1 + toP [2,3,4] == liftA2 (+) 1 (toP [2,3,4])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "P",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#P",
          "type": "data"
        },
        "index": {
          "description": "Patterns are opaque is pattern with elements of type Patterns are constructed manipulated and destructured using the functions provided ie the pattern instances for return pure and toList and the pattern specific functions undecided and toP F.toList toP Patterns are Functor fmap applies function to each element of pattern fmap toP toP Patterns are Monoid mempty is the empty pattern and mappend makes sequence of two patterns mempty toP Patterns are Applicative The pattern instance is pointwise truncating unlike the combinatorial instance for ordinary lists pure lifts value into an infinite pattern of itself applies pattern of functions to pattern of values This is distinct from the list instance which is monadic ie pure is return and is ap liftA2 toP toP toP liftA2 Patterns are Monad and therefore allow do notation let do toP toP return in toP Patterns are Num erical The instances can be derived from the Applicative instance toP liftA2 toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "P",
          "package": "hsc3-lang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for (\u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e,'P Field').\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "P_Bind",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#P_Bind",
          "type": "type"
        },
        "index": {
          "description": "Synonym for Key Field",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "P_Bind",
          "package": "hsc3-lang",
          "partial": "Bind",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#t:P_Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator to lift \u003ccode\u003e\u003ca\u003eF_Value\u003c/a\u003e\u003c/code\u003e pattern to \u003ccode\u003e\u003ca\u003eP_Bind\u003c/a\u003e\u003c/code\u003e tuple.\n\u003c/p\u003e\u003cpre\u003e let {r = True `pcons` preplicate 3 False :: P Bool}\n in pbind [K_rest \u003c| r] == pbind [(K_rest,pseq [1,0,0,0] 1)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "(\u003c|)",
          "package": "hsc3-lang",
          "signature": "Key -\u003e P v -\u003e P_Bind",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Operator to lift Value pattern to Bind tuple let True pcons preplicate False Bool in pbind rest pbind rest pseq",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "(\u003c|) \u003c|",
          "normalized": "Key-\u003eP a-\u003eP_Bind",
          "package": "hsc3-lang",
          "signature": "Key-\u003eP v-\u003eP_Bind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "P",
          "package": "hsc3-lang",
          "signature": "P",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "P",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e, a pseudo-\u003cem\u003einfinite\u003c/em\u003e value for use at\n pattern repeat counts.\n\u003c/p\u003e\u003cpre\u003e inf == maxBound\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "inf",
          "package": "hsc3-lang",
          "signature": "Int",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#inf",
          "type": "function"
        },
        "index": {
          "description": "Type specialised maxBound pseudo infinite value for use at pattern repeat counts inf maxBound",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "inf",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift unary list function to pattern function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP",
          "package": "hsc3-lang",
          "signature": "([a] -\u003e [b]) -\u003e P a -\u003e P b",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#liftP",
          "type": "function"
        },
        "index": {
          "description": "Lift unary list function to pattern function",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP",
          "normalized": "([a]-\u003e[b])-\u003eP a-\u003eP b",
          "package": "hsc3-lang",
          "signature": "([a]-\u003e[b])-\u003eP a-\u003eP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:liftP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift binary list function to pattern function.\n\u003c/p\u003e\u003cpre\u003e liftP2 (zipWith (+)) (toP [1,2]) (toP [3,4,5]) == toP [4,6]\n liftA2 (+) (toP [1,2]) (toP [3,4,5]) == toP [4,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP2",
          "package": "hsc3-lang",
          "signature": "([a] -\u003e [b] -\u003e [c]) -\u003e P a -\u003e P b -\u003e P c",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#liftP2",
          "type": "function"
        },
        "index": {
          "description": "Lift binary list function to pattern function liftP2 zipWith toP toP toP liftA2 toP toP toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP2",
          "normalized": "([a]-\u003e[b]-\u003e[c])-\u003eP a-\u003eP b-\u003eP c",
          "package": "hsc3-lang",
          "signature": "([a]-\u003e[b]-\u003e[c])-\u003eP a-\u003eP b-\u003eP c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:liftP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift binary list function to \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP2_repeat",
          "package": "hsc3-lang",
          "signature": "([a] -\u003e [b] -\u003e [c]) -\u003e P a -\u003e P b -\u003e P c",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#liftP2_repeat",
          "type": "function"
        },
        "index": {
          "description": "Lift binary list function to implicitly repeating pattern function",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP2_repeat",
          "normalized": "([a]-\u003e[b]-\u003e[c])-\u003eP a-\u003eP b-\u003eP c",
          "package": "hsc3-lang",
          "signature": "([a]-\u003e[b]-\u003e[c])-\u003eP a-\u003eP b-\u003eP c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:liftP2_repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift ternary list function to pattern function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP3",
          "package": "hsc3-lang",
          "signature": "([a] -\u003e [b] -\u003e [c] -\u003e [d]) -\u003e P a -\u003e P b -\u003e P c -\u003e P d",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#liftP3",
          "type": "function"
        },
        "index": {
          "description": "Lift ternary list function to pattern function",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP3",
          "normalized": "([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eP a-\u003eP b-\u003eP c-\u003eP d",
          "package": "hsc3-lang",
          "signature": "([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eP a-\u003eP b-\u003eP c-\u003eP d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:liftP3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift ternary list function to \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP3_repeat",
          "package": "hsc3-lang",
          "signature": "([a] -\u003e [b] -\u003e [c] -\u003e [d]) -\u003e P a -\u003e P b -\u003e P c -\u003e P d",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#liftP3_repeat",
          "type": "function"
        },
        "index": {
          "description": "Lift ternary list function to implicitly repeating pattern function",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "liftP3_repeat",
          "normalized": "([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eP a-\u003eP b-\u003eP c-\u003eP d",
          "package": "hsc3-lang",
          "signature": "([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eP a-\u003eP b-\u003eP c-\u003eP d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:liftP3_repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant \u003cem\u003eNaN\u003c/em\u003e (not a number) value.\n\u003c/p\u003e\u003cpre\u003e isNaN nan == True\n\u003c/pre\u003e\u003cp\u003eA frequency value of NaN indicates a rest. This constant value can be\nused as a rest indicator at a frequency model input (not at a \u003ccode\u003erest\u003c/code\u003e\nkey).\n\u003c/p\u003e\u003cpre\u003e audition (pbind [(K_dur,pseq [0.1,0.7] inf)\n                 ,(K_legato,0.2)\n                 ,(K_degree,pseq [0,2,return nan] inf)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "nan",
          "package": "hsc3-lang",
          "signature": "a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#nan",
          "type": "function"
        },
        "index": {
          "description": "Constant NaN not number value isNaN nan True frequency value of NaN indicates rest This constant value can be used as rest indicator at frequency model input not at rest key audition pbind dur pseq inf legato degree pseq return nan inf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "nan",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:nan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an \u003cem\u003eevent\u003c/em\u003e pattern into a \u003cem\u003enon-real time\u003c/em\u003e SC3 score.\n\u003c/p\u003e\u003cpre\u003e let n = pNRT (pbind [(K_freq,prand '&#945;' [300,500,231.2,399.2] inf)\n                     ,(K_dur,pseq [0.1,0.2] 3)])\n audition n\n mapM_ (putStrLn . bundlePP) (nrt_bundles n)\n\u003c/pre\u003e\u003cp\u003eInfinite \u003ccode\u003e\u003ca\u003eNRT\u003c/a\u003e\u003c/code\u003e scores are productive for \u003ccode\u003e\u003ca\u003eaudition\u003c/a\u003e\u003c/code\u003eing.\n\u003c/p\u003e\u003cpre\u003e let n' = pNRT (pbind [(K_dur,0.25),(K_freq,pseq [300,600,900] inf)])\n audition n'\n mapM_ (putStrLn . bundlePP) (take 9 (nrt_bundles n'))\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pNRT",
          "package": "hsc3-lang",
          "signature": "P Event -\u003e NRT",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pNRT",
          "type": "function"
        },
        "index": {
          "description": "Transform an event pattern into non-real time SC3 score let pNRT pbind freq prand inf dur pseq audition mapM putStrLn bundlePP nrt bundles Infinite NRT scores are productive for audition ing let pNRT pbind dur freq pseq inf audition mapM putStrLn bundlePP take nrt bundles",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pNRT",
          "normalized": "P Event-\u003eNRT",
          "package": "hsc3-lang",
          "partial": "NRT",
          "signature": "P Event-\u003eNRT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pNRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern of start times of events at event pattern.\n\u003c/p\u003e\u003cpre\u003e p_time (pbind [(K_dur,toP [1,2,3,2,1])]) == toP [0,1,3,6,8,9]\n p_time (pbind [(K_dur,pseries 0.5 0.5 5)]) == toP [0,0.5,1.5,3,5,7.5]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "p_time",
          "package": "hsc3-lang",
          "signature": "P Event -\u003e P Time",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#p_time",
          "type": "function"
        },
        "index": {
          "description": "Pattern of start times of events at event pattern time pbind dur toP toP time pbind dur pseries toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "p_time",
          "normalized": "P Event-\u003eP Time",
          "package": "hsc3-lang",
          "signature": "P Event-\u003eP Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:p_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove one layer of MCE expansion at an \u003cem\u003eevent\u003c/em\u003e pattern.  The\npattern will be expanded only to the width of the initial input.\nHoles are filled with rests.\n\u003c/p\u003e\u003cpre\u003e let {a = pseq [65,69,74] inf\n     ;b = pseq [60,64,67,72,76] inf\n     ;c = pseq [pmce3 72 76 79,pmce2 a b] 1}\n in audition (p_un_mce (pbind [(K_midinote,c)\n                              ,(K_param \"pan\",pmce2 (-1) 1)\n                              ,(K_dur,1 `pcons` prepeat 0.15)]))\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ep_un_mce\u003c/a\u003e\u003c/code\u003e translates via \u003ccode\u003e\u003ca\u003eppar\u003c/a\u003e\u003c/code\u003e.  This allows \u003ccode\u003e\u003ca\u003edur\u003c/a\u003e\u003c/code\u003e related fields to\nbe MCE values.  The underlying event processor also implements one\nlayer of MCE expansion.\n\u003c/p\u003e\u003cpre\u003e audition (p_un_mce\n           (pbind [(K_dur,pmce2 0.25 0.2525)\n                  ,(K_legato,pmce2 0.25 2.5)\n                  ,(K_freq,pmce2 (pseq [300,400,500] inf)\n                                 (pseq [302,402,502,202] inf))\n                  ,(K_param \"pan\",pmce2 (-0.5) 0.5)]))\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "p_un_mce",
          "package": "hsc3-lang",
          "signature": "P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#p_un_mce",
          "type": "function"
        },
        "index": {
          "description": "Remove one layer of MCE expansion at an event pattern The pattern will be expanded only to the width of the initial input Holes are filled with rests let pseq inf pseq inf pseq pmce3 pmce2 in audition un mce pbind midinote param pan pmce2 dur pcons prepeat un mce translates via ppar This allows dur related fields to be MCE values The underlying event processor also implements one layer of MCE expansion audition un mce pbind dur pmce2 legato pmce2 freq pmce2 pseq inf pseq inf param pan pmce2",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "p_un_mce",
          "normalized": "P Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:p_un_mce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epunion\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epbind\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, ie. \u003ccode\u003ep_with (K_Instr,psynth s)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "p_with",
          "package": "hsc3-lang",
          "signature": "P_Bind -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#p_with",
          "type": "function"
        },
        "index": {
          "description": "punion of pbind of return ie with Instr psynth",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "p_with",
          "normalized": "P_Bind-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P_Bind-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:p_with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePadd.  Add a value to an existing key, or set the key if it doesn't exist.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Padd(\\freq,801,Pbind(\\freq,Pseq([100],1)));\n \u003e p.asStream.all(()) == [('freq':901)]\n\u003c/pre\u003e\u003cpre\u003e let p = padd (K_freq,801) (pbind [(K_freq,return 100)])\n in p == pbind [(K_freq,return 901)]\n\u003c/pre\u003e\u003cpre\u003e \u003e Padd(\\freq,Pseq([401,801],2),Pbind(\\freq,100)).play\n\u003c/pre\u003e\u003cpre\u003e audition (padd (K_freq,pseq [401,801] 2) (pbind [(K_freq,100)]))\n\u003c/pre\u003e\u003cpre\u003e let {d = pseq [pshuf '&#945;' [-7,-3,0,2,4,7] 2\n               ,pseq [0,1,2,3,4,5,6,7] 1] 1\n     ;p = pbind [(K_dur,0.15),(K_degree,d)]\n     ;t n = padd (K_mtranspose,n) p}\n in audition (pseq [p,t 1,t 2] inf)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "padd",
          "package": "hsc3-lang",
          "signature": "P_Bind -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#padd",
          "type": "function"
        },
        "index": {
          "description": "Padd Add value to an existing key or set the key if it doesn exist Padd freq Pbind freq Pseq p.asStream.all freq let padd freq pbind freq return in pbind freq return Padd freq Pseq Pbind freq play audition padd freq pseq pbind freq let pseq pshuf pseq pbind dur degree padd mtranspose in audition pseq inf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "padd",
          "normalized": "P_Bind-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P_Bind-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:padd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e, sequences two patterns,\n ie. \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e 1 \u003c\u003e mempty \u003c\u003e 2 == toP [1,2]\n\u003c/pre\u003e\u003cpre\u003e let {p = prand '&#945;' [0,1] 3\n     ;q = prand '&#946;' [5,7] 3}\n in audition (pbind [(K_degree,pappend p q),(K_dur,0.15)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pappend",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pappend",
          "type": "function"
        },
        "index": {
          "description": "Type specialised mappend sequences two patterns ie mempty toP let prand prand in audition pbind degree pappend dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pappend",
          "normalized": "P a-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePbind.  SC3 pattern to assign keys to a set of \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e patterns\nmaking an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e pattern.\n\u003c/p\u003e\u003cp\u003eEach input pattern is assigned to key in the resulting event pattern.\n\u003c/p\u003e\u003cp\u003eThere are a set of reserved keys that have particular roles in the\npattern library.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Pbind(\\x,Pseq([1,2,3],1),\\y,Pseed(Pn(100,1),Prand([4,5,6],inf)));\n \u003e p.asStream.all(()) == [('y':4,'x':1),('y':6,'x':2),('y':4,'x':3)]\n\u003c/pre\u003e\u003cpre\u003e let p = pbind [(K_param \"x\",prand '&#945;' [100,300,200] inf)\n               ,(K_param \"y\",pseq [1,2,3] 1)]\n in pkey (K_param \"x\") p == toP [200,200,300]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eK_param\u003c/a\u003e\u003c/code\u003e can be elided if \u003cem\u003eOverloadedStrings\u003c/em\u003e are in place.\n\u003c/p\u003e\u003cpre\u003e :set -XOverloadedStrings\n\u003c/pre\u003e\u003cpre\u003e ptake 2 (pbind [(\"x\",pwhitei '&#945;' 0 9 inf)\n                ,(\"y\",pseq [1,2,3] inf)])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es implement variations on the \u003ccode\u003eSC3\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDur\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003ePitch\u003c/a\u003e\u003c/code\u003e models.\n\u003c/p\u003e\u003cpre\u003e \u003e Pbind(\\freq,Prand([300,500,231.2,399.2],inf),\n \u003e       \\dur,0.1).play;\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_freq,prand '&#945;' [300,500,231.2,399.2] inf)\n                 ,(K_dur,0.1)])\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\freq, Prand([300,500,231.2,399.2],inf),\n \u003e       \\dur,Prand([0.1,0.3],inf)).play;\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_freq,prand '&#945;' [300,500,231.2,399.2] inf)\n                 ,(K_dur,prand '&#946;' [0.1,0.3] inf)])\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\freq,Prand([1,1.2,2,2.5,3,4],inf) * 200,\n \u003e       \\dur,0.1).play;\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_freq,prand '&#945;' [1,1.2,2,2.5,3,4] inf * 200)\n                 ,(K_dur,0.1)])\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_freq,pseq [440,550,660,770] 2)\n                 ,(K_dur,pseq [0.1,0.15,0.1] inf)\n                 ,(K_amp,pseq [0.1,0.05] inf)\n                 ,(K_param \"pan\",pseq [-1,0,1] inf)])\n\u003c/pre\u003e\u003cp\u003eA finite binding stops the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e pattern.\n\u003c/p\u003e\u003cpre\u003e \u003e Pbind(\\freq,Prand([300,500,231.2,399.2],inf),\n \u003e       \\dur,Pseq([0.1,0.2],3)).play;\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_freq,prand '&#945;' [300,500,231.2,399.2] inf)\n                 ,(K_dur,pseq [0.1,0.2] 3)])\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\freq,Prand([300,500,231.2,399.2],inf),\n \u003e       \\dur,Prand([0.1,0.3],inf)).play\n\u003c/pre\u003e\u003cp\u003eAll infinite inputs:\n\u003c/p\u003e\u003cpre\u003e audition (pbind [(K_freq,prand '&#945;' [300,500,231.2,399.2] inf)\n                 ,(K_dur,prand '&#946;' [0.1,0.3] inf)])\n\u003c/pre\u003e\u003cp\u003eImplicit \u003cem\u003efield\u003c/em\u003e patterns is this context are infinite.\n\u003c/p\u003e\u003cpre\u003e audition (pbind [(K_freq,prand '&#945;' [1,1.2,2,2.5,3,4] inf * 200)\n                 ,(K_dur,0.1)])\n\u003c/pre\u003e\u003cpre\u003e let test = let {freq = control KR \"freq\" 440\n                ;amp = control KR \"amp\" 0.1\n                ;nharms = control KR \"nharms\" 10\n                ;pan = control KR \"pan\" 0\n                ;gate = control KR \"gate\" 1\n                ;s = blip AR freq nharms * amp\n                ;e = linen gate 0.01 0.6 0.4 RemoveSynth\n                ;o = offsetOut 0 (pan2 s pan e)}\n            in synthdef \"test\" o\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_instr,psynth test)\n                 ,(K_freq,prand '&#945;' [1,1.2,2,2.5,3,4] inf * 200)\n                 ,(K_dur,0.1)])\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_instr,psynth test)\n                 ,(K_param \"nharms\",pseq [4,10,40] inf)\n                 ,(K_dur,pseq [1,1,2,1] inf / 10)\n                 ,(K_freq,pn (pseries 1 1 16 * 50) 4)\n                 ,(K_sustain,pseq [1/10,0.5,1,2] inf)])\n\u003c/pre\u003e\u003cpre\u003e let acid = let {freq = control KR \"freq\" 1000\n                ;gate = control KR \"gate\" 1\n                ;pan = control KR \"pan\" 0\n                ;cut = control KR \"cut\" 4000\n                ;res = control KR \"res\" 0.8\n                ;amp = control KR \"amp\" 1\n                ;s = rlpf (pulse AR freq 0.05) cut res\n                ;d = envLinen 0.01 1 0.3 1\n                ;e = envGen KR gate amp 0 1 RemoveSynth d\n                ;o = out 0 (pan2 s pan e)}\n            in synthdef \"acid\" o\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\instrument,\\acid,\n \u003e       \\dur,Pseq([0.25,0.5,0.25],4),\n \u003e       \\root,-24,\n \u003e       \\degree,Pseq([0,3,5,7,9,11,5,1],inf),\n \u003e       \\pan,Pfunc({1.0.rand2}),\n \u003e       \\cut,Pxrand([1000,500,2000,300],inf),\n \u003e       \\rez,Pfunc({0.7.rand +0.3}),\n \u003e       \\amp,0.2).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_instr,psynth acid)\n                 ,(K_dur,pseq [0.25,0.5,0.25] 4)\n                 ,(K_root,-24)\n                 ,(K_degree,pseq [0,3,5,7,9,11,5,1] inf)\n                 ,(K_param \"pan\",pwhite '&#945;' (-1.0) 1.0 inf)\n                 ,(K_param \"cut\",pxrand '&#946;' [1000,500,2000,300] inf)\n                 ,(K_param \"res\",pwhite '&#947;' 0.3 1.0 inf)\n                 ,(K_amp,0.2)])\n\u003c/pre\u003e\u003cpre\u003e \u003e Pseq([Pbind(\\instrument,\\acid,\n \u003e             \\dur,Pseq([0.25,0.5,0.25],4),\n \u003e             \\root,-24,\n \u003e             \\degree,Pseq([0,3,5,7,9,11,5,1],inf),\n \u003e             \\pan,Pfunc({1.0.rand2}),\n \u003e             \\cut,Pxrand([1000,500,2000,300],inf),\n \u003e             \\rez,Pfunc({0.7.rand + 0.3}),\n \u003e             \\amp,0.2),\n \u003e       Pbind(\\instrument,\\acid,\n \u003e             \\dur,Pseq([0.25],6),\n \u003e             \\root,-24,\n \u003e             \\degree,Pseq([18,17,11,9],inf),\n \u003e             \\pan,Pfunc({1.0.rand2}),\n \u003e             \\cut,1500,\n \u003e             \\rez,Pfunc({0.7.rand + 0.3}),\n \u003e             \\amp,0.16)],inf).play\n\u003c/pre\u003e\u003cpre\u003e audition (pseq [pbind [(K_instr,psynth acid)\n                       ,(K_dur,pseq [0.25,0.5,0.25] 4)\n                       ,(K_root,-24)\n                       ,(K_degree,pseq [0,3,5,7,9,11,5,1] inf)\n                       ,(K_param \"pan\",pwhite '&#945;' (-1.0) 1.0 inf)\n                       ,(K_param \"cut\",pxrand '&#946;' [1000,500,2000,300] inf)\n                       ,(K_param \"res\",pwhite '&#947;' 0.3 1.0 inf)\n                       ,(K_amp,0.2)]\n                ,pbind [(K_instr,psynth acid)\n                       ,(K_dur,pn 0.25 6)\n                       ,(K_root,-24)\n                       ,(K_degree,pser [18,17,11,9] inf)\n                       ,(K_param \"pan\",pwhite '&#948;' (-1.0) 1.0 inf)\n                       ,(K_param \"cut\",1500)\n                       ,(K_param \"res\",pwhite '&#949;' 0.3 1.0 inf)\n                       ,(K_amp,0.16)]] inf)\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\instrument, \\acid,\n \u003e       \\dur, Pseq([0.25,0.5,0.25], inf),\n \u003e       \\root, [-24,-17],\n \u003e       \\degree, Pseq([0,3,5,7,9,11,5,1], inf),\n \u003e       \\pan, Pfunc({1.0.rand2}),\n \u003e       \\cut, Pxrand([1000,500,2000,300], inf),\n \u003e       \\rez, Pfunc({0.7.rand +0.3}),\n \u003e       \\amp, 0.2).play;\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_instr,psynth acid)\n                 ,(K_dur,pseq [0.25,0.5,0.25] inf)\n                 ,(K_root,pmce2 (-24) (-17))\n                 ,(K_degree,pseq [0,3,5,7,9,11,5,1] inf)\n                 ,(K_param \"pan\",pwhite '&#945;' (-1.0) 1.0 inf)\n                 ,(K_param \"cut\",pxrand '&#946;' [1000,500,2000,300] inf)\n                 ,(K_param \"res\",pwhite '&#947;' 0.3 1.0 inf)\n                 ,(K_amp,0.2)])\n\u003c/pre\u003e\u003cp\u003eA persistent synthesis node with \u003cem\u003efreq\u003c/em\u003e and \u003cem\u003eamp\u003c/em\u003e controls.\n\u003c/p\u003e\u003cpre\u003e import Sound.SC3.ID\n\u003c/pre\u003e\u003cpre\u003e let {freq = control KR \"freq\" 440\n     ;amp = control KR \"amp\" 0.6\n     ;n = pinkNoise '&#945;' AR * amp}\n in audition (out 0 (pan2 (moogFF n freq 2 0) 0 1))\n\u003c/pre\u003e\u003cp\u003eA pattern to set \u003cem\u003efreq\u003c/em\u003e and \u003cem\u003eamp\u003c/em\u003e controls at the most recently\ninstantiated synthesis node.\n\u003c/p\u003e\u003cpre\u003e :set -XOverloadedStrings\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_type,prepeat \"n_set\")\n                 ,(K_id,(-1))\n                 ,(K_freq,pwhite '&#945;' 100 1000 inf)\n                 ,(K_dur,0.2)\n                 ,(K_amp,toP [1,0.99 .. 0.1])])\n\u003c/pre\u003e\u003cpre\u003e let berlinb =\n   let {k = control KR\n       ;o = k \"out\" 0\n       ;f = k \"freq\" 80\n       ;a = k \"amp\" 0.01\n       ;p = k \"pan\" 0\n       ;g = k \"gate\" 1\n       ;env = decay2 g 0.05 8 * 0.0003\n       ;syn = rlpf (lfPulse AR f 0 (sinOsc KR 0.12 (mce2 0 (pi/2)) * 0.48 + 0.5))\n                   (f * (sinOsc KR 0.21 0 * 18 + 20))\n                   0.07\n       ;syn_env = syn * env\n       ;kil = detectSilence (mceChannel 0 syn_env) 0.1 0.2 RemoveSynth}\n   in mrg2 (out o (a * mix (panAz 4 syn_env (mce2 p (p + 1)) 1 2 0.5))) kil\n\u003c/pre\u003e\u003cpre\u003e audition (ppar [pbind [(K_degree,pseq [0,1,2,4,6,3,4,8] inf)\n                       ,(K_dur,0.5)\n                       ,(K_octave,3)\n                       ,(K_instr,psynth (synthdef \"berlinb\" berlinb))]\n                ,pbind [(K_degree,pseq [0,1,2,4,6,3,4,8] inf)\n                       ,(K_dur,0.5)\n                       ,(K_octave,pmce2 2 1)\n                       ,(K_param \"pan\",pwhite 'a' (-1) 1 inf)\n                       ,(K_instr,psynth (synthdef \"berlinb\" berlinb))]])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbind",
          "package": "hsc3-lang",
          "signature": "[P_Bind] -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pbind",
          "type": "function"
        },
        "index": {
          "description": "Pbind SC3 pattern to assign keys to set of Field patterns making an Event pattern Each input pattern is assigned to key in the resulting event pattern There are set of reserved keys that have particular roles in the pattern library Pbind Pseq Pseed Pn Prand inf p.asStream.all let pbind param prand inf param pseq in pkey param toP param can be elided if OverloadedStrings are in place set XOverloadedStrings ptake pbind pwhitei inf pseq inf Event implement variations on the SC3 Dur and Pitch models Pbind freq Prand inf dur play audition pbind freq prand inf dur Pbind freq Prand inf dur Prand inf play audition pbind freq prand inf dur prand inf Pbind freq Prand inf dur play audition pbind freq prand inf dur audition pbind freq pseq dur pseq inf amp pseq inf param pan pseq inf finite binding stops the Event pattern Pbind freq Prand inf dur Pseq play audition pbind freq prand inf dur pseq Pbind freq Prand inf dur Prand inf play All infinite inputs audition pbind freq prand inf dur prand inf Implicit field patterns is this context are infinite audition pbind freq prand inf dur let test let freq control KR freq amp control KR amp nharms control KR nharms pan control KR pan gate control KR gate blip AR freq nharms amp linen gate RemoveSynth offsetOut pan2 pan in synthdef test audition pbind instr psynth test freq prand inf dur audition pbind instr psynth test param nharms pseq inf dur pseq inf freq pn pseries sustain pseq inf let acid let freq control KR freq gate control KR gate pan control KR pan cut control KR cut res control KR res amp control KR amp rlpf pulse AR freq cut res envLinen envGen KR gate amp RemoveSynth out pan2 pan in synthdef acid Pbind instrument acid dur Pseq root degree Pseq inf pan Pfunc rand2 cut Pxrand inf rez Pfunc rand amp play audition pbind instr psynth acid dur pseq root degree pseq inf param pan pwhite inf param cut pxrand inf param res pwhite inf amp Pseq Pbind instrument acid dur Pseq root degree Pseq inf pan Pfunc rand2 cut Pxrand inf rez Pfunc rand amp Pbind instrument acid dur Pseq root degree Pseq inf pan Pfunc rand2 cut rez Pfunc rand amp inf play audition pseq pbind instr psynth acid dur pseq root degree pseq inf param pan pwhite inf param cut pxrand inf param res pwhite inf amp pbind instr psynth acid dur pn root degree pser inf param pan pwhite inf param cut param res pwhite inf amp inf Pbind instrument acid dur Pseq inf root degree Pseq inf pan Pfunc rand2 cut Pxrand inf rez Pfunc rand amp play audition pbind instr psynth acid dur pseq inf root pmce2 degree pseq inf param pan pwhite inf param cut pxrand inf param res pwhite inf amp persistent synthesis node with freq and amp controls import Sound.SC3.ID let freq control KR freq amp control KR amp pinkNoise AR amp in audition out pan2 moogFF freq pattern to set freq and amp controls at the most recently instantiated synthesis node set XOverloadedStrings audition pbind type prepeat set id freq pwhite inf dur amp toP let berlinb let control KR out freq amp pan gate env decay2 syn rlpf lfPulse AR sinOsc KR mce2 pi sinOsc KR syn env syn env kil detectSilence mceChannel syn env RemoveSynth in mrg2 out mix panAz syn env mce2 kil audition ppar pbind degree pseq inf dur octave instr psynth synthdef berlinb berlinb pbind degree pseq inf dur octave pmce2 param pan pwhite inf instr psynth synthdef berlinb berlinb",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbind",
          "normalized": "[P_Bind]-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "[P_Bind]-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pbind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003efbool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbool",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P Bool",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pbool",
          "type": "function"
        },
        "index": {
          "description": "Type specialised fbool",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbool",
          "normalized": "P a-\u003eP Bool",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pbool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePbrown.  Lifted \u003ccode\u003e\u003ca\u003ebrown\u003c/a\u003e\u003c/code\u003e.  SC3 pattern to generate\npsuedo-brownian motion.\n\u003c/p\u003e\u003cpre\u003e pbrown '&#945;' 0 9 1 5 == toP [4,4,5,4,3]\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_dur,0.065)\n                 ,(K_freq,pbrown '&#945;' 440 880 20 inf)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbrown",
          "package": "hsc3-lang",
          "signature": "e -\u003e n -\u003e n -\u003e n -\u003e Int -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pbrown",
          "type": "function"
        },
        "index": {
          "description": "Pbrown Lifted brown SC3 pattern to generate psuedo-brownian motion pbrown toP audition pbind dur freq pbrown inf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbrown",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003en-\u003en-\u003en-\u003eInt-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pbrown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003cem\u003eimplicitly repeating\u003c/em\u003e \u003ccode\u003e\u003ca\u003epbrown'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pbrown' '&#945;' 1 700 (pseq [1,20] inf) 4 == toP [415,419,420,428]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbrown'",
          "package": "hsc3-lang",
          "signature": "e -\u003e P n -\u003e P n -\u003e P n -\u003e Int -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pbrown%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted implicitly repeating pbrown pbrown pseq inf toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbrown'",
          "normalized": "a-\u003eP b-\u003eP b-\u003eP b-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003eP n-\u003eP n-\u003eP n-\u003eInt-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pbrown-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epbrown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbrownM",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e n -\u003e Int -\u003e m (P n)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pbrownM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of pbrown",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pbrownM",
          "normalized": "a-\u003ea-\u003ea-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003en-\u003eInt-\u003em(P n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pbrownM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePclutch.  SC3 sample and hold pattern.  For true values in the\ncontrol pattern, step the value pattern, else hold the previous value.\n\u003c/p\u003e\u003cpre\u003e \u003e c = Pseq([1,0,1,0,0,1,1],inf);\n \u003e p = Pclutch(Pser([1,2,3,4,5],8),c);\n \u003e r = [1,1,2,2,2,3,4,5,5,1,1,1,2,3];\n \u003e p.asStream.all == r\n\u003c/pre\u003e\u003cpre\u003e let {c = pbool (pseq [1,0,1,0,0,1,1] inf)\n     ;p = pclutch (pser [1,2,3,4,5] 8) c\n     ;r = toP [1,1,2,2,2,3,4,5,5,1,1,1,2,3]}\n in p == toP [1,1,2,2,2,3,4,5,5,1,1,1,2,3]\n\u003c/pre\u003e\u003cp\u003eNote the initialization behavior, nothing is generated until the\nfirst true value.\n\u003c/p\u003e\u003cpre\u003e let {p = pseq [1,2,3,4,5] 1\n     ;q = pbool (pseq [0,0,0,0,0,0,1,0,0,1,0,1] 1)}\n in pclutch p q == toP [1,1,1,2,2,3]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pstutter(Pwhite(3,10,inf),Pwhite(-4,11,inf)),\n \u003e       \\dur,Pclutch(Pwhite(0.1,0.4,inf),\n \u003e                    Pdiff(Pkey(\\degree)).abs \u003e 0),\n \u003e       \\legato,0.3).play;\n\u003c/pre\u003e\u003cpre\u003e let {d = pstutter (pwhite '&#945;' 3 10 inf) (pwhitei '&#946;' (-4) 11 inf)\n     ;p = [(K_degree,d)\n          ,(K_dur,pclutch (pwhite '&#947;' 0.1 0.4 inf)\n                          (pbool (abs (pdiff d) \u003e* 0)))\n          ,(K_legato,0.3)]}\n in audition (pbind p)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pclutch",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P Bool -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pclutch",
          "type": "function"
        },
        "index": {
          "description": "Pclutch SC3 sample and hold pattern For true values in the control pattern step the value pattern else hold the previous value Pseq inf Pclutch Pser p.asStream.all let pbool pseq inf pclutch pser toP in toP Note the initialization behavior nothing is generated until the first true value let pseq pbool pseq in pclutch toP Pbind degree Pstutter Pwhite inf Pwhite inf dur Pclutch Pwhite inf Pdiff Pkey degree abs legato play let pstutter pwhite inf pwhitei inf degree dur pclutch pwhite inf pbool abs pdiff legato in audition pbind",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pclutch",
          "normalized": "P a-\u003eP Bool-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP Bool-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pclutch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePcollect.  SC3 name for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, ie. patterns are functors.\n\u003c/p\u003e\u003cpre\u003e \u003e Pcollect({|i| i * 3},Pseq(#[1,2,3],1)).asStream.all == [3,6,9]\n pcollect (* 3) (toP [1,2,3]) == toP [3,6,9]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pseq(#[1,2,3],1).collect({|i| i * 3}).asStream.all == [3,6,9]\n fmap (* 3) (toP [1,2,3]) == toP [3,6,9]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcollect",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b) -\u003e P a -\u003e P b",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pcollect",
          "type": "function"
        },
        "index": {
          "description": "Pcollect SC3 name for fmap ie patterns are functors Pcollect Pseq asStream.all pcollect toP toP Pseq collect asStream.all fmap toP toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcollect",
          "normalized": "(a-\u003eb)-\u003eP a-\u003eP b",
          "package": "hsc3-lang",
          "signature": "(a-\u003eb)-\u003eP a-\u003eP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pcollect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e (or equivalently \u003ccode\u003e\u003ca\u003emsum\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e mconcat [pseq [1,2] 1,pseq [3,4] 2] == toP [1,2,3,4,3,4]\n msum [pseq [1,2] 1,pseq [3,4] 2] == toP [1,2,3,4,3,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pconcat",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pconcat",
          "type": "function"
        },
        "index": {
          "description": "Type specialised mconcat or equivalently msum or concat mconcat pseq pseq toP msum pseq pseq toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pconcat",
          "normalized": "[P a]-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pconcatReplicate",
          "package": "hsc3-lang",
          "signature": "Int -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pconcatReplicate",
          "type": "function"
        },
        "index": {
          "description": "mconcat of replicate",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pconcatReplicate",
          "normalized": "Int-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "partial": "Replicate",
          "signature": "Int-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pconcatReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003e:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pcons '&#945;' (pn (return '&#946;') 2) == toP \"&#945;&#946;&#946;\"\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcons",
          "package": "hsc3-lang",
          "signature": "a -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pcons",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of pcons pn return toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcons",
          "normalized": "a-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePconst.  SC3 pattern to constrain the sum of a numerical pattern.\n Is equal to \u003cem\u003ep\u003c/em\u003e until the accumulated sum is within \u003cem\u003et\u003c/em\u003e of \u003cem\u003en\u003c/em\u003e.  At\n that point, the difference between the specified sum and the\n accumulated sum concludes the pattern.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Pconst(10,Pseed(Pn(1000,1),Prand([1,2,0.5,0.1],inf),0.001));\n \u003e p.asStream.all == [0.5,0.1,0.5,1,2,2,0.5,1,0.5,1,0.9]\n\u003c/pre\u003e\u003cpre\u003e let p = pconst 10 (prand '&#945;' [1,2,0.5,0.1] inf) 0.001\n in (p,Data.Foldable.sum p)\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pseq([-7,Pwhite(0,11,inf)],1),\n \u003e       \\dur,Pconst(4,Pwhite(1,4,inf) * 0.25)).play\n\u003c/pre\u003e\u003cpre\u003e let p = [(K_degree,pcons (-7) (pwhitei '&#945;' 0 11 inf))\n         ,(K_dur,pconst 4 (pwhite '&#946;' 1 4 inf * 0.25) 0.001)]\n in audition (pbind p)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pconst",
          "package": "hsc3-lang",
          "signature": "a -\u003e P a -\u003e a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pconst",
          "type": "function"
        },
        "index": {
          "description": "Pconst SC3 pattern to constrain the sum of numerical pattern Is equal to until the accumulated sum is within of At that point the difference between the specified sum and the accumulated sum concludes the pattern Pconst Pseed Pn Prand inf p.asStream.all let pconst prand inf in Data.Foldable.sum Pbind degree Pseq Pwhite inf dur Pconst Pwhite inf play let degree pcons pwhitei inf dur pconst pwhite inf in audition pbind",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pconst",
          "normalized": "a-\u003eP a-\u003ea-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003eP a-\u003ea-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pconst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003ecountpost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcountpost",
          "package": "hsc3-lang",
          "signature": "P Bool -\u003e P Int",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pcountpost",
          "type": "function"
        },
        "index": {
          "description": "Lifted countpost",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcountpost",
          "normalized": "P Bool-\u003eP Int",
          "package": "hsc3-lang",
          "signature": "P Bool-\u003eP Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pcountpost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003ecountpre\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcountpre",
          "package": "hsc3-lang",
          "signature": "P Bool -\u003e P Int",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pcountpre",
          "type": "function"
        },
        "index": {
          "description": "Lifted countpre",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcountpre",
          "normalized": "P Bool-\u003eP Int",
          "package": "hsc3-lang",
          "signature": "P Bool-\u003eP Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pcountpre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003emcycle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ptake 5 (pcycle 1) == preplicate 5 1\n ptake 5 (pcycle (pure 1)) == preplicate 5 1\n ptake 5 (pcycle (return 1)) == preplicate 5 1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcycle",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pcycle",
          "type": "function"
        },
        "index": {
          "description": "Type specialised mcycle ptake pcycle preplicate ptake pcycle pure preplicate ptake pcycle return preplicate",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pcycle",
          "normalized": "P a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pcycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePdegreeToKey.  SC3 pattern to derive notes from an index into a\nscale.\n\u003c/p\u003e\u003cpre\u003e let {p = pseq [0,1,2,3,4,3,2,1,0,2,4,7,4,2] 2\n     ;q = pure [0,2,4,5,7,9,11]\n     ;r = [0,2,4,5,7,5,4,2,0,4,7,12,7,4,0,2,4,5,7,5,4,2,0,4,7,12,7,4]}\n in pdegreeToKey p q (pure 12) == toP r\n\u003c/pre\u003e\u003cpre\u003e let {p = pseq [0,1,2,3,4,3,2,1,0,2,4,7,4,2] 2\n     ;q = pseq (map return [[0,2,4,5,7,9,11],[0,2,3,5,7,8,11]]) 1\n     ;r = [0,2,4,5,7,5,4,2,0,4,7,12,7,4,0,2,3,5,7,5,3,2,0,3,7,12,7,3]}\n in pdegreeToKey p (pstutter 14 q) (pure 12) == toP r\n\u003c/pre\u003e\u003cp\u003eThis is the pattern variant of \u003ccode\u003e\u003ca\u003edegreeToKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let s = [0,2,4,5,7,9,11]\n in map (M.degreeToKey s 12) [0,2,4,7,4,2,0] == [0,4,7,12,7,4,0]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\note,PdegreeToKey(Pseq([1,2,3,2,5,4,3,4,2,1],2),\n \u003e                          #[0,2,3,6,7,9],\n \u003e                          12),\\dur,0.25).play\n\u003c/pre\u003e\u003cpre\u003e let {n = pdegreeToKey (pseq [1,2,3,2,5,4,3,4,2,1] 2)\n                       (pure [0,2,3,6,7,9])\n                       12}\n in audition (pbind [(K_note,n),(K_dur,0.25)])\n\u003c/pre\u003e\u003cpre\u003e \u003e s = #[[0,2,3,6,7,9],[0,1,5,6,7,9,11],[0,2,3]];\n \u003e d = [1,2,3,2,5,4,3,4,2,1];\n \u003e Pbind(\\note,PdegreeToKey(Pseq(d,4),\n \u003e                          Pstutter(3,Prand(s,inf)),\n \u003e                          12),\\dur,0.25).play;\n\u003c/pre\u003e\u003cpre\u003e let {s = map return [[0,2,3,6,7,9],[0,1,5,6,7,9,11],[0,2,3]]\n     ;d = [1,2,3,2,5,4,3,4,2,1]\n     ;k = pdegreeToKey (pseq d 4)\n                       (pstutter 3 (prand '&#945;' s 14))\n                       (pn 12 40)}\n in audition (pbind [(K_note,k),(K_dur,0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdegreeToKey",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P [a] -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pdegreeToKey",
          "type": "function"
        },
        "index": {
          "description": "PdegreeToKey SC3 pattern to derive notes from an index into scale let pseq pure in pdegreeToKey pure toP let pseq pseq map return in pdegreeToKey pstutter pure toP This is the pattern variant of degreeToKey let in map M.degreeToKey Pbind note PdegreeToKey Pseq dur play let pdegreeToKey pseq pure in audition pbind note dur Pbind note PdegreeToKey Pseq Pstutter Prand inf dur play let map return pdegreeToKey pseq pstutter prand pn in audition pbind note dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdegreeToKey",
          "normalized": "P a-\u003eP[a]-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "partial": "To Key",
          "signature": "P a-\u003eP[a]-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pdegreeToKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePdiff.  SC3 pattern to calculate adjacent element difference.\n\u003c/p\u003e\u003cpre\u003e \u003e Pdiff(Pseq([0,2,3,5,6,8,9],1)).asStream.all == [2,1,2,1,2,1]\n pdiff (pseq [0,2,3,5,6,8,9] 1) == toP [2,1,2,1,2,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdiff",
          "package": "hsc3-lang",
          "signature": "P n -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pdiff",
          "type": "function"
        },
        "index": {
          "description": "Pdiff SC3 pattern to calculate adjacent element difference Pdiff Pseq asStream.all pdiff pseq toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdiff",
          "normalized": "P a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P n-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pdiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePdrop.  Lifted \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Pseries(1,1,20).drop(5);\n \u003e p.asStream.all == [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\n\u003c/pre\u003e\u003cpre\u003e pdrop 5 (pseries 1 1 10) == toP [6,7,8,9,10]\n pdrop 1 mempty == mempty\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdrop",
          "package": "hsc3-lang",
          "signature": "Int -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pdrop",
          "type": "function"
        },
        "index": {
          "description": "Pdrop Lifted drop Pseries drop p.asStream.all pdrop pseries toP pdrop mempty mempty",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdrop",
          "normalized": "Int-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "Int-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pdrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePdurStutter.  Lifted \u003ccode\u003e\u003ca\u003edurStutter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e s = Pseq(#[1,1,1,1,1,2,2,2,2,2,0,1,3,4,0],inf);\n \u003e d = Pseq(#[0.5,1,2,0.25,0.25],1);\n \u003e PdurStutter(s,d).asStream.all == [0.5,1,2,0.25,0.25]\n\u003c/pre\u003e\u003cpre\u003e let {s = pseq [1,1,1,1,1,2,2,2,2,2,0,1,3,4,0] inf\n     ;d = pseq [0.5,1,2,0.25,0.25] 1}\n in pdurStutter s d == toP [0.5,1.0,2.0,0.25,0.25]\n\u003c/pre\u003e\u003cp\u003eApplied to duration.\n\u003c/p\u003e\u003cpre\u003e \u003e d = PdurStutter(Pseq(#[1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4],inf),\n \u003e                 Pseq(#[0.5,1,2,0.25,0.25],inf));\n \u003e Pbind(\\freq,440,\\dur,d).play\n\u003c/pre\u003e\u003cpre\u003e let {s = pseq [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4] inf\n     ;d = pseq [0.5,1,2,0.25,0.25] inf}\n in audition (pbind [(K_freq,440),(K_dur,pdurStutter s d)])\n\u003c/pre\u003e\u003cp\u003eApplied to frequency.\n\u003c/p\u003e\u003cpre\u003e let {s = pseq [1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,0,4,4] inf\n     ;d = pseq [0,2,3,5,7,9,10] inf + 80}\n in audition (pbind [(K_midinote,pdurStutter s d),(K_dur,0.15)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdurStutter",
          "package": "hsc3-lang",
          "signature": "P Int -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pdurStutter",
          "type": "function"
        },
        "index": {
          "description": "PdurStutter Lifted durStutter Pseq inf Pseq PdurStutter asStream.all let pseq inf pseq in pdurStutter toP Applied to duration PdurStutter Pseq inf Pseq inf Pbind freq dur play let pseq inf pseq inf in audition pbind freq dur pdurStutter Applied to frequency let pseq inf pseq inf in audition pbind midinote pdurStutter dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pdurStutter",
          "normalized": "P Int-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "partial": "Stutter",
          "signature": "P Int-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pdurStutter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEdit \u003ccode\u003ea\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e in each element of an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e pattern.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pedit",
          "package": "hsc3-lang",
          "signature": "Key -\u003e (Field -\u003e Field) -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pedit",
          "type": "function"
        },
        "index": {
          "description": "Edit at Key in each element of an Event pattern",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pedit",
          "normalized": "Key-\u003e(Field-\u003eField)-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "Key-\u003e(Field-\u003eField)-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pedit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, ie. 'Data.List.[]'.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pempty",
          "package": "hsc3-lang",
          "signature": "P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pempty",
          "type": "function"
        },
        "index": {
          "description": "Type specialised mempty ie Data.List",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pempty",
          "package": "hsc3-lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePexprand.  Lifted \u003ccode\u003e\u003ca\u003eexprand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e Pexprand(0.0001,1,10).asStream.all\n pexprand '&#945;' 0.0001 1 10\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\freq,Pexprand(0.0001,1,inf) * 600 + 300,\\dur,0.02).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_freq,pexprand '&#945;' 0.0001 1 inf * 600 + 300)\n                 ,(K_dur,0.02)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pexprand",
          "package": "hsc3-lang",
          "signature": "e -\u003e a -\u003e a -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pexprand",
          "type": "function"
        },
        "index": {
          "description": "Pexprand Lifted exprand Pexprand asStream.all pexprand Pbind freq Pexprand inf dur play audition pbind freq pexprand inf dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pexprand",
          "normalized": "a-\u003eb-\u003eb-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003ea-\u003ea-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pexprand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epexprand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pexprandM",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Int -\u003e m (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pexprandM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of pexprand",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pexprandM",
          "normalized": "a-\u003ea-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003eInt-\u003em(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pexprandM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003emfilter\u003c/a\u003e\u003c/code\u003e.  Aliased to \u003ccode\u003e\u003ca\u003epselect\u003c/a\u003e\u003c/code\u003e.  See also\n \u003ccode\u003e\u003ca\u003epreject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e mfilter even (pseq [1,2,3] 2) == toP [2,2]\n mfilter (\u003c 3) (pseq [1,2,3] 2) == toP [1,2,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfilter",
          "package": "hsc3-lang",
          "signature": "(a -\u003e Bool) -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pfilter",
          "type": "function"
        },
        "index": {
          "description": "Type specialised mfilter Aliased to pselect See also preject mfilter even pseq toP mfilter pseq toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfilter",
          "normalized": "(a-\u003eBool)-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "(a-\u003eBool)-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePfinval.  Alias for \u003ccode\u003e\u003ca\u003eptake\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e \u003e Pfinval(5,Pseq(#[1,2,3],inf)).asStream.all == [1,2,3,1,2]\n pfinval 5 (pseq [1,2,3] inf) == toP [1,2,3,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfinval",
          "package": "hsc3-lang",
          "signature": "Int -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pfinval",
          "type": "function"
        },
        "index": {
          "description": "Pfinval Alias for ptake Pfinval Pseq inf asStream.all pfinval pseq inf toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfinval",
          "normalized": "Int-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "Int-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pfinval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoP\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epflop'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e C.flop [[1,2],[3,4,5]] == [[1,3],[2,4],[1,5]]\n pflop [toP [1,2],toP [3,4,5]] == toP (map toP [[1,3],[2,4],[1,5]])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pflop",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pflop",
          "type": "function"
        },
        "index": {
          "description": "fmap toP of pflop C.flop pflop toP toP toP map toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pflop",
          "normalized": "[P a]-\u003eP(P a)",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pflop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eflop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pflop' [toP [1,2],toP [3,4,5]] == toP [[1,3],[2,4],[1,5]]\n pflop' [toP [1,2],3] == toP [[1,3],[2,3]]\n pflop' [pseq [1,2] 1,pseq [3,4] inf]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pflop'",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pflop%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of flop pflop toP toP toP pflop toP toP pflop pseq pseq inf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pflop'",
          "normalized": "[P a]-\u003eP[a]",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pflop-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003effold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pfold (toP [10,11,12,-6,-7,-8]) (-7) 11 == toP [10,11,10,-6,-7,-6]\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pfold (pseries 4 1 inf) (-7) 11)\n                 ,(K_dur,0.0625)])\n\u003c/pre\u003e\u003cp\u003eThe underlying primitive is then \u003ccode\u003e\u003ca\u003efold_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cpre\u003e let f = fmap (\\n -\u003e fold_ n (-7) 11)\n in audition (pbind [(K_degree,f (pseries 4 1 inf))\n                    ,(K_dur,0.0625)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfold",
          "package": "hsc3-lang",
          "signature": "P n -\u003e n -\u003e n -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pfold",
          "type": "function"
        },
        "index": {
          "description": "Type specialised ffold pfold toP toP audition pbind degree pfold pseries inf dur The underlying primitive is then fold function let fmap fold in audition pbind degree pseries inf dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfold",
          "normalized": "P a-\u003ea-\u003ea-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P n-\u003en-\u003en-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e (Pser([1,2,3],5) + Pseq([0,10],3)).asStream.all == [1,12,3,11,2]\n\u003c/pre\u003e\u003cpre\u003e let p = pser [1,2,3] 5 + pseq [0,10] 3\n in F.foldr (:) [] p == [1,12,3,11,2]\n\u003c/pre\u003e\u003cp\u003eIndefinte patterns may be folded.\n\u003c/p\u003e\u003cpre\u003e take 3 (F.foldr (:) [] (prepeat 1)) == [1,1,1]\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eFoldable\u003c/code\u003e module includes functions for \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e\u003cpre\u003e F.product (toP [1,3,5]) == 15\n floor (F.sum (ptake 100 (pwhite '&#945;' 0.25 0.75 inf))) == 51\n F.any even (toP [1,3,5]) == False\n F.elem 5 (toP [1,3,5]) == True\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfoldr",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e P a -\u003e b",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pfoldr",
          "type": "function"
        },
        "index": {
          "description": "Type specialised foldr Pser Pseq asStream.all let pser pseq in F.foldr Indefinte patterns may be folded take F.foldr prepeat The Foldable module includes functions for product sum any elem etc F.product toP floor F.sum ptake pwhite inf F.any even toP False F.elem toP True",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfoldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eP a-\u003eb",
          "package": "hsc3-lang",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eP a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of the SC3 pattern that evaluates a closure at each\nstep.  The haskell variant function has a \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e form.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Pfuncn({exprand(0.1,0.3) + #[1,2,3,6,7].choose},inf);\n \u003e Pbind(\\freq,p * 100 + 300,\\dur,0.02).play\n\u003c/pre\u003e\u003cpre\u003e let {exprand = Sound.SC3.Lang.Random.Gen.exprand\n     ;choose = Sound.SC3.Lang.Random.Gen.choose\n     ;p = pfuncn '&#945;' (exprand 0.1 0.3) inf\n     ;q = pfuncn '&#946;' (choose [1,2,3,6,7]) inf}\n in audition (pbind [(K_freq,(p + q) * 100 + 300),(K_dur,0.02)])\n\u003c/pre\u003e\u003cp\u003eOf course in this case there is a pattern equivalent.\n\u003c/p\u003e\u003cpre\u003e let {p = pexprand '&#945;' 0.1 0.3 inf + prand '&#946;' [1,2,3,6,7] inf}\n in audition (pbind [(K_freq,p * 100 + 300),(K_dur,0.02)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfuncn",
          "package": "hsc3-lang",
          "signature": "e -\u003e (StdGen -\u003e (n, StdGen)) -\u003e Int -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pfuncn",
          "type": "function"
        },
        "index": {
          "description": "variant of the SC3 pattern that evaluates closure at each step The haskell variant function has StdGen form Pfuncn exprand choose inf Pbind freq dur play let exprand Sound.SC3.Lang.Random.Gen.exprand choose Sound.SC3.Lang.Random.Gen.choose pfuncn exprand inf pfuncn choose inf in audition pbind freq dur Of course in this case there is pattern equivalent let pexprand inf prand inf in audition pbind freq dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pfuncn",
          "normalized": "a-\u003e(StdGen-\u003e(b,StdGen))-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003e(StdGen-\u003e(n,StdGen))-\u003eInt-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pfuncn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePgeom.  SC3 geometric series pattern.\n\u003c/p\u003e\u003cpre\u003e \u003e Pgeom(3,6,5).asStream.all == [3,18,108,648,3888]\n pgeom 3 6 5 == toP [3,18,108,648,3888]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pgeom(1,2,10).asStream.all == [1,2,4,8,16,32,64,128,256,512]\n pgeom 1 2 10 == toP [1,2,4,8,16,32,64,128,256,512]\n\u003c/pre\u003e\u003cp\u003eReal numbers work as well.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Pgeom(1.0,1.1,6).collect({|i| (i * 100).floor});\n \u003e p.asStream.all == [100,110,121,133,146,161];\n\u003c/pre\u003e\u003cpre\u003e let p = fmap (floor . (* 100)) (pgeom 1.0 1.1 6)\n in p == toP [100,110,121,133,146,161]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pseries(-7,1,15),\n \u003e       \\dur,Pgeom(0.5,0.89140193218427,15)).play;\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pseries (-7) 1 15)\n                 ,(K_dur,pgeom 0.5 0.89140193218427 15)])\n\u003c/pre\u003e\u003cp\u003eThere is a list variant.\n\u003c/p\u003e\u003cpre\u003e \u003e 5.geom(3,6)\n C.geom 5 3 6 == [3,18,108,648,3888]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pgeom",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pgeom",
          "type": "function"
        },
        "index": {
          "description": "Pgeom SC3 geometric series pattern Pgeom asStream.all pgeom toP Pgeom asStream.all pgeom toP Real numbers work as well Pgeom collect floor p.asStream.all let fmap floor pgeom in toP Pbind degree Pseries dur Pgeom play audition pbind degree pseries dur pgeom There is list variant geom C.geom",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pgeom",
          "normalized": "a-\u003ea-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pgeom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "phold",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#phold",
          "type": "function"
        },
        "index": {
          "description": "Lifted hold",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "phold",
          "normalized": "P a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:phold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePif.  SC3 \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern-based conditional expression.\n\u003c/p\u003e\u003cpre\u003e \u003e a = Pfunc({0.3.coin});\n \u003e b = Pwhite(0,9,3);\n \u003e c = Pwhite(10,19,3);\n \u003e Pfin(9,Pif(a,b,c)).asStream.all\n\u003c/pre\u003e\u003cpre\u003e let {a = fmap (\u003c 0.75) (pwhite '&#945;' 0.0 1.0 inf)\n     ;b = pwhite '&#946;' 0 9 6\n     ;c = pwhite '&#947;' 10 19 6}\n in pif a b c * (-1) == toP [-7,-3,-11,-17,-18,-6,-3,-4,-5]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pif",
          "package": "hsc3-lang",
          "signature": "P Bool -\u003e P a -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pif",
          "type": "function"
        },
        "index": {
          "description": "Pif SC3 implicitly repeating pattern-based conditional expression Pfunc coin Pwhite Pwhite Pfin Pif asStream.all let fmap pwhite inf pwhite pwhite in pif toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pif",
          "normalized": "P Bool-\u003eP a-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P Bool-\u003eP a-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInstr\u003c/a\u003e\u003c/code\u003e pattern from instrument \u003cem\u003ename\u003c/em\u003e.  See also \u003ccode\u003e\u003ca\u003epsynth\u003c/a\u003e\u003c/code\u003e (where\nthe \u003cem\u003esine\u003c/em\u003e instrument below is defined).\n\u003c/p\u003e\u003cpre\u003e let {si = return (F_Instr (Instr_Ref \"sine\" True))\n     ;di = return (F_Instr (Instr_Ref \"default\" True))\n     ;i = pseq [si,si,di] inf\n     ;p = pbind [(K_instr,i),(K_degree,pseq [0,2,4,7] inf),(K_dur,0.25)]}\n in audition p\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinstr",
          "package": "hsc3-lang",
          "signature": "String -\u003e P Field",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pinstr",
          "type": "function"
        },
        "index": {
          "description": "Instr pattern from instrument name See also psynth where the sine instrument below is defined let si return Instr Instr Ref sine True di return Instr Instr Ref default True pseq si si di inf pbind instr degree pseq inf dur in audition",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinstr",
          "normalized": "String-\u003eP Field",
          "package": "hsc3-lang",
          "signature": "String-\u003eP Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pinstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern from \u003ccode\u003e\u003ca\u003eInstr\u003c/a\u003e\u003c/code\u003e.  An \u003ccode\u003e\u003ca\u003eInstr\u003c/a\u003e\u003c/code\u003e is either a \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e or a\n \u003cem\u003ename\u003c/em\u003e.  In the \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e case the instrument is asynchronously\n sent to the server before processing the event, which has timing\n implications.  The pattern constructed here uses the \u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003e for\n the first element, and the subsequently the \u003cem\u003ename\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e audition (pbind [(K_instr,pinstr' defaultInstr)\n                 ,(K_degree,toP [0,2,4,7])\n                 ,(K_dur,0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinstr'",
          "package": "hsc3-lang",
          "signature": "Instr -\u003e P Field",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pinstr%27",
          "type": "function"
        },
        "index": {
          "description": "Pattern from Instr An Instr is either Synthdef or name In the Synthdef case the instrument is asynchronously sent to the server before processing the event which has timing implications The pattern constructed here uses the Synthdef for the first element and the subsequently the name audition pbind instr pinstr defaultInstr degree toP dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinstr'",
          "normalized": "Instr-\u003eP Field",
          "package": "hsc3-lang",
          "signature": "Instr-\u003eP Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pinstr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pinterleave [pwhitei '&#945;' 0 4 3,pwhitei '&#946;' 5 9 3] == toP [2,7,0,5,3,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinterleave",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pinterleave",
          "type": "function"
        },
        "index": {
          "description": "Lifted interleave pinterleave pwhitei pwhitei toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinterleave",
          "normalized": "[P a]-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pinterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003einterleave2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let p = pinterleave2 (pwhite '&#945;' 1 9 inf) (pseries 10 1 5)\n in [3,10,9,11,2,12,9,13,4,14] `L.isPrefixOf` unP p\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinterleave2",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pinterleave2",
          "type": "function"
        },
        "index": {
          "description": "Lifted interleave2 let pinterleave2 pwhite inf pseries in L.isPrefixOf unP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pinterleave2",
          "normalized": "P a-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pinterleave2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pisPrefixOf",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P a -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pisPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "Lifted isPrefixOf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pisPrefixOf",
          "normalized": "P a-\u003eP a-\u003eBool",
          "package": "hsc3-lang",
          "partial": "Prefix Of",
          "signature": "P a-\u003eP a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pisPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e join (replicate 2 [1,2]) == [1,2,1,2]\n join (preplicate 2 (toP [1,2])) == toP [1,2,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pjoin",
          "package": "hsc3-lang",
          "signature": "P (P a) -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pjoin",
          "type": "function"
        },
        "index": {
          "description": "Type specialised join join replicate join preplicate toP toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pjoin",
          "normalized": "P(P a)-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P(P a)-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pjoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e that pushes an outer \u003ccode\u003e\u003ca\u003eundecided\u003c/a\u003e\u003c/code\u003e inward.\n\u003c/p\u003e\u003cpre\u003e join (undecided (undecided 1)) == undecided 1\n join (undecided (return 1)) == return 1\n pjoin_repeat (undecided (return 1)) == pure 1 == _|_\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pjoin_repeat",
          "package": "hsc3-lang",
          "signature": "P (P a) -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pjoin_repeat",
          "type": "function"
        },
        "index": {
          "description": "join that pushes an outer undecided inward join undecided undecided undecided join undecided return return pjoin repeat undecided return pure",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pjoin_repeat",
          "normalized": "P(P a)-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P(P a)-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pjoin_repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePkey.  SC3 pattern to read \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e pattern.  Note\n however that in haskell is usually more appropriate to name the\n pattern using \u003cem\u003elet\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e pkey K_freq (pbind [(K_freq,return 440)]) == toP [440]\n pkey K_amp (pbind [(K_amp,toP [0,1])]) == toP [0,1]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pseq([Pseries(-7,1,14),Pseries(7,-1,14)],inf),\n \u003e       \\dur,0.25,\n \u003e       \\legato,Pkey(\\degree).linexp(-7,7,2.0,0.05)).play\n\u003c/pre\u003e\u003cpre\u003e let {d = pseq [pseries (-7) 1 14,pseries 7 (-1) 14] inf\n     ;l = fmap (Sound.SC3.Lang.Math.linexp (-7) 7 2 0.05) d}\n in audition (pbind [(K_degree,d)\n                    ,(K_dur,0.25)\n                    ,(K_legato,l)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pkey",
          "package": "hsc3-lang",
          "signature": "Key -\u003e P Event -\u003e P Field",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pkey",
          "type": "function"
        },
        "index": {
          "description": "Pkey SC3 pattern to read Key at Event pattern Note however that in haskell is usually more appropriate to name the pattern using let pkey freq pbind freq return toP pkey amp pbind amp toP toP Pbind degree Pseq Pseries Pseries inf dur legato Pkey degree linexp play let pseq pseries pseries inf fmap Sound.SC3.Lang.Math.linexp in audition pbind degree dur legato",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pkey",
          "normalized": "Key-\u003eP Event-\u003eP Field",
          "package": "hsc3-lang",
          "signature": "Key-\u003eP Event-\u003eP Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern to extract \u003ccode\u003ea\u003c/code\u003es at \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\n pattern.\n\u003c/p\u003e\u003cpre\u003e pkey_m K_freq (pbind [(K_freq,return 440)]) == toP [Just 440]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pkey_m",
          "package": "hsc3-lang",
          "signature": "Key -\u003e P Event -\u003e P (Maybe Field)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pkey_m",
          "type": "function"
        },
        "index": {
          "description": "Pattern to extract at Key from an Event pattern pkey freq pbind freq return toP Just",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pkey_m",
          "normalized": "Key-\u003eP Event-\u003eP(Maybe Field)",
          "package": "hsc3-lang",
          "signature": "Key-\u003eP Event-\u003eP(Maybe Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pkey_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace.  SC3 interlaced embedding of subarrays.\n\u003c/p\u003e\u003cpre\u003e \u003e Place([0,[1,2],[3,4,5]],3).asStream.all == [0,1,3,0,2,4,0,1,5]\n C.lace 9 [[0],[1,2],[3,4,5]] == [0,1,3,0,2,4,0,1,5]\n place [[0],[1,2],[3,4,5]] 3 == toP [0,1,3,0,2,4,0,1,5]\n\u003c/pre\u003e\u003cpre\u003e \u003e Place(#[1,[2,5],[3,6]],2).asStream.all == [1,2,3,1,5,6]\n C.lace 6 [[1],[2,5],[3,6]] == [1,2,3,1,5,6]\n place [[1],[2,5],[3,6]] 2 == toP [1,2,3,1,5,6]\n\u003c/pre\u003e\u003cpre\u003e C.lace 12 [[1],[2,5],[3,6..]] == [1,2,3,1,5,6,1,2,9,1,5,12]\n place [[1],[2,5],[3,6..]] 4 == toP [1,2,3,1,5,6,1,2,9,1,5,12]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "place",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#place",
          "type": "function"
        },
        "index": {
          "description": "Place SC3 interlaced embedding of subarrays Place asStream.all C.lace place toP Place asStream.all C.lace place toP C.lace place toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "place",
          "normalized": "[[a]]-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:place"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, ie. \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmap",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b) -\u003e P a -\u003e P b",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmap",
          "type": "function"
        },
        "index": {
          "description": "Type specialised fmap ie map",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmap",
          "normalized": "(a-\u003eb)-\u003eP a-\u003eP b",
          "package": "hsc3-lang",
          "signature": "(a-\u003eb)-\u003eP a-\u003eP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e (return 1 \u003e\u003e= return . id) == [1]\n (undecided 1 \u003e\u003e= undecided . id) == undecided 1\n\u003c/pre\u003e\u003cpre\u003e (pseq [1,2] 1 \u003e\u003e= \\x -\u003e\n   pseq [3,4,5] 1 \u003e\u003e= \\y -\u003e\n    return (x,y)) == toP [(1,3),(1,4),(1,5),(2,3),(2,4),(2,5)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmbind",
          "package": "hsc3-lang",
          "signature": "P a -\u003e (a -\u003e P b) -\u003e P b",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmbind",
          "type": "function"
        },
        "index": {
          "description": "Type specialised return return id undecided undecided id undecided pseq pseq return toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmbind",
          "normalized": "P a-\u003e(a-\u003eP b)-\u003eP b",
          "package": "hsc3-lang",
          "signature": "P a-\u003e(a-\u003eP b)-\u003eP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmbind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-channel MCE for \u003cem\u003efield\u003c/em\u003e patterns.\n\u003c/p\u003e\u003cpre\u003e pmce2 (toP [1,2]) (toP [3,4]) == toP [f_array [1,3],f_array [2,4]]\n\u003c/pre\u003e\u003cpre\u003e let p = pmce2 (pseq [1,2] inf) (pseq [3,4] inf)\n in ptake 2 p == toP [f_array [1,3],f_array [2,4]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmce2",
          "package": "hsc3-lang",
          "signature": "P Field -\u003e P Field -\u003e P Field",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmce2",
          "type": "function"
        },
        "index": {
          "description": "Two-channel MCE for field patterns pmce2 toP toP toP array array let pmce2 pseq inf pseq inf in ptake toP array array",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmce2",
          "normalized": "P Field-\u003eP Field-\u003eP Field",
          "package": "hsc3-lang",
          "signature": "P Field-\u003eP Field-\u003eP Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmce2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree-channel MCE for \u003cem\u003efield\u003c/em\u003e patterns.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmce3",
          "package": "hsc3-lang",
          "signature": "P Field -\u003e P Field -\u003e P Field -\u003e P Field",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmce3",
          "type": "function"
        },
        "index": {
          "description": "Three-channel MCE for field patterns",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmce3",
          "normalized": "P Field-\u003eP Field-\u003eP Field-\u003eP Field",
          "package": "hsc3-lang",
          "signature": "P Field-\u003eP Field-\u003eP Field-\u003eP Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmce3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eptmerge\u003c/a\u003e\u003c/code\u003e with zero start times.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epmerge\u003c/a\u003e\u003c/code\u003e merges two event streams, adding \u003cem\u003efwd'\u003c/em\u003e entries as required.\n\u003c/p\u003e\u003cpre\u003e let {p = pbind [(K_dur,0.2),(K_midinote,pseq [62,65,69,72] inf)]\n     ;q = pbind [(K_dur,0.4),(K_midinote,pseq [50,45] inf)]}\n in audition (pmerge p q)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmerge",
          "package": "hsc3-lang",
          "signature": "P Event -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmerge",
          "type": "function"
        },
        "index": {
          "description": "Variant of ptmerge with zero start times pmerge merges two event streams adding fwd entries as required let pbind dur midinote pseq inf pbind dur midinote pseq inf in audition pmerge",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmerge",
          "normalized": "P Event-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P Event-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePmono.  SC3 pattern that is a variant of \u003ccode\u003e\u003ca\u003epbind\u003c/a\u003e\u003c/code\u003e for controlling\n monophonic (persistent) synthesiser nodes.\n\u003c/p\u003e\u003cpre\u003e let p = [(K_instr,pinstr' (Instr_Ref \"default\" False))\n         ,(K_id,100)\n         ,(K_degree,pxrand '&#945;' [0,2,4,5,7,9,11] inf)\n         ,(K_amp,pwrand '&#946;' [0.05,0.2] [0.7,0.3] inf)\n         ,(K_dur,0.25)]\n in audition (pmono p)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmono",
          "package": "hsc3-lang",
          "signature": "[P_Bind] -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmono",
          "type": "function"
        },
        "index": {
          "description": "Pmono SC3 pattern that is variant of pbind for controlling monophonic persistent synthesiser nodes let instr pinstr Instr Ref default False id degree pxrand inf amp pwrand inf dur in audition pmono",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmono",
          "normalized": "[P_Bind]-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "[P_Bind]-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePmul.  SC3 pattern to multiply an existing key by a value, or set\n the key if it doesn't exist.\n\u003c/p\u003e\u003cpre\u003e let p = pbind [(K_dur,0.15),(K_freq,prand '&#945;' [440,550,660] 6)]\n in audition (pseq [p,pmul (K_freq,2) p,pmul (K_freq,0.5) p] 2)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmul",
          "package": "hsc3-lang",
          "signature": "P_Bind -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmul",
          "type": "function"
        },
        "index": {
          "description": "Pmul SC3 pattern to multiply an existing key by value or set the key if it doesn exist let pbind dur freq prand in audition pseq pmul freq pmul freq",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmul",
          "normalized": "P_Bind-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P_Bind-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant that does not insert key.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmul'",
          "package": "hsc3-lang",
          "signature": "P_Bind -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pmul%27",
          "type": "function"
        },
        "index": {
          "description": "Variant that does not insert key",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pmul'",
          "normalized": "P_Bind-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P_Bind-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pmul-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePn.  SC3 pattern to repeat the enclosed pattern a number of\n times.\n\u003c/p\u003e\u003cpre\u003e pn 1 4 == toP [1,1,1,1]\n pn (toP [1,2,3]) 3 == toP [1,2,3,1,2,3,1,2,3]\n\u003c/pre\u003e\u003cp\u003eThis is related to \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e in standard list processing.\n\u003c/p\u003e\u003cpre\u003e concat (replicate 4 [1]) == [1,1,1,1]\n concat (replicate 3 [1,2,3]) == [1,2,3,1,2,3,1,2,3]\n\u003c/pre\u003e\u003cp\u003eThere is a \u003ccode\u003e\u003ca\u003epconcatReplicate\u003c/a\u003e\u003c/code\u003e near-alias (reversed argument order).\n\u003c/p\u003e\u003cpre\u003e pconcatReplicate 4 1 == toP [1,1,1,1]\n pconcatReplicate 3 (toP [1,2]) == toP [1,2,1,2,1,2]\n\u003c/pre\u003e\u003cp\u003eThis is productive over infinite lists.\n\u003c/p\u003e\u003cpre\u003e concat (replicate inf [1])\n pconcat (replicate inf 1)\n pconcatReplicate inf 1\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pn",
          "package": "hsc3-lang",
          "signature": "P a -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pn",
          "type": "function"
        },
        "index": {
          "description": "Pn SC3 pattern to repeat the enclosed pattern number of times pn toP pn toP toP This is related to concat replicate in standard list processing concat replicate concat replicate There is pconcatReplicate near-alias reversed argument order pconcatReplicate toP pconcatReplicate toP toP This is productive over infinite lists concat replicate inf pconcat replicate inf pconcatReplicate inf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pn",
          "normalized": "P a-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003enormalizeSum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pnormalizeSum",
          "package": "hsc3-lang",
          "signature": "P n -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pnormalizeSum",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of normalizeSum",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pnormalizeSum",
          "normalized": "P a-\u003eP a",
          "package": "hsc3-lang",
          "partial": "Sum",
          "signature": "P n-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pnormalizeSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pnull mempty == True\n pnull (undecided 'a') == False\n pnull (pure 'a') == False\n pnull (return 'a') == False\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pnull",
          "package": "hsc3-lang",
          "signature": "P a -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pnull",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of null pnull mempty True pnull undecided False pnull pure False pnull return False",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pnull",
          "normalized": "P a-\u003eBool",
          "package": "hsc3-lang",
          "signature": "P a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePpar.  Variant of \u003ccode\u003e\u003ca\u003eptpar\u003c/a\u003e\u003c/code\u003e with zero start times.\n\u003c/p\u003e\u003cp\u003eThe result of \u003ccode\u003e\u003ca\u003epmerge\u003c/a\u003e\u003c/code\u003e can be merged again, \u003ccode\u003e\u003ca\u003eppar\u003c/a\u003e\u003c/code\u003e merges a list of\npatterns.\n\u003c/p\u003e\u003cpre\u003e let {a = pbind [(K_param \"a\",pseq [1,2,3] inf)]\n     ;b = pbind [(K_param \"b\",pseq [4,5,6] inf)]\n     ;r = toP [e_from_list [(K_param \"a\",1),(K_fwd',0)]\n              ,e_from_list [(K_param \"b\",4),(K_fwd',1)]]}\n in ptake 2 (ppar [a,b]) == r\n\u003c/pre\u003e\u003cpre\u003e let {p = pbind [(K_dur,0.2),(K_midinote,pseq [62,65,69,72] inf)]\n     ;q = pbind [(K_dur,0.4),(K_midinote,pseq [50,45] inf)]\n     ;r = pbind [(K_dur,0.6),(K_midinote,pseq [76,79,81] inf)]}\n in audition (ppar [p,q,r])\n\u003c/pre\u003e\u003cp\u003eMultiple nested \u003ccode\u003e\u003ca\u003eppar\u003c/a\u003e\u003c/code\u003e patterns.\n\u003c/p\u003e\u003cpre\u003e let {a u = pbind [(K_dur,0.2),(K_param \"pan\",0.5),(K_midinote,pseq u 1)]\n     ;b l = pbind [(K_dur,0.4),(K_param \"pan\",-0.5),(K_midinote,pseq l 1)]\n     ;f u l = ppar [a u,b l]\n     ;h = pbind [(K_dur,prand '&#945;' [0.2,0.4,0.6] inf)\n                ,(K_midinote,prand '&#946;' [72,74,76,77,79,81] inf)\n                ,(K_db,-26)\n                ,(K_legato,1.1)]\n     ;m = pseq [pbind [(K_dur,3.2),(K_freq,return nan)]\n               ,prand '&#947;' [f [60,64,67,64] [48,43]\n                          ,f [62,65,69,65] [50,45]\n                          ,f [64,67,71,67] [52,47]] 12] inf}\n in audition (ppar [h,m])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ppar",
          "package": "hsc3-lang",
          "signature": "[P Event] -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ppar",
          "type": "function"
        },
        "index": {
          "description": "Ppar Variant of ptpar with zero start times The result of pmerge can be merged again ppar merges list of patterns let pbind param pseq inf pbind param pseq inf toP from list param fwd from list param fwd in ptake ppar let pbind dur midinote pseq inf pbind dur midinote pseq inf pbind dur midinote pseq inf in audition ppar Multiple nested ppar patterns let pbind dur param pan midinote pseq pbind dur param pan midinote pseq ppar pbind dur prand inf midinote prand inf db legato pseq pbind dur freq return nan prand inf in audition ppar",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ppar",
          "normalized": "[P Event]-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "[P Event]-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ppar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePpatlace.  SC3 \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern to lace input patterns.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Ppatlace([1,Pseq([2,3],2),4],5);\n \u003e p.asStream.all == [1,2,4,1,3,4,1,2,4,1,3,4,1,4]\n\u003c/pre\u003e\u003cpre\u003e ppatlace [1,pseq [2,3] 2,4] 5 == toP [1,2,4,1,3,4,1,2,4,1,3,4,1,4]\n\u003c/pre\u003e\u003cpre\u003e \u003e p = Ppatlace([1,Pseed(Pn(1000,1),Prand([2,3],inf))],5);\n \u003e p.asStream.all == [1,3,1,3,1,3,1,2,1,2]\n\u003c/pre\u003e\u003cpre\u003e ppatlace [1,prand '&#945;' [2,3] inf] 5 == toP [1,3,1,2,1,3,1,2,1,2]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Ppatlace([Pseries(0,1,8),Pseries(2,1,7)],inf),\n \u003e       \\dur,0.25).play;\n\u003c/pre\u003e\u003cpre\u003e let p = [(K_degree,ppatlace [pseries 0 1 8,pseries 2 1 7] inf)\n         ,(K_dur,0.125)]\n in audition (pbind p)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ppatlace",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ppatlace",
          "type": "function"
        },
        "index": {
          "description": "Ppatlace SC3 implicitly repeating pattern to lace input patterns Ppatlace Pseq p.asStream.all ppatlace pseq toP Ppatlace Pseed Pn Prand inf p.asStream.all ppatlace prand inf toP Pbind degree Ppatlace Pseries Pseries inf dur play let degree ppatlace pseries pseries inf dur in audition pbind",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ppatlace",
          "normalized": "[P a]-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ppatlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ppure",
          "package": "hsc3-lang",
          "signature": "a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ppure",
          "type": "function"
        },
        "index": {
          "description": "Type specialised pure",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ppure",
          "normalized": "a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ppure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrand.  SC3 pattern to make n random selections from a list of\npatterns, the resulting pattern is flattened (joined).\n\u003c/p\u003e\u003cpre\u003e \u003e p = Pseed(Pn(1000,1),Prand([1,Pseq([10,20,30]),2,3,4,5],6));\n \u003e p.asStream.all == [3,5,3,10,20,30,2,2]\n\u003c/pre\u003e\u003cpre\u003e prand '&#945;' [1,toP [10,20],2,3,4,5] 5 == toP [5,2,10,20,2,1]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\note,Prand([0,1,5,7],inf),\\dur,0.25).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_note,prand '&#945;' [0,1,5,7] inf),(K_dur,0.25)])\n\u003c/pre\u003e\u003cp\u003eNested sequences of pitches:\n\u003c/p\u003e\u003cpre\u003e \u003e Pbind(\\midinote,Prand([Pseq(#[60,61,63,65,67,63]),\n \u003e                        Prand(#[72,73,75,77,79],6),\n \u003e                        Pshuf(#[48,53,55,58],2)],inf),\n \u003e       \\dur,0.25).play\n\u003c/pre\u003e\u003cpre\u003e let {n = prand '&#945;' [pseq [60,61,63,65,67,63] 1\n                    ,prand '&#946;' [72,73,75,77,79] 6\n                    ,pshuf '&#947;' [48,53,55,58] 2] inf}\n in audition (pbind [(K_midinote,n),(K_dur,0.075)])\n\u003c/pre\u003e\u003cp\u003eThe below cannot be written as intended with the list\nbased pattern library.  This is precisely because the\nnoise patterns are values, not processes with a state\nthreaded non-locally.\n\u003c/p\u003e\u003cpre\u003e do {n0 \u003c- Sound.SC3.Lang.Random.IO.rrand 2 5\n    ;n1 \u003c- Sound.SC3.Lang.Random.IO.rrand 3 9\n    ;let p = pseq [prand '&#945;' [pempty,pseq [24,31,36,43,48,55] 1] 1\n                  ,pseq [60,prand '&#946;' [63,65] 1\n                        ,67,prand '&#947;' [70,72,74] 1] n0\n                  ,prand '&#948;' [74,75,77,79,81] n1] inf\n     in return (ptake 24 p)}\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prand",
          "package": "hsc3-lang",
          "signature": "e -\u003e [P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#prand",
          "type": "function"
        },
        "index": {
          "description": "Prand SC3 pattern to make random selections from list of patterns the resulting pattern is flattened joined Pseed Pn Prand Pseq p.asStream.all prand toP toP Pbind note Prand inf dur play audition pbind note prand inf dur Nested sequences of pitches Pbind midinote Prand Pseq Prand Pshuf inf dur play let prand pseq prand pshuf inf in audition pbind midinote dur The below cannot be written as intended with the list based pattern library This is precisely because the noise patterns are values not processes with state threaded non-locally do n0 Sound.SC3.Lang.Random.IO.rrand n1 Sound.SC3.Lang.Random.IO.rrand let pseq prand pempty pseq pseq prand prand n0 prand n1 inf in return ptake",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prand",
          "normalized": "a-\u003e[P b]-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003e[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:prand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUn-joined variant of \u003ccode\u003e\u003ca\u003eprand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let p = prand' '&#945;' [1,toP [2,3],toP [4,5,6]] 5\n in p == toP [toP [4,5,6],toP [4,5,6],toP [2,3],toP [4,5,6],1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prand'",
          "package": "hsc3-lang",
          "signature": "e -\u003e [P a] -\u003e Int -\u003e P (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#prand%27",
          "type": "function"
        },
        "index": {
          "description": "Un-joined variant of prand let prand toP toP in toP toP toP toP toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prand'",
          "normalized": "a-\u003e[P b]-\u003eInt-\u003eP(P b)",
          "package": "hsc3-lang",
          "signature": "e-\u003e[P a]-\u003eInt-\u003eP(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:prand-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eprand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prandM",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e m (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#prandM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of prand",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prandM",
          "normalized": "[P a]-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003em(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:prandM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreject.  SC3 pattern to rejects values for which the predicate\n is true.  reject f is equal to filter (not . f).\n\u003c/p\u003e\u003cpre\u003e preject (== 1) (pseq [1,2,3] 2) == toP [2,3,2,3]\n pfilter (not . (== 1)) (pseq [1,2,3] 2) == toP [2,3,2,3]\n\u003c/pre\u003e\u003cpre\u003e \u003e p = Pseed(Pn(1000,1),Pwhite(0,255,20).reject({|x| x.odd}));\n \u003e p.asStream.all == [224,60,88,94,42,32,110,24,122,172]\n\u003c/pre\u003e\u003cpre\u003e preject odd (pwhite '&#945;' 0 255 10) == toP [32,158,62,216,240,20]\n\u003c/pre\u003e\u003cpre\u003e \u003e p = Pseed(Pn(1000,1),Pwhite(0,255,20).select({|x| x.odd}));\n \u003e p.asStream.all == [151,157,187,129,45,245,101,79,77,243]\n\u003c/pre\u003e\u003cpre\u003e pselect odd (pwhite '&#945;' 0 255 10) == toP [241,187,119,127]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "preject",
          "package": "hsc3-lang",
          "signature": "(a -\u003e Bool) -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#preject",
          "type": "function"
        },
        "index": {
          "description": "Preject SC3 pattern to rejects values for which the predicate is true reject is equal to filter not preject pseq toP pfilter not pseq toP Pseed Pn Pwhite reject x.odd p.asStream.all preject odd pwhite toP Pseed Pn Pwhite select x.odd p.asStream.all pselect odd pwhite toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "preject",
          "normalized": "(a-\u003eBool)-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "(a-\u003eBool)-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:preject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e, pattern variant of \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ptake 5 (prepeat 3) == toP [3,3,3,3,3]\n ptake 5 (pure 3) == toP [3,3,3,3,3]\n take 5 (pure 3) == [3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prepeat",
          "package": "hsc3-lang",
          "signature": "a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#prepeat",
          "type": "function"
        },
        "index": {
          "description": "Alias for pure pattern variant of repeat ptake prepeat toP ptake pure toP take pure",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prepeat",
          "normalized": "a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:prepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e preplicate 4 1 == toP [1,1,1,1]\n\u003c/pre\u003e\u003cp\u003eCompare to \u003ccode\u003e\u003ca\u003epn\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e pn 1 4 == toP [1,1,1,1]\n pn (toP [1,2]) 3 == toP [1,2,1,2,1,2]\n preplicate 4 (toP [1,2]) :: P (P Int)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "preplicate",
          "package": "hsc3-lang",
          "signature": "Int -\u003e a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#preplicate",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of replicate preplicate toP Compare to pn pn toP pn toP toP preplicate toP Int",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "preplicate",
          "normalized": "Int-\u003ea-\u003eP a",
          "package": "hsc3-lang",
          "signature": "Int-\u003ea-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:preplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "preturn",
          "package": "hsc3-lang",
          "signature": "a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#preturn",
          "type": "function"
        },
        "index": {
          "description": "Type specialised return",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "preturn",
          "normalized": "a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:preturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProrate.  SC3 \u003cem\u003eimplicitly repeating\u003c/em\u003e sub-dividing pattern.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Prorate(Pseq([0.35,0.5,0.8]),1);\n \u003e p.asStream.all == [0.35,0.65,0.5,0.5,0.8,0.2];\n\u003c/pre\u003e\u003cpre\u003e let p = prorate (fmap Left (pseq [0.35,0.5,0.8] 1)) 1\n in fmap roundE (p * 100) == toP [35,65,50,50,80,20]\n\u003c/pre\u003e\u003cpre\u003e \u003e p = Prorate(Pseq([0.35,0.5,0.8]),Pseed(Pn(100,1),Prand([20,1],inf)));\n \u003e p.asStream.all == [7,13,0.5,0.5,16,4]\n\u003c/pre\u003e\u003cpre\u003e let p = prorate (fmap Left (pseq [0.35,0.5,0.8] 1))\n                 (prand '&#945;' [20,1] 3)\n in fmap roundE (p * 100) == toP [35,65,1000,1000,80,20]\n\u003c/pre\u003e\u003cpre\u003e \u003e l = [[1,2],[5,7],[4,8,9]].collect(_.normalizeSum);\n \u003e Prorate(Pseq(l,1)).asStream.all\n\u003c/pre\u003e\u003cpre\u003e let l = map (Right . C.normalizeSum) [[1,2],[5,7],[4,8,9]]\n in prorate (toP l) 1\n\u003c/pre\u003e\u003cpre\u003e \u003e Pfinval(5,Prorate(0.6,0.5)).asStream.all == [0.3,0.2,0.3,0.2,0.3]\n\u003c/pre\u003e\u003cpre\u003e pfinval 5 (prorate (fmap Left 0.6) 0.5) == toP [0.3,0.2,0.3,0.2,0.3]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pseries(4,1,inf).fold(-7,11),\n \u003e       \\dur,Prorate(0.6,0.5)).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pfold (pseries 4 1 inf) (-7) 11)\n                 ,(K_dur,prorate (fmap Left 0.6) 0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prorate",
          "package": "hsc3-lang",
          "signature": "P (Either a [a]) -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#prorate",
          "type": "function"
        },
        "index": {
          "description": "Prorate SC3 implicitly repeating sub-dividing pattern Prorate Pseq p.asStream.all let prorate fmap Left pseq in fmap roundE toP Prorate Pseq Pseed Pn Prand inf p.asStream.all let prorate fmap Left pseq prand in fmap roundE toP collect normalizeSum Prorate Pseq asStream.all let map Right C.normalizeSum in prorate toP Pfinval Prorate asStream.all pfinval prorate fmap Left toP Pbind degree Pseries inf fold dur Prorate play audition pbind degree pfold pseries inf dur prorate fmap Left",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prorate",
          "normalized": "P(Either a[a])-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P(Either a[a])-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:prorate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying pattern for \u003ccode\u003e\u003ca\u003eprorate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e prorate' (Left 0.6) 0.5\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prorate'",
          "package": "hsc3-lang",
          "signature": "Either a [a] -\u003e a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#prorate%27",
          "type": "function"
        },
        "index": {
          "description": "Underlying pattern for prorate prorate Left",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prorate'",
          "normalized": "Either a[a]-\u003ea-\u003eP a",
          "package": "hsc3-lang",
          "signature": "Either a[a]-\u003ea-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:prorate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003ersd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e prsd (pstutter 2 (toP [1,2,3])) == toP [1,2,3]\n prsd (pseq [1,2,3] 2) == toP [1,2,3,1,2,3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prsd",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#prsd",
          "type": "function"
        },
        "index": {
          "description": "Lifted rsd prsd pstutter toP toP prsd pseq toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "prsd",
          "normalized": "P a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:prsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but\n returns a list of successive reduced values from the left.  pscanl\n is an accumulator, it provides a mechanism for state to be threaded\n through a pattern. It can be used to write a function to remove\n succesive duplicates from a pattern, to count the distance between\n occurences of an element in a pattern and so on.\n\u003c/p\u003e\u003cpre\u003e F.foldl (\\x y -\u003e 2 * x + y) 4 (pseq [1,2,3] 1) == 43\n pscanl (\\x y -\u003e 2 * x + y) 4 (pseq [1,2,3] 1) == toP [4,9,20,43]\n\u003c/pre\u003e\u003cpre\u003e F.foldl (flip (:)) [] (toP [1..3]) == [3,2,1]\n pscanl (flip (:)) [] (toP [1..3]) == toP [[],[1],[2,1],[3,2,1]]\n\u003c/pre\u003e\u003cpre\u003e F.foldl (+) 0 (toP [1..5]) == 15\n pscanl (+) 0 (toP [1..5]) == toP [0,1,3,6,10,15]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pscanl",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e P b -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pscanl",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of scanl scanl is similar to foldl but returns list of successive reduced values from the left pscanl is an accumulator it provides mechanism for state to be threaded through pattern It can be used to write function to remove succesive duplicates from pattern to count the distance between occurences of an element in pattern and so on F.foldl pseq pscanl pseq toP F.foldl flip toP pscanl flip toP toP F.foldl toP pscanl toP toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pscanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eP b-\u003eP a",
          "package": "hsc3-lang",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eP b-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pscanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePselect.  See \u003ccode\u003e\u003ca\u003epfilter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pselect (\u003c 3) (pseq [1,2,3] 2) == toP [1,2,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pselect",
          "package": "hsc3-lang",
          "signature": "(a -\u003e Bool) -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pselect",
          "type": "function"
        },
        "index": {
          "description": "Pselect See pfilter pselect pseq toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pselect",
          "normalized": "(a-\u003eBool)-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "(a-\u003eBool)-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pselect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePseq.  SC3 pattern to cycle over a list of patterns. The repeats\npattern gives the number of times to repeat the entire list.\n\u003c/p\u003e\u003cpre\u003e pseq [return 1,return 2,return 3] 2 == toP [1,2,3,1,2,3]\n pseq [1,2,3] 2 == toP [1,2,3,1,2,3]\n pseq [1,pn 2 2,3] 2 == toP [1,2,2,3,1,2,2,3]\n\u003c/pre\u003e\u003cp\u003eThere is an \u003ccode\u003e\u003ca\u003einf\u003c/a\u003e\u003c/code\u003e value for the repeats variable.\n\u003c/p\u003e\u003cpre\u003e ptake 3 (pdrop (10^5) (pseq [1,2,3] inf)) == toP [2,3,1]\n\u003c/pre\u003e\u003cp\u003eUnlike the SC3 Pseq, \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e does not have an offset argument to give a\nstarting offset into the list.\n\u003c/p\u003e\u003cpre\u003e pseq (C.rotate 3 [1,2,3,4]) 3 == toP [2,3,4,1,2,3,4,1,2,3,4,1]\n\u003c/pre\u003e\u003cp\u003eAs scale degrees.\n\u003c/p\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pseq(#[0,0,4,4,5,5,4],1),\n \u003e       \\dur,Pseq(#[0.5,0.5,0.5,0.5,0.5,0.5,1],1)).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pseq [0,0,4,4,5,5,4] 1)\n                 ,(K_dur,pseq [0.5,0.5,0.5,0.5,0.5,0.5,1] 1)])\n\u003c/pre\u003e\u003cpre\u003e \u003e Pseq(#[60,62,63,65,67,63],inf) + Pseq(#[0,0,0,0,-12],inf)\n\u003c/pre\u003e\u003cpre\u003e let n = pseq [60,62,63,65,67,63] inf + pser [0,0,0,0,-12] 25\n in audition (pbind [(K_midinote,n),(K_dur,0.2)])\n\u003c/pre\u003e\u003cp\u003ePattern \u003ccode\u003eb\u003c/code\u003e pattern sequences \u003ccode\u003ea\u003c/code\u003e once normally, once transposed up a\nfifth and once transposed up a fourth.\n\u003c/p\u003e\u003cpre\u003e \u003e a = Pseq(#[60,62,63,65,67,63]);\n \u003e b = Pseq([a,a + 7,a + 5],inf);\n \u003e Pbind(\\midinote,b,\\dur,0.3).play\n\u003c/pre\u003e\u003cpre\u003e let {a = pseq [60,62,63,65,67,63] 1\n     ;b = pseq [a,a + 7,a + 5] inf}\n in audition (pbind [(K_midinote,b),(K_dur,0.13)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseq",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pseq",
          "type": "function"
        },
        "index": {
          "description": "Pseq SC3 pattern to cycle over list of patterns The repeats pattern gives the number of times to repeat the entire list pseq return return return toP pseq toP pseq pn toP There is an inf value for the repeats variable ptake pdrop pseq inf toP Unlike the SC3 Pseq pseq does not have an offset argument to give starting offset into the list pseq C.rotate toP As scale degrees Pbind degree Pseq dur Pseq play audition pbind degree pseq dur pseq Pseq inf Pseq inf let pseq inf pser in audition pbind midinote dur Pattern pattern sequences once normally once transposed up fifth and once transposed up fourth Pseq Pseq inf Pbind midinote dur play let pseq pseq inf in audition pbind midinote dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseq",
          "normalized": "[P a]-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e that retrieves only one value from each pattern\non each list traversal.  Compare to \u003ccode\u003e\u003ca\u003epswitch1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pseq [pseq [1,2] 1,pseq [3,4] 1] 2 == toP [1,2,3,4,1,2,3,4]\n pseq1 [pseq [1,2] 1,pseq [3,4] 1] 2 == toP [1,3,2,4]\n pseq1 [pseq [1,2] inf,pseq [3,4] inf] 3 == toP [1,3,2,4,1,3]\n\u003c/pre\u003e\u003cpre\u003e let {p = prand' '&#945;' [pempty,toP [24,31,36,43,48,55]] inf\n     ;q = pflop [60,prand '&#946;' [63,65] inf\n                ,67,prand '&#947;' [70,72,74] inf]\n     ;r = psplitPlaces (pwhite '&#948;' 3 9 inf)\n                       (toP [74,75,77,79,81])\n     ;n = pjoin (pseq1 [p,q,r] inf)}\n in audition (pbind [(K_midinote,n),(K_dur,0.13)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseq1",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pseq1",
          "type": "function"
        },
        "index": {
          "description": "Variant of pseq that retrieves only one value from each pattern on each list traversal Compare to pswitch1 pseq pseq pseq toP pseq1 pseq pseq toP pseq1 pseq inf pseq inf toP let prand pempty toP inf pflop prand inf prand inf psplitPlaces pwhite inf toP pjoin pseq1 inf in audition pbind midinote dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseq1",
          "normalized": "[P a]-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pseq1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e to aid translating a common SC3 idiom where a\n finite random pattern is included in a \u003ccode\u003ePseq\u003c/code\u003e list.  In the SC3\n case, at each iteration a new computation is run.  This idiom does\n not directly translate to the declarative haskell pattern library.\n\u003c/p\u003e\u003cpre\u003e \u003e Pseq([1,Prand([2,3],1)],5).asStream.all\n pseq [1,prand '&#945;' [2,3] 1] 5 == toP [1,3,1,3,1,3,1,3,1,3]\n\u003c/pre\u003e\u003cp\u003eAlthough the intended pattern can usually be expressed using an\n alternate construction:\n\u003c/p\u003e\u003cpre\u003e \u003e Pseq([1,Prand([2,3],1)],5).asStream.all\n ppatlace [1,prand '&#945;' [2,3] inf] 5 == toP [1,3,1,2,1,3,1,2,1,2]\n\u003c/pre\u003e\u003cp\u003ethe \u003ccode\u003e\u003ca\u003epseqn\u003c/a\u003e\u003c/code\u003e variant handles many common cases.\n\u003c/p\u003e\u003cpre\u003e \u003e Pseq([Pn(8,2),Pwhite(9,16,1)],5).asStream.all\n\u003c/pre\u003e\u003cpre\u003e let p = pseqn [2,1] [8,pwhite '&#945;' 9 16 inf] 5\n in p == toP [8,8,10,8,8,9,8,8,12,8,8,15,8,8,15]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseqn",
          "package": "hsc3-lang",
          "signature": "[Int] -\u003e [P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pseqn",
          "type": "function"
        },
        "index": {
          "description": "variant of pseq to aid translating common SC3 idiom where finite random pattern is included in Pseq list In the SC3 case at each iteration new computation is run This idiom does not directly translate to the declarative haskell pattern library Pseq Prand asStream.all pseq prand toP Although the intended pattern can usually be expressed using an alternate construction Pseq Prand asStream.all ppatlace prand inf toP the pseqn variant handles many common cases Pseq Pn Pwhite asStream.all let pseqn pwhite inf in toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseqn",
          "normalized": "[Int]-\u003e[P a]-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[Int]-\u003e[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pseqn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e that passes a new seed at each invocation,\nsee also \u003ccode\u003e\u003ca\u003epfuncn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e pseqr (\\e -\u003e [pshuf e [1,2,3,4] 1]) 2 == toP [2,3,4,1,4,1,2,3]\n\u003c/pre\u003e\u003cpre\u003e let {d = pseqr (\\e -\u003e [pshuf e [-7,-3,0,2,4,7] 4\n                       ,pseq [0,1,2,3,4,5,6,7] 1]) inf}\n in audition (pbind [(K_degree,d),(K_dur,0.15)])\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\dur,0.2,\n \u003e       \\midinote,Pseq([Pshuf(#[60,61,62,63,64,65,66,67],3)],inf)).play\n\u003c/pre\u003e\u003cpre\u003e let m = pseqr (\\e -\u003e [pshuf e [60,61,62,63,64,65,66,67] 3]) inf\n in audition (pbind [(K_dur,0.2),(K_midinote,m)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseqr",
          "package": "hsc3-lang",
          "signature": "(Int -\u003e [P a]) -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pseqr",
          "type": "function"
        },
        "index": {
          "description": "variant of pseq that passes new seed at each invocation see also pfuncn pseqr pshuf toP let pseqr pshuf pseq inf in audition pbind degree dur Pbind dur midinote Pseq Pshuf inf play let pseqr pshuf inf in audition pbind dur midinote",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseqr",
          "normalized": "(Int-\u003e[P a])-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "(Int-\u003e[P a])-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pseqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePser.  SC3 pattern that is like \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e, however the repeats\n variable gives the number of elements in the sequence, not the\n number of cycles of the pattern.\n\u003c/p\u003e\u003cpre\u003e pser [1,2,3] 5 == toP [1,2,3,1,2]\n pser [1,pser [10,20] 3,3] 9 == toP [1,10,20,10,3,1,10,20,10]\n pser [1,2,3] 5 * 3 == toP [3,6,9,3,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pser",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pser",
          "type": "function"
        },
        "index": {
          "description": "Pser SC3 pattern that is like pseq however the repeats variable gives the number of elements in the sequence not the number of cycles of the pattern pser toP pser pser toP pser toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pser",
          "normalized": "[P a]-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003epser\u003c/a\u003e\u003c/code\u003e that consumes sub-patterns one element per\n iteration.\n\u003c/p\u003e\u003cpre\u003e pser1 [1,pser [10,20] 3,3] 9 == toP [1,10,3,1,20,3,1,10,3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pser1",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pser1",
          "type": "function"
        },
        "index": {
          "description": "Variant of pser that consumes sub-patterns one element per iteration pser1 pser toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pser1",
          "normalized": "[P a]-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pser1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePseries.  SC3 arithmetric series pattern, see also \u003ccode\u003e\u003ca\u003epgeom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pseries 0 2 10 == toP [0,2,4,6,8,10,12,14,16,18]\n pseries 9 (-1) 10 == toP [9,8 .. 0]\n pseries 1.0 0.2 3 == toP [1.0::Double,1.2,1.4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseries",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pseries",
          "type": "function"
        },
        "index": {
          "description": "Pseries SC3 arithmetric series pattern see also pgeom pseries toP pseries toP pseries toP Double",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pseries",
          "normalized": "a-\u003ea-\u003eInt-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pseries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePshuf.  SC3 pattern to return \u003ccode\u003en\u003c/code\u003e repetitions of a shuffled\n sequence.\n\u003c/p\u003e\u003cpre\u003e \u003e Pshuf([1,2,3,4],2).asStream.all\n pshuf '&#945;' [1,2,3,4] 2 == toP [2,4,3,1,2,4,3,1]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pshuf([0,1,2,4,5],inf),\\dur,0.25).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pshuf '&#945;' [0,1,2,4,5] inf)\n                 ,(K_dur,0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pshuf",
          "package": "hsc3-lang",
          "signature": "e -\u003e [a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pshuf",
          "type": "function"
        },
        "index": {
          "description": "Pshuf SC3 pattern to return repetitions of shuffled sequence Pshuf asStream.all pshuf toP Pbind degree Pshuf inf dur play audition pbind degree pshuf inf dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pshuf",
          "normalized": "a-\u003e[b]-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003e[a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pshuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epshuf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pshufM",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Int -\u003e m (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pshufM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of pshuf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pshufM",
          "normalized": "[a]-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eInt-\u003em(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pshufM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePslide.  Lifted \u003ccode\u003e\u003ca\u003eslide\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e Pslide([1,2,3,4],inf,3,1,0).asStream.all\n pslide [1,2,3,4] 4 3 1 0 True == toP [1,2,3,2,3,4,3,4,1,4,1,2]\n pslide [1,2,3,4,5] 3 3 (-1) 0 True == toP [1,2,3,5,1,2,4,5,1]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pslide((-6,-4 .. 12),8,3,1,0),\n \u003e       \\dur,Pseq(#[0.1,0.1,0.2],inf),\n \u003e       \\sustain,0.15).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pslide [-6,-4 .. 12] 8 3 1 0 True)\n                 ,(K_dur,pseq [0.05,0.05,0.1] inf)\n                 ,(K_sustain,0.15)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pslide",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e Bool -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pslide",
          "type": "function"
        },
        "index": {
          "description": "Pslide Lifted slide Pslide inf asStream.all pslide True toP pslide True toP Pbind degree Pslide dur Pseq inf sustain play audition pbind degree pslide True dur pseq inf sustain",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pslide",
          "normalized": "[a]-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eBool-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eBool-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pslide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psplitAt",
          "package": "hsc3-lang",
          "signature": "Int -\u003e P a -\u003e (P a, P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#psplitAt",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of splitAt",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psplitAt",
          "normalized": "Int-\u003eP a-\u003e(P a,P a)",
          "package": "hsc3-lang",
          "partial": "At",
          "signature": "Int-\u003eP a-\u003e(P a,P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:psplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoP\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epsplitPlaces'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e psplitPlaces (toP [1,2,3]) (toP ['a'..]) == toP (map toP [\"a\",\"bc\",\"def\"])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psplitPlaces",
          "package": "hsc3-lang",
          "signature": "P Int -\u003e P a -\u003e P (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#psplitPlaces",
          "type": "function"
        },
        "index": {
          "description": "fmap toP of psplitPlaces psplitPlaces toP toP toP map toP bc def",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psplitPlaces",
          "normalized": "P Int-\u003eP a-\u003eP(P a)",
          "package": "hsc3-lang",
          "partial": "Places",
          "signature": "P Int-\u003eP a-\u003eP(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:psplitPlaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003esplitPlaces\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e psplitPlaces' (toP [1,2,3]) (pseries 1 1 6) == toP [[1],[2,3],[4,5,6]]\n psplitPlaces' (toP [1,2,3]) (toP ['a'..]) == toP [\"a\",\"bc\",\"def\"]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psplitPlaces'",
          "package": "hsc3-lang",
          "signature": "P Int -\u003e P a -\u003e P [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#psplitPlaces%27",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of splitPlaces psplitPlaces toP pseries toP psplitPlaces toP toP toP bc def",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psplitPlaces'",
          "normalized": "P Int-\u003eP a-\u003eP[a]",
          "package": "hsc3-lang",
          "partial": "Places'",
          "signature": "P Int-\u003eP a-\u003eP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:psplitPlaces-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePstretch.  SC3 pattern to do time stretching.  It is equal to\n \u003ccode\u003e\u003ca\u003epmul\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eK_stretch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let {d = pseq [pshuf '&#945;' [-7,-3,0,2,4,7] 2\n               ,pseq [0,1,2,3,4,5,6,7] 1] 1\n     ;p = pbind [(K_dur,0.15),(K_degree,d)]}\n in audition (pseq [p,pstretch 0.5 p,pstretch 2 p] inf)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pstretch",
          "package": "hsc3-lang",
          "signature": "P Field -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pstretch",
          "type": "function"
        },
        "index": {
          "description": "Pstretch SC3 pattern to do time stretching It is equal to pmul at stretch let pseq pshuf pseq pbind dur degree in audition pseq pstretch pstretch inf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pstretch",
          "normalized": "P Field-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P Field-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pstretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePstutter.  SC3 \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern to repeat each\n element of a pattern \u003cem\u003en\u003c/em\u003e times.\n\u003c/p\u003e\u003cpre\u003e \u003e Pstutter(2,Pseq([1,2,3],1)).asStream.all == [1,1,2,2,3,3]\n pstutter 2 (pseq [1,2,3] 1) == toP [1,1,2,2,3,3]\n\u003c/pre\u003e\u003cp\u003eThe count input may be a pattern.\n\u003c/p\u003e\u003cpre\u003e let {p = pseq [1,2] inf\n     ;q = pseq [1,2,3] 2}\n in pstutter p q == toP [1,2,2,3,1,1,2,3,3]\n\u003c/pre\u003e\u003cpre\u003e pstutter (toP [1,2,3]) (toP [4,5,6]) == toP [4,5,5,6,6,6]\n pstutter 2 (toP [4,5,6]) == toP [4,4,5,5,6,6]\n\u003c/pre\u003e\u003cp\u003eStutter scale degree and duration with the same random sequence.\n\u003c/p\u003e\u003cpre\u003e \u003e Pbind(\\n,Pwhite(3,10,inf),\n \u003e       \\degree,Pstutter(Pkey(\\n),Pwhite(-4,11,inf)),\n \u003e       \\dur,Pstutter(Pkey(\\n),Pwhite(0.05,0.4,inf)),\n \u003e       \\legato,0.3).play\n\u003c/pre\u003e\u003cpre\u003e let {n = pwhite '&#945;' 3 10 inf\n     ;p = [(K_degree,pstutter n (pwhitei '&#946;' (-4) 11 inf))\n          ,(K_dur,pstutter n (pwhite '&#947;' 0.05 0.4 inf))\n          ,(K_legato,0.3)]}\n in audition (pbind p)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pstutter",
          "package": "hsc3-lang",
          "signature": "P Int -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pstutter",
          "type": "function"
        },
        "index": {
          "description": "Pstutter SC3 implicitly repeating pattern to repeat each element of pattern times Pstutter Pseq asStream.all pstutter pseq toP The count input may be pattern let pseq inf pseq in pstutter toP pstutter toP toP toP pstutter toP toP Stutter scale degree and duration with the same random sequence Pbind Pwhite inf degree Pstutter Pkey Pwhite inf dur Pstutter Pkey Pwhite inf legato play let pwhite inf degree pstutter pwhitei inf dur pstutter pwhite inf legato in audition pbind",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pstutter",
          "normalized": "P Int-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P Int-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pstutter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePswitch.  Lifted \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let p = pswitch [pseq [1,2,3] 2,pseq [65,76] 1,800] (toP [2,2,0,1])\n in p == toP [800,800,1,2,3,1,2,3,65,76]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pswitch",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pswitch",
          "type": "function"
        },
        "index": {
          "description": "Pswitch Lifted switch let pswitch pseq pseq toP in toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pswitch",
          "normalized": "[P a]-\u003eP Int-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP Int-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePswitch1.  Lifted \u003cem\u003eimplicitly repeating\u003c/em\u003e \u003ccode\u003e\u003ca\u003eswitch1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e l = [Pseq([1,2,3],inf),Pseq([65,76],inf),8];\n \u003e p = Pswitch1(l,Pseq([2,2,0,1],3));\n \u003e p.asStream.all == [8,8,1,65,8,8,2,76,8,8,3,65];\n\u003c/pre\u003e\u003cpre\u003e let p = pswitch1 [pseq [1,2,3] inf\n                  ,pseq [65,76] inf\n                  ,8] (pseq [2,2,0,1] 6)\n in p == toP [8,8,1,65,8,8,2,76,8,8,3,65,8,8,1,76,8,8,2,65,8,8,3,76]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pswitch1",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pswitch1",
          "type": "function"
        },
        "index": {
          "description": "Pswitch1 Lifted implicitly repeating switch1 Pseq inf Pseq inf Pswitch1 Pseq p.asStream.all let pswitch1 pseq inf pseq inf pseq in toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pswitch1",
          "normalized": "[P a]-\u003eP Int-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP Int-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pswitch1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSynthdef\u003c/a\u003e\u003c/code\u003es can be used directly as an instrument using \u003ccode\u003e\u003ca\u003epsynth\u003c/a\u003e\u003c/code\u003e.\nThe default synthdef is at \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let sineSynth =\n   let {f = control KR \"freq\" 440\n       ;g = control KR \"gate\" 1\n       ;a = control KR \"amp\" 0.1\n       ;d = envASR 0.01 1 1 (EnvNum (-4))\n       ;e = envGen KR g a 0 1 RemoveSynth d\n       ;o = out 0 (sinOsc AR f 0 * e)}\n   in synthdef \"sine\" o\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_instr,psynth sineSynth)\n                 ,(K_degree,toP [0,2,4,7])\n                 ,(K_dur,0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psynth",
          "package": "hsc3-lang",
          "signature": "Synthdef -\u003e P Field",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#psynth",
          "type": "function"
        },
        "index": {
          "description": "Synthdef can be used directly as an instrument using psynth The default synthdef is at def let sineSynth let control KR freq control KR gate control KR amp envASR EnvNum envGen KR RemoveSynth out sinOsc AR in synthdef sine audition pbind instr psynth sineSynth degree toP dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "psynth",
          "normalized": "Synthdef-\u003eP Field",
          "package": "hsc3-lang",
          "signature": "Synthdef-\u003eP Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:psynth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epdrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e1\u003c/code\u003e.  Pattern variant of \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e.  Drops first\n element from pattern.  Note that the haskell \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e function is\n partial, although \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e is not.  \u003ccode\u003e\u003ca\u003eptake\u003c/a\u003e\u003c/code\u003e is equal to `pdrop 1`.\n\u003c/p\u003e\u003cpre\u003e tail [] == _|_\n drop 1 [] == []\n\u003c/pre\u003e\u003cpre\u003e ptail (toP [1,2]) == toP [2]\n ptail mempty == mempty\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptail",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptail",
          "type": "function"
        },
        "index": {
          "description": "pdrop Pattern variant of tail Drops first element from pattern Note that the haskell tail function is partial although drop is not ptake is equal to pdrop tail drop ptail toP toP ptail mempty mempty",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptail",
          "normalized": "P a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003etake_inf\u003c/a\u003e\u003c/code\u003e, see also \u003ccode\u003e\u003ca\u003epfinval\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ptake 5 (pseq [1,2,3] 2) == toP [1,2,3,1,2]\n ptake 5 (toP [1,2,3]) == toP [1,2,3]\n ptake 5 (pseq [1,2,3] inf) == toP [1,2,3,1,2]\n ptake 5 (pwhite '&#945;' 0 5 inf) == toP [5,2,1,2,0]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eptake\u003c/a\u003e\u003c/code\u003e does not extend the input pattern, unlike \u003ccode\u003e\u003ca\u003epser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ptake 5 (toP [1,2,3]) == toP [1,2,3]\n pser [1,2,3] 5 == toP [1,2,3,1,2]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptake",
          "package": "hsc3-lang",
          "signature": "Int -\u003e P a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptake",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of take inf see also pfinval ptake pseq toP ptake toP toP ptake pseq inf toP ptake pwhite inf toP Note that ptake does not extend the input pattern unlike pser ptake toP toP pser toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptake",
          "normalized": "Int-\u003eP a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "Int-\u003eP a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e patterns with indicated start \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptmerge",
          "package": "hsc3-lang",
          "signature": "(Time, P Event) -\u003e (Time, P Event) -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptmerge",
          "type": "function"
        },
        "index": {
          "description": "Merge two Event patterns with indicated start Time",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptmerge",
          "normalized": "(Time,P Event)-\u003e(Time,P Event)-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "(Time,P Event)-\u003e(Time,P Event)-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptmerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePtpar.  Merge a set of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e patterns each with indicated\n-- start \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eptpar\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003eppar\u003c/a\u003e\u003c/code\u003e which allows non-equal start times.\n\u003c/p\u003e\u003cpre\u003e let {f d p n = pbind [(K_dur,d),(K_param \"pan\",p),(K_midinote,n)]\n     ;a = f 0.2 (-1) (pseries 60 1 15)\n     ;b = f 0.15 0 (pseries 58 2 15)\n     ;c = f 0.1 1 (pseries 46 3 15)}\n in audition (ptpar [(0,a),(1,b),(2,c)])\n\u003c/pre\u003e\u003cpre\u003e let {d = pseq [pgeom 0.05 1.1 24,pgeom 0.5 0.909 24] 2\n     ;f n a p = pbind [(K_dur,d)\n                      ,(K_db,a)\n                      ,(K_param \"pan\",p)\n                      ,(K_midinote,pseq [n,n-4] inf)]}\n in audition (ptpar [(0,f 53 (-20) (-0.9))\n                    ,(2,f 60 (-23) (-0.3))\n                    ,(4,f 67 (-26) 0.3)\n                    ,(6,f 74 (-29) 0.9)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptpar",
          "package": "hsc3-lang",
          "signature": "[(Time, P Event)] -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptpar",
          "type": "function"
        },
        "index": {
          "description": "Ptpar Merge set of Event patterns each with indicated start Time ptpar is variant of ppar which allows non-equal start times let pbind dur param pan midinote pseries pseries pseries in audition ptpar let pseq pgeom pgeom pbind dur db param pan midinote pseq n-4 inf in audition ptpar",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptpar",
          "normalized": "[(Time,P Event)]-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "[(Time,P Event)]-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptpar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e L.transpose [[1,2],[3,4,5]] == [[1,3],[2,4],[5]]\n ptranspose [toP [1,2],toP [3,4,5]] == toP [[1,3],[2,4],[5]]\n\u003c/pre\u003e\u003cpre\u003e let p = ptranspose [pseq [1,2] inf,pseq [4,5] inf]\n in ptake 2 (pdrop (2^16) p) == toP [[1,4],[2,5]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptranspose",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptranspose",
          "type": "function"
        },
        "index": {
          "description": "Variant of transpose L.transpose ptranspose toP toP toP let ptranspose pseq inf pseq inf in ptake pdrop toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptranspose",
          "normalized": "[P a]-\u003eP[a]",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern variant of \u003ccode\u003e\u003ca\u003etranspose_st\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptranspose_st_repeat",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e P [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptranspose_st_repeat",
          "type": "function"
        },
        "index": {
          "description": "An implicitly repeating pattern variant of transpose st",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptranspose_st_repeat",
          "normalized": "[P a]-\u003eP[a]",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptranspose_st_repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let {f i e = (i + e,e * 2)\n     ;(r,p) = T.mapAccumL f 0 (toP [1,3,5])}\n in (r,p) == (9,toP [2,6,10])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptraverse",
          "package": "hsc3-lang",
          "signature": "(a -\u003e f b) -\u003e P a -\u003e f (P b)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptraverse",
          "type": "function"
        },
        "index": {
          "description": "Type specialised traverse let T.mapAccumL toP in toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptraverse",
          "normalized": "(a-\u003eb c)-\u003eP a-\u003eb(P c)",
          "package": "hsc3-lang",
          "signature": "(a-\u003ef b)-\u003eP a-\u003ef(P b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003etrigger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let {tr = pbool (toP [0,1,0,0,1,1])\n     ;p = ptrigger tr (toP [1,2,3])\n     ;r = [Nothing,Just 1,Nothing,Nothing,Just 2,Just 3]}\n in p == toP r\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptrigger",
          "package": "hsc3-lang",
          "signature": "P Bool -\u003e P a -\u003e P (Maybe a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptrigger",
          "type": "function"
        },
        "index": {
          "description": "Lifted trigger let tr pbool toP ptrigger tr toP Nothing Just Nothing Nothing Just Just in toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptrigger",
          "normalized": "P Bool-\u003eP a-\u003eP(Maybe a)",
          "package": "hsc3-lang",
          "signature": "P Bool-\u003eP a-\u003eP(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePtuple.  \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eptranspose_st_repeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e l = [Pseries(7,-1,8),3,Pseq([9,7,4,2],1),Pseq([4,2,0,0,-3],1)];\n \u003e p = Ptuple(l,1);\n \u003e p.asStream.all == [[7,3,9,4],[6,3,7,2],[5,3,4,0],[4,3,2,0]]\n\u003c/pre\u003e\u003cpre\u003e let p = ptuple [pseries 7 (-1) 8\n                ,3\n                ,pseq [9,7,4,2] 1\n                ,pseq [4,2,0,0,-3] 1] 1\n in p == toP [[7,3,9,4],[6,3,7,2],[5,3,4,0],[4,3,2,0]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptuple",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e P [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#ptuple",
          "type": "function"
        },
        "index": {
          "description": "Ptuple pseq of ptranspose st repeat Pseries Pseq Pseq Ptuple p.asStream.all let ptuple pseries pseq pseq in toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "ptuple",
          "normalized": "[P a]-\u003eInt-\u003eP[a]",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003eP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:ptuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-biased union of event patterns.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "punion",
          "package": "hsc3-lang",
          "signature": "P Event -\u003e P Event -\u003e P Event",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#punion",
          "type": "function"
        },
        "index": {
          "description": "Left-biased union of event patterns",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "punion",
          "normalized": "P Event-\u003eP Event-\u003eP Event",
          "package": "hsc3-lang",
          "signature": "P Event-\u003eP Event-\u003eP Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:punion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant on \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let p = punzip (pzip (toP [1,2,3]) (toP [4,5]))\n in p == (toP [1,2],toP [4,5])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "punzip",
          "package": "hsc3-lang",
          "signature": "P (a, b) -\u003e (P a, P b)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#punzip",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant on unzip let punzip pzip toP toP in toP toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "punzip",
          "normalized": "P(a,b)-\u003e(P a,P b)",
          "package": "hsc3-lang",
          "signature": "P(a,b)-\u003e(P a,P b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:punzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePwhite.  Lifted \u003ccode\u003e\u003ca\u003ewhite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pwhite '&#945;' 0 9 5 == toP [3,0,1,6,6]\n pwhite '&#945;' 0 9 5 - pwhite '&#945;' 0 9 5 == toP [0,0,0,0,0]\n\u003c/pre\u003e\u003cp\u003eThe pattern below is alternately lower and higher noise.\n\u003c/p\u003e\u003cpre\u003e let {l = pseq [0.0,9.0] inf\n     ;h = pseq [1.0,12.0] inf}\n in audition (pbind [(K_freq,pwhite' '&#945;' l h * 20 + 800)\n                    ,(K_dur,0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhite",
          "package": "hsc3-lang",
          "signature": "e -\u003e n -\u003e n -\u003e Int -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwhite",
          "type": "function"
        },
        "index": {
          "description": "Pwhite Lifted white pwhite toP pwhite pwhite toP The pattern below is alternately lower and higher noise let pseq inf pseq inf in audition pbind freq pwhite dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhite",
          "normalized": "a-\u003eb-\u003eb-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003en-\u003en-\u003eInt-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003cem\u003eimplicitly repeating\u003c/em\u003e \u003ccode\u003e\u003ca\u003epwhite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pwhite' '&#945;' 0 (pseq [9,19] 3) == toP [3,0,1,6,6,15]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhite'",
          "package": "hsc3-lang",
          "signature": "e -\u003e P n -\u003e P n -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwhite%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted implicitly repeating pwhite pwhite pseq toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhite'",
          "normalized": "a-\u003eP b-\u003eP b-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003eP n-\u003eP n-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwhite-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epwhite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhiteM",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e Int -\u003e m (P n)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwhiteM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of pwhite",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhiteM",
          "normalized": "a-\u003ea-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003eInt-\u003em(P n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwhiteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003ewhitei\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e pwhitei '&#945;' 1 9 5 == toP [5,1,7,7,8]\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pwhitei '&#945;' 0 8 inf),(K_dur,0.15)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhitei",
          "package": "hsc3-lang",
          "signature": "e -\u003e n -\u003e n -\u003e Int -\u003e P n",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwhitei",
          "type": "function"
        },
        "index": {
          "description": "Lifted whitei pwhitei toP audition pbind degree pwhitei inf dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhitei",
          "normalized": "a-\u003eb-\u003eb-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003en-\u003en-\u003eInt-\u003eP n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwhitei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epwhitei\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhiteiM",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e Int -\u003e m (P n)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwhiteiM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of pwhitei",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwhiteiM",
          "normalized": "a-\u003ea-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003eInt-\u003em(P n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwhiteiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePwrand.  Lifted \u003ccode\u003e\u003ca\u003ewrand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let w = C.normalizeSum [12,6,3]\n in pwrand '&#945;' [1,2,3] w 6 == toP [2,1,2,3,3,2]\n\u003c/pre\u003e\u003cpre\u003e \u003e r = Pwrand.new([1,2,Pseq([3,4],1)],[1,3,5].normalizeSum,6);\n \u003e p = Pseed(Pn(100,1),r);\n \u003e p.asStream.all == [2,3,4,1,3,4,3,4,2]\n\u003c/pre\u003e\u003cpre\u003e let w = C.normalizeSum [1,3,5]\n in pwrand '&#950;' [1,2,pseq [3,4] 1] w 6 == toP [3,4,2,2,3,4,1,3,4]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,Pwrand((0..7),[4,1,3,1,3,2,1].normalizeSum,inf),\n \u003e       \\dur,0.25).play;\n\u003c/pre\u003e\u003cpre\u003e let {w = C.normalizeSum [4,1,3,1,3,2,1]\n     ;d = pwrand '&#945;' (C.series 7 0 1) w inf}\n in audition (pbind [(K_degree,d),(K_dur,0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwrand",
          "package": "hsc3-lang",
          "signature": "e -\u003e [P a] -\u003e [Double] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwrand",
          "type": "function"
        },
        "index": {
          "description": "Pwrand Lifted wrand let C.normalizeSum in pwrand toP Pwrand.new Pseq normalizeSum Pseed Pn p.asStream.all let C.normalizeSum in pwrand pseq toP Pbind degree Pwrand normalizeSum inf dur play let C.normalizeSum pwrand C.series inf in audition pbind degree dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwrand",
          "normalized": "a-\u003e[P b]-\u003e[Double]-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003e[P a]-\u003e[Double]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epwrand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwrandM",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e [Double] -\u003e Int -\u003e m (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwrandM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of pwrand",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwrandM",
          "normalized": "[P a]-\u003e[Double]-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003e[Double]-\u003eInt-\u003em(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwrandM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePwrap.  Type specialised \u003ccode\u003e\u003ca\u003efwrap\u003c/a\u003e\u003c/code\u003e, see also \u003ccode\u003e\u003ca\u003epfold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e p = Pwrap(Pgeom(200,1.25,9),200,1000.0);\n \u003e r = p.asStream.all.collect({|n| n.round});\n \u003e r == [200,250,313,391,488,610,763,954,392];\n\u003c/pre\u003e\u003cpre\u003e let p = fmap roundE (pwrap (pgeom 200 1.25 9) 200 1000)\n in p == toP [200,250,312,391,488,610,763,954,391]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwrap",
          "package": "hsc3-lang",
          "signature": "P a -\u003e a -\u003e a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pwrap",
          "type": "function"
        },
        "index": {
          "description": "Pwrap Type specialised fwrap see also pfold Pwrap Pgeom p.asStream.all.collect n.round let fmap roundE pwrap pgeom in toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pwrap",
          "normalized": "P a-\u003ea-\u003ea-\u003eP a",
          "package": "hsc3-lang",
          "signature": "P a-\u003ea-\u003ea-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePxrand.  Lifted \u003ccode\u003e\u003ca\u003exrand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let p = pxrand '&#945;' [1,toP [2,3],toP [4,5,6]] 9\n in p == toP [4,5,6,2,3,4,5,6,1]\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\note,Pxrand([0,1,5,7],inf),\\dur,0.25).play\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_note,pxrand '&#945;' [0,1,5,7] inf),(K_dur,0.25)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pxrand",
          "package": "hsc3-lang",
          "signature": "e -\u003e [P a] -\u003e Int -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pxrand",
          "type": "function"
        },
        "index": {
          "description": "Pxrand Lifted xrand let pxrand toP toP in toP Pbind note Pxrand inf dur play audition pbind note pxrand inf dur",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pxrand",
          "normalized": "a-\u003e[P b]-\u003eInt-\u003eP b",
          "package": "hsc3-lang",
          "signature": "e-\u003e[P a]-\u003eInt-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pxrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftUId\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epxrand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pxrandM",
          "package": "hsc3-lang",
          "signature": "[P a] -\u003e Int -\u003e m (P a)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pxrandM",
          "type": "function"
        },
        "index": {
          "description": "liftUId of pxrand",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pxrandM",
          "normalized": "[P a]-\u003eInt-\u003eb(P a)",
          "package": "hsc3-lang",
          "signature": "[P a]-\u003eInt-\u003em(P a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pxrandM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern variant of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zip (return 0) (return 1) == return (0,1)\n pzip (undecided 3) (undecided 4) == undecided (3,4)\n pzip 0 1 == undecided (0,1)\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003epzip\u003c/a\u003e\u003c/code\u003e is otherwise like haskell \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e, ie. truncating.\n\u003c/p\u003e\u003cpre\u003e zip [1,2] [0] == [(1,0)]\n pzip (toP [1,2]) (return 0) == toP [(1,0)]\n pzip (toP [1,2]) (pure 0) == toP [(1,0),(2,0)]\n pzip (toP [1,2]) 0 == toP [(1,0),(2,0)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzip",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P b -\u003e P (a, b)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pzip",
          "type": "function"
        },
        "index": {
          "description": "An implicitly repeating pattern variant of zip zip return return return pzip undecided undecided undecided pzip undecided Note that pzip is otherwise like haskell zip ie truncating zip pzip toP return toP pzip toP pure toP pzip toP toP",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzip",
          "normalized": "P a-\u003eP b-\u003eP(a,b)",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP b-\u003eP(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern variant of \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzip3",
          "package": "hsc3-lang",
          "signature": "P a -\u003e P b -\u003e P c -\u003e P (a, b, c)",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pzip3",
          "type": "function"
        },
        "index": {
          "description": "Pattern variant of zip3",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzip3",
          "normalized": "P a-\u003eP b-\u003eP c-\u003eP(a,b,c)",
          "package": "hsc3-lang",
          "signature": "P a-\u003eP b-\u003eP c-\u003eP(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern variant of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zipWith (*) [1,2,3] [5,6] == [5,12]\n pzipWith (*) (toP [1,2,3]) (toP [5,6]) == toP [5,12]\n\u003c/pre\u003e\u003cp\u003eIt is the basis for lifting binary operators to patterns.\n\u003c/p\u003e\u003cpre\u003e toP [1,2,3] * toP [5,6] == toP [5,12]\n\u003c/pre\u003e\u003cpre\u003e let p = pzipWith (,) (pseq [1,2] 2) (pseq [3,4] inf)\n in p == toP [(1,3),(2,4),(1,3),(2,4)]\n\u003c/pre\u003e\u003cpre\u003e zipWith (,) (return 0) (return 1) == return (0,1)\n pzipWith (,) 0 1 == undecided (0,1)\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzipWith",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b -\u003e c) -\u003e P a -\u003e P b -\u003e P c",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pzipWith",
          "type": "function"
        },
        "index": {
          "description": "An implicitly repeating pattern variant of zipWith zipWith pzipWith toP toP toP It is the basis for lifting binary operators to patterns toP toP toP let pzipWith pseq pseq inf in toP zipWith return return return pzipWith undecided",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eP a-\u003eP b-\u003eP c",
          "package": "hsc3-lang",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eP a-\u003eP b-\u003eP c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eimplicitly repeating\u003c/em\u003e pattern variant of \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzipWith3",
          "package": "hsc3-lang",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e P a -\u003e P b -\u003e P c -\u003e P d",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#pzipWith3",
          "type": "function"
        },
        "index": {
          "description": "An implicitly repeating pattern variant of zipWith3",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "pzipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eP a-\u003eP b-\u003eP c-\u003eP d",
          "package": "hsc3-lang",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eP a-\u003eP b-\u003eP c-\u003eP d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:pzipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic list to pattern function, inverse is \u003ccode\u003e\u003ca\u003eunP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e unP (toP \"str\") == \"str\"\n\u003c/pre\u003e\u003cpre\u003e audition (pbind [(K_degree,pxrand '&#945;' [0,1,5,7] inf)\n                 ,(K_dur,toP [0.1,0.2,0.1])])\n\u003c/pre\u003e\u003cpre\u003e \u003e Pbind(\\degree,(Pxrand([0,1,5,7],inf))\n \u003e      ,\\dur,Pseq([0.1,0.2,0.1],1)).play\n\u003c/pre\u003e\u003cp\u003eThe pattern above is finite, \u003ccode\u003e\u003ca\u003etoP\u003c/a\u003e\u003c/code\u003e can sometimes be replaced with\n \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e audition (pbind [(K_degree,pxrand '&#945;' [0,1,5,7] inf)\n                 ,(K_dur,pseq [0.1,0.2,0.1] inf)])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "toP",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#toP",
          "type": "function"
        },
        "index": {
          "description": "The basic list to pattern function inverse is unP unP toP str str audition pbind degree pxrand inf dur toP Pbind degree Pxrand inf dur Pseq play The pattern above is finite toP can sometimes be replaced with pseq audition pbind degree pxrand inf dur pseq inf",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "toP",
          "normalized": "[a]-\u003eP a",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:toP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialised \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eundecided\u003c/a\u003e\u003c/code\u003e values are singular.\n\u003c/p\u003e\u003cpre\u003e F.toList (undecided 'a') == ['a']\n unP (return 'a') == ['a']\n \"aaa\" `L.isPrefixOf` unP (pure 'a')\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "unP",
          "package": "hsc3-lang",
          "signature": "P a -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#unP",
          "type": "function"
        },
        "index": {
          "description": "Type specialised toList undecided values are singular F.toList undecided unP return aaa L.isPrefixOf unP pure",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "unP",
          "normalized": "P a-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "P a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:unP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "unP_either",
          "package": "hsc3-lang",
          "signature": "Either a [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "unP_either",
          "normalized": "Either a[a]",
          "package": "hsc3-lang",
          "signature": "Either a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:unP_either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eunP\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003e\u003ca\u003eundecided\u003c/a\u003e\u003c/code\u003e values are \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e\u003cpre\u003e unP_repeat (return 'a') == ['a']\n take 2 (unP_repeat (undecided 'a')) == ['a','a']\n take 2 (unP_repeat (pure 'a')) == ['a','a']\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "unP_repeat",
          "package": "hsc3-lang",
          "signature": "P a -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#unP_repeat",
          "type": "function"
        },
        "index": {
          "description": "Variant of unP where undecided values are repeat ed unP repeat return take unP repeat undecided take unP repeat pure",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "unP_repeat",
          "normalized": "P a-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "P a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:unP_repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a value to a pattern deferring deciding if the constructor\n ought to be \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e to the consuming function.  The\n pattern instances for \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e make\n \u003ccode\u003e\u003ca\u003eundecided\u003c/a\u003e\u003c/code\u003e patterns.  In general \u003cem\u003ehorizontal\u003c/em\u003e functions (ie. \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e)\n resolve using \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003cem\u003evertical\u003c/em\u003e functions (ie. \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e) resolve\n using \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e 1 \u003c\u003e toP [2,3] == return 1 \u003c\u003e toP [2,3]\n toP [1,2] * 3  == toP [1,2] * pure 3\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "undecided",
          "package": "hsc3-lang",
          "signature": "a -\u003e P a",
          "source": "src/Sound-SC3-Lang-Pattern-ID.html#undecided",
          "type": "function"
        },
        "index": {
          "description": "Lift value to pattern deferring deciding if the constructor ought to be pure or return to the consuming function The pattern instances for fromInteger and fromRational make undecided patterns In general horizontal functions ie resolve using return and vertical functions ie zip resolve using pure toP return toP toP toP pure",
          "hierarchy": "Sound SC3 Lang Pattern ID",
          "module": "Sound.SC3.Lang.Pattern.ID",
          "name": "undecided",
          "normalized": "a-\u003eP a",
          "package": "hsc3-lang",
          "signature": "a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-ID.html#v:undecided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eList variants of \u003ccode\u003eSC3\u003c/code\u003e pattern functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "List",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Pattern-List.html",
          "type": "module"
        },
        "index": {
          "description": "List variants of SC3 pattern functions",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "List",
          "package": "hsc3-lang",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e that returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e unless \u003cem\u003eall\u003c/em\u003e\n elements are \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map all_just [[Nothing,Just 1],[Just 0,Just 1]] == [Nothing,Just [0,1]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "all_just",
          "package": "hsc3-lang",
          "signature": "[Maybe a] -\u003e Maybe [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#all_just",
          "type": "function"
        },
        "index": {
          "description": "Variant of catMaybes that returns Nothing unless all elements are Just map all just Nothing Just Just Just Nothing Just",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "all_just",
          "normalized": "[Maybe a]-\u003eMaybe[a]",
          "package": "hsc3-lang",
          "signature": "[Maybe a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:all_just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e0\u003c/code\u003e.  Values greater than zero are \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e and zero and\n negative values are \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "bool",
          "package": "hsc3-lang",
          "signature": "n -\u003e Bool",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#bool",
          "type": "function"
        },
        "index": {
          "description": "Values greater than zero are True and zero and negative values are False",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "bool",
          "normalized": "a-\u003eBool",
          "package": "hsc3-lang",
          "signature": "n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePbrown.  SC3 pattern to generate psuedo-brownian motion.\n\u003c/p\u003e\u003cpre\u003e [4,4,1,8,5] `isPrefixOf` brown '&#945;' 0 9 15\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "brown",
          "package": "hsc3-lang",
          "signature": "e -\u003e n -\u003e n -\u003e n -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#brown",
          "type": "function"
        },
        "index": {
          "description": "Pbrown SC3 pattern to generate psuedo-brownian motion isPrefixOf brown",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "brown",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003en-\u003en-\u003en-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrown noise with list inputs.\n\u003c/p\u003e\u003cpre\u003e let l = brown' '&#945;' (repeat 1) (repeat 700) (cycle [1,20])\n in [415,419,420,428] `isPrefixOf` l\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "brown'",
          "package": "hsc3-lang",
          "signature": "e -\u003e [n] -\u003e [n] -\u003e [n] -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#brown%27",
          "type": "function"
        },
        "index": {
          "description": "Brown noise with list inputs let brown repeat repeat cycle in isPrefixOf",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "brown'",
          "normalized": "a-\u003e[b]-\u003e[b]-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003e[n]-\u003e[n]-\u003e[n]-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:brown-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying \u003ccode\u003e\u003ca\u003ebrown'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "brown_",
          "package": "hsc3-lang",
          "signature": "(n, n, n) -\u003e (n, g) -\u003e (n, g)",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#brown_",
          "type": "function"
        },
        "index": {
          "description": "Underlying brown",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "brown_",
          "normalized": "(a,a,a)-\u003e(a,b)-\u003e(a,b)",
          "package": "hsc3-lang",
          "signature": "(n,n,n)-\u003e(n,g)-\u003e(n,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:brown_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e values following each \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre\u003e countpost (map bool [1,0,1,0,0,0,1,1]) == [1,3,0,0]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "countpost",
          "package": "hsc3-lang",
          "signature": "[Bool] -\u003e [Int]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#countpost",
          "type": "function"
        },
        "index": {
          "description": "Count the number of False values following each True value countpost map bool",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "countpost",
          "normalized": "[Bool]-\u003e[Int]",
          "package": "hsc3-lang",
          "signature": "[Bool]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:countpost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e values preceding each \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre\u003e countpre (fbool [0,0,1,0,0,0,1,1]) == [2,3,0]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "countpre",
          "package": "hsc3-lang",
          "signature": "[Bool] -\u003e [Int]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#countpre",
          "type": "function"
        },
        "index": {
          "description": "Count the number of False values preceding each True value countpre fbool",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "countpre",
          "normalized": "[Bool]-\u003e[Int]",
          "package": "hsc3-lang",
          "signature": "[Bool]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:countpre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePdurStutter.  SC3 pattern to partition a value into \u003cem\u003en\u003c/em\u003e equal\n subdivisions.  Subdivides each duration by each stutter and yields\n that value stutter times.  A stutter of \u003ccode\u003e0\u003c/code\u003e will skip the duration\n value, a stutter of \u003ccode\u003e1\u003c/code\u003e yields the duration value unaffected.\n\u003c/p\u003e\u003cpre\u003e let {s = [1,1,1,1,1,2,2,2,2,2,0,1,3,4,0]\n     ;d = [0.5,1,2,0.25,0.25]}\n in durStutter s d == [0.5,1.0,2.0,0.25,0.25]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "durStutter",
          "package": "hsc3-lang",
          "signature": "[Int] -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#durStutter",
          "type": "function"
        },
        "index": {
          "description": "PdurStutter SC3 pattern to partition value into equal subdivisions Subdivides each duration by each stutter and yields that value stutter times stutter of will skip the duration value stutter of yields the duration value unaffected let in durStutter",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "durStutter",
          "normalized": "[Int]-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "partial": "Stutter",
          "signature": "[Int]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:durStutter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePexprand.  SC3 pattern of random values that follow a exponential\n distribution.\n\u003c/p\u003e\u003cpre\u003e exprand '&#945;' 0.0001 1 10\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "exprand",
          "package": "hsc3-lang",
          "signature": "e -\u003e a -\u003e a -\u003e Int -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#exprand",
          "type": "function"
        },
        "index": {
          "description": "Pexprand SC3 pattern of random values that follow exponential distribution exprand",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "exprand",
          "normalized": "a-\u003eb-\u003eb-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003ea-\u003ea-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:exprand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ebool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fbool [2,1,0,-1] == [True,True,False,False]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "fbool",
          "package": "hsc3-lang",
          "signature": "f a -\u003e f Bool",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#fbool",
          "type": "function"
        },
        "index": {
          "description": "fmap of bool fbool True True False False",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "fbool",
          "normalized": "a b-\u003ea Bool",
          "package": "hsc3-lang",
          "signature": "f a-\u003ef Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:fbool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSC3 pattern to fold values to lie within range (as opposed to\n wrap and clip).  This is \u003cem\u003enot\u003c/em\u003e related to \u003ca\u003eData.Foldable\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e ffold [10,11,12,-6,-7,-8] (-7) 11 == [10,11,10,-6,-7,-6]\n\u003c/pre\u003e\u003cp\u003eThe underlying primitive is the \u003ccode\u003e\u003ca\u003efold_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cpre\u003e let f n = S.fold_ n (-7) 11\n in map f [10,11,12,-6,-7,-8] == [10,11,10,-6,-7,-6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "ffold",
          "package": "hsc3-lang",
          "signature": "f a -\u003e a -\u003e a -\u003e f a",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#ffold",
          "type": "function"
        },
        "index": {
          "description": "SC3 pattern to fold values to lie within range as opposed to wrap and clip This is not related to Data.Foldable ffold The underlying primitive is the fold function let S.fold in map",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "ffold",
          "normalized": "a b-\u003eb-\u003eb-\u003ea b",
          "package": "hsc3-lang",
          "signature": "f a-\u003ea-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:ffold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePfuncn.  Variant of the SC3 pattern that evaluates a closure at\n each step that has a \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e form.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "funcn",
          "package": "hsc3-lang",
          "signature": "e -\u003e (StdGen -\u003e (n, StdGen)) -\u003e Int -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#funcn",
          "type": "function"
        },
        "index": {
          "description": "Pfuncn Variant of the SC3 pattern that evaluates closure at each step that has StdGen form",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "funcn",
          "normalized": "a-\u003e(StdGen-\u003e(b,StdGen))-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003e(StdGen-\u003e(n,StdGen))-\u003eInt-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:funcn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying \u003ccode\u003e\u003ca\u003efuncn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "funcn'",
          "package": "hsc3-lang",
          "signature": "g -\u003e (g -\u003e (n, g)) -\u003e Int -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#funcn%27",
          "type": "function"
        },
        "index": {
          "description": "Underlying funcn",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "funcn'",
          "normalized": "a-\u003e(a-\u003e(b,a))-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "g-\u003e(g-\u003e(n,g))-\u003eInt-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:funcn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSC3 pattern to constrain the range of output values by wrapping,\n the primitive is \u003ccode\u003e\u003ca\u003egenericWrap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let p = fmap round (fwrap (geom 200 1.2 10) 200 1000)\n in p == [200,240,288,346,415,498,597,717,860,231]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "fwrap",
          "package": "hsc3-lang",
          "signature": "f a -\u003e a -\u003e a -\u003e f a",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#fwrap",
          "type": "function"
        },
        "index": {
          "description": "SC3 pattern to constrain the range of output values by wrapping the primitive is genericWrap let fmap round fwrap geom in",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "fwrap",
          "normalized": "a b-\u003eb-\u003eb-\u003ea b",
          "package": "hsc3-lang",
          "signature": "f a-\u003ea-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:fwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePgeom.  \u003ccode\u003e\u003ca\u003egeom\u003c/a\u003e\u003c/code\u003e with arguments re-ordered.\n\u003c/p\u003e\u003cpre\u003e geom 3 6 5 == [3,18,108,648,3888]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "geom",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e Int -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#geom",
          "type": "function"
        },
        "index": {
          "description": "Pgeom geom with arguments re-ordered geom",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "geom",
          "normalized": "a-\u003ea-\u003eInt-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:geom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample and hold initial value.\n\u003c/p\u003e\u003cpre\u003e hold [] == []\n hold [1..5] == [1,1,1,1,1]\n hold [1,undefined] == [1,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "hold",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#hold",
          "type": "function"
        },
        "index": {
          "description": "Sample and hold initial value hold hold hold undefined",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "hold",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePif.  Consume values from \u003cem\u003eq\u003c/em\u003e or \u003cem\u003er\u003c/em\u003e according to \u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e if_demand [True,False,True] [1,3] [2] == [1,2,3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "if_demand",
          "package": "hsc3-lang",
          "signature": "[Bool] -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#if_demand",
          "type": "function"
        },
        "index": {
          "description": "Pif Consume values from or according to if demand True False True",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "if_demand",
          "normalized": "[Bool]-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[Bool]-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:if_demand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying \u003ccode\u003e\u003ca\u003eif_demand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "if_rec",
          "package": "hsc3-lang",
          "signature": "([Bool], [a], [a]) -\u003e Maybe (a, ([Bool], [a], [a]))",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#if_rec",
          "type": "function"
        },
        "index": {
          "description": "Underlying if demand",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "if_rec",
          "normalized": "([Bool],[a],[a])-\u003eMaybe(a,([Bool],[a],[a]))",
          "package": "hsc3-lang",
          "signature": "([Bool],[a],[a])-\u003eMaybe(a,([Bool],[a],[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:if_rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e variant.\n\u003c/p\u003e\u003cpre\u003e if_zip [True,False,True] [1,3] [2] == [1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "if_zip",
          "package": "hsc3-lang",
          "signature": "[Bool] -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#if_zip",
          "type": "function"
        },
        "index": {
          "description": "zip3 variant if zip True False True",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "if_zip",
          "normalized": "[Bool]-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[Bool]-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:if_zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN-ary variant of \u003ccode\u003e\u003ca\u003einterleave2\u003c/a\u003e\u003c/code\u003e, ie. \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e interleave [whitei '&#945;' 0 4 3,whitei '&#946;' 5 9 3] == [3,7,0,8,1,6]\n [1..9] `isPrefixOf` interleave [[1,4..],[2,5..],[3,6..]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "interleave",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "N-ary variant of interleave2 ie concat of transpose interleave whitei whitei isPrefixOf interleave",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "interleave",
          "normalized": "[[a]]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave elements from two lists.  If one list ends the other\n continues until it also ends.\n\u003c/p\u003e\u003cpre\u003e interleave2 [1,2,3,1,2,3] [4,5,6,7] == [1,4,2,5,3,6,1,7,2,3]\n [1..9] `isPrefixOf` interleave2 [1,3..] [2,4..]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "interleave2",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#interleave2",
          "type": "function"
        },
        "index": {
          "description": "Interleave elements from two lists If one list ends the other continues until it also ends interleave2 isPrefixOf interleave2",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "interleave2",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:interleave2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map (lindex \"str\") [2,3] == [Just 'r',Nothing]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "lindex",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Int -\u003e Maybe a",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#lindex",
          "type": "function"
        },
        "index": {
          "description": "Maybe variant of map lindex str Just Nothing",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "lindex",
          "normalized": "[a]-\u003eInt-\u003eMaybe a",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eInt-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:lindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e, for lists this is \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e [1,2,3,1,2] `isPrefixOf` take 5 (mcycle [1,2,3])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "mcycle",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#mcycle",
          "type": "function"
        },
        "index": {
          "description": "mconcat of repeat for lists this is cycle isPrefixOf take mcycle",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "mcycle",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:mcycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrand.  Random elements of \u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e rand' '&#945;' [1..9] 9 == [3,9,2,9,4,7,4,3,8]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rand'",
          "package": "hsc3-lang",
          "signature": "e -\u003e [a] -\u003e Int -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#rand%27",
          "type": "function"
        },
        "index": {
          "description": "Prand Random elements of rand",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rand'",
          "normalized": "a-\u003e[b]-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003e[a]-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:rand-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_l",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#rorate_l",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_l",
          "normalized": "[[a]]-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:rorate_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_l'",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e a -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#rorate_l%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_l'",
          "normalized": "[a]-\u003ea-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:rorate_l-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_n",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#rorate_n",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_n",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:rorate_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_n'",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#rorate_n%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rorate_n'",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:rorate_n-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove successive duplicates.\n\u003c/p\u003e\u003cpre\u003e rsd (stutter (repeat 2) [1,2,3]) == [1,2,3]\n rsd [1,2,3,1,2,3] == [1,2,3,1,2,3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rsd",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#rsd",
          "type": "function"
        },
        "index": {
          "description": "Remove successive duplicates rsd stutter repeat rsd",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "rsd",
          "normalized": "[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:rsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList section with \u003cem\u003ewrapped\u003c/em\u003e indices.\n\u003c/p\u003e\u003cpre\u003e segment [0..4] 5 (3,5) == [3,4,0]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "segment",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Int -\u003e (Int, Int) -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#segment",
          "type": "function"
        },
        "index": {
          "description": "List section with wrapped indices segment",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "segment",
          "normalized": "[a]-\u003eInt-\u003e(Int,Int)-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eInt-\u003e(Int,Int)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePseq.  \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e seq' [return 1,[2,3],return 4] 2 == [1,2,3,4,1,2,3,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "seq'",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e Int -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#seq%27",
          "type": "function"
        },
        "index": {
          "description": "Pseq concat of replicate of concat seq return return",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "seq'",
          "normalized": "[[a]]-\u003eInt-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:seq-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePslide.  SC3 pattern to slide over a list of values.\n\u003c/p\u003e\u003cpre\u003e slide [1,2,3,4] 4 3 1 0 True == [1,2,3,2,3,4,3,4,1,4,1,2]\n slide [1,2,3,4,5] 3 3 (-1) 0 True == [1,2,3,5,1,2,4,5,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "slide",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e Bool -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#slide",
          "type": "function"
        },
        "index": {
          "description": "Pslide SC3 pattern to slide over list of values slide True slide True",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "slide",
          "normalized": "[a]-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eBool-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eBool-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePstutter.  Repeat each element of a pattern \u003cem\u003en\u003c/em\u003e times.\n\u003c/p\u003e\u003cpre\u003e stutter [1,2,3] [4,5,6] == [4,5,5,6,6,6]\n stutter (repeat 2) [4,5,6] == [4,4,5,5,6,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "stutter",
          "package": "hsc3-lang",
          "signature": "[Int] -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#stutter",
          "type": "function"
        },
        "index": {
          "description": "Pstutter Repeat each element of pattern times stutter stutter repeat",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "stutter",
          "normalized": "[Int]-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[Int]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:stutter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePswitch.  SC3 pattern to select elements from a list of patterns\n by a pattern of indices.\n\u003c/p\u003e\u003cpre\u003e let r = switch [[1,2,3,1,2,3],[65,76],[800]] [2,2,0,1]\n in r == [800,800,1,2,3,1,2,3,65,76]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "switch",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [Int] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Pswitch SC3 pattern to select elements from list of patterns by pattern of indices let switch in",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "switch",
          "normalized": "[[a]]-\u003e[Int]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003e[Int]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePswitch1.  SC3 pattern that uses a pattern of indices to select\n which pattern to retrieve the next value from.  Only one value is\n selected from each pattern.  This is in comparison to \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e,\n which embeds the pattern in its entirety.\n\u003c/p\u003e\u003cpre\u003e let p = switch1 [(cycle [1,2,3])\n                 ,(cycle [65,76])\n                 ,repeat 8] (concat (replicate 6 [2,2,0,1]))\n in p == [8,8,1,65,8,8,2,76,8,8,3,65,8,8,1,76,8,8,2,65,8,8,3,76]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "switch1",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [Int] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#switch1",
          "type": "function"
        },
        "index": {
          "description": "Pswitch1 SC3 pattern that uses pattern of indices to select which pattern to retrieve the next value from Only one value is selected from each pattern This is in comparison to switch which embeds the pattern in its entirety let switch1 cycle cycle repeat concat replicate in",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "switch1",
          "normalized": "[[a]]-\u003e[Int]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003e[Int]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:switch1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003cem\u003en\u003c/em\u003e is \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e this is \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e, else it is \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "take_inf",
          "package": "hsc3-lang",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#take_inf",
          "type": "function"
        },
        "index": {
          "description": "If is maxBound this is id else it is take",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "take_inf",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:take_inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e for \u003cem\u003efixed width\u003c/em\u003e interior lists.  Holes\n are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e transpose_fw undefined [] == []\n\u003c/pre\u003e\u003cpre\u003e transpose [[1,3],[2,4]] == [[1,2],[3,4]]\n transpose_fw 2 [[1,3],[2,4]] == [[Just 1,Just 2],[Just 3,Just 4]]\n\u003c/pre\u003e\u003cpre\u003e transpose [[1,5],[2],[3,7]] == [[1,2,3],[5,7]]\n\u003c/pre\u003e\u003cpre\u003e transpose_fw 2 [[1,4],[2],[3,6]] == [[Just 1,Just 2,Just 3]\n                                     ,[Just 4,Nothing,Just 6]]\n\u003c/pre\u003e\u003cp\u003eThis function is more productive than \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e for the case of\n an infinite list of finite lists.\n\u003c/p\u003e\u003cpre\u003e map head (transpose_fw 4 (repeat [1..4])) == map Just [1,2,3,4]\n map head (transpose (repeat [1..4])) == _|_\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_fw",
          "package": "hsc3-lang",
          "signature": "Int -\u003e [[a]] -\u003e [[Maybe a]]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#transpose_fw",
          "type": "function"
        },
        "index": {
          "description": "Variant of transpose for fixed width interior lists Holes are represented by Nothing transpose fw undefined transpose transpose fw Just Just Just Just transpose transpose fw Just Just Just Just Nothing Just This function is more productive than transpose for the case of an infinite list of finite lists map head transpose fw repeat map Just map head transpose repeat",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_fw",
          "normalized": "Int-\u003e[[a]]-\u003e[[Maybe a]]",
          "package": "hsc3-lang",
          "signature": "Int-\u003e[[a]]-\u003e[[Maybe a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:transpose_fw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etranspose_fw\u003c/a\u003e\u003c/code\u003e with default value for holes.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_fw_def",
          "package": "hsc3-lang",
          "signature": "a -\u003e Int -\u003e [[a]] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#transpose_fw_def",
          "type": "function"
        },
        "index": {
          "description": "Variant of transpose fw with default value for holes",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_fw_def",
          "normalized": "a-\u003eInt-\u003e[[a]]-\u003e[[a]]",
          "package": "hsc3-lang",
          "signature": "a-\u003eInt-\u003e[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:transpose_fw_def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etranspose_fw_def\u003c/a\u003e\u003c/code\u003e deriving \u003cem\u003ewidth\u003c/em\u003e from first element.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_fw_def'",
          "package": "hsc3-lang",
          "signature": "a -\u003e [[a]] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#transpose_fw_def%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of transpose fw def deriving width from first element",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_fw_def'",
          "normalized": "a-\u003e[[a]]-\u003e[[a]]",
          "package": "hsc3-lang",
          "signature": "a-\u003e[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:transpose_fw_def-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e variant, halting when first hole appears.\n\u003c/p\u003e\u003cpre\u003e trs [[1,2,3],[4,5,6],[7,8]] == [[1,4,7],[2,5,8]]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_st",
          "package": "hsc3-lang",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#transpose_st",
          "type": "function"
        },
        "index": {
          "description": "transpose variant halting when first hole appears trs",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "transpose_st",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "hsc3-lang",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:transpose_st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern where the \u003ccode\u003etr\u003c/code\u003e pattern determines the rate at which\n values are read from the \u003ccode\u003ex\u003c/code\u003e pattern.  For each sucessive true\n value at \u003ccode\u003etr\u003c/code\u003e the output is a (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e e) of each succesive element at\n x.  False values at \u003ccode\u003etr\u003c/code\u003e generate \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e\u003cpre\u003e let l = trigger (map toEnum [0,1,0,0,1,1]) [1,2,3]\n in l == [Nothing,Just 1,Nothing,Nothing,Just 2,Just 3]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "trigger",
          "package": "hsc3-lang",
          "signature": "[Bool] -\u003e [a] -\u003e [Maybe a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#trigger",
          "type": "function"
        },
        "index": {
          "description": "Pattern where the tr pattern determines the rate at which values are read from the pattern For each sucessive true value at tr the output is Just of each succesive element at False values at tr generate Nothing values let trigger map toEnum in Nothing Just Nothing Nothing Just Just",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "trigger",
          "normalized": "[Bool]-\u003e[a]-\u003e[Maybe a]",
          "package": "hsc3-lang",
          "signature": "[Bool]-\u003e[a]-\u003e[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003e:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map uncons [[],1:[]] == [(Nothing,[]),(Just 1,[])]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "uncons",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e (Maybe a, [a])",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Inverse of map uncons Nothing Just",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "uncons",
          "normalized": "[a]-\u003e(Maybe a,[a])",
          "package": "hsc3-lang",
          "signature": "[a]-\u003e(Maybe a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePwhite.  SC3 pattern to generate a uniform linear distribution in\n given range.\n\u003c/p\u003e\u003cpre\u003e white '&#945;' 0 9 5 == [3,0,1,6,6]\n\u003c/pre\u003e\u003cp\u003eIt is important to note that this structure is not actually\n indeterminate, so that the below is zero.\n\u003c/p\u003e\u003cpre\u003e white '&#945;' 1 9 5  == [3,9,2,9,4]\n let p = white '&#945;' 0.0 1.0 3 in zipWith (-) p p == [0,0,0]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "white",
          "package": "hsc3-lang",
          "signature": "e -\u003e n -\u003e n -\u003e Int -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#white",
          "type": "function"
        },
        "index": {
          "description": "Pwhite SC3 pattern to generate uniform linear distribution in given range white It is important to note that this structure is not actually indeterminate so that the below is zero white let white in zipWith",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "white",
          "normalized": "a-\u003eb-\u003eb-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003en-\u003en-\u003eInt-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewhite\u003c/a\u003e\u003c/code\u003e with pattern inputs.\n\u003c/p\u003e\u003cpre\u003e white' '&#945;' (repeat 0) [9,19,9,19,9,19] == [3,0,1,6,6,15]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "white'",
          "package": "hsc3-lang",
          "signature": "e -\u003e [n] -\u003e [n] -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#white%27",
          "type": "function"
        },
        "index": {
          "description": "white with pattern inputs white repeat",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "white'",
          "normalized": "a-\u003e[b]-\u003e[b]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003e[n]-\u003e[n]-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:white-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003epwhite\u003c/code\u003e that generates integral (rounded) values.\n\u003c/p\u003e\u003cpre\u003e whitei '&#945;' 1 9 5 == [5,1,7,7,8]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "whitei",
          "package": "hsc3-lang",
          "signature": "e -\u003e n -\u003e n -\u003e Int -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#whitei",
          "type": "function"
        },
        "index": {
          "description": "variant of pwhite that generates integral rounded values whitei",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "whitei",
          "normalized": "a-\u003eb-\u003eb-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003en-\u003en-\u003eInt-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:whitei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialised (\u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003ewhite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e whitei' '&#945;' 1 9 5 == [3,9,2,9,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "whitei'",
          "package": "hsc3-lang",
          "signature": "e -\u003e n -\u003e n -\u003e Int -\u003e [n]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#whitei%27",
          "type": "function"
        },
        "index": {
          "description": "Type-specialised Integral white whitei",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "whitei'",
          "normalized": "a-\u003eb-\u003eb-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003en-\u003en-\u003eInt-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:whitei-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePwrand.  SC3 pattern to embed values randomly chosen from a list.\n Returns one item from the list at random for each repeat, the\n probability for each item is determined by a list of weights which\n should sum to 1.0.\n\u003c/p\u003e\u003cpre\u003e let w = C.normalizeSum [1,3,5]\n in wrand '&#950;' [[1],[2],[3,4]] w 6 == [3,4,2,2,3,4,1,3,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "wrand",
          "package": "hsc3-lang",
          "signature": "e -\u003e [[a]] -\u003e [n] -\u003e Int -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#wrand",
          "type": "function"
        },
        "index": {
          "description": "Pwrand SC3 pattern to embed values randomly chosen from list Returns one item from the list at random for each repeat the probability for each item is determined by list of weights which should sum to let C.normalizeSum in wrand",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "wrand",
          "normalized": "a-\u003e[[b]]-\u003e[c]-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003e[[a]]-\u003e[n]-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:wrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying \u003ccode\u003e\u003ca\u003ewrand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "wrand'",
          "package": "hsc3-lang",
          "signature": "e -\u003e [[a]] -\u003e [n] -\u003e [[a]]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#wrand%27",
          "type": "function"
        },
        "index": {
          "description": "Underlying wrand",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "wrand'",
          "normalized": "a-\u003e[[b]]-\u003e[c]-\u003e[[b]]",
          "package": "hsc3-lang",
          "signature": "e-\u003e[[a]]-\u003e[n]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:wrand-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePxrand.  SC3 pattern that is like \u003ccode\u003erand\u003c/code\u003e but filters successive\n duplicates.\n\u003c/p\u003e\u003cpre\u003e xrand '&#945;' [return 1,[2,3],[4,5,6]] 9 == [4,5,6,2,3,4,5,6,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "xrand",
          "package": "hsc3-lang",
          "signature": "e -\u003e [[a]] -\u003e Int -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#xrand",
          "type": "function"
        },
        "index": {
          "description": "Pxrand SC3 pattern that is like rand but filters successive duplicates xrand return",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "xrand",
          "normalized": "a-\u003e[[b]]-\u003eInt-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003e[[a]]-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:xrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying \u003ccode\u003e\u003ca\u003exrand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "xrand'",
          "package": "hsc3-lang",
          "signature": "e -\u003e [[a]] -\u003e [a]",
          "source": "src/Sound-SC3-Lang-Pattern-List.html#xrand%27",
          "type": "function"
        },
        "index": {
          "description": "Underlying xrand",
          "hierarchy": "Sound SC3 Lang Pattern List",
          "module": "Sound.SC3.Lang.Pattern.List",
          "name": "xrand'",
          "normalized": "a-\u003e[[b]]-\u003e[b]",
          "package": "hsc3-lang",
          "signature": "e-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern-List.html#v:xrand-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposite module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Pattern",
          "name": "Pattern",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Pattern.html",
          "type": "module"
        },
        "index": {
          "description": "Composite module",
          "hierarchy": "Sound SC3 Lang Pattern",
          "module": "Sound.SC3.Lang.Pattern",
          "name": "Pattern",
          "package": "hsc3-lang",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Pattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e based \u003ccode\u003esclang\u003c/code\u003e random number functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "Gen",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Random-Gen.html",
          "type": "module"
        },
        "index": {
          "description": "RandomGen based sclang random number functions",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "Gen",
          "package": "hsc3-lang",
          "partial": "Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.choose\u003c/code\u003e selects an element at random.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "choose",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e g -\u003e (a, g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#choose",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.choose selects an element at random",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "choose",
          "normalized": "[a]-\u003eb-\u003e(a,b)",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eg-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.coin\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e at given probability, which is in\n range (0,1).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "coin",
          "package": "hsc3-lang",
          "signature": "a -\u003e g -\u003e (Bool, g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#coin",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.coin is True at given probability which is in range",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "coin",
          "normalized": "a-\u003eb-\u003e(Bool,b)",
          "package": "hsc3-lang",
          "signature": "a-\u003eg-\u003e(Bool,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:coin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.exprand\u003c/code\u003e generates exponentially distributed random\n number in the given interval.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "exprand",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e g -\u003e (n, g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#exprand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.exprand generates exponentially distributed random number in the given interval",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "exprand",
          "normalized": "a-\u003ea-\u003eb-\u003e(a,b)",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003eg-\u003e(n,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:exprand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct variant of \u003cem\u003ef\u003c/em\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "kvariant",
          "package": "hsc3-lang",
          "signature": "Int -\u003e (g -\u003e (a, g)) -\u003e g -\u003e ([a], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#kvariant",
          "type": "function"
        },
        "index": {
          "description": "Construct variant of generating values",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "kvariant",
          "normalized": "Int-\u003e(a-\u003e(b,a))-\u003ea-\u003e([b],a)",
          "package": "hsc3-lang",
          "signature": "Int-\u003e(g-\u003e(a,g))-\u003eg-\u003e([a],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:kvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nchoose",
          "package": "hsc3-lang",
          "signature": "Int -\u003e [a] -\u003e g -\u003e ([a], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#nchoose",
          "type": "function"
        },
        "index": {
          "description": "Variant of choose generating values",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nchoose",
          "normalized": "Int-\u003e[a]-\u003eb-\u003e([a],b)",
          "package": "hsc3-lang",
          "signature": "Int-\u003e[a]-\u003eg-\u003e([a],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:nchoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ecoin\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e\u003cpre\u003e fst (ncoin 5 0.5 (mkStdGen 0)) == [True,True,False,True,False]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "ncoin",
          "package": "hsc3-lang",
          "signature": "Int -\u003e a -\u003e g -\u003e ([Bool], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#ncoin",
          "type": "function"
        },
        "index": {
          "description": "Variant of coin generating values fst ncoin mkStdGen True True False True False",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "ncoin",
          "normalized": "Int-\u003ea-\u003eb-\u003e([Bool],b)",
          "package": "hsc3-lang",
          "signature": "Int-\u003ea-\u003eg-\u003e([Bool],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:ncoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eexprand\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nexprand",
          "package": "hsc3-lang",
          "signature": "Int -\u003e n -\u003e n -\u003e g -\u003e ([n], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#nexprand",
          "type": "function"
        },
        "index": {
          "description": "Variant of exprand generating values",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nexprand",
          "normalized": "Int-\u003ea-\u003ea-\u003eb-\u003e([a],b)",
          "package": "hsc3-lang",
          "signature": "Int-\u003en-\u003en-\u003eg-\u003e([n],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:nexprand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erand\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e\u003cpre\u003e fst (nrand 10 (5::Int) (mkStdGen 246873)) == [0,5,4,0,4,5,3,2,3,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nrand",
          "package": "hsc3-lang",
          "signature": "Int -\u003e n -\u003e g -\u003e ([n], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#nrand",
          "type": "function"
        },
        "index": {
          "description": "Variant of rand generating values fst nrand Int mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nrand",
          "normalized": "Int-\u003ea-\u003eb-\u003e([a],b)",
          "package": "hsc3-lang",
          "signature": "Int-\u003en-\u003eg-\u003e([n],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:nrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erand2\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nrand2",
          "package": "hsc3-lang",
          "signature": "Int -\u003e a -\u003e g -\u003e ([a], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#nrand2",
          "type": "function"
        },
        "index": {
          "description": "Variant of rand2 generating values",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nrand2",
          "normalized": "Int-\u003ea-\u003eb-\u003e([a],b)",
          "package": "hsc3-lang",
          "signature": "Int-\u003ea-\u003eg-\u003e([a],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:nrand2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003errand\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nrrand",
          "package": "hsc3-lang",
          "signature": "Int -\u003e a -\u003e a -\u003e g -\u003e ([a], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#nrrand",
          "type": "function"
        },
        "index": {
          "description": "Variant of rrand generating values",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "nrrand",
          "normalized": "Int-\u003ea-\u003ea-\u003eb-\u003e([a],b)",
          "package": "hsc3-lang",
          "signature": "Int-\u003ea-\u003ea-\u003eg-\u003e([a],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:nrrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rand\u003c/code\u003e is \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e in (0,\u003cem\u003en\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "rand",
          "package": "hsc3-lang",
          "signature": "n -\u003e g -\u003e (n, g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#rand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rand is randomR in",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "rand",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "hsc3-lang",
          "signature": "n-\u003eg-\u003e(n,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rand2\u003c/code\u003e is \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e in (-\u003cem\u003en\u003c/em\u003e,\u003cem\u003en\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "rand2",
          "package": "hsc3-lang",
          "signature": "n -\u003e g -\u003e (n, g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#rand2",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rand2 is randomR in",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "rand2",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "hsc3-lang",
          "signature": "n-\u003eg-\u003e(n,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:rand2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rrand\u003c/code\u003e is \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "rrand",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e g -\u003e (n, g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#rrand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rrand is curry randomR",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "rrand",
          "normalized": "a-\u003ea-\u003eb-\u003e(a,b)",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003eg-\u003e(n,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:rrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.scramble\u003c/code\u003e shuffles the elements.\n\u003c/p\u003e\u003cpre\u003e fst (scramble [1..5] (mkStdGen 0)) == [1,5,2,3,4]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "scramble",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e g -\u003e ([t], g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#scramble",
          "type": "function"
        },
        "index": {
          "description": "List.scramble shuffles the elements fst scramble mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "scramble",
          "normalized": "[a]-\u003eb-\u003e([a],b)",
          "package": "hsc3-lang",
          "signature": "[t]-\u003eg-\u003e([t],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:scramble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.wchoose\u003c/code\u003e selects an element from a list\n given a list of weights which sum to \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "wchoose",
          "package": "hsc3-lang",
          "signature": "[b] -\u003e [a] -\u003e g -\u003e (b, g)",
          "source": "src/Sound-SC3-Lang-Random-Gen.html#wchoose",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.wchoose selects an element from list given list of weights which sum to",
          "hierarchy": "Sound SC3 Lang Random Gen",
          "module": "Sound.SC3.Lang.Random.Gen",
          "name": "wchoose",
          "normalized": "[a]-\u003e[b]-\u003ec-\u003e(a,c)",
          "package": "hsc3-lang",
          "signature": "[b]-\u003e[a]-\u003eg-\u003e(b,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Gen.html#v:wchoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetStdRandom\u003c/a\u003e\u003c/code\u003e based \u003ccode\u003esclang\u003c/code\u003e random number functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "IO",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Random-IO.html",
          "type": "module"
        },
        "index": {
          "description": "getStdRandom based sclang random number functions",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "IO",
          "package": "hsc3-lang",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.choose\u003c/code\u003e selects an element at random.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "choose",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e m a",
          "source": "src/Sound-SC3-Lang-Random-IO.html#choose",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.choose selects an element at random",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "choose",
          "normalized": "[a]-\u003eb a",
          "package": "hsc3-lang",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.coin\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e at given probability, which is in\n range (0,1).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "coin",
          "package": "hsc3-lang",
          "signature": "n -\u003e m Bool",
          "source": "src/Sound-SC3-Lang-Random-IO.html#coin",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.coin is True at given probability which is in range",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "coin",
          "normalized": "a-\u003eb Bool",
          "package": "hsc3-lang",
          "signature": "n-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:coin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.exprand\u003c/code\u003e generates exponentially distributed random\n number in the given interval.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "exprand",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e m n",
          "source": "src/Sound-SC3-Lang-Random-IO.html#exprand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.exprand generates exponentially distributed random number in the given interval",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "exprand",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:exprand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erand2\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "nrand2",
          "package": "hsc3-lang",
          "signature": "Int -\u003e a -\u003e IO [a]",
          "source": "src/Sound-SC3-Lang-Random-IO.html#nrand2",
          "type": "function"
        },
        "index": {
          "description": "Variant of rand2 generating values",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "nrand2",
          "normalized": "Int-\u003ea-\u003eIO[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003ea-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:nrand2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003errand\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "nrrand",
          "package": "hsc3-lang",
          "signature": "Int -\u003e a -\u003e a -\u003e m [a]",
          "source": "src/Sound-SC3-Lang-Random-IO.html#nrrand",
          "type": "function"
        },
        "index": {
          "description": "Variant of rrand generating values",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "nrrand",
          "normalized": "Int-\u003ea-\u003ea-\u003eb[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003ea-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:nrrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rand\u003c/code\u003e is \u003ccode\u003e\u003ca\u003erandomRIO\u003c/a\u003e\u003c/code\u003e in (0,\u003cem\u003en\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "rand",
          "package": "hsc3-lang",
          "signature": "n -\u003e m n",
          "source": "src/Sound-SC3-Lang-Random-IO.html#rand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rand is randomRIO in",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "rand",
          "normalized": "a-\u003eb a",
          "package": "hsc3-lang",
          "signature": "n-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rand2\u003c/code\u003e is \u003ccode\u003e\u003ca\u003erandomRIO\u003c/a\u003e\u003c/code\u003e in (-\u003cem\u003en\u003c/em\u003e,\u003cem\u003en\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "rand2",
          "package": "hsc3-lang",
          "signature": "n -\u003e m n",
          "source": "src/Sound-SC3-Lang-Random-IO.html#rand2",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rand2 is randomRIO in",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "rand2",
          "normalized": "a-\u003eb a",
          "package": "hsc3-lang",
          "signature": "n-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:rand2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003egetStdRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "randomG",
          "package": "hsc3-lang",
          "signature": "(StdGen -\u003e (a, StdGen)) -\u003e m a",
          "source": "src/Sound-SC3-Lang-Random-IO.html#randomG",
          "type": "function"
        },
        "index": {
          "description": "liftIO of getStdRandom",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "randomG",
          "normalized": "(StdGen-\u003e(a,StdGen))-\u003eb a",
          "package": "hsc3-lang",
          "signature": "(StdGen-\u003e(a,StdGen))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:randomG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003erandomRIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "randomM",
          "package": "hsc3-lang",
          "signature": "(a, a) -\u003e m a",
          "source": "src/Sound-SC3-Lang-Random-IO.html#randomM",
          "type": "function"
        },
        "index": {
          "description": "liftIO of randomRIO",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "randomM",
          "normalized": "(a,a)-\u003eb a",
          "package": "hsc3-lang",
          "signature": "(a,a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:randomM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rrand\u003c/code\u003e is \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erandomRIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "rrand",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e m n",
          "source": "src/Sound-SC3-Lang-Random-IO.html#rrand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rrand is curry randomRIO",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "rrand",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:rrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList.scramble\u003c/code\u003e shuffles the elements.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "scramble",
          "package": "hsc3-lang",
          "signature": "[t] -\u003e m [t]",
          "source": "src/Sound-SC3-Lang-Random-IO.html#scramble",
          "type": "function"
        },
        "index": {
          "description": "List.scramble shuffles the elements",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "scramble",
          "normalized": "[a]-\u003eb[a]",
          "package": "hsc3-lang",
          "signature": "[t]-\u003em[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:scramble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.wchoose\u003c/code\u003e selects an element from a list\n given a list of weights which sum to \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "wchoose",
          "package": "hsc3-lang",
          "signature": "[b] -\u003e [a] -\u003e m b",
          "source": "src/Sound-SC3-Lang-Random-IO.html#wchoose",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.wchoose selects an element from list given list of weights which sum to",
          "hierarchy": "Sound SC3 Lang Random IO",
          "module": "Sound.SC3.Lang.Random.IO",
          "name": "wchoose",
          "normalized": "[a]-\u003e[b]-\u003ec a",
          "package": "hsc3-lang",
          "signature": "[b]-\u003e[a]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-IO.html#v:wchoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDenis Lorrain.\n \"A Panoply of Stochastic 'Cannons'\".\n \u003cem\u003eComputer Music Journal\u003c/em\u003e, 4(1):53-81, Spring 1980.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "Lorrain_1980",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html",
          "type": "module"
        },
        "index": {
          "description": "Denis Lorrain Panoply of Stochastic Cannons Computer Music Journal Spring",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "Lorrain_1980",
          "package": "hsc3-lang",
          "partial": "Lorrain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.3.8\n\u003c/p\u003e\u003cpre\u003e h [map arc_sine r]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "arc_sine",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#arc_sine",
          "type": "function"
        },
        "index": {
          "description": "map arc sine",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "arc_sine",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:arc_sine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.4.2 (Algorithm 15)\n\u003c/p\u003e\u003cpre\u003e let adj l = case l of {[] -\u003e []; p:q:l' -\u003e (p,q) : adj l'}\n h [mapMaybe (beta 0.5 0.5) (adj r)]\n h [mapMaybe (beta 0.25 0.25) (adj r)]\n h [mapMaybe (beta 0.75 0.5) (adj r)]\n h [mapMaybe (beta 0.5 0.75) (adj r)]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "beta",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e (a, a) -\u003e Maybe a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#beta",
          "type": "function"
        },
        "index": {
          "description": "Algorithm let adj case of adj mapMaybe beta adj mapMaybe beta adj mapMaybe beta adj mapMaybe beta adj",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "beta",
          "normalized": "a-\u003ea-\u003e(a,a)-\u003eMaybe a",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003e(a,a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.3.5 (&#964;=1)\n\u003c/p\u003e\u003cpre\u003e import Data.Maybe\n let narrow z n = if n \u003c -z || n \u003e z then Nothing else Just n\n h [mapMaybe (narrow 10 . cauchy 1.0) r]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "cauchy",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#cauchy",
          "type": "function"
        },
        "index": {
          "description": "import Data.Maybe let narrow if then Nothing else Just mapMaybe narrow cauchy",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "cauchy",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:cauchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.3.5 (iopt=False,&#964;=1) (Algorithm 10)\n\u003c/p\u003e\u003cpre\u003e h [mapMaybe (narrow 20 . cauchy' False 1.0) r]\n h [mapMaybe (narrow 20 . cauchy' True 1.0) r]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "cauchy'",
          "package": "hsc3-lang",
          "signature": "Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#cauchy%27",
          "type": "function"
        },
        "index": {
          "description": "iopt False Algorithm mapMaybe narrow cauchy False mapMaybe narrow cauchy True",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "cauchy'",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "Bool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:cauchy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.3.2 (&#948;=[0.5,1,2])\n\u003c/p\u003e\u003cpre\u003e h (map (\\d -\u003e map (exponential d) r) [0.5,1,2])\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "exponential",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#exponential",
          "type": "function"
        },
        "index": {
          "description": "map map exponential",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "exponential",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.3.6\n\u003c/p\u003e\u003cpre\u003e h [map hyperbolic_cosine r]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "hyperbolic_cosine",
          "package": "hsc3-lang",
          "signature": "a -\u003e a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#hyperbolic_cosine",
          "type": "function"
        },
        "index": {
          "description": "map hyperbolic cosine",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "hyperbolic_cosine",
          "normalized": "a-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:hyperbolic_cosine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.3.1 (g=1)\n\u003c/p\u003e\u003cpre\u003e import System.Random\n let r = take 32768 (randomRs (0.0,1.0) (mkStdGen 12345))\n\u003c/pre\u003e\u003cpre\u003e import Sound.SC3.Plot\n import Sound.SC3.Plot.Histogram\n let h = plotHistogram . map (histogram 512)\n\u003c/pre\u003e\u003cpre\u003e h [map (linear 1.0) r]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "linear",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#linear",
          "type": "function"
        },
        "index": {
          "description": "import System.Random let take randomRs mkStdGen import Sound.SC3.Plot import Sound.SC3.Plot.Histogram let plotHistogram map histogram map linear",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "linear",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#167;4.3.7 (&#946;=0,&#945;=1)\n\u003c/p\u003e\u003cpre\u003e h [map (logistic 0.0 1.0) r]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "logistic",
          "package": "hsc3-lang",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Sound-SC3-Lang-Random-Lorrain_1980.html#logistic",
          "type": "function"
        },
        "index": {
          "description": "map logistic",
          "hierarchy": "Sound SC3 Lang Random Lorrain_1980",
          "module": "Sound.SC3.Lang.Random.Lorrain_1980",
          "name": "logistic",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "hsc3-lang",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Lorrain_1980.html#v:logistic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/code\u003e monad based \u003ccode\u003esclang\u003c/code\u003e random number functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "Monad",
          "package": "hsc3-lang",
          "source": "src/Sound-SC3-Lang-Random-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Rand monad based sclang random number functions",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "Monad",
          "package": "hsc3-lang",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSequenceableCollection.choose\u003c/code\u003e selects an element at random.\n\u003c/p\u003e\u003cpre\u003e evalRand (choose [3..9]) (mkStdGen 1) == 5\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "choose",
          "package": "hsc3-lang",
          "signature": "[a] -\u003e Rand g a",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#choose",
          "type": "function"
        },
        "index": {
          "description": "SequenceableCollection.choose selects an element at random evalRand choose mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "choose",
          "normalized": "[a]-\u003eRand b a",
          "package": "hsc3-lang",
          "signature": "[a]-\u003eRand g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.exprand\u003c/code\u003e generates exponentially distributed random\n number in the given interval.\n\u003c/p\u003e\u003cpre\u003e let r = replicateM 3 (exprand 10 100 \u003e\u003e= return.floor)\n in evalRand r (mkStdGen 1) == [22,21,13]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "exprand",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e Rand g n",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#exprand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.exprand generates exponentially distributed random number in the given interval let replicateM exprand return.floor in evalRand mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "exprand",
          "normalized": "a-\u003ea-\u003eRand b a",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003eRand g n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:exprand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e\u003cpre\u003e evalRand (nchoose 4 [3..9]) (mkStdGen 1) == [5,8,9,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nchoose",
          "package": "hsc3-lang",
          "signature": "Int -\u003e [a] -\u003e Rand g [a]",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#nchoose",
          "type": "function"
        },
        "index": {
          "description": "Variant of choose generating values evalRand nchoose mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nchoose",
          "normalized": "Int-\u003e[a]-\u003eRand b[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003e[a]-\u003eRand g[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:nchoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eexprand\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e\u003cpre\u003e let r = nexprand 3 10 100 \u003e\u003e= return . map floor\n in evalRand r (mkStdGen 1) == [22,21,13]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nexprand",
          "package": "hsc3-lang",
          "signature": "Int -\u003e n -\u003e n -\u003e Rand g [n]",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#nexprand",
          "type": "function"
        },
        "index": {
          "description": "Variant of exprand generating values let nexprand return map floor in evalRand mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nexprand",
          "normalized": "Int-\u003ea-\u003ea-\u003eRand b[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003en-\u003en-\u003eRand g[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:nexprand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erand\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e\u003cpre\u003e evalRand (nrand 3 10) (mkStdGen 6) == [5,8,1]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nrand",
          "package": "hsc3-lang",
          "signature": "Int -\u003e n -\u003e Rand g [n]",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#nrand",
          "type": "function"
        },
        "index": {
          "description": "Variant of rand generating values evalRand nrand mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nrand",
          "normalized": "Int-\u003ea-\u003eRand b[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003en-\u003eRand g[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:nrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erand2\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e\u003cpre\u003e evalRand (nrand2 3 10) (mkStdGen 5) == [7,-6,9]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nrand2",
          "package": "hsc3-lang",
          "signature": "Int -\u003e n -\u003e Rand g [n]",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#nrand2",
          "type": "function"
        },
        "index": {
          "description": "Variant of rand2 generating values evalRand nrand2 mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nrand2",
          "normalized": "Int-\u003ea-\u003eRand b[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003en-\u003eRand g[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:nrand2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003errand\u003c/a\u003e\u003c/code\u003e generating \u003cem\u003ek\u003c/em\u003e values.\n\u003c/p\u003e\u003cpre\u003e evalRand (nrrand 4 3 9) (mkStdGen 1) == [5,8,9,6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nrrand",
          "package": "hsc3-lang",
          "signature": "Int -\u003e n -\u003e n -\u003e Rand g [n]",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#nrrand",
          "type": "function"
        },
        "index": {
          "description": "Variant of rrand generating values evalRand nrrand mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "nrrand",
          "normalized": "Int-\u003ea-\u003ea-\u003eRand b[a]",
          "package": "hsc3-lang",
          "signature": "Int-\u003en-\u003en-\u003eRand g[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:nrrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rand\u003c/code\u003e is \u003ccode\u003e\u003ca\u003egetRandomR\u003c/a\u003e\u003c/code\u003e in (0,\u003cem\u003en\u003c/em\u003e).\n\u003c/p\u003e\u003cpre\u003e evalRand (replicateM 2 (rand (10::Int))) (mkStdGen 6) == [5,8]\n evalRand (rand (1::Double)) (mkStdGen 6) == 0.21915126172825694\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "rand",
          "package": "hsc3-lang",
          "signature": "n -\u003e Rand g n",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#rand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rand is getRandomR in evalRand replicateM rand Int mkStdGen evalRand rand Double mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "rand",
          "normalized": "a-\u003eRand b a",
          "package": "hsc3-lang",
          "signature": "n-\u003eRand g n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rand2\u003c/code\u003e is \u003ccode\u003e\u003ca\u003egetRandomR\u003c/a\u003e\u003c/code\u003e in (-\u003cem\u003en\u003c/em\u003e,\u003cem\u003en\u003c/em\u003e).\n\u003c/p\u003e\u003cpre\u003e evalRand (replicateM 2 (rand2 10)) (mkStdGen 5) == [7,-6]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "rand2",
          "package": "hsc3-lang",
          "signature": "n -\u003e Rand g n",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#rand2",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rand2 is getRandomR in evalRand replicateM rand2 mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "rand2",
          "normalized": "a-\u003eRand b a",
          "package": "hsc3-lang",
          "signature": "n-\u003eRand g n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:rand2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSimpleNumber.rrand\u003c/code\u003e is \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetRandomR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e evalRand (replicateM 2 (rrand 3 9)) (mkStdGen 1) == [5,8]\n\u003c/pre\u003e",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "rrand",
          "package": "hsc3-lang",
          "signature": "n -\u003e n -\u003e Rand g n",
          "source": "src/Sound-SC3-Lang-Random-Monad.html#rrand",
          "type": "function"
        },
        "index": {
          "description": "SimpleNumber.rrand is curry getRandomR evalRand replicateM rrand mkStdGen",
          "hierarchy": "Sound SC3 Lang Random Monad",
          "module": "Sound.SC3.Lang.Random.Monad",
          "name": "rrand",
          "normalized": "a-\u003ea-\u003eRand b a",
          "package": "hsc3-lang",
          "signature": "n-\u003en-\u003eRand g n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-lang/docs/Sound-SC3-Lang-Random-Monad.html#v:rrand"
      }
    }
  ]
]