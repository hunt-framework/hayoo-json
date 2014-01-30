[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#",
      "description": {
        "fct-module": "Network.Api.Postmark.Core",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Core",
        "module": "Network.Api.Postmark.Core",
        "name": "Core",
        "normalized": "",
        "package": "postmark",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#v:email",
      "description": {
        "fct-descr": "\u003cp\u003eSend a single email: http:\u003cem/\u003edeveloper.postmarkapp.com/developer-build.html\n\u003c/p\u003e",
        "fct-module": "Network.Api.Postmark.Core",
        "fct-package": "postmark",
        "fct-signature": "Email -\u003e PostmarkRequest' Sent",
        "fct-source": "src/Network-Api-Postmark-Core.html#email",
        "fct-type": "function",
        "title": "email"
      },
      "index": {
        "description": "Send single email http developer.postmarkapp.com developer-build.html",
        "hierarchy": "Network Api Postmark Core",
        "module": "Network.Api.Postmark.Core",
        "name": "email",
        "normalized": "Email-\u003ePostmarkRequest' Sent",
        "package": "postmark",
        "partial": "",
        "signature": "Email-\u003ePostmarkRequest' Sent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#v:emails",
      "description": {
        "fct-descr": "\u003cp\u003eBulk send emails: http:\u003cem/\u003edeveloper.postmarkapp.com/developer-build.html#batching-messages\n\u003c/p\u003e",
        "fct-module": "Network.Api.Postmark.Core",
        "fct-package": "postmark",
        "fct-signature": "[Email] -\u003e PostmarkRequest' [Sent]",
        "fct-source": "src/Network-Api-Postmark-Core.html#emails",
        "fct-type": "function",
        "title": "emails"
      },
      "index": {
        "description": "Bulk send emails http developer.postmarkapp.com developer-build.html batching-messages",
        "hierarchy": "Network Api Postmark Core",
        "module": "Network.Api.Postmark.Core",
        "name": "emails",
        "normalized": "[Email]-\u003ePostmarkRequest'[Sent]",
        "package": "postmark",
        "partial": "",
        "signature": "[Email]-\u003ePostmarkRequest'[Sent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Core.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eRun the specified request with the specified settings.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Postmark.Core",
        "fct-package": "postmark",
        "fct-signature": "PostmarkSettings -\u003e PostmarkRequest e a -\u003e IO (PostmarkResponse e a)",
        "fct-source": "src/Network-Api-Postmark-Core.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Run the specified request with the specified settings",
        "hierarchy": "Network Api Postmark Core",
        "module": "Network.Api.Postmark.Core",
        "name": "request",
        "normalized": "PostmarkSettings-\u003ePostmarkRequest a b-\u003eIO(PostmarkResponse a b)",
        "package": "postmark",
        "partial": "",
        "signature": "PostmarkSettings-\u003ePostmarkRequest e a-\u003eIO(PostmarkResponse e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark-Data.html",
        "fct-type": "module",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "Data",
        "normalized": "",
        "package": "postmark",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#t:Attachment",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Data.html#Attachment",
        "fct-type": "data",
        "title": "Attachment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "Attachment",
        "normalized": "",
        "package": "postmark",
        "partial": "Attachment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#t:Email",
      "description": {
        "fct-descr": "\u003cp\u003eEmail data type. It is recommended that you use the defaultEmail\n   function and selector syntax to build an email, e.g.:\n\u003c/p\u003e\u003cpre\u003e defaultEmail {\n     emailFrom = \"you@yourdomain.com\"\n   , emailTo = \"person@example.com\"\n   , emailSubject = \"This is an example email!\"\n   }\n\u003c/pre\u003e",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "data",
        "title": "Email"
      },
      "index": {
        "description": "Email data type It is recommended that you use the defaultEmail function and selector syntax to build an email e.g defaultEmail emailFrom you@yourdomain.com emailTo person@example.com emailSubject This is an example email",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "Email",
        "normalized": "",
        "package": "postmark",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#t:Sent",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Data.html#Sent",
        "fct-type": "data",
        "title": "Sent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "Sent",
        "normalized": "",
        "package": "postmark",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:Attachment",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Attachment",
        "fct-source": "src/Network-Api-Postmark-Data.html#Attachment",
        "fct-type": "function",
        "title": "Attachment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "Attachment",
        "normalized": "",
        "package": "postmark",
        "partial": "Attachment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:Email",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Email",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "Email"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "Email",
        "normalized": "",
        "package": "postmark",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:Sent",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Sent",
        "fct-source": "src/Network-Api-Postmark-Data.html#Sent",
        "fct-type": "function",
        "title": "Sent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "Sent",
        "normalized": "",
        "package": "postmark",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:attachmentContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Attachment",
        "fct-type": "function",
        "title": "attachmentContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "attachmentContent",
        "normalized": "",
        "package": "postmark",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:attachmentContentType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Attachment",
        "fct-type": "function",
        "title": "attachmentContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "attachmentContentType",
        "normalized": "",
        "package": "postmark",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:attachmentName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Attachment",
        "fct-type": "function",
        "title": "attachmentName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "attachmentName",
        "normalized": "",
        "package": "postmark",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:defaultEmail",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Email",
        "fct-source": "src/Network-Api-Postmark-Data.html#defaultEmail",
        "fct-type": "function",
        "title": "defaultEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "defaultEmail",
        "normalized": "",
        "package": "postmark",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailAttachments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "[Attachment]",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailAttachments"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailAttachments",
        "normalized": "[Attachment]",
        "package": "postmark",
        "partial": "Attachments",
        "signature": "[Attachment]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailBcc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "[Text]",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailBcc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailBcc",
        "normalized": "[Text]",
        "package": "postmark",
        "partial": "Bcc",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailCc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "[Text]",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailCc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailCc",
        "normalized": "[Text]",
        "package": "postmark",
        "partial": "Cc",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailFrom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailFrom",
        "normalized": "",
        "package": "postmark",
        "partial": "From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Map Text Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailHeaders",
        "normalized": "",
        "package": "postmark",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailHtml",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailHtml"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailHtml",
        "normalized": "",
        "package": "postmark",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailReplyTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailReplyTo",
        "normalized": "",
        "package": "postmark",
        "partial": "Reply To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailSubject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailSubject"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailSubject",
        "normalized": "",
        "package": "postmark",
        "partial": "Subject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailTag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailTag",
        "normalized": "",
        "package": "postmark",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailText",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailText"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailText",
        "normalized": "",
        "package": "postmark",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:emailTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "[Text]",
        "fct-source": "src/Network-Api-Postmark-Data.html#Email",
        "fct-type": "function",
        "title": "emailTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "emailTo",
        "normalized": "[Text]",
        "package": "postmark",
        "partial": "To",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:ojson",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text -\u003e Maybe a -\u003e Maybe (Text, Value)",
        "fct-source": "src/Network-Api-Postmark-Data.html#ojson",
        "fct-type": "function",
        "title": "ojson"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "ojson",
        "normalized": "Text-\u003eMaybe a-\u003eMaybe(Text,Value)",
        "package": "postmark",
        "partial": "",
        "signature": "Text-\u003eMaybe a-\u003eMaybe(Text,Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:oljson",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text -\u003e [a] -\u003e ([a] -\u003e b) -\u003e Maybe (Text, Value)",
        "fct-source": "src/Network-Api-Postmark-Data.html#oljson",
        "fct-type": "function",
        "title": "oljson"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "oljson",
        "normalized": "Text-\u003e[a]-\u003e([a]-\u003eb)-\u003eMaybe(Text,Value)",
        "package": "postmark",
        "partial": "",
        "signature": "Text-\u003e[a]-\u003e([a]-\u003eb)-\u003eMaybe(Text,Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:omjson",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text -\u003e Map Text a -\u003e Maybe (Text, Value)",
        "fct-source": "src/Network-Api-Postmark-Data.html#omjson",
        "fct-type": "function",
        "title": "omjson"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "omjson",
        "normalized": "Text-\u003eMap Text a-\u003eMaybe(Text,Value)",
        "package": "postmark",
        "partial": "",
        "signature": "Text-\u003eMap Text a-\u003eMaybe(Text,Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:postmarkMessageId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Sent",
        "fct-type": "function",
        "title": "postmarkMessageId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "postmarkMessageId",
        "normalized": "",
        "package": "postmark",
        "partial": "Message Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:postmarkSubmittedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Sent",
        "fct-type": "function",
        "title": "postmarkSubmittedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "postmarkSubmittedAt",
        "normalized": "",
        "package": "postmark",
        "partial": "Submitted At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:postmarkTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#Sent",
        "fct-type": "function",
        "title": "postmarkTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "postmarkTo",
        "normalized": "",
        "package": "postmark",
        "partial": "To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Data.html#v:toText",
      "description": {
        "fct-module": "Network.Api.Postmark.Data",
        "fct-package": "postmark",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Network-Api-Postmark-Data.html#toText",
        "fct-type": "function",
        "title": "toText"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Data",
        "module": "Network.Api.Postmark.Data",
        "name": "toText",
        "normalized": "ByteString-\u003eText",
        "package": "postmark",
        "partial": "Text",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "Error",
        "normalized": "",
        "package": "postmark",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#t:PostmarkError",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkError",
        "fct-type": "data",
        "title": "PostmarkError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkError",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#t:PostmarkErrorType",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "data",
        "title": "PostmarkErrorType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkErrorType",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Error Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkBadApiToken",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkBadApiToken",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkBadApiToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkBadApiToken",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Bad Api Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkBounceNotFound",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkBounceNotFound",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkBounceNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkBounceNotFound",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Bounce Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkBounceQueryException",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkBounceQueryException",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkBounceQueryException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkBounceQueryException",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Bounce Query Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkError",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkError",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkError",
        "fct-type": "function",
        "title": "PostmarkError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkError",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkInactive",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkInactive",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkInactive"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkInactive",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Inactive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkIncompatibleJson",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkIncompatibleJson",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkIncompatibleJson"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkIncompatibleJson",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Incompatible Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkInvalidEmail",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkInvalidEmail",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkInvalidEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkInvalidEmail",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Invalid Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkInvalidJson",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkInvalidJson",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkInvalidJson"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkInvalidJson",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Invalid Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkJsonRequired",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkJsonRequired",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkJsonRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkJsonRequired",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Json Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkNotAllowed",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkNotAllowed",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkNotAllowed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkNotAllowed",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Not Allowed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkSenderNotConfirmed",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkSenderNotConfirmed",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkSenderNotConfirmed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkSenderNotConfirmed",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Sender Not Confirmed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkSenderNotFound",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkSenderNotFound",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkSenderNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkSenderNotFound",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Sender Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkTooManyMessages",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkTooManyMessages",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkTooManyMessages"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkTooManyMessages",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Too Many Messages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:PostmarkUnkownError",
      "description": {
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkUnkownError Int",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkErrorType",
        "fct-type": "function",
        "title": "PostmarkUnkownError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "PostmarkUnkownError",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Unkown Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:errorMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkError",
        "fct-type": "function",
        "title": "errorMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "errorMessage",
        "normalized": "",
        "package": "postmark",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Error.html#v:errorType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Error",
        "fct-package": "postmark",
        "fct-signature": "PostmarkErrorType",
        "fct-source": "src/Network-Api-Postmark-Error.html#PostmarkError",
        "fct-type": "function",
        "title": "errorType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Error",
        "module": "Network.Api.Postmark.Error",
        "name": "errorType",
        "normalized": "",
        "package": "postmark",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#",
      "description": {
        "fct-module": "Network.Api.Postmark.Request",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark-Request.html",
        "fct-type": "module",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Request",
        "module": "Network.Api.Postmark.Request",
        "name": "Request",
        "normalized": "",
        "package": "postmark",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#t:PostmarkRequest",
      "description": {
        "fct-module": "Network.Api.Postmark.Request",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Request.html#PostmarkRequest",
        "fct-type": "data",
        "title": "PostmarkRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Request",
        "module": "Network.Api.Postmark.Request",
        "name": "PostmarkRequest",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#t:PostmarkRequest-39-",
      "description": {
        "fct-module": "Network.Api.Postmark.Request",
        "fct-package": "postmark",
        "fct-signature": "type",
        "fct-source": "src/Network-Api-Postmark-Request.html#PostmarkRequest%27",
        "fct-type": "type",
        "title": "PostmarkRequest'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Request",
        "module": "Network.Api.Postmark.Request",
        "name": "PostmarkRequest'",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Request'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Request.html#v:PostmarkRequest",
      "description": {
        "fct-module": "Network.Api.Postmark.Request",
        "fct-package": "postmark",
        "fct-signature": "StdMethod -\u003e Text -\u003e RequestTransformer IO -\u003e PostmarkRequest e a",
        "fct-source": "src/Network-Api-Postmark-Request.html#PostmarkRequest",
        "fct-type": "function",
        "title": "PostmarkRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Request",
        "module": "Network.Api.Postmark.Request",
        "name": "PostmarkRequest",
        "normalized": "StdMethod-\u003eText-\u003eRequestTransformer IO-\u003ePostmarkRequest a b",
        "package": "postmark",
        "partial": "Postmark Request",
        "signature": "StdMethod-\u003eText-\u003eRequestTransformer IO-\u003ePostmarkRequest e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark-Response.html",
        "fct-type": "module",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "Response",
        "normalized": "",
        "package": "postmark",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#t:PostmarkResponse",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
        "fct-type": "data",
        "title": "PostmarkResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "PostmarkResponse",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#t:PostmarkResponse-39-",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "type",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkResponse%27",
        "fct-type": "type",
        "title": "PostmarkResponse'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "PostmarkResponse'",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Response'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#t:PostmarkUnexpectedType",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
        "fct-type": "data",
        "title": "PostmarkUnexpectedType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "PostmarkUnexpectedType",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Unexpected Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:JsonFormatError",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "JsonFormatError",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
        "fct-type": "function",
        "title": "JsonFormatError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "JsonFormatError",
        "normalized": "",
        "package": "postmark",
        "partial": "Json Format Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:JsonSyntaxError",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "JsonSyntaxError",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
        "fct-type": "function",
        "title": "JsonSyntaxError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "JsonSyntaxError",
        "normalized": "",
        "package": "postmark",
        "partial": "Json Syntax Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkFailure",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "PostmarkFailure e",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
        "fct-type": "function",
        "title": "PostmarkFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "PostmarkFailure",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkSuccess",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "PostmarkSuccess a",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
        "fct-type": "function",
        "title": "PostmarkSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "PostmarkSuccess",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkUnauthorized",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "PostmarkUnauthorized",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
        "fct-type": "function",
        "title": "PostmarkUnauthorized"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "PostmarkUnauthorized",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Unauthorized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:PostmarkUnexpected",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "PostmarkUnexpected PostmarkUnexpectedType Int (Maybe Text) (Maybe Text)",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkResponse",
        "fct-type": "function",
        "title": "PostmarkUnexpected"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "PostmarkUnexpected",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Unexpected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:ServerError",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "ServerError",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
        "fct-type": "function",
        "title": "ServerError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "ServerError",
        "normalized": "",
        "package": "postmark",
        "partial": "Server Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:UnexpectedResponseCode",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "UnexpectedResponseCode",
        "fct-source": "src/Network-Api-Postmark-Response.html#PostmarkUnexpectedType",
        "fct-type": "function",
        "title": "UnexpectedResponseCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "UnexpectedResponseCode",
        "normalized": "",
        "package": "postmark",
        "partial": "Unexpected Response Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:formatErr",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "Int -\u003e ByteString -\u003e Text -\u003e PostmarkResponse e a",
        "fct-source": "src/Network-Api-Postmark-Response.html#formatErr",
        "fct-type": "function",
        "title": "formatErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "formatErr",
        "normalized": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse a b",
        "package": "postmark",
        "partial": "Err",
        "signature": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Response.html#v:syntaxErr",
      "description": {
        "fct-module": "Network.Api.Postmark.Response",
        "fct-package": "postmark",
        "fct-signature": "Int -\u003e ByteString -\u003e Text -\u003e PostmarkResponse e a",
        "fct-source": "src/Network-Api-Postmark-Response.html#syntaxErr",
        "fct-type": "function",
        "title": "syntaxErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Response",
        "module": "Network.Api.Postmark.Response",
        "name": "syntaxErr",
        "normalized": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse a b",
        "package": "postmark",
        "partial": "Err",
        "signature": "Int-\u003eByteString-\u003eText-\u003ePostmarkResponse e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark-Settings.html",
        "fct-type": "module",
        "title": "Settings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "Settings",
        "normalized": "",
        "package": "postmark",
        "partial": "Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#t:PostmarkSettings",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
        "fct-type": "data",
        "title": "PostmarkSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "PostmarkSettings",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:PostmarkSettings",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "PostmarkSettings",
        "fct-source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
        "fct-type": "function",
        "title": "PostmarkSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "PostmarkSettings",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:apiToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
        "fct-type": "function",
        "title": "apiToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "apiToken",
        "normalized": "",
        "package": "postmark",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:apiUrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Settings.html#PostmarkSettings",
        "fct-type": "function",
        "title": "apiUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "apiUrl",
        "normalized": "",
        "package": "postmark",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttp",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "Text -\u003e PostmarkSettings",
        "fct-source": "src/Network-Api-Postmark-Settings.html#postmarkHttp",
        "fct-type": "function",
        "title": "postmarkHttp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "postmarkHttp",
        "normalized": "Text-\u003ePostmarkSettings",
        "package": "postmark",
        "partial": "Http",
        "signature": "Text-\u003ePostmarkSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttpTest",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "PostmarkSettings",
        "fct-source": "src/Network-Api-Postmark-Settings.html#postmarkHttpTest",
        "fct-type": "function",
        "title": "postmarkHttpTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "postmarkHttpTest",
        "normalized": "",
        "package": "postmark",
        "partial": "Http Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttps",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "Text -\u003e PostmarkSettings",
        "fct-source": "src/Network-Api-Postmark-Settings.html#postmarkHttps",
        "fct-type": "function",
        "title": "postmarkHttps"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "postmarkHttps",
        "normalized": "Text-\u003ePostmarkSettings",
        "package": "postmark",
        "partial": "Https",
        "signature": "Text-\u003ePostmarkSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkHttpsTest",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "PostmarkSettings",
        "fct-source": "src/Network-Api-Postmark-Settings.html#postmarkHttpsTest",
        "fct-type": "function",
        "title": "postmarkHttpsTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "postmarkHttpsTest",
        "normalized": "",
        "package": "postmark",
        "partial": "Https Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Settings.html#v:postmarkTestToken",
      "description": {
        "fct-module": "Network.Api.Postmark.Settings",
        "fct-package": "postmark",
        "fct-signature": "Text",
        "fct-source": "src/Network-Api-Postmark-Settings.html#postmarkTestToken",
        "fct-type": "function",
        "title": "postmarkTestToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark Settings",
        "module": "Network.Api.Postmark.Settings",
        "name": "postmarkTestToken",
        "normalized": "",
        "package": "postmark",
        "partial": "Test Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark-Tutorial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003epostmark\u003c/code\u003e is a haskell toolkit for dealing with the postmarkapp.com api\n    for sending and receiving email.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Api.Postmark.Tutorial",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark-Tutorial.html",
        "fct-type": "module",
        "title": "Tutorial"
      },
      "index": {
        "description": "postmark is haskell toolkit for dealing with the postmarkapp.com api for sending and receiving email",
        "hierarchy": "Network Api Postmark Tutorial",
        "module": "Network.Api.Postmark.Tutorial",
        "name": "Tutorial",
        "normalized": "",
        "package": "postmark",
        "partial": "Tutorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postmark/docs/Network-Api-Postmark.html#",
      "description": {
        "fct-module": "Network.Api.Postmark",
        "fct-package": "postmark",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Postmark.html",
        "fct-type": "module",
        "title": "Postmark"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Postmark",
        "module": "Network.Api.Postmark",
        "name": "Postmark",
        "normalized": "",
        "package": "postmark",
        "partial": "Postmark",
        "signature": ""
      }
    }
  }
]