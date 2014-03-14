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
        "word": "trajectory"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Trajectory API, or a subset of it at least. This mirrors the\n underlying implementation, which ties stories to iterations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Trajectory.API",
          "name": "API",
          "package": "trajectory",
          "source": "src/Trajectory-API.html",
          "type": "module"
        },
        "index": {
          "description": "The Trajectory API or subset of it at least This mirrors the underlying implementation which ties stories to iterations",
          "hierarchy": "Trajectory API",
          "module": "Trajectory.API",
          "name": "API",
          "package": "trajectory",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the incomplete stories and iterations for a given user key,\n account name, and project name. Since stories and iterations are tied\n together in the underlying API, this produces them as a pair.\n\u003c/p\u003e\u003cp\u003eIt produces an IO of either an error or the stories/iterations pair. The\n error can come from the HTTP, or from non-JSON input, or from a change to\n the JSON.\n\u003c/p\u003e\u003cpre\u003e do\n   possibleStories \u003c- getStories \"abcdefg\" \"thoughtbot\" \"opensource\"\n   case possibleStories of\n     (Left error) -\u003e putStrLn $ \"got the error: \" ++ show error\n     (Right (stories,iterations)) -\u003e\n       putStrLn $ intercalate \"\\n\" $\n         (map formatStory stories) ++ (map formatIteration iterations)\n\u003c/pre\u003e",
          "module": "Trajectory.API",
          "name": "getStories",
          "package": "trajectory",
          "signature": "String -\u003e String -\u003e String -\u003e IO (Either Error ([Story], [Iteration]))",
          "source": "src/Trajectory-API.html#getStories",
          "type": "function"
        },
        "index": {
          "description": "Get all the incomplete stories and iterations for given user key account name and project name Since stories and iterations are tied together in the underlying API this produces them as pair It produces an IO of either an error or the stories iterations pair The error can come from the HTTP or from non-JSON input or from change to the JSON do possibleStories getStories abcdefg thoughtbot opensource case possibleStories of Left error putStrLn got the error show error Right stories iterations putStrLn intercalate map formatStory stories map formatIteration iterations",
          "hierarchy": "Trajectory API",
          "module": "Trajectory.API",
          "name": "getStories",
          "normalized": "String-\u003eString-\u003eString-\u003eIO(Either Error([Story],[Iteration]))",
          "package": "trajectory",
          "partial": "Stories",
          "signature": "String-\u003eString-\u003eString-\u003eIO(Either Error([Story],[Iteration]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-API.html#v:getStories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "Types",
          "package": "trajectory",
          "source": "src/Trajectory-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "Types",
          "package": "trajectory",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors have been tagged according to their source, so you can more easily\n dispatch and handle them.\n\u003c/p\u003e",
          "module": "Trajectory.Types",
          "name": "Error",
          "package": "trajectory",
          "source": "src/Trajectory-Types.html#Error",
          "type": "data"
        },
        "index": {
          "description": "Errors have been tagged according to their source so you can more easily dispatch and handle them",
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "Error",
          "package": "trajectory",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteration in Trajectory. The iterationStartsOn is the most\n user-identifying string, though it changes with time. The \u003ccode\u003estoryIterationId\u003c/code\u003e\n is the same as the \u003ccode\u003eiterationId\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Trajectory.Types",
          "name": "Iteration",
          "package": "trajectory",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "data"
        },
        "index": {
          "description": "An iteration in Trajectory The iterationStartsOn is the most user-identifying string though it changes with time The storyIterationId is the same as the iterationId",
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "Iteration",
          "package": "trajectory",
          "partial": "Iteration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#t:Iteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Trajectory story.\n\u003c/p\u003e",
          "module": "Trajectory.Types",
          "name": "Story",
          "package": "trajectory",
          "source": "src/Trajectory-Types.html#Story",
          "type": "data"
        },
        "index": {
          "description": "Trajectory story",
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "Story",
          "package": "trajectory",
          "partial": "Story",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#t:Story"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HTTP error occurred. The actual caught error is included, if available.\n\u003c/p\u003e",
          "module": "Trajectory.Types",
          "name": "HTTPConnectionError",
          "package": "trajectory",
          "signature": "HTTPConnectionError IOException",
          "source": "src/Trajectory-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "HTTP error occurred The actual caught error is included if available",
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "HTTPConnectionError",
          "package": "trajectory",
          "partial": "HTTPConnection Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:HTTPConnectionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "Iteration",
          "package": "trajectory",
          "signature": "Iteration",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "Iteration",
          "package": "trajectory",
          "partial": "Iteration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:Iteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON is malformed or unexpected.\n\u003c/p\u003e",
          "module": "Trajectory.Types",
          "name": "JsonError",
          "package": "trajectory",
          "signature": "JsonError String",
          "source": "src/Trajectory-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "The JSON is malformed or unexpected",
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "JsonError",
          "package": "trajectory",
          "partial": "Json Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:JsonError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error in the parser itself.\n\u003c/p\u003e",
          "module": "Trajectory.Types",
          "name": "ParseError",
          "package": "trajectory",
          "signature": "ParseError String",
          "source": "src/Trajectory-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "An error in the parser itself",
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "ParseError",
          "package": "trajectory",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "Story",
          "package": "trajectory",
          "signature": "Story",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "Story",
          "package": "trajectory",
          "partial": "Story",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:Story"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncorrect input.\n\u003c/p\u003e",
          "module": "Trajectory.Types",
          "name": "UserError",
          "package": "trajectory",
          "signature": "UserError String",
          "source": "src/Trajectory-Types.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Incorrect input",
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "UserError",
          "package": "trajectory",
          "partial": "User Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:UserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationAcceptedPoints",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationAcceptedPoints",
          "package": "trajectory",
          "partial": "Accepted Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationAcceptedPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationAcceptedStoriesCount",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationAcceptedStoriesCount",
          "package": "trajectory",
          "partial": "Accepted Stories Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationAcceptedStoriesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationCommentsCount",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationCommentsCount",
          "package": "trajectory",
          "partial": "Comments Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationCommentsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationCreatedAt",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationCreatedAt",
          "package": "trajectory",
          "partial": "Created At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationCreatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationDeliveredStoriesCount",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationDeliveredStoriesCount",
          "package": "trajectory",
          "partial": "Delivered Stories Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationDeliveredStoriesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationEstimatedPoints",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationEstimatedPoints",
          "package": "trajectory",
          "partial": "Estimated Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationEstimatedPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationEstimatedVelocity",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationEstimatedVelocity",
          "package": "trajectory",
          "partial": "Estimated Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationEstimatedVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationId",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationId",
          "package": "trajectory",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationIsComplete",
          "package": "trajectory",
          "signature": "Bool",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationIsComplete",
          "package": "trajectory",
          "partial": "Is Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationIsComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationIsCurrent",
          "package": "trajectory",
          "signature": "Bool",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationIsCurrent",
          "package": "trajectory",
          "partial": "Is Current",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationIsCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationPercentComplete",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationPercentComplete",
          "package": "trajectory",
          "partial": "Percent Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationPercentComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationStartedStoriesCount",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationStartedStoriesCount",
          "package": "trajectory",
          "partial": "Started Stories Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationStartedStoriesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationStartsOn",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationStartsOn",
          "package": "trajectory",
          "partial": "Starts On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationStartsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationStoriesCount",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationStoriesCount",
          "package": "trajectory",
          "partial": "Stories Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationStoriesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationTeamStrength",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationTeamStrength",
          "package": "trajectory",
          "partial": "Team Strength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationTeamStrength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationUnstartedStoriesCount",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationUnstartedStoriesCount",
          "package": "trajectory",
          "partial": "Unstarted Stories Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationUnstartedStoriesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "iterationUpdatedAt",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Iteration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "iterationUpdatedAt",
          "package": "trajectory",
          "partial": "Updated At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:iterationUpdatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyArchived",
          "package": "trajectory",
          "signature": "Bool",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyArchived",
          "package": "trajectory",
          "partial": "Archived",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyArchived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyAssigneeId",
          "package": "trajectory",
          "signature": "Maybe Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyAssigneeId",
          "package": "trajectory",
          "partial": "Assignee Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyAssigneeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyAssigneeName",
          "package": "trajectory",
          "signature": "Maybe String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyAssigneeName",
          "package": "trajectory",
          "partial": "Assignee Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyAssigneeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyBranch",
          "package": "trajectory",
          "signature": "Maybe String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyBranch",
          "package": "trajectory",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyCommentsCount",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyCommentsCount",
          "package": "trajectory",
          "partial": "Comments Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyCommentsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyCreatedAt",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyCreatedAt",
          "package": "trajectory",
          "partial": "Created At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyCreatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyDeleted",
          "package": "trajectory",
          "signature": "Bool",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyDeleted",
          "package": "trajectory",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyDesignNeeded",
          "package": "trajectory",
          "signature": "Bool",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyDesignNeeded",
          "package": "trajectory",
          "partial": "Design Needed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyDesignNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyDevelopmentNeeded",
          "package": "trajectory",
          "signature": "Bool",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyDevelopmentNeeded",
          "package": "trajectory",
          "partial": "Development Needed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyDevelopmentNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyId",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyId",
          "package": "trajectory",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyIdeaId",
          "package": "trajectory",
          "signature": "Maybe Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyIdeaId",
          "package": "trajectory",
          "partial": "Idea Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyIdeaId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyIdeaSubject",
          "package": "trajectory",
          "signature": "Maybe String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyIdeaSubject",
          "package": "trajectory",
          "partial": "Idea Subject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyIdeaSubject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyIterationId",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyIterationId",
          "package": "trajectory",
          "partial": "Iteration Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyIterationId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyPoints",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyPoints",
          "package": "trajectory",
          "partial": "Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyPosition",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyPosition",
          "package": "trajectory",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyState",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyState",
          "package": "trajectory",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyStateEvents",
          "package": "trajectory",
          "signature": "[String]",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyStateEvents",
          "normalized": "[String]",
          "package": "trajectory",
          "partial": "State Events",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyStateEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyTaskType",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyTaskType",
          "package": "trajectory",
          "partial": "Task Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyTaskType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyTitle",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyTitle",
          "package": "trajectory",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyUpdatedAt",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyUpdatedAt",
          "package": "trajectory",
          "partial": "Updated At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyUpdatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyUserId",
          "package": "trajectory",
          "signature": "Int",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyUserId",
          "package": "trajectory",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Trajectory.Types",
          "name": "storyUserName",
          "package": "trajectory",
          "signature": "String",
          "source": "src/Trajectory-Types.html#Story",
          "type": "function"
        },
        "index": {
          "hierarchy": "Trajectory Types",
          "module": "Trajectory.Types",
          "name": "storyUserName",
          "package": "trajectory",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trajectory/docs/Trajectory-Types.html#v:storyUserName"
      }
    }
  ]
]