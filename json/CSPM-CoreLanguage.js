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
        "word": "CSPM-CoreLanguage"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the event-related part of an interface between \n the CSPM-CoreLanguage and the underlying implementation.\n The underlying implementation has to instantiate the type families \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eEventSet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRenamingRelation\u003c/a\u003e\u003c/code\u003e\n and the class \u003ccode\u003e\u003ca\u003eBE\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eBE\u003c/a\u003e\u003c/code\u003e== base event).\n\u003c/p\u003e\u003cp\u003eFor full CSPM support (channels with multiple fields, event closure sets etc.)\n CSPM.CoreLanguage.Field is also needed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.CoreLanguage.Event",
          "name": "Event",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Event.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the event-related part of an interface between the CSPM-CoreLanguage and the underlying implementation The underlying implementation has to instantiate the type families Event EventSet RenamingRelation and the class BE BE base event For full CSPM support channels with multiple fields event closure sets etc CSPM.CoreLanguage.Field is also needed",
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "Event",
          "package": "CSPM-CoreLanguage",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first argument of all functions in \u003ccode\u003e\u003ca\u003eBE\u003c/a\u003e\u003c/code\u003e is a phantom-type-argument, i.e.\n applications pass _|_ and implementations must not use this value.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Event",
          "name": "BE",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Event.html#BE",
          "type": "class"
        },
        "index": {
          "description": "The first argument of all functions in BE is phantom-type-argument i.e applications pass and implementations must not use this value",
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "BE",
          "package": "CSPM-CoreLanguage",
          "partial": "BE",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "Event",
          "package": "CSPM-CoreLanguage",
          "signature": "Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "Event",
          "package": "CSPM-CoreLanguage",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "EventSet",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "EventSet",
          "package": "CSPM-CoreLanguage",
          "partial": "Event Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:EventSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "RenamingRelation",
          "package": "CSPM-CoreLanguage",
          "signature": "RenamingRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "RenamingRelation",
          "package": "CSPM-CoreLanguage",
          "partial": "Renaming Relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:RenamingRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "ShowEvent",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Event.html#ShowEvent",
          "type": "class"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "ShowEvent",
          "package": "CSPM-CoreLanguage",
          "partial": "Show Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:ShowEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "ShowTTE",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Event.html#ShowTTE",
          "type": "class"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "ShowTTE",
          "package": "CSPM-CoreLanguage",
          "partial": "Show TTE",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:ShowTTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigma is the set of all events that appear in a system.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Event",
          "name": "Sigma",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Event.html#Sigma",
          "type": "type"
        },
        "index": {
          "description": "Sigma is the set of all events that appear in system",
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "Sigma",
          "package": "CSPM-CoreLanguage",
          "partial": "Sigma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:Sigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for tick-events, tau-events and events from Sigma.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Event",
          "name": "TTE",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Event.html#TTE",
          "type": "data"
        },
        "index": {
          "description": "wrapper for tick-events tau-events and events from Sigma",
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "TTE",
          "package": "CSPM-CoreLanguage",
          "partial": "TTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#t:TTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "SEvent",
          "package": "CSPM-CoreLanguage",
          "signature": "SEvent (Event i)",
          "source": "src/CSPM-CoreLanguage-Event.html#TTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "SEvent",
          "package": "CSPM-CoreLanguage",
          "partial": "SEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:SEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "TauEvent",
          "package": "CSPM-CoreLanguage",
          "signature": "TauEvent",
          "source": "src/CSPM-CoreLanguage-Event.html#TTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "TauEvent",
          "package": "CSPM-CoreLanguage",
          "partial": "Tau Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:TauEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "TickEvent",
          "package": "CSPM-CoreLanguage",
          "signature": "TickEvent",
          "source": "src/CSPM-CoreLanguage-Event.html#TTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "TickEvent",
          "package": "CSPM-CoreLanguage",
          "partial": "Tick Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:TickEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "allEvents",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#allEvents",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "allEvents",
          "normalized": "a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "partial": "Events",
          "signature": "i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:allEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "delete",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e EventSet i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#delete",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "delete",
          "normalized": "a-\u003eEvent a-\u003eEventSet a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEvent i-\u003eEventSet i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "difference",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e EventSet i -\u003e EventSet i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#difference",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "difference",
          "normalized": "a-\u003eEventSet a-\u003eEventSet a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEventSet i-\u003eEventSet i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "eventEq",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e Event i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Event.html#eventEq",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "eventEq",
          "normalized": "a-\u003eEvent a-\u003eEvent a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "partial": "Eq",
          "signature": "i-\u003eEvent i-\u003eEvent i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:eventEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "eventSetToList",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e EventSet i -\u003e [Event i]",
          "source": "src/CSPM-CoreLanguage-Event.html#eventSetToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "eventSetToList",
          "normalized": "a-\u003eEventSet a-\u003e[Event a]",
          "package": "CSPM-CoreLanguage",
          "partial": "Set To List",
          "signature": "i-\u003eEventSet i-\u003e[Event i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:eventSetToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "getRenamingDomain",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e RenamingRelation i -\u003e [Event i]",
          "source": "src/CSPM-CoreLanguage-Event.html#getRenamingDomain",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "getRenamingDomain",
          "normalized": "a-\u003eRenamingRelation a-\u003e[Event a]",
          "package": "CSPM-CoreLanguage",
          "partial": "Renaming Domain",
          "signature": "i-\u003eRenamingRelation i-\u003e[Event i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:getRenamingDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "getRenamingRange",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e RenamingRelation i -\u003e [Event i]",
          "source": "src/CSPM-CoreLanguage-Event.html#getRenamingRange",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "getRenamingRange",
          "normalized": "a-\u003eRenamingRelation a-\u003e[Event a]",
          "package": "CSPM-CoreLanguage",
          "partial": "Renaming Range",
          "signature": "i-\u003eRenamingRelation i-\u003e[Event i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:getRenamingRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "imageRenaming",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e RenamingRelation i -\u003e Event i -\u003e [Event i]",
          "source": "src/CSPM-CoreLanguage-Event.html#imageRenaming",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "imageRenaming",
          "normalized": "a-\u003eRenamingRelation a-\u003eEvent a-\u003e[Event a]",
          "package": "CSPM-CoreLanguage",
          "partial": "Renaming",
          "signature": "i-\u003eRenamingRelation i-\u003eEvent i-\u003e[Event i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:imageRenaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "insert",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e EventSet i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#insert",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "insert",
          "normalized": "a-\u003eEvent a-\u003eEventSet a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEvent i-\u003eEventSet i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "intersection",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e EventSet i -\u003e EventSet i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#intersection",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "intersection",
          "normalized": "a-\u003eEventSet a-\u003eEventSet a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEventSet i-\u003eEventSet i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "isInRenaming",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e RenamingRelation i -\u003e Event i -\u003e Event i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Event.html#isInRenaming",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "isInRenaming",
          "normalized": "a-\u003eRenamingRelation a-\u003eEvent a-\u003eEvent a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "partial": "In Renaming",
          "signature": "i-\u003eRenamingRelation i-\u003eEvent i-\u003eEvent i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:isInRenaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "isInRenamingDomain",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e RenamingRelation i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Event.html#isInRenamingDomain",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "isInRenamingDomain",
          "normalized": "a-\u003eEvent a-\u003eRenamingRelation a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "partial": "In Renaming Domain",
          "signature": "i-\u003eEvent i-\u003eRenamingRelation i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:isInRenamingDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "isInRenamingRange",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e RenamingRelation i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Event.html#isInRenamingRange",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "isInRenamingRange",
          "normalized": "a-\u003eEvent a-\u003eRenamingRelation a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "partial": "In Renaming Range",
          "signature": "i-\u003eEvent i-\u003eRenamingRelation i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:isInRenamingRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "member",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e EventSet i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Event.html#member",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "member",
          "normalized": "a-\u003eEvent a-\u003eEventSet a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEvent i-\u003eEventSet i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "null",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e EventSet i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Event.html#null",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "null",
          "normalized": "a-\u003eEventSet a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEventSet i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "preImageRenaming",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e RenamingRelation i -\u003e Event i -\u003e [Event i]",
          "source": "src/CSPM-CoreLanguage-Event.html#preImageRenaming",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "preImageRenaming",
          "normalized": "a-\u003eRenamingRelation a-\u003eEvent a-\u003e[Event a]",
          "package": "CSPM-CoreLanguage",
          "partial": "Image Renaming",
          "signature": "i-\u003eRenamingRelation i-\u003eEvent i-\u003e[Event i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:preImageRenaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "renamingFromList",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e [(Event i, Event i)] -\u003e RenamingRelation i",
          "source": "src/CSPM-CoreLanguage-Event.html#renamingFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "renamingFromList",
          "normalized": "a-\u003e[(Event a,Event a)]-\u003eRenamingRelation a",
          "package": "CSPM-CoreLanguage",
          "partial": "From List",
          "signature": "i-\u003e[(Event i,Event i)]-\u003eRenamingRelation i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:renamingFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "renamingToList",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e RenamingRelation i -\u003e [(Event i, Event i)]",
          "source": "src/CSPM-CoreLanguage-Event.html#renamingToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "renamingToList",
          "normalized": "a-\u003eRenamingRelation a-\u003e[(Event a,Event a)]",
          "package": "CSPM-CoreLanguage",
          "partial": "To List",
          "signature": "i-\u003eRenamingRelation i-\u003e[(Event i,Event i)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:renamingToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "showEvent",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e String",
          "source": "src/CSPM-CoreLanguage-Event.html#showEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "showEvent",
          "normalized": "a-\u003eString",
          "package": "CSPM-CoreLanguage",
          "partial": "Event",
          "signature": "i-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:showEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "showTTE",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e String",
          "source": "src/CSPM-CoreLanguage-Event.html#showTTE",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "showTTE",
          "normalized": "a-\u003eString",
          "package": "CSPM-CoreLanguage",
          "partial": "TTE",
          "signature": "i-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:showTTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "singleEventToClosureSet",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#singleEventToClosureSet",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "singleEventToClosureSet",
          "normalized": "a-\u003eEvent a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "partial": "Event To Closure Set",
          "signature": "i-\u003eEvent i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:singleEventToClosureSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "singleton",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#singleton",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "singleton",
          "normalized": "a-\u003eEvent a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEvent i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Event",
          "name": "union",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e EventSet i -\u003e EventSet i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Event.html#union",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Event",
          "module": "CSPM.CoreLanguage.Event",
          "name": "union",
          "normalized": "a-\u003eEventSet a-\u003eEventSet a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eEventSet i-\u003eEventSet i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Event.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the class \u003ccode\u003e\u003ca\u003eBF\u003c/a\u003e\u003c/code\u003e for versions of CSP\n that also support multi-field-events and event-closure sets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.CoreLanguage.Field",
          "name": "Field",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Field.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the class BF for versions of CSP that also support multi-field-events and event-closure sets",
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "Field",
          "package": "CSPM-CoreLanguage",
          "partial": "Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "BF",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Field.html#BF",
          "type": "class"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "BF",
          "package": "CSPM-CoreLanguage",
          "partial": "BF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#t:BF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "ClosureState",
          "package": "CSPM-CoreLanguage",
          "signature": "ClosureState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "ClosureState",
          "package": "CSPM-CoreLanguage",
          "partial": "Closure State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#t:ClosureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "ClosureView",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Field.html#ClosureView",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "ClosureView",
          "package": "CSPM-CoreLanguage",
          "partial": "Closure View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#t:ClosureView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "Field",
          "package": "CSPM-CoreLanguage",
          "signature": "Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "Field",
          "package": "CSPM-CoreLanguage",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldSet",
          "package": "CSPM-CoreLanguage",
          "signature": "FieldSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldSet",
          "package": "CSPM-CoreLanguage",
          "partial": "Field Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#t:FieldSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "PrefixFieldView",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Field.html#PrefixFieldView",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "PrefixFieldView",
          "package": "CSPM-CoreLanguage",
          "partial": "Prefix Field View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#t:PrefixFieldView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "PrefixState",
          "package": "CSPM-CoreLanguage",
          "signature": "PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "PrefixState",
          "package": "CSPM-CoreLanguage",
          "partial": "Prefix State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#t:PrefixState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldGuard",
          "package": "CSPM-CoreLanguage",
          "signature": "FieldGuard (FieldSet i)",
          "source": "src/CSPM-CoreLanguage-Field.html#PrefixFieldView",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldGuard",
          "package": "CSPM-CoreLanguage",
          "partial": "Field Guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:FieldGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldIn",
          "package": "CSPM-CoreLanguage",
          "signature": "FieldIn",
          "source": "src/CSPM-CoreLanguage-Field.html#PrefixFieldView",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldIn",
          "package": "CSPM-CoreLanguage",
          "partial": "Field In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:FieldIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldOut",
          "package": "CSPM-CoreLanguage",
          "signature": "FieldOut (Field i)",
          "source": "src/CSPM-CoreLanguage-Field.html#PrefixFieldView",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "FieldOut",
          "package": "CSPM-CoreLanguage",
          "partial": "Field Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:FieldOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "InClosure",
          "package": "CSPM-CoreLanguage",
          "signature": "InClosure",
          "source": "src/CSPM-CoreLanguage-Field.html#ClosureView",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "InClosure",
          "package": "CSPM-CoreLanguage",
          "partial": "In Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:InClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "MaybeInClosure",
          "package": "CSPM-CoreLanguage",
          "signature": "MaybeInClosure",
          "source": "src/CSPM-CoreLanguage-Field.html#ClosureView",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "MaybeInClosure",
          "package": "CSPM-CoreLanguage",
          "partial": "Maybe In Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:MaybeInClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "NotInClosure",
          "package": "CSPM-CoreLanguage",
          "signature": "NotInClosure",
          "source": "src/CSPM-CoreLanguage-Field.html#ClosureView",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "NotInClosure",
          "package": "CSPM-CoreLanguage",
          "partial": "Not In Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:NotInClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "channelLen",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Field i -\u003e Int",
          "source": "src/CSPM-CoreLanguage-Field.html#channelLen",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "channelLen",
          "normalized": "a-\u003eField a-\u003eInt",
          "package": "CSPM-CoreLanguage",
          "partial": "Len",
          "signature": "i-\u003eField i-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:channelLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "closureRestore",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e ClosureState i -\u003e EventSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#closureRestore",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "closureRestore",
          "normalized": "a-\u003eClosureState a-\u003eEventSet a",
          "package": "CSPM-CoreLanguage",
          "partial": "Restore",
          "signature": "i-\u003eClosureState i-\u003eEventSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:closureRestore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "closureStateInit",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e EventSet i -\u003e ClosureState i",
          "source": "src/CSPM-CoreLanguage-Field.html#closureStateInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "closureStateInit",
          "normalized": "a-\u003eEventSet a-\u003eClosureState a",
          "package": "CSPM-CoreLanguage",
          "partial": "State Init",
          "signature": "i-\u003eEventSet i-\u003eClosureState i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:closureStateInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "closureStateNext",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e ClosureState i -\u003e Field i -\u003e ClosureState i",
          "source": "src/CSPM-CoreLanguage-Field.html#closureStateNext",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "closureStateNext",
          "normalized": "a-\u003eClosureState a-\u003eField a-\u003eClosureState a",
          "package": "CSPM-CoreLanguage",
          "partial": "State Next",
          "signature": "i-\u003eClosureState i-\u003eField i-\u003eClosureState i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:closureStateNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "delete",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Field i -\u003e FieldSet i -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#delete",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "delete",
          "normalized": "a-\u003eField a-\u003eFieldSet a-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eField i-\u003eFieldSet i-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "difference",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e FieldSet i -\u003e FieldSet i -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#difference",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "difference",
          "normalized": "a-\u003eFieldSet a-\u003eFieldSet a-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eFieldSet i-\u003eFieldSet i-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "fieldEq",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Field i -\u003e Field i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Field.html#fieldEq",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "fieldEq",
          "normalized": "a-\u003eField a-\u003eField a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "partial": "Eq",
          "signature": "i-\u003eField i-\u003eField i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:fieldEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "fieldSetFromList",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e [Field i] -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#fieldSetFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "fieldSetFromList",
          "normalized": "a-\u003e[Field a]-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "partial": "Set From List",
          "signature": "i-\u003e[Field i]-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:fieldSetFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "fieldSetToList",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e FieldSet i -\u003e [Field i]",
          "source": "src/CSPM-CoreLanguage-Field.html#fieldSetToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "fieldSetToList",
          "normalized": "a-\u003eFieldSet a-\u003e[Field a]",
          "package": "CSPM-CoreLanguage",
          "partial": "Set To List",
          "signature": "i-\u003eFieldSet i-\u003e[Field i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:fieldSetToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "insert",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Field i -\u003e FieldSet i -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#insert",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "insert",
          "normalized": "a-\u003eField a-\u003eFieldSet a-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eField i-\u003eFieldSet i-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "intersection",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e FieldSet i -\u003e FieldSet i -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#intersection",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "intersection",
          "normalized": "a-\u003eFieldSet a-\u003eFieldSet a-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eFieldSet i-\u003eFieldSet i-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "joinFields",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e [Field i] -\u003e Event i",
          "source": "src/CSPM-CoreLanguage-Field.html#joinFields",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "joinFields",
          "normalized": "a-\u003e[Field a]-\u003eEvent a",
          "package": "CSPM-CoreLanguage",
          "partial": "Fields",
          "signature": "i-\u003e[Field i]-\u003eEvent i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:joinFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "member",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Field i -\u003e FieldSet i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Field.html#member",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "member",
          "normalized": "a-\u003eField a-\u003eFieldSet a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eField i-\u003eFieldSet i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "null",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e FieldSet i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Field.html#null",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "null",
          "normalized": "a-\u003eFieldSet a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eFieldSet i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "prefixStateFinalize",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e PrefixState i -\u003e Maybe (Prefix i)",
          "source": "src/CSPM-CoreLanguage-Field.html#prefixStateFinalize",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "prefixStateFinalize",
          "normalized": "a-\u003ePrefixState a-\u003eMaybe(Prefix a)",
          "package": "CSPM-CoreLanguage",
          "partial": "State Finalize",
          "signature": "i-\u003ePrefixState i-\u003eMaybe(Prefix i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:prefixStateFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "prefixStateInit",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Prefix i -\u003e PrefixState i",
          "source": "src/CSPM-CoreLanguage-Field.html#prefixStateInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "prefixStateInit",
          "normalized": "a-\u003ePrefix a-\u003ePrefixState a",
          "package": "CSPM-CoreLanguage",
          "partial": "State Init",
          "signature": "i-\u003ePrefix i-\u003ePrefixState i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:prefixStateInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "prefixStateNext",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e PrefixState i -\u003e Field i -\u003e Maybe (PrefixState i)",
          "source": "src/CSPM-CoreLanguage-Field.html#prefixStateNext",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "prefixStateNext",
          "normalized": "a-\u003ePrefixState a-\u003eField a-\u003eMaybe(PrefixState a)",
          "package": "CSPM-CoreLanguage",
          "partial": "State Next",
          "signature": "i-\u003ePrefixState i-\u003eField i-\u003eMaybe(PrefixState i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:prefixStateNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "seenPrefixInClosure",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e ClosureState i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Field.html#seenPrefixInClosure",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "seenPrefixInClosure",
          "normalized": "a-\u003eClosureState a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "partial": "Prefix In Closure",
          "signature": "i-\u003eClosureState i-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:seenPrefixInClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "singleton",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Field i -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#singleton",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "singleton",
          "normalized": "a-\u003eField a-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eField i-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "splitFields",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e Event i -\u003e [Field i]",
          "source": "src/CSPM-CoreLanguage-Field.html#splitFields",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "splitFields",
          "normalized": "a-\u003eEvent a-\u003e[Field a]",
          "package": "CSPM-CoreLanguage",
          "partial": "Fields",
          "signature": "i-\u003eEvent i-\u003e[Field i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:splitFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "union",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e FieldSet i -\u003e FieldSet i -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#union",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "union",
          "normalized": "a-\u003eFieldSet a-\u003eFieldSet a-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "signature": "i-\u003eFieldSet i-\u003eFieldSet i-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "viewClosureFields",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e ClosureState i -\u003e FieldSet i",
          "source": "src/CSPM-CoreLanguage-Field.html#viewClosureFields",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "viewClosureFields",
          "normalized": "a-\u003eClosureState a-\u003eFieldSet a",
          "package": "CSPM-CoreLanguage",
          "partial": "Closure Fields",
          "signature": "i-\u003eClosureState i-\u003eFieldSet i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:viewClosureFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "viewClosureState",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e ClosureState i -\u003e ClosureView",
          "source": "src/CSPM-CoreLanguage-Field.html#viewClosureState",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "viewClosureState",
          "normalized": "a-\u003eClosureState a-\u003eClosureView",
          "package": "CSPM-CoreLanguage",
          "partial": "Closure State",
          "signature": "i-\u003eClosureState i-\u003eClosureView",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:viewClosureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Field",
          "name": "viewPrefixState",
          "package": "CSPM-CoreLanguage",
          "signature": "i -\u003e PrefixState i -\u003e PrefixFieldView i",
          "source": "src/CSPM-CoreLanguage-Field.html#viewPrefixState",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Field",
          "module": "CSPM.CoreLanguage.Field",
          "name": "viewPrefixState",
          "normalized": "a-\u003ePrefixState a-\u003ePrefixFieldView a",
          "package": "CSPM-CoreLanguage",
          "partial": "Prefix State",
          "signature": "i-\u003ePrefixState i-\u003ePrefixFieldView i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Field.html#v:viewPrefixState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules defines an FDR-compatible CSP core language.\n The core language deals with CSP-related constructs like processes and events.\n\u003c/p\u003e\u003cp\u003eThe implementation of the underlying language\n must provide instances for the type families \u003ccode\u003e\u003ca\u003ePrefix\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExtProcess\u003c/a\u003e\u003c/code\u003e\n and class \u003ccode\u003e\u003ca\u003eBL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Process",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Process.html",
          "type": "module"
        },
        "index": {
          "description": "This modules defines an FDR-compatible CSP core language The core language deals with CSP-related constructs like processes and events The implementation of the underlying language must provide instances for the type families Prefix ExtProcess and class BL",
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Process",
          "package": "CSPM-CoreLanguage",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "BL",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Process.html#BL",
          "type": "class"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "BL",
          "package": "CSPM-CoreLanguage",
          "partial": "BL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#t:BL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process that has not yet been switched on.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Process",
          "name": "ExtProcess",
          "package": "CSPM-CoreLanguage",
          "signature": "ExtProcess",
          "type": "function"
        },
        "index": {
          "description": "process that has not yet been switched on",
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "ExtProcess",
          "package": "CSPM-CoreLanguage",
          "partial": "Ext Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#t:ExtProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prefix expression.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Prefix",
          "package": "CSPM-CoreLanguage",
          "signature": "Prefix",
          "type": "function"
        },
        "index": {
          "description": "prefix expression",
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Prefix",
          "package": "CSPM-CoreLanguage",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#t:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type for CSPM processes.\n  For efficiency, replicated alphabetized parallel has an explicit constructor.\n  Other replicated operations get translated on the fly.\n  For constructing processes one should rather use the wrappers from \n  CSPM.CoreLanguage.ProcessWrappers.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Process",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "data"
        },
        "index": {
          "description": "data type for CSPM processes For efficiency replicated alphabetized parallel has an explicit constructor Other replicated operations get translated on the fly For constructing processes one should rather use the wrappers from CSPM.CoreLanguage.ProcessWrappers",
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Process",
          "package": "CSPM-CoreLanguage",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "AParallel",
          "package": "CSPM-CoreLanguage",
          "signature": "AParallel (EventSet i) (EventSet i) (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "AParallel",
          "package": "CSPM-CoreLanguage",
          "partial": "AParallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:AParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust for debugging.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Process",
          "name": "AProcess",
          "package": "CSPM-CoreLanguage",
          "signature": "AProcess Int",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "description": "Just for debugging",
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "AProcess",
          "package": "CSPM-CoreLanguage",
          "partial": "AProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:AProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Chaos",
          "package": "CSPM-CoreLanguage",
          "signature": "Chaos (EventSet i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Chaos",
          "package": "CSPM-CoreLanguage",
          "partial": "Chaos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Chaos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Exception",
          "package": "CSPM-CoreLanguage",
          "signature": "Exception (EventSet i) (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Exception",
          "package": "CSPM-CoreLanguage",
          "partial": "Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "ExternalChoice",
          "package": "CSPM-CoreLanguage",
          "signature": "ExternalChoice (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "ExternalChoice",
          "package": "CSPM-CoreLanguage",
          "partial": "External Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:ExternalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Hide",
          "package": "CSPM-CoreLanguage",
          "signature": "Hide (EventSet i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Hide",
          "package": "CSPM-CoreLanguage",
          "partial": "Hide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Interleave",
          "package": "CSPM-CoreLanguage",
          "signature": "Interleave (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Interleave",
          "package": "CSPM-CoreLanguage",
          "partial": "Interleave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "InternalChoice",
          "package": "CSPM-CoreLanguage",
          "signature": "InternalChoice (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "InternalChoice",
          "package": "CSPM-CoreLanguage",
          "partial": "Internal Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:InternalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Interrupt",
          "package": "CSPM-CoreLanguage",
          "signature": "Interrupt (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Interrupt",
          "package": "CSPM-CoreLanguage",
          "partial": "Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "LinkParallel",
          "package": "CSPM-CoreLanguage",
          "signature": "LinkParallel (RenamingRelation i) (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "LinkParallel",
          "package": "CSPM-CoreLanguage",
          "partial": "Link Parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:LinkParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Omega",
          "package": "CSPM-CoreLanguage",
          "signature": "Omega",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Omega",
          "package": "CSPM-CoreLanguage",
          "partial": "Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Omega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Prefix",
          "package": "CSPM-CoreLanguage",
          "signature": "Prefix (Prefix i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Prefix",
          "package": "CSPM-CoreLanguage",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Renaming",
          "package": "CSPM-CoreLanguage",
          "signature": "Renaming (RenamingRelation i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Renaming",
          "package": "CSPM-CoreLanguage",
          "partial": "Renaming",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Renaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "RepAParallel",
          "package": "CSPM-CoreLanguage",
          "signature": "RepAParallel [(EventSet i, Process i)]",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "RepAParallel",
          "normalized": "RepAParallel[(EventSet a,Process a)]",
          "package": "CSPM-CoreLanguage",
          "partial": "Rep AParallel",
          "signature": "RepAParallel[(EventSet i,Process i)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:RepAParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Seq",
          "package": "CSPM-CoreLanguage",
          "signature": "Seq (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Seq",
          "package": "CSPM-CoreLanguage",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Sharing",
          "package": "CSPM-CoreLanguage",
          "signature": "Sharing (Process i) (EventSet i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Sharing",
          "package": "CSPM-CoreLanguage",
          "partial": "Sharing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Sharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Skip",
          "package": "CSPM-CoreLanguage",
          "signature": "Skip",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Skip",
          "package": "CSPM-CoreLanguage",
          "partial": "Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Stop",
          "package": "CSPM-CoreLanguage",
          "signature": "Stop",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Stop",
          "package": "CSPM-CoreLanguage",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "SwitchedOff",
          "package": "CSPM-CoreLanguage",
          "signature": "SwitchedOff (ExtProcess i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "SwitchedOff",
          "package": "CSPM-CoreLanguage",
          "partial": "Switched Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:SwitchedOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "Timeout",
          "package": "CSPM-CoreLanguage",
          "signature": "Timeout (Process i) (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "Timeout",
          "package": "CSPM-CoreLanguage",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "isOmega",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e Bool",
          "source": "src/CSPM-CoreLanguage-Process.html#isOmega",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "isOmega",
          "normalized": "Process a-\u003eBool",
          "package": "CSPM-CoreLanguage",
          "partial": "Omega",
          "signature": "Process i-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:isOmega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to perform an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e return the successor \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e or Nothing\n   if the event is not possible.\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage.Process",
          "name": "prefixNext",
          "package": "CSPM-CoreLanguage",
          "signature": "Prefix i -\u003e Event i -\u003e Maybe (Process i)",
          "source": "src/CSPM-CoreLanguage-Process.html#prefixNext",
          "type": "method"
        },
        "index": {
          "description": "Try to perform an Event return the successor Process or Nothing if the event is not possible",
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "prefixNext",
          "normalized": "Prefix a-\u003eEvent a-\u003eMaybe(Process a)",
          "package": "CSPM-CoreLanguage",
          "partial": "Next",
          "signature": "Prefix i-\u003eEvent i-\u003eMaybe(Process i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:prefixNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.Process",
          "name": "switchOn",
          "package": "CSPM-CoreLanguage",
          "signature": "ExtProcess i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-Process.html#switchOn",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage Process",
          "module": "CSPM.CoreLanguage.Process",
          "name": "switchOn",
          "normalized": "ExtProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "On",
          "signature": "ExtProcess i-\u003eProcess i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-Process.html#v:switchOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrappers for the constructors of data type \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e and some\n rewriting rules for replicated operations.\n\u003c/p\u003e\u003cp\u003eThis can also be used as EDSL for CSP.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "ProcessWrapper",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html",
          "type": "module"
        },
        "index": {
          "description": "Wrappers for the constructors of data type Process and some rewriting rules for replicated operations This can also be used as EDSL for CSP",
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "ProcessWrapper",
          "package": "CSPM-CoreLanguage",
          "partial": "Process Wrapper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "aparallel",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet i -\u003e EventSet i -\u003e Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#aparallel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "aparallel",
          "normalized": "EventSet a-\u003eEventSet a-\u003eProcess a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet i-\u003eEventSet i-\u003eProcess i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:aparallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "chaos",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#chaos",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "chaos",
          "normalized": "EventSet a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:chaos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "externalChoice",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#externalChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "externalChoice",
          "normalized": "Process a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Choice",
          "signature": "Process i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:externalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "hide",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#hide",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "hide",
          "normalized": "EventSet a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "interleave",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "interleave",
          "normalized": "Process a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "internalChoice",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#internalChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "internalChoice",
          "normalized": "Process a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Choice",
          "signature": "Process i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:internalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "interrupt",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#interrupt",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "interrupt",
          "normalized": "Process a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "linkParallel",
          "package": "CSPM-CoreLanguage",
          "signature": "RenamingRelation i -\u003e Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#linkParallel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "linkParallel",
          "normalized": "RenamingRelation a-\u003eProcess a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Parallel",
          "signature": "RenamingRelation i-\u003eProcess i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:linkParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "prefix",
          "package": "CSPM-CoreLanguage",
          "signature": "Prefix i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#prefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "prefix",
          "normalized": "Prefix a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "Prefix i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "renaming",
          "package": "CSPM-CoreLanguage",
          "signature": "RenamingRelation i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#renaming",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "renaming",
          "normalized": "RenamingRelation a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "RenamingRelation i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:renaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repAParallel",
          "package": "CSPM-CoreLanguage",
          "signature": "[(EventSet i, Process i)] -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#repAParallel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repAParallel",
          "normalized": "[(EventSet a,Process a)]-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "AParallel",
          "signature": "[(EventSet i,Process i)]-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:repAParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repExternalChoice",
          "package": "CSPM-CoreLanguage",
          "signature": "[Process i] -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#repExternalChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repExternalChoice",
          "normalized": "[Process a]-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "External Choice",
          "signature": "[Process i]-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:repExternalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repInterleave",
          "package": "CSPM-CoreLanguage",
          "signature": "[Process i] -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#repInterleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repInterleave",
          "normalized": "[Process a]-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Interleave",
          "signature": "[Process i]-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:repInterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repInternalChoice",
          "package": "CSPM-CoreLanguage",
          "signature": "[Process i] -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#repInternalChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repInternalChoice",
          "normalized": "[Process a]-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Internal Choice",
          "signature": "[Process i]-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:repInternalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repLinkParallel",
          "package": "CSPM-CoreLanguage",
          "signature": "RenamingRelation i -\u003e [Process i] -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#repLinkParallel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repLinkParallel",
          "normalized": "RenamingRelation a-\u003e[Process a]-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Link Parallel",
          "signature": "RenamingRelation i-\u003e[Process i]-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:repLinkParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repSeq",
          "package": "CSPM-CoreLanguage",
          "signature": "[Process i] -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#repSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repSeq",
          "normalized": "[Process a]-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Seq",
          "signature": "[Process i]-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:repSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repSharing",
          "package": "CSPM-CoreLanguage",
          "signature": "EventSet i -\u003e [Process i] -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#repSharing",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "repSharing",
          "normalized": "EventSet a-\u003e[Process a]-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Sharing",
          "signature": "EventSet i-\u003e[Process i]-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:repSharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "seq",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#seq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "seq",
          "normalized": "Process a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "sharing",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e EventSet i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#sharing",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "sharing",
          "normalized": "Process a-\u003eEventSet a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i-\u003eEventSet i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:sharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "skip",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#skip",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "skip",
          "package": "CSPM-CoreLanguage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "stop",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "stop",
          "package": "CSPM-CoreLanguage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "switchedOff",
          "package": "CSPM-CoreLanguage",
          "signature": "ExtProcess i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#switchedOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "switchedOff",
          "normalized": "ExtProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "partial": "Off",
          "signature": "ExtProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:switchedOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "timeout",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i -\u003e Process i -\u003e Process i",
          "source": "src/CSPM-CoreLanguage-ProcessWrapper.html#timeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM CoreLanguage ProcessWrapper",
          "module": "CSPM.CoreLanguage.ProcessWrapper",
          "name": "timeout",
          "normalized": "Process a-\u003eProcess a-\u003eProcess a",
          "package": "CSPM-CoreLanguage",
          "signature": "Process i-\u003eProcess i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage-ProcessWrapper.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJust re-exports.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.CoreLanguage",
          "name": "CoreLanguage",
          "package": "CSPM-CoreLanguage",
          "source": "src/CSPM-CoreLanguage.html",
          "type": "module"
        },
        "index": {
          "description": "Just re-exports",
          "hierarchy": "CSPM CoreLanguage",
          "module": "CSPM.CoreLanguage",
          "name": "CoreLanguage",
          "package": "CSPM-CoreLanguage",
          "partial": "Core Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the CSPM-CoreLangugage library\n\u003c/p\u003e",
          "module": "CSPM.CoreLanguage",
          "name": "coreLanguageVersion",
          "package": "CSPM-CoreLanguage",
          "signature": "Version",
          "source": "src/CSPM-CoreLanguage.html#coreLanguageVersion",
          "type": "function"
        },
        "index": {
          "description": "The version of the CSPM-CoreLangugage library",
          "hierarchy": "CSPM CoreLanguage",
          "module": "CSPM.CoreLanguage",
          "name": "coreLanguageVersion",
          "package": "CSPM-CoreLanguage",
          "partial": "Language Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-CoreLanguage/docs/CSPM-CoreLanguage.html#v:coreLanguageVersion"
      }
    }
  ]
]