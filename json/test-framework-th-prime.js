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
        "word": "test-framework-th-prime"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell to generate defaultMain with a list of \u003ca\u003eTest\u003c/a\u003e from\n \"doc_test\", \"case_\u003csomthing\u003e\", and \"prop_\u003csomthing\u003e\".\n\u003c/p\u003e\u003cp\u003eAn example of source code (Data/MySet.hs):\n\u003c/p\u003e\u003cpre\u003e {-| Creating a set from a list. O(N log N)\n\n \u003e\u003e\u003e empty == fromList []\n True\n \u003e\u003e\u003e singleton 'a' == fromList ['a']\n True\n \u003e\u003e\u003e fromList [5,3,5] == fromList [5,3]\n True\n -}\n\n fromList :: Ord a =\u003e [a] -\u003e RBTree a\n fromList = foldl' (flip insert) empty\n\u003c/pre\u003e\u003cp\u003eAn example of test code in the src directory (test/Test.hs):\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n module Main where\n\n import Test.Framework.TH.Prime\n import Test.Framework.Providers.DocTest\n import Test.Framework.Providers.HUnit\n import Test.Framework.Providers.QuickCheck2\n import Test.QuickCheck2\n import Test.HUnit\n\n import Data.MySet\n\n main :: IO ()\n main = $(defaultMainGenerator)\n\n doc_test :: DocTests\n doc_test = docTest [\"../Data/MySet.hs\"] [\"-i..\"]\n\n prop_toList :: [Int] -\u003e Bool\n prop_toList xs = ordered ys\n   where\n     ys = toList . fromList $ xs\n     ordered (x:y:xys) = x \u003c= y && ordered (y:xys)\n     ordered _         = True\n\n case_ticket4242 :: Assertion\n case_ticket4242 = (valid $ deleteMin $ deleteMin $ fromList [0,2,5,1,6,4,8,9,7,11,10,3]) @?= True\n\u003c/pre\u003e\u003cp\u003eAnd run:\n\u003c/p\u003e\u003cpre\u003e test% runghc -i.. Test.hs\n\u003c/pre\u003e\u003cp\u003e\u003ca\u003edefaultMainGenerator\u003c/a\u003e generates the following:\n\u003c/p\u003e\u003cpre\u003e main = do\n     TestGroup _ doctests \u003c- docTest [\"../Data/MySet.hs\"] [\"-i..\"]\n     defaultMain [\n         testGroup \"Doc tests\" doctests\n       , testGroup \"Unit tests\" [\n              testCase \"case_ticket4242\" case_ticket4242\n            ]\n       , testGroup \"Property tests\" [\n              testProperty \"prop_toList\" prop_toList\n            ]\n       ]\n\u003c/pre\u003e\u003cp\u003eNote: examples in haddock document is only used as unit tests at this\n moment. I hope that properties of QuickCheck2 can also be specified in\n haddock document in the future. I guess it's Haskell way of Behavior\n Driven Development.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Framework.TH.Prime",
          "name": "Prime",
          "package": "test-framework-th-prime",
          "source": "src/Test-Framework-TH-Prime.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell to generate defaultMain with list of Test from doc test case somthing and prop somthing An example of source code Data MySet.hs Creating set from list log empty fromList True singleton fromList True fromList fromList True fromList Ord RBTree fromList foldl flip insert empty An example of test code in the src directory test Test.hs LANGUAGE TemplateHaskell module Main where import Test.Framework.TH.Prime import Test.Framework.Providers.DocTest import Test.Framework.Providers.HUnit import Test.Framework.Providers.QuickCheck2 import Test.QuickCheck2 import Test.HUnit import Data.MySet main IO main defaultMainGenerator doc test DocTests doc test docTest Data MySet.hs prop toList Int Bool prop toList xs ordered ys where ys toList fromList xs ordered xys ordered xys ordered True case ticket4242 Assertion case ticket4242 valid deleteMin deleteMin fromList True And run test runghc Test.hs defaultMainGenerator generates the following main do TestGroup doctests docTest Data MySet.hs defaultMain testGroup Doc tests doctests testGroup Unit tests testCase case ticket4242 case ticket4242 testGroup Property tests testProperty prop toList prop toList Note examples in haddock document is only used as unit tests at this moment hope that properties of QuickCheck2 can also be specified in haddock document in the future guess it Haskell way of Behavior Driven Development",
          "hierarchy": "Test Framework TH Prime",
          "module": "Test.Framework.TH.Prime",
          "name": "Prime",
          "package": "test-framework-th-prime",
          "partial": "Prime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-th-prime/docs/Test-Framework-TH-Prime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for \"doc_test\".\n\u003c/p\u003e",
          "module": "Test.Framework.TH.Prime",
          "name": "DocTests",
          "package": "test-framework-th-prime",
          "source": "src/Test-Framework-TH-Prime.html#DocTests",
          "type": "type"
        },
        "index": {
          "description": "Type for doc test",
          "hierarchy": "Test Framework TH Prime",
          "module": "Test.Framework.TH.Prime",
          "name": "DocTests",
          "package": "test-framework-th-prime",
          "partial": "Doc Tests",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-th-prime/docs/Test-Framework-TH-Prime.html#t:DocTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerating defaultMain with a list of \u003ca\u003eTest\u003c/a\u003e from \"doc_test\",\n  \"case_\u003csomthing\u003e\", and \"prop_\u003csomthing\u003e\".\n\u003c/p\u003e",
          "module": "Test.Framework.TH.Prime",
          "name": "defaultMainGenerator",
          "package": "test-framework-th-prime",
          "signature": "ExpQ",
          "source": "src/Test-Framework-TH-Prime.html#defaultMainGenerator",
          "type": "function"
        },
        "index": {
          "description": "Generating defaultMain with list of Test from doc test case somthing and prop somthing",
          "hierarchy": "Test Framework TH Prime",
          "module": "Test.Framework.TH.Prime",
          "name": "defaultMainGenerator",
          "package": "test-framework-th-prime",
          "partial": "Main Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-th-prime/docs/Test-Framework-TH-Prime.html#v:defaultMainGenerator"
      }
    }
  ]
]