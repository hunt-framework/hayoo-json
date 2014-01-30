[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-API.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Trajectory API, or a subset of it at least. This mirrors the\n underlying implementation, which ties stories to iterations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Trajectory.API",
        "fct-package": "trajectory",
        "fct-signature": "module",
        "fct-source": "src/Trajectory-API.html",
        "fct-type": "module",
        "title": "API"
      },
      "index": {
        "description": "The Trajectory API or subset of it at least This mirrors the underlying implementation which ties stories to iterations",
        "hierarchy": "Trajectory API",
        "module": "Trajectory.API",
        "name": "API",
        "normalized": "",
        "package": "trajectory",
        "partial": "API",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-API.html#v:getStories",
      "description": {
        "fct-descr": "\u003cp\u003eGet all the incomplete stories and iterations for a given user key,\n account name, and project name. Since stories and iterations are tied\n together in the underlying API, this produces them as a pair.\n\u003c/p\u003e\u003cp\u003eIt produces an IO of either an error or the stories/iterations pair. The\n error can come from the HTTP, or from non-JSON input, or from a change to\n the JSON.\n\u003c/p\u003e\u003cpre\u003e do\n   possibleStories \u003c- getStories \"abcdefg\" \"thoughtbot\" \"opensource\"\n   case possibleStories of\n     (Left error) -\u003e putStrLn $ \"got the error: \" ++ show error\n     (Right (stories,iterations)) -\u003e\n       putStrLn $ intercalate \"\\n\" $\n         (map formatStory stories) ++ (map formatIteration iterations)\n\u003c/pre\u003e",
        "fct-module": "Trajectory.API",
        "fct-package": "trajectory",
        "fct-signature": "String -\u003e String -\u003e String -\u003e IO (Either Error ([Story], [Iteration]))",
        "fct-source": "src/Trajectory-API.html#getStories",
        "fct-type": "function",
        "title": "getStories"
      },
      "index": {
        "description": "Get all the incomplete stories and iterations for given user key account name and project name Since stories and iterations are tied together in the underlying API this produces them as pair It produces an IO of either an error or the stories iterations pair The error can come from the HTTP or from non-JSON input or from change to the JSON do possibleStories getStories abcdefg thoughtbot opensource case possibleStories of Left error putStrLn got the error show error Right stories iterations putStrLn intercalate map formatStory stories map formatIteration iterations",
        "hierarchy": "Trajectory API",
        "module": "Trajectory.API",
        "name": "getStories",
        "normalized": "String-\u003eString-\u003eString-\u003eIO(Either Error([Story],[Iteration]))",
        "package": "trajectory",
        "partial": "Stories",
        "signature": "String-\u003eString-\u003eString-\u003eIO(Either Error([Story],[Iteration]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#",
      "description": {
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "module",
        "fct-source": "src/Trajectory-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "Types",
        "normalized": "",
        "package": "trajectory",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eErrors have been tagged according to their source, so you can more easily\n dispatch and handle them.\n\u003c/p\u003e",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "data",
        "fct-source": "src/Trajectory-Types.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "Errors have been tagged according to their source so you can more easily dispatch and handle them",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "Error",
        "normalized": "",
        "package": "trajectory",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#t:Iteration",
      "description": {
        "fct-descr": "\u003cp\u003eAn iteration in Trajectory. The iterationStartsOn is the most\n user-identifying string, though it changes with time. The \u003ccode\u003estoryIterationId\u003c/code\u003e\n is the same as the \u003ccode\u003eiterationId\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "data",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "data",
        "title": "Iteration"
      },
      "index": {
        "description": "An iteration in Trajectory The iterationStartsOn is the most user-identifying string though it changes with time The storyIterationId is the same as the iterationId",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "Iteration",
        "normalized": "",
        "package": "trajectory",
        "partial": "Iteration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#t:Story",
      "description": {
        "fct-descr": "\u003cp\u003eA Trajectory story.\n\u003c/p\u003e",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "data",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "data",
        "title": "Story"
      },
      "index": {
        "description": "Trajectory story",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "Story",
        "normalized": "",
        "package": "trajectory",
        "partial": "Story",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:HTTPConnectionError",
      "description": {
        "fct-descr": "\u003cp\u003eA HTTP error occurred. The actual caught error is included, if available.\n\u003c/p\u003e",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "HTTPConnectionError IOException",
        "fct-source": "src/Trajectory-Types.html#Error",
        "fct-type": "function",
        "title": "HTTPConnectionError"
      },
      "index": {
        "description": "HTTP error occurred The actual caught error is included if available",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "HTTPConnectionError",
        "normalized": "",
        "package": "trajectory",
        "partial": "HTTPConnection Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:Iteration",
      "description": {
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Iteration",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "Iteration"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "Iteration",
        "normalized": "",
        "package": "trajectory",
        "partial": "Iteration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:JsonError",
      "description": {
        "fct-descr": "\u003cp\u003eThe JSON is malformed or unexpected.\n\u003c/p\u003e",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "JsonError String",
        "fct-source": "src/Trajectory-Types.html#Error",
        "fct-type": "function",
        "title": "JsonError"
      },
      "index": {
        "description": "The JSON is malformed or unexpected",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "JsonError",
        "normalized": "",
        "package": "trajectory",
        "partial": "Json Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:ParseError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error in the parser itself.\n\u003c/p\u003e",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "ParseError String",
        "fct-source": "src/Trajectory-Types.html#Error",
        "fct-type": "function",
        "title": "ParseError"
      },
      "index": {
        "description": "An error in the parser itself",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "ParseError",
        "normalized": "",
        "package": "trajectory",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:Story",
      "description": {
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Story",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "Story"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "Story",
        "normalized": "",
        "package": "trajectory",
        "partial": "Story",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:UserError",
      "description": {
        "fct-descr": "\u003cp\u003eIncorrect input.\n\u003c/p\u003e",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "UserError String",
        "fct-source": "src/Trajectory-Types.html#Error",
        "fct-type": "function",
        "title": "UserError"
      },
      "index": {
        "description": "Incorrect input",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "UserError",
        "normalized": "",
        "package": "trajectory",
        "partial": "User Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationAcceptedPoints",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationAcceptedPoints"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationAcceptedPoints",
        "normalized": "",
        "package": "trajectory",
        "partial": "Accepted Points",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationAcceptedStoriesCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationAcceptedStoriesCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationAcceptedStoriesCount",
        "normalized": "",
        "package": "trajectory",
        "partial": "Accepted Stories Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationCommentsCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationCommentsCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationCommentsCount",
        "normalized": "",
        "package": "trajectory",
        "partial": "Comments Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationCreatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationCreatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationCreatedAt",
        "normalized": "",
        "package": "trajectory",
        "partial": "Created At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationDeliveredStoriesCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationDeliveredStoriesCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationDeliveredStoriesCount",
        "normalized": "",
        "package": "trajectory",
        "partial": "Delivered Stories Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationEstimatedPoints",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationEstimatedPoints"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationEstimatedPoints",
        "normalized": "",
        "package": "trajectory",
        "partial": "Estimated Points",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationEstimatedVelocity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationEstimatedVelocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationEstimatedVelocity",
        "normalized": "",
        "package": "trajectory",
        "partial": "Estimated Velocity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationId"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationId",
        "normalized": "",
        "package": "trajectory",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationIsComplete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Bool",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationIsComplete"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationIsComplete",
        "normalized": "",
        "package": "trajectory",
        "partial": "Is Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationIsCurrent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Bool",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationIsCurrent"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationIsCurrent",
        "normalized": "",
        "package": "trajectory",
        "partial": "Is Current",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationPercentComplete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationPercentComplete"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationPercentComplete",
        "normalized": "",
        "package": "trajectory",
        "partial": "Percent Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationStartedStoriesCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationStartedStoriesCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationStartedStoriesCount",
        "normalized": "",
        "package": "trajectory",
        "partial": "Started Stories Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationStartsOn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationStartsOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationStartsOn",
        "normalized": "",
        "package": "trajectory",
        "partial": "Starts On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationStoriesCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationStoriesCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationStoriesCount",
        "normalized": "",
        "package": "trajectory",
        "partial": "Stories Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationTeamStrength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationTeamStrength"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationTeamStrength",
        "normalized": "",
        "package": "trajectory",
        "partial": "Team Strength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationUnstartedStoriesCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationUnstartedStoriesCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationUnstartedStoriesCount",
        "normalized": "",
        "package": "trajectory",
        "partial": "Unstarted Stories Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationUpdatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Iteration",
        "fct-type": "function",
        "title": "iterationUpdatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "iterationUpdatedAt",
        "normalized": "",
        "package": "trajectory",
        "partial": "Updated At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyArchived",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Bool",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyArchived"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyArchived",
        "normalized": "",
        "package": "trajectory",
        "partial": "Archived",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyAssigneeId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyAssigneeId"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyAssigneeId",
        "normalized": "",
        "package": "trajectory",
        "partial": "Assignee Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyAssigneeName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Maybe String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyAssigneeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyAssigneeName",
        "normalized": "",
        "package": "trajectory",
        "partial": "Assignee Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyBranch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Maybe String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyBranch",
        "normalized": "",
        "package": "trajectory",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyCommentsCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyCommentsCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyCommentsCount",
        "normalized": "",
        "package": "trajectory",
        "partial": "Comments Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyCreatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyCreatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyCreatedAt",
        "normalized": "",
        "package": "trajectory",
        "partial": "Created At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyDeleted",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Bool",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyDeleted"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyDeleted",
        "normalized": "",
        "package": "trajectory",
        "partial": "Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyDesignNeeded",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Bool",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyDesignNeeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyDesignNeeded",
        "normalized": "",
        "package": "trajectory",
        "partial": "Design Needed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyDevelopmentNeeded",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Bool",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyDevelopmentNeeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyDevelopmentNeeded",
        "normalized": "",
        "package": "trajectory",
        "partial": "Development Needed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyId"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyId",
        "normalized": "",
        "package": "trajectory",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyIdeaId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyIdeaId"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyIdeaId",
        "normalized": "",
        "package": "trajectory",
        "partial": "Idea Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyIdeaSubject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Maybe String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyIdeaSubject"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyIdeaSubject",
        "normalized": "",
        "package": "trajectory",
        "partial": "Idea Subject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyIterationId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyIterationId"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyIterationId",
        "normalized": "",
        "package": "trajectory",
        "partial": "Iteration Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyPoints",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyPoints"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyPoints",
        "normalized": "",
        "package": "trajectory",
        "partial": "Points",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyPosition",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyPosition"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyPosition",
        "normalized": "",
        "package": "trajectory",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyState"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyState",
        "normalized": "",
        "package": "trajectory",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyStateEvents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "[String]",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyStateEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyStateEvents",
        "normalized": "[String]",
        "package": "trajectory",
        "partial": "State Events",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyTaskType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyTaskType"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyTaskType",
        "normalized": "",
        "package": "trajectory",
        "partial": "Task Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyTitle",
        "normalized": "",
        "package": "trajectory",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyUpdatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyUpdatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyUpdatedAt",
        "normalized": "",
        "package": "trajectory",
        "partial": "Updated At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyUserId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "Int",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyUserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyUserId",
        "normalized": "",
        "package": "trajectory",
        "partial": "User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyUserName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Trajectory.Types",
        "fct-package": "trajectory",
        "fct-signature": "String",
        "fct-source": "src/Trajectory-Types.html#Story",
        "fct-type": "function",
        "title": "storyUserName"
      },
      "index": {
        "description": "",
        "hierarchy": "Trajectory Types",
        "module": "Trajectory.Types",
        "name": "storyUserName",
        "normalized": "",
        "package": "trajectory",
        "partial": "User Name",
        "signature": ""
      }
    }
  }
]