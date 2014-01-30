[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AexecRBAction",
      "description": {
        "fct-descr": "Execute a ReviewBoard action using the provided URL, user\n and password.\n\u003cp\u003eThe following RBAction creates a new review request draft, sets some fields\nand uploads a diff file:\n\u003c/p\u003e\u003cpre\u003e    import ReviewBoard.Api\n    import qualified ReviewBoard.Response as R\n\u003c/pre\u003e\u003cpre\u003e    newRRAction :: RBAction ()\n    newRRAction = do\n        rsp \u003c- reviewRequestNew \"repository\" Nothing\n        case rsp of\n            RBok r -\u003e do\n                let id = R.id . R.review_request $ r\n                reviewRequestsSetField id TARGET_PEOPLE \"reviewers\"\n                reviewRequestsSetField id DESCRIPTION \"Request description\"\n                reviewRequestsDiffNew  id \"basedir\" \"diffFileName\"\n                reviewRequestSaveDraft id\n                liftIO $ print \"Done.\"\n            RBerr s -\u003e throwError s\n\u003c/pre\u003e\u003cp\u003eTo run this action, execute:\n\u003c/p\u003e\u003cpre\u003e   execRBAction \"url\" \"user\" \"password\" newRRAction\n\u003c/pre\u003e",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e String -\u003e String -\u003e RBAction a -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#execRBAction",
        "fct-type": "unknown",
        "title": "3AexecRBAction"
      },
      "index": {
        "description": "Execute ReviewBoard action using the provided URL user and password The following RBAction creates new review request draft sets some fields and uploads diff file import ReviewBoard.Api import qualified ReviewBoard.Response as newRRAction RBAction newRRAction do rsp reviewRequestNew repository Nothing case rsp of RBok do let id R.id R.review request reviewRequestsSetField id TARGET PEOPLE reviewers reviewRequestsSetField id DESCRIPTION Request description reviewRequestsDiffNew id basedir diffFileName reviewRequestSaveDraft id liftIO print Done RBerr throwError To run this action execute execRBAction url user password newRRAction",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AexecRBAction",
        "normalized": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO a",
        "package": "ReviewBoard",
        "partial": "Aexec RBAction",
        "signature": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AgroupList",
      "description": {
        "fct-descr": "Search for a group or list all group if Nothing\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Maybe String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#groupList",
        "fct-type": "unknown",
        "title": "3AgroupList"
      },
      "index": {
        "description": "Search for group or list all group if Nothing",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AgroupList",
        "normalized": "Maybe String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Agroup List",
        "signature": "Maybe String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AgroupStar",
      "description": {
        "fct-descr": "Star group for group name\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#groupStar",
        "fct-type": "unknown",
        "title": "3AgroupStar"
      },
      "index": {
        "description": "Star group for group name",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AgroupStar",
        "normalized": "String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Agroup Star",
        "signature": "String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AgroupUnstar",
      "description": {
        "fct-descr": "Unstar group for group name\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#groupUnstar",
        "fct-type": "unknown",
        "title": "3AgroupUnstar"
      },
      "index": {
        "description": "Unstar group for group name",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AgroupUnstar",
        "normalized": "String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Agroup Unstar",
        "signature": "String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3ArepositoryList",
      "description": {
        "fct-descr": "List repositories\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#repositoryList",
        "fct-type": "unknown",
        "title": "3ArepositoryList"
      },
      "index": {
        "description": "List repositories",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3ArepositoryList",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "Arepository List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewAll",
      "description": {
        "fct-descr": "List all reviews for review request \u003ctt\u003eid\u003c/tt\u003e\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewAll",
        "fct-type": "unknown",
        "title": "3AreviewAll"
      },
      "index": {
        "description": "List all reviews for review request id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewAll",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview All",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewDeleteDraft",
      "description": {
        "fct-descr": "Delete review draft for review request \u003ctt\u003eid\u003c/tt\u003e\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewDeleteDraft",
        "fct-type": "unknown",
        "title": "3AreviewDeleteDraft"
      },
      "index": {
        "description": "Delete review draft for review request id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewDeleteDraft",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Delete Draft",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewPublishDraft",
      "description": {
        "fct-descr": "Publish review request draft for id\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewPublishDraft",
        "fct-type": "unknown",
        "title": "3AreviewPublishDraft"
      },
      "index": {
        "description": "Publish review request draft for id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewPublishDraft",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Publish Draft",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequest",
      "description": {
        "fct-descr": "Get review request by \u003ctt\u003eid\u003c/tt\u003e.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequest",
        "fct-type": "unknown",
        "title": "3AreviewRequest"
      },
      "index": {
        "description": "Get review request by id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequest",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestByChangenum",
      "description": {
        "fct-descr": "Get review request by repository \u003ctt\u003eid\u003c/tt\u003e and changenum \u003ctt\u003eid\u003c/tt\u003e\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestByChangenum",
        "fct-type": "unknown",
        "title": "3AreviewRequestByChangenum"
      },
      "index": {
        "description": "Get review request by repository id and changenum id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestByChangenum",
        "normalized": "Integer-\u003eInteger-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request By Changenum",
        "signature": "Integer-\u003eInteger-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestDelete",
      "description": {
        "fct-descr": "Delete review request with request \u003ctt\u003eid\u003c/tt\u003e.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestDelete",
        "fct-type": "unknown",
        "title": "3AreviewRequestDelete"
      },
      "index": {
        "description": "Delete review request with request id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestDelete",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Delete",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestDiffNew",
      "description": {
        "fct-descr": "Add a new diff to a review request with \u003ctt\u003eid\u003c/tt\u003e, file path and the basedir parameter.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e String -\u003e FilePath -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestDiffNew",
        "fct-type": "unknown",
        "title": "3AreviewRequestDiffNew"
      },
      "index": {
        "description": "Add new diff to review request with id file path and the basedir parameter",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestDiffNew",
        "normalized": "Integer-\u003eString-\u003eFilePath-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Diff New",
        "signature": "Integer-\u003eString-\u003eFilePath-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestDiscardDraft",
      "description": {
        "fct-descr": "Save review request draft whith \u003ctt\u003eid\u003c/tt\u003e.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestDiscardDraft",
        "fct-type": "unknown",
        "title": "3AreviewRequestDiscardDraft"
      },
      "index": {
        "description": "Save review request draft whith id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestDiscardDraft",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Discard Draft",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListAll",
      "description": {
        "fct-descr": "List all review requests with an optional status\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Maybe String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListAll",
        "fct-type": "unknown",
        "title": "3AreviewRequestListAll"
      },
      "index": {
        "description": "List all review requests with an optional status",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestListAll",
        "normalized": "Maybe String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request List All",
        "signature": "Maybe String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListFromUser",
      "description": {
        "fct-descr": "List review request from a user with an optional status\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e Maybe String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListFromUser",
        "fct-type": "unknown",
        "title": "3AreviewRequestListFromUser"
      },
      "index": {
        "description": "List review request from user with an optional status",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestListFromUser",
        "normalized": "String-\u003eMaybe String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request List From User",
        "signature": "String-\u003eMaybe String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListToGroup",
      "description": {
        "fct-descr": "List review request assigned to a group with an optional status\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e Maybe String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListToGroup",
        "fct-type": "unknown",
        "title": "3AreviewRequestListToGroup"
      },
      "index": {
        "description": "List review request assigned to group with an optional status",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestListToGroup",
        "normalized": "String-\u003eMaybe String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request List To Group",
        "signature": "String-\u003eMaybe String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestListToUser",
      "description": {
        "fct-descr": "List review request assigned to a user, directly or not with an optional status\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e Bool -\u003e Maybe String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestListToUser",
        "fct-type": "unknown",
        "title": "3AreviewRequestListToUser"
      },
      "index": {
        "description": "List review request assigned to user directly or not with an optional status",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestListToUser",
        "normalized": "String-\u003eBool-\u003eMaybe String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request List To User",
        "signature": "String-\u003eBool-\u003eMaybe String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestNew",
      "description": {
        "fct-descr": "Create new review request using the provided repository path and an optional\n submit_as user. The returned response contains the \u003ctt\u003eid\u003c/tt\u003e of the new created\n review request that can be accessed using rrId helper function.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e Maybe String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestNew",
        "fct-type": "unknown",
        "title": "3AreviewRequestNew"
      },
      "index": {
        "description": "Create new review request using the provided repository path and an optional submit as user The returned response contains the id of the new created review request that can be accessed using rrId helper function",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestNew",
        "normalized": "String-\u003eMaybe String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request New",
        "signature": "String-\u003eMaybe String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestSaveDraft",
      "description": {
        "fct-descr": "Discard review request draft for \u003ctt\u003eid\u003c/tt\u003e.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestSaveDraft",
        "fct-type": "unknown",
        "title": "3AreviewRequestSaveDraft"
      },
      "index": {
        "description": "Discard review request draft for id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestSaveDraft",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Save Draft",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestScreenshotNew",
      "description": {
        "fct-descr": "Add a new screenshot with \u003ctt\u003efile path\u003c/tt\u003e to a review request with \u003ctt\u003eid\u003c/tt\u003e\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e FilePath -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestScreenshotNew",
        "fct-type": "unknown",
        "title": "3AreviewRequestScreenshotNew"
      },
      "index": {
        "description": "Add new screenshot with file path to review request with id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestScreenshotNew",
        "normalized": "Integer-\u003eFilePath-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Screenshot New",
        "signature": "Integer-\u003eFilePath-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestSet",
      "description": {
        "fct-descr": "Set fields to review request draft with \u003ctt\u003eid\u003c/tt\u003e.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e [(RRField, String)] -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestSet",
        "fct-type": "unknown",
        "title": "3AreviewRequestSet"
      },
      "index": {
        "description": "Set fields to review request draft with id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestSet",
        "normalized": "Integer-\u003e[(RRField,String)]-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Set",
        "signature": "Integer-\u003e[(RRField,String)]-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestSetField",
      "description": {
        "fct-descr": "Set one field for review request draft with \u003ctt\u003eid\u003c/tt\u003e.\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RRField -\u003e String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestSetField",
        "fct-type": "unknown",
        "title": "3AreviewRequestSetField"
      },
      "index": {
        "description": "Set one field for review request draft with id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestSetField",
        "normalized": "Integer-\u003eRRField-\u003eString-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Set Field",
        "signature": "Integer-\u003eRRField-\u003eString-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestStar",
      "description": {
        "fct-descr": "Star review request for id\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestStar",
        "fct-type": "unknown",
        "title": "3AreviewRequestStar"
      },
      "index": {
        "description": "Star review request for id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestStar",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Star",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewRequestUnstar",
      "description": {
        "fct-descr": "Star review request for id\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewRequestUnstar",
        "fct-type": "unknown",
        "title": "3AreviewRequestUnstar"
      },
      "index": {
        "description": "Star review request for id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewRequestUnstar",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Request Unstar",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AreviewSaveDraft",
      "description": {
        "fct-descr": "Save review draft for review request \u003ctt\u003eid\u003c/tt\u003e\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Integer -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#reviewSaveDraft",
        "fct-type": "unknown",
        "title": "3AreviewSaveDraft"
      },
      "index": {
        "description": "Save review draft for review request id",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AreviewSaveDraft",
        "normalized": "Integer-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Areview Save Draft",
        "signature": "Integer-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Api.html#v:3AuserList",
      "description": {
        "fct-descr": "Search for a user or list all users if user is Nothing\n",
        "fct-module": "ReviewBoard.Api",
        "fct-package": "ReviewBoard",
        "fct-signature": "Maybe String -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Api.html#userList",
        "fct-type": "unknown",
        "title": "3AuserList"
      },
      "index": {
        "description": "Search for user or list all users if user is Nothing",
        "hierarchy": "ReviewBoard Api",
        "module": "ReviewBoard.Api",
        "name": "3AuserList",
        "normalized": "Maybe String-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Auser List",
        "signature": "Maybe String-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#t:3AForm",
      "description": {
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#Form",
        "fct-type": "unknown",
        "title": "3AForm"
      },
      "index": {
        "description": "",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AForm",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "AForm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#t:3AFormVar",
      "description": {
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#FormVar",
        "fct-type": "unknown",
        "title": "3AFormVar"
      },
      "index": {
        "description": "",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AFormVar",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "AForm Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AcheckBox",
      "description": {
        "fct-descr": "Create checkbox variable\n",
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e Bool -\u003e FormVar",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#checkBox",
        "fct-type": "unknown",
        "title": "3AcheckBox"
      },
      "index": {
        "description": "Create checkbox variable",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AcheckBox",
        "normalized": "String-\u003eBool-\u003eFormVar",
        "package": "ReviewBoard",
        "partial": "Acheck Box",
        "signature": "String-\u003eBool-\u003eFormVar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AfileUpload",
      "description": {
        "fct-descr": "Create file upload variable\n",
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e FilePath -\u003e String -\u003e FormVar",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#fileUpload",
        "fct-type": "unknown",
        "title": "3AfileUpload"
      },
      "index": {
        "description": "Create file upload variable",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AfileUpload",
        "normalized": "String-\u003eFilePath-\u003eString-\u003eFormVar",
        "package": "ReviewBoard",
        "partial": "Afile Upload",
        "signature": "String-\u003eFilePath-\u003eString-\u003eFormVar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AformToRequest",
      "description": {
        "fct-descr": "Form to request for typed form variables,\n same as \u003ctt\u003e\u003ca\u003eformToRequest\u003c/a\u003e\u003c/tt\u003e in Network.Browser module.\n",
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "Form -\u003e BrowserAction Request",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#formToRequest",
        "fct-type": "unknown",
        "title": "3AformToRequest"
      },
      "index": {
        "description": "Form to request for typed form variables same as formToRequest in Network.Browser module",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AformToRequest",
        "normalized": "Form-\u003eBrowserAction Request",
        "package": "ReviewBoard",
        "partial": "Aform To Request",
        "signature": "Form-\u003eBrowserAction Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AtextField",
      "description": {
        "fct-descr": "Create text field variable\n",
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e String -\u003e FormVar",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#textField",
        "fct-type": "unknown",
        "title": "3AtextField"
      },
      "index": {
        "description": "Create text field variable",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AtextField",
        "normalized": "String-\u003eString-\u003eFormVar",
        "package": "ReviewBoard",
        "partial": "Atext Field",
        "signature": "String-\u003eString-\u003eFormVar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AtoFormVar",
      "description": {
        "fct-descr": "Opposite to toNBFormVar\n Converts a String tuple to \u003ctt\u003e\u003ca\u003eFormVar\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "[(String, String)] -\u003e [FormVar]",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#toFormVar",
        "fct-type": "unknown",
        "title": "3AtoFormVar"
      },
      "index": {
        "description": "Opposite to toNBFormVar Converts String tuple to FormVar",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AtoFormVar",
        "normalized": "[(String,String)]-\u003e[FormVar]",
        "package": "ReviewBoard",
        "partial": "Ato Form Var",
        "signature": "[(String,String)]-\u003e[FormVar]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Browser.html#v:3AtoMap",
      "description": {
        "fct-descr": "Convert [FormVar] to Network.Browser FormVar, a (String, String) map\n",
        "fct-module": "ReviewBoard.Browser",
        "fct-package": "ReviewBoard",
        "fct-signature": "[FormVar] -\u003e [(String, String)]",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Browser.html#toMap",
        "fct-type": "unknown",
        "title": "3AtoMap"
      },
      "index": {
        "description": "Convert FormVar to Network.Browser FormVar String String map",
        "hierarchy": "ReviewBoard Browser",
        "module": "ReviewBoard.Browser",
        "name": "3AtoMap",
        "normalized": "[FormVar]-\u003e[(String,String)]",
        "package": "ReviewBoard",
        "partial": "Ato Map",
        "signature": "[FormVar]-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBAction",
      "description": {
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBAction",
        "fct-type": "unknown",
        "title": "3ARBAction"
      },
      "index": {
        "description": "",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3ARBAction",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "ARBAction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBRequestType",
      "description": {
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBRequestType",
        "fct-type": "unknown",
        "title": "3ARBRequestType"
      },
      "index": {
        "description": "",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3ARBRequestType",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "ARBRequest Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBResponse",
      "description": {
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBResponse",
        "fct-type": "unknown",
        "title": "3ARBResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3ARBResponse",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "ARBResponse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#t:3ARBState",
      "description": {
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#RBState",
        "fct-type": "unknown",
        "title": "3ARBState"
      },
      "index": {
        "description": "",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3ARBState",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "ARBState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AliftBA",
      "description": {
        "fct-descr": "Convenient lift for BrowserActions\n",
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "BrowserAction a -\u003e RBAction a",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#liftBA",
        "fct-type": "unknown",
        "title": "3AliftBA"
      },
      "index": {
        "description": "Convenient lift for BrowserActions",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3AliftBA",
        "normalized": "BrowserAction a-\u003eRBAction a",
        "package": "ReviewBoard",
        "partial": "Alift BA",
        "signature": "BrowserAction a-\u003eRBAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AmkApiURI",
      "description": {
        "fct-descr": "Create ReviewBoard specific URI for a Web API call URL.\n",
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e RBAction URI",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#mkApiURI",
        "fct-type": "unknown",
        "title": "3AmkApiURI"
      },
      "index": {
        "description": "Create ReviewBoard specific URI for Web API call URL",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3AmkApiURI",
        "normalized": "String-\u003eRBAction URI",
        "package": "ReviewBoard",
        "partial": "Amk Api URI",
        "signature": "String-\u003eRBAction URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AresponseToEither",
      "description": {
        "fct-descr": "Convenient response converter\n",
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "RBResponse -\u003e Either String JSValue",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#responseToEither",
        "fct-type": "unknown",
        "title": "3AresponseToEither"
      },
      "index": {
        "description": "Convenient response converter",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3AresponseToEither",
        "normalized": "RBResponse-\u003eEither String JSValue",
        "package": "ReviewBoard",
        "partial": "Aresponse To Either",
        "signature": "RBResponse-\u003eEither String JSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3ArunRBAction",
      "description": {
        "fct-descr": "Run for \u003ctt\u003e\u003ca\u003eRBAction\u003c/a\u003e\u003c/tt\u003e, performs a login using provided URL, user \n and password parameters and executes the action. When login fails \n \u003ctt\u003e\u003ca\u003erunRBAction\u003c/a\u003e\u003c/tt\u003e returns immediately with an error.\n",
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e String -\u003e String -\u003e RBAction a -\u003e IO (Either String a, RBState)",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#runRBAction",
        "fct-type": "unknown",
        "title": "3ArunRBAction"
      },
      "index": {
        "description": "Run for RBAction performs login using provided URL user and password parameters and executes the action When login fails runRBAction returns immediately with an error",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3ArunRBAction",
        "normalized": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO(Either String a,RBState)",
        "package": "ReviewBoard",
        "partial": "Arun RBAction",
        "signature": "String-\u003eString-\u003eString-\u003eRBAction a-\u003eIO(Either String a,RBState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3ArunRequest",
      "description": {
        "fct-descr": "The request runner, generates request from provided \u003ctt\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/tt\u003e parameter,\n executes the requests and handles the response using the handler function.\n",
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "RBRequestType -\u003e Form -\u003e (RBResponse -\u003e RBAction a) -\u003e RBAction a",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#runRequest",
        "fct-type": "unknown",
        "title": "3ArunRequest"
      },
      "index": {
        "description": "The request runner generates request from provided Form parameter executes the requests and handles the response using the handler function",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3ArunRequest",
        "normalized": "RBRequestType-\u003eForm-\u003e(RBResponse-\u003eRBAction a)-\u003eRBAction a",
        "package": "ReviewBoard",
        "partial": "Arun Request",
        "signature": "RBRequestType-\u003eForm-\u003e(RBResponse-\u003eRBAction a)-\u003eRBAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AsetDebugHTTP",
      "description": {
        "fct-descr": "Enable/disable debug output for Browser module\n",
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "Bool -\u003e RBAction ()",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#setDebugHTTP",
        "fct-type": "unknown",
        "title": "3AsetDebugHTTP"
      },
      "index": {
        "description": "Enable disable debug output for Browser module",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3AsetDebugHTTP",
        "normalized": "Bool-\u003eRBAction()",
        "package": "ReviewBoard",
        "partial": "Aset Debug HTTP",
        "signature": "Bool-\u003eRBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Core.html#v:3AsetErrorHandler",
      "description": {
        "fct-descr": "Set error handler used for ReviewBoard error responses.\n",
        "fct-module": "ReviewBoard.Core",
        "fct-package": "ReviewBoard",
        "fct-signature": "(String -\u003e IO ()) -\u003e RBAction ()",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Core.html#setErrorHandler",
        "fct-type": "unknown",
        "title": "3AsetErrorHandler"
      },
      "index": {
        "description": "Set error handler used for ReviewBoard error responses",
        "hierarchy": "ReviewBoard Core",
        "module": "ReviewBoard.Core",
        "name": "3AsetErrorHandler",
        "normalized": "(String-\u003eIO())-\u003eRBAction()",
        "package": "ReviewBoard",
        "partial": "Aset Error Handler",
        "signature": "(String-\u003eIO())-\u003eRBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#t:3ARRField",
      "description": {
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#RRField",
        "fct-type": "unknown",
        "title": "3ARRField"
      },
      "index": {
        "description": "",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3ARRField",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "ARRField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#t:3AUrlPath",
      "description": {
        "fct-descr": "Synonym for URL path element\n",
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#UrlPath",
        "fct-type": "unknown",
        "title": "3AUrlPath"
      },
      "index": {
        "description": "Synonym for URL path element",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3AUrlPath",
        "normalized": "",
        "package": "ReviewBoard",
        "partial": "AUrl Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AapiGet",
      "description": {
        "fct-descr": "API GET request method\n",
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "(UrlPath -\u003e UrlPath) -\u003e [FormVar] -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#apiGet",
        "fct-type": "unknown",
        "title": "3AapiGet"
      },
      "index": {
        "description": "API GET request method",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3AapiGet",
        "normalized": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Aapi Get",
        "signature": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AapiPost",
      "description": {
        "fct-descr": "API POST request method\n",
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "(UrlPath -\u003e UrlPath) -\u003e [FormVar] -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#apiPost",
        "fct-type": "unknown",
        "title": "3AapiPost"
      },
      "index": {
        "description": "API POST request method",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3AapiPost",
        "normalized": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Aapi Post",
        "signature": "(UrlPath-\u003eUrlPath)-\u003e[FormVar]-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AhttpGet",
      "description": {
        "fct-descr": "Fall back to default http request for the case an action is not supported \n by the ReviewBoard WebAPI (HTTP GET)\n",
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e [FormVar] -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#httpGet",
        "fct-type": "unknown",
        "title": "3AhttpGet"
      },
      "index": {
        "description": "Fall back to default http request for the case an action is not supported by the ReviewBoard WebAPI HTTP GET",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3AhttpGet",
        "normalized": "String-\u003e[FormVar]-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Ahttp Get",
        "signature": "String-\u003e[FormVar]-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3AhttpPost",
      "description": {
        "fct-descr": "Same as \u003ctt\u003e\u003ca\u003ehttpGet\u003c/a\u003e\u003c/tt\u003e for HTTP POST requests\n",
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e [FormVar] -\u003e RBAction RBResponse",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#httpPost",
        "fct-type": "unknown",
        "title": "3AhttpPost"
      },
      "index": {
        "description": "Same as httpGet for HTTP POST requests",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3AhttpPost",
        "normalized": "String-\u003e[FormVar]-\u003eRBAction RBResponse",
        "package": "ReviewBoard",
        "partial": "Ahttp Post",
        "signature": "String-\u003e[FormVar]-\u003eRBAction RBResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3Amkpup",
      "description": {
        "fct-descr": "Make path element with a parameter of type a e.g.\n reviewrequests (Just 5) =\u003e \"reviewrequests/5/\"\n",
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e Maybe a -\u003e UrlPath -\u003e UrlPath",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#mkpup",
        "fct-type": "unknown",
        "title": "3Amkpup"
      },
      "index": {
        "description": "Make path element with parameter of type e.g reviewrequests Just reviewrequests",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3Amkpup",
        "normalized": "String-\u003eMaybe a-\u003eUrlPath-\u003eUrlPath",
        "package": "ReviewBoard",
        "partial": "Amkpup",
        "signature": "String-\u003eMaybe a-\u003eUrlPath-\u003eUrlPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Request.html#v:3Amkup",
      "description": {
        "fct-descr": "(MaKe UrlPath) Default URL element path maker\n",
        "fct-module": "ReviewBoard.Request",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e UrlPath -\u003e UrlPath",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Request.html#mkup",
        "fct-type": "unknown",
        "title": "3Amkup"
      },
      "index": {
        "description": "MaKe UrlPath Default URL element path maker",
        "hierarchy": "ReviewBoard Request",
        "module": "ReviewBoard.Request",
        "name": "3Amkup",
        "normalized": "String-\u003eUrlPath-\u003eUrlPath",
        "package": "ReviewBoard",
        "partial": "Amkup",
        "signature": "String-\u003eUrlPath-\u003eUrlPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs2v",
      "description": {
        "fct-descr": "Extract value from JSValue or throw error\n\u003cp\u003eThe DSL provides a function for most ReviewBoard JSObject members\n that directly returns the value of the member. The function name is equivalent\n to the name of the member element, for example values of a response:\n\u003c/p\u003e\u003cpre\u003e { \"stat\": \"fail\", \n   \"err\": {\n     \"msg\": \"You are not logged in\", \n     \"code\": 103\n   }\n }\n\u003c/pre\u003e\u003cp\u003emay be accessed as following:\n\u003c/p\u003e\u003cpre\u003e (msg . err) response\n -- returns 'You are not logged in' :: String\n\u003c/pre\u003e\u003cpre\u003e (code . err) response\n -- returns 103 :: Integer\n\u003c/pre\u003e\u003cp\u003eIf the entry name represented by the function does not exist,\n an error is thrown.\n\u003c/p\u003e\u003cp\u003eThe current function list is build by screen scraping ReviewBoard\n source code, so it's likely that some elements are missing. \n The missing function can be added using \u003ctt\u003e\u003ca\u003emkrb\u003c/a\u003e\u003c/tt\u003e function. \n Please drop me an email if you find one and I will include \n this in the next version.\n\u003c/p\u003e\u003cp\u003eThis approach for handling responses may change if I find a way\n to generate the DSL methods directly from ReviewBoard code.\n\u003c/p\u003e",
        "fct-module": "ReviewBoard.Response",
        "fct-package": "ReviewBoard",
        "fct-signature": "JSValue -\u003e a",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js2v",
        "fct-type": "unknown",
        "title": "3Ajs2v"
      },
      "index": {
        "description": "Extract value from JSValue or throw error The DSL provides function for most ReviewBoard JSObject members that directly returns the value of the member The function name is equivalent to the name of the member element for example values of response stat fail err msg You are not logged in code may be accessed as following msg err response returns You are not logged in String code err response returns Integer If the entry name represented by the function does not exist an error is thrown The current function list is build by screen scraping ReviewBoard source code so it likely that some elements are missing The missing function can be added using mkrb function Please drop me an email if you find one and will include this in the next version This approach for handling responses may change if find way to generate the DSL methods directly from ReviewBoard code",
        "hierarchy": "ReviewBoard Response",
        "module": "ReviewBoard.Response",
        "name": "3Ajs2v",
        "normalized": "JSValue-\u003ea",
        "package": "ReviewBoard",
        "partial": "Ajs",
        "signature": "JSValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs4name",
      "description": {
        "fct-descr": "Get value for name from a JSObject or Nothing\n if JSValue is not a JSObject\n",
        "fct-module": "ReviewBoard.Response",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e JSValue -\u003e Maybe JSValue",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js4name",
        "fct-type": "unknown",
        "title": "3Ajs4name"
      },
      "index": {
        "description": "Get value for name from JSObject or Nothing if JSValue is not JSObject",
        "hierarchy": "ReviewBoard Response",
        "module": "ReviewBoard.Response",
        "name": "3Ajs4name",
        "normalized": "String-\u003eJSValue-\u003eMaybe JSValue",
        "package": "ReviewBoard",
        "partial": "Ajs",
        "signature": "String-\u003eJSValue-\u003eMaybe JSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs4path",
      "description": {
        "fct-descr": "Get JSValue for name path, for example\n for JSON object '{ \"obj1\" : { \"str\" : \"test\" } }'\n js4path [\"obj1\", \"str\"] returns Just test\n",
        "fct-module": "ReviewBoard.Response",
        "fct-package": "ReviewBoard",
        "fct-signature": "[String] -\u003e JSValue -\u003e Maybe JSValue",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js4path",
        "fct-type": "unknown",
        "title": "3Ajs4path"
      },
      "index": {
        "description": "Get JSValue for name path for example for JSON object obj1 str test js4path obj1 str returns Just test",
        "hierarchy": "ReviewBoard Response",
        "module": "ReviewBoard.Response",
        "name": "3Ajs4path",
        "normalized": "[String]-\u003eJSValue-\u003eMaybe JSValue",
        "package": "ReviewBoard",
        "partial": "Ajs",
        "signature": "[String]-\u003eJSValue-\u003eMaybe JSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Ajs4spath",
      "description": {
        "fct-descr": "Get JSValue for string path of the form\n \u003ctt\u003ereviewrequests.5.delete\u003c/tt\u003e. Dots inside a name\n are not supported.\n",
        "fct-module": "ReviewBoard.Response",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e JSValue -\u003e Maybe JSValue",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#js4spath",
        "fct-type": "unknown",
        "title": "3Ajs4spath"
      },
      "index": {
        "description": "Get JSValue for string path of the form reviewrequests.5.delete Dots inside name are not supported",
        "hierarchy": "ReviewBoard Response",
        "module": "ReviewBoard.Response",
        "name": "3Ajs4spath",
        "normalized": "String-\u003eJSValue-\u003eMaybe JSValue",
        "package": "ReviewBoard",
        "partial": "Ajs",
        "signature": "String-\u003eJSValue-\u003eMaybe JSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReviewBoard/docs/ReviewBoard-Response.html#v:3Amkrb",
      "description": {
        "fct-descr": "Constructor for DSL functions\n",
        "fct-module": "ReviewBoard.Response",
        "fct-package": "ReviewBoard",
        "fct-signature": "String -\u003e JSValue -\u003e a",
        "fct-source": "http://hackage.haskell.org/package/ReviewBoard/docs/src/ReviewBoard-Response.html#mkrb",
        "fct-type": "unknown",
        "title": "3Amkrb"
      },
      "index": {
        "description": "Constructor for DSL functions",
        "hierarchy": "ReviewBoard Response",
        "module": "ReviewBoard.Response",
        "name": "3Amkrb",
        "normalized": "String-\u003eJSValue-\u003ea",
        "package": "ReviewBoard",
        "partial": "Amkrb",
        "signature": "String-\u003eJSValue-\u003ea"
      }
    }
  }
]