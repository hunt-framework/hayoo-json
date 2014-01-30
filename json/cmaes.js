[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e create an optimization problem of type \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e by one of\n    \u003ccode\u003e\u003ca\u003eminimize\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminimizeIO\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e it.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eLet's optimize the following function \u003cem\u003ef(xs)\u003c/em\u003e. \u003ccode\u003exs\u003c/code\u003e is a list of\nDouble and \u003ccode\u003ef\u003c/code\u003e has its minimum at \u003ccode\u003exs !! i = sqrt(i)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Test.DocTest.Prop\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f = sum . zipWith (\\i x -\u003e (x*abs x - i)**2) [0..] :: [Double] -\u003e Double\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet initXs = replicate 10 0                            :: [Double]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebestXs \u003c- run $ minimize f initXs\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassert $ f bestXs \u003c 1e-10\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eIf your optimization is not working well, try:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Set \u003ccode\u003e\u003ca\u003escaling\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e to the appropriate search\n  range of each parameter.\n\u003c/li\u003e\u003cli\u003e Set \u003ccode\u003e\u003ca\u003etolFun\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e to the appropriate scale of\n  the function values.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn example for scaling the function value:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f2 xs = (/1e100) $ sum $ zipWith (\\i x -\u003e (x*abs x - i)**2) [0..] xs\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebestXs \u003c- run $ (minimize f2 $ replicate 10 0) {tolFun = Just 1e-111}\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassert $ f2 bestXs \u003c 1e-110\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eAn example for scaling the input values:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f3 xs = sum $ zipWith (\\i x -\u003e (x*abs x - i)**2) [0,1e100..] xs\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs30 = replicate 10 0 :: [Double]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet m3 = (minimize f3 xs30) {scaling = Just (repeat 1e50)}\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exs31 \u003c- run $ m3\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassert $ f3 xs31 / f3 xs30 \u003c 1e-10\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eminimizeT\u003c/a\u003e\u003c/code\u003e to optimize functions on traversable structures.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport qualified Data.Vector as V\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f4 = V.sum . V.imap (\\i x -\u003e (x*abs x - fromIntegral i)**2)\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t f4\n\u003c/code\u003e\u003c/strong\u003ef4 :: V.Vector Double -\u003e Double\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebestVx \u003c- run $ minimizeT f4 $ V.replicate 10 0\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassert $ f4 bestVx \u003c 1e-10\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eOr use \u003ccode\u003e\u003ca\u003eminimizeG\u003c/a\u003e\u003c/code\u003e to optimize functions of any type that is Data\nand that contains \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es. Here is an example that deal with\nTriangles.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XDeriveDataTypeable\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Data\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edata Pt = Pt Double Double deriving (Typeable,Data)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet dist (Pt ax ay) (Pt bx by) = ((ax-bx)**2 + (ay-by)**2)**0.5\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edata Triangle = Triangle Pt Pt Pt deriving (Typeable,Data)\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eLet us create a triangle ABC so that AB = 3, AC = 4, BC = 5.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f5 (Triangle a b c) = (dist a b - 3.0)**2 + (dist a c - 4.0)**2 + (dist b c - 5.0)**2\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet triangle0 = Triangle o o o where o = Pt 0 0\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t f5\n\u003c/code\u003e\u003c/strong\u003ef5 :: Triangle -\u003e Double\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebestTriangle \u003c- run $ (minimizeG f5 triangle0){tolFun = Just 1e-20}\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassert $ f5 bestTriangle \u003c 1e-10\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThen the angle BAC should be orthogonal.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (Triangle (Pt ax ay) (Pt bx by) (Pt cx cy)) = bestTriangle\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassert $ abs ((bx-ax)*(cx-ax) + (by-ay)*(cy-ay)) \u003c 1e-10\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eWhen optimizing noisy functions, set \u003ccode\u003e\u003ca\u003enoiseHandling\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eTrue\u003c/code\u003e (and\nincrease \u003ccode\u003e\u003ca\u003enoiseReEvals\u003c/a\u003e\u003c/code\u003e) for better results.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Random\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet noise = randomRIO (0,1e-2)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f6Pure = sum . zipWith (\\i x -\u003e (x*abs x - i)**2) [0..]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f6 xs = fmap (f6Pure xs +) noise\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t f6\n\u003c/code\u003e\u003c/strong\u003ef6 :: [Double] -\u003e IO Double\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exs60 \u003c- run $ (minimizeIO f6 $ replicate 10 0) {noiseHandling = False}\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exs61 \u003c- run $ (minimizeIO f6 $ replicate 10 0) {noiseHandling = True,noiseReEvals=Just 10}\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e-- assert $ f6Pure xs61 \u003c f6Pure xs60\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003e(note : the above assertion holds with probability of about 70%.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html",
        "fct-type": "module",
        "title": "CMAES"
      },
      "index": {
        "description": "Usage create an optimization problem of type Config by one of minimize minimizeIO etc run it Let optimize the following function xs xs is list of Double and has its minimum at xs sqrt import Test.DocTest.Prop let sum zipWith abs Double Double let initXs replicate Double bestXs run minimize initXs assert bestXs e-10 If your optimization is not working well try Set scaling in the Config to the appropriate search range of each parameter Set tolFun in the Config to the appropriate scale of the function values An example for scaling the function value let f2 xs e100 sum zipWith abs xs bestXs run minimize f2 replicate tolFun Just e-111 assert f2 bestXs e-110 An example for scaling the input values let f3 xs sum zipWith abs e100 xs let xs30 replicate Double let m3 minimize f3 xs30 scaling Just repeat e50 xs31 run m3 assert f3 xs31 f3 xs30 e-10 Use minimizeT to optimize functions on traversable structures import qualified Data.Vector as let f4 V.sum V.imap abs fromIntegral f4 f4 V.Vector Double Double bestVx run minimizeT f4 V.replicate assert f4 bestVx e-10 Or use minimizeG to optimize functions of any type that is Data and that contains Double Here is an example that deal with Triangles set XDeriveDataTypeable import Data.Data data Pt Pt Double Double deriving Typeable Data let dist Pt ax ay Pt bx by ax-bx ay-by data Triangle Triangle Pt Pt Pt deriving Typeable Data Let us create triangle ABC so that AB AC BC let f5 Triangle dist dist dist let triangle0 Triangle where Pt f5 f5 Triangle Double bestTriangle run minimizeG f5 triangle0 tolFun Just e-20 assert f5 bestTriangle e-10 Then the angle BAC should be orthogonal let Triangle Pt ax ay Pt bx by Pt cx cy bestTriangle assert abs bx-ax cx-ax by-ay cy-ay e-10 When optimizing noisy functions set noiseHandling True and increase noiseReEvals for better results import System.Random let noise randomRIO e-2 let f6Pure sum zipWith abs let f6 xs fmap f6Pure xs noise f6 f6 Double IO Double xs60 run minimizeIO f6 replicate noiseHandling False xs61 run minimizeIO f6 replicate noiseHandling True noiseReEvals Just assert f6Pure xs61 f6Pure xs60 note the above assertion holds with probability of about",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "CMAES",
        "normalized": "",
        "package": "cmaes",
        "partial": "CMAES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eOptimizer configuration. \u003ccode\u003etgt\u003c/code\u003e is the type of the value to be\n optimized.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Optimizer configuration tgt is the type of the value to be optimized",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "Config",
        "normalized": "",
        "package": "cmaes",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:Config",
      "description": {
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Config",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "Config",
        "normalized": "",
        "package": "cmaes",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003eConfig\u003c/code\u003e values. Also consult the original document\n \u003ca\u003ehttp://www.lri.fr/~hansen/pythoncma.html#-fmin\u003c/a\u003e for default values\n of the parameters not listed here.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Config a",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "The default Config values Also consult the original document http www.lri.fr hansen pythoncma.html fmin for default values of the parameters not listed here",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "defaultConfig",
        "normalized": "",
        "package": "cmaes",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:embedding",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a value of type \u003ccode\u003etgt\u003c/code\u003e from the parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "[Double] -\u003e tgt",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "embedding"
      },
      "index": {
        "description": "Create value of type tgt from the parameters",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "embedding",
        "normalized": "[Double]-\u003ea",
        "package": "cmaes",
        "partial": "",
        "signature": "[Double]-\u003etgt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:funcIO",
      "description": {
        "fct-descr": "\u003cp\u003eThe Function to be optimized.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "tgt -\u003e IO Double",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "funcIO"
      },
      "index": {
        "description": "The Function to be optimized",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "funcIO",
        "normalized": "a-\u003eIO Double",
        "package": "cmaes",
        "partial": "IO",
        "signature": "tgt-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:getDoubles",
      "description": {
        "fct-descr": "\u003cp\u003egetDoubles and putDoubles are generic functions used to put [Double] in and out\nof generic data types. Let's test them.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet d3 = (1,2,3) :: (Double,Int,Double)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetDoubles d3\n\u003c/code\u003e\u003c/strong\u003e[1.0,3.0]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputDoubles [4,5] d3\n\u003c/code\u003e\u003c/strong\u003e(4.0,2,5.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet complicated = ([0,1],(2,[3,4])) :: ([Double],(Double,[Double]))\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetDoubles complicated\n\u003c/code\u003e\u003c/strong\u003e[0.0,1.0,2.0,3.0,4.0]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputDoubles [5,6,7,8,9] complicated\n\u003c/code\u003e\u003c/strong\u003e([5.0,6.0],(7.0,[8.0,9.0]))\n\u003c/pre\u003e\u003cp\u003ePutting back the obtained values should not change the data.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Test.DocTest.Prop\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etype Complicated = ([[Double]],(),(([(Double,String)]),[Double]))\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprop ((\\x -\u003e putDoubles (getDoubles x) x == x) :: Complicated -\u003e Bool)\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eYou can get the original list back after putting it.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet make3 xs = take 3 $ xs ++ [0..]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprop ((\\xs' y -\u003e let xs = make3 xs' in getDoubles (putDoubles xs y)==xs) :: [Double] -\u003e (Double,Double,Double) -\u003e Bool)\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "a -\u003e [Double]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#getDoubles",
        "fct-type": "function",
        "title": "getDoubles"
      },
      "index": {
        "description": "getDoubles and putDoubles are generic functions used to put Double in and out of generic data types Let test them let d3 Double Int Double getDoubles d3 putDoubles d3 let complicated Double Double Double getDoubles complicated putDoubles complicated Putting back the obtained values should not change the data import Test.DocTest.Prop type Complicated Double Double String Double prop putDoubles getDoubles Complicated Bool You can get the original list back after putting it let make3 xs take xs prop xs let xs make3 xs in getDoubles putDoubles xs xs Double Double Double Double Bool",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "getDoubles",
        "normalized": "a-\u003e[Double]",
        "package": "cmaes",
        "partial": "Doubles",
        "signature": "a-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:initXs",
      "description": {
        "fct-descr": "\u003cp\u003eAn initial guess of the parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "[Double]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "initXs"
      },
      "index": {
        "description": "An initial guess of the parameters",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "initXs",
        "normalized": "[Double]",
        "package": "cmaes",
        "partial": "Xs",
        "signature": "[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:minimize",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a minimizing problem, given a pure function and an initial guess.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "([Double] -\u003e Double) -\u003e [Double] -\u003e Config [Double]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#minimize",
        "fct-type": "function",
        "title": "minimize"
      },
      "index": {
        "description": "Create minimizing problem given pure function and an initial guess",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "minimize",
        "normalized": "([Double]-\u003eDouble)-\u003e[Double]-\u003eConfig[Double]",
        "package": "cmaes",
        "partial": "",
        "signature": "([Double]-\u003eDouble)-\u003e[Double]-\u003eConfig[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:minimizeG",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a minimizing problem for a function on almost any type \u003ccode\u003ea\u003c/code\u003e which contain Doubles.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "(a -\u003e Double) -\u003e a -\u003e Config a",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#minimizeG",
        "fct-type": "function",
        "title": "minimizeG"
      },
      "index": {
        "description": "Create minimizing problem for function on almost any type which contain Doubles",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "minimizeG",
        "normalized": "(a-\u003eDouble)-\u003ea-\u003eConfig a",
        "package": "cmaes",
        "partial": "",
        "signature": "(a-\u003eDouble)-\u003ea-\u003eConfig a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:minimizeGIO",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a minimizing problem for an effectful function of almost any type.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "(a -\u003e IO Double) -\u003e a -\u003e Config a",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#minimizeGIO",
        "fct-type": "function",
        "title": "minimizeGIO"
      },
      "index": {
        "description": "Create minimizing problem for an effectful function of almost any type",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "minimizeGIO",
        "normalized": "(a-\u003eIO Double)-\u003ea-\u003eConfig a",
        "package": "cmaes",
        "partial": "GIO",
        "signature": "(a-\u003eIO Double)-\u003ea-\u003eConfig a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:minimizeIO",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a minimizing problem, given an \u003ccode\u003eIO\u003c/code\u003e function and an initial guess.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "([Double] -\u003e IO Double) -\u003e [Double] -\u003e Config [Double]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#minimizeIO",
        "fct-type": "function",
        "title": "minimizeIO"
      },
      "index": {
        "description": "Create minimizing problem given an IO function and an initial guess",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "minimizeIO",
        "normalized": "([Double]-\u003eIO Double)-\u003e[Double]-\u003eConfig[Double]",
        "package": "cmaes",
        "partial": "IO",
        "signature": "([Double]-\u003eIO Double)-\u003e[Double]-\u003eConfig[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:minimizeT",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a minimizing problem for a function on traversable structure \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "(t Double -\u003e Double) -\u003e t Double -\u003e Config (t Double)",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#minimizeT",
        "fct-type": "function",
        "title": "minimizeT"
      },
      "index": {
        "description": "Create minimizing problem for function on traversable structure",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "minimizeT",
        "normalized": "(a Double-\u003eDouble)-\u003ea Double-\u003eConfig(a Double)",
        "package": "cmaes",
        "partial": "",
        "signature": "(t Double-\u003eDouble)-\u003et Double-\u003eConfig(t Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:minimizeTIO",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a minimizing problem for an effectful function on a traversable structure \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "(t Double -\u003e IO Double) -\u003e t Double -\u003e Config (t Double)",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#minimizeTIO",
        "fct-type": "function",
        "title": "minimizeTIO"
      },
      "index": {
        "description": "Create minimizing problem for an effectful function on traversable structure",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "minimizeTIO",
        "normalized": "(a Double-\u003eIO Double)-\u003ea Double-\u003eConfig(a Double)",
        "package": "cmaes",
        "partial": "TIO",
        "signature": "(t Double-\u003eIO Double)-\u003et Double-\u003eConfig(t Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:noiseEps",
      "description": {
        "fct-descr": "\u003cp\u003ePerturb the parameters by this amount (relative to sigma)\n to estimate the noise\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe Double",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "noiseEps"
      },
      "index": {
        "description": "Perturb the parameters by this amount relative to sigma to estimate the noise",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "noiseEps",
        "normalized": "",
        "package": "cmaes",
        "partial": "Eps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:noiseHandling",
      "description": {
        "fct-descr": "\u003cp\u003eAssume the function to be rugged and/or noisy\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Bool",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "noiseHandling"
      },
      "index": {
        "description": "Assume the function to be rugged and or noisy",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "noiseHandling",
        "normalized": "",
        "package": "cmaes",
        "partial": "Handling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:noiseReEvals",
      "description": {
        "fct-descr": "\u003cp\u003eHow many re-evaluation to make to estimate the noise.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "noiseReEvals"
      },
      "index": {
        "description": "How many re-evaluation to make to estimate the noise",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "noiseReEvals",
        "normalized": "",
        "package": "cmaes",
        "partial": "Re Evals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:otherArgs",
      "description": {
        "fct-descr": "\u003cp\u003eInterfaces for passing other configuration arguments directly to\n \u003ccode\u003ecma.py\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "otherArgs"
      },
      "index": {
        "description": "Interfaces for passing other configuration arguments directly to cma.py",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "otherArgs",
        "normalized": "[(String,String)]",
        "package": "cmaes",
        "partial": "Args",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:projection",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the parameters to be tuned from \u003ccode\u003etgt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "tgt -\u003e [Double]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "projection"
      },
      "index": {
        "description": "Extract the parameters to be tuned from tgt",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "projection",
        "normalized": "a-\u003e[Double]",
        "package": "cmaes",
        "partial": "",
        "signature": "tgt-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:putDoubles",
      "description": {
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "[Double] -\u003e a -\u003e a",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#putDoubles",
        "fct-type": "function",
        "title": "putDoubles"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "putDoubles",
        "normalized": "[Double]-\u003ea-\u003ea",
        "package": "cmaes",
        "partial": "Doubles",
        "signature": "[Double]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the optimizer and get the solution.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "forall tgt.  Config tgt -\u003e IO tgt",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Execute the optimizer and get the solution",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "run",
        "normalized": "a b Config c-\u003eIO c",
        "package": "cmaes",
        "partial": "",
        "signature": "forall tgt. Config tgt-\u003eIO tgt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:scaling",
      "description": {
        "fct-descr": "\u003cp\u003eTypical deviation of each input parameters.\n The length of the list is adjusted to be the same as\n initXs, e.g. you can lazily use an infinite list here.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe [Double]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "scaling"
      },
      "index": {
        "description": "Typical deviation of each input parameters The length of the list is adjusted to be the same as initXs e.g you can lazily use an infinite list here",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "scaling",
        "normalized": "Maybe[Double]",
        "package": "cmaes",
        "partial": "",
        "signature": "Maybe[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:sigma0",
      "description": {
        "fct-descr": "\u003cp\u003eThe global scaling factor.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Double",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "sigma0"
      },
      "index": {
        "description": "The global scaling factor",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "sigma0",
        "normalized": "",
        "package": "cmaes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:tolFacUpX",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate when one of the scaling grew too big\n (initial scaling was too small.)\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe Double",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "tolFacUpX"
      },
      "index": {
        "description": "Terminate when one of the scaling grew too big initial scaling was too small",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "tolFacUpX",
        "normalized": "",
        "package": "cmaes",
        "partial": "Fac Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:tolFun",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate when the function value diversity in the current\n and last few generations is smaller than this value\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe Double",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "tolFun"
      },
      "index": {
        "description": "Terminate when the function value diversity in the current and last few generations is smaller than this value",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "tolFun",
        "normalized": "",
        "package": "cmaes",
        "partial": "Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:tolStagnation",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate when the improvement is not seen for this number\n of iterations.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "tolStagnation"
      },
      "index": {
        "description": "Terminate when the improvement is not seen for this number of iterations",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "tolStagnation",
        "normalized": "",
        "package": "cmaes",
        "partial": "Stagnation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:tolUpSigma",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate when the global scaling grew too big.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe Double",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "tolUpSigma"
      },
      "index": {
        "description": "Terminate when the global scaling grew too big",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "tolUpSigma",
        "normalized": "",
        "package": "cmaes",
        "partial": "Up Sigma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:tolX",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate when the deviations in the solutions are smaller\n than this value.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe Double",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "tolX"
      },
      "index": {
        "description": "Terminate when the deviations in the solutions are smaller than this value",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "tolX",
        "normalized": "",
        "package": "cmaes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:typicalXs",
      "description": {
        "fct-descr": "\u003cp\u003eTypical mean of each input parameters.\n The length of this list too, is adjusted to be the same as\n initXs.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Maybe [Double]",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "typicalXs"
      },
      "index": {
        "description": "Typical mean of each input parameters The length of this list too is adjusted to be the same as initXs",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "typicalXs",
        "normalized": "Maybe[Double]",
        "package": "cmaes",
        "partial": "Xs",
        "signature": "Maybe[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmaes/docs/Numeric-Optimization-Algorithms-CMAES.html#v:verbose",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat the CMA-ES output into stderr.\n\u003c/p\u003e",
        "fct-module": "Numeric.Optimization.Algorithms.CMAES",
        "fct-package": "cmaes",
        "fct-signature": "Bool",
        "fct-source": "src/Numeric-Optimization-Algorithms-CMAES.html#Config",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "Repeat the CMA-ES output into stderr",
        "hierarchy": "Numeric Optimization Algorithms CMAES",
        "module": "Numeric.Optimization.Algorithms.CMAES",
        "name": "verbose",
        "normalized": "",
        "package": "cmaes",
        "partial": "",
        "signature": ""
      }
    }
  }
]