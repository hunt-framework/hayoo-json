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
        "word": "snap-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.CSRF",
          "name": "CSRF",
          "package": "snap-extras",
          "source": "src/Snap-Extras-CSRF.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras CSRF",
          "module": "Snap.Extras.CSRF",
          "name": "CSRF",
          "package": "snap-extras",
          "partial": "CSRF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this function to wrap your whole site with CSRF protection.  Due to\n security considerations, the way Snap parses file uploads\n means that the CSRF token cannot be checked before the file uploads have\n been handled.  This function protects your whole site except for handlers\n of multipart/form-data forms (forms with file uploads).  To protect those\n handlers, you have to call handleCSRF explicitly after the file has been\n processed.\n\u003c/p\u003e",
          "module": "Snap.Extras.CSRF",
          "name": "blanketCSRF",
          "package": "snap-extras",
          "signature": "SnapletLens v SessionManager-\u003e Handler b v ()-\u003e Handler b v ()",
          "type": "function"
        },
        "index": {
          "description": "Use this function to wrap your whole site with CSRF protection Due to security considerations the way Snap parses file uploads means that the CSRF token cannot be checked before the file uploads have been handled This function protects your whole site except for handlers of multipart form-data forms forms with file uploads To protect those handlers you have to call handleCSRF explicitly after the file has been processed",
          "hierarchy": "Snap Extras CSRF",
          "module": "Snap.Extras.CSRF",
          "name": "blanketCSRF",
          "normalized": "SnapletLens a SessionManager-\u003eHandler b a()-\u003eHandler b a()",
          "package": "snap-extras",
          "partial": "CSRF",
          "signature": "SnapletLens v SessionManager-\u003eHandler b v()-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:blanketCSRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splice that makes the CSRF token available to templates.  Typically we\n use it by binding a splice and using the CSRF token provided by the session\n snaplet as follows:\n\u003c/p\u003e\u003cpre\u003e(\"csrfToken\", csrfTokenSplice $ with session \u003ccode\u003e\u003ca\u003ecsrfToken\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003esession\u003c/code\u003e is a lens to the session snaplet.  Then you can make it\n available to javascript code by putting a meta tag at the top of every\n page like this:\n\u003c/p\u003e\u003cpre\u003e \u003cmeta name=\"csrf-token\" content=\"${csrfToken}\"\u003e\n\u003c/pre\u003e",
          "module": "Snap.Extras.CSRF",
          "name": "csrfTokenSplice",
          "package": "snap-extras",
          "signature": "m Text-\u003e Splice m",
          "type": "function"
        },
        "index": {
          "description": "splice that makes the CSRF token available to templates Typically we use it by binding splice and using the CSRF token provided by the session snaplet as follows csrfToken csrfTokenSplice with session csrfToken Where session is lens to the session snaplet Then you can make it available to javascript code by putting meta tag at the top of every page like this meta name csrf-token content csrfToken",
          "hierarchy": "Snap Extras CSRF",
          "module": "Snap.Extras.CSRF",
          "name": "csrfTokenSplice",
          "normalized": "a Text-\u003eSplice a",
          "package": "snap-extras",
          "partial": "Token Splice",
          "signature": "m Text-\u003eSplice m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:csrfTokenSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a request is a POST, check the CSRF token and fail with the specified\n handler if the check fails.  If if the token is correct or if it's not a\n POST request, then control passes through as a no-op.\n\u003c/p\u003e",
          "module": "Snap.Extras.CSRF",
          "name": "handleCSRF",
          "package": "snap-extras",
          "signature": "SnapletLens v SessionManager-\u003e Handler b v ()-\u003e Handler b v ()",
          "type": "function"
        },
        "index": {
          "description": "If request is POST check the CSRF token and fail with the specified handler if the check fails If if the token is correct or if it not POST request then control passes through as no-op",
          "hierarchy": "Snap Extras CSRF",
          "module": "Snap.Extras.CSRF",
          "name": "handleCSRF",
          "normalized": "SnapletLens a SessionManager-\u003eHandler b a()-\u003eHandler b a()",
          "package": "snap-extras",
          "partial": "CSRF",
          "signature": "SnapletLens v SessionManager-\u003eHandler b v()-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:handleCSRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a hidden _csrf input field as the first child of the bound tag.  For\n full site protection against CSRF, you should bind this splice to the form\n tag, and then make sure your app checks all POST requests for the presence\n of this CSRF token and that the token is randomly generated and secure on a\n per session basis.\n\u003c/p\u003e",
          "module": "Snap.Extras.CSRF",
          "name": "secureForm",
          "package": "snap-extras",
          "signature": "m Text-\u003e Splice m",
          "type": "function"
        },
        "index": {
          "description": "Adds hidden csrf input field as the first child of the bound tag For full site protection against CSRF you should bind this splice to the form tag and then make sure your app checks all POST requests for the presence of this CSRF token and that the token is randomly generated and secure on per session basis",
          "hierarchy": "Snap Extras CSRF",
          "module": "Snap.Extras.CSRF",
          "name": "secureForm",
          "normalized": "a Text-\u003eSplice a",
          "package": "snap-extras",
          "partial": "Form",
          "signature": "m Text-\u003eSplice m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:secureForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.CoreUtils",
          "name": "CoreUtils",
          "package": "snap-extras",
          "source": "src/Snap-Extras-CoreUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "CoreUtils",
          "package": "snap-extras",
          "partial": "Core Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two URL segments with a \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e between them.  To prevent double\n slashes, all trailing slashes are removed from the first path and all\n leading slashes are removed from the second path.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "(-/-)",
          "package": "snap-extras",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Snap-Extras-CoreUtils.html#-%2F-",
          "type": "function"
        },
        "index": {
          "description": "Concatenates two URL segments with between them To prevent double slashes all trailing slashes are removed from the first path and all leading slashes are removed from the second path",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "(-/-) -/-",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "snap-extras",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:-45--47--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish early with error code 400\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "badReq",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m b",
          "source": "src/Snap-Extras-CoreUtils.html#badReq",
          "type": "function"
        },
        "index": {
          "description": "Finish early with error code",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "badReq",
          "normalized": "ByteString-\u003ea b",
          "package": "snap-extras",
          "partial": "Req",
          "signature": "ByteString-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:badReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current rqURI does not have a trailing slash, then redirect to the\n same page with a slash added.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "dirify",
          "package": "snap-extras",
          "signature": "m ()",
          "source": "src/Snap-Extras-CoreUtils.html#dirify",
          "type": "function"
        },
        "index": {
          "description": "If the current rqURI does not have trailing slash then redirect to the same page with slash added",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "dirify",
          "normalized": "a()",
          "package": "snap-extras",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:dirify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEasier debug logging into error log. First argument is a\n category/namespace and the second argument is anything that has a\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "easyLog",
          "package": "snap-extras",
          "signature": "String -\u003e t -\u003e m ()",
          "source": "src/Snap-Extras-CoreUtils.html#easyLog",
          "type": "function"
        },
        "index": {
          "description": "Easier debug logging into error log First argument is category namespace and the second argument is anything that has Show instance",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "easyLog",
          "normalized": "String-\u003ea-\u003eb()",
          "package": "snap-extras",
          "partial": "Log",
          "signature": "String-\u003et-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:easyLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard anything after this and return given status code to HTTP\n client immediately.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "finishEarly",
          "package": "snap-extras",
          "signature": "Int -\u003e ByteString -\u003e m b",
          "source": "src/Snap-Extras-CoreUtils.html#finishEarly",
          "type": "function"
        },
        "index": {
          "description": "Discard anything after this and return given status code to HTTP client immediately",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "finishEarly",
          "normalized": "Int-\u003eByteString-\u003ea b",
          "package": "snap-extras",
          "partial": "Early",
          "signature": "Int-\u003eByteString-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:finishEarly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates an action that returns a Maybe and \n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "fromMaybeM",
          "package": "snap-extras",
          "signature": "m a -\u003e m (Maybe a) -\u003e m a",
          "source": "src/Snap-Extras-CoreUtils.html#fromMaybeM",
          "type": "function"
        },
        "index": {
          "description": "Evaluates an action that returns Maybe and",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "fromMaybeM",
          "normalized": "a b-\u003ea(Maybe b)-\u003ea b",
          "package": "snap-extras",
          "partial": "Maybe",
          "signature": "m a-\u003em(Maybe a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:fromMaybeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternate version of getParam that considers empty string Nothing\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "getParam'",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Snap-Extras-CoreUtils.html#getParam%27",
          "type": "function"
        },
        "index": {
          "description": "Alternate version of getParam that considers empty string Nothing",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "getParam'",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "snap-extras",
          "partial": "Param'",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:getParam-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark response as 'application/javascript'\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "jsResponse",
          "package": "snap-extras",
          "signature": "m ()",
          "source": "src/Snap-Extras-CoreUtils.html#jsResponse",
          "type": "function"
        },
        "index": {
          "description": "Mark response as application javascript",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "jsResponse",
          "normalized": "a()",
          "package": "snap-extras",
          "partial": "Response",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:jsResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark response as 'application/json'\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "jsonResponse",
          "package": "snap-extras",
          "signature": "m ()",
          "source": "src/Snap-Extras-CoreUtils.html#jsonResponse",
          "type": "function"
        },
        "index": {
          "description": "Mark response as application json",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "jsonResponse",
          "normalized": "a()",
          "package": "snap-extras",
          "partial": "Response",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:jsonResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.CoreUtils",
          "name": "maybeBadReq",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m (Maybe a) -\u003e m a",
          "source": "src/Snap-Extras-CoreUtils.html#maybeBadReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "maybeBadReq",
          "normalized": "ByteString-\u003ea(Maybe b)-\u003ea b",
          "package": "snap-extras",
          "partial": "Bad Req",
          "signature": "ByteString-\u003em(Maybe a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:maybeBadReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish early with error code 404\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "notFound",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m b",
          "source": "src/Snap-Extras-CoreUtils.html#notFound",
          "type": "function"
        },
        "index": {
          "description": "Finish early with error code",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "notFound",
          "normalized": "ByteString-\u003ea b",
          "package": "snap-extras",
          "partial": "Found",
          "signature": "ByteString-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark response as 'text/plain'\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "plainResponse",
          "package": "snap-extras",
          "signature": "m ()",
          "source": "src/Snap-Extras-CoreUtils.html#plainResponse",
          "type": "function"
        },
        "index": {
          "description": "Mark response as text plain",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "plainResponse",
          "normalized": "a()",
          "package": "snap-extras",
          "partial": "Response",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:plainResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to read a parameter from request. Computation may fail\n because the param is not there, or because it can't be read.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "readMayParam",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m (Maybe a)",
          "source": "src/Snap-Extras-CoreUtils.html#readMayParam",
          "type": "function"
        },
        "index": {
          "description": "Try to read parameter from request Computation may fail because the param is not there or because it can be read",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "readMayParam",
          "normalized": "ByteString-\u003ea(Maybe b)",
          "package": "snap-extras",
          "partial": "May Param",
          "signature": "ByteString-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:readMayParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a parameter from request. Be sure it is readable if it's\n there, or else this will raise an error.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "readParam",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m (Maybe a)",
          "source": "src/Snap-Extras-CoreUtils.html#readParam",
          "type": "function"
        },
        "index": {
          "description": "Read parameter from request Be sure it is readable if it there or else this will raise an error",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "readParam",
          "normalized": "ByteString-\u003ea(Maybe b)",
          "package": "snap-extras",
          "partial": "Param",
          "signature": "ByteString-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:readParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirects back to the refering page.  If there is no Referer header, then\n redirect to /.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "redirectReferer",
          "package": "snap-extras",
          "signature": "m b",
          "source": "src/Snap-Extras-CoreUtils.html#redirectReferer",
          "type": "function"
        },
        "index": {
          "description": "Redirects back to the refering page If there is no Referer header then redirect to",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "redirectReferer",
          "package": "snap-extras",
          "partial": "Referer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:redirectReferer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirects back to the refering page.  If there is no Referer header, then\n redirect to /.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "redirectRefererFunc",
          "package": "snap-extras",
          "signature": "(Maybe ByteString -\u003e ByteString) -\u003e m b",
          "source": "src/Snap-Extras-CoreUtils.html#redirectRefererFunc",
          "type": "function"
        },
        "index": {
          "description": "Redirects back to the refering page If there is no Referer header then redirect to",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "redirectRefererFunc",
          "normalized": "(Maybe ByteString-\u003eByteString)-\u003ea b",
          "package": "snap-extras",
          "partial": "Referer Func",
          "signature": "(Maybe ByteString-\u003eByteString)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:redirectRefererFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire that a parameter is present or terminate early.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "reqParam",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Snap-Extras-CoreUtils.html#reqParam",
          "type": "function"
        },
        "index": {
          "description": "Require that parameter is present or terminate early",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "reqParam",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "snap-extras",
          "partial": "Param",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:reqParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish early with error code 500\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "serverError",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m b",
          "source": "src/Snap-Extras-CoreUtils.html#serverError",
          "type": "function"
        },
        "index": {
          "description": "Finish early with error code",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "serverError",
          "normalized": "ByteString-\u003ea b",
          "package": "snap-extras",
          "partial": "Error",
          "signature": "ByteString-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:serverError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current rqURI has a trailing slash, then redirect to the same page\n with no trailing slash.\n\u003c/p\u003e",
          "module": "Snap.Extras.CoreUtils",
          "name": "undirify",
          "package": "snap-extras",
          "signature": "m ()",
          "source": "src/Snap-Extras-CoreUtils.html#undirify",
          "type": "function"
        },
        "index": {
          "description": "If the current rqURI has trailing slash then redirect to the same page with no trailing slash",
          "hierarchy": "Snap Extras CoreUtils",
          "module": "Snap.Extras.CoreUtils",
          "name": "undirify",
          "normalized": "a()",
          "package": "snap-extras",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:undirify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.FlashNotice",
          "name": "FlashNotice",
          "package": "snap-extras",
          "source": "src/Snap-Extras-FlashNotice.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "FlashNotice",
          "package": "snap-extras",
          "partial": "Flash Notice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled splice for rendering a given flash notice dirctive.\n\u003c/p\u003e\u003cp\u003eEx: \u003ca\u003etype='warning'/\u003c/a\u003e\n Ex: \u003ca\u003etype='success'/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashCSplice",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager -\u003e SnapletCSplice b",
          "source": "src/Snap-Extras-FlashNotice.html#flashCSplice",
          "type": "function"
        },
        "index": {
          "description": "compiled splice for rendering given flash notice dirctive Ex type warning Ex type success",
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashCSplice",
          "normalized": "SnapletLens a SessionManager-\u003eSnapletCSplice a",
          "package": "snap-extras",
          "partial": "CSplice",
          "signature": "SnapletLens b SessionManager-\u003eSnapletCSplice b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay an error message on next load of a page\n\u003c/p\u003e",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashError",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
          "source": "src/Snap-Extras-FlashNotice.html#flashError",
          "type": "function"
        },
        "index": {
          "description": "Display an error message on next load of page",
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashError",
          "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
          "package": "snap-extras",
          "partial": "Error",
          "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay an info message on next load of a page\n\u003c/p\u003e",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashInfo",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
          "source": "src/Snap-Extras-FlashNotice.html#flashInfo",
          "type": "function"
        },
        "index": {
          "description": "Display an info message on next load of page",
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashInfo",
          "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
          "package": "snap-extras",
          "partial": "Info",
          "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splice for rendering a given flash notice dirctive.\n\u003c/p\u003e\u003cp\u003eEx: \u003ca\u003etype='warning'/\u003c/a\u003e\n Ex: \u003ca\u003etype='success'/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashSplice",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager -\u003e SnapletISplice b",
          "source": "src/Snap-Extras-FlashNotice.html#flashSplice",
          "type": "function"
        },
        "index": {
          "description": "splice for rendering given flash notice dirctive Ex type warning Ex type success",
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashSplice",
          "normalized": "SnapletLens a SessionManager-\u003eSnapletISplice a",
          "package": "snap-extras",
          "partial": "Splice",
          "signature": "SnapletLens b SessionManager-\u003eSnapletISplice b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a success message on next load of a page\n\u003c/p\u003e",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashSuccess",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
          "source": "src/Snap-Extras-FlashNotice.html#flashSuccess",
          "type": "function"
        },
        "index": {
          "description": "Display success message on next load of page",
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashSuccess",
          "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
          "package": "snap-extras",
          "partial": "Success",
          "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay an warning message on next load of a page\n\u003c/p\u003e",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashWarning",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
          "source": "src/Snap-Extras-FlashNotice.html#flashWarning",
          "type": "function"
        },
        "index": {
          "description": "Display an warning message on next load of page",
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "flashWarning",
          "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
          "package": "snap-extras",
          "partial": "Warning",
          "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the flash notice system. All you have to do now is to\n add some flash tags in your application template. See \u003ccode\u003e\u003ca\u003eflashSplice\u003c/a\u003e\u003c/code\u003e\n for examples.\n\u003c/p\u003e",
          "module": "Snap.Extras.FlashNotice",
          "name": "initFlashNotice",
          "package": "snap-extras",
          "signature": "Snaplet (Heist b) -\u003e SnapletLens b SessionManager -\u003e Initializer b v ()",
          "source": "src/Snap-Extras-FlashNotice.html#initFlashNotice",
          "type": "function"
        },
        "index": {
          "description": "Initialize the flash notice system All you have to do now is to add some flash tags in your application template See flashSplice for examples",
          "hierarchy": "Snap Extras FlashNotice",
          "module": "Snap.Extras.FlashNotice",
          "name": "initFlashNotice",
          "normalized": "Snaplet(Heist a)-\u003eSnapletLens a SessionManager-\u003eInitializer a b()",
          "package": "snap-extras",
          "partial": "Flash Notice",
          "signature": "Snaplet(Heist b)-\u003eSnapletLens b SessionManager-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:initFlashNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.FormUtils",
          "name": "FormUtils",
          "package": "snap-extras",
          "source": "src/Snap-Extras-FormUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras FormUtils",
          "module": "Snap.Extras.FormUtils",
          "name": "FormUtils",
          "package": "snap-extras",
          "partial": "Form Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a generalized edit form splice that looks up an ID param\n specified by the \u003ccode\u003eby\u003c/code\u003e attribute.  You might use this splice as follows:\n\u003c/p\u003e\u003cpre\u003e \u003ceditFormSplice by=\"id\"\u003e\n\u003c/pre\u003e\u003cp\u003eIf you don't specify the \u003ccode\u003eby\u003c/code\u003e attribute, the default is \u003ccode\u003eby=\"id\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Extras.FormUtils",
          "name": "editFormSplice",
          "package": "snap-extras",
          "signature": "(n (Maybe a) -\u003e HeistT n m b)-\u003e (ByteString -\u003e n (Maybe a))-\u003e HeistT n m b",
          "type": "function"
        },
        "index": {
          "description": "Constructs generalized edit form splice that looks up an ID param specified by the by attribute You might use this splice as follows editFormSplice by id If you don specify the by attribute the default is by id",
          "hierarchy": "Snap Extras FormUtils",
          "module": "Snap.Extras.FormUtils",
          "name": "editFormSplice",
          "normalized": "(a(Maybe b)-\u003eHeistT a c d)-\u003e(ByteString-\u003ea(Maybe b))-\u003eHeistT a c d",
          "package": "snap-extras",
          "partial": "Form Splice",
          "signature": "(n(Maybe a)-\u003eHeistT n m b)-\u003e(ByteString-\u003en(Maybe a))-\u003eHeistT n m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:editFormSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform to Nothing if field is empty string\n\u003c/p\u003e",
          "module": "Snap.Extras.FormUtils",
          "name": "maybeTrans",
          "package": "snap-extras",
          "signature": "a -\u003e Result v (Maybe a)",
          "source": "src/Snap-Extras-FormUtils.html#maybeTrans",
          "type": "function"
        },
        "index": {
          "description": "Transform to Nothing if field is empty string",
          "hierarchy": "Snap Extras FormUtils",
          "module": "Snap.Extras.FormUtils",
          "name": "maybeTrans",
          "normalized": "a-\u003eResult b(Maybe a)",
          "package": "snap-extras",
          "partial": "Trans",
          "signature": "a-\u003eResult v(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:maybeTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe read into target value\n\u003c/p\u003e",
          "module": "Snap.Extras.FormUtils",
          "name": "readMayTrans",
          "package": "snap-extras",
          "signature": "Text -\u003e Result v (Maybe a)",
          "source": "src/Snap-Extras-FormUtils.html#readMayTrans",
          "type": "function"
        },
        "index": {
          "description": "Maybe read into target value",
          "hierarchy": "Snap Extras FormUtils",
          "module": "Snap.Extras.FormUtils",
          "name": "readMayTrans",
          "normalized": "Text-\u003eResult a(Maybe b)",
          "package": "snap-extras",
          "partial": "May Trans",
          "signature": "Text-\u003eResult v(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:readMayTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead into target value\n\u003c/p\u003e",
          "module": "Snap.Extras.FormUtils",
          "name": "readTrans",
          "package": "snap-extras",
          "signature": "Text -\u003e Result v a",
          "source": "src/Snap-Extras-FormUtils.html#readTrans",
          "type": "function"
        },
        "index": {
          "description": "Read into target value",
          "hierarchy": "Snap Extras FormUtils",
          "module": "Snap.Extras.FormUtils",
          "name": "readTrans",
          "normalized": "Text-\u003eResult a b",
          "package": "snap-extras",
          "partial": "Trans",
          "signature": "Text-\u003eResult v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:readTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.JSON",
          "name": "JSON",
          "package": "snap-extras",
          "source": "src/Snap-Extras-JSON.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "JSON",
          "package": "snap-extras",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse request body into JSON or return an error string.\n\u003c/p\u003e",
          "module": "Snap.Extras.JSON",
          "name": "getBoundedJSON",
          "package": "snap-extras",
          "signature": "Int64-\u003e m (Either String a)",
          "type": "function"
        },
        "index": {
          "description": "Parse request body into JSON or return an error string",
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "getBoundedJSON",
          "normalized": "Int-\u003ea(Either String b)",
          "package": "snap-extras",
          "partial": "Bounded JSON",
          "signature": "Int-\u003em(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:getBoundedJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse request body as JSON with a default max size of\n 50000.\n\u003c/p\u003e",
          "module": "Snap.Extras.JSON",
          "name": "getJSON",
          "package": "snap-extras",
          "signature": "m (Either String a)",
          "source": "src/Snap-Extras-JSON.html#getJSON",
          "type": "function"
        },
        "index": {
          "description": "Try to parse request body as JSON with default max size of",
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "getJSON",
          "package": "snap-extras",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:getJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet JSON data from the given Param field\n\u003c/p\u003e",
          "module": "Snap.Extras.JSON",
          "name": "getJSONField",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m (Either String a)",
          "source": "src/Snap-Extras-JSON.html#getJSONField",
          "type": "function"
        },
        "index": {
          "description": "Get JSON data from the given Param field",
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "getJSONField",
          "normalized": "ByteString-\u003ea(Either String b)",
          "package": "snap-extras",
          "partial": "JSONField",
          "signature": "ByteString-\u003em(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:getJSONField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemand the presence of JSON in the body with a size up to N\n bytes. If parsing fails for any reson, request is terminated early\n and a server error is returned.\n\u003c/p\u003e",
          "module": "Snap.Extras.JSON",
          "name": "reqBoundedJSON",
          "package": "snap-extras",
          "signature": "Int64-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Demand the presence of JSON in the body with size up to bytes If parsing fails for any reson request is terminated early and server error is returned",
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "reqBoundedJSON",
          "normalized": "Int-\u003ea b",
          "package": "snap-extras",
          "partial": "Bounded JSON",
          "signature": "Int-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:reqBoundedJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemand the presence of JSON in the body assuming it is not larger\n than 50000 bytes.\n\u003c/p\u003e",
          "module": "Snap.Extras.JSON",
          "name": "reqJSON",
          "package": "snap-extras",
          "signature": "m b",
          "source": "src/Snap-Extras-JSON.html#reqJSON",
          "type": "function"
        },
        "index": {
          "description": "Demand the presence of JSON in the body assuming it is not larger than bytes",
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "reqJSON",
          "package": "snap-extras",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:reqJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the JSON value from field. Similar to \u003ccode\u003e\u003ca\u003egetJSONField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Extras.JSON",
          "name": "reqJSONField",
          "package": "snap-extras",
          "signature": "ByteString -\u003e m a",
          "source": "src/Snap-Extras-JSON.html#reqJSONField",
          "type": "function"
        },
        "index": {
          "description": "Force the JSON value from field Similar to getJSONField",
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "reqJSONField",
          "normalized": "ByteString-\u003ea b",
          "package": "snap-extras",
          "partial": "JSONField",
          "signature": "ByteString-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:reqJSONField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet MIME to 'application/json' and write given object into\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body.\n\u003c/p\u003e",
          "module": "Snap.Extras.JSON",
          "name": "writeJSON",
          "package": "snap-extras",
          "signature": "a -\u003e m ()",
          "source": "src/Snap-Extras-JSON.html#writeJSON",
          "type": "function"
        },
        "index": {
          "description": "Set MIME to application json and write given object into Response body",
          "hierarchy": "Snap Extras JSON",
          "module": "Snap.Extras.JSON",
          "name": "writeJSON",
          "normalized": "a-\u003eb()",
          "package": "snap-extras",
          "partial": "JSON",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:writeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "NavTrails",
          "package": "snap-extras",
          "source": "src/Snap-Extras-NavTrails.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "NavTrails",
          "package": "snap-extras",
          "partial": "Nav Trails",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "NavTrail",
          "package": "snap-extras",
          "source": "src/Snap-Extras-NavTrails.html#NavTrail",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "NavTrail",
          "package": "snap-extras",
          "partial": "Nav Trail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#t:NavTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "NavTrail",
          "package": "snap-extras",
          "signature": "NavTrail",
          "source": "src/Snap-Extras-NavTrails.html#NavTrail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "NavTrail",
          "package": "snap-extras",
          "partial": "Nav Trail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:NavTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "addNavTrailSplices",
          "package": "snap-extras",
          "signature": "Snaplet (Heist b) -\u003e Initializer b (NavTrail b) ()",
          "source": "src/Snap-Extras-NavTrails.html#addNavTrailSplices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "addNavTrailSplices",
          "normalized": "Snaplet(Heist a)-\u003eInitializer a(NavTrail a)()",
          "package": "snap-extras",
          "partial": "Nav Trail Splices",
          "signature": "Snaplet(Heist b)-\u003eInitializer b(NavTrail b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:addNavTrailSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "backCSplice",
          "package": "snap-extras",
          "signature": "Splice (Handler b v)",
          "source": "src/Snap-Extras-NavTrails.html#backCSplice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "backCSplice",
          "package": "snap-extras",
          "partial": "CSplice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:backCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "backSplice",
          "package": "snap-extras",
          "signature": "HeistT m m Template",
          "source": "src/Snap-Extras-NavTrails.html#backSplice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "backSplice",
          "package": "snap-extras",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:backSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "focusCSplice",
          "package": "snap-extras",
          "signature": "SnapletLens (Snaplet v) (NavTrail b) -\u003e Splice (Handler b v)",
          "source": "src/Snap-Extras-NavTrails.html#focusCSplice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "focusCSplice",
          "normalized": "SnapletLens(Snaplet a)(NavTrail b)-\u003eSplice(Handler b a)",
          "package": "snap-extras",
          "partial": "CSplice",
          "signature": "SnapletLens(Snaplet v)(NavTrail b)-\u003eSplice(Handler b v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:focusCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "focusSplice",
          "package": "snap-extras",
          "signature": "SnapletLens (Snaplet v) (NavTrail b) -\u003e Splice (Handler b v)",
          "source": "src/Snap-Extras-NavTrails.html#focusSplice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "focusSplice",
          "normalized": "SnapletLens(Snaplet a)(NavTrail b)-\u003eSplice(Handler b a)",
          "package": "snap-extras",
          "partial": "Splice",
          "signature": "SnapletLens(Snaplet v)(NavTrail b)-\u003eSplice(Handler b v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:focusSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "getFocus",
          "package": "snap-extras",
          "signature": "Handler b (NavTrail b) (Maybe Text)",
          "source": "src/Snap-Extras-NavTrails.html#getFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "getFocus",
          "package": "snap-extras",
          "partial": "Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:getFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "getFocusDef",
          "package": "snap-extras",
          "signature": "Text -\u003e Handler b (NavTrail b) Text",
          "source": "src/Snap-Extras-NavTrails.html#getFocusDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "getFocusDef",
          "normalized": "Text-\u003eHandler a(NavTrail a)Text",
          "package": "snap-extras",
          "partial": "Focus Def",
          "signature": "Text-\u003eHandler b(NavTrail b)Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:getFocusDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "initNavTrail",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager-\u003e Maybe (Snaplet (Heist b))-\u003e SnapletInit b (NavTrail b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "initNavTrail",
          "normalized": "SnapletLens a SessionManager-\u003eMaybe(Snaplet(Heist a))-\u003eSnapletInit a(NavTrail a)",
          "package": "snap-extras",
          "partial": "Nav Trail",
          "signature": "SnapletLens b SessionManager-\u003eMaybe(Snaplet(Heist b))-\u003eSnapletInit b(NavTrail b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:initNavTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA session manager for the base\n\u003c/p\u003e",
          "module": "Snap.Extras.NavTrails",
          "name": "ntSes",
          "package": "snap-extras",
          "signature": "SnapletLens b SessionManager",
          "source": "src/Snap-Extras-NavTrails.html#NavTrail",
          "type": "function"
        },
        "index": {
          "description": "session manager for the base",
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "ntSes",
          "package": "snap-extras",
          "partial": "Ses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:ntSes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "redirBack",
          "package": "snap-extras",
          "signature": "m a",
          "source": "src/Snap-Extras-NavTrails.html#redirBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "redirBack",
          "package": "snap-extras",
          "partial": "Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:redirBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "redirFocus",
          "package": "snap-extras",
          "signature": "ByteString -\u003e Handler b (NavTrail b) a",
          "source": "src/Snap-Extras-NavTrails.html#redirFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "redirFocus",
          "normalized": "ByteString-\u003eHandler a(NavTrail a)b",
          "package": "snap-extras",
          "partial": "Focus",
          "signature": "ByteString-\u003eHandler b(NavTrail b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:redirFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "setFocus",
          "package": "snap-extras",
          "signature": "Handler b (NavTrail b) ()",
          "source": "src/Snap-Extras-NavTrails.html#setFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "setFocus",
          "normalized": "Handler a(NavTrail a)()",
          "package": "snap-extras",
          "partial": "Focus",
          "signature": "Handler b(NavTrail b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:setFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "setFocus'",
          "package": "snap-extras",
          "signature": "ByteString -\u003e Handler b (NavTrail b) ()",
          "source": "src/Snap-Extras-NavTrails.html#setFocus%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "setFocus'",
          "normalized": "ByteString-\u003eHandler a(NavTrail a)()",
          "package": "snap-extras",
          "partial": "Focus'",
          "signature": "ByteString-\u003eHandler b(NavTrail b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:setFocus-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.NavTrails",
          "name": "setFocusToRef",
          "package": "snap-extras",
          "signature": "Handler b (NavTrail b) ()",
          "source": "src/Snap-Extras-NavTrails.html#setFocusToRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras NavTrails",
          "module": "Snap.Extras.NavTrails",
          "name": "setFocusToRef",
          "normalized": "Handler a(NavTrail a)()",
          "package": "snap-extras",
          "partial": "Focus To Ref",
          "signature": "Handler b(NavTrail b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:setFocusToRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "Compiled",
          "package": "snap-extras",
          "source": "src/Snap-Extras-SpliceUtils-Compiled.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras SpliceUtils Compiled",
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "Compiled",
          "package": "snap-extras",
          "partial": "Compiled",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the value of a request parameter.  Example use:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ename=\"username\"/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "paramSplice",
          "package": "snap-extras",
          "signature": "Splice m",
          "source": "src/Snap-Extras-SpliceUtils-Compiled.html#paramSplice",
          "type": "function"
        },
        "index": {
          "description": "Gets the value of request parameter Example use name username",
          "hierarchy": "Snap Extras SpliceUtils Compiled",
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "paramSplice",
          "package": "snap-extras",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:paramSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "refererCSplice",
          "package": "snap-extras",
          "signature": "Splice m",
          "source": "src/Snap-Extras-SpliceUtils-Compiled.html#refererCSplice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras SpliceUtils Compiled",
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "refererCSplice",
          "package": "snap-extras",
          "partial": "CSplice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:refererCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches a directory on disk and all its subdirectories for all files\n with names that don't begin with an underscore and end with a .js\n extension.  It then returns script tags for each of these files.\n\u003c/p\u003e\u003cp\u003eYou can use this function to create a splice:\n\u003c/p\u003e\u003cpre\u003e (\"staticscripts\", scriptsSplice \"static/js\" \"/\")\n\u003c/pre\u003e\u003cp\u003eThen when you use the \u003ccode\u003e\u003cstaticscripts/\u003e\u003c/code\u003e tag in your templates, it will\n automatically include all the javascript code in the \u003ccode\u003estatic/js\u003c/code\u003e directory.\n\u003c/p\u003e",
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "scriptsSplice",
          "package": "snap-extras",
          "signature": "FilePath-\u003e String-\u003e Splice m",
          "type": "function"
        },
        "index": {
          "description": "Searches directory on disk and all its subdirectories for all files with names that don begin with an underscore and end with js extension It then returns script tags for each of these files You can use this function to create splice staticscripts scriptsSplice static js Then when you use the staticscripts tag in your templates it will automatically include all the javascript code in the static js directory",
          "hierarchy": "Snap Extras SpliceUtils Compiled",
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "scriptsSplice",
          "normalized": "FilePath-\u003eString-\u003eSplice a",
          "package": "snap-extras",
          "partial": "Splice",
          "signature": "FilePath-\u003eString-\u003eSplice m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:scriptsSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "utilSplices",
          "package": "snap-extras",
          "signature": "Splices (Splice m)",
          "source": "src/Snap-Extras-SpliceUtils-Compiled.html#utilSplices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras SpliceUtils Compiled",
          "module": "Snap.Extras.SpliceUtils.Compiled",
          "name": "utilSplices",
          "package": "snap-extras",
          "partial": "Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:utilSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "Interpreted",
          "package": "snap-extras",
          "source": "src/Snap-Extras-SpliceUtils-Interpreted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "Interpreted",
          "package": "snap-extras",
          "partial": "Interpreted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if the boolean flag named by the \u003ca\u003eref\u003c/a\u003e attribute is\n present and set to true in snaplet user config file. If so, run\n what's inside this splice, if not, simply omit that part.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e \u003cflag ref=\"beta-functions-enabled\"\u003e\n stuff...\n \u003c/flag\u003e\n\u003c/pre\u003e\u003cp\u003eThis will look for an entry inside your .cfg file:\n\u003c/p\u003e\u003cpre\u003e beta-functions-enabled = true\n\u003c/pre\u003e",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "ifFlagSplice",
          "package": "snap-extras",
          "signature": "SnapletISplice b",
          "source": "src/Snap-Extras-SpliceUtils-Interpreted.html#ifFlagSplice",
          "type": "function"
        },
        "index": {
          "description": "Check to see if the boolean flag named by the ref attribute is present and set to true in snaplet user config file If so run what inside this splice if not simply omit that part Example flag ref beta-functions-enabled stuff flag This will look for an entry inside your cfg file beta-functions-enabled true",
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "ifFlagSplice",
          "package": "snap-extras",
          "partial": "Flag Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:ifFlagSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the value of a request parameter.  Example use:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ename=\"username\"/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "paramSplice",
          "package": "snap-extras",
          "signature": "Splice m",
          "source": "src/Snap-Extras-SpliceUtils-Interpreted.html#paramSplice",
          "type": "function"
        },
        "index": {
          "description": "Gets the value of request parameter Example use name username",
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "paramSplice",
          "package": "snap-extras",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:paramSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "refererSplice",
          "package": "snap-extras",
          "signature": "Splice m",
          "source": "src/Snap-Extras-SpliceUtils-Interpreted.html#refererSplice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "refererSplice",
          "package": "snap-extras",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:refererSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssume text area contains the name of a splice as Text.\n\u003c/p\u003e\u003cp\u003eThis is helpful when you pass a default value to digestive-functors\n by putting the name of a splice as the value of a textarea tag.\n\u003c/p\u003e\u003cpre\u003e heistLocal runTextAreas $ render \"joo/index\"\n\u003c/pre\u003e",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "runTextAreas",
          "package": "snap-extras",
          "signature": "HeistState m -\u003e HeistState m",
          "source": "src/Snap-Extras-SpliceUtils-Interpreted.html#runTextAreas",
          "type": "function"
        },
        "index": {
          "description": "Assume text area contains the name of splice as Text This is helpful when you pass default value to digestive-functors by putting the name of splice as the value of textarea tag heistLocal runTextAreas render joo index",
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "runTextAreas",
          "normalized": "HeistState a-\u003eHeistState a",
          "package": "snap-extras",
          "partial": "Text Areas",
          "signature": "HeistState m-\u003eHeistState m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:runTextAreas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches a directory on disk and all its subdirectories for all files\n with names that don't begin with an underscore and end with a .js\n extension.  It then returns script tags for each of these files.\n\u003c/p\u003e\u003cp\u003eYou can use this function to create a splice:\n\u003c/p\u003e\u003cpre\u003e (\"staticscripts\", scriptsSplice \"static/js\" \"/\")\n\u003c/pre\u003e\u003cp\u003eThen when you use the \u003ccode\u003e\u003cstaticscripts/\u003e\u003c/code\u003e tag in your templates, it will\n automatically include all the javascript code in the \u003ccode\u003estatic/js\u003c/code\u003e directory.\n\u003c/p\u003e",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "scriptsSplice",
          "package": "snap-extras",
          "signature": "FilePath-\u003e String-\u003e m [Node]",
          "type": "function"
        },
        "index": {
          "description": "Searches directory on disk and all its subdirectories for all files with names that don begin with an underscore and end with js extension It then returns script tags for each of these files You can use this function to create splice staticscripts scriptsSplice static js Then when you use the staticscripts tag in your templates it will automatically include all the javascript code in the static js directory",
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "scriptsSplice",
          "normalized": "FilePath-\u003eString-\u003ea[Node]",
          "package": "snap-extras",
          "partial": "Splice",
          "signature": "FilePath-\u003eString-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:scriptsSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplice helper for when you're rendering a select element\n\u003c/p\u003e",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "selectSplice",
          "package": "snap-extras",
          "signature": "Text-\u003e Text-\u003e [(Text, Text)]-\u003e Maybe Text-\u003e Splice m",
          "type": "function"
        },
        "index": {
          "description": "Splice helper for when you re rendering select element",
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "selectSplice",
          "normalized": "Text-\u003eText-\u003e[(Text,Text)]-\u003eMaybe Text-\u003eSplice a",
          "package": "snap-extras",
          "partial": "Splice",
          "signature": "Text-\u003eText-\u003e[(Text,Text)]-\u003eMaybe Text-\u003eSplice m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:selectSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of splices offered in this module\n\u003c/p\u003e",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "utilSplices",
          "package": "snap-extras",
          "signature": "Splices (SnapletISplice b)",
          "source": "src/Snap-Extras-SpliceUtils-Interpreted.html#utilSplices",
          "type": "function"
        },
        "index": {
          "description": "list of splices offered in this module",
          "hierarchy": "Snap Extras SpliceUtils Interpreted",
          "module": "Snap.Extras.SpliceUtils.Interpreted",
          "name": "utilSplices",
          "package": "snap-extras",
          "partial": "Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:utilSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurpose of this module is to provide a simple, functional way to\n    define tabs in Snap applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "Tabs",
          "package": "snap-extras",
          "source": "src/Snap-Extras-Tabs.html",
          "type": "module"
        },
        "index": {
          "description": "Purpose of this module is to provide simple functional way to define tabs in Snap applications",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "Tabs",
          "package": "snap-extras",
          "partial": "Tabs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tab is a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e generator upon receiving a current URL context.\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "Tab",
          "package": "snap-extras",
          "source": "src/Snap-Extras-Tabs.html#Tab",
          "type": "type"
        },
        "index": {
          "description": "tab is Node generator upon receiving current URL context",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "Tab",
          "package": "snap-extras",
          "partial": "Tab",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#t:Tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow do we decide \u003ca\u003eactive\u003c/a\u003e for tab state?\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "TabActiveMode",
          "package": "snap-extras",
          "source": "src/Snap-Extras-Tabs.html#TabActiveMode",
          "type": "data"
        },
        "index": {
          "description": "How do we decide active for tab state",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "TabActiveMode",
          "package": "snap-extras",
          "partial": "Tab Active Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#t:TabActiveMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.Tabs",
          "name": "TAMDontMatch",
          "package": "snap-extras",
          "signature": "TAMDontMatch",
          "source": "src/Snap-Extras-Tabs.html#TabActiveMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "TAMDontMatch",
          "package": "snap-extras",
          "partial": "TAMDont Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMDontMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent url has to match exactly\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "TAMExactMatch",
          "package": "snap-extras",
          "signature": "TAMExactMatch",
          "source": "src/Snap-Extras-Tabs.html#TabActiveMode",
          "type": "function"
        },
        "index": {
          "description": "Current url has to match exactly",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "TAMExactMatch",
          "package": "snap-extras",
          "partial": "TAMExact Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMExactMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sub-set of the current url has to match\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "TAMInfixMatch",
          "package": "snap-extras",
          "signature": "TAMInfixMatch",
          "source": "src/Snap-Extras-Tabs.html#TabActiveMode",
          "type": "function"
        },
        "index": {
          "description": "sub-set of the current url has to match",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "TAMInfixMatch",
          "package": "snap-extras",
          "partial": "TAMInfix Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMInfixMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly the prefix needs to match current url\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "TAMPrefixMatch",
          "package": "snap-extras",
          "signature": "TAMPrefixMatch",
          "source": "src/Snap-Extras-Tabs.html#TabActiveMode",
          "type": "function"
        },
        "index": {
          "description": "Only the prefix needs to match current url",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "TAMPrefixMatch",
          "package": "snap-extras",
          "partial": "TAMPrefix Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMPrefixMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.Tabs",
          "name": "initTabs",
          "package": "snap-extras",
          "signature": "Snaplet (Heist b) -\u003e Initializer b v ()",
          "source": "src/Snap-Extras-Tabs.html#initTabs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "initTabs",
          "normalized": "Snaplet(Heist a)-\u003eInitializer a b()",
          "package": "snap-extras",
          "partial": "Tabs",
          "signature": "Snaplet(Heist b)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:initTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake tabs from tab definitions. Use the \u003ccode\u003e\u003ca\u003etab\u003c/a\u003e\u003c/code\u003e combinator to\n define individual options.\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "mkTabs",
          "package": "snap-extras",
          "signature": "Text-\u003e [Tab]-\u003e Splice m",
          "type": "function"
        },
        "index": {
          "description": "Make tabs from tab definitions Use the tab combinator to define individual options",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "mkTabs",
          "normalized": "Text-\u003e[Tab]-\u003eSplice a",
          "package": "snap-extras",
          "partial": "Tabs",
          "signature": "Text-\u003e[Tab]-\u003eSplice m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:mkTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTab item constructor to be used with \u003ccode\u003e\u003ca\u003emkTabs\u003c/a\u003e\u003c/code\u003e. Just supply the\n given arguments here and it will create a \u003ccode\u003e\u003ca\u003eTab\u003c/a\u003e\u003c/code\u003e ready to be used in\n \u003ccode\u003e\u003ca\u003emkTabs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the tab is currently active, the li tag will get a class of\n 'active'.\n\u003c/p\u003e\u003cp\u003eMake sure to provide a trailing / when indicating URLs as snap\n context paths contain it and active tab checks will be confused\n without it.\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "tab",
          "package": "snap-extras",
          "signature": "Text-\u003e Text-\u003e [(Text, Text)]-\u003e TabActiveMode-\u003e Tab",
          "type": "function"
        },
        "index": {
          "description": "Tab item constructor to be used with mkTabs Just supply the given arguments here and it will create Tab ready to be used in mkTabs If the tab is currently active the li tag will get class of active Make sure to provide trailing when indicating URLs as snap context paths contain it and active tab checks will be confused without it",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "tab",
          "normalized": "Text-\u003eText-\u003e[(Text,Text)]-\u003eTabActiveMode-\u003eTab",
          "package": "snap-extras",
          "signature": "Text-\u003eText-\u003e[(Text,Text)]-\u003eTabActiveMode-\u003eTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiled splice for tabs.\n\u003c/p\u003e",
          "module": "Snap.Extras.Tabs",
          "name": "tabsCSplice",
          "package": "snap-extras",
          "signature": "Splice m",
          "source": "src/Snap-Extras-Tabs.html#tabsCSplice",
          "type": "function"
        },
        "index": {
          "description": "Compiled splice for tabs",
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "tabsCSplice",
          "package": "snap-extras",
          "partial": "CSplice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:tabsCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.Tabs",
          "name": "tabsSplice",
          "package": "snap-extras",
          "signature": "Splice m",
          "source": "src/Snap-Extras-Tabs.html#tabsSplice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras Tabs",
          "module": "Snap.Extras.Tabs",
          "name": "tabsSplice",
          "package": "snap-extras",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:tabsSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.TextUtils",
          "name": "TextUtils",
          "package": "snap-extras",
          "source": "src/Snap-Extras-TextUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras TextUtils",
          "module": "Snap.Extras.TextUtils",
          "name": "TextUtils",
          "package": "snap-extras",
          "partial": "Text Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.TextUtils",
          "name": "readBS",
          "package": "snap-extras",
          "signature": "ByteString -\u003e a",
          "source": "src/Snap-Extras-TextUtils.html#readBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras TextUtils",
          "module": "Snap.Extras.TextUtils",
          "name": "readBS",
          "normalized": "ByteString-\u003ea",
          "package": "snap-extras",
          "partial": "BS",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:readBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.TextUtils",
          "name": "readT",
          "package": "snap-extras",
          "signature": "Text -\u003e a",
          "source": "src/Snap-Extras-TextUtils.html#readT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras TextUtils",
          "module": "Snap.Extras.TextUtils",
          "name": "readT",
          "normalized": "Text-\u003ea",
          "package": "snap-extras",
          "signature": "Text-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:readT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.TextUtils",
          "name": "showBS",
          "package": "snap-extras",
          "signature": "a -\u003e ByteString",
          "source": "src/Snap-Extras-TextUtils.html#showBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras TextUtils",
          "module": "Snap.Extras.TextUtils",
          "name": "showBS",
          "normalized": "a-\u003eByteString",
          "package": "snap-extras",
          "partial": "BS",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:showBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.TextUtils",
          "name": "showT",
          "package": "snap-extras",
          "signature": "a -\u003e Text",
          "source": "src/Snap-Extras-TextUtils.html#showT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras TextUtils",
          "module": "Snap.Extras.TextUtils",
          "name": "showT",
          "normalized": "a-\u003eText",
          "package": "snap-extras",
          "signature": "a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:showT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras.TextUtils",
          "name": "titleCase",
          "package": "snap-extras",
          "signature": "Text -\u003e Text",
          "source": "src/Snap-Extras-TextUtils.html#titleCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extras TextUtils",
          "module": "Snap.Extras.TextUtils",
          "name": "titleCase",
          "normalized": "Text-\u003eText",
          "package": "snap-extras",
          "partial": "Case",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:titleCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extras",
          "name": "Extras",
          "package": "snap-extras",
          "source": "src/Snap-Extras.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extras",
          "module": "Snap.Extras",
          "name": "Extras",
          "package": "snap-extras",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize all the \u003ccode\u003e\u003ca\u003eExtras\u003c/a\u003e\u003c/code\u003e functionality in your Snap app.\n Currently, we don't need to keep any state and simply return ().\n\u003c/p\u003e",
          "module": "Snap.Extras",
          "name": "initExtras",
          "package": "snap-extras",
          "signature": "Snaplet (Heist b) -\u003e SnapletLens b SessionManager -\u003e SnapletInit b ()",
          "source": "src/Snap-Extras.html#initExtras",
          "type": "function"
        },
        "index": {
          "description": "Initialize all the Extras functionality in your Snap app Currently we don need to keep any state and simply return",
          "hierarchy": "Snap Extras",
          "module": "Snap.Extras",
          "name": "initExtras",
          "normalized": "Snaplet(Heist a)-\u003eSnapletLens a SessionManager-\u003eSnapletInit a()",
          "package": "snap-extras",
          "partial": "Extras",
          "signature": "Snaplet(Heist b)-\u003eSnapletLens b SessionManager-\u003eSnapletInit b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras.html#v:initExtras"
      }
    }
  ]
]