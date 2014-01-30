[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides bindings to the GitHub API v3.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "module",
        "fct-source": "src/Network-GitHub.html",
        "fct-type": "module",
        "title": "GitHub"
      },
      "index": {
        "description": "This module provides bindings to the GitHub API v3",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "GitHub",
        "normalized": "",
        "package": "hgithub",
        "partial": "Git Hub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#t:CreateRepository",
      "description": {
        "fct-descr": "\u003cp\u003eData needed to create a new repository.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "data",
        "fct-source": "src/Network-GitHub.html#CreateRepository",
        "fct-type": "data",
        "title": "CreateRepository"
      },
      "index": {
        "description": "Data needed to create new repository",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "CreateRepository",
        "normalized": "",
        "package": "hgithub",
        "partial": "Create Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#t:Repository",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a repository. TODO add missing fields.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "data",
        "fct-source": "src/Network-GitHub.html#Repository",
        "fct-type": "data",
        "title": "Repository"
      },
      "index": {
        "description": "Represent repository TODO add missing fields",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "Repository",
        "normalized": "",
        "package": "hgithub",
        "partial": "Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:CreateRepository",
      "description": {
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "CreateRepository",
        "fct-source": "src/Network-GitHub.html#CreateRepository",
        "fct-type": "function",
        "title": "CreateRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "CreateRepository",
        "normalized": "",
        "package": "hgithub",
        "partial": "Create Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:Repository",
      "description": {
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "Repository",
        "fct-source": "src/Network-GitHub.html#Repository",
        "fct-type": "function",
        "title": "Repository"
      },
      "index": {
        "description": "",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "Repository",
        "normalized": "",
        "package": "hgithub",
        "partial": "Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiGet",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a GET agains the specified URI (e.g. `/user/repos`) using the\n supplied `username:password` and parameters.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "String -\u003e String -\u003e [(CI ByteString, ByteString)] -\u003e IO (Maybe a)",
        "fct-source": "src/Network-GitHub.html#apiGet",
        "fct-type": "function",
        "title": "apiGet"
      },
      "index": {
        "description": "Execute GET agains the specified URI e.g user repos using the supplied username password and parameters",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "apiGet",
        "normalized": "String-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Maybe a)",
        "package": "hgithub",
        "partial": "Get",
        "signature": "String-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiGetRequest",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a request from a `username:password` bytestring (suitable for a\n Basic Auth scheme), a URI (starting with a \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, e.g. `/user/repos`), and a\n list of parameters.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "ByteString -\u003e String -\u003e [(CI ByteString, ByteString)] -\u003e IO (Request IO)",
        "fct-source": "src/Network-GitHub.html#apiGetRequest",
        "fct-type": "function",
        "title": "apiGetRequest"
      },
      "index": {
        "description": "Construct request from username password bytestring suitable for Basic Auth scheme URI starting with e.g user repos and list of parameters",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "apiGetRequest",
        "normalized": "ByteString-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Request IO)",
        "package": "hgithub",
        "partial": "Get Request",
        "signature": "ByteString-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Request IO)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiPost",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a POST agains the specified URI (e.g. `/user/repos`) using the\n supplied `username:password` and body.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "String -\u003e String -\u003e ByteString -\u003e IO (Maybe a)",
        "fct-source": "src/Network-GitHub.html#apiPost",
        "fct-type": "function",
        "title": "apiPost"
      },
      "index": {
        "description": "Execute POST agains the specified URI e.g user repos using the supplied username password and body",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "apiPost",
        "normalized": "String-\u003eString-\u003eByteString-\u003eIO(Maybe a)",
        "package": "hgithub",
        "partial": "Post",
        "signature": "String-\u003eString-\u003eByteString-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiPostRequest",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a request from a `username:password` bytestring (suitable for a\n Basic Auth scheme), a URI (starting with a \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, e.g. `/user/repos`), and a\n body.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "ByteString -\u003e String -\u003e ByteString -\u003e IO (Request IO)",
        "fct-source": "src/Network-GitHub.html#apiPostRequest",
        "fct-type": "function",
        "title": "apiPostRequest"
      },
      "index": {
        "description": "Construct request from username password bytestring suitable for Basic Auth scheme URI starting with e.g user repos and body",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "apiPostRequest",
        "normalized": "ByteString-\u003eString-\u003eByteString-\u003eIO(Request IO)",
        "package": "hgithub",
        "partial": "Post Request",
        "signature": "ByteString-\u003eString-\u003eByteString-\u003eIO(Request IO)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:createRepositoryDescription",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Network-GitHub.html#CreateRepository",
        "fct-type": "function",
        "title": "createRepositoryDescription"
      },
      "index": {
        "description": "",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "createRepositoryDescription",
        "normalized": "",
        "package": "hgithub",
        "partial": "Repository Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:createRepositoryName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "Text",
        "fct-source": "src/Network-GitHub.html#CreateRepository",
        "fct-type": "function",
        "title": "createRepositoryName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "createRepositoryName",
        "normalized": "",
        "package": "hgithub",
        "partial": "Repository Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new repository from a given name and description.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "String -\u003e String -\u003e Maybe String -\u003e IO (Maybe Repository)",
        "fct-source": "src/Network-GitHub.html#repositoryCreate",
        "fct-type": "function",
        "title": "repositoryCreate"
      },
      "index": {
        "description": "Create new repository from given name and description",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "repositoryCreate",
        "normalized": "String-\u003eString-\u003eMaybe String-\u003eIO(Maybe Repository)",
        "package": "hgithub",
        "partial": "Create",
        "signature": "String-\u003eString-\u003eMaybe String-\u003eIO(Maybe Repository)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryDescription",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "Text",
        "fct-source": "src/Network-GitHub.html#Repository",
        "fct-type": "function",
        "title": "repositoryDescription"
      },
      "index": {
        "description": "",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "repositoryDescription",
        "normalized": "",
        "package": "hgithub",
        "partial": "Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryList",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the list of repositories for a given `username:password` string.\n\u003c/p\u003e",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "String -\u003e IO (Maybe [Repository])",
        "fct-source": "src/Network-GitHub.html#repositoryList",
        "fct-type": "function",
        "title": "repositoryList"
      },
      "index": {
        "description": "Return the list of repositories for given username password string",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "repositoryList",
        "normalized": "String-\u003eIO(Maybe[Repository])",
        "package": "hgithub",
        "partial": "List",
        "signature": "String-\u003eIO(Maybe[Repository])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.GitHub",
        "fct-package": "hgithub",
        "fct-signature": "Text",
        "fct-source": "src/Network-GitHub.html#Repository",
        "fct-type": "function",
        "title": "repositoryName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network GitHub",
        "module": "Network.GitHub",
        "name": "repositoryName",
        "normalized": "",
        "package": "hgithub",
        "partial": "Name",
        "signature": ""
      }
    }
  }
]