[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eoperational\u003c/code\u003e-style \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e programs.  See\n \u003ca\u003eControl.Applicative.Operational\u003c/a\u003e for guidance on how to use this\n module.\n\u003c/p\u003e\u003cp\u003eExample: simple applicative parsers:\n\u003c/p\u003e\u003cpre\u003e import Control.Applicative\n import Control.Alternative.Operational\n import Control.Alternative.Monad (void)\n import Data.Functor.Compose (Compose(..))\n import Data.Traversable\n import Data.Maybe (listToMaybe)\n data ParserI a where\n     Symbol :: Char -\u003e ParserI Char\n \n char :: Operational ParserI f =\u003e Char -\u003e f Char\n char = singleton . Symbol\n \n string :: (Operational ParserI f, Applicative f) =\u003e String -\u003e f String\n string = traverse char\n \n oneOf :: (Operational ParserI f, Alternative f) =\u003e String -\u003e f Char\n oneOf = foldr (\u003c|\u003e) empty . map char\n \n \n -- | Example parser: match parentheses and count depth.\n parens :: ProgramAlt ParserI Int\n parens = pure 0  \u003c|\u003e  char '(' *\u003e fmap (+1) parens \u003c* char ')'\n \n \n -- | Interpret a parser program \\\"syntactically\\\" by pattern matching\n -- on its view.\n runParser :: ProgramAlt ParserI a -\u003e String -\u003e Maybe a\n runParser = fmap listToMaybe . eval . viewAlt\n     where\n       eval :: ProgramViewAlt ParserI a -\u003e String -\u003e [a]\n       eval (Pure a) [] = pure a\n       eval (Pure a) _  = empty\n       eval (Symbol c :\u003c**\u003e k) [] = empty\n       eval (Symbol c :\u003c**\u003e k) (x:xs) \n           | c == x    = pure c \u003c**\u003e eval k xs\n           | otherwise = empty\n       eval (Many ps) str = fmap asum (sequenceA (map eval ps)) str\n \n asum :: Alternative f =\u003e [f a] -\u003e f a\n asum = foldr (\u003c|\u003e) empty\n\u003c/pre\u003e\u003cp\u003eAlternatively, programs may be interpreted in a more denotational\n style:\n\u003c/p\u003e\u003cpre\u003e runParser :: ProgramAlt ParserI a -\u003e String -\u003e Maybe a\n runParser = (firstSuccess .) . runStateT . interpretAlt evalParserI\n     where firstSuccess [] = Nothing\n           firstSuccess ((a,\"\"):_) = Just a\n           firstSuccess (_:xs) = firstSuccess xs\n \n evalParserI :: ParserI a -\u003e StateT String [] a\n evalParserI (Symbol c) = \n     do str \u003c- get\n        case str of\n          x:xs | c == x -\u003e put xs \u003e\u003e return c\n          otherwise     -\u003e mzero\n\u003c/pre\u003e\u003cp\u003eOne of the big \"powers\" of \u003ccode\u003e\u003ca\u003eProgramAlt\u003c/a\u003e\u003c/code\u003e is that it allows for\n powerful static analysis of programs.  For example, we can\n enumerate the strings accepted by a non-degenerate parser:\n\u003c/p\u003e\u003cpre\u003e -- | Static analysis example: enumerate the strings accepted by a parser.\n enumerate :: ProgramAlt ParserI a -\u003e [String]\n enumerate = go [showString \"\"] . viewAlt\n     where\n       go :: [ShowS] -\u003e ProgramViewAlt ParserI a -\u003e [String]\n       go strs (Pure a) = map ($\"\") strs\n       go strs (Symbol c :\u003c**\u003e k) = go (map (.(showChar c)) strs) k\n       go strs (Many ps) = interleave $ map (go strs) ps\n \n interleave :: [[a]] -\u003e [a]\n interleave = foldr interleave2 []\n     where\n       interleave2 :: [a] -\u003e [a] -\u003e [a]\n       interleave2 [] ys = ys\n       interleave2 (x:xs) ys = x : interleave2 ys xs\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 7 (enumerate parens)\n\u003c/code\u003e\u003c/strong\u003e[\"\",\"()\",\"(())\",\"((()))\",\"(((())))\",\"((((()))))\",\"(((((())))))\"]\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003eenumerate\u003c/code\u003e isn't guaranteed to terminate or even produce WHNF for\n all parsers; e.g., \u003ccode\u003elet a = char \u003ccode\u003ea\u003c/code\u003e *\u003e a in enumerate a\u003c/code\u003e\n diverges.  But this parser doesn't accept any strings!)\n\u003c/p\u003e\u003cp\u003eOr we can optimize a (non-degenerate) parser by merging prefixes:\n\u003c/p\u003e\u003cpre\u003e optimize :: ProgramAlt ParserI a -\u003e ProgramAlt ParserI a\n optimize = compileAlt . merge . viewAlt\n \n merge :: ProgramViewAlt ParserI a -\u003e ProgramViewAlt ParserI a\n merge p@(Pure _) = p\n merge (Symbol a :\u003c**\u003e k) = Symbol a :\u003c**\u003e merge k\n merge (Many ps) = Many (mergeMany ps)\n \n mergeMany :: [ProgramViewAlt ParserI a] -\u003e [ProgramViewAlt ParserI a]\n mergeMany = foldr step [] . map merge\n     where step (Pure a) ps = Pure a : ps\n           step (Symbol a :\u003c**\u003e l) ((Symbol b :\u003c**\u003e r) : ps) =\n                case a `compare` b of\n                  EQ -\u003e (Symbol a :\u003c**\u003e Many (mergeMany [l, r])) : ps\n                  LT -\u003e (Symbol a :\u003c**\u003e l) : (Symbol b :\u003c**\u003e r) : ps\n                  GT -\u003e (Symbol b :\u003c**\u003e r) : (Symbol a :\u003c**\u003e l) : ps\n           step (Symbol a :\u003c**\u003e l) ps = (Symbol a :\u003c**\u003e l) : ps\n           step (Many ps) ps' = mergeMany (mergeMany ps ++ ps')\n\u003c/pre\u003e\u003cp\u003e(Also not guaranteed to terminate on all cases; \u003ccode\u003elet a = a \u003c* char\n \u003ccode\u003ea\u003c/code\u003e in optimize a\u003c/code\u003e diverges, but that parser never terminates for\n any string.)\n\u003c/p\u003e\u003cp\u003eExample of \u003ccode\u003eoptimize\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e tokens :: [String] -\u003e ProgramAlt ParserI String \n tokens = asum . map string\n \n example = [ \"abactor\", \"abacus\", \"abaft\", \"abaisance\", \"abaissed\", \"abalone\"\n           ]\n \n describe :: forall a. ProgramAlt ParserI a -\u003e Description\n describe = eval . viewAlt\n     where eval :: forall x. ProgramViewAlt ParserI x -\u003e Description\n           eval (Pure _) = Ok\n           eval (Symbol c :\u003c**\u003e k) = c :\u003e (eval k)\n           eval (Many ps) = OneOf (map eval ps)\n \n data Description = Ok \n                  | Char :\u003e Description\n                  | OneOf [Description] \n                    deriving Show\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edescribe $ tokens example\n\u003c/code\u003e\u003c/strong\u003eOneOf ['a' :\u003e ('b' :\u003e ('a' :\u003e ('c' :\u003e ('t' :\u003e ('o' :\u003e ('r' :\u003e Ok)))))),\n       OneOf ['a' :\u003e ('b' :\u003e ('a' :\u003e ('c' :\u003e ('u' :\u003e ('s' :\u003e Ok))))),\n              OneOf ['a' :\u003e ('b' :\u003e ('a' :\u003e ('f' :\u003e ('t' :\u003e Ok)))),\n                     OneOf ['a' :\u003e ('b' :\u003e ('a' :\u003e ('i' :\u003e ('s' :\u003e ('a' :\u003e ('n' :\u003e ('c' :\u003e ('e' :\u003e Ok)))))))),\n                            OneOf ['a' :\u003e ('b' :\u003e ('a' :\u003e ('i' :\u003e ('s' :\u003e ('s' :\u003e ('e' :\u003e ('d' :\u003e Ok))))))),\n                                   'a' :\u003e ('b' :\u003e ('a' :\u003e ('l' :\u003e ('o' :\u003e ('n' :\u003e ('e' :\u003e Ok))))))]]]]]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edescribe $ optimize (tokens example)\n\u003c/code\u003e\u003c/strong\u003e'a' :\u003e ('b' :\u003e ('a' :\u003e OneOf ['c' :\u003e OneOf ['t' :\u003e ('o' :\u003e ('r' :\u003e Ok)),'u' :\u003e ('s' :\u003e Ok)],\n                              OneOf ['f' :\u003e ('t' :\u003e Ok),\n                                     OneOf ['i' :\u003e ('s' :\u003e OneOf ['a' :\u003e ('n' :\u003e ('c' :\u003e ('e' :\u003e Ok))),\n                                                                  's' :\u003e ('e' :\u003e ('d' :\u003e Ok))]),\n                                            'l' :\u003e ('o' :\u003e ('n' :\u003e ('e' :\u003e Ok)))]]]))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Alternative-Operational.html",
        "fct-type": "module",
        "title": "Operational"
      },
      "index": {
        "description": "operational style Alternative programs See Control.Applicative.Operational for guidance on how to use this module Example simple applicative parsers import Control.Applicative import Control.Alternative.Operational import Control.Alternative.Monad void import Data.Functor.Compose Compose import Data.Traversable import Data.Maybe listToMaybe data ParserI where Symbol Char ParserI Char char Operational ParserI Char Char char singleton Symbol string Operational ParserI Applicative String String string traverse char oneOf Operational ParserI Alternative String Char oneOf foldr empty map char Example parser match parentheses and count depth parens ProgramAlt ParserI Int parens pure char fmap parens char Interpret parser program syntactically by pattern matching on its view runParser ProgramAlt ParserI String Maybe runParser fmap listToMaybe eval viewAlt where eval ProgramViewAlt ParserI String eval Pure pure eval Pure empty eval Symbol empty eval Symbol xs pure eval xs otherwise empty eval Many ps str fmap asum sequenceA map eval ps str asum Alternative asum foldr empty Alternatively programs may be interpreted in more denotational style runParser ProgramAlt ParserI String Maybe runParser firstSuccess runStateT interpretAlt evalParserI where firstSuccess Nothing firstSuccess Just firstSuccess xs firstSuccess xs evalParserI ParserI StateT String evalParserI Symbol do str get case str of xs put xs return otherwise mzero One of the big powers of ProgramAlt is that it allows for powerful static analysis of programs For example we can enumerate the strings accepted by non-degenerate parser Static analysis example enumerate the strings accepted by parser enumerate ProgramAlt ParserI String enumerate go showString viewAlt where go ShowS ProgramViewAlt ParserI String go strs Pure map strs go strs Symbol go map showChar strs go strs Many ps interleave map go strs ps interleave interleave foldr interleave2 where interleave2 interleave2 ys ys interleave2 xs ys interleave2 ys xs take enumerate parens enumerate isn guaranteed to terminate or even produce WHNF for all parsers e.g let char in enumerate diverges But this parser doesn accept any strings Or we can optimize non-degenerate parser by merging prefixes optimize ProgramAlt ParserI ProgramAlt ParserI optimize compileAlt merge viewAlt merge ProgramViewAlt ParserI ProgramViewAlt ParserI merge Pure merge Symbol Symbol merge merge Many ps Many mergeMany ps mergeMany ProgramViewAlt ParserI ProgramViewAlt ParserI mergeMany foldr step map merge where step Pure ps Pure ps step Symbol Symbol ps case compare of EQ Symbol Many mergeMany ps LT Symbol Symbol ps GT Symbol Symbol ps step Symbol ps Symbol ps step Many ps ps mergeMany mergeMany ps ps Also not guaranteed to terminate on all cases let char in optimize diverges but that parser never terminates for any string Example of optimize tokens String ProgramAlt ParserI String tokens asum map string example abactor abacus abaft abaisance abaissed abalone describe forall ProgramAlt ParserI Description describe eval viewAlt where eval forall ProgramViewAlt ParserI Description eval Pure Ok eval Symbol eval eval Many ps OneOf map eval ps data Description Ok Char Description OneOf Description deriving Show describe tokens example OneOf Ok OneOf Ok OneOf Ok OneOf Ok OneOf Ok Ok describe optimize tokens example OneOf OneOf Ok Ok OneOf Ok OneOf OneOf Ok Ok Ok",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "Operational",
        "normalized": "",
        "package": "free-operational",
        "partial": "Operational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#t:ProgramAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Alternative-Operational.html#ProgramAlt",
        "fct-type": "newtype",
        "title": "ProgramAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "ProgramAlt",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#t:ProgramViewAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "data",
        "fct-source": "src/Control-Alternative-Operational.html#ProgramViewAlt",
        "fct-type": "data",
        "title": "ProgramViewAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "ProgramViewAlt",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program View Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v::-60--42--42--62-",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "instr a -\u003e ProgramViewAlt instr (a -\u003e b) -\u003e ProgramViewAlt instr b",
        "fct-source": "src/Control-Alternative-Operational.html#ProgramViewAlt",
        "fct-type": "function",
        "title": ":\u003c**\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": ":\u003c**\u003e",
        "normalized": "a b-\u003eProgramViewAlt a(b-\u003ec)-\u003eProgramViewAlt a c",
        "package": "free-operational",
        "partial": "",
        "signature": "instr a-\u003eProgramViewAlt instr(a-\u003eb)-\u003eProgramViewAlt instr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:Many",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "[ProgramViewAlt instr a] -\u003e ProgramViewAlt instr a",
        "fct-source": "src/Control-Alternative-Operational.html#ProgramViewAlt",
        "fct-type": "function",
        "title": "Many"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "Many",
        "normalized": "[ProgramViewAlt a b]-\u003eProgramViewAlt a b",
        "package": "free-operational",
        "partial": "Many",
        "signature": "[ProgramViewAlt instr a]-\u003eProgramViewAlt instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:ProgramAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramAlt",
        "fct-source": "src/Control-Alternative-Operational.html#ProgramAlt",
        "fct-type": "function",
        "title": "ProgramAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "ProgramAlt",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:Pure",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "a -\u003e ProgramViewAlt instr a",
        "fct-source": "src/Control-Alternative-Operational.html#ProgramViewAlt",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "Pure",
        "normalized": "a-\u003eProgramViewAlt b a",
        "package": "free-operational",
        "partial": "Pure",
        "signature": "a-\u003eProgramViewAlt instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:compileAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramViewAlt instr a -\u003e ProgramAlt instr a",
        "fct-source": "src/Control-Alternative-Operational.html#compileAlt",
        "fct-type": "function",
        "title": "compileAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "compileAlt",
        "normalized": "ProgramViewAlt a b-\u003eProgramAlt a b",
        "package": "free-operational",
        "partial": "Alt",
        "signature": "ProgramViewAlt instr a-\u003eProgramAlt instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:foldProgramViewAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e r -\u003e r)-\u003e r-\u003e ([r] -\u003e r)-\u003e ProgramViewAlt instr a-\u003e r",
        "fct-type": "function",
        "title": "foldProgramViewAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "foldProgramViewAlt",
        "normalized": "(a b c d-\u003ee-\u003ee)-\u003ee-\u003e([e]-\u003ee)-\u003eProgramViewAlt c f-\u003ee",
        "package": "free-operational",
        "partial": "Program View Alt",
        "signature": "(forall x. instr x-\u003er-\u003er)-\u003er-\u003e([r]-\u003er)-\u003eProgramViewAlt instr a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:fromProgramAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramAlt instr a -\u003e f a",
        "fct-source": "src/Control-Alternative-Operational.html#fromProgramAlt",
        "fct-type": "function",
        "title": "fromProgramAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "fromProgramAlt",
        "normalized": "ProgramAlt a b-\u003ec b",
        "package": "free-operational",
        "partial": "Program Alt",
        "signature": "ProgramAlt instr a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:interpretAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e f x) -\u003e ProgramAlt instr a -\u003e f a",
        "fct-source": "src/Control-Alternative-Operational.html#interpretAlt",
        "fct-type": "function",
        "title": "interpretAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "interpretAlt",
        "normalized": "(a b c d-\u003ee d)-\u003eProgramAlt c f-\u003ee f",
        "package": "free-operational",
        "partial": "Alt",
        "signature": "(forall x. instr x-\u003ef x)-\u003eProgramAlt instr a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:toAlt",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret the program as a free \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "Alt (Coyoneda instr) a",
        "fct-source": "src/Control-Alternative-Operational.html#ProgramAlt",
        "fct-type": "function",
        "title": "toAlt"
      },
      "index": {
        "description": "Interpret the program as free Alternative Alt",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "toAlt",
        "normalized": "",
        "package": "free-operational",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Alternative-Operational.html#v:viewAlt",
      "description": {
        "fct-module": "Control.Alternative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramAlt instr a -\u003e ProgramViewAlt instr a",
        "fct-source": "src/Control-Alternative-Operational.html#viewAlt",
        "fct-type": "function",
        "title": "viewAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Alternative Operational",
        "module": "Control.Alternative.Operational",
        "name": "viewAlt",
        "normalized": "ProgramAlt a b-\u003eProgramViewAlt a b",
        "package": "free-operational",
        "partial": "Alt",
        "signature": "ProgramAlt instr a-\u003eProgramViewAlt instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e programs over an \u003ccode\u003eoperational\u003c/code\u003e-style instruction\n set, implemented on top of the \u003ccode\u003e\u003ca\u003eAp\u003c/a\u003e\u003c/code\u003e free \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Operational.html",
        "fct-type": "module",
        "title": "Operational"
      },
      "index": {
        "description": "Applicative programs over an operational style instruction set implemented on top of the Ap free Applicative type",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "Operational",
        "normalized": "",
        "package": "free-operational",
        "partial": "Operational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#t:AnyInstr",
      "description": {
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "data",
        "fct-source": "src/Control-Applicative-Operational.html#AnyInstr",
        "fct-type": "data",
        "title": "AnyInstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "AnyInstr",
        "normalized": "",
        "package": "free-operational",
        "partial": "Any Instr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#t:ProgramAp",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e program over instruction set \u003ccode\u003einstr\u003c/code\u003e.  This is\n modeled after the \u003ccode\u003eProgram\u003c/code\u003e type from \u003ccode\u003eoperational\u003c/code\u003e\n (\u003ca\u003ehttp://hackage.haskell.org/package/operational\u003c/a\u003e), but this one is\n an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, not a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.  This makes it less powerful, but\n in exchange for the sacrificed power \u003ccode\u003e\u003ca\u003eProgramAp\u003c/a\u003e\u003c/code\u003e is suceptible to\n much stronger static analysis.\n\u003c/p\u003e\u003cp\u003eFor examples of this (though applied to free applicatives), see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://gergo.erdi.hu/blog/2012-12-01-static_analysis_with_applicatives/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://paolocapriotti.com/blog/2013/04/03/free-applicative-functors/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee also the examples in \u003ca\u003eControl.Alternative.Operational\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Applicative-Operational.html#ProgramAp",
        "fct-type": "newtype",
        "title": "ProgramAp"
      },
      "index": {
        "description": "An Applicative program over instruction set instr This is modeled after the Program type from operational http hackage.haskell.org package operational but this one is an Applicative not Monad This makes it less powerful but in exchange for the sacrificed power ProgramAp is suceptible to much stronger static analysis For examples of this though applied to free applicatives see http gergo.erdi.hu blog static analysis with applicatives http paolocapriotti.com blog free-applicative-functors See also the examples in Control.Alternative.Operational",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "ProgramAp",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#t:ProgramViewAp",
      "description": {
        "fct-descr": "\u003cp\u003eA friendly concrete tree view type for \u003ccode\u003e\u003ca\u003eProgramAp\u003c/a\u003e\u003c/code\u003e.  Unlike the\n \u003ccode\u003e:\u003e\u003e=\u003c/code\u003e constructor in the \u003ccode\u003eProgramView\u003c/code\u003e type of\n \u003ca\u003eControl.Monad.Operational\u003c/a\u003e, whose second data member is a function\n that consumes an instruction result to generate the rest of the\n program, our \u003ccode\u003e\u003ca\u003e:\u003c**\u003e\u003c/a\u003e\u003c/code\u003e constructor exposes the rest of program\n immediately.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eProgramViewAp\u003c/a\u003e\u003c/code\u003e type normalizes the program into a\n different ordering and bracketing than the applicative \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n operator does.  The \u003ccode\u003e\u003ca\u003e:\u003c**\u003e\u003c/a\u003e\u003c/code\u003e constructor is an analogue of \u003ccode\u003e\u003ccode\u003e\u003ca\u003e\u003c**\u003e\u003c/a\u003e\u003c/code\u003e\n :: Applicative f =\u003e f a -\u003e f (a -\u003e b) -\u003e f b\u003c/code\u003e from\n \u003ca\u003eControl.Applicative\u003c/a\u003e.  The normalization means that you get a\n list-like structure with instructions as the elements (in the same\n order as their effects) and \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e as the terminator.\n\u003c/p\u003e\u003cp\u003eA static analysis example, based on Capriotti and Kaposi (2013,\n \u003ca\u003ehttp://paolocapriotti.com/blog/2013/04/03/free-applicative-functors/\u003c/a\u003e):\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE GADTs, RankNTypes, ScopedTypeVariables #-}\n\n import Control.Operational.Applicative\n \n data FileSystemI a where\n     Read  :: FilePath -\u003e FileSystemI String \n     Write :: FilePath -\u003e String -\u003e FileSystemI ()\n \n -- | Count how many file accesses a program does.\n count :: ProgramAp FileSystemI a -\u003e Int\n count = count' . viewAp\n     where count' :: forall x. ProgramViewAp FileSystemI x -\u003e Int\n           count' (Pure _)   = 0\n           count' (_ :\u003c**\u003e k) = succ (count' k)\n\u003c/pre\u003e\u003cp\u003eOr actually, just this:\n\u003c/p\u003e\u003cpre\u003e count :: ProgramAp FileSystemI a -\u003e Int\n count = length . instructions\n\u003c/pre\u003e\u003cp\u003eYou can also use the \u003ccode\u003e\u003ca\u003eProgramViewAp\u003c/a\u003e\u003c/code\u003e to interpret the program, in\n the style of the \u003ccode\u003eoperational\u003c/code\u003e package.  Example implementation of\n a simple terminal language in this style:\n\u003c/p\u003e\u003cpre\u003e data TermI a where\n     Say :: String -\u003e TermI ()\n     Get :: TermI String\n \n say :: String -\u003e ProgramAp TermI ()\n say = singleton . Say\n \n get :: ProgramAp TermI String\n get = singleton Get\n \n prompt :: String -\u003e ProgramAp TermI String\n prompt str = say str *\u003e get\n \n runTerm :: ProgramAp TermI a -\u003e IO a\n runTerm = eval . viewAp\n     where eval :: forall x. ProgramViewAp TermI x -\u003e IO x\n           eval (Pure a) = pure a\n           eval (Say str :\u003c**\u003e k) = putStr str \u003c**\u003e eval k\n           eval (Get :\u003c**\u003e k)     = getLine    \u003c**\u003e eval k \n\n example :: ProgramAp TermI (String, String)\n example = (,) \u003c$\u003e prompt \"First question: \" \u003c*\u003e prompt \"Second question: \"\n \n -- example = Say \"First question: \" :\u003c**\u003e (Get :\u003c**\u003e (Say \"Second question: \" :\u003c**\u003e (Get :\u003c**\u003e Pure (\\_ a _ b -\u003e (a, b)))))\n\u003c/pre\u003e\u003cp\u003eBut as a general rule, \u003ccode\u003e\u003ca\u003einterpretAp\u003c/a\u003e\u003c/code\u003e makes for shorter, less\n repetitive, fooler-proof interpreters:\n\u003c/p\u003e\u003cpre\u003e runTerm :: ProgramAp TermI a -\u003e IO a\n runTerm = interpretAp evalI\n     where evalI :: forall x. TermI x -\u003e IO x\n           evalI (Say str)   = putStr str\n           evalI Get         = getLine\n\u003c/pre\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "data",
        "fct-source": "src/Control-Applicative-Operational.html#ProgramViewAp",
        "fct-type": "data",
        "title": "ProgramViewAp"
      },
      "index": {
        "description": "friendly concrete tree view type for ProgramAp Unlike the constructor in the ProgramView type of Control.Monad.Operational whose second data member is function that consumes an instruction result to generate the rest of the program our constructor exposes the rest of program immediately Note that the ProgramViewAp type normalizes the program into different ordering and bracketing than the applicative operator does The constructor is an analogue of Applicative from Control.Applicative The normalization means that you get list-like structure with instructions as the elements in the same order as their effects and Pure as the terminator static analysis example based on Capriotti and Kaposi http paolocapriotti.com blog free-applicative-functors LANGUAGE GADTs RankNTypes ScopedTypeVariables import Control.Operational.Applicative data FileSystemI where Read FilePath FileSystemI String Write FilePath String FileSystemI Count how many file accesses program does count ProgramAp FileSystemI Int count count viewAp where count forall ProgramViewAp FileSystemI Int count Pure count succ count Or actually just this count ProgramAp FileSystemI Int count length instructions You can also use the ProgramViewAp to interpret the program in the style of the operational package Example implementation of simple terminal language in this style data TermI where Say String TermI Get TermI String say String ProgramAp TermI say singleton Say get ProgramAp TermI String get singleton Get prompt String ProgramAp TermI String prompt str say str get runTerm ProgramAp TermI IO runTerm eval viewAp where eval forall ProgramViewAp TermI IO eval Pure pure eval Say str putStr str eval eval Get getLine eval example ProgramAp TermI String String example prompt First question prompt Second question example Say First question Get Say Second question Get Pure But as general rule interpretAp makes for shorter less repetitive fooler-proof interpreters runTerm ProgramAp TermI IO runTerm interpretAp evalI where evalI forall TermI IO evalI Say str putStr str evalI Get getLine",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "ProgramViewAp",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program View Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v::-60--42--42--62-",
      "description": {
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "instr a -\u003e ProgramViewAp instr (a -\u003e b) -\u003e ProgramViewAp instr b",
        "fct-source": "src/Control-Applicative-Operational.html#ProgramViewAp",
        "fct-type": "function",
        "title": ":\u003c**\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": ":\u003c**\u003e",
        "normalized": "a b-\u003eProgramViewAp a(b-\u003ec)-\u003eProgramViewAp a c",
        "package": "free-operational",
        "partial": "",
        "signature": "instr a-\u003eProgramViewAp instr(a-\u003eb)-\u003eProgramViewAp instr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:AnyInstr",
      "description": {
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "forall a . AnyInstr (instr a)",
        "fct-source": "src/Control-Applicative-Operational.html#AnyInstr",
        "fct-type": "function",
        "title": "AnyInstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "AnyInstr",
        "normalized": "",
        "package": "free-operational",
        "partial": "Any Instr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:ProgramAp",
      "description": {
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramAp",
        "fct-source": "src/Control-Applicative-Operational.html#ProgramAp",
        "fct-type": "function",
        "title": "ProgramAp"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "ProgramAp",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:Pure",
      "description": {
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "a -\u003e ProgramViewAp instr a",
        "fct-source": "src/Control-Applicative-Operational.html#ProgramViewAp",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "Pure",
        "normalized": "a-\u003eProgramViewAp b a",
        "package": "free-operational",
        "partial": "Pure",
        "signature": "a-\u003eProgramViewAp instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:compileAp",
      "description": {
        "fct-descr": "\u003cp\u003eCompile a \u003ccode\u003e\u003ca\u003eProgramViewAp\u003c/a\u003e\u003c/code\u003e back into a \u003ccode\u003e\u003ca\u003eProgramAp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramViewAp instr a -\u003e ProgramAp instr a",
        "fct-source": "src/Control-Applicative-Operational.html#compileAp",
        "fct-type": "function",
        "title": "compileAp"
      },
      "index": {
        "description": "Compile ProgramViewAp back into ProgramAp",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "compileAp",
        "normalized": "ProgramViewAp a b-\u003eProgramAp a b",
        "package": "free-operational",
        "partial": "Ap",
        "signature": "ProgramViewAp instr a-\u003eProgramAp instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:foldProgramViewAp",
      "description": {
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e r -\u003e r) -\u003e r -\u003e ProgramViewAp instr a -\u003e r",
        "fct-source": "src/Control-Applicative-Operational.html#foldProgramViewAp",
        "fct-type": "function",
        "title": "foldProgramViewAp"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "foldProgramViewAp",
        "normalized": "(a b c d-\u003ee-\u003ee)-\u003ee-\u003eProgramViewAp c f-\u003ee",
        "package": "free-operational",
        "partial": "Program View Ap",
        "signature": "(forall x. instr x-\u003er-\u003er)-\u003er-\u003eProgramViewAp instr a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:fromProgramAp",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eProgramAp\u003c/a\u003e\u003c/code\u003e into any other \u003ccode\u003e\u003ca\u003eOperational\u003c/a\u003e\u003c/code\u003e program type that\n is at least as strong as \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e; e.g., lift an applicative\n program into a monadic one.  Note that not all applicatives are\n monads, so a lifted program may \"lose\" some of the\n interpretations that the original could be given.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramAp instr a -\u003e f a",
        "fct-source": "src/Control-Applicative-Operational.html#fromProgramAp",
        "fct-type": "function",
        "title": "fromProgramAp"
      },
      "index": {
        "description": "Lift ProgramAp into any other Operational program type that is at least as strong as Applicative e.g lift an applicative program into monadic one Note that not all applicatives are monads so lifted program may lose some of the interpretations that the original could be given",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "fromProgramAp",
        "normalized": "ProgramAp a b-\u003ec b",
        "package": "free-operational",
        "partial": "Program Ap",
        "signature": "ProgramAp instr a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:instructions",
      "description": {
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramAp instr a -\u003e [AnyInstr instr]",
        "fct-source": "src/Control-Applicative-Operational.html#instructions",
        "fct-type": "function",
        "title": "instructions"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "instructions",
        "normalized": "ProgramAp a b-\u003e[AnyInstr a]",
        "package": "free-operational",
        "partial": "",
        "signature": "ProgramAp instr a-\u003e[AnyInstr instr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:interpretAp",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a \u003ccode\u003e\u003ca\u003eProgramAp\u003c/a\u003e\u003c/code\u003e by interpreting each instruction as an\n \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e action. Example \u003ccode\u003eReader\u003c/code\u003e implementation:\n\u003c/p\u003e\u003cpre\u003e type Reader r a = ProgramAp (ReaderI r) a\n\n data ReaderI r a where\n     Ask :: ReaderI r r\n \n ask :: Reader r r\n ask = singleton Ask\n \n runReader :: forall r a. Reader r a -\u003e r -\u003e a\n runReader = interpretAp evalI\n     where evalI :: forall a. ReaderI r a -\u003e r -\u003e a\n           evalI Ask = id\n\u003c/pre\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e f x) -\u003e ProgramAp instr a -\u003e f a",
        "fct-source": "src/Control-Applicative-Operational.html#interpretAp",
        "fct-type": "function",
        "title": "interpretAp"
      },
      "index": {
        "description": "Evaluate ProgramAp by interpreting each instruction as an Applicative action Example Reader implementation type Reader ProgramAp ReaderI data ReaderI where Ask ReaderI ask Reader ask singleton Ask runReader forall Reader runReader interpretAp evalI where evalI forall ReaderI evalI Ask id",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "interpretAp",
        "normalized": "(a b c d-\u003ee d)-\u003eProgramAp c f-\u003ee f",
        "package": "free-operational",
        "partial": "Ap",
        "signature": "(forall x. instr x-\u003ef x)-\u003eProgramAp instr a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:toAp",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret a \u003ccode\u003e\u003ca\u003eProgramAp\u003c/a\u003e\u003c/code\u003e as a free applicative (\u003ccode\u003e\u003ca\u003eAp\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "Ap (Coyoneda instr) a",
        "fct-source": "src/Control-Applicative-Operational.html#ProgramAp",
        "fct-type": "function",
        "title": "toAp"
      },
      "index": {
        "description": "Interpret ProgramAp as free applicative Ap",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "toAp",
        "normalized": "",
        "package": "free-operational",
        "partial": "Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Applicative-Operational.html#v:viewAp",
      "description": {
        "fct-descr": "\u003cp\u003eMaterialize a \u003ccode\u003e\u003ca\u003eProgramAp\u003c/a\u003e\u003c/code\u003e as a concrete tree.  Note that\n \u003ccode\u003eProgramAp'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instances normalize their\n programs, so the view term may not look like the code that created\n it.  Instructions however will appear in the order that their\n effects should happen, from left to right.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramAp instr a -\u003e ProgramViewAp instr a",
        "fct-source": "src/Control-Applicative-Operational.html#viewAp",
        "fct-type": "function",
        "title": "viewAp"
      },
      "index": {
        "description": "Materialize ProgramAp as concrete tree Note that ProgramAp Functor and Applicative instances normalize their programs so the view term may not look like the code that created it Instructions however will appear in the order that their effects should happen from left to right",
        "hierarchy": "Control Applicative Operational",
        "module": "Control.Applicative.Operational",
        "name": "viewAp",
        "normalized": "ProgramAp a b-\u003eProgramViewAp a b",
        "package": "free-operational",
        "partial": "Ap",
        "signature": "ProgramAp instr a-\u003eProgramViewAp instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simpler, non-transformer version of this package's\n \u003ca\u003eControl.Monad.Operational\u003c/a\u003e's \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e type, using \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e\n directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Operational-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "simpler non-transformer version of this package Control.Monad.Operational Program type using Free directly",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "free-operational",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#t:Program",
      "description": {
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Operational-Simple.html#Program",
        "fct-type": "newtype",
        "title": "Program"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "Program",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#t:ProgramView",
      "description": {
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Operational-Simple.html#ProgramView",
        "fct-type": "data",
        "title": "ProgramView"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "ProgramView",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#v::-62--62--61-",
      "description": {
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "instr a -\u003e (a -\u003e Program instr b) -\u003e ProgramView instr b",
        "fct-source": "src/Control-Monad-Operational-Simple.html#ProgramView",
        "fct-type": "function",
        "title": ":\u003e\u003e="
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": ":\u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003eProgram a c)-\u003eProgramView a c",
        "package": "free-operational",
        "partial": "",
        "signature": "instr a-\u003e(a-\u003eProgram instr b)-\u003eProgramView instr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#v:Program",
      "description": {
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "Program",
        "fct-source": "src/Control-Monad-Operational-Simple.html#Program",
        "fct-type": "function",
        "title": "Program"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "Program",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#v:Return",
      "description": {
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "a -\u003e ProgramView instr a",
        "fct-source": "src/Control-Monad-Operational-Simple.html#ProgramView",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "Return",
        "normalized": "a-\u003eProgramView b a",
        "package": "free-operational",
        "partial": "Return",
        "signature": "a-\u003eProgramView instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#v:fromProgram",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eOperational\u003c/a\u003e\u003c/code\u003e instance at least as\n powerful as \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "Program instr a -\u003e m a",
        "fct-source": "src/Control-Monad-Operational-Simple.html#fromProgram",
        "fct-type": "function",
        "title": "fromProgram"
      },
      "index": {
        "description": "Lift Program to any Operational instance at least as powerful as Monad",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "fromProgram",
        "normalized": "Program a b-\u003ec b",
        "package": "free-operational",
        "partial": "Program",
        "signature": "Program instr a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#v:interpret",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e by translating each instruction to a\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e action.  Does not use \u003ccode\u003e\u003ca\u003eview\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e m x) -\u003e Program instr a -\u003e m a",
        "fct-source": "src/Control-Monad-Operational-Simple.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "Interpret Program by translating each instruction to Monad action Does not use view",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "interpret",
        "normalized": "(a b c d-\u003ee d)-\u003eProgram c f-\u003ee f",
        "package": "free-operational",
        "partial": "",
        "signature": "(forall x. instr x-\u003em x)-\u003eProgram instr a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#v:toFree",
      "description": {
        "fct-descr": "\u003cp\u003eIntepret the program as a \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "Free (Coyoneda instr) a",
        "fct-source": "src/Control-Monad-Operational-Simple.html#Program",
        "fct-type": "function",
        "title": "toFree"
      },
      "index": {
        "description": "Intepret the program as Free monad",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "toFree",
        "normalized": "",
        "package": "free-operational",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational-Simple.html#v:view",
      "description": {
        "fct-module": "Control.Monad.Operational.Simple",
        "fct-package": "free-operational",
        "fct-signature": "Program instr a -\u003e ProgramView instr a",
        "fct-source": "src/Control-Monad-Operational-Simple.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational Simple",
        "module": "Control.Monad.Operational.Simple",
        "name": "view",
        "normalized": "Program a b-\u003eProgramView a b",
        "package": "free-operational",
        "partial": "",
        "signature": "Program instr a-\u003eProgramView instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reconstruction of the \u003ccode\u003eoperational\u003c/code\u003e package in terms of the\n \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eThis module is meant to be a drop-in replacement for its\n counterpart in the \u003ccode\u003eoperational\u003c/code\u003e package.  Some of the\n implementation choices reflect that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e instr\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramView\u003c/a\u003e\u003c/code\u003e instr\u003c/code\u003e are type synonyms for\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e instr m\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramViewT\u003c/a\u003e\u003c/code\u003e instr m\u003c/code\u003e, just as in\n   \u003ccode\u003eoperational\u003c/code\u003e.  If you don't care for that,\n   \u003ca\u003eControl.Monad.Operational.Simple\u003c/a\u003e implements them directly in\n   terms of \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProgramViewT\u003c/a\u003e\u003c/code\u003e types and operations are\n reexported from \u003ca\u003eControl.Monad.Trans.Operational\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Operational.html",
        "fct-type": "module",
        "title": "Operational"
      },
      "index": {
        "description": "reconstruction of the operational package in terms of the FreeT monad transformer This module is meant to be drop-in replacement for its counterpart in the operational package Some of the implementation choices reflect that Program instr and ProgramView instr are type synonyms for ProgramT instr and ProgramViewT instr just as in operational If you don care for that Control.Monad.Operational.Simple implements them directly in terms of Free The ProgramT and ProgramViewT types and operations are reexported from Control.Monad.Trans.Operational",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "Operational",
        "normalized": "",
        "package": "free-operational",
        "partial": "Operational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003eDrop-in replacement for \u003ccode\u003eoperational\u003c/code\u003e's type synonym.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Operational.html#Program",
        "fct-type": "type",
        "title": "Program"
      },
      "index": {
        "description": "Drop-in replacement for operational type synonym",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "Program",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#t:ProgramView",
      "description": {
        "fct-descr": "\u003cp\u003eDrop-in replacement for \u003ccode\u003eoperational\u003c/code\u003e's eponymous type synonym.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Operational.html#ProgramView",
        "fct-type": "type",
        "title": "ProgramView"
      },
      "index": {
        "description": "Drop-in replacement for operational eponymous type synonym",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "ProgramView",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#v:fromProgram",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e into any \u003ccode\u003e\u003ca\u003eOperational\u003c/a\u003e\u003c/code\u003e type at least as strong\n as \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "Program instr a -\u003e m a",
        "fct-source": "src/Control-Monad-Operational.html#fromProgram",
        "fct-type": "function",
        "title": "fromProgram"
      },
      "index": {
        "description": "Lift Program into any Operational type at least as strong as Monad",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "fromProgram",
        "normalized": "Program a b-\u003ec b",
        "package": "free-operational",
        "partial": "Program",
        "signature": "Program instr a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#v:interpret",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e by interpreting each instruction as a\n monadic action.  Unlike \u003ccode\u003e\u003ca\u003einterpretWithMonad\u003c/a\u003e\u003c/code\u003e, this soes not use\n \u003ccode\u003e\u003ca\u003eview\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eProgramView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is not a drop-in replacement for \u003ccode\u003e\u003ca\u003einterpretWithMonad\u003c/a\u003e\u003c/code\u003e\n because it has an extra \u003ccode\u003eFunctor m\u003c/code\u003e constraint.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e m x) -\u003e Program instr a -\u003e m a",
        "fct-source": "src/Control-Monad-Operational.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "Interpret Program by interpreting each instruction as monadic action Unlike interpretWithMonad this soes not use view nor ProgramView This function is not drop-in replacement for interpretWithMonad because it has an extra Functor constraint",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "interpret",
        "normalized": "(a b c d-\u003ee d)-\u003eProgram c f-\u003ee f",
        "package": "free-operational",
        "partial": "",
        "signature": "(forall x. instr x-\u003em x)-\u003eProgram instr a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#v:interpretWithMonad",
      "description": {
        "fct-descr": "\u003cp\u003eDrop-in replacement for the eponymous function in the\n \u003ccode\u003eoperational\u003c/code\u003e package.  This is like \u003ccode\u003e\u003ca\u003einterpret\u003c/a\u003e\u003c/code\u003e but with a\n slightly broader type, and the same implementation as in\n \u003ccode\u003eoperational\u003c/code\u003e (in terms of \u003ccode\u003e\u003ca\u003eview\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e m x) -\u003e Program instr a -\u003e m a",
        "fct-source": "src/Control-Monad-Operational.html#interpretWithMonad",
        "fct-type": "function",
        "title": "interpretWithMonad"
      },
      "index": {
        "description": "Drop-in replacement for the eponymous function in the operational package This is like interpret but with slightly broader type and the same implementation as in operational in terms of view",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "interpretWithMonad",
        "normalized": "(a b c d-\u003ee d)-\u003eProgram c f-\u003ee f",
        "package": "free-operational",
        "partial": "With Monad",
        "signature": "(forall x. instr x-\u003em x)-\u003eProgram instr a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#v:liftProgram",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e.  Really the same as\n \u003ccode\u003e\u003ca\u003efromProgram\u003c/a\u003e\u003c/code\u003e, but with a more restricted type; this function is a\n drop-in replacement for the eponymous function in \u003ccode\u003eoperational\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "Program instr a -\u003e ProgramT instr m a",
        "fct-source": "src/Control-Monad-Operational.html#liftProgram",
        "fct-type": "function",
        "title": "liftProgram"
      },
      "index": {
        "description": "Lift Program into ProgramT Really the same as fromProgram but with more restricted type this function is drop-in replacement for the eponymous function in operational",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "liftProgram",
        "normalized": "Program a b-\u003eProgramT a c b",
        "package": "free-operational",
        "partial": "Program",
        "signature": "Program instr a-\u003eProgramT instr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#v:toFree",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e monad action for a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "Program instr a -\u003e Free (Coyoneda instr) a",
        "fct-source": "src/Control-Monad-Operational.html#toFree",
        "fct-type": "function",
        "title": "toFree"
      },
      "index": {
        "description": "The Free monad action for Program",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "toFree",
        "normalized": "Program a b-\u003eFree(Coyoneda a)b",
        "package": "free-operational",
        "partial": "Free",
        "signature": "Program instr a-\u003eFree(Coyoneda instr)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Operational.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003eDrop-in replacement for \u003ccode\u003eoperational\u003c/code\u003e's function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "free-operational",
        "fct-signature": "Program instr a -\u003e ProgramView instr a",
        "fct-source": "src/Control-Monad-Operational.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "Drop-in replacement for operational function",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "view",
        "normalized": "Program a b-\u003eProgramView a b",
        "package": "free-operational",
        "partial": "",
        "signature": "Program instr a-\u003eProgramView instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Operational.html",
        "fct-type": "module",
        "title": "Operational"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "Operational",
        "normalized": "",
        "package": "free-operational",
        "partial": "Operational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#t:ProgramT",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Operational.html#ProgramT",
        "fct-type": "newtype",
        "title": "ProgramT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "ProgramT",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#t:ProgramViewT",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Operational.html#ProgramViewT",
        "fct-type": "data",
        "title": "ProgramViewT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "ProgramViewT",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v::-62--62--61-",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "instr a -\u003e (a -\u003e ProgramT instr m b) -\u003e ProgramViewT instr m b",
        "fct-source": "src/Control-Monad-Trans-Operational.html#ProgramViewT",
        "fct-type": "function",
        "title": ":\u003e\u003e="
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": ":\u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003eProgramT a c d)-\u003eProgramViewT a c d",
        "package": "free-operational",
        "partial": "",
        "signature": "instr a-\u003e(a-\u003eProgramT instr m b)-\u003eProgramViewT instr m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v:ProgramT",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramT",
        "fct-source": "src/Control-Monad-Trans-Operational.html#ProgramT",
        "fct-type": "function",
        "title": "ProgramT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "ProgramT",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v:Return",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "a -\u003e ProgramViewT instr m a",
        "fct-source": "src/Control-Monad-Trans-Operational.html#ProgramViewT",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "Return",
        "normalized": "a-\u003eProgramViewT b c a",
        "package": "free-operational",
        "partial": "Return",
        "signature": "a-\u003eProgramViewT instr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v:interpretM",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e m x) -\u003e ProgramT instr m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Operational.html#interpretM",
        "fct-type": "function",
        "title": "interpretM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "interpretM",
        "normalized": "(a b c d-\u003ee d)-\u003eProgramT c e f-\u003ee f",
        "package": "free-operational",
        "partial": "",
        "signature": "(forall x. instr x-\u003em x)-\u003eProgramT instr m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v:interpretT",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an intepretation of \u003ccode\u003einstr x\u003c/code\u003e as actions over a given monad\n transformer \u003ccode\u003et\u003c/code\u003e (transforming over an arbitrary monad \u003ccode\u003em\u003c/code\u003e),\n interpret \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e instr\u003c/code\u003e as a monad transformer \u003ccode\u003et\u003c/code\u003e.  Read that\n sentence and the type carefully: the instruction interpretation can\n pick its choice of \u003ccode\u003et\u003c/code\u003e but not \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "instr x -\u003e t n x)-\u003e ProgramT instr m a-\u003e t m a",
        "fct-type": "function",
        "title": "interpretT"
      },
      "index": {
        "description": "Given an intepretation of instr as actions over given monad transformer transforming over an arbitrary monad interpret ProgramT instr as monad transformer Read that sentence and the type carefully the instruction interpretation can pick its choice of but not",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "interpretT",
        "normalized": "a b-\u003ec d b)-\u003eProgramT a e f-\u003ec e f",
        "package": "free-operational",
        "partial": "",
        "signature": "instr x-\u003et n x)-\u003eProgramT instr m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v:interpretTM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an intepretation of \u003ccode\u003einstr x\u003c/code\u003e as actions over a given\n transformed monad \u003ccode\u003et m\u003c/code\u003e, interpret \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e instr\u003c/code\u003e as a\n transformed monad \u003ccode\u003et m\u003c/code\u003e.  Read that sentence and the type\n carefully: the instruction interpretation can pick its choice of\n both \u003ccode\u003et\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e t m x)-\u003e ProgramT instr m a-\u003e t m a",
        "fct-type": "function",
        "title": "interpretTM"
      },
      "index": {
        "description": "Given an intepretation of instr as actions over given transformed monad interpret ProgramT instr as transformed monad Read that sentence and the type carefully the instruction interpretation can pick its choice of both and",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "interpretTM",
        "normalized": "(a b c d-\u003ee f d)-\u003eProgramT c f g-\u003ee f g",
        "package": "free-operational",
        "partial": "TM",
        "signature": "(forall x. instr x-\u003et m x)-\u003eProgramT instr m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v:toFreeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "FreeT (Coyoneda instr) m a",
        "fct-source": "src/Control-Monad-Trans-Operational.html#ProgramT",
        "fct-type": "function",
        "title": "toFreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "toFreeT",
        "normalized": "",
        "package": "free-operational",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Monad-Trans-Operational.html#v:viewT",
      "description": {
        "fct-module": "Control.Monad.Trans.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramT instr m a -\u003e m (ProgramViewT instr m a)",
        "fct-source": "src/Control-Monad-Trans-Operational.html#viewT",
        "fct-type": "function",
        "title": "viewT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operational",
        "module": "Control.Monad.Trans.Operational",
        "name": "viewT",
        "normalized": "ProgramT a b c-\u003eb(ProgramViewT a b c)",
        "package": "free-operational",
        "partial": "",
        "signature": "ProgramT instr m a-\u003em(ProgramViewT instr m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eoperational\u003c/code\u003e-style programs for \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.  See the\n documentation for \u003ca\u003eControl.Applicative.Operational\u003c/a\u003e and\n \u003ca\u003eControl.Monad.Operational\u003c/a\u003e for guidance on how to use this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-MonadPlus-Operational.html",
        "fct-type": "module",
        "title": "Operational"
      },
      "index": {
        "description": "operational style programs for MonadPlus See the documentation for Control.Applicative.Operational and Control.Monad.Operational for guidance on how to use this module",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "Operational",
        "normalized": "",
        "package": "free-operational",
        "partial": "Operational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#t:ProgramP",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "newtype",
        "fct-source": "src/Control-MonadPlus-Operational.html#ProgramP",
        "fct-type": "newtype",
        "title": "ProgramP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "ProgramP",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#t:ProgramViewP",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "data",
        "fct-source": "src/Control-MonadPlus-Operational.html#ProgramViewP",
        "fct-type": "data",
        "title": "ProgramViewP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "ProgramViewP",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v::-62--62--61-",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "instr a -\u003e (a -\u003e ProgramP instr b) -\u003e ProgramViewP instr b",
        "fct-source": "src/Control-MonadPlus-Operational.html#ProgramViewP",
        "fct-type": "function",
        "title": ":\u003e\u003e="
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": ":\u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003eProgramP a c)-\u003eProgramViewP a c",
        "package": "free-operational",
        "partial": "",
        "signature": "instr a-\u003e(a-\u003eProgramP instr b)-\u003eProgramViewP instr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v:MPlus",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "[ProgramViewP instr a] -\u003e ProgramViewP instr a",
        "fct-source": "src/Control-MonadPlus-Operational.html#ProgramViewP",
        "fct-type": "function",
        "title": "MPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "MPlus",
        "normalized": "[ProgramViewP a b]-\u003eProgramViewP a b",
        "package": "free-operational",
        "partial": "MPlus",
        "signature": "[ProgramViewP instr a]-\u003eProgramViewP instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v:ProgramP",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramP",
        "fct-source": "src/Control-MonadPlus-Operational.html#ProgramP",
        "fct-type": "function",
        "title": "ProgramP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "ProgramP",
        "normalized": "",
        "package": "free-operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v:Return",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "a -\u003e ProgramViewP instr a",
        "fct-source": "src/Control-MonadPlus-Operational.html#ProgramViewP",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "Return",
        "normalized": "a-\u003eProgramViewP b a",
        "package": "free-operational",
        "partial": "Return",
        "signature": "a-\u003eProgramViewP instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v:fromProgramP",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramP instr a -\u003e m a",
        "fct-source": "src/Control-MonadPlus-Operational.html#fromProgramP",
        "fct-type": "function",
        "title": "fromProgramP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "fromProgramP",
        "normalized": "ProgramP a b-\u003ec b",
        "package": "free-operational",
        "partial": "Program",
        "signature": "ProgramP instr a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v:interpretP",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e m x) -\u003e ProgramP instr a -\u003e m a",
        "fct-source": "src/Control-MonadPlus-Operational.html#interpretP",
        "fct-type": "function",
        "title": "interpretP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "interpretP",
        "normalized": "(a b c d-\u003ee d)-\u003eProgramP c f-\u003ee f",
        "package": "free-operational",
        "partial": "",
        "signature": "(forall x. instr x-\u003em x)-\u003eProgramP instr a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v:toFree",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret the program as a free \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "Free (Coyoneda instr) a",
        "fct-source": "src/Control-MonadPlus-Operational.html#ProgramP",
        "fct-type": "function",
        "title": "toFree"
      },
      "index": {
        "description": "Interpret the program as free MonadPlus",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "toFree",
        "normalized": "",
        "package": "free-operational",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-MonadPlus-Operational.html#v:view",
      "description": {
        "fct-module": "Control.MonadPlus.Operational",
        "fct-package": "free-operational",
        "fct-signature": "ProgramP instr a -\u003e ProgramViewP instr a",
        "fct-source": "src/Control-MonadPlus-Operational.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "",
        "hierarchy": "Control MonadPlus Operational",
        "module": "Control.MonadPlus.Operational",
        "name": "view",
        "normalized": "ProgramP a b-\u003eProgramViewP a b",
        "package": "free-operational",
        "partial": "",
        "signature": "ProgramP instr a-\u003eProgramViewP instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Operational-Class.html#",
      "description": {
        "fct-module": "Control.Operational.Class",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Operational-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Operational Class",
        "module": "Control.Operational.Class",
        "name": "Class",
        "normalized": "",
        "package": "free-operational",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Operational-Class.html#t:Operational",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of operational programs.  \n\u003c/p\u003e",
        "fct-module": "Control.Operational.Class",
        "fct-package": "free-operational",
        "fct-signature": "class",
        "fct-source": "src/Control-Operational-Class.html#Operational",
        "fct-type": "class",
        "title": "Operational"
      },
      "index": {
        "description": "The class of operational programs",
        "hierarchy": "Control Operational Class",
        "module": "Control.Operational.Class",
        "name": "Operational",
        "normalized": "",
        "package": "free-operational",
        "partial": "Operational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Operational-Class.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eMake a program out of an instruction.\n\u003c/p\u003e",
        "fct-module": "Control.Operational.Class",
        "fct-package": "free-operational",
        "fct-signature": "instr a -\u003e p a",
        "fct-source": "src/Control-Operational-Class.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "Make program out of an instruction",
        "hierarchy": "Control Operational Class",
        "module": "Control.Operational.Class",
        "name": "singleton",
        "normalized": "a b-\u003ec b",
        "package": "free-operational",
        "partial": "",
        "signature": "instr a-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Operational-Instruction.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for working with instructions and instruction sets.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eData.Functor.Coproduct\u003c/a\u003e module is very useful with instruction\n sets, so this module reexports it.  The \u003ccode\u003e\u003ca\u003eCoproduct\u003c/a\u003e\u003c/code\u003e type can be\n used to take the union of two instruction sets, and the \u003ccode\u003e\u003ca\u003ecoproduct\u003c/a\u003e\u003c/code\u003e\n function can be used to construct an instruction evaluation for\n such an union.  So if we have these two instruction evaluations:\n\u003c/p\u003e\u003cpre\u003e evalI  :: forall x. instr  x -\u003e f x\n evalI' :: forall x. instr' x -\u003e f x \n\u003c/pre\u003e\u003cp\u003ethen their \u003ccode\u003e\u003ca\u003ecoproduct\u003c/a\u003e\u003c/code\u003e is an evaluation for the union of the\n instruction sets:\n\u003c/p\u003e\u003cpre\u003e coproduct evalI evalI' :: forall x. (Coproduct instr instr' x) -\u003e f x\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Operational.Instruction",
        "fct-package": "free-operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Operational-Instruction.html",
        "fct-type": "module",
        "title": "Instruction"
      },
      "index": {
        "description": "Utility functions for working with instructions and instruction sets The Data.Functor.Coproduct module is very useful with instruction sets so this module reexports it The Coproduct type can be used to take the union of two instruction sets and the coproduct function can be used to construct an instruction evaluation for such an union So if we have these two instruction evaluations evalI forall instr evalI forall instr then their coproduct is an evaluation for the union of the instruction sets coproduct evalI evalI forall Coproduct instr instr",
        "hierarchy": "Control Operational Instruction",
        "module": "Control.Operational.Instruction",
        "name": "Instruction",
        "normalized": "",
        "package": "free-operational",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Operational-Instruction.html#v:liftEvalI",
      "description": {
        "fct-descr": "\u003cp\u003eLift an operational instruction evaluator into a free \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n evaluator.\n\u003c/p\u003e",
        "fct-module": "Control.Operational.Instruction",
        "fct-package": "free-operational",
        "fct-signature": "(forall x.  instr x -\u003e f x) -\u003e Coyoneda instr a -\u003e f a",
        "fct-source": "src/Control-Operational-Instruction.html#liftEvalI",
        "fct-type": "function",
        "title": "liftEvalI"
      },
      "index": {
        "description": "Lift an operational instruction evaluator into free Functor evaluator",
        "hierarchy": "Control Operational Instruction",
        "module": "Control.Operational.Instruction",
        "name": "liftEvalI",
        "normalized": "(a b c d-\u003ee d)-\u003eCoyoneda c f-\u003ee f",
        "package": "free-operational",
        "partial": "Eval",
        "signature": "(forall x. instr x-\u003ef x)-\u003eCoyoneda instr a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/free-operational/docs/Control-Operational-Instruction.html#v:liftInstr",
      "description": {
        "fct-module": "Control.Operational.Instruction",
        "fct-package": "free-operational",
        "fct-signature": "instr a -\u003e Coyoneda instr a",
        "fct-source": "src/Control-Operational-Instruction.html#liftInstr",
        "fct-type": "function",
        "title": "liftInstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Operational Instruction",
        "module": "Control.Operational.Instruction",
        "name": "liftInstr",
        "normalized": "a b-\u003eCoyoneda a b",
        "package": "free-operational",
        "partial": "Instr",
        "signature": "instr a-\u003eCoyoneda instr a"
      }
    }
  }
]