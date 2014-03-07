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
        "word": "postmark"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Core",
          "name": "Core",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Postmark Core",
          "module": "Network.Api.Postmark.Core",
          "name": "Core",
          "package": "postmark",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a single email: http:\u003cem/\u003edeveloper.postmarkapp.com/developer-build.html\n\u003c/p\u003e",
          "module": "Network.Api.Postmark.Core",
          "name": "email",
          "package": "postmark",
          "signature": "Email -\u003e PostmarkRequest' Sent",
          "source": "src/Network-Api-Postmark-Core.html#email",
          "type": "function"
        },
        "index": {
          "description": "Send single email http developer.postmarkapp.com developer-build.html",
          "hierarchy": "Network Api Postmark Core",
          "module": "Network.Api.Postmark.Core",
          "name": "email",
          "normalized": "Email-\u003ePostmarkRequest' Sent",
          "package": "postmark",
          "signature": "Email-\u003ePostmarkRequest' Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#v:email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBulk send emails: http:\u003cem/\u003edeveloper.postmarkapp.com/developer-build.html#batching-messages\n\u003c/p\u003e",
          "module": "Network.Api.Postmark.Core",
          "name": "emails",
          "package": "postmark",
          "signature": "[Email] -\u003e PostmarkRequest' [Sent]",
          "source": "src/Network-Api-Postmark-Core.html#emails",
          "type": "function"
        },
        "index": {
          "description": "Bulk send emails http developer.postmarkapp.com developer-build.html batching-messages",
          "hierarchy": "Network Api Postmark Core",
          "module": "Network.Api.Postmark.Core",
          "name": "emails",
          "normalized": "[Email]-\u003ePostmarkRequest'[Sent]",
          "package": "postmark",
          "signature": "[Email]-\u003ePostmarkRequest'[Sent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#v:emails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the specified request with the specified settings.\n\u003c/p\u003e",
          "module": "Network.Api.Postmark.Core",
          "name": "request",
          "package": "postmark",
          "signature": "PostmarkSettings -\u003e PostmarkRequest e a -\u003e IO (PostmarkResponse e a)",
          "source": "src/Network-Api-Postmark-Core.html#request",
          "type": "function"
        },
        "index": {
          "description": "Run the specified request with the specified settings",
          "hierarchy": "Network Api Postmark Core",
          "module": "Network.Api.Postmark.Core",
          "name": "request",
          "normalized": "PostmarkSettings-\u003ePostmarkRequest a b-\u003eIO(PostmarkResponse a b)",
          "package": "postmark",
          "signature": "PostmarkSettings-\u003ePostmarkRequest e a-\u003eIO(PostmarkResponse e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "Data",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Data.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "Data",
          "package": "postmark",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "Attachment",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Data.html#Attachment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "Attachment",
          "package": "postmark",
          "partial": "Attachment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#t:Attachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmail data type. It is recommended that you use the defaultEmail\n   function and selector syntax to build an email, e.g.:\n\u003c/p\u003e\u003cpre\u003e defaultEmail {\n     emailFrom = \"you@yourdomain.com\"\n   , emailTo = \"person@example.com\"\n   , emailSubject = \"This is an example email!\"\n   }\n\u003c/pre\u003e",
          "module": "Network.Api.Postmark.Data",
          "name": "Email",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "data"
        },
        "index": {
          "description": "Email data type It is recommended that you use the defaultEmail function and selector syntax to build an email e.g defaultEmail emailFrom you@yourdomain.com emailTo person@example.com emailSubject This is an example email",
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "Email",
          "package": "postmark",
          "partial": "Email",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#t:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "Sent",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Data.html#Sent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "Sent",
          "package": "postmark",
          "partial": "Sent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#t:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "Attachment",
          "package": "postmark",
          "signature": "Attachment",
          "source": "src/Network-Api-Postmark-Data.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "Attachment",
          "package": "postmark",
          "partial": "Attachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:Attachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "Email",
          "package": "postmark",
          "signature": "Email",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "Email",
          "package": "postmark",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "Sent",
          "package": "postmark",
          "signature": "Sent",
          "source": "src/Network-Api-Postmark-Data.html#Sent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "Sent",
          "package": "postmark",
          "partial": "Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "attachmentContent",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "attachmentContent",
          "package": "postmark",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:attachmentContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "attachmentContentType",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "attachmentContentType",
          "package": "postmark",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:attachmentContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "attachmentName",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "attachmentName",
          "package": "postmark",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:attachmentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "defaultEmail",
          "package": "postmark",
          "signature": "Email",
          "source": "src/Network-Api-Postmark-Data.html#defaultEmail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "defaultEmail",
          "package": "postmark",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:defaultEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailAttachments",
          "package": "postmark",
          "signature": "[Attachment]",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailAttachments",
          "normalized": "[Attachment]",
          "package": "postmark",
          "partial": "Attachments",
          "signature": "[Attachment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailAttachments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailBcc",
          "package": "postmark",
          "signature": "[Text]",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailBcc",
          "normalized": "[Text]",
          "package": "postmark",
          "partial": "Bcc",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailBcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailCc",
          "package": "postmark",
          "signature": "[Text]",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailCc",
          "normalized": "[Text]",
          "package": "postmark",
          "partial": "Cc",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailCc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailFrom",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailFrom",
          "package": "postmark",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailHeaders",
          "package": "postmark",
          "signature": "Map Text Text",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailHeaders",
          "package": "postmark",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailHtml",
          "package": "postmark",
          "signature": "Maybe Text",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailHtml",
          "package": "postmark",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailReplyTo",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailReplyTo",
          "package": "postmark",
          "partial": "Reply To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailSubject",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailSubject",
          "package": "postmark",
          "partial": "Subject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailSubject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailTag",
          "package": "postmark",
          "signature": "Maybe Text",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailTag",
          "package": "postmark",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailText",
          "package": "postmark",
          "signature": "Maybe Text",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailText",
          "package": "postmark",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "emailTo",
          "package": "postmark",
          "signature": "[Text]",
          "source": "src/Network-Api-Postmark-Data.html#Email",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "emailTo",
          "normalized": "[Text]",
          "package": "postmark",
          "partial": "To",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "ojson",
          "package": "postmark",
          "signature": "Text -\u003e Maybe a -\u003e Maybe (Text, Value)",
          "source": "src/Network-Api-Postmark-Data.html#ojson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "ojson",
          "normalized": "Text-\u003eMaybe a-\u003eMaybe(Text,Value)",
          "package": "postmark",
          "signature": "Text-\u003eMaybe a-\u003eMaybe(Text,Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:ojson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "oljson",
          "package": "postmark",
          "signature": "Text -\u003e [a] -\u003e ([a] -\u003e b) -\u003e Maybe (Text, Value)",
          "source": "src/Network-Api-Postmark-Data.html#oljson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "oljson",
          "normalized": "Text-\u003e[a]-\u003e([a]-\u003eb)-\u003eMaybe(Text,Value)",
          "package": "postmark",
          "signature": "Text-\u003e[a]-\u003e([a]-\u003eb)-\u003eMaybe(Text,Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:oljson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "omjson",
          "package": "postmark",
          "signature": "Text -\u003e Map Text a -\u003e Maybe (Text, Value)",
          "source": "src/Network-Api-Postmark-Data.html#omjson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "omjson",
          "normalized": "Text-\u003eMap Text a-\u003eMaybe(Text,Value)",
          "package": "postmark",
          "signature": "Text-\u003eMap Text a-\u003eMaybe(Text,Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:omjson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "postmarkMessageId",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Sent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "postmarkMessageId",
          "package": "postmark",
          "partial": "Message Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:postmarkMessageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "postmarkSubmittedAt",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Sent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "postmarkSubmittedAt",
          "package": "postmark",
          "partial": "Submitted At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:postmarkSubmittedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "postmarkTo",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Data.html#Sent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "postmarkTo",
          "package": "postmark",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:postmarkTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Data",
          "name": "toText",
          "package": "postmark",
          "signature": "ByteString -\u003e Text",
          "source": "src/Network-Api-Postmark-Data.html#toText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Data",
          "module": "Network.Api.Postmark.Data",
          "name": "toText",
          "normalized": "ByteString-\u003eText",
          "package": "postmark",
          "partial": "Text",
          "signature": "ByteString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:toText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "Error",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "Error",
          "package": "postmark",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkError",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkError",
          "package": "postmark",
          "partial": "Postmark Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#t:PostmarkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkErrorType",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkErrorType",
          "package": "postmark",
          "partial": "Postmark Error Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#t:PostmarkErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkBadApiToken",
          "package": "postmark",
          "signature": "PostmarkBadApiToken",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkBadApiToken",
          "package": "postmark",
          "partial": "Postmark Bad Api Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkBadApiToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkBounceNotFound",
          "package": "postmark",
          "signature": "PostmarkBounceNotFound",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkBounceNotFound",
          "package": "postmark",
          "partial": "Postmark Bounce Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkBounceNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkBounceQueryException",
          "package": "postmark",
          "signature": "PostmarkBounceQueryException",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkBounceQueryException",
          "package": "postmark",
          "partial": "Postmark Bounce Query Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkBounceQueryException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkError",
          "package": "postmark",
          "signature": "PostmarkError",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkError",
          "package": "postmark",
          "partial": "Postmark Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkInactive",
          "package": "postmark",
          "signature": "PostmarkInactive",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkInactive",
          "package": "postmark",
          "partial": "Postmark Inactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkInactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkIncompatibleJson",
          "package": "postmark",
          "signature": "PostmarkIncompatibleJson",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkIncompatibleJson",
          "package": "postmark",
          "partial": "Postmark Incompatible Json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkIncompatibleJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkInvalidEmail",
          "package": "postmark",
          "signature": "PostmarkInvalidEmail",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkInvalidEmail",
          "package": "postmark",
          "partial": "Postmark Invalid Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkInvalidEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkInvalidJson",
          "package": "postmark",
          "signature": "PostmarkInvalidJson",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkInvalidJson",
          "package": "postmark",
          "partial": "Postmark Invalid Json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkInvalidJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkJsonRequired",
          "package": "postmark",
          "signature": "PostmarkJsonRequired",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkJsonRequired",
          "package": "postmark",
          "partial": "Postmark Json Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkJsonRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkNotAllowed",
          "package": "postmark",
          "signature": "PostmarkNotAllowed",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkNotAllowed",
          "package": "postmark",
          "partial": "Postmark Not Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkNotAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkSenderNotConfirmed",
          "package": "postmark",
          "signature": "PostmarkSenderNotConfirmed",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkSenderNotConfirmed",
          "package": "postmark",
          "partial": "Postmark Sender Not Confirmed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkSenderNotConfirmed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkSenderNotFound",
          "package": "postmark",
          "signature": "PostmarkSenderNotFound",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkSenderNotFound",
          "package": "postmark",
          "partial": "Postmark Sender Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkSenderNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkTooManyMessages",
          "package": "postmark",
          "signature": "PostmarkTooManyMessages",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkTooManyMessages",
          "package": "postmark",
          "partial": "Postmark Too Many Messages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkTooManyMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkUnkownError",
          "package": "postmark",
          "signature": "PostmarkUnkownError Int",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "PostmarkUnkownError",
          "package": "postmark",
          "partial": "Postmark Unkown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkUnkownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "errorMessage",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "errorMessage",
          "package": "postmark",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Error",
          "name": "errorType",
          "package": "postmark",
          "signature": "PostmarkErrorType",
          "source": "src/Network-Api-Postmark-Error.html#PostmarkError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Error",
          "module": "Network.Api.Postmark.Error",
          "name": "errorType",
          "package": "postmark",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:errorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Request",
          "name": "Request",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Request.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Postmark Request",
          "module": "Network.Api.Postmark.Request",
          "name": "Request",
          "package": "postmark",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Request",
          "name": "PostmarkRequest",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Request.html#PostmarkRequest",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Request",
          "module": "Network.Api.Postmark.Request",
          "name": "PostmarkRequest",
          "package": "postmark",
          "partial": "Postmark Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#t:PostmarkRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Request",
          "name": "PostmarkRequest'",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Request.html#PostmarkRequest%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Api Postmark Request",
          "module": "Network.Api.Postmark.Request",
          "name": "PostmarkRequest'",
          "package": "postmark",
          "partial": "Postmark Request'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#t:PostmarkRequest-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Request",
          "name": "PostmarkRequest",
          "package": "postmark",
          "signature": "StdMethod -\u003e Text -\u003e RequestTransformer IO -\u003e PostmarkRequest e a",
          "source": "src/Network-Api-Postmark-Request.html#PostmarkRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Request",
          "module": "Network.Api.Postmark.Request",
          "name": "PostmarkRequest",
          "normalized": "StdMethod-\u003eText-\u003eRequestTransformer IO-\u003ePostmarkRequest a b",
          "package": "postmark",
          "partial": "Postmark Request",
          "signature": "StdMethod-\u003eText-\u003eRequestTransformer IO-\u003ePostmarkRequest e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#v:PostmarkRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "Response",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Response.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "Response",
          "package": "postmark",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkResponse",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkResponse",
          "package": "postmark",
          "partial": "Postmark Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#t:PostmarkResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkResponse'",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkResponse%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkResponse'",
          "package": "postmark",
          "partial": "Postmark Response'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#t:PostmarkResponse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkUnexpectedType",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkUnexpectedType",
          "package": "postmark",
          "partial": "Postmark Unexpected Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#t:PostmarkUnexpectedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "JsonFormatError",
          "package": "postmark",
          "signature": "JsonFormatError",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "JsonFormatError",
          "package": "postmark",
          "partial": "Json Format Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:JsonFormatError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "JsonSyntaxError",
          "package": "postmark",
          "signature": "JsonSyntaxError",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "JsonSyntaxError",
          "package": "postmark",
          "partial": "Json Syntax Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:JsonSyntaxError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkFailure",
          "package": "postmark",
          "signature": "PostmarkFailure e",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkFailure",
          "package": "postmark",
          "partial": "Postmark Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkSuccess",
          "package": "postmark",
          "signature": "PostmarkSuccess a",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkSuccess",
          "package": "postmark",
          "partial": "Postmark Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkUnauthorized",
          "package": "postmark",
          "signature": "PostmarkUnauthorized",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkUnauthorized",
          "package": "postmark",
          "partial": "Postmark Unauthorized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkUnauthorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkUnexpected",
          "package": "postmark",
          "signature": "PostmarkUnexpected PostmarkUnexpectedType Int (Maybe Text) (Maybe Text)",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "PostmarkUnexpected",
          "package": "postmark",
          "partial": "Postmark Unexpected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkUnexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "ServerError",
          "package": "postmark",
          "signature": "ServerError",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "ServerError",
          "package": "postmark",
          "partial": "Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:ServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "UnexpectedResponseCode",
          "package": "postmark",
          "signature": "UnexpectedResponseCode",
          "source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "UnexpectedResponseCode",
          "package": "postmark",
          "partial": "Unexpected Response Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:UnexpectedResponseCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "formatErr",
          "package": "postmark",
          "signature": "Int -\u003e ByteString -\u003e Text -\u003e PostmarkResponse e a",
          "source": "src/Network-Api-Postmark-Response.html#formatErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "formatErr",
          "normalized": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse a b",
          "package": "postmark",
          "partial": "Err",
          "signature": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:formatErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Response",
          "name": "syntaxErr",
          "package": "postmark",
          "signature": "Int -\u003e ByteString -\u003e Text -\u003e PostmarkResponse e a",
          "source": "src/Network-Api-Postmark-Response.html#syntaxErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Response",
          "module": "Network.Api.Postmark.Response",
          "name": "syntaxErr",
          "normalized": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse a b",
          "package": "postmark",
          "partial": "Err",
          "signature": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:syntaxErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "Settings",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Settings.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "Settings",
          "package": "postmark",
          "partial": "Settings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "PostmarkSettings",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "PostmarkSettings",
          "package": "postmark",
          "partial": "Postmark Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#t:PostmarkSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "PostmarkSettings",
          "package": "postmark",
          "signature": "PostmarkSettings",
          "source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "PostmarkSettings",
          "package": "postmark",
          "partial": "Postmark Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:PostmarkSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "apiToken",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "apiToken",
          "package": "postmark",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:apiToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "apiUrl",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "apiUrl",
          "package": "postmark",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:apiUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttp",
          "package": "postmark",
          "signature": "Text -\u003e PostmarkSettings",
          "source": "src/Network-Api-Postmark-Settings.html#postmarkHttp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttp",
          "normalized": "Text-\u003ePostmarkSettings",
          "package": "postmark",
          "partial": "Http",
          "signature": "Text-\u003ePostmarkSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttpTest",
          "package": "postmark",
          "signature": "PostmarkSettings",
          "source": "src/Network-Api-Postmark-Settings.html#postmarkHttpTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttpTest",
          "package": "postmark",
          "partial": "Http Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttpTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttps",
          "package": "postmark",
          "signature": "Text -\u003e PostmarkSettings",
          "source": "src/Network-Api-Postmark-Settings.html#postmarkHttps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttps",
          "normalized": "Text-\u003ePostmarkSettings",
          "package": "postmark",
          "partial": "Https",
          "signature": "Text-\u003ePostmarkSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttpsTest",
          "package": "postmark",
          "signature": "PostmarkSettings",
          "source": "src/Network-Api-Postmark-Settings.html#postmarkHttpsTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkHttpsTest",
          "package": "postmark",
          "partial": "Https Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttpsTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkTestToken",
          "package": "postmark",
          "signature": "Text",
          "source": "src/Network-Api-Postmark-Settings.html#postmarkTestToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Postmark Settings",
          "module": "Network.Api.Postmark.Settings",
          "name": "postmarkTestToken",
          "package": "postmark",
          "partial": "Test Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkTestToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003epostmark\u003c/code\u003e is a haskell toolkit for dealing with the postmarkapp.com api\n    for sending and receiving email.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Api.Postmark.Tutorial",
          "name": "Tutorial",
          "package": "postmark",
          "source": "src/Network-Api-Postmark-Tutorial.html",
          "type": "module"
        },
        "index": {
          "description": "postmark is haskell toolkit for dealing with the postmarkapp.com api for sending and receiving email",
          "hierarchy": "Network Api Postmark Tutorial",
          "module": "Network.Api.Postmark.Tutorial",
          "name": "Tutorial",
          "package": "postmark",
          "partial": "Tutorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Tutorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Postmark",
          "name": "Postmark",
          "package": "postmark",
          "source": "src/Network-Api-Postmark.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Postmark",
          "module": "Network.Api.Postmark",
          "name": "Postmark",
          "package": "postmark",
          "partial": "Postmark",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark.html#"
      }
    }
  ]
]