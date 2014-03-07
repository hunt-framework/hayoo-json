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
        "word": "hgithub"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides bindings to the GitHub API v3.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.GitHub",
          "name": "GitHub",
          "package": "hgithub",
          "source": "src/Network-GitHub.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides bindings to the GitHub API v3",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "GitHub",
          "package": "hgithub",
          "partial": "Git Hub",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData needed to create a new repository.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "CreateRepository",
          "package": "hgithub",
          "source": "src/Network-GitHub.html#CreateRepository",
          "type": "data"
        },
        "index": {
          "description": "Data needed to create new repository",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "CreateRepository",
          "package": "hgithub",
          "partial": "Create Repository",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#t:CreateRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a repository. TODO add missing fields.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "Repository",
          "package": "hgithub",
          "source": "src/Network-GitHub.html#Repository",
          "type": "data"
        },
        "index": {
          "description": "Represent repository TODO add missing fields",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "Repository",
          "package": "hgithub",
          "partial": "Repository",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#t:Repository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GitHub",
          "name": "CreateRepository",
          "package": "hgithub",
          "signature": "CreateRepository",
          "source": "src/Network-GitHub.html#CreateRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "CreateRepository",
          "package": "hgithub",
          "partial": "Create Repository",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:CreateRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GitHub",
          "name": "Repository",
          "package": "hgithub",
          "signature": "Repository",
          "source": "src/Network-GitHub.html#Repository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "Repository",
          "package": "hgithub",
          "partial": "Repository",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:Repository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a GET agains the specified URI (e.g. `/user/repos`) using the\n supplied `username:password` and parameters.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "apiGet",
          "package": "hgithub",
          "signature": "String -\u003e String -\u003e [(CI ByteString, ByteString)] -\u003e IO (Maybe a)",
          "source": "src/Network-GitHub.html#apiGet",
          "type": "function"
        },
        "index": {
          "description": "Execute GET agains the specified URI e.g user repos using the supplied username password and parameters",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "apiGet",
          "normalized": "String-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Maybe a)",
          "package": "hgithub",
          "partial": "Get",
          "signature": "String-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a request from a `username:password` bytestring (suitable for a\n Basic Auth scheme), a URI (starting with a \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, e.g. `/user/repos`), and a\n list of parameters.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "apiGetRequest",
          "package": "hgithub",
          "signature": "ByteString -\u003e String -\u003e [(CI ByteString, ByteString)] -\u003e IO (Request IO)",
          "source": "src/Network-GitHub.html#apiGetRequest",
          "type": "function"
        },
        "index": {
          "description": "Construct request from username password bytestring suitable for Basic Auth scheme URI starting with e.g user repos and list of parameters",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "apiGetRequest",
          "normalized": "ByteString-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Request IO)",
          "package": "hgithub",
          "partial": "Get Request",
          "signature": "ByteString-\u003eString-\u003e[(CI ByteString,ByteString)]-\u003eIO(Request IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiGetRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a POST agains the specified URI (e.g. `/user/repos`) using the\n supplied `username:password` and body.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "apiPost",
          "package": "hgithub",
          "signature": "String -\u003e String -\u003e ByteString -\u003e IO (Maybe a)",
          "source": "src/Network-GitHub.html#apiPost",
          "type": "function"
        },
        "index": {
          "description": "Execute POST agains the specified URI e.g user repos using the supplied username password and body",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "apiPost",
          "normalized": "String-\u003eString-\u003eByteString-\u003eIO(Maybe a)",
          "package": "hgithub",
          "partial": "Post",
          "signature": "String-\u003eString-\u003eByteString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a request from a `username:password` bytestring (suitable for a\n Basic Auth scheme), a URI (starting with a \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, e.g. `/user/repos`), and a\n body.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "apiPostRequest",
          "package": "hgithub",
          "signature": "ByteString -\u003e String -\u003e ByteString -\u003e IO (Request IO)",
          "source": "src/Network-GitHub.html#apiPostRequest",
          "type": "function"
        },
        "index": {
          "description": "Construct request from username password bytestring suitable for Basic Auth scheme URI starting with e.g user repos and body",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "apiPostRequest",
          "normalized": "ByteString-\u003eString-\u003eByteString-\u003eIO(Request IO)",
          "package": "hgithub",
          "partial": "Post Request",
          "signature": "ByteString-\u003eString-\u003eByteString-\u003eIO(Request IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:apiPostRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GitHub",
          "name": "createRepositoryDescription",
          "package": "hgithub",
          "signature": "Maybe Text",
          "source": "src/Network-GitHub.html#CreateRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "createRepositoryDescription",
          "package": "hgithub",
          "partial": "Repository Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:createRepositoryDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GitHub",
          "name": "createRepositoryName",
          "package": "hgithub",
          "signature": "Text",
          "source": "src/Network-GitHub.html#CreateRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "createRepositoryName",
          "package": "hgithub",
          "partial": "Repository Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:createRepositoryName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new repository from a given name and description.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "repositoryCreate",
          "package": "hgithub",
          "signature": "String -\u003e String -\u003e Maybe String -\u003e IO (Maybe Repository)",
          "source": "src/Network-GitHub.html#repositoryCreate",
          "type": "function"
        },
        "index": {
          "description": "Create new repository from given name and description",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "repositoryCreate",
          "normalized": "String-\u003eString-\u003eMaybe String-\u003eIO(Maybe Repository)",
          "package": "hgithub",
          "partial": "Create",
          "signature": "String-\u003eString-\u003eMaybe String-\u003eIO(Maybe Repository)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GitHub",
          "name": "repositoryDescription",
          "package": "hgithub",
          "signature": "Text",
          "source": "src/Network-GitHub.html#Repository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "repositoryDescription",
          "package": "hgithub",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of repositories for a given `username:password` string.\n\u003c/p\u003e",
          "module": "Network.GitHub",
          "name": "repositoryList",
          "package": "hgithub",
          "signature": "String -\u003e IO (Maybe [Repository])",
          "source": "src/Network-GitHub.html#repositoryList",
          "type": "function"
        },
        "index": {
          "description": "Return the list of repositories for given username password string",
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "repositoryList",
          "normalized": "String-\u003eIO(Maybe[Repository])",
          "package": "hgithub",
          "partial": "List",
          "signature": "String-\u003eIO(Maybe[Repository])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GitHub",
          "name": "repositoryName",
          "package": "hgithub",
          "signature": "Text",
          "source": "src/Network-GitHub.html#Repository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GitHub",
          "module": "Network.GitHub",
          "name": "repositoryName",
          "package": "hgithub",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgithub/docs/Network-GitHub.html#v:repositoryName"
      }
    }
  ]
]