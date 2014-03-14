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
        "word": "libjenkins"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDiscover Jenkins on the network\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Jenkins.Discover",
          "name": "Discover",
          "package": "libjenkins",
          "source": "src/Jenkins-Discover.html",
          "type": "module"
        },
        "index": {
          "description": "Discover Jenkins on the network",
          "hierarchy": "Jenkins Discover",
          "module": "Jenkins.Discover",
          "name": "Discover",
          "package": "libjenkins",
          "partial": "Discover",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Discover.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins information\n\u003c/p\u003e",
          "module": "Jenkins.Discover",
          "name": "Discover",
          "package": "libjenkins",
          "source": "src/Jenkins-Discover.html#Discover",
          "type": "data"
        },
        "index": {
          "description": "Jenkins information",
          "hierarchy": "Jenkins Discover",
          "module": "Jenkins.Discover",
          "name": "Discover",
          "package": "libjenkins",
          "partial": "Discover",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Discover.html#t:Discover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Discover",
          "name": "Discover",
          "package": "libjenkins",
          "signature": "Discover",
          "source": "src/Jenkins-Discover.html#Discover",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Discover",
          "module": "Jenkins.Discover",
          "name": "Discover",
          "package": "libjenkins",
          "partial": "Discover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Discover.html#v:Discover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscover Jenkins on the network\n\u003c/p\u003e",
          "module": "Jenkins.Discover",
          "name": "discover",
          "package": "libjenkins",
          "signature": "Int-\u003e IO [Discover]",
          "type": "function"
        },
        "index": {
          "description": "Discover Jenkins on the network",
          "hierarchy": "Jenkins Discover",
          "module": "Jenkins.Discover",
          "name": "discover",
          "normalized": "Int-\u003eIO[Discover]",
          "package": "libjenkins",
          "signature": "Int-\u003eIO[Discover]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Discover.html#v:discover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Discover",
          "name": "server_id",
          "package": "libjenkins",
          "signature": "Maybe Text",
          "source": "src/Jenkins-Discover.html#Discover",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Discover",
          "module": "Jenkins.Discover",
          "name": "server_id",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Discover.html#v:server_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Discover",
          "name": "url",
          "package": "libjenkins",
          "signature": "Text",
          "source": "src/Jenkins-Discover.html#Discover",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Discover",
          "module": "Jenkins.Discover",
          "name": "url",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Discover.html#v:url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Discover",
          "name": "version",
          "package": "libjenkins",
          "signature": "Text",
          "source": "src/Jenkins-Discover.html#Discover",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Discover",
          "module": "Jenkins.Discover",
          "name": "version",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Discover.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJenkins REST API interface internals\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "Internal",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Jenkins REST API interface internals",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Internal",
          "package": "libjenkins",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins connection settings\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e_jenkinsApiToken\u003c/a\u003e\u003c/code\u003e may be user's password, Jenkins\n does not make any distinction between these concepts\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "ConnectInfo",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#ConnectInfo",
          "type": "data"
        },
        "index": {
          "description": "Jenkins connection settings jenkinsApiToken may be user password Jenkins does not make any distinction between these concepts",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "ConnectInfo",
          "package": "libjenkins",
          "partial": "Connect Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#t:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience class aimed at elimination of long\n chains of lenses to access jenkins connection configuration\n\u003c/p\u003e\u003cp\u003eFor example, if you have a configuration record in your application:\n\u003c/p\u003e\u003cpre\u003e\n data Config = Config\n   { ...\n   , _jenkinsConnectInfo :: ConnectInfo\n   , ...\n   }\n\u003c/pre\u003e\u003cp\u003eyou can make it an instance of \u003ccode\u003e\u003ca\u003eHasConnectInfo\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance HasConnectInfo Config where\n   connectInfo f x = (p -\u003e x { _jenkinsConnectInfo = p }) \u003c$\u003e f (_jenkinsConnectInfo x)\n\u003c/pre\u003e\u003cp\u003eand then use e.g. \u003ccode\u003eview jenkinsUrl config\u003c/code\u003e to get the url part of the jenkins connection\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "HasConnectInfo",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#HasConnectInfo",
          "type": "class"
        },
        "index": {
          "description": "Convenience class aimed at elimination of long chains of lenses to access jenkins connection configuration For example if you have configuration record in your application data Config Config jenkinsConnectInfo ConnectInfo you can make it an instance of HasConnectInfo instance HasConnectInfo Config where connectInfo jenkinsConnectInfo jenkinsConnectInfo and then use e.g view jenkinsUrl config to get the url part of the jenkins connection",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "HasConnectInfo",
          "package": "libjenkins",
          "partial": "Has Connect Info",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#t:HasConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins REST API query sequence description\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "Jenkins",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#Jenkins",
          "type": "newtype"
        },
        "index": {
          "description": "Jenkins REST API query sequence description",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Jenkins",
          "package": "libjenkins",
          "partial": "Jenkins",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#t:Jenkins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins REST API query\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "JenkinsF",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#JenkinsF",
          "type": "data"
        },
        "index": {
          "description": "Jenkins REST API query",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "JenkinsF",
          "package": "libjenkins",
          "partial": "Jenkins",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#t:JenkinsF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of Jenkins REST API queries\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "Result",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of Jenkins REST API queries",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Result",
          "package": "libjenkins",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "Conc",
          "package": "libjenkins",
          "signature": "Jenkins a -\u003e Jenkins b -\u003e (a -\u003e b -\u003e c) -\u003e JenkinsF c",
          "source": "src/Jenkins-Rest-Internal.html#JenkinsF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Conc",
          "normalized": "Jenkins a-\u003eJenkins b-\u003e(a-\u003eb-\u003ec)-\u003eJenkinsF c",
          "package": "libjenkins",
          "partial": "Conc",
          "signature": "Jenkins a-\u003eJenkins b-\u003e(a-\u003eb-\u003ec)-\u003eJenkinsF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Conc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "ConnectInfo",
          "package": "libjenkins",
          "signature": "ConnectInfo",
          "source": "src/Jenkins-Rest-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:ConnectInfo\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:ConnectInfo\"]"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "ConnectInfo",
          "package": "libjenkins",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "Dcon",
          "package": "libjenkins",
          "signature": "JenkinsF a",
          "source": "src/Jenkins-Rest-Internal.html#JenkinsF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Dcon",
          "package": "libjenkins",
          "partial": "Dcon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Dcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client was explicitly disconnected\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "Disconnect",
          "package": "libjenkins",
          "signature": "Disconnect",
          "source": "src/Jenkins-Rest-Internal.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Disconnect\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:Disconnect\"]"
        },
        "index": {
          "description": "The client was explicitly disconnected",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Disconnect",
          "package": "libjenkins",
          "partial": "Disconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException \u003ccode\u003ee\u003c/code\u003e was thrown while querying\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "Error",
          "package": "libjenkins",
          "signature": "Error e",
          "source": "src/Jenkins-Rest-Internal.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Error\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:Error\"]"
        },
        "index": {
          "description": "Exception was thrown while querying",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Error",
          "package": "libjenkins",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "Get",
          "package": "libjenkins",
          "signature": "Method Complete f -\u003e (ByteString -\u003e a) -\u003e JenkinsF a",
          "source": "src/Jenkins-Rest-Internal.html#JenkinsF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Get",
          "normalized": "Method Complete a-\u003e(ByteString-\u003eb)-\u003eJenkinsF b",
          "package": "libjenkins",
          "partial": "Get",
          "signature": "Method Complete f-\u003e(ByteString-\u003ea)-\u003eJenkinsF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "IO",
          "package": "libjenkins",
          "signature": "IO a -\u003e JenkinsF a",
          "source": "src/Jenkins-Rest-Internal.html#JenkinsF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "IO",
          "normalized": "IO a-\u003eJenkinsF a",
          "package": "libjenkins",
          "partial": "IO",
          "signature": "IO a-\u003eJenkinsF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "Jenkins",
          "package": "libjenkins",
          "signature": "Jenkins",
          "source": "src/Jenkins-Rest-Internal.html#Jenkins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Jenkins",
          "package": "libjenkins",
          "partial": "Jenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Jenkins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "Post",
          "package": "libjenkins",
          "signature": "(forall f.  Method Complete f) -\u003e ByteString -\u003e (ByteString -\u003e a) -\u003e JenkinsF a",
          "source": "src/Jenkins-Rest-Internal.html#JenkinsF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Post",
          "normalized": "(a b Method Complete c)-\u003eByteString-\u003e(ByteString-\u003ed)-\u003eJenkinsF d",
          "package": "libjenkins",
          "partial": "Post",
          "signature": "(forall f. Method Complete f)-\u003eByteString-\u003e(ByteString-\u003ea)-\u003eJenkinsF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuerying successfully finished the with value \u003ccode\u003ev\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "Result",
          "package": "libjenkins",
          "signature": "Result v",
          "source": "src/Jenkins-Rest-Internal.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Result\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:Result\"]"
        },
        "index": {
          "description": "Querying successfully finished the with value",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "Result",
          "package": "libjenkins",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "With",
          "package": "libjenkins",
          "signature": "(Request -\u003e Request) -\u003e Jenkins b -\u003e (b -\u003e a) -\u003e JenkinsF a",
          "source": "src/Jenkins-Rest-Internal.html#JenkinsF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "With",
          "normalized": "(Request-\u003eRequest)-\u003eJenkins a-\u003e(a-\u003eb)-\u003eJenkinsF b",
          "package": "libjenkins",
          "partial": "With",
          "signature": "(Request-\u003eRequest)-\u003eJenkins b-\u003e(b-\u003ea)-\u003eJenkinsF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism into disconnect\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "_Disconnect",
          "package": "libjenkins",
          "signature": "Prism' (Result e a) ()",
          "source": "src/Jenkins-Rest-Internal.html#_Disconnect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_Disconnect\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:_Disconnect\"]"
        },
        "index": {
          "description": "prism into disconnect",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "_Disconnect",
          "normalized": "Prism'(Result a b)()",
          "package": "libjenkins",
          "partial": "Disconnect",
          "signature": "Prism'(Result e a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_Disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism into Jenkins error\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "_Error",
          "package": "libjenkins",
          "signature": "Prism (Result e a) (Result e' a) e e'",
          "source": "src/Jenkins-Rest-Internal.html#_Error",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_Error\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:_Error\"]"
        },
        "index": {
          "description": "prism into Jenkins error",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "_Error",
          "package": "libjenkins",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism into result\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "_Result",
          "package": "libjenkins",
          "signature": "Prism (Result e a) (Result e b) a b",
          "source": "src/Jenkins-Rest-Internal.html#_Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_Result\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:_Result\"]"
        },
        "index": {
          "description": "prism into result",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "_Result",
          "package": "libjenkins",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins user API token\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "_jenkinsApiToken",
          "package": "libjenkins",
          "signature": "Text",
          "source": "src/Jenkins-Rest-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsApiToken\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:_jenkinsApiToken\"]"
        },
        "index": {
          "description": "Jenkins user API token",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "_jenkinsApiToken",
          "package": "libjenkins",
          "partial": "Api Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsApiToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins port, e.g. \u003ccode\u003e8080\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "_jenkinsPort",
          "package": "libjenkins",
          "signature": "Int",
          "source": "src/Jenkins-Rest-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsPort\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:_jenkinsPort\"]"
        },
        "index": {
          "description": "Jenkins port e.g",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "_jenkinsPort",
          "package": "libjenkins",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins URL, e.g. \u003ccode\u003ehttp://example.com/jenkins\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "_jenkinsUrl",
          "package": "libjenkins",
          "signature": "String",
          "source": "src/Jenkins-Rest-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsUrl\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:_jenkinsUrl\"]"
        },
        "index": {
          "description": "Jenkins URL e.g http example.com jenkins",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "_jenkinsUrl",
          "package": "libjenkins",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins user, e.g. \u003ccode\u003ejenkins\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "_jenkinsUser",
          "package": "libjenkins",
          "signature": "Text",
          "source": "src/Jenkins-Rest-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsUser\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:_jenkinsUser\"]"
        },
        "index": {
          "description": "Jenkins user e.g jenkins",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "_jenkinsUser",
          "package": "libjenkins",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:_jenkinsUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "connectInfo",
          "package": "libjenkins",
          "signature": "Lens' t ConnectInfo",
          "source": "src/Jenkins-Rest-Internal.html#connectInfo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "connectInfo",
          "package": "libjenkins",
          "partial": "Info",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:connectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Jenkins connection settings\n\u003c/p\u003e\u003cpre\u003e\n defaultConnectInfo = ConnectInfo\n   { _jenkinsUrl      = \"http://example.com/jenkins\"\n   , _jenkinsPort     = 8080\n   , _jenkinsUser     = \"jenkins\"\n   , _jenkinsApiToken = \"\"\n   }\n\u003c/pre\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "defaultConnectInfo",
          "package": "libjenkins",
          "signature": "ConnectInfo",
          "source": "src/Jenkins-Rest-Internal.html#defaultConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:defaultConnectInfo\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:defaultConnectInfo\"]"
        },
        "index": {
          "description": "Default Jenkins connection settings defaultConnectInfo ConnectInfo jenkinsUrl http example.com jenkins jenkinsPort jenkinsUser jenkins jenkinsApiToken",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "defaultConnectInfo",
          "package": "libjenkins",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:defaultConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJenkinsF\u003c/a\u003e\u003c/code\u003e AST interpreter\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "interpreter",
          "package": "libjenkins",
          "signature": "Manager -\u003e JenkinsF (MaybeT (ReaderT Request (ResourceT IO)) a) -\u003e MaybeT (ReaderT Request (ResourceT IO)) a",
          "source": "src/Jenkins-Rest-Internal.html#interpreter",
          "type": "function"
        },
        "index": {
          "description": "JenkinsF AST interpreter",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "interpreter",
          "normalized": "Manager-\u003eJenkinsF(MaybeT(ReaderT Request(ResourceT IO))a)-\u003eMaybeT(ReaderT Request(ResourceT IO))a",
          "package": "libjenkins",
          "signature": "Manager-\u003eJenkinsF(MaybeT(ReaderT Request(ResourceT IO))a)-\u003eMaybeT(ReaderT Request(ResourceT IO))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:interpreter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTear down \u003ccode\u003e\u003ca\u003eJenkinsF\u003c/a\u003e\u003c/code\u003e AST with a \u003ccode\u003e\u003ca\u003eJenkinsF\u003c/a\u003e\u003c/code\u003e-algebra\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "iterJenkins",
          "package": "libjenkins",
          "signature": "(JenkinsF (m a) -\u003e m a) -\u003e Jenkins a -\u003e m a",
          "source": "src/Jenkins-Rest-Internal.html#iterJenkins",
          "type": "function"
        },
        "index": {
          "description": "Tear down JenkinsF AST with JenkinsF algebra",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "iterJenkins",
          "normalized": "(JenkinsF(a b)-\u003ea b)-\u003eJenkins b-\u003ea b",
          "package": "libjenkins",
          "partial": "Jenkins",
          "signature": "(JenkinsF(m a)-\u003em a)-\u003eJenkins a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:iterJenkins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret \u003ccode\u003e\u003ca\u003eJenkinsF\u003c/a\u003e\u003c/code\u003e AST in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "iterJenkinsIO",
          "package": "libjenkins",
          "signature": "Manager -\u003e Jenkins a -\u003e MaybeT (ReaderT Request (ResourceT IO)) a",
          "source": "src/Jenkins-Rest-Internal.html#iterJenkinsIO",
          "type": "function"
        },
        "index": {
          "description": "Interpret JenkinsF AST in IO",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "iterJenkinsIO",
          "normalized": "Manager-\u003eJenkins a-\u003eMaybeT(ReaderT Request(ResourceT IO))a",
          "package": "libjenkins",
          "partial": "Jenkins IO",
          "signature": "Manager-\u003eJenkins a-\u003eMaybeT(ReaderT Request(ResourceT IO))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:iterJenkinsIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens into Jenkins user API token\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "jenkinsApiToken",
          "package": "libjenkins",
          "signature": "Lens' t Text",
          "source": "src/Jenkins-Rest-Internal.html#jenkinsApiToken",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsApiToken\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:jenkinsApiToken\"]"
        },
        "index": {
          "description": "lens into Jenkins user API token",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "jenkinsApiToken",
          "package": "libjenkins",
          "partial": "Api Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsApiToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens into Jenkins password\n\u003c/p\u003e\u003cpre\u003e\n jenkinsPassword = jenkinsApiToken\n\u003c/pre\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "jenkinsPassword",
          "package": "libjenkins",
          "signature": "Lens' t Text",
          "source": "src/Jenkins-Rest-Internal.html#jenkinsPassword",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsPassword\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:jenkinsPassword\"]"
        },
        "index": {
          "description": "lens into Jenkins password jenkinsPassword jenkinsApiToken",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "jenkinsPassword",
          "package": "libjenkins",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens into Jenkins port\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "jenkinsPort",
          "package": "libjenkins",
          "signature": "Lens' t Int",
          "source": "src/Jenkins-Rest-Internal.html#jenkinsPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsPort\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:jenkinsPort\"]"
        },
        "index": {
          "description": "lens into Jenkins port",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "jenkinsPort",
          "package": "libjenkins",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens into Jenkins URL\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "jenkinsUrl",
          "package": "libjenkins",
          "signature": "Lens' t String",
          "source": "src/Jenkins-Rest-Internal.html#jenkinsUrl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsUrl\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:jenkinsUrl\"]"
        },
        "index": {
          "description": "lens into Jenkins URL",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "jenkinsUrl",
          "package": "libjenkins",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens into Jenkins user\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "jenkinsUser",
          "package": "libjenkins",
          "signature": "Lens' t Text",
          "source": "src/Jenkins-Rest-Internal.html#jenkinsUser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsUser\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:jenkinsUser\"]"
        },
        "index": {
          "description": "lens into Jenkins user",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "jenkinsUser",
          "package": "libjenkins",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:jenkinsUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003eJenkinsF\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJenkins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Internal",
          "name": "liftJ",
          "package": "libjenkins",
          "signature": "JenkinsF a -\u003e Jenkins a",
          "source": "src/Jenkins-Rest-Internal.html#liftJ",
          "type": "function"
        },
        "index": {
          "description": "Lift JenkinsF to Jenkins",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "liftJ",
          "normalized": "JenkinsF a-\u003eJenkins a",
          "package": "libjenkins",
          "signature": "JenkinsF a-\u003eJenkins a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:liftJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery Jenkins API using \u003ccode\u003e\u003ca\u003eJenkins\u003c/a\u003e\u003c/code\u003e description\n\u003c/p\u003e\u003cp\u003eSuccessful result is either \u003ccode\u003e\u003ca\u003eDisconnect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e v \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e was thrown by \u003ccode\u003ehttp-conduit\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunJenkins\u003c/a\u003e\u003c/code\u003e catches it\n and wraps in \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e. Other exceptions are \u003cem\u003enot\u003c/em\u003e catched\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "runJenkins",
          "package": "libjenkins",
          "signature": "t -\u003e Jenkins a -\u003e IO (Result HttpException a)",
          "source": "src/Jenkins-Rest-Internal.html#runJenkins",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:runJenkins\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:runJenkins\"]"
        },
        "index": {
          "description": "Query Jenkins API using Jenkins description Successful result is either Disconnect or Result If HttpException was thrown by http-conduit runJenkins catches it and wraps in Error Other exceptions are not catched",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "runJenkins",
          "normalized": "a-\u003eJenkins b-\u003eIO(Result HttpException b)",
          "package": "libjenkins",
          "partial": "Jenkins",
          "signature": "t-\u003eJenkins a-\u003eIO(Result HttpException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:runJenkins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "runJenkinsInternal",
          "package": "libjenkins",
          "signature": "t -\u003e Jenkins a -\u003e IO (Maybe a)",
          "source": "src/Jenkins-Rest-Internal.html#runJenkinsInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "runJenkinsInternal",
          "normalized": "a-\u003eJenkins b-\u003eIO(Maybe b)",
          "package": "libjenkins",
          "partial": "Jenkins Internal",
          "signature": "t-\u003eJenkins a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:runJenkinsInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery Jenkins API using \u003ccode\u003e\u003ca\u003eJenkins\u003c/a\u003e\u003c/code\u003e description\n\u003c/p\u003e\u003cp\u003eSuccessful result is either \u003ccode\u003e\u003ca\u003eDisconnect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e v \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNo exceptions are catched, i.e.\n\u003c/p\u003e\u003cpre\u003e\n runJenkinsThrowing :: \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eJenkins\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eVoid\u003c/code\u003e a)\n\u003c/pre\u003e\u003cp\u003eis perfectly fine&#8212;\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e won't ever be an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Jenkins.Rest.Internal\",\"Jenkins.Rest\"]",
          "name": "runJenkinsThrowing",
          "package": "libjenkins",
          "signature": "t -\u003e Jenkins a -\u003e IO (Result e a)",
          "source": "src/Jenkins-Rest-Internal.html#runJenkinsThrowing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:runJenkinsThrowing\",\"http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:runJenkinsThrowing\"]"
        },
        "index": {
          "description": "Query Jenkins API using Jenkins description Successful result is either Disconnect or Result No exceptions are catched i.e runJenkinsThrowing ConnectInfo Jenkins IO Result Void is perfectly fine Result won ever be an Error",
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "runJenkinsThrowing",
          "normalized": "a-\u003eJenkins b-\u003eIO(Result c b)",
          "package": "libjenkins",
          "partial": "Jenkins Throwing",
          "signature": "t-\u003eJenkins a-\u003eIO(Result e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:runJenkinsThrowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Internal",
          "name": "unJenkins",
          "package": "libjenkins",
          "signature": "F JenkinsF a",
          "source": "src/Jenkins-Rest-Internal.html#Jenkins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Internal",
          "module": "Jenkins.Rest.Internal",
          "name": "unJenkins",
          "package": "libjenkins",
          "partial": "Jenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Internal.html#v:unJenkins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJenkins REST API method construction\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "Method",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html",
          "type": "module"
        },
        "index": {
          "description": "Jenkins REST API method construction",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "Method",
          "package": "libjenkins",
          "partial": "Method",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse format singleton type\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "As",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html#As",
          "type": "data"
        },
        "index": {
          "description": "Response format singleton type",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "As",
          "package": "libjenkins",
          "partial": "As",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#t:As"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse formats\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "Format",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html#Format",
          "type": "data"
        },
        "index": {
          "description": "Response formats",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "Format",
          "package": "libjenkins",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON response format\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "JSONy",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html#JSONy",
          "type": "class"
        },
        "index": {
          "description": "JSON response format",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "JSONy",
          "package": "libjenkins",
          "partial": "JSONy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#t:JSONy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins RESTFul API method encoding\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "Method",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Jenkins RESTFul API method encoding",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "Method",
          "package": "libjenkins",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePython response format\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "Pythony",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html#Pythony",
          "type": "class"
        },
        "index": {
          "description": "Python response format",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "Pythony",
          "package": "libjenkins",
          "partial": "Pythony",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#t:Pythony"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethod types\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "Type",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Method types",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "Type",
          "package": "libjenkins",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXML response format\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "XMLy",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Method.html#XMLy",
          "type": "class"
        },
        "index": {
          "description": "XML response format",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "XMLy",
          "package": "libjenkins",
          "partial": "XMLy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#t:XMLy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine 2 queries\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "(-&-)",
          "package": "libjenkins",
          "signature": "Method Query f -\u003e Method Query f -\u003e Method Query f",
          "source": "src/Jenkins-Rest-Method.html#-%26-",
          "type": "function"
        },
        "index": {
          "description": "Combine queries",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "(-&-) -&-",
          "normalized": "Method Query a-\u003eMethod Query a-\u003eMethod Query a",
          "package": "libjenkins",
          "signature": "Method Query f-\u003eMethod Query f-\u003eMethod Query f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:-45--38--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine 2 paths\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "(-/-)",
          "package": "libjenkins",
          "signature": "Method Complete f -\u003e Method Complete f -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#-%2F-",
          "type": "function"
        },
        "index": {
          "description": "Combine paths",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "(-/-) -/-",
          "normalized": "Method Complete a-\u003eMethod Complete a-\u003eMethod Complete a",
          "package": "libjenkins",
          "signature": "Method Complete f-\u003eMethod Complete f-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:-45--47--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a field-value pair\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "(-=-)",
          "package": "libjenkins",
          "signature": "Text -\u003e Text -\u003e Method Query f",
          "source": "src/Jenkins-Rest-Method.html#-%3D-",
          "type": "function"
        },
        "index": {
          "description": "Make field-value pair",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "(-=-) -=-",
          "normalized": "Text-\u003eText-\u003eMethod Query a",
          "package": "libjenkins",
          "signature": "Text-\u003eText-\u003eMethod Query f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:-45--61--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine path and query\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "(-?-)",
          "package": "libjenkins",
          "signature": "Method Complete f -\u003e Method Query f -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#-%3F-",
          "type": "function"
        },
        "index": {
          "description": "Combine path and query",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "(-?-) -?-",
          "normalized": "Method Complete a-\u003eMethod Query a-\u003eMethod Complete a",
          "package": "libjenkins",
          "signature": "Method Complete f-\u003eMethod Query f-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:-45--63--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Method",
          "name": "Complete",
          "package": "libjenkins",
          "signature": "Complete",
          "source": "src/Jenkins-Rest-Method.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "Complete",
          "package": "libjenkins",
          "partial": "Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:Complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Method",
          "name": "Query",
          "package": "libjenkins",
          "signature": "Query",
          "source": "src/Jenkins-Rest-Method.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "Query",
          "package": "libjenkins",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose response format\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "as",
          "package": "libjenkins",
          "signature": "Method Complete f -\u003e As f -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#as",
          "type": "function"
        },
        "index": {
          "description": "Choose response format",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "as",
          "normalized": "Method Complete a-\u003eAs a-\u003eMethod Complete a",
          "package": "libjenkins",
          "signature": "Method Complete f-\u003eAs f-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:as"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob build API method\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (build \"name\" 4 `as` json)\n\u003c/code\u003e\u003c/strong\u003e\"job/name/4/api/json\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "build",
          "package": "libjenkins",
          "signature": "Text -\u003e a -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#build",
          "type": "function"
        },
        "index": {
          "description": "Job build API method render build name as json job name api json",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "build",
          "normalized": "Text-\u003ea-\u003eMethod Complete b",
          "package": "libjenkins",
          "signature": "Text-\u003ea-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode API method\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (computer `as` python)\n\u003c/code\u003e\u003c/strong\u003e\"computer/api/python\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "computer",
          "package": "libjenkins",
          "signature": "Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#computer",
          "type": "function"
        },
        "index": {
          "description": "Node API method render computer as python computer api python",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "computer",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:computer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "int",
          "package": "libjenkins",
          "signature": "Integer -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#int",
          "type": "function"
        },
        "index": {
          "description": "Convert Integer to Method",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "int",
          "normalized": "Integer-\u003eMethod Complete a",
          "package": "libjenkins",
          "signature": "Integer-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob API method\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (job \"name\" `as` json)\n\u003c/code\u003e\u003c/strong\u003e\"job/name/api/json\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "job",
          "package": "libjenkins",
          "signature": "Text -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#job",
          "type": "function"
        },
        "index": {
          "description": "Job API method render job name as json job name api json",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "job",
          "normalized": "Text-\u003eMethod Complete a",
          "package": "libjenkins",
          "signature": "Text-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:job"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Method",
          "name": "json",
          "package": "libjenkins",
          "signature": "t JSON",
          "source": "src/Jenkins-Rest-Method.html#json",
          "type": "method"
        },
        "index": {
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "json",
          "package": "libjenkins",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics API method\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (overallLoad `as` xml)\n\u003c/code\u003e\u003c/strong\u003e\"overallLoad/api/xml\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "overallLoad",
          "package": "libjenkins",
          "signature": "Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#overallLoad",
          "type": "function"
        },
        "index": {
          "description": "Statistics API method render overallLoad as xml overallLoad api xml",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "overallLoad",
          "package": "libjenkins",
          "partial": "Load",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:overallLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Method",
          "name": "python",
          "package": "libjenkins",
          "signature": "t Python",
          "source": "src/Jenkins-Rest-Method.html#python",
          "type": "method"
        },
        "index": {
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "python",
          "package": "libjenkins",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:python"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList-to-query convenience combinator\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (query [(\"foo\", Nothing), (\"bar\", Just \"baz\"), (\"quux\", Nothing)])\n\u003c/code\u003e\u003c/strong\u003e\"foo&bar=baz&quux\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (query [])\n\u003c/code\u003e\u003c/strong\u003e\"\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "query",
          "package": "libjenkins",
          "signature": "[(Text, Maybe Text)] -\u003e Method Query f",
          "source": "src/Jenkins-Rest-Method.html#query",
          "type": "function"
        },
        "index": {
          "description": "List-to-query convenience combinator render query foo Nothing bar Just baz quux Nothing foo bar baz quux render query",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "query",
          "normalized": "[(Text,Maybe Text)]-\u003eMethod Query a",
          "package": "libjenkins",
          "signature": "[(Text,Maybe Text)]-\u003eMethod Query f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueue API method\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (queue `as` python)\n\u003c/code\u003e\u003c/strong\u003e\"queue/api/python\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "queue",
          "package": "libjenkins",
          "signature": "Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#queue",
          "type": "function"
        },
        "index": {
          "description": "Queue API method render queue as python queue api python",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "queue",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e to something that can be sent over the wire\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"\" `as` xml)\n\u003c/code\u003e\u003c/strong\u003e\"api/xml\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender xml\n\u003c/code\u003e\u003c/strong\u003e\"api/xml\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"job\" -/- 7 `as` xml)\n\u003c/code\u003e\u003c/strong\u003e\"job/7/api/xml\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"job\" -/- 7 `as` xml)\n\u003c/code\u003e\u003c/strong\u003e\"job/7/api/xml\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"job\" -/- 7 `as` json)\n\u003c/code\u003e\u003c/strong\u003e\"job/7/api/json\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (text \"restart\")\n\u003c/code\u003e\u003c/strong\u003e\"restart\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"job\" -?- \"name\" -=- \"foo\" -&- \"title\" -=- \"bar\")\n\u003c/code\u003e\u003c/strong\u003e\"job?name=foo&title=bar\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"job\" -?- \"name\" -&- \"title\" -=- \"bar\")\n\u003c/code\u003e\u003c/strong\u003e\"job?name&title=bar\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"job\" -/- 7 `as` json -?- \"name\" -&- \"title\" -=- \"bar\")\n\u003c/code\u003e\u003c/strong\u003e\"job/7/api/json?name&title=bar\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (\"job\" -/- \"&#1044;&#1052;&#1048;&#1058;&#1056;&#1048;&#1049;\" `as` xml)\n\u003c/code\u003e\u003c/strong\u003e\"job/%D0%94%D0%9C%D0%98%D0%A2%D0%A0%D0%98%D0%99/api/xml\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "render",
          "package": "libjenkins",
          "signature": "Method t f -\u003e ByteString",
          "source": "src/Jenkins-Rest-Method.html#render",
          "type": "function"
        },
        "index": {
          "description": "Render Method to something that can be sent over the wire render as xml api xml render xml api xml render job as xml job api xml render job as xml job api xml render job as json job api json render text restart restart render job name foo title bar job name foo title bar render job name title bar job name title bar render job as json name title bar job api json name title bar render job as xml job D0 D0 D0 D0 A2 D0 A0 D0 D0 api xml",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "render",
          "normalized": "Method a b-\u003eByteString",
          "package": "libjenkins",
          "signature": "Method t f-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert \"/\" between two \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-like things and concatenate everything.\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "slash",
          "package": "libjenkins",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Jenkins-Rest-Method.html#slash",
          "type": "function"
        },
        "index": {
          "description": "Insert between two String like things and concatenate everything",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "slash",
          "normalized": "a-\u003ea-\u003ea",
          "package": "libjenkins",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "text",
          "package": "libjenkins",
          "signature": "Text -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#text",
          "type": "function"
        },
        "index": {
          "description": "Convert Text to Method",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "text",
          "normalized": "Text-\u003eMethod Complete a",
          "package": "libjenkins",
          "signature": "Text-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView API method\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erender (view \"name\" `as` xml)\n\u003c/code\u003e\u003c/strong\u003e\"view/name/api/xml\"\n\u003c/pre\u003e",
          "module": "Jenkins.Rest.Method",
          "name": "view",
          "package": "libjenkins",
          "signature": "Text -\u003e Method Complete f",
          "source": "src/Jenkins-Rest-Method.html#view",
          "type": "function"
        },
        "index": {
          "description": "View API method render view name as xml view name api xml",
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "view",
          "normalized": "Text-\u003eMethod Complete a",
          "package": "libjenkins",
          "signature": "Text-\u003eMethod Complete f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest.Method",
          "name": "xml",
          "package": "libjenkins",
          "signature": "t XML",
          "source": "src/Jenkins-Rest-Method.html#xml",
          "type": "method"
        },
        "index": {
          "hierarchy": "Jenkins Rest Method",
          "module": "Jenkins.Rest.Method",
          "name": "xml",
          "package": "libjenkins",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest-Method.html#v:xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJenkins REST API interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Jenkins.Rest",
          "name": "Rest",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest.html",
          "type": "module"
        },
        "index": {
          "description": "Jenkins REST API interface",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "Rest",
          "package": "libjenkins",
          "partial": "Rest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins connection settings\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e_jenkinsApiToken\u003c/a\u003e\u003c/code\u003e may be user's password, Jenkins\n does not make any distinction between these concepts\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "ConnectInfo",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#ConnectInfo",
          "type": "data"
        },
        "index": {
          "description": "Jenkins connection settings jenkinsApiToken may be user password Jenkins does not make any distinction between these concepts",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "ConnectInfo",
          "package": "libjenkins",
          "partial": "Connect Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#t:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience class aimed at elimination of long\n chains of lenses to access jenkins connection configuration\n\u003c/p\u003e\u003cp\u003eFor example, if you have a configuration record in your application:\n\u003c/p\u003e\u003cpre\u003e\n data Config = Config\n   { ...\n   , _jenkinsConnectInfo :: ConnectInfo\n   , ...\n   }\n\u003c/pre\u003e\u003cp\u003eyou can make it an instance of \u003ccode\u003e\u003ca\u003eHasConnectInfo\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance HasConnectInfo Config where\n   connectInfo f x = (p -\u003e x { _jenkinsConnectInfo = p }) \u003c$\u003e f (_jenkinsConnectInfo x)\n\u003c/pre\u003e\u003cp\u003eand then use e.g. \u003ccode\u003eview jenkinsUrl config\u003c/code\u003e to get the url part of the jenkins connection\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "HasConnectInfo",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#HasConnectInfo",
          "type": "class"
        },
        "index": {
          "description": "Convenience class aimed at elimination of long chains of lenses to access jenkins connection configuration For example if you have configuration record in your application data Config Config jenkinsConnectInfo ConnectInfo you can make it an instance of HasConnectInfo instance HasConnectInfo Config where connectInfo jenkinsConnectInfo jenkinsConnectInfo and then use e.g view jenkinsUrl config to get the url part of the jenkins connection",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "HasConnectInfo",
          "package": "libjenkins",
          "partial": "Has Connect Info",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#t:HasConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest",
          "name": "HttpException",
          "package": "libjenkins",
          "type": "data"
        },
        "index": {
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "HttpException",
          "package": "libjenkins",
          "partial": "Http Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#t:HttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJenkins REST API query sequence description\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "Jenkins",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#Jenkins",
          "type": "data"
        },
        "index": {
          "description": "Jenkins REST API query sequence description",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "Jenkins",
          "package": "libjenkins",
          "partial": "Jenkins",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#t:Jenkins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll information on how to connect to a host and what should be sent in the\n HTTP request.\n\u003c/p\u003e\u003cp\u003eIf you simply wish to download from a URL, see \u003ccode\u003eparseUrl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe constructor for this data type is not exposed. Instead, you should use\n either the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method to retrieve a default instance, or \u003ccode\u003eparseUrl\u003c/code\u003e to\n construct from a URL, and then use the records below to make modifications.\n This approach allows http-client to add configuration options without\n breaking backwards compatibility.\n\u003c/p\u003e\u003cp\u003eFor example, to construct a POST request, you could do something like:\n\u003c/p\u003e\u003cpre\u003e initReq \u003c- parseUrl \"http://www.example.com/path\"\n let req = initReq\n             { method = \"POST\"\n             }\n\u003c/pre\u003e\u003cp\u003eFor more information, please see\n \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "Request",
          "package": "libjenkins",
          "type": "data"
        },
        "index": {
          "description": "All information on how to connect to host and what should be sent in the HTTP request If you simply wish to download from URL see parseUrl The constructor for this data type is not exposed Instead you should use either the def method to retrieve default instance or parseUrl to construct from URL and then use the records below to make modifications This approach allows http-client to add configuration options without breaking backwards compatibility For example to construct POST request you could do something like initReq parseUrl http www.example.com path let req initReq method POST For more information please see http www.yesodweb.com book settings-types Since",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "Request",
          "package": "libjenkins",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of Jenkins REST API queries\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "Result",
          "package": "libjenkins",
          "source": "src/Jenkins-Rest-Internal.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of Jenkins REST API queries",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "Result",
          "package": "libjenkins",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo both queries \u003ccode\u003e\u003ca\u003econcurrently\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "concurrently",
          "package": "libjenkins",
          "signature": "Jenkins a -\u003e Jenkins b -\u003e Jenkins (a, b)",
          "source": "src/Jenkins-Rest.html#concurrently",
          "type": "function"
        },
        "index": {
          "description": "Do both queries concurrently",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "concurrently",
          "normalized": "Jenkins a-\u003eJenkins b-\u003eJenkins(a,b)",
          "package": "libjenkins",
          "signature": "Jenkins a-\u003eJenkins b-\u003eJenkins(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:concurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a list of queries \u003ccode\u003e\u003ca\u003econcurrently\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "concurrentlys",
          "package": "libjenkins",
          "signature": "f (Jenkins a) -\u003e Jenkins [a]",
          "source": "src/Jenkins-Rest.html#concurrentlys",
          "type": "function"
        },
        "index": {
          "description": "Send list of queries concurrently",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "concurrentlys",
          "normalized": "a(Jenkins b)-\u003eJenkins[b]",
          "package": "libjenkins",
          "signature": "f(Jenkins a)-\u003eJenkins[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:concurrentlys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a list of queries \u003ccode\u003e\u003ca\u003econcurrently\u003c/a\u003e\u003c/code\u003e ignoring their results\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: exceptions are still raised\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "concurrentlys_",
          "package": "libjenkins",
          "signature": "f (Jenkins a) -\u003e Jenkins ()",
          "source": "src/Jenkins-Rest.html#concurrentlys_",
          "type": "function"
        },
        "index": {
          "description": "Send list of queries concurrently ignoring their results Note exceptions are still raised",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "concurrentlys_",
          "normalized": "a(Jenkins b)-\u003eJenkins()",
          "package": "libjenkins",
          "signature": "f(Jenkins a)-\u003eJenkins()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:concurrentlys_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Jenkins.Rest",
          "name": "connectInfo",
          "package": "libjenkins",
          "signature": "Lens' t ConnectInfo",
          "source": "src/Jenkins-Rest-Internal.html#connectInfo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "connectInfo",
          "package": "libjenkins",
          "partial": "Info",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:connectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnect from Jenkins\n\u003c/p\u003e\u003cp\u003eAny following queries won't be executed\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "disconnect",
          "package": "libjenkins",
          "signature": "Jenkins a",
          "source": "src/Jenkins-Rest.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Disconnect from Jenkins Any following queries won be executed",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "disconnect",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce jenkins to restart without waiting for running jobs to finish\n\u003c/p\u003e\u003cp\u003eCalls \u003ccode\u003e/restart\u003c/code\u003e and disconnects\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "forceRestart",
          "package": "libjenkins",
          "signature": "Jenkins a",
          "source": "src/Jenkins-Rest.html#forceRestart",
          "type": "function"
        },
        "index": {
          "description": "Force jenkins to restart without waiting for running jobs to finish Calls restart and disconnects",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "forceRestart",
          "package": "libjenkins",
          "partial": "Restart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:forceRestart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eGET\u003c/code\u003e query\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "get",
          "package": "libjenkins",
          "signature": "Method Complete f -\u003e Jenkins ByteString",
          "source": "src/Jenkins-Rest.html#get",
          "type": "function"
        },
        "index": {
          "description": "GET query",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "get",
          "normalized": "Method Complete a-\u003eJenkins ByteString",
          "package": "libjenkins",
          "signature": "Method Complete f-\u003eJenkins ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an arbitrary \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action to the \u003ccode\u003e\u003ca\u003eJenkins\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e\u003cpre\u003e\n io :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eJenkins\u003c/a\u003e\u003c/code\u003e a\n\u003c/pre\u003e",
          "module": "Jenkins.Rest",
          "name": "io",
          "package": "libjenkins",
          "signature": "IO a -\u003e m a",
          "source": "src/Jenkins-Rest.html#io",
          "type": "function"
        },
        "index": {
          "description": "Lift an arbitrary IO action to the Jenkins monad io IO Jenkins",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "io",
          "normalized": "IO a-\u003eb a",
          "package": "libjenkins",
          "signature": "IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePOST\u003c/code\u003e query (with a payload)\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "post",
          "package": "libjenkins",
          "signature": "(forall f.  Method Complete f) -\u003e ByteString -\u003e Jenkins ()",
          "source": "src/Jenkins-Rest.html#post",
          "type": "function"
        },
        "index": {
          "description": "POST query with payload",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "post",
          "normalized": "(a b Method Complete c)-\u003eByteString-\u003eJenkins()",
          "package": "libjenkins",
          "signature": "(forall f. Method Complete f)-\u003eByteString-\u003eJenkins()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePOST\u003c/code\u003e job's \u003ccode\u003econfig.xml\u003c/code\u003e (or any other xml, really) in \u003ccode\u003exml-conduit\u003c/code\u003e format\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "postXML",
          "package": "libjenkins",
          "signature": "(forall f.  Method Complete f) -\u003e Document -\u003e Jenkins ()",
          "source": "src/Jenkins-Rest.html#postXML",
          "type": "function"
        },
        "index": {
          "description": "POST job config.xml or any other xml really in xml-conduit format",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "postXML",
          "normalized": "(a b Method Complete c)-\u003eDocument-\u003eJenkins()",
          "package": "libjenkins",
          "partial": "XML",
          "signature": "(forall f. Method Complete f)-\u003eDocument-\u003eJenkins()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:postXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePOST\u003c/code\u003e query (without payload)\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "post_",
          "package": "libjenkins",
          "signature": "(forall f.  Method Complete f) -\u003e Jenkins ()",
          "source": "src/Jenkins-Rest.html#post_",
          "type": "function"
        },
        "index": {
          "description": "POST query without payload",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "post_",
          "normalized": "(a b Method Complete c)-\u003eJenkins()",
          "package": "libjenkins",
          "signature": "(forall f. Method Complete f)-\u003eJenkins()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:post_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReload jenkins configuration from disk\n\u003c/p\u003e\u003cp\u003eCalls \u003ccode\u003e/reload\u003c/code\u003e and disconnects\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "reload",
          "package": "libjenkins",
          "signature": "Jenkins a",
          "source": "src/Jenkins-Rest.html#reload",
          "type": "function"
        },
        "index": {
          "description": "Reload jenkins configuration from disk Calls reload and disconnects",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "reload",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:reload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestart jenkins safely\n\u003c/p\u003e\u003cp\u003eCalls \u003ccode\u003e/safeRestart\u003c/code\u003e and disconnects\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e/safeRestart\u003c/code\u003e allows all running jobs to complete\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "restart",
          "package": "libjenkins",
          "signature": "Jenkins a",
          "source": "src/Jenkins-Rest.html#restart",
          "type": "function"
        },
        "index": {
          "description": "Restart jenkins safely Calls safeRestart and disconnects safeRestart allows all running jobs to complete",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "restart",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:restart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake local changes to the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Jenkins.Rest",
          "name": "with",
          "package": "libjenkins",
          "signature": "(Request -\u003e Request) -\u003e Jenkins a -\u003e Jenkins a",
          "source": "src/Jenkins-Rest.html#with",
          "type": "function"
        },
        "index": {
          "description": "Make local changes to the Request",
          "hierarchy": "Jenkins Rest",
          "module": "Jenkins.Rest",
          "name": "with",
          "normalized": "(Request-\u003eRequest)-\u003eJenkins a-\u003eJenkins a",
          "package": "libjenkins",
          "signature": "(Request-\u003eRequest)-\u003eJenkins a-\u003eJenkins a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Jenkins-Rest.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOptics for \u003ccode\u003ehttp-conduit\u003c/code\u003e types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "Lens",
          "package": "libjenkins",
          "source": "src/Network-HTTP-Conduit-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "Optics for http-conduit types",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "Lens",
          "package": "libjenkins",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehttp-conduit\u003c/code\u003e exceptions\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "AsHttpException",
          "package": "libjenkins",
          "source": "src/Network-HTTP-Conduit-Lens.html#AsHttpException",
          "type": "class"
        },
        "index": {
          "description": "http-conduit exceptions",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "AsHttpException",
          "package": "libjenkins",
          "partial": "As Http Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#t:AsHttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eExpectedBlankAfter100Continue\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ExpectedBlankAfter100Continue",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_ExpectedBlankAfter100Continue",
          "type": "function"
        },
        "index": {
          "description": "ExpectedBlankAfter100Continue exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ExpectedBlankAfter100Continue",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Expected Blank After Continue",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_ExpectedBlankAfter100Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFailedConnectionException\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_FailedConnectionException",
          "package": "libjenkins",
          "signature": "Prism' t (String, Int)",
          "source": "src/Network-HTTP-Conduit-Lens.html#_FailedConnectionException",
          "type": "function"
        },
        "index": {
          "description": "FailedConnectionException exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_FailedConnectionException",
          "normalized": "Prism' a(String,Int)",
          "package": "libjenkins",
          "partial": "Failed Connection Exception",
          "signature": "Prism' t(String,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_FailedConnectionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHandshakeFailed\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_HandshakeFailed",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_HandshakeFailed",
          "type": "function"
        },
        "index": {
          "description": "HandshakeFailed exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_HandshakeFailed",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Handshake Failed",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_HandshakeFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehttp-conduit\u003c/code\u003e exceptions overloading\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_HttpException",
          "package": "libjenkins",
          "signature": "Prism' t HttpException",
          "source": "src/Network-HTTP-Conduit-Lens.html#_HttpException",
          "type": "method"
        },
        "index": {
          "description": "http-conduit exceptions overloading",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_HttpException",
          "package": "libjenkins",
          "partial": "Http Exception",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_HttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHttpParserException\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_HttpParserException",
          "package": "libjenkins",
          "signature": "Prism' t String",
          "source": "src/Network-HTTP-Conduit-Lens.html#_HttpParserException",
          "type": "function"
        },
        "index": {
          "description": "HttpParserException exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_HttpParserException",
          "package": "libjenkins",
          "partial": "Http Parser Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_HttpParserException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIncompleteHeaders\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_IncompleteHeaders",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_IncompleteHeaders",
          "type": "function"
        },
        "index": {
          "description": "IncompleteHeaders exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_IncompleteHeaders",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Incomplete Headers",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_IncompleteHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInternalIOException\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InternalIOException",
          "package": "libjenkins",
          "signature": "Prism' t IOException",
          "source": "src/Network-HTTP-Conduit-Lens.html#_InternalIOException",
          "type": "function"
        },
        "index": {
          "description": "InternalIOException exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InternalIOException",
          "package": "libjenkins",
          "partial": "Internal IOException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_InternalIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInvalidChunkHeaders\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidChunkHeaders",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_InvalidChunkHeaders",
          "type": "function"
        },
        "index": {
          "description": "InvalidChunkHeaders exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidChunkHeaders",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Invalid Chunk Headers",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_InvalidChunkHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInvalidHeader\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidHeader",
          "package": "libjenkins",
          "signature": "Prism' t ByteString",
          "source": "src/Network-HTTP-Conduit-Lens.html#_InvalidHeader",
          "type": "function"
        },
        "index": {
          "description": "InvalidHeader exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidHeader",
          "package": "libjenkins",
          "partial": "Invalid Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_InvalidHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInvalidStatusLine\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidStatusLine",
          "package": "libjenkins",
          "signature": "Prism' t ByteString",
          "source": "src/Network-HTTP-Conduit-Lens.html#_InvalidStatusLine",
          "type": "function"
        },
        "index": {
          "description": "InvalidStatusLine exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidStatusLine",
          "package": "libjenkins",
          "partial": "Invalid Status Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_InvalidStatusLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInvalidUrlException\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidUrlException",
          "package": "libjenkins",
          "signature": "Prism' t (String, String)",
          "source": "src/Network-HTTP-Conduit-Lens.html#_InvalidUrlException",
          "type": "function"
        },
        "index": {
          "description": "InvalidUrlException exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_InvalidUrlException",
          "normalized": "Prism' a(String,String)",
          "package": "libjenkins",
          "partial": "Invalid Url Exception",
          "signature": "Prism' t(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_InvalidUrlException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNoResponseDataReceived\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_NoResponseDataReceived",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_NoResponseDataReceived",
          "type": "function"
        },
        "index": {
          "description": "NoResponseDataReceived exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_NoResponseDataReceived",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "No Response Data Received",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_NoResponseDataReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOverlongHeaders\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_OverlongHeaders",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_OverlongHeaders",
          "type": "function"
        },
        "index": {
          "description": "OverlongHeaders exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_OverlongHeaders",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Overlong Headers",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_OverlongHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eProxyConnectException\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ProxyConnectException",
          "package": "libjenkins",
          "signature": "Prism' t (ByteString, Int, Either ByteString HttpException)",
          "source": "src/Network-HTTP-Conduit-Lens.html#_ProxyConnectException",
          "type": "function"
        },
        "index": {
          "description": "ProxyConnectException exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ProxyConnectException",
          "normalized": "Prism' a(ByteString,Int,Either ByteString HttpException)",
          "package": "libjenkins",
          "partial": "Proxy Connect Exception",
          "signature": "Prism' t(ByteString,Int,Either ByteString HttpException)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_ProxyConnectException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResponseBodyTooShort\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ResponseBodyTooShort",
          "package": "libjenkins",
          "signature": "Prism' t (Word64, Word64)",
          "source": "src/Network-HTTP-Conduit-Lens.html#_ResponseBodyTooShort",
          "type": "function"
        },
        "index": {
          "description": "ResponseBodyTooShort exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ResponseBodyTooShort",
          "normalized": "Prism' a(Word,Word)",
          "package": "libjenkins",
          "partial": "Response Body Too Short",
          "signature": "Prism' t(Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_ResponseBodyTooShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResponseTimeout\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ResponseTimeout",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_ResponseTimeout",
          "type": "function"
        },
        "index": {
          "description": "ResponseTimeout exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_ResponseTimeout",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Response Timeout",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_ResponseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStatusCodeException\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_StatusCodeException",
          "package": "libjenkins",
          "signature": "Prism' t (Status, ResponseHeaders, CookieJar)",
          "source": "src/Network-HTTP-Conduit-Lens.html#_StatusCodeException",
          "type": "function"
        },
        "index": {
          "description": "StatusCodeException exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_StatusCodeException",
          "normalized": "Prism' a(Status,ResponseHeaders,CookieJar)",
          "package": "libjenkins",
          "partial": "Status Code Exception",
          "signature": "Prism' t(Status,ResponseHeaders,CookieJar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_StatusCodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTlsException\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TlsException",
          "package": "libjenkins",
          "signature": "Prism' t SomeException",
          "source": "src/Network-HTTP-Conduit-Lens.html#_TlsException",
          "type": "function"
        },
        "index": {
          "description": "TlsException exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TlsException",
          "package": "libjenkins",
          "partial": "Tls Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_TlsException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTlsNotSupported\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TlsNotSupported",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_TlsNotSupported",
          "type": "function"
        },
        "index": {
          "description": "TlsNotSupported exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TlsNotSupported",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Tls Not Supported",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_TlsNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTooManyRedirects\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TooManyRedirects",
          "package": "libjenkins",
          "signature": "Prism' t [Response ByteString]",
          "source": "src/Network-HTTP-Conduit-Lens.html#_TooManyRedirects",
          "type": "function"
        },
        "index": {
          "description": "TooManyRedirects exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TooManyRedirects",
          "normalized": "Prism' a[Response ByteString]",
          "package": "libjenkins",
          "partial": "Too Many Redirects",
          "signature": "Prism' t[Response ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_TooManyRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTooManyRetries\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TooManyRetries",
          "package": "libjenkins",
          "signature": "Prism' t ()",
          "source": "src/Network-HTTP-Conduit-Lens.html#_TooManyRetries",
          "type": "function"
        },
        "index": {
          "description": "TooManyRetries exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_TooManyRetries",
          "normalized": "Prism' a()",
          "package": "libjenkins",
          "partial": "Too Many Retries",
          "signature": "Prism' t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_TooManyRetries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUnparseableRedirect\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_UnparseableRedirect",
          "package": "libjenkins",
          "signature": "Prism' t (Response ByteString)",
          "source": "src/Network-HTTP-Conduit-Lens.html#_UnparseableRedirect",
          "type": "function"
        },
        "index": {
          "description": "UnparseableRedirect exception",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "_UnparseableRedirect",
          "package": "libjenkins",
          "partial": "Unparseable Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:_UnparseableRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echeckStatus\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "checkStatus",
          "package": "libjenkins",
          "signature": "Lens' Request (Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException)",
          "source": "src/Network-HTTP-Conduit-Lens.html#checkStatus",
          "type": "function"
        },
        "index": {
          "description": "checkStatus lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "checkStatus",
          "normalized": "Lens' Request(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)",
          "package": "libjenkins",
          "partial": "Status",
          "signature": "Lens' Request(Status-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:checkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecookieJar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "cookieJar",
          "package": "libjenkins",
          "signature": "Lens' Request (Maybe CookieJar)",
          "source": "src/Network-HTTP-Conduit-Lens.html#cookieJar",
          "type": "function"
        },
        "index": {
          "description": "cookieJar",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "cookieJar",
          "package": "libjenkins",
          "partial": "Jar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:cookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "decompress",
          "package": "libjenkins",
          "signature": "Lens' Request (ByteString -\u003e Bool)",
          "source": "src/Network-HTTP-Conduit-Lens.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "decompress",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "decompress",
          "normalized": "Lens' Request(ByteString-\u003eBool)",
          "package": "libjenkins",
          "signature": "Lens' Request(ByteString-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetConnectionWrapper\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "getConnectionWrapper",
          "package": "libjenkins",
          "signature": "Lens' Request (Maybe Int -\u003e HttpException -\u003e IO (ConnRelease, Connection, ManagedConn) -\u003e IO (Maybe Int, (ConnRelease, Connection, ManagedConn)))",
          "source": "src/Network-HTTP-Conduit-Lens.html#getConnectionWrapper",
          "type": "function"
        },
        "index": {
          "description": "getConnectionWrapper",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "getConnectionWrapper",
          "normalized": "Lens' Request(Maybe Int-\u003eHttpException-\u003eIO(ConnRelease,Connection,ManagedConn)-\u003eIO(Maybe Int,(ConnRelease,Connection,ManagedConn)))",
          "package": "libjenkins",
          "partial": "Connection Wrapper",
          "signature": "Lens' Request(Maybe Int-\u003eHttpException-\u003eIO(ConnRelease,Connection,ManagedConn)-\u003eIO(Maybe Int,(ConnRelease,Connection,ManagedConn)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:getConnectionWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "host",
          "package": "libjenkins",
          "signature": "Lens' Request ByteString",
          "source": "src/Network-HTTP-Conduit-Lens.html#host",
          "type": "function"
        },
        "index": {
          "description": "host lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "host",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehostAddress\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "hostAddress",
          "package": "libjenkins",
          "signature": "Lens' Request (Maybe HostAddress)",
          "source": "src/Network-HTTP-Conduit-Lens.html#hostAddress",
          "type": "function"
        },
        "index": {
          "description": "hostAddress",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "hostAddress",
          "package": "libjenkins",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:hostAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "method",
          "package": "libjenkins",
          "signature": "Lens' Request Method",
          "source": "src/Network-HTTP-Conduit-Lens.html#method",
          "type": "function"
        },
        "index": {
          "description": "method lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "method",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "path",
          "package": "libjenkins",
          "signature": "Lens' Request ByteString",
          "source": "src/Network-HTTP-Conduit-Lens.html#path",
          "type": "function"
        },
        "index": {
          "description": "path lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "path",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eport\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "port",
          "package": "libjenkins",
          "signature": "Lens' Request Int",
          "source": "src/Network-HTTP-Conduit-Lens.html#port",
          "type": "function"
        },
        "index": {
          "description": "port lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "port",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eproxy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "proxy",
          "package": "libjenkins",
          "signature": "Lens' Request (Maybe Proxy)",
          "source": "src/Network-HTTP-Conduit-Lens.html#proxy",
          "type": "function"
        },
        "index": {
          "description": "proxy",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "proxy",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "queryString",
          "package": "libjenkins",
          "signature": "Lens' Request ByteString",
          "source": "src/Network-HTTP-Conduit-Lens.html#queryString",
          "type": "function"
        },
        "index": {
          "description": "queryString lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "queryString",
          "package": "libjenkins",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erawBody\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "rawBody",
          "package": "libjenkins",
          "signature": "Lens' Request Bool",
          "source": "src/Network-HTTP-Conduit-Lens.html#rawBody",
          "type": "function"
        },
        "index": {
          "description": "rawBody",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "rawBody",
          "package": "libjenkins",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:rawBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eredirectCount\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "redirectCount",
          "package": "libjenkins",
          "signature": "Lens' Request Int",
          "source": "src/Network-HTTP-Conduit-Lens.html#redirectCount",
          "type": "function"
        },
        "index": {
          "description": "redirectCount lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "redirectCount",
          "package": "libjenkins",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:redirectCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erequestBody\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "requestBody",
          "package": "libjenkins",
          "signature": "Lens' Request RequestBody",
          "source": "src/Network-HTTP-Conduit-Lens.html#requestBody",
          "type": "function"
        },
        "index": {
          "description": "requestBody lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "requestBody",
          "package": "libjenkins",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:requestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "requestHeaders",
          "package": "libjenkins",
          "signature": "Lens' Request RequestHeaders",
          "source": "src/Network-HTTP-Conduit-Lens.html#requestHeaders",
          "type": "function"
        },
        "index": {
          "description": "requestHeaders lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "requestHeaders",
          "package": "libjenkins",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:requestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eresponseTimeout\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "responseTimeout",
          "package": "libjenkins",
          "signature": "Lens' Request (Maybe Int)",
          "source": "src/Network-HTTP-Conduit-Lens.html#responseTimeout",
          "type": "function"
        },
        "index": {
          "description": "responseTimeout lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "responseTimeout",
          "package": "libjenkins",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:responseTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esecure\u003c/a\u003e\u003c/code\u003e lens\n\u003c/p\u003e",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "secure",
          "package": "libjenkins",
          "signature": "Lens' Request Bool",
          "source": "src/Network-HTTP-Conduit-Lens.html#secure",
          "type": "function"
        },
        "index": {
          "description": "secure lens",
          "hierarchy": "Network HTTP Conduit Lens",
          "module": "Network.HTTP.Conduit.Lens",
          "name": "secure",
          "package": "libjenkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libjenkins/docs/Network-HTTP-Conduit-Lens.html#v:secure"
      }
    }
  ]
]