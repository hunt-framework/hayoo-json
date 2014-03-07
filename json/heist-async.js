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
        "word": "heist-async"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Async.TH",
          "name": "TH",
          "package": "heist-async",
          "source": "src/Heist-Splices-Async-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices Async TH",
          "module": "Heist.Splices.Async.TH",
          "name": "TH",
          "package": "heist-async",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eloadJS: this template haskell function put's the contents of the javascript files into fileContents, so that it can be included with activateAsync\n\u003c/p\u003e",
          "module": "Heist.Splices.Async.TH",
          "name": "loadJS",
          "package": "heist-async",
          "signature": "Q [Dec]",
          "source": "src/Heist-Splices-Async-TH.html#loadJS",
          "type": "function"
        },
        "index": {
          "description": "loadJS this template haskell function put the contents of the javascript files into fileContents so that it can be included with activateAsync",
          "hierarchy": "Heist Splices Async TH",
          "module": "Heist.Splices.Async.TH",
          "name": "loadJS",
          "normalized": "Q[Dec]",
          "package": "heist-async",
          "partial": "JS",
          "signature": "Q[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async-TH.html#v:loadJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Async",
          "name": "Async",
          "package": "heist-async",
          "source": "src/Heist-Splices-Async.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "Async",
          "package": "heist-async",
          "partial": "Async",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea link that loads it's results asynchronously and replaces parts of the page based on the contents. A normal anchor tag in all ways.\n\u003c/p\u003e",
          "module": "Heist.Splices.Async",
          "name": "aAsync",
          "package": "heist-async",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Async.html#aAsync",
          "type": "function"
        },
        "index": {
          "description": "link that loads it results asynchronously and replaces parts of the page based on the contents normal anchor tag in all ways",
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "aAsync",
          "package": "heist-async",
          "partial": "Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:aAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is a convenience tag that will include all the necessary javascript. Feel free to copy the files yourself from tho js directory - by having separate files, they can be cached, which will mean less network transfer. Of course, the intention with this tag is you can get this running as quickly as possible. It can occur any number of times on the page, but will only actually include the javascript the first time.\n\u003c/p\u003e",
          "module": "Heist.Splices.Async",
          "name": "activateAsync",
          "package": "heist-async",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Async.html#activateAsync",
          "type": "function"
        },
        "index": {
          "description": "this is convenience tag that will include all the necessary javascript Feel free to copy the files yourself from tho js directory by having separate files they can be cached which will mean less network transfer Of course the intention with this tag is you can get this running as quickly as possible It can occur any number of times on the page but will only actually include the javascript the first time",
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "activateAsync",
          "package": "heist-async",
          "partial": "Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:activateAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea special div-async that instead of replacing the corresponding one on the page, it appends it's contents inside the existing div-async-append. Note: div-async's and div-async-appends are not interchangeable. This is so that it is easy to see what is going to happen from looking at the templates. If you need this sort of behavior, wrap you div-async-append inside a div-async.\n\u003c/p\u003e",
          "module": "Heist.Splices.Async",
          "name": "divAppendAsync",
          "package": "heist-async",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Async.html#divAppendAsync",
          "type": "function"
        },
        "index": {
          "description": "special div-async that instead of replacing the corresponding one on the page it appends it contents inside the existing div-async-append Note div-async and div-async-appends are not interchangeable This is so that it is easy to see what is going to happen from looking at the templates If you need this sort of behavior wrap you div-async-append inside div-async",
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "divAppendAsync",
          "package": "heist-async",
          "partial": "Append Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:divAppendAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea div that can be replaced or replace content on the page. It takes a \u003ca\u003ename\u003c/a\u003e attribute that is it's unique identifier. When sending back content to replace, any div-asyncs present will replace existing div-asyncs on the page (identified by the name attribute)\n\u003c/p\u003e",
          "module": "Heist.Splices.Async",
          "name": "divAsync",
          "package": "heist-async",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Async.html#divAsync",
          "type": "function"
        },
        "index": {
          "description": "div that can be replaced or replace content on the page It takes name attribute that is it unique identifier When sending back content to replace any div-asyncs present will replace existing div-asyncs on the page identified by the name attribute",
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "divAsync",
          "package": "heist-async",
          "partial": "Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:divAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea form that submits asynchronously and replaces parts of the page with the results. A normal form tag otherwise.\n\u003c/p\u003e",
          "module": "Heist.Splices.Async",
          "name": "formAsync",
          "package": "heist-async",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Async.html#formAsync",
          "type": "function"
        },
        "index": {
          "description": "form that submits asynchronously and replaces parts of the page with the results normal form tag otherwise",
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "formAsync",
          "package": "heist-async",
          "partial": "Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:formAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides the following splices: \n\u003c/p\u003e\u003cpre\u003e \u003ca-async href=\"some/url\" data-loading-div=\"#some-div\"\u003e\n\u003c/pre\u003e\u003cp\u003ewhere data-loading-div is optional, it causes the specified div to have it's contents replaced with \u003cdiv class=\u003ca\u003eloading\u003c/a\u003e/\u003e when the link is clicked.\n\u003c/p\u003e\u003cpre\u003e \u003cform-async\u003e\n\u003c/pre\u003e\u003cp\u003eNote that the following two are not interchangeable, and cannot replace one another.\n\u003c/p\u003e\u003cpre\u003e \u003cdiv-async name=\"some-unique-identifier\"\u003e \n \u003cdiv-async-append name=\"some-unique-identifier\"\u003e \n\u003c/pre\u003e\u003cpre\u003e \u003credirect-async url=\"target/path\"/\u003e\n\u003c/pre\u003e\u003cpre\u003e \u003cactivate-async/\u003e \n\u003c/pre\u003e",
          "module": "Heist.Splices.Async",
          "name": "heistAsyncSplices",
          "package": "heist-async",
          "signature": "Splices (Splice m)",
          "source": "src/Heist-Splices-Async.html#heistAsyncSplices",
          "type": "function"
        },
        "index": {
          "description": "Provides the following splices a-async href some url data-loading-div some-div where data-loading-div is optional it causes the specified div to have it contents replaced with div class loading when the link is clicked form-async Note that the following two are not interchangeable and cannot replace one another div-async name some-unique-identifier div-async-append name some-unique-identifier redirect-async url target path activate-async",
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "heistAsyncSplices",
          "package": "heist-async",
          "partial": "Async Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:heistAsyncSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis tag allows you to cause a client-side redirect. This is necessary because if you do a regular redirect, it will be followed by the browser and the result (the new page) will be handed back as if it were the page fragment response. It takes a \u003ca\u003eurl\u003c/a\u003e attribute that specifies where to redirect to.\n\u003c/p\u003e",
          "module": "Heist.Splices.Async",
          "name": "redirectAsync",
          "package": "heist-async",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Async.html#redirectAsync",
          "type": "function"
        },
        "index": {
          "description": "this tag allows you to cause client-side redirect This is necessary because if you do regular redirect it will be followed by the browser and the result the new page will be handed back as if it were the page fragment response It takes url attribute that specifies where to redirect to",
          "hierarchy": "Heist Splices Async",
          "module": "Heist.Splices.Async",
          "name": "redirectAsync",
          "package": "heist-async",
          "partial": "Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist-async/docs/Heist-Splices-Async.html#v:redirectAsync"
      }
    }
  ]
]