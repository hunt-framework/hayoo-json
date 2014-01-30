[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#",
      "description": {
        "fct-module": "Snap.Extras.CSRF",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-CSRF.html",
        "fct-type": "module",
        "title": "CSRF"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras CSRF",
        "module": "Snap.Extras.CSRF",
        "name": "CSRF",
        "normalized": "",
        "package": "snap-extras",
        "partial": "CSRF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:blanketCSRF",
      "description": {
        "fct-descr": "\u003cp\u003eUse this function to wrap your whole site with CSRF protection.  Due to\n security considerations, the way Snap parses file uploads\n means that the CSRF token cannot be checked before the file uploads have\n been handled.  This function protects your whole site except for handlers\n of multipart/form-data forms (forms with file uploads).  To protect those\n handlers, you have to call handleCSRF explicitly after the file has been\n processed.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CSRF",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens v SessionManager-\u003e Handler b v ()-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "blanketCSRF"
      },
      "index": {
        "description": "Use this function to wrap your whole site with CSRF protection Due to security considerations the way Snap parses file uploads means that the CSRF token cannot be checked before the file uploads have been handled This function protects your whole site except for handlers of multipart form-data forms forms with file uploads To protect those handlers you have to call handleCSRF explicitly after the file has been processed",
        "hierarchy": "Snap Extras CSRF",
        "module": "Snap.Extras.CSRF",
        "name": "blanketCSRF",
        "normalized": "SnapletLens a SessionManager-\u003eHandler b a()-\u003eHandler b a()",
        "package": "snap-extras",
        "partial": "CSRF",
        "signature": "SnapletLens v SessionManager-\u003eHandler b v()-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:csrfTokenSplice",
      "description": {
        "fct-descr": "\u003cp\u003eA splice that makes the CSRF token available to templates.  Typically we\n use it by binding a splice and using the CSRF token provided by the session\n snaplet as follows:\n\u003c/p\u003e\u003cpre\u003e(\"csrfToken\", csrfTokenSplice $ with session \u003ccode\u003e\u003ca\u003ecsrfToken\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003esession\u003c/code\u003e is a lens to the session snaplet.  Then you can make it\n available to javascript code by putting a meta tag at the top of every\n page like this:\n\u003c/p\u003e\u003cpre\u003e \u003cmeta name=\"csrf-token\" content=\"${csrfToken}\"\u003e\n\u003c/pre\u003e",
        "fct-module": "Snap.Extras.CSRF",
        "fct-package": "snap-extras",
        "fct-signature": "m Text-\u003e Splice m",
        "fct-type": "function",
        "title": "csrfTokenSplice"
      },
      "index": {
        "description": "splice that makes the CSRF token available to templates Typically we use it by binding splice and using the CSRF token provided by the session snaplet as follows csrfToken csrfTokenSplice with session csrfToken Where session is lens to the session snaplet Then you can make it available to javascript code by putting meta tag at the top of every page like this meta name csrf-token content csrfToken",
        "hierarchy": "Snap Extras CSRF",
        "module": "Snap.Extras.CSRF",
        "name": "csrfTokenSplice",
        "normalized": "a Text-\u003eSplice a",
        "package": "snap-extras",
        "partial": "Token Splice",
        "signature": "m Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:handleCSRF",
      "description": {
        "fct-descr": "\u003cp\u003eIf a request is a POST, check the CSRF token and fail with the specified\n handler if the check fails.  If if the token is correct or if it's not a\n POST request, then control passes through as a no-op.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CSRF",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens v SessionManager-\u003e Handler b v ()-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "handleCSRF"
      },
      "index": {
        "description": "If request is POST check the CSRF token and fail with the specified handler if the check fails If if the token is correct or if it not POST request then control passes through as no-op",
        "hierarchy": "Snap Extras CSRF",
        "module": "Snap.Extras.CSRF",
        "name": "handleCSRF",
        "normalized": "SnapletLens a SessionManager-\u003eHandler b a()-\u003eHandler b a()",
        "package": "snap-extras",
        "partial": "CSRF",
        "signature": "SnapletLens v SessionManager-\u003eHandler b v()-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CSRF.html#v:secureForm",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a hidden _csrf input field as the first child of the bound tag.  For\n full site protection against CSRF, you should bind this splice to the form\n tag, and then make sure your app checks all POST requests for the presence\n of this CSRF token and that the token is randomly generated and secure on a\n per session basis.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CSRF",
        "fct-package": "snap-extras",
        "fct-signature": "m Text-\u003e Splice m",
        "fct-type": "function",
        "title": "secureForm"
      },
      "index": {
        "description": "Adds hidden csrf input field as the first child of the bound tag For full site protection against CSRF you should bind this splice to the form tag and then make sure your app checks all POST requests for the presence of this CSRF token and that the token is randomly generated and secure on per session basis",
        "hierarchy": "Snap Extras CSRF",
        "module": "Snap.Extras.CSRF",
        "name": "secureForm",
        "normalized": "a Text-\u003eSplice a",
        "package": "snap-extras",
        "partial": "Form",
        "signature": "m Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#",
      "description": {
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-CoreUtils.html",
        "fct-type": "module",
        "title": "CoreUtils"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "CoreUtils",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Core Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:-45--47--45-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenates two URL segments with a \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e between them.  To prevent double\n slashes, all trailing slashes are removed from the first path and all\n leading slashes are removed from the second path.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Snap-Extras-CoreUtils.html#-%2F-",
        "fct-type": "function",
        "title": "(-/-)"
      },
      "index": {
        "description": "Concatenates two URL segments with between them To prevent double slashes all trailing slashes are removed from the first path and all leading slashes are removed from the second path",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "(-/-) -/-",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "snap-extras",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:badReq",
      "description": {
        "fct-descr": "\u003cp\u003eFinish early with error code 400\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m b",
        "fct-source": "src/Snap-Extras-CoreUtils.html#badReq",
        "fct-type": "function",
        "title": "badReq"
      },
      "index": {
        "description": "Finish early with error code",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "badReq",
        "normalized": "ByteString-\u003ea b",
        "package": "snap-extras",
        "partial": "Req",
        "signature": "ByteString-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:dirify",
      "description": {
        "fct-descr": "\u003cp\u003eIf the current rqURI does not have a trailing slash, then redirect to the\n same page with a slash added.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Extras-CoreUtils.html#dirify",
        "fct-type": "function",
        "title": "dirify"
      },
      "index": {
        "description": "If the current rqURI does not have trailing slash then redirect to the same page with slash added",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "dirify",
        "normalized": "a()",
        "package": "snap-extras",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:easyLog",
      "description": {
        "fct-descr": "\u003cp\u003eEasier debug logging into error log. First argument is a\n category/namespace and the second argument is anything that has a\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "String -\u003e t -\u003e m ()",
        "fct-source": "src/Snap-Extras-CoreUtils.html#easyLog",
        "fct-type": "function",
        "title": "easyLog"
      },
      "index": {
        "description": "Easier debug logging into error log First argument is category namespace and the second argument is anything that has Show instance",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "easyLog",
        "normalized": "String-\u003ea-\u003eb()",
        "package": "snap-extras",
        "partial": "Log",
        "signature": "String-\u003et-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:finishEarly",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard anything after this and return given status code to HTTP\n client immediately.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "Int -\u003e ByteString -\u003e m b",
        "fct-source": "src/Snap-Extras-CoreUtils.html#finishEarly",
        "fct-type": "function",
        "title": "finishEarly"
      },
      "index": {
        "description": "Discard anything after this and return given status code to HTTP client immediately",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "finishEarly",
        "normalized": "Int-\u003eByteString-\u003ea b",
        "package": "snap-extras",
        "partial": "Early",
        "signature": "Int-\u003eByteString-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:fromMaybeM",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates an action that returns a Maybe and \n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "m a -\u003e m (Maybe a) -\u003e m a",
        "fct-source": "src/Snap-Extras-CoreUtils.html#fromMaybeM",
        "fct-type": "function",
        "title": "fromMaybeM"
      },
      "index": {
        "description": "Evaluates an action that returns Maybe and",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "fromMaybeM",
        "normalized": "a b-\u003ea(Maybe b)-\u003ea b",
        "package": "snap-extras",
        "partial": "Maybe",
        "signature": "m a-\u003em(Maybe a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:getParam-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAlternate version of getParam that considers empty string Nothing\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Snap-Extras-CoreUtils.html#getParam%27",
        "fct-type": "function",
        "title": "getParam'"
      },
      "index": {
        "description": "Alternate version of getParam that considers empty string Nothing",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "getParam'",
        "normalized": "ByteString-\u003ea(Maybe ByteString)",
        "package": "snap-extras",
        "partial": "Param'",
        "signature": "ByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:jsResponse",
      "description": {
        "fct-descr": "\u003cp\u003eMark response as 'application/javascript'\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Extras-CoreUtils.html#jsResponse",
        "fct-type": "function",
        "title": "jsResponse"
      },
      "index": {
        "description": "Mark response as application javascript",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "jsResponse",
        "normalized": "a()",
        "package": "snap-extras",
        "partial": "Response",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:jsonResponse",
      "description": {
        "fct-descr": "\u003cp\u003eMark response as 'application/json'\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Extras-CoreUtils.html#jsonResponse",
        "fct-type": "function",
        "title": "jsonResponse"
      },
      "index": {
        "description": "Mark response as application json",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "jsonResponse",
        "normalized": "a()",
        "package": "snap-extras",
        "partial": "Response",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:maybeBadReq",
      "description": {
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m (Maybe a) -\u003e m a",
        "fct-source": "src/Snap-Extras-CoreUtils.html#maybeBadReq",
        "fct-type": "function",
        "title": "maybeBadReq"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "maybeBadReq",
        "normalized": "ByteString-\u003ea(Maybe b)-\u003ea b",
        "package": "snap-extras",
        "partial": "Bad Req",
        "signature": "ByteString-\u003em(Maybe a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:notFound",
      "description": {
        "fct-descr": "\u003cp\u003eFinish early with error code 404\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m b",
        "fct-source": "src/Snap-Extras-CoreUtils.html#notFound",
        "fct-type": "function",
        "title": "notFound"
      },
      "index": {
        "description": "Finish early with error code",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "notFound",
        "normalized": "ByteString-\u003ea b",
        "package": "snap-extras",
        "partial": "Found",
        "signature": "ByteString-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:plainResponse",
      "description": {
        "fct-descr": "\u003cp\u003eMark response as 'text/plain'\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Extras-CoreUtils.html#plainResponse",
        "fct-type": "function",
        "title": "plainResponse"
      },
      "index": {
        "description": "Mark response as text plain",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "plainResponse",
        "normalized": "a()",
        "package": "snap-extras",
        "partial": "Response",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:readMayParam",
      "description": {
        "fct-descr": "\u003cp\u003eTry to read a parameter from request. Computation may fail\n because the param is not there, or because it can't be read.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m (Maybe a)",
        "fct-source": "src/Snap-Extras-CoreUtils.html#readMayParam",
        "fct-type": "function",
        "title": "readMayParam"
      },
      "index": {
        "description": "Try to read parameter from request Computation may fail because the param is not there or because it can be read",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "readMayParam",
        "normalized": "ByteString-\u003ea(Maybe b)",
        "package": "snap-extras",
        "partial": "May Param",
        "signature": "ByteString-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:readParam",
      "description": {
        "fct-descr": "\u003cp\u003eRead a parameter from request. Be sure it is readable if it's\n there, or else this will raise an error.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m (Maybe a)",
        "fct-source": "src/Snap-Extras-CoreUtils.html#readParam",
        "fct-type": "function",
        "title": "readParam"
      },
      "index": {
        "description": "Read parameter from request Be sure it is readable if it there or else this will raise an error",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "readParam",
        "normalized": "ByteString-\u003ea(Maybe b)",
        "package": "snap-extras",
        "partial": "Param",
        "signature": "ByteString-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:redirectReferer",
      "description": {
        "fct-descr": "\u003cp\u003eRedirects back to the refering page.  If there is no Referer header, then\n redirect to /.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "m b",
        "fct-source": "src/Snap-Extras-CoreUtils.html#redirectReferer",
        "fct-type": "function",
        "title": "redirectReferer"
      },
      "index": {
        "description": "Redirects back to the refering page If there is no Referer header then redirect to",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "redirectReferer",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Referer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:redirectRefererFunc",
      "description": {
        "fct-descr": "\u003cp\u003eRedirects back to the refering page.  If there is no Referer header, then\n redirect to /.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "(Maybe ByteString -\u003e ByteString) -\u003e m b",
        "fct-source": "src/Snap-Extras-CoreUtils.html#redirectRefererFunc",
        "fct-type": "function",
        "title": "redirectRefererFunc"
      },
      "index": {
        "description": "Redirects back to the refering page If there is no Referer header then redirect to",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "redirectRefererFunc",
        "normalized": "(Maybe ByteString-\u003eByteString)-\u003ea b",
        "package": "snap-extras",
        "partial": "Referer Func",
        "signature": "(Maybe ByteString-\u003eByteString)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:reqParam",
      "description": {
        "fct-descr": "\u003cp\u003eRequire that a parameter is present or terminate early.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m ByteString",
        "fct-source": "src/Snap-Extras-CoreUtils.html#reqParam",
        "fct-type": "function",
        "title": "reqParam"
      },
      "index": {
        "description": "Require that parameter is present or terminate early",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "reqParam",
        "normalized": "ByteString-\u003ea ByteString",
        "package": "snap-extras",
        "partial": "Param",
        "signature": "ByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:serverError",
      "description": {
        "fct-descr": "\u003cp\u003eFinish early with error code 500\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m b",
        "fct-source": "src/Snap-Extras-CoreUtils.html#serverError",
        "fct-type": "function",
        "title": "serverError"
      },
      "index": {
        "description": "Finish early with error code",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "serverError",
        "normalized": "ByteString-\u003ea b",
        "package": "snap-extras",
        "partial": "Error",
        "signature": "ByteString-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-CoreUtils.html#v:undirify",
      "description": {
        "fct-descr": "\u003cp\u003eIf the current rqURI has a trailing slash, then redirect to the same page\n with no trailing slash.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.CoreUtils",
        "fct-package": "snap-extras",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Extras-CoreUtils.html#undirify",
        "fct-type": "function",
        "title": "undirify"
      },
      "index": {
        "description": "If the current rqURI has trailing slash then redirect to the same page with no trailing slash",
        "hierarchy": "Snap Extras CoreUtils",
        "module": "Snap.Extras.CoreUtils",
        "name": "undirify",
        "normalized": "a()",
        "package": "snap-extras",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#",
      "description": {
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-FlashNotice.html",
        "fct-type": "module",
        "title": "FlashNotice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "FlashNotice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Flash Notice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashCSplice",
      "description": {
        "fct-descr": "\u003cp\u003eA compiled splice for rendering a given flash notice dirctive.\n\u003c/p\u003e\u003cp\u003eEx: \u003ca\u003etype='warning'/\u003c/a\u003e\n Ex: \u003ca\u003etype='success'/\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager -\u003e SnapletCSplice b",
        "fct-source": "src/Snap-Extras-FlashNotice.html#flashCSplice",
        "fct-type": "function",
        "title": "flashCSplice"
      },
      "index": {
        "description": "compiled splice for rendering given flash notice dirctive Ex type warning Ex type success",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "flashCSplice",
        "normalized": "SnapletLens a SessionManager-\u003eSnapletCSplice a",
        "package": "snap-extras",
        "partial": "CSplice",
        "signature": "SnapletLens b SessionManager-\u003eSnapletCSplice b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashError",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay an error message on next load of a page\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
        "fct-source": "src/Snap-Extras-FlashNotice.html#flashError",
        "fct-type": "function",
        "title": "flashError"
      },
      "index": {
        "description": "Display an error message on next load of page",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "flashError",
        "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
        "package": "snap-extras",
        "partial": "Error",
        "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay an info message on next load of a page\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
        "fct-source": "src/Snap-Extras-FlashNotice.html#flashInfo",
        "fct-type": "function",
        "title": "flashInfo"
      },
      "index": {
        "description": "Display an info message on next load of page",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "flashInfo",
        "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
        "package": "snap-extras",
        "partial": "Info",
        "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashSplice",
      "description": {
        "fct-descr": "\u003cp\u003eA splice for rendering a given flash notice dirctive.\n\u003c/p\u003e\u003cp\u003eEx: \u003ca\u003etype='warning'/\u003c/a\u003e\n Ex: \u003ca\u003etype='success'/\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager -\u003e SnapletISplice b",
        "fct-source": "src/Snap-Extras-FlashNotice.html#flashSplice",
        "fct-type": "function",
        "title": "flashSplice"
      },
      "index": {
        "description": "splice for rendering given flash notice dirctive Ex type warning Ex type success",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "flashSplice",
        "normalized": "SnapletLens a SessionManager-\u003eSnapletISplice a",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": "SnapletLens b SessionManager-\u003eSnapletISplice b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay a success message on next load of a page\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
        "fct-source": "src/Snap-Extras-FlashNotice.html#flashSuccess",
        "fct-type": "function",
        "title": "flashSuccess"
      },
      "index": {
        "description": "Display success message on next load of page",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "flashSuccess",
        "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
        "package": "snap-extras",
        "partial": "Success",
        "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:flashWarning",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay an warning message on next load of a page\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager -\u003e Text -\u003e Handler b b ()",
        "fct-source": "src/Snap-Extras-FlashNotice.html#flashWarning",
        "fct-type": "function",
        "title": "flashWarning"
      },
      "index": {
        "description": "Display an warning message on next load of page",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "flashWarning",
        "normalized": "SnapletLens a SessionManager-\u003eText-\u003eHandler a a()",
        "package": "snap-extras",
        "partial": "Warning",
        "signature": "SnapletLens b SessionManager-\u003eText-\u003eHandler b b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FlashNotice.html#v:initFlashNotice",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the flash notice system. All you have to do now is to\n add some flash tags in your application template. See \u003ccode\u003e\u003ca\u003eflashSplice\u003c/a\u003e\u003c/code\u003e\n for examples.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FlashNotice",
        "fct-package": "snap-extras",
        "fct-signature": "Snaplet (Heist b) -\u003e SnapletLens b SessionManager -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Extras-FlashNotice.html#initFlashNotice",
        "fct-type": "function",
        "title": "initFlashNotice"
      },
      "index": {
        "description": "Initialize the flash notice system All you have to do now is to add some flash tags in your application template See flashSplice for examples",
        "hierarchy": "Snap Extras FlashNotice",
        "module": "Snap.Extras.FlashNotice",
        "name": "initFlashNotice",
        "normalized": "Snaplet(Heist a)-\u003eSnapletLens a SessionManager-\u003eInitializer a b()",
        "package": "snap-extras",
        "partial": "Flash Notice",
        "signature": "Snaplet(Heist b)-\u003eSnapletLens b SessionManager-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#",
      "description": {
        "fct-module": "Snap.Extras.FormUtils",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-FormUtils.html",
        "fct-type": "module",
        "title": "FormUtils"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras FormUtils",
        "module": "Snap.Extras.FormUtils",
        "name": "FormUtils",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Form Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:editFormSplice",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a generalized edit form splice that looks up an ID param\n specified by the \u003ccode\u003eby\u003c/code\u003e attribute.  You might use this splice as follows:\n\u003c/p\u003e\u003cpre\u003e \u003ceditFormSplice by=\"id\"\u003e\n\u003c/pre\u003e\u003cp\u003eIf you don't specify the \u003ccode\u003eby\u003c/code\u003e attribute, the default is \u003ccode\u003eby=\"id\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FormUtils",
        "fct-package": "snap-extras",
        "fct-signature": "(n (Maybe a) -\u003e HeistT n m b)-\u003e (ByteString -\u003e n (Maybe a))-\u003e HeistT n m b",
        "fct-type": "function",
        "title": "editFormSplice"
      },
      "index": {
        "description": "Constructs generalized edit form splice that looks up an ID param specified by the by attribute You might use this splice as follows editFormSplice by id If you don specify the by attribute the default is by id",
        "hierarchy": "Snap Extras FormUtils",
        "module": "Snap.Extras.FormUtils",
        "name": "editFormSplice",
        "normalized": "(a(Maybe b)-\u003eHeistT a c d)-\u003e(ByteString-\u003ea(Maybe b))-\u003eHeistT a c d",
        "package": "snap-extras",
        "partial": "Form Splice",
        "signature": "(n(Maybe a)-\u003eHeistT n m b)-\u003e(ByteString-\u003en(Maybe a))-\u003eHeistT n m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:maybeTrans",
      "description": {
        "fct-descr": "\u003cp\u003eTransform to Nothing if field is empty string\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FormUtils",
        "fct-package": "snap-extras",
        "fct-signature": "a -\u003e Result v (Maybe a)",
        "fct-source": "src/Snap-Extras-FormUtils.html#maybeTrans",
        "fct-type": "function",
        "title": "maybeTrans"
      },
      "index": {
        "description": "Transform to Nothing if field is empty string",
        "hierarchy": "Snap Extras FormUtils",
        "module": "Snap.Extras.FormUtils",
        "name": "maybeTrans",
        "normalized": "a-\u003eResult b(Maybe a)",
        "package": "snap-extras",
        "partial": "Trans",
        "signature": "a-\u003eResult v(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:readMayTrans",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe read into target value\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FormUtils",
        "fct-package": "snap-extras",
        "fct-signature": "Text -\u003e Result v (Maybe a)",
        "fct-source": "src/Snap-Extras-FormUtils.html#readMayTrans",
        "fct-type": "function",
        "title": "readMayTrans"
      },
      "index": {
        "description": "Maybe read into target value",
        "hierarchy": "Snap Extras FormUtils",
        "module": "Snap.Extras.FormUtils",
        "name": "readMayTrans",
        "normalized": "Text-\u003eResult a(Maybe b)",
        "package": "snap-extras",
        "partial": "May Trans",
        "signature": "Text-\u003eResult v(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-FormUtils.html#v:readTrans",
      "description": {
        "fct-descr": "\u003cp\u003eRead into target value\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.FormUtils",
        "fct-package": "snap-extras",
        "fct-signature": "Text -\u003e Result v a",
        "fct-source": "src/Snap-Extras-FormUtils.html#readTrans",
        "fct-type": "function",
        "title": "readTrans"
      },
      "index": {
        "description": "Read into target value",
        "hierarchy": "Snap Extras FormUtils",
        "module": "Snap.Extras.FormUtils",
        "name": "readTrans",
        "normalized": "Text-\u003eResult a b",
        "package": "snap-extras",
        "partial": "Trans",
        "signature": "Text-\u003eResult v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#",
      "description": {
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-JSON.html",
        "fct-type": "module",
        "title": "JSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "JSON",
        "normalized": "",
        "package": "snap-extras",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:getBoundedJSON",
      "description": {
        "fct-descr": "\u003cp\u003eParse request body into JSON or return an error string.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "Int64-\u003e m (Either String a)",
        "fct-type": "function",
        "title": "getBoundedJSON"
      },
      "index": {
        "description": "Parse request body into JSON or return an error string",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "getBoundedJSON",
        "normalized": "Int-\u003ea(Either String b)",
        "package": "snap-extras",
        "partial": "Bounded JSON",
        "signature": "Int-\u003em(Either String a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:getJSON",
      "description": {
        "fct-descr": "\u003cp\u003eTry to parse request body as JSON with a default max size of\n 50000.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "m (Either String a)",
        "fct-source": "src/Snap-Extras-JSON.html#getJSON",
        "fct-type": "function",
        "title": "getJSON"
      },
      "index": {
        "description": "Try to parse request body as JSON with default max size of",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "getJSON",
        "normalized": "",
        "package": "snap-extras",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:getJSONField",
      "description": {
        "fct-descr": "\u003cp\u003eGet JSON data from the given Param field\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m (Either String a)",
        "fct-source": "src/Snap-Extras-JSON.html#getJSONField",
        "fct-type": "function",
        "title": "getJSONField"
      },
      "index": {
        "description": "Get JSON data from the given Param field",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "getJSONField",
        "normalized": "ByteString-\u003ea(Either String b)",
        "package": "snap-extras",
        "partial": "JSONField",
        "signature": "ByteString-\u003em(Either String a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:reqBoundedJSON",
      "description": {
        "fct-descr": "\u003cp\u003eDemand the presence of JSON in the body with a size up to N\n bytes. If parsing fails for any reson, request is terminated early\n and a server error is returned.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "Int64-\u003e m a",
        "fct-type": "function",
        "title": "reqBoundedJSON"
      },
      "index": {
        "description": "Demand the presence of JSON in the body with size up to bytes If parsing fails for any reson request is terminated early and server error is returned",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "reqBoundedJSON",
        "normalized": "Int-\u003ea b",
        "package": "snap-extras",
        "partial": "Bounded JSON",
        "signature": "Int-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:reqJSON",
      "description": {
        "fct-descr": "\u003cp\u003eDemand the presence of JSON in the body assuming it is not larger\n than 50000 bytes.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "m b",
        "fct-source": "src/Snap-Extras-JSON.html#reqJSON",
        "fct-type": "function",
        "title": "reqJSON"
      },
      "index": {
        "description": "Demand the presence of JSON in the body assuming it is not larger than bytes",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "reqJSON",
        "normalized": "",
        "package": "snap-extras",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:reqJSONField",
      "description": {
        "fct-descr": "\u003cp\u003eForce the JSON value from field. Similar to \u003ccode\u003e\u003ca\u003egetJSONField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e m a",
        "fct-source": "src/Snap-Extras-JSON.html#reqJSONField",
        "fct-type": "function",
        "title": "reqJSONField"
      },
      "index": {
        "description": "Force the JSON value from field Similar to getJSONField",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "reqJSONField",
        "normalized": "ByteString-\u003ea b",
        "package": "snap-extras",
        "partial": "JSONField",
        "signature": "ByteString-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-JSON.html#v:writeJSON",
      "description": {
        "fct-descr": "\u003cp\u003eSet MIME to 'application/json' and write given object into\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.JSON",
        "fct-package": "snap-extras",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Snap-Extras-JSON.html#writeJSON",
        "fct-type": "function",
        "title": "writeJSON"
      },
      "index": {
        "description": "Set MIME to application json and write given object into Response body",
        "hierarchy": "Snap Extras JSON",
        "module": "Snap.Extras.JSON",
        "name": "writeJSON",
        "normalized": "a-\u003eb()",
        "package": "snap-extras",
        "partial": "JSON",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-NavTrails.html",
        "fct-type": "module",
        "title": "NavTrails"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "NavTrails",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Nav Trails",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#t:NavTrail",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "data",
        "fct-source": "src/Snap-Extras-NavTrails.html#NavTrail",
        "fct-type": "data",
        "title": "NavTrail"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "NavTrail",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Nav Trail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:NavTrail",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "NavTrail",
        "fct-source": "src/Snap-Extras-NavTrails.html#NavTrail",
        "fct-type": "function",
        "title": "NavTrail"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "NavTrail",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Nav Trail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:addNavTrailSplices",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "Snaplet (Heist b) -\u003e Initializer b (NavTrail b) ()",
        "fct-source": "src/Snap-Extras-NavTrails.html#addNavTrailSplices",
        "fct-type": "function",
        "title": "addNavTrailSplices"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "addNavTrailSplices",
        "normalized": "Snaplet(Heist a)-\u003eInitializer a(NavTrail a)()",
        "package": "snap-extras",
        "partial": "Nav Trail Splices",
        "signature": "Snaplet(Heist b)-\u003eInitializer b(NavTrail b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:backCSplice",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "Splice (Handler b v)",
        "fct-source": "src/Snap-Extras-NavTrails.html#backCSplice",
        "fct-type": "function",
        "title": "backCSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "backCSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "CSplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:backSplice",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "HeistT m m Template",
        "fct-source": "src/Snap-Extras-NavTrails.html#backSplice",
        "fct-type": "function",
        "title": "backSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "backSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:focusCSplice",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens (Snaplet v) (NavTrail b) -\u003e Splice (Handler b v)",
        "fct-source": "src/Snap-Extras-NavTrails.html#focusCSplice",
        "fct-type": "function",
        "title": "focusCSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "focusCSplice",
        "normalized": "SnapletLens(Snaplet a)(NavTrail b)-\u003eSplice(Handler b a)",
        "package": "snap-extras",
        "partial": "CSplice",
        "signature": "SnapletLens(Snaplet v)(NavTrail b)-\u003eSplice(Handler b v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:focusSplice",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens (Snaplet v) (NavTrail b) -\u003e Splice (Handler b v)",
        "fct-source": "src/Snap-Extras-NavTrails.html#focusSplice",
        "fct-type": "function",
        "title": "focusSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "focusSplice",
        "normalized": "SnapletLens(Snaplet a)(NavTrail b)-\u003eSplice(Handler b a)",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": "SnapletLens(Snaplet v)(NavTrail b)-\u003eSplice(Handler b v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:getFocus",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "Handler b (NavTrail b) (Maybe Text)",
        "fct-source": "src/Snap-Extras-NavTrails.html#getFocus",
        "fct-type": "function",
        "title": "getFocus"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "getFocus",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Focus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:getFocusDef",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "Text -\u003e Handler b (NavTrail b) Text",
        "fct-source": "src/Snap-Extras-NavTrails.html#getFocusDef",
        "fct-type": "function",
        "title": "getFocusDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "getFocusDef",
        "normalized": "Text-\u003eHandler a(NavTrail a)Text",
        "package": "snap-extras",
        "partial": "Focus Def",
        "signature": "Text-\u003eHandler b(NavTrail b)Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:initNavTrail",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager-\u003e Maybe (Snaplet (Heist b))-\u003e SnapletInit b (NavTrail b)",
        "fct-type": "function",
        "title": "initNavTrail"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "initNavTrail",
        "normalized": "SnapletLens a SessionManager-\u003eMaybe(Snaplet(Heist a))-\u003eSnapletInit a(NavTrail a)",
        "package": "snap-extras",
        "partial": "Nav Trail",
        "signature": "SnapletLens b SessionManager-\u003eMaybe(Snaplet(Heist b))-\u003eSnapletInit b(NavTrail b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:ntSes",
      "description": {
        "fct-descr": "\u003cp\u003eA session manager for the base\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletLens b SessionManager",
        "fct-source": "src/Snap-Extras-NavTrails.html#NavTrail",
        "fct-type": "function",
        "title": "ntSes"
      },
      "index": {
        "description": "session manager for the base",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "ntSes",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Ses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:redirBack",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "m a",
        "fct-source": "src/Snap-Extras-NavTrails.html#redirBack",
        "fct-type": "function",
        "title": "redirBack"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "redirBack",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:redirFocus",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e Handler b (NavTrail b) a",
        "fct-source": "src/Snap-Extras-NavTrails.html#redirFocus",
        "fct-type": "function",
        "title": "redirFocus"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "redirFocus",
        "normalized": "ByteString-\u003eHandler a(NavTrail a)b",
        "package": "snap-extras",
        "partial": "Focus",
        "signature": "ByteString-\u003eHandler b(NavTrail b)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:setFocus",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "Handler b (NavTrail b) ()",
        "fct-source": "src/Snap-Extras-NavTrails.html#setFocus",
        "fct-type": "function",
        "title": "setFocus"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "setFocus",
        "normalized": "Handler a(NavTrail a)()",
        "package": "snap-extras",
        "partial": "Focus",
        "signature": "Handler b(NavTrail b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:setFocus-39-",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e Handler b (NavTrail b) ()",
        "fct-source": "src/Snap-Extras-NavTrails.html#setFocus%27",
        "fct-type": "function",
        "title": "setFocus'"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "setFocus'",
        "normalized": "ByteString-\u003eHandler a(NavTrail a)()",
        "package": "snap-extras",
        "partial": "Focus'",
        "signature": "ByteString-\u003eHandler b(NavTrail b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-NavTrails.html#v:setFocusToRef",
      "description": {
        "fct-module": "Snap.Extras.NavTrails",
        "fct-package": "snap-extras",
        "fct-signature": "Handler b (NavTrail b) ()",
        "fct-source": "src/Snap-Extras-NavTrails.html#setFocusToRef",
        "fct-type": "function",
        "title": "setFocusToRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras NavTrails",
        "module": "Snap.Extras.NavTrails",
        "name": "setFocusToRef",
        "normalized": "Handler a(NavTrail a)()",
        "package": "snap-extras",
        "partial": "Focus To Ref",
        "signature": "Handler b(NavTrail b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#",
      "description": {
        "fct-module": "Snap.Extras.SpliceUtils.Compiled",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-SpliceUtils-Compiled.html",
        "fct-type": "module",
        "title": "Compiled"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras SpliceUtils Compiled",
        "module": "Snap.Extras.SpliceUtils.Compiled",
        "name": "Compiled",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Compiled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:paramSplice",
      "description": {
        "fct-descr": "\u003cp\u003eGets the value of a request parameter.  Example use:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ename=\"username\"/\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Compiled",
        "fct-package": "snap-extras",
        "fct-signature": "Splice m",
        "fct-source": "src/Snap-Extras-SpliceUtils-Compiled.html#paramSplice",
        "fct-type": "function",
        "title": "paramSplice"
      },
      "index": {
        "description": "Gets the value of request parameter Example use name username",
        "hierarchy": "Snap Extras SpliceUtils Compiled",
        "module": "Snap.Extras.SpliceUtils.Compiled",
        "name": "paramSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:refererCSplice",
      "description": {
        "fct-module": "Snap.Extras.SpliceUtils.Compiled",
        "fct-package": "snap-extras",
        "fct-signature": "Splice m",
        "fct-source": "src/Snap-Extras-SpliceUtils-Compiled.html#refererCSplice",
        "fct-type": "function",
        "title": "refererCSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras SpliceUtils Compiled",
        "module": "Snap.Extras.SpliceUtils.Compiled",
        "name": "refererCSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "CSplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:scriptsSplice",
      "description": {
        "fct-descr": "\u003cp\u003eSearches a directory on disk and all its subdirectories for all files\n with names that don't begin with an underscore and end with a .js\n extension.  It then returns script tags for each of these files.\n\u003c/p\u003e\u003cp\u003eYou can use this function to create a splice:\n\u003c/p\u003e\u003cpre\u003e (\"staticscripts\", scriptsSplice \"static/js\" \"/\")\n\u003c/pre\u003e\u003cp\u003eThen when you use the \u003ccode\u003e\u003cstaticscripts/\u003e\u003c/code\u003e tag in your templates, it will\n automatically include all the javascript code in the \u003ccode\u003estatic/js\u003c/code\u003e directory.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Compiled",
        "fct-package": "snap-extras",
        "fct-signature": "FilePath-\u003e String-\u003e Splice m",
        "fct-type": "function",
        "title": "scriptsSplice"
      },
      "index": {
        "description": "Searches directory on disk and all its subdirectories for all files with names that don begin with an underscore and end with js extension It then returns script tags for each of these files You can use this function to create splice staticscripts scriptsSplice static js Then when you use the staticscripts tag in your templates it will automatically include all the javascript code in the static js directory",
        "hierarchy": "Snap Extras SpliceUtils Compiled",
        "module": "Snap.Extras.SpliceUtils.Compiled",
        "name": "scriptsSplice",
        "normalized": "FilePath-\u003eString-\u003eSplice a",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": "FilePath-\u003eString-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Compiled.html#v:utilSplices",
      "description": {
        "fct-module": "Snap.Extras.SpliceUtils.Compiled",
        "fct-package": "snap-extras",
        "fct-signature": "Splices (Splice m)",
        "fct-source": "src/Snap-Extras-SpliceUtils-Compiled.html#utilSplices",
        "fct-type": "function",
        "title": "utilSplices"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras SpliceUtils Compiled",
        "module": "Snap.Extras.SpliceUtils.Compiled",
        "name": "utilSplices",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Splices",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#",
      "description": {
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-SpliceUtils-Interpreted.html",
        "fct-type": "module",
        "title": "Interpreted"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "Interpreted",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Interpreted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:ifFlagSplice",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to see if the boolean flag named by the \u003ca\u003eref\u003c/a\u003e attribute is\n present and set to true in snaplet user config file. If so, run\n what's inside this splice, if not, simply omit that part.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e \u003cflag ref=\"beta-functions-enabled\"\u003e\n stuff...\n \u003c/flag\u003e\n\u003c/pre\u003e\u003cp\u003eThis will look for an entry inside your .cfg file:\n\u003c/p\u003e\u003cpre\u003e beta-functions-enabled = true\n\u003c/pre\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "SnapletISplice b",
        "fct-source": "src/Snap-Extras-SpliceUtils-Interpreted.html#ifFlagSplice",
        "fct-type": "function",
        "title": "ifFlagSplice"
      },
      "index": {
        "description": "Check to see if the boolean flag named by the ref attribute is present and set to true in snaplet user config file If so run what inside this splice if not simply omit that part Example flag ref beta-functions-enabled stuff flag This will look for an entry inside your cfg file beta-functions-enabled true",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "ifFlagSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Flag Splice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:paramSplice",
      "description": {
        "fct-descr": "\u003cp\u003eGets the value of a request parameter.  Example use:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ename=\"username\"/\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "Splice m",
        "fct-source": "src/Snap-Extras-SpliceUtils-Interpreted.html#paramSplice",
        "fct-type": "function",
        "title": "paramSplice"
      },
      "index": {
        "description": "Gets the value of request parameter Example use name username",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "paramSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:refererSplice",
      "description": {
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "Splice m",
        "fct-source": "src/Snap-Extras-SpliceUtils-Interpreted.html#refererSplice",
        "fct-type": "function",
        "title": "refererSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "refererSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:runTextAreas",
      "description": {
        "fct-descr": "\u003cp\u003eAssume text area contains the name of a splice as Text.\n\u003c/p\u003e\u003cp\u003eThis is helpful when you pass a default value to digestive-functors\n by putting the name of a splice as the value of a textarea tag.\n\u003c/p\u003e\u003cpre\u003e heistLocal runTextAreas $ render \"joo/index\"\n\u003c/pre\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "HeistState m -\u003e HeistState m",
        "fct-source": "src/Snap-Extras-SpliceUtils-Interpreted.html#runTextAreas",
        "fct-type": "function",
        "title": "runTextAreas"
      },
      "index": {
        "description": "Assume text area contains the name of splice as Text This is helpful when you pass default value to digestive-functors by putting the name of splice as the value of textarea tag heistLocal runTextAreas render joo index",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "runTextAreas",
        "normalized": "HeistState a-\u003eHeistState a",
        "package": "snap-extras",
        "partial": "Text Areas",
        "signature": "HeistState m-\u003eHeistState m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:scriptsSplice",
      "description": {
        "fct-descr": "\u003cp\u003eSearches a directory on disk and all its subdirectories for all files\n with names that don't begin with an underscore and end with a .js\n extension.  It then returns script tags for each of these files.\n\u003c/p\u003e\u003cp\u003eYou can use this function to create a splice:\n\u003c/p\u003e\u003cpre\u003e (\"staticscripts\", scriptsSplice \"static/js\" \"/\")\n\u003c/pre\u003e\u003cp\u003eThen when you use the \u003ccode\u003e\u003cstaticscripts/\u003e\u003c/code\u003e tag in your templates, it will\n automatically include all the javascript code in the \u003ccode\u003estatic/js\u003c/code\u003e directory.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "FilePath-\u003e String-\u003e m [Node]",
        "fct-type": "function",
        "title": "scriptsSplice"
      },
      "index": {
        "description": "Searches directory on disk and all its subdirectories for all files with names that don begin with an underscore and end with js extension It then returns script tags for each of these files You can use this function to create splice staticscripts scriptsSplice static js Then when you use the staticscripts tag in your templates it will automatically include all the javascript code in the static js directory",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "scriptsSplice",
        "normalized": "FilePath-\u003eString-\u003ea[Node]",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": "FilePath-\u003eString-\u003em[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:selectSplice",
      "description": {
        "fct-descr": "\u003cp\u003eSplice helper for when you're rendering a select element\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "Text-\u003e Text-\u003e [(Text, Text)]-\u003e Maybe Text-\u003e Splice m",
        "fct-type": "function",
        "title": "selectSplice"
      },
      "index": {
        "description": "Splice helper for when you re rendering select element",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "selectSplice",
        "normalized": "Text-\u003eText-\u003e[(Text,Text)]-\u003eMaybe Text-\u003eSplice a",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": "Text-\u003eText-\u003e[(Text,Text)]-\u003eMaybe Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-SpliceUtils-Interpreted.html#v:utilSplices",
      "description": {
        "fct-descr": "\u003cp\u003eA list of splices offered in this module\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.SpliceUtils.Interpreted",
        "fct-package": "snap-extras",
        "fct-signature": "Splices (SnapletISplice b)",
        "fct-source": "src/Snap-Extras-SpliceUtils-Interpreted.html#utilSplices",
        "fct-type": "function",
        "title": "utilSplices"
      },
      "index": {
        "description": "list of splices offered in this module",
        "hierarchy": "Snap Extras SpliceUtils Interpreted",
        "module": "Snap.Extras.SpliceUtils.Interpreted",
        "name": "utilSplices",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Splices",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurpose of this module is to provide a simple, functional way to\n    define tabs in Snap applications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-Tabs.html",
        "fct-type": "module",
        "title": "Tabs"
      },
      "index": {
        "description": "Purpose of this module is to provide simple functional way to define tabs in Snap applications",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "Tabs",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Tabs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#t:Tab",
      "description": {
        "fct-descr": "\u003cp\u003eA tab is a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e generator upon receiving a current URL context.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "type",
        "fct-source": "src/Snap-Extras-Tabs.html#Tab",
        "fct-type": "type",
        "title": "Tab"
      },
      "index": {
        "description": "tab is Node generator upon receiving current URL context",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "Tab",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Tab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#t:TabActiveMode",
      "description": {
        "fct-descr": "\u003cp\u003eHow do we decide \u003ca\u003eactive\u003c/a\u003e for tab state?\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "data",
        "fct-source": "src/Snap-Extras-Tabs.html#TabActiveMode",
        "fct-type": "data",
        "title": "TabActiveMode"
      },
      "index": {
        "description": "How do we decide active for tab state",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "TabActiveMode",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Tab Active Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMDontMatch",
      "description": {
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "TAMDontMatch",
        "fct-source": "src/Snap-Extras-Tabs.html#TabActiveMode",
        "fct-type": "function",
        "title": "TAMDontMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "TAMDontMatch",
        "normalized": "",
        "package": "snap-extras",
        "partial": "TAMDont Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMExactMatch",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent url has to match exactly\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "TAMExactMatch",
        "fct-source": "src/Snap-Extras-Tabs.html#TabActiveMode",
        "fct-type": "function",
        "title": "TAMExactMatch"
      },
      "index": {
        "description": "Current url has to match exactly",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "TAMExactMatch",
        "normalized": "",
        "package": "snap-extras",
        "partial": "TAMExact Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMInfixMatch",
      "description": {
        "fct-descr": "\u003cp\u003eA sub-set of the current url has to match\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "TAMInfixMatch",
        "fct-source": "src/Snap-Extras-Tabs.html#TabActiveMode",
        "fct-type": "function",
        "title": "TAMInfixMatch"
      },
      "index": {
        "description": "sub-set of the current url has to match",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "TAMInfixMatch",
        "normalized": "",
        "package": "snap-extras",
        "partial": "TAMInfix Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:TAMPrefixMatch",
      "description": {
        "fct-descr": "\u003cp\u003eOnly the prefix needs to match current url\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "TAMPrefixMatch",
        "fct-source": "src/Snap-Extras-Tabs.html#TabActiveMode",
        "fct-type": "function",
        "title": "TAMPrefixMatch"
      },
      "index": {
        "description": "Only the prefix needs to match current url",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "TAMPrefixMatch",
        "normalized": "",
        "package": "snap-extras",
        "partial": "TAMPrefix Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:initTabs",
      "description": {
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "Snaplet (Heist b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Extras-Tabs.html#initTabs",
        "fct-type": "function",
        "title": "initTabs"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "initTabs",
        "normalized": "Snaplet(Heist a)-\u003eInitializer a b()",
        "package": "snap-extras",
        "partial": "Tabs",
        "signature": "Snaplet(Heist b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:mkTabs",
      "description": {
        "fct-descr": "\u003cp\u003eMake tabs from tab definitions. Use the \u003ccode\u003e\u003ca\u003etab\u003c/a\u003e\u003c/code\u003e combinator to\n define individual options.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "Text-\u003e [Tab]-\u003e Splice m",
        "fct-type": "function",
        "title": "mkTabs"
      },
      "index": {
        "description": "Make tabs from tab definitions Use the tab combinator to define individual options",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "mkTabs",
        "normalized": "Text-\u003e[Tab]-\u003eSplice a",
        "package": "snap-extras",
        "partial": "Tabs",
        "signature": "Text-\u003e[Tab]-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:tab",
      "description": {
        "fct-descr": "\u003cp\u003eTab item constructor to be used with \u003ccode\u003e\u003ca\u003emkTabs\u003c/a\u003e\u003c/code\u003e. Just supply the\n given arguments here and it will create a \u003ccode\u003e\u003ca\u003eTab\u003c/a\u003e\u003c/code\u003e ready to be used in\n \u003ccode\u003e\u003ca\u003emkTabs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the tab is currently active, the li tag will get a class of\n 'active'.\n\u003c/p\u003e\u003cp\u003eMake sure to provide a trailing / when indicating URLs as snap\n context paths contain it and active tab checks will be confused\n without it.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "Text-\u003e Text-\u003e [(Text, Text)]-\u003e TabActiveMode-\u003e Tab",
        "fct-type": "function",
        "title": "tab"
      },
      "index": {
        "description": "Tab item constructor to be used with mkTabs Just supply the given arguments here and it will create Tab ready to be used in mkTabs If the tab is currently active the li tag will get class of active Make sure to provide trailing when indicating URLs as snap context paths contain it and active tab checks will be confused without it",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "tab",
        "normalized": "Text-\u003eText-\u003e[(Text,Text)]-\u003eTabActiveMode-\u003eTab",
        "package": "snap-extras",
        "partial": "",
        "signature": "Text-\u003eText-\u003e[(Text,Text)]-\u003eTabActiveMode-\u003eTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:tabsCSplice",
      "description": {
        "fct-descr": "\u003cp\u003eCompiled splice for tabs.\n\u003c/p\u003e",
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "Splice m",
        "fct-source": "src/Snap-Extras-Tabs.html#tabsCSplice",
        "fct-type": "function",
        "title": "tabsCSplice"
      },
      "index": {
        "description": "Compiled splice for tabs",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "tabsCSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "CSplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-Tabs.html#v:tabsSplice",
      "description": {
        "fct-module": "Snap.Extras.Tabs",
        "fct-package": "snap-extras",
        "fct-signature": "Splice m",
        "fct-source": "src/Snap-Extras-Tabs.html#tabsSplice",
        "fct-type": "function",
        "title": "tabsSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras Tabs",
        "module": "Snap.Extras.Tabs",
        "name": "tabsSplice",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Splice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#",
      "description": {
        "fct-module": "Snap.Extras.TextUtils",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras-TextUtils.html",
        "fct-type": "module",
        "title": "TextUtils"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras TextUtils",
        "module": "Snap.Extras.TextUtils",
        "name": "TextUtils",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Text Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:readBS",
      "description": {
        "fct-module": "Snap.Extras.TextUtils",
        "fct-package": "snap-extras",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Snap-Extras-TextUtils.html#readBS",
        "fct-type": "function",
        "title": "readBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras TextUtils",
        "module": "Snap.Extras.TextUtils",
        "name": "readBS",
        "normalized": "ByteString-\u003ea",
        "package": "snap-extras",
        "partial": "BS",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:readT",
      "description": {
        "fct-module": "Snap.Extras.TextUtils",
        "fct-package": "snap-extras",
        "fct-signature": "Text -\u003e a",
        "fct-source": "src/Snap-Extras-TextUtils.html#readT",
        "fct-type": "function",
        "title": "readT"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras TextUtils",
        "module": "Snap.Extras.TextUtils",
        "name": "readT",
        "normalized": "Text-\u003ea",
        "package": "snap-extras",
        "partial": "",
        "signature": "Text-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:showBS",
      "description": {
        "fct-module": "Snap.Extras.TextUtils",
        "fct-package": "snap-extras",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Snap-Extras-TextUtils.html#showBS",
        "fct-type": "function",
        "title": "showBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras TextUtils",
        "module": "Snap.Extras.TextUtils",
        "name": "showBS",
        "normalized": "a-\u003eByteString",
        "package": "snap-extras",
        "partial": "BS",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:showT",
      "description": {
        "fct-module": "Snap.Extras.TextUtils",
        "fct-package": "snap-extras",
        "fct-signature": "a -\u003e Text",
        "fct-source": "src/Snap-Extras-TextUtils.html#showT",
        "fct-type": "function",
        "title": "showT"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras TextUtils",
        "module": "Snap.Extras.TextUtils",
        "name": "showT",
        "normalized": "a-\u003eText",
        "package": "snap-extras",
        "partial": "",
        "signature": "a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras-TextUtils.html#v:titleCase",
      "description": {
        "fct-module": "Snap.Extras.TextUtils",
        "fct-package": "snap-extras",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Snap-Extras-TextUtils.html#titleCase",
        "fct-type": "function",
        "title": "titleCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras TextUtils",
        "module": "Snap.Extras.TextUtils",
        "name": "titleCase",
        "normalized": "Text-\u003eText",
        "package": "snap-extras",
        "partial": "Case",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras.html#",
      "description": {
        "fct-module": "Snap.Extras",
        "fct-package": "snap-extras",
        "fct-signature": "module",
        "fct-source": "src/Snap-Extras.html",
        "fct-type": "module",
        "title": "Extras"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Extras",
        "module": "Snap.Extras",
        "name": "Extras",
        "normalized": "",
        "package": "snap-extras",
        "partial": "Extras",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-extras/docs/Snap-Extras.html#v:initExtras",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize all the \u003ccode\u003e\u003ca\u003eExtras\u003c/a\u003e\u003c/code\u003e functionality in your Snap app.\n Currently, we don't need to keep any state and simply return ().\n\u003c/p\u003e",
        "fct-module": "Snap.Extras",
        "fct-package": "snap-extras",
        "fct-signature": "Snaplet (Heist b) -\u003e SnapletLens b SessionManager -\u003e SnapletInit b ()",
        "fct-source": "src/Snap-Extras.html#initExtras",
        "fct-type": "function",
        "title": "initExtras"
      },
      "index": {
        "description": "Initialize all the Extras functionality in your Snap app Currently we don need to keep any state and simply return",
        "hierarchy": "Snap Extras",
        "module": "Snap.Extras",
        "name": "initExtras",
        "normalized": "Snaplet(Heist a)-\u003eSnapletLens a SessionManager-\u003eSnapletInit a()",
        "package": "snap-extras",
        "partial": "Extras",
        "signature": "Snaplet(Heist b)-\u003eSnapletLens b SessionManager-\u003eSnapletInit b()"
      }
    }
  }
]