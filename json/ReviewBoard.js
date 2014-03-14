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
        "word": "ReviewBoard"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Execute a ReviewBoard action using the provided URL, user\n and password.\n\u003cp\u003eThe following RBAction creates a new review request draft, sets some fields\nand uploads a diff file:\n\u003c/p\u003e\u003cpre\u003e    import ReviewBoard.Api\n    import qualified ReviewBoard.Response as R\n\u003c/pre\u003e\u003cpre\u003e    newRRAction :: RBAction ()\n    newRRAction = do\n        rsp \u003c- reviewRequestNew \"repository\" Nothing\n        case rsp of\n            RBok r -\u003e do\n                let id = R.id . R.review_request $ r\n                reviewRequestsSetField id TARGET_PEOPLE \"reviewers\"\n                reviewRequestsSetField id DESCRIPTION \"Request description\"\n                reviewRequestsDiffNew  id \"basedir\" \"diffFileName\"\n                reviewRequestSaveDraft id\n                liftIO $ print \"Done.\"\n            RBerr s -\u003e throwError s\n\u003c/pre\u003e\u003cp\u003eTo run this action, execute:\n\u003c/p\u003e\u003cpre\u003e   execRBAction \"url\" \"user\" \"password\" newRRAction\n\u003c/pre\u003e",
          "module": "ReviewBoard.Api",
          "name": "3AexecRBAction",
          "package": "ReviewBoard",
          "signature": "String -\u003e String -\u003e String -\u003e RBAction a -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#execRBAction",
          "type": "function"
        },
        "index": {
          "description": "Execute ReviewBoard action using the provided URL user and password The following RBAction creates new review request draft sets some fields and uploads diff file import ReviewBoard.Api import qualified ReviewBoard.Response as newRRAction RBAction newRRAction do rsp reviewRequestNew repository Nothing case rsp of RBok do let id R.id R.review request reviewRequestsSetField id TARGET PEOPLE reviewers reviewRequestsSetField id DESCRIPTION Request description reviewRequestsDiffNew id basedir diffFileName reviewRequestSaveDraft id liftIO print Done RBerr throwError To run this action execute execRBAction url user password newRRAction",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AexecRBAction",
          "normalized": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO a",
          "package": "ReviewBoard",
          "partial": "Aexec RBAction",
          "signature": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AexecRBAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Search for a group or list all group if Nothing\n",
          "module": "ReviewBoard.Api",
          "name": "3AgroupList",
          "package": "ReviewBoard",
          "signature": "Maybe String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#groupList",
          "type": "function"
        },
        "index": {
          "description": "Search for group or list all group if Nothing",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AgroupList",
          "normalized": "Maybe String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Agroup List",
          "signature": "Maybe String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AgroupList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Star group for group name\n",
          "module": "ReviewBoard.Api",
          "name": "3AgroupStar",
          "package": "ReviewBoard",
          "signature": "String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#groupStar",
          "type": "function"
        },
        "index": {
          "description": "Star group for group name",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AgroupStar",
          "normalized": "String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Agroup Star",
          "signature": "String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AgroupStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unstar group for group name\n",
          "module": "ReviewBoard.Api",
          "name": "3AgroupUnstar",
          "package": "ReviewBoard",
          "signature": "String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#groupUnstar",
          "type": "function"
        },
        "index": {
          "description": "Unstar group for group name",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AgroupUnstar",
          "normalized": "String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Agroup Unstar",
          "signature": "String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AgroupUnstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "List repositories\n",
          "module": "ReviewBoard.Api",
          "name": "3ArepositoryList",
          "package": "ReviewBoard",
          "signature": "RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#repositoryList",
          "type": "function"
        },
        "index": {
          "description": "List repositories",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3ArepositoryList",
          "package": "ReviewBoard",
          "partial": "Arepository List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3ArepositoryList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "List all reviews for review request \u003ctt\u003eid\u003c/tt\u003e\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewAll",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewAll",
          "type": "function"
        },
        "index": {
          "description": "List all reviews for review request id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewAll",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview All",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Delete review draft for review request \u003ctt\u003eid\u003c/tt\u003e\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewDeleteDraft",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewDeleteDraft",
          "type": "function"
        },
        "index": {
          "description": "Delete review draft for review request id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewDeleteDraft",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Delete Draft",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewDeleteDraft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Publish review request draft for id\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewPublishDraft",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewPublishDraft",
          "type": "function"
        },
        "index": {
          "description": "Publish review request draft for id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewPublishDraft",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Publish Draft",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewPublishDraft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get review request by \u003ctt\u003eid\u003c/tt\u003e.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequest",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequest",
          "type": "function"
        },
        "index": {
          "description": "Get review request by id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequest",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get review request by repository \u003ctt\u003eid\u003c/tt\u003e and changenum \u003ctt\u003eid\u003c/tt\u003e\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestByChangenum",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestByChangenum",
          "type": "function"
        },
        "index": {
          "description": "Get review request by repository id and changenum id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestByChangenum",
          "normalized": "Integer-\u003eInteger-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request By Changenum",
          "signature": "Integer-\u003eInteger-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestByChangenum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Delete review request with request \u003ctt\u003eid\u003c/tt\u003e.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestDelete",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestDelete",
          "type": "function"
        },
        "index": {
          "description": "Delete review request with request id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestDelete",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Delete",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add a new diff to a review request with \u003ctt\u003eid\u003c/tt\u003e, file path and the basedir parameter.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestDiffNew",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e String -\u003e FilePath -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestDiffNew",
          "type": "function"
        },
        "index": {
          "description": "Add new diff to review request with id file path and the basedir parameter",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestDiffNew",
          "normalized": "Integer-\u003eString-\u003eFilePath-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Diff New",
          "signature": "Integer-\u003eString-\u003eFilePath-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestDiffNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Save review request draft whith \u003ctt\u003eid\u003c/tt\u003e.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestDiscardDraft",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestDiscardDraft",
          "type": "function"
        },
        "index": {
          "description": "Save review request draft whith id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestDiscardDraft",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Discard Draft",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestDiscardDraft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "List all review requests with an optional status\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListAll",
          "package": "ReviewBoard",
          "signature": "Maybe String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListAll",
          "type": "function"
        },
        "index": {
          "description": "List all review requests with an optional status",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListAll",
          "normalized": "Maybe String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request List All",
          "signature": "Maybe String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "List review request from a user with an optional status\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListFromUser",
          "package": "ReviewBoard",
          "signature": "String -\u003e Maybe String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListFromUser",
          "type": "function"
        },
        "index": {
          "description": "List review request from user with an optional status",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListFromUser",
          "normalized": "String-\u003eMaybe String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request List From User",
          "signature": "String-\u003eMaybe String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListFromUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "List review request assigned to a group with an optional status\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListToGroup",
          "package": "ReviewBoard",
          "signature": "String -\u003e Maybe String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListToGroup",
          "type": "function"
        },
        "index": {
          "description": "List review request assigned to group with an optional status",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListToGroup",
          "normalized": "String-\u003eMaybe String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request List To Group",
          "signature": "String-\u003eMaybe String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListToGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "List review request assigned to a user, directly or not with an optional status\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListToUser",
          "package": "ReviewBoard",
          "signature": "String -\u003e Bool -\u003e Maybe String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListToUser",
          "type": "function"
        },
        "index": {
          "description": "List review request assigned to user directly or not with an optional status",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestListToUser",
          "normalized": "String-\u003eBool-\u003eMaybe String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request List To User",
          "signature": "String-\u003eBool-\u003eMaybe String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListToUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create new review request using the provided repository path and an optional\n submit_as user. The returned response contains the \u003ctt\u003eid\u003c/tt\u003e of the new created\n review request that can be accessed using rrId helper function.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestNew",
          "package": "ReviewBoard",
          "signature": "String -\u003e Maybe String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestNew",
          "type": "function"
        },
        "index": {
          "description": "Create new review request using the provided repository path and an optional submit as user The returned response contains the id of the new created review request that can be accessed using rrId helper function",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestNew",
          "normalized": "String-\u003eMaybe String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request New",
          "signature": "String-\u003eMaybe String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Discard review request draft for \u003ctt\u003eid\u003c/tt\u003e.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestSaveDraft",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestSaveDraft",
          "type": "function"
        },
        "index": {
          "description": "Discard review request draft for id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestSaveDraft",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Save Draft",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestSaveDraft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add a new screenshot with \u003ctt\u003efile path\u003c/tt\u003e to a review request with \u003ctt\u003eid\u003c/tt\u003e\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestScreenshotNew",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e FilePath -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestScreenshotNew",
          "type": "function"
        },
        "index": {
          "description": "Add new screenshot with file path to review request with id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestScreenshotNew",
          "normalized": "Integer-\u003eFilePath-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Screenshot New",
          "signature": "Integer-\u003eFilePath-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestScreenshotNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Set fields to review request draft with \u003ctt\u003eid\u003c/tt\u003e.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestSet",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e [(RRField, String)] -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestSet",
          "type": "function"
        },
        "index": {
          "description": "Set fields to review request draft with id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestSet",
          "normalized": "Integer-\u003e[(RRField,String)]-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Set",
          "signature": "Integer-\u003e[(RRField,String)]-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Set one field for review request draft with \u003ctt\u003eid\u003c/tt\u003e.\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestSetField",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RRField -\u003e String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestSetField",
          "type": "function"
        },
        "index": {
          "description": "Set one field for review request draft with id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestSetField",
          "normalized": "Integer-\u003eRRField-\u003eString-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Set Field",
          "signature": "Integer-\u003eRRField-\u003eString-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestSetField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Star review request for id\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestStar",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestStar",
          "type": "function"
        },
        "index": {
          "description": "Star review request for id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestStar",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Star",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Star review request for id\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestUnstar",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestUnstar",
          "type": "function"
        },
        "index": {
          "description": "Star review request for id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewRequestUnstar",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Request Unstar",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestUnstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Save review draft for review request \u003ctt\u003eid\u003c/tt\u003e\n",
          "module": "ReviewBoard.Api",
          "name": "3AreviewSaveDraft",
          "package": "ReviewBoard",
          "signature": "Integer -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewSaveDraft",
          "type": "function"
        },
        "index": {
          "description": "Save review draft for review request id",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AreviewSaveDraft",
          "normalized": "Integer-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Areview Save Draft",
          "signature": "Integer-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewSaveDraft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Search for a user or list all users if user is Nothing\n",
          "module": "ReviewBoard.Api",
          "name": "3AuserList",
          "package": "ReviewBoard",
          "signature": "Maybe String -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#userList",
          "type": "function"
        },
        "index": {
          "description": "Search for user or list all users if user is Nothing",
          "hierarchy": "ReviewBoard Api",
          "module": "ReviewBoard.Api",
          "name": "3AuserList",
          "normalized": "Maybe String-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Auser List",
          "signature": "Maybe String-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AuserList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReviewBoard.Browser",
          "name": "3AForm",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#Form",
          "type": "data"
        },
        "index": {
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AForm",
          "package": "ReviewBoard",
          "partial": "AForm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#t:3AForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReviewBoard.Browser",
          "name": "3AFormVar",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#FormVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AFormVar",
          "package": "ReviewBoard",
          "partial": "AForm Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#t:3AFormVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create checkbox variable\n",
          "module": "ReviewBoard.Browser",
          "name": "3AcheckBox",
          "package": "ReviewBoard",
          "signature": "String -\u003e Bool -\u003e FormVar",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#checkBox",
          "type": "function"
        },
        "index": {
          "description": "Create checkbox variable",
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AcheckBox",
          "normalized": "String-\u003eBool-\u003eFormVar",
          "package": "ReviewBoard",
          "partial": "Acheck Box",
          "signature": "String-\u003eBool-\u003eFormVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AcheckBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create file upload variable\n",
          "module": "ReviewBoard.Browser",
          "name": "3AfileUpload",
          "package": "ReviewBoard",
          "signature": "String -\u003e FilePath -\u003e String -\u003e FormVar",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#fileUpload",
          "type": "function"
        },
        "index": {
          "description": "Create file upload variable",
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AfileUpload",
          "normalized": "String-\u003eFilePath-\u003eString-\u003eFormVar",
          "package": "ReviewBoard",
          "partial": "Afile Upload",
          "signature": "String-\u003eFilePath-\u003eString-\u003eFormVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AfileUpload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Form to request for typed form variables,\n same as \u003ctt\u003e\u003ca\u003eformToRequest\u003c/a\u003e\u003c/tt\u003e in Network.Browser module.\n",
          "module": "ReviewBoard.Browser",
          "name": "3AformToRequest",
          "package": "ReviewBoard",
          "signature": "Form -\u003e BrowserAction Request",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#formToRequest",
          "type": "function"
        },
        "index": {
          "description": "Form to request for typed form variables same as formToRequest in Network.Browser module",
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AformToRequest",
          "normalized": "Form-\u003eBrowserAction Request",
          "package": "ReviewBoard",
          "partial": "Aform To Request",
          "signature": "Form-\u003eBrowserAction Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AformToRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create text field variable\n",
          "module": "ReviewBoard.Browser",
          "name": "3AtextField",
          "package": "ReviewBoard",
          "signature": "String -\u003e String -\u003e FormVar",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#textField",
          "type": "function"
        },
        "index": {
          "description": "Create text field variable",
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AtextField",
          "normalized": "String-\u003eString-\u003eFormVar",
          "package": "ReviewBoard",
          "partial": "Atext Field",
          "signature": "String-\u003eString-\u003eFormVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AtextField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Opposite to toNBFormVar\n Converts a String tuple to \u003ctt\u003e\u003ca\u003eFormVar\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "ReviewBoard.Browser",
          "name": "3AtoFormVar",
          "package": "ReviewBoard",
          "signature": "[(String, String)] -\u003e [FormVar]",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#toFormVar",
          "type": "function"
        },
        "index": {
          "description": "Opposite to toNBFormVar Converts String tuple to FormVar",
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AtoFormVar",
          "normalized": "[(String,String)]-\u003e[FormVar]",
          "package": "ReviewBoard",
          "partial": "Ato Form Var",
          "signature": "[(String,String)]-\u003e[FormVar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AtoFormVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Convert [FormVar] to Network.Browser FormVar, a (String, String) map\n",
          "module": "ReviewBoard.Browser",
          "name": "3AtoMap",
          "package": "ReviewBoard",
          "signature": "[FormVar] -\u003e [(String, String)]",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Convert FormVar to Network.Browser FormVar String String map",
          "hierarchy": "ReviewBoard Browser",
          "module": "ReviewBoard.Browser",
          "name": "3AtoMap",
          "normalized": "[FormVar]-\u003e[(String,String)]",
          "package": "ReviewBoard",
          "partial": "Ato Map",
          "signature": "[FormVar]-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AtoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReviewBoard.Core",
          "name": "3ARBAction",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3ARBAction",
          "package": "ReviewBoard",
          "partial": "ARBAction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReviewBoard.Core",
          "name": "3ARBRequestType",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBRequestType",
          "type": "data"
        },
        "index": {
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3ARBRequestType",
          "package": "ReviewBoard",
          "partial": "ARBRequest Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBRequestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReviewBoard.Core",
          "name": "3ARBResponse",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBResponse",
          "type": "data"
        },
        "index": {
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3ARBResponse",
          "package": "ReviewBoard",
          "partial": "ARBResponse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReviewBoard.Core",
          "name": "3ARBState",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBState",
          "type": "data"
        },
        "index": {
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3ARBState",
          "package": "ReviewBoard",
          "partial": "ARBState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Convenient lift for BrowserActions\n",
          "module": "ReviewBoard.Core",
          "name": "3AliftBA",
          "package": "ReviewBoard",
          "signature": "BrowserAction a -\u003e RBAction a",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#liftBA",
          "type": "function"
        },
        "index": {
          "description": "Convenient lift for BrowserActions",
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3AliftBA",
          "normalized": "BrowserAction a-\u003eRBAction a",
          "package": "ReviewBoard",
          "partial": "Alift BA",
          "signature": "BrowserAction a-\u003eRBAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AliftBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create ReviewBoard specific URI for a Web API call URL.\n",
          "module": "ReviewBoard.Core",
          "name": "3AmkApiURI",
          "package": "ReviewBoard",
          "signature": "String -\u003e RBAction URI",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#mkApiURI",
          "type": "function"
        },
        "index": {
          "description": "Create ReviewBoard specific URI for Web API call URL",
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3AmkApiURI",
          "normalized": "String-\u003eRBAction URI",
          "package": "ReviewBoard",
          "partial": "Amk Api URI",
          "signature": "String-\u003eRBAction URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AmkApiURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Convenient response converter\n",
          "module": "ReviewBoard.Core",
          "name": "3AresponseToEither",
          "package": "ReviewBoard",
          "signature": "RBResponse -\u003e Either String JSValue",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#responseToEither",
          "type": "function"
        },
        "index": {
          "description": "Convenient response converter",
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3AresponseToEither",
          "normalized": "RBResponse-\u003eEither String JSValue",
          "package": "ReviewBoard",
          "partial": "Aresponse To Either",
          "signature": "RBResponse-\u003eEither String JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AresponseToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run for \u003ctt\u003e\u003ca\u003eRBAction\u003c/a\u003e\u003c/tt\u003e, performs a login using provided URL, user \n and password parameters and executes the action. When login fails \n \u003ctt\u003e\u003ca\u003erunRBAction\u003c/a\u003e\u003c/tt\u003e returns immediately with an error.\n",
          "module": "ReviewBoard.Core",
          "name": "3ArunRBAction",
          "package": "ReviewBoard",
          "signature": "String -\u003e String -\u003e String -\u003e RBAction a -\u003e IO (Either String a, RBState)",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#runRBAction",
          "type": "function"
        },
        "index": {
          "description": "Run for RBAction performs login using provided URL user and password parameters and executes the action When login fails runRBAction returns immediately with an error",
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3ArunRBAction",
          "normalized": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO(Either String a,RBState)",
          "package": "ReviewBoard",
          "partial": "Arun RBAction",
          "signature": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO(Either String a,RBState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3ArunRBAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The request runner, generates request from provided \u003ctt\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/tt\u003e parameter,\n executes the requests and handles the response using the handler function.\n",
          "module": "ReviewBoard.Core",
          "name": "3ArunRequest",
          "package": "ReviewBoard",
          "signature": "RBRequestType -\u003e Form -\u003e (RBResponse -\u003e RBAction a) -\u003e RBAction a",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#runRequest",
          "type": "function"
        },
        "index": {
          "description": "The request runner generates request from provided Form parameter executes the requests and handles the response using the handler function",
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3ArunRequest",
          "normalized": "RBRequestType-\u003eForm-\u003e(RBResponse-\u003eRBAction a)-\u003eRBAction a",
          "package": "ReviewBoard",
          "partial": "Arun Request",
          "signature": "RBRequestType-\u003eForm-\u003e(RBResponse-\u003eRBAction a)-\u003eRBAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3ArunRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Enable/disable debug output for Browser module\n",
          "module": "ReviewBoard.Core",
          "name": "3AsetDebugHTTP",
          "package": "ReviewBoard",
          "signature": "Bool -\u003e RBAction ()",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#setDebugHTTP",
          "type": "function"
        },
        "index": {
          "description": "Enable disable debug output for Browser module",
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3AsetDebugHTTP",
          "normalized": "Bool-\u003eRBAction()",
          "package": "ReviewBoard",
          "partial": "Aset Debug HTTP",
          "signature": "Bool-\u003eRBAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AsetDebugHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Set error handler used for ReviewBoard error responses.\n",
          "module": "ReviewBoard.Core",
          "name": "3AsetErrorHandler",
          "package": "ReviewBoard",
          "signature": "(String -\u003e IO ()) -\u003e RBAction ()",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#setErrorHandler",
          "type": "function"
        },
        "index": {
          "description": "Set error handler used for ReviewBoard error responses",
          "hierarchy": "ReviewBoard Core",
          "module": "ReviewBoard.Core",
          "name": "3AsetErrorHandler",
          "normalized": "(String-\u003eIO())-\u003eRBAction()",
          "package": "ReviewBoard",
          "partial": "Aset Error Handler",
          "signature": "(String-\u003eIO())-\u003eRBAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AsetErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReviewBoard.Request",
          "name": "3ARRField",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#RRField",
          "type": "data"
        },
        "index": {
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3ARRField",
          "package": "ReviewBoard",
          "partial": "ARRField",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#t:3ARRField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Synonym for URL path element\n",
          "module": "ReviewBoard.Request",
          "name": "3AUrlPath",
          "package": "ReviewBoard",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#UrlPath",
          "type": "type"
        },
        "index": {
          "description": "Synonym for URL path element",
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3AUrlPath",
          "package": "ReviewBoard",
          "partial": "AUrl Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#t:3AUrlPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "API GET request method\n",
          "module": "ReviewBoard.Request",
          "name": "3AapiGet",
          "package": "ReviewBoard",
          "signature": "(UrlPath -\u003e UrlPath) -\u003e [FormVar] -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#apiGet",
          "type": "function"
        },
        "index": {
          "description": "API GET request method",
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3AapiGet",
          "normalized": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Aapi Get",
          "signature": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AapiGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "API POST request method\n",
          "module": "ReviewBoard.Request",
          "name": "3AapiPost",
          "package": "ReviewBoard",
          "signature": "(UrlPath -\u003e UrlPath) -\u003e [FormVar] -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#apiPost",
          "type": "function"
        },
        "index": {
          "description": "API POST request method",
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3AapiPost",
          "normalized": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Aapi Post",
          "signature": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AapiPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Fall back to default http request for the case an action is not supported \n by the ReviewBoard WebAPI (HTTP GET)\n",
          "module": "ReviewBoard.Request",
          "name": "3AhttpGet",
          "package": "ReviewBoard",
          "signature": "String -\u003e [FormVar] -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#httpGet",
          "type": "function"
        },
        "index": {
          "description": "Fall back to default http request for the case an action is not supported by the ReviewBoard WebAPI HTTP GET",
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3AhttpGet",
          "normalized": "String-\u003e[FormVar]-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Ahttp Get",
          "signature": "String-\u003e[FormVar]-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AhttpGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Same as \u003ctt\u003e\u003ca\u003ehttpGet\u003c/a\u003e\u003c/tt\u003e for HTTP POST requests\n",
          "module": "ReviewBoard.Request",
          "name": "3AhttpPost",
          "package": "ReviewBoard",
          "signature": "String -\u003e [FormVar] -\u003e RBAction RBResponse",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#httpPost",
          "type": "function"
        },
        "index": {
          "description": "Same as httpGet for HTTP POST requests",
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3AhttpPost",
          "normalized": "String-\u003e[FormVar]-\u003eRBAction RBResponse",
          "package": "ReviewBoard",
          "partial": "Ahttp Post",
          "signature": "String-\u003e[FormVar]-\u003eRBAction RBResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AhttpPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Make path element with a parameter of type a e.g.\n reviewrequests (Just 5) =\u003e \"reviewrequests/5/\"\n",
          "module": "ReviewBoard.Request",
          "name": "3Amkpup",
          "package": "ReviewBoard",
          "signature": "String -\u003e Maybe a -\u003e UrlPath -\u003e UrlPath",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#mkpup",
          "type": "function"
        },
        "index": {
          "description": "Make path element with parameter of type e.g reviewrequests Just reviewrequests",
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3Amkpup",
          "normalized": "String-\u003eMaybe a-\u003eUrlPath-\u003eUrlPath",
          "package": "ReviewBoard",
          "partial": "Amkpup",
          "signature": "String-\u003eMaybe a-\u003eUrlPath-\u003eUrlPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3Amkpup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "(MaKe UrlPath) Default URL element path maker\n",
          "module": "ReviewBoard.Request",
          "name": "3Amkup",
          "package": "ReviewBoard",
          "signature": "String -\u003e UrlPath -\u003e UrlPath",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#mkup",
          "type": "function"
        },
        "index": {
          "description": "MaKe UrlPath Default URL element path maker",
          "hierarchy": "ReviewBoard Request",
          "module": "ReviewBoard.Request",
          "name": "3Amkup",
          "normalized": "String-\u003eUrlPath-\u003eUrlPath",
          "package": "ReviewBoard",
          "partial": "Amkup",
          "signature": "String-\u003eUrlPath-\u003eUrlPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3Amkup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract value from JSValue or throw error\n\u003cp\u003eThe DSL provides a function for most ReviewBoard JSObject members\n that directly returns the value of the member. The function name is equivalent\n to the name of the member element, for example values of a response:\n\u003c/p\u003e\u003cpre\u003e { \"stat\": \"fail\", \n   \"err\": {\n     \"msg\": \"You are not logged in\", \n     \"code\": 103\n   }\n }\n\u003c/pre\u003e\u003cp\u003emay be accessed as following:\n\u003c/p\u003e\u003cpre\u003e (msg . err) response\n -- returns 'You are not logged in' :: String\n\u003c/pre\u003e\u003cpre\u003e (code . err) response\n -- returns 103 :: Integer\n\u003c/pre\u003e\u003cp\u003eIf the entry name represented by the function does not exist,\n an error is thrown.\n\u003c/p\u003e\u003cp\u003eThe current function list is build by screen scraping ReviewBoard\n source code, so it's likely that some elements are missing. \n The missing function can be added using \u003ctt\u003e\u003ca\u003emkrb\u003c/a\u003e\u003c/tt\u003e function. \n Please drop me an email if you find one and I will include \n this in the next version.\n\u003c/p\u003e\u003cp\u003eThis approach for handling responses may change if I find a way\n to generate the DSL methods directly from ReviewBoard code.\n\u003c/p\u003e",
          "module": "ReviewBoard.Response",
          "name": "3Ajs2v",
          "package": "ReviewBoard",
          "signature": "JSValue -\u003e a",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js2v",
          "type": "function"
        },
        "index": {
          "description": "Extract value from JSValue or throw error The DSL provides function for most ReviewBoard JSObject members that directly returns the value of the member The function name is equivalent to the name of the member element for example values of response stat fail err msg You are not logged in code may be accessed as following msg err response returns You are not logged in String code err response returns Integer If the entry name represented by the function does not exist an error is thrown The current function list is build by screen scraping ReviewBoard source code so it likely that some elements are missing The missing function can be added using mkrb function Please drop me an email if you find one and will include this in the next version This approach for handling responses may change if find way to generate the DSL methods directly from ReviewBoard code",
          "hierarchy": "ReviewBoard Response",
          "module": "ReviewBoard.Response",
          "name": "3Ajs2v",
          "normalized": "JSValue-\u003ea",
          "package": "ReviewBoard",
          "partial": "Ajs",
          "signature": "JSValue-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs2v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get value for name from a JSObject or Nothing\n if JSValue is not a JSObject\n",
          "module": "ReviewBoard.Response",
          "name": "3Ajs4name",
          "package": "ReviewBoard",
          "signature": "String -\u003e JSValue -\u003e Maybe JSValue",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js4name",
          "type": "function"
        },
        "index": {
          "description": "Get value for name from JSObject or Nothing if JSValue is not JSObject",
          "hierarchy": "ReviewBoard Response",
          "module": "ReviewBoard.Response",
          "name": "3Ajs4name",
          "normalized": "String-\u003eJSValue-\u003eMaybe JSValue",
          "package": "ReviewBoard",
          "partial": "Ajs",
          "signature": "String-\u003eJSValue-\u003eMaybe JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs4name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get JSValue for name path, for example\n for JSON object '{ \"obj1\" : { \"str\" : \"test\" } }'\n js4path [\"obj1\", \"str\"] returns Just test\n",
          "module": "ReviewBoard.Response",
          "name": "3Ajs4path",
          "package": "ReviewBoard",
          "signature": "[String] -\u003e JSValue -\u003e Maybe JSValue",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js4path",
          "type": "function"
        },
        "index": {
          "description": "Get JSValue for name path for example for JSON object obj1 str test js4path obj1 str returns Just test",
          "hierarchy": "ReviewBoard Response",
          "module": "ReviewBoard.Response",
          "name": "3Ajs4path",
          "normalized": "[String]-\u003eJSValue-\u003eMaybe JSValue",
          "package": "ReviewBoard",
          "partial": "Ajs",
          "signature": "[String]-\u003eJSValue-\u003eMaybe JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs4path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get JSValue for string path of the form\n \u003ctt\u003ereviewrequests.5.delete\u003c/tt\u003e. Dots inside a name\n are not supported.\n",
          "module": "ReviewBoard.Response",
          "name": "3Ajs4spath",
          "package": "ReviewBoard",
          "signature": "String -\u003e JSValue -\u003e Maybe JSValue",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js4spath",
          "type": "function"
        },
        "index": {
          "description": "Get JSValue for string path of the form reviewrequests.5.delete Dots inside name are not supported",
          "hierarchy": "ReviewBoard Response",
          "module": "ReviewBoard.Response",
          "name": "3Ajs4spath",
          "normalized": "String-\u003eJSValue-\u003eMaybe JSValue",
          "package": "ReviewBoard",
          "partial": "Ajs",
          "signature": "String-\u003eJSValue-\u003eMaybe JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs4spath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Constructor for DSL functions\n",
          "module": "ReviewBoard.Response",
          "name": "3Amkrb",
          "package": "ReviewBoard",
          "signature": "String -\u003e JSValue -\u003e a",
          "source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#mkrb",
          "type": "function"
        },
        "index": {
          "description": "Constructor for DSL functions",
          "hierarchy": "ReviewBoard Response",
          "module": "ReviewBoard.Response",
          "name": "3Amkrb",
          "normalized": "String-\u003eJSValue-\u003ea",
          "package": "ReviewBoard",
          "partial": "Amkrb",
          "signature": "String-\u003eJSValue-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Amkrb"
      }
    }
  ]
]