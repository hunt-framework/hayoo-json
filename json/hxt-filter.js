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
        "word": "hxt-filter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003egeneral usefull state monad for a local state and IO\n\u003c/p\u003e\u003cp\u003eThis module is used for threading a state and io actions\n through a computation.\n Here the monad is constructed by hand.\n It could easily be refactored with the use of the monad transformer library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.MonadStateIO",
          "name": "MonadStateIO",
          "package": "hxt-filter",
          "source": "src/Control-Monad-MonadStateIO.html",
          "type": "module"
        },
        "index": {
          "description": "general usefull state monad for local state and IO This module is used for threading state and io actions through computation Here the monad is constructed by hand It could easily be refactored with the use of the monad transformer library",
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "MonadStateIO",
          "package": "hxt-filter",
          "partial": "Monad State IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonadStateIO",
          "name": "StateIO",
          "package": "hxt-filter",
          "source": "src/Control-Monad-MonadStateIO.html#StateIO",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "StateIO",
          "package": "hxt-filter",
          "partial": "State IO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#t:StateIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonadStateIO",
          "name": "STIO",
          "package": "hxt-filter",
          "signature": "STIO",
          "source": "src/Control-Monad-MonadStateIO.html#StateIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "STIO",
          "package": "hxt-filter",
          "partial": "STIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:STIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the state with a given function and return the new state\n\u003c/p\u003e",
          "module": "Control.Monad.MonadStateIO",
          "name": "changeState",
          "package": "hxt-filter",
          "signature": "(state -\u003e state) -\u003e StateIO state state",
          "source": "src/Control-Monad-MonadStateIO.html#changeState",
          "type": "function"
        },
        "index": {
          "description": "change the state with given function and return the new state",
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "changeState",
          "normalized": "(a-\u003ea)-\u003eStateIO a a",
          "package": "hxt-filter",
          "partial": "State",
          "signature": "(state-\u003estate)-\u003eStateIO state state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:changeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the state\n\u003c/p\u003e",
          "module": "Control.Monad.MonadStateIO",
          "name": "getState",
          "package": "hxt-filter",
          "signature": "StateIO state state",
          "source": "src/Control-Monad-MonadStateIO.html#getState",
          "type": "function"
        },
        "index": {
          "description": "read the state",
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "getState",
          "package": "hxt-filter",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift IO command to \u003ccode\u003e\u003ca\u003eStateIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.MonadStateIO",
          "name": "io",
          "package": "hxt-filter",
          "signature": "IO a -\u003e StateIO state a",
          "source": "src/Control-Monad-MonadStateIO.html#io",
          "type": "function"
        },
        "index": {
          "description": "lift IO command to StateIO",
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "io",
          "normalized": "IO a-\u003eStateIO b a",
          "package": "hxt-filter",
          "signature": "IO a-\u003eStateIO state a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a \u003ccode\u003e\u003ca\u003eStateIO\u003c/a\u003e\u003c/code\u003e command with an initial state\n\u003c/p\u003e",
          "module": "Control.Monad.MonadStateIO",
          "name": "run",
          "package": "hxt-filter",
          "signature": "state -\u003e StateIO state res -\u003e IO res",
          "source": "src/Control-Monad-MonadStateIO.html#run",
          "type": "function"
        },
        "index": {
          "description": "run StateIO command with an initial state",
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "run",
          "normalized": "a-\u003eStateIO a b-\u003eIO b",
          "package": "hxt-filter",
          "signature": "state-\u003eStateIO state res-\u003eIO res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the state\n\u003c/p\u003e",
          "module": "Control.Monad.MonadStateIO",
          "name": "setState",
          "package": "hxt-filter",
          "signature": "state -\u003e StateIO state state",
          "source": "src/Control-Monad-MonadStateIO.html#setState",
          "type": "function"
        },
        "index": {
          "description": "set the state",
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "setState",
          "normalized": "a-\u003eStateIO a a",
          "package": "hxt-filter",
          "partial": "State",
          "signature": "state-\u003eStateIO state state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonadStateIO",
          "name": "trans",
          "package": "hxt-filter",
          "signature": "state -\u003e IO (res, state)",
          "source": "src/Control-Monad-MonadStateIO.html#StateIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "trans",
          "normalized": "a-\u003eIO(b,a)",
          "package": "hxt-filter",
          "signature": "state-\u003eIO(res,state)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estate inspection command: a \"show\"-like function is applied to the state\n and the result is written to stderr.\n\u003c/p\u003e",
          "module": "Control.Monad.MonadStateIO",
          "name": "trcState",
          "package": "hxt-filter",
          "signature": "(state -\u003e String) -\u003e StateIO state ()",
          "source": "src/Control-Monad-MonadStateIO.html#trcState",
          "type": "function"
        },
        "index": {
          "description": "state inspection command show like function is applied to the state and the result is written to stderr",
          "hierarchy": "Control Monad MonadStateIO",
          "module": "Control.Monad.MonadStateIO",
          "name": "trcState",
          "normalized": "(a-\u003eString)-\u003eStateIO a()",
          "package": "hxt-filter",
          "partial": "State",
          "signature": "(state-\u003eString)-\u003eStateIO state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:trcState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFilter for n-ary tree structure with filter combinators\n   copied and modified from HaXml (\u003ca\u003ehttp://www.cs.york.ac.uk/fp/HaXml/\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eSimilar but more flexible functions for tree processing are defined in the\n   arrow classes \u003ca\u003eControl.Arrow.ArrowList\u003c/a\u003e, \u003ca\u003eControl.Arrow.ArrowIf\u003c/a\u003e, \u003ca\u003eControl.Arrow.ArrowTree\u003c/a\u003e and \u003ca\u003eControl.Arrow.ArrowState\u003c/a\u003e.\n   For new applications, especially for XML processing, it's recommended to use the arrow interface\n   \u003ca\u003eText.XML.HXT.Arrow\u003c/a\u003e instead of this filter approach as part of the api \u003ca\u003eText.XML.HXT.Parser\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "Filter",
          "package": "hxt-filter",
          "source": "src/Data-Tree-NTree-Filter.html",
          "type": "module"
        },
        "index": {
          "description": "Filter for n-ary tree structure with filter combinators copied and modified from HaXml http www.cs.york.ac.uk fp HaXml Similar but more flexible functions for tree processing are defined in the arrow classes Control.Arrow.ArrowList Control.Arrow.ArrowIf Control.Arrow.ArrowTree and Control.Arrow.ArrowState For new applications especially for XML processing it recommended to use the arrow interface Text.XML.HXT.Arrow instead of this filter approach as part of the api Text.XML.HXT.Parser",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "Filter",
          "package": "hxt-filter",
          "partial": "Filter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eauxiliary datatype for cases within choice filter\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "IfThen",
          "package": "hxt-filter",
          "source": "src/Data-Tree-NTree-Filter.html#IfThen",
          "type": "data"
        },
        "index": {
          "description": "auxiliary datatype for cases within choice filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "IfThen",
          "package": "hxt-filter",
          "partial": "If Then",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#t:IfThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etree filter type: a function mapping a tree onto a list of trees\n\u003c/p\u003e\u003cp\u003efilter can be used in various ways, as predicates, selectors, transformers, ...\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "TFilter",
          "package": "hxt-filter",
          "source": "src/Data-Tree-NTree-Filter.html#TFilter",
          "type": "type"
        },
        "index": {
          "description": "tree filter type function mapping tree onto list of trees filter can be used in various ways as predicates selectors transformers",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "TFilter",
          "package": "hxt-filter",
          "partial": "TFilter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#t:TFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea filter for sequences\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "TSFilter",
          "package": "hxt-filter",
          "source": "src/Data-Tree-NTree-Filter.html#TSFilter",
          "type": "type"
        },
        "index": {
          "description": "filter for sequences",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "TSFilter",
          "package": "hxt-filter",
          "partial": "TSFilter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#t:TSFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix operator for applying a filter to a list of trees\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the filter\n\u003c/li\u003e\u003cli\u003e 2.parameter ts :  the list of trees\n\u003c/li\u003e\u003cli\u003e returns : the concatenated list of results\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "($$)",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "infix operator for applying filter to list of trees parameter the filter parameter ts the list of trees returns the concatenated list of results",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "($$) $$",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix operator for applying a monadic filter to a list of trees,\n typically used in do-notation for processing of intermediate results.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the monadic filter\n\u003c/li\u003e\u003cli\u003e 2.parameter ts :  the list of trees\n\u003c/li\u003e\u003cli\u003e returns : the concatenated list of results\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : '($$)'\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "($$\u003c)",
          "package": "hxt-filter",
          "signature": "(a -\u003e m [b]) -\u003e [a] -\u003e m [b]",
          "source": "src/Data-Tree-NTree-Filter.html#%24%24%3C",
          "type": "function"
        },
        "index": {
          "description": "infix operator for applying monadic filter to list of trees typically used in do-notation for processing of intermediate results parameter the monadic filter parameter ts the list of trees returns the concatenated list of results see also",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "($$\u003c) $$\u003c",
          "normalized": "(a-\u003eb[c])-\u003e[a]-\u003eb[c]",
          "package": "hxt-filter",
          "signature": "(a-\u003em[b])-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-36--36--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary parallel composition, the logical OR for predicate filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e returns : the filter for applying f1 and f2 both to an argument tree and concatenating the results\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "(+++)",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "binary parallel composition the logical OR for predicate filter parameter f1 the filter parameter f2 the filter returns the filter for applying f1 and f2 both to an argument tree and concatenating the results",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "(+++) +++",
          "normalized": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary parallel composition, the logical OR for predicate filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e returns : the filter for applying f1 and f2 both to an argument tree and concatenating the results\n see also: \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatM\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "(+++\u003e\u003e)",
          "package": "hxt-filter",
          "signature": "(a -\u003e m [b]) -\u003e (a -\u003e m [b]) -\u003e a -\u003e m [b]",
          "source": "src/Data-Tree-NTree-Filter.html#%2B%2B%2B%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "binary parallel composition the logical OR for predicate filter parameter f1 the filter parameter f2 the filter returns the filter for applying f1 and f2 both to an argument tree and concatenating the results see also cat catM",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "(+++\u003e\u003e) +++\u003e\u003e",
          "normalized": "(a-\u003eb[c])-\u003e(a-\u003eb[c])-\u003ea-\u003eb[c]",
          "package": "hxt-filter",
          "signature": "(a-\u003em[b])-\u003e(a-\u003em[b])-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-43--43--43--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epronounced \"slash\", meaning g inside f\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "(/\u003e)",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "pronounced slash meaning inside",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "(/\u003e) /\u003e",
          "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epronounced \"outside\" meaning f containing g\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "(\u003c/)",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#%3C%2F",
          "type": "function"
        },
        "index": {
          "description": "pronounced outside meaning containing",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "(\u003c/) \u003c/",
          "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-60--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epronounced \"followed by\", defined as: \u003ccode\u003ef .\u003e g = g `o` f\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eallows filter composition in a more readable way from left to right\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e returns : the composition of f1 and f2\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e, '(..\u003e)'\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "(.\u003e)",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e [c]",
          "source": "src/Data-Tree-NTree-Filter.html#.%3E",
          "type": "function"
        },
        "index": {
          "description": "pronounced followed by defined as allows filter composition in more readable way from left to right parameter f1 the filter parameter f2 the filter returns the composition of f1 and f2 see also",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "(.\u003e) .\u003e",
          "normalized": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[c]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esequential composition of monadic filters, monadic version of \".\u003e\".\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. monadic filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. monadic filter\n\u003c/li\u003e\u003cli\u003e returns : the monadic fiter applying first f1 to n and then f2 to the result (like function composition)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : '(.\u003e)'\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "(.\u003e\u003e)",
          "package": "hxt-filter",
          "signature": "(a -\u003e m [b]) -\u003e (b -\u003e m [c]) -\u003e a -\u003e m [c]",
          "source": "src/Data-Tree-NTree-Filter.html#.%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "sequential composition of monadic filters monadic version of parameter f1 the monadic filter parameter f2 the monadic filter returns the monadic fiter applying first f1 to and then f2 to the result like function composition see also",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "(.\u003e\u003e) .\u003e\u003e",
          "normalized": "(a-\u003eb[c])-\u003e(c-\u003eb[d])-\u003ea-\u003eb[d]",
          "package": "hxt-filter",
          "signature": "(a-\u003em[b])-\u003e(b-\u003em[c])-\u003ea-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:.-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especial sequential composition.\n\u003c/p\u003e\u003cp\u003efilter f is applied to an argument t.\n then filter g is applied to all elements of the result list,\n but the argument t is also passed as extra parameter to g.\n\u003c/p\u003e\u003cp\u003eThis allows for step by step transformations of a tree\n with access to the original tree in every\n transformation step.\n\u003c/p\u003e\u003cp\u003esee also : '(.\u003e)', \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "(..\u003e)",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (a -\u003e b -\u003e [d]) -\u003e a -\u003e [d]",
          "source": "src/Data-Tree-NTree-Filter.html#..%3E",
          "type": "function"
        },
        "index": {
          "description": "special sequential composition filter is applied to an argument then filter is applied to all elements of the result list but the argument is also passed as extra parameter to This allows for step by step transformations of tree with access to the original tree in every transformation step see also",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "(..\u003e) ..\u003e",
          "normalized": "(a-\u003e[b])-\u003e(a-\u003eb-\u003e[c])-\u003ea-\u003e[c]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(a-\u003eb-\u003e[d])-\u003ea-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:..-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.NTree.Filter",
          "name": ":-\u003e",
          "package": "hxt-filter",
          "signature": "a :-\u003e b",
          "source": "src/Data-Tree-NTree-Filter.html#IfThen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": ":-\u003e",
          "normalized": "a-\u003eb",
          "package": "hxt-filter",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a list of filters, a \"union\" for lists, for predicate filters the generalized OR\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fs :  the list of filters\n\u003c/li\u003e\u003cli\u003e returns : the composing filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "cat",
          "package": "hxt-filter",
          "signature": "[a -\u003e [b]] -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#cat",
          "type": "function"
        },
        "index": {
          "description": "apply list of filters union for lists for predicate filters the generalized OR parameter fs the list of filters returns the composing filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "cat",
          "normalized": "[a-\u003e[b]]-\u003ea-\u003e[b]",
          "package": "hxt-filter",
          "signature": "[a-\u003e[b]]-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a list of monadic filters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fs :  the list of filters\n\u003c/li\u003e\u003cli\u003e returns : the composing filter\n see also: \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+++\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "catM",
          "package": "hxt-filter",
          "signature": "[a -\u003e m [b]] -\u003e a -\u003e m [b]",
          "source": "src/Data-Tree-NTree-Filter.html#catM",
          "type": "function"
        },
        "index": {
          "description": "apply list of monadic filters parameter fs the list of filters returns the composing filter see also cat",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "catM",
          "normalized": "[a-\u003eb[c]]-\u003ea-\u003eb[c]",
          "package": "hxt-filter",
          "signature": "[a-\u003em[b]]-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:catM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiway branch. The list of cases \u003ccode\u003ef :-\u003e g\u003c/code\u003e is processed sequentially,\n in the first case for that f holds g is applied, if no case matches, \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e is\n applied.\n This filter can be used like a case expression: \u003ccode\u003echoice [ p1 :-\u003e f1, p2 :-\u003e f2, ... , this :-\u003e defaultFilter]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echoiceM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "choice",
          "package": "hxt-filter",
          "signature": "[IfThen (a -\u003e [c]) (a -\u003e [b])] -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#choice",
          "type": "function"
        },
        "index": {
          "description": "multiway branch The list of cases is processed sequentially in the first case for that holds is applied if no case matches none is applied This filter can be used like case expression choice p1 f1 p2 f2 this defaultFilter see also iff choiceM",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "choice",
          "normalized": "[IfThen(a-\u003e[b])(a-\u003e[c])]-\u003ea-\u003e[c]",
          "package": "hxt-filter",
          "signature": "[IfThen(a-\u003e[c])(a-\u003e[b])]-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic version of multiway branch. The list of cases \u003ccode\u003ef :-\u003e g\u003c/code\u003e is processed sequentially,\n in the first case for that f holds g is applied, if no case matches, \u003ccode\u003e\u003ca\u003enoneM\u003c/a\u003e\u003c/code\u003e is\n applied.\n This filter can be used like a case expression: \u003ccode\u003echoiceM [ p1 :-\u003e f1, p2 :-\u003e f2, ... , thisM :-\u003e defaultFilter]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003echoice\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "choiceM",
          "package": "hxt-filter",
          "signature": "[IfThen (a -\u003e [c]) (a -\u003e m [b])] -\u003e a -\u003e m [b]",
          "source": "src/Data-Tree-NTree-Filter.html#choiceM",
          "type": "function"
        },
        "index": {
          "description": "monadic version of multiway branch The list of cases is processed sequentially in the first case for that holds is applied if no case matches noneM is applied This filter can be used like case expression choiceM p1 f1 p2 f2 thisM defaultFilter see also choice ifM",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "choiceM",
          "normalized": "[IfThen(a-\u003e[b])(a-\u003ec[d])]-\u003ea-\u003ec[d]",
          "package": "hxt-filter",
          "signature": "[IfThen(a-\u003e[c])(a-\u003em[b])]-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:choiceM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epruning: keep only those results from f for which g holds, usually written in infix notation as f \u003ccode\u003e\u003ca\u003econtaining\u003c/a\u003e\u003c/code\u003e g\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the processing filter\n\u003c/li\u003e\u003cli\u003e 2.parameter g :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 3.parameter t :  the tree\n\u003c/li\u003e\u003cli\u003e returns : all trees r from f t, for which g r holds (is not the empty list)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enotContaining\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "containing",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#containing",
          "type": "function"
        },
        "index": {
          "description": "pruning keep only those results from for which holds usually written in infix notation as containing parameter the processing filter parameter the predicate filter parameter the tree returns all trees from for which holds is not the empty list see also notContaining",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "containing",
          "normalized": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:containing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epruning: monadic version of containing, usually written in infix notation as f \u003ccode\u003e\u003ca\u003econtainingM\u003c/a\u003e\u003c/code\u003e g\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the monadic processing filter\n\u003c/li\u003e\u003cli\u003e 2.parameter g :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 3.parameter t :  the tree\n\u003c/li\u003e\u003cli\u003e returns : all trees r from f t, for which g r holds (is not the empty list)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enotContaining\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "containingM",
          "package": "hxt-filter",
          "signature": "(a -\u003e m [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e m [b]",
          "source": "src/Data-Tree-NTree-Filter.html#containingM",
          "type": "function"
        },
        "index": {
          "description": "pruning monadic version of containing usually written in infix notation as containingM parameter the monadic processing filter parameter the predicate filter parameter the tree returns all trees from for which holds is not the empty list see also notContaining",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "containingM",
          "normalized": "(a-\u003eb[c])-\u003e(c-\u003e[d])-\u003ea-\u003eb[c]",
          "package": "hxt-filter",
          "signature": "(a-\u003em[b])-\u003e(b-\u003e[c])-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:containingM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etop down search.\n\u003c/p\u003e\u003cp\u003esearch terminates, when filter f succeeds\n can e.g. be used for finding all outermost tag node of a specific kind\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "deep",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#deep",
          "type": "function"
        },
        "index": {
          "description": "top down search search terminates when filter succeeds can e.g be used for finding all outermost tag node of specific kind",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "deep",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:deep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebottom up search.\n\u003c/p\u003e\u003cp\u003efirst the children are processed,\n if this does not succeed, the node itself is processed\n can e.g. be used for finding all innermost tag nodes of a specific kind\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "deepest",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#deepest",
          "type": "function"
        },
        "index": {
          "description": "bottom up search first the children are processed if this does not succeed the node itself is processed can e.g be used for finding all innermost tag nodes of specific kind",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "deepest",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:deepest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhen the predicate p holds, f is applied, else the null filter none\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f :  the conditionally applied filter\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguardsM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "guards",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#guards",
          "type": "function"
        },
        "index": {
          "description": "when the predicate holds is applied else the null filter none parameter the predicate filter parameter the conditionally applied filter returns the conditional filter see also iff when guardsM",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "guards",
          "normalized": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:guards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhen the predicate p holds, the monadic filter f is applied, else the null filter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the simple predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f :  the conditionally applied monadic filter\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguards\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "guardsM",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (a -\u003e m [c]) -\u003e a -\u003e m [c]",
          "source": "src/Data-Tree-NTree-Filter.html#guardsM",
          "type": "function"
        },
        "index": {
          "description": "when the predicate holds the monadic filter is applied else the null filter parameter the simple predicate filter parameter the conditionally applied monadic filter returns the conditional filter see also ifM guards whenM",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "guardsM",
          "normalized": "(a-\u003e[b])-\u003e(a-\u003ec[d])-\u003ea-\u003ec[d]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(a-\u003em[c])-\u003ea-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:guardsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic if-then-else.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate\n\u003c/li\u003e\u003cli\u003e 2.parameter thenP :  the then part: the monadic filter, that is applied if p holds for the input tree\n\u003c/li\u003e\u003cli\u003e 3.parameter elseP :  the else part\n\u003c/li\u003e\u003cli\u003e returns : the monadic filter for the conditional\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "ifM",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (a -\u003e m [c]) -\u003e (a -\u003e m [c]) -\u003e a -\u003e m [c]",
          "source": "src/Data-Tree-NTree-Filter.html#ifM",
          "type": "function"
        },
        "index": {
          "description": "monadic if-then-else parameter the predicate parameter thenP the then part the monadic filter that is applied if holds for the input tree parameter elseP the else part returns the monadic filter for the conditional",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "ifM",
          "normalized": "(a-\u003e[b])-\u003e(a-\u003ec[d])-\u003e(a-\u003ec[d])-\u003ea-\u003ec[d]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(a-\u003em[c])-\u003e(a-\u003em[c])-\u003ea-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif then else lifted to filters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter t :  the \"then\" filter\n\u003c/li\u003e\u003cli\u003e 3.parameter e :  the \"else\" filter\n\u003c/li\u003e\u003cli\u003e returns : the resulting conditional filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "iff",
          "package": "hxt-filter",
          "signature": "(a -\u003e [c]) -\u003e (a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#iff",
          "type": "function"
        },
        "index": {
          "description": "if then else lifted to filters parameter the predicate filter parameter the then filter parameter the else filter returns the resulting conditional filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "iff",
          "normalized": "(a-\u003e[b])-\u003e(a-\u003e[c])-\u003e(a-\u003e[c])-\u003ea-\u003e[c]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[c])-\u003e(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:iff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsertion of trees into the list of children after specific elements\n\u003c/p\u003e\u003cp\u003euseful for inserting something into the list of children of a node\n the list of children is split with the \u003ccode\u003espan\u003c/code\u003e function and the filter p as predicate\n the nodes are inserted between these two sublists\n\u003c/p\u003e\u003cp\u003eexamples: \u003ccode\u003einsertChildrenAfter none ins t\u003c/code\u003e inserts all elements computed with \u003ccode\u003eins t\u003c/code\u003e in front\n of the childen of \u003ccode\u003et\u003c/code\u003e, \u003ccode\u003einsertChildrenAfter this ins t\u003c/code\u003e appends the elements to the children\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003einsertChildrenAt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "insertChildrenAfter",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#insertChildrenAfter",
          "type": "function"
        },
        "index": {
          "description": "insertion of trees into the list of children after specific elements useful for inserting something into the list of children of node the list of children is split with the span function and the filter as predicate the nodes are inserted between these two sublists examples insertChildrenAfter none ins inserts all elements computed with ins in front of the childen of insertChildrenAfter this ins appends the elements to the children see also insertChildrenAt",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "insertChildrenAfter",
          "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Children After",
          "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:insertChildrenAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsertion of trees into the list of children at a given position\n\u003c/p\u003e\u003cp\u003euseful for inserting something into the list of children at a given position\n the list of children is split with the \u003ccode\u003esplitAt\u003c/code\u003e function\n the nodes are inserted between these two sublists.\n\u003c/p\u003e\u003cp\u003eexamples: \u003ccode\u003einsertChildrenAt 0 ins t\u003c/code\u003e inserts all elements computed with \u003ccode\u003eins t\u003c/code\u003e in front\n of the childen of \u003ccode\u003et\u003c/code\u003e, \u003ccode\u003einsertChildrenAt 1 ins t\u003c/code\u003e behind the first child\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003einsertChildrenAfter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "insertChildrenAt",
          "package": "hxt-filter",
          "signature": "Int -\u003e TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#insertChildrenAt",
          "type": "function"
        },
        "index": {
          "description": "insertion of trees into the list of children at given position useful for inserting something into the list of children at given position the list of children is split with the splitAt function the nodes are inserted between these two sublists examples insertChildrenAt ins inserts all elements computed with ins in front of the childen of insertChildrenAt ins behind the first child see also insertChildrenAfter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "insertChildrenAt",
          "normalized": "Int-\u003eTFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Children At",
          "signature": "Int-\u003eTFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:insertChildrenAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion from predicate function to filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate for testing the tree\n\u003c/li\u003e\u003cli\u003e returns : \u003ccode\u003e\u003ca\u003ethis\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e depending on the predicate\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "isOf",
          "package": "hxt-filter",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e [a]",
          "source": "src/Data-Tree-NTree-Filter.html#isOf",
          "type": "function"
        },
        "index": {
          "description": "conversion from predicate function to filter parameter the predicate for testing the tree returns this or none depending on the predicate",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "isOf",
          "normalized": "(a-\u003eBool)-\u003ea-\u003e[a]",
          "package": "hxt-filter",
          "partial": "Of",
          "signature": "(a-\u003eBool)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:isOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect filter, selects trees with node values with a specific property\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate for testing the node value\n\u003c/li\u003e\u003cli\u003e returns : \u003ccode\u003e[]\u003c/code\u003e or \u003ccode\u003e[t]\u003c/code\u003e depending on \u003ccode\u003ep t\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ea special case of \u003ccode\u003e\u003ca\u003eisOf\u003c/a\u003e\u003c/code\u003e filter\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "isOfNode",
          "package": "hxt-filter",
          "signature": "(node -\u003e Bool) -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#isOfNode",
          "type": "function"
        },
        "index": {
          "description": "select filter selects trees with node values with specific property parameter the predicate for testing the node value returns or depending on special case of isOf filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "isOfNode",
          "normalized": "(a-\u003eBool)-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Of Node",
          "signature": "(node-\u003eBool)-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:isOfNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift a filter to a monadic filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e filter\n\u003c/li\u003e\u003cli\u003e returns : the lifted monadic version\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "liftMf",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e a -\u003e m [b]",
          "source": "src/Data-Tree-NTree-Filter.html#liftMf",
          "type": "function"
        },
        "index": {
          "description": "lift filter to monadic filter parameter the simple filter returns the lifted monadic version",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "liftMf",
          "normalized": "(a-\u003e[b])-\u003ea-\u003ec[b]",
          "package": "hxt-filter",
          "partial": "Mf",
          "signature": "(a-\u003e[b])-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:liftMf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for substituting an arbitray tree by a constant\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter t :  the result tree, the input tree is ignored\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "mkNTree",
          "package": "hxt-filter",
          "signature": "NTree node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#mkNTree",
          "type": "function"
        },
        "index": {
          "description": "filter for substituting an arbitray tree by constant parameter the result tree the input tree is ignored returns the filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "mkNTree",
          "normalized": "NTree a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "NTree",
          "signature": "NTree node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:mkNTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for editing the children\n\u003c/p\u003e\u003cp\u003eall children are processed with a filter mapping lists to lists,\n this enables not only elementwise editing by lifting a normal\n filter to a list filter with \u003ccode\u003e(f $$)\u003c/code\u003e (see '($$)') but also manipulation\n of the order of the elements, e.g. \u003ca\u003ereverse\u003c/a\u003e is an appropriate childen\n editing function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter csf :  the children editing function\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "modifyChildren",
          "package": "hxt-filter",
          "signature": "TSFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#modifyChildren",
          "type": "function"
        },
        "index": {
          "description": "filter for editing the children all children are processed with filter mapping lists to lists this enables not only elementwise editing by lifting normal filter to list filter with see but also manipulation of the order of the elements e.g reverse is an appropriate childen editing function parameter csf the children editing function returns the filter see also processChildren",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "modifyChildren",
          "normalized": "TSFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Children",
          "signature": "TSFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:modifyChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.NTree.Filter",
          "name": "modifyNode",
          "package": "hxt-filter",
          "signature": "(node -\u003e Maybe node) -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#modifyNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "modifyNode",
          "normalized": "(a-\u003eMaybe a)-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Node",
          "signature": "(node-\u003eMaybe node)-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:modifyNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for editing the node\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter nf :  the XNode editing funtion\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "modifyNode0",
          "package": "hxt-filter",
          "signature": "(node -\u003e node) -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#modifyNode0",
          "type": "function"
        },
        "index": {
          "description": "filter for editing the node parameter nf the XNode editing funtion returns the filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "modifyNode0",
          "normalized": "(a-\u003ea)-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Node",
          "signature": "(node-\u003enode)-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:modifyNode0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess all nodes of the whole tree.\n\u003c/p\u003e\u003cp\u003ecan e.g. be used for finding all nodes of a specific kind\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "multi",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#multi",
          "type": "function"
        },
        "index": {
          "description": "process all nodes of the whole tree can e.g be used for finding all nodes of specific kind",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "multi",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegation lifted to filters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the predicate filter\n\u003c/li\u003e\u003cli\u003e returns : the filter, that succeeds, when f failed\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "neg",
          "package": "hxt-filter",
          "signature": "(a -\u003e [c]) -\u003e a -\u003e [a]",
          "source": "src/Data-Tree-NTree-Filter.html#neg",
          "type": "function"
        },
        "index": {
          "description": "negation lifted to filters parameter the predicate filter returns the filter that succeeds when failed",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "neg",
          "normalized": "(a-\u003e[b])-\u003ea-\u003e[a]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[c])-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe null filter, returns the empty list\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "none",
          "package": "hxt-filter",
          "signature": "a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#none",
          "type": "function"
        },
        "index": {
          "description": "the null filter returns the empty list",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "none",
          "normalized": "a-\u003e[b]",
          "package": "hxt-filter",
          "signature": "a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe monadic version of the null filter none.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "noneM",
          "package": "hxt-filter",
          "signature": "a -\u003e m [b]",
          "source": "src/Data-Tree-NTree-Filter.html#noneM",
          "type": "function"
        },
        "index": {
          "description": "the monadic version of the null filter none see also none",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "noneM",
          "normalized": "a-\u003eb[c]",
          "package": "hxt-filter",
          "signature": "a-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:noneM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epruning: keep only those results from f for which g does not hold\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003econtaining\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "notContaining",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#notContaining",
          "type": "function"
        },
        "index": {
          "description": "pruning keep only those results from for which does not hold see also containing",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "notContaining",
          "normalized": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]",
          "package": "hxt-filter",
          "partial": "Containing",
          "signature": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:notContaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esequential composition of filters, usually written in infix notation f2 \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e f1.\n\u003c/p\u003e\u003cp\u003efor predicate filter the logical AND\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e returns : the fiter applying first f1 to n and then f2 to the result (like function composition)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "o",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (c -\u003e [a]) -\u003e c -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#o",
          "type": "function"
        },
        "index": {
          "description": "sequential composition of filters usually written in infix notation f2 f1 for predicate filter the logical AND parameter f2 the filter parameter f1 the filter returns the fiter applying first f1 to and then f2 to the result like function composition",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "o",
          "normalized": "(a-\u003e[b])-\u003e(c-\u003e[a])-\u003ec-\u003e[b]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003e(c-\u003e[a])-\u003ec-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edirectional choice, usually written in infix notation as f \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e g\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter g :  the 2. filter\n\u003c/li\u003e\u003cli\u003e 3.parameter t :  the tree\n\u003c/li\u003e\u003cli\u003e returns : the filter, that applies f to t, if the result is not the empty list, the result is found, else g t is the result\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "orElse",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
          "source": "src/Data-Tree-NTree-Filter.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "directional choice usually written in infix notation as orElse parameter the filter parameter the filter parameter the tree returns the filter that applies to if the result is not the empty list the result is found else is the result",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "orElse",
          "normalized": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
          "package": "hxt-filter",
          "partial": "Else",
          "signature": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun an arbitray command on a tree t and return the tree,\n used for inserting arbitray commands in a filter pipeline\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e 2.parameter t :  the argument tree\n\u003c/li\u003e\u003cli\u003e returns : the unchanged tree as a single element list\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "performAction",
          "package": "hxt-filter",
          "signature": "(a -\u003e m b) -\u003e a -\u003e m [a]",
          "source": "src/Data-Tree-NTree-Filter.html#performAction",
          "type": "function"
        },
        "index": {
          "description": "run an arbitray command on tree and return the tree used for inserting arbitray commands in filter pipeline parameter cmd the command parameter the argument tree returns the unchanged tree as single element list",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "performAction",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb[a]",
          "package": "hxt-filter",
          "partial": "Action",
          "signature": "(a-\u003em b)-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:performAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebottom up transformation\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e transforming filter\n\u003c/li\u003e\u003cli\u003e returns : the filter that applies f to all subtrees and the tree itself in a deepth first left to right manner\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessTopDown\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprocessBottomUpIfNot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processBottomUp",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#processBottomUp",
          "type": "function"
        },
        "index": {
          "description": "bottom up transformation parameter the simple transforming filter returns the filter that applies to all subtrees and the tree itself in deepth first left to right manner see also processTopDown processBottomUpIfNot",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processBottomUp",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Bottom Up",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processBottomUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eguarded bottom up transformation, stops at subtrees for which a predicate p holds\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the transforming filter\n\u003c/li\u003e\u003cli\u003e 2.parameter p :  the predicate filter for the guard\n\u003c/li\u003e\u003cli\u003e returns : the filter for processing all (sub-)trees\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processBottomUpIfNot",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#processBottomUpIfNot",
          "type": "function"
        },
        "index": {
          "description": "guarded bottom up transformation stops at subtrees for which predicate holds parameter the transforming filter parameter the predicate filter for the guard returns the filter for processing all sub trees see also processBottomUp",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processBottomUpIfNot",
          "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Bottom Up If Not",
          "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processBottomUpIfNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic variant of \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processBottomUpM",
          "package": "hxt-filter",
          "signature": "(NTree node -\u003e m [NTree node]) -\u003e NTree node -\u003e m [NTree node]",
          "source": "src/Data-Tree-NTree-Filter.html#processBottomUpM",
          "type": "function"
        },
        "index": {
          "description": "monadic variant of processBottomUp",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processBottomUpM",
          "normalized": "(NTree a-\u003eb[NTree a])-\u003eNTree a-\u003eb[NTree a]",
          "package": "hxt-filter",
          "partial": "Bottom Up",
          "signature": "(NTree node-\u003em[NTree node])-\u003eNTree node-\u003em[NTree node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processBottomUpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter for editing the children of a tree element wise\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cf :  the filter applied to the children\n\u003c/li\u003e\u003cli\u003e returns : the editing filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emodifyChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processChildren",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#processChildren",
          "type": "function"
        },
        "index": {
          "description": "Filter for editing the children of tree element wise parameter cf the filter applied to the children returns the editing filter see also modifyChildren",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processChildren",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Children",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter for editing the children of a tree with a monadic filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cf :  the monadic filter applied to the children\n\u003c/li\u003e\u003cli\u003e returns : the monadic editing filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processChildrenM",
          "package": "hxt-filter",
          "signature": "(NTree node -\u003e m [NTree node]) -\u003e NTree node -\u003e m [NTree node]",
          "source": "src/Data-Tree-NTree-Filter.html#processChildrenM",
          "type": "function"
        },
        "index": {
          "description": "Filter for editing the children of tree with monadic filter parameter cf the monadic filter applied to the children returns the monadic editing filter see also processChildren",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processChildrenM",
          "normalized": "(NTree a-\u003eb[NTree a])-\u003eNTree a-\u003eb[NTree a]",
          "package": "hxt-filter",
          "partial": "Children",
          "signature": "(NTree node-\u003em[NTree node])-\u003eNTree node-\u003em[NTree node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processChildrenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etop down transformation\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e transforming filter\n\u003c/li\u003e\u003cli\u003e returns : the filter that applies f first to the tree and then recursively to all subtrees of the result\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processTopDown",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#processTopDown",
          "type": "function"
        },
        "index": {
          "description": "top down transformation parameter the simple transforming filter returns the filter that applies first to the tree and then recursively to all subtrees of the result see also processBottomUp",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processTopDown",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Top Down",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processTopDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic variant of \u003ccode\u003e\u003ca\u003eprocessTopDown\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processTopDownM",
          "package": "hxt-filter",
          "signature": "(NTree node -\u003e m [NTree node]) -\u003e NTree node -\u003e m [NTree node]",
          "source": "src/Data-Tree-NTree-Filter.html#processTopDownM",
          "type": "function"
        },
        "index": {
          "description": "monadic variant of processTopDown",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processTopDownM",
          "normalized": "(NTree a-\u003eb[NTree a])-\u003eNTree a-\u003eb[NTree a]",
          "package": "hxt-filter",
          "partial": "Top Down",
          "signature": "(NTree node-\u003em[NTree node])-\u003eNTree node-\u003em[NTree node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processTopDownM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etop down transformation until a node to be transformed is found\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e transforming filter\n\u003c/li\u003e\u003cli\u003e returns : the filter that applies f first to the tree and, if the filter does not succeed,\n\t\t  recursively to all children of the input tree.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eprocessTopDownUntil none\u003c/pre\u003e\u003cp\u003eis the identity filter (maybe a bit more inefficient).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eprocessTopDownUntil (add1Attr \"border\" \"2\" `containing` isTag \"table\")\u003c/pre\u003e\u003cp\u003eis a filter for adding an attribute border=\"2\" in all top level table tags.\n\t\t  The content of table tags will remain unchanged.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessTopDown\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "processTopDownUntil",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#processTopDownUntil",
          "type": "function"
        },
        "index": {
          "description": "top down transformation until node to be transformed is found parameter the simple transforming filter returns the filter that applies first to the tree and if the filter does not succeed recursively to all children of the input tree Example processTopDownUntil none is the identity filter maybe bit more inefficient Example processTopDownUntil add1Attr border containing isTag table is filter for adding an attribute border in all top level table tags The content of table tags will remain unchanged see also processTopDown processBottomUp",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "processTopDownUntil",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Top Down Until",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processTopDownUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for replacing the children\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cs :  cs the list of children\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "replaceChildren",
          "package": "hxt-filter",
          "signature": "NTrees node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#replaceChildren",
          "type": "function"
        },
        "index": {
          "description": "filter for replacing the children parameter cs cs the list of children returns the filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "replaceChildren",
          "normalized": "NTrees a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Children",
          "signature": "NTrees node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:replaceChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for replacing the node\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the new node\n\u003c/li\u003e\u003cli\u003e returns : the editing filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "replaceNode",
          "package": "hxt-filter",
          "signature": "node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#replaceNode",
          "type": "function"
        },
        "index": {
          "description": "filter for replacing the node parameter the new node returns the editing filter",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "replaceNode",
          "normalized": "a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Node",
          "signature": "node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:replaceNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esatisfies converts a result of a predicate filter into a boolean\n\u003c/p\u003e\u003cp\u003eis a shortcut for not . null\n\u003c/p\u003e\u003cp\u003etypical use in guards or ifs: \u003ccode\u003eif (satisfies f) t then ... else ... \u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter t :  the tree to be tested\n\u003c/li\u003e\u003cli\u003e returns : \u003ccode\u003eb = not (null (f t))\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "satisfies",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b]) -\u003e a -\u003e Bool",
          "source": "src/Data-Tree-NTree-Filter.html#satisfies",
          "type": "function"
        },
        "index": {
          "description": "satisfies converts result of predicate filter into boolean is shortcut for not null typical use in guards or ifs if satisfies then else parameter the predicate filter parameter the tree to be tested returns not null",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "satisfies",
          "normalized": "(a-\u003e[b])-\u003ea-\u003eBool",
          "package": "hxt-filter",
          "signature": "(a-\u003e[b])-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:satisfies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a list of filters sequentially with '(.\u003e)', for predicate filters the generalized AND\n\u003c/p\u003e\u003cp\u003esee also : '(.\u003e)'\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "seqF",
          "package": "hxt-filter",
          "signature": "[a -\u003e [a]] -\u003e a -\u003e [a]",
          "source": "src/Data-Tree-NTree-Filter.html#seqF",
          "type": "function"
        },
        "index": {
          "description": "apply list of filters sequentially with for predicate filters the generalized AND see also",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "seqF",
          "normalized": "[a-\u003e[a]]-\u003ea-\u003e[a]",
          "package": "hxt-filter",
          "signature": "[a-\u003e[a]]-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:seqF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneralized sequential composition of monadic filters\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "seqM",
          "package": "hxt-filter",
          "signature": "[a -\u003e m [a]] -\u003e a -\u003e m [a]",
          "source": "src/Data-Tree-NTree-Filter.html#seqM",
          "type": "function"
        },
        "index": {
          "description": "generalized sequential composition of monadic filters",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "seqM",
          "normalized": "[a-\u003eb[a]]-\u003ea-\u003eb[a]",
          "package": "hxt-filter",
          "signature": "[a-\u003em[a]]-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:seqM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for substituting the children of a tree by\n a new list of childen computed by applying a filter to the input tree.\n \u003ccode\u003e\u003ca\u003emodifyChildren\u003c/a\u003e\u003c/code\u003e can be expressed by \u003ccode\u003e\u003ca\u003esubstChildren\u003c/a\u003e\u003c/code\u003e:\n \u003ccode\u003emodifyChildren f t\u003c/code\u003e is equal to \u003ccode\u003esubstChildren (f . getChildren)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "substChildren",
          "package": "hxt-filter",
          "signature": "TFilter node -\u003e TFilter node",
          "source": "src/Data-Tree-NTree-Filter.html#substChildren",
          "type": "function"
        },
        "index": {
          "description": "filter for substituting the children of tree by new list of childen computed by applying filter to the input tree modifyChildren can be expressed by substChildren modifyChildren is equal to substChildren getChildren",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "substChildren",
          "normalized": "TFilter a-\u003eTFilter a",
          "package": "hxt-filter",
          "partial": "Children",
          "signature": "TFilter node-\u003eTFilter node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:substChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe unit filter, returns the single element list containing the argument\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "this",
          "package": "hxt-filter",
          "signature": "a -\u003e [a]",
          "source": "src/Data-Tree-NTree-Filter.html#this",
          "type": "function"
        },
        "index": {
          "description": "the unit filter returns the single element list containing the argument",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "this",
          "normalized": "a-\u003e[a]",
          "package": "hxt-filter",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:this"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe monadic version of the identity filter this.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ethis\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "thisM",
          "package": "hxt-filter",
          "signature": "a -\u003e m [a]",
          "source": "src/Data-Tree-NTree-Filter.html#thisM",
          "type": "function"
        },
        "index": {
          "description": "the monadic version of the identity filter this see also this",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "thisM",
          "normalized": "a-\u003eb[a]",
          "package": "hxt-filter",
          "signature": "a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:thisM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhen the predicate p holds, f is applied, else the identity filter this\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the conditinally applied filter\n\u003c/li\u003e\u003cli\u003e 2.parameter p :  the predicate\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNot\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguards\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "when",
          "package": "hxt-filter",
          "signature": "(a -\u003e [a]) -\u003e (a -\u003e [a]) -\u003e a -\u003e [a]",
          "source": "src/Data-Tree-NTree-Filter.html#when",
          "type": "function"
        },
        "index": {
          "description": "when the predicate holds is applied else the identity filter this parameter the conditinally applied filter parameter the predicate returns the conditional filter see also iff whenNot guards whenM",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "when",
          "normalized": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]",
          "package": "hxt-filter",
          "signature": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhen the predicate p holds, the monadic filter f is applied, else the identity filter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the conditinally applied monadic filter\n\u003c/li\u003e\u003cli\u003e 2.parameter p :  the simple predicate\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguardsM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNotM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "whenM",
          "package": "hxt-filter",
          "signature": "(a -\u003e m [a]) -\u003e (a -\u003e [b]) -\u003e a -\u003e m [a]",
          "source": "src/Data-Tree-NTree-Filter.html#whenM",
          "type": "function"
        },
        "index": {
          "description": "when the predicate holds the monadic filter is applied else the identity filter parameter the conditinally applied monadic filter parameter the simple predicate returns the conditional filter see also ifM when guardsM whenNotM",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "whenM",
          "normalized": "(a-\u003eb[a])-\u003e(a-\u003e[c])-\u003ea-\u003eb[a]",
          "package": "hxt-filter",
          "signature": "(a-\u003em[a])-\u003e(a-\u003e[b])-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:whenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe complementary filter of when\n\u003c/p\u003e\u003cp\u003eshortcut for f \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e neg g\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNotM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eneg\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "whenNot",
          "package": "hxt-filter",
          "signature": "(a -\u003e [a]) -\u003e (a -\u003e [a]) -\u003e a -\u003e [a]",
          "source": "src/Data-Tree-NTree-Filter.html#whenNot",
          "type": "function"
        },
        "index": {
          "description": "the complementary filter of when shortcut for when neg see also iff when whenNotM neg",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "whenNot",
          "normalized": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]",
          "package": "hxt-filter",
          "partial": "Not",
          "signature": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:whenNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe complementary filter of whenM.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tree.NTree.Filter",
          "name": "whenNotM",
          "package": "hxt-filter",
          "signature": "(a -\u003e m [a]) -\u003e (a -\u003e [b]) -\u003e a -\u003e m [a]",
          "source": "src/Data-Tree-NTree-Filter.html#whenNotM",
          "type": "function"
        },
        "index": {
          "description": "the complementary filter of whenM see also ifM whenM whenNot",
          "hierarchy": "Data Tree NTree Filter",
          "module": "Data.Tree.NTree.Filter",
          "name": "whenNotM",
          "normalized": "(a-\u003eb[a])-\u003e(a-\u003e[c])-\u003ea-\u003eb[a]",
          "package": "hxt-filter",
          "partial": "Not",
          "signature": "(a-\u003em[a])-\u003e(a-\u003e[b])-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:whenNotM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : $Id: PipeOpen.hs,v 1.2 2005\u003cem\u003e09\u003c/em\u003e02 17:09:39 hxml Exp $\n\u003c/p\u003e\u003cp\u003epipe open implemented with System.Process functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PipeOpen",
          "name": "PipeOpen",
          "package": "hxt-filter",
          "source": "src/System-PipeOpen.html",
          "type": "module"
        },
        "index": {
          "description": "Version Id PipeOpen.hs hxml Exp pipe open implemented with System.Process functions",
          "hierarchy": "System PipeOpen",
          "module": "System.PipeOpen",
          "name": "PipeOpen",
          "package": "hxt-filter",
          "partial": "Pipe Open",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/System-PipeOpen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecall an external program with a list of command line arguments\n and return content of stdout, content of stderr and return code\n\u003c/p\u003e",
          "module": "System.PipeOpen",
          "name": "popen",
          "package": "hxt-filter",
          "signature": "String -\u003e [String] -\u003e IO (String, String, Int)",
          "source": "src/System-PipeOpen.html#popen",
          "type": "function"
        },
        "index": {
          "description": "call an external program with list of command line arguments and return content of stdout content of stderr and return code",
          "hierarchy": "System PipeOpen",
          "module": "System.PipeOpen",
          "name": "popen",
          "normalized": "String-\u003e[String]-\u003eIO(String,String,Int)",
          "package": "hxt-filter",
          "signature": "String-\u003e[String]-\u003eIO(String,String,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/System-PipeOpen.html#v:popen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXML editing filters\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "EditFilters",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html",
          "type": "module"
        },
        "index": {
          "description": "XML editing filters",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "EditFilters",
          "package": "hxt-filter",
          "partial": "Edit Filters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "addHeadlineToXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#addHeadlineToXmlDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "addHeadlineToXmlDoc",
          "package": "hxt-filter",
          "partial": "Headline To Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:addHeadlineToXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "addXmlPiToDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#addXmlPiToDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "addXmlPiToDoc",
          "package": "hxt-filter",
          "partial": "Xml Pi To Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:addXmlPiToDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecanonicalize tree and remove comments and \u003c?xml ... ?\u003e declarations\n\u003c/p\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalizeTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "canonicalizeAllNodes",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#canonicalizeAllNodes",
          "type": "function"
        },
        "index": {
          "description": "canonicalize tree and remove comments and xml declarations see canonicalizeTree",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "canonicalizeAllNodes",
          "package": "hxt-filter",
          "partial": "All Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:canonicalizeAllNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalize a tree for XPath\n Comment nodes are not removed\n\u003c/p\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalizeTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "canonicalizeForXPath",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#canonicalizeForXPath",
          "type": "function"
        },
        "index": {
          "description": "Canonicalize tree for XPath Comment nodes are not removed see canonicalizeTree",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "canonicalizeForXPath",
          "package": "hxt-filter",
          "partial": "For XPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:canonicalizeForXPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies some \u003ca\u003eCanonical XML\u003c/a\u003e rules to the nodes of a tree.\n\u003c/p\u003e\u003cp\u003eThe rule differ slightly for canonical XML and XPath in handling of comments\n\u003c/p\u003e\u003cp\u003eNote: This is not the whole canonicalization as it is specified by the W3C\n Recommendation. Adding attribute defaults or sorting attributes in lexicographic\n order is done by the \u003ccode\u003etransform\u003c/code\u003e function of module \u003ccode\u003eText.XML.HXT.Validator.Validation\u003c/code\u003e.\n Replacing entities or line feed normalization is done by the parser.\n\u003c/p\u003e\u003cp\u003eNot implemented yet:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Whitespace within start and end tags is normalized\n\u003c/li\u003e\u003cli\u003e Special characters in attribute values and character content are replaced by character references\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalizeAllNodes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecanonicalizeForXPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "canonicalizeTree",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#canonicalizeTree",
          "type": "function"
        },
        "index": {
          "description": "Applies some Canonical XML rules to the nodes of tree The rule differ slightly for canonical XML and XPath in handling of comments Note This is not the whole canonicalization as it is specified by the W3C Recommendation Adding attribute defaults or sorting attributes in lexicographic order is done by the transform function of module Text.XML.HXT.Validator.Validation Replacing entities or line feed normalization is done by the parser Not implemented yet Whitespace within start and end tags is normalized Special characters in attribute values and character content are replaced by character references see canonicalizeAllNodes and canonicalizeForXPath",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "canonicalizeTree",
          "normalized": "XmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Tree",
          "signature": "XmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:canonicalizeTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies collapseXText recursively.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ecollapseXText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "collapseAllXText",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#collapseAllXText",
          "type": "function"
        },
        "index": {
          "description": "Applies collapseXText recursively see also collapseXText",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "collapseAllXText",
          "package": "hxt-filter",
          "partial": "All XText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:collapseAllXText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollects sequences of child XText nodes into one XText node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "collapseXText",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#collapseXText",
          "type": "function"
        },
        "index": {
          "description": "Collects sequences of child XText nodes into one XText node",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "collapseXText",
          "package": "hxt-filter",
          "partial": "XText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:collapseXText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert the special XML chars in an attribute value into\n charachter references. Not only the XML specials but also \\n, \\r and \\t are converted\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eescapeXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eescapeXmlText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "escapeXmlAttrValue",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#escapeXmlAttrValue",
          "type": "function"
        },
        "index": {
          "description": "convert the special XML chars in an attribute value into charachter references Not only the XML specials but also and are converted see also escapeXmlDoc escapeXmlText",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "escapeXmlAttrValue",
          "package": "hxt-filter",
          "partial": "Xml Attr Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:escapeXmlAttrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert the special XML chars \", \u003c, \u003e, & and ' in a document to char references,\n attribute values are converted with \u003ccode\u003e\u003ca\u003eescapeXmlAttrValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eescapeXmlText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eescapeXmlAttrValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "escapeXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#escapeXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "convert the special XML chars and in document to char references attribute values are converted with escapeXmlAttrValue see also escapeXmlText escapeXmlAttrValue",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "escapeXmlDoc",
          "package": "hxt-filter",
          "partial": "Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:escapeXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert the special XML chars in a text or comment node\n into character references\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003eescapeXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "escapeXmlText",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#escapeXmlText",
          "type": "function"
        },
        "index": {
          "description": "convert the special XML chars in text or comment node into character references see also escapeXmlDoc",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "escapeXmlText",
          "package": "hxt-filter",
          "partial": "Xml Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:escapeXmlText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a document into a Haskell representation (with show).\n\u003c/p\u003e\u003cp\u003eUseful for debugging and trace output.\n see also : \u003ccode\u003e\u003ca\u003etreeRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enumberLinesInXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "haskellRepOfXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#haskellRepOfXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "convert document into Haskell representation with show Useful for debugging and trace output see also treeRepOfXmlDoc numberLinesInXmlDoc",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "haskellRepOfXmlDoc",
          "package": "hxt-filter",
          "partial": "Rep Of Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:haskellRepOfXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for indenting a document tree for pretty printing.\n\u003c/p\u003e\u003cp\u003ethe tree is traversed for inserting whitespace for tag indentation.\n\u003c/p\u003e\u003cp\u003ewhitespace is only inserted or changed at places, where it isn't significant,\n is's not inserted between tags and text containing non whitespace chars.\n\u003c/p\u003e\u003cp\u003ewhitespace is only inserted or changed at places, where it's not significant.\n preserving whitespace may be controlled in a document tree\n by a tag attribute \u003ccode\u003exml:space\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eallowed values for this attribute are \u003ccode\u003edefault | preserve\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003einput is a complete document tree.\n result the semantically equivalent formatted tree.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eremoveDocWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "indentDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#indentDoc",
          "type": "function"
        },
        "index": {
          "description": "filter for indenting document tree for pretty printing the tree is traversed for inserting whitespace for tag indentation whitespace is only inserted or changed at places where it isn significant is not inserted between tags and text containing non whitespace chars whitespace is only inserted or changed at places where it not significant preserving whitespace may be controlled in document tree by tag attribute xml space allowed values for this attribute are default preserve input is complete document tree result the semantically equivalent formatted tree see also removeDocWhiteSpace",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "indentDoc",
          "package": "hxt-filter",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:indentDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "numberLines",
          "package": "hxt-filter",
          "signature": "String -\u003e String",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#numberLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "numberLines",
          "normalized": "String-\u003eString",
          "package": "hxt-filter",
          "partial": "Lines",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:numberLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a document into a text and add line numbers to the text representation.\n\u003c/p\u003e\u003cp\u003eResult is a root node with a single text node as child.\n Useful for debugging and trace output.\n see also : \u003ccode\u003e\u003ca\u003ehaskellRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etreeRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "numberLinesInXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#numberLinesInXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "convert document into text and add line numbers to the text representation Result is root node with single text node as child Useful for debugging and trace output see also haskellRepOfXmlDoc treeRepOfXmlDoc",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "numberLinesInXmlDoc",
          "package": "hxt-filter",
          "partial": "Lines In Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:numberLinesInXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove all Comments recursively\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeAllComment",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#removeAllComment",
          "type": "function"
        },
        "index": {
          "description": "remove all Comments recursively",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeAllComment",
          "package": "hxt-filter",
          "partial": "All Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeAllComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimple recursive filter for removing all whitespace.\n\u003c/p\u003e\u003cp\u003eremoves all text nodes in a tree that consist only of whitespace.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eremoveWhiteSpace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveDocWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeAllWhiteSpace",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#removeAllWhiteSpace",
          "type": "function"
        },
        "index": {
          "description": "simple recursive filter for removing all whitespace removes all text nodes in tree that consist only of whitespace see also removeWhiteSpace removeDocWhiteSpace",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeAllWhiteSpace",
          "package": "hxt-filter",
          "partial": "All White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeAllWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove Comments\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeComment",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#removeComment",
          "type": "function"
        },
        "index": {
          "description": "remove Comments",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeComment",
          "package": "hxt-filter",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for removing all not significant whitespace.\n\u003c/p\u003e\u003cp\u003ethe tree traversed for removing whitespace between tags,\n that was inserted for indentation and readability.\n whitespace is only removed at places, where it's not significat\n preserving whitespace may be controlled in a document tree\n by a tag attribute \u003ccode\u003exml:space\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eallowed values for this attribute are \u003ccode\u003edefault | preserve\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003einput is root node of the document to be cleaned up\n output the semantically equivalent simplified tree\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eindentDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveAllWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeDocWhiteSpace",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#removeDocWhiteSpace",
          "type": "function"
        },
        "index": {
          "description": "filter for removing all not significant whitespace the tree traversed for removing whitespace between tags that was inserted for indentation and readability whitespace is only removed at places where it not significat preserving whitespace may be controlled in document tree by tag attribute xml space allowed values for this attribute are default preserve input is root node of the document to be cleaned up output the semantically equivalent simplified tree see also indentDoc removeAllWhiteSpace",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeDocWhiteSpace",
          "package": "hxt-filter",
          "partial": "Doc White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeDocWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimple filter for removing whitespace.\n\u003c/p\u003e\u003cp\u003eno check on sigificant whitespace is done.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eremoveAllWhiteSpace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveDocWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeWhiteSpace",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#removeWhiteSpace",
          "type": "function"
        },
        "index": {
          "description": "simple filter for removing whitespace no check on sigificant whitespace is done see also removeAllWhiteSpace removeDocWhiteSpace",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "removeWhiteSpace",
          "package": "hxt-filter",
          "partial": "White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts CDATA sections in whole document tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfAllCdata",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#transfAllCdata",
          "type": "function"
        },
        "index": {
          "description": "converts CDATA sections in whole document tree",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfAllCdata",
          "package": "hxt-filter",
          "partial": "All Cdata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfAllCdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts CDATA sections in whole document tree into normal text nodes\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfAllCdataEscaped",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#transfAllCdataEscaped",
          "type": "function"
        },
        "index": {
          "description": "converts CDATA sections in whole document tree into normal text nodes",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfAllCdataEscaped",
          "package": "hxt-filter",
          "partial": "All Cdata Escaped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfAllCdataEscaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecursively converts all character references to normal text\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfAllCharRef",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#transfAllCharRef",
          "type": "function"
        },
        "index": {
          "description": "recursively converts all character references to normal text",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfAllCharRef",
          "package": "hxt-filter",
          "partial": "All Char Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfAllCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts CDATA section in normal text sections\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfCdata",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#transfCdata",
          "type": "function"
        },
        "index": {
          "description": "converts CDATA section in normal text sections",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfCdata",
          "package": "hxt-filter",
          "partial": "Cdata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfCdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts CDATA section in normal text nodes\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfCdataEscaped",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#transfCdataEscaped",
          "type": "function"
        },
        "index": {
          "description": "converts CDATA section in normal text nodes",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfCdataEscaped",
          "package": "hxt-filter",
          "partial": "Cdata Escaped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfCdataEscaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts character references to normal text\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfCharRef",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#transfCharRef",
          "type": "function"
        },
        "index": {
          "description": "converts character references to normal text",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "transfCharRef",
          "package": "hxt-filter",
          "partial": "Char Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a document into a text representation in tree form.\n\u003c/p\u003e\u003cp\u003eUseful for debugging and trace output.\n see also : \u003ccode\u003e\u003ca\u003ehaskellRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enumberLinesInXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "treeRepOfXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#treeRepOfXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "convert document into text representation in tree form Useful for debugging and trace output see also haskellRepOfXmlDoc numberLinesInXmlDoc",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "treeRepOfXmlDoc",
          "package": "hxt-filter",
          "partial": "Rep Of Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:treeRepOfXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a document tree into an output string representation\n with respect to the output encoding.\n\u003c/p\u003e\u003cp\u003eThe children of the document root are stubstituted by\n a single text node for the text representation of the document.\n\u003c/p\u003e\u003cp\u003eEncoding of the document is performed with respect\n to the \u003ccode\u003eoutput-encoding\u003c/code\u003e attribute in the root node, or if not present,\n of the \u003ccode\u003eencoding\u003c/code\u003e attribute for the original input encoding.\n If the encoding is not specified or not supported, UTF-8 is taken.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "unparseXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-EditFilters.html#unparseXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "convert document tree into an output string representation with respect to the output encoding The children of the document root are stubstituted by single text node for the text representation of the document Encoding of the document is performed with respect to the output-encoding attribute in the root node or if not present of the encoding attribute for the original input encoding If the encoding is not specified or not supported UTF-8 is taken",
          "hierarchy": "Text XML HXT DOM EditFilters",
          "module": "Text.XML.HXT.DOM.EditFilters",
          "name": "unparseXmlDoc",
          "package": "hxt-filter",
          "partial": "Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:unparseXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emain namespace filter for propagation, checking, tracing and error handling\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.Namespace",
          "name": "Namespace",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-Namespace.html",
          "type": "module"
        },
        "index": {
          "description": "main namespace filter for propagation checking tracing and error handling",
          "hierarchy": "Text XML HXT DOM Namespace",
          "module": "Text.XML.HXT.DOM.Namespace",
          "name": "Namespace",
          "package": "hxt-filter",
          "partial": "Namespace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-Namespace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epropagate all namespace declarations, check namespace constraints and issue errors.\n If no error was found, result is the unchanged input tree, else the root node \"/\" with an empty document is returned.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evalidateNamespaces\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.Namespace",
          "name": "propagateAndValidateNamespaces",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-DOM-Namespace.html#propagateAndValidateNamespaces",
          "type": "function"
        },
        "index": {
          "description": "propagate all namespace declarations check namespace constraints and issue errors If no error was found result is the unchanged input tree else the root node with an empty document is returned see also propagateNamespaces validateNamespaces",
          "hierarchy": "Text XML HXT DOM Namespace",
          "module": "Text.XML.HXT.DOM.Namespace",
          "name": "propagateAndValidateNamespaces",
          "package": "hxt-filter",
          "partial": "And Validate Namespaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-Namespace.html#v:propagateAndValidateNamespaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNamespace filter\n\u003c/p\u003e\u003cp\u003eNamespaces are processed with two main filter, \u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003evalidateNamespaces\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e takes a XML tree and\n attaches extra namespace info at every tag name and attribute name.\n So after processing a tree with \u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e, the access functions\n \u003ca\u003enamespaceOf\u003c/a\u003e and \u003ca\u003euniversalNameOf\u003c/a\u003e deliver the associated namespace (or \"\")\n for tag names and attribute names.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003evalidateNamespaces\u003c/a\u003e\u003c/code\u003e checks whether names are wellformed related to the XML namespace definition.\n whether a legal namespace is declared for all prefixes, and whether attribute names are unique\n related to universal names.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "NamespaceFilter",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-NamespaceFilter.html",
          "type": "module"
        },
        "index": {
          "description": "Namespace filter Namespaces are processed with two main filter propagateNamespaces and validateNamespaces propagateNamespaces takes XML tree and attaches extra namespace info at every tag name and attribute name So after processing tree with propagateNamespaces the access functions namespaceOf and universalNameOf deliver the associated namespace or for tag names and attribute names validateNamespaces checks whether names are wellformed related to the XML namespace definition whether legal namespace is declared for all prefixes and whether attribute names are unique related to universal names",
          "hierarchy": "Text XML HXT DOM NamespaceFilter",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "NamespaceFilter",
          "package": "hxt-filter",
          "partial": "Namespace Filter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for the namespace association list, used when propagating namespaces by\n modifying the \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003e values in a tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "NamespaceTable",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#NamespaceTable",
          "type": "type"
        },
        "index": {
          "description": "Type for the namespace association list used when propagating namespaces by modifying the QName values in tree",
          "hierarchy": "Text XML HXT DOM NamespaceFilter",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "NamespaceTable",
          "package": "hxt-filter",
          "partial": "Namespace Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#t:NamespaceTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "isNamespaceDecl",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#isNamespaceDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM NamespaceFilter",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "isNamespaceDecl",
          "package": "hxt-filter",
          "partial": "Namespace Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:isNamespaceDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattaches the namespace info given by the namespace table\n to a tag node and its attributes and children.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "propagateNamespaceEnv",
          "package": "hxt-filter",
          "signature": "NamespaceTable -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#propagateNamespaceEnv",
          "type": "function"
        },
        "index": {
          "description": "attaches the namespace info given by the namespace table to tag node and its attributes and children",
          "hierarchy": "Text XML HXT DOM NamespaceFilter",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "propagateNamespaceEnv",
          "normalized": "NamespaceTable-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Namespace Env",
          "signature": "NamespaceTable-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:propagateNamespaceEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epropagate all namespace declarations \"xmlns:ns=...\" to all\n tag and attribute nodes of a document.\n\u003c/p\u003e\u003cp\u003eThis filter does not check for illegal use of namespaces.\n The real work is done by \u003ccode\u003e\u003ca\u003epropagateNamespaceEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe filter may be applied repeatedly if neccessary.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "propagateNamespaces",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#propagateNamespaces",
          "type": "function"
        },
        "index": {
          "description": "propagate all namespace declarations xmlns ns to all tag and attribute nodes of document This filter does not check for illegal use of namespaces The real work is done by propagateNamespaceEnv The filter may be applied repeatedly if neccessary",
          "hierarchy": "Text XML HXT DOM NamespaceFilter",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "propagateNamespaces",
          "package": "hxt-filter",
          "partial": "Namespaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:propagateNamespaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea single node for namespace constrains.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "validate1Namespaces",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#validate1Namespaces",
          "type": "function"
        },
        "index": {
          "description": "single node for namespace constrains",
          "hierarchy": "Text XML HXT DOM NamespaceFilter",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "validate1Namespaces",
          "package": "hxt-filter",
          "partial": "Namespaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:validate1Namespaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalidate the namespace constraints in a whole tree.\n result is the list of errors concerning namespaces.\n Work is done by applying \u003ccode\u003e\u003ca\u003evalidate1Namespaces\u003c/a\u003e\u003c/code\u003e to all nodes.\n Predicates \u003ccode\u003e\u003ca\u003eisWellformedQName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisWellformedQualifiedName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisDeclaredNamespace\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eisWellformedNSDecl\u003c/a\u003e\u003c/code\u003e are applied to the appropriate tags and attributes.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "validateNamespaces",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#validateNamespaces",
          "type": "function"
        },
        "index": {
          "description": "validate the namespace constraints in whole tree result is the list of errors concerning namespaces Work is done by applying validate1Namespaces to all nodes Predicates isWellformedQName isWellformedQualifiedName isDeclaredNamespace and isWellformedNSDecl are applied to the appropriate tags and attributes",
          "hierarchy": "Text XML HXT DOM NamespaceFilter",
          "module": "Text.XML.HXT.DOM.NamespaceFilter",
          "name": "validateNamespaces",
          "package": "hxt-filter",
          "partial": "Namespaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:validateNamespaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a Monad for an internal state and IO commands.\n The state consists of two parts, the user state and the system state\n user state ist a type parameter, the system state is a list\n name-value pair. If the user state is not needed, the type parameter\n can be instantiated with \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFurthermore there are types for Xml filter working on this monad\n and functions for manipulating the state components\n and for lifting i/o commands and XmlFilter to monad filters.\n\u003c/p\u003e\u003cp\u003eError reporting functions are also located in this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlState",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Monad for an internal state and IO commands The state consists of two parts the user state and the system state user state ist type parameter the system state is list name-value pair If the user state is not needed the type parameter can be instantiated with Furthermore there are types for Xml filter working on this monad and functions for manipulating the state components and for lifting commands and XmlFilter to monad filters Error reporting functions are also located in this module",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlState",
          "package": "hxt-filter",
          "partial": "Xml State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal system state consists of a list of name-value pairs\n of type \u003ccode\u003e(String, XmlTrees)\u003c/code\u003e, so arbitrary lists of trees can be stored.\n For options, often only strings are used as values, so a set of access\n functions with string values is available\n The error handling method can be controlled by an error handler filter,\n the default filter issues the errors on stderr\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "SysState",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
          "type": "data"
        },
        "index": {
          "description": "The internal system state consists of list of name-value pairs of type String XmlTrees so arbitrary lists of trees can be stored For options often only strings are used as values so set of access functions with string values is available The error handling method can be controlled by an error handler filter the default filter issues the errors on stderr",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "SysState",
          "package": "hxt-filter",
          "partial": "Sys State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:SysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "SysStateAttrs",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#SysStateAttrs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "SysStateAttrs",
          "package": "hxt-filter",
          "partial": "Sys State Attrs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:SysStateAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad type for commands. It is an instance of \u003ca\u003eStateIO\u003c/a\u003e from the\n general module \u003ca\u003eControl.Monad.MonadStateIO\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XState",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#XState",
          "type": "type"
        },
        "index": {
          "description": "The monad type for commands It is an instance of StateIO from the general module Control.Monad.MonadStateIO",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XState",
          "package": "hxt-filter",
          "partial": "XState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:XState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe State has a system and a user part\n the user state is a type parameter\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlState",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
          "type": "data"
        },
        "index": {
          "description": "The State has system and user part the user state is type parameter",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlState",
          "package": "hxt-filter",
          "partial": "Xml State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:XmlState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eXmlFilter\u003c/a\u003e type for filters working on a state\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlStateFilter",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#XmlStateFilter",
          "type": "type"
        },
        "index": {
          "description": "The XmlFilter type for filters working on state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlStateFilter",
          "package": "hxt-filter",
          "partial": "Xml State Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:XmlStateFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "SysState",
          "package": "hxt-filter",
          "signature": "SysState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "SysState",
          "package": "hxt-filter",
          "partial": "Sys State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:SysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlState",
          "package": "hxt-filter",
          "signature": "XmlState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "XmlState",
          "package": "hxt-filter",
          "partial": "Xml State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:XmlState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "addFatal",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#addFatal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "addFatal",
          "normalized": "String-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Fatal",
          "signature": "String-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:addFatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike chain' but forget the final user state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter initialUserState :  the initial user state\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e returns : only the result of executing cmd\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "chain",
          "package": "hxt-filter",
          "signature": "state1 -\u003e XState state1 res -\u003e XState state0 res",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#chain",
          "type": "function"
        },
        "index": {
          "description": "like chain but forget the final user state parameter initialUserState the initial user state parameter cmd the command returns only the result of executing cmd",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "chain",
          "normalized": "a-\u003eXState a b-\u003eXState a b",
          "package": "hxt-filter",
          "signature": "state-\u003eXState state res-\u003eXState state res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:chain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a command in a new user state.\n chain the system state part,\n init new system state with the current one, run the command and\n update the old system state with the resulting new system state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter initialUserState :  the initial user state\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e returns : the result of executing cmd and the final state\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "chain'",
          "package": "hxt-filter",
          "signature": "state1 -\u003e XState state1 res -\u003e XState state0 (res, state1)",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#chain%27",
          "type": "function"
        },
        "index": {
          "description": "run command in new user state chain the system state part init new system state with the current one run the command and update the old system state with the resulting new system state parameter initialUserState the initial user state parameter cmd the command returns the result of executing cmd and the final state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "chain'",
          "normalized": "a-\u003eXState a b-\u003eXState a(b,a)",
          "package": "hxt-filter",
          "signature": "state-\u003eXState state res-\u003eXState state(res,state)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:chain-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the user state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fct :  the user state change function\n\u003c/li\u003e\u003cli\u003e returns : the new state\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "changeState",
          "package": "hxt-filter",
          "signature": "(state -\u003e state) -\u003e XState state state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#changeState",
          "type": "function"
        },
        "index": {
          "description": "change the user state parameter fct the user state change function returns the new state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "changeState",
          "normalized": "(a-\u003ea)-\u003eXState a a",
          "package": "hxt-filter",
          "partial": "State",
          "signature": "(state-\u003estate)-\u003eXState state state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:changeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the system part of the state.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003echangeState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "changeSysState",
          "package": "hxt-filter",
          "signature": "(SysState -\u003e SysState) -\u003e XState state SysState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#changeSysState",
          "type": "function"
        },
        "index": {
          "description": "change the system part of the state see also changeState",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "changeSysState",
          "normalized": "(SysState-\u003eSysState)-\u003eXState a SysState",
          "package": "hxt-filter",
          "partial": "Sys State",
          "signature": "(SysState-\u003eSysState)-\u003eXState state SysState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:changeSysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the attributes in the system state\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "changeSysStateAttrs",
          "package": "hxt-filter",
          "signature": "(SysStateAttrs -\u003e SysStateAttrs) -\u003e SysState -\u003e SysState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#changeSysStateAttrs",
          "type": "function"
        },
        "index": {
          "description": "change the attributes in the system state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "changeSysStateAttrs",
          "normalized": "(SysStateAttrs-\u003eSysStateAttrs)-\u003eSysState-\u003eSysState",
          "package": "hxt-filter",
          "partial": "Sys State Attrs",
          "signature": "(SysStateAttrs-\u003eSysStateAttrs)-\u003eSysState-\u003eSysState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:changeSysStateAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck whether the error level attribute in the system state\n is set to error, in this case the children of the document root are\n removed and error info is added as attributes with \u003ccode\u003e\u003ca\u003esetStatus\u003c/a\u003e\u003c/code\u003e\n else nothing is changed\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "checkResult",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#checkResult",
          "type": "function"
        },
        "index": {
          "description": "check whether the error level attribute in the system state is set to error in this case the children of the document root are removed and error info is added as attributes with setStatus else nothing is changed",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "checkResult",
          "normalized": "String-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Result",
          "signature": "String-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:checkResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the value of the attribute \u003ccode\u003e\u003ca\u003ea_status\u003c/a\u003e\u003c/code\u003e in a document root.\n if it contains a value greater or equal to \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e, an error with error message\n stored in attribute \u003ccode\u003e\u003ca\u003ea_module\u003c/a\u003e\u003c/code\u003e is issued and the filter acts as the \u003ccode\u003e\u003ca\u003enoneM\u003c/a\u003e\u003c/code\u003e filter\n else its the \u003ccode\u003e\u003ca\u003ethisM\u003c/a\u003e\u003c/code\u003e filter\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "checkStatus",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#checkStatus",
          "type": "function"
        },
        "index": {
          "description": "checks the value of the attribute status in document root if it contains value greater or equal to err an error with error message stored in attribute module is issued and the filter acts as the noneM filter else its the thisM filter",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "checkStatus",
          "package": "hxt-filter",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:checkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter to reset the state attribute \u003ccode\u003e\u003ca\u003ea_status\u003c/a\u003e\u003c/code\u003e\n    - returns : this\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "clearStatus",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#clearStatus",
          "type": "function"
        },
        "index": {
          "description": "filter to reset the state attribute status returns this",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "clearStatus",
          "package": "hxt-filter",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:clearStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror level translation\n \u003ccode\u003e\u003ca\u003ec_warn\u003c/a\u003e\u003c/code\u003e (1) : warning,\n \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e (2): error (e.g. parse error, validation error, ...),\n \u003ccode\u003e\u003ca\u003ec_fatal\u003c/a\u003e\u003c/code\u003e (3) : fatal error (document access error, internal error, ...)\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errClass",
          "package": "hxt-filter",
          "signature": "Int -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#errClass",
          "type": "function"
        },
        "index": {
          "description": "error level translation warn warning err error e.g parse error validation error fatal fatal error document access error internal error",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errClass",
          "normalized": "Int-\u003eString",
          "package": "hxt-filter",
          "partial": "Class",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgHandler",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgHandler",
          "package": "hxt-filter",
          "partial": "Msg Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror message handler for collecting all error messages\n all messages are stored under attribute \u003ccode\u003e\u003ca\u003ea_error_log\u003c/a\u003e\u003c/code\u003e\n they can be read with \u003ccode\u003egetSysParamTree a_error_log\u003c/code\u003e or by\n applying the filter \u003ccode\u003e\u003ca\u003egetErrorMsg\u003c/a\u003e\u003c/code\u003e to the root node\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgLogging",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgLogging",
          "type": "function"
        },
        "index": {
          "description": "error message handler for collecting all error messages all messages are stored under attribute error log they can be read with getSysParamTree error log or by applying the filter getErrorMsg to the root node",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgLogging",
          "package": "hxt-filter",
          "partial": "Msg Logging",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgLogging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgLoggingAndToStderr",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgLoggingAndToStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgLoggingAndToStderr",
          "package": "hxt-filter",
          "partial": "Msg Logging And To Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgLoggingAndToStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault error handler for writing errors to stderr\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgToStderr",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgToStderr",
          "type": "function"
        },
        "index": {
          "description": "default error handler for writing errors to stderr",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "errorMsgToStderr",
          "package": "hxt-filter",
          "partial": "Msg To Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgToStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe filter for reading all collected error mesages\n\u003c/p\u003e\u003cp\u003eresult is the list of error messages, the input tree is ignored\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getErrorMsg",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getErrorMsg",
          "type": "function"
        },
        "index": {
          "description": "the filter for reading all collected error mesages result is the list of error messages the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getErrorMsg",
          "package": "hxt-filter",
          "partial": "Error Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the user state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the current state\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getState",
          "package": "hxt-filter",
          "signature": "XState state state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getState",
          "type": "function"
        },
        "index": {
          "description": "read the user state returns the current state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getState",
          "package": "hxt-filter",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the error handler\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysErrorHandler",
          "package": "hxt-filter",
          "signature": "XState state (XmlStateFilter ())",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getSysErrorHandler",
          "type": "function"
        },
        "index": {
          "description": "get the error handler",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysErrorHandler",
          "normalized": "XState a(XmlStateFilter())",
          "package": "hxt-filter",
          "partial": "Sys Error Handler",
          "signature": "XState state(XmlStateFilter())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a system string parameter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e returns : the value, or the empty string for unknown parameters\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParam",
          "package": "hxt-filter",
          "signature": "String -\u003e XState state String",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParam",
          "type": "function"
        },
        "index": {
          "description": "read system string parameter parameter name the name of the parameter returns the value or the empty string for unknown parameters",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParam",
          "normalized": "String-\u003eXState a String",
          "package": "hxt-filter",
          "partial": "Sys Param",
          "signature": "String-\u003eXState state String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread an integer system parameter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name : \n\u003c/li\u003e\u003cli\u003e 2.parameter default : \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetSysParamWithDefault\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParamInt",
          "package": "hxt-filter",
          "signature": "String -\u003e Int -\u003e XState state Int",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParamInt",
          "type": "function"
        },
        "index": {
          "description": "read an integer system parameter parameter name parameter default see also getSysParamWithDefault",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParamInt",
          "normalized": "String-\u003eInt-\u003eXState a Int",
          "package": "hxt-filter",
          "partial": "Sys Param Int",
          "signature": "String-\u003eInt-\u003eXState state Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParamInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a system parameter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e returns : the list of tres associated with the key, or the empty list for unknown parameters\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParamTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XState state XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParamTree",
          "type": "function"
        },
        "index": {
          "description": "read system parameter parameter name the name of the parameter returns the list of tres associated with the key or the empty list for unknown parameters",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParamTree",
          "normalized": "String-\u003eXState a XmlTrees",
          "package": "hxt-filter",
          "partial": "Sys Param Tree",
          "signature": "String-\u003eXState state XmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParamTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a system parameter or return a default value\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e 2.parameter default :  the default value\n\u003c/li\u003e\u003cli\u003e returns : the value if found, else the default\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParamWithDefault",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XState state String",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParamWithDefault",
          "type": "function"
        },
        "index": {
          "description": "read system parameter or return default value parameter name the name of the parameter parameter default the default value returns the value if found else the default",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysParamWithDefault",
          "normalized": "String-\u003eString-\u003eXState a String",
          "package": "hxt-filter",
          "partial": "Sys Param With Default",
          "signature": "String-\u003eString-\u003eXState state String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParamWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the system part of the state.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysState",
          "package": "hxt-filter",
          "signature": "XState state SysState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getSysState",
          "type": "function"
        },
        "index": {
          "description": "read the system part of the state see also getState",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getSysState",
          "package": "hxt-filter",
          "partial": "Sys State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the current trace level.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the current trace level\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getTraceLevel",
          "package": "hxt-filter",
          "signature": "XState state Int",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#getTraceLevel",
          "type": "function"
        },
        "index": {
          "description": "get the current trace level returns the current trace level",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "getTraceLevel",
          "package": "hxt-filter",
          "partial": "Trace Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getTraceLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe initial system state\n\u003c/p\u003e\u003cp\u003ean empty list of attribute value pairs\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "initialSysState",
          "package": "hxt-filter",
          "signature": "SysState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#initialSysState",
          "type": "function"
        },
        "index": {
          "description": "the initial system state an empty list of attribute value pairs",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "initialSysState",
          "package": "hxt-filter",
          "partial": "Sys State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:initialSysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift an I/O command\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cmd :  the i/o command\n\u003c/li\u003e\u003cli\u003e returns : the i/o command lifted to the XML state monad\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "io",
          "package": "hxt-filter",
          "signature": "IO a -\u003e XState state a",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#io",
          "type": "function"
        },
        "index": {
          "description": "lift an command parameter cmd the command returns the command lifted to the XML state monad",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "io",
          "normalized": "IO a-\u003eXState b a",
          "package": "hxt-filter",
          "signature": "IO a-\u003eXState state a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for issuing an error\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueErr",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#issueErr",
          "type": "function"
        },
        "index": {
          "description": "short cut for issuing an error see also issueError",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueErr",
          "normalized": "String-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Err",
          "signature": "String-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereport an error message.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : if the input tree n represents an error, \u003ccode\u003eres = []\u003c/code\u003e\n\t\t  and the error is processed by the errror handler filter (default: error is issued on stderr)\n\t\t  else \u003ccode\u003eres = [n]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueErr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueError",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#issueError",
          "type": "function"
        },
        "index": {
          "description": "report an error message returns if the input tree represents an error res and the error is processed by the errror handler filter default error is issued on stderr else res see also issueErr",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueError",
          "package": "hxt-filter",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for issuing a fatal error\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eissueErr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueFatal",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#issueFatal",
          "type": "function"
        },
        "index": {
          "description": "short cut for issuing fatal error see also issueError issueErr",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueFatal",
          "normalized": "String-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Fatal",
          "signature": "String-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueFatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for issuing a warning\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eissueErr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueWarn",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#issueWarn",
          "type": "function"
        },
        "index": {
          "description": "short cut for issuing warning see also issueError issueErr",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "issueWarn",
          "normalized": "String-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Warn",
          "signature": "String-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift a XmlFilter to a XmlStateFilter filter\n issue all error nodes as error messages\n and remove the error nodes from the result\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the filter\n\u003c/li\u003e\u003cli\u003e returns : the filter running in the state monad\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eall errors are filtered from the result and issued on stderr\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "liftF",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#liftF",
          "type": "function"
        },
        "index": {
          "description": "lift XmlFilter to XmlStateFilter filter issue all error nodes as error messages and remove the error nodes from the result parameter the filter returns the filter running in the state monad all errors are filtered from the result and issued on stderr",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "liftF",
          "normalized": "XmlFilter-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "signature": "XmlFilter-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:liftF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic filter for processing the attribute list of a tag.\n for other trees this filter acts like \u003ccode\u003e\u003ca\u003enoneM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprocessAttrl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "processAttrM",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#processAttrM",
          "type": "function"
        },
        "index": {
          "description": "monadic filter for processing the attribute list of tag for other trees this filter acts like noneM see also processAttr processAttrl",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "processAttrM",
          "normalized": "XmlStateFilter a-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "XmlStateFilter a-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:processAttrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexec a XState command with initial user state.\n ignore final user state.\n like run0, but ignore the resulting user state\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "run",
          "package": "hxt-filter",
          "signature": "state -\u003e XState state res -\u003e IO res",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#run",
          "type": "function"
        },
        "index": {
          "description": "exec XState command with initial user state ignore final user state like run0 but ignore the resulting user state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "run",
          "normalized": "a-\u003eXState a b-\u003eIO b",
          "package": "hxt-filter",
          "signature": "state-\u003eXState state res-\u003eIO res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexec a XState command in th IO monad.\n like run with the empty state ().\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "run'",
          "package": "hxt-filter",
          "signature": "XState () res -\u003e IO res",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#run%27",
          "type": "function"
        },
        "index": {
          "description": "exec XState command in th IO monad like run with the empty state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "run'",
          "normalized": "XState()a-\u003eIO a",
          "package": "hxt-filter",
          "signature": "XState()res-\u003eIO res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:run-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexec a XState command with initial state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter initalState :  the inital user state\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e returns : the i/o command with result and user state\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "run0",
          "package": "hxt-filter",
          "signature": "XmlState state -\u003e XState state res -\u003e IO (res, XmlState state)",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#run0",
          "type": "function"
        },
        "index": {
          "description": "exec XState command with initial state parameter initalState the inital user state parameter cmd the command returns the command with result and user state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "run0",
          "normalized": "XmlState a-\u003eXState a b-\u003eIO(b,XmlState a)",
          "package": "hxt-filter",
          "signature": "XmlState state-\u003eXState state res-\u003eIO(res,XmlState state)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:run0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the error level in system state\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setErrorMsgLevel",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setErrorMsgLevel",
          "type": "function"
        },
        "index": {
          "description": "set the error level in system state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setErrorMsgLevel",
          "package": "hxt-filter",
          "partial": "Error Msg Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setErrorMsgLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the user state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter s :  the new state\n\u003c/li\u003e\u003cli\u003e returns : the new state\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setState",
          "package": "hxt-filter",
          "signature": "state -\u003e XState state state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setState",
          "type": "function"
        },
        "index": {
          "description": "set the user state parameter the new state returns the new state",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setState",
          "normalized": "a-\u003eXState a a",
          "package": "hxt-filter",
          "partial": "State",
          "signature": "state-\u003eXState state state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the error level and the module where the error occured\n to the attributes of a document root node and remove the children when level is greater or equal to \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setStatus",
          "package": "hxt-filter",
          "signature": "Int -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setStatus",
          "type": "function"
        },
        "index": {
          "description": "add the error level and the module where the error occured to the attributes of document root node and remove the children when level is greater or equal to err",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setStatus",
          "normalized": "Int-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Status",
          "signature": "Int-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the error message handler\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysErrorHandler",
          "package": "hxt-filter",
          "signature": "XmlStateFilter () -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setSysErrorHandler",
          "type": "function"
        },
        "index": {
          "description": "set the error message handler",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysErrorHandler",
          "normalized": "XmlStateFilter()-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "Sys Error Handler",
          "signature": "XmlStateFilter()-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset or change a single system parameter of type string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e 2.parameter value :  the (new) string value\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetSysParamTree\u003c/a\u003e\u003c/code\u003e, setSysParamInt\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysParam",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setSysParam",
          "type": "function"
        },
        "index": {
          "description": "set or change single system parameter of type string parameter name the name of the parameter parameter value the new string value returns nothing see also setSysParamTree setSysParamInt",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysParam",
          "normalized": "String-\u003eString-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "Sys Param",
          "signature": "String-\u003eString-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset or change a single integer type system parameter\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetSysParam\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysParamInt",
          "package": "hxt-filter",
          "signature": "String -\u003e Int -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setSysParamInt",
          "type": "function"
        },
        "index": {
          "description": "set or change single integer type system parameter see also setSysParam",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysParamInt",
          "normalized": "String-\u003eInt-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "Sys Param Int",
          "signature": "String-\u003eInt-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysParamInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset or change a single system parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e 2.parameter value :  the list of associated trees\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetSysParam\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetSysParamInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysParamTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setSysParamTree",
          "type": "function"
        },
        "index": {
          "description": "set or change single system parameter parameter name the name of the parameter parameter value the list of associated trees returns nothing see also setSysParam setSysParamInt",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysParamTree",
          "normalized": "String-\u003eXmlTrees-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "Sys Param Tree",
          "signature": "String-\u003eXmlTrees-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysParamTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the system part of the state.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysState",
          "package": "hxt-filter",
          "signature": "SysState -\u003e XState state SysState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setSysState",
          "type": "function"
        },
        "index": {
          "description": "set the system part of the state see also setState",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSysState",
          "normalized": "SysState-\u003eXState a SysState",
          "package": "hxt-filter",
          "partial": "Sys State",
          "signature": "SysState-\u003eXState state SysState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd (or change) all attributes of the document root to the system state\n     - returns : this\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSystemParams",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setSystemParams",
          "type": "function"
        },
        "index": {
          "description": "add or change all attributes of the document root to the system state returns this",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setSystemParams",
          "package": "hxt-filter",
          "partial": "System Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSystemParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the trace level.\n\u003c/p\u003e\u003cp\u003econvention:\n\u003c/p\u003e\u003cp\u003e0: no trace output (default)\n\u003c/p\u003e\u003cp\u003e1: trace important computation steps, e.g. accessing a document\n\u003c/p\u003e\u003cp\u003e2: trace small computation steps\n\u003c/p\u003e\u003cp\u003e3: output an intermediate result XmlTree in XML source format\n\u003c/p\u003e\u003cp\u003e4: output an intermediate result XmlTree in tree representation\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  the trace level\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setTraceLevel",
          "package": "hxt-filter",
          "signature": "Int -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#setTraceLevel",
          "type": "function"
        },
        "index": {
          "description": "set the trace level convention no trace output default trace important computation steps e.g accessing document trace small computation steps output an intermediate result XmlTree in XML source format output an intermediate result XmlTree in tree representation parameter level the trace level returns nothing",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "setTraceLevel",
          "normalized": "Int-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "Trace Level",
          "signature": "Int-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setTraceLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck whether tree is a document root and the status attribute has a value less than \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "statusOk",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#statusOk",
          "type": "function"
        },
        "index": {
          "description": "check whether tree is document root and the status attribute has value less than err",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "statusOk",
          "package": "hxt-filter",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:statusOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "sysState",
          "package": "hxt-filter",
          "signature": "SysState",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "sysState",
          "package": "hxt-filter",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:sysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "sysStateAttrs",
          "package": "hxt-filter",
          "signature": "SysStateAttrs",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "sysStateAttrs",
          "package": "hxt-filter",
          "partial": "State Attrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:sysStateAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "sysStateErrorHandler",
          "package": "hxt-filter",
          "signature": "(XmlStateFilter ())",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "sysStateErrorHandler",
          "normalized": "(XmlStateFilter())",
          "package": "hxt-filter",
          "partial": "State Error Handler",
          "signature": "(XmlStateFilter())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:sysStateErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrace output function for simple text.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  like in traceCmd\n\u003c/li\u003e\u003cli\u003e 2.parameter str :  the test\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "trace",
          "package": "hxt-filter",
          "signature": "Int -\u003e String -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#trace",
          "type": "function"
        },
        "index": {
          "description": "trace output function for simple text parameter level like in traceCmd parameter str the test returns nothing",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "trace",
          "normalized": "Int-\u003eString-\u003eXState a()",
          "package": "hxt-filter",
          "signature": "Int-\u003eString-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrace output for arbitray commands.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  the trace level,\n\t\t\t  for which the command will be execuded\n\t\t\t  if level \u003c= current trace level\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command to be executed\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "traceCmd",
          "package": "hxt-filter",
          "signature": "Int -\u003e XState state a -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#traceCmd",
          "type": "function"
        },
        "index": {
          "description": "trace output for arbitray commands parameter level the trace level for which the command will be execuded if level current trace level parameter cmd the command to be executed returns nothing",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "traceCmd",
          "normalized": "Int-\u003eXState a b-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "Cmd",
          "signature": "Int-\u003eXState state a-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:traceCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrace output of the user part of the program state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  like in traceCmd\n\u003c/li\u003e\u003cli\u003e 2.parameter showFct :  the toString function\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "traceState",
          "package": "hxt-filter",
          "signature": "Int -\u003e (state -\u003e String) -\u003e XState state ()",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#traceState",
          "type": "function"
        },
        "index": {
          "description": "trace output of the user part of the program state parameter level like in traceCmd parameter showFct the toString function returns nothing",
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "traceState",
          "normalized": "Int-\u003e(a-\u003eString)-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "State",
          "signature": "Int-\u003e(state-\u003eString)-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:traceState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "userState",
          "package": "hxt-filter",
          "signature": "state",
          "source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlState",
          "module": "Text.XML.HXT.DOM.XmlState",
          "name": "userState",
          "package": "hxt-filter",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:userState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module exports elements from the basic libraries:\n XmlTreeTypes, XmlKeywords, XNodeFunctions, XmlTreeFunctions and XmlTreeFilter\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.XmlTree",
          "name": "XmlTree",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTree.html",
          "type": "module"
        },
        "index": {
          "description": "This helper module exports elements from the basic libraries XmlTreeTypes XmlKeywords XNodeFunctions XmlTreeFunctions and XmlTreeFilter",
          "hierarchy": "Text XML HXT DOM XmlTree",
          "module": "Text.XML.HXT.DOM.XmlTree",
          "name": "XmlTree",
          "package": "hxt-filter",
          "partial": "Xml Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ebasic XmlTree filter\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "XmlTreeFilter",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html",
          "type": "module"
        },
        "index": {
          "description": "basic XmlTree filter",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "XmlTreeFilter",
          "package": "hxt-filter",
          "partial": "Xml Tree Filter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenient filter function adding a whole list of trees, just for not writing to many ( ... ).\n\u003c/p\u003e\u003cp\u003einfixl 7\n\u003c/p\u003e\u003cpre\u003e f ++= gl  == f += cat gl\u003c/pre\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "(++=)",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e [XmlFilter] -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#%2B%2B%3D",
          "type": "function"
        },
        "index": {
          "description": "convenient filter function adding whole list of trees just for not writing to many infixl gl cat gl see also",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "(++=) ++=",
          "normalized": "XmlFilter-\u003e[XmlFilter]-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "XmlFilter-\u003e[XmlFilter]-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:-43--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenient function for tag node tree construction\n\u003c/p\u003e\u003cp\u003einfixl 7\n\u003c/p\u003e\u003cp\u003efilter combinator for tag tree constrcution\n take a 1. filter for computing a tag node tree (or a whole list of tag node trees)\n then add all trees computed by the 2. filter to the attribute list when they represent attributes\n else append them to the list of children.\n\u003c/p\u003e\u003cp\u003eif the 1. filter computes a list of tag nodes, the results of the 2. filter are added to all trees\n\u003c/p\u003e\u003cp\u003eexample: \u003ccode\u003e etag \"a\" += sattr \"href\" \"#42\" += txt \"the answer\" \u003c/code\u003e\n gives the tree \u003ccode\u003e \u003ca href=\"#42\"\u003ethe answer\u003c/a\u003e \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eexample: \u003ccode\u003e ( etag \"a\" +++ etag \"b\" ) += sattr \"x\" \"42\" \u003c/code\u003e\n gives the tree \u003ccode\u003e \u003ca x=\"42\"/\u003e\u003cb x=\"42\"/\u003e \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eadd1Attr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emodifyChildren\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e++=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "(+=)",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "description": "convenient function for tag node tree construction infixl filter combinator for tag tree constrcution take filter for computing tag node tree or whole list of tag node trees then add all trees computed by the filter to the attribute list when they represent attributes else append them to the list of children if the filter computes list of tag nodes the results of the filter are added to all trees example etag sattr href txt the answer gives the tree href the answer example etag etag sattr gives the tree see also etag tag add1Attr modifyChildren",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "(+=) +=",
          "normalized": "XmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "XmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an attribute to the attribute list of a tag.\n If the attribute already exists, it's substituted,\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003esattr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "add1Attr",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#add1Attr",
          "type": "function"
        },
        "index": {
          "description": "add an attribute to the attribute list of tag If the attribute already exists it substituted see also sattr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "add1Attr",
          "normalized": "XmlTree-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "XmlTree-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:add1Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd or change an attribute with a given string as value for a XTag or XPi tree,\n uses \u003ccode\u003e\u003ca\u003eadd1Attr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addAttr",
          "type": "function"
        },
        "index": {
          "description": "add or change an attribute with given string as value for XTag or XPi tree uses add1Attr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addAttr",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd or change an attribute with an Int value.\n uses \u003ccode\u003e\u003ca\u003eaddAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addAttrInt",
          "package": "hxt-filter",
          "signature": "String -\u003e Int -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addAttrInt",
          "type": "function"
        },
        "index": {
          "description": "add or change an attribute with an Int value uses addAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addAttrInt",
          "normalized": "String-\u003eInt-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr Int",
          "signature": "String-\u003eInt-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addAttrInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadds an attribute list computed by a filter, uses \u003ccode\u003e\u003ca\u003eadd1Attr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addAttrl",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addAttrl",
          "type": "function"
        },
        "index": {
          "description": "adds an attribute list computed by filter uses add1Attr see also",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addAttrl",
          "normalized": "XmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attrl",
          "signature": "XmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addAttrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd or change an attribute of a DTD tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addDTDAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addDTDAttr",
          "type": "function"
        },
        "index": {
          "description": "add or change an attribute of DTD tree",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "addDTDAttr",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "DTDAttr",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addDTDAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariant of tag, useful for tags with attributes but without children\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "atag",
          "package": "hxt-filter",
          "signature": "String -\u003e [XmlFilter] -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#atag",
          "type": "function"
        },
        "index": {
          "description": "variant of tag useful for tags with attributes but without children see also mkXTag tag stag etag cat",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "atag",
          "normalized": "String-\u003e[XmlFilter]-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003e[XmlFilter]-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:atag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emkXAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "attr",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#attr",
          "type": "function"
        },
        "index": {
          "description": "Alias for mkXAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "attr",
          "normalized": "String-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for generating simple cdata sections,\n the input tree is ignored\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "cdata",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#cdata",
          "type": "function"
        },
        "index": {
          "description": "short cut for generating simple cdata sections the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "cdata",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:cdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for simple comment\n the input tree is ignored\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXCmt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "cmt",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#cmt",
          "type": "function"
        },
        "index": {
          "description": "short cut for simple comment the input tree is ignored see also mkXCmt",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "cmt",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:cmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete an attribute from the attribute list of a tag tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "del1Attr",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#del1Attr",
          "type": "function"
        },
        "index": {
          "description": "delete an attribute from the attribute list of tag tree",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "del1Attr",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:del1Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDTD part generation with filter for attributes and children\n see also: \u003ccode\u003e\u003ca\u003emkXDTDTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "dtd",
          "package": "hxt-filter",
          "signature": "DTDElem -\u003e [XmlFilter] -\u003e [XmlFilter] -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#dtd",
          "type": "function"
        },
        "index": {
          "description": "DTD part generation with filter for attributes and children see also mkXDTDTree",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "dtd",
          "normalized": "DTDElem-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "DTDElem-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:dtd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for mkXError c_fatal.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "err",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#err",
          "type": "function"
        },
        "index": {
          "description": "short cut for mkXError fatal see also mkXError",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "err",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort cut for empty tags without attributes\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "etag",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#etag",
          "type": "function"
        },
        "index": {
          "description": "Short cut for empty tags without attributes see also tag atag stag mkXTag and",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "etag",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:etag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for mkXError c_fatal.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "fatal",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#fatal",
          "type": "function"
        },
        "index": {
          "description": "short cut for mkXError fatal see also mkXError",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "fatal",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:fatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for selecting the attibute list\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getAttrl",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getAttrl",
          "type": "function"
        },
        "index": {
          "description": "filter for selecting the attibute list",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getAttrl",
          "package": "hxt-filter",
          "partial": "Attrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getAttrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for selecting an attribute of a DTD node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getDTDValue",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getDTDValue",
          "type": "function"
        },
        "index": {
          "description": "filter for selecting an attribute of DTD node Result of the filter is single element list with text node or the empty list",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getDTDValue",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "DTDValue",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getDTDValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for selecting the name of a tag node, an attribute node or a pi node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getName",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getName",
          "type": "function"
        },
        "index": {
          "description": "filter for selecting the name of tag node an attribute node or pi node Result of the filter is single element list with text node or the empty list",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getName",
          "package": "hxt-filter",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for selecting the value of an attribute with namespace in a tag node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getNsValue",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getNsValue",
          "type": "function"
        },
        "index": {
          "description": "filter for selecting the value of an attribute with namespace in tag node Result of the filter is single element list with text node or the empty list see also getValue isNsAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getNsValue",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Ns Value",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getNsValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for selecting the value of an attribute in a tag node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ehasValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetNsValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getValue",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getValue",
          "type": "function"
        },
        "index": {
          "description": "filter for selecting the value of an attribute in tag node Result of the filter is single element list with text node or the empty list see also hasValue getNsValue",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getValue",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Value",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for selecting the CDATA content.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getXCdata",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getXCdata",
          "type": "function"
        },
        "index": {
          "description": "filter for selecting the CDATA content Result of the filter is single element list with text node or the empty list",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getXCdata",
          "package": "hxt-filter",
          "partial": "XCdata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getXCdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for selecting content of a comment.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getXCmt",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getXCmt",
          "type": "function"
        },
        "index": {
          "description": "filter for selecting content of comment Result of the filter is single element list with text node or the empty list",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "getXCmt",
          "package": "hxt-filter",
          "partial": "XCmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getXCmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the node of a tree is a XTag node or a XPi node with an attibute of a specific name\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasAttr",
          "type": "function"
        },
        "index": {
          "description": "test whether the node of tree is XTag node or XPi node with an attibute of specific name see also isAttr hasNsAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasAttr",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree has a given local name\n see also : \u003ccode\u003e\u003ca\u003ehasNamespace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasPrefix\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasLocalPart",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasLocalPart",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree has given local name see also hasNamespace hasPrefix isTag isAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasLocalPart",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Local Part",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasLocalPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree belongs to a given namespace\n see also : \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasLocalPart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasPrefix\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasNamespace",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasNamespace",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree belongs to given namespace see also isTag isAttr hasLocalPart hasPrefix",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasNamespace",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Namespace",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the tree is a XTag node with an attibute of a specific local name and namespace uri\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ehasAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasNsAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasNsAttr",
          "type": "function"
        },
        "index": {
          "description": "test whether the tree is XTag node with an attibute of specific local name and namespace uri see also hasAttr isNsAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasNsAttr",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Ns Attr",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasNsAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck whether an option is set\n\u003c/p\u003e\u003cp\u003ereads the value of an attribute, usually applied to a document root node,\n and checks if the value represents True. The following strings are interpreted\n as true: \"1\", \"True\", \"true\", \"yes\", \"Yes\".\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasOption",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasOption",
          "type": "function"
        },
        "index": {
          "description": "check whether an option is set reads the value of an attribute usually applied to document root node and checks if the value represents True The following strings are interpreted as true True true yes Yes",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasOption",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Option",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree has a given prefix name\n see also : \u003ccode\u003e\u003ca\u003ehasNamespace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasLocalPart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasPrefix",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasPrefix",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree has given prefix name see also hasNamespace hasLocalPart isTag isAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasPrefix",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Prefix",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the given node is a XTag node or a XPI node with an attribute with a value with a specific property.\n In case of a match, the attribute value represented by a text node is returned as single element list,\n else the empty list is the result.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasValue",
          "package": "hxt-filter",
          "signature": "String -\u003e (String -\u003e Bool) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasValue",
          "type": "function"
        },
        "index": {
          "description": "test whether the given node is XTag node or XPI node with an attribute with value with specific property In case of match the attribute value represented by text node is returned as single element list else the empty list is the result see also getValue",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "hasValue",
          "normalized": "String-\u003e(String-\u003eBool)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Value",
          "signature": "String-\u003e(String-\u003eBool)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombination of \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e and conversion to a Int\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "intValueOf",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree -\u003e Int",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#intValueOf",
          "type": "function"
        },
        "index": {
          "description": "combination of getValue and conversion to Int",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "intValueOf",
          "normalized": "String-\u003eXmlTree-\u003eInt",
          "package": "hxt-filter",
          "partial": "Value Of",
          "signature": "String-\u003eXmlTree-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:intValueOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an ATTLIST DTD part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttlist",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttlist",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an ATTLIST DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttlist",
          "package": "hxt-filter",
          "partial": "Attlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttlistOfElement",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttlistOfElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttlistOfElement",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attlist Of Element",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttlistOfElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttlistParameterEntity",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttlistParameterEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttlistParameterEntity",
          "package": "hxt-filter",
          "partial": "Attlist Parameter Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttlistParameterEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree is an attribute node for a given attribute name\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttr",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree is an attribute node for given attribute name",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isAttr",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a conditional section DTD part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isCondSect",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isCondSect",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains conditional section DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isCondSect",
          "package": "hxt-filter",
          "partial": "Cond Sect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isCondSect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a DTD name part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isDTDName",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isDTDName",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains DTD name part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isDTDName",
          "package": "hxt-filter",
          "partial": "DTDName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isDTDName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isDefaultAttrKind",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isDefaultAttrKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isDefaultAttrKind",
          "package": "hxt-filter",
          "partial": "Default Attr Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isDefaultAttrKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a DOCTYPE DTD part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isDoctype",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isDoctype",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains DOCTYPE DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isDoctype",
          "package": "hxt-filter",
          "partial": "Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isDoctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isElemContentParamEntity",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isElemContentParamEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isElemContentParamEntity",
          "package": "hxt-filter",
          "partial": "Elem Content Param Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isElemContentParamEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isElemWithContent",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isElemWithContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isElemWithContent",
          "package": "hxt-filter",
          "partial": "Elem With Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isElemWithContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an ELEMENT DTD part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isElement",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isElement",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an ELEMENT DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isElement",
          "package": "hxt-filter",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isEmptyElement",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isEmptyElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isEmptyElement",
          "package": "hxt-filter",
          "partial": "Empty Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isEmptyElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an ENTITY DTD part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isEntity",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isEntity",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an ENTITY DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isEntity",
          "package": "hxt-filter",
          "partial": "Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isEnumAttrType",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isEnumAttrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isEnumAttrType",
          "package": "hxt-filter",
          "partial": "Enum Attr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isEnumAttrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an error node for an error.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isError",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isError",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an error node for an error",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isError",
          "package": "hxt-filter",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isExternalParameterEntity",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isExternalParameterEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isExternalParameterEntity",
          "package": "hxt-filter",
          "partial": "External Parameter Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isExternalParameterEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an error node for a fatal error.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isFatalError",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isFatalError",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an error node for fatal error",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isFatalError",
          "package": "hxt-filter",
          "partial": "Fatal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isFatalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isFixedAttrKind",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isFixedAttrKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isFixedAttrKind",
          "package": "hxt-filter",
          "partial": "Fixed Attr Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isFixedAttrKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isIdAttrType",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isIdAttrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isIdAttrType",
          "package": "hxt-filter",
          "partial": "Id Attr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isIdAttrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isIdRefAttrType",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isIdRefAttrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isIdRefAttrType",
          "package": "hxt-filter",
          "partial": "Id Ref Attr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isIdRefAttrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isInternalParameterEntity",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isInternalParameterEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isInternalParameterEntity",
          "package": "hxt-filter",
          "partial": "Internal Parameter Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isInternalParameterEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isMixedContentElement",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isMixedContentElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isMixedContentElement",
          "package": "hxt-filter",
          "partial": "Mixed Content Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isMixedContentElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a NOTATION DTD part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNotation",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNotation",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains NOTATION DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNotation",
          "package": "hxt-filter",
          "partial": "Notation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNotationAttrType",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNotationAttrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNotationAttrType",
          "package": "hxt-filter",
          "partial": "Notation Attr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNotationAttrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enamespace aware test whether the tree contains an attribute node. Parameters are the local part of the atribute name and the namespace.\n Only usable after namespace propagation.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisNsTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNsAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNsAttr",
          "type": "function"
        },
        "index": {
          "description": "namespace aware test whether the tree contains an attribute node Parameters are the local part of the atribute name and the namespace Only usable after namespace propagation see also isNsTag isAttr hasNsAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNsAttr",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Ns Attr",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNsAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enamespace aware test whether the root of a tree contains a tag node. Parameters are the local part and namespace.\n Only usable after namespace propagation.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNsTag",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNsTag",
          "type": "function"
        },
        "index": {
          "description": "namespace aware test whether the root of tree contains tag node Parameters are the local part and namespace Only usable after namespace propagation see also isTag",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isNsTag",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Ns Tag",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNsTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral test for an attribute name\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfAttr",
          "package": "hxt-filter",
          "signature": "(AttrName -\u003e Bool) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfAttr",
          "type": "function"
        },
        "index": {
          "description": "general test for an attribute name",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfAttr",
          "normalized": "(AttrName-\u003eBool)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Of Attr",
          "signature": "(AttrName-\u003eBool)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a processing instruction of a special name.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfPi",
          "package": "hxt-filter",
          "signature": "(TagName -\u003e Bool) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfPi",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains processing instruction of special name",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfPi",
          "normalized": "(TagName-\u003eBool)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Of Pi",
          "signature": "(TagName-\u003eBool)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a tag node with a special name.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfTag",
          "package": "hxt-filter",
          "signature": "(TagName -\u003e Bool) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfTag",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains tag node with special name",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfTag",
          "normalized": "(TagName-\u003eBool)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Of Tag",
          "signature": "(TagName-\u003eBool)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a text node with a special property\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfText",
          "package": "hxt-filter",
          "signature": "(String -\u003e Bool) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfText",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains text node with special property",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isOfText",
          "normalized": "(String-\u003eBool)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Of Text",
          "signature": "(String-\u003eBool)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a parameter entity declaration.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isParameterEntity",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isParameterEntity",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains parameter entity declaration",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isParameterEntity",
          "package": "hxt-filter",
          "partial": "Parameter Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isParameterEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a parameter ENTITY reference.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isPeRef",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isPeRef",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains parameter ENTITY reference",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isPeRef",
          "package": "hxt-filter",
          "partial": "Pe Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isPeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the tree is a processing instruction with a given name.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isPi",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isPi",
          "type": "function"
        },
        "index": {
          "description": "test whether the tree is processing instruction with given name",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isPi",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Pi",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isRequiredAttrKind",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isRequiredAttrKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isRequiredAttrKind",
          "package": "hxt-filter",
          "partial": "Required Attr Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isRequiredAttrKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a document root node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isRoot",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains document root node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isRoot",
          "package": "hxt-filter",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a tag node.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisNsTag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isTag",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isTag",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains tag node see also isNsTag",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isTag",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Tag",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a special text.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isText",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isText",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains special text",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isText",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Text",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isUnparsedEntity",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isUnparsedEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isUnparsedEntity",
          "package": "hxt-filter",
          "partial": "Unparsed Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isUnparsedEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an error node for a warning.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isWarning",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isWarning",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an error node for warning",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isWarning",
          "package": "hxt-filter",
          "partial": "Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a text node only with whitespace.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isWhiteSpace",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isWhiteSpace",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains text node only with whitespace",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isWhiteSpace",
          "package": "hxt-filter",
          "partial": "White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an attribute node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXAttr",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXAttr",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an attribute node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXAttr",
          "package": "hxt-filter",
          "partial": "XAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a CDATA node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXCdata",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXCdata",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains CDATA node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXCdata",
          "package": "hxt-filter",
          "partial": "XCdata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXCdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a character reference node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXCharRef",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXCharRef",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains character reference node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXCharRef",
          "package": "hxt-filter",
          "partial": "XChar Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a comment node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXCmt",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXCmt",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains comment node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXCmt",
          "package": "hxt-filter",
          "partial": "XCmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXCmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a DTD part.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXDTD",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXDTD",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXDTD",
          "package": "hxt-filter",
          "partial": "XDTD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an entity reference node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXEntityRef",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXEntityRef",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an entity reference node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXEntityRef",
          "package": "hxt-filter",
          "partial": "XEntity Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXEntityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains an error node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXError",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXError",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains an error node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXError",
          "package": "hxt-filter",
          "partial": "XError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a processing instruction node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXPi",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXPi",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains processing instruction node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXPi",
          "package": "hxt-filter",
          "partial": "XPi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a tag node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXTag",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXTag",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains tag node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXTag",
          "package": "hxt-filter",
          "partial": "XTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the root of a tree contains a text node.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXText",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXText",
          "type": "function"
        },
        "index": {
          "description": "test whether the root of tree contains text node",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXText",
          "package": "hxt-filter",
          "partial": "XText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the tree is a \u003c?xml ... ?\u003e declaration\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXmlPi",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXmlPi",
          "type": "function"
        },
        "index": {
          "description": "test whether the tree is xml declaration",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "isXmlPi",
          "package": "hxt-filter",
          "partial": "Xml Pi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXmlPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualified version \u003ccode\u003e\u003ca\u003emkXAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkQAttr",
          "package": "hxt-filter",
          "signature": "QName -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkQAttr",
          "type": "function"
        },
        "index": {
          "description": "Qualified version mkXAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkQAttr",
          "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "QAttr",
          "signature": "QName-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkQAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion with qualified names of \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkQTag",
          "package": "hxt-filter",
          "signature": "QName -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkQTag",
          "type": "function"
        },
        "index": {
          "description": "Version with qualified names of mkXTag",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkQTag",
          "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "QTag",
          "signature": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkQTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for attribute construction.\n a new tree with attribute name and a value computed by a filter\n is build.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXAttr",
          "type": "function"
        },
        "index": {
          "description": "filter for attribute construction new tree with attribute name and value computed by filter is build",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXAttr",
          "normalized": "String-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XAttr",
          "signature": "String-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a CDATA section node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXCdata",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXCdata",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for CDATA section node new tree is constructed the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXCdata",
          "normalized": "XmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XCdata",
          "signature": "XmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXCdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a character reference node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXCharRef",
          "package": "hxt-filter",
          "signature": "Int -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXCharRef",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for character reference node new tree is constructed the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXCharRef",
          "normalized": "Int-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XChar Ref",
          "signature": "Int-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a comment node.\n a new tree is constructed.\n the xml string representation of the filter result\n forms the comment\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXCmt",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXCmt",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for comment node new tree is constructed the xml string representation of the filter result forms the comment",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXCmt",
          "normalized": "XmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XCmt",
          "signature": "XmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXCmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a DTD part.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXDTD",
          "package": "hxt-filter",
          "signature": "DTDElem -\u003e Attributes -\u003e XmlTrees -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXDTD",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for DTD part new tree is constructed the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXDTD",
          "normalized": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XDTD",
          "signature": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for an entity reference node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXEntityRef",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXEntityRef",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for an entity reference node new tree is constructed the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXEntityRef",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XEntity Ref",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXEntityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for an error message node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXError",
          "package": "hxt-filter",
          "signature": "Int -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXError",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for an error message node new tree is constructed the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXError",
          "normalized": "Int-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XError",
          "signature": "Int-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for attribute construction.\n a new tree with attribute name and namespace and a value computed by a filter\n is build.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXNsAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXNsAttr",
          "type": "function"
        },
        "index": {
          "description": "filter for attribute construction new tree with attribute name and namespace and value computed by filter is build",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXNsAttr",
          "normalized": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XNs Attr",
          "signature": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXNsAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a tag node.\n a new tree is constructed.\n the attributes and the children are computed by applying the aproprate filter to the input tree\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the tag name in form of prefix:localpart\n\u003c/li\u003e\u003cli\u003e 2.parameter ns:   the namespace uri\n\u003c/li\u003e\u003cli\u003e 3.parameter af :  the filter for the attribute list\n\u003c/li\u003e\u003cli\u003e 4.parameter cf :  the filter for the children\n\u003c/li\u003e\u003cli\u003e returns : the constructor filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXNsTag",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXNsTag",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for tag node new tree is constructed the attributes and the children are computed by applying the aproprate filter to the input tree parameter the tag name in form of prefix localpart parameter ns the namespace uri parameter af the filter for the attribute list parameter cf the filter for the children returns the constructor filter",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXNsTag",
          "normalized": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XNs Tag",
          "signature": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXNsTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a processing instruction\n a new tree is constructed from the text representation\n of the input tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXPi",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXPi",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for processing instruction new tree is constructed from the text representation of the input tree",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXPi",
          "normalized": "String-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XPi",
          "signature": "String-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a tag node.\n a new tree is constructed.\n the attributes and the children are computed by applying the aproprate filter to the input tree\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the tag name\n\u003c/li\u003e\u003cli\u003e 2.parameter af :  the filter for the attribute list\n\u003c/li\u003e\u003cli\u003e 3.parameter cf :  the filter for the children\n\u003c/li\u003e\u003cli\u003e returns : the constructor filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXTag",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXTag",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for tag node new tree is constructed the attributes and the children are computed by applying the aproprate filter to the input tree parameter the tag name parameter af the filter for the attribute list parameter cf the filter for the children returns the constructor filter",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXTag",
          "normalized": "String-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XTag",
          "signature": "String-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructor filter for a text node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXText",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXText",
          "type": "function"
        },
        "index": {
          "description": "constructor filter for text node new tree is constructed the input tree is ignored",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "mkXText",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "XText",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eedit filter for changing the value of an attribute in a tag node.\n result of the filter is a single element list with the tag node or the empty list.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the attribute\n\u003c/li\u003e\u003cli\u003e 2.parameter f :  the edit function for the attribute value\n\u003c/li\u003e\u003cli\u003e returns : the edit filter\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "modifyAttr",
          "package": "hxt-filter",
          "signature": "String -\u003e (String -\u003e String) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#modifyAttr",
          "type": "function"
        },
        "index": {
          "description": "edit filter for changing the value of an attribute in tag node result of the filter is single element list with the tag node or the empty list parameter the name of the attribute parameter the edit function for the attribute value returns the edit filter",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "modifyAttr",
          "normalized": "String-\u003e(String-\u003eString)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "String-\u003e(String-\u003eString)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:modifyAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eedit filter for changing the name of a tag node.\n result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "modifyQName",
          "package": "hxt-filter",
          "signature": "(TagName -\u003e TagName) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#modifyQName",
          "type": "function"
        },
        "index": {
          "description": "edit filter for changing the name of tag node result of the filter is single element list with text node or the empty list",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "modifyQName",
          "normalized": "(TagName-\u003eTagName)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "QName",
          "signature": "(TagName-\u003eTagName)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:modifyQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eedit filter for changing the text of a text node.\n result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e\u003cp\u003eexample for editing all text nodes of a tree with an edit function \u003ccode\u003ef\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003eprocessBottomUp (modifyText f `when` isXText)\u003c/pre\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "modifyText",
          "package": "hxt-filter",
          "signature": "(String -\u003e String) -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#modifyText",
          "type": "function"
        },
        "index": {
          "description": "edit filter for changing the text of text node result of the filter is single element list with text node or the empty list example for editing all text nodes of tree with an edit function processBottomUp modifyText when isXText",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "modifyText",
          "normalized": "(String-\u003eString)-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Text",
          "signature": "(String-\u003eString)-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:modifyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelementwise processing of the attributes of a tag.\n for other trees this filter acts like \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessAttrl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "processAttr",
          "package": "hxt-filter",
          "signature": "XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#processAttr",
          "type": "function"
        },
        "index": {
          "description": "elementwise processing of the attributes of tag for other trees this filter acts like none see also processAttrl",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "processAttr",
          "normalized": "XmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attr",
          "signature": "XmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:processAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess the attribute list of a tag node with a tree list filter.\n for other trees this filter acts like \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "processAttrl",
          "package": "hxt-filter",
          "signature": "XmlSFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#processAttrl",
          "type": "function"
        },
        "index": {
          "description": "process the attribute list of tag node with tree list filter for other trees this filter acts like none",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "processAttrl",
          "normalized": "XmlSFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attrl",
          "signature": "XmlSFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:processAttrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for mkQAttr\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "qattr",
          "package": "hxt-filter",
          "signature": "QName -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#qattr",
          "type": "function"
        },
        "index": {
          "description": "Alias for mkQAttr",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "qattr",
          "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "QName-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:qattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualified version of etag\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "qetag",
          "package": "hxt-filter",
          "signature": "QName -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#qetag",
          "type": "function"
        },
        "index": {
          "description": "Qualified version of etag",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "qetag",
          "normalized": "QName-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "QName-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:qetag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for mkQTag\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "qtag",
          "package": "hxt-filter",
          "signature": "QName -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#qtag",
          "type": "function"
        },
        "index": {
          "description": "Alias for mkQTag",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "qtag",
          "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:qtag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplace an attribute list\n to be renamed when replaceAttrl is eliminated\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "replaceAttrl",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#replaceAttrl",
          "type": "function"
        },
        "index": {
          "description": "replace an attribute list to be renamed when replaceAttrl is eliminated",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "replaceAttrl",
          "normalized": "XmlTrees-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attrl",
          "signature": "XmlTrees-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:replaceAttrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eedit filter for changing the name of a tag node, an attribute or a pi.\n result of the filter is a single element list with a tag node or the empty list\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "replaceQName",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#replaceQName",
          "type": "function"
        },
        "index": {
          "description": "edit filter for changing the name of tag node an attribute or pi result of the filter is single element list with tag node or the empty list",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "replaceQName",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "QName",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:replaceQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for creating a document root node with a list of filters for the attributes and a list of filters for the document.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "rootTag",
          "package": "hxt-filter",
          "signature": "[XmlFilter] -\u003e [XmlFilter] -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#rootTag",
          "type": "function"
        },
        "index": {
          "description": "filter for creating document root node with list of filters for the attributes and list of filters for the document see also tag",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "rootTag",
          "normalized": "[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Tag",
          "signature": "[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:rootTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for attribute construction with string constants\n\u003c/p\u003e\u003cp\u003eset also : \u003ccode\u003e\u003ca\u003eattr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkXAttr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emkXText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "sattr",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#sattr",
          "type": "function"
        },
        "index": {
          "description": "short cut for attribute construction with string constants set also attr mkXAttr and mkXText",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "sattr",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:sattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for generating simple processing instructions (spi)\n the input tree is ignored\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003espi \"xyz\" \"abc\"\u003c/code\u003e is equal to \u003ccode\u003emkXPi \"xyz\" (txt \"abc\")\u003c/code\u003e\n (the name pi is already used in prelude)\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "spi",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#spi",
          "type": "function"
        },
        "index": {
          "description": "short cut for generating simple processing instructions spi the input tree is ignored spi xyz abc is equal to mkXPi xyz txt abc the name pi is already used in prelude",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "spi",
          "normalized": "String-\u003eString-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eString-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:spi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariant of tag, useful for tags without attributes and with a list of filters for\n constructing the children\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "stag",
          "package": "hxt-filter",
          "signature": "String -\u003e [XmlFilter] -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#stag",
          "type": "function"
        },
        "index": {
          "description": "variant of tag useful for tags without attributes and with list of filters for constructing the children see also mkXTag tag etag cat",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "stag",
          "normalized": "String-\u003e[XmlFilter]-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003e[XmlFilter]-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:stag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariant of mkXTag with a list of filters for the attributes and a list of filters for the children.\n this variant leads to a more readable source for a complicated construction filter\n than the simple solution with a combination of \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "tag",
          "package": "hxt-filter",
          "signature": "String -\u003e [XmlFilter] -\u003e [XmlFilter] -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#tag",
          "type": "function"
        },
        "index": {
          "description": "variant of mkXTag with list of filters for the attributes and list of filters for the children this variant leads to more readable source for complicated construction filter than the simple solution with combination of mkXTag and cat see also mkXTag stag etag cat",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "tag",
          "normalized": "String-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for \u003ccode\u003e\u003ca\u003emkXText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "txt",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#txt",
          "type": "function"
        },
        "index": {
          "description": "short cut for mkXText",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "txt",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:txt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombination of \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e and conversion into a String\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "valueOf",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#valueOf",
          "type": "function"
        },
        "index": {
          "description": "combination of getValue and conversion into String",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "valueOf",
          "normalized": "String-\u003eXmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Of",
          "signature": "String-\u003eXmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:valueOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort cut for mkXError c_warn.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "warn",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#warn",
          "type": "function"
        },
        "index": {
          "description": "short cut for mkXError warn see also mkXError",
          "hierarchy": "Text XML HXT DOM XmlTreeFilter",
          "module": "Text.XML.HXT.DOM.XmlTreeFilter",
          "name": "warn",
          "normalized": "String-\u003eXmlFilter",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:warn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic XmlTree functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "XmlTreeFunctions",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html",
          "type": "module"
        },
        "index": {
          "description": "Basic XmlTree functions",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "XmlTreeFunctions",
          "package": "hxt-filter",
          "partial": "Xml Tree Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect the attributes of a dtd tree\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "attrlOfDTD",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e Attributes",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#attrlOfDTD",
          "type": "function"
        },
        "index": {
          "description": "select the attributes of dtd tree",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "attrlOfDTD",
          "normalized": "XmlTree-\u003eAttributes",
          "package": "hxt-filter",
          "partial": "Of DTD",
          "signature": "XmlTree-\u003eAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:attrlOfDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe empty document tree\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enewRoot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "emptyRoot",
          "package": "hxt-filter",
          "signature": "XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#emptyRoot",
          "type": "function"
        },
        "index": {
          "description": "the empty document tree see also newRoot",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "emptyRoot",
          "package": "hxt-filter",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:emptyRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "fromAttrl",
          "package": "hxt-filter",
          "signature": "Attributes -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#fromAttrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "fromAttrl",
          "normalized": "Attributes-\u003eXmlTrees",
          "package": "hxt-filter",
          "partial": "Attrl",
          "signature": "Attributes-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:fromAttrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "fromTreel",
          "package": "hxt-filter",
          "signature": "AssocList String XmlTrees -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#fromTreel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "fromTreel",
          "normalized": "AssocList String XmlTrees-\u003eXmlTrees",
          "package": "hxt-filter",
          "partial": "Treel",
          "signature": "AssocList String XmlTrees-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:fromTreel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isAttrNode",
          "package": "hxt-filter",
          "signature": "String -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isAttrNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isAttrNode",
          "normalized": "String-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Attr Node",
          "signature": "String-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isAttrNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isDTDElemNode",
          "package": "hxt-filter",
          "signature": "DTDElem -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isDTDElemNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isDTDElemNode",
          "normalized": "DTDElem-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "DTDElem Node",
          "signature": "DTDElem-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isDTDElemNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isErrorNode",
          "package": "hxt-filter",
          "signature": "Int -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isErrorNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isErrorNode",
          "normalized": "Int-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Error Node",
          "signature": "Int-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isErrorNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfAttrNode",
          "package": "hxt-filter",
          "signature": "(AttrName -\u003e Bool) -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfAttrNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfAttrNode",
          "normalized": "(AttrName-\u003eBool)-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Of Attr Node",
          "signature": "(AttrName-\u003eBool)-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfAttrNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfPiNode",
          "package": "hxt-filter",
          "signature": "(TagName -\u003e Bool) -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfPiNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfPiNode",
          "normalized": "(TagName-\u003eBool)-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Of Pi Node",
          "signature": "(TagName-\u003eBool)-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfPiNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfTagNode",
          "package": "hxt-filter",
          "signature": "(TagName -\u003e Bool) -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfTagNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfTagNode",
          "normalized": "(TagName-\u003eBool)-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Of Tag Node",
          "signature": "(TagName-\u003eBool)-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfTagNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfTextNode",
          "package": "hxt-filter",
          "signature": "(String -\u003e Bool) -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfTextNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isOfTextNode",
          "normalized": "(String-\u003eBool)-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Of Text Node",
          "signature": "(String-\u003eBool)-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfTextNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isPiNode",
          "package": "hxt-filter",
          "signature": "String -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isPiNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isPiNode",
          "normalized": "String-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Pi Node",
          "signature": "String-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isPiNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isRootNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isRootNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isRootNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Root Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isRootNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isTagNode",
          "package": "hxt-filter",
          "signature": "String -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isTagNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isTagNode",
          "normalized": "String-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Tag Node",
          "signature": "String-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isTagNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isTextNode",
          "package": "hxt-filter",
          "signature": "String -\u003e XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isTextNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isTextNode",
          "normalized": "String-\u003eXNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "Text Node",
          "signature": "String-\u003eXNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isTextNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXAttrNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXAttrNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXAttrNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XAttr Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXAttrNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXCdataNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXCdataNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXCdataNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XCdata Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXCdataNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXCharRefNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXCharRefNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXCharRefNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XChar Ref Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXCharRefNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXCmtNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXCmtNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXCmtNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XCmt Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXCmtNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXDTDNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXDTDNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXDTDNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XDTDNode",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXDTDNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXEntityRefNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXEntityRefNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXEntityRefNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XEntity Ref Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXEntityRefNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXErrorNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXErrorNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXErrorNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XError Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXErrorNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXPiNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXPiNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXPiNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XPi Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXPiNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXTagNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXTagNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXTagNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XTag Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXTagNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXTextNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXTextNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "isXTextNode",
          "normalized": "XNode-\u003eBool",
          "package": "hxt-filter",
          "partial": "XText Node",
          "signature": "XNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXTextNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect the local part of a name of a node. For tags, attributes the name string\n is returned, for pi's the whole name, else the empty string.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "localPartOf",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#localPartOf",
          "type": "function"
        },
        "index": {
          "description": "select the local part of name of node For tags attributes the name string is returned for pi the whole name else the empty string",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "localPartOf",
          "normalized": "XmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Part Of",
          "signature": "XmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:localPartOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "maybeString2XText",
          "package": "hxt-filter",
          "signature": "Maybe String -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#maybeString2XText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "maybeString2XText",
          "normalized": "Maybe String-\u003eXmlTrees",
          "package": "hxt-filter",
          "partial": "String XText",
          "signature": "Maybe String-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:maybeString2XText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualified version of \u003ccode\u003e\u003ca\u003emkXAttrTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkQAttrTree",
          "package": "hxt-filter",
          "signature": "QName -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkQAttrTree",
          "type": "function"
        },
        "index": {
          "description": "Qualified version of mkXAttrTree",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkQAttrTree",
          "normalized": "QName-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "QAttr Tree",
          "signature": "QName-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkQAttrTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion with qualified name of \u003ccode\u003e\u003ca\u003emkXTagTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkQTagTree",
          "package": "hxt-filter",
          "signature": "QName -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkQTagTree",
          "type": "function"
        },
        "index": {
          "description": "Version with qualified name of mkXTagTree",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkQTagTree",
          "normalized": "QName-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "QTag Tree",
          "signature": "QName-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkQTagTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a document root tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al :  the attribute list for the root. This list must contain at\n\t\t  least an attribute \"source\" that contains the URI of the document to be processed\n\u003c/li\u003e\u003cli\u003e 2.parameter cs :  the list for the document content\n\u003c/li\u003e\u003cli\u003e returns : the document root\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkRootTree",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkRootTree",
          "type": "function"
        },
        "index": {
          "description": "create document root tree parameter al the attribute list for the root This list must contain at least an attribute source that contains the URI of the document to be processed parameter cs the list for the document content returns the document root",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkRootTree",
          "normalized": "XmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "Root Tree",
          "signature": "XmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkRootTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate an attribute tree as part of a tag attribute list of tag nodes\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al : the attribute name\n\u003c/li\u003e\u003cli\u003e 2.parameter av : the attribute value as tree list, usually containing a single text node\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXAttrTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXAttrTree",
          "type": "function"
        },
        "index": {
          "description": "create an attribute tree as part of tag attribute list of tag nodes parameter al the attribute name parameter av the attribute value as tree list usually containing single text node",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXAttrTree",
          "normalized": "String-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XAttr Tree",
          "signature": "String-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXAttrTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a CDATA section tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter s :  the content of the CDATA section\n\u003c/li\u003e\u003cli\u003e returns : the tree for the CDATA section\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXCdataTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXCdataTree",
          "type": "function"
        },
        "index": {
          "description": "create CDATA section tree parameter the content of the CDATA section returns the tree for the CDATA section",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXCdataTree",
          "normalized": "String-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XCdata Tree",
          "signature": "String-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXCdataTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a leaf for a char reference.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter i :  the integer representing the Unicode char\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the char reference\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXCharRefTree",
          "package": "hxt-filter",
          "signature": "Int -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXCharRefTree",
          "type": "function"
        },
        "index": {
          "description": "create leaf for char reference parameter the integer representing the Unicode char returns the tree with the single node containing the char reference",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXCharRefTree",
          "normalized": "Int-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XChar Ref Tree",
          "signature": "Int-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXCharRefTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a leaf for a comment,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter c :  the comment text\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the comment\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXCmtTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXCmtTree",
          "type": "function"
        },
        "index": {
          "description": "create leaf for comment parameter the comment text returns the tree with the single node containing the comment",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXCmtTree",
          "normalized": "String-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XCmt Tree",
          "signature": "String-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXCmtTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a tree for a part of a DTD\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter d :  the type of the DTD part\n\u003c/li\u003e\u003cli\u003e 2.parameter al :  the attribute list for the DTD part\n\u003c/li\u003e\u003cli\u003e 3.parameter ds :  the possibly empty list of components for the DTD part\n\u003c/li\u003e\u003cli\u003e returns : the tree with the composed DTD part\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXDTDTree",
          "package": "hxt-filter",
          "signature": "DTDElem -\u003e Attributes -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXDTDTree",
          "type": "function"
        },
        "index": {
          "description": "create tree for part of DTD parameter the type of the DTD part parameter al the attribute list for the DTD part parameter ds the possibly empty list of components for the DTD part returns the tree with the composed DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXDTDTree",
          "normalized": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XDTDTree",
          "signature": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXDTDTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a leaf for an entity reference.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the entity reference\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the entity reference\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXEntityRefTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXEntityRefTree",
          "type": "function"
        },
        "index": {
          "description": "create leaf for an entity reference parameter the name of the entity reference returns the tree with the single node containing the entity reference",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXEntityRefTree",
          "normalized": "String-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XEntity Ref Tree",
          "signature": "String-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXEntityRefTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate an error tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter l :  the level of the error (warning, error fatal)\n\u003c/li\u003e\u003cli\u003e 2.parameter msg :  the error message\n\u003c/li\u003e\u003cli\u003e 3.parameter cs :  the context, where the error was detected\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXErrorTree",
          "package": "hxt-filter",
          "signature": "Int -\u003e String -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXErrorTree",
          "type": "function"
        },
        "index": {
          "description": "create an error tree parameter the level of the error warning error fatal parameter msg the error message parameter cs the context where the error was detected",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXErrorTree",
          "normalized": "Int-\u003eString-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XError Tree",
          "signature": "Int-\u003eString-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXErrorTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate an attribute tree with a namespace\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al : the attribute name\n\u003c/li\u003e\u003cli\u003e 2.parameter ns : namespace uri\n\u003c/li\u003e\u003cli\u003e 3.parameter av : the attribute value as tree list, usually containing a single text node\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003emkXAttrTree\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkXNsTagTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXNsAttrTree",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXNsAttrTree",
          "type": "function"
        },
        "index": {
          "description": "create an attribute tree with namespace parameter al the attribute name parameter ns namespace uri parameter av the attribute value as tree list usually containing single text node see also mkXAttrTree mkXNsTagTree",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXNsAttrTree",
          "normalized": "String-\u003eString-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XNs Attr Tree",
          "signature": "String-\u003eString-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXNsAttrTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a tree with a namespace aware tag node.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the prefix:localpart of the tag\n\u003c/li\u003e\u003cli\u003e 2.parameter ns:  the namespace uri\n\u003c/li\u003e\u003cli\u003e 3.parameter al :  the tag attribte list\n\u003c/li\u003e\u003cli\u003e 4.parameter cs :  the list of children\n\u003c/li\u003e\u003cli\u003e returns : the new tree\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003emkXTagTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXNsTagTree",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXNsTagTree",
          "type": "function"
        },
        "index": {
          "description": "create tree with namespace aware tag node parameter the prefix localpart of the tag parameter ns the namespace uri parameter al the tag attribte list parameter cs the list of children returns the new tree see also mkXTagTree",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXNsTagTree",
          "normalized": "String-\u003eString-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XNs Tag Tree",
          "signature": "String-\u003eString-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXNsTagTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a parameter entity reference DTD part.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter ref :  the name of the reference\n\u003c/li\u003e\u003cli\u003e returns : the DTD part for a PERef\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXPERefTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXPERefTree",
          "type": "function"
        },
        "index": {
          "description": "create parameter entity reference DTD part parameter ref the name of the reference returns the DTD part for PERef",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXPERefTree",
          "normalized": "String-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XPERef Tree",
          "signature": "String-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXPERefTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a processing instruction tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the PI\n\u003c/li\u003e\u003cli\u003e 2.parameter str :  the content of a PI\n\u003c/li\u003e\u003cli\u003e returns : the processing instruction tree with a single attribute \"value\"\n      with the str parameter as attribute value, with \u003ccode\u003evalueOf a_value\u003c/code\u003e applied to the result tree\n      the content of the PI can be selected\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXPiTree",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXPiTree",
          "type": "function"
        },
        "index": {
          "description": "create processing instruction tree parameter the name of the PI parameter str the content of PI returns the processing instruction tree with single attribute value with the str parameter as attribute value with valueOf value applied to the result tree the content of the PI can be selected",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXPiTree",
          "normalized": "String-\u003eString-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XPi Tree",
          "signature": "String-\u003eString-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXPiTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a tree with a tag node.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the tag\n\u003c/li\u003e\u003cli\u003e 2.parameter al :  the tag attribte list\n\u003c/li\u003e\u003cli\u003e 3.parameter cs :  the list of children\n\u003c/li\u003e\u003cli\u003e returns : the new tree\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXTagTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXTagTree",
          "type": "function"
        },
        "index": {
          "description": "Create tree with tag node parameter the name of the tag parameter al the tag attribte list parameter cs the list of children returns the new tree",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXTagTree",
          "normalized": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XTag Tree",
          "signature": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXTagTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a leaf for a text element.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter txt :  the text\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the text\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXTextTree",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXTextTree",
          "type": "function"
        },
        "index": {
          "description": "create leaf for text element parameter txt the text returns the tree with the single node containing the text",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXTextTree",
          "normalized": "String-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "XText Tree",
          "signature": "String-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXTextTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate xml declaration\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXmlDeclTree",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXmlDeclTree",
          "type": "function"
        },
        "index": {
          "description": "create xml declaration",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "mkXmlDeclTree",
          "normalized": "XmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "Xml Decl Tree",
          "signature": "XmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXmlDeclTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect the name of a node. For tags, attributes and pi's the name string\n is returned, else the empty string.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "nameOf",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#nameOf",
          "type": "function"
        },
        "index": {
          "description": "select the name of node For tags attributes and pi the name string is returned else the empty string",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "nameOf",
          "normalized": "XmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Of",
          "signature": "XmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:nameOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect the namespace URI of a tag or an attribute tree, else the empty string is returned\n see also : \u003ccode\u003e\u003ca\u003enameOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "namespaceOf",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#namespaceOf",
          "type": "function"
        },
        "index": {
          "description": "select the namespace URI of tag or an attribute tree else the empty string is returned see also nameOf",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "namespaceOf",
          "normalized": "XmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Of",
          "signature": "XmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:namespaceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new empty document with source name as parameter\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "newDocument",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#newDocument",
          "type": "function"
        },
        "index": {
          "description": "create new empty document with source name as parameter",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "newDocument",
          "normalized": "String-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "Document",
          "signature": "String-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:newDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new empty document with a list of attributes for source location and options\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enewDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "newDocument'",
          "package": "hxt-filter",
          "signature": "Attributes -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#newDocument%27",
          "type": "function"
        },
        "index": {
          "description": "create new empty document with list of attributes for source location and options see also newDocument",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "newDocument'",
          "normalized": "Attributes-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "Document'",
          "signature": "Attributes-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:newDocument-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new document tree with empty contents.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al : the attribute list for the root node\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ereturns a single node tree with tag name \"/\" indicating a root and\n with empty list of children\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eemptyRoot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "newRoot",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e XmlTree",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#newRoot",
          "type": "function"
        },
        "index": {
          "description": "creates new document tree with empty contents parameter al the attribute list for the root node returns single node tree with tag name indicating root and with empty list of children see also emptyRoot",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "newRoot",
          "normalized": "XmlTrees-\u003eXmlTree",
          "package": "hxt-filter",
          "partial": "Root",
          "signature": "XmlTrees-\u003eXmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:newRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest an attribute of a DTD part\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "ofDTDequals",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlTree -\u003e Bool",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#ofDTDequals",
          "type": "function"
        },
        "index": {
          "description": "test an attribute of DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "ofDTDequals",
          "normalized": "String-\u003eString-\u003eXmlTree-\u003eBool",
          "package": "hxt-filter",
          "partial": "DTDequals",
          "signature": "String-\u003eString-\u003eXmlTree-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:ofDTDequals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect the namespace prefix of a tag or an attribute tree, else the empty string is returned\n see also : \u003ccode\u003e\u003ca\u003enameOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elocalPartOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "prefixOf",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#prefixOf",
          "type": "function"
        },
        "index": {
          "description": "select the namespace prefix of tag or an attribute tree else the empty string is returned see also nameOf localPartOf",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "prefixOf",
          "normalized": "XmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Of",
          "signature": "XmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:prefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXCharRef",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXCharRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXCharRef",
          "normalized": "XmlTrees-\u003eString",
          "package": "hxt-filter",
          "partial": "XChar Ref",
          "signature": "XmlTrees-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXEntityRef",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXEntityRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXEntityRef",
          "normalized": "XmlTrees-\u003eString",
          "package": "hxt-filter",
          "partial": "XEntity Ref",
          "signature": "XmlTrees-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXEntityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXErrors",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXErrors",
          "normalized": "XmlTrees-\u003eString",
          "package": "hxt-filter",
          "partial": "XErrors",
          "signature": "XmlTrees-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXText",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "showXText",
          "normalized": "XmlTrees-\u003eString",
          "package": "hxt-filter",
          "partial": "XText",
          "signature": "XmlTrees-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "textOfXNode",
          "package": "hxt-filter",
          "signature": "XNode -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#textOfXNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "textOfXNode",
          "normalized": "XNode-\u003eString",
          "package": "hxt-filter",
          "partial": "Of XNode",
          "signature": "XNode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:textOfXNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "toAttrl",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e Attributes",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#toAttrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "toAttrl",
          "normalized": "XmlTrees-\u003eAttributes",
          "package": "hxt-filter",
          "partial": "Attrl",
          "signature": "XmlTrees-\u003eAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:toAttrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "toTreel",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e AssocList String XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#toTreel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "toTreel",
          "normalized": "XmlTrees-\u003eAssocList String XmlTrees",
          "package": "hxt-filter",
          "partial": "Treel",
          "signature": "XmlTrees-\u003eAssocList String XmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:toTreel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect the universal name (namespace uri ++ localPart) of a tag or an attribute tree, else the empty string is returned\n see also : \u003ccode\u003e\u003ca\u003enameOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enamespaceOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "universalNameOf",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#universalNameOf",
          "type": "function"
        },
        "index": {
          "description": "select the universal name namespace uri localPart of tag or an attribute tree else the empty string is returned see also nameOf namespaceOf",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "universalNameOf",
          "normalized": "XmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Name Of",
          "signature": "XmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:universalNameOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect a special attribute of a DTD part\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "valueOfDTD",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#valueOfDTD",
          "type": "function"
        },
        "index": {
          "description": "select special attribute of DTD part",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "valueOfDTD",
          "normalized": "String-\u003eXmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Of DTD",
          "signature": "String-\u003eXmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:valueOfDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xattr",
          "package": "hxt-filter",
          "signature": "String -\u003e String -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xattr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xattr",
          "normalized": "String-\u003eString-\u003eXmlTrees",
          "package": "hxt-filter",
          "signature": "String-\u003eString-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xcmt",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xcmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xcmt",
          "normalized": "String-\u003eXmlTrees",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xcmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xerr",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xerr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xerr",
          "normalized": "String-\u003eXmlTrees",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xerr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xmlContentModelToString",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xmlContentModelToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xmlContentModelToString",
          "normalized": "XmlTree-\u003eString",
          "package": "hxt-filter",
          "partial": "Content Model To String",
          "signature": "XmlTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xmlContentModelToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eold name for \u003ccode\u003e\u003ca\u003exshow\u003c/a\u003e\u003c/code\u003e (deprecated)\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xmlTreesToString",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xmlTreesToString",
          "type": "function"
        },
        "index": {
          "description": "old name for xshow deprecated",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xmlTreesToString",
          "normalized": "XmlTrees-\u003eString",
          "package": "hxt-filter",
          "partial": "Trees To String",
          "signature": "XmlTrees-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xmlTreesToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion of a filter result into a text node\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003exshow\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xmlTreesToText",
          "package": "hxt-filter",
          "signature": "XmlSFilter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xmlTreesToText",
          "type": "function"
        },
        "index": {
          "description": "conversion of filter result into text node see also xshow",
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xmlTreesToText",
          "package": "hxt-filter",
          "partial": "Trees To Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xmlTreesToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xtag",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xtag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xtag",
          "normalized": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTrees",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xtag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xtext",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xtext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xtext",
          "normalized": "String-\u003eXmlTrees",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xwarn",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xwarn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
          "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
          "name": "xwarn",
          "normalized": "String-\u003eXmlTrees",
          "package": "hxt-filter",
          "signature": "String-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xwarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eexports the core data types\n and some additional types and functions\n for compatibility with none arrow modules\n\u003c/p\u003e\u003cp\u003eVersion : $Id: XmlTreeTypes.hs,v 1.6 2006\u003cem\u003e05\u003c/em\u003e09 15:30:43 hxml Exp $\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "XmlTreeTypes",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html",
          "type": "module"
        },
        "index": {
          "description": "exports the core data types and some additional types and functions for compatibility with none arrow modules Version Id XmlTreeTypes.hs hxml Exp",
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "XmlTreeTypes",
          "package": "hxt-filter",
          "partial": "Xml Tree Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute name\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "AttrName",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#AttrName",
          "type": "type"
        },
        "index": {
          "description": "Attribute name",
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "AttrName",
          "package": "hxt-filter",
          "partial": "Attr Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:AttrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag name\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "TagName",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#TagName",
          "type": "type"
        },
        "index": {
          "description": "Tag name",
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "TagName",
          "package": "hxt-filter",
          "partial": "Tag Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:TagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functions that takes a node and returns a list of nodes\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "XmlFilter",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#XmlFilter",
          "type": "type"
        },
        "index": {
          "description": "functions that takes node and returns list of nodes",
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "XmlFilter",
          "package": "hxt-filter",
          "partial": "Xml Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:XmlFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that takes a list of nodes and returns a list of nodes\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "XmlSFilter",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#XmlSFilter",
          "type": "type"
        },
        "index": {
          "description": "function that takes list of nodes and returns list of nodes",
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "XmlSFilter",
          "package": "hxt-filter",
          "partial": "Xml SFilter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:XmlSFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshortcut for \u003ccode\u003e\u003ca\u003equalifiedName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "aName",
          "package": "hxt-filter",
          "signature": "QName -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#aName",
          "type": "function"
        },
        "index": {
          "description": "shortcut for qualifiedName",
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "aName",
          "normalized": "QName-\u003eString",
          "package": "hxt-filter",
          "partial": "Name",
          "signature": "QName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:aName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "cardNTree",
          "package": "hxt-filter",
          "signature": "NTree a -\u003e Int",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#cardNTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "cardNTree",
          "normalized": "NTree a-\u003eInt",
          "package": "hxt-filter",
          "partial": "NTree",
          "signature": "NTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:cardNTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "depthNTree",
          "package": "hxt-filter",
          "signature": "NTree a -\u003e Int",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#depthNTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "depthNTree",
          "normalized": "NTree a-\u003eInt",
          "package": "hxt-filter",
          "partial": "NTree",
          "signature": "NTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:depthNTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "foldNTree",
          "package": "hxt-filter",
          "signature": "(a -\u003e [b] -\u003e b) -\u003e NTree a -\u003e b",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#foldNTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "foldNTree",
          "normalized": "(a-\u003e[b]-\u003eb)-\u003eNTree a-\u003eb",
          "package": "hxt-filter",
          "partial": "NTree",
          "signature": "(a-\u003e[b]-\u003eb)-\u003eNTree a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:foldNTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "formatNTree",
          "package": "hxt-filter",
          "signature": "(node -\u003e String) -\u003e NTree node -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#formatNTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "formatNTree",
          "normalized": "(a-\u003eString)-\u003eNTree a-\u003eString",
          "package": "hxt-filter",
          "partial": "NTree",
          "signature": "(node-\u003eString)-\u003eNTree node-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:formatNTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "mapNTree",
          "package": "hxt-filter",
          "signature": "(a -\u003e b) -\u003e NTree a -\u003e NTree b",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#mapNTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "mapNTree",
          "normalized": "(a-\u003eb)-\u003eNTree a-\u003eNTree b",
          "package": "hxt-filter",
          "partial": "NTree",
          "signature": "(a-\u003eb)-\u003eNTree a-\u003eNTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:mapNTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "mkNode",
          "package": "hxt-filter",
          "signature": "node -\u003e NTrees node -\u003e NTree node",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#mkNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "mkNode",
          "normalized": "a-\u003eNTrees a-\u003eNTree a",
          "package": "hxt-filter",
          "partial": "Node",
          "signature": "node-\u003eNTrees node-\u003eNTree node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:mkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "nTreeToList",
          "package": "hxt-filter",
          "signature": "NTree a -\u003e [a]",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#nTreeToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "nTreeToList",
          "normalized": "NTree a-\u003e[a]",
          "package": "hxt-filter",
          "partial": "Tree To List",
          "signature": "NTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:nTreeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshortcut for \u003ccode\u003e\u003ca\u003equalifiedName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "tName",
          "package": "hxt-filter",
          "signature": "QName -\u003e String",
          "source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#tName",
          "type": "function"
        },
        "index": {
          "description": "shortcut for qualifiedName",
          "hierarchy": "Text XML HXT DOM XmlTreeTypes",
          "module": "Text.XML.HXT.DOM.XmlTreeTypes",
          "name": "tName",
          "normalized": "QName-\u003eString",
          "package": "hxt-filter",
          "partial": "Name",
          "signature": "QName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:tName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDOM data types and functions\n\u003c/p\u003e\u003cp\u003eexport of all basic datatypes and functions of the toolbox DOM.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.DOM",
          "name": "DOM",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-DOM.html",
          "type": "module"
        },
        "index": {
          "description": "DOM data types and functions export of all basic datatypes and functions of the toolbox DOM",
          "hierarchy": "Text XML HXT DOM",
          "module": "Text.XML.HXT.DOM",
          "name": "DOM",
          "package": "hxt-filter",
          "partial": "DOM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDTD processing function for\n   including external parts of a DTD\n   parameter entity substitution and general entity substitution\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "DTDProcessing",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-DTDProcessing.html",
          "type": "module"
        },
        "index": {
          "description": "DTD processing function for including external parts of DTD parameter entity substitution and general entity substitution",
          "hierarchy": "Text XML HXT Parser DTDProcessing",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "DTDProcessing",
          "package": "hxt-filter",
          "partial": "DTDProcessing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparses a text node with \u003ccode\u003e\u003ca\u003eparseXmlDoc\u003c/a\u003e\u003c/code\u003e, processes the DTD and general entities\n and transforms all char references into characters\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "checkWellformedDoc",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-Parser-DTDProcessing.html#checkWellformedDoc",
          "type": "function"
        },
        "index": {
          "description": "parses text node with parseXmlDoc processes the DTD and general entities and transforms all char references into characters",
          "hierarchy": "Text XML HXT Parser DTDProcessing",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "checkWellformedDoc",
          "package": "hxt-filter",
          "partial": "Wellformed Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:checkWellformedDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic filter for reading, parsing and checking a wellformed document.\n the input tree must consist of a root node with a source attribute\n in its attribute list.\n\u003c/p\u003e\u003cp\u003eAll attributes from the document root are copied into the system state,\n and may be queried by the monadic filters, e.g. trace options.\n\u003c/p\u003e\u003cp\u003eResult is the single element list containing the well-formed document tree\n or, in case of errors, the document root with an empty list as children\n and attributes \u003ccode\u003e\u003ca\u003ea_status\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ea_module\u003c/a\u003e\u003c/code\u003e for error level and the module,\n where the error occured.\n\u003c/p\u003e\u003cp\u003ethis is a shortcut for \u003ccode\u003e\u003ca\u003egetXmlContents\u003c/a\u003e\u003c/code\u003e .\u003e\u003e \u003ccode\u003e\u003ca\u003echeckWellformedDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eexample for a main program:\n\u003c/p\u003e\u003cpre\u003e\n main =\n   run' $\n   do\n   res  \u003c- getWellformedDoc $ newDocument \"myfile.xml\"\n   ...\n\u003c/pre\u003e",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "getWellformedDoc",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-Parser-DTDProcessing.html#getWellformedDoc",
          "type": "function"
        },
        "index": {
          "description": "monadic filter for reading parsing and checking wellformed document the input tree must consist of root node with source attribute in its attribute list All attributes from the document root are copied into the system state and may be queried by the monadic filters e.g trace options Result is the single element list containing the well-formed document tree or in case of errors the document root with an empty list as children and attributes status and module for error level and the module where the error occured this is shortcut for getXmlContents checkWellformedDoc example for main program main run do res getWellformedDoc newDocument myfile.xml",
          "hierarchy": "Text XML HXT Parser DTDProcessing",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "getWellformedDoc",
          "package": "hxt-filter",
          "partial": "Wellformed Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:getWellformedDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea filter for DTD processing\n\u003c/p\u003e\u003cp\u003einclusion of external parts of DTD,\n parameter entity substitution\n conditional section evaluation\n\u003c/p\u003e\u003cp\u003einput tree must represent a complete document including root node\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "processDTD",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-DTDProcessing.html#processDTD",
          "type": "function"
        },
        "index": {
          "description": "filter for DTD processing inclusion of external parts of DTD parameter entity substitution conditional section evaluation input tree must represent complete document including root node",
          "hierarchy": "Text XML HXT Parser DTDProcessing",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "processDTD",
          "package": "hxt-filter",
          "partial": "DTD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:processDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubstitution of general entities\n\u003c/p\u003e\u003cp\u003einput: a complete document tree including root node\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "processGeneralEntities",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-DTDProcessing.html#processGeneralEntities",
          "type": "function"
        },
        "index": {
          "description": "substitution of general entities input complete document tree including root node",
          "hierarchy": "Text XML HXT Parser DTDProcessing",
          "module": "Text.XML.HXT.Parser.DTDProcessing",
          "name": "processGeneralEntities",
          "package": "hxt-filter",
          "partial": "General Entities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:processGeneralEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.DefaultURI",
          "name": "DefaultURI",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-DefaultURI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser DefaultURI",
          "module": "Text.XML.HXT.Parser.DefaultURI",
          "name": "DefaultURI",
          "package": "hxt-filter",
          "partial": "Default URI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DefaultURI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.DefaultURI",
          "name": "setDefaultURI",
          "package": "hxt-filter",
          "signature": "XState state ()",
          "source": "src/Text-XML-HXT-Parser-DefaultURI.html#setDefaultURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser DefaultURI",
          "module": "Text.XML.HXT.Parser.DefaultURI",
          "name": "setDefaultURI",
          "normalized": "XState a()",
          "package": "hxt-filter",
          "partial": "Default URI",
          "signature": "XState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DefaultURI.html#v:setDefaultURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis parser tries to interprete everything as HTML\n   no errors are emitted during parsing. If something looks\n   weired, warning messages are inserted in the document tree.\n\u003c/p\u003e\u003cp\u003eModule contains state filter for easy parsing and error handling\n   real work is done in \u003ccode\u003eText.XML.HXT.Parser.HtmlParsec\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "HtmlParser",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-HtmlParser.html",
          "type": "module"
        },
        "index": {
          "description": "This parser tries to interprete everything as HTML no errors are emitted during parsing If something looks weired warning messages are inserted in the document tree Module contains state filter for easy parsing and error handling real work is done in Text.XML.HXT.Parser.HtmlParsec",
          "hierarchy": "Text XML HXT Parser HtmlParser",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "HtmlParser",
          "package": "hxt-filter",
          "partial": "Html Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a document and parse it with \u003ccode\u003e\u003ca\u003eparseHtmlDoc\u003c/a\u003e\u003c/code\u003e. The main entry point of this module\n\u003c/p\u003e\u003cp\u003eThe input tree must be a root tree like in '\tText.XML.HXT.Parser.MainFunctions.getXmlDoc'. The content is read with \u003ccode\u003e\u003ca\u003egetXmlContents\u003c/a\u003e\u003c/code\u003e,\n is parsed with \u003ccode\u003e\u003ca\u003eparseHtmlDoc\u003c/a\u003e\u003c/code\u003e and canonicalized (char refs are substituted in content and attributes,\n but comment is preserved)\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003eText.XML.HXT.Parser.DTDProcessing.getWellformedDoc\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "getHtmlDoc",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-Parser-HtmlParser.html#getHtmlDoc",
          "type": "function"
        },
        "index": {
          "description": "read document and parse it with parseHtmlDoc The main entry point of this module The input tree must be root tree like in Text.XML.HXT.Parser.MainFunctions.getXmlDoc The content is read with getXmlContents is parsed with parseHtmlDoc and canonicalized char refs are substituted in content and attributes but comment is preserved see also Text.XML.HXT.Parser.DTDProcessing.getWellformedDoc",
          "hierarchy": "Text XML HXT Parser HtmlParser",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "getHtmlDoc",
          "package": "hxt-filter",
          "partial": "Html Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:getHtmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTML parsing filter\n\u003c/p\u003e\u003cp\u003eThe input is parsed with \u003ccode\u003e\u003ca\u003erunHtmlParser\u003c/a\u003e\u003c/code\u003e, everything is interpreted as HTML,\n if errors ocuur, the parser will try to do some meaningfull action and continues\n parsing. Afterwards the entitiy references for defined for XHTML are resovled,\n any unresolved reference is transformed into plain text.\n\u003c/p\u003e\u003cp\u003eError messages\n during parsing and entity resolving are added as warning nodes into the resulting tree.\n\u003c/p\u003e\u003cp\u003eThe warnings are issued, if the 1. parameter noWarnings is set to True,\n afterwards all are removed from the resulting tree.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "parseHtmlDoc",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-HtmlParser.html#parseHtmlDoc",
          "type": "function"
        },
        "index": {
          "description": "The HTML parsing filter The input is parsed with runHtmlParser everything is interpreted as HTML if errors ocuur the parser will try to do some meaningfull action and continues parsing Afterwards the entitiy references for defined for XHTML are resovled any unresolved reference is transformed into plain text Error messages during parsing and entity resolving are added as warning nodes into the resulting tree The warnings are issued if the parameter noWarnings is set to True afterwards all are removed from the resulting tree",
          "hierarchy": "Text XML HXT Parser HtmlParser",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "parseHtmlDoc",
          "package": "hxt-filter",
          "partial": "Html Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:parseHtmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure HTML parser, usually called via \u003ccode\u003e\u003ca\u003eparseHtmlDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "runHtmlParser",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-HtmlParser.html#runHtmlParser",
          "type": "function"
        },
        "index": {
          "description": "The pure HTML parser usually called via parseHtmlDoc",
          "hierarchy": "Text XML HXT Parser HtmlParser",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "runHtmlParser",
          "package": "hxt-filter",
          "partial": "Html Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:runHtmlParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "substHtmlEntities",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-Parser-HtmlParser.html#substHtmlEntities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser HtmlParser",
          "module": "Text.XML.HXT.Parser.HtmlParser",
          "name": "substHtmlEntities",
          "normalized": "XmlTree-\u003eXmlTrees",
          "package": "hxt-filter",
          "partial": "Html Entities",
          "signature": "XmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:substHtmlEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple parse functions.\n\u003c/p\u003e\u003cp\u003ethe main building blocks for an application.\n this module exports complex filters and functions for\n common tasks for input and parsing, output and option handling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "MainFunctions",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-MainFunctions.html",
          "type": "module"
        },
        "index": {
          "description": "Simple parse functions the main building blocks for an application this module exports complex filters and functions for common tasks for input and parsing output and option handling",
          "hierarchy": "Text XML HXT Parser MainFunctions",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "MainFunctions",
          "package": "hxt-filter",
          "partial": "Main Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenient function for reading a XML document without\n dealing with state monads, error messages collection and other details\n\u003c/p\u003e\u003cp\u003egetXmlDocument calls \u003ccode\u003e\u003ca\u003eparseDocument\u003c/a\u003e\u003c/code\u003e with the list of parsing options\n and an url or filename as document source.\n\u003c/p\u003e\u003cp\u003eresult is a triple\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the resulting document tree with a root node containing all\n   meta info about the document (options, status info, http header, ...)\n\u003c/li\u003e\u003cli\u003e the list of errors and warnings\n\u003c/li\u003e\u003cli\u003e the error level: one of \u003ccode\u003e\u003ca\u003ec_ok\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ec_warn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ec_fatal\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eexample for input (see also example in \u003ccode\u003e\u003ca\u003eputXmlDocument\u003c/a\u003e\u003c/code\u003e and example in \u003ccode\u003e\u003ca\u003ewriteDocument\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main\n   = do\n     (res, errs, rc) \u003c- getXmlDocument [] \"test.xml\"\n     if rc \u003e= c_err\n       then issueErrors errs\n       else processTree res\n\n issueErrors :: XmlTrees -\u003e IO ()\n\n processTree :: XmlTree  -\u003e IO ()\n\u003c/pre\u003e\u003cp\u003efor options see \u003ccode\u003e\u003ca\u003eparseDocument\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ea_collect_errors\u003c/a\u003e\u003c/code\u003e is set implicitly\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "getXmlDocument",
          "package": "hxt-filter",
          "signature": "Attributes -\u003e String -\u003e IO (XmlTree, XmlTrees, Int)",
          "source": "src/Text-XML-HXT-Parser-MainFunctions.html#getXmlDocument",
          "type": "function"
        },
        "index": {
          "description": "convenient function for reading XML document without dealing with state monads error messages collection and other details getXmlDocument calls parseDocument with the list of parsing options and an url or filename as document source result is triple the resulting document tree with root node containing all meta info about the document options status info http header the list of errors and warnings the error level one of ok warn err fatal example for input see also example in putXmlDocument and example in writeDocument main IO main do res errs rc getXmlDocument test.xml if rc err then issueErrors errs else processTree res issueErrors XmlTrees IO processTree XmlTree IO for options see parseDocument collect errors is set implicitly",
          "hierarchy": "Text XML HXT Parser MainFunctions",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "getXmlDocument",
          "normalized": "Attributes-\u003eString-\u003eIO(XmlTree,XmlTrees,Int)",
          "package": "hxt-filter",
          "partial": "Xml Document",
          "signature": "Attributes-\u003eString-\u003eIO(XmlTree,XmlTrees,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:getXmlDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe main parsing filter\n\u003c/p\u003e\u003cp\u003ethis filter can be configured by an option list, a list of\n option name, option value pairs.\n the input tree must be a possibly empty document root tree.\n all the options are stored as attributes in this root node to control processing.\n\u003c/p\u003e\u003cp\u003eavailable options:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_parse_html\u003c/a\u003e\u003c/code\u003e: use HTML parser, else use XML parser (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_validate\u003c/a\u003e\u003c/code\u003e : validate document (default), else skip validation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_check_namespaces\u003c/a\u003e\u003c/code\u003e : check namespaces, else skip namespace processing (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_canonicalize\u003c/a\u003e\u003c/code\u003e : canonicalize document (default), else skip canonicalization\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_preserve_comment\u003c/a\u003e\u003c/code\u003e : preserve comments during canonicalization, else remove comments (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_remove_whitespace\u003c/a\u003e\u003c/code\u003e : remove all whitespace, used for document indentation, else skip this step (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_indent\u003c/a\u003e\u003c/code\u003e : indent document by inserting whitespace, else skip this step (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_issue_warnings\u003c/a\u003e\u003c/code\u003e : issue warnings, when parsing HTML (default), else ignore HTML parser warnings\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_issue_errors\u003c/a\u003e\u003c/code\u003e : issue all error messages on stderr (default), or ignore all error messages\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_collect_errors\u003c/a\u003e\u003c/code\u003e : all error messages are collected during processing and appended to the result document\n \t\t\t  for further processing within the calling modules\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_trace\u003c/a\u003e\u003c/code\u003e : trace level: values: 0 -4\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_proxy\u003c/a\u003e\u003c/code\u003e : proxy for http access, e.g. www-cache:3128\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_use_curl\u003c/a\u003e\u003c/code\u003e : for http access via external programm curl, default is native HTTP access\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_options_curl\u003c/a\u003e\u003c/code\u003e : more options for external program curl\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_source\u003c/a\u003e\u003c/code\u003e : the document source url\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_encoding\u003c/a\u003e\u003c/code\u003e : default document encoding (\u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisoLatin1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusAscii\u003c/a\u003e\u003c/code\u003e, ...)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eexamples:\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,   \"test.xml\")\n               , (a_validate, \"0\")\n               , (a_encoding, isoLatin1)\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003ereads document \"test.xml\" without validation and default encoding \u003ccode\u003e\u003ca\u003eisoLatin1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,         \"http://www.haskell.org/\")\n               , (a_parse_html,     \"1\")\n               , (a_proxy,          \"www-cache:3128\")\n               , (a_curl,           \"1\")\n               , (a_issue_warnings, \"0\")\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003ereads Haskell homepage with HTML parser ignoring any warnings and with http access via external program curl and proxy \"www-cache\" at port 3128\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,            \"http://www.w3c.org/\")\n               , (a_parse_html,        \"0\")                       -- default\n               , (a_validate,          \"1\")                       -- default\n               , (a_check_namespace,   \"1\")\n               , (a_remove_whitespace, \"1\")\n               , (a_trace,             \"2\")\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003eread w3c home page, validate and chech namespaces, remove whitespace between tags, trace activities with level 2\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,   \"test.xml\")\n               , (a_validate,        \"1\")\n               , (a_check_namespace, \"1\")\n               , (a_collect_errors,  \"1\")\n               , (a_issue_errors,    \"0\")\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003ereads file \"test.xml\", validates it, checks namespaces, does not issue any erros\n but collects errors and appends the list of errors to the single element list for the document.\n this enables the calling application to define own error handlers.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "parseDocument",
          "package": "hxt-filter",
          "signature": "Attributes -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-Parser-MainFunctions.html#parseDocument",
          "type": "function"
        },
        "index": {
          "description": "the main parsing filter this filter can be configured by an option list list of option name option value pairs the input tree must be possibly empty document root tree all the options are stored as attributes in this root node to control processing available options parse html use HTML parser else use XML parser default validate validate document default else skip validation check namespaces check namespaces else skip namespace processing default canonicalize canonicalize document default else skip canonicalization preserve comment preserve comments during canonicalization else remove comments default remove whitespace remove all whitespace used for document indentation else skip this step default indent indent document by inserting whitespace else skip this step default issue warnings issue warnings when parsing HTML default else ignore HTML parser warnings issue errors issue all error messages on stderr default or ignore all error messages collect errors all error messages are collected during processing and appended to the result document for further processing within the calling modules trace trace level values proxy proxy for http access e.g www-cache use curl for http access via external programm curl default is native HTTP access options curl more options for external program curl source the document source url encoding default document encoding utf8 isoLatin1 usAscii examples parseDocument source test.xml validate encoding isoLatin1 emptyRoot reads document test.xml without validation and default encoding isoLatin1 parseDocument source http www.haskell.org parse html proxy www-cache curl issue warnings emptyRoot reads Haskell homepage with HTML parser ignoring any warnings and with http access via external program curl and proxy www-cache at port parseDocument source http www.w3c.org parse html default validate default check namespace remove whitespace trace emptyRoot read w3c home page validate and chech namespaces remove whitespace between tags trace activities with level parseDocument source test.xml validate check namespace collect errors issue errors emptyRoot reads file test.xml validates it checks namespaces does not issue any erros but collects errors and appends the list of errors to the single element list for the document this enables the calling application to define own error handlers",
          "hierarchy": "Text XML HXT Parser MainFunctions",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "parseDocument",
          "normalized": "Attributes-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Document",
          "signature": "Attributes-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:parseDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe inverse operation to \u003ccode\u003e\u003ca\u003egetXmlDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ewrites a complete document tree to a file, writing can be\n controlled by options, the real work is done with filter \u003ccode\u003e\u003ca\u003ewriteDocument\u003c/a\u003e\u003c/code\u003e.\n useful options are the options of \u003ccode\u003e\u003ca\u003ewriteDocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eresult is a pair: 1.part is a list of error messages, 2. part is the return code,\n the status info of the write filter\n\u003c/p\u003e\u003cp\u003ethis filter is useful, when processing XML in an arbitray context in the IO monad\n\u003c/p\u003e\u003cp\u003ean example main program for such an application is:\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main\n   = do\n     (input, readErrs, rc) \u003c- getXmlDocument [...] \"test.xml\"\n     if rc \u003e= c_err\n       then issueErrors readErrs\n       else processTree input\n\n processTree :: XmlTree -\u003e IO ()\n processTree t\n   = let res = computeNewTree input\n     in do\n        (writeErrs, rc2) \u003c- putXmlDocument [...] \"out.xml\" res\n        if rc2 \u003e= c_err\n          then issueErrors writeErrs\n          else return ()\n\n issueErrors :: XmlTrees -\u003e IO ()\n\n computeNewTree :: XmlTree -\u003e XmlTree\n\u003c/pre\u003e",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "putXmlDocument",
          "package": "hxt-filter",
          "signature": "Attributes -\u003e String -\u003e XmlTree -\u003e IO (XmlTrees, Int)",
          "source": "src/Text-XML-HXT-Parser-MainFunctions.html#putXmlDocument",
          "type": "function"
        },
        "index": {
          "description": "the inverse operation to getXmlDocument writes complete document tree to file writing can be controlled by options the real work is done with filter writeDocument useful options are the options of writeDocument result is pair part is list of error messages part is the return code the status info of the write filter this filter is useful when processing XML in an arbitray context in the IO monad an example main program for such an application is main IO main do input readErrs rc getXmlDocument test.xml if rc err then issueErrors readErrs else processTree input processTree XmlTree IO processTree let res computeNewTree input in do writeErrs rc2 putXmlDocument out.xml res if rc2 err then issueErrors writeErrs else return issueErrors XmlTrees IO computeNewTree XmlTree XmlTree",
          "hierarchy": "Text XML HXT Parser MainFunctions",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "putXmlDocument",
          "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eIO(XmlTrees,Int)",
          "package": "hxt-filter",
          "partial": "Xml Document",
          "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eIO(XmlTrees,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:putXmlDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe main filter for writing documents\n\u003c/p\u003e\u003cp\u003ethis filter can be configured by an option list like \u003ccode\u003e\u003ca\u003egetXmlDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eavailable options are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_indent\u003c/a\u003e\u003c/code\u003e : indent document for readability, (default: no indentation)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_remove_whitespace\u003c/a\u003e\u003c/code\u003e : remove all redundant whitespace for shorten text (default: no removal)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_output_file\u003c/a\u003e\u003c/code\u003e : destination file for document, default is \"-\" for stdout\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_output_encoding\u003c/a\u003e\u003c/code\u003e : encoding of document, default is \u003ccode\u003e\u003ca\u003ea_encoding\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_output_xml\u003c/a\u003e\u003c/code\u003e : (default) issue XML: quote special XML chars \u003e,\u003c,\",',&\n                    add XML processing instruction\n                    and encode document with respect to \u003ccode\u003e\u003ca\u003ea_output_encoding\u003c/a\u003e\u003c/code\u003e,\n                    if explizitly switched of, the plain text is issued, this is useful\n                    for non XML output, e.g. generated Haskell code, LaTex, Java, ...\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_show_tree\u003c/a\u003e\u003c/code\u003e : show tree representation of document (for debugging)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_show_haskell\u003c/a\u003e\u003c/code\u003e : show Haskell representaion of document (for debugging)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_issue_errors\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ea_collect_errors\u003c/a\u003e\u003c/code\u003e : see \u003ccode\u003e\u003ca\u003eparseDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ea typical main program running in the XmlState monad\n  has the following structure:\n\u003c/p\u003e\u003cpre\u003e\n main :: IO ()\n main\n     = do\n       argv \u003c- getArgs                                              -- get the commandline arguments\n       (inp, outp, options) \u003c- cmdlineOpts argv                     -- and evaluate them, return a key-value list\n                                                                    -- and input and output\n       res  \u003c- run' $ application inp outp options $ emptyRoot      -- run the application\n \n       exitWith (if null res\n                 then ExitFailure (-1)\n                 else exitSuccess\n                )\n\n application :: String -\u003e String -\u003e Attributes -\u003e XmlStateFilter ()\n application inp outp al\n   = parseDocument (al ++ [(a_source, inp)])                        -- set options and source\n     .\u003e\u003e                                                            -- and parse document\n     processDocument                                                -- the hard work\n     .\u003e\u003e\n     writeDocument [(a_output_file, outp)]                          -- issue results\n     .\u003e\u003e\n     checkStatus                                                    -- check errors\n\n\u003c/pre\u003e",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "writeDocument",
          "package": "hxt-filter",
          "signature": "Attributes -\u003e XmlStateFilter state",
          "source": "src/Text-XML-HXT-Parser-MainFunctions.html#writeDocument",
          "type": "function"
        },
        "index": {
          "description": "the main filter for writing documents this filter can be configured by an option list like getXmlDocument available options are indent indent document for readability default no indentation remove whitespace remove all redundant whitespace for shorten text default no removal output file destination file for document default is for stdout output encoding encoding of document default is encoding or utf8 output xml default issue XML quote special XML chars add XML processing instruction and encode document with respect to output encoding if explizitly switched of the plain text is issued this is useful for non XML output e.g generated Haskell code LaTex Java show tree show tree representation of document for debugging show haskell show Haskell representaion of document for debugging issue errors collect errors see parseDocument typical main program running in the XmlState monad has the following structure main IO main do argv getArgs get the commandline arguments inp outp options cmdlineOpts argv and evaluate them return key-value list and input and output res run application inp outp options emptyRoot run the application exitWith if null res then ExitFailure else exitSuccess application String String Attributes XmlStateFilter application inp outp al parseDocument al source inp set options and source and parse document processDocument the hard work writeDocument output file outp issue results checkStatus check errors",
          "hierarchy": "Text XML HXT Parser MainFunctions",
          "module": "Text.XML.HXT.Parser.MainFunctions",
          "name": "writeDocument",
          "normalized": "Attributes-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Document",
          "signature": "Attributes-\u003eXmlStateFilter state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:writeDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandler",
          "name": "ProtocolHandler",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandler",
          "module": "Text.XML.HXT.Parser.ProtocolHandler",
          "name": "ProtocolHandler",
          "package": "hxt-filter",
          "partial": "Protocol Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandler",
          "name": "getProtocolHandler",
          "package": "hxt-filter",
          "signature": "String -\u003e URI -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandler.html#getProtocolHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandler",
          "module": "Text.XML.HXT.Parser.ProtocolHandler",
          "name": "getProtocolHandler",
          "normalized": "String-\u003eURI-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Protocol Handler",
          "signature": "String-\u003eURI-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandler.html#v:getProtocolHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
          "name": "ProtocolHandlerFile",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerFile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerFile",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
          "name": "ProtocolHandlerFile",
          "package": "hxt-filter",
          "partial": "Protocol Handler File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
          "name": "getFileContents",
          "package": "hxt-filter",
          "signature": "URI -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerFile.html#getFileContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerFile",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
          "name": "getFileContents",
          "normalized": "URI-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "File Contents",
          "signature": "URI-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerFile.html#v:getFileContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
          "name": "ProtocolHandlerHttpCurl",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpCurl",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
          "name": "ProtocolHandlerHttpCurl",
          "package": "hxt-filter",
          "partial": "Protocol Handler Http Curl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
          "name": "getHttpContentsWithCurl",
          "package": "hxt-filter",
          "signature": "URI -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html#getHttpContentsWithCurl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpCurl",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
          "name": "getHttpContentsWithCurl",
          "normalized": "URI-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Http Contents With Curl",
          "signature": "URI-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html#v:getHttpContentsWithCurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
          "name": "ProtocolHandlerHttpNative",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNative",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
          "name": "ProtocolHandlerHttpNative",
          "package": "hxt-filter",
          "partial": "Protocol Handler Http Native",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
          "name": "getHttpContentsWithHttp",
          "package": "hxt-filter",
          "signature": "URI -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html#getHttpContentsWithHttp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNative",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
          "name": "getHttpContentsWithHttp",
          "normalized": "URI-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Http Contents With Http",
          "signature": "URI-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html#v:getHttpContentsWithHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
          "name": "ProtocolHandlerHttpNativeOrCurl",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNativeOrCurl",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
          "name": "ProtocolHandlerHttpNativeOrCurl",
          "package": "hxt-filter",
          "partial": "Protocol Handler Http Native Or Curl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
          "name": "getHttpContentsNativeOrWithCurl",
          "package": "hxt-filter",
          "signature": "URI -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html#getHttpContentsNativeOrWithCurl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNativeOrCurl",
          "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
          "name": "getHttpContentsNativeOrWithCurl",
          "normalized": "URI-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Http Contents Native Or With Curl",
          "signature": "URI-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html#v:getHttpContentsNativeOrWithCurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "XmlInput",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "XmlInput",
          "package": "hxt-filter",
          "partial": "Xml Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform an URI into an absolut URI using the current base URI\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter uri :  the URI as string\n\u003c/li\u003e\u003cli\u003e returns : the absolut URI as string or \"\" in case of an error\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getAbsolutURI",
          "package": "hxt-filter",
          "signature": "String -\u003e XState state String",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#getAbsolutURI",
          "type": "function"
        },
        "index": {
          "description": "transform an URI into an absolut URI using the current base URI parameter uri the URI as string returns the absolut URI as string or in case of an error",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getAbsolutURI",
          "normalized": "String-\u003eXState a String",
          "package": "hxt-filter",
          "partial": "Absolut URI",
          "signature": "String-\u003eXState state String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getAbsolutURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the current base URI\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetBaseURI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getBaseURI",
          "package": "hxt-filter",
          "signature": "XState state String",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#getBaseURI",
          "type": "function"
        },
        "index": {
          "description": "read the current base URI see also setBaseURI",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getBaseURI",
          "package": "hxt-filter",
          "partial": "Base URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getBaseURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute the length of the data for a document read previously\n by a call of 'getUrlContents. The result is stored as an attribute\n value in the document root node. the attribute name is \u003ccode\u003e\u003ca\u003ea_contentLength\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getContentLength",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#getContentLength",
          "type": "function"
        },
        "index": {
          "description": "compute the length of the data for document read previously by call of getUrlContents The result is stored as an attribute value in the document root node the attribute name is contentLength",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getContentLength",
          "package": "hxt-filter",
          "partial": "Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe hard io operations\n\u003c/p\u003e\u003cp\u003efor reading a file or accessing a document via http\n input must be a root node with a \u003ccode\u003esource\u003c/code\u003e attribute specifying the URI\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getUrlContents",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#getUrlContents",
          "type": "function"
        },
        "index": {
          "description": "the hard io operations for reading file or accessing document via http input must be root node with source attribute specifying the URI",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getUrlContents",
          "package": "hxt-filter",
          "partial": "Url Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getUrlContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for reading the content of a XML document\n\u003c/p\u003e\u003cp\u003einput is a root node with the source as an attibute\n the text is read, the encoding scheme is parsed and selected\n and the input is translated into the internal UTF-8 string representation\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getXmlContents",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#getXmlContents",
          "type": "function"
        },
        "index": {
          "description": "filter for reading the content of XML document input is root node with the source as an attibute the text is read the encoding scheme is parsed and selected and the input is translated into the internal UTF-8 string representation",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getXmlContents",
          "package": "hxt-filter",
          "partial": "Xml Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getXmlContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for reading the content of an external XML entity\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetXmlContents\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getXmlEntityContents",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#getXmlEntityContents",
          "type": "function"
        },
        "index": {
          "description": "filter for reading the content of an external XML entity see also getXmlContents",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "getXmlEntityContents",
          "package": "hxt-filter",
          "partial": "Xml Entity Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getXmlEntityContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eguessEncoding uses encoding attribute and content\n to determine the encoding scheme.\n\u003c/p\u003e\u003cp\u003eit's assumed that an encoding spec has been tried to parse before guessing the encoding.\n\u003c/p\u003e\u003cp\u003eUTF-8 is the default encoding\n\u003c/p\u003e\u003cp\u003eother supported encodings are ISO-8859-1 (also known as ISO-Latin-1),\n US-ASCII, UTF-16 or ISO-10646-UCS-2, UTF-16BE, UTF-16LE\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "guessDocEncoding",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#guessDocEncoding",
          "type": "function"
        },
        "index": {
          "description": "guessEncoding uses encoding attribute and content to determine the encoding scheme it assumed that an encoding spec has been tried to parse before guessing the encoding UTF-8 is the default encoding other supported encodings are ISO-8859-1 also known as ISO-Latin-1 US-ASCII UTF-16 or ISO-10646-UCS-2 UTF-16BE UTF-16LE",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "guessDocEncoding",
          "package": "hxt-filter",
          "partial": "Doc Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:guessDocEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epredicate for testing the standalone document attribute\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "isStandaloneDocument",
          "package": "hxt-filter",
          "signature": "XState state Bool",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#isStandaloneDocument",
          "type": "function"
        },
        "index": {
          "description": "predicate for testing the standalone document attribute",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "isStandaloneDocument",
          "package": "hxt-filter",
          "partial": "Standalone Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:isStandaloneDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter command for saving and restoring\n the base URI\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the filter that possible changes the base URI\n\u003c/li\u003e\u003cli\u003e returns : a filter with the same effect as f, that restores the base URI after application of f\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "runInLocalURIContext",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#runInLocalURIContext",
          "type": "function"
        },
        "index": {
          "description": "filter command for saving and restoring the base URI parameter the filter that possible changes the base URI returns filter with the same effect as that restores the base URI after application of",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "runInLocalURIContext",
          "normalized": "XmlStateFilter a-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "In Local URIContext",
          "signature": "XmlStateFilter a-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:runInLocalURIContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter command for running an action in a new URI context\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "runInNewURIContext",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlStateFilter a -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#runInNewURIContext",
          "type": "function"
        },
        "index": {
          "description": "filter command for running an action in new URI context",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "runInNewURIContext",
          "normalized": "String-\u003eXmlStateFilter a-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "In New URIContext",
          "signature": "String-\u003eXmlStateFilter a-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:runInNewURIContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the base URI, all other URIs are handled relative to this base URI\n\u003c/p\u003e\u003cp\u003ethe default base URI is \u003ccode\u003efile:///\u003ccurrent-working-dir\u003e/\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetBaseURI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "setBaseURI",
          "package": "hxt-filter",
          "signature": "String -\u003e XState state ()",
          "source": "src/Text-XML-HXT-Parser-XmlInput.html#setBaseURI",
          "type": "function"
        },
        "index": {
          "description": "set the base URI all other URIs are handled relative to this base URI the default base URI is file current-working-dir see also getBaseURI",
          "hierarchy": "Text XML HXT Parser XmlInput",
          "module": "Text.XML.HXT.Parser.XmlInput",
          "name": "setBaseURI",
          "normalized": "String-\u003eXState a()",
          "package": "hxt-filter",
          "partial": "Base URI",
          "signature": "String-\u003eXState state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:setBaseURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eoutput functions\n implemented as filer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "XmlOutput",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html",
          "type": "module"
        },
        "index": {
          "description": "output functions implemented as filer",
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "XmlOutput",
          "package": "hxt-filter",
          "partial": "Xml Output",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edocument output for arbitrary files.\n\u003c/p\u003e\u003cp\u003eResult is the input document\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "hPutXmlDoc",
          "package": "hxt-filter",
          "signature": "Handle -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#hPutXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "document output for arbitrary files Result is the input document",
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "hPutXmlDoc",
          "normalized": "Handle-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Put Xml Doc",
          "signature": "Handle-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:hPutXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput of text representation for trace\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "hPutXmlSource",
          "package": "hxt-filter",
          "signature": "Handle -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#hPutXmlSource",
          "type": "function"
        },
        "index": {
          "description": "output of text representation for trace",
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "hPutXmlSource",
          "normalized": "Handle-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Put Xml Source",
          "signature": "Handle-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:hPutXmlSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput of tree representation for trace\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "hPutXmlTree",
          "package": "hxt-filter",
          "signature": "Handle -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#hPutXmlTree",
          "type": "function"
        },
        "index": {
          "description": "output of tree representation for trace",
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "hPutXmlTree",
          "normalized": "Handle-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Put Xml Tree",
          "signature": "Handle-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:hPutXmlTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edocument output for standard output\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ehPutXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "document output for standard output see also hPutXmlDoc",
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlDoc",
          "package": "hxt-filter",
          "partial": "Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edocument output on a given file name\n\u003c/p\u003e\u003cp\u003eResult is the input document\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ehPutXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eputXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlDocToFile",
          "package": "hxt-filter",
          "signature": "String -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlDocToFile",
          "type": "function"
        },
        "index": {
          "description": "document output on given file name Result is the input document see also hPutXmlDoc putXmlDoc",
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlDocToFile",
          "normalized": "String-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Xml Doc To File",
          "signature": "String-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlDocToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlSource",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlSource",
          "package": "hxt-filter",
          "partial": "Xml Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlTree",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "putXmlTree",
          "package": "hxt-filter",
          "partial": "Xml Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceF",
          "package": "hxt-filter",
          "signature": "Int -\u003e XmlStateFilter a -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceF",
          "normalized": "Int-\u003eXmlStateFilter a-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "signature": "Int-\u003eXmlStateFilter a-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceMsg",
          "package": "hxt-filter",
          "signature": "Int -\u003e String -\u003e XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceMsg",
          "normalized": "Int-\u003eString-\u003eXmlStateFilter a",
          "package": "hxt-filter",
          "partial": "Msg",
          "signature": "Int-\u003eString-\u003eXmlStateFilter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceSource",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceSource",
          "package": "hxt-filter",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceTree",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Parser XmlOutput",
          "module": "Text.XML.HXT.Parser.XmlOutput",
          "name": "traceTree",
          "package": "hxt-filter",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXml Parser: the main parse filter \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Parser.XmlParser",
          "name": "XmlParser",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser-XmlParser.html",
          "type": "module"
        },
        "index": {
          "description": "Xml Parser the main parse filter",
          "hierarchy": "Text XML HXT Parser XmlParser",
          "module": "Text.XML.HXT.Parser.XmlParser",
          "name": "XmlParser",
          "package": "hxt-filter",
          "partial": "Xml Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic parser for a whole document.\n input must be a root node with a single text child.\n Error messages are issued and global error state is set.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlParser",
          "name": "parseXmlDoc",
          "package": "hxt-filter",
          "signature": "XmlStateFilter a",
          "source": "src/Text-XML-HXT-Parser-XmlParser.html#parseXmlDoc",
          "type": "function"
        },
        "index": {
          "description": "The monadic parser for whole document input must be root node with single text child Error messages are issued and global error state is set",
          "hierarchy": "Text XML HXT Parser XmlParser",
          "module": "Text.XML.HXT.Parser.XmlParser",
          "name": "parseXmlDoc",
          "package": "hxt-filter",
          "partial": "Xml Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlParser.html#v:parseXmlDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter for substitution of all occurences of the predefined XML entites quot, amp, lt, gt, apos\n by equivalent character references\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Parser.XmlParser",
          "name": "substXmlEntities",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Parser-XmlParser.html#substXmlEntities",
          "type": "function"
        },
        "index": {
          "description": "Filter for substitution of all occurences of the predefined XML entites quot amp lt gt apos by equivalent character references",
          "hierarchy": "Text XML HXT Parser XmlParser",
          "module": "Text.XML.HXT.Parser.XmlParser",
          "name": "substXmlEntities",
          "package": "hxt-filter",
          "partial": "Xml Entities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlParser.html#v:substXmlEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple parse functions.\n\u003c/p\u003e\u003cp\u003ethe \u003ca\u003emain\u003c/a\u003e building blocks for an application.\n this module exports all important functions for parsing, validating and transforming XML.\n it also exports all basic datatypes and functions of the toolbox.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Parser",
          "name": "Parser",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Simple parse functions the main building blocks for an application this module exports all important functions for parsing validating and transforming XML it also exports all basic datatypes and functions of the toolbox",
          "hierarchy": "Text XML HXT Parser",
          "module": "Text.XML.HXT.Parser",
          "name": "Parser",
          "package": "hxt-filter",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating attributes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.AttributeValueValidation",
          "name": "AttributeValueValidation",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-AttributeValueValidation.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for validating attributes",
          "hierarchy": "Text XML HXT Validator AttributeValueValidation",
          "module": "Text.XML.HXT.Validator.AttributeValueValidation",
          "name": "AttributeValueValidation",
          "package": "hxt-filter",
          "partial": "Attribute Value Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-AttributeValueValidation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the attribute value meets the lexical constraints of its type.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the children of the \u003ccode\u003eDOCTYPE\u003c/code\u003e node\n\u003c/li\u003e\u003cli\u003e 2.parameter attrDecl :  the declaration of the attribute from the DTD\n\u003c/li\u003e\u003cli\u003e returns : a function which takes an element (XTag or XDTD ATTLIST),\n                    checks if the attribute value meets the lexical constraints\n                    of its type and returns a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.AttributeValueValidation",
          "name": "checkAttributeValue",
          "package": "hxt-filter",
          "signature": "XmlTrees -\u003e XmlTree -\u003e XmlFilter",
          "source": "src/Text-XML-HXT-Validator-AttributeValueValidation.html#checkAttributeValue",
          "type": "function"
        },
        "index": {
          "description": "Checks if the attribute value meets the lexical constraints of its type parameter dtdPart the children of the DOCTYPE node parameter attrDecl the declaration of the attribute from the DTD returns function which takes an element XTag or XDTD ATTLIST checks if the attribute value meets the lexical constraints of its type and returns list of errors",
          "hierarchy": "Text XML HXT Validator AttributeValueValidation",
          "module": "Text.XML.HXT.Validator.AttributeValueValidation",
          "name": "checkAttributeValue",
          "normalized": "XmlTrees-\u003eXmlTree-\u003eXmlFilter",
          "package": "hxt-filter",
          "partial": "Attribute Value",
          "signature": "XmlTrees-\u003eXmlTree-\u003eXmlFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-AttributeValueValidation.html#v:checkAttributeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalizes an attribute value with respect to its type. (3.3.3 / p.29 in Spec)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter attrDecl :  the declaration of the attribute from the DTD. Expected\n                   is a list. If the list is empty, no declaration exists.\n\u003c/li\u003e\u003cli\u003e 2.parameter value :  the attribute value to be normalized\n\u003c/li\u003e\u003cli\u003e returns : the normalized value\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.AttributeValueValidation",
          "name": "normalizeAttributeValue",
          "package": "hxt-filter",
          "signature": "Maybe XmlTree -\u003e String -\u003e String",
          "source": "src/Text-XML-HXT-Validator-AttributeValueValidation.html#normalizeAttributeValue",
          "type": "function"
        },
        "index": {
          "description": "Normalizes an attribute value with respect to its type p.29 in Spec parameter attrDecl the declaration of the attribute from the DTD Expected is list If the list is empty no declaration exists parameter value the attribute value to be normalized returns the normalized value",
          "hierarchy": "Text XML HXT Validator AttributeValueValidation",
          "module": "Text.XML.HXT.Validator.AttributeValueValidation",
          "name": "normalizeAttributeValue",
          "normalized": "Maybe XmlTree-\u003eString-\u003eString",
          "package": "hxt-filter",
          "partial": "Attribute Value",
          "signature": "Maybe XmlTree-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-AttributeValueValidation.html#v:normalizeAttributeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating the DTD of XML documents\n represented as XmlTree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.DTDValidation",
          "name": "DTDValidation",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-DTDValidation.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for validating the DTD of XML documents represented as XmlTree",
          "hierarchy": "Text XML HXT Validator DTDValidation",
          "module": "Text.XML.HXT.Validator.DTDValidation",
          "name": "DTDValidation",
          "package": "hxt-filter",
          "partial": "DTDValidation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DTDValidation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves doublicate declarations from the DTD, which first declaration is\n binding. This is the case for ATTLIST and ENTITY declarations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : A function that replaces the children of DOCTYPE nodes by a list\n               where all multiple declarations are removed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.DTDValidation",
          "name": "removeDoublicateDefs",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-DTDValidation.html#removeDoublicateDefs",
          "type": "function"
        },
        "index": {
          "description": "Removes doublicate declarations from the DTD which first declaration is binding This is the case for ATTLIST and ENTITY declarations returns function that replaces the children of DOCTYPE nodes by list where all multiple declarations are removed",
          "hierarchy": "Text XML HXT Validator DTDValidation",
          "module": "Text.XML.HXT.Validator.DTDValidation",
          "name": "removeDoublicateDefs",
          "package": "hxt-filter",
          "partial": "Doublicate Defs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DTDValidation.html#v:removeDoublicateDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a DTD.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a functions which takes the DTD subset of the XmlTree, checks\n                  if the DTD is valid and returns a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.DTDValidation",
          "name": "validateDTD",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-DTDValidation.html#validateDTD",
          "type": "function"
        },
        "index": {
          "description": "Validate DTD returns functions which takes the DTD subset of the XmlTree checks if the DTD is valid and returns list of errors",
          "hierarchy": "Text XML HXT Validator DTDValidation",
          "module": "Text.XML.HXT.Validator.DTDValidation",
          "name": "validateDTD",
          "package": "hxt-filter",
          "partial": "DTD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DTDValidation.html#v:validateDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for transforming XML documents represented as\n XmlTree with respect to its DTD.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.DocTransformation",
          "name": "DocTransformation",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-DocTransformation.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for transforming XML documents represented as XmlTree with respect to its DTD",
          "hierarchy": "Text XML HXT Validator DocTransformation",
          "module": "Text.XML.HXT.Validator.DocTransformation",
          "name": "DocTransformation",
          "package": "hxt-filter",
          "partial": "Doc Transformation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocTransformation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for transforming the document.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the DTD subset (Node \u003ccode\u003eDOCTYPE\u003c/code\u003e) of the XmlTree\n\u003c/li\u003e\u003cli\u003e 2.parameter doc :  the document subset of the XmlTree\n\u003c/li\u003e\u003cli\u003e returns : a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.DocTransformation",
          "name": "transform",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-Validator-DocTransformation.html#transform",
          "type": "function"
        },
        "index": {
          "description": "filter for transforming the document parameter dtdPart the DTD subset Node DOCTYPE of the XmlTree parameter doc the document subset of the XmlTree returns list of errors",
          "hierarchy": "Text XML HXT Validator DocTransformation",
          "module": "Text.XML.HXT.Validator.DocTransformation",
          "name": "transform",
          "normalized": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-filter",
          "signature": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocTransformation.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating XML Documents represented as\n XmlTree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.DocValidation",
          "name": "DocValidation",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-DocValidation.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for validating XML Documents represented as XmlTree",
          "hierarchy": "Text XML HXT Validator DocValidation",
          "module": "Text.XML.HXT.Validator.DocValidation",
          "name": "DocValidation",
          "package": "hxt-filter",
          "partial": "Doc Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocValidation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a document.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the DTD subset (Node \u003ccode\u003eDOCTYPE\u003c/code\u003e) of the XmlTree\n\u003c/li\u003e\u003cli\u003e 2.parameter doc :  the document subset of the XmlTree\n\u003c/li\u003e\u003cli\u003e returns : a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.DocValidation",
          "name": "validateDoc",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-Validator-DocValidation.html#validateDoc",
          "type": "function"
        },
        "index": {
          "description": "Validate document parameter dtdPart the DTD subset Node DOCTYPE of the XmlTree parameter doc the document subset of the XmlTree returns list of errors",
          "hierarchy": "Text XML HXT Validator DocValidation",
          "module": "Text.XML.HXT.Validator.DocValidation",
          "name": "validateDoc",
          "normalized": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-filter",
          "partial": "Doc",
          "signature": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocValidation.html#v:validateDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for checking special ID\u003cem\u003eIDREF\u003c/em\u003eIDREFS constraints.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.IdValidation",
          "name": "IdValidation",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-IdValidation.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for checking special ID IDREF IDREFS constraints",
          "hierarchy": "Text XML HXT Validator IdValidation",
          "module": "Text.XML.HXT.Validator.IdValidation",
          "name": "IdValidation",
          "package": "hxt-filter",
          "partial": "Id Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-IdValidation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the validation of the ID\u003cem\u003eIDREF\u003c/em\u003eIDREFS constraints.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the DTD subset (Node \u003ccode\u003eDOCTYPE\u003c/code\u003e) of the XmlTree\n\u003c/li\u003e\u003cli\u003e 2.parameter doc :  the document subset of the XmlTree\n\u003c/li\u003e\u003cli\u003e returns : a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.IdValidation",
          "name": "validateIds",
          "package": "hxt-filter",
          "signature": "XmlTree -\u003e XmlTree -\u003e XmlTrees",
          "source": "src/Text-XML-HXT-Validator-IdValidation.html#validateIds",
          "type": "function"
        },
        "index": {
          "description": "Perform the validation of the ID IDREF IDREFS constraints parameter dtdPart the DTD subset Node DOCTYPE of the XmlTree parameter doc the document subset of the XmlTree returns list of errors",
          "hierarchy": "Text XML HXT Validator IdValidation",
          "module": "Text.XML.HXT.Validator.IdValidation",
          "name": "validateIds",
          "normalized": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
          "package": "hxt-filter",
          "partial": "Ids",
          "signature": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-IdValidation.html#v:validateIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for regular expression matching based on derivatives of regular expressions.\n\u003c/p\u003e\u003cp\u003eThe code was taken from Joe English (\u003ca\u003ehttp://www.flightlab.com/~joe/sgml/validate.html\u003c/a\u003e).\n Tested and extended by Martin Schmidt.\n\u003c/p\u003e\u003cp\u003eFurther references for the algorithm:\n\u003c/p\u003e\u003cp\u003eJanusz A. Brzozowski.\n\u003c/p\u003e\u003cp\u003eDerivatives of Regular Expressions. Journal of the ACM, Volume 11, Issue 4, 1964. \n\u003c/p\u003e\u003cp\u003eMark Hopkins.\n\u003c/p\u003e\u003cp\u003eRegular Expression Package. Posted to comp.compilers, 1994.\n      Available per FTP at \u003ca\u003eftp://iecc.com/pub/file/regex.tar.gz\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-RE.html",
          "type": "module"
        },
        "index": {
          "description": "module for regular expression matching based on derivatives of regular expressions The code was taken from Joe English http www.flightlab.com joe sgml validate.html Tested and extended by Martin Schmidt Further references for the algorithm Janusz Brzozowski Derivatives of Regular Expressions Journal of the ACM Volume Issue Mark Hopkins Regular Expression Package Posted to comp.compilers Available per FTP at ftp iecc.com pub file regex.tar.gz",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE",
          "package": "hxt-filter",
          "partial": "RE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for regular expressions.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "data"
        },
        "index": {
          "description": "Data type for regular expressions",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE",
          "package": "hxt-filter",
          "partial": "RE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#t:RE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_ALT",
          "package": "hxt-filter",
          "signature": "RE_ALT (RE a) (RE a)",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_ALT",
          "package": "hxt-filter",
          "partial": "RE ALT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_ALT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_DOT",
          "package": "hxt-filter",
          "signature": "RE_DOT",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_DOT",
          "package": "hxt-filter",
          "partial": "RE DOT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_DOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_OPT",
          "package": "hxt-filter",
          "signature": "RE_OPT (RE a)",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_OPT",
          "package": "hxt-filter",
          "partial": "RE OPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_OPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_PLUS",
          "package": "hxt-filter",
          "signature": "RE_PLUS (RE a)",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_PLUS",
          "package": "hxt-filter",
          "partial": "RE PLUS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_PLUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_REP",
          "package": "hxt-filter",
          "signature": "RE_REP (RE a)",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_REP",
          "package": "hxt-filter",
          "partial": "RE REP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_REP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_SEQ",
          "package": "hxt-filter",
          "signature": "RE_SEQ (RE a) (RE a)",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_SEQ",
          "package": "hxt-filter",
          "partial": "RE SEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_SEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_SYM",
          "package": "hxt-filter",
          "signature": "RE_SYM a",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_SYM",
          "package": "hxt-filter",
          "partial": "RE SYM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_SYM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_UNIT",
          "package": "hxt-filter",
          "signature": "RE_UNIT",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_UNIT",
          "package": "hxt-filter",
          "partial": "RE UNIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_UNIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_ZERO",
          "package": "hxt-filter",
          "signature": "RE_ZERO String",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "RE_ZERO",
          "package": "hxt-filter",
          "partial": "RE ZERO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_ZERO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if an input matched a regular expression. The function should be\n called after matches.\n\u003c/p\u003e\u003cp\u003eWas the sentence used in \u003ccode\u003ematches\u003c/code\u003e in the language of the regular expression?\n -\u003e matches e s == s `in` L(e)?\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  the derived regular expression\n\u003c/li\u003e\u003cli\u003e returns : empty String if input matched the regular expression, otherwise\n               an error message is returned\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "checkRE",
          "package": "hxt-filter",
          "signature": "RE a -\u003e String",
          "source": "src/Text-XML-HXT-Validator-RE.html#checkRE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:checkRE\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:checkRE\"]"
        },
        "index": {
          "description": "Checks if an input matched regular expression The function should be called after matches Was the sentence used in matches in the language of the regular expression matches in parameter re the derived regular expression returns empty String if input matched the regular expression otherwise an error message is returned",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "checkRE",
          "normalized": "RE a-\u003eString",
          "package": "hxt-filter",
          "partial": "RE",
          "signature": "RE a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:checkRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives a regular expression with respect to a sentence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  regular expression\n\u003c/li\u003e\u003cli\u003e 2.parameter s :  sentence to which the regular expression is applied\n\u003c/li\u003e\u003cli\u003e returns : the derived regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "matches",
          "package": "hxt-filter",
          "signature": "RE a -\u003e [a] -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#matches",
          "type": "function"
        },
        "index": {
          "description": "Derives regular expression with respect to sentence parameter re regular expression parameter sentence to which the regular expression is applied returns the derived regular expression",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "matches",
          "normalized": "RE a-\u003e[a]-\u003eRE a",
          "package": "hxt-filter",
          "signature": "RE a-\u003e[a]-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a regular expression matches the empty sequence.\n\u003c/p\u003e\u003cp\u003enullable e == [] `in` L(e)\n\u003c/p\u003e\u003cp\u003eThis check indicates if a regular expression fits to a sentence or not.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  regular expression to be checked\n\u003c/li\u003e\u003cli\u003e returns : true if regular expression matches the empty sequence,\n                otherwise false\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "nullable",
          "package": "hxt-filter",
          "signature": "RE a -\u003e Bool",
          "source": "src/Text-XML-HXT-Validator-RE.html#nullable",
          "type": "function"
        },
        "index": {
          "description": "Checks if regular expression matches the empty sequence nullable in This check indicates if regular expression fits to sentence or not parameter re regular expression to be checked returns true if regular expression matches the empty sequence otherwise false",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "nullable",
          "normalized": "RE a-\u003eBool",
          "package": "hxt-filter",
          "signature": "RE a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a string representation of a regular expression.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  a regular expression\n\u003c/li\u003e\u003cli\u003e returns : the string representation of the regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "printRE",
          "package": "hxt-filter",
          "signature": "RE a -\u003e String",
          "source": "src/Text-XML-HXT-Validator-RE.html#printRE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:printRE\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:printRE\"]"
        },
        "index": {
          "description": "Constructs string representation of regular expression parameter re regular expression returns the string representation of the regular expression",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "printRE",
          "normalized": "RE a-\u003eString",
          "package": "hxt-filter",
          "partial": "RE",
          "signature": "RE a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:printRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an alternative (|) of two regular expressions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  first regular expression of alternative\n\u003c/li\u003e\u003cli\u003e 2.parameter re_b :  second regular expression of alternative\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_alt",
          "package": "hxt-filter",
          "signature": "RE a -\u003e RE a -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_alt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_alt\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_alt\"]"
        },
        "index": {
          "description": "Constructs an alternative of two regular expressions parameter re first regular expression of alternative parameter re second regular expression of alternative returns new regular expression",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_alt",
          "normalized": "RE a-\u003eRE a-\u003eRE a",
          "package": "hxt-filter",
          "signature": "RE a-\u003eRE a-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a regular expression for accepting any singel symbol\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : regular expression for accepting any singel symbol\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_dot",
          "package": "hxt-filter",
          "signature": "RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_dot",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_dot\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_dot\"]"
        },
        "index": {
          "description": "Constructs regular expression for accepting any singel symbol returns regular expression for accepting any singel symbol",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_dot",
          "package": "hxt-filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an option (?) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be optional\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_opt",
          "package": "hxt-filter",
          "signature": "RE a -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_opt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_opt\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_opt\"]"
        },
        "index": {
          "description": "Constructs an option of regular expression parameter re regular expression to be optional returns new regular expression",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_opt",
          "normalized": "RE a-\u003eRE a",
          "package": "hxt-filter",
          "signature": "RE a-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a repetition (+) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be repeted\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_plus",
          "package": "hxt-filter",
          "signature": "RE a -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_plus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_plus\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_plus\"]"
        },
        "index": {
          "description": "Constructs repetition of regular expression parameter re regular expression to be repeted returns new regular expression",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_plus",
          "normalized": "RE a-\u003eRE a",
          "package": "hxt-filter",
          "signature": "RE a-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an optional repetition (*) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be repeted\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_rep",
          "package": "hxt-filter",
          "signature": "RE a -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_rep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_rep\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_rep\"]"
        },
        "index": {
          "description": "Constructs an optional repetition of regular expression parameter re regular expression to be repeted returns new regular expression",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_rep",
          "normalized": "RE a-\u003eRE a",
          "package": "hxt-filter",
          "signature": "RE a-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a sequence (,) of two regular expressions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  first regular expression in sequence\n\u003c/li\u003e\u003cli\u003e 2.parameter re_b :  second regular expression in sequence\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_seq",
          "package": "hxt-filter",
          "signature": "RE a -\u003e RE a -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_seq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_seq\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_seq\"]"
        },
        "index": {
          "description": "Constructs sequence of two regular expressions parameter re first regular expression in sequence parameter re second regular expression in sequence returns new regular expression",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_seq",
          "normalized": "RE a-\u003eRE a-\u003eRE a",
          "package": "hxt-filter",
          "signature": "RE a-\u003eRE a-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a regular expression for accepting a symbol\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter sym :  the symbol to be accepted\n\u003c/li\u003e\u003cli\u003e returns : regular expression for accepting a symbol\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_sym",
          "package": "hxt-filter",
          "signature": "a -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_sym",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_sym\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_sym\"]"
        },
        "index": {
          "description": "Constructs regular expression for accepting symbol parameter sym the symbol to be accepted returns regular expression for accepting symbol",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_sym",
          "normalized": "a-\u003eRE a",
          "package": "hxt-filter",
          "signature": "a-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a regular expression for an empty sequence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : regular expression for an empty sequence\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_unit",
          "package": "hxt-filter",
          "signature": "RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_unit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_unit\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_unit\"]"
        },
        "index": {
          "description": "Constructs regular expression for an empty sequence returns regular expression for an empty sequence",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_unit",
          "package": "hxt-filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a regular expression for an empty set.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter errMsg :  error message\n\u003c/li\u003e\u003cli\u003e returns : regular expression for an empty set\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.XML.HXT.Validator.RE\",\"Text.XML.HXT.Validator.XmlRE\"]",
          "name": "re_zero",
          "package": "hxt-filter",
          "signature": "String -\u003e RE a",
          "source": "src/Text-XML-HXT-Validator-RE.html#re_zero",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_zero\",\"http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_zero\"]"
        },
        "index": {
          "description": "Constructs regular expression for an empty set parameter errMsg error message returns regular expression for an empty set",
          "hierarchy": "Text XML HXT Validator RE",
          "module": "Text.XML.HXT.Validator.RE",
          "name": "re_zero",
          "normalized": "String-\u003eRE a",
          "package": "hxt-filter",
          "signature": "String-\u003eRE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a state filter as a main function for validating XML documents.\n\u003c/p\u003e\u003cp\u003eThe real validation is done with pure filters from module \u003ccode\u003eText.XML.HXT.Validator.ValidationFilter\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eAuthor : .\\artin Schmidt\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.Validation",
          "name": "Validation",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-Validation.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides state filter as main function for validating XML documents The real validation is done with pure filters from module Text.XML.HXT.Validator.ValidationFilter Author artin Schmidt",
          "hierarchy": "Text XML HXT Validator Validation",
          "module": "Text.XML.HXT.Validator.Validation",
          "name": "Validation",
          "package": "hxt-filter",
          "partial": "Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-Validation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic filter for validating and transforming a wellformed document.\n\u003c/p\u003e\u003cp\u003ethe \u003ca\u003emain\u003c/a\u003e function for validation.\n\u003c/p\u003e\u003cp\u003ethe input tree must consist of a root node with a complete document and DTD.\n Result is the single element list containing same tree but tranformed with respect to the DTD,\n or, in case of errors, the root with an empty list of children\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Validator.Validation",
          "name": "getValidatedDoc",
          "package": "hxt-filter",
          "signature": "XmlStateFilter state",
          "source": "src/Text-XML-HXT-Validator-Validation.html#getValidatedDoc",
          "type": "function"
        },
        "index": {
          "description": "monadic filter for validating and transforming wellformed document the main function for validation the input tree must consist of root node with complete document and DTD Result is the single element list containing same tree but tranformed with respect to the DTD or in case of errors the root with an empty list of children",
          "hierarchy": "Text XML HXT Validator Validation",
          "module": "Text.XML.HXT.Validator.Validation",
          "name": "getValidatedDoc",
          "package": "hxt-filter",
          "partial": "Validated Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-Validation.html#v:getValidatedDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating XML documents represented as\n XmlTree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "ValidationFilter",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-ValidationFilter.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for validating XML documents represented as XmlTree",
          "hierarchy": "Text XML HXT Validator ValidationFilter",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "ValidationFilter",
          "package": "hxt-filter",
          "partial": "Validation Filter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "getDTDSubset",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-ValidationFilter.html#getDTDSubset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML HXT Validator ValidationFilter",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "getDTDSubset",
          "package": "hxt-filter",
          "partial": "DTDSubset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:getDTDSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves doublicate declarations from the DTD which first declaration is\n binding. This is the case for ATTLIST and ENTITY declarations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : A function that replaces the children of DOCTYPE nodes by a list\n               where all multiple declarations are removed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "removeDoublicateDefs",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-ValidationFilter.html#removeDoublicateDefs",
          "type": "function"
        },
        "index": {
          "description": "Removes doublicate declarations from the DTD which first declaration is binding This is the case for ATTLIST and ENTITY declarations returns function that replaces the children of DOCTYPE nodes by list where all multiple declarations are removed",
          "hierarchy": "Text XML HXT Validator ValidationFilter",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "removeDoublicateDefs",
          "package": "hxt-filter",
          "partial": "Doublicate Defs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:removeDoublicateDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for transforming a document with respect to the given DTD.\n\u003c/p\u003e\u003cp\u003eValidating parsers\n are expected to  normalize attribute values and add default values.\n This function should be called after a successful validation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects a complete XML document tree\n                and returns the transformed XmlTree\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "transform",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-ValidationFilter.html#transform",
          "type": "function"
        },
        "index": {
          "description": "filter for transforming document with respect to the given DTD Validating parsers are expected to normalize attribute values and add default values This function should be called after successful validation returns function which expects complete XML document tree and returns the transformed XmlTree",
          "hierarchy": "Text XML HXT Validator ValidationFilter",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "transform",
          "package": "hxt-filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain validation filter. Check if the DTD and the document are valid.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects a complete document as XmlTree input\n                     and returns a list of all errors found.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "validate",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-ValidationFilter.html#validate",
          "type": "function"
        },
        "index": {
          "description": "Main validation filter Check if the DTD and the document are valid returns function which expects complete document as XmlTree input and returns list of all errors found",
          "hierarchy": "Text XML HXT Validator ValidationFilter",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "validate",
          "package": "hxt-filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the DTD is valid.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects an XmlTree from the parser as input\n                     and returns a list of all errors found in the DTD.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "validateDTD",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-ValidationFilter.html#validateDTD",
          "type": "function"
        },
        "index": {
          "description": "Check if the DTD is valid returns function which expects an XmlTree from the parser as input and returns list of all errors found in the DTD",
          "hierarchy": "Text XML HXT Validator ValidationFilter",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "validateDTD",
          "package": "hxt-filter",
          "partial": "DTD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:validateDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the document corresponds to the given DTD.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects a complete document as XmlTree input\n                     and returns a list of all errors found in the content part.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "validateDoc",
          "package": "hxt-filter",
          "signature": "XmlFilter",
          "source": "src/Text-XML-HXT-Validator-ValidationFilter.html#validateDoc",
          "type": "function"
        },
        "index": {
          "description": "Check if the document corresponds to the given DTD returns function which expects complete document as XmlTree input and returns list of all errors found in the content part",
          "hierarchy": "Text XML HXT Validator ValidationFilter",
          "module": "Text.XML.HXT.Validator.ValidationFilter",
          "name": "validateDoc",
          "package": "hxt-filter",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:validateDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for regular expression matching, adapted for XML DTDs.\n\u003c/p\u003e\u003cp\u003eThis module is based on the module RE.\n\u003c/p\u003e\u003cp\u003eAuthor .\\artin Schmidt\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.HXT.Validator.XmlRE",
          "name": "XmlRE",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-XmlRE.html",
          "type": "module"
        },
        "index": {
          "description": "module for regular expression matching adapted for XML DTDs This module is based on the module RE Author artin Schmidt",
          "hierarchy": "Text XML HXT Validator XmlRE",
          "module": "Text.XML.HXT.Validator.XmlRE",
          "name": "XmlRE",
          "package": "hxt-filter",
          "partial": "Xml RE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for regular expressions.\n\u003c/p\u003e",
          "module": "Text.XML.HXT.Validator.XmlRE",
          "name": "RE",
          "package": "hxt-filter",
          "source": "src/Text-XML-HXT-Validator-RE.html#RE",
          "type": "data"
        },
        "index": {
          "description": "Data type for regular expressions",
          "hierarchy": "Text XML HXT Validator XmlRE",
          "module": "Text.XML.HXT.Validator.XmlRE",
          "name": "RE",
          "package": "hxt-filter",
          "partial": "RE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#t:RE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives a regular expression with respect to a list of elements.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  regular expression\n\u003c/li\u003e\u003cli\u003e 2.parameter list :  list of elements to which the regular expression is applied\n\u003c/li\u003e\u003cli\u003e returns : the derived regular expression\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.XML.HXT.Validator.XmlRE",
          "name": "matches",
          "package": "hxt-filter",
          "signature": "RE String -\u003e XmlTrees -\u003e RE String",
          "source": "src/Text-XML-HXT-Validator-XmlRE.html#matches",
          "type": "function"
        },
        "index": {
          "description": "Derives regular expression with respect to list of elements parameter re regular expression parameter list list of elements to which the regular expression is applied returns the derived regular expression",
          "hierarchy": "Text XML HXT Validator XmlRE",
          "module": "Text.XML.HXT.Validator.XmlRE",
          "name": "matches",
          "normalized": "RE String-\u003eXmlTrees-\u003eRE String",
          "package": "hxt-filter",
          "signature": "RE String-\u003eXmlTrees-\u003eRE String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:matches"
      }
    }
  ]
]