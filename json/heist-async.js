[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async-TH.html#",
      "description": {
        "fct-module": "Heist.Splices.Async.TH",
        "fct-package": "heist-async",
        "fct-signature": "module",
        "fct-source": "src/Heist-Splices-Async-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Heist Splices Async TH",
        "module": "Heist.Splices.Async.TH",
        "name": "TH",
        "normalized": "",
        "package": "heist-async",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async-TH.html#v:loadJS",
      "description": {
        "fct-descr": "\u003cp\u003eloadJS: this template haskell function put's the contents of the javascript files into fileContents, so that it can be included with activateAsync\n\u003c/p\u003e",
        "fct-module": "Heist.Splices.Async.TH",
        "fct-package": "heist-async",
        "fct-signature": "Q [Dec]",
        "fct-source": "src/Heist-Splices-Async-TH.html#loadJS",
        "fct-type": "function",
        "title": "loadJS"
      },
      "index": {
        "description": "loadJS this template haskell function put the contents of the javascript files into fileContents so that it can be included with activateAsync",
        "hierarchy": "Heist Splices Async TH",
        "module": "Heist.Splices.Async.TH",
        "name": "loadJS",
        "normalized": "Q[Dec]",
        "package": "heist-async",
        "partial": "JS",
        "signature": "Q[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#",
      "description": {
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "module",
        "fct-source": "src/Heist-Splices-Async.html",
        "fct-type": "module",
        "title": "Async"
      },
      "index": {
        "description": "",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "Async",
        "normalized": "",
        "package": "heist-async",
        "partial": "Async",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:aAsync",
      "description": {
        "fct-descr": "\u003cp\u003ea link that loads it's results asynchronously and replaces parts of the page based on the contents. A normal anchor tag in all ways.\n\u003c/p\u003e",
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "Splice m",
        "fct-source": "src/Heist-Splices-Async.html#aAsync",
        "fct-type": "function",
        "title": "aAsync"
      },
      "index": {
        "description": "link that loads it results asynchronously and replaces parts of the page based on the contents normal anchor tag in all ways",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "aAsync",
        "normalized": "",
        "package": "heist-async",
        "partial": "Async",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:activateAsync",
      "description": {
        "fct-descr": "\u003cp\u003ethis is a convenience tag that will include all the necessary javascript. Feel free to copy the files yourself from tho js directory - by having separate files, they can be cached, which will mean less network transfer. Of course, the intention with this tag is you can get this running as quickly as possible. It can occur any number of times on the page, but will only actually include the javascript the first time.\n\u003c/p\u003e",
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "Splice m",
        "fct-source": "src/Heist-Splices-Async.html#activateAsync",
        "fct-type": "function",
        "title": "activateAsync"
      },
      "index": {
        "description": "this is convenience tag that will include all the necessary javascript Feel free to copy the files yourself from tho js directory by having separate files they can be cached which will mean less network transfer Of course the intention with this tag is you can get this running as quickly as possible It can occur any number of times on the page but will only actually include the javascript the first time",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "activateAsync",
        "normalized": "",
        "package": "heist-async",
        "partial": "Async",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:divAppendAsync",
      "description": {
        "fct-descr": "\u003cp\u003ea special div-async that instead of replacing the corresponding one on the page, it appends it's contents inside the existing div-async-append. Note: div-async's and div-async-appends are not interchangeable. This is so that it is easy to see what is going to happen from looking at the templates. If you need this sort of behavior, wrap you div-async-append inside a div-async.\n\u003c/p\u003e",
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "Splice m",
        "fct-source": "src/Heist-Splices-Async.html#divAppendAsync",
        "fct-type": "function",
        "title": "divAppendAsync"
      },
      "index": {
        "description": "special div-async that instead of replacing the corresponding one on the page it appends it contents inside the existing div-async-append Note div-async and div-async-appends are not interchangeable This is so that it is easy to see what is going to happen from looking at the templates If you need this sort of behavior wrap you div-async-append inside div-async",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "divAppendAsync",
        "normalized": "",
        "package": "heist-async",
        "partial": "Append Async",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:divAsync",
      "description": {
        "fct-descr": "\u003cp\u003ea div that can be replaced or replace content on the page. It takes a \u003ca\u003ename\u003c/a\u003e attribute that is it's unique identifier. When sending back content to replace, any div-asyncs present will replace existing div-asyncs on the page (identified by the name attribute)\n\u003c/p\u003e",
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "Splice m",
        "fct-source": "src/Heist-Splices-Async.html#divAsync",
        "fct-type": "function",
        "title": "divAsync"
      },
      "index": {
        "description": "div that can be replaced or replace content on the page It takes name attribute that is it unique identifier When sending back content to replace any div-asyncs present will replace existing div-asyncs on the page identified by the name attribute",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "divAsync",
        "normalized": "",
        "package": "heist-async",
        "partial": "Async",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:formAsync",
      "description": {
        "fct-descr": "\u003cp\u003ea form that submits asynchronously and replaces parts of the page with the results. A normal form tag otherwise.\n\u003c/p\u003e",
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "Splice m",
        "fct-source": "src/Heist-Splices-Async.html#formAsync",
        "fct-type": "function",
        "title": "formAsync"
      },
      "index": {
        "description": "form that submits asynchronously and replaces parts of the page with the results normal form tag otherwise",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "formAsync",
        "normalized": "",
        "package": "heist-async",
        "partial": "Async",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:heistAsyncSplices",
      "description": {
        "fct-descr": "\u003cp\u003eProvides the following splices: \n\u003c/p\u003e\u003cpre\u003e \u003ca-async href=\"some/url\" data-loading-div=\"#some-div\"\u003e\n\u003c/pre\u003e\u003cp\u003ewhere data-loading-div is optional, it causes the specified div to have it's contents replaced with \u003cdiv class=\u003ca\u003eloading\u003c/a\u003e/\u003e when the link is clicked.\n\u003c/p\u003e\u003cpre\u003e \u003cform-async\u003e\n\u003c/pre\u003e\u003cp\u003eNote that the following two are not interchangeable, and cannot replace one another.\n\u003c/p\u003e\u003cpre\u003e \u003cdiv-async name=\"some-unique-identifier\"\u003e \n \u003cdiv-async-append name=\"some-unique-identifier\"\u003e \n\u003c/pre\u003e\u003cpre\u003e \u003credirect-async url=\"target/path\"/\u003e\n\u003c/pre\u003e\u003cpre\u003e \u003cactivate-async/\u003e \n\u003c/pre\u003e",
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "Splices (Splice m)",
        "fct-source": "src/Heist-Splices-Async.html#heistAsyncSplices",
        "fct-type": "function",
        "title": "heistAsyncSplices"
      },
      "index": {
        "description": "Provides the following splices a-async href some url data-loading-div some-div where data-loading-div is optional it causes the specified div to have it contents replaced with div class loading when the link is clicked form-async Note that the following two are not interchangeable and cannot replace one another div-async name some-unique-identifier div-async-append name some-unique-identifier redirect-async url target path activate-async",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "heistAsyncSplices",
        "normalized": "",
        "package": "heist-async",
        "partial": "Async Splices",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:redirectAsync",
      "description": {
        "fct-descr": "\u003cp\u003ethis tag allows you to cause a client-side redirect. This is necessary because if you do a regular redirect, it will be followed by the browser and the result (the new page) will be handed back as if it were the page fragment response. It takes a \u003ca\u003eurl\u003c/a\u003e attribute that specifies where to redirect to.\n\u003c/p\u003e",
        "fct-module": "Heist.Splices.Async",
        "fct-package": "heist-async",
        "fct-signature": "Splice m",
        "fct-source": "src/Heist-Splices-Async.html#redirectAsync",
        "fct-type": "function",
        "title": "redirectAsync"
      },
      "index": {
        "description": "this tag allows you to cause client-side redirect This is necessary because if you do regular redirect it will be followed by the browser and the result the new page will be handed back as if it were the page fragment response It takes url attribute that specifies where to redirect to",
        "hierarchy": "Heist Splices Async",
        "module": "Heist.Splices.Async",
        "name": "redirectAsync",
        "normalized": "",
        "package": "heist-async",
        "partial": "Async",
        "signature": ""
      }
    }
  }
]