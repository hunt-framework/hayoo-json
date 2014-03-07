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
        "word": "hissmetrics"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is meant to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Web.KISSmetrics as KISSmetrics\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Web.KISSmetrics",
          "name": "KISSmetrics",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html",
          "type": "module"
        },
        "index": {
          "description": "This module is meant to be imported qualified import qualified Web.KISSmetrics as KISSmetrics",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "KISSmetrics",
          "package": "hissmetrics",
          "partial": "KISSmetrics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour KISSmetrics API key.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "APIKey",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html#APIKey",
          "type": "type"
        },
        "index": {
          "description": "Your KISSmetrics API key",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "APIKey",
          "package": "hissmetrics",
          "partial": "APIKey",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#t:APIKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of call that may be made to KISSmetrics.  It's\n defined as a GADT where event names and identities are\n existential values.\n\u003c/p\u003e\u003cp\u003eSince Haddock currently has problems with GADTs, here's the\n documentation about each constructor:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Record an event.  \u003ccode\u003e\u003ca\u003eeventName\u003c/a\u003e\u003c/code\u003e is the name of the\n  event being recorded, \u003ccode\u003e\u003ca\u003eidentity\u003c/a\u003e\u003c/code\u003e is the identity of the\n  person doing the event and \u003ccode\u003e\u003ca\u003eproperties\u003c/a\u003e\u003c/code\u003e are any other\n  optional properties you may want.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eSetProps\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Set user properties without recording an event.\n  \u003ccode\u003e\u003ca\u003eidentity\u003c/a\u003e\u003c/code\u003e is the identity of the person whose properties\n  will be changed and \u003ccode\u003e\u003ca\u003eproperties\u003c/a\u003e\u003c/code\u003e are the properties to be\n  set.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eAlias\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Alias two identities (\u003ccode\u003e\u003ca\u003eidentity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eidentity'\u003c/a\u003e\u003c/code\u003e)\n  as the same one.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSee also \u003ca\u003ehttp://support.kissmetrics.com/apis/specifications\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "CallType",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "data"
        },
        "index": {
          "description": "type of call that may be made to KISSmetrics It defined as GADT where event names and identities are existential values Since Haddock currently has problems with GADTs here the documentation about each constructor Record Record an event eventName is the name of the event being recorded identity is the identity of the person doing the event and properties are any other optional properties you may want SetProps Set user properties without recording an event identity is the identity of the person whose properties will be changed and properties are the properties to be set Alias Alias two identities identity and identity as the same one See also http support.kissmetrics.com apis specifications",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "CallType",
          "package": "hissmetrics",
          "partial": "Call Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#t:CallType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class of data types that are event names.\n\u003c/p\u003e\u003cp\u003eYou may just use \u003ccode\u003e\u003ca\u003eSimpleText\u003c/a\u003e\u003c/code\u003e (which is the only instance\n provided by default), but you may also create your own data\n type for event names and add an instance of this class.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "EventName",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html#EventName",
          "type": "class"
        },
        "index": {
          "description": "Type class of data types that are event names You may just use SimpleText which is the only instance provided by default but you may also create your own data type for event names and add an instance of this class",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "EventName",
          "package": "hissmetrics",
          "partial": "Event Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#t:EventName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class of data types that are user identities.\n\u003c/p\u003e\u003cp\u003eYou may just use \u003ccode\u003e\u003ca\u003eSimpleText\u003c/a\u003e\u003c/code\u003e (which is the only instance\n provided by default), but you may also create your own data\n type for event names and add an instance of this class.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "Identity",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html#Identity",
          "type": "class"
        },
        "index": {
          "description": "Type class of data types that are user identities You may just use SimpleText which is the only instance provided by default but you may also create your own data type for event names and add an instance of this class",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "Identity",
          "package": "hissmetrics",
          "partial": "Identity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA KISSmetrics property.  The property names needs to follow\n the rules outlined on \u003ccode\u003e\u003ca\u003eSimpleText\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e documentation.  The\n property value, on the other hand, are only limited to 8 KiB\n and don't have any other restrictions.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "Property",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html#Property",
          "type": "type"
        },
        "index": {
          "description": "KISSmetrics property The property names needs to follow the rules outlined on SimpleText documentation The property value on the other hand are only limited to KiB and don have any other restrictions",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "Property",
          "package": "hissmetrics",
          "partial": "Property",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKISSmetrics names and identities are limited to at most 255\n characters and all commas (\u003ccode\u003e,\u003c/code\u003e) and colons (\u003ccode\u003e:\u003c/code\u003e) are changed\n to spaces (\u003ccode\u003e \u003c/code\u003e).  Nothing is checked by this Haskell library,\n so be careful =).\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "SimpleText",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html#SimpleText",
          "type": "type"
        },
        "index": {
          "description": "KISSmetrics names and identities are limited to at most characters and all commas and colons are changed to spaces Nothing is checked by this Haskell library so be careful",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "SimpleText",
          "package": "hissmetrics",
          "partial": "Simple Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#t:SimpleText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA timestamp used only to ignore duplicated events.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "Timestamp",
          "package": "hissmetrics",
          "source": "src/Web-KISSmetrics.html#Timestamp",
          "type": "data"
        },
        "index": {
          "description": "timestamp used only to ignore duplicated events",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "Timestamp",
          "package": "hissmetrics",
          "partial": "Timestamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "Alias",
          "package": "hissmetrics",
          "signature": "ident -\u003e ident' -\u003e CallType",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "Alias",
          "normalized": "a-\u003eb-\u003eCallType",
          "package": "hissmetrics",
          "partial": "Alias",
          "signature": "ident-\u003eident'-\u003eCallType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:Alias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse KISSmetrics' servers time as the timestamp.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "Automatic",
          "package": "hissmetrics",
          "signature": "Automatic",
          "source": "src/Web-KISSmetrics.html#Timestamp",
          "type": "function"
        },
        "index": {
          "description": "Use KISSmetrics servers time as the timestamp",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "Automatic",
          "package": "hissmetrics",
          "partial": "Automatic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:Automatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse given time as the timestamp.  If possible, use\n \u003ccode\u003e\u003ca\u003eManual\u003c/a\u003e\u003c/code\u003e since it allows you to safely resend events that\n appear to have failed without being afraid of duplicates.\n See also \u003ccode\u003e\u003ca\u003egenerateTimestamp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "Manual",
          "package": "hissmetrics",
          "signature": "Manual UTCTime",
          "source": "src/Web-KISSmetrics.html#Timestamp",
          "type": "function"
        },
        "index": {
          "description": "Use given time as the timestamp If possible use Manual since it allows you to safely resend events that appear to have failed without being afraid of duplicates See also generateTimestamp",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "Manual",
          "package": "hissmetrics",
          "partial": "Manual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:Manual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "Record",
          "package": "hissmetrics",
          "signature": "event -\u003e ident -\u003e Timestamp -\u003e [Property] -\u003e CallType",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "Record",
          "normalized": "a-\u003eb-\u003eTimestamp-\u003e[Property]-\u003eCallType",
          "package": "hissmetrics",
          "partial": "Record",
          "signature": "event-\u003eident-\u003eTimestamp-\u003e[Property]-\u003eCallType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "SetProps",
          "package": "hissmetrics",
          "signature": "ident -\u003e Timestamp -\u003e [Property] -\u003e CallType",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "SetProps",
          "normalized": "a-\u003eTimestamp-\u003e[Property]-\u003eCallType",
          "package": "hissmetrics",
          "partial": "Set Props",
          "signature": "ident-\u003eTimestamp-\u003e[Property]-\u003eCallType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:SetProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall KISSmetrics' API.  See \u003ccode\u003e\u003ca\u003eCallType\u003c/a\u003e\u003c/code\u003e for documentation\n about which calls you may make.\n\u003c/p\u003e\u003cp\u003eKISSmetrics does not return errors even when an error occurs\n and there's absolutely no way of knowing if your request went\n through.  However, this function \u003cem\u003emay\u003c/em\u003e throw an exception if\n we fail to make the request to KISSmetrics (e.g. if there's a\n problem with your server's Internet connection).\n\u003c/p\u003e\u003cp\u003eNote that official KISSmetrics' APIs provide many functions\n (usually four) while we provide just this one and a sum data\n type.  This function alone does the work of \u003ccode\u003erecord\u003c/code\u003e, \u003ccode\u003eset\u003c/code\u003e,\n \u003ccode\u003eidentify\u003c/code\u003e and \u003ccode\u003ealias\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: Currently there's no support for automatically retrying\n failed request, you need to retry yourself.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "call",
          "package": "hissmetrics",
          "signature": "Manager-\u003e APIKey-\u003e CallType-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Call KISSmetrics API See CallType for documentation about which calls you may make KISSmetrics does not return errors even when an error occurs and there absolutely no way of knowing if your request went through However this function may throw an exception if we fail to make the request to KISSmetrics e.g if there problem with your server Internet connection Note that official KISSmetrics APIs provide many functions usually four while we provide just this one and sum data type This function alone does the work of record set identify and alias TODO Currently there no support for automatically retrying failed request you need to retry yourself",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "call",
          "normalized": "Manager-\u003eAPIKey-\u003eCallType-\u003eIO()",
          "package": "hissmetrics",
          "signature": "Manager-\u003eAPIKey-\u003eCallType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "eventName",
          "package": "hissmetrics",
          "signature": "event",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "eventName",
          "package": "hissmetrics",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:eventName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "fromEventName",
          "package": "hissmetrics",
          "signature": "event -\u003e SimpleText",
          "source": "src/Web-KISSmetrics.html#fromEventName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "fromEventName",
          "normalized": "a-\u003eSimpleText",
          "package": "hissmetrics",
          "partial": "Event Name",
          "signature": "event-\u003eSimpleText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:fromEventName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "fromIdentity",
          "package": "hissmetrics",
          "signature": "ident -\u003e SimpleText",
          "source": "src/Web-KISSmetrics.html#fromIdentity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "fromIdentity",
          "normalized": "a-\u003eSimpleText",
          "package": "hissmetrics",
          "partial": "Identity",
          "signature": "ident-\u003eSimpleText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:fromIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eManual\u003c/a\u003e\u003c/code\u003e timestamp with the current time.\n\u003c/p\u003e",
          "module": "Web.KISSmetrics",
          "name": "generateTimestamp",
          "package": "hissmetrics",
          "signature": "IO Timestamp",
          "source": "src/Web-KISSmetrics.html#generateTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Generate Manual timestamp with the current time",
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "generateTimestamp",
          "package": "hissmetrics",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:generateTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "identity",
          "package": "hissmetrics",
          "signature": "ident",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "identity",
          "package": "hissmetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "identity'",
          "package": "hissmetrics",
          "signature": "ident'",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "identity'",
          "package": "hissmetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:identity-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "properties",
          "package": "hissmetrics",
          "signature": "[Property]",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "properties",
          "normalized": "[Property]",
          "package": "hissmetrics",
          "signature": "[Property]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:properties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KISSmetrics",
          "name": "timestamp",
          "package": "hissmetrics",
          "signature": "Timestamp",
          "source": "src/Web-KISSmetrics.html#CallType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KISSmetrics",
          "module": "Web.KISSmetrics",
          "name": "timestamp",
          "package": "hissmetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hissmetrics/docs/Web-KISSmetrics.html#v:timestamp"
      }
    }
  ]
]