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
        "word": "googleplus"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Monad",
          "name": "Monad",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "Monad",
          "package": "googleplus",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents authentication data with GooglePlus. Currently supports an OAuth\n  token or an API key\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusAuth",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusAuth",
          "type": "data"
        },
        "index": {
          "description": "Represents authentication data with GooglePlus Currently supports an OAuth token or an API key",
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusAuth",
          "package": "googleplus",
          "partial": "Google Plus Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#t:GooglePlusAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironment passed into requests when they are executed within a GooglePlusM\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusEnv",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusEnv",
          "type": "data"
        },
        "index": {
          "description": "Environment passed into requests when they are executed within GooglePlusM",
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusEnv",
          "package": "googleplus",
          "partial": "Google Plus Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#t:GooglePlusEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIO wrapper used to compose/sequence Google+ API actions. See Web.GooglePlus docs for examples\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusM",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusM",
          "type": "newtype"
        },
        "index": {
          "description": "IO wrapper used to compose sequence Google API actions See Web.GooglePlus docs for examples",
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusM",
          "package": "googleplus",
          "partial": "Google Plus",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#t:GooglePlusM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication using an API key\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Monad",
          "name": "APIKey",
          "package": "googleplus",
          "signature": "APIKey Text",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusAuth",
          "type": "function"
        },
        "index": {
          "description": "Authentication using an API key",
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "APIKey",
          "package": "googleplus",
          "partial": "APIKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#v:APIKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusEnv",
          "package": "googleplus",
          "signature": "GooglePlusEnv",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusEnv",
          "package": "googleplus",
          "partial": "Google Plus Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#v:GooglePlusEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusM",
          "package": "googleplus",
          "signature": "GooglePlusM",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "GooglePlusM",
          "package": "googleplus",
          "partial": "Google Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#v:GooglePlusM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthenticate using a token obtianed via OAuth V2. Currently no way in the library to obtain refresh tokens\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Monad",
          "name": "OAuthToken",
          "package": "googleplus",
          "signature": "OAuthToken Text",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusAuth",
          "type": "function"
        },
        "index": {
          "description": "Authenticate using token obtianed via OAuth V2 Currently no way in the library to obtain refresh tokens",
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "OAuthToken",
          "package": "googleplus",
          "partial": "OAuth Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#v:OAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Monad",
          "name": "gpAuth",
          "package": "googleplus",
          "signature": "GooglePlusAuth",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "gpAuth",
          "package": "googleplus",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#v:gpAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Monad",
          "name": "unGooglePlusM",
          "package": "googleplus",
          "signature": "ReaderT GooglePlusEnv IO a",
          "source": "src/Web-GooglePlus-Monad.html#GooglePlusM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Monad",
          "module": "Web.GooglePlus.Monad",
          "name": "unGooglePlusM",
          "package": "googleplus",
          "partial": "Google Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Monad.html#v:unGooglePlusM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Types",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Types",
          "package": "googleplus",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes who has access to a given Activity resource\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Access",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Access",
          "type": "data"
        },
        "index": {
          "description": "Describes who has access to given Activity resource",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Access",
          "package": "googleplus",
          "partial": "Access",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessEntry that describes the type of access someone may have to an Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "AccessItem",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#AccessItem",
          "type": "data"
        },
        "index": {
          "description": "AccessEntry that describes the type of access someone may have to an Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "AccessItem",
          "package": "googleplus",
          "partial": "Access Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:AccessItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of entity which may access an Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "AccessItemType",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#AccessItemType",
          "type": "data"
        },
        "index": {
          "description": "Type of entity which may access an Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "AccessItemType",
          "package": "googleplus",
          "partial": "Access Item Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:AccessItemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivity on Google+, such as a post\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Activity",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "data"
        },
        "index": {
          "description": "Activity on Google such as post",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Activity",
          "package": "googleplus",
          "partial": "Activity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Activity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feed of user activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityFeed",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#ActivityFeed",
          "type": "data"
        },
        "index": {
          "description": "feed of user activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityFeed",
          "package": "googleplus",
          "partial": "Activity Feed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:ActivityFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject to which an activity pertains\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityObject",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "data"
        },
        "index": {
          "description": "Object to which an activity pertains",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityObject",
          "package": "googleplus",
          "partial": "Activity Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:ActivityObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of objects that can be associated with an Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityObjectType",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#ActivityObjectType",
          "type": "data"
        },
        "index": {
          "description": "Types of objects that can be associated with an Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityObjectType",
          "package": "googleplus",
          "partial": "Activity Object Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:ActivityObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA person who may be associated with an Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Actor",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Actor",
          "type": "data"
        },
        "index": {
          "description": "person who may be associated with an Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Actor",
          "package": "googleplus",
          "partial": "Actor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Actor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedia attached to an Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Attachment",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "data"
        },
        "index": {
          "description": "Media attached to an Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Attachment",
          "package": "googleplus",
          "partial": "Attachment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Attachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of Activity Attachment\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "AttachmentType",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#AttachmentType",
          "type": "data"
        },
        "index": {
          "description": "Type of Activity Attachment",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "AttachmentType",
          "package": "googleplus",
          "partial": "Attachment Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:AttachmentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivity comment on Google+\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Comment",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "data"
        },
        "index": {
          "description": "Activity comment on Google",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Comment",
          "package": "googleplus",
          "partial": "Comment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "CommentObject",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#CommentObject",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "CommentObject",
          "package": "googleplus",
          "partial": "Comment Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:CommentObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmail address belonging to the User\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Email",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Email",
          "type": "data"
        },
        "index": {
          "description": "Email address belonging to the User",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Email",
          "package": "googleplus",
          "partial": "Email",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext/types of Emails that a Person can have\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "EmailType",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#EmailType",
          "type": "data"
        },
        "index": {
          "description": "Context types of Emails that Person can have",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "EmailType",
          "package": "googleplus",
          "partial": "Email Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:EmailType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbeddable link for an attachment if it is a video\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Embed",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Embed",
          "type": "data"
        },
        "index": {
          "description": "Embeddable link for an attachment if it is video",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Embed",
          "package": "googleplus",
          "partial": "Embed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerson's gender\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Gender",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Gender",
          "type": "data"
        },
        "index": {
          "description": "Person gender",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Gender",
          "package": "googleplus",
          "partial": "Gender",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeolocation based on longitude and latitude\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Geocode",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Geocode",
          "type": "data"
        },
        "index": {
          "description": "Geolocation based on longitude and latitude",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Geocode",
          "package": "googleplus",
          "partial": "Geocode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Geocode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "ID",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#ID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ID",
          "package": "googleplus",
          "partial": "ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage resource on Google+\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Image",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Image",
          "type": "data"
        },
        "index": {
          "description": "Image resource on Google",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Image",
          "package": "googleplus",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "InReplyTo",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#InReplyTo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "InReplyTo",
          "package": "googleplus",
          "partial": "In Reply To",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:InReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrganization to which a Persion currently or previously may belong\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Organization",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "data"
        },
        "index": {
          "description": "Organization to which Persion currently or previously may belong",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Organization",
          "package": "googleplus",
          "partial": "Organization",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Organization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe capacity in which the Perosn participated in an Organization\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "OrganizationType",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#OrganizationType",
          "type": "data"
        },
        "index": {
          "description": "The capacity in which the Perosn participated in an Organization",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "OrganizationType",
          "package": "googleplus",
          "partial": "Organization Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:OrganizationType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA member of Google+\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Person",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "data"
        },
        "index": {
          "description": "member of Google",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Person",
          "package": "googleplus",
          "partial": "Person",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier used for finding a Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PersonID",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#PersonID",
          "type": "data"
        },
        "index": {
          "description": "Identifier used for finding Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonID",
          "package": "googleplus",
          "partial": "Person ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:PersonID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull, real name of a Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PersonName",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "data"
        },
        "index": {
          "description": "Full real name of Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonName",
          "package": "googleplus",
          "partial": "Person Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:PersonName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Person search result with limited informaiton. The full person's profile must be retrieved to get the rest\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PersonSearchResult",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#PersonSearchResult",
          "type": "data"
        },
        "index": {
          "description": "Person search result with limited informaiton The full person profile must be retrieved to get the rest",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonSearchResult",
          "package": "googleplus",
          "partial": "Person Search Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:PersonSearchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal URLS that the Person has published\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PersonURL",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#PersonURL",
          "type": "data"
        },
        "index": {
          "description": "External URLS that the Person has published",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonURL",
          "package": "googleplus",
          "partial": "Person URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:PersonURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext/types of URLS that a Person can have\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PersonURLType",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#PersonURLType",
          "type": "data"
        },
        "index": {
          "description": "Context types of URLS that Person can have",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonURLType",
          "package": "googleplus",
          "partial": "Person URLType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:PersonURLType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA physical location where a Person resides/resided\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Place",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Place",
          "type": "data"
        },
        "index": {
          "description": "physical location where Person resides resided",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Place",
          "package": "googleplus",
          "partial": "Place",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Place"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eService provider who originally published an Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Provider",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Provider",
          "type": "data"
        },
        "index": {
          "description": "Service provider who originally published an Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Provider",
          "package": "googleplus",
          "partial": "Provider",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Provider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelationship status of a Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "RelationshipStatus",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "data"
        },
        "index": {
          "description": "Relationship status of Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "RelationshipStatus",
          "package": "googleplus",
          "partial": "Relationship Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:RelationshipStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of activity being performed\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Verb",
          "package": "googleplus",
          "source": "src/Web-GooglePlus-Types.html#Verb",
          "type": "data"
        },
        "index": {
          "description": "Type of activity being performed",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Verb",
          "package": "googleplus",
          "partial": "Verb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#t:Verb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Access",
          "package": "googleplus",
          "signature": "Access",
          "source": "src/Web-GooglePlus-Types.html#Access",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Access",
          "package": "googleplus",
          "partial": "Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "AccessItem",
          "package": "googleplus",
          "signature": "AccessItem",
          "source": "src/Web-GooglePlus-Types.html#AccessItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "AccessItem",
          "package": "googleplus",
          "partial": "Access Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:AccessItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Activity",
          "package": "googleplus",
          "signature": "Activity",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Activity",
          "package": "googleplus",
          "partial": "Activity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Activity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "ActivityFeed",
          "package": "googleplus",
          "signature": "ActivityFeed",
          "source": "src/Web-GooglePlus-Types.html#ActivityFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityFeed",
          "package": "googleplus",
          "partial": "Activity Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:ActivityFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "ActivityObject",
          "package": "googleplus",
          "signature": "ActivityObject",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ActivityObject",
          "package": "googleplus",
          "partial": "Activity Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:ActivityObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Actor",
          "package": "googleplus",
          "signature": "Actor",
          "source": "src/Web-GooglePlus-Types.html#Actor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Actor",
          "package": "googleplus",
          "partial": "Actor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Actor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn article attachment specified by a link by the poster\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Article",
          "package": "googleplus",
          "signature": "Article",
          "source": "src/Web-GooglePlus-Types.html#AttachmentType",
          "type": "function"
        },
        "index": {
          "description": "An article attachment specified by link by the poster",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Article",
          "package": "googleplus",
          "partial": "Article",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Article"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Attachment",
          "package": "googleplus",
          "signature": "Attachment",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Attachment",
          "package": "googleplus",
          "partial": "Attachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Attachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "BlogURL",
          "package": "googleplus",
          "signature": "BlogURL",
          "source": "src/Web-GooglePlus-Types.html#PersonURLType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "BlogURL",
          "package": "googleplus",
          "partial": "Blog URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:BlogURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck into a location\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Checkin",
          "package": "googleplus",
          "signature": "Checkin",
          "source": "src/Web-GooglePlus-Types.html#Verb",
          "type": "function"
        },
        "index": {
          "description": "Check into location",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Checkin",
          "package": "googleplus",
          "partial": "Checkin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Checkin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "CircleAccess",
          "package": "googleplus",
          "signature": "CircleAccess",
          "source": "src/Web-GooglePlus-Types.html#AccessItemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "CircleAccess",
          "package": "googleplus",
          "partial": "Circle Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:CircleAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Comment",
          "package": "googleplus",
          "signature": "Comment",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Comment",
          "package": "googleplus",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "CommentObject",
          "package": "googleplus",
          "signature": "CommentObject",
          "source": "src/Web-GooglePlus-Types.html#CommentObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "CommentObject",
          "package": "googleplus",
          "partial": "Comment Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:CommentObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Email",
          "package": "googleplus",
          "signature": "Email",
          "source": "src/Web-GooglePlus-Types.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Email",
          "package": "googleplus",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Embed",
          "package": "googleplus",
          "signature": "Embed",
          "source": "src/Web-GooglePlus-Types.html#Embed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Embed",
          "package": "googleplus",
          "partial": "Embed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Engaged",
          "package": "googleplus",
          "signature": "Engaged",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Engaged",
          "package": "googleplus",
          "partial": "Engaged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Engaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess granted to members of the Actor's circles and their circles as well\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "ExtendedCirclesAccess",
          "package": "googleplus",
          "signature": "ExtendedCirclesAccess",
          "source": "src/Web-GooglePlus-Types.html#AccessItemType",
          "type": "function"
        },
        "index": {
          "description": "Access granted to members of the Actor circles and their circles as well",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ExtendedCirclesAccess",
          "package": "googleplus",
          "partial": "Extended Circles Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:ExtendedCirclesAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Female",
          "package": "googleplus",
          "signature": "Female",
          "source": "src/Web-GooglePlus-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Female",
          "package": "googleplus",
          "partial": "Female",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Female"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Geocode",
          "package": "googleplus",
          "signature": "Geocode",
          "source": "src/Web-GooglePlus-Types.html#Geocode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Geocode",
          "package": "googleplus",
          "partial": "Geocode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Geocode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Google+ Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "GooglePlusActivity",
          "package": "googleplus",
          "signature": "GooglePlusActivity",
          "source": "src/Web-GooglePlus-Types.html#ActivityObjectType",
          "type": "function"
        },
        "index": {
          "description": "Google Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "GooglePlusActivity",
          "package": "googleplus",
          "partial": "Google Plus Activity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:GooglePlusActivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "HomeEmail",
          "package": "googleplus",
          "signature": "HomeEmail",
          "source": "src/Web-GooglePlus-Types.html#EmailType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "HomeEmail",
          "package": "googleplus",
          "partial": "Home Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:HomeEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "HomeURL",
          "package": "googleplus",
          "signature": "HomeURL",
          "source": "src/Web-GooglePlus-Types.html#PersonURLType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "HomeURL",
          "package": "googleplus",
          "partial": "Home URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:HomeURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Image",
          "package": "googleplus",
          "signature": "Image",
          "source": "src/Web-GooglePlus-Types.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Image",
          "package": "googleplus",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "InARelationship",
          "package": "googleplus",
          "signature": "InARelationship",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "InARelationship",
          "package": "googleplus",
          "partial": "In ARelationship",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:InARelationship"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "InCivilUnion",
          "package": "googleplus",
          "signature": "InCivilUnion",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "InCivilUnion",
          "package": "googleplus",
          "partial": "In Civil Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:InCivilUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "InDomesticPartnership",
          "package": "googleplus",
          "signature": "InDomesticPartnership",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "InDomesticPartnership",
          "package": "googleplus",
          "partial": "In Domestic Partnership",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:InDomesticPartnership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "InReplyTo",
          "package": "googleplus",
          "signature": "InReplyTo",
          "source": "src/Web-GooglePlus-Types.html#InReplyTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "InReplyTo",
          "package": "googleplus",
          "partial": "In Reply To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:InReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "ItsComplicated",
          "package": "googleplus",
          "signature": "ItsComplicated",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ItsComplicated",
          "package": "googleplus",
          "partial": "Its Complicated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:ItsComplicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is not a documented value, yet I've encountered it in the wild. I have no idea what it means.\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "JsonURL",
          "package": "googleplus",
          "signature": "JsonURL",
          "source": "src/Web-GooglePlus-Types.html#PersonURLType",
          "type": "function"
        },
        "index": {
          "description": "This is not documented value yet ve encountered it in the wild have no idea what it means",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "JsonURL",
          "package": "googleplus",
          "partial": "Json URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:JsonURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Male",
          "package": "googleplus",
          "signature": "Male",
          "source": "src/Web-GooglePlus-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Male",
          "package": "googleplus",
          "partial": "Male",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Male"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Married",
          "package": "googleplus",
          "signature": "Married",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Married",
          "package": "googleplus",
          "partial": "Married",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Married"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe authenticated user\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Me",
          "package": "googleplus",
          "signature": "Me",
          "source": "src/Web-GooglePlus-Types.html#PersonID",
          "type": "function"
        },
        "index": {
          "description": "The authenticated user",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Me",
          "package": "googleplus",
          "partial": "Me",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Me"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess granted to all members of the Actor's circles\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "MyCirclesAccess",
          "package": "googleplus",
          "signature": "MyCirclesAccess",
          "source": "src/Web-GooglePlus-Types.html#AccessItemType",
          "type": "function"
        },
        "index": {
          "description": "Access granted to all members of the Actor circles",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "MyCirclesAccess",
          "package": "googleplus",
          "partial": "My Circles Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:MyCirclesAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTextual content\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Note",
          "package": "googleplus",
          "signature": "Note",
          "source": "src/Web-GooglePlus-Types.html#ActivityObjectType",
          "type": "function"
        },
        "index": {
          "description": "Textual content",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Note",
          "package": "googleplus",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "OpenRelationship",
          "package": "googleplus",
          "signature": "OpenRelationship",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "OpenRelationship",
          "package": "googleplus",
          "partial": "Open Relationship",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:OpenRelationship"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Organization",
          "package": "googleplus",
          "signature": "Organization",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Organization",
          "package": "googleplus",
          "partial": "Organization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Organization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "OtherEmail",
          "package": "googleplus",
          "signature": "OtherEmail",
          "source": "src/Web-GooglePlus-Types.html#EmailType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "OtherEmail",
          "package": "googleplus",
          "partial": "Other Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:OtherEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "OtherGender",
          "package": "googleplus",
          "signature": "OtherGender",
          "source": "src/Web-GooglePlus-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "OtherGender",
          "package": "googleplus",
          "partial": "Other Gender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:OtherGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "OtherURL",
          "package": "googleplus",
          "signature": "OtherURL",
          "source": "src/Web-GooglePlus-Types.html#PersonURLType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "OtherURL",
          "package": "googleplus",
          "partial": "Other URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:OtherURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Person",
          "package": "googleplus",
          "signature": "Person",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Person",
          "package": "googleplus",
          "partial": "Person",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "PersonAccess",
          "package": "googleplus",
          "signature": "PersonAccess",
          "source": "src/Web-GooglePlus-Types.html#AccessItemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonAccess",
          "package": "googleplus",
          "partial": "Person Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:PersonAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID for a specific user\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PersonID",
          "package": "googleplus",
          "signature": "PersonID Text",
          "source": "src/Web-GooglePlus-Types.html#PersonID",
          "type": "function"
        },
        "index": {
          "description": "ID for specific user",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonID",
          "package": "googleplus",
          "partial": "Person ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:PersonID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "PersonName",
          "package": "googleplus",
          "signature": "PersonName",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonName",
          "package": "googleplus",
          "partial": "Person Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:PersonName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "PersonSearchResult",
          "package": "googleplus",
          "signature": "PersonSearchResult",
          "source": "src/Web-GooglePlus-Types.html#PersonSearchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonSearchResult",
          "package": "googleplus",
          "partial": "Person Search Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:PersonSearchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "PersonURL",
          "package": "googleplus",
          "signature": "PersonURL",
          "source": "src/Web-GooglePlus-Types.html#PersonURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PersonURL",
          "package": "googleplus",
          "partial": "Person URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:PersonURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Photo",
          "package": "googleplus",
          "signature": "Photo",
          "source": "src/Web-GooglePlus-Types.html#AttachmentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Photo",
          "package": "googleplus",
          "partial": "Photo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Photo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that occurs in the wild but is not mentioned in the Google+ API docs\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PhotoAlbum",
          "package": "googleplus",
          "signature": "PhotoAlbum",
          "source": "src/Web-GooglePlus-Types.html#AttachmentType",
          "type": "function"
        },
        "index": {
          "description": "type that occurs in the wild but is not mentioned in the Google API docs",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PhotoAlbum",
          "package": "googleplus",
          "partial": "Photo Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:PhotoAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Place",
          "package": "googleplus",
          "signature": "Place",
          "source": "src/Web-GooglePlus-Types.html#Place",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Place",
          "package": "googleplus",
          "partial": "Place",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Place"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublish content to the stream\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Post",
          "package": "googleplus",
          "signature": "Post",
          "source": "src/Web-GooglePlus-Types.html#Verb",
          "type": "function"
        },
        "index": {
          "description": "Publish content to the stream",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Post",
          "package": "googleplus",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "ProfileURL",
          "package": "googleplus",
          "signature": "ProfileURL",
          "source": "src/Web-GooglePlus-Types.html#PersonURLType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "ProfileURL",
          "package": "googleplus",
          "partial": "Profile URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:ProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Provider",
          "package": "googleplus",
          "signature": "Provider",
          "source": "src/Web-GooglePlus-Types.html#Provider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Provider",
          "package": "googleplus",
          "partial": "Provider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Provider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess to anyone on the internet\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "PublicAccess",
          "package": "googleplus",
          "signature": "PublicAccess",
          "source": "src/Web-GooglePlus-Types.html#AccessItemType",
          "type": "function"
        },
        "index": {
          "description": "Access to anyone on the internet",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "PublicAccess",
          "package": "googleplus",
          "partial": "Public Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:PublicAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "School",
          "package": "googleplus",
          "signature": "School",
          "source": "src/Web-GooglePlus-Types.html#OrganizationType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "School",
          "package": "googleplus",
          "partial": "School",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:School"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReshare an activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "Share",
          "package": "googleplus",
          "signature": "Share",
          "source": "src/Web-GooglePlus-Types.html#Verb",
          "type": "function"
        },
        "index": {
          "description": "Reshare an activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Share",
          "package": "googleplus",
          "partial": "Share",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Single",
          "package": "googleplus",
          "signature": "Single",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Single",
          "package": "googleplus",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Video",
          "package": "googleplus",
          "signature": "Video",
          "source": "src/Web-GooglePlus-Types.html#AttachmentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Video",
          "package": "googleplus",
          "partial": "Video",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Video"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Widowed",
          "package": "googleplus",
          "signature": "Widowed",
          "source": "src/Web-GooglePlus-Types.html#RelationshipStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Widowed",
          "package": "googleplus",
          "partial": "Widowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Widowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "Work",
          "package": "googleplus",
          "signature": "Work",
          "source": "src/Web-GooglePlus-Types.html#OrganizationType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "Work",
          "package": "googleplus",
          "partial": "Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:Work"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "WorkEmail",
          "package": "googleplus",
          "signature": "WorkEmail",
          "source": "src/Web-GooglePlus-Types.html#EmailType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "WorkEmail",
          "package": "googleplus",
          "partial": "Work Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:WorkEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "WorkURL",
          "package": "googleplus",
          "signature": "WorkURL",
          "source": "src/Web-GooglePlus-Types.html#PersonURLType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "WorkURL",
          "package": "googleplus",
          "partial": "Work URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:WorkURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the access, suitable for display\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "accessDescription",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Access",
          "type": "function"
        },
        "index": {
          "description": "Description of the access suitable for display",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "accessDescription",
          "package": "googleplus",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:accessDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the entry. Only set when this AccessItem refers to a Person or Circle\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "accessItemId",
          "package": "googleplus",
          "signature": "Maybe ID",
          "source": "src/Web-GooglePlus-Types.html#AccessItem",
          "type": "function"
        },
        "index": {
          "description": "ID of the entry Only set when this AccessItem refers to Person or Circle",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "accessItemId",
          "package": "googleplus",
          "partial": "Item Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:accessItemId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of entity which has access to the associated Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "accessItemType",
          "package": "googleplus",
          "signature": "AccessItemType",
          "source": "src/Web-GooglePlus-Types.html#AccessItem",
          "type": "function"
        },
        "index": {
          "description": "Type of entity which has access to the associated Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "accessItemType",
          "package": "googleplus",
          "partial": "Item Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:accessItemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of access entries\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "accessItems",
          "package": "googleplus",
          "signature": "[AccessItem]",
          "source": "src/Web-GooglePlus-Types.html#Access",
          "type": "function"
        },
        "index": {
          "description": "List of access entries",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "accessItems",
          "normalized": "[AccessItem]",
          "package": "googleplus",
          "partial": "Items",
          "signature": "[AccessItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:accessItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies who has access to this activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityAccess",
          "package": "googleplus",
          "signature": "Access",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Identifies who has access to this activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityAccess",
          "package": "googleplus",
          "partial": "Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe person who performed the Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityActor",
          "package": "googleplus",
          "signature": "Actor",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "The person who performed the Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityActor",
          "package": "googleplus",
          "partial": "Actor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityActor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStreet address where the activity occurred\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityAddress",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Street address where the activity occurred",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityAddress",
          "package": "googleplus",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional content added by the person who shared this activity, applicable only when resharing an activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityAnnotation",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Additional content added by the person who shared this activity applicable only when resharing an activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityAnnotation",
          "package": "googleplus",
          "partial": "Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of original activity if this activity is a crosspost from another system\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityCrosspostSource",
          "package": "googleplus",
          "signature": "Maybe ID",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "ID of original activity if this activity is crosspost from another system",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityCrosspostSource",
          "package": "googleplus",
          "partial": "Crosspost Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityCrosspostSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique ID of the feed\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedId",
          "package": "googleplus",
          "signature": "ID",
          "source": "src/Web-GooglePlus-Types.html#ActivityFeed",
          "type": "function"
        },
        "index": {
          "description": "Unique ID of the feed",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedId",
          "package": "googleplus",
          "partial": "Feed Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityFeedId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivities in the feed (currently limited to first page\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedItems",
          "package": "googleplus",
          "signature": "[Activity]",
          "source": "src/Web-GooglePlus-Types.html#ActivityFeed",
          "type": "function"
        },
        "index": {
          "description": "Activities in the feed currently limited to first page",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedItems",
          "normalized": "[Activity]",
          "package": "googleplus",
          "partial": "Feed Items",
          "signature": "[Activity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityFeedItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of the feed in Google+\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedTitle",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#ActivityFeed",
          "type": "function"
        },
        "index": {
          "description": "Title of the feed in Google",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedTitle",
          "package": "googleplus",
          "partial": "Feed Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityFeedTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime updated\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedUpdated",
          "package": "googleplus",
          "signature": "ZonedTime",
          "source": "src/Web-GooglePlus-Types.html#ActivityFeed",
          "type": "function"
        },
        "index": {
          "description": "Time updated",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityFeedUpdated",
          "package": "googleplus",
          "partial": "Feed Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityFeedUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere the activity occurred (Latitude/Longitude)\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityGeocode",
          "package": "googleplus",
          "signature": "Maybe Geocode",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Where the activity occurred Latitude Longitude",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityGeocode",
          "package": "googleplus",
          "partial": "Geocode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityGeocode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivity ID\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityId",
          "package": "googleplus",
          "signature": "ID",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Activity ID",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityId",
          "package": "googleplus",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe object of the Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObject",
          "package": "googleplus",
          "signature": "ActivityObject",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "The object of the Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObject",
          "package": "googleplus",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the object is another Activity, this refers to the actor for that Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectActor",
          "package": "googleplus",
          "signature": "Maybe Actor",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "If the object is another Activity this refers to the actor for that Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectActor",
          "package": "googleplus",
          "partial": "Object Actor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectActor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedia objects attached to this activity object\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectAttachments",
          "package": "googleplus",
          "signature": "[Attachment]",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "Media objects attached to this activity object",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectAttachments",
          "normalized": "[Attachment]",
          "package": "googleplus",
          "partial": "Object Attachments",
          "signature": "[Attachment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectAttachments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnipped of text if the object is an article\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectContent",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "Snipped of text if the object is an article",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectContent",
          "package": "googleplus",
          "partial": "Object Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the media object's resource\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectId",
          "package": "googleplus",
          "signature": "Maybe ID",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "ID of the media object resource",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectId",
          "package": "googleplus",
          "partial": "Object Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent text as provided by the author without any HTML formatting\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectOriginalContent",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "Content text as provided by the author without any HTML formatting",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectOriginalContent",
          "package": "googleplus",
          "partial": "Object Original Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectOriginalContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of people giving the Activity a +1\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectPlusOners",
          "package": "googleplus",
          "signature": "Integer",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "Number of people giving the Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectPlusOners",
          "package": "googleplus",
          "partial": "Object Plus Oners",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectPlusOners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of replies to the Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectReplies",
          "package": "googleplus",
          "signature": "Integer",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "Number of replies to the Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectReplies",
          "package": "googleplus",
          "partial": "Object Replies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectReplies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of people resharing the Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectResharers",
          "package": "googleplus",
          "signature": "Integer",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "Number of people resharing the Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectResharers",
          "package": "googleplus",
          "partial": "Object Resharers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectResharers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of Object\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectType",
          "package": "googleplus",
          "signature": "ActivityObjectType",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "Type of Object",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectType",
          "package": "googleplus",
          "partial": "Object Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL pointing to the linked resource\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectURL",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#ActivityObject",
          "type": "function"
        },
        "index": {
          "description": "URL pointing to the linked resource",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityObjectURL",
          "package": "googleplus",
          "partial": "Object URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityObjectURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the place where the activity occurred\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityPlaceId",
          "package": "googleplus",
          "signature": "Maybe ID",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "ID of the place where the activity occurred",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityPlaceId",
          "package": "googleplus",
          "partial": "Place Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityPlaceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "activityPlaceName",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityPlaceName",
          "package": "googleplus",
          "partial": "Place Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityPlaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeaning undocumented\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityPlaceholder",
          "package": "googleplus",
          "signature": "Maybe Bool",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Meaning undocumented",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityPlaceholder",
          "package": "googleplus",
          "partial": "Placeholder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityPlaceholder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eService provider initially providing the activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityProvider",
          "package": "googleplus",
          "signature": "Provider",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Service provider initially providing the activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityProvider",
          "package": "googleplus",
          "partial": "Provider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate originally published\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityPublished",
          "package": "googleplus",
          "signature": "ZonedTime",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Date originally published",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityPublished",
          "package": "googleplus",
          "partial": "Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityPublished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadius of the region where the activity ocurred, centered at the Geocode\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityRadius",
          "package": "googleplus",
          "signature": "Maybe Integer",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Radius of the region where the activity ocurred centered at the Geocode",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityRadius",
          "package": "googleplus",
          "partial": "Radius",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of the activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityTitle",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Title of the activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityTitle",
          "package": "googleplus",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to view the Activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityURL",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "URL to view the Activity",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityURL",
          "package": "googleplus",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate updated\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityUpdated",
          "package": "googleplus",
          "signature": "ZonedTime",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Date updated",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityUpdated",
          "package": "googleplus",
          "partial": "Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates what action was performed\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "activityVerb",
          "package": "googleplus",
          "signature": "Verb",
          "source": "src/Web-GooglePlus-Types.html#Activity",
          "type": "function"
        },
        "index": {
          "description": "Indicates what action was performed",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "activityVerb",
          "package": "googleplus",
          "partial": "Verb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:activityVerb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe public display name of the Actor\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "actorDisplayName",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Actor",
          "type": "function"
        },
        "index": {
          "description": "The public display name of the Actor",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "actorDisplayName",
          "package": "googleplus",
          "partial": "Display Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:actorDisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of the Actor\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "actorId",
          "package": "googleplus",
          "signature": "ID",
          "source": "src/Web-GooglePlus-Types.html#Actor",
          "type": "function"
        },
        "index": {
          "description": "The ID of the Actor",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "actorId",
          "package": "googleplus",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:actorId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData pertaining to the Actor's main profile image\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "actorImage",
          "package": "googleplus",
          "signature": "Image",
          "source": "src/Web-GooglePlus-Types.html#Actor",
          "type": "function"
        },
        "index": {
          "description": "Data pertaining to the Actor main profile image",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "actorImage",
          "package": "googleplus",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:actorImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL of the user's profile\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "actorUrl",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#Actor",
          "type": "function"
        },
        "index": {
          "description": "URL of the user profile",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "actorUrl",
          "package": "googleplus",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:actorUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnippet of text if the Attachment is an article\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentContent",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "Snippet of text if the Attachment is an article",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentContent",
          "package": "googleplus",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of the Attachment\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentDisplayName",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "Title of the Attachment",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentDisplayName",
          "package": "googleplus",
          "partial": "Display Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentDisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbeddable link if the Attachment is a video\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentEmbed",
          "package": "googleplus",
          "signature": "Maybe Embed",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "Embeddable link if the Attachment is video",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentEmbed",
          "package": "googleplus",
          "partial": "Embed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentEmbed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull image if the Attachment is a photo\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentFullImage",
          "package": "googleplus",
          "signature": "Maybe Image",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "Full image if the Attachment is photo",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentFullImage",
          "package": "googleplus",
          "partial": "Full Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentFullImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the Attachment's resource\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentId",
          "package": "googleplus",
          "signature": "Maybe ID",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "ID of the Attachment resource",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentId",
          "package": "googleplus",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreview image\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentImage",
          "package": "googleplus",
          "signature": "Maybe Image",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "Preview image",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentImage",
          "package": "googleplus",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of attachment\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentType",
          "package": "googleplus",
          "signature": "AttachmentType",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "Type of attachment",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentType",
          "package": "googleplus",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLin k to text/html attachment\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentURL",
          "package": "googleplus",
          "signature": "Maybe URL",
          "source": "src/Web-GooglePlus-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "description": "Lin to text html attachment",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "attachmentURL",
          "package": "googleplus",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:attachmentURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe activities to which this comment is a reply\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentActivities",
          "package": "googleplus",
          "signature": "[InReplyTo]",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "The activities to which this comment is reply",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentActivities",
          "normalized": "[InReplyTo]",
          "package": "googleplus",
          "partial": "Activities",
          "signature": "[InReplyTo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentActivities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actor who posted the comment\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentActor",
          "package": "googleplus",
          "signature": "Actor",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "The actor who posted the comment",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentActor",
          "package": "googleplus",
          "partial": "Actor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentActor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the comment\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentId",
          "package": "googleplus",
          "signature": "ID",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "ID of the comment",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentId",
          "package": "googleplus",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content of the object\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentObject",
          "package": "googleplus",
          "signature": "CommentObject",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "The content of the object",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentObject",
          "package": "googleplus",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText content of the comments\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentObjectContent",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#CommentObject",
          "type": "function"
        },
        "index": {
          "description": "Text content of the comments",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentObjectContent",
          "package": "googleplus",
          "partial": "Object Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentObjectContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate originally published\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentPublished",
          "package": "googleplus",
          "signature": "ZonedTime",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "Date originally published",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentPublished",
          "package": "googleplus",
          "partial": "Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentPublished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate updated\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentUpdated",
          "package": "googleplus",
          "signature": "ZonedTime",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "Date updated",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentUpdated",
          "package": "googleplus",
          "partial": "Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to the comment\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentUrl",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "URL to the comment",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentUrl",
          "package": "googleplus",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates what action was performed\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "commentVerb",
          "package": "googleplus",
          "signature": "Verb",
          "source": "src/Web-GooglePlus-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "Indicates what action was performed",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "commentVerb",
          "package": "googleplus",
          "partial": "Verb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:commentVerb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual text address of the Email\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "emailAddressValue",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Email",
          "type": "function"
        },
        "index": {
          "description": "The actual text address of the Email",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "emailAddressValue",
          "package": "googleplus",
          "partial": "Address Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:emailAddressValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not the Email is the Person's primary Email\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "emailPrimary",
          "package": "googleplus",
          "signature": "Bool",
          "source": "src/Web-GooglePlus-Types.html#Email",
          "type": "function"
        },
        "index": {
          "description": "Whether or not the Email is the Person primary Email",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "emailPrimary",
          "package": "googleplus",
          "partial": "Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:emailPrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType/context of the Email address\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "emailType",
          "package": "googleplus",
          "signature": "EmailType",
          "source": "src/Web-GooglePlus-Types.html#Email",
          "type": "function"
        },
        "index": {
          "description": "Type context of the Email address",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "emailType",
          "package": "googleplus",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:emailType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of embeddable link\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "embedType",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Embed",
          "type": "function"
        },
        "index": {
          "description": "Type of embeddable link",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "embedType",
          "package": "googleplus",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:embedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbeddable link\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "embedUrl",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#Embed",
          "type": "function"
        },
        "index": {
          "description": "Embeddable link",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "embedUrl",
          "package": "googleplus",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:embedUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "familyName",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "familyName",
          "package": "googleplus",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:familyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFully formatted name of a Person including middle names, suffixes, etc.\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "formatted",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "function"
        },
        "index": {
          "description": "Fully formatted name of Person including middle names suffixes etc",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "formatted",
          "package": "googleplus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:formatted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe given (first) name of a Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "givenName",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "function"
        },
        "index": {
          "description": "The given first name of Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "givenName",
          "package": "googleplus",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:givenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix to a Person's name such as Dr. or Mrs.\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "honorificPrefix",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "function"
        },
        "index": {
          "description": "Prefix to Person name such as Dr or Mrs",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "honorificPrefix",
          "package": "googleplus",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:honorificPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuffix of a Person's name such as Jr.\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "honorificSuffix",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "function"
        },
        "index": {
          "description": "Suffix of Person name such as Jr",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "honorificSuffix",
          "package": "googleplus",
          "partial": "Suffix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:honorificSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "imageHeight",
          "package": "googleplus",
          "signature": "Maybe Integer",
          "source": "src/Web-GooglePlus-Types.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "imageHeight",
          "package": "googleplus",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:imageHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedia type of the link\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "imageType",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Image",
          "type": "function"
        },
        "index": {
          "description": "Media type of the link",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "imageType",
          "package": "googleplus",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:imageType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "imageURL",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "imageURL",
          "package": "googleplus",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:imageURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "imageWidth",
          "package": "googleplus",
          "signature": "Maybe Integer",
          "source": "src/Web-GooglePlus-Types.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "imageWidth",
          "package": "googleplus",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:imageWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the article\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "inReplyToId",
          "package": "googleplus",
          "signature": "ID",
          "source": "src/Web-GooglePlus-Types.html#InReplyTo",
          "type": "function"
        },
        "index": {
          "description": "ID of the article",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "inReplyToId",
          "package": "googleplus",
          "partial": "Reply To Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:inReplyToId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL of the article\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "inReplyToUrl",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#InReplyTo",
          "type": "function"
        },
        "index": {
          "description": "URL of the article",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "inReplyToUrl",
          "package": "googleplus",
          "partial": "Reply To Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:inReplyToUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "latitude",
          "package": "googleplus",
          "signature": "Double",
          "source": "src/Web-GooglePlus-Types.html#Geocode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "latitude",
          "package": "googleplus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "longitude",
          "package": "googleplus",
          "signature": "Double",
          "source": "src/Web-GooglePlus-Types.html#Geocode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "longitude",
          "package": "googleplus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "middleName",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#PersonName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "middleName",
          "package": "googleplus",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:middleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepartment of an Organization in which the Person resided\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationDepartment",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "Department of an Organization in which the Person resided",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationDepartment",
          "package": "googleplus",
          "partial": "Department",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationDepartment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral description of the Organization\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationDescription",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "General description of the Organization",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationDescription",
          "package": "googleplus",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate on which the user stopped at the organization in an unspecified text format\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationEndDate",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "Date on which the user stopped at the organization in an unspecified text format",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationEndDate",
          "package": "googleplus",
          "partial": "End Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationEndDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of the Organization\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationLocation",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "Location of the Organization",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationLocation",
          "package": "googleplus",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the Organization\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationName",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "Name of the Organization",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationName",
          "package": "googleplus",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not this Organization was the Person's primary one\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationPrimary",
          "package": "googleplus",
          "signature": "Bool",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "Whether or not this Organization was the Person primary one",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationPrimary",
          "package": "googleplus",
          "partial": "Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationPrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Person's role at the Organization\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationTitle",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "The Person role at the Organization",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationTitle",
          "package": "googleplus",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Organization\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationType",
          "package": "googleplus",
          "signature": "OrganizationType",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "The type of Organization",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationType",
          "package": "googleplus",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate on which the user started at the organization in an unspecified text format\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "organizationstartDate",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Organization",
          "type": "function"
        },
        "index": {
          "description": "Date on which the user started at the organization in an unspecified text format",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "organizationstartDate",
          "package": "googleplus",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:organizationstartDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbout Me profile section\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personAboutMe",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "About Me profile section",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personAboutMe",
          "package": "googleplus",
          "partial": "About Me",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personAboutMe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerson's Birthday\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personBirthday",
          "package": "googleplus",
          "signature": "Maybe Day",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Person Birthday",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personBirthday",
          "package": "googleplus",
          "partial": "Birthday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personBirthday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent location of the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personCurrentLocation",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Current location of the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personCurrentLocation",
          "package": "googleplus",
          "partial": "Current Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personCurrentLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the Person, suitable for display\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personDisplayName",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Name of the Person suitable for display",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personDisplayName",
          "package": "googleplus",
          "partial": "Display Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personDisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmail addresses that the person uses\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personEmails",
          "package": "googleplus",
          "signature": "[Email]",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Email addresses that the person uses",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personEmails",
          "normalized": "[Email]",
          "package": "googleplus",
          "partial": "Emails",
          "signature": "[Email]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personEmails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerson's gender\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personGender",
          "package": "googleplus",
          "signature": "Maybe Gender",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Person gender",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personGender",
          "package": "googleplus",
          "partial": "Gender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "personHasApp",
          "package": "googleplus",
          "signature": "Maybe Bool",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personHasApp",
          "package": "googleplus",
          "partial": "Has App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personHasApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eId of the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personId",
          "package": "googleplus",
          "signature": "ID",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Id of the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personId",
          "package": "googleplus",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProfile image for the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personImage",
          "package": "googleplus",
          "signature": "Image",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Profile image for the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personImage",
          "package": "googleplus",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguages the Person speaks\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personLanguagesSpoken",
          "package": "googleplus",
          "signature": "[Language]",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Languages the Person speaks",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personLanguagesSpoken",
          "normalized": "[Language]",
          "package": "googleplus",
          "partial": "Languages Spoken",
          "signature": "[Language]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personLanguagesSpoken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerson's actual, full name\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personName",
          "package": "googleplus",
          "signature": "Maybe PersonName",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Person actual full name",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personName",
          "package": "googleplus",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional nickname of the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personNickName",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Optional nickname of the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personNickName",
          "package": "googleplus",
          "partial": "Nick Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personNickName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrganizations that the Person has belonged to, past and present\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personOrganizations",
          "package": "googleplus",
          "signature": "[Organization]",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Organizations that the Person has belonged to past and present",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personOrganizations",
          "normalized": "[Organization]",
          "package": "googleplus",
          "partial": "Organizations",
          "signature": "[Organization]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personOrganizations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaces in which the Person has lived\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personPlacesLived",
          "package": "googleplus",
          "signature": "[Place]",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Places in which the Person has lived",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personPlacesLived",
          "normalized": "[Place]",
          "package": "googleplus",
          "partial": "Places Lived",
          "signature": "[Place]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personPlacesLived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to the person's profile\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personProfileURL",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "URL to the person profile",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personProfileURL",
          "package": "googleplus",
          "partial": "Profile URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerson's current relationship status\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personRelationshipStatus",
          "package": "googleplus",
          "signature": "Maybe RelationshipStatus",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Person current relationship status",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personRelationshipStatus",
          "package": "googleplus",
          "partial": "Relationship Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personRelationshipStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the Person, suitable for display\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personSRDisplayName",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#PersonSearchResult",
          "type": "function"
        },
        "index": {
          "description": "Name of the Person suitable for display",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personSRDisplayName",
          "package": "googleplus",
          "partial": "SRDisplay Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personSRDisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eId of the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personSRId",
          "package": "googleplus",
          "signature": "ID",
          "source": "src/Web-GooglePlus-Types.html#PersonSearchResult",
          "type": "function"
        },
        "index": {
          "description": "Id of the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personSRId",
          "package": "googleplus",
          "partial": "SRId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personSRId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProfile image for the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personSRImage",
          "package": "googleplus",
          "signature": "Image",
          "source": "src/Web-GooglePlus-Types.html#PersonSearchResult",
          "type": "function"
        },
        "index": {
          "description": "Profile image for the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personSRImage",
          "package": "googleplus",
          "partial": "SRImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personSRImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to the person's profile\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personSRProfileURL",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#PersonSearchResult",
          "type": "function"
        },
        "index": {
          "description": "URL to the person profile",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personSRProfileURL",
          "package": "googleplus",
          "partial": "SRProfile URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personSRProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrief description of the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personTagline",
          "package": "googleplus",
          "signature": "Maybe Text",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "Brief description of the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personTagline",
          "package": "googleplus",
          "partial": "Tagline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personTagline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActual text URl for the Person\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personURLValue",
          "package": "googleplus",
          "signature": "URL",
          "source": "src/Web-GooglePlus-Types.html#PersonURL",
          "type": "function"
        },
        "index": {
          "description": "Actual text URl for the Person",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personURLValue",
          "package": "googleplus",
          "partial": "URLValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personURLValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal URLs on the Person's profile\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personURLs",
          "package": "googleplus",
          "signature": "[PersonURL]",
          "source": "src/Web-GooglePlus-Types.html#Person",
          "type": "function"
        },
        "index": {
          "description": "External URLs on the Person profile",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personURLs",
          "normalized": "[PersonURL]",
          "package": "googleplus",
          "partial": "URLs",
          "signature": "[PersonURL]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personURLs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not the URL is the Person's primary URl\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personUrlPrimary",
          "package": "googleplus",
          "signature": "Bool",
          "source": "src/Web-GooglePlus-Types.html#PersonURL",
          "type": "function"
        },
        "index": {
          "description": "Whether or not the URL is the Person primary URl",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personUrlPrimary",
          "package": "googleplus",
          "partial": "Url Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personUrlPrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of URL\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "personUrlType",
          "package": "googleplus",
          "signature": "Maybe PersonURLType",
          "source": "src/Web-GooglePlus-Types.html#PersonURL",
          "type": "function"
        },
        "index": {
          "description": "Type of URL",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "personUrlType",
          "package": "googleplus",
          "partial": "Url Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:personUrlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not this is/was the Person's primary residence\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "placePrimary",
          "package": "googleplus",
          "signature": "Bool",
          "source": "src/Web-GooglePlus-Types.html#Place",
          "type": "function"
        },
        "index": {
          "description": "Whether or not this is was the Person primary residence",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "placePrimary",
          "package": "googleplus",
          "partial": "Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:placePrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText description of the Place\n\u003c/p\u003e",
          "module": "Web.GooglePlus.Types",
          "name": "placeValue",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Place",
          "type": "function"
        },
        "index": {
          "description": "Text description of the Place",
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "placeValue",
          "package": "googleplus",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:placeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus.Types",
          "name": "providerTitle",
          "package": "googleplus",
          "signature": "Text",
          "source": "src/Web-GooglePlus-Types.html#Provider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus Types",
          "module": "Web.GooglePlus.Types",
          "name": "providerTitle",
          "package": "googleplus",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus-Types.html#v:providerTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToplevel module for the Google+ API operating in the GooglePlusM Monad. \n Currently covers the (very) limited, read-only API that Google has exposed\n in v1 of the Google+ API\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Web.GooglePlus\n import Web.GooglePlus.Monad\n import Web.GooglePlus.Types\n import Control.Monad.Reader\n import Data.Text (unpack)\n \n doStuff :: GooglePlusM ()\n doStuff = do\n   Right person \u003c- getPerson Me\n   Right feed   \u003c- getLatestActivityFeed Me PublicCollection\n   -- ...\n   return ()\n \n main :: IO ()\n main = do\n   runReaderT (unGooglePlusM doStuff) env\n   where env  = GooglePlusEnv { gpAuth = APIKey \"MYKEY\" }\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Web.GooglePlus",
          "name": "GooglePlus",
          "package": "googleplus",
          "source": "src/Web-GooglePlus.html",
          "type": "module"
        },
        "index": {
          "description": "Toplevel module for the Google API operating in the GooglePlusM Monad Currently covers the very limited read-only API that Google has exposed in v1 of the Google API LANGUAGE OverloadedStrings import Web.GooglePlus import Web.GooglePlus.Monad import Web.GooglePlus.Types import Control.Monad.Reader import Data.Text unpack doStuff GooglePlusM doStuff do Right person getPerson Me Right feed getLatestActivityFeed Me PublicCollection return main IO main do runReaderT unGooglePlusM doStuff env where env GooglePlusEnv gpAuth APIKey MYKEY",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "GooglePlus",
          "package": "googleplus",
          "partial": "Google Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the type of Activities to get in an Activity listing. Currently\n the API only allows public.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "ActivityCollection",
          "package": "googleplus",
          "source": "src/Web-GooglePlus.html#ActivityCollection",
          "type": "data"
        },
        "index": {
          "description": "Specifies the type of Activities to get in an Activity listing Currently the API only allows public",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "ActivityCollection",
          "package": "googleplus",
          "partial": "Activity Collection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#t:ActivityCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus",
          "name": "ListByActivityCollection",
          "package": "googleplus",
          "source": "src/Web-GooglePlus.html#ListByActivityCollection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "ListByActivityCollection",
          "package": "googleplus",
          "partial": "List By Activity Collection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#t:ListByActivityCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus",
          "name": "SearchOrderBy",
          "package": "googleplus",
          "source": "src/Web-GooglePlus.html#SearchOrderBy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "SearchOrderBy",
          "package": "googleplus",
          "partial": "Search Order By",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#t:SearchOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort by relevance to the to the user, most relevant first\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "Best",
          "package": "googleplus",
          "signature": "Best",
          "source": "src/Web-GooglePlus.html#SearchOrderBy",
          "type": "function"
        },
        "index": {
          "description": "Sort by relevance to the to the user most relevant first",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "Best",
          "package": "googleplus",
          "partial": "Best",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:Best"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of people who have +1ed an activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "PlusOners",
          "package": "googleplus",
          "signature": "PlusOners",
          "source": "src/Web-GooglePlus.html#ListByActivityCollection",
          "type": "function"
        },
        "index": {
          "description": "List of people who have ed an activity",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "PlusOners",
          "package": "googleplus",
          "partial": "Plus Oners",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:PlusOners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.GooglePlus",
          "name": "PublicCollection",
          "package": "googleplus",
          "signature": "PublicCollection",
          "source": "src/Web-GooglePlus.html#ActivityCollection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "PublicCollection",
          "package": "googleplus",
          "partial": "Public Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:PublicCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort by most recent results first\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "Recent",
          "package": "googleplus",
          "signature": "Recent",
          "source": "src/Web-GooglePlus.html#SearchOrderBy",
          "type": "function"
        },
        "index": {
          "description": "Sort by most recent results first",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "Recent",
          "package": "googleplus",
          "partial": "Recent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:Recent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of people who have reshared an activity\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "Resharers",
          "package": "googleplus",
          "signature": "Resharers",
          "source": "src/Web-GooglePlus.html#ListByActivityCollection",
          "type": "function"
        },
        "index": {
          "description": "List of people who have reshared an activity",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "Resharers",
          "package": "googleplus",
          "partial": "Resharers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:Resharers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaginating enumerator yielding a Chunk for each page. Use this if you\n don't need the feed metadata that enumActivityFeed provides.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "enumActivities",
          "package": "googleplus",
          "signature": "PersonID-\u003e ActivityCollection-\u003e Maybe Integer-\u003e Enumerator Activity GooglePlusM b",
          "type": "function"
        },
        "index": {
          "description": "Paginating enumerator yielding Chunk for each page Use this if you don need the feed metadata that enumActivityFeed provides",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "enumActivities",
          "normalized": "PersonID-\u003eActivityCollection-\u003eMaybe Integer-\u003eEnumerator Activity GooglePlusM a",
          "package": "googleplus",
          "partial": "Activities",
          "signature": "PersonID-\u003eActivityCollection-\u003eMaybe Integer-\u003eEnumerator Activity GooglePlusM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:enumActivities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaginating enumerator to consume a user's activity stream. Each chunk will\n end up being an array with a single ActivityFeed in it with 1 page of data\n in it. This weirdness about the chunks only containing 1 element is mostly\n to maintain the metadata available on ActivityFeed and have it available in\n each chunk. For a more natural chunking of just Activities if you don't need\n that additional metadata, see enumActivities. Note that this Enumerator will\n abort if it encounters an error from the server, thus cutting the list\n short.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "enumActivityFeed",
          "package": "googleplus",
          "signature": "PersonID-\u003e ActivityCollection-\u003e Maybe Integer-\u003e Enumerator ActivityFeed GooglePlusM b",
          "type": "function"
        },
        "index": {
          "description": "Paginating enumerator to consume user activity stream Each chunk will end up being an array with single ActivityFeed in it with page of data in it This weirdness about the chunks only containing element is mostly to maintain the metadata available on ActivityFeed and have it available in each chunk For more natural chunking of just Activities if you don need that additional metadata see enumActivities Note that this Enumerator will abort if it encounters an error from the server thus cutting the list short",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "enumActivityFeed",
          "normalized": "PersonID-\u003eActivityCollection-\u003eMaybe Integer-\u003eEnumerator ActivityFeed GooglePlusM a",
          "package": "googleplus",
          "partial": "Activity Feed",
          "signature": "PersonID-\u003eActivityCollection-\u003eMaybe Integer-\u003eEnumerator ActivityFeed GooglePlusM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:enumActivityFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for an activity on Google+. Paginating enumerator yielding a Chunk\n for each page. Note that this Enumerator will abort if it encounters an error\n from the server, thus cutting the list short.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "enumActivitySearch",
          "package": "googleplus",
          "signature": "Text-\u003e SearchOrderBy-\u003e Maybe Integer-\u003e Enumerator Activity GooglePlusM b",
          "type": "function"
        },
        "index": {
          "description": "Search for an activity on Google Paginating enumerator yielding Chunk for each page Note that this Enumerator will abort if it encounters an error from the server thus cutting the list short",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "enumActivitySearch",
          "normalized": "Text-\u003eSearchOrderBy-\u003eMaybe Integer-\u003eEnumerator Activity GooglePlusM a",
          "package": "googleplus",
          "partial": "Activity Search",
          "signature": "Text-\u003eSearchOrderBy-\u003eMaybe Integer-\u003eEnumerator Activity GooglePlusM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:enumActivitySearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind comments for an activity on Google+. Paginating enumerator yielding a\n Chunk for each page. Note that this Enumerator will abort if it encounters\n an error from the server, thus cutting the list short.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "enumComments",
          "package": "googleplus",
          "signature": "ID-\u003e Maybe Integer-\u003e Enumerator Comment GooglePlusM b",
          "type": "function"
        },
        "index": {
          "description": "Find comments for an activity on Google Paginating enumerator yielding Chunk for each page Note that this Enumerator will abort if it encounters an error from the server thus cutting the list short",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "enumComments",
          "normalized": "ID-\u003eMaybe Integer-\u003eEnumerator Comment GooglePlusM a",
          "package": "googleplus",
          "partial": "Comments",
          "signature": "ID-\u003eMaybe Integer-\u003eEnumerator Comment GooglePlusM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:enumComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind people associated with a particular Activity. Paginating enumerator\n yielding a Chunk for each page. Paginating enumerator yielding a Chunk for\n each page. Note that this Enumerator will abort if it encounters an error\n from the server, thus cutting the list short.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "enumPeopleByActivity",
          "package": "googleplus",
          "signature": "ID-\u003e ListByActivityCollection-\u003e Maybe Integer-\u003e Enumerator Person GooglePlusM b",
          "type": "function"
        },
        "index": {
          "description": "Find people associated with particular Activity Paginating enumerator yielding Chunk for each page Paginating enumerator yielding Chunk for each page Note that this Enumerator will abort if it encounters an error from the server thus cutting the list short",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "enumPeopleByActivity",
          "normalized": "ID-\u003eListByActivityCollection-\u003eMaybe Integer-\u003eEnumerator Person GooglePlusM a",
          "package": "googleplus",
          "partial": "People By Activity",
          "signature": "ID-\u003eListByActivityCollection-\u003eMaybe Integer-\u003eEnumerator Person GooglePlusM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:enumPeopleByActivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for a member of Google+. Paginating enumerator yielding a Chunk for\n each page. Note that this Enumerator will abort if it encounters an error\n from the server, thus cutting the list short.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "enumPersonSearch",
          "package": "googleplus",
          "signature": "Text-\u003e Maybe Integer-\u003e Enumerator PersonSearchResult GooglePlusM b",
          "type": "function"
        },
        "index": {
          "description": "Search for member of Google Paginating enumerator yielding Chunk for each page Note that this Enumerator will abort if it encounters an error from the server thus cutting the list short",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "enumPersonSearch",
          "normalized": "Text-\u003eMaybe Integer-\u003eEnumerator PersonSearchResult GooglePlusM a",
          "package": "googleplus",
          "partial": "Person Search",
          "signature": "Text-\u003eMaybe Integer-\u003eEnumerator PersonSearchResult GooglePlusM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:enumPersonSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplified version of enumActivities that fetches all the activitys of a\n Person first, thus returning them. Note that this should incur 1 API call\n per page of results, so the max page size of 100 is used.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getActivities",
          "package": "googleplus",
          "signature": "PersonID-\u003e ActivityCollection-\u003e GooglePlusM [Activity]",
          "type": "function"
        },
        "index": {
          "description": "Simplified version of enumActivities that fetches all the activitys of Person first thus returning them Note that this should incur API call per page of results so the max page size of is used",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getActivities",
          "normalized": "PersonID-\u003eActivityCollection-\u003eGooglePlusM[Activity]",
          "package": "googleplus",
          "partial": "Activities",
          "signature": "PersonID-\u003eActivityCollection-\u003eGooglePlusM[Activity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getActivities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an activity which matches the given activity ID\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getActivity",
          "package": "googleplus",
          "signature": "ID-\u003e GooglePlusM (Either Text Activity)",
          "type": "function"
        },
        "index": {
          "description": "Get an activity which matches the given activity ID",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getActivity",
          "normalized": "ID-\u003eGooglePlusM(Either Text Activity)",
          "package": "googleplus",
          "partial": "Activity",
          "signature": "ID-\u003eGooglePlusM(Either Text Activity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getActivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplified version of enumActivityFeed which retrieves all pages of an\n activity feed and merges them into one. Note that this will not be as\n efficient as enumActivityFeed in terms of memory/time because it collects\n them all in memory first. Note that this should incur 1 API call per page of\n results, so the max page size of 100 is used.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getActivityFeed",
          "package": "googleplus",
          "signature": "PersonID -\u003e ActivityCollection -\u003e GooglePlusM ActivityFeed",
          "source": "src/Web-GooglePlus.html#getActivityFeed",
          "type": "function"
        },
        "index": {
          "description": "Simplified version of enumActivityFeed which retrieves all pages of an activity feed and merges them into one Note that this will not be as efficient as enumActivityFeed in terms of memory time because it collects them all in memory first Note that this should incur API call per page of results so the max page size of is used",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getActivityFeed",
          "normalized": "PersonID-\u003eActivityCollection-\u003eGooglePlusM ActivityFeed",
          "package": "googleplus",
          "partial": "Activity Feed",
          "signature": "PersonID-\u003eActivityCollection-\u003eGooglePlusM ActivityFeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getActivityFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the full result set for an activity search given a search string.\n This interface is simpler to use but does not have the flexibility/memory\n usage benefit of enumActivitySearch.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getActivitySearch",
          "package": "googleplus",
          "signature": "Text-\u003e SearchOrderBy-\u003e GooglePlusM [Activity]",
          "type": "function"
        },
        "index": {
          "description": "Returns the full result set for an activity search given search string This interface is simpler to use but does not have the flexibility memory usage benefit of enumActivitySearch",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getActivitySearch",
          "normalized": "Text-\u003eSearchOrderBy-\u003eGooglePlusM[Activity]",
          "package": "googleplus",
          "partial": "Activity Search",
          "signature": "Text-\u003eSearchOrderBy-\u003eGooglePlusM[Activity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getActivitySearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a comment which matches the given comment ID\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getComment",
          "package": "googleplus",
          "signature": "ID-\u003e GooglePlusM (Either Text Comment)",
          "type": "function"
        },
        "index": {
          "description": "Get comment which matches the given comment ID",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getComment",
          "normalized": "ID-\u003eGooglePlusM(Either Text Comment)",
          "package": "googleplus",
          "partial": "Comment",
          "signature": "ID-\u003eGooglePlusM(Either Text Comment)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the full result set for an activity's comments. This interface is\n simpler to use but does not have the flexibility/memory usage benefit of\n enumComments.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getComments",
          "package": "googleplus",
          "signature": "ID-\u003e GooglePlusM [Comment]",
          "type": "function"
        },
        "index": {
          "description": "Returns the full result set for an activity comments This interface is simpler to use but does not have the flexibility memory usage benefit of enumComments",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getComments",
          "normalized": "ID-\u003eGooglePlusM[Comment]",
          "package": "googleplus",
          "partial": "Comments",
          "signature": "ID-\u003eGooglePlusM[Comment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an activity who matches the given activity ID and collection to use.\n Default page size is (20) and only fetches the first page.\n You will receive an error from the server if the page size exceeds 100.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getLatestActivityFeed",
          "package": "googleplus",
          "signature": "PersonID-\u003e ActivityCollection-\u003e Maybe Integer-\u003e GooglePlusM (Either Text ActivityFeed)",
          "type": "function"
        },
        "index": {
          "description": "Get an activity who matches the given activity ID and collection to use Default page size is and only fetches the first page You will receive an error from the server if the page size exceeds",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getLatestActivityFeed",
          "normalized": "PersonID-\u003eActivityCollection-\u003eMaybe Integer-\u003eGooglePlusM(Either Text ActivityFeed)",
          "package": "googleplus",
          "partial": "Latest Activity Feed",
          "signature": "PersonID-\u003eActivityCollection-\u003eMaybe Integer-\u003eGooglePlusM(Either Text ActivityFeed)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getLatestActivityFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the full result set for a person search given a search string.\n This interface is simpler to use but does not have the flexibility/memory\n usage benefit of enumPeopleByActivity.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getPeopleByActivity",
          "package": "googleplus",
          "signature": "ID-\u003e ListByActivityCollection-\u003e GooglePlusM [Person]",
          "type": "function"
        },
        "index": {
          "description": "Returns the full result set for person search given search string This interface is simpler to use but does not have the flexibility memory usage benefit of enumPeopleByActivity",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getPeopleByActivity",
          "normalized": "ID-\u003eListByActivityCollection-\u003eGooglePlusM[Person]",
          "package": "googleplus",
          "partial": "People By Activity",
          "signature": "ID-\u003eListByActivityCollection-\u003eGooglePlusM[Person]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getPeopleByActivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a person who matches the given identifier\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getPerson",
          "package": "googleplus",
          "signature": "PersonID-\u003e GooglePlusM (Either Text Person)",
          "type": "function"
        },
        "index": {
          "description": "Get person who matches the given identifier",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getPerson",
          "normalized": "PersonID-\u003eGooglePlusM(Either Text Person)",
          "package": "googleplus",
          "partial": "Person",
          "signature": "PersonID-\u003eGooglePlusM(Either Text Person)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getPerson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the full result set for a person search given a search string.\n This interface is simpler to use but does not have the flexibility/memory\n usage benefit of enumPersonSearch.\n\u003c/p\u003e",
          "module": "Web.GooglePlus",
          "name": "getPersonSearch",
          "package": "googleplus",
          "signature": "Text-\u003e GooglePlusM [PersonSearchResult]",
          "type": "function"
        },
        "index": {
          "description": "Returns the full result set for person search given search string This interface is simpler to use but does not have the flexibility memory usage benefit of enumPersonSearch",
          "hierarchy": "Web GooglePlus",
          "module": "Web.GooglePlus",
          "name": "getPersonSearch",
          "normalized": "Text-\u003eGooglePlusM[PersonSearchResult]",
          "package": "googleplus",
          "partial": "Person Search",
          "signature": "Text-\u003eGooglePlusM[PersonSearchResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/googleplus/docs/Web-GooglePlus.html#v:getPersonSearch"
      }
    }
  ]
]