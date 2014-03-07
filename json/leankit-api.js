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
        "word": "leankit-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "Api",
          "package": "leankit-api",
          "source": "src/Leankit-Api.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "Api",
          "package": "leankit-api",
          "partial": "Api",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "Credentials",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Credentials.html#Credentials",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "Credentials",
          "package": "leankit-api",
          "partial": "Credentials",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#t:Credentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "Credentials",
          "package": "leankit-api",
          "signature": "Credentials String String String",
          "source": "src/Leankit-Types-Credentials.html#Credentials",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "Credentials",
          "package": "leankit-api",
          "partial": "Credentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:Credentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getArchive",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO [LaneLayout]",
          "source": "src/Leankit-Api.html#getArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getArchive",
          "normalized": "Credentials-\u003eBoardID-\u003eIO[LaneLayout]",
          "package": "leankit-api",
          "partial": "Archive",
          "signature": "Credentials-\u003eBoardID-\u003eIO[LaneLayout]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getArchiveEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Either String [LaneLayout])",
          "source": "src/Leankit-Api.html#getArchiveEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getArchiveEither",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Either String[LaneLayout])",
          "package": "leankit-api",
          "partial": "Archive Either",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Either String[LaneLayout])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getArchiveEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getArchiveMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Maybe [LaneLayout])",
          "source": "src/Leankit-Api.html#getArchiveMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getArchiveMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Maybe[LaneLayout])",
          "package": "leankit-api",
          "partial": "Archive Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Maybe[LaneLayout])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getArchiveMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBackLog",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO [Lane]",
          "source": "src/Leankit-Api.html#getBackLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBackLog",
          "normalized": "Credentials-\u003eBoardID-\u003eIO[Lane]",
          "package": "leankit-api",
          "partial": "Back Log",
          "signature": "Credentials-\u003eBoardID-\u003eIO[Lane]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBackLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBackLogEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Either String [Lane])",
          "source": "src/Leankit-Api.html#getBackLogEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBackLogEither",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Either String[Lane])",
          "package": "leankit-api",
          "partial": "Back Log Either",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Either String[Lane])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBackLogEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBackLogMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Maybe [Lane])",
          "source": "src/Leankit-Api.html#getBackLogMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBackLogMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Maybe[Lane])",
          "package": "leankit-api",
          "partial": "Back Log Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Maybe[Lane])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBackLogMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoard",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO Board",
          "source": "src/Leankit-Api.html#getBoard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoard",
          "normalized": "Credentials-\u003eBoardID-\u003eIO Board",
          "package": "leankit-api",
          "partial": "Board",
          "signature": "Credentials-\u003eBoardID-\u003eIO Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Either String Board)",
          "source": "src/Leankit-Api.html#getBoardEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardEither",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Either String Board)",
          "package": "leankit-api",
          "partial": "Board Either",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Either String Board)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardHistorySince",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e Int -\u003e IO [BoardHistoryItem]",
          "source": "src/Leankit-Api.html#getBoardHistorySince",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardHistorySince",
          "normalized": "Credentials-\u003eBoardID-\u003eInt-\u003eIO[BoardHistoryItem]",
          "package": "leankit-api",
          "partial": "Board History Since",
          "signature": "Credentials-\u003eBoardID-\u003eInt-\u003eIO[BoardHistoryItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardHistorySince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardHistorySinceEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e Int -\u003e IO (Either String [BoardHistoryItem])",
          "source": "src/Leankit-Api.html#getBoardHistorySinceEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardHistorySinceEither",
          "normalized": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Either String[BoardHistoryItem])",
          "package": "leankit-api",
          "partial": "Board History Since Either",
          "signature": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Either String[BoardHistoryItem])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardHistorySinceEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardHistorySinceMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e Int -\u003e IO (Maybe [BoardHistoryItem])",
          "source": "src/Leankit-Api.html#getBoardHistorySinceMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardHistorySinceMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Maybe[BoardHistoryItem])",
          "package": "leankit-api",
          "partial": "Board History Since Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Maybe[BoardHistoryItem])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardHistorySinceMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardIdentifiers",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO BoardIdentifierSet",
          "source": "src/Leankit-Api.html#getBoardIdentifiers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardIdentifiers",
          "normalized": "Credentials-\u003eBoardID-\u003eIO BoardIdentifierSet",
          "package": "leankit-api",
          "partial": "Board Identifiers",
          "signature": "Credentials-\u003eBoardID-\u003eIO BoardIdentifierSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardIdentifiersEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Either String BoardIdentifierSet)",
          "source": "src/Leankit-Api.html#getBoardIdentifiersEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardIdentifiersEither",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Either String BoardIdentifierSet)",
          "package": "leankit-api",
          "partial": "Board Identifiers Either",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Either String BoardIdentifierSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardIdentifiersEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardIdentifiersMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Maybe BoardIdentifierSet)",
          "source": "src/Leankit-Api.html#getBoardIdentifiersMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardIdentifiersMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Maybe BoardIdentifierSet)",
          "package": "leankit-api",
          "partial": "Board Identifiers Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Maybe BoardIdentifierSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardIdentifiersMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e IO (Maybe Board)",
          "source": "src/Leankit-Api.html#getBoardMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eIO(Maybe Board)",
          "package": "leankit-api",
          "partial": "Board Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eIO(Maybe Board)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoards",
          "package": "leankit-api",
          "signature": "Credentials -\u003e IO [BoardShort]",
          "source": "src/Leankit-Api.html#getBoards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoards",
          "normalized": "Credentials-\u003eIO[BoardShort]",
          "package": "leankit-api",
          "partial": "Boards",
          "signature": "Credentials-\u003eIO[BoardShort]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardsEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e IO (Either String [BoardShort])",
          "source": "src/Leankit-Api.html#getBoardsEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardsEither",
          "normalized": "Credentials-\u003eIO(Either String[BoardShort])",
          "package": "leankit-api",
          "partial": "Boards Either",
          "signature": "Credentials-\u003eIO(Either String[BoardShort])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardsEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getBoardsMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e IO (Maybe [BoardShort])",
          "source": "src/Leankit-Api.html#getBoardsMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getBoardsMaybe",
          "normalized": "Credentials-\u003eIO(Maybe[BoardShort])",
          "package": "leankit-api",
          "partial": "Boards Maybe",
          "signature": "Credentials-\u003eIO(Maybe[BoardShort])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getBoardsMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCard",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO Card",
          "source": "src/Leankit-Api.html#getCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCard",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO Card",
          "package": "leankit-api",
          "partial": "Card",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardByExternalId",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e String -\u003e IO Card",
          "source": "src/Leankit-Api.html#getCardByExternalId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardByExternalId",
          "normalized": "Credentials-\u003eBoardID-\u003eString-\u003eIO Card",
          "package": "leankit-api",
          "partial": "Card By External Id",
          "signature": "Credentials-\u003eBoardID-\u003eString-\u003eIO Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardByExternalId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardByExternalIdEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e String -\u003e IO (Either String Card)",
          "source": "src/Leankit-Api.html#getCardByExternalIdEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardByExternalIdEither",
          "normalized": "Credentials-\u003eBoardID-\u003eString-\u003eIO(Either String Card)",
          "package": "leankit-api",
          "partial": "Card By External Id Either",
          "signature": "Credentials-\u003eBoardID-\u003eString-\u003eIO(Either String Card)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardByExternalIdEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardByExternalIdMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e String -\u003e IO (Maybe Card)",
          "source": "src/Leankit-Api.html#getCardByExternalIdMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardByExternalIdMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eString-\u003eIO(Maybe Card)",
          "package": "leankit-api",
          "partial": "Card By External Id Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eString-\u003eIO(Maybe Card)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardByExternalIdMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardComments",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO [CardComment]",
          "source": "src/Leankit-Api.html#getCardComments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardComments",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO[CardComment]",
          "package": "leankit-api",
          "partial": "Card Comments",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO[CardComment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardCommentsEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO (Either String [CardComment])",
          "source": "src/Leankit-Api.html#getCardCommentsEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardCommentsEither",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Either String[CardComment])",
          "package": "leankit-api",
          "partial": "Card Comments Either",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Either String[CardComment])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardCommentsEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardCommentsMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO (Maybe [CardComment])",
          "source": "src/Leankit-Api.html#getCardCommentsMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardCommentsMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Maybe[CardComment])",
          "package": "leankit-api",
          "partial": "Card Comments Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Maybe[CardComment])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardCommentsMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO (Either String Card)",
          "source": "src/Leankit-Api.html#getCardEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardEither",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Either String Card)",
          "package": "leankit-api",
          "partial": "Card Either",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Either String Card)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardHistory",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO [CardHistoryItem]",
          "source": "src/Leankit-Api.html#getCardHistory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardHistory",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO[CardHistoryItem]",
          "package": "leankit-api",
          "partial": "Card History",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO[CardHistoryItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardHistoryEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO (Either String [CardHistoryItem])",
          "source": "src/Leankit-Api.html#getCardHistoryEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardHistoryEither",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Either String[CardHistoryItem])",
          "package": "leankit-api",
          "partial": "Card History Either",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Either String[CardHistoryItem])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardHistoryEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardHistoryMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO (Maybe [CardHistoryItem])",
          "source": "src/Leankit-Api.html#getCardHistoryMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardHistoryMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Maybe[CardHistoryItem])",
          "package": "leankit-api",
          "partial": "Card History Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Maybe[CardHistoryItem])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardHistoryMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getCardMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e CardID -\u003e IO (Maybe Card)",
          "source": "src/Leankit-Api.html#getCardMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getCardMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Maybe Card)",
          "package": "leankit-api",
          "partial": "Card Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eCardID-\u003eIO(Maybe Card)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getCardMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getNewerIfExists",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e Int -\u003e IO (Maybe Board)",
          "source": "src/Leankit-Api.html#getNewerIfExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getNewerIfExists",
          "normalized": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Maybe Board)",
          "package": "leankit-api",
          "partial": "Newer If Exists",
          "signature": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Maybe Board)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getNewerIfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getNewerIfExistsEither",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e Int -\u003e IO (Either String Board)",
          "source": "src/Leankit-Api.html#getNewerIfExistsEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getNewerIfExistsEither",
          "normalized": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Either String Board)",
          "package": "leankit-api",
          "partial": "Newer If Exists Either",
          "signature": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Either String Board)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getNewerIfExistsEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Api",
          "name": "getNewerIfExistsMaybe",
          "package": "leankit-api",
          "signature": "Credentials -\u003e BoardID -\u003e Int -\u003e IO (Maybe Board)",
          "source": "src/Leankit-Api.html#getNewerIfExistsMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Api",
          "module": "Leankit.Api",
          "name": "getNewerIfExistsMaybe",
          "normalized": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Maybe Board)",
          "package": "leankit-api",
          "partial": "Newer If Exists Maybe",
          "signature": "Credentials-\u003eBoardID-\u003eInt-\u003eIO(Maybe Board)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Api.html#v:getNewerIfExistsMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "AssignedUser",
          "package": "leankit-api",
          "source": "src/Leankit-Types-AssignedUser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "AssignedUser",
          "package": "leankit-api",
          "partial": "Assigned User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "AssignedUser",
          "package": "leankit-api",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "AssignedUser",
          "package": "leankit-api",
          "partial": "Assigned User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#t:AssignedUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "AssignedUser",
          "package": "leankit-api",
          "signature": "AssignedUser",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "AssignedUser",
          "package": "leankit-api",
          "partial": "Assigned User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:AssignedUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "_assignedUserId",
          "package": "leankit-api",
          "signature": "Maybe UserID",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "_assignedUserId",
          "package": "leankit-api",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:_assignedUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "_assignedUserName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "_assignedUserName",
          "package": "leankit-api",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:_assignedUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "_emailAddress",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "_emailAddress",
          "package": "leankit-api",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:_emailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "_fullName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "_fullName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:_fullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:_gravatarLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "_id",
          "package": "leankit-api",
          "signature": "UserID",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.AssignedUser",
          "name": "_smallGravatarLink",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-AssignedUser.html#AssignedUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types AssignedUser",
          "module": "Leankit.Types.AssignedUser",
          "name": "_smallGravatarLink",
          "package": "leankit-api",
          "partial": "Gravatar Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-AssignedUser.html#v:_smallGravatarLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "Board",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Board.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "Board",
          "package": "leankit-api",
          "partial": "Board",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "Board",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "Board",
          "package": "leankit-api",
          "partial": "Board",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#t:Board"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "Board",
          "package": "leankit-api",
          "signature": "Board",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "Board",
          "package": "leankit-api",
          "partial": "Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:Board"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_active",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_active",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_active"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_archiveTopLevelLaneId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_archiveTopLevelLaneId",
          "package": "leankit-api",
          "partial": "Top Level Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_archiveTopLevelLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_boardUsers",
          "package": "leankit-api",
          "signature": "[User]",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_boardUsers",
          "normalized": "[User]",
          "package": "leankit-api",
          "partial": "Users",
          "signature": "[User]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_boardUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_cardColorField",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_cardColorField",
          "package": "leankit-api",
          "partial": "Color Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_cardColorField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_classOfServiceEnabled",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_classOfServiceEnabled",
          "package": "leankit-api",
          "partial": "Of Service Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_classOfServiceEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_currentUserRole",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_currentUserRole",
          "package": "leankit-api",
          "partial": "User Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_currentUserRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_description",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_description",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_excludeCompletedAndArchiveViolations",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_excludeCompletedAndArchiveViolations",
          "package": "leankit-api",
          "partial": "Completed And Archive Violations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_excludeCompletedAndArchiveViolations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_format",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_format",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_isCardIdEnabled",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_isCardIdEnabled",
          "package": "leankit-api",
          "partial": "Card Id Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_isCardIdEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_isHyperlinkEnabled",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_isHyperlinkEnabled",
          "package": "leankit-api",
          "partial": "Hyperlink Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_isHyperlinkEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_isPrefixEnabled",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_isPrefixEnabled",
          "package": "leankit-api",
          "partial": "Prefix Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_isPrefixEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_isPrefixIncludedInHyperlink",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_isPrefixIncludedInHyperlink",
          "package": "leankit-api",
          "partial": "Prefix Included In Hyperlink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_isPrefixIncludedInHyperlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_isPrivate",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_isPrivate",
          "package": "leankit-api",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_isPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_isWelcome",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_isWelcome",
          "package": "leankit-api",
          "partial": "Welcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_isWelcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_lanes",
          "package": "leankit-api",
          "signature": "[Lane]",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_lanes",
          "normalized": "[Lane]",
          "package": "leankit-api",
          "signature": "[Lane]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_lanes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_maxFileSize",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_maxFileSize",
          "package": "leankit-api",
          "partial": "File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_maxFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_organizationId",
          "package": "leankit-api",
          "signature": "Maybe OrganizationID",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_organizationId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_organizationId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_prefix",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_prefix",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_title",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_title",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_topLevelLaneIds",
          "package": "leankit-api",
          "signature": "[LaneID]",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_topLevelLaneIds",
          "normalized": "[LaneID]",
          "package": "leankit-api",
          "partial": "Level Lane Ids",
          "signature": "[LaneID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_topLevelLaneIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Board",
          "name": "_version",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Board.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Board",
          "module": "Leankit.Types.Board",
          "name": "_version",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Board.html#v:_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "BoardHistoryItem",
          "package": "leankit-api",
          "source": "src/Leankit-Types-BoardHistoryItem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "BoardHistoryItem",
          "package": "leankit-api",
          "partial": "Board History Item",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "BoardHistoryItem",
          "package": "leankit-api",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "BoardHistoryItem",
          "package": "leankit-api",
          "partial": "Board History Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#t:BoardHistoryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "BoardHistoryItem",
          "package": "leankit-api",
          "signature": "BoardHistoryItem",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "BoardHistoryItem",
          "package": "leankit-api",
          "partial": "Board History Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:BoardHistoryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_assignedUserId",
          "package": "leankit-api",
          "signature": "Maybe UserID",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_assignedUserId",
          "package": "leankit-api",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_assignedUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_blockedComment",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_blockedComment",
          "package": "leankit-api",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_blockedComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_cardId",
          "package": "leankit-api",
          "signature": "Maybe CardID",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_cardId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_cardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_commentText",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_commentText",
          "package": "leankit-api",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_commentText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_eventDateTime",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_eventDateTime",
          "package": "leankit-api",
          "partial": "Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_eventDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_eventType",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_eventType",
          "package": "leankit-api",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_eventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_fromLaneId",
          "package": "leankit-api",
          "signature": "Maybe LaneID",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_fromLaneId",
          "package": "leankit-api",
          "partial": "Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_fromLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_isBlocked",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_isBlocked",
          "package": "leankit-api",
          "partial": "Blocked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_isBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_isUnassigning",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_isUnassigning",
          "package": "leankit-api",
          "partial": "Unassigning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_isUnassigning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_message",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_message",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_requiresBoardRefresh",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_requiresBoardRefresh",
          "package": "leankit-api",
          "partial": "Board Refresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_requiresBoardRefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_toLaneId",
          "package": "leankit-api",
          "signature": "Maybe LaneID",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_toLaneId",
          "package": "leankit-api",
          "partial": "Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_toLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_userId",
          "package": "leankit-api",
          "signature": "Maybe UserID",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_userId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_userId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_wipOverrideComment",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_wipOverrideComment",
          "package": "leankit-api",
          "partial": "Override Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_wipOverrideComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_wipOverrideLane",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_wipOverrideLane",
          "package": "leankit-api",
          "partial": "Override Lane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_wipOverrideLane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_wipOverrideUser",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-BoardHistoryItem.html#BoardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardHistoryItem",
          "module": "Leankit.Types.BoardHistoryItem",
          "name": "_wipOverrideUser",
          "package": "leankit-api",
          "partial": "Override User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardHistoryItem.html#v:_wipOverrideUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifierSet",
          "package": "leankit-api",
          "source": "src/Leankit-Types-BoardIdentifierSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifierSet",
          "package": "leankit-api",
          "partial": "Board Identifier Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifier",
          "package": "leankit-api",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifier",
          "package": "leankit-api",
          "partial": "Board Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#t:BoardIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifierSet",
          "package": "leankit-api",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifierSet",
          "package": "leankit-api",
          "partial": "Board Identifier Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#t:BoardIdentifierSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifier",
          "package": "leankit-api",
          "signature": "BoardIdentifier",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifier",
          "package": "leankit-api",
          "partial": "Board Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:BoardIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifierSet",
          "package": "leankit-api",
          "signature": "BoardIdentifierSet",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "BoardIdentifierSet",
          "package": "leankit-api",
          "partial": "Board Identifier Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:BoardIdentifierSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_boardId",
          "package": "leankit-api",
          "signature": "BoardID",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_boardId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_boardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_boardUsers",
          "package": "leankit-api",
          "signature": "[BoardIdentifier UserID]",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_boardUsers",
          "normalized": "[BoardIdentifier UserID]",
          "package": "leankit-api",
          "partial": "Users",
          "signature": "[BoardIdentifier UserID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_boardUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_cardTypes",
          "package": "leankit-api",
          "signature": "[BoardIdentifier CardTypeID]",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_cardTypes",
          "normalized": "[BoardIdentifier CardTypeID]",
          "package": "leankit-api",
          "partial": "Types",
          "signature": "[BoardIdentifier CardTypeID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_cardTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_classesOfService",
          "package": "leankit-api",
          "signature": "[BoardIdentifier ClassOfServiceID]",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_classesOfService",
          "normalized": "[BoardIdentifier ClassOfServiceID]",
          "package": "leankit-api",
          "partial": "Of Service",
          "signature": "[BoardIdentifier ClassOfServiceID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_classesOfService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_id",
          "package": "leankit-api",
          "signature": "a",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_laneClassType",
          "package": "leankit-api",
          "signature": "[BoardIdentifier LaneClassTypeID]",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_laneClassType",
          "normalized": "[BoardIdentifier LaneClassTypeID]",
          "package": "leankit-api",
          "partial": "Class Type",
          "signature": "[BoardIdentifier LaneClassTypeID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_laneClassType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_laneType",
          "package": "leankit-api",
          "signature": "[BoardIdentifier LaneTypeID]",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_laneType",
          "normalized": "[BoardIdentifier LaneTypeID]",
          "package": "leankit-api",
          "partial": "Type",
          "signature": "[BoardIdentifier LaneTypeID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_laneType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_lanes",
          "package": "leankit-api",
          "signature": "[LaneShort]",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_lanes",
          "normalized": "[LaneShort]",
          "package": "leankit-api",
          "signature": "[LaneShort]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_lanes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_name",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_name",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_priorities",
          "package": "leankit-api",
          "signature": "[BoardIdentifier PriorityID]",
          "source": "src/Leankit-Types-BoardIdentifierSet.html#BoardIdentifierSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardIdentifierSet",
          "module": "Leankit.Types.BoardIdentifierSet",
          "name": "_priorities",
          "normalized": "[BoardIdentifier PriorityID]",
          "package": "leankit-api",
          "signature": "[BoardIdentifier PriorityID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardIdentifierSet.html#v:_priorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "BoardShort",
          "package": "leankit-api",
          "source": "src/Leankit-Types-BoardShort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "BoardShort",
          "package": "leankit-api",
          "partial": "Board Short",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "BoardShort",
          "package": "leankit-api",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "BoardShort",
          "package": "leankit-api",
          "partial": "Board Short",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#t:BoardShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "BoardShort",
          "package": "leankit-api",
          "signature": "BoardShort",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "BoardShort",
          "package": "leankit-api",
          "partial": "Board Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:BoardShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_creationDate",
          "package": "leankit-api",
          "signature": "Maybe Date",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_creationDate",
          "package": "leankit-api",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_creationDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_description",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_description",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_drillThroughBoards",
          "package": "leankit-api",
          "signature": "[BoardShort]",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_drillThroughBoards",
          "normalized": "[BoardShort]",
          "package": "leankit-api",
          "partial": "Through Boards",
          "signature": "[BoardShort]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_drillThroughBoards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_id",
          "package": "leankit-api",
          "signature": "BoardID",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_isArchived",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_isArchived",
          "package": "leankit-api",
          "partial": "Archived",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_isArchived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_isBreakoutBoard",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_isBreakoutBoard",
          "package": "leankit-api",
          "partial": "Breakout Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_isBreakoutBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_isPrivate",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_isPrivate",
          "package": "leankit-api",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_isPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_parentId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_parentId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_parentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.BoardShort",
          "name": "_title",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-BoardShort.html#BoardShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types BoardShort",
          "module": "Leankit.Types.BoardShort",
          "name": "_title",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-BoardShort.html#v:_title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "Card",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Card.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "Card",
          "package": "leankit-api",
          "partial": "Card",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "Card",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "Card",
          "package": "leankit-api",
          "partial": "Card",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#t:Card"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "Tags",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Card.html#Tags",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "Tags",
          "package": "leankit-api",
          "partial": "Tags",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#t:Tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "Card",
          "package": "leankit-api",
          "signature": "Card",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "Card",
          "package": "leankit-api",
          "partial": "Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:Card"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "Tags",
          "package": "leankit-api",
          "signature": "Tags [String]",
          "source": "src/Leankit-Types-Card.html#Tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "Tags",
          "normalized": "Tags[String]",
          "package": "leankit-api",
          "partial": "Tags",
          "signature": "Tags[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:Tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_active",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_active",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_active"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_assignedUserIds",
          "package": "leankit-api",
          "signature": "[UserID]",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_assignedUserIds",
          "normalized": "[UserID]",
          "package": "leankit-api",
          "partial": "User Ids",
          "signature": "[UserID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_assignedUserIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_assignedUsers",
          "package": "leankit-api",
          "signature": "[AssignedUser]",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_assignedUsers",
          "normalized": "[AssignedUser]",
          "package": "leankit-api",
          "partial": "Users",
          "signature": "[AssignedUser]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_assignedUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_attachmentsCount",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_attachmentsCount",
          "package": "leankit-api",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_attachmentsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_blockReason",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_blockReason",
          "package": "leankit-api",
          "partial": "Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_blockReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_blockStateChangeDate",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_blockStateChangeDate",
          "package": "leankit-api",
          "partial": "State Change Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_blockStateChangeDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_cardContexts",
          "package": "leankit-api",
          "signature": "Maybe [CardContext]",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_cardContexts",
          "normalized": "Maybe[CardContext]",
          "package": "leankit-api",
          "partial": "Contexts",
          "signature": "Maybe[CardContext]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_cardContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceColorHex",
          "package": "leankit-api",
          "signature": "Maybe Color",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceColorHex",
          "package": "leankit-api",
          "partial": "Of Service Color Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_classOfServiceColorHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceIconPath",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceIconPath",
          "package": "leankit-api",
          "partial": "Of Service Icon Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_classOfServiceIconPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceId",
          "package": "leankit-api",
          "partial": "Of Service Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_classOfServiceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceTitle",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_classOfServiceTitle",
          "package": "leankit-api",
          "partial": "Of Service Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_classOfServiceTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_color",
          "package": "leankit-api",
          "signature": "Maybe Color",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_color",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_commentsCount",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_commentsCount",
          "package": "leankit-api",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_commentsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_countOfOldCards",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_countOfOldCards",
          "package": "leankit-api",
          "partial": "Of Old Cards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_countOfOldCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_currentContext",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_currentContext",
          "package": "leankit-api",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_currentContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_currentTaskBoardId",
          "package": "leankit-api",
          "signature": "Maybe BoardID",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_currentTaskBoardId",
          "package": "leankit-api",
          "partial": "Task Board Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_currentTaskBoardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_dateArchived",
          "package": "leankit-api",
          "signature": "Maybe Date",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_dateArchived",
          "package": "leankit-api",
          "partial": "Archived",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_dateArchived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_description",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_description",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_drillThroughBoardId",
          "package": "leankit-api",
          "signature": "Maybe BoardID",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_drillThroughBoardId",
          "package": "leankit-api",
          "partial": "Through Board Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_drillThroughBoardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_drillThroughCompletionPercent",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_drillThroughCompletionPercent",
          "package": "leankit-api",
          "partial": "Through Completion Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_drillThroughCompletionPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_drillThroughProgressComplete",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_drillThroughProgressComplete",
          "package": "leankit-api",
          "partial": "Through Progress Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_drillThroughProgressComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_drillThroughProgressTotal",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_drillThroughProgressTotal",
          "package": "leankit-api",
          "partial": "Through Progress Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_drillThroughProgressTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_dueDate",
          "package": "leankit-api",
          "signature": "Maybe Date",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_dueDate",
          "package": "leankit-api",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_dueDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_externalCardID",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_externalCardID",
          "package": "leankit-api",
          "partial": "Card ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_externalCardID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_externalSystemName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_externalSystemName",
          "package": "leankit-api",
          "partial": "System Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_externalSystemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_externalSystemUrl",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_externalSystemUrl",
          "package": "leankit-api",
          "partial": "System Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_externalSystemUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_gravatarLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_hasDrillThroughBoard",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_hasDrillThroughBoard",
          "package": "leankit-api",
          "partial": "Drill Through Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_hasDrillThroughBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_id",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_index",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_index",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_isBlocked",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_isBlocked",
          "package": "leankit-api",
          "partial": "Blocked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_isBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_laneId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_laneId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_laneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_lastActivity",
          "package": "leankit-api",
          "signature": "Maybe DateTime",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_lastActivity",
          "package": "leankit-api",
          "partial": "Activity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_lastActivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_lastAttachment",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_lastAttachment",
          "package": "leankit-api",
          "partial": "Attachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_lastAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_lastComment",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_lastComment",
          "package": "leankit-api",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_lastComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_lastMove",
          "package": "leankit-api",
          "signature": "Maybe DateTime",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_lastMove",
          "package": "leankit-api",
          "partial": "Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_lastMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_parentCardId",
          "package": "leankit-api",
          "signature": "Maybe CardID",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_parentCardId",
          "package": "leankit-api",
          "partial": "Card Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_parentCardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_priority",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_priority",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_priorityText",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_priorityText",
          "package": "leankit-api",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_priorityText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_size",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_size",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_smallGravatarLink",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_smallGravatarLink",
          "package": "leankit-api",
          "partial": "Gravatar Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_smallGravatarLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_systemType",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_systemType",
          "package": "leankit-api",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_systemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_tags",
          "package": "leankit-api",
          "signature": "Tags",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_tags",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_taskBoardCompletionPercent",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_taskBoardCompletionPercent",
          "package": "leankit-api",
          "partial": "Board Completion Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_taskBoardCompletionPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_taskBoardTotalCards",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_taskBoardTotalCards",
          "package": "leankit-api",
          "partial": "Board Total Cards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_taskBoardTotalCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_taskBoardTotalSize",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_taskBoardTotalSize",
          "package": "leankit-api",
          "partial": "Board Total Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_taskBoardTotalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_title",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_title",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_typeColorHex",
          "package": "leankit-api",
          "signature": "Maybe Color",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_typeColorHex",
          "package": "leankit-api",
          "partial": "Color Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_typeColorHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_typeIconPath",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_typeIconPath",
          "package": "leankit-api",
          "partial": "Icon Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_typeIconPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_typeId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_typeId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_typeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_typeName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_typeName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_typeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Card",
          "name": "_version",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Card.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Card",
          "module": "Leankit.Types.Card",
          "name": "_version",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Card.html#v:_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "CardComment",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardComment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "CardComment",
          "package": "leankit-api",
          "partial": "Card Comment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "CardComment",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "CardComment",
          "package": "leankit-api",
          "partial": "Card Comment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#t:CardComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "CardComment",
          "package": "leankit-api",
          "signature": "CardComment",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "CardComment",
          "package": "leankit-api",
          "partial": "Card Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:CardComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "_editable",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "_editable",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:_editable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "_id",
          "package": "leankit-api",
          "signature": "CardCommentID",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "_postDate",
          "package": "leankit-api",
          "signature": "Maybe DateTime",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "_postDate",
          "package": "leankit-api",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:_postDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "_postedByFullName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "_postedByFullName",
          "package": "leankit-api",
          "partial": "By Full Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:_postedByFullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "_postedByGravatarLink",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "_postedByGravatarLink",
          "package": "leankit-api",
          "partial": "By Gravatar Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:_postedByGravatarLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "_postedById",
          "package": "leankit-api",
          "signature": "Maybe UserID",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "_postedById",
          "package": "leankit-api",
          "partial": "By Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:_postedById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardComment",
          "name": "_text",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardComment.html#CardComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardComment",
          "module": "Leankit.Types.CardComment",
          "name": "_text",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardComment.html#v:_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "CardContext",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardContext.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "CardContext",
          "package": "leankit-api",
          "partial": "Card Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "CardContext",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "CardContext",
          "package": "leankit-api",
          "partial": "Card Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#t:CardContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "CardContext",
          "package": "leankit-api",
          "signature": "CardContext",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "CardContext",
          "package": "leankit-api",
          "partial": "Card Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:CardContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_completedCardCount",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_completedCardCount",
          "package": "leankit-api",
          "partial": "Card Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_completedCardCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_completedCardSize",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_completedCardSize",
          "package": "leankit-api",
          "partial": "Card Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_completedCardSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_id",
          "package": "leankit-api",
          "signature": "CardContextID",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_name",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_name",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_progressPercentage",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_progressPercentage",
          "package": "leankit-api",
          "partial": "Percentage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_progressPercentage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_taskBoardId",
          "package": "leankit-api",
          "signature": "Maybe BoardID",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_taskBoardId",
          "package": "leankit-api",
          "partial": "Board Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_taskBoardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_totalCards",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_totalCards",
          "package": "leankit-api",
          "partial": "Cards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_totalCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardContext",
          "name": "_totalSize",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-CardContext.html#CardContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardContext",
          "module": "Leankit.Types.CardContext",
          "name": "_totalSize",
          "package": "leankit-api",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardContext.html#v:_totalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryItem",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardHistoryItem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryItem",
          "package": "leankit-api",
          "partial": "Card History Item",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardFieldChange",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardFieldChange",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardFieldChange",
          "package": "leankit-api",
          "partial": "Card Field Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#t:CardFieldChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryDetails",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryDetails",
          "package": "leankit-api",
          "partial": "Card History Details",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#t:CardHistoryDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryItem",
          "package": "leankit-api",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryItem",
          "package": "leankit-api",
          "partial": "Card History Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#t:CardHistoryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardCreateEventDetails",
          "package": "leankit-api",
          "signature": "CardCreateEventDetails",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardCreateEventDetails",
          "package": "leankit-api",
          "partial": "Card Create Event Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:CardCreateEventDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardFieldChange",
          "package": "leankit-api",
          "signature": "CardFieldChange",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardFieldChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardFieldChange",
          "package": "leankit-api",
          "partial": "Card Field Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:CardFieldChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardFieldChangedEventDetails",
          "package": "leankit-api",
          "signature": "CardFieldChangedEventDetails",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardFieldChangedEventDetails",
          "package": "leankit-api",
          "partial": "Card Field Changed Event Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:CardFieldChangedEventDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryItem",
          "package": "leankit-api",
          "signature": "CardHistoryItem",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardHistoryItem",
          "package": "leankit-api",
          "partial": "Card History Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:CardHistoryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardMoveEventDetails",
          "package": "leankit-api",
          "signature": "CardMoveEventDetails",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "CardMoveEventDetails",
          "package": "leankit-api",
          "partial": "Card Move Event Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:CardMoveEventDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "UnknownEventDetails",
          "package": "leankit-api",
          "signature": "UnknownEventDetails",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "UnknownEventDetails",
          "package": "leankit-api",
          "partial": "Unknown Event Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:UnknownEventDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "UserAssignmentEventDetails",
          "package": "leankit-api",
          "signature": "UserAssignmentEventDetails",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "UserAssignmentEventDetails",
          "package": "leankit-api",
          "partial": "User Assignment Event Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:UserAssignmentEventDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_assignedUserEmailAddress",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_assignedUserEmailAddress",
          "package": "leankit-api",
          "partial": "User Email Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_assignedUserEmailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_assignedUserFullName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_assignedUserFullName",
          "package": "leankit-api",
          "partial": "User Full Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_assignedUserFullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_assignedUserId",
          "package": "leankit-api",
          "signature": "UserID",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_assignedUserId",
          "package": "leankit-api",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_assignedUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_cardId",
          "package": "leankit-api",
          "signature": "CardID",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_cardId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_cardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_cardTitle",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_cardTitle",
          "package": "leankit-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_cardTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_changes",
          "package": "leankit-api",
          "signature": "[CardFieldChange]",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_changes",
          "normalized": "[CardFieldChange]",
          "package": "leankit-api",
          "signature": "[CardFieldChange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_changes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_dateTime",
          "package": "leankit-api",
          "signature": "Maybe DateTime",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_dateTime",
          "package": "leankit-api",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_dateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_details",
          "package": "leankit-api",
          "signature": "CardHistoryDetails",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_details",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_details"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_fieldName",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardFieldChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_fieldName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_fromLaneId",
          "package": "leankit-api",
          "signature": "LaneID",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_fromLaneId",
          "package": "leankit-api",
          "partial": "Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_fromLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_fromLaneTitle",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_fromLaneTitle",
          "package": "leankit-api",
          "partial": "Lane Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_fromLaneTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_gravatarLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_lastDate",
          "package": "leankit-api",
          "signature": "Maybe Integer",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_lastDate",
          "package": "leankit-api",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_lastDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_newDueDate",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardFieldChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_newDueDate",
          "package": "leankit-api",
          "partial": "Due Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_newDueDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_newValue",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardFieldChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_newValue",
          "package": "leankit-api",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_newValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_oldDueDate",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardFieldChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_oldDueDate",
          "package": "leankit-api",
          "partial": "Due Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_oldDueDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_oldValue",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardFieldChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_oldValue",
          "package": "leankit-api",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_oldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_overrideType",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_overrideType",
          "package": "leankit-api",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_overrideType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_taskboardContainingCardId",
          "package": "leankit-api",
          "signature": "Maybe CardID",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_taskboardContainingCardId",
          "package": "leankit-api",
          "partial": "Containing Card Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_taskboardContainingCardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_taskboardContainingCardTitle",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_taskboardContainingCardTitle",
          "package": "leankit-api",
          "partial": "Containing Card Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_taskboardContainingCardTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_timeDifference",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_timeDifference",
          "package": "leankit-api",
          "partial": "Difference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_timeDifference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_toLaneId",
          "package": "leankit-api",
          "signature": "Maybe LaneID",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_toLaneId",
          "package": "leankit-api",
          "partial": "Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_toLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_toLaneTitle",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_toLaneTitle",
          "package": "leankit-api",
          "partial": "Lane Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_toLaneTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_type",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_type",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_userFullName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_userFullName",
          "package": "leankit-api",
          "partial": "Full Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_userFullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_userName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-CardHistoryItem.html#CardHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types CardHistoryItem",
          "module": "Leankit.Types.CardHistoryItem",
          "name": "_userName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-CardHistoryItem.html#v:_userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "Common",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "Common",
          "package": "leankit-api",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "BoardID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#BoardID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "BoardID",
          "package": "leankit-api",
          "partial": "Board ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:BoardID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardCommentID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#CardCommentID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardCommentID",
          "package": "leankit-api",
          "partial": "Card Comment ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:CardCommentID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardContextID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#CardContextID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardContextID",
          "package": "leankit-api",
          "partial": "Card Context ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:CardContextID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#CardID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardID",
          "package": "leankit-api",
          "partial": "Card ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:CardID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardTypeID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#CardTypeID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardTypeID",
          "package": "leankit-api",
          "partial": "Card Type ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:CardTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "ClassOfServiceID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#ClassOfServiceID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "ClassOfServiceID",
          "package": "leankit-api",
          "partial": "Class Of Service ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:ClassOfServiceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "Color",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#Color",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "Color",
          "package": "leankit-api",
          "partial": "Color",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "Date",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#Date",
          "type": "type"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "Date",
          "package": "leankit-api",
          "partial": "Date",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "DateTime",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#DateTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "DateTime",
          "package": "leankit-api",
          "partial": "Date Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:DateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "LaneClassTypeID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#LaneClassTypeID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "LaneClassTypeID",
          "package": "leankit-api",
          "partial": "Lane Class Type ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:LaneClassTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "LaneID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#LaneID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "LaneID",
          "package": "leankit-api",
          "partial": "Lane ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:LaneID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "LaneTypeID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#LaneTypeID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "LaneTypeID",
          "package": "leankit-api",
          "partial": "Lane Type ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:LaneTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "OrganizationID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#OrganizationID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "OrganizationID",
          "package": "leankit-api",
          "partial": "Organization ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:OrganizationID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "PriorityID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#PriorityID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "PriorityID",
          "package": "leankit-api",
          "partial": "Priority ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:PriorityID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "UserID",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Common.html#UserID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "UserID",
          "package": "leankit-api",
          "partial": "User ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#t:UserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "BoardID",
          "package": "leankit-api",
          "signature": "BoardID Int",
          "source": "src/Leankit-Types-Common.html#BoardID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "BoardID",
          "package": "leankit-api",
          "partial": "Board ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:BoardID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardCommentID",
          "package": "leankit-api",
          "signature": "CardCommentID Int",
          "source": "src/Leankit-Types-Common.html#CardCommentID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardCommentID",
          "package": "leankit-api",
          "partial": "Card Comment ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:CardCommentID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardContextID",
          "package": "leankit-api",
          "signature": "CardContextID Int",
          "source": "src/Leankit-Types-Common.html#CardContextID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardContextID",
          "package": "leankit-api",
          "partial": "Card Context ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:CardContextID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardID",
          "package": "leankit-api",
          "signature": "CardID Int",
          "source": "src/Leankit-Types-Common.html#CardID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardID",
          "package": "leankit-api",
          "partial": "Card ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:CardID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "CardTypeID",
          "package": "leankit-api",
          "signature": "CardTypeID Int",
          "source": "src/Leankit-Types-Common.html#CardTypeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "CardTypeID",
          "package": "leankit-api",
          "partial": "Card Type ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:CardTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "ClassOfServiceID",
          "package": "leankit-api",
          "signature": "ClassOfServiceID Int",
          "source": "src/Leankit-Types-Common.html#ClassOfServiceID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "ClassOfServiceID",
          "package": "leankit-api",
          "partial": "Class Of Service ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:ClassOfServiceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "Color",
          "package": "leankit-api",
          "signature": "Color (Colour Double)",
          "source": "src/Leankit-Types-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "Color",
          "package": "leankit-api",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "LaneClassTypeID",
          "package": "leankit-api",
          "signature": "LaneClassTypeID Int",
          "source": "src/Leankit-Types-Common.html#LaneClassTypeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "LaneClassTypeID",
          "package": "leankit-api",
          "partial": "Lane Class Type ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:LaneClassTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "LaneID",
          "package": "leankit-api",
          "signature": "LaneID Int",
          "source": "src/Leankit-Types-Common.html#LaneID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "LaneID",
          "package": "leankit-api",
          "partial": "Lane ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:LaneID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "LaneTypeID",
          "package": "leankit-api",
          "signature": "LaneTypeID Int",
          "source": "src/Leankit-Types-Common.html#LaneTypeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "LaneTypeID",
          "package": "leankit-api",
          "partial": "Lane Type ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:LaneTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "OrganizationID",
          "package": "leankit-api",
          "signature": "OrganizationID Int",
          "source": "src/Leankit-Types-Common.html#OrganizationID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "OrganizationID",
          "package": "leankit-api",
          "partial": "Organization ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:OrganizationID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "PriorityID",
          "package": "leankit-api",
          "signature": "PriorityID Int",
          "source": "src/Leankit-Types-Common.html#PriorityID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "PriorityID",
          "package": "leankit-api",
          "partial": "Priority ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:PriorityID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Common",
          "name": "UserID",
          "package": "leankit-api",
          "signature": "UserID Int",
          "source": "src/Leankit-Types-Common.html#UserID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Common",
          "module": "Leankit.Types.Common",
          "name": "UserID",
          "package": "leankit-api",
          "partial": "User ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Common.html#v:UserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Credentials",
          "name": "Credentials",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Credentials.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types Credentials",
          "module": "Leankit.Types.Credentials",
          "name": "Credentials",
          "package": "leankit-api",
          "partial": "Credentials",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Credentials.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Credentials",
          "name": "Credentials",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Credentials.html#Credentials",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types Credentials",
          "module": "Leankit.Types.Credentials",
          "name": "Credentials",
          "package": "leankit-api",
          "partial": "Credentials",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Credentials.html#t:Credentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Credentials",
          "name": "Credentials",
          "package": "leankit-api",
          "signature": "Credentials",
          "source": "src/Leankit-Types-Credentials.html#Credentials",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Credentials",
          "module": "Leankit.Types.Credentials",
          "name": "Credentials",
          "package": "leankit-api",
          "partial": "Credentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Credentials.html#v:Credentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Credentials",
          "name": "_company",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types-Credentials.html#Credentials",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Credentials",
          "module": "Leankit.Types.Credentials",
          "name": "_company",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Credentials.html#v:_company"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Credentials",
          "name": "_password",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types-Credentials.html#Credentials",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Credentials",
          "module": "Leankit.Types.Credentials",
          "name": "_password",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Credentials.html#v:_password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Credentials",
          "name": "_username",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types-Credentials.html#Credentials",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Credentials",
          "module": "Leankit.Types.Credentials",
          "name": "_username",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Credentials.html#v:_username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "Lane",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Lane.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "Lane",
          "package": "leankit-api",
          "partial": "Lane",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "Lane",
          "package": "leankit-api",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "Lane",
          "package": "leankit-api",
          "partial": "Lane",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#t:Lane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "Lane",
          "package": "leankit-api",
          "signature": "Lane",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "Lane",
          "package": "leankit-api",
          "partial": "Lane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:Lane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_active",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_active",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_active"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_activityId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_activityId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_activityId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_activityName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_activityName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_activityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_cardContextId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_cardContextId",
          "package": "leankit-api",
          "partial": "Context Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_cardContextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_cardLimit",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_cardLimit",
          "package": "leankit-api",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_cardLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_cards",
          "package": "leankit-api",
          "signature": "[Card]",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_cards",
          "normalized": "[Card]",
          "package": "leankit-api",
          "signature": "[Card]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_cards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_childLaneIds",
          "package": "leankit-api",
          "signature": "[LaneID]",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_childLaneIds",
          "normalized": "[LaneID]",
          "package": "leankit-api",
          "partial": "Lane Ids",
          "signature": "[LaneID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_childLaneIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_classType",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_classType",
          "package": "leankit-api",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_classType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_description",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_description",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_id",
          "package": "leankit-api",
          "signature": "LaneID",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_index",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_index",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_isDrillthroughDoneLane",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_isDrillthroughDoneLane",
          "package": "leankit-api",
          "partial": "Drillthrough Done Lane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_isDrillthroughDoneLane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_laneState",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_laneState",
          "package": "leankit-api",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_laneState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_orientation",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_orientation",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_parentLaneId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_parentLaneId",
          "package": "leankit-api",
          "partial": "Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_parentLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_siblingLaneIds",
          "package": "leankit-api",
          "signature": "[LaneID]",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_siblingLaneIds",
          "normalized": "[LaneID]",
          "package": "leankit-api",
          "partial": "Lane Ids",
          "signature": "[LaneID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_siblingLaneIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_taskBoardId",
          "package": "leankit-api",
          "signature": "Maybe BoardID",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_taskBoardId",
          "package": "leankit-api",
          "partial": "Board Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_taskBoardId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_title",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_title",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_type",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_type",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.Lane",
          "name": "_width",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-Lane.html#Lane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types Lane",
          "module": "Leankit.Types.Lane",
          "name": "_width",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-Lane.html#v:_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneLayout",
          "name": "LaneLayout",
          "package": "leankit-api",
          "source": "src/Leankit-Types-LaneLayout.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types LaneLayout",
          "module": "Leankit.Types.LaneLayout",
          "name": "LaneLayout",
          "package": "leankit-api",
          "partial": "Lane Layout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneLayout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneLayout",
          "name": "LaneLayout",
          "package": "leankit-api",
          "source": "src/Leankit-Types-LaneLayout.html#LaneLayout",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types LaneLayout",
          "module": "Leankit.Types.LaneLayout",
          "name": "LaneLayout",
          "package": "leankit-api",
          "partial": "Lane Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneLayout.html#t:LaneLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneLayout",
          "name": "LaneLayout",
          "package": "leankit-api",
          "signature": "LaneLayout",
          "source": "src/Leankit-Types-LaneLayout.html#LaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneLayout",
          "module": "Leankit.Types.LaneLayout",
          "name": "LaneLayout",
          "package": "leankit-api",
          "partial": "Lane Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneLayout.html#v:LaneLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneLayout",
          "name": "_childLanes",
          "package": "leankit-api",
          "signature": "[Lane]",
          "source": "src/Leankit-Types-LaneLayout.html#LaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneLayout",
          "module": "Leankit.Types.LaneLayout",
          "name": "_childLanes",
          "normalized": "[Lane]",
          "package": "leankit-api",
          "partial": "Lanes",
          "signature": "[Lane]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneLayout.html#v:_childLanes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneLayout",
          "name": "_lane",
          "package": "leankit-api",
          "signature": "Maybe Lane",
          "source": "src/Leankit-Types-LaneLayout.html#LaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneLayout",
          "module": "Leankit.Types.LaneLayout",
          "name": "_lane",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneLayout.html#v:_lane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneLayout",
          "name": "_parentLane",
          "package": "leankit-api",
          "signature": "Maybe Lane",
          "source": "src/Leankit-Types-LaneLayout.html#LaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneLayout",
          "module": "Leankit.Types.LaneLayout",
          "name": "_parentLane",
          "package": "leankit-api",
          "partial": "Lane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneLayout.html#v:_parentLane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "LaneShort",
          "package": "leankit-api",
          "source": "src/Leankit-Types-LaneShort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "LaneShort",
          "package": "leankit-api",
          "partial": "Lane Short",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "LaneShort",
          "package": "leankit-api",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "LaneShort",
          "package": "leankit-api",
          "partial": "Lane Short",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#t:LaneShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "LaneShort",
          "package": "leankit-api",
          "signature": "LaneShort",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "LaneShort",
          "package": "leankit-api",
          "partial": "Lane Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:LaneShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_activityId",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_activityId",
          "package": "leankit-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_activityId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_cardLimit",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_cardLimit",
          "package": "leankit-api",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_cardLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_classType",
          "package": "leankit-api",
          "signature": "LaneClassTypeID",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_classType",
          "package": "leankit-api",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_classType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_id",
          "package": "leankit-api",
          "signature": "LaneID",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_index",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_index",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_laneClassType",
          "package": "leankit-api",
          "signature": "LaneClassTypeID",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_laneClassType",
          "package": "leankit-api",
          "partial": "Class Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_laneClassType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_name",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_name",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_parentLaneId",
          "package": "leankit-api",
          "signature": "Maybe LaneID",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_parentLaneId",
          "package": "leankit-api",
          "partial": "Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_parentLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_topLevelParentLaneId",
          "package": "leankit-api",
          "signature": "Maybe LaneID",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_topLevelParentLaneId",
          "package": "leankit-api",
          "partial": "Level Parent Lane Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_topLevelParentLaneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.LaneShort",
          "name": "_type",
          "package": "leankit-api",
          "signature": "LaneTypeID",
          "source": "src/Leankit-Types-LaneShort.html#LaneShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types LaneShort",
          "module": "Leankit.Types.LaneShort",
          "name": "_type",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-LaneShort.html#v:_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.TH",
          "name": "TH",
          "package": "leankit-api",
          "source": "src/Leankit-Types-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types TH",
          "module": "Leankit.Types.TH",
          "name": "TH",
          "package": "leankit-api",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.TH",
          "name": "key2field",
          "package": "leankit-api",
          "signature": "String -\u003e String",
          "source": "src/Leankit-Types-TH.html#key2field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types TH",
          "module": "Leankit.Types.TH",
          "name": "key2field",
          "normalized": "String-\u003eString",
          "package": "leankit-api",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-TH.html#v:key2field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.TH",
          "name": "parseOptions",
          "package": "leankit-api",
          "signature": "Options",
          "source": "src/Leankit-Types-TH.html#parseOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types TH",
          "module": "Leankit.Types.TH",
          "name": "parseOptions",
          "package": "leankit-api",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-TH.html#v:parseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "User",
          "package": "leankit-api",
          "source": "src/Leankit-Types-User.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "User",
          "package": "leankit-api",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "User",
          "package": "leankit-api",
          "source": "src/Leankit-Types-User.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "User",
          "package": "leankit-api",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "User",
          "package": "leankit-api",
          "signature": "User",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "User",
          "package": "leankit-api",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_dateFormat",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_dateFormat",
          "package": "leankit-api",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_dateFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_emailAddress",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_emailAddress",
          "package": "leankit-api",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_emailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_enabled",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_enabled",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_enabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_fullName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_fullName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_fullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_gravatarFeed",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_gravatarFeed",
          "package": "leankit-api",
          "partial": "Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_gravatarFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_gravatarLink",
          "package": "leankit-api",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_gravatarLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_id",
          "package": "leankit-api",
          "signature": "UserID",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_id",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_isAccountOwner",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_isAccountOwner",
          "package": "leankit-api",
          "partial": "Account Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_isAccountOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_isDeleted",
          "package": "leankit-api",
          "signature": "Maybe Bool",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_isDeleted",
          "package": "leankit-api",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_isDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_role",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_role",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_roleName",
          "package": "leankit-api",
          "signature": "Maybe String",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_roleName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_roleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_userName",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_userName",
          "package": "leankit-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types.User",
          "name": "_wip",
          "package": "leankit-api",
          "signature": "Maybe Int",
          "source": "src/Leankit-Types-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types User",
          "module": "Leankit.Types.User",
          "name": "_wip",
          "package": "leankit-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types-User.html#v:_wip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "Types",
          "package": "leankit-api",
          "source": "src/Leankit-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "Types",
          "package": "leankit-api",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "Reply",
          "package": "leankit-api",
          "source": "src/Leankit-Types.html#Reply",
          "type": "data"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "Reply",
          "package": "leankit-api",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "Reply",
          "package": "leankit-api",
          "signature": "Reply",
          "source": "src/Leankit-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "Reply",
          "package": "leankit-api",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#v:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "_replyCode",
          "package": "leankit-api",
          "signature": "Int",
          "source": "src/Leankit-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "_replyCode",
          "package": "leankit-api",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#v:_replyCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "_replyData",
          "package": "leankit-api",
          "signature": "[Maybe datatype]",
          "source": "src/Leankit-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "_replyData",
          "normalized": "[Maybe a]",
          "package": "leankit-api",
          "partial": "Data",
          "signature": "[Maybe datatype]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#v:_replyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "_replyText",
          "package": "leankit-api",
          "signature": "String",
          "source": "src/Leankit-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "_replyText",
          "package": "leankit-api",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#v:_replyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "parseReply",
          "package": "leankit-api",
          "signature": "ByteString -\u003e Either String (Reply a)",
          "source": "src/Leankit-Types.html#parseReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "parseReply",
          "normalized": "ByteString-\u003eEither String(Reply a)",
          "package": "leankit-api",
          "partial": "Reply",
          "signature": "ByteString-\u003eEither String(Reply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#v:parseReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Leankit.Types",
          "name": "parseReplyData",
          "package": "leankit-api",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Leankit-Types.html#parseReplyData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Leankit Types",
          "module": "Leankit.Types",
          "name": "parseReplyData",
          "normalized": "ByteString-\u003eEither String a",
          "package": "leankit-api",
          "partial": "Reply Data",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/leankit-api/docs/Leankit-Types.html#v:parseReplyData"
      }
    }
  ]
]