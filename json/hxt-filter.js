[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003egeneral usefull state monad for a local state and IO\n\u003c/p\u003e\u003cp\u003eThis module is used for threading a state and io actions\n through a computation.\n Here the monad is constructed by hand.\n It could easily be refactored with the use of the monad transformer library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-MonadStateIO.html",
        "fct-type": "module",
        "title": "MonadStateIO"
      },
      "index": {
        "description": "general usefull state monad for local state and IO This module is used for threading state and io actions through computation Here the monad is constructed by hand It could easily be refactored with the use of the monad transformer library",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "MonadStateIO",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Monad State IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#t:StateIO",
      "description": {
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-MonadStateIO.html#StateIO",
        "fct-type": "newtype",
        "title": "StateIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "StateIO",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "State IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:STIO",
      "description": {
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "STIO",
        "fct-source": "src/Control-Monad-MonadStateIO.html#StateIO",
        "fct-type": "function",
        "title": "STIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "STIO",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "STIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:changeState",
      "description": {
        "fct-descr": "\u003cp\u003echange the state with a given function and return the new state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "(state -\u003e state) -\u003e StateIO state state",
        "fct-source": "src/Control-Monad-MonadStateIO.html#changeState",
        "fct-type": "function",
        "title": "changeState"
      },
      "index": {
        "description": "change the state with given function and return the new state",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "changeState",
        "normalized": "(a-\u003ea)-\u003eStateIO a a",
        "package": "hxt-filter",
        "partial": "State",
        "signature": "(state-\u003estate)-\u003eStateIO state state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:getState",
      "description": {
        "fct-descr": "\u003cp\u003eread the state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "StateIO state state",
        "fct-source": "src/Control-Monad-MonadStateIO.html#getState",
        "fct-type": "function",
        "title": "getState"
      },
      "index": {
        "description": "read the state",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "getState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:io",
      "description": {
        "fct-descr": "\u003cp\u003elift IO command to \u003ccode\u003e\u003ca\u003eStateIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "IO a -\u003e StateIO state a",
        "fct-source": "src/Control-Monad-MonadStateIO.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "lift IO command to StateIO",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "io",
        "normalized": "IO a-\u003eStateIO b a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "IO a-\u003eStateIO state a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003erun a \u003ccode\u003e\u003ca\u003eStateIO\u003c/a\u003e\u003c/code\u003e command with an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "state -\u003e StateIO state res -\u003e IO res",
        "fct-source": "src/Control-Monad-MonadStateIO.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "run StateIO command with an initial state",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "run",
        "normalized": "a-\u003eStateIO a b-\u003eIO b",
        "package": "hxt-filter",
        "partial": "",
        "signature": "state-\u003eStateIO state res-\u003eIO res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:setState",
      "description": {
        "fct-descr": "\u003cp\u003eset the state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "state -\u003e StateIO state state",
        "fct-source": "src/Control-Monad-MonadStateIO.html#setState",
        "fct-type": "function",
        "title": "setState"
      },
      "index": {
        "description": "set the state",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "setState",
        "normalized": "a-\u003eStateIO a a",
        "package": "hxt-filter",
        "partial": "State",
        "signature": "state-\u003eStateIO state state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:trans",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "state -\u003e IO (res, state)",
        "fct-source": "src/Control-Monad-MonadStateIO.html#StateIO",
        "fct-type": "function",
        "title": "trans"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "trans",
        "normalized": "a-\u003eIO(b,a)",
        "package": "hxt-filter",
        "partial": "",
        "signature": "state-\u003eIO(res,state)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Control-Monad-MonadStateIO.html#v:trcState",
      "description": {
        "fct-descr": "\u003cp\u003estate inspection command: a \"show\"-like function is applied to the state\n and the result is written to stderr.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MonadStateIO",
        "fct-package": "hxt-filter",
        "fct-signature": "(state -\u003e String) -\u003e StateIO state ()",
        "fct-source": "src/Control-Monad-MonadStateIO.html#trcState",
        "fct-type": "function",
        "title": "trcState"
      },
      "index": {
        "description": "state inspection command show like function is applied to the state and the result is written to stderr",
        "hierarchy": "Control Monad MonadStateIO",
        "module": "Control.Monad.MonadStateIO",
        "name": "trcState",
        "normalized": "(a-\u003eString)-\u003eStateIO a()",
        "package": "hxt-filter",
        "partial": "State",
        "signature": "(state-\u003eString)-\u003eStateIO state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFilter for n-ary tree structure with filter combinators\n   copied and modified from HaXml (\u003ca\u003ehttp://www.cs.york.ac.uk/fp/HaXml/\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eSimilar but more flexible functions for tree processing are defined in the\n   arrow classes \u003ca\u003eControl.Arrow.ArrowList\u003c/a\u003e, \u003ca\u003eControl.Arrow.ArrowIf\u003c/a\u003e, \u003ca\u003eControl.Arrow.ArrowTree\u003c/a\u003e and \u003ca\u003eControl.Arrow.ArrowState\u003c/a\u003e.\n   For new applications, especially for XML processing, it's recommended to use the arrow interface\n   \u003ca\u003eText.XML.HXT.Arrow\u003c/a\u003e instead of this filter approach as part of the api \u003ca\u003eText.XML.HXT.Parser\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Data-Tree-NTree-Filter.html",
        "fct-type": "module",
        "title": "Filter"
      },
      "index": {
        "description": "Filter for n-ary tree structure with filter combinators copied and modified from HaXml http www.cs.york.ac.uk fp HaXml Similar but more flexible functions for tree processing are defined in the arrow classes Control.Arrow.ArrowList Control.Arrow.ArrowIf Control.Arrow.ArrowTree and Control.Arrow.ArrowState For new applications especially for XML processing it recommended to use the arrow interface Text.XML.HXT.Arrow instead of this filter approach as part of the api Text.XML.HXT.Parser",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "Filter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#t:IfThen",
      "description": {
        "fct-descr": "\u003cp\u003eauxiliary datatype for cases within choice filter\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "data",
        "fct-source": "src/Data-Tree-NTree-Filter.html#IfThen",
        "fct-type": "data",
        "title": "IfThen"
      },
      "index": {
        "description": "auxiliary datatype for cases within choice filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "IfThen",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "If Then",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#t:TFilter",
      "description": {
        "fct-descr": "\u003cp\u003etree filter type: a function mapping a tree onto a list of trees\n\u003c/p\u003e\u003cp\u003efilter can be used in various ways, as predicates, selectors, transformers, ...\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Data-Tree-NTree-Filter.html#TFilter",
        "fct-type": "type",
        "title": "TFilter"
      },
      "index": {
        "description": "tree filter type function mapping tree onto list of trees filter can be used in various ways as predicates selectors transformers",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "TFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "TFilter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#t:TSFilter",
      "description": {
        "fct-descr": "\u003cp\u003ea filter for sequences\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Data-Tree-NTree-Filter.html#TSFilter",
        "fct-type": "type",
        "title": "TSFilter"
      },
      "index": {
        "description": "filter for sequences",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "TSFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "TSFilter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003einfix operator for applying a filter to a list of trees\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the filter\n\u003c/li\u003e\u003cli\u003e 2.parameter ts :  the list of trees\n\u003c/li\u003e\u003cli\u003e returns : the concatenated list of results\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "infix operator for applying filter to list of trees parameter the filter parameter ts the list of trees returns the concatenated list of results",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "($$) $$",
        "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-36--36--60-",
      "description": {
        "fct-descr": "\u003cp\u003einfix operator for applying a monadic filter to a list of trees,\n typically used in do-notation for processing of intermediate results.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the monadic filter\n\u003c/li\u003e\u003cli\u003e 2.parameter ts :  the list of trees\n\u003c/li\u003e\u003cli\u003e returns : the concatenated list of results\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : '($$)'\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e m [b]) -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#%24%24%3C",
        "fct-type": "function",
        "title": "($$\u003c)"
      },
      "index": {
        "description": "infix operator for applying monadic filter to list of trees typically used in do-notation for processing of intermediate results parameter the monadic filter parameter ts the list of trees returns the concatenated list of results see also",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "($$\u003c) $$\u003c",
        "normalized": "(a-\u003eb[c])-\u003e[a]-\u003eb[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003em[b])-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-43--43--43-",
      "description": {
        "fct-descr": "\u003cp\u003ebinary parallel composition, the logical OR for predicate filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e returns : the filter for applying f1 and f2 both to an argument tree and concatenating the results\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#%2B%2B%2B",
        "fct-type": "function",
        "title": "(+++)"
      },
      "index": {
        "description": "binary parallel composition the logical OR for predicate filter parameter f1 the filter parameter f2 the filter returns the filter for applying f1 and f2 both to an argument tree and concatenating the results",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "(+++) +++",
        "normalized": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-43--43--43--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003ebinary parallel composition, the logical OR for predicate filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e returns : the filter for applying f1 and f2 both to an argument tree and concatenating the results\n see also: \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatM\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e m [b]) -\u003e (a -\u003e m [b]) -\u003e a -\u003e m [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#%2B%2B%2B%3E%3E",
        "fct-type": "function",
        "title": "(+++\u003e\u003e)"
      },
      "index": {
        "description": "binary parallel composition the logical OR for predicate filter parameter f1 the filter parameter f2 the filter returns the filter for applying f1 and f2 both to an argument tree and concatenating the results see also cat catM",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "(+++\u003e\u003e) +++\u003e\u003e",
        "normalized": "(a-\u003eb[c])-\u003e(a-\u003eb[c])-\u003ea-\u003eb[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003em[b])-\u003e(a-\u003em[b])-\u003ea-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-47--62-",
      "description": {
        "fct-descr": "\u003cp\u003epronounced \"slash\", meaning g inside f\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#%2F%3E",
        "fct-type": "function",
        "title": "(/\u003e)"
      },
      "index": {
        "description": "pronounced slash meaning inside",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "(/\u003e) /\u003e",
        "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:-60--47-",
      "description": {
        "fct-descr": "\u003cp\u003epronounced \"outside\" meaning f containing g\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#%3C%2F",
        "fct-type": "function",
        "title": "(\u003c/)"
      },
      "index": {
        "description": "pronounced outside meaning containing",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "(\u003c/) \u003c/",
        "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cp\u003epronounced \"followed by\", defined as: \u003ccode\u003ef .\u003e g = g `o` f\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eallows filter composition in a more readable way from left to right\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e returns : the composition of f1 and f2\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e, '(..\u003e)'\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e [c]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#.%3E",
        "fct-type": "function",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "pronounced followed by defined as allows filter composition in more readable way from left to right parameter f1 the filter parameter f2 the filter returns the composition of f1 and f2 see also",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "(.\u003e) .\u003e",
        "normalized": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:.-62--62-",
      "description": {
        "fct-descr": "\u003cp\u003esequential composition of monadic filters, monadic version of \".\u003e\".\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f1 :  the 1. monadic filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f2 :  the 2. monadic filter\n\u003c/li\u003e\u003cli\u003e returns : the monadic fiter applying first f1 to n and then f2 to the result (like function composition)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : '(.\u003e)'\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e m [b]) -\u003e (b -\u003e m [c]) -\u003e a -\u003e m [c]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#.%3E%3E",
        "fct-type": "function",
        "title": "(.\u003e\u003e)"
      },
      "index": {
        "description": "sequential composition of monadic filters monadic version of parameter f1 the monadic filter parameter f2 the monadic filter returns the monadic fiter applying first f1 to and then f2 to the result like function composition see also",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "(.\u003e\u003e) .\u003e\u003e",
        "normalized": "(a-\u003eb[c])-\u003e(c-\u003eb[d])-\u003ea-\u003eb[d]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003em[b])-\u003e(b-\u003em[c])-\u003ea-\u003em[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:..-62-",
      "description": {
        "fct-descr": "\u003cp\u003especial sequential composition.\n\u003c/p\u003e\u003cp\u003efilter f is applied to an argument t.\n then filter g is applied to all elements of the result list,\n but the argument t is also passed as extra parameter to g.\n\u003c/p\u003e\u003cp\u003eThis allows for step by step transformations of a tree\n with access to the original tree in every\n transformation step.\n\u003c/p\u003e\u003cp\u003esee also : '(.\u003e)', \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (a -\u003e b -\u003e [d]) -\u003e a -\u003e [d]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#..%3E",
        "fct-type": "function",
        "title": "(..\u003e)"
      },
      "index": {
        "description": "special sequential composition filter is applied to an argument then filter is applied to all elements of the result list but the argument is also passed as extra parameter to This allows for step by step transformations of tree with access to the original tree in every transformation step see also",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "(..\u003e) ..\u003e",
        "normalized": "(a-\u003e[b])-\u003e(a-\u003eb-\u003e[c])-\u003ea-\u003e[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(a-\u003eb-\u003e[d])-\u003ea-\u003e[d]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v::-45--62-",
      "description": {
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "a :-\u003e b",
        "fct-source": "src/Data-Tree-NTree-Filter.html#IfThen",
        "fct-type": "function",
        "title": ":-\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": ":-\u003e",
        "normalized": "a-\u003eb",
        "package": "hxt-filter",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eapply a list of filters, a \"union\" for lists, for predicate filters the generalized OR\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fs :  the list of filters\n\u003c/li\u003e\u003cli\u003e returns : the composing filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "[a -\u003e [b]] -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "apply list of filters union for lists for predicate filters the generalized OR parameter fs the list of filters returns the composing filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "cat",
        "normalized": "[a-\u003e[b]]-\u003ea-\u003e[b]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "[a-\u003e[b]]-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:catM",
      "description": {
        "fct-descr": "\u003cp\u003eapply a list of monadic filters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fs :  the list of filters\n\u003c/li\u003e\u003cli\u003e returns : the composing filter\n see also: \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+++\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "[a -\u003e m [b]] -\u003e a -\u003e m [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#catM",
        "fct-type": "function",
        "title": "catM"
      },
      "index": {
        "description": "apply list of monadic filters parameter fs the list of filters returns the composing filter see also cat",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "catM",
        "normalized": "[a-\u003eb[c]]-\u003ea-\u003eb[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "[a-\u003em[b]]-\u003ea-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:choice",
      "description": {
        "fct-descr": "\u003cp\u003emultiway branch. The list of cases \u003ccode\u003ef :-\u003e g\u003c/code\u003e is processed sequentially,\n in the first case for that f holds g is applied, if no case matches, \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e is\n applied.\n This filter can be used like a case expression: \u003ccode\u003echoice [ p1 :-\u003e f1, p2 :-\u003e f2, ... , this :-\u003e defaultFilter]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echoiceM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "[IfThen (a -\u003e [c]) (a -\u003e [b])] -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#choice",
        "fct-type": "function",
        "title": "choice"
      },
      "index": {
        "description": "multiway branch The list of cases is processed sequentially in the first case for that holds is applied if no case matches none is applied This filter can be used like case expression choice p1 f1 p2 f2 this defaultFilter see also iff choiceM",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "choice",
        "normalized": "[IfThen(a-\u003e[b])(a-\u003e[c])]-\u003ea-\u003e[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "[IfThen(a-\u003e[c])(a-\u003e[b])]-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:choiceM",
      "description": {
        "fct-descr": "\u003cp\u003emonadic version of multiway branch. The list of cases \u003ccode\u003ef :-\u003e g\u003c/code\u003e is processed sequentially,\n in the first case for that f holds g is applied, if no case matches, \u003ccode\u003e\u003ca\u003enoneM\u003c/a\u003e\u003c/code\u003e is\n applied.\n This filter can be used like a case expression: \u003ccode\u003echoiceM [ p1 :-\u003e f1, p2 :-\u003e f2, ... , thisM :-\u003e defaultFilter]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003echoice\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "[IfThen (a -\u003e [c]) (a -\u003e m [b])] -\u003e a -\u003e m [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#choiceM",
        "fct-type": "function",
        "title": "choiceM"
      },
      "index": {
        "description": "monadic version of multiway branch The list of cases is processed sequentially in the first case for that holds is applied if no case matches noneM is applied This filter can be used like case expression choiceM p1 f1 p2 f2 thisM defaultFilter see also choice ifM",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "choiceM",
        "normalized": "[IfThen(a-\u003e[b])(a-\u003ec[d])]-\u003ea-\u003ec[d]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "[IfThen(a-\u003e[c])(a-\u003em[b])]-\u003ea-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:containing",
      "description": {
        "fct-descr": "\u003cp\u003epruning: keep only those results from f for which g holds, usually written in infix notation as f \u003ccode\u003e\u003ca\u003econtaining\u003c/a\u003e\u003c/code\u003e g\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the processing filter\n\u003c/li\u003e\u003cli\u003e 2.parameter g :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 3.parameter t :  the tree\n\u003c/li\u003e\u003cli\u003e returns : all trees r from f t, for which g r holds (is not the empty list)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enotContaining\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#containing",
        "fct-type": "function",
        "title": "containing"
      },
      "index": {
        "description": "pruning keep only those results from for which holds usually written in infix notation as containing parameter the processing filter parameter the predicate filter parameter the tree returns all trees from for which holds is not the empty list see also notContaining",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "containing",
        "normalized": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:containingM",
      "description": {
        "fct-descr": "\u003cp\u003epruning: monadic version of containing, usually written in infix notation as f \u003ccode\u003e\u003ca\u003econtainingM\u003c/a\u003e\u003c/code\u003e g\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the monadic processing filter\n\u003c/li\u003e\u003cli\u003e 2.parameter g :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 3.parameter t :  the tree\n\u003c/li\u003e\u003cli\u003e returns : all trees r from f t, for which g r holds (is not the empty list)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enotContaining\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e m [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e m [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#containingM",
        "fct-type": "function",
        "title": "containingM"
      },
      "index": {
        "description": "pruning monadic version of containing usually written in infix notation as containingM parameter the monadic processing filter parameter the predicate filter parameter the tree returns all trees from for which holds is not the empty list see also notContaining",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "containingM",
        "normalized": "(a-\u003eb[c])-\u003e(c-\u003e[d])-\u003ea-\u003eb[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003em[b])-\u003e(b-\u003e[c])-\u003ea-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:deep",
      "description": {
        "fct-descr": "\u003cp\u003etop down search.\n\u003c/p\u003e\u003cp\u003esearch terminates, when filter f succeeds\n can e.g. be used for finding all outermost tag node of a specific kind\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#deep",
        "fct-type": "function",
        "title": "deep"
      },
      "index": {
        "description": "top down search search terminates when filter succeeds can e.g be used for finding all outermost tag node of specific kind",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "deep",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:deepest",
      "description": {
        "fct-descr": "\u003cp\u003ebottom up search.\n\u003c/p\u003e\u003cp\u003efirst the children are processed,\n if this does not succeed, the node itself is processed\n can e.g. be used for finding all innermost tag nodes of a specific kind\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#deepest",
        "fct-type": "function",
        "title": "deepest"
      },
      "index": {
        "description": "bottom up search first the children are processed if this does not succeed the node itself is processed can e.g be used for finding all innermost tag nodes of specific kind",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "deepest",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:guards",
      "description": {
        "fct-descr": "\u003cp\u003ewhen the predicate p holds, f is applied, else the null filter none\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f :  the conditionally applied filter\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguardsM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#guards",
        "fct-type": "function",
        "title": "guards"
      },
      "index": {
        "description": "when the predicate holds is applied else the null filter none parameter the predicate filter parameter the conditionally applied filter returns the conditional filter see also iff when guardsM",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "guards",
        "normalized": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:guardsM",
      "description": {
        "fct-descr": "\u003cp\u003ewhen the predicate p holds, the monadic filter f is applied, else the null filter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the simple predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f :  the conditionally applied monadic filter\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguards\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (a -\u003e m [c]) -\u003e a -\u003e m [c]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#guardsM",
        "fct-type": "function",
        "title": "guardsM"
      },
      "index": {
        "description": "when the predicate holds the monadic filter is applied else the null filter parameter the simple predicate filter parameter the conditionally applied monadic filter returns the conditional filter see also ifM guards whenM",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "guardsM",
        "normalized": "(a-\u003e[b])-\u003e(a-\u003ec[d])-\u003ea-\u003ec[d]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(a-\u003em[c])-\u003ea-\u003em[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:ifM",
      "description": {
        "fct-descr": "\u003cp\u003emonadic if-then-else.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate\n\u003c/li\u003e\u003cli\u003e 2.parameter thenP :  the then part: the monadic filter, that is applied if p holds for the input tree\n\u003c/li\u003e\u003cli\u003e 3.parameter elseP :  the else part\n\u003c/li\u003e\u003cli\u003e returns : the monadic filter for the conditional\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (a -\u003e m [c]) -\u003e (a -\u003e m [c]) -\u003e a -\u003e m [c]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#ifM",
        "fct-type": "function",
        "title": "ifM"
      },
      "index": {
        "description": "monadic if-then-else parameter the predicate parameter thenP the then part the monadic filter that is applied if holds for the input tree parameter elseP the else part returns the monadic filter for the conditional",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "ifM",
        "normalized": "(a-\u003e[b])-\u003e(a-\u003ec[d])-\u003e(a-\u003ec[d])-\u003ea-\u003ec[d]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(a-\u003em[c])-\u003e(a-\u003em[c])-\u003ea-\u003em[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:iff",
      "description": {
        "fct-descr": "\u003cp\u003eif then else lifted to filters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter t :  the \"then\" filter\n\u003c/li\u003e\u003cli\u003e 3.parameter e :  the \"else\" filter\n\u003c/li\u003e\u003cli\u003e returns : the resulting conditional filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [c]) -\u003e (a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#iff",
        "fct-type": "function",
        "title": "iff"
      },
      "index": {
        "description": "if then else lifted to filters parameter the predicate filter parameter the then filter parameter the else filter returns the resulting conditional filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "iff",
        "normalized": "(a-\u003e[b])-\u003e(a-\u003e[c])-\u003e(a-\u003e[c])-\u003ea-\u003e[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[c])-\u003e(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:insertChildrenAfter",
      "description": {
        "fct-descr": "\u003cp\u003einsertion of trees into the list of children after specific elements\n\u003c/p\u003e\u003cp\u003euseful for inserting something into the list of children of a node\n the list of children is split with the \u003ccode\u003espan\u003c/code\u003e function and the filter p as predicate\n the nodes are inserted between these two sublists\n\u003c/p\u003e\u003cp\u003eexamples: \u003ccode\u003einsertChildrenAfter none ins t\u003c/code\u003e inserts all elements computed with \u003ccode\u003eins t\u003c/code\u003e in front\n of the childen of \u003ccode\u003et\u003c/code\u003e, \u003ccode\u003einsertChildrenAfter this ins t\u003c/code\u003e appends the elements to the children\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003einsertChildrenAt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#insertChildrenAfter",
        "fct-type": "function",
        "title": "insertChildrenAfter"
      },
      "index": {
        "description": "insertion of trees into the list of children after specific elements useful for inserting something into the list of children of node the list of children is split with the span function and the filter as predicate the nodes are inserted between these two sublists examples insertChildrenAfter none ins inserts all elements computed with ins in front of the childen of insertChildrenAfter this ins appends the elements to the children see also insertChildrenAt",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "insertChildrenAfter",
        "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Children After",
        "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:insertChildrenAt",
      "description": {
        "fct-descr": "\u003cp\u003einsertion of trees into the list of children at a given position\n\u003c/p\u003e\u003cp\u003euseful for inserting something into the list of children at a given position\n the list of children is split with the \u003ccode\u003esplitAt\u003c/code\u003e function\n the nodes are inserted between these two sublists.\n\u003c/p\u003e\u003cp\u003eexamples: \u003ccode\u003einsertChildrenAt 0 ins t\u003c/code\u003e inserts all elements computed with \u003ccode\u003eins t\u003c/code\u003e in front\n of the childen of \u003ccode\u003et\u003c/code\u003e, \u003ccode\u003einsertChildrenAt 1 ins t\u003c/code\u003e behind the first child\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003einsertChildrenAfter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#insertChildrenAt",
        "fct-type": "function",
        "title": "insertChildrenAt"
      },
      "index": {
        "description": "insertion of trees into the list of children at given position useful for inserting something into the list of children at given position the list of children is split with the splitAt function the nodes are inserted between these two sublists examples insertChildrenAt ins inserts all elements computed with ins in front of the childen of insertChildrenAt ins behind the first child see also insertChildrenAfter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "insertChildrenAt",
        "normalized": "Int-\u003eTFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Children At",
        "signature": "Int-\u003eTFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:isOf",
      "description": {
        "fct-descr": "\u003cp\u003econversion from predicate function to filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate for testing the tree\n\u003c/li\u003e\u003cli\u003e returns : \u003ccode\u003e\u003ca\u003ethis\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e depending on the predicate\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e Bool) -\u003e a -\u003e [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#isOf",
        "fct-type": "function",
        "title": "isOf"
      },
      "index": {
        "description": "conversion from predicate function to filter parameter the predicate for testing the tree returns this or none depending on the predicate",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "isOf",
        "normalized": "(a-\u003eBool)-\u003ea-\u003e[a]",
        "package": "hxt-filter",
        "partial": "Of",
        "signature": "(a-\u003eBool)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:isOfNode",
      "description": {
        "fct-descr": "\u003cp\u003eselect filter, selects trees with node values with a specific property\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter p :  the predicate for testing the node value\n\u003c/li\u003e\u003cli\u003e returns : \u003ccode\u003e[]\u003c/code\u003e or \u003ccode\u003e[t]\u003c/code\u003e depending on \u003ccode\u003ep t\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ea special case of \u003ccode\u003e\u003ca\u003eisOf\u003c/a\u003e\u003c/code\u003e filter\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(node -\u003e Bool) -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#isOfNode",
        "fct-type": "function",
        "title": "isOfNode"
      },
      "index": {
        "description": "select filter selects trees with node values with specific property parameter the predicate for testing the node value returns or depending on special case of isOf filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "isOfNode",
        "normalized": "(a-\u003eBool)-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Of Node",
        "signature": "(node-\u003eBool)-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:liftMf",
      "description": {
        "fct-descr": "\u003cp\u003elift a filter to a monadic filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e filter\n\u003c/li\u003e\u003cli\u003e returns : the lifted monadic version\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e a -\u003e m [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#liftMf",
        "fct-type": "function",
        "title": "liftMf"
      },
      "index": {
        "description": "lift filter to monadic filter parameter the simple filter returns the lifted monadic version",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "liftMf",
        "normalized": "(a-\u003e[b])-\u003ea-\u003ec[b]",
        "package": "hxt-filter",
        "partial": "Mf",
        "signature": "(a-\u003e[b])-\u003ea-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:mkNTree",
      "description": {
        "fct-descr": "\u003cp\u003efilter for substituting an arbitray tree by a constant\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter t :  the result tree, the input tree is ignored\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "NTree node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#mkNTree",
        "fct-type": "function",
        "title": "mkNTree"
      },
      "index": {
        "description": "filter for substituting an arbitray tree by constant parameter the result tree the input tree is ignored returns the filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "mkNTree",
        "normalized": "NTree a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "NTree",
        "signature": "NTree node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:modifyChildren",
      "description": {
        "fct-descr": "\u003cp\u003efilter for editing the children\n\u003c/p\u003e\u003cp\u003eall children are processed with a filter mapping lists to lists,\n this enables not only elementwise editing by lifting a normal\n filter to a list filter with \u003ccode\u003e(f $$)\u003c/code\u003e (see '($$)') but also manipulation\n of the order of the elements, e.g. \u003ca\u003ereverse\u003c/a\u003e is an appropriate childen\n editing function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter csf :  the children editing function\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TSFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#modifyChildren",
        "fct-type": "function",
        "title": "modifyChildren"
      },
      "index": {
        "description": "filter for editing the children all children are processed with filter mapping lists to lists this enables not only elementwise editing by lifting normal filter to list filter with see but also manipulation of the order of the elements e.g reverse is an appropriate childen editing function parameter csf the children editing function returns the filter see also processChildren",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "modifyChildren",
        "normalized": "TSFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Children",
        "signature": "TSFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:modifyNode",
      "description": {
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(node -\u003e Maybe node) -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#modifyNode",
        "fct-type": "function",
        "title": "modifyNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "modifyNode",
        "normalized": "(a-\u003eMaybe a)-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Node",
        "signature": "(node-\u003eMaybe node)-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:modifyNode0",
      "description": {
        "fct-descr": "\u003cp\u003efilter for editing the node\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter nf :  the XNode editing funtion\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(node -\u003e node) -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#modifyNode0",
        "fct-type": "function",
        "title": "modifyNode0"
      },
      "index": {
        "description": "filter for editing the node parameter nf the XNode editing funtion returns the filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "modifyNode0",
        "normalized": "(a-\u003ea)-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Node",
        "signature": "(node-\u003enode)-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:multi",
      "description": {
        "fct-descr": "\u003cp\u003eprocess all nodes of the whole tree.\n\u003c/p\u003e\u003cp\u003ecan e.g. be used for finding all nodes of a specific kind\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#multi",
        "fct-type": "function",
        "title": "multi"
      },
      "index": {
        "description": "process all nodes of the whole tree can e.g be used for finding all nodes of specific kind",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "multi",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:neg",
      "description": {
        "fct-descr": "\u003cp\u003enegation lifted to filters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the predicate filter\n\u003c/li\u003e\u003cli\u003e returns : the filter, that succeeds, when f failed\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [c]) -\u003e a -\u003e [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#neg",
        "fct-type": "function",
        "title": "neg"
      },
      "index": {
        "description": "negation lifted to filters parameter the predicate filter returns the filter that succeeds when failed",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "neg",
        "normalized": "(a-\u003e[b])-\u003ea-\u003e[a]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[c])-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:none",
      "description": {
        "fct-descr": "\u003cp\u003ethe null filter, returns the empty list\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#none",
        "fct-type": "function",
        "title": "none"
      },
      "index": {
        "description": "the null filter returns the empty list",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "none",
        "normalized": "a-\u003e[b]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:noneM",
      "description": {
        "fct-descr": "\u003cp\u003ethe monadic version of the null filter none.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "a -\u003e m [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#noneM",
        "fct-type": "function",
        "title": "noneM"
      },
      "index": {
        "description": "the monadic version of the null filter none see also none",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "noneM",
        "normalized": "a-\u003eb[c]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "a-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:notContaining",
      "description": {
        "fct-descr": "\u003cp\u003epruning: keep only those results from f for which g does not hold\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003econtaining\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#notContaining",
        "fct-type": "function",
        "title": "notContaining"
      },
      "index": {
        "description": "pruning keep only those results from for which does not hold see also containing",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "notContaining",
        "normalized": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]",
        "package": "hxt-filter",
        "partial": "Containing",
        "signature": "(a-\u003e[b])-\u003e(b-\u003e[c])-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:o",
      "description": {
        "fct-descr": "\u003cp\u003esequential composition of filters, usually written in infix notation f2 \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e f1.\n\u003c/p\u003e\u003cp\u003efor predicate filter the logical AND\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f2 :  the 2. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter f1 :  the 1. filter\n\u003c/li\u003e\u003cli\u003e returns : the fiter applying first f1 to n and then f2 to the result (like function composition)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (c -\u003e [a]) -\u003e c -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#o",
        "fct-type": "function",
        "title": "o"
      },
      "index": {
        "description": "sequential composition of filters usually written in infix notation f2 f1 for predicate filter the logical AND parameter f2 the filter parameter f1 the filter returns the fiter applying first f1 to and then f2 to the result like function composition",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "o",
        "normalized": "(a-\u003e[b])-\u003e(c-\u003e[a])-\u003ec-\u003e[b]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003e(c-\u003e[a])-\u003ec-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003edirectional choice, usually written in infix notation as f \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e g\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the 1. filter\n\u003c/li\u003e\u003cli\u003e 2.parameter g :  the 2. filter\n\u003c/li\u003e\u003cli\u003e 3.parameter t :  the tree\n\u003c/li\u003e\u003cli\u003e returns : the filter, that applies f to t, if the result is not the empty list, the result is found, else g t is the result\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#orElse",
        "fct-type": "function",
        "title": "orElse"
      },
      "index": {
        "description": "directional choice usually written in infix notation as orElse parameter the filter parameter the filter parameter the tree returns the filter that applies to if the result is not the empty list the result is found else is the result",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "orElse",
        "normalized": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]",
        "package": "hxt-filter",
        "partial": "Else",
        "signature": "(a-\u003e[b])-\u003e(a-\u003e[b])-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:performAction",
      "description": {
        "fct-descr": "\u003cp\u003erun an arbitray command on a tree t and return the tree,\n used for inserting arbitray commands in a filter pipeline\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e 2.parameter t :  the argument tree\n\u003c/li\u003e\u003cli\u003e returns : the unchanged tree as a single element list\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e m b) -\u003e a -\u003e m [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#performAction",
        "fct-type": "function",
        "title": "performAction"
      },
      "index": {
        "description": "run an arbitray command on tree and return the tree used for inserting arbitray commands in filter pipeline parameter cmd the command parameter the argument tree returns the unchanged tree as single element list",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "performAction",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb[a]",
        "package": "hxt-filter",
        "partial": "Action",
        "signature": "(a-\u003em b)-\u003ea-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processBottomUp",
      "description": {
        "fct-descr": "\u003cp\u003ebottom up transformation\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e transforming filter\n\u003c/li\u003e\u003cli\u003e returns : the filter that applies f to all subtrees and the tree itself in a deepth first left to right manner\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessTopDown\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprocessBottomUpIfNot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processBottomUp",
        "fct-type": "function",
        "title": "processBottomUp"
      },
      "index": {
        "description": "bottom up transformation parameter the simple transforming filter returns the filter that applies to all subtrees and the tree itself in deepth first left to right manner see also processTopDown processBottomUpIfNot",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processBottomUp",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Bottom Up",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processBottomUpIfNot",
      "description": {
        "fct-descr": "\u003cp\u003eguarded bottom up transformation, stops at subtrees for which a predicate p holds\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the transforming filter\n\u003c/li\u003e\u003cli\u003e 2.parameter p :  the predicate filter for the guard\n\u003c/li\u003e\u003cli\u003e returns : the filter for processing all (sub-)trees\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processBottomUpIfNot",
        "fct-type": "function",
        "title": "processBottomUpIfNot"
      },
      "index": {
        "description": "guarded bottom up transformation stops at subtrees for which predicate holds parameter the transforming filter parameter the predicate filter for the guard returns the filter for processing all sub trees see also processBottomUp",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processBottomUpIfNot",
        "normalized": "TFilter a-\u003eTFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Bottom Up If Not",
        "signature": "TFilter node-\u003eTFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processBottomUpM",
      "description": {
        "fct-descr": "\u003cp\u003emonadic variant of \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(NTree node -\u003e m [NTree node]) -\u003e NTree node -\u003e m [NTree node]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processBottomUpM",
        "fct-type": "function",
        "title": "processBottomUpM"
      },
      "index": {
        "description": "monadic variant of processBottomUp",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processBottomUpM",
        "normalized": "(NTree a-\u003eb[NTree a])-\u003eNTree a-\u003eb[NTree a]",
        "package": "hxt-filter",
        "partial": "Bottom Up",
        "signature": "(NTree node-\u003em[NTree node])-\u003eNTree node-\u003em[NTree node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processChildren",
      "description": {
        "fct-descr": "\u003cp\u003eFilter for editing the children of a tree element wise\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cf :  the filter applied to the children\n\u003c/li\u003e\u003cli\u003e returns : the editing filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emodifyChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processChildren",
        "fct-type": "function",
        "title": "processChildren"
      },
      "index": {
        "description": "Filter for editing the children of tree element wise parameter cf the filter applied to the children returns the editing filter see also modifyChildren",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processChildren",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Children",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processChildrenM",
      "description": {
        "fct-descr": "\u003cp\u003eFilter for editing the children of a tree with a monadic filter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cf :  the monadic filter applied to the children\n\u003c/li\u003e\u003cli\u003e returns : the monadic editing filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(NTree node -\u003e m [NTree node]) -\u003e NTree node -\u003e m [NTree node]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processChildrenM",
        "fct-type": "function",
        "title": "processChildrenM"
      },
      "index": {
        "description": "Filter for editing the children of tree with monadic filter parameter cf the monadic filter applied to the children returns the monadic editing filter see also processChildren",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processChildrenM",
        "normalized": "(NTree a-\u003eb[NTree a])-\u003eNTree a-\u003eb[NTree a]",
        "package": "hxt-filter",
        "partial": "Children",
        "signature": "(NTree node-\u003em[NTree node])-\u003eNTree node-\u003em[NTree node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processTopDown",
      "description": {
        "fct-descr": "\u003cp\u003etop down transformation\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e transforming filter\n\u003c/li\u003e\u003cli\u003e returns : the filter that applies f first to the tree and then recursively to all subtrees of the result\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processTopDown",
        "fct-type": "function",
        "title": "processTopDown"
      },
      "index": {
        "description": "top down transformation parameter the simple transforming filter returns the filter that applies first to the tree and then recursively to all subtrees of the result see also processBottomUp",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processTopDown",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Top Down",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processTopDownM",
      "description": {
        "fct-descr": "\u003cp\u003emonadic variant of \u003ccode\u003e\u003ca\u003eprocessTopDown\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(NTree node -\u003e m [NTree node]) -\u003e NTree node -\u003e m [NTree node]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processTopDownM",
        "fct-type": "function",
        "title": "processTopDownM"
      },
      "index": {
        "description": "monadic variant of processTopDown",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processTopDownM",
        "normalized": "(NTree a-\u003eb[NTree a])-\u003eNTree a-\u003eb[NTree a]",
        "package": "hxt-filter",
        "partial": "Top Down",
        "signature": "(NTree node-\u003em[NTree node])-\u003eNTree node-\u003em[NTree node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:processTopDownUntil",
      "description": {
        "fct-descr": "\u003cp\u003etop down transformation until a node to be transformed is found\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the \u003cem\u003esimple\u003c/em\u003e transforming filter\n\u003c/li\u003e\u003cli\u003e returns : the filter that applies f first to the tree and, if the filter does not succeed,\n\t\t  recursively to all children of the input tree.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eprocessTopDownUntil none\u003c/pre\u003e\u003cp\u003eis the identity filter (maybe a bit more inefficient).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eprocessTopDownUntil (add1Attr \"border\" \"2\" `containing` isTag \"table\")\u003c/pre\u003e\u003cp\u003eis a filter for adding an attribute border=\"2\" in all top level table tags.\n\t\t  The content of table tags will remain unchanged.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessTopDown\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprocessBottomUp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#processTopDownUntil",
        "fct-type": "function",
        "title": "processTopDownUntil"
      },
      "index": {
        "description": "top down transformation until node to be transformed is found parameter the simple transforming filter returns the filter that applies first to the tree and if the filter does not succeed recursively to all children of the input tree Example processTopDownUntil none is the identity filter maybe bit more inefficient Example processTopDownUntil add1Attr border containing isTag table is filter for adding an attribute border in all top level table tags The content of table tags will remain unchanged see also processTopDown processBottomUp",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "processTopDownUntil",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Top Down Until",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:replaceChildren",
      "description": {
        "fct-descr": "\u003cp\u003efilter for replacing the children\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cs :  cs the list of children\n\u003c/li\u003e\u003cli\u003e returns : the filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "NTrees node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#replaceChildren",
        "fct-type": "function",
        "title": "replaceChildren"
      },
      "index": {
        "description": "filter for replacing the children parameter cs cs the list of children returns the filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "replaceChildren",
        "normalized": "NTrees a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Children",
        "signature": "NTrees node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:replaceNode",
      "description": {
        "fct-descr": "\u003cp\u003efilter for replacing the node\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the new node\n\u003c/li\u003e\u003cli\u003e returns : the editing filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#replaceNode",
        "fct-type": "function",
        "title": "replaceNode"
      },
      "index": {
        "description": "filter for replacing the node parameter the new node returns the editing filter",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "replaceNode",
        "normalized": "a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Node",
        "signature": "node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:satisfies",
      "description": {
        "fct-descr": "\u003cp\u003esatisfies converts a result of a predicate filter into a boolean\n\u003c/p\u003e\u003cp\u003eis a shortcut for not . null\n\u003c/p\u003e\u003cp\u003etypical use in guards or ifs: \u003ccode\u003eif (satisfies f) t then ... else ... \u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the predicate filter\n\u003c/li\u003e\u003cli\u003e 2.parameter t :  the tree to be tested\n\u003c/li\u003e\u003cli\u003e returns : \u003ccode\u003eb = not (null (f t))\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b]) -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Tree-NTree-Filter.html#satisfies",
        "fct-type": "function",
        "title": "satisfies"
      },
      "index": {
        "description": "satisfies converts result of predicate filter into boolean is shortcut for not null typical use in guards or ifs if satisfies then else parameter the predicate filter parameter the tree to be tested returns not null",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "satisfies",
        "normalized": "(a-\u003e[b])-\u003ea-\u003eBool",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:seqF",
      "description": {
        "fct-descr": "\u003cp\u003eapply a list of filters sequentially with '(.\u003e)', for predicate filters the generalized AND\n\u003c/p\u003e\u003cp\u003esee also : '(.\u003e)'\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "[a -\u003e [a]] -\u003e a -\u003e [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#seqF",
        "fct-type": "function",
        "title": "seqF"
      },
      "index": {
        "description": "apply list of filters sequentially with for predicate filters the generalized AND see also",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "seqF",
        "normalized": "[a-\u003e[a]]-\u003ea-\u003e[a]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "[a-\u003e[a]]-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:seqM",
      "description": {
        "fct-descr": "\u003cp\u003egeneralized sequential composition of monadic filters\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "[a -\u003e m [a]] -\u003e a -\u003e m [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#seqM",
        "fct-type": "function",
        "title": "seqM"
      },
      "index": {
        "description": "generalized sequential composition of monadic filters",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "seqM",
        "normalized": "[a-\u003eb[a]]-\u003ea-\u003eb[a]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "[a-\u003em[a]]-\u003ea-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:substChildren",
      "description": {
        "fct-descr": "\u003cp\u003efilter for substituting the children of a tree by\n a new list of childen computed by applying a filter to the input tree.\n \u003ccode\u003e\u003ca\u003emodifyChildren\u003c/a\u003e\u003c/code\u003e can be expressed by \u003ccode\u003e\u003ca\u003esubstChildren\u003c/a\u003e\u003c/code\u003e:\n \u003ccode\u003emodifyChildren f t\u003c/code\u003e is equal to \u003ccode\u003esubstChildren (f . getChildren)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "TFilter node -\u003e TFilter node",
        "fct-source": "src/Data-Tree-NTree-Filter.html#substChildren",
        "fct-type": "function",
        "title": "substChildren"
      },
      "index": {
        "description": "filter for substituting the children of tree by new list of childen computed by applying filter to the input tree modifyChildren can be expressed by substChildren modifyChildren is equal to substChildren getChildren",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "substChildren",
        "normalized": "TFilter a-\u003eTFilter a",
        "package": "hxt-filter",
        "partial": "Children",
        "signature": "TFilter node-\u003eTFilter node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:this",
      "description": {
        "fct-descr": "\u003cp\u003ethe unit filter, returns the single element list containing the argument\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#this",
        "fct-type": "function",
        "title": "this"
      },
      "index": {
        "description": "the unit filter returns the single element list containing the argument",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "this",
        "normalized": "a-\u003e[a]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:thisM",
      "description": {
        "fct-descr": "\u003cp\u003ethe monadic version of the identity filter this.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ethis\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "a -\u003e m [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#thisM",
        "fct-type": "function",
        "title": "thisM"
      },
      "index": {
        "description": "the monadic version of the identity filter this see also this",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "thisM",
        "normalized": "a-\u003eb[a]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003ewhen the predicate p holds, f is applied, else the identity filter this\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the conditinally applied filter\n\u003c/li\u003e\u003cli\u003e 2.parameter p :  the predicate\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNot\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguards\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [a]) -\u003e (a -\u003e [a]) -\u003e a -\u003e [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "when the predicate holds is applied else the identity filter this parameter the conditinally applied filter parameter the predicate returns the conditional filter see also iff whenNot guards whenM",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "when",
        "normalized": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:whenM",
      "description": {
        "fct-descr": "\u003cp\u003ewhen the predicate p holds, the monadic filter f is applied, else the identity filter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the conditinally applied monadic filter\n\u003c/li\u003e\u003cli\u003e 2.parameter p :  the simple predicate\n\u003c/li\u003e\u003cli\u003e returns : the conditional filter\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eguardsM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNotM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e m [a]) -\u003e (a -\u003e [b]) -\u003e a -\u003e m [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#whenM",
        "fct-type": "function",
        "title": "whenM"
      },
      "index": {
        "description": "when the predicate holds the monadic filter is applied else the identity filter parameter the conditinally applied monadic filter parameter the simple predicate returns the conditional filter see also ifM when guardsM whenNotM",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "whenM",
        "normalized": "(a-\u003eb[a])-\u003e(a-\u003e[c])-\u003ea-\u003eb[a]",
        "package": "hxt-filter",
        "partial": "",
        "signature": "(a-\u003em[a])-\u003e(a-\u003e[b])-\u003ea-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:whenNot",
      "description": {
        "fct-descr": "\u003cp\u003ethe complementary filter of when\n\u003c/p\u003e\u003cp\u003eshortcut for f \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e neg g\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNotM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eneg\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [a]) -\u003e (a -\u003e [a]) -\u003e a -\u003e [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#whenNot",
        "fct-type": "function",
        "title": "whenNot"
      },
      "index": {
        "description": "the complementary filter of when shortcut for when neg see also iff when whenNotM neg",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "whenNot",
        "normalized": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]",
        "package": "hxt-filter",
        "partial": "Not",
        "signature": "(a-\u003e[a])-\u003e(a-\u003e[a])-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Data-Tree-NTree-Filter.html#v:whenNotM",
      "description": {
        "fct-descr": "\u003cp\u003ethe complementary filter of whenM.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhenNot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tree.NTree.Filter",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e m [a]) -\u003e (a -\u003e [b]) -\u003e a -\u003e m [a]",
        "fct-source": "src/Data-Tree-NTree-Filter.html#whenNotM",
        "fct-type": "function",
        "title": "whenNotM"
      },
      "index": {
        "description": "the complementary filter of whenM see also ifM whenM whenNot",
        "hierarchy": "Data Tree NTree Filter",
        "module": "Data.Tree.NTree.Filter",
        "name": "whenNotM",
        "normalized": "(a-\u003eb[a])-\u003e(a-\u003e[c])-\u003ea-\u003eb[a]",
        "package": "hxt-filter",
        "partial": "Not",
        "signature": "(a-\u003em[a])-\u003e(a-\u003e[b])-\u003ea-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/System-PipeOpen.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : $Id: PipeOpen.hs,v 1.2 2005\u003cem\u003e09\u003c/em\u003e02 17:09:39 hxml Exp $\n\u003c/p\u003e\u003cp\u003epipe open implemented with System.Process functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.PipeOpen",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/System-PipeOpen.html",
        "fct-type": "module",
        "title": "PipeOpen"
      },
      "index": {
        "description": "Version Id PipeOpen.hs hxml Exp pipe open implemented with System.Process functions",
        "hierarchy": "System PipeOpen",
        "module": "System.PipeOpen",
        "name": "PipeOpen",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Pipe Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/System-PipeOpen.html#v:popen",
      "description": {
        "fct-descr": "\u003cp\u003ecall an external program with a list of command line arguments\n and return content of stdout, content of stderr and return code\n\u003c/p\u003e",
        "fct-module": "System.PipeOpen",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e [String] -\u003e IO (String, String, Int)",
        "fct-source": "src/System-PipeOpen.html#popen",
        "fct-type": "function",
        "title": "popen"
      },
      "index": {
        "description": "call an external program with list of command line arguments and return content of stdout content of stderr and return code",
        "hierarchy": "System PipeOpen",
        "module": "System.PipeOpen",
        "name": "popen",
        "normalized": "String-\u003e[String]-\u003eIO(String,String,Int)",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003e[String]-\u003eIO(String,String,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXML editing filters\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html",
        "fct-type": "module",
        "title": "EditFilters"
      },
      "index": {
        "description": "XML editing filters",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "EditFilters",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Edit Filters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:addHeadlineToXmlDoc",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#addHeadlineToXmlDoc",
        "fct-type": "function",
        "title": "addHeadlineToXmlDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "addHeadlineToXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Headline To Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:addXmlPiToDoc",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#addXmlPiToDoc",
        "fct-type": "function",
        "title": "addXmlPiToDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "addXmlPiToDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Pi To Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:canonicalizeAllNodes",
      "description": {
        "fct-descr": "\u003cp\u003ecanonicalize tree and remove comments and \u003c?xml ... ?\u003e declarations\n\u003c/p\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalizeTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#canonicalizeAllNodes",
        "fct-type": "function",
        "title": "canonicalizeAllNodes"
      },
      "index": {
        "description": "canonicalize tree and remove comments and xml declarations see canonicalizeTree",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "canonicalizeAllNodes",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "All Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:canonicalizeForXPath",
      "description": {
        "fct-descr": "\u003cp\u003eCanonicalize a tree for XPath\n Comment nodes are not removed\n\u003c/p\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalizeTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#canonicalizeForXPath",
        "fct-type": "function",
        "title": "canonicalizeForXPath"
      },
      "index": {
        "description": "Canonicalize tree for XPath Comment nodes are not removed see canonicalizeTree",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "canonicalizeForXPath",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "For XPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:canonicalizeTree",
      "description": {
        "fct-descr": "\u003cp\u003eApplies some \u003ca\u003eCanonical XML\u003c/a\u003e rules to the nodes of a tree.\n\u003c/p\u003e\u003cp\u003eThe rule differ slightly for canonical XML and XPath in handling of comments\n\u003c/p\u003e\u003cp\u003eNote: This is not the whole canonicalization as it is specified by the W3C\n Recommendation. Adding attribute defaults or sorting attributes in lexicographic\n order is done by the \u003ccode\u003etransform\u003c/code\u003e function of module \u003ccode\u003eText.XML.HXT.Validator.Validation\u003c/code\u003e.\n Replacing entities or line feed normalization is done by the parser.\n\u003c/p\u003e\u003cp\u003eNot implemented yet:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Whitespace within start and end tags is normalized\n\u003c/li\u003e\u003cli\u003e Special characters in attribute values and character content are replaced by character references\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalizeAllNodes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecanonicalizeForXPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#canonicalizeTree",
        "fct-type": "function",
        "title": "canonicalizeTree"
      },
      "index": {
        "description": "Applies some Canonical XML rules to the nodes of tree The rule differ slightly for canonical XML and XPath in handling of comments Note This is not the whole canonicalization as it is specified by the W3C Recommendation Adding attribute defaults or sorting attributes in lexicographic order is done by the transform function of module Text.XML.HXT.Validator.Validation Replacing entities or line feed normalization is done by the parser Not implemented yet Whitespace within start and end tags is normalized Special characters in attribute values and character content are replaced by character references see canonicalizeAllNodes and canonicalizeForXPath",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "canonicalizeTree",
        "normalized": "XmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Tree",
        "signature": "XmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:collapseAllXText",
      "description": {
        "fct-descr": "\u003cp\u003eApplies collapseXText recursively.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ecollapseXText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#collapseAllXText",
        "fct-type": "function",
        "title": "collapseAllXText"
      },
      "index": {
        "description": "Applies collapseXText recursively see also collapseXText",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "collapseAllXText",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "All XText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:collapseXText",
      "description": {
        "fct-descr": "\u003cp\u003eCollects sequences of child XText nodes into one XText node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#collapseXText",
        "fct-type": "function",
        "title": "collapseXText"
      },
      "index": {
        "description": "Collects sequences of child XText nodes into one XText node",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "collapseXText",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:escapeXmlAttrValue",
      "description": {
        "fct-descr": "\u003cp\u003econvert the special XML chars in an attribute value into\n charachter references. Not only the XML specials but also \\n, \\r and \\t are converted\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eescapeXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eescapeXmlText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#escapeXmlAttrValue",
        "fct-type": "function",
        "title": "escapeXmlAttrValue"
      },
      "index": {
        "description": "convert the special XML chars in an attribute value into charachter references Not only the XML specials but also and are converted see also escapeXmlDoc escapeXmlText",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "escapeXmlAttrValue",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Attr Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:escapeXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003econvert the special XML chars \", \u003c, \u003e, & and ' in a document to char references,\n attribute values are converted with \u003ccode\u003e\u003ca\u003eescapeXmlAttrValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eescapeXmlText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eescapeXmlAttrValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#escapeXmlDoc",
        "fct-type": "function",
        "title": "escapeXmlDoc"
      },
      "index": {
        "description": "convert the special XML chars and in document to char references attribute values are converted with escapeXmlAttrValue see also escapeXmlText escapeXmlAttrValue",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "escapeXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:escapeXmlText",
      "description": {
        "fct-descr": "\u003cp\u003econvert the special XML chars in a text or comment node\n into character references\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003eescapeXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#escapeXmlText",
        "fct-type": "function",
        "title": "escapeXmlText"
      },
      "index": {
        "description": "convert the special XML chars in text or comment node into character references see also escapeXmlDoc",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "escapeXmlText",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:haskellRepOfXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003econvert a document into a Haskell representation (with show).\n\u003c/p\u003e\u003cp\u003eUseful for debugging and trace output.\n see also : \u003ccode\u003e\u003ca\u003etreeRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enumberLinesInXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#haskellRepOfXmlDoc",
        "fct-type": "function",
        "title": "haskellRepOfXmlDoc"
      },
      "index": {
        "description": "convert document into Haskell representation with show Useful for debugging and trace output see also treeRepOfXmlDoc numberLinesInXmlDoc",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "haskellRepOfXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Rep Of Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:indentDoc",
      "description": {
        "fct-descr": "\u003cp\u003efilter for indenting a document tree for pretty printing.\n\u003c/p\u003e\u003cp\u003ethe tree is traversed for inserting whitespace for tag indentation.\n\u003c/p\u003e\u003cp\u003ewhitespace is only inserted or changed at places, where it isn't significant,\n is's not inserted between tags and text containing non whitespace chars.\n\u003c/p\u003e\u003cp\u003ewhitespace is only inserted or changed at places, where it's not significant.\n preserving whitespace may be controlled in a document tree\n by a tag attribute \u003ccode\u003exml:space\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eallowed values for this attribute are \u003ccode\u003edefault | preserve\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003einput is a complete document tree.\n result the semantically equivalent formatted tree.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eremoveDocWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#indentDoc",
        "fct-type": "function",
        "title": "indentDoc"
      },
      "index": {
        "description": "filter for indenting document tree for pretty printing the tree is traversed for inserting whitespace for tag indentation whitespace is only inserted or changed at places where it isn significant is not inserted between tags and text containing non whitespace chars whitespace is only inserted or changed at places where it not significant preserving whitespace may be controlled in document tree by tag attribute xml space allowed values for this attribute are default preserve input is complete document tree result the semantically equivalent formatted tree see also removeDocWhiteSpace",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "indentDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:numberLines",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#numberLines",
        "fct-type": "function",
        "title": "numberLines"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "numberLines",
        "normalized": "String-\u003eString",
        "package": "hxt-filter",
        "partial": "Lines",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:numberLinesInXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003econvert a document into a text and add line numbers to the text representation.\n\u003c/p\u003e\u003cp\u003eResult is a root node with a single text node as child.\n Useful for debugging and trace output.\n see also : \u003ccode\u003e\u003ca\u003ehaskellRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etreeRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#numberLinesInXmlDoc",
        "fct-type": "function",
        "title": "numberLinesInXmlDoc"
      },
      "index": {
        "description": "convert document into text and add line numbers to the text representation Result is root node with single text node as child Useful for debugging and trace output see also haskellRepOfXmlDoc treeRepOfXmlDoc",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "numberLinesInXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Lines In Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeAllComment",
      "description": {
        "fct-descr": "\u003cp\u003eremove all Comments recursively\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#removeAllComment",
        "fct-type": "function",
        "title": "removeAllComment"
      },
      "index": {
        "description": "remove all Comments recursively",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "removeAllComment",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "All Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeAllWhiteSpace",
      "description": {
        "fct-descr": "\u003cp\u003esimple recursive filter for removing all whitespace.\n\u003c/p\u003e\u003cp\u003eremoves all text nodes in a tree that consist only of whitespace.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eremoveWhiteSpace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveDocWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#removeAllWhiteSpace",
        "fct-type": "function",
        "title": "removeAllWhiteSpace"
      },
      "index": {
        "description": "simple recursive filter for removing all whitespace removes all text nodes in tree that consist only of whitespace see also removeWhiteSpace removeDocWhiteSpace",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "removeAllWhiteSpace",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "All White Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeComment",
      "description": {
        "fct-descr": "\u003cp\u003eremove Comments\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#removeComment",
        "fct-type": "function",
        "title": "removeComment"
      },
      "index": {
        "description": "remove Comments",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "removeComment",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeDocWhiteSpace",
      "description": {
        "fct-descr": "\u003cp\u003efilter for removing all not significant whitespace.\n\u003c/p\u003e\u003cp\u003ethe tree traversed for removing whitespace between tags,\n that was inserted for indentation and readability.\n whitespace is only removed at places, where it's not significat\n preserving whitespace may be controlled in a document tree\n by a tag attribute \u003ccode\u003exml:space\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eallowed values for this attribute are \u003ccode\u003edefault | preserve\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003einput is root node of the document to be cleaned up\n output the semantically equivalent simplified tree\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eindentDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveAllWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#removeDocWhiteSpace",
        "fct-type": "function",
        "title": "removeDocWhiteSpace"
      },
      "index": {
        "description": "filter for removing all not significant whitespace the tree traversed for removing whitespace between tags that was inserted for indentation and readability whitespace is only removed at places where it not significat preserving whitespace may be controlled in document tree by tag attribute xml space allowed values for this attribute are default preserve input is root node of the document to be cleaned up output the semantically equivalent simplified tree see also indentDoc removeAllWhiteSpace",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "removeDocWhiteSpace",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doc White Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:removeWhiteSpace",
      "description": {
        "fct-descr": "\u003cp\u003esimple filter for removing whitespace.\n\u003c/p\u003e\u003cp\u003eno check on sigificant whitespace is done.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eremoveAllWhiteSpace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveDocWhiteSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#removeWhiteSpace",
        "fct-type": "function",
        "title": "removeWhiteSpace"
      },
      "index": {
        "description": "simple filter for removing whitespace no check on sigificant whitespace is done see also removeAllWhiteSpace removeDocWhiteSpace",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "removeWhiteSpace",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "White Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfAllCdata",
      "description": {
        "fct-descr": "\u003cp\u003econverts CDATA sections in whole document tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#transfAllCdata",
        "fct-type": "function",
        "title": "transfAllCdata"
      },
      "index": {
        "description": "converts CDATA sections in whole document tree",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "transfAllCdata",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "All Cdata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfAllCdataEscaped",
      "description": {
        "fct-descr": "\u003cp\u003econverts CDATA sections in whole document tree into normal text nodes\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#transfAllCdataEscaped",
        "fct-type": "function",
        "title": "transfAllCdataEscaped"
      },
      "index": {
        "description": "converts CDATA sections in whole document tree into normal text nodes",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "transfAllCdataEscaped",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "All Cdata Escaped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfAllCharRef",
      "description": {
        "fct-descr": "\u003cp\u003erecursively converts all character references to normal text\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#transfAllCharRef",
        "fct-type": "function",
        "title": "transfAllCharRef"
      },
      "index": {
        "description": "recursively converts all character references to normal text",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "transfAllCharRef",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "All Char Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfCdata",
      "description": {
        "fct-descr": "\u003cp\u003econverts CDATA section in normal text sections\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#transfCdata",
        "fct-type": "function",
        "title": "transfCdata"
      },
      "index": {
        "description": "converts CDATA section in normal text sections",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "transfCdata",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Cdata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfCdataEscaped",
      "description": {
        "fct-descr": "\u003cp\u003econverts CDATA section in normal text nodes\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#transfCdataEscaped",
        "fct-type": "function",
        "title": "transfCdataEscaped"
      },
      "index": {
        "description": "converts CDATA section in normal text nodes",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "transfCdataEscaped",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Cdata Escaped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:transfCharRef",
      "description": {
        "fct-descr": "\u003cp\u003econverts character references to normal text\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#transfCharRef",
        "fct-type": "function",
        "title": "transfCharRef"
      },
      "index": {
        "description": "converts character references to normal text",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "transfCharRef",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Char Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:treeRepOfXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003econvert a document into a text representation in tree form.\n\u003c/p\u003e\u003cp\u003eUseful for debugging and trace output.\n see also : \u003ccode\u003e\u003ca\u003ehaskellRepOfXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enumberLinesInXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#treeRepOfXmlDoc",
        "fct-type": "function",
        "title": "treeRepOfXmlDoc"
      },
      "index": {
        "description": "convert document into text representation in tree form Useful for debugging and trace output see also haskellRepOfXmlDoc numberLinesInXmlDoc",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "treeRepOfXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Rep Of Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-EditFilters.html#v:unparseXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003econvert a document tree into an output string representation\n with respect to the output encoding.\n\u003c/p\u003e\u003cp\u003eThe children of the document root are stubstituted by\n a single text node for the text representation of the document.\n\u003c/p\u003e\u003cp\u003eEncoding of the document is performed with respect\n to the \u003ccode\u003eoutput-encoding\u003c/code\u003e attribute in the root node, or if not present,\n of the \u003ccode\u003eencoding\u003c/code\u003e attribute for the original input encoding.\n If the encoding is not specified or not supported, UTF-8 is taken.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.EditFilters",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-EditFilters.html#unparseXmlDoc",
        "fct-type": "function",
        "title": "unparseXmlDoc"
      },
      "index": {
        "description": "convert document tree into an output string representation with respect to the output encoding The children of the document root are stubstituted by single text node for the text representation of the document Encoding of the document is performed with respect to the output-encoding attribute in the root node or if not present of the encoding attribute for the original input encoding If the encoding is not specified or not supported UTF-8 is taken",
        "hierarchy": "Text XML HXT DOM EditFilters",
        "module": "Text.XML.HXT.DOM.EditFilters",
        "name": "unparseXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-Namespace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emain namespace filter for propagation, checking, tracing and error handling\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.Namespace",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-Namespace.html",
        "fct-type": "module",
        "title": "Namespace"
      },
      "index": {
        "description": "main namespace filter for propagation checking tracing and error handling",
        "hierarchy": "Text XML HXT DOM Namespace",
        "module": "Text.XML.HXT.DOM.Namespace",
        "name": "Namespace",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-Namespace.html#v:propagateAndValidateNamespaces",
      "description": {
        "fct-descr": "\u003cp\u003epropagate all namespace declarations, check namespace constraints and issue errors.\n If no error was found, result is the unchanged input tree, else the root node \"/\" with an empty document is returned.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evalidateNamespaces\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.Namespace",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-DOM-Namespace.html#propagateAndValidateNamespaces",
        "fct-type": "function",
        "title": "propagateAndValidateNamespaces"
      },
      "index": {
        "description": "propagate all namespace declarations check namespace constraints and issue errors If no error was found result is the unchanged input tree else the root node with an empty document is returned see also propagateNamespaces validateNamespaces",
        "hierarchy": "Text XML HXT DOM Namespace",
        "module": "Text.XML.HXT.DOM.Namespace",
        "name": "propagateAndValidateNamespaces",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "And Validate Namespaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNamespace filter\n\u003c/p\u003e\u003cp\u003eNamespaces are processed with two main filter, \u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003evalidateNamespaces\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e takes a XML tree and\n attaches extra namespace info at every tag name and attribute name.\n So after processing a tree with \u003ccode\u003e\u003ca\u003epropagateNamespaces\u003c/a\u003e\u003c/code\u003e, the access functions\n \u003ca\u003enamespaceOf\u003c/a\u003e and \u003ca\u003euniversalNameOf\u003c/a\u003e deliver the associated namespace (or \"\")\n for tag names and attribute names.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003evalidateNamespaces\u003c/a\u003e\u003c/code\u003e checks whether names are wellformed related to the XML namespace definition.\n whether a legal namespace is declared for all prefixes, and whether attribute names are unique\n related to universal names.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.NamespaceFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-NamespaceFilter.html",
        "fct-type": "module",
        "title": "NamespaceFilter"
      },
      "index": {
        "description": "Namespace filter Namespaces are processed with two main filter propagateNamespaces and validateNamespaces propagateNamespaces takes XML tree and attaches extra namespace info at every tag name and attribute name So after processing tree with propagateNamespaces the access functions namespaceOf and universalNameOf deliver the associated namespace or for tag names and attribute names validateNamespaces checks whether names are wellformed related to the XML namespace definition whether legal namespace is declared for all prefixes and whether attribute names are unique related to universal names",
        "hierarchy": "Text XML HXT DOM NamespaceFilter",
        "module": "Text.XML.HXT.DOM.NamespaceFilter",
        "name": "NamespaceFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Namespace Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#t:NamespaceTable",
      "description": {
        "fct-descr": "\u003cp\u003eType for the namespace association list, used when propagating namespaces by\n modifying the \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003e values in a tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.NamespaceFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#NamespaceTable",
        "fct-type": "type",
        "title": "NamespaceTable"
      },
      "index": {
        "description": "Type for the namespace association list used when propagating namespaces by modifying the QName values in tree",
        "hierarchy": "Text XML HXT DOM NamespaceFilter",
        "module": "Text.XML.HXT.DOM.NamespaceFilter",
        "name": "NamespaceTable",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Namespace Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:isNamespaceDecl",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.NamespaceFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#isNamespaceDecl",
        "fct-type": "function",
        "title": "isNamespaceDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM NamespaceFilter",
        "module": "Text.XML.HXT.DOM.NamespaceFilter",
        "name": "isNamespaceDecl",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Namespace Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:propagateNamespaceEnv",
      "description": {
        "fct-descr": "\u003cp\u003eattaches the namespace info given by the namespace table\n to a tag node and its attributes and children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.NamespaceFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "NamespaceTable -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#propagateNamespaceEnv",
        "fct-type": "function",
        "title": "propagateNamespaceEnv"
      },
      "index": {
        "description": "attaches the namespace info given by the namespace table to tag node and its attributes and children",
        "hierarchy": "Text XML HXT DOM NamespaceFilter",
        "module": "Text.XML.HXT.DOM.NamespaceFilter",
        "name": "propagateNamespaceEnv",
        "normalized": "NamespaceTable-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Namespace Env",
        "signature": "NamespaceTable-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:propagateNamespaces",
      "description": {
        "fct-descr": "\u003cp\u003epropagate all namespace declarations \"xmlns:ns=...\" to all\n tag and attribute nodes of a document.\n\u003c/p\u003e\u003cp\u003eThis filter does not check for illegal use of namespaces.\n The real work is done by \u003ccode\u003e\u003ca\u003epropagateNamespaceEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe filter may be applied repeatedly if neccessary.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.NamespaceFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#propagateNamespaces",
        "fct-type": "function",
        "title": "propagateNamespaces"
      },
      "index": {
        "description": "propagate all namespace declarations xmlns ns to all tag and attribute nodes of document This filter does not check for illegal use of namespaces The real work is done by propagateNamespaceEnv The filter may be applied repeatedly if neccessary",
        "hierarchy": "Text XML HXT DOM NamespaceFilter",
        "module": "Text.XML.HXT.DOM.NamespaceFilter",
        "name": "propagateNamespaces",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Namespaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:validate1Namespaces",
      "description": {
        "fct-descr": "\u003cp\u003ea single node for namespace constrains.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.NamespaceFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#validate1Namespaces",
        "fct-type": "function",
        "title": "validate1Namespaces"
      },
      "index": {
        "description": "single node for namespace constrains",
        "hierarchy": "Text XML HXT DOM NamespaceFilter",
        "module": "Text.XML.HXT.DOM.NamespaceFilter",
        "name": "validate1Namespaces",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Namespaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-NamespaceFilter.html#v:validateNamespaces",
      "description": {
        "fct-descr": "\u003cp\u003evalidate the namespace constraints in a whole tree.\n result is the list of errors concerning namespaces.\n Work is done by applying \u003ccode\u003e\u003ca\u003evalidate1Namespaces\u003c/a\u003e\u003c/code\u003e to all nodes.\n Predicates \u003ccode\u003e\u003ca\u003eisWellformedQName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisWellformedQualifiedName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisDeclaredNamespace\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eisWellformedNSDecl\u003c/a\u003e\u003c/code\u003e are applied to the appropriate tags and attributes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.NamespaceFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-NamespaceFilter.html#validateNamespaces",
        "fct-type": "function",
        "title": "validateNamespaces"
      },
      "index": {
        "description": "validate the namespace constraints in whole tree result is the list of errors concerning namespaces Work is done by applying validate1Namespaces to all nodes Predicates isWellformedQName isWellformedQualifiedName isDeclaredNamespace and isWellformedNSDecl are applied to the appropriate tags and attributes",
        "hierarchy": "Text XML HXT DOM NamespaceFilter",
        "module": "Text.XML.HXT.DOM.NamespaceFilter",
        "name": "validateNamespaces",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Namespaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a Monad for an internal state and IO commands.\n The state consists of two parts, the user state and the system state\n user state ist a type parameter, the system state is a list\n name-value pair. If the user state is not needed, the type parameter\n can be instantiated with \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFurthermore there are types for Xml filter working on this monad\n and functions for manipulating the state components\n and for lifting i/o commands and XmlFilter to monad filters.\n\u003c/p\u003e\u003cp\u003eError reporting functions are also located in this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html",
        "fct-type": "module",
        "title": "XmlState"
      },
      "index": {
        "description": "This module provides Monad for an internal state and IO commands The state consists of two parts the user state and the system state user state ist type parameter the system state is list name-value pair If the user state is not needed the type parameter can be instantiated with Furthermore there are types for Xml filter working on this monad and functions for manipulating the state components and for lifting commands and XmlFilter to monad filters Error reporting functions are also located in this module",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "XmlState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:SysState",
      "description": {
        "fct-descr": "\u003cp\u003eThe internal system state consists of a list of name-value pairs\n of type \u003ccode\u003e(String, XmlTrees)\u003c/code\u003e, so arbitrary lists of trees can be stored.\n For options, often only strings are used as values, so a set of access\n functions with string values is available\n The error handling method can be controlled by an error handler filter,\n the default filter issues the errors on stderr\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
        "fct-type": "data",
        "title": "SysState"
      },
      "index": {
        "description": "The internal system state consists of list of name-value pairs of type String XmlTrees so arbitrary lists of trees can be stored For options often only strings are used as values so set of access functions with string values is available The error handling method can be controlled by an error handler filter the default filter issues the errors on stderr",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "SysState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Sys State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:SysStateAttrs",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#SysStateAttrs",
        "fct-type": "type",
        "title": "SysStateAttrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "SysStateAttrs",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Sys State Attrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:XState",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad type for commands. It is an instance of \u003ca\u003eStateIO\u003c/a\u003e from the\n general module \u003ca\u003eControl.Monad.MonadStateIO\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#XState",
        "fct-type": "type",
        "title": "XState"
      },
      "index": {
        "description": "The monad type for commands It is an instance of StateIO from the general module Control.Monad.MonadStateIO",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "XState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:XmlState",
      "description": {
        "fct-descr": "\u003cp\u003eThe State has a system and a user part\n the user state is a type parameter\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
        "fct-type": "data",
        "title": "XmlState"
      },
      "index": {
        "description": "The State has system and user part the user state is type parameter",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "XmlState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#t:XmlStateFilter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ca\u003eXmlFilter\u003c/a\u003e type for filters working on a state\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#XmlStateFilter",
        "fct-type": "type",
        "title": "XmlStateFilter"
      },
      "index": {
        "description": "The XmlFilter type for filters working on state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "XmlStateFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml State Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:SysState",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "SysState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
        "fct-type": "function",
        "title": "SysState"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "SysState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Sys State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:XmlState",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
        "fct-type": "function",
        "title": "XmlState"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "XmlState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:addFatal",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#addFatal",
        "fct-type": "function",
        "title": "addFatal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "addFatal",
        "normalized": "String-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Fatal",
        "signature": "String-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:chain",
      "description": {
        "fct-descr": "\u003cp\u003elike chain' but forget the final user state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter initialUserState :  the initial user state\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e returns : only the result of executing cmd\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "state1 -\u003e XState state1 res -\u003e XState state0 res",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#chain",
        "fct-type": "function",
        "title": "chain"
      },
      "index": {
        "description": "like chain but forget the final user state parameter initialUserState the initial user state parameter cmd the command returns only the result of executing cmd",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "chain",
        "normalized": "a-\u003eXState a b-\u003eXState a b",
        "package": "hxt-filter",
        "partial": "",
        "signature": "state-\u003eXState state res-\u003eXState state res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:chain-39-",
      "description": {
        "fct-descr": "\u003cp\u003erun a command in a new user state.\n chain the system state part,\n init new system state with the current one, run the command and\n update the old system state with the resulting new system state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter initialUserState :  the initial user state\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e returns : the result of executing cmd and the final state\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "state1 -\u003e XState state1 res -\u003e XState state0 (res, state1)",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#chain%27",
        "fct-type": "function",
        "title": "chain'"
      },
      "index": {
        "description": "run command in new user state chain the system state part init new system state with the current one run the command and update the old system state with the resulting new system state parameter initialUserState the initial user state parameter cmd the command returns the result of executing cmd and the final state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "chain'",
        "normalized": "a-\u003eXState a b-\u003eXState a(b,a)",
        "package": "hxt-filter",
        "partial": "",
        "signature": "state-\u003eXState state res-\u003eXState state(res,state)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:changeState",
      "description": {
        "fct-descr": "\u003cp\u003echange the user state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter fct :  the user state change function\n\u003c/li\u003e\u003cli\u003e returns : the new state\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "(state -\u003e state) -\u003e XState state state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#changeState",
        "fct-type": "function",
        "title": "changeState"
      },
      "index": {
        "description": "change the user state parameter fct the user state change function returns the new state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "changeState",
        "normalized": "(a-\u003ea)-\u003eXState a a",
        "package": "hxt-filter",
        "partial": "State",
        "signature": "(state-\u003estate)-\u003eXState state state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:changeSysState",
      "description": {
        "fct-descr": "\u003cp\u003echange the system part of the state.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003echangeState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "(SysState -\u003e SysState) -\u003e XState state SysState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#changeSysState",
        "fct-type": "function",
        "title": "changeSysState"
      },
      "index": {
        "description": "change the system part of the state see also changeState",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "changeSysState",
        "normalized": "(SysState-\u003eSysState)-\u003eXState a SysState",
        "package": "hxt-filter",
        "partial": "Sys State",
        "signature": "(SysState-\u003eSysState)-\u003eXState state SysState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:changeSysStateAttrs",
      "description": {
        "fct-descr": "\u003cp\u003echange the attributes in the system state\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "(SysStateAttrs -\u003e SysStateAttrs) -\u003e SysState -\u003e SysState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#changeSysStateAttrs",
        "fct-type": "function",
        "title": "changeSysStateAttrs"
      },
      "index": {
        "description": "change the attributes in the system state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "changeSysStateAttrs",
        "normalized": "(SysStateAttrs-\u003eSysStateAttrs)-\u003eSysState-\u003eSysState",
        "package": "hxt-filter",
        "partial": "Sys State Attrs",
        "signature": "(SysStateAttrs-\u003eSysStateAttrs)-\u003eSysState-\u003eSysState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:checkResult",
      "description": {
        "fct-descr": "\u003cp\u003echeck whether the error level attribute in the system state\n is set to error, in this case the children of the document root are\n removed and error info is added as attributes with \u003ccode\u003e\u003ca\u003esetStatus\u003c/a\u003e\u003c/code\u003e\n else nothing is changed\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#checkResult",
        "fct-type": "function",
        "title": "checkResult"
      },
      "index": {
        "description": "check whether the error level attribute in the system state is set to error in this case the children of the document root are removed and error info is added as attributes with setStatus else nothing is changed",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "checkResult",
        "normalized": "String-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Result",
        "signature": "String-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:checkStatus",
      "description": {
        "fct-descr": "\u003cp\u003echecks the value of the attribute \u003ccode\u003e\u003ca\u003ea_status\u003c/a\u003e\u003c/code\u003e in a document root.\n if it contains a value greater or equal to \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e, an error with error message\n stored in attribute \u003ccode\u003e\u003ca\u003ea_module\u003c/a\u003e\u003c/code\u003e is issued and the filter acts as the \u003ccode\u003e\u003ca\u003enoneM\u003c/a\u003e\u003c/code\u003e filter\n else its the \u003ccode\u003e\u003ca\u003ethisM\u003c/a\u003e\u003c/code\u003e filter\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#checkStatus",
        "fct-type": "function",
        "title": "checkStatus"
      },
      "index": {
        "description": "checks the value of the attribute status in document root if it contains value greater or equal to err an error with error message stored in attribute module is issued and the filter acts as the noneM filter else its the thisM filter",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "checkStatus",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:clearStatus",
      "description": {
        "fct-descr": "\u003cp\u003efilter to reset the state attribute \u003ccode\u003e\u003ca\u003ea_status\u003c/a\u003e\u003c/code\u003e\n    - returns : this\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#clearStatus",
        "fct-type": "function",
        "title": "clearStatus"
      },
      "index": {
        "description": "filter to reset the state attribute status returns this",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "clearStatus",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errClass",
      "description": {
        "fct-descr": "\u003cp\u003eerror level translation\n \u003ccode\u003e\u003ca\u003ec_warn\u003c/a\u003e\u003c/code\u003e (1) : warning,\n \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e (2): error (e.g. parse error, validation error, ...),\n \u003ccode\u003e\u003ca\u003ec_fatal\u003c/a\u003e\u003c/code\u003e (3) : fatal error (document access error, internal error, ...)\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#errClass",
        "fct-type": "function",
        "title": "errClass"
      },
      "index": {
        "description": "error level translation warn warning err error e.g parse error validation error fatal fatal error document access error internal error",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "errClass",
        "normalized": "Int-\u003eString",
        "package": "hxt-filter",
        "partial": "Class",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgHandler",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgHandler",
        "fct-type": "function",
        "title": "errorMsgHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "errorMsgHandler",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Msg Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgLogging",
      "description": {
        "fct-descr": "\u003cp\u003eerror message handler for collecting all error messages\n all messages are stored under attribute \u003ccode\u003e\u003ca\u003ea_error_log\u003c/a\u003e\u003c/code\u003e\n they can be read with \u003ccode\u003egetSysParamTree a_error_log\u003c/code\u003e or by\n applying the filter \u003ccode\u003e\u003ca\u003egetErrorMsg\u003c/a\u003e\u003c/code\u003e to the root node\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgLogging",
        "fct-type": "function",
        "title": "errorMsgLogging"
      },
      "index": {
        "description": "error message handler for collecting all error messages all messages are stored under attribute error log they can be read with getSysParamTree error log or by applying the filter getErrorMsg to the root node",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "errorMsgLogging",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Msg Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgLoggingAndToStderr",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgLoggingAndToStderr",
        "fct-type": "function",
        "title": "errorMsgLoggingAndToStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "errorMsgLoggingAndToStderr",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Msg Logging And To Stderr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:errorMsgToStderr",
      "description": {
        "fct-descr": "\u003cp\u003edefault error handler for writing errors to stderr\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#errorMsgToStderr",
        "fct-type": "function",
        "title": "errorMsgToStderr"
      },
      "index": {
        "description": "default error handler for writing errors to stderr",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "errorMsgToStderr",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Msg To Stderr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getErrorMsg",
      "description": {
        "fct-descr": "\u003cp\u003ethe filter for reading all collected error mesages\n\u003c/p\u003e\u003cp\u003eresult is the list of error messages, the input tree is ignored\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getErrorMsg",
        "fct-type": "function",
        "title": "getErrorMsg"
      },
      "index": {
        "description": "the filter for reading all collected error mesages result is the list of error messages the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getErrorMsg",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getState",
      "description": {
        "fct-descr": "\u003cp\u003eread the user state\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the current state\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XState state state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getState",
        "fct-type": "function",
        "title": "getState"
      },
      "index": {
        "description": "read the user state returns the current state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysErrorHandler",
      "description": {
        "fct-descr": "\u003cp\u003eget the error handler\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XState state (XmlStateFilter ())",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getSysErrorHandler",
        "fct-type": "function",
        "title": "getSysErrorHandler"
      },
      "index": {
        "description": "get the error handler",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getSysErrorHandler",
        "normalized": "XState a(XmlStateFilter())",
        "package": "hxt-filter",
        "partial": "Sys Error Handler",
        "signature": "XState state(XmlStateFilter())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParam",
      "description": {
        "fct-descr": "\u003cp\u003eread a system string parameter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e returns : the value, or the empty string for unknown parameters\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XState state String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParam",
        "fct-type": "function",
        "title": "getSysParam"
      },
      "index": {
        "description": "read system string parameter parameter name the name of the parameter returns the value or the empty string for unknown parameters",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getSysParam",
        "normalized": "String-\u003eXState a String",
        "package": "hxt-filter",
        "partial": "Sys Param",
        "signature": "String-\u003eXState state String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParamInt",
      "description": {
        "fct-descr": "\u003cp\u003eread an integer system parameter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name : \n\u003c/li\u003e\u003cli\u003e 2.parameter default : \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetSysParamWithDefault\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e Int -\u003e XState state Int",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParamInt",
        "fct-type": "function",
        "title": "getSysParamInt"
      },
      "index": {
        "description": "read an integer system parameter parameter name parameter default see also getSysParamWithDefault",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getSysParamInt",
        "normalized": "String-\u003eInt-\u003eXState a Int",
        "package": "hxt-filter",
        "partial": "Sys Param Int",
        "signature": "String-\u003eInt-\u003eXState state Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParamTree",
      "description": {
        "fct-descr": "\u003cp\u003eread a system parameter\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e returns : the list of tres associated with the key, or the empty list for unknown parameters\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XState state XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParamTree",
        "fct-type": "function",
        "title": "getSysParamTree"
      },
      "index": {
        "description": "read system parameter parameter name the name of the parameter returns the list of tres associated with the key or the empty list for unknown parameters",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getSysParamTree",
        "normalized": "String-\u003eXState a XmlTrees",
        "package": "hxt-filter",
        "partial": "Sys Param Tree",
        "signature": "String-\u003eXState state XmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysParamWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eread a system parameter or return a default value\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e 2.parameter default :  the default value\n\u003c/li\u003e\u003cli\u003e returns : the value if found, else the default\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XState state String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getSysParamWithDefault",
        "fct-type": "function",
        "title": "getSysParamWithDefault"
      },
      "index": {
        "description": "read system parameter or return default value parameter name the name of the parameter parameter default the default value returns the value if found else the default",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getSysParamWithDefault",
        "normalized": "String-\u003eString-\u003eXState a String",
        "package": "hxt-filter",
        "partial": "Sys Param With Default",
        "signature": "String-\u003eString-\u003eXState state String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getSysState",
      "description": {
        "fct-descr": "\u003cp\u003eread the system part of the state.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XState state SysState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getSysState",
        "fct-type": "function",
        "title": "getSysState"
      },
      "index": {
        "description": "read the system part of the state see also getState",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getSysState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Sys State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:getTraceLevel",
      "description": {
        "fct-descr": "\u003cp\u003eget the current trace level.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : the current trace level\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XState state Int",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#getTraceLevel",
        "fct-type": "function",
        "title": "getTraceLevel"
      },
      "index": {
        "description": "get the current trace level returns the current trace level",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "getTraceLevel",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Trace Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:initialSysState",
      "description": {
        "fct-descr": "\u003cp\u003ethe initial system state\n\u003c/p\u003e\u003cp\u003ean empty list of attribute value pairs\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "SysState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#initialSysState",
        "fct-type": "function",
        "title": "initialSysState"
      },
      "index": {
        "description": "the initial system state an empty list of attribute value pairs",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "initialSysState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Sys State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:io",
      "description": {
        "fct-descr": "\u003cp\u003elift an I/O command\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter cmd :  the i/o command\n\u003c/li\u003e\u003cli\u003e returns : the i/o command lifted to the XML state monad\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "IO a -\u003e XState state a",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "lift an command parameter cmd the command returns the command lifted to the XML state monad",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "io",
        "normalized": "IO a-\u003eXState b a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "IO a-\u003eXState state a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueErr",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for issuing an error\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#issueErr",
        "fct-type": "function",
        "title": "issueErr"
      },
      "index": {
        "description": "short cut for issuing an error see also issueError",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "issueErr",
        "normalized": "String-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Err",
        "signature": "String-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueError",
      "description": {
        "fct-descr": "\u003cp\u003ereport an error message.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : if the input tree n represents an error, \u003ccode\u003eres = []\u003c/code\u003e\n\t\t  and the error is processed by the errror handler filter (default: error is issued on stderr)\n\t\t  else \u003ccode\u003eres = [n]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueErr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#issueError",
        "fct-type": "function",
        "title": "issueError"
      },
      "index": {
        "description": "report an error message returns if the input tree represents an error res and the error is processed by the errror handler filter default error is issued on stderr else res see also issueErr",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "issueError",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueFatal",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for issuing a fatal error\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eissueErr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#issueFatal",
        "fct-type": "function",
        "title": "issueFatal"
      },
      "index": {
        "description": "short cut for issuing fatal error see also issueError issueErr",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "issueFatal",
        "normalized": "String-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Fatal",
        "signature": "String-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:issueWarn",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for issuing a warning\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eissueError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eissueErr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#issueWarn",
        "fct-type": "function",
        "title": "issueWarn"
      },
      "index": {
        "description": "short cut for issuing warning see also issueError issueErr",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "issueWarn",
        "normalized": "String-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Warn",
        "signature": "String-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:liftF",
      "description": {
        "fct-descr": "\u003cp\u003elift a XmlFilter to a XmlStateFilter filter\n issue all error nodes as error messages\n and remove the error nodes from the result\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the filter\n\u003c/li\u003e\u003cli\u003e returns : the filter running in the state monad\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eall errors are filtered from the result and issued on stderr\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#liftF",
        "fct-type": "function",
        "title": "liftF"
      },
      "index": {
        "description": "lift XmlFilter to XmlStateFilter filter issue all error nodes as error messages and remove the error nodes from the result parameter the filter returns the filter running in the state monad all errors are filtered from the result and issued on stderr",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "liftF",
        "normalized": "XmlFilter-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "XmlFilter-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:processAttrM",
      "description": {
        "fct-descr": "\u003cp\u003emonadic filter for processing the attribute list of a tag.\n for other trees this filter acts like \u003ccode\u003e\u003ca\u003enoneM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprocessAttrl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#processAttrM",
        "fct-type": "function",
        "title": "processAttrM"
      },
      "index": {
        "description": "monadic filter for processing the attribute list of tag for other trees this filter acts like noneM see also processAttr processAttrl",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "processAttrM",
        "normalized": "XmlStateFilter a-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "XmlStateFilter a-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eexec a XState command with initial user state.\n ignore final user state.\n like run0, but ignore the resulting user state\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "state -\u003e XState state res -\u003e IO res",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "exec XState command with initial user state ignore final user state like run0 but ignore the resulting user state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "run",
        "normalized": "a-\u003eXState a b-\u003eIO b",
        "package": "hxt-filter",
        "partial": "",
        "signature": "state-\u003eXState state res-\u003eIO res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:run-39-",
      "description": {
        "fct-descr": "\u003cp\u003eexec a XState command in th IO monad.\n like run with the empty state ().\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XState () res -\u003e IO res",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#run%27",
        "fct-type": "function",
        "title": "run'"
      },
      "index": {
        "description": "exec XState command in th IO monad like run with the empty state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "run'",
        "normalized": "XState()a-\u003eIO a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "XState()res-\u003eIO res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:run0",
      "description": {
        "fct-descr": "\u003cp\u003eexec a XState command with initial state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter initalState :  the inital user state\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command\n\u003c/li\u003e\u003cli\u003e returns : the i/o command with result and user state\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlState state -\u003e XState state res -\u003e IO (res, XmlState state)",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#run0",
        "fct-type": "function",
        "title": "run0"
      },
      "index": {
        "description": "exec XState command with initial state parameter initalState the inital user state parameter cmd the command returns the command with result and user state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "run0",
        "normalized": "XmlState a-\u003eXState a b-\u003eIO(b,XmlState a)",
        "package": "hxt-filter",
        "partial": "",
        "signature": "XmlState state-\u003eXState state res-\u003eIO(res,XmlState state)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setErrorMsgLevel",
      "description": {
        "fct-descr": "\u003cp\u003eset the error level in system state\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setErrorMsgLevel",
        "fct-type": "function",
        "title": "setErrorMsgLevel"
      },
      "index": {
        "description": "set the error level in system state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setErrorMsgLevel",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Error Msg Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setState",
      "description": {
        "fct-descr": "\u003cp\u003eset the user state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter s :  the new state\n\u003c/li\u003e\u003cli\u003e returns : the new state\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "state -\u003e XState state state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setState",
        "fct-type": "function",
        "title": "setState"
      },
      "index": {
        "description": "set the user state parameter the new state returns the new state",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setState",
        "normalized": "a-\u003eXState a a",
        "package": "hxt-filter",
        "partial": "State",
        "signature": "state-\u003eXState state state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setStatus",
      "description": {
        "fct-descr": "\u003cp\u003eadd the error level and the module where the error occured\n to the attributes of a document root node and remove the children when level is greater or equal to \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setStatus",
        "fct-type": "function",
        "title": "setStatus"
      },
      "index": {
        "description": "add the error level and the module where the error occured to the attributes of document root node and remove the children when level is greater or equal to err",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setStatus",
        "normalized": "Int-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Status",
        "signature": "Int-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysErrorHandler",
      "description": {
        "fct-descr": "\u003cp\u003eset the error message handler\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter () -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setSysErrorHandler",
        "fct-type": "function",
        "title": "setSysErrorHandler"
      },
      "index": {
        "description": "set the error message handler",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setSysErrorHandler",
        "normalized": "XmlStateFilter()-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "Sys Error Handler",
        "signature": "XmlStateFilter()-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysParam",
      "description": {
        "fct-descr": "\u003cp\u003eset or change a single system parameter of type string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e 2.parameter value :  the (new) string value\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetSysParamTree\u003c/a\u003e\u003c/code\u003e, setSysParamInt\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setSysParam",
        "fct-type": "function",
        "title": "setSysParam"
      },
      "index": {
        "description": "set or change single system parameter of type string parameter name the name of the parameter parameter value the new string value returns nothing see also setSysParamTree setSysParamInt",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setSysParam",
        "normalized": "String-\u003eString-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "Sys Param",
        "signature": "String-\u003eString-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysParamInt",
      "description": {
        "fct-descr": "\u003cp\u003eset or change a single integer type system parameter\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetSysParam\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e Int -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setSysParamInt",
        "fct-type": "function",
        "title": "setSysParamInt"
      },
      "index": {
        "description": "set or change single integer type system parameter see also setSysParam",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setSysParamInt",
        "normalized": "String-\u003eInt-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "Sys Param Int",
        "signature": "String-\u003eInt-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysParamTree",
      "description": {
        "fct-descr": "\u003cp\u003eset or change a single system parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter name :  the name of the parameter\n\u003c/li\u003e\u003cli\u003e 2.parameter value :  the list of associated trees\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetSysParam\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetSysParamInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setSysParamTree",
        "fct-type": "function",
        "title": "setSysParamTree"
      },
      "index": {
        "description": "set or change single system parameter parameter name the name of the parameter parameter value the list of associated trees returns nothing see also setSysParam setSysParamInt",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setSysParamTree",
        "normalized": "String-\u003eXmlTrees-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "Sys Param Tree",
        "signature": "String-\u003eXmlTrees-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSysState",
      "description": {
        "fct-descr": "\u003cp\u003eset the system part of the state.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "SysState -\u003e XState state SysState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setSysState",
        "fct-type": "function",
        "title": "setSysState"
      },
      "index": {
        "description": "set the system part of the state see also setState",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setSysState",
        "normalized": "SysState-\u003eXState a SysState",
        "package": "hxt-filter",
        "partial": "Sys State",
        "signature": "SysState-\u003eXState state SysState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setSystemParams",
      "description": {
        "fct-descr": "\u003cp\u003eadd (or change) all attributes of the document root to the system state\n     - returns : this\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setSystemParams",
        "fct-type": "function",
        "title": "setSystemParams"
      },
      "index": {
        "description": "add or change all attributes of the document root to the system state returns this",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setSystemParams",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "System Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:setTraceLevel",
      "description": {
        "fct-descr": "\u003cp\u003eset the trace level.\n\u003c/p\u003e\u003cp\u003econvention:\n\u003c/p\u003e\u003cp\u003e0: no trace output (default)\n\u003c/p\u003e\u003cp\u003e1: trace important computation steps, e.g. accessing a document\n\u003c/p\u003e\u003cp\u003e2: trace small computation steps\n\u003c/p\u003e\u003cp\u003e3: output an intermediate result XmlTree in XML source format\n\u003c/p\u003e\u003cp\u003e4: output an intermediate result XmlTree in tree representation\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  the trace level\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#setTraceLevel",
        "fct-type": "function",
        "title": "setTraceLevel"
      },
      "index": {
        "description": "set the trace level convention no trace output default trace important computation steps e.g accessing document trace small computation steps output an intermediate result XmlTree in XML source format output an intermediate result XmlTree in tree representation parameter level the trace level returns nothing",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "setTraceLevel",
        "normalized": "Int-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "Trace Level",
        "signature": "Int-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:statusOk",
      "description": {
        "fct-descr": "\u003cp\u003echeck whether tree is a document root and the status attribute has a value less than \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#statusOk",
        "fct-type": "function",
        "title": "statusOk"
      },
      "index": {
        "description": "check whether tree is document root and the status attribute has value less than err",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "statusOk",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:sysState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "!SysState",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
        "fct-type": "function",
        "title": "sysState"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "sysState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:sysStateAttrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "!SysStateAttrs",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
        "fct-type": "function",
        "title": "sysStateAttrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "sysStateAttrs",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "State Attrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:sysStateErrorHandler",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "!(XmlStateFilter ())",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#SysState",
        "fct-type": "function",
        "title": "sysStateErrorHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "sysStateErrorHandler",
        "normalized": "(XmlStateFilter())",
        "package": "hxt-filter",
        "partial": "State Error Handler",
        "signature": "(XmlStateFilter())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003etrace output function for simple text.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  like in traceCmd\n\u003c/li\u003e\u003cli\u003e 2.parameter str :  the test\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e String -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "trace output function for simple text parameter level like in traceCmd parameter str the test returns nothing",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "trace",
        "normalized": "Int-\u003eString-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "",
        "signature": "Int-\u003eString-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:traceCmd",
      "description": {
        "fct-descr": "\u003cp\u003etrace output for arbitray commands.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  the trace level,\n\t\t\t  for which the command will be execuded\n\t\t\t  if level \u003c= current trace level\n\u003c/li\u003e\u003cli\u003e 2.parameter cmd :  the command to be executed\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e XState state a -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#traceCmd",
        "fct-type": "function",
        "title": "traceCmd"
      },
      "index": {
        "description": "trace output for arbitray commands parameter level the trace level for which the command will be execuded if level current trace level parameter cmd the command to be executed returns nothing",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "traceCmd",
        "normalized": "Int-\u003eXState a b-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "Cmd",
        "signature": "Int-\u003eXState state a-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:traceState",
      "description": {
        "fct-descr": "\u003cp\u003etrace output of the user part of the program state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter level :  like in traceCmd\n\u003c/li\u003e\u003cli\u003e 2.parameter showFct :  the toString function\n\u003c/li\u003e\u003cli\u003e returns : nothing\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e (state -\u003e String) -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#traceState",
        "fct-type": "function",
        "title": "traceState"
      },
      "index": {
        "description": "trace output of the user part of the program state parameter level like in traceCmd parameter showFct the toString function returns nothing",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "traceState",
        "normalized": "Int-\u003e(a-\u003eString)-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "State",
        "signature": "Int-\u003e(state-\u003eString)-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlState.html#v:userState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.HXT.DOM.XmlState",
        "fct-package": "hxt-filter",
        "fct-signature": "!state",
        "fct-source": "src/Text-XML-HXT-DOM-XmlState.html#XmlState",
        "fct-type": "function",
        "title": "userState"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlState",
        "module": "Text.XML.HXT.DOM.XmlState",
        "name": "userState",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module exports elements from the basic libraries:\n XmlTreeTypes, XmlKeywords, XNodeFunctions, XmlTreeFunctions and XmlTreeFilter\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTree",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTree.html",
        "fct-type": "module",
        "title": "XmlTree"
      },
      "index": {
        "description": "This helper module exports elements from the basic libraries XmlTreeTypes XmlKeywords XNodeFunctions XmlTreeFunctions and XmlTreeFilter",
        "hierarchy": "Text XML HXT DOM XmlTree",
        "module": "Text.XML.HXT.DOM.XmlTree",
        "name": "XmlTree",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ebasic XmlTree filter\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html",
        "fct-type": "module",
        "title": "XmlTreeFilter"
      },
      "index": {
        "description": "basic XmlTree filter",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "XmlTreeFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Tree Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:-43--43--61-",
      "description": {
        "fct-descr": "\u003cp\u003econvenient filter function adding a whole list of trees, just for not writing to many ( ... ).\n\u003c/p\u003e\u003cp\u003einfixl 7\n\u003c/p\u003e\u003cpre\u003e f ++= gl  == f += cat gl\u003c/pre\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e [XmlFilter] -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#%2B%2B%3D",
        "fct-type": "function",
        "title": "(++=)"
      },
      "index": {
        "description": "convenient filter function adding whole list of trees just for not writing to many infixl gl cat gl see also",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "(++=) ++=",
        "normalized": "XmlFilter-\u003e[XmlFilter]-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "XmlFilter-\u003e[XmlFilter]-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:-43--61-",
      "description": {
        "fct-descr": "\u003cp\u003econvenient function for tag node tree construction\n\u003c/p\u003e\u003cp\u003einfixl 7\n\u003c/p\u003e\u003cp\u003efilter combinator for tag tree constrcution\n take a 1. filter for computing a tag node tree (or a whole list of tag node trees)\n then add all trees computed by the 2. filter to the attribute list when they represent attributes\n else append them to the list of children.\n\u003c/p\u003e\u003cp\u003eif the 1. filter computes a list of tag nodes, the results of the 2. filter are added to all trees\n\u003c/p\u003e\u003cp\u003eexample: \u003ccode\u003e etag \"a\" += sattr \"href\" \"#42\" += txt \"the answer\" \u003c/code\u003e\n gives the tree \u003ccode\u003e \u003ca href=\"#42\"\u003ethe answer\u003c/a\u003e \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eexample: \u003ccode\u003e ( etag \"a\" +++ etag \"b\" ) += sattr \"x\" \"42\" \u003c/code\u003e\n gives the tree \u003ccode\u003e \u003ca x=\"42\"/\u003e\u003cb x=\"42\"/\u003e \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eadd1Attr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emodifyChildren\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e++=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#%2B%3D",
        "fct-type": "function",
        "title": "(+=)"
      },
      "index": {
        "description": "convenient function for tag node tree construction infixl filter combinator for tag tree constrcution take filter for computing tag node tree or whole list of tag node trees then add all trees computed by the filter to the attribute list when they represent attributes else append them to the list of children if the filter computes list of tag nodes the results of the filter are added to all trees example etag sattr href txt the answer gives the tree href the answer example etag etag sattr gives the tree see also etag tag add1Attr modifyChildren",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "(+=) +=",
        "normalized": "XmlFilter-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "XmlFilter-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:add1Attr",
      "description": {
        "fct-descr": "\u003cp\u003eadd an attribute to the attribute list of a tag.\n If the attribute already exists, it's substituted,\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003esattr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#add1Attr",
        "fct-type": "function",
        "title": "add1Attr"
      },
      "index": {
        "description": "add an attribute to the attribute list of tag If the attribute already exists it substituted see also sattr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "add1Attr",
        "normalized": "XmlTree-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "XmlTree-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addAttr",
      "description": {
        "fct-descr": "\u003cp\u003eadd or change an attribute with a given string as value for a XTag or XPi tree,\n uses \u003ccode\u003e\u003ca\u003eadd1Attr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addAttr",
        "fct-type": "function",
        "title": "addAttr"
      },
      "index": {
        "description": "add or change an attribute with given string as value for XTag or XPi tree uses add1Attr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "addAttr",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addAttrInt",
      "description": {
        "fct-descr": "\u003cp\u003eadd or change an attribute with an Int value.\n uses \u003ccode\u003e\u003ca\u003eaddAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e Int -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addAttrInt",
        "fct-type": "function",
        "title": "addAttrInt"
      },
      "index": {
        "description": "add or change an attribute with an Int value uses addAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "addAttrInt",
        "normalized": "String-\u003eInt-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr Int",
        "signature": "String-\u003eInt-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addAttrl",
      "description": {
        "fct-descr": "\u003cp\u003eadds an attribute list computed by a filter, uses \u003ccode\u003e\u003ca\u003eadd1Attr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addAttrl",
        "fct-type": "function",
        "title": "addAttrl"
      },
      "index": {
        "description": "adds an attribute list computed by filter uses add1Attr see also",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "addAttrl",
        "normalized": "XmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attrl",
        "signature": "XmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:addDTDAttr",
      "description": {
        "fct-descr": "\u003cp\u003eadd or change an attribute of a DTD tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#addDTDAttr",
        "fct-type": "function",
        "title": "addDTDAttr"
      },
      "index": {
        "description": "add or change an attribute of DTD tree",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "addDTDAttr",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "DTDAttr",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:atag",
      "description": {
        "fct-descr": "\u003cp\u003evariant of tag, useful for tags with attributes but without children\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e [XmlFilter] -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#atag",
        "fct-type": "function",
        "title": "atag"
      },
      "index": {
        "description": "variant of tag useful for tags with attributes but without children see also mkXTag tag stag etag cat",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "atag",
        "normalized": "String-\u003e[XmlFilter]-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003e[XmlFilter]-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:attr",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emkXAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#attr",
        "fct-type": "function",
        "title": "attr"
      },
      "index": {
        "description": "Alias for mkXAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "attr",
        "normalized": "String-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:cdata",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for generating simple cdata sections,\n the input tree is ignored\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#cdata",
        "fct-type": "function",
        "title": "cdata"
      },
      "index": {
        "description": "short cut for generating simple cdata sections the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "cdata",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:cmt",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for simple comment\n the input tree is ignored\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXCmt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#cmt",
        "fct-type": "function",
        "title": "cmt"
      },
      "index": {
        "description": "short cut for simple comment the input tree is ignored see also mkXCmt",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "cmt",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:del1Attr",
      "description": {
        "fct-descr": "\u003cp\u003edelete an attribute from the attribute list of a tag tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#del1Attr",
        "fct-type": "function",
        "title": "del1Attr"
      },
      "index": {
        "description": "delete an attribute from the attribute list of tag tree",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "del1Attr",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:dtd",
      "description": {
        "fct-descr": "\u003cp\u003eDTD part generation with filter for attributes and children\n see also: \u003ccode\u003e\u003ca\u003emkXDTDTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "DTDElem -\u003e [XmlFilter] -\u003e [XmlFilter] -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#dtd",
        "fct-type": "function",
        "title": "dtd"
      },
      "index": {
        "description": "DTD part generation with filter for attributes and children see also mkXDTDTree",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "dtd",
        "normalized": "DTDElem-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "DTDElem-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:err",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for mkXError c_fatal.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#err",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "short cut for mkXError fatal see also mkXError",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "err",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:etag",
      "description": {
        "fct-descr": "\u003cp\u003eShort cut for empty tags without attributes\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#etag",
        "fct-type": "function",
        "title": "etag"
      },
      "index": {
        "description": "Short cut for empty tags without attributes see also tag atag stag mkXTag and",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "etag",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:fatal",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for mkXError c_fatal.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#fatal",
        "fct-type": "function",
        "title": "fatal"
      },
      "index": {
        "description": "short cut for mkXError fatal see also mkXError",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "fatal",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getAttrl",
      "description": {
        "fct-descr": "\u003cp\u003efilter for selecting the attibute list\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getAttrl",
        "fct-type": "function",
        "title": "getAttrl"
      },
      "index": {
        "description": "filter for selecting the attibute list",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "getAttrl",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Attrl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getDTDValue",
      "description": {
        "fct-descr": "\u003cp\u003efilter for selecting an attribute of a DTD node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getDTDValue",
        "fct-type": "function",
        "title": "getDTDValue"
      },
      "index": {
        "description": "filter for selecting an attribute of DTD node Result of the filter is single element list with text node or the empty list",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "getDTDValue",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "DTDValue",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getName",
      "description": {
        "fct-descr": "\u003cp\u003efilter for selecting the name of a tag node, an attribute node or a pi node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getName",
        "fct-type": "function",
        "title": "getName"
      },
      "index": {
        "description": "filter for selecting the name of tag node an attribute node or pi node Result of the filter is single element list with text node or the empty list",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "getName",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getNsValue",
      "description": {
        "fct-descr": "\u003cp\u003efilter for selecting the value of an attribute with namespace in a tag node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getNsValue",
        "fct-type": "function",
        "title": "getNsValue"
      },
      "index": {
        "description": "filter for selecting the value of an attribute with namespace in tag node Result of the filter is single element list with text node or the empty list see also getValue isNsAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "getNsValue",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Ns Value",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getValue",
      "description": {
        "fct-descr": "\u003cp\u003efilter for selecting the value of an attribute in a tag node.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ehasValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetNsValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getValue",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "filter for selecting the value of an attribute in tag node Result of the filter is single element list with text node or the empty list see also hasValue getNsValue",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "getValue",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Value",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getXCdata",
      "description": {
        "fct-descr": "\u003cp\u003efilter for selecting the CDATA content.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getXCdata",
        "fct-type": "function",
        "title": "getXCdata"
      },
      "index": {
        "description": "filter for selecting the CDATA content Result of the filter is single element list with text node or the empty list",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "getXCdata",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XCdata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:getXCmt",
      "description": {
        "fct-descr": "\u003cp\u003efilter for selecting content of a comment.\n Result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#getXCmt",
        "fct-type": "function",
        "title": "getXCmt"
      },
      "index": {
        "description": "filter for selecting content of comment Result of the filter is single element list with text node or the empty list",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "getXCmt",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XCmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasAttr",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the node of a tree is a XTag node or a XPi node with an attibute of a specific name\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasAttr",
        "fct-type": "function",
        "title": "hasAttr"
      },
      "index": {
        "description": "test whether the node of tree is XTag node or XPi node with an attibute of specific name see also isAttr hasNsAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "hasAttr",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasLocalPart",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree has a given local name\n see also : \u003ccode\u003e\u003ca\u003ehasNamespace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasPrefix\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasLocalPart",
        "fct-type": "function",
        "title": "hasLocalPart"
      },
      "index": {
        "description": "test whether the root of tree has given local name see also hasNamespace hasPrefix isTag isAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "hasLocalPart",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Local Part",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasNamespace",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree belongs to a given namespace\n see also : \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasLocalPart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasPrefix\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasNamespace",
        "fct-type": "function",
        "title": "hasNamespace"
      },
      "index": {
        "description": "test whether the root of tree belongs to given namespace see also isTag isAttr hasLocalPart hasPrefix",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "hasNamespace",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Namespace",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasNsAttr",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the tree is a XTag node with an attibute of a specific local name and namespace uri\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ehasAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasNsAttr",
        "fct-type": "function",
        "title": "hasNsAttr"
      },
      "index": {
        "description": "test whether the tree is XTag node with an attibute of specific local name and namespace uri see also hasAttr isNsAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "hasNsAttr",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Ns Attr",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasOption",
      "description": {
        "fct-descr": "\u003cp\u003echeck whether an option is set\n\u003c/p\u003e\u003cp\u003ereads the value of an attribute, usually applied to a document root node,\n and checks if the value represents True. The following strings are interpreted\n as true: \"1\", \"True\", \"true\", \"yes\", \"Yes\".\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasOption",
        "fct-type": "function",
        "title": "hasOption"
      },
      "index": {
        "description": "check whether an option is set reads the value of an attribute usually applied to document root node and checks if the value represents True The following strings are interpreted as true True true yes Yes",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "hasOption",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Option",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasPrefix",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree has a given prefix name\n see also : \u003ccode\u003e\u003ca\u003ehasNamespace\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasLocalPart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasPrefix",
        "fct-type": "function",
        "title": "hasPrefix"
      },
      "index": {
        "description": "test whether the root of tree has given prefix name see also hasNamespace hasLocalPart isTag isAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "hasPrefix",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Prefix",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:hasValue",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the given node is a XTag node or a XPI node with an attribute with a value with a specific property.\n In case of a match, the attribute value represented by a text node is returned as single element list,\n else the empty list is the result.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e (String -\u003e Bool) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#hasValue",
        "fct-type": "function",
        "title": "hasValue"
      },
      "index": {
        "description": "test whether the given node is XTag node or XPI node with an attribute with value with specific property In case of match the attribute value represented by text node is returned as single element list else the empty list is the result see also getValue",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "hasValue",
        "normalized": "String-\u003e(String-\u003eBool)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Value",
        "signature": "String-\u003e(String-\u003eBool)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:intValueOf",
      "description": {
        "fct-descr": "\u003cp\u003ecombination of \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e and conversion to a Int\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree -\u003e Int",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#intValueOf",
        "fct-type": "function",
        "title": "intValueOf"
      },
      "index": {
        "description": "combination of getValue and conversion to Int",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "intValueOf",
        "normalized": "String-\u003eXmlTree-\u003eInt",
        "package": "hxt-filter",
        "partial": "Value Of",
        "signature": "String-\u003eXmlTree-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttlist",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an ATTLIST DTD part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttlist",
        "fct-type": "function",
        "title": "isAttlist"
      },
      "index": {
        "description": "test whether the root of tree contains an ATTLIST DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isAttlist",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Attlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttlistOfElement",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttlistOfElement",
        "fct-type": "function",
        "title": "isAttlistOfElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isAttlistOfElement",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attlist Of Element",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttlistParameterEntity",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttlistParameterEntity",
        "fct-type": "function",
        "title": "isAttlistParameterEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isAttlistParameterEntity",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Attlist Parameter Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isAttr",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree is an attribute node for a given attribute name\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isAttr",
        "fct-type": "function",
        "title": "isAttr"
      },
      "index": {
        "description": "test whether the root of tree is an attribute node for given attribute name",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isAttr",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isCondSect",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a conditional section DTD part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isCondSect",
        "fct-type": "function",
        "title": "isCondSect"
      },
      "index": {
        "description": "test whether the root of tree contains conditional section DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isCondSect",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Cond Sect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isDTDName",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a DTD name part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isDTDName",
        "fct-type": "function",
        "title": "isDTDName"
      },
      "index": {
        "description": "test whether the root of tree contains DTD name part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isDTDName",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DTDName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isDefaultAttrKind",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isDefaultAttrKind",
        "fct-type": "function",
        "title": "isDefaultAttrKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isDefaultAttrKind",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Default Attr Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isDoctype",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a DOCTYPE DTD part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isDoctype",
        "fct-type": "function",
        "title": "isDoctype"
      },
      "index": {
        "description": "test whether the root of tree contains DOCTYPE DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isDoctype",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doctype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isElemContentParamEntity",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isElemContentParamEntity",
        "fct-type": "function",
        "title": "isElemContentParamEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isElemContentParamEntity",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Elem Content Param Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isElemWithContent",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isElemWithContent",
        "fct-type": "function",
        "title": "isElemWithContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isElemWithContent",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Elem With Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isElement",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an ELEMENT DTD part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isElement",
        "fct-type": "function",
        "title": "isElement"
      },
      "index": {
        "description": "test whether the root of tree contains an ELEMENT DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isElement",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isEmptyElement",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isEmptyElement",
        "fct-type": "function",
        "title": "isEmptyElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isEmptyElement",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Empty Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isEntity",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an ENTITY DTD part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isEntity",
        "fct-type": "function",
        "title": "isEntity"
      },
      "index": {
        "description": "test whether the root of tree contains an ENTITY DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isEntity",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isEnumAttrType",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isEnumAttrType",
        "fct-type": "function",
        "title": "isEnumAttrType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isEnumAttrType",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Enum Attr Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isError",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an error node for an error.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isError",
        "fct-type": "function",
        "title": "isError"
      },
      "index": {
        "description": "test whether the root of tree contains an error node for an error",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isError",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isExternalParameterEntity",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isExternalParameterEntity",
        "fct-type": "function",
        "title": "isExternalParameterEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isExternalParameterEntity",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "External Parameter Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isFatalError",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an error node for a fatal error.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isFatalError",
        "fct-type": "function",
        "title": "isFatalError"
      },
      "index": {
        "description": "test whether the root of tree contains an error node for fatal error",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isFatalError",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Fatal Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isFixedAttrKind",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isFixedAttrKind",
        "fct-type": "function",
        "title": "isFixedAttrKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isFixedAttrKind",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Fixed Attr Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isIdAttrType",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isIdAttrType",
        "fct-type": "function",
        "title": "isIdAttrType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isIdAttrType",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Id Attr Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isIdRefAttrType",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isIdRefAttrType",
        "fct-type": "function",
        "title": "isIdRefAttrType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isIdRefAttrType",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Id Ref Attr Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isInternalParameterEntity",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isInternalParameterEntity",
        "fct-type": "function",
        "title": "isInternalParameterEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isInternalParameterEntity",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Internal Parameter Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isMixedContentElement",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isMixedContentElement",
        "fct-type": "function",
        "title": "isMixedContentElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isMixedContentElement",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Mixed Content Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNotation",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a NOTATION DTD part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNotation",
        "fct-type": "function",
        "title": "isNotation"
      },
      "index": {
        "description": "test whether the root of tree contains NOTATION DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isNotation",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Notation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNotationAttrType",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNotationAttrType",
        "fct-type": "function",
        "title": "isNotationAttrType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isNotationAttrType",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Notation Attr Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNsAttr",
      "description": {
        "fct-descr": "\u003cp\u003enamespace aware test whether the tree contains an attribute node. Parameters are the local part of the atribute name and the namespace.\n Only usable after namespace propagation.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisNsTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehasNsAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNsAttr",
        "fct-type": "function",
        "title": "isNsAttr"
      },
      "index": {
        "description": "namespace aware test whether the tree contains an attribute node Parameters are the local part of the atribute name and the namespace Only usable after namespace propagation see also isNsTag isAttr hasNsAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isNsAttr",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Ns Attr",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isNsTag",
      "description": {
        "fct-descr": "\u003cp\u003enamespace aware test whether the root of a tree contains a tag node. Parameters are the local part and namespace.\n Only usable after namespace propagation.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisTag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isNsTag",
        "fct-type": "function",
        "title": "isNsTag"
      },
      "index": {
        "description": "namespace aware test whether the root of tree contains tag node Parameters are the local part and namespace Only usable after namespace propagation see also isTag",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isNsTag",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Ns Tag",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfAttr",
      "description": {
        "fct-descr": "\u003cp\u003egeneral test for an attribute name\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "(AttrName -\u003e Bool) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfAttr",
        "fct-type": "function",
        "title": "isOfAttr"
      },
      "index": {
        "description": "general test for an attribute name",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isOfAttr",
        "normalized": "(AttrName-\u003eBool)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Of Attr",
        "signature": "(AttrName-\u003eBool)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfPi",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a processing instruction of a special name.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "(TagName -\u003e Bool) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfPi",
        "fct-type": "function",
        "title": "isOfPi"
      },
      "index": {
        "description": "test whether the root of tree contains processing instruction of special name",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isOfPi",
        "normalized": "(TagName-\u003eBool)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Of Pi",
        "signature": "(TagName-\u003eBool)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfTag",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a tag node with a special name.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "(TagName -\u003e Bool) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfTag",
        "fct-type": "function",
        "title": "isOfTag"
      },
      "index": {
        "description": "test whether the root of tree contains tag node with special name",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isOfTag",
        "normalized": "(TagName-\u003eBool)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Of Tag",
        "signature": "(TagName-\u003eBool)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isOfText",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a text node with a special property\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "(String -\u003e Bool) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isOfText",
        "fct-type": "function",
        "title": "isOfText"
      },
      "index": {
        "description": "test whether the root of tree contains text node with special property",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isOfText",
        "normalized": "(String-\u003eBool)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Of Text",
        "signature": "(String-\u003eBool)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isParameterEntity",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a parameter entity declaration.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isParameterEntity",
        "fct-type": "function",
        "title": "isParameterEntity"
      },
      "index": {
        "description": "test whether the root of tree contains parameter entity declaration",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isParameterEntity",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Parameter Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isPeRef",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a parameter ENTITY reference.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isPeRef",
        "fct-type": "function",
        "title": "isPeRef"
      },
      "index": {
        "description": "test whether the root of tree contains parameter ENTITY reference",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isPeRef",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Pe Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isPi",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the tree is a processing instruction with a given name.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isPi",
        "fct-type": "function",
        "title": "isPi"
      },
      "index": {
        "description": "test whether the tree is processing instruction with given name",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isPi",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Pi",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isRequiredAttrKind",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isRequiredAttrKind",
        "fct-type": "function",
        "title": "isRequiredAttrKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isRequiredAttrKind",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Required Attr Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isRoot",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a document root node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isRoot",
        "fct-type": "function",
        "title": "isRoot"
      },
      "index": {
        "description": "test whether the root of tree contains document root node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isRoot",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isTag",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a tag node.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eisNsTag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isTag",
        "fct-type": "function",
        "title": "isTag"
      },
      "index": {
        "description": "test whether the root of tree contains tag node see also isNsTag",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isTag",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Tag",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isText",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a special text.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isText",
        "fct-type": "function",
        "title": "isText"
      },
      "index": {
        "description": "test whether the root of tree contains special text",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isText",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Text",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isUnparsedEntity",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isUnparsedEntity",
        "fct-type": "function",
        "title": "isUnparsedEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isUnparsedEntity",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Unparsed Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isWarning",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an error node for a warning.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isWarning",
        "fct-type": "function",
        "title": "isWarning"
      },
      "index": {
        "description": "test whether the root of tree contains an error node for warning",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isWarning",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isWhiteSpace",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a text node only with whitespace.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isWhiteSpace",
        "fct-type": "function",
        "title": "isWhiteSpace"
      },
      "index": {
        "description": "test whether the root of tree contains text node only with whitespace",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isWhiteSpace",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "White Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXAttr",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an attribute node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXAttr",
        "fct-type": "function",
        "title": "isXAttr"
      },
      "index": {
        "description": "test whether the root of tree contains an attribute node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXAttr",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XAttr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXCdata",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a CDATA node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXCdata",
        "fct-type": "function",
        "title": "isXCdata"
      },
      "index": {
        "description": "test whether the root of tree contains CDATA node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXCdata",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XCdata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXCharRef",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a character reference node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXCharRef",
        "fct-type": "function",
        "title": "isXCharRef"
      },
      "index": {
        "description": "test whether the root of tree contains character reference node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXCharRef",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XChar Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXCmt",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a comment node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXCmt",
        "fct-type": "function",
        "title": "isXCmt"
      },
      "index": {
        "description": "test whether the root of tree contains comment node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXCmt",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XCmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXDTD",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a DTD part.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXDTD",
        "fct-type": "function",
        "title": "isXDTD"
      },
      "index": {
        "description": "test whether the root of tree contains DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXDTD",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XDTD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXEntityRef",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an entity reference node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXEntityRef",
        "fct-type": "function",
        "title": "isXEntityRef"
      },
      "index": {
        "description": "test whether the root of tree contains an entity reference node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXEntityRef",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XEntity Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXError",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains an error node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXError",
        "fct-type": "function",
        "title": "isXError"
      },
      "index": {
        "description": "test whether the root of tree contains an error node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXError",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXPi",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a processing instruction node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXPi",
        "fct-type": "function",
        "title": "isXPi"
      },
      "index": {
        "description": "test whether the root of tree contains processing instruction node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXPi",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XPi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXTag",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a tag node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXTag",
        "fct-type": "function",
        "title": "isXTag"
      },
      "index": {
        "description": "test whether the root of tree contains tag node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXTag",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XTag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXText",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the root of a tree contains a text node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXText",
        "fct-type": "function",
        "title": "isXText"
      },
      "index": {
        "description": "test whether the root of tree contains text node",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXText",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "XText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:isXmlPi",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the tree is a \u003c?xml ... ?\u003e declaration\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#isXmlPi",
        "fct-type": "function",
        "title": "isXmlPi"
      },
      "index": {
        "description": "test whether the tree is xml declaration",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "isXmlPi",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Pi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkQAttr",
      "description": {
        "fct-descr": "\u003cp\u003eQualified version \u003ccode\u003e\u003ca\u003emkXAttr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkQAttr",
        "fct-type": "function",
        "title": "mkQAttr"
      },
      "index": {
        "description": "Qualified version mkXAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkQAttr",
        "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "QAttr",
        "signature": "QName-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkQTag",
      "description": {
        "fct-descr": "\u003cp\u003eVersion with qualified names of \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkQTag",
        "fct-type": "function",
        "title": "mkQTag"
      },
      "index": {
        "description": "Version with qualified names of mkXTag",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkQTag",
        "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "QTag",
        "signature": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXAttr",
      "description": {
        "fct-descr": "\u003cp\u003efilter for attribute construction.\n a new tree with attribute name and a value computed by a filter\n is build.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXAttr",
        "fct-type": "function",
        "title": "mkXAttr"
      },
      "index": {
        "description": "filter for attribute construction new tree with attribute name and value computed by filter is build",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXAttr",
        "normalized": "String-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XAttr",
        "signature": "String-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXCdata",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a CDATA section node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXCdata",
        "fct-type": "function",
        "title": "mkXCdata"
      },
      "index": {
        "description": "constructor filter for CDATA section node new tree is constructed the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXCdata",
        "normalized": "XmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XCdata",
        "signature": "XmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXCharRef",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a character reference node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXCharRef",
        "fct-type": "function",
        "title": "mkXCharRef"
      },
      "index": {
        "description": "constructor filter for character reference node new tree is constructed the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXCharRef",
        "normalized": "Int-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XChar Ref",
        "signature": "Int-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXCmt",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a comment node.\n a new tree is constructed.\n the xml string representation of the filter result\n forms the comment\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXCmt",
        "fct-type": "function",
        "title": "mkXCmt"
      },
      "index": {
        "description": "constructor filter for comment node new tree is constructed the xml string representation of the filter result forms the comment",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXCmt",
        "normalized": "XmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XCmt",
        "signature": "XmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXDTD",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a DTD part.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "DTDElem -\u003e Attributes -\u003e XmlTrees -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXDTD",
        "fct-type": "function",
        "title": "mkXDTD"
      },
      "index": {
        "description": "constructor filter for DTD part new tree is constructed the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXDTD",
        "normalized": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XDTD",
        "signature": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXEntityRef",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for an entity reference node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXEntityRef",
        "fct-type": "function",
        "title": "mkXEntityRef"
      },
      "index": {
        "description": "constructor filter for an entity reference node new tree is constructed the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXEntityRef",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XEntity Ref",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXError",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for an error message node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXError",
        "fct-type": "function",
        "title": "mkXError"
      },
      "index": {
        "description": "constructor filter for an error message node new tree is constructed the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXError",
        "normalized": "Int-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XError",
        "signature": "Int-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXNsAttr",
      "description": {
        "fct-descr": "\u003cp\u003efilter for attribute construction.\n a new tree with attribute name and namespace and a value computed by a filter\n is build.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXNsAttr",
        "fct-type": "function",
        "title": "mkXNsAttr"
      },
      "index": {
        "description": "filter for attribute construction new tree with attribute name and namespace and value computed by filter is build",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXNsAttr",
        "normalized": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XNs Attr",
        "signature": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXNsTag",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a tag node.\n a new tree is constructed.\n the attributes and the children are computed by applying the aproprate filter to the input tree\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the tag name in form of prefix:localpart\n\u003c/li\u003e\u003cli\u003e 2.parameter ns:   the namespace uri\n\u003c/li\u003e\u003cli\u003e 3.parameter af :  the filter for the attribute list\n\u003c/li\u003e\u003cli\u003e 4.parameter cf :  the filter for the children\n\u003c/li\u003e\u003cli\u003e returns : the constructor filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXNsTag",
        "fct-type": "function",
        "title": "mkXNsTag"
      },
      "index": {
        "description": "constructor filter for tag node new tree is constructed the attributes and the children are computed by applying the aproprate filter to the input tree parameter the tag name in form of prefix localpart parameter ns the namespace uri parameter af the filter for the attribute list parameter cf the filter for the children returns the constructor filter",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXNsTag",
        "normalized": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XNs Tag",
        "signature": "String-\u003eString-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXPi",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a processing instruction\n a new tree is constructed from the text representation\n of the input tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXPi",
        "fct-type": "function",
        "title": "mkXPi"
      },
      "index": {
        "description": "constructor filter for processing instruction new tree is constructed from the text representation of the input tree",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXPi",
        "normalized": "String-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XPi",
        "signature": "String-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXTag",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a tag node.\n a new tree is constructed.\n the attributes and the children are computed by applying the aproprate filter to the input tree\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the tag name\n\u003c/li\u003e\u003cli\u003e 2.parameter af :  the filter for the attribute list\n\u003c/li\u003e\u003cli\u003e 3.parameter cf :  the filter for the children\n\u003c/li\u003e\u003cli\u003e returns : the constructor filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXTag",
        "fct-type": "function",
        "title": "mkXTag"
      },
      "index": {
        "description": "constructor filter for tag node new tree is constructed the attributes and the children are computed by applying the aproprate filter to the input tree parameter the tag name parameter af the filter for the attribute list parameter cf the filter for the children returns the constructor filter",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXTag",
        "normalized": "String-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XTag",
        "signature": "String-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:mkXText",
      "description": {
        "fct-descr": "\u003cp\u003econstructor filter for a text node.\n a new tree is constructed.\n the input tree is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#mkXText",
        "fct-type": "function",
        "title": "mkXText"
      },
      "index": {
        "description": "constructor filter for text node new tree is constructed the input tree is ignored",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "mkXText",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "XText",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:modifyAttr",
      "description": {
        "fct-descr": "\u003cp\u003eedit filter for changing the value of an attribute in a tag node.\n result of the filter is a single element list with the tag node or the empty list.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the attribute\n\u003c/li\u003e\u003cli\u003e 2.parameter f :  the edit function for the attribute value\n\u003c/li\u003e\u003cli\u003e returns : the edit filter\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e (String -\u003e String) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#modifyAttr",
        "fct-type": "function",
        "title": "modifyAttr"
      },
      "index": {
        "description": "edit filter for changing the value of an attribute in tag node result of the filter is single element list with the tag node or the empty list parameter the name of the attribute parameter the edit function for the attribute value returns the edit filter",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "modifyAttr",
        "normalized": "String-\u003e(String-\u003eString)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "String-\u003e(String-\u003eString)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:modifyQName",
      "description": {
        "fct-descr": "\u003cp\u003eedit filter for changing the name of a tag node.\n result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "(TagName -\u003e TagName) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#modifyQName",
        "fct-type": "function",
        "title": "modifyQName"
      },
      "index": {
        "description": "edit filter for changing the name of tag node result of the filter is single element list with text node or the empty list",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "modifyQName",
        "normalized": "(TagName-\u003eTagName)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "QName",
        "signature": "(TagName-\u003eTagName)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:modifyText",
      "description": {
        "fct-descr": "\u003cp\u003eedit filter for changing the text of a text node.\n result of the filter is a single element list with a text node or the empty list\n\u003c/p\u003e\u003cp\u003eexample for editing all text nodes of a tree with an edit function \u003ccode\u003ef\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003eprocessBottomUp (modifyText f `when` isXText)\u003c/pre\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "(String -\u003e String) -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#modifyText",
        "fct-type": "function",
        "title": "modifyText"
      },
      "index": {
        "description": "edit filter for changing the text of text node result of the filter is single element list with text node or the empty list example for editing all text nodes of tree with an edit function processBottomUp modifyText when isXText",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "modifyText",
        "normalized": "(String-\u003eString)-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Text",
        "signature": "(String-\u003eString)-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:processAttr",
      "description": {
        "fct-descr": "\u003cp\u003eelementwise processing of the attributes of a tag.\n for other trees this filter acts like \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eprocessAttrl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#processAttr",
        "fct-type": "function",
        "title": "processAttr"
      },
      "index": {
        "description": "elementwise processing of the attributes of tag for other trees this filter acts like none see also processAttrl",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "processAttr",
        "normalized": "XmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attr",
        "signature": "XmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:processAttrl",
      "description": {
        "fct-descr": "\u003cp\u003eprocess the attribute list of a tag node with a tree list filter.\n for other trees this filter acts like \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlSFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#processAttrl",
        "fct-type": "function",
        "title": "processAttrl"
      },
      "index": {
        "description": "process the attribute list of tag node with tree list filter for other trees this filter acts like none",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "processAttrl",
        "normalized": "XmlSFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attrl",
        "signature": "XmlSFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:qattr",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for mkQAttr\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#qattr",
        "fct-type": "function",
        "title": "qattr"
      },
      "index": {
        "description": "Alias for mkQAttr",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "qattr",
        "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "QName-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:qetag",
      "description": {
        "fct-descr": "\u003cp\u003eQualified version of etag\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#qetag",
        "fct-type": "function",
        "title": "qetag"
      },
      "index": {
        "description": "Qualified version of etag",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "qetag",
        "normalized": "QName-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "QName-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:qtag",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for mkQTag\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e XmlFilter -\u003e XmlFilter -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#qtag",
        "fct-type": "function",
        "title": "qtag"
      },
      "index": {
        "description": "Alias for mkQTag",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "qtag",
        "normalized": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "QName-\u003eXmlFilter-\u003eXmlFilter-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:replaceAttrl",
      "description": {
        "fct-descr": "\u003cp\u003ereplace an attribute list\n to be renamed when replaceAttrl is eliminated\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#replaceAttrl",
        "fct-type": "function",
        "title": "replaceAttrl"
      },
      "index": {
        "description": "replace an attribute list to be renamed when replaceAttrl is eliminated",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "replaceAttrl",
        "normalized": "XmlTrees-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attrl",
        "signature": "XmlTrees-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:replaceQName",
      "description": {
        "fct-descr": "\u003cp\u003eedit filter for changing the name of a tag node, an attribute or a pi.\n result of the filter is a single element list with a tag node or the empty list\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#replaceQName",
        "fct-type": "function",
        "title": "replaceQName"
      },
      "index": {
        "description": "edit filter for changing the name of tag node an attribute or pi result of the filter is single element list with tag node or the empty list",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "replaceQName",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "QName",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:rootTag",
      "description": {
        "fct-descr": "\u003cp\u003efilter for creating a document root node with a list of filters for the attributes and a list of filters for the document.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "[XmlFilter] -\u003e [XmlFilter] -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#rootTag",
        "fct-type": "function",
        "title": "rootTag"
      },
      "index": {
        "description": "filter for creating document root node with list of filters for the attributes and list of filters for the document see also tag",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "rootTag",
        "normalized": "[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Tag",
        "signature": "[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:sattr",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for attribute construction with string constants\n\u003c/p\u003e\u003cp\u003eset also : \u003ccode\u003e\u003ca\u003eattr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkXAttr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emkXText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#sattr",
        "fct-type": "function",
        "title": "sattr"
      },
      "index": {
        "description": "short cut for attribute construction with string constants set also attr mkXAttr and mkXText",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "sattr",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:spi",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for generating simple processing instructions (spi)\n the input tree is ignored\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003espi \"xyz\" \"abc\"\u003c/code\u003e is equal to \u003ccode\u003emkXPi \"xyz\" (txt \"abc\")\u003c/code\u003e\n (the name pi is already used in prelude)\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#spi",
        "fct-type": "function",
        "title": "spi"
      },
      "index": {
        "description": "short cut for generating simple processing instructions spi the input tree is ignored spi xyz abc is equal to mkXPi xyz txt abc the name pi is already used in prelude",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "spi",
        "normalized": "String-\u003eString-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eString-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:stag",
      "description": {
        "fct-descr": "\u003cp\u003evariant of tag, useful for tags without attributes and with a list of filters for\n constructing the children\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e [XmlFilter] -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#stag",
        "fct-type": "function",
        "title": "stag"
      },
      "index": {
        "description": "variant of tag useful for tags without attributes and with list of filters for constructing the children see also mkXTag tag etag cat",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "stag",
        "normalized": "String-\u003e[XmlFilter]-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003e[XmlFilter]-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003evariant of mkXTag with a list of filters for the attributes and a list of filters for the children.\n this variant leads to a more readable source for a complicated construction filter\n than the simple solution with a combination of \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXTag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eetag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e+=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e [XmlFilter] -\u003e [XmlFilter] -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "variant of mkXTag with list of filters for the attributes and list of filters for the children this variant leads to more readable source for complicated construction filter than the simple solution with combination of mkXTag and cat see also mkXTag stag etag cat",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "tag",
        "normalized": "String-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003e[XmlFilter]-\u003e[XmlFilter]-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:txt",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for \u003ccode\u003e\u003ca\u003emkXText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#txt",
        "fct-type": "function",
        "title": "txt"
      },
      "index": {
        "description": "short cut for mkXText",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "txt",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:valueOf",
      "description": {
        "fct-descr": "\u003cp\u003ecombination of \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e and conversion into a String\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#valueOf",
        "fct-type": "function",
        "title": "valueOf"
      },
      "index": {
        "description": "combination of getValue and conversion into String",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "valueOf",
        "normalized": "String-\u003eXmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Of",
        "signature": "String-\u003eXmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFilter.html#v:warn",
      "description": {
        "fct-descr": "\u003cp\u003eshort cut for mkXError c_warn.\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003emkXError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFilter.html#warn",
        "fct-type": "function",
        "title": "warn"
      },
      "index": {
        "description": "short cut for mkXError warn see also mkXError",
        "hierarchy": "Text XML HXT DOM XmlTreeFilter",
        "module": "Text.XML.HXT.DOM.XmlTreeFilter",
        "name": "warn",
        "normalized": "String-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic XmlTree functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html",
        "fct-type": "module",
        "title": "XmlTreeFunctions"
      },
      "index": {
        "description": "Basic XmlTree functions",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "XmlTreeFunctions",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Tree Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:attrlOfDTD",
      "description": {
        "fct-descr": "\u003cp\u003eselect the attributes of a dtd tree\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e Attributes",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#attrlOfDTD",
        "fct-type": "function",
        "title": "attrlOfDTD"
      },
      "index": {
        "description": "select the attributes of dtd tree",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "attrlOfDTD",
        "normalized": "XmlTree-\u003eAttributes",
        "package": "hxt-filter",
        "partial": "Of DTD",
        "signature": "XmlTree-\u003eAttributes"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:emptyRoot",
      "description": {
        "fct-descr": "\u003cp\u003ethe empty document tree\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enewRoot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#emptyRoot",
        "fct-type": "function",
        "title": "emptyRoot"
      },
      "index": {
        "description": "the empty document tree see also newRoot",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "emptyRoot",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:fromAttrl",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Attributes -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#fromAttrl",
        "fct-type": "function",
        "title": "fromAttrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "fromAttrl",
        "normalized": "Attributes-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "Attrl",
        "signature": "Attributes-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:fromTreel",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "AssocList String XmlTrees -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#fromTreel",
        "fct-type": "function",
        "title": "fromTreel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "fromTreel",
        "normalized": "AssocList String XmlTrees-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "Treel",
        "signature": "AssocList String XmlTrees-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isAttrNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isAttrNode",
        "fct-type": "function",
        "title": "isAttrNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isAttrNode",
        "normalized": "String-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Attr Node",
        "signature": "String-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isDTDElemNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "DTDElem -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isDTDElemNode",
        "fct-type": "function",
        "title": "isDTDElemNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isDTDElemNode",
        "normalized": "DTDElem-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "DTDElem Node",
        "signature": "DTDElem-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isErrorNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isErrorNode",
        "fct-type": "function",
        "title": "isErrorNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isErrorNode",
        "normalized": "Int-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Error Node",
        "signature": "Int-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfAttrNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "(AttrName -\u003e Bool) -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfAttrNode",
        "fct-type": "function",
        "title": "isOfAttrNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isOfAttrNode",
        "normalized": "(AttrName-\u003eBool)-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Of Attr Node",
        "signature": "(AttrName-\u003eBool)-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfPiNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "(TagName -\u003e Bool) -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfPiNode",
        "fct-type": "function",
        "title": "isOfPiNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isOfPiNode",
        "normalized": "(TagName-\u003eBool)-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Of Pi Node",
        "signature": "(TagName-\u003eBool)-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfTagNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "(TagName -\u003e Bool) -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfTagNode",
        "fct-type": "function",
        "title": "isOfTagNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isOfTagNode",
        "normalized": "(TagName-\u003eBool)-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Of Tag Node",
        "signature": "(TagName-\u003eBool)-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isOfTextNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "(String -\u003e Bool) -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isOfTextNode",
        "fct-type": "function",
        "title": "isOfTextNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isOfTextNode",
        "normalized": "(String-\u003eBool)-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Of Text Node",
        "signature": "(String-\u003eBool)-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isPiNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isPiNode",
        "fct-type": "function",
        "title": "isPiNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isPiNode",
        "normalized": "String-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Pi Node",
        "signature": "String-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isRootNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isRootNode",
        "fct-type": "function",
        "title": "isRootNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isRootNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Root Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isTagNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isTagNode",
        "fct-type": "function",
        "title": "isTagNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isTagNode",
        "normalized": "String-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Tag Node",
        "signature": "String-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isTextNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isTextNode",
        "fct-type": "function",
        "title": "isTextNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isTextNode",
        "normalized": "String-\u003eXNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "Text Node",
        "signature": "String-\u003eXNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXAttrNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXAttrNode",
        "fct-type": "function",
        "title": "isXAttrNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXAttrNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XAttr Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXCdataNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXCdataNode",
        "fct-type": "function",
        "title": "isXCdataNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXCdataNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XCdata Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXCharRefNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXCharRefNode",
        "fct-type": "function",
        "title": "isXCharRefNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXCharRefNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XChar Ref Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXCmtNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXCmtNode",
        "fct-type": "function",
        "title": "isXCmtNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXCmtNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XCmt Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXDTDNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXDTDNode",
        "fct-type": "function",
        "title": "isXDTDNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXDTDNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XDTDNode",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXEntityRefNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXEntityRefNode",
        "fct-type": "function",
        "title": "isXEntityRefNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXEntityRefNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XEntity Ref Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXErrorNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXErrorNode",
        "fct-type": "function",
        "title": "isXErrorNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXErrorNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XError Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXPiNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXPiNode",
        "fct-type": "function",
        "title": "isXPiNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXPiNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XPi Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXTagNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXTagNode",
        "fct-type": "function",
        "title": "isXTagNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXTagNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XTag Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:isXTextNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#isXTextNode",
        "fct-type": "function",
        "title": "isXTextNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "isXTextNode",
        "normalized": "XNode-\u003eBool",
        "package": "hxt-filter",
        "partial": "XText Node",
        "signature": "XNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:localPartOf",
      "description": {
        "fct-descr": "\u003cp\u003eselect the local part of a name of a node. For tags, attributes the name string\n is returned, for pi's the whole name, else the empty string.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#localPartOf",
        "fct-type": "function",
        "title": "localPartOf"
      },
      "index": {
        "description": "select the local part of name of node For tags attributes the name string is returned for pi the whole name else the empty string",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "localPartOf",
        "normalized": "XmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Part Of",
        "signature": "XmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:maybeString2XText",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Maybe String -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#maybeString2XText",
        "fct-type": "function",
        "title": "maybeString2XText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "maybeString2XText",
        "normalized": "Maybe String-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "String XText",
        "signature": "Maybe String-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkQAttrTree",
      "description": {
        "fct-descr": "\u003cp\u003eQualified version of \u003ccode\u003e\u003ca\u003emkXAttrTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkQAttrTree",
        "fct-type": "function",
        "title": "mkQAttrTree"
      },
      "index": {
        "description": "Qualified version of mkXAttrTree",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkQAttrTree",
        "normalized": "QName-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "QAttr Tree",
        "signature": "QName-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkQTagTree",
      "description": {
        "fct-descr": "\u003cp\u003eVersion with qualified name of \u003ccode\u003e\u003ca\u003emkXTagTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkQTagTree",
        "fct-type": "function",
        "title": "mkQTagTree"
      },
      "index": {
        "description": "Version with qualified name of mkXTagTree",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkQTagTree",
        "normalized": "QName-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "QTag Tree",
        "signature": "QName-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkRootTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a document root tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al :  the attribute list for the root. This list must contain at\n\t\t  least an attribute \"source\" that contains the URI of the document to be processed\n\u003c/li\u003e\u003cli\u003e 2.parameter cs :  the list for the document content\n\u003c/li\u003e\u003cli\u003e returns : the document root\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkRootTree",
        "fct-type": "function",
        "title": "mkRootTree"
      },
      "index": {
        "description": "create document root tree parameter al the attribute list for the root This list must contain at least an attribute source that contains the URI of the document to be processed parameter cs the list for the document content returns the document root",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkRootTree",
        "normalized": "XmlTrees-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "Root Tree",
        "signature": "XmlTrees-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXAttrTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate an attribute tree as part of a tag attribute list of tag nodes\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al : the attribute name\n\u003c/li\u003e\u003cli\u003e 2.parameter av : the attribute value as tree list, usually containing a single text node\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXAttrTree",
        "fct-type": "function",
        "title": "mkXAttrTree"
      },
      "index": {
        "description": "create an attribute tree as part of tag attribute list of tag nodes parameter al the attribute name parameter av the attribute value as tree list usually containing single text node",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXAttrTree",
        "normalized": "String-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XAttr Tree",
        "signature": "String-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXCdataTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a CDATA section tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter s :  the content of the CDATA section\n\u003c/li\u003e\u003cli\u003e returns : the tree for the CDATA section\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXCdataTree",
        "fct-type": "function",
        "title": "mkXCdataTree"
      },
      "index": {
        "description": "create CDATA section tree parameter the content of the CDATA section returns the tree for the CDATA section",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXCdataTree",
        "normalized": "String-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XCdata Tree",
        "signature": "String-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXCharRefTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a leaf for a char reference.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter i :  the integer representing the Unicode char\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the char reference\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXCharRefTree",
        "fct-type": "function",
        "title": "mkXCharRefTree"
      },
      "index": {
        "description": "create leaf for char reference parameter the integer representing the Unicode char returns the tree with the single node containing the char reference",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXCharRefTree",
        "normalized": "Int-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XChar Ref Tree",
        "signature": "Int-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXCmtTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a leaf for a comment,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter c :  the comment text\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the comment\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXCmtTree",
        "fct-type": "function",
        "title": "mkXCmtTree"
      },
      "index": {
        "description": "create leaf for comment parameter the comment text returns the tree with the single node containing the comment",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXCmtTree",
        "normalized": "String-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XCmt Tree",
        "signature": "String-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXDTDTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a tree for a part of a DTD\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter d :  the type of the DTD part\n\u003c/li\u003e\u003cli\u003e 2.parameter al :  the attribute list for the DTD part\n\u003c/li\u003e\u003cli\u003e 3.parameter ds :  the possibly empty list of components for the DTD part\n\u003c/li\u003e\u003cli\u003e returns : the tree with the composed DTD part\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "DTDElem -\u003e Attributes -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXDTDTree",
        "fct-type": "function",
        "title": "mkXDTDTree"
      },
      "index": {
        "description": "create tree for part of DTD parameter the type of the DTD part parameter al the attribute list for the DTD part parameter ds the possibly empty list of components for the DTD part returns the tree with the composed DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXDTDTree",
        "normalized": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XDTDTree",
        "signature": "DTDElem-\u003eAttributes-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXEntityRefTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a leaf for an entity reference.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the entity reference\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the entity reference\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXEntityRefTree",
        "fct-type": "function",
        "title": "mkXEntityRefTree"
      },
      "index": {
        "description": "create leaf for an entity reference parameter the name of the entity reference returns the tree with the single node containing the entity reference",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXEntityRefTree",
        "normalized": "String-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XEntity Ref Tree",
        "signature": "String-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXErrorTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate an error tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter l :  the level of the error (warning, error fatal)\n\u003c/li\u003e\u003cli\u003e 2.parameter msg :  the error message\n\u003c/li\u003e\u003cli\u003e 3.parameter cs :  the context, where the error was detected\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e String -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXErrorTree",
        "fct-type": "function",
        "title": "mkXErrorTree"
      },
      "index": {
        "description": "create an error tree parameter the level of the error warning error fatal parameter msg the error message parameter cs the context where the error was detected",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXErrorTree",
        "normalized": "Int-\u003eString-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XError Tree",
        "signature": "Int-\u003eString-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXNsAttrTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate an attribute tree with a namespace\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al : the attribute name\n\u003c/li\u003e\u003cli\u003e 2.parameter ns : namespace uri\n\u003c/li\u003e\u003cli\u003e 3.parameter av : the attribute value as tree list, usually containing a single text node\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003emkXAttrTree\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkXNsTagTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXNsAttrTree",
        "fct-type": "function",
        "title": "mkXNsAttrTree"
      },
      "index": {
        "description": "create an attribute tree with namespace parameter al the attribute name parameter ns namespace uri parameter av the attribute value as tree list usually containing single text node see also mkXAttrTree mkXNsTagTree",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXNsAttrTree",
        "normalized": "String-\u003eString-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XNs Attr Tree",
        "signature": "String-\u003eString-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXNsTagTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a tree with a namespace aware tag node.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the prefix:localpart of the tag\n\u003c/li\u003e\u003cli\u003e 2.parameter ns:  the namespace uri\n\u003c/li\u003e\u003cli\u003e 3.parameter al :  the tag attribte list\n\u003c/li\u003e\u003cli\u003e 4.parameter cs :  the list of children\n\u003c/li\u003e\u003cli\u003e returns : the new tree\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003emkXTagTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXNsTagTree",
        "fct-type": "function",
        "title": "mkXNsTagTree"
      },
      "index": {
        "description": "create tree with namespace aware tag node parameter the prefix localpart of the tag parameter ns the namespace uri parameter al the tag attribte list parameter cs the list of children returns the new tree see also mkXTagTree",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXNsTagTree",
        "normalized": "String-\u003eString-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XNs Tag Tree",
        "signature": "String-\u003eString-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXPERefTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a parameter entity reference DTD part.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter ref :  the name of the reference\n\u003c/li\u003e\u003cli\u003e returns : the DTD part for a PERef\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXPERefTree",
        "fct-type": "function",
        "title": "mkXPERefTree"
      },
      "index": {
        "description": "create parameter entity reference DTD part parameter ref the name of the reference returns the DTD part for PERef",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXPERefTree",
        "normalized": "String-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XPERef Tree",
        "signature": "String-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXPiTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a processing instruction tree.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the PI\n\u003c/li\u003e\u003cli\u003e 2.parameter str :  the content of a PI\n\u003c/li\u003e\u003cli\u003e returns : the processing instruction tree with a single attribute \"value\"\n      with the str parameter as attribute value, with \u003ccode\u003evalueOf a_value\u003c/code\u003e applied to the result tree\n      the content of the PI can be selected\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXPiTree",
        "fct-type": "function",
        "title": "mkXPiTree"
      },
      "index": {
        "description": "create processing instruction tree parameter the name of the PI parameter str the content of PI returns the processing instruction tree with single attribute value with the str parameter as attribute value with valueOf value applied to the result tree the content of the PI can be selected",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXPiTree",
        "normalized": "String-\u003eString-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XPi Tree",
        "signature": "String-\u003eString-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXTagTree",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a tree with a tag node.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter n :  the name of the tag\n\u003c/li\u003e\u003cli\u003e 2.parameter al :  the tag attribte list\n\u003c/li\u003e\u003cli\u003e 3.parameter cs :  the list of children\n\u003c/li\u003e\u003cli\u003e returns : the new tree\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXTagTree",
        "fct-type": "function",
        "title": "mkXTagTree"
      },
      "index": {
        "description": "Create tree with tag node parameter the name of the tag parameter al the tag attribte list parameter cs the list of children returns the new tree",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXTagTree",
        "normalized": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XTag Tree",
        "signature": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXTextTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a leaf for a text element.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter txt :  the text\n\u003c/li\u003e\u003cli\u003e returns : the tree with the single node containing the text\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXTextTree",
        "fct-type": "function",
        "title": "mkXTextTree"
      },
      "index": {
        "description": "create leaf for text element parameter txt the text returns the tree with the single node containing the text",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXTextTree",
        "normalized": "String-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "XText Tree",
        "signature": "String-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:mkXmlDeclTree",
      "description": {
        "fct-descr": "\u003cp\u003ecreate xml declaration\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#mkXmlDeclTree",
        "fct-type": "function",
        "title": "mkXmlDeclTree"
      },
      "index": {
        "description": "create xml declaration",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "mkXmlDeclTree",
        "normalized": "XmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "Xml Decl Tree",
        "signature": "XmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:nameOf",
      "description": {
        "fct-descr": "\u003cp\u003eselect the name of a node. For tags, attributes and pi's the name string\n is returned, else the empty string.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#nameOf",
        "fct-type": "function",
        "title": "nameOf"
      },
      "index": {
        "description": "select the name of node For tags attributes and pi the name string is returned else the empty string",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "nameOf",
        "normalized": "XmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Of",
        "signature": "XmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:namespaceOf",
      "description": {
        "fct-descr": "\u003cp\u003eselect the namespace URI of a tag or an attribute tree, else the empty string is returned\n see also : \u003ccode\u003e\u003ca\u003enameOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#namespaceOf",
        "fct-type": "function",
        "title": "namespaceOf"
      },
      "index": {
        "description": "select the namespace URI of tag or an attribute tree else the empty string is returned see also nameOf",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "namespaceOf",
        "normalized": "XmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Of",
        "signature": "XmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:newDocument",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a new empty document with source name as parameter\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#newDocument",
        "fct-type": "function",
        "title": "newDocument"
      },
      "index": {
        "description": "create new empty document with source name as parameter",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "newDocument",
        "normalized": "String-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "Document",
        "signature": "String-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:newDocument-39-",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a new empty document with a list of attributes for source location and options\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003enewDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Attributes -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#newDocument%27",
        "fct-type": "function",
        "title": "newDocument'"
      },
      "index": {
        "description": "create new empty document with list of attributes for source location and options see also newDocument",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "newDocument'",
        "normalized": "Attributes-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "Document'",
        "signature": "Attributes-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:newRoot",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a new document tree with empty contents.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter al : the attribute list for the root node\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ereturns a single node tree with tag name \"/\" indicating a root and\n with empty list of children\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003eemptyRoot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e XmlTree",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#newRoot",
        "fct-type": "function",
        "title": "newRoot"
      },
      "index": {
        "description": "creates new document tree with empty contents parameter al the attribute list for the root node returns single node tree with tag name indicating root and with empty list of children see also emptyRoot",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "newRoot",
        "normalized": "XmlTrees-\u003eXmlTree",
        "package": "hxt-filter",
        "partial": "Root",
        "signature": "XmlTrees-\u003eXmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:ofDTDequals",
      "description": {
        "fct-descr": "\u003cp\u003etest an attribute of a DTD part\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlTree -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#ofDTDequals",
        "fct-type": "function",
        "title": "ofDTDequals"
      },
      "index": {
        "description": "test an attribute of DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "ofDTDequals",
        "normalized": "String-\u003eString-\u003eXmlTree-\u003eBool",
        "package": "hxt-filter",
        "partial": "DTDequals",
        "signature": "String-\u003eString-\u003eXmlTree-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:prefixOf",
      "description": {
        "fct-descr": "\u003cp\u003eselect the namespace prefix of a tag or an attribute tree, else the empty string is returned\n see also : \u003ccode\u003e\u003ca\u003enameOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elocalPartOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#prefixOf",
        "fct-type": "function",
        "title": "prefixOf"
      },
      "index": {
        "description": "select the namespace prefix of tag or an attribute tree else the empty string is returned see also nameOf localPartOf",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "prefixOf",
        "normalized": "XmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Of",
        "signature": "XmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXCharRef",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXCharRef",
        "fct-type": "function",
        "title": "showXCharRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "showXCharRef",
        "normalized": "XmlTrees-\u003eString",
        "package": "hxt-filter",
        "partial": "XChar Ref",
        "signature": "XmlTrees-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXEntityRef",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXEntityRef",
        "fct-type": "function",
        "title": "showXEntityRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "showXEntityRef",
        "normalized": "XmlTrees-\u003eString",
        "package": "hxt-filter",
        "partial": "XEntity Ref",
        "signature": "XmlTrees-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXErrors",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXErrors",
        "fct-type": "function",
        "title": "showXErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "showXErrors",
        "normalized": "XmlTrees-\u003eString",
        "package": "hxt-filter",
        "partial": "XErrors",
        "signature": "XmlTrees-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:showXText",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#showXText",
        "fct-type": "function",
        "title": "showXText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "showXText",
        "normalized": "XmlTrees-\u003eString",
        "package": "hxt-filter",
        "partial": "XText",
        "signature": "XmlTrees-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:textOfXNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XNode -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#textOfXNode",
        "fct-type": "function",
        "title": "textOfXNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "textOfXNode",
        "normalized": "XNode-\u003eString",
        "package": "hxt-filter",
        "partial": "Of XNode",
        "signature": "XNode-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:toAttrl",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e Attributes",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#toAttrl",
        "fct-type": "function",
        "title": "toAttrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "toAttrl",
        "normalized": "XmlTrees-\u003eAttributes",
        "package": "hxt-filter",
        "partial": "Attrl",
        "signature": "XmlTrees-\u003eAttributes"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:toTreel",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e AssocList String XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#toTreel",
        "fct-type": "function",
        "title": "toTreel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "toTreel",
        "normalized": "XmlTrees-\u003eAssocList String XmlTrees",
        "package": "hxt-filter",
        "partial": "Treel",
        "signature": "XmlTrees-\u003eAssocList String XmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:universalNameOf",
      "description": {
        "fct-descr": "\u003cp\u003eselect the universal name (namespace uri ++ localPart) of a tag or an attribute tree, else the empty string is returned\n see also : \u003ccode\u003e\u003ca\u003enameOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enamespaceOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#universalNameOf",
        "fct-type": "function",
        "title": "universalNameOf"
      },
      "index": {
        "description": "select the universal name namespace uri localPart of tag or an attribute tree else the empty string is returned see also nameOf namespaceOf",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "universalNameOf",
        "normalized": "XmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Name Of",
        "signature": "XmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:valueOfDTD",
      "description": {
        "fct-descr": "\u003cp\u003eselect a special attribute of a DTD part\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#valueOfDTD",
        "fct-type": "function",
        "title": "valueOfDTD"
      },
      "index": {
        "description": "select special attribute of DTD part",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "valueOfDTD",
        "normalized": "String-\u003eXmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Of DTD",
        "signature": "String-\u003eXmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xattr",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e String -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xattr",
        "fct-type": "function",
        "title": "xattr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xattr",
        "normalized": "String-\u003eString-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eString-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xcmt",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xcmt",
        "fct-type": "function",
        "title": "xcmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xcmt",
        "normalized": "String-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xerr",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xerr",
        "fct-type": "function",
        "title": "xerr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xerr",
        "normalized": "String-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xmlContentModelToString",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xmlContentModelToString",
        "fct-type": "function",
        "title": "xmlContentModelToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xmlContentModelToString",
        "normalized": "XmlTree-\u003eString",
        "package": "hxt-filter",
        "partial": "Content Model To String",
        "signature": "XmlTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xmlTreesToString",
      "description": {
        "fct-descr": "\u003cp\u003eold name for \u003ccode\u003e\u003ca\u003exshow\u003c/a\u003e\u003c/code\u003e (deprecated)\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xmlTreesToString",
        "fct-type": "function",
        "title": "xmlTreesToString"
      },
      "index": {
        "description": "old name for xshow deprecated",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xmlTreesToString",
        "normalized": "XmlTrees-\u003eString",
        "package": "hxt-filter",
        "partial": "Trees To String",
        "signature": "XmlTrees-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xmlTreesToText",
      "description": {
        "fct-descr": "\u003cp\u003econversion of a filter result into a text node\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003exshow\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlSFilter",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xmlTreesToText",
        "fct-type": "function",
        "title": "xmlTreesToText"
      },
      "index": {
        "description": "conversion of filter result into text node see also xshow",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xmlTreesToText",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Trees To Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xtag",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees -\u003e XmlTrees -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xtag",
        "fct-type": "function",
        "title": "xtag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xtag",
        "normalized": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlTrees-\u003eXmlTrees-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xtext",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xtext",
        "fct-type": "function",
        "title": "xtext"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xtext",
        "normalized": "String-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeFunctions.html#v:xwarn",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeFunctions.html#xwarn",
        "fct-type": "function",
        "title": "xwarn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeFunctions",
        "module": "Text.XML.HXT.DOM.XmlTreeFunctions",
        "name": "xwarn",
        "normalized": "String-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eexports the core data types\n and some additional types and functions\n for compatibility with none arrow modules\n\u003c/p\u003e\u003cp\u003eVersion : $Id: XmlTreeTypes.hs,v 1.6 2006\u003cem\u003e05\u003c/em\u003e09 15:30:43 hxml Exp $\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html",
        "fct-type": "module",
        "title": "XmlTreeTypes"
      },
      "index": {
        "description": "exports the core data types and some additional types and functions for compatibility with none arrow modules Version Id XmlTreeTypes.hs hxml Exp",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "XmlTreeTypes",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Tree Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:AttrName",
      "description": {
        "fct-descr": "\u003cp\u003eAttribute name\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#AttrName",
        "fct-type": "type",
        "title": "AttrName"
      },
      "index": {
        "description": "Attribute name",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "AttrName",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Attr Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:TagName",
      "description": {
        "fct-descr": "\u003cp\u003eTag name\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#TagName",
        "fct-type": "type",
        "title": "TagName"
      },
      "index": {
        "description": "Tag name",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "TagName",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Tag Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:XmlFilter",
      "description": {
        "fct-descr": "\u003cp\u003eA functions that takes a node and returns a list of nodes\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#XmlFilter",
        "fct-type": "type",
        "title": "XmlFilter"
      },
      "index": {
        "description": "functions that takes node and returns list of nodes",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "XmlFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#t:XmlSFilter",
      "description": {
        "fct-descr": "\u003cp\u003eA function that takes a list of nodes and returns a list of nodes\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#XmlSFilter",
        "fct-type": "type",
        "title": "XmlSFilter"
      },
      "index": {
        "description": "function that takes list of nodes and returns list of nodes",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "XmlSFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml SFilter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:aName",
      "description": {
        "fct-descr": "\u003cp\u003eshortcut for \u003ccode\u003e\u003ca\u003equalifiedName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#aName",
        "fct-type": "function",
        "title": "aName"
      },
      "index": {
        "description": "shortcut for qualifiedName",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "aName",
        "normalized": "QName-\u003eString",
        "package": "hxt-filter",
        "partial": "Name",
        "signature": "QName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:cardNTree",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "NTree a -\u003e Int",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#cardNTree",
        "fct-type": "function",
        "title": "cardNTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "cardNTree",
        "normalized": "NTree a-\u003eInt",
        "package": "hxt-filter",
        "partial": "NTree",
        "signature": "NTree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:depthNTree",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "NTree a -\u003e Int",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#depthNTree",
        "fct-type": "function",
        "title": "depthNTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "depthNTree",
        "normalized": "NTree a-\u003eInt",
        "package": "hxt-filter",
        "partial": "NTree",
        "signature": "NTree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:foldNTree",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e [b] -\u003e b) -\u003e NTree a -\u003e b",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#foldNTree",
        "fct-type": "function",
        "title": "foldNTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "foldNTree",
        "normalized": "(a-\u003e[b]-\u003eb)-\u003eNTree a-\u003eb",
        "package": "hxt-filter",
        "partial": "NTree",
        "signature": "(a-\u003e[b]-\u003eb)-\u003eNTree a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:formatNTree",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "(node -\u003e String) -\u003e NTree node -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#formatNTree",
        "fct-type": "function",
        "title": "formatNTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "formatNTree",
        "normalized": "(a-\u003eString)-\u003eNTree a-\u003eString",
        "package": "hxt-filter",
        "partial": "NTree",
        "signature": "(node-\u003eString)-\u003eNTree node-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:mapNTree",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "(a -\u003e b) -\u003e NTree a -\u003e NTree b",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#mapNTree",
        "fct-type": "function",
        "title": "mapNTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "mapNTree",
        "normalized": "(a-\u003eb)-\u003eNTree a-\u003eNTree b",
        "package": "hxt-filter",
        "partial": "NTree",
        "signature": "(a-\u003eb)-\u003eNTree a-\u003eNTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:mkNode",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "node -\u003e NTrees node -\u003e NTree node",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#mkNode",
        "fct-type": "function",
        "title": "mkNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "mkNode",
        "normalized": "a-\u003eNTrees a-\u003eNTree a",
        "package": "hxt-filter",
        "partial": "Node",
        "signature": "node-\u003eNTrees node-\u003eNTree node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:nTreeToList",
      "description": {
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "NTree a -\u003e [a]",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#nTreeToList",
        "fct-type": "function",
        "title": "nTreeToList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "nTreeToList",
        "normalized": "NTree a-\u003e[a]",
        "package": "hxt-filter",
        "partial": "Tree To List",
        "signature": "NTree a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM-XmlTreeTypes.html#v:tName",
      "description": {
        "fct-descr": "\u003cp\u003eshortcut for \u003ccode\u003e\u003ca\u003equalifiedName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "fct-package": "hxt-filter",
        "fct-signature": "QName -\u003e String",
        "fct-source": "src/Text-XML-HXT-DOM-XmlTreeTypes.html#tName",
        "fct-type": "function",
        "title": "tName"
      },
      "index": {
        "description": "shortcut for qualifiedName",
        "hierarchy": "Text XML HXT DOM XmlTreeTypes",
        "module": "Text.XML.HXT.DOM.XmlTreeTypes",
        "name": "tName",
        "normalized": "QName-\u003eString",
        "package": "hxt-filter",
        "partial": "Name",
        "signature": "QName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-DOM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDOM data types and functions\n\u003c/p\u003e\u003cp\u003eexport of all basic datatypes and functions of the toolbox DOM.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.DOM",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-DOM.html",
        "fct-type": "module",
        "title": "DOM"
      },
      "index": {
        "description": "DOM data types and functions export of all basic datatypes and functions of the toolbox DOM",
        "hierarchy": "Text XML HXT DOM",
        "module": "Text.XML.HXT.DOM",
        "name": "DOM",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DOM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDTD processing function for\n   including external parts of a DTD\n   parameter entity substitution and general entity substitution\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Parser.DTDProcessing",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-DTDProcessing.html",
        "fct-type": "module",
        "title": "DTDProcessing"
      },
      "index": {
        "description": "DTD processing function for including external parts of DTD parameter entity substitution and general entity substitution",
        "hierarchy": "Text XML HXT Parser DTDProcessing",
        "module": "Text.XML.HXT.Parser.DTDProcessing",
        "name": "DTDProcessing",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DTDProcessing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:checkWellformedDoc",
      "description": {
        "fct-descr": "\u003cp\u003eparses a text node with \u003ccode\u003e\u003ca\u003eparseXmlDoc\u003c/a\u003e\u003c/code\u003e, processes the DTD and general entities\n and transforms all char references into characters\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.DTDProcessing",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-Parser-DTDProcessing.html#checkWellformedDoc",
        "fct-type": "function",
        "title": "checkWellformedDoc"
      },
      "index": {
        "description": "parses text node with parseXmlDoc processes the DTD and general entities and transforms all char references into characters",
        "hierarchy": "Text XML HXT Parser DTDProcessing",
        "module": "Text.XML.HXT.Parser.DTDProcessing",
        "name": "checkWellformedDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Wellformed Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:getWellformedDoc",
      "description": {
        "fct-descr": "\u003cp\u003emonadic filter for reading, parsing and checking a wellformed document.\n the input tree must consist of a root node with a source attribute\n in its attribute list.\n\u003c/p\u003e\u003cp\u003eAll attributes from the document root are copied into the system state,\n and may be queried by the monadic filters, e.g. trace options.\n\u003c/p\u003e\u003cp\u003eResult is the single element list containing the well-formed document tree\n or, in case of errors, the document root with an empty list as children\n and attributes \u003ccode\u003e\u003ca\u003ea_status\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ea_module\u003c/a\u003e\u003c/code\u003e for error level and the module,\n where the error occured.\n\u003c/p\u003e\u003cp\u003ethis is a shortcut for \u003ccode\u003e\u003ca\u003egetXmlContents\u003c/a\u003e\u003c/code\u003e .\u003e\u003e \u003ccode\u003e\u003ca\u003echeckWellformedDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eexample for a main program:\n\u003c/p\u003e\u003cpre\u003e\n main =\n   run' $\n   do\n   res  \u003c- getWellformedDoc $ newDocument \"myfile.xml\"\n   ...\n\u003c/pre\u003e",
        "fct-module": "Text.XML.HXT.Parser.DTDProcessing",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-Parser-DTDProcessing.html#getWellformedDoc",
        "fct-type": "function",
        "title": "getWellformedDoc"
      },
      "index": {
        "description": "monadic filter for reading parsing and checking wellformed document the input tree must consist of root node with source attribute in its attribute list All attributes from the document root are copied into the system state and may be queried by the monadic filters e.g trace options Result is the single element list containing the well-formed document tree or in case of errors the document root with an empty list as children and attributes status and module for error level and the module where the error occured this is shortcut for getXmlContents checkWellformedDoc example for main program main run do res getWellformedDoc newDocument myfile.xml",
        "hierarchy": "Text XML HXT Parser DTDProcessing",
        "module": "Text.XML.HXT.Parser.DTDProcessing",
        "name": "getWellformedDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Wellformed Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:processDTD",
      "description": {
        "fct-descr": "\u003cp\u003ea filter for DTD processing\n\u003c/p\u003e\u003cp\u003einclusion of external parts of DTD,\n parameter entity substitution\n conditional section evaluation\n\u003c/p\u003e\u003cp\u003einput tree must represent a complete document including root node\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.DTDProcessing",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-DTDProcessing.html#processDTD",
        "fct-type": "function",
        "title": "processDTD"
      },
      "index": {
        "description": "filter for DTD processing inclusion of external parts of DTD parameter entity substitution conditional section evaluation input tree must represent complete document including root node",
        "hierarchy": "Text XML HXT Parser DTDProcessing",
        "module": "Text.XML.HXT.Parser.DTDProcessing",
        "name": "processDTD",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DTD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DTDProcessing.html#v:processGeneralEntities",
      "description": {
        "fct-descr": "\u003cp\u003esubstitution of general entities\n\u003c/p\u003e\u003cp\u003einput: a complete document tree including root node\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.DTDProcessing",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-DTDProcessing.html#processGeneralEntities",
        "fct-type": "function",
        "title": "processGeneralEntities"
      },
      "index": {
        "description": "substitution of general entities input complete document tree including root node",
        "hierarchy": "Text XML HXT Parser DTDProcessing",
        "module": "Text.XML.HXT.Parser.DTDProcessing",
        "name": "processGeneralEntities",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "General Entities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DefaultURI.html#",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.DefaultURI",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-DefaultURI.html",
        "fct-type": "module",
        "title": "DefaultURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser DefaultURI",
        "module": "Text.XML.HXT.Parser.DefaultURI",
        "name": "DefaultURI",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Default URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-DefaultURI.html#v:setDefaultURI",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.DefaultURI",
        "fct-package": "hxt-filter",
        "fct-signature": "XState state ()",
        "fct-source": "src/Text-XML-HXT-Parser-DefaultURI.html#setDefaultURI",
        "fct-type": "function",
        "title": "setDefaultURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser DefaultURI",
        "module": "Text.XML.HXT.Parser.DefaultURI",
        "name": "setDefaultURI",
        "normalized": "XState a()",
        "package": "hxt-filter",
        "partial": "Default URI",
        "signature": "XState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis parser tries to interprete everything as HTML\n   no errors are emitted during parsing. If something looks\n   weired, warning messages are inserted in the document tree.\n\u003c/p\u003e\u003cp\u003eModule contains state filter for easy parsing and error handling\n   real work is done in \u003ccode\u003eText.XML.HXT.Parser.HtmlParsec\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Parser.HtmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-HtmlParser.html",
        "fct-type": "module",
        "title": "HtmlParser"
      },
      "index": {
        "description": "This parser tries to interprete everything as HTML no errors are emitted during parsing If something looks weired warning messages are inserted in the document tree Module contains state filter for easy parsing and error handling real work is done in Text.XML.HXT.Parser.HtmlParsec",
        "hierarchy": "Text XML HXT Parser HtmlParser",
        "module": "Text.XML.HXT.Parser.HtmlParser",
        "name": "HtmlParser",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Html Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:getHtmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003eread a document and parse it with \u003ccode\u003e\u003ca\u003eparseHtmlDoc\u003c/a\u003e\u003c/code\u003e. The main entry point of this module\n\u003c/p\u003e\u003cp\u003eThe input tree must be a root tree like in '\tText.XML.HXT.Parser.MainFunctions.getXmlDoc'. The content is read with \u003ccode\u003e\u003ca\u003egetXmlContents\u003c/a\u003e\u003c/code\u003e,\n is parsed with \u003ccode\u003e\u003ca\u003eparseHtmlDoc\u003c/a\u003e\u003c/code\u003e and canonicalized (char refs are substituted in content and attributes,\n but comment is preserved)\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003eText.XML.HXT.Parser.DTDProcessing.getWellformedDoc\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.HtmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-Parser-HtmlParser.html#getHtmlDoc",
        "fct-type": "function",
        "title": "getHtmlDoc"
      },
      "index": {
        "description": "read document and parse it with parseHtmlDoc The main entry point of this module The input tree must be root tree like in Text.XML.HXT.Parser.MainFunctions.getXmlDoc The content is read with getXmlContents is parsed with parseHtmlDoc and canonicalized char refs are substituted in content and attributes but comment is preserved see also Text.XML.HXT.Parser.DTDProcessing.getWellformedDoc",
        "hierarchy": "Text XML HXT Parser HtmlParser",
        "module": "Text.XML.HXT.Parser.HtmlParser",
        "name": "getHtmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Html Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:parseHtmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe HTML parsing filter\n\u003c/p\u003e\u003cp\u003eThe input is parsed with \u003ccode\u003e\u003ca\u003erunHtmlParser\u003c/a\u003e\u003c/code\u003e, everything is interpreted as HTML,\n if errors ocuur, the parser will try to do some meaningfull action and continues\n parsing. Afterwards the entitiy references for defined for XHTML are resovled,\n any unresolved reference is transformed into plain text.\n\u003c/p\u003e\u003cp\u003eError messages\n during parsing and entity resolving are added as warning nodes into the resulting tree.\n\u003c/p\u003e\u003cp\u003eThe warnings are issued, if the 1. parameter noWarnings is set to True,\n afterwards all are removed from the resulting tree.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.HtmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-HtmlParser.html#parseHtmlDoc",
        "fct-type": "function",
        "title": "parseHtmlDoc"
      },
      "index": {
        "description": "The HTML parsing filter The input is parsed with runHtmlParser everything is interpreted as HTML if errors ocuur the parser will try to do some meaningfull action and continues parsing Afterwards the entitiy references for defined for XHTML are resovled any unresolved reference is transformed into plain text Error messages during parsing and entity resolving are added as warning nodes into the resulting tree The warnings are issued if the parameter noWarnings is set to True afterwards all are removed from the resulting tree",
        "hierarchy": "Text XML HXT Parser HtmlParser",
        "module": "Text.XML.HXT.Parser.HtmlParser",
        "name": "parseHtmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Html Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:runHtmlParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe pure HTML parser, usually called via \u003ccode\u003e\u003ca\u003eparseHtmlDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.HtmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-HtmlParser.html#runHtmlParser",
        "fct-type": "function",
        "title": "runHtmlParser"
      },
      "index": {
        "description": "The pure HTML parser usually called via parseHtmlDoc",
        "hierarchy": "Text XML HXT Parser HtmlParser",
        "module": "Text.XML.HXT.Parser.HtmlParser",
        "name": "runHtmlParser",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Html Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-HtmlParser.html#v:substHtmlEntities",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.HtmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-Parser-HtmlParser.html#substHtmlEntities",
        "fct-type": "function",
        "title": "substHtmlEntities"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser HtmlParser",
        "module": "Text.XML.HXT.Parser.HtmlParser",
        "name": "substHtmlEntities",
        "normalized": "XmlTree-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "Html Entities",
        "signature": "XmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple parse functions.\n\u003c/p\u003e\u003cp\u003ethe main building blocks for an application.\n this module exports complex filters and functions for\n common tasks for input and parsing, output and option handling.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Parser.MainFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-MainFunctions.html",
        "fct-type": "module",
        "title": "MainFunctions"
      },
      "index": {
        "description": "Simple parse functions the main building blocks for an application this module exports complex filters and functions for common tasks for input and parsing output and option handling",
        "hierarchy": "Text XML HXT Parser MainFunctions",
        "module": "Text.XML.HXT.Parser.MainFunctions",
        "name": "MainFunctions",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Main Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:getXmlDocument",
      "description": {
        "fct-descr": "\u003cp\u003econvenient function for reading a XML document without\n dealing with state monads, error messages collection and other details\n\u003c/p\u003e\u003cp\u003egetXmlDocument calls \u003ccode\u003e\u003ca\u003eparseDocument\u003c/a\u003e\u003c/code\u003e with the list of parsing options\n and an url or filename as document source.\n\u003c/p\u003e\u003cp\u003eresult is a triple\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the resulting document tree with a root node containing all\n   meta info about the document (options, status info, http header, ...)\n\u003c/li\u003e\u003cli\u003e the list of errors and warnings\n\u003c/li\u003e\u003cli\u003e the error level: one of \u003ccode\u003e\u003ca\u003ec_ok\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ec_warn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ec_err\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ec_fatal\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eexample for input (see also example in \u003ccode\u003e\u003ca\u003eputXmlDocument\u003c/a\u003e\u003c/code\u003e and example in \u003ccode\u003e\u003ca\u003ewriteDocument\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main\n   = do\n     (res, errs, rc) \u003c- getXmlDocument [] \"test.xml\"\n     if rc \u003e= c_err\n       then issueErrors errs\n       else processTree res\n\n issueErrors :: XmlTrees -\u003e IO ()\n\n processTree :: XmlTree  -\u003e IO ()\n\u003c/pre\u003e\u003cp\u003efor options see \u003ccode\u003e\u003ca\u003eparseDocument\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ea_collect_errors\u003c/a\u003e\u003c/code\u003e is set implicitly\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.MainFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Attributes -\u003e String -\u003e IO (XmlTree, XmlTrees, Int)",
        "fct-source": "src/Text-XML-HXT-Parser-MainFunctions.html#getXmlDocument",
        "fct-type": "function",
        "title": "getXmlDocument"
      },
      "index": {
        "description": "convenient function for reading XML document without dealing with state monads error messages collection and other details getXmlDocument calls parseDocument with the list of parsing options and an url or filename as document source result is triple the resulting document tree with root node containing all meta info about the document options status info http header the list of errors and warnings the error level one of ok warn err fatal example for input see also example in putXmlDocument and example in writeDocument main IO main do res errs rc getXmlDocument test.xml if rc err then issueErrors errs else processTree res issueErrors XmlTrees IO processTree XmlTree IO for options see parseDocument collect errors is set implicitly",
        "hierarchy": "Text XML HXT Parser MainFunctions",
        "module": "Text.XML.HXT.Parser.MainFunctions",
        "name": "getXmlDocument",
        "normalized": "Attributes-\u003eString-\u003eIO(XmlTree,XmlTrees,Int)",
        "package": "hxt-filter",
        "partial": "Xml Document",
        "signature": "Attributes-\u003eString-\u003eIO(XmlTree,XmlTrees,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:parseDocument",
      "description": {
        "fct-descr": "\u003cp\u003ethe main parsing filter\n\u003c/p\u003e\u003cp\u003ethis filter can be configured by an option list, a list of\n option name, option value pairs.\n the input tree must be a possibly empty document root tree.\n all the options are stored as attributes in this root node to control processing.\n\u003c/p\u003e\u003cp\u003eavailable options:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_parse_html\u003c/a\u003e\u003c/code\u003e: use HTML parser, else use XML parser (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_validate\u003c/a\u003e\u003c/code\u003e : validate document (default), else skip validation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_check_namespaces\u003c/a\u003e\u003c/code\u003e : check namespaces, else skip namespace processing (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_canonicalize\u003c/a\u003e\u003c/code\u003e : canonicalize document (default), else skip canonicalization\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_preserve_comment\u003c/a\u003e\u003c/code\u003e : preserve comments during canonicalization, else remove comments (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_remove_whitespace\u003c/a\u003e\u003c/code\u003e : remove all whitespace, used for document indentation, else skip this step (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_indent\u003c/a\u003e\u003c/code\u003e : indent document by inserting whitespace, else skip this step (default)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_issue_warnings\u003c/a\u003e\u003c/code\u003e : issue warnings, when parsing HTML (default), else ignore HTML parser warnings\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_issue_errors\u003c/a\u003e\u003c/code\u003e : issue all error messages on stderr (default), or ignore all error messages\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_collect_errors\u003c/a\u003e\u003c/code\u003e : all error messages are collected during processing and appended to the result document\n \t\t\t  for further processing within the calling modules\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_trace\u003c/a\u003e\u003c/code\u003e : trace level: values: 0 -4\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_proxy\u003c/a\u003e\u003c/code\u003e : proxy for http access, e.g. www-cache:3128\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_use_curl\u003c/a\u003e\u003c/code\u003e : for http access via external programm curl, default is native HTTP access\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_options_curl\u003c/a\u003e\u003c/code\u003e : more options for external program curl\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_source\u003c/a\u003e\u003c/code\u003e : the document source url\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_encoding\u003c/a\u003e\u003c/code\u003e : default document encoding (\u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisoLatin1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusAscii\u003c/a\u003e\u003c/code\u003e, ...)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eexamples:\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,   \"test.xml\")\n               , (a_validate, \"0\")\n               , (a_encoding, isoLatin1)\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003ereads document \"test.xml\" without validation and default encoding \u003ccode\u003e\u003ca\u003eisoLatin1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,         \"http://www.haskell.org/\")\n               , (a_parse_html,     \"1\")\n               , (a_proxy,          \"www-cache:3128\")\n               , (a_curl,           \"1\")\n               , (a_issue_warnings, \"0\")\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003ereads Haskell homepage with HTML parser ignoring any warnings and with http access via external program curl and proxy \"www-cache\" at port 3128\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,            \"http://www.w3c.org/\")\n               , (a_parse_html,        \"0\")                       -- default\n               , (a_validate,          \"1\")                       -- default\n               , (a_check_namespace,   \"1\")\n               , (a_remove_whitespace, \"1\")\n               , (a_trace,             \"2\")\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003eread w3c home page, validate and chech namespaces, remove whitespace between tags, trace activities with level 2\n\u003c/p\u003e\u003cpre\u003e parseDocument [ (a_source,   \"test.xml\")\n               , (a_validate,        \"1\")\n               , (a_check_namespace, \"1\")\n               , (a_collect_errors,  \"1\")\n               , (a_issue_errors,    \"0\")\n               ] emptyRoot\n\u003c/pre\u003e\u003cp\u003ereads file \"test.xml\", validates it, checks namespaces, does not issue any erros\n but collects errors and appends the list of errors to the single element list for the document.\n this enables the calling application to define own error handlers.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.MainFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Attributes -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-Parser-MainFunctions.html#parseDocument",
        "fct-type": "function",
        "title": "parseDocument"
      },
      "index": {
        "description": "the main parsing filter this filter can be configured by an option list list of option name option value pairs the input tree must be possibly empty document root tree all the options are stored as attributes in this root node to control processing available options parse html use HTML parser else use XML parser default validate validate document default else skip validation check namespaces check namespaces else skip namespace processing default canonicalize canonicalize document default else skip canonicalization preserve comment preserve comments during canonicalization else remove comments default remove whitespace remove all whitespace used for document indentation else skip this step default indent indent document by inserting whitespace else skip this step default issue warnings issue warnings when parsing HTML default else ignore HTML parser warnings issue errors issue all error messages on stderr default or ignore all error messages collect errors all error messages are collected during processing and appended to the result document for further processing within the calling modules trace trace level values proxy proxy for http access e.g www-cache use curl for http access via external programm curl default is native HTTP access options curl more options for external program curl source the document source url encoding default document encoding utf8 isoLatin1 usAscii examples parseDocument source test.xml validate encoding isoLatin1 emptyRoot reads document test.xml without validation and default encoding isoLatin1 parseDocument source http www.haskell.org parse html proxy www-cache curl issue warnings emptyRoot reads Haskell homepage with HTML parser ignoring any warnings and with http access via external program curl and proxy www-cache at port parseDocument source http www.w3c.org parse html default validate default check namespace remove whitespace trace emptyRoot read w3c home page validate and chech namespaces remove whitespace between tags trace activities with level parseDocument source test.xml validate check namespace collect errors issue errors emptyRoot reads file test.xml validates it checks namespaces does not issue any erros but collects errors and appends the list of errors to the single element list for the document this enables the calling application to define own error handlers",
        "hierarchy": "Text XML HXT Parser MainFunctions",
        "module": "Text.XML.HXT.Parser.MainFunctions",
        "name": "parseDocument",
        "normalized": "Attributes-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Document",
        "signature": "Attributes-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:putXmlDocument",
      "description": {
        "fct-descr": "\u003cp\u003ethe inverse operation to \u003ccode\u003e\u003ca\u003egetXmlDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ewrites a complete document tree to a file, writing can be\n controlled by options, the real work is done with filter \u003ccode\u003e\u003ca\u003ewriteDocument\u003c/a\u003e\u003c/code\u003e.\n useful options are the options of \u003ccode\u003e\u003ca\u003ewriteDocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eresult is a pair: 1.part is a list of error messages, 2. part is the return code,\n the status info of the write filter\n\u003c/p\u003e\u003cp\u003ethis filter is useful, when processing XML in an arbitray context in the IO monad\n\u003c/p\u003e\u003cp\u003ean example main program for such an application is:\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main\n   = do\n     (input, readErrs, rc) \u003c- getXmlDocument [...] \"test.xml\"\n     if rc \u003e= c_err\n       then issueErrors readErrs\n       else processTree input\n\n processTree :: XmlTree -\u003e IO ()\n processTree t\n   = let res = computeNewTree input\n     in do\n        (writeErrs, rc2) \u003c- putXmlDocument [...] \"out.xml\" res\n        if rc2 \u003e= c_err\n          then issueErrors writeErrs\n          else return ()\n\n issueErrors :: XmlTrees -\u003e IO ()\n\n computeNewTree :: XmlTree -\u003e XmlTree\n\u003c/pre\u003e",
        "fct-module": "Text.XML.HXT.Parser.MainFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Attributes -\u003e String -\u003e XmlTree -\u003e IO (XmlTrees, Int)",
        "fct-source": "src/Text-XML-HXT-Parser-MainFunctions.html#putXmlDocument",
        "fct-type": "function",
        "title": "putXmlDocument"
      },
      "index": {
        "description": "the inverse operation to getXmlDocument writes complete document tree to file writing can be controlled by options the real work is done with filter writeDocument useful options are the options of writeDocument result is pair part is list of error messages part is the return code the status info of the write filter this filter is useful when processing XML in an arbitray context in the IO monad an example main program for such an application is main IO main do input readErrs rc getXmlDocument test.xml if rc err then issueErrors readErrs else processTree input processTree XmlTree IO processTree let res computeNewTree input in do writeErrs rc2 putXmlDocument out.xml res if rc2 err then issueErrors writeErrs else return issueErrors XmlTrees IO computeNewTree XmlTree XmlTree",
        "hierarchy": "Text XML HXT Parser MainFunctions",
        "module": "Text.XML.HXT.Parser.MainFunctions",
        "name": "putXmlDocument",
        "normalized": "Attributes-\u003eString-\u003eXmlTree-\u003eIO(XmlTrees,Int)",
        "package": "hxt-filter",
        "partial": "Xml Document",
        "signature": "Attributes-\u003eString-\u003eXmlTree-\u003eIO(XmlTrees,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-MainFunctions.html#v:writeDocument",
      "description": {
        "fct-descr": "\u003cp\u003ethe main filter for writing documents\n\u003c/p\u003e\u003cp\u003ethis filter can be configured by an option list like \u003ccode\u003e\u003ca\u003egetXmlDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eavailable options are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_indent\u003c/a\u003e\u003c/code\u003e : indent document for readability, (default: no indentation)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_remove_whitespace\u003c/a\u003e\u003c/code\u003e : remove all redundant whitespace for shorten text (default: no removal)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_output_file\u003c/a\u003e\u003c/code\u003e : destination file for document, default is \"-\" for stdout\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_output_encoding\u003c/a\u003e\u003c/code\u003e : encoding of document, default is \u003ccode\u003e\u003ca\u003ea_encoding\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_output_xml\u003c/a\u003e\u003c/code\u003e : (default) issue XML: quote special XML chars \u003e,\u003c,\",',&\n                    add XML processing instruction\n                    and encode document with respect to \u003ccode\u003e\u003ca\u003ea_output_encoding\u003c/a\u003e\u003c/code\u003e,\n                    if explizitly switched of, the plain text is issued, this is useful\n                    for non XML output, e.g. generated Haskell code, LaTex, Java, ...\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_show_tree\u003c/a\u003e\u003c/code\u003e : show tree representation of document (for debugging)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_show_haskell\u003c/a\u003e\u003c/code\u003e : show Haskell representaion of document (for debugging)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ea_issue_errors\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ea_collect_errors\u003c/a\u003e\u003c/code\u003e : see \u003ccode\u003e\u003ca\u003eparseDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ea typical main program running in the XmlState monad\n  has the following structure:\n\u003c/p\u003e\u003cpre\u003e\n main :: IO ()\n main\n     = do\n       argv \u003c- getArgs                                              -- get the commandline arguments\n       (inp, outp, options) \u003c- cmdlineOpts argv                     -- and evaluate them, return a key-value list\n                                                                    -- and input and output\n       res  \u003c- run' $ application inp outp options $ emptyRoot      -- run the application\n \n       exitWith (if null res\n                 then ExitFailure (-1)\n                 else exitSuccess\n                )\n\n application :: String -\u003e String -\u003e Attributes -\u003e XmlStateFilter ()\n application inp outp al\n   = parseDocument (al ++ [(a_source, inp)])                        -- set options and source\n     .\u003e\u003e                                                            -- and parse document\n     processDocument                                                -- the hard work\n     .\u003e\u003e\n     writeDocument [(a_output_file, outp)]                          -- issue results\n     .\u003e\u003e\n     checkStatus                                                    -- check errors\n\n\u003c/pre\u003e",
        "fct-module": "Text.XML.HXT.Parser.MainFunctions",
        "fct-package": "hxt-filter",
        "fct-signature": "Attributes -\u003e XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-Parser-MainFunctions.html#writeDocument",
        "fct-type": "function",
        "title": "writeDocument"
      },
      "index": {
        "description": "the main filter for writing documents this filter can be configured by an option list like getXmlDocument available options are indent indent document for readability default no indentation remove whitespace remove all redundant whitespace for shorten text default no removal output file destination file for document default is for stdout output encoding encoding of document default is encoding or utf8 output xml default issue XML quote special XML chars add XML processing instruction and encode document with respect to output encoding if explizitly switched of the plain text is issued this is useful for non XML output e.g generated Haskell code LaTex Java show tree show tree representation of document for debugging show haskell show Haskell representaion of document for debugging issue errors collect errors see parseDocument typical main program running in the XmlState monad has the following structure main IO main do argv getArgs get the commandline arguments inp outp options cmdlineOpts argv and evaluate them return key-value list and input and output res run application inp outp options emptyRoot run the application exitWith if null res then ExitFailure else exitSuccess application String String Attributes XmlStateFilter application inp outp al parseDocument al source inp set options and source and parse document processDocument the hard work writeDocument output file outp issue results checkStatus check errors",
        "hierarchy": "Text XML HXT Parser MainFunctions",
        "module": "Text.XML.HXT.Parser.MainFunctions",
        "name": "writeDocument",
        "normalized": "Attributes-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Document",
        "signature": "Attributes-\u003eXmlStateFilter state"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandler.html#",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandler",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandler.html",
        "fct-type": "module",
        "title": "ProtocolHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandler",
        "module": "Text.XML.HXT.Parser.ProtocolHandler",
        "name": "ProtocolHandler",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Protocol Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandler.html#v:getProtocolHandler",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandler",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e URI -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandler.html#getProtocolHandler",
        "fct-type": "function",
        "title": "getProtocolHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandler",
        "module": "Text.XML.HXT.Parser.ProtocolHandler",
        "name": "getProtocolHandler",
        "normalized": "String-\u003eURI-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Protocol Handler",
        "signature": "String-\u003eURI-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerFile.html#",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerFile.html",
        "fct-type": "module",
        "title": "ProtocolHandlerFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerFile",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
        "name": "ProtocolHandlerFile",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Protocol Handler File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerFile.html#v:getFileContents",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
        "fct-package": "hxt-filter",
        "fct-signature": "URI -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerFile.html#getFileContents",
        "fct-type": "function",
        "title": "getFileContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerFile",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerFile",
        "name": "getFileContents",
        "normalized": "URI-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "File Contents",
        "signature": "URI-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html#",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html",
        "fct-type": "module",
        "title": "ProtocolHandlerHttpCurl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpCurl",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
        "name": "ProtocolHandlerHttpCurl",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Protocol Handler Http Curl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html#v:getHttpContentsWithCurl",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
        "fct-package": "hxt-filter",
        "fct-signature": "URI -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpCurl.html#getHttpContentsWithCurl",
        "fct-type": "function",
        "title": "getHttpContentsWithCurl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpCurl",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpCurl",
        "name": "getHttpContentsWithCurl",
        "normalized": "URI-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Http Contents With Curl",
        "signature": "URI-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html#",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html",
        "fct-type": "module",
        "title": "ProtocolHandlerHttpNative"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNative",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
        "name": "ProtocolHandlerHttpNative",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Protocol Handler Http Native",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html#v:getHttpContentsWithHttp",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
        "fct-package": "hxt-filter",
        "fct-signature": "URI -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNative.html#getHttpContentsWithHttp",
        "fct-type": "function",
        "title": "getHttpContentsWithHttp"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNative",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNative",
        "name": "getHttpContentsWithHttp",
        "normalized": "URI-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Http Contents With Http",
        "signature": "URI-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html#",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html",
        "fct-type": "module",
        "title": "ProtocolHandlerHttpNativeOrCurl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNativeOrCurl",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
        "name": "ProtocolHandlerHttpNativeOrCurl",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Protocol Handler Http Native Or Curl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html#v:getHttpContentsNativeOrWithCurl",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
        "fct-package": "hxt-filter",
        "fct-signature": "URI -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-ProtocolHandlerHttpNativeOrCurl.html#getHttpContentsNativeOrWithCurl",
        "fct-type": "function",
        "title": "getHttpContentsNativeOrWithCurl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser ProtocolHandlerHttpNativeOrCurl",
        "module": "Text.XML.HXT.Parser.ProtocolHandlerHttpNativeOrCurl",
        "name": "getHttpContentsNativeOrWithCurl",
        "normalized": "URI-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Http Contents Native Or With Curl",
        "signature": "URI-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html",
        "fct-type": "module",
        "title": "XmlInput"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "XmlInput",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getAbsolutURI",
      "description": {
        "fct-descr": "\u003cp\u003etransform an URI into an absolut URI using the current base URI\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter uri :  the URI as string\n\u003c/li\u003e\u003cli\u003e returns : the absolut URI as string or \"\" in case of an error\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XState state String",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#getAbsolutURI",
        "fct-type": "function",
        "title": "getAbsolutURI"
      },
      "index": {
        "description": "transform an URI into an absolut URI using the current base URI parameter uri the URI as string returns the absolut URI as string or in case of an error",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "getAbsolutURI",
        "normalized": "String-\u003eXState a String",
        "package": "hxt-filter",
        "partial": "Absolut URI",
        "signature": "String-\u003eXState state String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getBaseURI",
      "description": {
        "fct-descr": "\u003cp\u003eread the current base URI\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003esetBaseURI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XState state String",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#getBaseURI",
        "fct-type": "function",
        "title": "getBaseURI"
      },
      "index": {
        "description": "read the current base URI see also setBaseURI",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "getBaseURI",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Base URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getContentLength",
      "description": {
        "fct-descr": "\u003cp\u003ecompute the length of the data for a document read previously\n by a call of 'getUrlContents. The result is stored as an attribute\n value in the document root node. the attribute name is \u003ccode\u003e\u003ca\u003ea_contentLength\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#getContentLength",
        "fct-type": "function",
        "title": "getContentLength"
      },
      "index": {
        "description": "compute the length of the data for document read previously by call of getUrlContents The result is stored as an attribute value in the document root node the attribute name is contentLength",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "getContentLength",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Content Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getUrlContents",
      "description": {
        "fct-descr": "\u003cp\u003ethe hard io operations\n\u003c/p\u003e\u003cp\u003efor reading a file or accessing a document via http\n input must be a root node with a \u003ccode\u003esource\u003c/code\u003e attribute specifying the URI\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#getUrlContents",
        "fct-type": "function",
        "title": "getUrlContents"
      },
      "index": {
        "description": "the hard io operations for reading file or accessing document via http input must be root node with source attribute specifying the URI",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "getUrlContents",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Url Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getXmlContents",
      "description": {
        "fct-descr": "\u003cp\u003efilter for reading the content of a XML document\n\u003c/p\u003e\u003cp\u003einput is a root node with the source as an attibute\n the text is read, the encoding scheme is parsed and selected\n and the input is translated into the internal UTF-8 string representation\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#getXmlContents",
        "fct-type": "function",
        "title": "getXmlContents"
      },
      "index": {
        "description": "filter for reading the content of XML document input is root node with the source as an attibute the text is read the encoding scheme is parsed and selected and the input is translated into the internal UTF-8 string representation",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "getXmlContents",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:getXmlEntityContents",
      "description": {
        "fct-descr": "\u003cp\u003efilter for reading the content of an external XML entity\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetXmlContents\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#getXmlEntityContents",
        "fct-type": "function",
        "title": "getXmlEntityContents"
      },
      "index": {
        "description": "filter for reading the content of an external XML entity see also getXmlContents",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "getXmlEntityContents",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Entity Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:guessDocEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eguessEncoding uses encoding attribute and content\n to determine the encoding scheme.\n\u003c/p\u003e\u003cp\u003eit's assumed that an encoding spec has been tried to parse before guessing the encoding.\n\u003c/p\u003e\u003cp\u003eUTF-8 is the default encoding\n\u003c/p\u003e\u003cp\u003eother supported encodings are ISO-8859-1 (also known as ISO-Latin-1),\n US-ASCII, UTF-16 or ISO-10646-UCS-2, UTF-16BE, UTF-16LE\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#guessDocEncoding",
        "fct-type": "function",
        "title": "guessDocEncoding"
      },
      "index": {
        "description": "guessEncoding uses encoding attribute and content to determine the encoding scheme it assumed that an encoding spec has been tried to parse before guessing the encoding UTF-8 is the default encoding other supported encodings are ISO-8859-1 also known as ISO-Latin-1 US-ASCII UTF-16 or ISO-10646-UCS-2 UTF-16BE UTF-16LE",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "guessDocEncoding",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doc Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:isStandaloneDocument",
      "description": {
        "fct-descr": "\u003cp\u003epredicate for testing the standalone document attribute\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XState state Bool",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#isStandaloneDocument",
        "fct-type": "function",
        "title": "isStandaloneDocument"
      },
      "index": {
        "description": "predicate for testing the standalone document attribute",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "isStandaloneDocument",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Standalone Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:runInLocalURIContext",
      "description": {
        "fct-descr": "\u003cp\u003efilter command for saving and restoring\n the base URI\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter f :  the filter that possible changes the base URI\n\u003c/li\u003e\u003cli\u003e returns : a filter with the same effect as f, that restores the base URI after application of f\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#runInLocalURIContext",
        "fct-type": "function",
        "title": "runInLocalURIContext"
      },
      "index": {
        "description": "filter command for saving and restoring the base URI parameter the filter that possible changes the base URI returns filter with the same effect as that restores the base URI after application of",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "runInLocalURIContext",
        "normalized": "XmlStateFilter a-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "In Local URIContext",
        "signature": "XmlStateFilter a-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:runInNewURIContext",
      "description": {
        "fct-descr": "\u003cp\u003efilter command for running an action in a new URI context\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlStateFilter a -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#runInNewURIContext",
        "fct-type": "function",
        "title": "runInNewURIContext"
      },
      "index": {
        "description": "filter command for running an action in new URI context",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "runInNewURIContext",
        "normalized": "String-\u003eXmlStateFilter a-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "In New URIContext",
        "signature": "String-\u003eXmlStateFilter a-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlInput.html#v:setBaseURI",
      "description": {
        "fct-descr": "\u003cp\u003eset the base URI, all other URIs are handled relative to this base URI\n\u003c/p\u003e\u003cp\u003ethe default base URI is \u003ccode\u003efile:///\u003ccurrent-working-dir\u003e/\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003egetBaseURI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlInput",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XState state ()",
        "fct-source": "src/Text-XML-HXT-Parser-XmlInput.html#setBaseURI",
        "fct-type": "function",
        "title": "setBaseURI"
      },
      "index": {
        "description": "set the base URI all other URIs are handled relative to this base URI the default base URI is file current-working-dir see also getBaseURI",
        "hierarchy": "Text XML HXT Parser XmlInput",
        "module": "Text.XML.HXT.Parser.XmlInput",
        "name": "setBaseURI",
        "normalized": "String-\u003eXState a()",
        "package": "hxt-filter",
        "partial": "Base URI",
        "signature": "String-\u003eXState state()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eoutput functions\n implemented as filer\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html",
        "fct-type": "module",
        "title": "XmlOutput"
      },
      "index": {
        "description": "output functions implemented as filer",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "XmlOutput",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:hPutXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003edocument output for arbitrary files.\n\u003c/p\u003e\u003cp\u003eResult is the input document\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "Handle -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#hPutXmlDoc",
        "fct-type": "function",
        "title": "hPutXmlDoc"
      },
      "index": {
        "description": "document output for arbitrary files Result is the input document",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "hPutXmlDoc",
        "normalized": "Handle-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Put Xml Doc",
        "signature": "Handle-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:hPutXmlSource",
      "description": {
        "fct-descr": "\u003cp\u003eoutput of text representation for trace\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "Handle -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#hPutXmlSource",
        "fct-type": "function",
        "title": "hPutXmlSource"
      },
      "index": {
        "description": "output of text representation for trace",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "hPutXmlSource",
        "normalized": "Handle-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Put Xml Source",
        "signature": "Handle-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:hPutXmlTree",
      "description": {
        "fct-descr": "\u003cp\u003eoutput of tree representation for trace\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "Handle -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#hPutXmlTree",
        "fct-type": "function",
        "title": "hPutXmlTree"
      },
      "index": {
        "description": "output of tree representation for trace",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "hPutXmlTree",
        "normalized": "Handle-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Put Xml Tree",
        "signature": "Handle-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003edocument output for standard output\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ehPutXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlDoc",
        "fct-type": "function",
        "title": "putXmlDoc"
      },
      "index": {
        "description": "document output for standard output see also hPutXmlDoc",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "putXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlDocToFile",
      "description": {
        "fct-descr": "\u003cp\u003edocument output on a given file name\n\u003c/p\u003e\u003cp\u003eResult is the input document\n\u003c/p\u003e\u003cp\u003esee also : \u003ccode\u003e\u003ca\u003ehPutXmlDoc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eputXmlDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlDocToFile",
        "fct-type": "function",
        "title": "putXmlDocToFile"
      },
      "index": {
        "description": "document output on given file name Result is the input document see also hPutXmlDoc putXmlDoc",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "putXmlDocToFile",
        "normalized": "String-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Xml Doc To File",
        "signature": "String-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlSource",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlSource",
        "fct-type": "function",
        "title": "putXmlSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "putXmlSource",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:putXmlTree",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#putXmlTree",
        "fct-type": "function",
        "title": "putXmlTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "putXmlTree",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceF",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e XmlStateFilter a -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceF",
        "fct-type": "function",
        "title": "traceF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "traceF",
        "normalized": "Int-\u003eXmlStateFilter a-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "Int-\u003eXmlStateFilter a-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceMsg",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "Int -\u003e String -\u003e XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceMsg",
        "fct-type": "function",
        "title": "traceMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "traceMsg",
        "normalized": "Int-\u003eString-\u003eXmlStateFilter a",
        "package": "hxt-filter",
        "partial": "Msg",
        "signature": "Int-\u003eString-\u003eXmlStateFilter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceSource",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceSource",
        "fct-type": "function",
        "title": "traceSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "traceSource",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlOutput.html#v:traceTree",
      "description": {
        "fct-module": "Text.XML.HXT.Parser.XmlOutput",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlOutput.html#traceTree",
        "fct-type": "function",
        "title": "traceTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Parser XmlOutput",
        "module": "Text.XML.HXT.Parser.XmlOutput",
        "name": "traceTree",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXml Parser: the main parse filter \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser-XmlParser.html",
        "fct-type": "module",
        "title": "XmlParser"
      },
      "index": {
        "description": "Xml Parser the main parse filter",
        "hierarchy": "Text XML HXT Parser XmlParser",
        "module": "Text.XML.HXT.Parser.XmlParser",
        "name": "XmlParser",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlParser.html#v:parseXmlDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic parser for a whole document.\n input must be a root node with a single text child.\n Error messages are issued and global error state is set.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter a",
        "fct-source": "src/Text-XML-HXT-Parser-XmlParser.html#parseXmlDoc",
        "fct-type": "function",
        "title": "parseXmlDoc"
      },
      "index": {
        "description": "The monadic parser for whole document input must be root node with single text child Error messages are issued and global error state is set",
        "hierarchy": "Text XML HXT Parser XmlParser",
        "module": "Text.XML.HXT.Parser.XmlParser",
        "name": "parseXmlDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser-XmlParser.html#v:substXmlEntities",
      "description": {
        "fct-descr": "\u003cp\u003eFilter for substitution of all occurences of the predefined XML entites quot, amp, lt, gt, apos\n by equivalent character references\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Parser.XmlParser",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Parser-XmlParser.html#substXmlEntities",
        "fct-type": "function",
        "title": "substXmlEntities"
      },
      "index": {
        "description": "Filter for substitution of all occurences of the predefined XML entites quot amp lt gt apos by equivalent character references",
        "hierarchy": "Text XML HXT Parser XmlParser",
        "module": "Text.XML.HXT.Parser.XmlParser",
        "name": "substXmlEntities",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml Entities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple parse functions.\n\u003c/p\u003e\u003cp\u003ethe \u003ca\u003emain\u003c/a\u003e building blocks for an application.\n this module exports all important functions for parsing, validating and transforming XML.\n it also exports all basic datatypes and functions of the toolbox.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Parser",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Simple parse functions the main building blocks for an application this module exports all important functions for parsing validating and transforming XML it also exports all basic datatypes and functions of the toolbox",
        "hierarchy": "Text XML HXT Parser",
        "module": "Text.XML.HXT.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-AttributeValueValidation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating attributes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.AttributeValueValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-AttributeValueValidation.html",
        "fct-type": "module",
        "title": "AttributeValueValidation"
      },
      "index": {
        "description": "This module provides functions for validating attributes",
        "hierarchy": "Text XML HXT Validator AttributeValueValidation",
        "module": "Text.XML.HXT.Validator.AttributeValueValidation",
        "name": "AttributeValueValidation",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Attribute Value Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-AttributeValueValidation.html#v:checkAttributeValue",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if the attribute value meets the lexical constraints of its type.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the children of the \u003ccode\u003eDOCTYPE\u003c/code\u003e node\n\u003c/li\u003e\u003cli\u003e 2.parameter attrDecl :  the declaration of the attribute from the DTD\n\u003c/li\u003e\u003cli\u003e returns : a function which takes an element (XTag or XDTD ATTLIST),\n                    checks if the attribute value meets the lexical constraints\n                    of its type and returns a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.AttributeValueValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTrees -\u003e XmlTree -\u003e XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-AttributeValueValidation.html#checkAttributeValue",
        "fct-type": "function",
        "title": "checkAttributeValue"
      },
      "index": {
        "description": "Checks if the attribute value meets the lexical constraints of its type parameter dtdPart the children of the DOCTYPE node parameter attrDecl the declaration of the attribute from the DTD returns function which takes an element XTag or XDTD ATTLIST checks if the attribute value meets the lexical constraints of its type and returns list of errors",
        "hierarchy": "Text XML HXT Validator AttributeValueValidation",
        "module": "Text.XML.HXT.Validator.AttributeValueValidation",
        "name": "checkAttributeValue",
        "normalized": "XmlTrees-\u003eXmlTree-\u003eXmlFilter",
        "package": "hxt-filter",
        "partial": "Attribute Value",
        "signature": "XmlTrees-\u003eXmlTree-\u003eXmlFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-AttributeValueValidation.html#v:normalizeAttributeValue",
      "description": {
        "fct-descr": "\u003cp\u003eNormalizes an attribute value with respect to its type. (3.3.3 / p.29 in Spec)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter attrDecl :  the declaration of the attribute from the DTD. Expected\n                   is a list. If the list is empty, no declaration exists.\n\u003c/li\u003e\u003cli\u003e 2.parameter value :  the attribute value to be normalized\n\u003c/li\u003e\u003cli\u003e returns : the normalized value\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.AttributeValueValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "Maybe XmlTree -\u003e String -\u003e String",
        "fct-source": "src/Text-XML-HXT-Validator-AttributeValueValidation.html#normalizeAttributeValue",
        "fct-type": "function",
        "title": "normalizeAttributeValue"
      },
      "index": {
        "description": "Normalizes an attribute value with respect to its type p.29 in Spec parameter attrDecl the declaration of the attribute from the DTD Expected is list If the list is empty no declaration exists parameter value the attribute value to be normalized returns the normalized value",
        "hierarchy": "Text XML HXT Validator AttributeValueValidation",
        "module": "Text.XML.HXT.Validator.AttributeValueValidation",
        "name": "normalizeAttributeValue",
        "normalized": "Maybe XmlTree-\u003eString-\u003eString",
        "package": "hxt-filter",
        "partial": "Attribute Value",
        "signature": "Maybe XmlTree-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DTDValidation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating the DTD of XML documents\n represented as XmlTree.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.DTDValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-DTDValidation.html",
        "fct-type": "module",
        "title": "DTDValidation"
      },
      "index": {
        "description": "This module provides functions for validating the DTD of XML documents represented as XmlTree",
        "hierarchy": "Text XML HXT Validator DTDValidation",
        "module": "Text.XML.HXT.Validator.DTDValidation",
        "name": "DTDValidation",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DTDValidation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DTDValidation.html#v:removeDoublicateDefs",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves doublicate declarations from the DTD, which first declaration is\n binding. This is the case for ATTLIST and ENTITY declarations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : A function that replaces the children of DOCTYPE nodes by a list\n               where all multiple declarations are removed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.DTDValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-DTDValidation.html#removeDoublicateDefs",
        "fct-type": "function",
        "title": "removeDoublicateDefs"
      },
      "index": {
        "description": "Removes doublicate declarations from the DTD which first declaration is binding This is the case for ATTLIST and ENTITY declarations returns function that replaces the children of DOCTYPE nodes by list where all multiple declarations are removed",
        "hierarchy": "Text XML HXT Validator DTDValidation",
        "module": "Text.XML.HXT.Validator.DTDValidation",
        "name": "removeDoublicateDefs",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doublicate Defs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DTDValidation.html#v:validateDTD",
      "description": {
        "fct-descr": "\u003cp\u003eValidate a DTD.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a functions which takes the DTD subset of the XmlTree, checks\n                  if the DTD is valid and returns a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.DTDValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-DTDValidation.html#validateDTD",
        "fct-type": "function",
        "title": "validateDTD"
      },
      "index": {
        "description": "Validate DTD returns functions which takes the DTD subset of the XmlTree checks if the DTD is valid and returns list of errors",
        "hierarchy": "Text XML HXT Validator DTDValidation",
        "module": "Text.XML.HXT.Validator.DTDValidation",
        "name": "validateDTD",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DTD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocTransformation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for transforming XML documents represented as\n XmlTree with respect to its DTD.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.DocTransformation",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-DocTransformation.html",
        "fct-type": "module",
        "title": "DocTransformation"
      },
      "index": {
        "description": "This module provides functions for transforming XML documents represented as XmlTree with respect to its DTD",
        "hierarchy": "Text XML HXT Validator DocTransformation",
        "module": "Text.XML.HXT.Validator.DocTransformation",
        "name": "DocTransformation",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doc Transformation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocTransformation.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003efilter for transforming the document.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the DTD subset (Node \u003ccode\u003eDOCTYPE\u003c/code\u003e) of the XmlTree\n\u003c/li\u003e\u003cli\u003e 2.parameter doc :  the document subset of the XmlTree\n\u003c/li\u003e\u003cli\u003e returns : a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.DocTransformation",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-Validator-DocTransformation.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "filter for transforming the document parameter dtdPart the DTD subset Node DOCTYPE of the XmlTree parameter doc the document subset of the XmlTree returns list of errors",
        "hierarchy": "Text XML HXT Validator DocTransformation",
        "module": "Text.XML.HXT.Validator.DocTransformation",
        "name": "transform",
        "normalized": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "",
        "signature": "XmlTree-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocValidation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating XML Documents represented as\n XmlTree.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.DocValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-DocValidation.html",
        "fct-type": "module",
        "title": "DocValidation"
      },
      "index": {
        "description": "This module provides functions for validating XML Documents represented as XmlTree",
        "hierarchy": "Text XML HXT Validator DocValidation",
        "module": "Text.XML.HXT.Validator.DocValidation",
        "name": "DocValidation",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doc Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-DocValidation.html#v:validateDoc",
      "description": {
        "fct-descr": "\u003cp\u003eValidate a document.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the DTD subset (Node \u003ccode\u003eDOCTYPE\u003c/code\u003e) of the XmlTree\n\u003c/li\u003e\u003cli\u003e 2.parameter doc :  the document subset of the XmlTree\n\u003c/li\u003e\u003cli\u003e returns : a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.DocValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-Validator-DocValidation.html#validateDoc",
        "fct-type": "function",
        "title": "validateDoc"
      },
      "index": {
        "description": "Validate document parameter dtdPart the DTD subset Node DOCTYPE of the XmlTree parameter doc the document subset of the XmlTree returns list of errors",
        "hierarchy": "Text XML HXT Validator DocValidation",
        "module": "Text.XML.HXT.Validator.DocValidation",
        "name": "validateDoc",
        "normalized": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "Doc",
        "signature": "XmlTree-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-IdValidation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for checking special ID\u003cem\u003eIDREF\u003c/em\u003eIDREFS constraints.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.IdValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-IdValidation.html",
        "fct-type": "module",
        "title": "IdValidation"
      },
      "index": {
        "description": "This module provides functions for checking special ID IDREF IDREFS constraints",
        "hierarchy": "Text XML HXT Validator IdValidation",
        "module": "Text.XML.HXT.Validator.IdValidation",
        "name": "IdValidation",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Id Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-IdValidation.html#v:validateIds",
      "description": {
        "fct-descr": "\u003cp\u003ePerform the validation of the ID\u003cem\u003eIDREF\u003c/em\u003eIDREFS constraints.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter dtdPart :  the DTD subset (Node \u003ccode\u003eDOCTYPE\u003c/code\u003e) of the XmlTree\n\u003c/li\u003e\u003cli\u003e 2.parameter doc :  the document subset of the XmlTree\n\u003c/li\u003e\u003cli\u003e returns : a list of errors\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.IdValidation",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlTree -\u003e XmlTree -\u003e XmlTrees",
        "fct-source": "src/Text-XML-HXT-Validator-IdValidation.html#validateIds",
        "fct-type": "function",
        "title": "validateIds"
      },
      "index": {
        "description": "Perform the validation of the ID IDREF IDREFS constraints parameter dtdPart the DTD subset Node DOCTYPE of the XmlTree parameter doc the document subset of the XmlTree returns list of errors",
        "hierarchy": "Text XML HXT Validator IdValidation",
        "module": "Text.XML.HXT.Validator.IdValidation",
        "name": "validateIds",
        "normalized": "XmlTree-\u003eXmlTree-\u003eXmlTrees",
        "package": "hxt-filter",
        "partial": "Ids",
        "signature": "XmlTree-\u003eXmlTree-\u003eXmlTrees"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for regular expression matching based on derivatives of regular expressions.\n\u003c/p\u003e\u003cp\u003eThe code was taken from Joe English (\u003ca\u003ehttp://www.flightlab.com/~joe/sgml/validate.html\u003c/a\u003e).\n Tested and extended by Martin Schmidt.\n\u003c/p\u003e\u003cp\u003eFurther references for the algorithm:\n\u003c/p\u003e\u003cp\u003eJanusz A. Brzozowski.\n\u003c/p\u003e\u003cp\u003eDerivatives of Regular Expressions. Journal of the ACM, Volume 11, Issue 4, 1964. \n\u003c/p\u003e\u003cp\u003eMark Hopkins.\n\u003c/p\u003e\u003cp\u003eRegular Expression Package. Posted to comp.compilers, 1994.\n      Available per FTP at \u003ca\u003eftp://iecc.com/pub/file/regex.tar.gz\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html",
        "fct-type": "module",
        "title": "RE"
      },
      "index": {
        "description": "module for regular expression matching based on derivatives of regular expressions The code was taken from Joe English http www.flightlab.com joe sgml validate.html Tested and extended by Martin Schmidt Further references for the algorithm Janusz Brzozowski Derivatives of Regular Expressions Journal of the ACM Volume Issue Mark Hopkins Regular Expression Package Posted to comp.compilers Available per FTP at ftp iecc.com pub file regex.tar.gz",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#t:RE",
      "description": {
        "fct-descr": "\u003cp\u003eData type for regular expressions.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "data",
        "title": "RE"
      },
      "index": {
        "description": "Data type for regular expressions",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_ALT",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_ALT (RE a) (RE a)",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_ALT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_ALT",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE ALT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_DOT",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_DOT",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_DOT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_DOT",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE DOT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_OPT",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_OPT (RE a)",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_OPT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_OPT",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE OPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_PLUS",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_PLUS (RE a)",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_PLUS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_PLUS",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE PLUS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_REP",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_REP (RE a)",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_REP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_REP",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE REP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_SEQ",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_SEQ (RE a) (RE a)",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_SEQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_SEQ",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE SEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_SYM",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_SYM a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_SYM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_SYM",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE SYM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_UNIT",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_UNIT",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_UNIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_UNIT",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE UNIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:RE_ZERO",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE_ZERO String",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "function",
        "title": "RE_ZERO"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "RE_ZERO",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE ZERO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:checkRE",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if an input matched a regular expression. The function should be\n called after matches.\n\u003c/p\u003e\u003cp\u003eWas the sentence used in \u003ccode\u003ematches\u003c/code\u003e in the language of the regular expression?\n -\u003e matches e s == s `in` L(e)?\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  the derived regular expression\n\u003c/li\u003e\u003cli\u003e returns : empty String if input matched the regular expression, otherwise\n               an error message is returned\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e String",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#checkRE",
        "fct-type": "function",
        "title": "checkRE"
      },
      "index": {
        "description": "Checks if an input matched regular expression The function should be called after matches Was the sentence used in matches in the language of the regular expression matches in parameter re the derived regular expression returns empty String if input matched the regular expression otherwise an error message is returned",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "checkRE",
        "normalized": "RE a-\u003eString",
        "package": "hxt-filter",
        "partial": "RE",
        "signature": "RE a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:matches",
      "description": {
        "fct-descr": "\u003cp\u003eDerives a regular expression with respect to a sentence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  regular expression\n\u003c/li\u003e\u003cli\u003e 2.parameter s :  sentence to which the regular expression is applied\n\u003c/li\u003e\u003cli\u003e returns : the derived regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e [a] -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#matches",
        "fct-type": "function",
        "title": "matches"
      },
      "index": {
        "description": "Derives regular expression with respect to sentence parameter re regular expression parameter sentence to which the regular expression is applied returns the derived regular expression",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "matches",
        "normalized": "RE a-\u003e[a]-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003e[a]-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:nullable",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a regular expression matches the empty sequence.\n\u003c/p\u003e\u003cp\u003enullable e == [] `in` L(e)\n\u003c/p\u003e\u003cp\u003eThis check indicates if a regular expression fits to a sentence or not.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  regular expression to be checked\n\u003c/li\u003e\u003cli\u003e returns : true if regular expression matches the empty sequence,\n                otherwise false\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e Bool",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#nullable",
        "fct-type": "function",
        "title": "nullable"
      },
      "index": {
        "description": "Checks if regular expression matches the empty sequence nullable in This check indicates if regular expression fits to sentence or not parameter re regular expression to be checked returns true if regular expression matches the empty sequence otherwise false",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "nullable",
        "normalized": "RE a-\u003eBool",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:printRE",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a string representation of a regular expression.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  a regular expression\n\u003c/li\u003e\u003cli\u003e returns : the string representation of the regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e String",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#printRE",
        "fct-type": "function",
        "title": "printRE"
      },
      "index": {
        "description": "Constructs string representation of regular expression parameter re regular expression returns the string representation of the regular expression",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "printRE",
        "normalized": "RE a-\u003eString",
        "package": "hxt-filter",
        "partial": "RE",
        "signature": "RE a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_alt",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an alternative (|) of two regular expressions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  first regular expression of alternative\n\u003c/li\u003e\u003cli\u003e 2.parameter re_b :  second regular expression of alternative\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_alt",
        "fct-type": "function",
        "title": "re_alt"
      },
      "index": {
        "description": "Constructs an alternative of two regular expressions parameter re first regular expression of alternative parameter re second regular expression of alternative returns new regular expression",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_alt",
        "normalized": "RE a-\u003eRE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_dot",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for accepting any singel symbol\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : regular expression for accepting any singel symbol\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_dot",
        "fct-type": "function",
        "title": "re_dot"
      },
      "index": {
        "description": "Constructs regular expression for accepting any singel symbol returns regular expression for accepting any singel symbol",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_dot",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_opt",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an option (?) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be optional\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_opt",
        "fct-type": "function",
        "title": "re_opt"
      },
      "index": {
        "description": "Constructs an option of regular expression parameter re regular expression to be optional returns new regular expression",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_opt",
        "normalized": "RE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_plus",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a repetition (+) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be repeted\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_plus",
        "fct-type": "function",
        "title": "re_plus"
      },
      "index": {
        "description": "Constructs repetition of regular expression parameter re regular expression to be repeted returns new regular expression",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_plus",
        "normalized": "RE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_rep",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an optional repetition (*) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be repeted\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_rep",
        "fct-type": "function",
        "title": "re_rep"
      },
      "index": {
        "description": "Constructs an optional repetition of regular expression parameter re regular expression to be repeted returns new regular expression",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_rep",
        "normalized": "RE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_seq",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a sequence (,) of two regular expressions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  first regular expression in sequence\n\u003c/li\u003e\u003cli\u003e 2.parameter re_b :  second regular expression in sequence\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_seq",
        "fct-type": "function",
        "title": "re_seq"
      },
      "index": {
        "description": "Constructs sequence of two regular expressions parameter re first regular expression in sequence parameter re second regular expression in sequence returns new regular expression",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_seq",
        "normalized": "RE a-\u003eRE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_sym",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for accepting a symbol\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter sym :  the symbol to be accepted\n\u003c/li\u003e\u003cli\u003e returns : regular expression for accepting a symbol\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_sym",
        "fct-type": "function",
        "title": "re_sym"
      },
      "index": {
        "description": "Constructs regular expression for accepting symbol parameter sym the symbol to be accepted returns regular expression for accepting symbol",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_sym",
        "normalized": "a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_unit",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for an empty sequence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : regular expression for an empty sequence\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_unit",
        "fct-type": "function",
        "title": "re_unit"
      },
      "index": {
        "description": "Constructs regular expression for an empty sequence returns regular expression for an empty sequence",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_unit",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-RE.html#v:re_zero",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for an empty set.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter errMsg :  error message\n\u003c/li\u003e\u003cli\u003e returns : regular expression for an empty set\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.RE",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_zero",
        "fct-type": "function",
        "title": "re_zero"
      },
      "index": {
        "description": "Constructs regular expression for an empty set parameter errMsg error message returns regular expression for an empty set",
        "hierarchy": "Text XML HXT Validator RE",
        "module": "Text.XML.HXT.Validator.RE",
        "name": "re_zero",
        "normalized": "String-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-Validation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a state filter as a main function for validating XML documents.\n\u003c/p\u003e\u003cp\u003eThe real validation is done with pure filters from module \u003ccode\u003eText.XML.HXT.Validator.ValidationFilter\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eAuthor : .\\artin Schmidt\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.Validation",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-Validation.html",
        "fct-type": "module",
        "title": "Validation"
      },
      "index": {
        "description": "This module provides state filter as main function for validating XML documents The real validation is done with pure filters from module Text.XML.HXT.Validator.ValidationFilter Author artin Schmidt",
        "hierarchy": "Text XML HXT Validator Validation",
        "module": "Text.XML.HXT.Validator.Validation",
        "name": "Validation",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-Validation.html#v:getValidatedDoc",
      "description": {
        "fct-descr": "\u003cp\u003emonadic filter for validating and transforming a wellformed document.\n\u003c/p\u003e\u003cp\u003ethe \u003ca\u003emain\u003c/a\u003e function for validation.\n\u003c/p\u003e\u003cp\u003ethe input tree must consist of a root node with a complete document and DTD.\n Result is the single element list containing same tree but tranformed with respect to the DTD,\n or, in case of errors, the root with an empty list of children\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Validator.Validation",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlStateFilter state",
        "fct-source": "src/Text-XML-HXT-Validator-Validation.html#getValidatedDoc",
        "fct-type": "function",
        "title": "getValidatedDoc"
      },
      "index": {
        "description": "monadic filter for validating and transforming wellformed document the main function for validation the input tree must consist of root node with complete document and DTD Result is the single element list containing same tree but tranformed with respect to the DTD or in case of errors the root with an empty list of children",
        "hierarchy": "Text XML HXT Validator Validation",
        "module": "Text.XML.HXT.Validator.Validation",
        "name": "getValidatedDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Validated Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for validating XML documents represented as\n XmlTree.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.ValidationFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-ValidationFilter.html",
        "fct-type": "module",
        "title": "ValidationFilter"
      },
      "index": {
        "description": "This module provides functions for validating XML documents represented as XmlTree",
        "hierarchy": "Text XML HXT Validator ValidationFilter",
        "module": "Text.XML.HXT.Validator.ValidationFilter",
        "name": "ValidationFilter",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Validation Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:getDTDSubset",
      "description": {
        "fct-module": "Text.XML.HXT.Validator.ValidationFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-ValidationFilter.html#getDTDSubset",
        "fct-type": "function",
        "title": "getDTDSubset"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML HXT Validator ValidationFilter",
        "module": "Text.XML.HXT.Validator.ValidationFilter",
        "name": "getDTDSubset",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DTDSubset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:removeDoublicateDefs",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves doublicate declarations from the DTD which first declaration is\n binding. This is the case for ATTLIST and ENTITY declarations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : A function that replaces the children of DOCTYPE nodes by a list\n               where all multiple declarations are removed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.ValidationFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-ValidationFilter.html#removeDoublicateDefs",
        "fct-type": "function",
        "title": "removeDoublicateDefs"
      },
      "index": {
        "description": "Removes doublicate declarations from the DTD which first declaration is binding This is the case for ATTLIST and ENTITY declarations returns function that replaces the children of DOCTYPE nodes by list where all multiple declarations are removed",
        "hierarchy": "Text XML HXT Validator ValidationFilter",
        "module": "Text.XML.HXT.Validator.ValidationFilter",
        "name": "removeDoublicateDefs",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doublicate Defs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003efilter for transforming a document with respect to the given DTD.\n\u003c/p\u003e\u003cp\u003eValidating parsers\n are expected to  normalize attribute values and add default values.\n This function should be called after a successful validation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects a complete XML document tree\n                and returns the transformed XmlTree\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.ValidationFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-ValidationFilter.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "filter for transforming document with respect to the given DTD Validating parsers are expected to normalize attribute values and add default values This function should be called after successful validation returns function which expects complete XML document tree and returns the transformed XmlTree",
        "hierarchy": "Text XML HXT Validator ValidationFilter",
        "module": "Text.XML.HXT.Validator.ValidationFilter",
        "name": "transform",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:validate",
      "description": {
        "fct-descr": "\u003cp\u003eMain validation filter. Check if the DTD and the document are valid.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects a complete document as XmlTree input\n                     and returns a list of all errors found.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.ValidationFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-ValidationFilter.html#validate",
        "fct-type": "function",
        "title": "validate"
      },
      "index": {
        "description": "Main validation filter Check if the DTD and the document are valid returns function which expects complete document as XmlTree input and returns list of all errors found",
        "hierarchy": "Text XML HXT Validator ValidationFilter",
        "module": "Text.XML.HXT.Validator.ValidationFilter",
        "name": "validate",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:validateDTD",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the DTD is valid.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects an XmlTree from the parser as input\n                     and returns a list of all errors found in the DTD.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.ValidationFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-ValidationFilter.html#validateDTD",
        "fct-type": "function",
        "title": "validateDTD"
      },
      "index": {
        "description": "Check if the DTD is valid returns function which expects an XmlTree from the parser as input and returns list of all errors found in the DTD",
        "hierarchy": "Text XML HXT Validator ValidationFilter",
        "module": "Text.XML.HXT.Validator.ValidationFilter",
        "name": "validateDTD",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "DTD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-ValidationFilter.html#v:validateDoc",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the document corresponds to the given DTD.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : a function which expects a complete document as XmlTree input\n                     and returns a list of all errors found in the content part.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.ValidationFilter",
        "fct-package": "hxt-filter",
        "fct-signature": "XmlFilter",
        "fct-source": "src/Text-XML-HXT-Validator-ValidationFilter.html#validateDoc",
        "fct-type": "function",
        "title": "validateDoc"
      },
      "index": {
        "description": "Check if the document corresponds to the given DTD returns function which expects complete document as XmlTree input and returns list of all errors found in the content part",
        "hierarchy": "Text XML HXT Validator ValidationFilter",
        "module": "Text.XML.HXT.Validator.ValidationFilter",
        "name": "validateDoc",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for regular expression matching, adapted for XML DTDs.\n\u003c/p\u003e\u003cp\u003eThis module is based on the module RE.\n\u003c/p\u003e\u003cp\u003eAuthor .\\artin Schmidt\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Validator-XmlRE.html",
        "fct-type": "module",
        "title": "XmlRE"
      },
      "index": {
        "description": "module for regular expression matching adapted for XML DTDs This module is based on the module RE Author artin Schmidt",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "XmlRE",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "Xml RE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#t:RE",
      "description": {
        "fct-descr": "\u003cp\u003eData type for regular expressions.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#RE",
        "fct-type": "data",
        "title": "RE"
      },
      "index": {
        "description": "Data type for regular expressions",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "RE",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "RE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:checkRE",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if an input matched a regular expression. The function should be\n called after matches.\n\u003c/p\u003e\u003cp\u003eWas the sentence used in \u003ccode\u003ematches\u003c/code\u003e in the language of the regular expression?\n -\u003e matches e s == s `in` L(e)?\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  the derived regular expression\n\u003c/li\u003e\u003cli\u003e returns : empty String if input matched the regular expression, otherwise\n               an error message is returned\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e String",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#checkRE",
        "fct-type": "function",
        "title": "checkRE"
      },
      "index": {
        "description": "Checks if an input matched regular expression The function should be called after matches Was the sentence used in matches in the language of the regular expression matches in parameter re the derived regular expression returns empty String if input matched the regular expression otherwise an error message is returned",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "checkRE",
        "normalized": "RE a-\u003eString",
        "package": "hxt-filter",
        "partial": "RE",
        "signature": "RE a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:matches",
      "description": {
        "fct-descr": "\u003cp\u003eDerives a regular expression with respect to a list of elements.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  regular expression\n\u003c/li\u003e\u003cli\u003e 2.parameter list :  list of elements to which the regular expression is applied\n\u003c/li\u003e\u003cli\u003e returns : the derived regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE String -\u003e XmlTrees -\u003e RE String",
        "fct-source": "src/Text-XML-HXT-Validator-XmlRE.html#matches",
        "fct-type": "function",
        "title": "matches"
      },
      "index": {
        "description": "Derives regular expression with respect to list of elements parameter re regular expression parameter list list of elements to which the regular expression is applied returns the derived regular expression",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "matches",
        "normalized": "RE String-\u003eXmlTrees-\u003eRE String",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE String-\u003eXmlTrees-\u003eRE String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:printRE",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a string representation of a regular expression.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re :  a regular expression\n\u003c/li\u003e\u003cli\u003e returns : the string representation of the regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e String",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#printRE",
        "fct-type": "function",
        "title": "printRE"
      },
      "index": {
        "description": "Constructs string representation of regular expression parameter re regular expression returns the string representation of the regular expression",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "printRE",
        "normalized": "RE a-\u003eString",
        "package": "hxt-filter",
        "partial": "RE",
        "signature": "RE a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_alt",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an alternative (|) of two regular expressions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  first regular expression of alternative\n\u003c/li\u003e\u003cli\u003e 2.parameter re_b :  second regular expression of alternative\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_alt",
        "fct-type": "function",
        "title": "re_alt"
      },
      "index": {
        "description": "Constructs an alternative of two regular expressions parameter re first regular expression of alternative parameter re second regular expression of alternative returns new regular expression",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_alt",
        "normalized": "RE a-\u003eRE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_dot",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for accepting any singel symbol\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : regular expression for accepting any singel symbol\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_dot",
        "fct-type": "function",
        "title": "re_dot"
      },
      "index": {
        "description": "Constructs regular expression for accepting any singel symbol returns regular expression for accepting any singel symbol",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_dot",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_opt",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an option (?) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be optional\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_opt",
        "fct-type": "function",
        "title": "re_opt"
      },
      "index": {
        "description": "Constructs an option of regular expression parameter re regular expression to be optional returns new regular expression",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_opt",
        "normalized": "RE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_plus",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a repetition (+) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be repeted\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_plus",
        "fct-type": "function",
        "title": "re_plus"
      },
      "index": {
        "description": "Constructs repetition of regular expression parameter re regular expression to be repeted returns new regular expression",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_plus",
        "normalized": "RE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_rep",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an optional repetition (*) of a regular expression\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  regular expression to be repeted\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_rep",
        "fct-type": "function",
        "title": "re_rep"
      },
      "index": {
        "description": "Constructs an optional repetition of regular expression parameter re regular expression to be repeted returns new regular expression",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_rep",
        "normalized": "RE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_seq",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a sequence (,) of two regular expressions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter re_a :  first regular expression in sequence\n\u003c/li\u003e\u003cli\u003e 2.parameter re_b :  second regular expression in sequence\n\u003c/li\u003e\u003cli\u003e returns : new regular expression\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a -\u003e RE a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_seq",
        "fct-type": "function",
        "title": "re_seq"
      },
      "index": {
        "description": "Constructs sequence of two regular expressions parameter re first regular expression in sequence parameter re second regular expression in sequence returns new regular expression",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_seq",
        "normalized": "RE a-\u003eRE a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "RE a-\u003eRE a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_sym",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for accepting a symbol\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter sym :  the symbol to be accepted\n\u003c/li\u003e\u003cli\u003e returns : regular expression for accepting a symbol\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "a -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_sym",
        "fct-type": "function",
        "title": "re_sym"
      },
      "index": {
        "description": "Constructs regular expression for accepting symbol parameter sym the symbol to be accepted returns regular expression for accepting symbol",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_sym",
        "normalized": "a-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "a-\u003eRE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_unit",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for an empty sequence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e returns : regular expression for an empty sequence\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_unit",
        "fct-type": "function",
        "title": "re_unit"
      },
      "index": {
        "description": "Constructs regular expression for an empty sequence returns regular expression for an empty sequence",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_unit",
        "normalized": "",
        "package": "hxt-filter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-filter/docs/Text-XML-HXT-Validator-XmlRE.html#v:re_zero",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a regular expression for an empty set.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1.parameter errMsg :  error message\n\u003c/li\u003e\u003cli\u003e returns : regular expression for an empty set\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.XML.HXT.Validator.XmlRE",
        "fct-package": "hxt-filter",
        "fct-signature": "String -\u003e RE a",
        "fct-source": "src/Text-XML-HXT-Validator-RE.html#re_zero",
        "fct-type": "function",
        "title": "re_zero"
      },
      "index": {
        "description": "Constructs regular expression for an empty set parameter errMsg error message returns regular expression for an empty set",
        "hierarchy": "Text XML HXT Validator XmlRE",
        "module": "Text.XML.HXT.Validator.XmlRE",
        "name": "re_zero",
        "normalized": "String-\u003eRE a",
        "package": "hxt-filter",
        "partial": "",
        "signature": "String-\u003eRE a"
      }
    }
  }
]