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
        "word": "happstack-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003einstances of Typeable, Data, Serialize, Version, and Default for ClockTime\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.State.ClockTime",
          "name": "ClockTime",
          "package": "happstack-state",
          "source": "src/Happstack-State-ClockTime.html",
          "type": "module"
        },
        "index": {
          "description": "instances of Typeable Data Serialize Version and Default for ClockTime",
          "hierarchy": "Happstack State ClockTime",
          "module": "Happstack.State.ClockTime",
          "name": "ClockTime",
          "package": "happstack-state",
          "partial": "Clock Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ClockTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of the internal clock time.\n Clock times may be compared, converted to strings, or converted to an\n external calendar time \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e for I/O or other manipulations.\n\u003c/p\u003e",
          "module": "Happstack.State.ClockTime",
          "name": "ClockTime",
          "package": "happstack-state",
          "type": "data"
        },
        "index": {
          "description": "representation of the internal clock time Clock times may be compared converted to strings or converted to an external calendar time CalendarTime for or other manipulations",
          "hierarchy": "Happstack State ClockTime",
          "module": "Happstack.State.ClockTime",
          "name": "ClockTime",
          "package": "happstack-state",
          "partial": "Clock Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ClockTime.html#t:ClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a clock time.  The arguments are a number\n of seconds since 00:00:00 (UTC) on 1 January 1970,\n and an additional number of picoseconds.\n\u003c/p\u003e\u003cp\u003eIn Haskell 98, the \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e type is abstract.\n\u003c/p\u003e",
          "module": "Happstack.State.ClockTime",
          "name": "TOD",
          "package": "happstack-state",
          "signature": "TOD Integer Integer",
          "type": "function"
        },
        "index": {
          "description": "Construct clock time The arguments are number of seconds since UTC on January and an additional number of picoseconds In Haskell the ClockTime type is abstract",
          "hierarchy": "Happstack State ClockTime",
          "module": "Happstack.State.ClockTime",
          "name": "TOD",
          "package": "happstack-state",
          "partial": "TOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ClockTime.html#v:TOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "ComponentSystem",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "ComponentSystem",
          "package": "happstack-state",
          "partial": "Component System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level Cons for enumerating type dependencies of a Component\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": ":+:",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Type level Cons for enumerating type dependencies of Component",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": ":+:",
          "package": "happstack-state",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "Collect",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#Collect",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Collect",
          "package": "happstack-state",
          "partial": "Collect",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:Collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "Collection",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#Collection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Collection",
          "package": "happstack-state",
          "partial": "Collection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:Collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to be used as a part of Happstack's MACID state, a data type\n needs to be an instance of Component.  The minimal definition is \n an initialValue and the type corresponding to the set of Dependencies.\n Note that the SubHandlers condition will be automatically met if the\n Dependencies is built from \u003ccode\u003e\u003ca\u003eEnd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e with other instances of \n Component and Methods\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "Component",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#Component",
          "type": "class"
        },
        "index": {
          "description": "In order to be used as part of Happstack MACID state data type needs to be an instance of Component The minimal definition is an initialValue and the type corresponding to the set of Dependencies Note that the SubHandlers condition will be automatically met if the Dependencies is built from End and with other instances of Component and Methods",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Component",
          "package": "happstack-state",
          "partial": "Component",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:Component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState type -\u003e method map\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "ComponentTree",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#ComponentTree",
          "type": "type"
        },
        "index": {
          "description": "State type method map",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "ComponentTree",
          "package": "happstack-state",
          "partial": "Component Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:ComponentTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState type -\u003e all versions\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "ComponentVersions",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#ComponentVersions",
          "type": "type"
        },
        "index": {
          "description": "State type all versions",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "ComponentVersions",
          "package": "happstack-state",
          "partial": "Component Versions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:ComponentVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent of [] for type level lists.  Used for Components that have no\n dependencies\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "End",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#End",
          "type": "data"
        },
        "index": {
          "description": "Equivalent of for type level lists Used for Components that have no dependencies",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "End",
          "package": "happstack-state",
          "partial": "End",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethod is the actual type that all Updates and Querys eventually\n get lifted into via \u003ccode\u003emkMethods\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "Method",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Method is the actual type that all Updates and Querys eventually get lifted into via mkMethods",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Method",
          "package": "happstack-state",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "MethodMap",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#MethodMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "MethodMap",
          "package": "happstack-state",
          "partial": "Method Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:MethodMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for enumerating the set of defined methods by the type of the state.\n Instances should not be defined directly, but using \u003ccode\u003emkMethods\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "Methods",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#Methods",
          "type": "class"
        },
        "index": {
          "description": "Class for enumerating the set of defined methods by the type of the state Instances should not be defined directly but using mkMethods",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Methods",
          "package": "happstack-state",
          "partial": "Methods",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:Methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "QueryEvent",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#QueryEvent",
          "type": "class"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "QueryEvent",
          "package": "happstack-state",
          "partial": "Query Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:QueryEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubHandlers is used to build up the set of components corresponding to\n the instance type.\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "SubHandlers",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#SubHandlers",
          "type": "class"
        },
        "index": {
          "description": "SubHandlers is used to build up the set of components corresponding to the instance type",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "SubHandlers",
          "package": "happstack-state",
          "partial": "Sub Handlers",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:SubHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "UpdateEvent",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentSystem.html#UpdateEvent",
          "type": "class"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "UpdateEvent",
          "package": "happstack-state",
          "partial": "Update Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#t:UpdateEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": ":+:",
          "package": "happstack-state",
          "signature": "h :+: t",
          "source": "src/Happstack-State-ComponentSystem.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": ":+:",
          "package": "happstack-state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "Collection",
          "package": "happstack-state",
          "signature": "Collection ComponentTree ComponentVersions [IO ()]",
          "source": "src/Happstack-State-ComponentSystem.html#Collection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Collection",
          "normalized": "Collection ComponentTree ComponentVersions[IO()]",
          "package": "happstack-state",
          "partial": "Collection",
          "signature": "Collection ComponentTree ComponentVersions[IO()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:Collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "End",
          "package": "happstack-state",
          "signature": "End",
          "source": "src/Happstack-State-ComponentSystem.html#End",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "End",
          "package": "happstack-state",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "MethodMap",
          "package": "happstack-state",
          "signature": "Map String (Method st) -\u003e MethodMap",
          "source": "src/Happstack-State-ComponentSystem.html#MethodMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "MethodMap",
          "normalized": "Map String(Method a)-\u003eMethodMap",
          "package": "happstack-state",
          "partial": "Method Map",
          "signature": "Map String(Method st)-\u003eMethodMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:MethodMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "Query",
          "package": "happstack-state",
          "signature": "(ev -\u003e Query st res) -\u003e Method st",
          "source": "src/Happstack-State-ComponentSystem.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Query",
          "normalized": "(a-\u003eQuery b c)-\u003eMethod b",
          "package": "happstack-state",
          "partial": "Query",
          "signature": "(ev-\u003eQuery st res)-\u003eMethod st",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "Update",
          "package": "happstack-state",
          "signature": "(ev -\u003e Update st res) -\u003e Method st",
          "source": "src/Happstack-State-ComponentSystem.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "Update",
          "normalized": "(a-\u003eUpdate b c)-\u003eMethod b",
          "package": "happstack-state",
          "partial": "Update",
          "signature": "(ev-\u003eUpdate st res)-\u003eMethod st",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "addItem",
          "package": "happstack-state",
          "signature": "String -\u003e MethodMap -\u003e [ByteString] -\u003e IO () -\u003e m ()",
          "source": "src/Happstack-State-ComponentSystem.html#addItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "addItem",
          "normalized": "String-\u003eMethodMap-\u003e[ByteString]-\u003eIO()-\u003ea()",
          "package": "happstack-state",
          "partial": "Item",
          "signature": "String-\u003eMethodMap-\u003e[ByteString]-\u003eIO()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:addItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "collectHandlers",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e (ComponentTree, ComponentVersions, [IO ()])",
          "source": "src/Happstack-State-ComponentSystem.html#collectHandlers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "collectHandlers",
          "normalized": "Proxy a-\u003e(ComponentTree,ComponentVersions,[IO()])",
          "package": "happstack-state",
          "partial": "Handlers",
          "signature": "Proxy a-\u003e(ComponentTree,ComponentVersions,[IO()])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:collectHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "collectHandlers'",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e Collect ()",
          "source": "src/Happstack-State-ComponentSystem.html#collectHandlers%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "collectHandlers'",
          "normalized": "Proxy a-\u003eCollect()",
          "package": "happstack-state",
          "partial": "Handlers'",
          "signature": "Proxy a-\u003eCollect()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:collectHandlers-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error is thrown when this is evaluated.\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "dup",
          "package": "happstack-state",
          "signature": "String -\u003e b",
          "source": "src/Happstack-State-ComponentSystem.html#dup",
          "type": "function"
        },
        "index": {
          "description": "An error is thrown when this is evaluated",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "dup",
          "normalized": "String-\u003ea",
          "package": "happstack-state",
          "signature": "String-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "initialValue",
          "package": "happstack-state",
          "signature": "a",
          "source": "src/Happstack-State-ComponentSystem.html#initialValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "initialValue",
          "package": "happstack-state",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:initialValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays the type of a Method\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentSystem",
          "name": "methodType",
          "package": "happstack-state",
          "signature": "Method t -\u003e String",
          "source": "src/Happstack-State-ComponentSystem.html#methodType",
          "type": "function"
        },
        "index": {
          "description": "Displays the type of Method",
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "methodType",
          "normalized": "Method a-\u003eString",
          "package": "happstack-state",
          "partial": "Type",
          "signature": "Method t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:methodType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "methods",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e [Method a]",
          "source": "src/Happstack-State-ComponentSystem.html#methods",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "methods",
          "normalized": "Proxy a-\u003e[Method a]",
          "package": "happstack-state",
          "signature": "Proxy a-\u003e[Method a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "onLoad",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e IO ()",
          "source": "src/Happstack-State-ComponentSystem.html#onLoad",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "onLoad",
          "normalized": "Proxy a-\u003eIO()",
          "package": "happstack-state",
          "partial": "Load",
          "signature": "Proxy a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:onLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentSystem",
          "name": "subHandlers",
          "package": "happstack-state",
          "signature": "a -\u003e Collect ()",
          "source": "src/Happstack-State-ComponentSystem.html#subHandlers",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack State ComponentSystem",
          "module": "Happstack.State.ComponentSystem",
          "name": "subHandlers",
          "normalized": "a-\u003eCollect()",
          "package": "happstack-state",
          "partial": "Handlers",
          "signature": "a-\u003eCollect()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentSystem.html#v:subHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.ComponentTH",
          "name": "ComponentTH",
          "package": "happstack-state",
          "source": "src/Happstack-State-ComponentTH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State ComponentTH",
          "module": "Happstack.State.ComponentTH",
          "name": "ComponentTH",
          "package": "happstack-state",
          "partial": "Component TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentTH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will derive, for the provided type name and the provided\n   list of methods, an instance of Methods for the given type and necessary\n   instance of UpdateEvent and QueryEvent to make the provided list of functions\n   into Methods.\n   This TH splice needs to be executed for any MACID state type in order to \n   have the necessary code for event handling generated.\n   Ex:  \u003ccode\u003e$(mkMethods ''Foo ['fooUpdate,\u003ccode\u003efooQuery\u003c/code\u003e])\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.State.ComponentTH",
          "name": "mkMethods",
          "package": "happstack-state",
          "signature": "Name -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Happstack-State-ComponentTH.html#mkMethods",
          "type": "function"
        },
        "index": {
          "description": "This function will derive for the provided type name and the provided list of methods an instance of Methods for the given type and necessary instance of UpdateEvent and QueryEvent to make the provided list of functions into Methods This TH splice needs to be executed for any MACID state type in order to have the necessary code for event handling generated Ex mkMethods Foo fooUpdate fooQuery",
          "hierarchy": "Happstack State ComponentTH",
          "module": "Happstack.State.ComponentTH",
          "name": "mkMethods",
          "normalized": "Name-\u003e[Name]-\u003eQ[Dec]",
          "package": "happstack-state",
          "partial": "Methods",
          "signature": "Name-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-ComponentTH.html#v:mkMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Control",
          "name": "Control",
          "package": "happstack-state",
          "source": "src/Happstack-State-Control.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State Control",
          "module": "Happstack.State.Control",
          "name": "Control",
          "package": "happstack-state",
          "partial": "Control",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Control.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Control",
          "name": "processLoggingFlags",
          "package": "happstack-state",
          "signature": "IO a -\u003e IO a",
          "source": "src/Happstack-State-Control.html#processLoggingFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Control",
          "module": "Happstack.State.Control",
          "name": "processLoggingFlags",
          "normalized": "IO a-\u003eIO a",
          "package": "happstack-state",
          "partial": "Logging Flags",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Control.html#v:processLoggingFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts the MACID system without replication support.  Uses the default behavior\n of saving the state into the _local directory.\n\u003c/p\u003e",
          "module": "Happstack.State.Control",
          "name": "startSystemState",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e IO (MVar TxControl)",
          "source": "src/Happstack-State-Control.html#startSystemState",
          "type": "function"
        },
        "index": {
          "description": "Starts the MACID system without replication support Uses the default behavior of saving the state into the local directory",
          "hierarchy": "Happstack State Control",
          "module": "Happstack.State.Control",
          "name": "startSystemState",
          "normalized": "Proxy a-\u003eIO(MVar TxControl)",
          "package": "happstack-state",
          "partial": "System State",
          "signature": "Proxy a-\u003eIO(MVar TxControl)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Control.html#v:startSystemState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Control",
          "name": "startSystemStateAmazon",
          "package": "happstack-state",
          "signature": "ApplicationName -\u003e Proxy a -\u003e IO (MVar TxControl)",
          "source": "src/Happstack-State-Control.html#startSystemStateAmazon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Control",
          "module": "Happstack.State.Control",
          "name": "startSystemStateAmazon",
          "normalized": "ApplicationName-\u003eProxy a-\u003eIO(MVar TxControl)",
          "package": "happstack-state",
          "partial": "System State Amazon",
          "signature": "ApplicationName-\u003eProxy a-\u003eIO(MVar TxControl)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Control.html#v:startSystemStateAmazon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the default Saver.  It will save the application state into\n the _local directory.\n\u003c/p\u003e",
          "module": "Happstack.State.Control",
          "name": "stdSaver",
          "package": "happstack-state",
          "signature": "IO Saver",
          "source": "src/Happstack-State-Control.html#stdSaver",
          "type": "function"
        },
        "index": {
          "description": "Returns the default Saver It will save the application state into the local directory",
          "hierarchy": "Happstack State Control",
          "module": "Happstack.State.Control",
          "name": "stdSaver",
          "package": "happstack-state",
          "partial": "Saver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Control.html#v:stdSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a signal.\n   On unix, a signal is sigINT or sigTERM. On windows, the signal\n   is entering \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.State.Control",
          "name": "waitForTermination",
          "package": "happstack-state",
          "signature": "IO ()",
          "source": "src/Happstack-State-Control.html#waitForTermination",
          "type": "function"
        },
        "index": {
          "description": "Wait for signal On unix signal is sigINT or sigTERM On windows the signal is entering",
          "hierarchy": "Happstack State Control",
          "module": "Happstack.State.Control",
          "name": "waitForTermination",
          "normalized": "IO()",
          "package": "happstack-state",
          "partial": "For Termination",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Control.html#v:waitForTermination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.File",
          "name": "File",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Impl-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl File",
          "module": "Happstack.State.Saver.Impl.File",
          "name": "File",
          "package": "happstack-state",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.File",
          "name": "PrefixLock",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Impl-File.html#PrefixLock",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl File",
          "module": "Happstack.State.Saver.Impl.File",
          "name": "PrefixLock",
          "package": "happstack-state",
          "partial": "Prefix Lock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-File.html#t:PrefixLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.File",
          "name": "fileReader",
          "package": "happstack-state",
          "signature": "FilePath -\u003e String -\u003e Int -\u003e IO (ReaderStream a)",
          "source": "src/Happstack-State-Saver-Impl-File.html#fileReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl File",
          "module": "Happstack.State.Saver.Impl.File",
          "name": "fileReader",
          "normalized": "FilePath-\u003eString-\u003eInt-\u003eIO(ReaderStream a)",
          "package": "happstack-state",
          "partial": "Reader",
          "signature": "FilePath-\u003eString-\u003eInt-\u003eIO(ReaderStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-File.html#v:fileReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.File",
          "name": "fileWriter",
          "package": "happstack-state",
          "signature": "FilePath -\u003e String -\u003e Int -\u003e IO (WriterStream a)",
          "source": "src/Happstack-State-Saver-Impl-File.html#fileWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl File",
          "module": "Happstack.State.Saver.Impl.File",
          "name": "fileWriter",
          "normalized": "FilePath-\u003eString-\u003eInt-\u003eIO(WriterStream a)",
          "package": "happstack-state",
          "partial": "Writer",
          "signature": "FilePath-\u003eString-\u003eInt-\u003eIO(WriterStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-File.html#v:fileWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.File",
          "name": "obtainPrefixLock",
          "package": "happstack-state",
          "signature": "FilePath -\u003e IO PrefixLock",
          "source": "src/Happstack-State-Saver-Impl-File.html#obtainPrefixLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl File",
          "module": "Happstack.State.Saver.Impl.File",
          "name": "obtainPrefixLock",
          "normalized": "FilePath-\u003eIO PrefixLock",
          "package": "happstack-state",
          "partial": "Prefix Lock",
          "signature": "FilePath-\u003eIO PrefixLock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-File.html#v:obtainPrefixLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelinquish the lock by removing it and then verifying the removal.\n\u003c/p\u003e",
          "module": "Happstack.State.Saver.Impl.File",
          "name": "releasePrefixLock",
          "package": "happstack-state",
          "signature": "PrefixLock -\u003e IO ()",
          "source": "src/Happstack-State-Saver-Impl-File.html#releasePrefixLock",
          "type": "function"
        },
        "index": {
          "description": "Relinquish the lock by removing it and then verifying the removal",
          "hierarchy": "Happstack State Saver Impl File",
          "module": "Happstack.State.Saver.Impl.File",
          "name": "releasePrefixLock",
          "normalized": "PrefixLock-\u003eIO()",
          "package": "happstack-state",
          "partial": "Prefix Lock",
          "signature": "PrefixLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-File.html#v:releasePrefixLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "Memory",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Impl-Memory.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "Memory",
          "package": "happstack-state",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "Store",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Impl-Memory.html#Store",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "Store",
          "package": "happstack-state",
          "partial": "Store",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#t:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "addToStore",
          "package": "happstack-state",
          "signature": "a -\u003e b -\u003e ByteString -\u003e Map a (Map b ByteString) -\u003e Map a (Map b ByteString)",
          "source": "src/Happstack-State-Saver-Impl-Memory.html#addToStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "addToStore",
          "normalized": "a-\u003eb-\u003eByteString-\u003eMap a(Map b ByteString)-\u003eMap a(Map b ByteString)",
          "package": "happstack-state",
          "partial": "To Store",
          "signature": "a-\u003eb-\u003eByteString-\u003eMap a(Map b ByteString)-\u003eMap a(Map b ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#v:addToStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "memoryReader",
          "package": "happstack-state",
          "signature": "MVar Store -\u003e String -\u003e Int -\u003e IO (ReaderStream a)",
          "source": "src/Happstack-State-Saver-Impl-Memory.html#memoryReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "memoryReader",
          "normalized": "MVar Store-\u003eString-\u003eInt-\u003eIO(ReaderStream a)",
          "package": "happstack-state",
          "partial": "Reader",
          "signature": "MVar Store-\u003eString-\u003eInt-\u003eIO(ReaderStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#v:memoryReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "memoryWriter",
          "package": "happstack-state",
          "signature": "MVar Store -\u003e String -\u003e Int -\u003e IO (WriterStream a)",
          "source": "src/Happstack-State-Saver-Impl-Memory.html#memoryWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "memoryWriter",
          "normalized": "MVar Store-\u003eString-\u003eInt-\u003eIO(WriterStream a)",
          "package": "happstack-state",
          "partial": "Writer",
          "signature": "MVar Store-\u003eString-\u003eInt-\u003eIO(WriterStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#v:memoryWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "newMemoryStore",
          "package": "happstack-state",
          "signature": "IO (MVar Store)",
          "source": "src/Happstack-State-Saver-Impl-Memory.html#newMemoryStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "newMemoryStore",
          "package": "happstack-state",
          "partial": "Memory Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#v:newMemoryStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "parseAll",
          "package": "happstack-state",
          "signature": "ByteString -\u003e [a]",
          "source": "src/Happstack-State-Saver-Impl-Memory.html#parseAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "parseAll",
          "normalized": "ByteString-\u003e[a]",
          "package": "happstack-state",
          "partial": "All",
          "signature": "ByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#v:parseAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "setStore",
          "package": "happstack-state",
          "signature": "a -\u003e b -\u003e c -\u003e Map a (Map b c) -\u003e Map a (Map b c)",
          "source": "src/Happstack-State-Saver-Impl-Memory.html#setStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Memory",
          "module": "Happstack.State.Saver.Impl.Memory",
          "name": "setStore",
          "normalized": "a-\u003eb-\u003ec-\u003eMap a(Map b c)-\u003eMap a(Map b c)",
          "package": "happstack-state",
          "partial": "Store",
          "signature": "a-\u003eb-\u003ec-\u003eMap a(Map b c)-\u003eMap a(Map b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Memory.html#v:setStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Queue",
          "name": "Queue",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Impl-Queue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Queue",
          "module": "Happstack.State.Saver.Impl.Queue",
          "name": "Queue",
          "package": "happstack-state",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Impl.Queue",
          "name": "queueReader",
          "package": "happstack-state",
          "signature": "ReaderStream a -\u003e IO (ReaderStream a)",
          "source": "src/Happstack-State-Saver-Impl-Queue.html#queueReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Impl Queue",
          "module": "Happstack.State.Saver.Impl.Queue",
          "name": "queueReader",
          "normalized": "ReaderStream a-\u003eIO(ReaderStream a)",
          "package": "happstack-state",
          "partial": "Reader",
          "signature": "ReaderStream a-\u003eIO(ReaderStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Queue.html#v:queueReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA saver that bunches writes.\n\u003c/p\u003e",
          "module": "Happstack.State.Saver.Impl.Queue",
          "name": "queueWriter",
          "package": "happstack-state",
          "signature": "WriterStream Encoded -\u003e IO (WriterStream a)",
          "source": "src/Happstack-State-Saver-Impl-Queue.html#queueWriter",
          "type": "function"
        },
        "index": {
          "description": "saver that bunches writes",
          "hierarchy": "Happstack State Saver Impl Queue",
          "module": "Happstack.State.Saver.Impl.Queue",
          "name": "queueWriter",
          "normalized": "WriterStream Encoded-\u003eIO(WriterStream a)",
          "package": "happstack-state",
          "partial": "Writer",
          "signature": "WriterStream Encoded-\u003eIO(WriterStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Impl-Queue.html#v:queueWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "Types",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "Types",
          "package": "happstack-state",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "ReaderStream",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Types.html#ReaderStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "ReaderStream",
          "package": "happstack-state",
          "partial": "Reader Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#t:ReaderStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "WriterStream",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Types.html#WriterStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "WriterStream",
          "package": "happstack-state",
          "partial": "Writer Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#t:WriterStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "ReaderStream",
          "package": "happstack-state",
          "signature": "ReaderStream",
          "source": "src/Happstack-State-Saver-Types.html#ReaderStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "ReaderStream",
          "package": "happstack-state",
          "partial": "Reader Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:ReaderStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "WriterStream",
          "package": "happstack-state",
          "signature": "WriterStream",
          "source": "src/Happstack-State-Saver-Types.html#WriterStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "WriterStream",
          "package": "happstack-state",
          "partial": "Writer Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:WriterStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "readerClose",
          "package": "happstack-state",
          "signature": "IO ()",
          "source": "src/Happstack-State-Saver-Types.html#ReaderStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "readerClose",
          "normalized": "IO()",
          "package": "happstack-state",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:readerClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "readerGet",
          "package": "happstack-state",
          "signature": "IO ([a], Int)",
          "source": "src/Happstack-State-Saver-Types.html#ReaderStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "readerGet",
          "normalized": "IO([a],Int)",
          "package": "happstack-state",
          "partial": "Get",
          "signature": "IO([a],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:readerGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "readerGetUncut",
          "package": "happstack-state",
          "signature": "IO [a]",
          "source": "src/Happstack-State-Saver-Types.html#ReaderStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "readerGetUncut",
          "normalized": "IO[a]",
          "package": "happstack-state",
          "partial": "Get Uncut",
          "signature": "IO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:readerGetUncut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "writerAdd",
          "package": "happstack-state",
          "signature": "a -\u003e IO () -\u003e IO ()",
          "source": "src/Happstack-State-Saver-Types.html#WriterStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "writerAdd",
          "normalized": "a-\u003eIO()-\u003eIO()",
          "package": "happstack-state",
          "partial": "Add",
          "signature": "a-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:writerAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "writerAtomicReplace",
          "package": "happstack-state",
          "signature": "a -\u003e IO ()",
          "source": "src/Happstack-State-Saver-Types.html#WriterStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "writerAtomicReplace",
          "normalized": "a-\u003eIO()",
          "package": "happstack-state",
          "partial": "Atomic Replace",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:writerAtomicReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "writerClose",
          "package": "happstack-state",
          "signature": "IO ()",
          "source": "src/Happstack-State-Saver-Types.html#WriterStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "writerClose",
          "normalized": "IO()",
          "package": "happstack-state",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:writerClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver.Types",
          "name": "writerCut",
          "package": "happstack-state",
          "signature": "IO Int",
          "source": "src/Happstack-State-Saver-Types.html#WriterStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver Types",
          "module": "Happstack.State.Saver.Types",
          "name": "writerCut",
          "package": "happstack-state",
          "partial": "Cut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver-Types.html#v:writerCut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver",
          "name": "Saver",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "Saver",
          "package": "happstack-state",
          "partial": "Saver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver",
          "name": "PrefixLock",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver-Impl-File.html#PrefixLock",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "PrefixLock",
          "package": "happstack-state",
          "partial": "Prefix Lock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#t:PrefixLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver",
          "name": "Saver",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver.html#Saver",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "Saver",
          "package": "happstack-state",
          "partial": "Saver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#t:Saver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA saver that operates on files. The parameter is the prefix for the files.\n\u003c/p\u003e",
          "module": "[\"Happstack.State.Saver\",\"Happstack.State\"]",
          "name": "FileSaver",
          "package": "happstack-state",
          "signature": "FileSaver String",
          "source": "src/Happstack-State-Saver.html#Saver",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:FileSaver\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:FileSaver\"]"
        },
        "index": {
          "description": "saver that operates on files The parameter is the prefix for the files",
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "FileSaver",
          "package": "happstack-state",
          "partial": "File Saver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:FileSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Saver\",\"Happstack.State\"]",
          "name": "Memory",
          "package": "happstack-state",
          "signature": "Memory (MVar Store)",
          "source": "src/Happstack-State-Saver.html#Saver",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:Memory\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:Memory\"]"
        },
        "index": {
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "Memory",
          "package": "happstack-state",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:Memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA saver that discards all output\n\u003c/p\u003e",
          "module": "[\"Happstack.State.Saver\",\"Happstack.State\"]",
          "name": "NullSaver",
          "package": "happstack-state",
          "signature": "NullSaver",
          "source": "src/Happstack-State-Saver.html#Saver",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:NullSaver\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:NullSaver\"]"
        },
        "index": {
          "description": "saver that discards all output",
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "NullSaver",
          "package": "happstack-state",
          "partial": "Null Saver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:NullSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable queueing.\n\u003c/p\u003e",
          "module": "[\"Happstack.State.Saver\",\"Happstack.State\"]",
          "name": "Queue",
          "package": "happstack-state",
          "signature": "Queue Saver",
          "source": "src/Happstack-State-Saver.html#Saver",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:Queue\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:Queue\"]"
        },
        "index": {
          "description": "Enable queueing",
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "Queue",
          "package": "happstack-state",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatches over the Saver type provided to return a \u003ccode\u003e\u003ca\u003eReaderStream\u003c/a\u003e\u003c/code\u003e for the inferred\n type. \n\u003c/p\u003e",
          "module": "Happstack.State.Saver",
          "name": "createReader",
          "package": "happstack-state",
          "signature": "Saver -\u003e String -\u003e Int -\u003e IO (ReaderStream a)",
          "source": "src/Happstack-State-Saver.html#createReader",
          "type": "function"
        },
        "index": {
          "description": "Dispatches over the Saver type provided to return ReaderStream for the inferred type",
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "createReader",
          "normalized": "Saver-\u003eString-\u003eInt-\u003eIO(ReaderStream a)",
          "package": "happstack-state",
          "partial": "Reader",
          "signature": "Saver-\u003eString-\u003eInt-\u003eIO(ReaderStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:createReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatches over the Saver type provided to return a WriterStream for the\n inferred type. \n\u003c/p\u003e",
          "module": "Happstack.State.Saver",
          "name": "createWriter",
          "package": "happstack-state",
          "signature": "Saver -\u003e String -\u003e Int -\u003e IO (WriterStream a)",
          "source": "src/Happstack-State-Saver.html#createWriter",
          "type": "function"
        },
        "index": {
          "description": "Dispatches over the Saver type provided to return WriterStream for the inferred type",
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "createWriter",
          "normalized": "Saver-\u003eString-\u003eInt-\u003eIO(WriterStream a)",
          "package": "happstack-state",
          "partial": "Writer",
          "signature": "Saver-\u003eString-\u003eInt-\u003eIO(WriterStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:createWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver",
          "name": "obtainLock",
          "package": "happstack-state",
          "signature": "Saver -\u003e IO (Maybe PrefixLock)",
          "source": "src/Happstack-State-Saver.html#obtainLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "obtainLock",
          "normalized": "Saver-\u003eIO(Maybe PrefixLock)",
          "package": "happstack-state",
          "partial": "Lock",
          "signature": "Saver-\u003eIO(Maybe PrefixLock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:obtainLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Saver",
          "name": "releaseLock",
          "package": "happstack-state",
          "signature": "Maybe PrefixLock -\u003e IO ()",
          "source": "src/Happstack-State-Saver.html#releaseLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Saver",
          "module": "Happstack.State.Saver",
          "name": "releaseLock",
          "normalized": "Maybe PrefixLock-\u003eIO()",
          "package": "happstack-state",
          "partial": "Lock",
          "signature": "Maybe PrefixLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Saver.html#v:releaseLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "Transaction",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "Transaction",
          "package": "happstack-state",
          "partial": "Transaction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EH",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EH",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EH",
          "package": "happstack-state",
          "partial": "EH",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EmitInternal",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EmitInternal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EmitInternal",
          "package": "happstack-state",
          "partial": "Emit Internal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EmitInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EvLoaders",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EvLoaders",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EvLoaders",
          "package": "happstack-state",
          "partial": "Ev Loaders",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EvLoaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EvLoaders'",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EvLoaders%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EvLoaders'",
          "package": "happstack-state",
          "partial": "Ev Loaders'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EvLoaders-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "Event",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "Event",
          "package": "happstack-state",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EventHandler",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EventHandler",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EventHandler",
          "package": "happstack-state",
          "partial": "Event Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EventItem",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EventItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EventItem",
          "package": "happstack-state",
          "partial": "Event Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EventItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EventLogEntry",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EventLogEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EventLogEntry",
          "package": "happstack-state",
          "partial": "Event Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EventLogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EventMap",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EventMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EventMap",
          "package": "happstack-state",
          "partial": "Event Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EventMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EventQueue",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EventQueue",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EventQueue",
          "package": "happstack-state",
          "partial": "Event Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:EventQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "ExceptionT",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#ExceptionT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ExceptionT",
          "package": "happstack-state",
          "partial": "Exception",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:ExceptionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "GetCheckpointState",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#GetCheckpointState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "GetCheckpointState",
          "package": "happstack-state",
          "partial": "Get Checkpoint State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:GetCheckpointState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "GetState",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#GetState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "GetState",
          "package": "happstack-state",
          "partial": "Get State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:GetState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "HR",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#HR",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "HR",
          "package": "happstack-state",
          "partial": "HR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:HR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "IHR",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#IHR",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "IHR",
          "package": "happstack-state",
          "partial": "IHR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:IHR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "ProcessQueue",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#ProcessQueue",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ProcessQueue",
          "package": "happstack-state",
          "partial": "Process Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:ProcessQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "Res",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#Res",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "Res",
          "package": "happstack-state",
          "partial": "Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:Res"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "RunHandler",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#RunHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "RunHandler",
          "package": "happstack-state",
          "partial": "Run Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:RunHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "Runner",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#Runner",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "Runner",
          "package": "happstack-state",
          "partial": "Runner",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:Runner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "SetCheckpointState",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#SetCheckpointState",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "SetCheckpointState",
          "package": "happstack-state",
          "partial": "Set Checkpoint State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:SetCheckpointState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "SetNewState",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#SetNewState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "SetNewState",
          "package": "happstack-state",
          "partial": "Set New State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:SetNewState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "TxControl",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "TxControl",
          "package": "happstack-state",
          "partial": "Tx Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:TxControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "TxRun",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#TxRun",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "TxRun",
          "package": "happstack-state",
          "partial": "Tx Run",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:TxRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "TypeString",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#TypeString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "TypeString",
          "package": "happstack-state",
          "partial": "Type String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#t:TypeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EmitInternal",
          "package": "happstack-state",
          "signature": "EmitInternal EventMap",
          "source": "src/Happstack-State-Transaction.html#EmitInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EmitInternal",
          "package": "happstack-state",
          "partial": "Emit Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:EmitInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "Error",
          "package": "happstack-state",
          "signature": "Error ExceptionT",
          "source": "src/Happstack-State-Transaction.html#Res",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "Error",
          "package": "happstack-state",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "Event",
          "package": "happstack-state",
          "signature": "Event ev",
          "source": "src/Happstack-State-Transaction.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "Event",
          "package": "happstack-state",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "EventItem",
          "package": "happstack-state",
          "signature": "EventItem",
          "source": "src/Happstack-State-Transaction.html#EventItem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:EventItem\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:EventItem\"]"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EventItem",
          "package": "happstack-state",
          "partial": "Event Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:EventItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "EventLogEntry",
          "package": "happstack-state",
          "signature": "EventLogEntry TxContext Object",
          "source": "src/Happstack-State-Transaction.html#EventLogEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "EventLogEntry",
          "package": "happstack-state",
          "partial": "Event Log Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:EventLogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "GetCheckpointState",
          "package": "happstack-state",
          "signature": "GetCheckpointState",
          "source": "src/Happstack-State-Transaction.html#GetCheckpointState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "GetCheckpointState",
          "package": "happstack-state",
          "partial": "Get Checkpoint State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:GetCheckpointState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "GetState",
          "package": "happstack-state",
          "signature": "GetState",
          "source": "src/Happstack-State-Transaction.html#GetState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "GetState",
          "package": "happstack-state",
          "partial": "Get State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:GetState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "HR",
          "package": "happstack-state",
          "signature": "HR ev (RunHandler st ev)",
          "source": "src/Happstack-State-Transaction.html#HR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "HR",
          "package": "happstack-state",
          "partial": "HR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:HR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "IHR",
          "package": "happstack-state",
          "signature": "IHR TxContext ev (RunHandler st ev)",
          "source": "src/Happstack-State-Transaction.html#IHR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "IHR",
          "package": "happstack-state",
          "partial": "IHR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:IHR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "Ok",
          "package": "happstack-state",
          "signature": "Ok a",
          "source": "src/Happstack-State-Transaction.html#Res",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "Ok",
          "package": "happstack-state",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "QueryHandler",
          "package": "happstack-state",
          "signature": "(ev -\u003e IO res) -\u003e (Object -\u003e ev) -\u003e EventHandler",
          "source": "src/Happstack-State-Transaction.html#EventHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "QueryHandler",
          "normalized": "(a-\u003eIO b)-\u003e(Object-\u003ea)-\u003eEventHandler",
          "package": "happstack-state",
          "partial": "Query Handler",
          "signature": "(ev-\u003eIO res)-\u003e(Object-\u003eev)-\u003eEventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:QueryHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "SetCheckpointState",
          "package": "happstack-state",
          "signature": "SetCheckpointState ByteString",
          "source": "src/Happstack-State-Transaction.html#SetCheckpointState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "SetCheckpointState",
          "package": "happstack-state",
          "partial": "Set Checkpoint State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:SetCheckpointState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "SetNewState",
          "package": "happstack-state",
          "signature": "SetNewState ByteString",
          "source": "src/Happstack-State-Transaction.html#SetNewState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "SetNewState",
          "package": "happstack-state",
          "partial": "Set New State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:SetNewState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "TxControl",
          "package": "happstack-state",
          "signature": "TxControl",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "TxControl",
          "package": "happstack-state",
          "partial": "Tx Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:TxControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "TxRun",
          "package": "happstack-state",
          "signature": "TxRun",
          "source": "src/Happstack-State-Transaction.html#TxRun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "TxRun",
          "package": "happstack-state",
          "partial": "Tx Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:TxRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "UpdateHandler",
          "package": "happstack-state",
          "signature": "(TxContext -\u003e ev -\u003e IO res) -\u003e (ev -\u003e IO res) -\u003e (Object -\u003e ev) -\u003e EventHandler",
          "source": "src/Happstack-State-Transaction.html#EventHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "UpdateHandler",
          "normalized": "(TxContext-\u003ea-\u003eIO b)-\u003e(a-\u003eIO b)-\u003e(Object-\u003ea)-\u003eEventHandler",
          "package": "happstack-state",
          "partial": "Update Handler",
          "signature": "(TxContext-\u003eev-\u003eIO res)-\u003e(ev-\u003eIO res)-\u003e(Object-\u003eev)-\u003eEventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:UpdateHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "addTxId",
          "package": "happstack-state",
          "signature": "TxRun st -\u003e TxContext -\u003e STM TxContext",
          "source": "src/Happstack-State-Transaction.html#addTxId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "addTxId",
          "normalized": "TxRun a-\u003eTxContext-\u003eSTM TxContext",
          "package": "happstack-state",
          "partial": "Tx Id",
          "signature": "TxRun st-\u003eTxContext-\u003eSTM TxContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:addTxId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "allStateTypes",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e [TypeString]",
          "source": "src/Happstack-State-Transaction.html#allStateTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "allStateTypes",
          "normalized": "Proxy a-\u003e[TypeString]",
          "package": "happstack-state",
          "partial": "State Types",
          "signature": "Proxy a-\u003e[TypeString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:allStateTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "checkDiff",
          "package": "happstack-state",
          "signature": "a -\u003e a -\u003e IO (Maybe a)",
          "source": "src/Happstack-State-Transaction.html#checkDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "checkDiff",
          "normalized": "a-\u003ea-\u003eIO(Maybe a)",
          "package": "happstack-state",
          "partial": "Diff",
          "signature": "a-\u003ea-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:checkDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "componentIO",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e [IO ()]",
          "source": "src/Happstack-State-Transaction.html#componentIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "componentIO",
          "normalized": "Proxy a-\u003e[IO()]",
          "package": "happstack-state",
          "partial": "IO",
          "signature": "Proxy a-\u003e[IO()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:componentIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "componentVersions",
          "package": "happstack-state",
          "signature": "Proxy a -\u003e Map String [ByteString]",
          "source": "src/Happstack-State-Transaction.html#componentVersions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "componentVersions",
          "normalized": "Proxy a-\u003eMap String[ByteString]",
          "package": "happstack-state",
          "partial": "Versions",
          "signature": "Proxy a-\u003eMap String[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:componentVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "createEventMap",
          "package": "happstack-state",
          "signature": "MVar TxControl -\u003e Proxy st -\u003e IO EventMap",
          "source": "src/Happstack-State-Transaction.html#createEventMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "createEventMap",
          "normalized": "MVar TxControl-\u003eProxy a-\u003eIO EventMap",
          "package": "happstack-state",
          "partial": "Event Map",
          "signature": "MVar TxControl-\u003eProxy st-\u003eIO EventMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:createEventMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "createNewTxRun",
          "package": "happstack-state",
          "signature": "IO (TxRun st)",
          "source": "src/Happstack-State-Transaction.html#createNewTxRun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "createNewTxRun",
          "package": "happstack-state",
          "partial": "New Tx Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:createNewTxRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of each component used.\n\u003c/p\u003e",
          "module": "Happstack.State.Transaction",
          "name": "ctlAllComponents",
          "package": "happstack-state",
          "signature": "[String]",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "description": "Types of each component used",
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ctlAllComponents",
          "normalized": "[String]",
          "package": "happstack-state",
          "partial": "All Components",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:ctlAllComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "ctlChildren",
          "package": "happstack-state",
          "signature": "[(ThreadId, MVar ())]",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ctlChildren",
          "normalized": "[(ThreadId,MVar())]",
          "package": "happstack-state",
          "partial": "Children",
          "signature": "[(ThreadId,MVar())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:ctlChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap listing all versions of a component\n\u003c/p\u003e",
          "module": "Happstack.State.Transaction",
          "name": "ctlComponentVersions",
          "package": "happstack-state",
          "signature": "Map String [ByteString]",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "description": "Map listing all versions of component",
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ctlComponentVersions",
          "normalized": "Map String[ByteString]",
          "package": "happstack-state",
          "partial": "Component Versions",
          "signature": "Map String[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:ctlComponentVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "ctlCreateCheckpoint",
          "package": "happstack-state",
          "signature": "IO ()",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ctlCreateCheckpoint",
          "normalized": "IO()",
          "package": "happstack-state",
          "partial": "Create Checkpoint",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:ctlCreateCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "ctlEventSaver",
          "package": "happstack-state",
          "signature": "MVar (WriterStream EventLogEntry)",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ctlEventSaver",
          "package": "happstack-state",
          "partial": "Event Saver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:ctlEventSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores exclusive prefix lock (implemented in filesystem)\n\u003c/p\u003e",
          "module": "Happstack.State.Transaction",
          "name": "ctlPrefixLock",
          "package": "happstack-state",
          "signature": "Maybe PrefixLock",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "description": "Stores exclusive prefix lock implemented in filesystem",
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ctlPrefixLock",
          "package": "happstack-state",
          "partial": "Prefix Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:ctlPrefixLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaver given by the user.\n\u003c/p\u003e",
          "module": "Happstack.State.Transaction",
          "name": "ctlSaver",
          "package": "happstack-state",
          "signature": "Saver",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "function"
        },
        "index": {
          "description": "Saver given by the user",
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "ctlSaver",
          "package": "happstack-state",
          "partial": "Saver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:ctlSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "emitEvent",
          "package": "happstack-state",
          "signature": "ev -\u003e IO res",
          "source": "src/Happstack-State-Transaction.html#emitEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "emitEvent",
          "normalized": "a-\u003eIO b",
          "package": "happstack-state",
          "partial": "Event",
          "signature": "ev-\u003eIO res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:emitEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "emitEvent'",
          "package": "happstack-state",
          "signature": "TypeString -\u003e ev -\u003e IO res",
          "source": "src/Happstack-State-Transaction.html#emitEvent%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "emitEvent'",
          "normalized": "TypeString-\u003ea-\u003eIO b",
          "package": "happstack-state",
          "partial": "Event'",
          "signature": "TypeString-\u003eev-\u003eIO res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:emitEvent-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "emitFunc",
          "package": "happstack-state",
          "signature": "EventMap -\u003e TypeString -\u003e ev -\u003e IO res",
          "source": "src/Happstack-State-Transaction.html#emitFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "emitFunc",
          "normalized": "EventMap-\u003eTypeString-\u003ea-\u003eIO b",
          "package": "happstack-state",
          "partial": "Func",
          "signature": "EventMap-\u003eTypeString-\u003eev-\u003eIO res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:emitFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "emitRef",
          "package": "happstack-state",
          "signature": "IORef EmitInternal",
          "source": "src/Happstack-State-Transaction.html#emitRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "emitRef",
          "package": "happstack-state",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:emitRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "eventContext",
          "package": "happstack-state",
          "signature": "TxContext",
          "source": "src/Happstack-State-Transaction.html#EventItem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:eventContext\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:eventContext\"]"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "eventContext",
          "package": "happstack-state",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:eventContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "eventData",
          "package": "happstack-state",
          "signature": "Dynamic",
          "source": "src/Happstack-State-Transaction.html#EventItem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:eventData\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:eventData\"]"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "eventData",
          "package": "happstack-state",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:eventData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "eventStreamRef",
          "package": "happstack-state",
          "signature": "MVar (Chan EventItem)",
          "source": "src/Happstack-State-Transaction.html#eventStreamRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "eventStreamRef",
          "package": "happstack-state",
          "partial": "Stream Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:eventStreamRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "eventTString",
          "package": "happstack-state",
          "signature": "ev -\u003e TypeString",
          "source": "src/Happstack-State-Transaction.html#eventTString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "eventTString",
          "normalized": "a-\u003eTypeString",
          "package": "happstack-state",
          "partial": "TString",
          "signature": "ev-\u003eTypeString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:eventTString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "extraEvents",
          "package": "happstack-state",
          "signature": "TxRun st -\u003e EventMap",
          "source": "src/Happstack-State-Transaction.html#extraEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "extraEvents",
          "normalized": "TxRun a-\u003eEventMap",
          "package": "happstack-state",
          "partial": "Events",
          "signature": "TxRun st-\u003eEventMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:extraEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "getEpochMilli",
          "package": "happstack-state",
          "signature": "IO EpochMilli",
          "source": "src/Happstack-State-Transaction.html#getEpochMilli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "getEpochMilli",
          "package": "happstack-state",
          "partial": "Epoch Milli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getEpochMilli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "getEventClockTime",
          "package": "happstack-state",
          "signature": "AnyEv ClockTime",
          "source": "src/Happstack-State-Transaction.html#getEventClockTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getEventClockTime\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:getEventClockTime\"]"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "getEventClockTime",
          "package": "happstack-state",
          "partial": "Event Clock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getEventClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "getEventId",
          "package": "happstack-state",
          "signature": "AnyEv txId",
          "source": "src/Happstack-State-Transaction.html#getEventId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getEventId\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:getEventId\"]"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "getEventId",
          "package": "happstack-state",
          "partial": "Event Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getEventId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "getEventStream",
          "package": "happstack-state",
          "signature": "IO (IO EventItem)",
          "source": "src/Happstack-State-Transaction.html#getEventStream",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getEventStream\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:getEventStream\"]"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "getEventStream",
          "package": "happstack-state",
          "partial": "Event Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getEventStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "getState",
          "package": "happstack-state",
          "signature": "TypeString -\u003e IO ByteString",
          "source": "src/Happstack-State-Transaction.html#getState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "getState",
          "normalized": "TypeString-\u003eIO ByteString",
          "package": "happstack-state",
          "partial": "State",
          "signature": "TypeString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "getStateType",
          "package": "happstack-state",
          "signature": "String -\u003e String",
          "source": "src/Happstack-State-Transaction.html#getStateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "getStateType",
          "normalized": "String-\u003eString",
          "package": "happstack-state",
          "partial": "State Type",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getStateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "getTime",
          "package": "happstack-state",
          "signature": "AnyEv epochTime",
          "source": "src/Happstack-State-Transaction.html#getTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getTime\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:getTime\"]"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "getTime",
          "package": "happstack-state",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "globalRandomGen",
          "package": "happstack-state",
          "signature": "MVar StdGen",
          "source": "src/Happstack-State-Transaction.html#globalRandomGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "globalRandomGen",
          "package": "happstack-state",
          "partial": "Random Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:globalRandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "handleEvent",
          "package": "happstack-state",
          "signature": "(st -\u003e Env -\u003e Ev m res -\u003e STM intermediate) -\u003e (st -\u003e intermediate -\u003e IO (Maybe st, res)) -\u003e (Either ExceptionT res -\u003e IO ()) -\u003e Ev m res -\u003e RunHandler st ev",
          "source": "src/Happstack-State-Transaction.html#handleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "handleEvent",
          "normalized": "(a-\u003eEnv-\u003eEv b c-\u003eSTM d)-\u003e(a-\u003ed-\u003eIO(Maybe a,c))-\u003e(Either ExceptionT c-\u003eIO())-\u003eEv b c-\u003eRunHandler a e",
          "package": "happstack-state",
          "partial": "Event",
          "signature": "(st-\u003eEnv-\u003eEv m res-\u003eSTM intermediate)-\u003e(st-\u003eintermediate-\u003eIO(Maybe st,res))-\u003e(Either ExceptionT res-\u003eIO())-\u003eEv m res-\u003eRunHandler st ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:handleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "handleQuery",
          "package": "happstack-state",
          "signature": "(Either ExceptionT res -\u003e IO ()) -\u003e Query st res -\u003e RunHandler st ev",
          "source": "src/Happstack-State-Transaction.html#handleQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "handleQuery",
          "normalized": "(Either ExceptionT a-\u003eIO())-\u003eQuery b a-\u003eRunHandler b c",
          "package": "happstack-state",
          "partial": "Query",
          "signature": "(Either ExceptionT res-\u003eIO())-\u003eQuery st res-\u003eRunHandler st ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:handleQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "handleUpdate",
          "package": "happstack-state",
          "signature": "(Either ExceptionT res -\u003e IO ()) -\u003e Update st res -\u003e RunHandler st ev",
          "source": "src/Happstack-State-Transaction.html#handleUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "handleUpdate",
          "normalized": "(Either ExceptionT a-\u003eIO())-\u003eUpdate b a-\u003eRunHandler b c",
          "package": "happstack-state",
          "partial": "Update",
          "signature": "(Either ExceptionT res-\u003eIO())-\u003eUpdate st res-\u003eRunHandler st ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:handleUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "initEventStream",
          "package": "happstack-state",
          "signature": "IO ()",
          "source": "src/Happstack-State-Transaction.html#initEventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "initEventStream",
          "normalized": "IO()",
          "package": "happstack-state",
          "partial": "Event Stream",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:initEventStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "logMT",
          "package": "happstack-state",
          "signature": "Priority -\u003e String -\u003e IO ()",
          "source": "src/Happstack-State-Transaction.html#logMT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "logMT",
          "normalized": "Priority-\u003eString-\u003eIO()",
          "package": "happstack-state",
          "partial": "MT",
          "signature": "Priority-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:logMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "lookupEventHandler",
          "package": "happstack-state",
          "signature": "TypeString -\u003e EventMap -\u003e IO EventHandler",
          "source": "src/Happstack-State-Transaction.html#lookupEventHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "lookupEventHandler",
          "normalized": "TypeString-\u003eEventMap-\u003eIO EventHandler",
          "package": "happstack-state",
          "partial": "Event Handler",
          "signature": "TypeString-\u003eEventMap-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:lookupEventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "newTxContext",
          "package": "happstack-state",
          "signature": "IO TxContext",
          "source": "src/Happstack-State-Transaction.html#newTxContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "newTxContext",
          "package": "happstack-state",
          "partial": "Tx Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:newTxContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "pushEventItem",
          "package": "happstack-state",
          "signature": "TxContext -\u003e ev -\u003e IO ()",
          "source": "src/Happstack-State-Transaction.html#pushEventItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "pushEventItem",
          "normalized": "TxContext-\u003ea-\u003eIO()",
          "package": "happstack-state",
          "partial": "Event Item",
          "signature": "TxContext-\u003eev-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:pushEventItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a state query and wait for the result.\n\u003c/p\u003e",
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "query",
          "package": "happstack-state",
          "signature": "ev -\u003e m res",
          "source": "src/Happstack-State-Transaction.html#query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:query\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:query\"]"
        },
        "index": {
          "description": "Emit state query and wait for the result",
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "query",
          "normalized": "a-\u003eb c",
          "package": "happstack-state",
          "signature": "ev-\u003em res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "quickQuery'",
          "package": "happstack-state",
          "signature": "TxRun st -\u003e HR st -\u003e IO ()",
          "source": "src/Happstack-State-Transaction.html#quickQuery%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "quickQuery'",
          "normalized": "TxRun a-\u003eHR a-\u003eIO()",
          "package": "happstack-state",
          "partial": "Query'",
          "signature": "TxRun st-\u003eHR st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:quickQuery-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "runColdEvent",
          "package": "happstack-state",
          "signature": "TxContext -\u003e Object -\u003e IO Object",
          "source": "src/Happstack-State-Transaction.html#runColdEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "runColdEvent",
          "normalized": "TxContext-\u003eObject-\u003eIO Object",
          "package": "happstack-state",
          "partial": "Cold Event",
          "signature": "TxContext-\u003eObject-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:runColdEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "runColdEventFunc",
          "package": "happstack-state",
          "signature": "TxContext -\u003e Object -\u003e EventMap -\u003e IO Object",
          "source": "src/Happstack-State-Transaction.html#runColdEventFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "runColdEventFunc",
          "normalized": "TxContext-\u003eObject-\u003eEventMap-\u003eIO Object",
          "package": "happstack-state",
          "partial": "Cold Event Func",
          "signature": "TxContext-\u003eObject-\u003eEventMap-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:runColdEventFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "runObjectEvent",
          "package": "happstack-state",
          "signature": "Object -\u003e IO Object",
          "source": "src/Happstack-State-Transaction.html#runObjectEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "runObjectEvent",
          "normalized": "Object-\u003eIO Object",
          "package": "happstack-state",
          "partial": "Object Event",
          "signature": "Object-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:runObjectEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "runObjectEventFunc",
          "package": "happstack-state",
          "signature": "Object -\u003e EventMap -\u003e IO Object",
          "source": "src/Happstack-State-Transaction.html#runObjectEventFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "runObjectEventFunc",
          "normalized": "Object-\u003eEventMap-\u003eIO Object",
          "package": "happstack-state",
          "partial": "Object Event Func",
          "signature": "Object-\u003eEventMap-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:runObjectEventFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "runTxLoop",
          "package": "happstack-state",
          "signature": "MVar (WriterStream EventLogEntry) -\u003e ProcessQueue st -\u003e st -\u003e IO ()",
          "source": "src/Happstack-State-Transaction.html#runTxLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "runTxLoop",
          "normalized": "MVar(WriterStream EventLogEntry)-\u003eProcessQueue a-\u003ea-\u003eIO()",
          "package": "happstack-state",
          "partial": "Tx Loop",
          "signature": "MVar(WriterStream EventLogEntry)-\u003eProcessQueue st-\u003est-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:runTxLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "setEvLoadersQueue",
          "package": "happstack-state",
          "signature": "ProcessQueue st -\u003e EvLoaders' st -\u003e EvLoaders",
          "source": "src/Happstack-State-Transaction.html#setEvLoadersQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "setEvLoadersQueue",
          "normalized": "ProcessQueue a-\u003eEvLoaders' a-\u003eEvLoaders",
          "package": "happstack-state",
          "partial": "Ev Loaders Queue",
          "signature": "ProcessQueue st-\u003eEvLoaders' st-\u003eEvLoaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:setEvLoadersQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "setNewEventMap",
          "package": "happstack-state",
          "signature": "EventMap -\u003e IO ()",
          "source": "src/Happstack-State-Transaction.html#setNewEventMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "setNewEventMap",
          "normalized": "EventMap-\u003eIO()",
          "package": "happstack-state",
          "partial": "New Event Map",
          "signature": "EventMap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:setNewEventMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "setNewState",
          "package": "happstack-state",
          "signature": "TypeString -\u003e ByteString -\u003e IO ()",
          "source": "src/Happstack-State-Transaction.html#setNewState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "setNewState",
          "normalized": "TypeString-\u003eByteString-\u003eIO()",
          "package": "happstack-state",
          "partial": "New State",
          "signature": "TypeString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:setNewState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "setNewState'",
          "package": "happstack-state",
          "signature": "EventMap -\u003e TypeString -\u003e ByteString -\u003e IO ()",
          "source": "src/Happstack-State-Transaction.html#setNewState%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "setNewState'",
          "normalized": "EventMap-\u003eTypeString-\u003eByteString-\u003eIO()",
          "package": "happstack-state",
          "partial": "New State'",
          "signature": "EventMap-\u003eTypeString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:setNewState-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "setNewStateType",
          "package": "happstack-state",
          "signature": "String -\u003e String",
          "source": "src/Happstack-State-Transaction.html#setNewStateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "setNewStateType",
          "normalized": "String-\u003eString",
          "package": "happstack-state",
          "partial": "New State Type",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:setNewStateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "txLastTxContext",
          "package": "happstack-state",
          "signature": "(TVar TxContext)",
          "source": "src/Happstack-State-Transaction.html#TxRun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "txLastTxContext",
          "package": "happstack-state",
          "partial": "Last Tx Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:txLastTxContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State.Transaction",
          "name": "txProcessQueue",
          "package": "happstack-state",
          "signature": "(ProcessQueue st)",
          "source": "src/Happstack-State-Transaction.html#TxRun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "txProcessQueue",
          "package": "happstack-state",
          "partial": "Process Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:txProcessQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedule an update and wait for it to complete. When this function returns, you're\n guaranteed the update will be persistent.\n\u003c/p\u003e",
          "module": "[\"Happstack.State.Transaction\",\"Happstack.State\"]",
          "name": "update",
          "package": "happstack-state",
          "signature": "ev -\u003e m res",
          "source": "src/Happstack-State-Transaction.html#update",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:update\",\"http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:update\"]"
        },
        "index": {
          "description": "Schedule an update and wait for it to complete When this function returns you re guaranteed the update will be persistent",
          "hierarchy": "Happstack State Transaction",
          "module": "Happstack.State.Transaction",
          "name": "update",
          "normalized": "a-\u003eb c",
          "package": "happstack-state",
          "signature": "ev-\u003em res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State-Transaction.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "State",
          "package": "happstack-state",
          "source": "src/Happstack-State.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "State",
          "package": "happstack-state",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eACID computations that work with any state and event types.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "AnyEv",
          "package": "happstack-state",
          "source": "src/Happstack-State-Types.html#AnyEv",
          "type": "type"
        },
        "index": {
          "description": "ACID computations that work with any state and event types",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "AnyEv",
          "package": "happstack-state",
          "partial": "Any Ev",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:AnyEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "CatchEv",
          "package": "happstack-state",
          "source": "src/Happstack-State-Monad.html#CatchEv",
          "type": "class"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "CatchEv",
          "package": "happstack-state",
          "partial": "Catch Ev",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:CatchEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "EpochMilli",
          "package": "happstack-state",
          "source": "src/Happstack-State-Types.html#EpochMilli",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "EpochMilli",
          "package": "happstack-state",
          "partial": "Epoch Milli",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:EpochMilli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for ACID event handlers.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "Ev",
          "package": "happstack-state",
          "source": "src/Happstack-State-Types.html#Ev",
          "type": "data"
        },
        "index": {
          "description": "Monad for ACID event handlers",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "Ev",
          "package": "happstack-state",
          "partial": "Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:Ev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "EventItem",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#EventItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "EventItem",
          "package": "happstack-state",
          "partial": "Event Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:EventItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "Query",
          "package": "happstack-state",
          "source": "src/Happstack-State-Types.html#Query",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "Query",
          "package": "happstack-state",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "Saver",
          "package": "happstack-state",
          "source": "src/Happstack-State-Saver.html#Saver",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "Saver",
          "package": "happstack-state",
          "partial": "Saver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:Saver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "TxControl",
          "package": "happstack-state",
          "source": "src/Happstack-State-Transaction.html#TxControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "TxControl",
          "package": "happstack-state",
          "partial": "Tx Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:TxControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "TxId",
          "package": "happstack-state",
          "source": "src/Happstack-State-Types.html#TxId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "TxId",
          "package": "happstack-state",
          "partial": "Tx Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:TxId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "Update",
          "package": "happstack-state",
          "source": "src/Happstack-State-Types.html#Update",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "Update",
          "package": "happstack-state",
          "partial": "Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrying version of \u003ccode\u003e\u003ca\u003esetQueryType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "asQuery",
          "package": "happstack-state",
          "signature": "Query t a -\u003e Proxy t -\u003e Query t a",
          "source": "src/Happstack-State-Monad.html#asQuery",
          "type": "function"
        },
        "index": {
          "description": "Currying version of setQueryType",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "asQuery",
          "normalized": "Query a b-\u003eProxy a-\u003eQuery a b",
          "package": "happstack-state",
          "partial": "Query",
          "signature": "Query t a-\u003eProxy t-\u003eQuery t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:asQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrying version of \u003ccode\u003e\u003ca\u003esetUpdateType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "asUpdate",
          "package": "happstack-state",
          "signature": "Update t a -\u003e Proxy t -\u003e Update t a",
          "source": "src/Happstack-State-Monad.html#asUpdate",
          "type": "function"
        },
        "index": {
          "description": "Currying version of setUpdateType",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "asUpdate",
          "normalized": "Update a b-\u003eProxy a-\u003eUpdate a b",
          "package": "happstack-state",
          "partial": "Update",
          "signature": "Update t a-\u003eProxy t-\u003eUpdate t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:asUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "askState",
          "package": "happstack-state",
          "signature": "Query st st",
          "source": "src/Happstack-State-Monad.html#askState",
          "type": "function"
        },
        "index": {
          "description": "Specialized version of ask",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "askState",
          "package": "happstack-state",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:askState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "catchEv",
          "package": "happstack-state",
          "signature": "Ev m a -\u003e (e -\u003e a) -\u003e Ev m a",
          "source": "src/Happstack-State-Monad.html#catchEv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "catchEv",
          "normalized": "Ev a b-\u003e(c-\u003eb)-\u003eEv a b",
          "package": "happstack-state",
          "partial": "Ev",
          "signature": "Ev m a-\u003e(e-\u003ea)-\u003eEv m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:catchEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "createCheckpoint",
          "package": "happstack-state",
          "signature": "MVar TxControl -\u003e IO ()",
          "source": "src/Happstack-State-TxControl.html#createCheckpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "createCheckpoint",
          "normalized": "MVar TxControl-\u003eIO()",
          "package": "happstack-state",
          "partial": "Checkpoint",
          "signature": "MVar TxControl-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:createCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a random number.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "getRandom",
          "package": "happstack-state",
          "signature": "AnyEv a",
          "source": "src/Happstack-State-Util.html#getRandom",
          "type": "function"
        },
        "index": {
          "description": "Get random number",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "getRandom",
          "package": "happstack-state",
          "partial": "Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:getRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a random number inside the range.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "getRandomR",
          "package": "happstack-state",
          "signature": "(a, a) -\u003e AnyEv a",
          "source": "src/Happstack-State-Util.html#getRandomR",
          "type": "function"
        },
        "index": {
          "description": "Get random number inside the range",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "getRandomR",
          "normalized": "(a,a)-\u003eAnyEv a",
          "package": "happstack-state",
          "partial": "Random",
          "signature": "(a,a)-\u003eAnyEv a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:getRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "getState",
          "package": "happstack-state",
          "signature": "Update st st",
          "source": "src/Happstack-State-Monad.html#getState",
          "type": "function"
        },
        "index": {
          "description": "Specialized version of get",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "getState",
          "package": "happstack-state",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfer updating functions for a record.  Given a data declaration\n of \u003ccode\u003edata Foo = Foo {bar :: String, baz :: Int}\u003c/code\u003e then \u003ccode\u003e$(inferRecordUpdaters ''Foo)\u003c/code\u003e\n will define functions \u003ccode\u003ea_bar :: String -\u003e Foo -\u003e Foo\u003c/code\u003e, \u003ccode\u003ewithBar :: Update String a -\u003e Update Foo a\u003c/code\u003e,\n etc. that can be used as convenience updaters.  \n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "inferRecordUpdaters",
          "package": "happstack-state",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Happstack-State-Util.html#inferRecordUpdaters",
          "type": "function"
        },
        "index": {
          "description": "Infer updating functions for record Given data declaration of data Foo Foo bar String baz Int then inferRecordUpdaters Foo will define functions bar String Foo Foo withBar Update String Update Foo etc that can be used as convenience updaters",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "inferRecordUpdaters",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "happstack-state",
          "partial": "Record Updaters",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:inferRecordUpdaters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an STM action into Ev.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "liftSTM",
          "package": "happstack-state",
          "signature": "STM a -\u003e AnyEv a",
          "source": "src/Happstack-State-Monad.html#liftSTM",
          "type": "function"
        },
        "index": {
          "description": "Lift an STM action into Ev",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "liftSTM",
          "normalized": "STM a-\u003eAnyEv a",
          "package": "happstack-state",
          "partial": "STM",
          "signature": "STM a-\u003eAnyEv a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:liftSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation with local state. Changes to state will be visible to outside.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "localState",
          "package": "happstack-state",
          "signature": "(outer -\u003e inner) -\u003e (inner -\u003e outer -\u003e outer) -\u003e Ev (StateT inner STM) a -\u003e Ev (StateT outer STM) a",
          "source": "src/Happstack-State-Monad.html#localState",
          "type": "function"
        },
        "index": {
          "description": "Run computation with local state Changes to state will be visible to outside",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "localState",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eEv(StateT b STM)c-\u003eEv(StateT a STM)c",
          "package": "happstack-state",
          "partial": "State",
          "signature": "(outer-\u003einner)-\u003e(inner-\u003eouter-\u003eouter)-\u003eEv(StateT inner STM)a-\u003eEv(StateT outer STM)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:localState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation with local state.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "localStateReader",
          "package": "happstack-state",
          "signature": "(outer -\u003e inner) -\u003e Ev (ReaderT inner STM) a -\u003e Ev (ReaderT outer STM) a",
          "source": "src/Happstack-State-Monad.html#localStateReader",
          "type": "function"
        },
        "index": {
          "description": "Run computation with local state",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "localStateReader",
          "normalized": "(a-\u003eb)-\u003eEv(ReaderT b STM)c-\u003eEv(ReaderT a STM)c",
          "package": "happstack-state",
          "partial": "State Reader",
          "signature": "(outer-\u003einner)-\u003eEv(ReaderT inner STM)a-\u003eEv(ReaderT outer STM)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:localStateReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces the type of proxy and query to match\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "proxyQuery",
          "package": "happstack-state",
          "signature": "Query t b -\u003e Proxy t -\u003e Query t b",
          "source": "src/Happstack-State-Monad.html#proxyQuery",
          "type": "function"
        },
        "index": {
          "description": "Forces the type of proxy and query to match",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "proxyQuery",
          "normalized": "Query a b-\u003eProxy a-\u003eQuery a b",
          "package": "happstack-state",
          "partial": "Query",
          "signature": "Query t b-\u003eProxy t-\u003eQuery t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:proxyQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces the type of the proxy and update to match\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "proxyUpdate",
          "package": "happstack-state",
          "signature": "Update t b -\u003e Proxy t -\u003e Update t b",
          "source": "src/Happstack-State-Monad.html#proxyUpdate",
          "type": "function"
        },
        "index": {
          "description": "Forces the type of the proxy and update to match",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "proxyUpdate",
          "normalized": "Update a b-\u003eProxy a-\u003eUpdate a b",
          "package": "happstack-state",
          "partial": "Update",
          "signature": "Update t b-\u003eProxy t-\u003eUpdate t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:proxyUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "putState",
          "package": "happstack-state",
          "signature": "st -\u003e Update st ()",
          "source": "src/Happstack-State-Monad.html#putState",
          "type": "function"
        },
        "index": {
          "description": "Specialized version of put",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "putState",
          "normalized": "a-\u003eUpdate a()",
          "package": "happstack-state",
          "partial": "State",
          "signature": "st-\u003eUpdate st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:putState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a Query action in the Update monad.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "runQuery",
          "package": "happstack-state",
          "signature": "Query st a -\u003e Update st a",
          "source": "src/Happstack-State-Monad.html#runQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute Query action in the Update monad",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "runQuery",
          "normalized": "Query a b-\u003eUpdate a b",
          "package": "happstack-state",
          "partial": "Query",
          "signature": "Query st a-\u003eUpdate st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the MACID system without multimaster support and with the given Saver.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "runTxSystem",
          "package": "happstack-state",
          "signature": "Saver -\u003e Proxy st -\u003e IO (MVar TxControl)",
          "source": "src/Happstack-State-TxControl.html#runTxSystem",
          "type": "function"
        },
        "index": {
          "description": "Run the MACID system without multimaster support and with the given Saver",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "runTxSystem",
          "normalized": "Saver-\u003eProxy a-\u003eIO(MVar TxControl)",
          "package": "happstack-state",
          "partial": "Tx System",
          "signature": "Saver-\u003eProxy st-\u003eIO(MVar TxControl)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:runTxSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a part of the environment.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "sel",
          "package": "happstack-state",
          "signature": "(Env -\u003e b) -\u003e AnyEv b",
          "source": "src/Happstack-State-Monad.html#sel",
          "type": "function"
        },
        "index": {
          "description": "Select part of the environment",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "sel",
          "normalized": "(Env-\u003ea)-\u003eAnyEv a",
          "package": "happstack-state",
          "signature": "(Env-\u003eb)-\u003eAnyEv b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:sel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a proxy to force the type of a query action.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "setQueryType",
          "package": "happstack-state",
          "signature": "Proxy t -\u003e Query t ()",
          "source": "src/Happstack-State-Monad.html#setQueryType",
          "type": "function"
        },
        "index": {
          "description": "Use proxy to force the type of query action",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "setQueryType",
          "normalized": "Proxy a-\u003eQuery a()",
          "package": "happstack-state",
          "partial": "Query Type",
          "signature": "Proxy t-\u003eQuery t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:setQueryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a proxy to force the type of an update action.\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "setUpdateType",
          "package": "happstack-state",
          "signature": "Proxy t -\u003e Update t ()",
          "source": "src/Happstack-State-Monad.html#setUpdateType",
          "type": "function"
        },
        "index": {
          "description": "Use proxy to force the type of an update action",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "setUpdateType",
          "normalized": "Proxy a-\u003eUpdate a()",
          "package": "happstack-state",
          "partial": "Update Type",
          "signature": "Proxy t-\u003eUpdate t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:setUpdateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuts down a transaction system\n\u003c/p\u003e",
          "module": "Happstack.State",
          "name": "shutdownSystem",
          "package": "happstack-state",
          "signature": "MVar TxControl -\u003e IO ()",
          "source": "src/Happstack-State-TxControl.html#shutdownSystem",
          "type": "function"
        },
        "index": {
          "description": "Shuts down transaction system",
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "shutdownSystem",
          "normalized": "MVar TxControl-\u003eIO()",
          "package": "happstack-state",
          "partial": "System",
          "signature": "MVar TxControl-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:shutdownSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.State",
          "name": "unsafeIOToEv",
          "package": "happstack-state",
          "signature": "IO a -\u003e AnyEv a",
          "source": "src/Happstack-State-Types.html#unsafeIOToEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack State",
          "module": "Happstack.State",
          "name": "unsafeIOToEv",
          "normalized": "IO a-\u003eAnyEv a",
          "package": "happstack-state",
          "partial": "IOTo Ev",
          "signature": "IO a-\u003eAnyEv a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-state/docs/Happstack-State.html#v:unsafeIOToEv"
      }
    }
  ]
]