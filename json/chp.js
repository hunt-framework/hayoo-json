[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing constructs for choice, or alting.  An ALT (a term inherited from\n occam) is a choice between several alternate events.  Events that inherently support choice are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eControl.Concurrent.CHP.Monad.stop\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eControl.Concurrent.CHP.Monad.waitFor\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Reading from a channel (including extended reads): that is, calls to \u003ccode\u003eControl.Concurrent.CHP.Channels.Communication.readChannel\u003c/code\u003e\n and \u003ccode\u003eControl.Concurrent.CHP.Channels.Communication.extReadChannel\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Writing to a channel (including extended writes): that is, calls to \u003ccode\u003eControl.Concurrent.CHP.Channels.Communication.writeChannel\u003c/code\u003e\n and \u003ccode\u003eControl.Concurrent.CHP.Channels.Communication.extWriteChannel\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Synchronising on a barrier (using \u003ccode\u003eControl.Concurrent.CHP.Barriers.syncBarrier\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e An alting construct (that is, you can nest alts) such as \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epriAlt\u003c/a\u003e\u003c/code\u003e (or\n the operator versions)\n\u003c/li\u003e\u003cli\u003e A sequential composition, if the first event supports alting (i.e. is in this\n list)\n\u003c/li\u003e\u003cli\u003e A call to \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e, which joins together several items (see the documentation\n on \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are several other events that can occur in CHP; these are assumed to be\n always-ready when they are included in a choice.  Examples include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Enrolling and resigning with a barrier\n\u003c/li\u003e\u003cli\u003e Poisoning a channel\n\u003c/li\u003e\u003cli\u003e Processes composed in parallel (using \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e, etc)\n\u003c/li\u003e\u003cli\u003e Any lifted IO event\n\u003c/li\u003e\u003cli\u003e Creating channels, barriers, etc\n\u003c/li\u003e\u003cli\u003e Claiming a shared channel (yet...)\n\u003c/li\u003e\u003cli\u003e A return statement by itself\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere are some examples of using alting:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Wait for an integer channel, or 1 second to elapse:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e liftM Just (readChannel c) \u003c|\u003e (waitFor 1000000 \u003e\u003e return Nothing)\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Check if a channel is ready, otherwise return immediately; this can be done\n using the \u003ccode\u003eoptional\u003c/code\u003e function from \u003ca\u003eControl.Applicative\u003c/a\u003e:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e optional (readChannel c)\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Wait for input from one of two (identically typed) channels\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e readChannel c0 \u003c|\u003e readChannel c1\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Check if a channel is ready; if so send, it on, otherwise return immediately:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e (readChannel c \u003e\u003e= writeChannel d) \u003c|\u003e skip\n\u003c/pre\u003e\u003cp\u003eNote that if you wait for a sequential composition:\n\u003c/p\u003e\u003cpre\u003e (readChannel c \u003e\u003e= writeChannel d) \u003c|\u003e (writeChannel e 6 \u003e\u003e readChannel f)\n\u003c/pre\u003e\u003cp\u003eThis only waits for the first action in both (reading from channel c, or writing\n to channel e), not for all of the actions (as, for example, an STM transaction\n would).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Alt.html",
        "fct-type": "module",
        "title": "Alt"
      },
      "index": {
        "description": "module containing constructs for choice or alting An ALT term inherited from occam is choice between several alternate events Events that inherently support choice are skip Control.Concurrent.CHP.Monad.stop Control.Concurrent.CHP.Monad.waitFor Reading from channel including extended reads that is calls to Control.Concurrent.CHP.Channels.Communication.readChannel and Control.Concurrent.CHP.Channels.Communication.extReadChannel Writing to channel including extended writes that is calls to Control.Concurrent.CHP.Channels.Communication.writeChannel and Control.Concurrent.CHP.Channels.Communication.extWriteChannel Synchronising on barrier using Control.Concurrent.CHP.Barriers.syncBarrier An alting construct that is you can nest alts such as alt priAlt or the operator versions sequential composition if the first event supports alting i.e is in this list call to every which joins together several items see the documentation on every There are several other events that can occur in CHP these are assumed to be always-ready when they are included in choice Examples include Enrolling and resigning with barrier Poisoning channel Processes composed in parallel using runParallel etc Any lifted IO event Creating channels barriers etc Claiming shared channel yet return statement by itself Here are some examples of using alting Wait for an integer channel or second to elapse liftM Just readChannel waitFor return Nothing Check if channel is ready otherwise return immediately this can be done using the optional function from Control.Applicative optional readChannel Wait for input from one of two identically typed channels readChannel c0 readChannel c1 Check if channel is ready if so send it on otherwise return immediately readChannel writeChannel skip Note that if you wait for sequential composition readChannel writeChannel writeChannel readChannel This only waits for the first action in both reading from channel or writing to channel not for all of the actions as for example an STM transaction would",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "Alt",
        "normalized": "",
        "package": "chp",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#v:-60--38--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA useful operator that acts like \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e.  The operator is associative and\n commutative (see \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e for notes on idempotence).  When you have lots of things\n to join with this operator, it's probably easier to use the \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.1.0\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP b -\u003e CHP (a, b)",
        "fct-source": "src/Control-Concurrent-CHP-Alt.html#%3C%26%3E",
        "fct-type": "function",
        "title": "(\u003c&\u003e)"
      },
      "index": {
        "description": "useful operator that acts like every The operator is associative and commutative see every for notes on idempotence When you have lots of things to join with this operator it probably easier to use the every function Added in version",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "(\u003c&\u003e) \u003c&\u003e",
        "normalized": "CHP a-\u003eCHP b-\u003eCHP(a,b)",
        "package": "chp",
        "partial": "",
        "signature": "CHP a-\u003eCHP b-\u003eCHP(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#v:-60--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA useful operator to perform an \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e.  This operator is associative,\n and has arbitrary priority.  When you have lots of guards, it is probably easier\n to use the \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e function.  \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e \u003cem\u003emay\u003c/em\u003e be more efficent than\n foldl1 (\u003c-\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Alt.html#%3C-%3E",
        "fct-type": "function",
        "title": "(\u003c-\u003e)"
      },
      "index": {
        "description": "useful operator to perform an alt This operator is associative and has arbitrary priority When you have lots of guards it is probably easier to use the alt function alt may be more efficent than foldl1",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "(\u003c-\u003e) \u003c-\u003e",
        "normalized": "CHP a-\u003eCHP a-\u003eCHP a",
        "package": "chp",
        "partial": "",
        "signature": "CHP a-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA useful operator to perform a \u003ccode\u003e\u003ca\u003epriAlt\u003c/a\u003e\u003c/code\u003e.  This operator is\n associative, and has descending priority (that is, it is\n left-biased).  When you have lots of actions, it is probably easier\n to use the \u003ccode\u003e\u003ca\u003epriAlt\u003c/a\u003e\u003c/code\u003e function.  \u003ccode\u003e\u003ca\u003epriAlt\u003c/a\u003e\u003c/code\u003e \u003cem\u003emay\u003c/em\u003e be more efficent than\n foldl1 (\u003c/\u003e)\n\u003c/p\u003e\u003cp\u003eSince version 2.2.0, this operator is deprecated in favour of the (\u003ca\u003e|\u003c/a\u003e) operator\n from the Alternative type-class.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Alt.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "useful operator to perform priAlt This operator is associative and has descending priority that is it is left-biased When you have lots of actions it is probably easier to use the priAlt function priAlt may be more efficent than foldl1 Since version this operator is deprecated in favour of the operator from the Alternative type-class",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "CHP a-\u003eCHP a-\u003eCHP a",
        "package": "chp",
        "partial": "",
        "signature": "CHP a-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#v:alt",
      "description": {
        "fct-descr": "\u003cp\u003eAn alt between several actions, with arbitrary priority.  The first\n available action is chosen (with an arbitrary choice if many actions are\n available at the same time), its body run, and its value returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "[CHP a] -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Alt.html#alt",
        "fct-type": "function",
        "title": "alt"
      },
      "index": {
        "description": "An alt between several actions with arbitrary priority The first available action is chosen with an arbitrary choice if many actions are available at the same time its body run and its value returned",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "alt",
        "normalized": "[CHP a]-\u003eCHP a",
        "package": "chp",
        "partial": "",
        "signature": "[CHP a]-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#v:every",
      "description": {
        "fct-descr": "\u003cp\u003eRuns all the given processes in parallel with each other, but only when the\n choice at the beginning of each item is ready.\n\u003c/p\u003e\u003cp\u003eSo for example, if you do:\n\u003c/p\u003e\u003cpre\u003e every [ readChannel c \u003e\u003e= writeChannel d, readChannel e \u003e\u003e= writeChannel f]\n\u003c/pre\u003e\u003cp\u003eThis will forward values from c and e to d and f respectively in parallel, but\n only once both channels c and e are ready to be read from.  So f cannot be written\n to before c is read from (contrast this with what would happen if \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e were\n replaced with \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis behaviour can be somewhat useful, but \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e is much more powerful when\n used as part of an \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e.  This code:\n\u003c/p\u003e\u003cpre\u003e alt [ every [ readChannel c, readChannel d]\n     , every [ writeChannel e 6, writeChannel f 8] ]\n\u003c/pre\u003e\u003cp\u003eWaits to either read from channels c and d, or to write to channels e and f.\n\u003c/p\u003e\u003cp\u003eThe events involved can partially overlap, e.g.\n\u003c/p\u003e\u003cpre\u003e alt [ every [ readChannel a, readChannel b]\n     , every [ readChannel a, writeChannel c 6] ]\n\u003c/pre\u003e\u003cp\u003eThis will wait to either read from channels a and b, or to read from a and write\n to c, whichever combination is ready first.  If both are ready, the choice between\n them will be arbitrary (just as with any other choices; see \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e for more details).\n\u003c/p\u003e\u003cp\u003eThe sets can even be subsets of each other, such as:\n\u003c/p\u003e\u003cpre\u003e alt [ every [ readChannel a, readChannel b]\n     , every [ readChannel a, readChannel b, readChannel b] ]\n\u003c/pre\u003e\u003cp\u003eIn this case there are no guarantees as to which choice will happen.  Do not\n assume it will be the smaller, and do not assume it will be the larger.  \n\u003c/p\u003e\u003cp\u003eBe wary of what happens if a single event is included multiple times in the same \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e, as\n this may not do what you expect (with or without choice).  Consider:\n\u003c/p\u003e\u003cpre\u003e every [ readChannel c \u003e\u003e writeChannel d 6\n       , readChannel c \u003e\u003e writeChannel d 8 ]\n\u003c/pre\u003e\u003cp\u003eWhat will happen is that the excecution will wait to read from c, but then it\n will execute only one of the bodies (an arbitrary choice).  In general, do not\n rely on this behaviour, and instead try to avoid having the same events in an\n \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e.  Also note that if you synchronise on a barrier twice in an \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e,\n this will only count as one member enrolling, even if you have two enrolled\n ends!  For such a use, look at \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eAlso note that this currently applies to both ends of channels, so that:\n\u003c/p\u003e\u003cpre\u003e every [ readChannel c, writeChannel c 2 ]\n\u003c/pre\u003e\u003cp\u003eWill block indefinitely, rather than completing the communication.\n\u003c/p\u003e\u003cp\u003eEach item \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e must support choice (and in fact\n only a subset of the items supported by \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e are supported by \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e).  Currently the items\n in the list passed to \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e must be one of the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A call to \u003ccode\u003eControl.Concurrent.CHP.Channels.readChannel\u003c/code\u003e (or \u003ccode\u003eControl.Concurrent.CHP.Channels.extReadChannel\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e A call to \u003ccode\u003eControl.Concurrent.CHP.Channels.writeChannel\u003c/code\u003e (or \u003ccode\u003eControl.Concurrent.CHP.Channels.extWriteChannel\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e, the always-ready guard.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eControl.Concurrent.CHP.Monad.stop\u003c/code\u003e, the never-ready guard (will cause the whole \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e to never be ready,\n since \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e has to wait for all guards).\n\u003c/li\u003e\u003cli\u003e A call to \u003ccode\u003eControl.Concurrent.CHP.Monad.syncBarrier\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A sequential composition where the first item is one of the things in this\n list.\n\u003c/li\u003e\u003cli\u003e A call to \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e (you can nest \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e blocks inside each other).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTimeouts (e.g. \u003ccode\u003eControl.Concurrent.CHP.Monad.waitFor\u003c/code\u003e) are currently not supported.  You can always get another\n process to synchronise on an event with you once a certain time has passed.\n\u003c/p\u003e\u003cp\u003eNote also that you cannot put an \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e inside an \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e.  So you cannot say:\n\u003c/p\u003e\u003cpre\u003e every [ readChannel c\n       , alt [ readChannel d, readChannel e ] ]\n\u003c/pre\u003e\u003cp\u003eTo wait for c and (d or e) like this you must expand it out into (c and d) or\n (c and e):\n\u003c/p\u003e\u003cpre\u003e alt [ every [ readChannel c, readChannel d]\n     , every [ readChannel c, readChannel e] ]\n\u003c/pre\u003e\u003cp\u003eAs long as x meets the conditions laid out above, \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e [x] will have the same\n behaviour as x.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.1.0\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "[CHP a] -\u003e CHP [a]",
        "fct-source": "src/Control-Concurrent-CHP-Alt.html#every",
        "fct-type": "function",
        "title": "every"
      },
      "index": {
        "description": "Runs all the given processes in parallel with each other but only when the choice at the beginning of each item is ready So for example if you do every readChannel writeChannel readChannel writeChannel This will forward values from and to and respectively in parallel but only once both channels and are ready to be read from So cannot be written to before is read from contrast this with what would happen if every were replaced with runParallel This behaviour can be somewhat useful but every is much more powerful when used as part of an alt This code alt every readChannel readChannel every writeChannel writeChannel Waits to either read from channels and or to write to channels and The events involved can partially overlap e.g alt every readChannel readChannel every readChannel writeChannel This will wait to either read from channels and or to read from and write to whichever combination is ready first If both are ready the choice between them will be arbitrary just as with any other choices see alt for more details The sets can even be subsets of each other such as alt every readChannel readChannel every readChannel readChannel readChannel In this case there are no guarantees as to which choice will happen Do not assume it will be the smaller and do not assume it will be the larger Be wary of what happens if single event is included multiple times in the same every as this may not do what you expect with or without choice Consider every readChannel writeChannel readChannel writeChannel What will happen is that the excecution will wait to read from but then it will execute only one of the bodies an arbitrary choice In general do not rely on this behaviour and instead try to avoid having the same events in an every Also note that if you synchronise on barrier twice in an every this will only count as one member enrolling even if you have two enrolled ends For such use look at runParallel instead Also note that this currently applies to both ends of channels so that every readChannel writeChannel Will block indefinitely rather than completing the communication Each item every must support choice and in fact only subset of the items supported by alt are supported by every Currently the items in the list passed to every must be one of the following call to Control.Concurrent.CHP.Channels.readChannel or Control.Concurrent.CHP.Channels.extReadChannel call to Control.Concurrent.CHP.Channels.writeChannel or Control.Concurrent.CHP.Channels.extWriteChannel skip the always-ready guard Control.Concurrent.CHP.Monad.stop the never-ready guard will cause the whole every to never be ready since every has to wait for all guards call to Control.Concurrent.CHP.Monad.syncBarrier sequential composition where the first item is one of the things in this list call to every you can nest every blocks inside each other Timeouts e.g Control.Concurrent.CHP.Monad.waitFor are currently not supported You can always get another process to synchronise on an event with you once certain time has passed Note also that you cannot put an alt inside an every So you cannot say every readChannel alt readChannel readChannel To wait for and or like this you must expand it out into and or and alt every readChannel readChannel every readChannel readChannel As long as meets the conditions laid out above every will have the same behaviour as Added in version",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "every",
        "normalized": "[CHP a]-\u003eCHP[a]",
        "package": "chp",
        "partial": "",
        "signature": "[CHP a]-\u003eCHP[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#v:every_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eevery\u003c/a\u003e\u003c/code\u003e but discards the results.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.8.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "[CHP a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Alt.html#every_",
        "fct-type": "function",
        "title": "every_"
      },
      "index": {
        "description": "Like every but discards the results Added in version",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "every_",
        "normalized": "[CHP a]-\u003eCHP()",
        "package": "chp",
        "partial": "",
        "signature": "[CHP a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Alt.html#v:priAlt",
      "description": {
        "fct-descr": "\u003cp\u003eAn alt between several actions, with descending priority.  The first\n available action is chosen (biased towards actions nearest the beginning\n of the list), its body run, and its value returned.\n\u003c/p\u003e\u003cp\u003eWhat priority means here is a difficult thing, and in some ways a historical\n artifact.  We can group the guards into three categories:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e synchronisation guards (reading from and writing to channels, and synchronising\n on barriers)\n\u003c/li\u003e\u003cli\u003e time-out guards (such as \u003ccode\u003eControl.Concurrent.CHP.Monad.waitFor\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e dummy guards (\u003ccode\u003eControl.Concurrent.CHP.Monad.skip\u003c/code\u003e, \u003ccode\u003eControl.Concurrent.CHP.Monad.stop\u003c/code\u003e\n and things like IO actions)\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThere exists priority when comparing dummy guards to anything else.  So for\n example,\n\u003c/p\u003e\u003cpre\u003e priAlt [ skip, x ]\n\u003c/pre\u003e\u003cp\u003eWill always select the first guard (the skip guard), whereas:\n\u003c/p\u003e\u003cpre\u003e priAlt [ x , skip ]\n\u003c/pre\u003e\u003cp\u003eIs an effective way to poll and see if x is ready, otherwise the \u003ccode\u003eControl.Concurrent.CHP.Monad.skip\u003c/code\u003e will\n be chosen.  However, there is no priority between synchronisation guards and\n time-out guards.  So the two lines:\n\u003c/p\u003e\u003cpre\u003e priAlt [ x, y ]\n priAlt [ y, x ]\n\u003c/pre\u003e\u003cp\u003eMay have the same or different behaviour (when x and y are not dummy guards),\n there is no guarantee either way.  The reason behind this is that if you ask\n for:\n\u003c/p\u003e\u003cpre\u003e priAlt [ readChannel c, writeChannel d 6 ]\n\u003c/pre\u003e\u003cp\u003eAnd the process at the other end is asking for:\n\u003c/p\u003e\u003cpre\u003e priAlt [ readChannel d, writeChannel c 8 ]\n\u003c/pre\u003e\u003cp\u003eWhichever channel is chosen by both processes will not satisfy the priority\n at one end (if such priority between channels was supported).  If you do want\n priority that is globally consistent, look at the channel and barrier creation\n methods for ways to set priority on events.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Alt",
        "fct-package": "chp",
        "fct-signature": "[CHP a] -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#priAlt",
        "fct-type": "function",
        "title": "priAlt"
      },
      "index": {
        "description": "An alt between several actions with descending priority The first available action is chosen biased towards actions nearest the beginning of the list its body run and its value returned What priority means here is difficult thing and in some ways historical artifact We can group the guards into three categories synchronisation guards reading from and writing to channels and synchronising on barriers time-out guards such as Control.Concurrent.CHP.Monad.waitFor dummy guards Control.Concurrent.CHP.Monad.skip Control.Concurrent.CHP.Monad.stop and things like IO actions There exists priority when comparing dummy guards to anything else So for example priAlt skip Will always select the first guard the skip guard whereas priAlt skip Is an effective way to poll and see if is ready otherwise the Control.Concurrent.CHP.Monad.skip will be chosen However there is no priority between synchronisation guards and time-out guards So the two lines priAlt priAlt May have the same or different behaviour when and are not dummy guards there is no guarantee either way The reason behind this is that if you ask for priAlt readChannel writeChannel And the process at the other end is asking for priAlt readChannel writeChannel Whichever channel is chosen by both processes will not satisfy the priority at one end if such priority between channels was supported If you do want priority that is globally consistent look at the channel and barrier creation methods for ways to set priority on events",
        "hierarchy": "Control Concurrent CHP Alt",
        "module": "Control.Concurrent.CHP.Alt",
        "name": "priAlt",
        "normalized": "[CHP a]-\u003eCHP a",
        "package": "chp",
        "partial": "Alt",
        "signature": "[CHP a]-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing barriers.\n\u003c/p\u003e\u003cp\u003eA barrier is a synchronisation primitive.  When N processes are enrolled\n on a barrier, all N must synchronise on the barrier before any synchronisations\n may complete, at which point they all complete.  That is, when a single\n process synchronises on a barrier, it must then wait until all the other\n enrolled processes also synchronise before it can finish.\n\u003c/p\u003e\u003cp\u003eOnly processes enrolled on a barrier may synchronise on it.  Enrolled barriers\n should not be passed around between processes, or used twice in a parallel\n composition.  Instead, each process should enroll on the barrier itself.\n\u003c/p\u003e\u003cp\u003eBarriers support choice (alting).  This can lead to a lot of non-determinism\n and some confusion.  Consider these two processes, both enrolled on barriers a and b:\n\u003c/p\u003e\u003cpre\u003e (sync a \u003c-\u003e sync b)\n (sync b \u003c-\u003e sync a)\n\u003c/pre\u003e\u003cp\u003eWhich barrier completes is determined by the run-time, and will be an arbitrary\n choice.  This is even the case when priority is involved:\n\u003c/p\u003e\u003cpre\u003e (sync a \u003c/\u003e sync b)\n (sync b \u003c/\u003e sync a)\n\u003c/pre\u003e\u003cp\u003eClearly there is no way to resolve this to satisfy both priorities; the\n run-time will end up choosing.\n\u003c/p\u003e\u003cp\u003eBarrier poison can be detected when syncing, enrolling or resigning.  You\n may only poison a barrier that you are currently enrolled on.\n\u003c/p\u003e\u003cp\u003eBarriers can also support phases.  The idea behind a phased barrier is that\n a barrier is always on a certain phase P.  Whenever a barrier successfully\n completes, the phase is incremented (but it does not have to be an integer).\n  Everyone is told the new phase once they complete a synchronisation, and\n may query the current phase for any barrier that they are currently enrolled\n on.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html",
        "fct-type": "module",
        "title": "Barriers"
      },
      "index": {
        "description": "module containing barriers barrier is synchronisation primitive When processes are enrolled on barrier all must synchronise on the barrier before any synchronisations may complete at which point they all complete That is when single process synchronises on barrier it must then wait until all the other enrolled processes also synchronise before it can finish Only processes enrolled on barrier may synchronise on it Enrolled barriers should not be passed around between processes or used twice in parallel composition Instead each process should enroll on the barrier itself Barriers support choice alting This can lead to lot of non-determinism and some confusion Consider these two processes both enrolled on barriers and sync sync sync sync Which barrier completes is determined by the run-time and will be an arbitrary choice This is even the case when priority is involved sync sync sync sync Clearly there is no way to resolve this to satisfy both priorities the run-time will end up choosing Barrier poison can be detected when syncing enrolling or resigning You may only poison barrier that you are currently enrolled on Barriers can also support phases The idea behind phased barrier is that barrier is always on certain phase Whenever barrier successfully completes the phase is incremented but it does not have to be an integer Everyone is told the new phase once they complete synchronisation and may query the current phase for any barrier that they are currently enrolled on",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "Barriers",
        "normalized": "",
        "package": "chp",
        "partial": "Barriers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#t:BarOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for barrier creation; a function to show the inner data, and an optional\n label (both only affect tracing).  These options can be passed to newPhasedBarrier'.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.7.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#BarOpts",
        "fct-type": "data",
        "title": "BarOpts"
      },
      "index": {
        "description": "Options for barrier creation function to show the inner data and an optional label both only affect tracing These options can be passed to newPhasedBarrier Added in version",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "BarOpts",
        "normalized": "",
        "package": "chp",
        "partial": "Bar Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#t:Barrier",
      "description": {
        "fct-descr": "\u003cp\u003eA special case of the PhasedBarrier that has no useful phases, i.e. a\n standard barrier.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#Barrier",
        "fct-type": "type",
        "title": "Barrier"
      },
      "index": {
        "description": "special case of the PhasedBarrier that has no useful phases i.e standard barrier",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "Barrier",
        "normalized": "",
        "package": "chp",
        "partial": "Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#t:EnrolledBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eA useful type synonym for enrolled barriers with no phases\n\u003c/p\u003e\u003cp\u003eAdded in 1.1.0\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#EnrolledBarrier",
        "fct-type": "type",
        "title": "EnrolledBarrier"
      },
      "index": {
        "description": "useful type synonym for enrolled barriers with no phases Added in",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "EnrolledBarrier",
        "normalized": "",
        "package": "chp",
        "partial": "Enrolled Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#t:PhasedBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eA phased barrier that is capable of being poisoned and throwing poison.\n  You will need to enroll on it to do anything useful with it.\n For the phases you can use any type that satisfies \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n  The phase increments every time the barrier completes.  Incrementing consists\n of: \u003ccode\u003eif p == maxBound then minBound else succ p\u003c/code\u003e.  Examples of things that\n make sense for phases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The () type (see the \u003ccode\u003eBarrier\u003c/code\u003e type).  This effectively has a single repeating\n phase, and acts like a non-phased barrier.\n\u003c/li\u003e\u003cli\u003e A bounded integer type.  This increments the count every time the barrier completes.\n  But don't forget that the count will wrap round when it reaches the end.\n  You cannot use \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for a phase because it is unbounded.  If you really\n want to have an infinitely increasing count, you can wrap \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in a newtype and\n provide a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e instance for it (with minBound and maxBound set to -1,\n if you start on 0).\n\u003c/li\u003e\u003cli\u003e A boolean.  This implements a simple black-white barrier, where the state\n flips on each iteration.\n\u003c/li\u003e\u003cli\u003e A custom data type that has only constructors.  For example, \u003ccode\u003edata MyPhases\n = Discover | Plan | Move\u003c/code\u003e.  Haskell supports deriving \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e automatically on such types.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-CSP.html#PhasedBarrier",
        "fct-type": "data",
        "title": "PhasedBarrier"
      },
      "index": {
        "description": "phased barrier that is capable of being poisoned and throwing poison You will need to enroll on it to do anything useful with it For the phases you can use any type that satisfies Enum Bounded and Eq The phase increments every time the barrier completes Incrementing consists of if maxBound then minBound else succ Examples of things that make sense for phases The type see the Barrier type This effectively has single repeating phase and acts like non-phased barrier bounded integer type This increments the count every time the barrier completes But don forget that the count will wrap round when it reaches the end You cannot use Integer for phase because it is unbounded If you really want to have an infinitely increasing count you can wrap Integer in newtype and provide Bounded instance for it with minBound and maxBound set to if you start on boolean This implements simple black-white barrier where the state flips on each iteration custom data type that has only constructors For example data MyPhases Discover Plan Move Haskell supports deriving Enum Bounded and Eq automatically on such types",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "PhasedBarrier",
        "normalized": "",
        "package": "chp",
        "partial": "Phased Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:BarOpts",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "BarOpts",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "BarOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "BarOpts",
        "normalized": "",
        "package": "chp",
        "partial": "Bar Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:barIncPhase",
      "description": {
        "fct-descr": "\u003cp\u003eAside from the standard \u003ccode\u003e\u003ca\u003edefaultIncPhase\u003c/a\u003e\u003c/code\u003e, you can use succ or (+1) with\n Integer as the inner type to get a barrier that never cycles.  You can also\n do things like supplying (+2) as the incrementing function, or even using\n lists as the phase type to do crazy things.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "phase -\u003e phase",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barIncPhase"
      },
      "index": {
        "description": "Aside from the standard defaultIncPhase you can use succ or with Integer as the inner type to get barrier that never cycles You can also do things like supplying as the incrementing function or even using lists as the phase type to do crazy things",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "barIncPhase",
        "normalized": "a-\u003ea",
        "package": "chp",
        "partial": "Inc Phase",
        "signature": "phase-\u003ephase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:barLabel",
      "description": {
        "fct-descr": "\u003cp\u003eUses the Show instance for showing the data in traces, and the given label.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.7.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "String -\u003e BarOpts phase",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#barLabel",
        "fct-type": "function",
        "title": "barLabel"
      },
      "index": {
        "description": "Uses the Show instance for showing the data in traces and the given label Added in version",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "barLabel",
        "normalized": "String-\u003eBarOpts a",
        "package": "chp",
        "partial": "Label",
        "signature": "String-\u003eBarOpts phase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:barOptsLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "Maybe String",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barOptsLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "barOptsLabel",
        "normalized": "",
        "package": "chp",
        "partial": "Opts Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:barOptsShow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "phase -\u003e String",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barOptsShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "barOptsShow",
        "normalized": "a-\u003eString",
        "package": "chp",
        "partial": "Opts Show",
        "signature": "phase-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:barPriority",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 2.1.0.  See \u003ccode\u003eControl.Concurrent.CHP.Channels.Creation.ChanOpts\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barPriority"
      },
      "index": {
        "description": "Added in version See Control.Concurrent.CHP.Channels.Creation.ChanOpts",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "barPriority",
        "normalized": "",
        "package": "chp",
        "partial": "Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:currentPhase",
      "description": {
        "fct-descr": "\u003cp\u003eFinds out the current phase a barrier is on.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "Enrolled PhasedBarrier phase -\u003e CHP phase",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#currentPhase",
        "fct-type": "function",
        "title": "currentPhase"
      },
      "index": {
        "description": "Finds out the current phase barrier is on",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "currentPhase",
        "normalized": "Enrolled PhasedBarrier a-\u003eCHP a",
        "package": "chp",
        "partial": "Phase",
        "signature": "Enrolled PhasedBarrier phase-\u003eCHP phase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:defaultBarOpts",
      "description": {
        "fct-descr": "\u003cp\u003eThe default: don't show anything, don't label anything, use Enum+Bounded+Eq to\n work out the phase increment.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.7.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "BarOpts phase",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#defaultBarOpts",
        "fct-type": "function",
        "title": "defaultBarOpts"
      },
      "index": {
        "description": "The default don show anything don label anything use Enum Bounded Eq to work out the phase increment Added in version",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "defaultBarOpts",
        "normalized": "",
        "package": "chp",
        "partial": "Bar Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:defaultIncPhase",
      "description": {
        "fct-descr": "\u003cp\u003eThe default phase incrementing function.  If the phase is already at \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e,\n it sets it to \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e; otherwise it uses \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e to increment the phase.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "phase -\u003e phase",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#defaultIncPhase",
        "fct-type": "function",
        "title": "defaultIncPhase"
      },
      "index": {
        "description": "The default phase incrementing function If the phase is already at maxBound it sets it to minBound otherwise it uses succ to increment the phase",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "defaultIncPhase",
        "normalized": "a-\u003ea",
        "package": "chp",
        "partial": "Inc Phase",
        "signature": "phase-\u003ephase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:getBarrierIdentifier",
      "description": {
        "fct-descr": "\u003cp\u003eGets the identifier of a Barrier.  Useful if you want to identify it in\n the trace later on.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "PhasedBarrier ph -\u003e Unique",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#getBarrierIdentifier",
        "fct-type": "function",
        "title": "getBarrierIdentifier"
      },
      "index": {
        "description": "Gets the identifier of Barrier Useful if you want to identify it in the trace later on",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "getBarrierIdentifier",
        "normalized": "PhasedBarrier a-\u003eUnique",
        "package": "chp",
        "partial": "Barrier Identifier",
        "signature": "PhasedBarrier ph-\u003eUnique"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:newBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new barrier with no processes enrolled\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "CHP Barrier",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#newBarrier",
        "fct-type": "function",
        "title": "newBarrier"
      },
      "index": {
        "description": "Creates new barrier with no processes enrolled",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "newBarrier",
        "normalized": "",
        "package": "chp",
        "partial": "Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:newBarrierPri",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new barrier with no processes enrolled and the given priority.\n\u003c/p\u003e\u003cp\u003eAdded in version 2.1.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "Int -\u003e CHP Barrier",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#newBarrierPri",
        "fct-type": "function",
        "title": "newBarrierPri"
      },
      "index": {
        "description": "Creates new barrier with no processes enrolled and the given priority Added in version",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "newBarrierPri",
        "normalized": "Int-\u003eCHP Barrier",
        "package": "chp",
        "partial": "Barrier Pri",
        "signature": "Int-\u003eCHP Barrier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:newBarrierWithLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new barrier with no processes enrolled and labels it in traces\n using the given label.  See \u003ccode\u003e\u003ca\u003enewBarrier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "String -\u003e CHP Barrier",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#newBarrierWithLabel",
        "fct-type": "function",
        "title": "newBarrierWithLabel"
      },
      "index": {
        "description": "Creates new barrier with no processes enrolled and labels it in traces using the given label See newBarrier",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "newBarrierWithLabel",
        "normalized": "String-\u003eCHP Barrier",
        "package": "chp",
        "partial": "Barrier With Label",
        "signature": "String-\u003eCHP Barrier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:newPhasedBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new barrier with no processes enrolled, that will be on the\n given phase.  You will often want to pass in the last value in your phase\n cycle, so that the first synchronisation moves it on to the first\n\u003c/p\u003e\u003cp\u003eThe Show constraint was added in version 1.5.0\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "phase -\u003e CHP (PhasedBarrier phase)",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#newPhasedBarrier",
        "fct-type": "function",
        "title": "newPhasedBarrier"
      },
      "index": {
        "description": "Creates new barrier with no processes enrolled that will be on the given phase You will often want to pass in the last value in your phase cycle so that the first synchronisation moves it on to the first The Show constraint was added in version",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "newPhasedBarrier",
        "normalized": "a-\u003eCHP(PhasedBarrier a)",
        "package": "chp",
        "partial": "Phased Barrier",
        "signature": "phase-\u003eCHP(PhasedBarrier phase)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:newPhasedBarrier-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewPhasedBarrier\u003c/a\u003e\u003c/code\u003e but allows you to customise the options.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "phase -\u003e BarOpts phase -\u003e CHP (PhasedBarrier phase)",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#newPhasedBarrier%27",
        "fct-type": "function",
        "title": "newPhasedBarrier'"
      },
      "index": {
        "description": "Like newPhasedBarrier but allows you to customise the options",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "newPhasedBarrier'",
        "normalized": "a-\u003eBarOpts a-\u003eCHP(PhasedBarrier a)",
        "package": "chp",
        "partial": "Phased Barrier'",
        "signature": "phase-\u003eBarOpts phase-\u003eCHP(PhasedBarrier phase)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:syncAndWaitForPhase",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronises on the barrier at least once, until it is in the given phase.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003esyncAndWaitForPhase ph bar == syncBarrier bar \u003e\u003e waitForPhase ph\n bar\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.7.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "phase -\u003e Enrolled PhasedBarrier phase -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#syncAndWaitForPhase",
        "fct-type": "function",
        "title": "syncAndWaitForPhase"
      },
      "index": {
        "description": "Synchronises on the barrier at least once until it is in the given phase Note that syncAndWaitForPhase ph bar syncBarrier bar waitForPhase ph bar Added in version",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "syncAndWaitForPhase",
        "normalized": "a-\u003eEnrolled PhasedBarrier a-\u003eCHP()",
        "package": "chp",
        "partial": "And Wait For Phase",
        "signature": "phase-\u003eEnrolled PhasedBarrier phase-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:syncBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronises on the given barrier.  You must be enrolled on a barrier in order\n to synchronise on it.  Returns the new phase, following the synchronisation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "Enrolled PhasedBarrier phase -\u003e CHP phase",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#syncBarrier",
        "fct-type": "function",
        "title": "syncBarrier"
      },
      "index": {
        "description": "Synchronises on the given barrier You must be enrolled on barrier in order to synchronise on it Returns the new phase following the synchronisation",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "syncBarrier",
        "normalized": "Enrolled PhasedBarrier a-\u003eCHP a",
        "package": "chp",
        "partial": "Barrier",
        "signature": "Enrolled PhasedBarrier phase-\u003eCHP phase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Barriers.html#v:waitForPhase",
      "description": {
        "fct-descr": "\u003cp\u003eIf the barrier is not in the given phase, synchronises on the barrier\n repeatedly until it \u003cem\u003eis\u003c/em\u003e in the given phase.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Barriers",
        "fct-package": "chp",
        "fct-signature": "phase -\u003e Enrolled PhasedBarrier phase -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Barriers.html#waitForPhase",
        "fct-type": "function",
        "title": "waitForPhase"
      },
      "index": {
        "description": "If the barrier is not in the given phase synchronises on the barrier repeatedly until it is in the given phase",
        "hierarchy": "Control Concurrent CHP Barriers",
        "module": "Control.Concurrent.CHP.Barriers",
        "name": "waitForPhase",
        "normalized": "a-\u003eEnrolled PhasedBarrier a-\u003eCHP()",
        "package": "chp",
        "partial": "For Phase",
        "signature": "phase-\u003eEnrolled PhasedBarrier phase-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing broadcast channels (one-to-many).  Whereas a one-to-any\n channel features one writer sending a \u003cem\u003esingle\u003c/em\u003e value to \u003cem\u003eone\u003c/em\u003e (of many) readers, a\n one-to-many channel features one writer sending the \u003cem\u003esame\u003c/em\u003e value to \u003cem\u003emany\u003c/em\u003e\n readers.  So a one-to-any channel involves claiming the channel-end to ensure\n exclusivity, but a one-to-many channel involves enrolling on the channel-end\n (subscribing) before it can engage in communication.\n\u003c/p\u003e\u003cp\u003eA communication on a one-to-many channel only takes place when the writer\n and all readers currently enrolled agree to communicate.  What happens when\n the writer wants to communicate and no readers are enrolled was undefined\n in versions 1.5.1 and earlier (the writer may block, or may communicate\n happily to no-one).  However, in version 1.6.0 onwards the semantics are\n clear: a writer that communicates on a broadcast channel with no readers\n involved will succeed immediately, communicating to no-one (i.e. the data\n is lost).  Similarly, a read from a reduce channel will immediately return\n \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e when no writers are enrolled.  It is possible to get into a state\n of livelock (by repeatedly performing these instant communications) in\n these sorts of situations.\n\u003c/p\u003e\u003cp\u003eThis module also contains reduce channels (added in version 1.1.1).  Because\n in CHP channels must have the same type at both ends, we use the Monoid\n type-class.  It is important to be aware that the order of mappends will be\n non-deterministic, and thus you should either use an mappend that is commutative\n or code around this restruction.\n\u003c/p\u003e\u003cp\u003eFor example, a common thing to do would be to use lists as the type for\n reduce channels, make each writer write a single item list (but more is\n possible), then use the list afterwards, but be aware that it is unordered.\n  If it is important to have an ordered list, make each writer write a pair\n containing a (unique) index value and the real data, then sort by the index\n value and discard it.\n\u003c/p\u003e\u003cp\u003eSince reduce channels were added after the initial library design, there\n is a slight complication: it is not possible to use newChannel (and all\n similar functions) with reduce channels because it is impossible to express\n the Monoid constraint for the Channel instance.  Instead, you must use manyToOneChannel\n and manyToAnyChannel.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html",
        "fct-type": "module",
        "title": "BroadcastReduce"
      },
      "index": {
        "description": "module containing broadcast channels one-to-many Whereas one-to-any channel features one writer sending single value to one of many readers one-to-many channel features one writer sending the same value to many readers So one-to-any channel involves claiming the channel-end to ensure exclusivity but one-to-many channel involves enrolling on the channel-end subscribing before it can engage in communication communication on one-to-many channel only takes place when the writer and all readers currently enrolled agree to communicate What happens when the writer wants to communicate and no readers are enrolled was undefined in versions and earlier the writer may block or may communicate happily to no-one However in version onwards the semantics are clear writer that communicates on broadcast channel with no readers involved will succeed immediately communicating to no-one i.e the data is lost Similarly read from reduce channel will immediately return mempty when no writers are enrolled It is possible to get into state of livelock by repeatedly performing these instant communications in these sorts of situations This module also contains reduce channels added in version Because in CHP channels must have the same type at both ends we use the Monoid type-class It is important to be aware that the order of mappends will be non-deterministic and thus you should either use an mappend that is commutative or code around this restruction For example common thing to do would be to use lists as the type for reduce channels make each writer write single item list but more is possible then use the list afterwards but be aware that it is unordered If it is important to have an ordered list make each writer write pair containing unique index value and the real data then sort by the index value and discard it Since reduce channels were added after the initial library design there is slight complication it is not possible to use newChannel and all similar functions with reduce channels because it is impossible to express the Monoid constraint for the Channel instance Instead you must use manyToOneChannel and manyToAnyChannel",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "BroadcastReduce",
        "normalized": "",
        "package": "chp",
        "partial": "Broadcast Reduce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:AnyToManyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#AnyToManyChannel",
        "fct-type": "type",
        "title": "AnyToManyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "AnyToManyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Any To Many Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:BroadcastChanin",
      "description": {
        "fct-descr": "\u003cp\u003eThe reading end of a broadcast channel.  You must enroll on it before\n you can read from it or poison it.\n\u003c/p\u003e\u003cp\u003eThe Eq instance was added in version 1.4.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#BroadcastChanin",
        "fct-type": "data",
        "title": "BroadcastChanin"
      },
      "index": {
        "description": "The reading end of broadcast channel You must enroll on it before you can read from it or poison it The Eq instance was added in version",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "BroadcastChanin",
        "normalized": "",
        "package": "chp",
        "partial": "Broadcast Chanin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:BroadcastChanout",
      "description": {
        "fct-descr": "\u003cp\u003eThe writing end of a broadcast channel.\n\u003c/p\u003e\u003cp\u003eThe Eq instance was added in version 1.4.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#BroadcastChanout",
        "fct-type": "data",
        "title": "BroadcastChanout"
      },
      "index": {
        "description": "The writing end of broadcast channel The Eq instance was added in version",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "BroadcastChanout",
        "normalized": "",
        "package": "chp",
        "partial": "Broadcast Chanout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:ManyToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#ManyToAnyChannel",
        "fct-type": "type",
        "title": "ManyToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "ManyToAnyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Many To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:ManyToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#ManyToOneChannel",
        "fct-type": "type",
        "title": "ManyToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "ManyToOneChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Many To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:OneToManyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#OneToManyChannel",
        "fct-type": "type",
        "title": "OneToManyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "OneToManyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "One To Many Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:ReduceChanin",
      "description": {
        "fct-descr": "\u003cp\u003eThe reading end of a reduce channel.\n\u003c/p\u003e\u003cp\u003eThe Eq instance was added in version 1.4.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#ReduceChanin",
        "fct-type": "data",
        "title": "ReduceChanin"
      },
      "index": {
        "description": "The reading end of reduce channel The Eq instance was added in version",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "ReduceChanin",
        "normalized": "",
        "package": "chp",
        "partial": "Reduce Chanin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#t:ReduceChanout",
      "description": {
        "fct-descr": "\u003cp\u003eThe writing end of a reduce channel.  You must enroll on it before\n you can read from it or poison it.\n\u003c/p\u003e\u003cp\u003eThe Eq instance was added in version 1.4.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#ReduceChanout",
        "fct-type": "data",
        "title": "ReduceChanout"
      },
      "index": {
        "description": "The writing end of reduce channel You must enroll on it before you can read from it or poison it The Eq instance was added in version",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "ReduceChanout",
        "normalized": "",
        "package": "chp",
        "partial": "Reduce Chanout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:anyToManyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "m (AnyToManyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#anyToManyChannel",
        "fct-type": "function",
        "title": "anyToManyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "anyToManyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To Many Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:anyToManyChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e\u003cp\u003eIn versions 1.5.0-1.7.0, the broadcast and reduce channels do not appear correctly\n in the traces.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (AnyToManyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#anyToManyChannel%27",
        "fct-type": "function",
        "title": "anyToManyChannel'"
      },
      "index": {
        "description": "Added in version In versions the broadcast and reduce channels do not appear correctly in the traces",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "anyToManyChannel'",
        "normalized": "ChanOpts a-\u003eb(AnyToManyChannel a)",
        "package": "chp",
        "partial": "To Many Channel'",
        "signature": "ChanOpts a-\u003em(AnyToManyChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:manyToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "m (ManyToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#manyToAnyChannel",
        "fct-type": "function",
        "title": "manyToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "manyToAnyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:manyToAnyChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e\u003cp\u003eIn versions 1.5.0-1.7.0, the broadcast and reduce channels do not appear correctly\n in the traces.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (ManyToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#manyToAnyChannel%27",
        "fct-type": "function",
        "title": "manyToAnyChannel'"
      },
      "index": {
        "description": "Added in version In versions the broadcast and reduce channels do not appear correctly in the traces",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "manyToAnyChannel'",
        "normalized": "ChanOpts a-\u003eb(ManyToAnyChannel a)",
        "package": "chp",
        "partial": "To Any Channel'",
        "signature": "ChanOpts a-\u003em(ManyToAnyChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:manyToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "m (ManyToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#manyToOneChannel",
        "fct-type": "function",
        "title": "manyToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "manyToOneChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:manyToOneChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e\u003cp\u003eIn versions 1.5.0-1.7.0, the broadcast and reduce channels do not appear correctly\n in the traces.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (ManyToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#manyToOneChannel%27",
        "fct-type": "function",
        "title": "manyToOneChannel'"
      },
      "index": {
        "description": "Added in version In versions the broadcast and reduce channels do not appear correctly in the traces",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "manyToOneChannel'",
        "normalized": "ChanOpts a-\u003eb(ManyToOneChannel a)",
        "package": "chp",
        "partial": "To One Channel'",
        "signature": "ChanOpts a-\u003em(ManyToOneChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:oneToManyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "m (OneToManyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#oneToManyChannel",
        "fct-type": "function",
        "title": "oneToManyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "oneToManyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To Many Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:oneToManyChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e\u003cp\u003eIn versions 1.5.0-1.7.0, the broadcast and reduce channels do not appear correctly\n in the traces.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (OneToManyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#oneToManyChannel%27",
        "fct-type": "function",
        "title": "oneToManyChannel'"
      },
      "index": {
        "description": "Added in version In versions the broadcast and reduce channels do not appear correctly in the traces",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "oneToManyChannel'",
        "normalized": "ChanOpts a-\u003eb(OneToManyChannel a)",
        "package": "chp",
        "partial": "To Many Channel'",
        "signature": "ChanOpts a-\u003em(OneToManyChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-BroadcastReduce.html#v:sameReduceChannel",
      "description": {
        "fct-descr": "\u003cp\u003eThe reduce channel version of sameChannel.\n\u003c/p\u003e\u003cp\u003eThis function was added in version 1.4.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "fct-package": "chp",
        "fct-signature": "ReduceChanin a -\u003e ReduceChanout a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-CHP-Channels-BroadcastReduce.html#sameReduceChannel",
        "fct-type": "function",
        "title": "sameReduceChannel"
      },
      "index": {
        "description": "The reduce channel version of sameChannel This function was added in version",
        "hierarchy": "Control Concurrent CHP Channels BroadcastReduce",
        "module": "Control.Concurrent.CHP.Channels.BroadcastReduce",
        "name": "sameReduceChannel",
        "normalized": "ReduceChanin a-\u003eReduceChanout a-\u003eBool",
        "package": "chp",
        "partial": "Reduce Channel",
        "signature": "ReduceChanin a-\u003eReduceChanout a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll the channel-ends in CHP are instances of \u003ccode\u003e\u003ca\u003eReadableChannel\u003c/a\u003e\u003c/code\u003e (for ends that\n you can read from) or \u003ccode\u003e\u003ca\u003eWriteableChannel\u003c/a\u003e\u003c/code\u003e (for ends that you can write to).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadChannel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteChannel\u003c/a\u003e\u003c/code\u003e functions are the standard way to communicate\n on a channel.  These functions wait for the other party in the communication\n to arrive, then exchange the data, then complete.  In pseudo-code, the semantics\n are like this when two parties (shown here as two columns) communicate:\n\u003c/p\u003e\u003cpre\u003e do sync                          sync\n    x                        \u003c-   return y\n    done                          done\n\u003c/pre\u003e\u003cp\u003eFurther options are offered by the \u003ccode\u003e\u003ca\u003eextReadChannel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eextWriteChannel\u003c/a\u003e\u003c/code\u003e channels,\n which allow either side to perform additional (so-called extended) actions during the communication.\n  The semantics when both sides are performing extended actions are:\n\u003c/p\u003e\u003cpre\u003e do sync                          sync\n                                  y \u003c- extWriteAction\n    x                        \u003c-   return y\n    x' \u003c- extReadAction x         done\n    done                          done\n    return x'\n\u003c/pre\u003e\u003cp\u003eNeither end need know that the other is performing an extended action, and any\n combination is possible (e.g. a normal \u003ccode\u003e\u003ca\u003ewriteChannel\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eextReadChannel\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html",
        "fct-type": "module",
        "title": "Communication"
      },
      "index": {
        "description": "All the channel-ends in CHP are instances of ReadableChannel for ends that you can read from or WriteableChannel for ends that you can write to The readChannel and writeChannel functions are the standard way to communicate on channel These functions wait for the other party in the communication to arrive then exchange the data then complete In pseudo-code the semantics are like this when two parties shown here as two columns communicate do sync sync return done done Further options are offered by the extReadChannel and extWriteChannel channels which allow either side to perform additional so-called extended actions during the communication The semantics when both sides are performing extended actions are do sync sync extWriteAction return extReadAction done done done return Neither end need know that the other is performing an extended action and any combination is possible e.g normal writeChannel with an extReadChannel",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "Communication",
        "normalized": "",
        "package": "chp",
        "partial": "Communication",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#t:ReadableChannel",
      "description": {
        "fct-descr": "\u003cp\u003eA class indicating that a channel can be read from.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#ReadableChannel",
        "fct-type": "class",
        "title": "ReadableChannel"
      },
      "index": {
        "description": "class indicating that channel can be read from",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "ReadableChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Readable Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#t:WriteableChannel",
      "description": {
        "fct-descr": "\u003cp\u003eA class indicating that a channel can be written to.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#WriteableChannel",
        "fct-type": "class",
        "title": "WriteableChannel"
      },
      "index": {
        "description": "class indicating that channel can be written to",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "WriteableChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Writeable Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#v:extReadChannel",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms an extended read from the channel, performing the given action\n before freeing the writer\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "chanEnd a -\u003e (a -\u003e CHP b) -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#extReadChannel",
        "fct-type": "method",
        "title": "extReadChannel"
      },
      "index": {
        "description": "Performs an extended read from the channel performing the given action before freeing the writer",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "extReadChannel",
        "normalized": "a b-\u003e(b-\u003eCHP c)-\u003eCHP c",
        "package": "chp",
        "partial": "Read Channel",
        "signature": "chanEnd a-\u003e(a-\u003eCHP b)-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#v:extWriteChannel",
      "description": {
        "fct-descr": "\u003cp\u003eStarts the communication, then performs the given extended action, then\n sends the result of that down the channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "chanEnd a -\u003e CHP a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#extWriteChannel",
        "fct-type": "method",
        "title": "extWriteChannel"
      },
      "index": {
        "description": "Starts the communication then performs the given extended action then sends the result of that down the channel",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "extWriteChannel",
        "normalized": "a b-\u003eCHP b-\u003eCHP()",
        "package": "chp",
        "partial": "Write Channel",
        "signature": "chanEnd a-\u003eCHP a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#v:extWriteChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike extWriteChannel, but allows a value to be returned from the inner action.\n\u003c/p\u003e\u003cp\u003eThis function was added in version 1.4.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "chanEnd a -\u003e CHP (a, b) -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#extWriteChannel%27",
        "fct-type": "method",
        "title": "extWriteChannel'"
      },
      "index": {
        "description": "Like extWriteChannel but allows value to be returned from the inner action This function was added in version",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "extWriteChannel'",
        "normalized": "a b-\u003eCHP(b,c)-\u003eCHP c",
        "package": "chp",
        "partial": "Write Channel'",
        "signature": "chanEnd a-\u003eCHP(a,b)-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#v:readChannel",
      "description": {
        "fct-descr": "\u003cp\u003eReads from the given reading channel-end\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "chanEnd a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#readChannel",
        "fct-type": "method",
        "title": "readChannel"
      },
      "index": {
        "description": "Reads from the given reading channel-end",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "readChannel",
        "normalized": "a b-\u003eCHP b",
        "package": "chp",
        "partial": "Channel",
        "signature": "chanEnd a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#v:writeChannel",
      "description": {
        "fct-descr": "\u003cp\u003eWrites from the given writing channel-end\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "chanEnd a -\u003e a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#writeChannel",
        "fct-type": "method",
        "title": "writeChannel"
      },
      "index": {
        "description": "Writes from the given writing channel-end",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "writeChannel",
        "normalized": "a b-\u003eb-\u003eCHP()",
        "package": "chp",
        "partial": "Channel",
        "signature": "chanEnd a-\u003ea-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#v:writeChannelStrict",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function that uses the parallel strategies library (see the\n paper: \"Algorithm + Strategy = Parallelism\", P.W. Trinder et al, JFP\n 8(1) 1998,\n \u003ca\u003ehttp://www.macs.hw.ac.uk/~dsg/gph/papers/html/Strategies/strategies.html\u003c/a\u003e)\n to make sure that the value sent down a channel is strictly evaluated\n by the sender before transmission.\n\u003c/p\u003e\u003cp\u003eThis is useful when you want to write worker processes that evaluate data\n  and send it back to some \"harvester\" process.  By default the values sent\n back may be unevaluated, and thus the harvester might end up doing the evaluation.\n  If you use this function, the value is guaranteed to be completely evaluated\n before sending.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.0.2.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "chanEnd a -\u003e a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#writeChannelStrict",
        "fct-type": "function",
        "title": "writeChannelStrict"
      },
      "index": {
        "description": "helper function that uses the parallel strategies library see the paper Algorithm Strategy Parallelism P.W Trinder et al JFP http www.macs.hw.ac.uk dsg gph papers html Strategies strategies.html to make sure that the value sent down channel is strictly evaluated by the sender before transmission This is useful when you want to write worker processes that evaluate data and send it back to some harvester process By default the values sent back may be unevaluated and thus the harvester might end up doing the evaluation If you use this function the value is guaranteed to be completely evaluated before sending Added in version",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "writeChannelStrict",
        "normalized": "a b-\u003eb-\u003eCHP()",
        "package": "chp",
        "partial": "Channel Strict",
        "signature": "chanEnd a-\u003ea-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Communication.html#v:writeValue",
      "description": {
        "fct-descr": "\u003cp\u003eA useful synonym for \u003ccode\u003eflip writeChannel\u003c/code\u003e.  Especially useful with \u003ccode\u003eclaim\u003c/code\u003e\n so that instead of writing \u003ccode\u003eclaim output (flip writeChannel 6)\u003c/code\u003e you can write\n \u003ccode\u003eclaim output (writeValue 6)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Communication",
        "fct-package": "chp",
        "fct-signature": "a -\u003e chanEnd a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Communication.html#writeValue",
        "fct-type": "function",
        "title": "writeValue"
      },
      "index": {
        "description": "useful synonym for flip writeChannel Especially useful with claim so that instead of writing claim output flip writeChannel you can write claim output writeValue Added in version",
        "hierarchy": "Control Concurrent CHP Channels Communication",
        "module": "Control.Concurrent.CHP.Channels.Communication",
        "name": "writeValue",
        "normalized": "a-\u003eb a-\u003eCHP()",
        "package": "chp",
        "partial": "Value",
        "signature": "a-\u003echanEnd a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a proliferation of channel creation methods.\n\u003c/p\u003e\u003cp\u003eFor most uses, \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e is the only method needed from this module.  This\n creates a channel for you to use.  The channel will be automatically destroyed\n during garbage collection when it falls out of use, so there is no need to do\n anything to destroy it.\n\u003c/p\u003e\u003cp\u003eIt is often possible for the type system to infer which channel you want when\n you use \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e.  If the types of the ends are known by the type system,\n the channel-type can be inferred.  So you can usually just write \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e,\n and depending on how you use the channel, the type system will figure out\n which one you needed.\n\u003c/p\u003e\u003cp\u003eIf this gives a type error along the lines of:\n\u003c/p\u003e\u003cpre\u003e    Ambiguous type variables `r', `w' in the constraint:\n      `Channel r w' arising from a use of `newChannel' at tmp.hs:3:24-33\n    Probable fix: add a type signature that fixes these type variable(s)\n\u003c/pre\u003e\u003cp\u003eThen you must either explicitly type the channel ends you are using, or more\n simply, use one of the synonyms in \u003ca\u003eControl.Concurrent.CHP.Channels.Synonyms\u003c/a\u003e\n to indicate which kind of channel you are allocating.\n\u003c/p\u003e\u003cp\u003eSeveral other functions in this module, such as \u003ccode\u003e\u003ca\u003enewChannelWR\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enewChannels\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003enewChannelList\u003c/a\u003e\u003c/code\u003e are helpers built with newChannel to ease dealing with\n channel creation.\n\u003c/p\u003e\u003cp\u003eThe remainder of the functions in this module are related to traces (see \u003ca\u003eControl.Concurrent.CHP.Traces\u003c/a\u003e),\n and allowing the channels to show up usefully in traces: see \u003ccode\u003e\u003ca\u003enewChannel'\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eChanOpts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe channel creation methods were refactored in version 1.5.0.  Your code will\n only be affected if you were using the trace-related methods (for labelling\n the channels in traces).  Instead of using \u003ccode\u003eoneToOneChannelWithLabel \u003ca\u003efoo\u003c/a\u003e\u003c/code\u003e,\n you should use \u003ccode\u003eoneToOneChannel' $ chanLabel \u003ca\u003efoo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html",
        "fct-type": "module",
        "title": "Creation"
      },
      "index": {
        "description": "This module contains proliferation of channel creation methods For most uses newChannel is the only method needed from this module This creates channel for you to use The channel will be automatically destroyed during garbage collection when it falls out of use so there is no need to do anything to destroy it It is often possible for the type system to infer which channel you want when you use newChannel If the types of the ends are known by the type system the channel-type can be inferred So you can usually just write newChannel and depending on how you use the channel the type system will figure out which one you needed If this gives type error along the lines of Ambiguous type variables in the constraint Channel arising from use of newChannel at tmp.hs Probable fix add type signature that fixes these type variable Then you must either explicitly type the channel ends you are using or more simply use one of the synonyms in Control.Concurrent.CHP.Channels.Synonyms to indicate which kind of channel you are allocating Several other functions in this module such as newChannelWR newChannels and newChannelList are helpers built with newChannel to ease dealing with channel creation The remainder of the functions in this module are related to traces see Control.Concurrent.CHP.Traces and allowing the channels to show up usefully in traces see newChannel and ChanOpts The channel creation methods were refactored in version Your code will only be affected if you were using the trace-related methods for labelling the channels in traces Instead of using oneToOneChannelWithLabel foo you should use oneToOneChannel chanLabel foo",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "Creation",
        "normalized": "",
        "package": "chp",
        "partial": "Creation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#t:Chan",
      "description": {
        "fct-descr": "\u003cp\u003eA channel type, that can be used to get the ends of the channel via \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Base.html#Chan",
        "fct-type": "data",
        "title": "Chan"
      },
      "index": {
        "description": "channel type that can be used to get the ends of the channel via reader and writer",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "Chan",
        "normalized": "",
        "package": "chp",
        "partial": "Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#t:ChanOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for channel creation; a function to show the inner data, and an optional\n label (both only affect tracing).  These options can be passed to newChannel'.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#ChanOpts",
        "fct-type": "data",
        "title": "ChanOpts"
      },
      "index": {
        "description": "Options for channel creation function to show the inner data and an optional label both only affect tracing These options can be passed to newChannel Added in version",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "ChanOpts",
        "normalized": "",
        "package": "chp",
        "partial": "Chan Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#t:Channel",
      "description": {
        "fct-descr": "\u003cp\u003eA class used for allocating new channels, and getting the reading and\n writing ends.  There is a bijective assocation between the channel, and\n its pair of end types.  You can see the types in the list of instances below.\n Thus, \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e may be used, and the compiler will infer which type of\n channel is required based on what end-types you get from \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e.\n Alternatively, if you explicitly type the return of \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e, it will\n be definite which ends you will use.  If you do want to fix the type of\n the channel you are using when you allocate it, consider using one of the\n many \u003ccode\u003eoneToOneChannel\u003c/code\u003e-like shorthand functions that fix the type.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#Channel",
        "fct-type": "class",
        "title": "Channel"
      },
      "index": {
        "description": "class used for allocating new channels and getting the reading and writing ends There is bijective assocation between the channel and its pair of end types You can see the types in the list of instances below Thus newChannel may be used and the compiler will infer which type of channel is required based on what end-types you get from reader and writer Alternatively if you explicitly type the return of newChannel it will be definite which ends you will use If you do want to fix the type of the channel you are using when you allocate it consider using one of the many oneToOneChannel like shorthand functions that fix the type",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "Channel",
        "normalized": "",
        "package": "chp",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:ChanOpts",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "ChanOpts",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "ChanOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "ChanOpts",
        "normalized": "",
        "package": "chp",
        "partial": "Chan Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:chanLabel",
      "description": {
        "fct-descr": "\u003cp\u003eUses the Show instance for showing the data in traces, and the given label.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "String -\u003e ChanOpts a",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#chanLabel",
        "fct-type": "function",
        "title": "chanLabel"
      },
      "index": {
        "description": "Uses the Show instance for showing the data in traces and the given label Added in version",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "chanLabel",
        "normalized": "String-\u003eChanOpts a",
        "package": "chp",
        "partial": "Label",
        "signature": "String-\u003eChanOpts a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:chanOptsLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "Maybe String",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "chanOptsLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "chanOptsLabel",
        "normalized": "",
        "package": "chp",
        "partial": "Opts Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:chanOptsPriority",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 2.1.0.  Priority is per-event, static and system-wide.\n  If it is possible at any given moment for a process to resolve a choice one\n of several ways, the channel/barrier with the highest priority is chosen.\n  If the choice is a conjunction and all events in one conjunction are higher\n than all the events in the other, the higher one is chosen (otherwise no guarantees\n are made).  The default is zero, and the range is the full range of Int (both\n positive and negative).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "chanOptsPriority"
      },
      "index": {
        "description": "Added in version Priority is per-event static and system-wide If it is possible at any given moment for process to resolve choice one of several ways the channel barrier with the highest priority is chosen If the choice is conjunction and all events in one conjunction are higher than all the events in the other the higher one is chosen otherwise no guarantees are made The default is zero and the range is the full range of Int both positive and negative",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "chanOptsPriority",
        "normalized": "",
        "package": "chp",
        "partial": "Opts Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:chanOptsShow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "chanOptsShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "chanOptsShow",
        "normalized": "a-\u003eString",
        "package": "chp",
        "partial": "Opts Show",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:defaultChanOpts",
      "description": {
        "fct-descr": "\u003cp\u003eThe default: don't show anything, don't label anything\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#defaultChanOpts",
        "fct-type": "function",
        "title": "defaultChanOpts"
      },
      "index": {
        "description": "The default don show anything don label anything Added in version",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "defaultChanOpts",
        "normalized": "",
        "package": "chp",
        "partial": "Chan Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:labelChannel",
      "description": {
        "fct-descr": "\u003cp\u003eLabels a channel in the traces.  It is easiest to do this at creation.\n The effect of re-labelling channels after their first use is undefined.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "Chan r w a -\u003e String -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#labelChannel",
        "fct-type": "function",
        "title": "labelChannel"
      },
      "index": {
        "description": "Labels channel in the traces It is easiest to do this at creation The effect of re-labelling channels after their first use is undefined Added in version",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "labelChannel",
        "normalized": "Chan a b c-\u003eString-\u003ed()",
        "package": "chp",
        "partial": "Channel",
        "signature": "Chan r w a-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:newChannel",
      "description": {
        "fct-descr": "\u003cp\u003eAllocates a new channel.  Nothing need be done to\n destroy/de-allocate the channel when it is no longer in use.\n\u003c/p\u003e\u003cp\u003eThis function does not add any information to the traces: see newChannel' for\n that purpose.\n\u003c/p\u003e\u003cp\u003eIn version 1.5.0, this function was moved out of the \u003ccode\u003e\u003ca\u003eChannel\u003c/a\u003e\u003c/code\u003e class, but that\n should only matter if you were declaring your own instances of that class (very\n unlikely).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "m (Chan r w a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#newChannel",
        "fct-type": "function",
        "title": "newChannel"
      },
      "index": {
        "description": "Allocates new channel Nothing need be done to destroy de-allocate the channel when it is no longer in use This function does not add any information to the traces see newChannel for that purpose In version this function was moved out of the Channel class but that should only matter if you were declaring your own instances of that class very unlikely",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "newChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:newChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e but allows you to specify a way to convert the values\n into Strings in order to display them in the traces, and a label for the traces.  If\n you don't use traces, you can use \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (Chan r w a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#newChannel%27",
        "fct-type": "method",
        "title": "newChannel'"
      },
      "index": {
        "description": "Like newChannel but allows you to specify way to convert the values into Strings in order to display them in the traces and label for the traces If you don use traces you can use newChannel Added in version",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "newChannel'",
        "normalized": "ChanOpts a-\u003eb(Chan c d a)",
        "package": "chp",
        "partial": "Channel'",
        "signature": "ChanOpts a-\u003em(Chan r w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:newChannelList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a list of channels of the same type with the given length.  If\n you need to access some channels by index, use this function.  Otherwise\n you may find using \u003ccode\u003enewChannels\u003c/code\u003e to be easier.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "Int -\u003e m [Chan r w a]",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#newChannelList",
        "fct-type": "function",
        "title": "newChannelList"
      },
      "index": {
        "description": "Creates list of channels of the same type with the given length If you need to access some channels by index use this function Otherwise you may find using newChannels to be easier",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "newChannelList",
        "normalized": "Int-\u003ea[Chan b c d]",
        "package": "chp",
        "partial": "Channel List",
        "signature": "Int-\u003em[Chan r w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:newChannelListWithLabels",
      "description": {
        "fct-descr": "\u003cp\u003eA helper that is like \u003ccode\u003e\u003ca\u003enewChannelList\u003c/a\u003e\u003c/code\u003e, but labels the channels with the\n given list.  The number of channels returned is the same as the length of\n the list of labels\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "[String] -\u003e m [Chan r w a]",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#newChannelListWithLabels",
        "fct-type": "function",
        "title": "newChannelListWithLabels"
      },
      "index": {
        "description": "helper that is like newChannelList but labels the channels with the given list The number of channels returned is the same as the length of the list of labels",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "newChannelListWithLabels",
        "normalized": "[String]-\u003ea[Chan b c d]",
        "package": "chp",
        "partial": "Channel List With Labels",
        "signature": "[String]-\u003em[Chan r w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:newChannelListWithStem",
      "description": {
        "fct-descr": "\u003cp\u003eA helper that is like \u003ccode\u003e\u003ca\u003enewChannelList\u003c/a\u003e\u003c/code\u003e, but labels the channels according\n to a pattern.  Given a stem such as foo, it names the channels in the list\n foo0, foo1, foo2, etc.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "Int -\u003e String -\u003e m [Chan r w a]",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#newChannelListWithStem",
        "fct-type": "function",
        "title": "newChannelListWithStem"
      },
      "index": {
        "description": "helper that is like newChannelList but labels the channels according to pattern Given stem such as foo it names the channels in the list foo0 foo1 foo2 etc",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "newChannelListWithStem",
        "normalized": "Int-\u003eString-\u003ea[Chan b c d]",
        "package": "chp",
        "partial": "Channel List With Stem",
        "signature": "Int-\u003eString-\u003em[Chan r w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:newChannelRW",
      "description": {
        "fct-descr": "\u003cp\u003eA helper that is like \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e but returns the reading and writing\n end of the channels directly.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "m (r a, w a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#newChannelRW",
        "fct-type": "function",
        "title": "newChannelRW"
      },
      "index": {
        "description": "helper that is like newChannel but returns the reading and writing end of the channels directly",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "newChannelRW",
        "normalized": "a(b c,d c)",
        "package": "chp",
        "partial": "Channel RW",
        "signature": "m(r a,w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:newChannelWR",
      "description": {
        "fct-descr": "\u003cp\u003eA helper that is like \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e but returns the writing and reading\n end of the channels directly.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "m (w a, r a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#newChannelWR",
        "fct-type": "function",
        "title": "newChannelWR"
      },
      "index": {
        "description": "helper that is like newChannel but returns the writing and reading end of the channels directly",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "newChannelWR",
        "normalized": "a(b c,d c)",
        "package": "chp",
        "partial": "Channel WR",
        "signature": "m(w a,r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Creation.html#v:sameChannel",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if two channel-ends refer to the same channel.\n\u003c/p\u003e\u003cp\u003eThis function was added in version 1.4.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Creation",
        "fct-package": "chp",
        "fct-signature": "r a -\u003e w a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Creation.html#sameChannel",
        "fct-type": "method",
        "title": "sameChannel"
      },
      "index": {
        "description": "Determines if two channel-ends refer to the same channel This function was added in version",
        "hierarchy": "Control Concurrent CHP Channels Creation",
        "module": "Control.Concurrent.CHP.Channels.Creation",
        "name": "sameChannel",
        "normalized": "a b-\u003ec b-\u003eBool",
        "package": "chp",
        "partial": "Channel",
        "signature": "r a-\u003ew a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChannels in CHP must be used via their ends.  It is generally these ends that\n you pass around to processes that want to communicate on the channel -- thus\n it is possible to see from the type ('Chanin'\\/'Chanout') whether the process\n will use it for reading or writing.  The channel-ends are named from the perspective\n of processes: a Chanin is a channel-end that a process may input values from,\n whereas a Chanout is a channel-end that a process may output values to.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Ends.html",
        "fct-type": "module",
        "title": "Ends"
      },
      "index": {
        "description": "Channels in CHP must be used via their ends It is generally these ends that you pass around to processes that want to communicate on the channel thus it is possible to see from the type Chanin Chanout whether the process will use it for reading or writing The channel-ends are named from the perspective of processes Chanin is channel-end that process may input values from whereas Chanout is channel-end that process may output values to",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "Ends",
        "normalized": "",
        "package": "chp",
        "partial": "Ends",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#t:Chanin",
      "description": {
        "fct-descr": "\u003cp\u003eA reading channel-end type.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e to obtain one, and \u003ccode\u003eReadableChannel\u003c/code\u003e for how to use one.\n\u003c/p\u003e\u003cp\u003eEq instance added in version 1.1.1\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Base.html#Chanin",
        "fct-type": "data",
        "title": "Chanin"
      },
      "index": {
        "description": "reading channel-end type See reader to obtain one and ReadableChannel for how to use one Eq instance added in version",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "Chanin",
        "normalized": "",
        "package": "chp",
        "partial": "Chanin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#t:Chanout",
      "description": {
        "fct-descr": "\u003cp\u003eA writing channel-end type.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e to obtain one, and \u003ccode\u003eWritableChannel\u003c/code\u003e for how to use one.\n\u003c/p\u003e\u003cp\u003eEq instance added in version 1.1.1\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Base.html#Chanout",
        "fct-type": "data",
        "title": "Chanout"
      },
      "index": {
        "description": "writing channel-end type See writer to obtain one and WritableChannel for how to use one Eq instance added in version",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "Chanout",
        "normalized": "",
        "package": "chp",
        "partial": "Chanout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#t:Shared",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper (usually around a channel-end) indicating that the inner item\n is shared.  Use the \u003ccode\u003eclaim\u003c/code\u003e function to use this type.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Mutex.html#Shared",
        "fct-type": "data",
        "title": "Shared"
      },
      "index": {
        "description": "wrapper usually around channel-end indicating that the inner item is shared Use the claim function to use this type",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "Shared",
        "normalized": "",
        "package": "chp",
        "partial": "Shared",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#v:claim",
      "description": {
        "fct-descr": "\u003cp\u003eClaims the given channel-end, executes the given block, then releases\n the channel-end and returns the output value.  If poison or an IO\n exception is thrown inside the block, the channel is released and the\n poison/exception re-thrown.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "Shared c a -\u003e (c a -\u003e CHP b) -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Ends.html#claim",
        "fct-type": "function",
        "title": "claim"
      },
      "index": {
        "description": "Claims the given channel-end executes the given block then releases the channel-end and returns the output value If poison or an IO exception is thrown inside the block the channel is released and the poison exception re-thrown",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "claim",
        "normalized": "Shared a b-\u003e(a b-\u003eCHP c)-\u003eCHP c",
        "package": "chp",
        "partial": "",
        "signature": "Shared c a-\u003e(c a-\u003eCHP b)-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eGets the reading end of a channel from its \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "Chan r w a -\u003e r a",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Base.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "Gets the reading end of channel from its Chan type",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "reader",
        "normalized": "Chan a b c-\u003ea c",
        "package": "chp",
        "partial": "",
        "signature": "Chan r w a-\u003er a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#v:readers",
      "description": {
        "fct-descr": "\u003cp\u003eGets all the reading ends of a list of channels.  A shorthand for \u003ccode\u003emap\n reader\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "[Chan r w a] -\u003e [r a]",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Ends.html#readers",
        "fct-type": "function",
        "title": "readers"
      },
      "index": {
        "description": "Gets all the reading ends of list of channels shorthand for map reader",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "readers",
        "normalized": "[Chan a b c]-\u003e[a c]",
        "package": "chp",
        "partial": "",
        "signature": "[Chan r w a]-\u003e[r a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003eGets the writing end of a channel from its \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "Chan r w a -\u003e w a",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Base.html#writer",
        "fct-type": "function",
        "title": "writer"
      },
      "index": {
        "description": "Gets the writing end of channel from its Chan type",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "writer",
        "normalized": "Chan a b c-\u003eb c",
        "package": "chp",
        "partial": "",
        "signature": "Chan r w a-\u003ew a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Ends.html#v:writers",
      "description": {
        "fct-descr": "\u003cp\u003eGets all the writing ends of a list of channels.  A shorthand for \u003ccode\u003emap\n writer\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Ends",
        "fct-package": "chp",
        "fct-signature": "[Chan r w a] -\u003e [w a]",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Ends.html#writers",
        "fct-type": "function",
        "title": "writers"
      },
      "index": {
        "description": "Gets all the writing ends of list of channels shorthand for map writer",
        "hierarchy": "Control Concurrent CHP Channels Ends",
        "module": "Control.Concurrent.CHP.Channels.Ends",
        "name": "writers",
        "normalized": "[Chan a b c]-\u003e[b c]",
        "package": "chp",
        "partial": "",
        "signature": "[Chan r w a]-\u003e[w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing some useful type synonyms for dealing with channels.\n\u003c/p\u003e\u003cp\u003eIf you get a type error such as:\n\u003c/p\u003e\u003cpre\u003e    Ambiguous type variables `r', `w' in the constraint:\n      `Channel r w' arising from a use of `newChannel' at tmp.hs:3:24-33\n    Probable fix: add a type signature that fixes these type variable(s)\n\u003c/pre\u003e\u003cp\u003eThen you may want to substitute your use of \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eoneToOneChannel\u003c/a\u003e\u003c/code\u003e\n (if you are not using channel sharing).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html",
        "fct-type": "module",
        "title": "Synonyms"
      },
      "index": {
        "description": "module containing some useful type synonyms for dealing with channels If you get type error such as Ambiguous type variables in the constraint Channel arising from use of newChannel at tmp.hs Probable fix add type signature that fixes these type variable Then you may want to substitute your use of newChannel for oneToOneChannel if you are not using channel sharing",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "Synonyms",
        "normalized": "",
        "package": "chp",
        "partial": "Synonyms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#t:AnyToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#AnyToAnyChannel",
        "fct-type": "type",
        "title": "AnyToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "AnyToAnyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Any To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#t:AnyToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#AnyToOneChannel",
        "fct-type": "type",
        "title": "AnyToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "AnyToOneChannel",
        "normalized": "",
        "package": "chp",
        "partial": "Any To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#t:OneToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#OneToAnyChannel",
        "fct-type": "type",
        "title": "OneToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "OneToAnyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "One To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#t:OneToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#OneToOneChannel",
        "fct-type": "type",
        "title": "OneToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "OneToOneChannel",
        "normalized": "",
        "package": "chp",
        "partial": "One To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:anyToAnyChannel",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "m (AnyToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#anyToAnyChannel",
        "fct-type": "function",
        "title": "anyToAnyChannel"
      },
      "index": {
        "description": "type-constrained version of newChannel",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "anyToAnyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:anyToAnyChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel'.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (AnyToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#anyToAnyChannel%27",
        "fct-type": "function",
        "title": "anyToAnyChannel'"
      },
      "index": {
        "description": "type-constrained version of newChannel Added in version",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "anyToAnyChannel'",
        "normalized": "ChanOpts a-\u003eb(AnyToAnyChannel a)",
        "package": "chp",
        "partial": "To Any Channel'",
        "signature": "ChanOpts a-\u003em(AnyToAnyChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:anyToOneChannel",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "m (AnyToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#anyToOneChannel",
        "fct-type": "function",
        "title": "anyToOneChannel"
      },
      "index": {
        "description": "type-constrained version of newChannel",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "anyToOneChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:anyToOneChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel'.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (AnyToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#anyToOneChannel%27",
        "fct-type": "function",
        "title": "anyToOneChannel'"
      },
      "index": {
        "description": "type-constrained version of newChannel Added in version",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "anyToOneChannel'",
        "normalized": "ChanOpts a-\u003eb(AnyToOneChannel a)",
        "package": "chp",
        "partial": "To One Channel'",
        "signature": "ChanOpts a-\u003em(AnyToOneChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:oneToAnyChannel",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "m (OneToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#oneToAnyChannel",
        "fct-type": "function",
        "title": "oneToAnyChannel"
      },
      "index": {
        "description": "type-constrained version of newChannel",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "oneToAnyChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:oneToAnyChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel'.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (OneToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#oneToAnyChannel%27",
        "fct-type": "function",
        "title": "oneToAnyChannel'"
      },
      "index": {
        "description": "type-constrained version of newChannel Added in version",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "oneToAnyChannel'",
        "normalized": "ChanOpts a-\u003eb(OneToAnyChannel a)",
        "package": "chp",
        "partial": "To Any Channel'",
        "signature": "ChanOpts a-\u003em(OneToAnyChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:oneToOneChannel",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "m (OneToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#oneToOneChannel",
        "fct-type": "function",
        "title": "oneToOneChannel"
      },
      "index": {
        "description": "type-constrained version of newChannel",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "oneToOneChannel",
        "normalized": "",
        "package": "chp",
        "partial": "To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels-Synonyms.html#v:oneToOneChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of newChannel'.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels.Synonyms",
        "fct-package": "chp",
        "fct-signature": "ChanOpts a -\u003e m (OneToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Synonyms.html#oneToOneChannel%27",
        "fct-type": "function",
        "title": "oneToOneChannel'"
      },
      "index": {
        "description": "type-constrained version of newChannel Added in version",
        "hierarchy": "Control Concurrent CHP Channels Synonyms",
        "module": "Control.Concurrent.CHP.Channels.Synonyms",
        "name": "oneToOneChannel'",
        "normalized": "ChanOpts a-\u003eb(OneToOneChannel a)",
        "package": "chp",
        "partial": "To One Channel'",
        "signature": "ChanOpts a-\u003em(OneToOneChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module containing all the different types of channels in CHP.\n\u003c/p\u003e\u003cp\u003eA communication in CHP is always synchronised: the writer must wait until the\n reader arrives to take the data.  There is thus no automatic or underlying buffering\n of data.  (If you want to use buffers, see the Control.Concurrent.CHP.Buffers\n module in the chp-plus package).\n\u003c/p\u003e\u003cp\u003eIf it helps, a channel communication can be thought of as a distributed binding.\n  Imagine you have a process that creates a channel and then becomes the parallel\n composition of two sub-processes that at some point communicate on that channel\n (formatted here as two columns for illustration):\n\u003c/p\u003e\u003cpre\u003e do                      c \u003c- oneToOneChannel\n                                    (\u003c||\u003e)\n    do p                                   do p'\n       q                                      y \u003c- q'\n       x \u003c- readChannel (reader c)            writeChannel (writer c) y\n       r                                      r'\n       s x                                    s'\n\u003c/pre\u003e\u003cp\u003eIt is as if, at the point where the two processes want to communicate, they come\n together and directly bind the value from one process in the other:\n\u003c/p\u003e\u003cpre\u003e do                      c \u003c- oneToOneChannel\n                                    (\u003c||\u003e)\n    do p                                   do p'\n       q                                      y \u003c- q'\n       x                            \u003c-        return y\n       r                                      r'\n       s x                                    s'\n\u003c/pre\u003e\u003cp\u003eThe \u003ca\u003eControl.Concurrent.CHP.Channels.Creation\u003c/a\u003e contains functions relating to\n the creation of channels.  Channels are used via their ends -- see the \u003ca\u003eControl.Concurrent.CHP.Channels.Ends\u003c/a\u003e\n module, and the \u003ca\u003eControl.Concurrent.CHP.Channels.Communication\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eBroadcast and reduce channels are available in the \u003ca\u003eControl.Concurrent.CHP.Channels.BroadcastReduce\u003c/a\u003e\n module, which is not automatically re-exported here.\n\u003c/p\u003e\u003cp\u003eThis module was split into several smaller modules in version 1.5.0.  Since\n it re-exports all the new modules, your code should not be affected at all.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Channels.html",
        "fct-type": "module",
        "title": "Channels"
      },
      "index": {
        "description": "The module containing all the different types of channels in CHP communication in CHP is always synchronised the writer must wait until the reader arrives to take the data There is thus no automatic or underlying buffering of data If you want to use buffers see the Control.Concurrent.CHP.Buffers module in the chp-plus package If it helps channel communication can be thought of as distributed binding Imagine you have process that creates channel and then becomes the parallel composition of two sub-processes that at some point communicate on that channel formatted here as two columns for illustration do oneToOneChannel do do readChannel reader writeChannel writer It is as if at the point where the two processes want to communicate they come together and directly bind the value from one process in the other do oneToOneChannel do do return The Control.Concurrent.CHP.Channels.Creation contains functions relating to the creation of channels Channels are used via their ends see the Control.Concurrent.CHP.Channels.Ends module and the Control.Concurrent.CHP.Channels.Communication module Broadcast and reduce channels are available in the Control.Concurrent.CHP.Channels.BroadcastReduce module which is not automatically re-exported here This module was split into several smaller modules in version Since it re-exports all the new modules your code should not be affected at all",
        "hierarchy": "Control Concurrent CHP Channels",
        "module": "Control.Concurrent.CHP.Channels",
        "name": "Channels",
        "normalized": "",
        "package": "chp",
        "partial": "Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Channels.html#v:getChannelIdentifier",
      "description": {
        "fct-descr": "\u003cp\u003eGets the channel's identifier.  Useful if you need to be able to identify\n a channel in the trace later on.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Channels",
        "fct-package": "chp",
        "fct-signature": "Chan r w a -\u003e Unique",
        "fct-source": "src/Control-Concurrent-CHP-Channels-Base.html#getChannelIdentifier",
        "fct-type": "function",
        "title": "getChannelIdentifier"
      },
      "index": {
        "description": "Gets the channel identifier Useful if you need to be able to identify channel in the trace later on",
        "hierarchy": "Control Concurrent CHP Channels",
        "module": "Control.Concurrent.CHP.Channels",
        "name": "getChannelIdentifier",
        "normalized": "Chan a b c-\u003eUnique",
        "package": "chp",
        "partial": "Channel Identifier",
        "signature": "Chan r w a-\u003eUnique"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClocks, based on an idea by Adam Sampson.\n\u003c/p\u003e\u003cp\u003eA clock is similar to a timer, but it is entirely concerned with logical\n time, rather than any relation to actual time, and all clocks are entirely\n independent.  A clock has the concept of enrollment, so at any time there\n are N processes enrolled on the clock.  Each process may wait on the clock\n for a specific time.  Once all N enrolled processes are waiting for a time\n (giving a list of times Ts), the clock moves forward to the next time in\n Ts.\n\u003c/p\u003e\u003cp\u003eLet's consider an example.  Three processes are enrolled on an Int clock.  The\n current time of the clock is 0.  One process asks to wait for time 3, and blocks.\n  A second process asks to wait for time 5, and blocks.  Finally, the third process\n waits for time 3.  At this point, the first and third process are free to proceed,\n and the new clock time is 3.  The second process (waiting for time 5) stays\n waiting until the two processes have returned and waited again.\n\u003c/p\u003e\u003cp\u003eThere is also the option to wait for the next available time.  If our two enrolled\n processes wait again, with the first waiting for time 7, and the third waiting for\n the next available time, the second and third will wake up, with the new time\n on the clock being 5 (the first stays waiting for time 7).\n\u003c/p\u003e\u003cp\u003eThere is also the ability for time to wrap around.  If \u003cem\u003eall\u003c/em\u003e processes are\n waiting for a time that is \u003cem\u003ebefore\u003c/em\u003e the current time (using less-than from\n the Ord instance) or just the next available time, the earliest time of\n those will be taken.  So if the current time is 26, and the processes are waiting\n for 11, 21 and next available time, the first and third will wake up and the\n new time will be 11.  This is particularly useful for using your own algebraic\n type (\u003ccode\u003edata Phase = PhaseA | PhaseB | PhaseC deriving (Eq, Ord)\u003c/code\u003e).  If you want\n to, you can use Integer and never use the time wrapping ability (see \u003ccode\u003e\u003ca\u003ewaitUnbounded\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eWhat the units of a clock mean is entirely up to you.  The only requirement\n is an Ord instance for comparing two times, to use the above rules.  The item\n in a clock may be an Int, a Double, an Integer, or even types like Bool or Either,\n your own types or newtypes, or things like lists!\n\u003c/p\u003e\u003cp\u003eThe following rules apply to clocks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If there are no processes enrolled, the time never changes.\n\u003c/li\u003e\u003cli\u003e Time never advances (and processes are never woken up) until all processes\n enrolled on the clock have waited for a time (either the next available, or\n a specific time).\n\u003c/li\u003e\u003cli\u003e If all processes enrolled wait for the next available time, they will not\n wake up (until another process enrolls and asks for a specific time).  To make\n sure that time advances, use the \u003ccode\u003eControl.Concurrent.CHP.Common.advanceTime\u003c/code\u003e\n process.\n\u003c/li\u003e\u003cli\u003e The clock always advances to the earliest (minimum) specific offer that is\n stricly after the current time, unless:\n\u003c/li\u003e\u003cli\u003e If all processes that are waiting for specific times, ask for times that\n are before the current time, the earliest (minimum) of these is taken, and\n thus time effectively moves backwards (wraps around).  In this case, all\n processes waiting for the next time will also be woken up.\n\u003c/li\u003e\u003cli\u003e As a consequence of all of the above, if you wait and return being told the\n current time, that time cannot change until you next wait, or if you resign\n from the clock (temporarily or permanently).\n\u003c/li\u003e\u003cli\u003e Note that waiting for clocks cannot be used as part of a choice\n (\u003ccode\u003eControl.Concurrent.CHP.Alt.alt\u003c/code\u003e and \u003ccode\u003eControl.Concurrent.CHP.Alt.every\u003c/code\u003e).\n The semantics of allowing this are unclear.  If a clock waits for time 5,\n but later backs out, should it be possible for two other processes to\n advance the time to 3 in the mean-time?  Due to this, clocks cannot be used\n in a choice.  If you want to have a choice involving a time change, have a\n process that waits for the next available time, then sends it down a\n channel to the process making the choice.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eClocks are similar to phased barriers (indeed, both have an instance of\n \u003ccode\u003e\u003ca\u003eWaitable\u003c/a\u003e\u003c/code\u003e).  The fundamental differences are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A barrier can only move one phase at a time.  If you use barriers to skip\n past several phases at once, this will be much less efficient than using a clock.\n This is also true if not every process enrolled on a barrier wants to take action\n every phase -- a clock allows those processes to remain sleeping, rather than\n wake up only to sleep again,\n\u003c/li\u003e\u003cli\u003e Barriers support choice, but clocks do not.  This means clocks are both\n less powerful, but also faster than barriers.\n\u003c/li\u003e\u003cli\u003e Barriers choose their next phase using their incrementing function.  Clocks\n are more flexible, in that their next phase is chosen solely by looking at the\n requests from the various processes.  Hence why Double is a suitable type for\n a Clock time, but not for a PhasedBarrier phase.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis whole module was first added in version 1.2.0.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html",
        "fct-type": "module",
        "title": "Clocks"
      },
      "index": {
        "description": "Clocks based on an idea by Adam Sampson clock is similar to timer but it is entirely concerned with logical time rather than any relation to actual time and all clocks are entirely independent clock has the concept of enrollment so at any time there are processes enrolled on the clock Each process may wait on the clock for specific time Once all enrolled processes are waiting for time giving list of times Ts the clock moves forward to the next time in Ts Let consider an example Three processes are enrolled on an Int clock The current time of the clock is One process asks to wait for time and blocks second process asks to wait for time and blocks Finally the third process waits for time At this point the first and third process are free to proceed and the new clock time is The second process waiting for time stays waiting until the two processes have returned and waited again There is also the option to wait for the next available time If our two enrolled processes wait again with the first waiting for time and the third waiting for the next available time the second and third will wake up with the new time on the clock being the first stays waiting for time There is also the ability for time to wrap around If all processes are waiting for time that is before the current time using less-than from the Ord instance or just the next available time the earliest time of those will be taken So if the current time is and the processes are waiting for and next available time the first and third will wake up and the new time will be This is particularly useful for using your own algebraic type data Phase PhaseA PhaseB PhaseC deriving Eq Ord If you want to you can use Integer and never use the time wrapping ability see waitUnbounded What the units of clock mean is entirely up to you The only requirement is an Ord instance for comparing two times to use the above rules The item in clock may be an Int Double an Integer or even types like Bool or Either your own types or newtypes or things like lists The following rules apply to clocks If there are no processes enrolled the time never changes Time never advances and processes are never woken up until all processes enrolled on the clock have waited for time either the next available or specific time If all processes enrolled wait for the next available time they will not wake up until another process enrolls and asks for specific time To make sure that time advances use the Control.Concurrent.CHP.Common.advanceTime process The clock always advances to the earliest minimum specific offer that is stricly after the current time unless If all processes that are waiting for specific times ask for times that are before the current time the earliest minimum of these is taken and thus time effectively moves backwards wraps around In this case all processes waiting for the next time will also be woken up As consequence of all of the above if you wait and return being told the current time that time cannot change until you next wait or if you resign from the clock temporarily or permanently Note that waiting for clocks cannot be used as part of choice Control.Concurrent.CHP.Alt.alt and Control.Concurrent.CHP.Alt.every The semantics of allowing this are unclear If clock waits for time but later backs out should it be possible for two other processes to advance the time to in the mean-time Due to this clocks cannot be used in choice If you want to have choice involving time change have process that waits for the next available time then sends it down channel to the process making the choice Clocks are similar to phased barriers indeed both have an instance of Waitable The fundamental differences are barrier can only move one phase at time If you use barriers to skip past several phases at once this will be much less efficient than using clock This is also true if not every process enrolled on barrier wants to take action every phase clock allows those processes to remain sleeping rather than wake up only to sleep again Barriers support choice but clocks do not This means clocks are both less powerful but also faster than barriers Barriers choose their next phase using their incrementing function Clocks are more flexible in that their next phase is chosen solely by looking at the requests from the various processes Hence why Double is suitable type for Clock time but not for PhasedBarrier phase This whole module was first added in version",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "Clocks",
        "normalized": "",
        "package": "chp",
        "partial": "Clocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#t:Clock",
      "description": {
        "fct-descr": "\u003cp\u003eA clock that measures time using the given type.  Only Ord is required on\n the type, so it can be all sorts.  Obvious possibilities are numeric types such\n as Int and Double -- if you want monotonically-increasing time, see \u003ccode\u003e\u003ca\u003ewaitUnbounded\u003c/a\u003e\u003c/code\u003e.\n  Other possibilities include your own algebraic types, if you want a clock that\n cycles around a given set of phases.  If every process enrolled on the clock\n always just waits for the next time, you may want to consider using a \u003ccode\u003e\u003ca\u003ePhasedBarrier\u003c/a\u003e\u003c/code\u003e.\n  If you want a clock that works in reverse or anything else strange, you can\n always wrap your type in a newtype to give a custom Ord instance.\n\u003c/p\u003e\u003cp\u003eSee the documentation at the beginning of this module for more information on\n clocks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html#Clock",
        "fct-type": "data",
        "title": "Clock"
      },
      "index": {
        "description": "clock that measures time using the given type Only Ord is required on the type so it can be all sorts Obvious possibilities are numeric types such as Int and Double if you want monotonically-increasing time see waitUnbounded Other possibilities include your own algebraic types if you want clock that cycles around given set of phases If every process enrolled on the clock always just waits for the next time you may want to consider using PhasedBarrier If you want clock that works in reverse or anything else strange you can always wrap your type in newtype to give custom Ord instance See the documentation at the beginning of this module for more information on clocks",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "Clock",
        "normalized": "",
        "package": "chp",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#t:Waitable",
      "description": {
        "fct-descr": "\u003cp\u003eA type-class for things that you can on for a specific time/phase.  The\n instance for \u003ccode\u003e\u003ca\u003ePhasedBarrier\u003c/a\u003e\u003c/code\u003e repeatedly syncs until the specific phase is\n reached.  Clock waits until the time is reached.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html#Waitable",
        "fct-type": "class",
        "title": "Waitable"
      },
      "index": {
        "description": "type-class for things that you can on for specific time phase The instance for PhasedBarrier repeatedly syncs until the specific phase is reached Clock waits until the time is reached",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "Waitable",
        "normalized": "",
        "package": "chp",
        "partial": "Waitable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#v:getCurrentTime",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current time/phase.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "Enrolled c t -\u003e CHP t",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html#getCurrentTime",
        "fct-type": "method",
        "title": "getCurrentTime"
      },
      "index": {
        "description": "Gets the current time phase",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "getCurrentTime",
        "normalized": "Enrolled a b-\u003eCHP b",
        "package": "chp",
        "partial": "Current Time",
        "signature": "Enrolled c t-\u003eCHP t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#v:newClock",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a clock that starts at the given time.  The Show instance is needed\n to display times in traces.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "time -\u003e CHP (Clock time)",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html#newClock",
        "fct-type": "function",
        "title": "newClock"
      },
      "index": {
        "description": "Creates clock that starts at the given time The Show instance is needed to display times in traces",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "newClock",
        "normalized": "a-\u003eCHP(Clock a)",
        "package": "chp",
        "partial": "Clock",
        "signature": "time-\u003eCHP(Clock time)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#v:newClockWithLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a clock that starts at the given time, and gives it the given\n label in traces.  The Show instance is needed to display times in traces.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "time -\u003e String -\u003e CHP (Clock time)",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html#newClockWithLabel",
        "fct-type": "function",
        "title": "newClockWithLabel"
      },
      "index": {
        "description": "Creates clock that starts at the given time and gives it the given label in traces The Show instance is needed to display times in traces",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "newClockWithLabel",
        "normalized": "a-\u003eString-\u003eCHP(Clock a)",
        "package": "chp",
        "partial": "Clock With Label",
        "signature": "time-\u003eString-\u003eCHP(Clock time)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an enrolled item, waits for the specific time/phase (if\n you pass a Just value) or the next available time/phase. (if you\n pass Nothing).  The value returned is the new current time.  Note that\n waiting for the current time/phase or a past time/phase on a\n clock/barrier will \u003cem\u003enot\u003c/em\u003e return immediately -- see the rules at the top\n of this module, and see \u003ccode\u003e\u003ca\u003ewaitUnbounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "Enrolled c t -\u003e Maybe t -\u003e CHP t",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html#wait",
        "fct-type": "method",
        "title": "wait"
      },
      "index": {
        "description": "Given an enrolled item waits for the specific time phase if you pass Just value or the next available time phase if you pass Nothing The value returned is the new current time Note that waiting for the current time phase or past time phase on clock barrier will not return immediately see the rules at the top of this module and see waitUnbounded",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "wait",
        "normalized": "Enrolled a b-\u003eMaybe b-\u003eCHP b",
        "package": "chp",
        "partial": "",
        "signature": "Enrolled c t-\u003eMaybe t-\u003eCHP t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Clocks.html#v:waitUnbounded",
      "description": {
        "fct-descr": "\u003cp\u003eNormally, when waiting on a clock, if you wait for a time equal to (or earlier\n than) the current time, you will block until the clock wraps around.  Sometimes,\n however, you may want your clock to never wrap around (and use Integer as the\n inner type, usually), and want to make sure that if a process waits for the\n current time or earlier, it returns instantly.  That is what this function achieves.\n\u003c/p\u003e\u003cp\u003eCalling this function with Nothing has indentical behaviour to calling \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e\n with Nothing.  If you wait for the current time or earlier, all of the other\n processes waiting on the clock will remain blocked.  Processes who have asked\n to wait for the current time will remain blocked -- it is generally not useful\n to mix \u003ccode\u003e\u003ca\u003ewaitUnbounded\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e on the same clock.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Clocks",
        "fct-package": "chp",
        "fct-signature": "Enrolled c t -\u003e Maybe t -\u003e CHP t",
        "fct-source": "src/Control-Concurrent-CHP-Clocks.html#waitUnbounded",
        "fct-type": "function",
        "title": "waitUnbounded"
      },
      "index": {
        "description": "Normally when waiting on clock if you wait for time equal to or earlier than the current time you will block until the clock wraps around Sometimes however you may want your clock to never wrap around and use Integer as the inner type usually and want to make sure that if process waits for the current time or earlier it returns instantly That is what this function achieves Calling this function with Nothing has indentical behaviour to calling wait with Nothing If you wait for the current time or earlier all of the other processes waiting on the clock will remain blocked Processes who have asked to wait for the current time will remain blocked it is generally not useful to mix waitUnbounded and wait on the same clock",
        "hierarchy": "Control Concurrent CHP Clocks",
        "module": "Control.Concurrent.CHP.Clocks",
        "name": "waitUnbounded",
        "normalized": "Enrolled a b-\u003eMaybe b-\u003eCHP b",
        "package": "chp",
        "partial": "Unbounded",
        "signature": "Enrolled c t-\u003eMaybe t-\u003eCHP t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with support for things that are enrollable (barriers and broadcast\n channels).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html",
        "fct-type": "module",
        "title": "Enroll"
      },
      "index": {
        "description": "module with support for things that are enrollable barriers and broadcast channels",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "Enroll",
        "normalized": "",
        "package": "chp",
        "partial": "Enroll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#t:Enrollable",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#Enrollable",
        "fct-type": "class",
        "title": "Enrollable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "Enrollable",
        "normalized": "",
        "package": "chp",
        "partial": "Enrollable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#t:Enrolled",
      "description": {
        "fct-descr": "\u003cp\u003eAn enrolled wrapper for barriers that shows at the type-level whether\n you are enrolled on a barrier.  Enrolled Barriers should never be passed\n to two (or more) processes running in parallel; if two processes synchronise\n based on a single enroll call, undefined behaviour will result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#Enrolled",
        "fct-type": "data",
        "title": "Enrolled"
      },
      "index": {
        "description": "An enrolled wrapper for barriers that shows at the type-level whether you are enrolled on barrier Enrolled Barriers should never be passed to two or more processes running in parallel if two processes synchronise based on single enroll call undefined behaviour will result",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "Enrolled",
        "normalized": "",
        "package": "chp",
        "partial": "Enrolled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:enroll",
      "description": {
        "fct-descr": "\u003cp\u003eEnrolls on the given barrier, then executes the given function (passing\n it in the enrolled barrier) and when that function body finishes, resigns\n from the barrier and returns the result.  If a poison or IO exception is thrown\n in the inside block, the barrier will be correctly resigned from, and\n the exception rethrown.\n\u003c/p\u003e\u003cp\u003eDo not attempt to return the\n enrolled barrier out of the inner function and use it afterwards.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "b z -\u003e (Enrolled b z -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#enroll",
        "fct-type": "method",
        "title": "enroll"
      },
      "index": {
        "description": "Enrolls on the given barrier then executes the given function passing it in the enrolled barrier and when that function body finishes resigns from the barrier and returns the result If poison or IO exception is thrown in the inside block the barrier will be correctly resigned from and the exception rethrown Do not attempt to return the enrolled barrier out of the inner function and use it afterwards",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "enroll",
        "normalized": "a b-\u003e(Enrolled a b-\u003eCHP c)-\u003eCHP c",
        "package": "chp",
        "partial": "",
        "signature": "b z-\u003e(Enrolled b z-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:enrollAll",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a command to allocate a new barrier, and a list of processes that use\n that barrier, enrolls the appropriate number of times (i.e. the list length)\n and runs all the processes in parallel using that barrier, then returns a list\n of the results.\n\u003c/p\u003e\u003cp\u003eIf you have already allocated the barrier, pass \u003ccode\u003ereturn bar\u003c/code\u003e as the first parameter.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.7.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "CHP (b p) -\u003e [Enrolled b p -\u003e CHP a] -\u003e CHP [a]",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#enrollAll",
        "fct-type": "function",
        "title": "enrollAll"
      },
      "index": {
        "description": "Given command to allocate new barrier and list of processes that use that barrier enrolls the appropriate number of times i.e the list length and runs all the processes in parallel using that barrier then returns list of the results If you have already allocated the barrier pass return bar as the first parameter Added in version",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "enrollAll",
        "normalized": "CHP(a b)-\u003e[Enrolled a b-\u003eCHP c]-\u003eCHP[c]",
        "package": "chp",
        "partial": "All",
        "signature": "CHP(b p)-\u003e[Enrolled b p-\u003eCHP a]-\u003eCHP[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:enrollAllT",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "([a] -\u003e CHP c) -\u003e CHP (b p) -\u003e [Enrolled b p -\u003e a] -\u003e CHP c",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#enrollAllT",
        "fct-type": "function",
        "title": "enrollAllT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "enrollAllT",
        "normalized": "([a]-\u003eCHP b)-\u003eCHP(c d)-\u003e[Enrolled c d-\u003ea]-\u003eCHP b",
        "package": "chp",
        "partial": "All",
        "signature": "([a]-\u003eCHP c)-\u003eCHP(b p)-\u003e[Enrolled b p-\u003ea]-\u003eCHP c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:enrollAll_",
      "description": {
        "fct-descr": "\u003cp\u003eLike enrollAll, but discards the results.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.7.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "CHP (b p) -\u003e [Enrolled b p -\u003e CHP a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#enrollAll_",
        "fct-type": "function",
        "title": "enrollAll_"
      },
      "index": {
        "description": "Like enrollAll but discards the results Added in version",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "enrollAll_",
        "normalized": "CHP(a b)-\u003e[Enrolled a b-\u003eCHP c]-\u003eCHP()",
        "package": "chp",
        "partial": "All",
        "signature": "CHP(b p)-\u003e[Enrolled b p-\u003eCHP a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:enrollList",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenroll\u003c/a\u003e\u003c/code\u003e but enrolls on the given list of barriers\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "[b p] -\u003e ([Enrolled b p] -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#enrollList",
        "fct-type": "function",
        "title": "enrollList"
      },
      "index": {
        "description": "Like enroll but enrolls on the given list of barriers",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "enrollList",
        "normalized": "[a b]-\u003e([Enrolled a b]-\u003eCHP c)-\u003eCHP c",
        "package": "chp",
        "partial": "List",
        "signature": "[b p]-\u003e([Enrolled b p]-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:enrollOneMany",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "([Enrolled b p] -\u003e CHP a) -\u003e [(CHP (b p), Enrolled b p -\u003e CHP c)] -\u003e CHP (a, [c])",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#enrollOneMany",
        "fct-type": "function",
        "title": "enrollOneMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "enrollOneMany",
        "normalized": "([Enrolled a b]-\u003eCHP c)-\u003e[(CHP(a b),Enrolled a b-\u003eCHP d)]-\u003eCHP(c,[d])",
        "package": "chp",
        "partial": "One Many",
        "signature": "([Enrolled b p]-\u003eCHP a)-\u003e[(CHP(b p),Enrolled b p-\u003eCHP c)]-\u003eCHP(a,[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:enrollPair",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenroll\u003c/a\u003e\u003c/code\u003e but enrolls on the given pair of barriers\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "(b p, b' p') -\u003e ((Enrolled b p, Enrolled b' p') -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#enrollPair",
        "fct-type": "function",
        "title": "enrollPair"
      },
      "index": {
        "description": "Like enroll but enrolls on the given pair of barriers",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "enrollPair",
        "normalized": "(a b,c d)-\u003e((Enrolled a b,Enrolled c d)-\u003eCHP e)-\u003eCHP e",
        "package": "chp",
        "partial": "Pair",
        "signature": "(b p,b' p')-\u003e((Enrolled b p,Enrolled b' p')-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:furtherEnroll",
      "description": {
        "fct-descr": "\u003cp\u003eJust like enroll, but starts with an already enrolled item.  During the\n body, you are enrolled twice -- once from the original enrolled item (which\n is still valid in the body) and once from the new enrolled item passed to\n the inner function.  Afterwards, you are enrolled once, on the original item\n you had.\n\u003c/p\u003e\u003cp\u003eThis function was added in version 1.3.2.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "Enrolled b z -\u003e (Enrolled b z -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#furtherEnroll",
        "fct-type": "function",
        "title": "furtherEnroll"
      },
      "index": {
        "description": "Just like enroll but starts with an already enrolled item During the body you are enrolled twice once from the original enrolled item which is still valid in the body and once from the new enrolled item passed to the inner function Afterwards you are enrolled once on the original item you had This function was added in version",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "furtherEnroll",
        "normalized": "Enrolled a b-\u003e(Enrolled a b-\u003eCHP c)-\u003eCHP c",
        "package": "chp",
        "partial": "Enroll",
        "signature": "Enrolled b z-\u003e(Enrolled b z-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Enroll.html#v:resign",
      "description": {
        "fct-descr": "\u003cp\u003eResigns from a barrier, then executes the given action, and when the\n action finishes, re-enrolls on the barrier and continues.  This function\n is designed for use from \u003cem\u003einside\u003c/em\u003e the body of the \u003ccode\u003e\u003ca\u003eenroll\u003c/a\u003e\u003c/code\u003e function, to\n temporarily resign from a barrier, do some things, then re-enroll.  Do\n not use the enrolled barrier inside the resign block.  However, you may\n enroll on the barrier inside this, nesting enroll and resign blocks as\n much as you like\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Enroll",
        "fct-package": "chp",
        "fct-signature": "Enrolled b z -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Enroll.html#resign",
        "fct-type": "method",
        "title": "resign"
      },
      "index": {
        "description": "Resigns from barrier then executes the given action and when the action finishes re-enrolls on the barrier and continues This function is designed for use from inside the body of the enroll function to temporarily resign from barrier do some things then re-enroll Do not use the enrolled barrier inside the resign block However you may enroll on the barrier inside this nesting enroll and resign blocks as much as you like",
        "hierarchy": "Control Concurrent CHP Enroll",
        "module": "Control.Concurrent.CHP.Enroll",
        "name": "resign",
        "normalized": "Enrolled a b-\u003eCHP c-\u003eCHP c",
        "package": "chp",
        "partial": "",
        "signature": "Enrolled b z-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains all the central monads in the CHP library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "This module contains all the central monads in the CHP library",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "chp",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#t:CHP",
      "description": {
        "fct-descr": "\u003cp\u003eThe central monad of the library.  You can use\n \u003ccode\u003eControl.Concurrent.CHP.Monad.runCHP\u003c/code\u003e and\n \u003ccode\u003eControl.Concurrent.CHP.Monad.runCHP_\u003c/code\u003e to execute programs in this\n monad.\n\u003c/p\u003e\u003cp\u003eThe Alternative instance was added in version 2.2.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#CHP",
        "fct-type": "data",
        "title": "CHP"
      },
      "index": {
        "description": "The central monad of the library You can use Control.Concurrent.CHP.Monad.runCHP and Control.Concurrent.CHP.Monad.runCHP to execute programs in this monad The Alternative instance was added in version",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "CHP",
        "normalized": "",
        "package": "chp",
        "partial": "CHP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#t:MonadCHP",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer class that is very similar to \u003ccode\u003eMonadIO\u003c/code\u003e.  This can be\n useful if you want to add monad transformers (such as \u003ccode\u003eStateT\u003c/code\u003e, \u003ccode\u003eReaderT\u003c/code\u003e) on\n top of the \u003ccode\u003e\u003ca\u003eCHP\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#MonadCHP",
        "fct-type": "class",
        "title": "MonadCHP"
      },
      "index": {
        "description": "monad transformer class that is very similar to MonadIO This can be useful if you want to add monad transformers such as StateT ReaderT on top of the CHP monad",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "MonadCHP",
        "normalized": "",
        "package": "chp",
        "partial": "Monad CHP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#t:Poisonable",
      "description": {
        "fct-descr": "\u003cp\u003eA class indicating that something is poisonable.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#Poisonable",
        "fct-type": "class",
        "title": "Poisonable"
      },
      "index": {
        "description": "class indicating that something is poisonable",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "Poisonable",
        "normalized": "",
        "package": "chp",
        "partial": "Poisonable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:checkForPoison",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if the given item is poisoned.  If it is, a poison exception\n will be thrown.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.0.2.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#checkForPoison",
        "fct-type": "method",
        "title": "checkForPoison"
      },
      "index": {
        "description": "Checks if the given item is poisoned If it is poison exception will be thrown Added in version",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "checkForPoison",
        "normalized": "a-\u003eb()",
        "package": "chp",
        "partial": "For Poison",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:embedCHP",
      "description": {
        "fct-descr": "\u003cp\u003eAllows embedding of the CHP monad back into the IO monad.  The argument\n that this function takes is a CHP action (with arbitrary behaviour).  The\n function is monadic, and returns something of type: IO a.  This\n is an IO action that you can now use in the IO monad wherever you like.\n What it returns is the result of your original action.\n\u003c/p\u003e\u003cp\u003eThis function is intended for use wherever you need to supply an IO callback\n (for example with the OpenGL libraries) that needs to perform CHP communications.\n  It is the safe way to do things, rather than using runCHP twice (and also works\n with CSP and VCR traces -- but not structural traces!).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP (IO (Maybe a))",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#embedCHP",
        "fct-type": "function",
        "title": "embedCHP"
      },
      "index": {
        "description": "Allows embedding of the CHP monad back into the IO monad The argument that this function takes is CHP action with arbitrary behaviour The function is monadic and returns something of type IO This is an IO action that you can now use in the IO monad wherever you like What it returns is the result of your original action This function is intended for use wherever you need to supply an IO callback for example with the OpenGL libraries that needs to perform CHP communications It is the safe way to do things rather than using runCHP twice and also works with CSP and VCR traces but not structural traces",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "embedCHP",
        "normalized": "CHP a-\u003eCHP(IO(Maybe a))",
        "package": "chp",
        "partial": "CHP",
        "signature": "CHP a-\u003eCHP(IO(Maybe a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:embedCHP1",
      "description": {
        "fct-descr": "\u003cp\u003eA helper like embedCHP for callbacks that take an argument\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "(a -\u003e CHP b) -\u003e CHP (a -\u003e IO (Maybe b))",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#embedCHP1",
        "fct-type": "function",
        "title": "embedCHP1"
      },
      "index": {
        "description": "helper like embedCHP for callbacks that take an argument",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "embedCHP1",
        "normalized": "(a-\u003eCHP b)-\u003eCHP(a-\u003eIO(Maybe b))",
        "package": "chp",
        "partial": "CHP",
        "signature": "(a-\u003eCHP b)-\u003eCHP(a-\u003eIO(Maybe b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:embedCHP1_",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient version of embedCHP1 that ignores the result\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "(a -\u003e CHP b) -\u003e CHP (a -\u003e IO ())",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#embedCHP1_",
        "fct-type": "function",
        "title": "embedCHP1_"
      },
      "index": {
        "description": "convenient version of embedCHP1 that ignores the result",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "embedCHP1_",
        "normalized": "(a-\u003eCHP b)-\u003eCHP(a-\u003eIO())",
        "package": "chp",
        "partial": "CHP",
        "signature": "(a-\u003eCHP b)-\u003eCHP(a-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:embedCHP_",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient version of embedCHP that ignores the result\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP (IO ())",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#embedCHP_",
        "fct-type": "function",
        "title": "embedCHP_"
      },
      "index": {
        "description": "convenient version of embedCHP that ignores the result",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "embedCHP_",
        "normalized": "CHP a-\u003eCHP(IO())",
        "package": "chp",
        "partial": "CHP",
        "signature": "CHP a-\u003eCHP(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:foreverP",
      "description": {
        "fct-descr": "\u003cp\u003eExactly the same as \u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e.  Useful only because it mirrors a different definition\n from the chp-spec library.\n\u003c/p\u003e\u003cp\u003eAdded in version 2.2.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#foreverP",
        "fct-type": "function",
        "title": "foreverP"
      },
      "index": {
        "description": "Exactly the same as forever Useful only because it mirrors different definition from the chp-spec library Added in version",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "foreverP",
        "normalized": "CHP a-\u003eCHP b",
        "package": "chp",
        "partial": "",
        "signature": "CHP a-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:liftCHP",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e m a",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#liftCHP",
        "fct-type": "method",
        "title": "liftCHP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "liftCHP",
        "normalized": "CHP a-\u003eb a",
        "package": "chp",
        "partial": "CHP",
        "signature": "CHP a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:liftIO_CHP",
      "description": {
        "fct-descr": "\u003cp\u003eAn implementation of liftIO for the CHP monad; this function lifts IO actions\n into the CHP monad.\n\u003c/p\u003e\u003cp\u003eAdded in version 2.2.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "IO a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#liftIO_CHP",
        "fct-type": "function",
        "title": "liftIO_CHP"
      },
      "index": {
        "description": "An implementation of liftIO for the CHP monad this function lifts IO actions into the CHP monad Added in version",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "liftIO_CHP",
        "normalized": "IO a-\u003eCHP a",
        "package": "chp",
        "partial": "IO CHP",
        "signature": "IO a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:liftIO_CHP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eActs as \u003ccode\u003econst liftIO_CHP\u003c/code\u003e.  Useful only because it mirrors a different definition in the\n chp-spec library.\n\u003c/p\u003e\u003cp\u003eAdded in version 2.2.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "String -\u003e IO a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#liftIO_CHP%27",
        "fct-type": "function",
        "title": "liftIO_CHP'"
      },
      "index": {
        "description": "Acts as const liftIO CHP Useful only because it mirrors different definition in the chp-spec library Added in version",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "liftIO_CHP'",
        "normalized": "String-\u003eIO a-\u003eCHP a",
        "package": "chp",
        "partial": "IO CHP'",
        "signature": "String-\u003eIO a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:onPoisonRethrow",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eonPoisonTrap\u003c/a\u003e\u003c/code\u003e, this function allows you to provide a handler\n  for poison.  The difference with this function is that even if the\n  poison handler does not throw, the poison exception will always be\n  re-thrown after the handler anyway.  That is, the following lines of\n  code all have identical behaviour:\n\u003c/p\u003e\u003cpre\u003e foo\n foo `onPoisonRethrow` throwPoison\n foo `onPoisonRethrow` return ()\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP () -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#onPoisonRethrow",
        "fct-type": "function",
        "title": "onPoisonRethrow"
      },
      "index": {
        "description": "Like onPoisonTrap this function allows you to provide handler for poison The difference with this function is that even if the poison handler does not throw the poison exception will always be re-thrown after the handler anyway That is the following lines of code all have identical behaviour foo foo onPoisonRethrow throwPoison foo onPoisonRethrow return",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "onPoisonRethrow",
        "normalized": "CHP a-\u003eCHP()-\u003eCHP a",
        "package": "chp",
        "partial": "Poison Rethrow",
        "signature": "CHP a-\u003eCHP()-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:onPoisonTrap",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to provide a handler for sections with poison.  It is usually\n used in an infix form as follows:\n\u003c/p\u003e\u003cpre\u003e (readChannel c \u003e\u003e= writeChannel d) `onPoisonTrap` (poison c \u003e\u003e poison d)\n\u003c/pre\u003e\u003cp\u003eIt handles the poison and does not rethrow it (unless your handler\n does so).  If you want to rethrow (and actually, you'll find you usually\n do), use \u003ccode\u003e\u003ca\u003eonPoisonRethrow\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#onPoisonTrap",
        "fct-type": "function",
        "title": "onPoisonTrap"
      },
      "index": {
        "description": "Allows you to provide handler for sections with poison It is usually used in an infix form as follows readChannel writeChannel onPoisonTrap poison poison It handles the poison and does not rethrow it unless your handler does so If you want to rethrow and actually you ll find you usually do use onPoisonRethrow",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "onPoisonTrap",
        "normalized": "CHP a-\u003eCHP a-\u003eCHP a",
        "package": "chp",
        "partial": "Poison Trap",
        "signature": "CHP a-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:poison",
      "description": {
        "fct-descr": "\u003cp\u003ePoisons the given item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#poison",
        "fct-type": "method",
        "title": "poison"
      },
      "index": {
        "description": "Poisons the given item",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "poison",
        "normalized": "a-\u003eb()",
        "package": "chp",
        "partial": "",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:poisonAll",
      "description": {
        "fct-descr": "\u003cp\u003ePoisons all the given items.  A handy shortcut for \u003ccode\u003emapM_ poison\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "[c] -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#poisonAll",
        "fct-type": "function",
        "title": "poisonAll"
      },
      "index": {
        "description": "Poisons all the given items handy shortcut for mapM poison",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "poisonAll",
        "normalized": "[a]-\u003eb()",
        "package": "chp",
        "partial": "All",
        "signature": "[c]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:process",
      "description": {
        "fct-descr": "\u003cp\u003eActs as \u003ccode\u003econst id\u003c/code\u003e.  Useful only because it mirrors a different definition in the\n chp-spec library.\n\u003c/p\u003e\u003cp\u003eAdded in version 2.2.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#process",
        "fct-type": "function",
        "title": "process"
      },
      "index": {
        "description": "Acts as const id Useful only because it mirrors different definition in the chp-spec library Added in version",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "process",
        "normalized": "String-\u003ea-\u003ea",
        "package": "chp",
        "partial": "",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:runCHP",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a CHP program.  You should use this once, at the top-level of your\n program.  Do not ever use this function twice in parallel and attempt to\n communicate between those processes using channels.  Instead, run this function\n once and use it to spawn off the parallel processes that you need.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#runCHP",
        "fct-type": "function",
        "title": "runCHP"
      },
      "index": {
        "description": "Runs CHP program You should use this once at the top-level of your program Do not ever use this function twice in parallel and attempt to communicate between those processes using channels Instead run this function once and use it to spawn off the parallel processes that you need",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "runCHP",
        "normalized": "CHP a-\u003eIO(Maybe a)",
        "package": "chp",
        "partial": "CHP",
        "signature": "CHP a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:runCHP_",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a CHP program.  Like \u003ccode\u003e\u003ca\u003erunCHP\u003c/a\u003e\u003c/code\u003e but discards the output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#runCHP_",
        "fct-type": "function",
        "title": "runCHP_"
      },
      "index": {
        "description": "Runs CHP program Like runCHP but discards the output",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "runCHP_",
        "normalized": "CHP a-\u003eIO()",
        "package": "chp",
        "partial": "CHP",
        "signature": "CHP a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eThe classic skip process/guard.  Does nothing, and is always ready.\n\u003c/p\u003e\u003cp\u003eSuitable for use in an \u003ccode\u003eControl.Concurrent.CHP.Alt.alt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "The classic skip process guard Does nothing and is always ready Suitable for use in an Control.Concurrent.CHP.Alt.alt",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "skip",
        "normalized": "CHP()",
        "package": "chp",
        "partial": "",
        "signature": "CHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eThe stop guard.  Its main use is that it is never ready in a choice, so\n can be used to mask out guards.  If you actually execute \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e, that process\n will do nothing more.  Any parent process waiting for it to complete will\n wait forever.\n\u003c/p\u003e\u003cp\u003eThe type of this function was generalised in CHP 1.6.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "The stop guard Its main use is that it is never ready in choice so can be used to mask out guards If you actually execute stop that process will do nothing more Any parent process waiting for it to complete will wait forever The type of this function was generalised in CHP",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "stop",
        "normalized": "",
        "package": "chp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:subProcess",
      "description": {
        "fct-descr": "\u003cp\u003eActs as \u003ccode\u003econst id\u003c/code\u003e.  Useful only because it mirrors a different definition in the\n chp-spec library.\n\u003c/p\u003e\u003cp\u003eAdded in version 2.2.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#subProcess",
        "fct-type": "function",
        "title": "subProcess"
      },
      "index": {
        "description": "Acts as const id Useful only because it mirrors different definition in the chp-spec library Added in version",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "subProcess",
        "normalized": "String-\u003ea-\u003ea",
        "package": "chp",
        "partial": "Process",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:throwPoison",
      "description": {
        "fct-descr": "\u003cp\u003eThrows a poison exception.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#throwPoison",
        "fct-type": "function",
        "title": "throwPoison"
      },
      "index": {
        "description": "Throws poison exception",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "throwPoison",
        "normalized": "",
        "package": "chp",
        "partial": "Poison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Monad.html#v:waitFor",
      "description": {
        "fct-descr": "\u003cp\u003eWaits for the specified number of microseconds (millionths of a second).\n There is no guaranteed precision, but the wait will never complete in less\n time than the parameter given.\n\u003c/p\u003e\u003cp\u003eSuitable for use in an \u003ccode\u003eControl.Concurrent.CHP.Alt.alt\u003c/code\u003e, but note that \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e 0 is not the same\n as \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e 0 \u003ccode\u003eControl.Concurrent.CHP.Alt.\u003c/\u003e\u003c/code\u003e x will not always select the first guard,\n depending on x.  Included in this is the lack of guarantee that\n \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e 0 \u003ccode\u003eControl.Concurrent.CHP.Alt.\u003c/\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e n will select the first guard for any value\n of n (including 0).  It is not useful to use two \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e guards in a\n single \u003ccode\u003eControl.Concurrent.CHP.Alt.alt\u003c/code\u003e anyway.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e If you wish to use this as part of a choice, you must use \u003ccode\u003e-threaded\u003c/code\u003e\n as a GHC compilation option (at least under 6.8.2).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Monad",
        "fct-package": "chp",
        "fct-signature": "Int -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Monad.html#waitFor",
        "fct-type": "function",
        "title": "waitFor"
      },
      "index": {
        "description": "Waits for the specified number of microseconds millionths of second There is no guaranteed precision but the wait will never complete in less time than the parameter given Suitable for use in an Control.Concurrent.CHP.Alt.alt but note that waitFor is not the same as skip waitFor Control.Concurrent.CHP.Alt will not always select the first guard depending on Included in this is the lack of guarantee that waitFor Control.Concurrent.CHP.Alt waitFor will select the first guard for any value of including It is not useful to use two waitFor guards in single Control.Concurrent.CHP.Alt.alt anyway NOTE If you wish to use this as part of choice you must use threaded as GHC compilation option at least under",
        "hierarchy": "Control Concurrent CHP Monad",
        "module": "Control.Concurrent.CHP.Monad",
        "name": "waitFor",
        "normalized": "Int-\u003eCHP()",
        "package": "chp",
        "partial": "For",
        "signature": "Int-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html",
        "fct-type": "module",
        "title": "Parallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "Parallel",
        "normalized": "",
        "package": "chp",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#t:ForkingT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer used for introducing forking blocks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#ForkingT",
        "fct-type": "data",
        "title": "ForkingT"
      },
      "index": {
        "description": "monad transformer used for introducing forking blocks",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "ForkingT",
        "normalized": "",
        "package": "chp",
        "partial": "Forking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA useful operator for performing a two process equivalent of \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e\n that gives the return values back as a pair rather than a list.  This also\n allows the values to have different types\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP b -\u003e CHP (a, b)",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "useful operator for performing two process equivalent of runParallel that gives the return values back as pair rather than list This also allows the values to have different types",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "CHP a-\u003eCHP b-\u003eCHP(a,b)",
        "package": "chp",
        "partial": "",
        "signature": "CHP a-\u003eCHP b-\u003eCHP(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:-60--124--42--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn operator similar to \u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e that discards the output (more like an operator\n version of \u003ccode\u003e\u003ca\u003erunParallel_\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAdded in version 1.1.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e CHP b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#%3C%7C%2A%7C%3E",
        "fct-type": "function",
        "title": "(\u003c|*|\u003e)"
      },
      "index": {
        "description": "An operator similar to that discards the output more like an operator version of runParallel Added in version",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "(\u003c|*|\u003e) \u003c|*|\u003e",
        "normalized": "CHP a-\u003eCHP b-\u003eCHP()",
        "package": "chp",
        "partial": "",
        "signature": "CHP a-\u003eCHP b-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eForks off the given process.  The process then runs in parallel with this\n code, until the end of the \u003ccode\u003e\u003ca\u003eforking\u003c/a\u003e\u003c/code\u003e block, when all forked-off processes\n are waited for.  At that point, once all of the processes have finished,\n if any of them threw poison it is propagated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "CHP () -\u003e ForkingT m ()",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "Forks off the given process The process then runs in parallel with this code until the end of the forking block when all forked-off processes are waited for At that point once all of the processes have finished if any of them threw poison it is propagated",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "fork",
        "normalized": "CHP()-\u003eForkingT a()",
        "package": "chp",
        "partial": "",
        "signature": "CHP()-\u003eForkingT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:forking",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a forking block.  Processes may be forked off inside (using the\n \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e function).  When the block completes, it waits for all the forked\n off processes to complete before returning the output, as long as none of\n the processes terminated with uncaught poison.  If they did, the poison\n is propagated (rethrown).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "ForkingT m a -\u003e m a",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#forking",
        "fct-type": "function",
        "title": "forking"
      },
      "index": {
        "description": "Executes forking block Processes may be forked off inside using the fork function When the block completes it waits for all the forked off processes to complete before returning the output as long as none of the processes terminated with uncaught poison If they did the poison is propagated rethrown",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "forking",
        "normalized": "ForkingT a b-\u003ea b",
        "package": "chp",
        "partial": "",
        "signature": "ForkingT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:liftForking",
      "description": {
        "fct-descr": "\u003cp\u003eAn implementation of lift for the ForkingT monad transformer.\n\u003c/p\u003e\u003cp\u003eAdded in version 2.2.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "m a -\u003e ForkingT m a",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#liftForking",
        "fct-type": "function",
        "title": "liftForking"
      },
      "index": {
        "description": "An implementation of lift for the ForkingT monad transformer Added in version",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "liftForking",
        "normalized": "a b-\u003eForkingT a b",
        "package": "chp",
        "partial": "Forking",
        "signature": "m a-\u003eForkingT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:runParMapM",
      "description": {
        "fct-descr": "\u003cp\u003eA shorthand for applying mapM in parallel; really the composition of \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "(a -\u003e CHP b) -\u003e [a] -\u003e CHP [b]",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#runParMapM",
        "fct-type": "function",
        "title": "runParMapM"
      },
      "index": {
        "description": "shorthand for applying mapM in parallel really the composition of runParallel and map Added in version",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "runParMapM",
        "normalized": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP[b]",
        "package": "chp",
        "partial": "Par Map",
        "signature": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:runParMapM_",
      "description": {
        "fct-descr": "\u003cp\u003eA shorthand for applying mapM_ in parallel; really the composition of \u003ccode\u003e\u003ca\u003erunParallel_\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "(a -\u003e CHP b) -\u003e [a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#runParMapM_",
        "fct-type": "function",
        "title": "runParMapM_"
      },
      "index": {
        "description": "shorthand for applying mapM in parallel really the composition of runParallel and map Added in version",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "runParMapM_",
        "normalized": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP()",
        "package": "chp",
        "partial": "Par Map",
        "signature": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:runParallel",
      "description": {
        "fct-descr": "\u003cp\u003eThis type-class supports parallel composition of processes.  You may use\n the \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e function to run a list of processes, or the \u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e operator\n to run just a pair of processes.\n\u003c/p\u003e\u003cp\u003eIn each case, the composition waits for all processes to finish, either\n successfully or with poison.  At the end of this, if \u003cem\u003eany\u003c/em\u003e process\n exited with poison, the composition will \"rethrow\" this poison.  If all\n the processes completed successfully, the results will be returned.  If\n you want to ignore poison from the sub-processes, use an empty poison\n handler and \u003ccode\u003e\u003ca\u003eonPoisonTrap\u003c/a\u003e\u003c/code\u003e with each branch.\n\u003c/p\u003e\u003cp\u003eRuns the given list of processes in parallel, and then returns a list\n of the results, in the same order as the processes given.  Will only return\n when all the inner processes have completed.\n\u003c/p\u003e\u003cp\u003eIn version 1.5.0, a bug was introduced such that \u003ccode\u003erunParallel []\u003c/code\u003e would deadlock;\n this was fixed in version 1.5.1.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "[CHP a] -\u003e CHP [a]",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#runParallel",
        "fct-type": "function",
        "title": "runParallel"
      },
      "index": {
        "description": "This type-class supports parallel composition of processes You may use the runParallel function to run list of processes or the operator to run just pair of processes In each case the composition waits for all processes to finish either successfully or with poison At the end of this if any process exited with poison the composition will rethrow this poison If all the processes completed successfully the results will be returned If you want to ignore poison from the sub-processes use an empty poison handler and onPoisonTrap with each branch Runs the given list of processes in parallel and then returns list of the results in the same order as the processes given Will only return when all the inner processes have completed In version bug was introduced such that runParallel would deadlock this was fixed in version",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "runParallel",
        "normalized": "[CHP a]-\u003eCHP[a]",
        "package": "chp",
        "partial": "Parallel",
        "signature": "[CHP a]-\u003eCHP[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Parallel.html#v:runParallel_",
      "description": {
        "fct-descr": "\u003cp\u003eRuns all the given processes in parallel and discards any output.  Does\n not return until all the processes have completed.  \u003ccode\u003e\u003ca\u003erunParallel_\u003c/a\u003e\u003c/code\u003e ps is effectively equivalent\n to \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e ps \u003e\u003e return ().\n\u003c/p\u003e\u003cp\u003eIn version 1.5.0, a bug was introduced such that \u003ccode\u003erunParallel_ []\u003c/code\u003e would deadlock;\n this was fixed in version 1.5.1.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Parallel",
        "fct-package": "chp",
        "fct-signature": "[CHP a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Parallel.html#runParallel_",
        "fct-type": "function",
        "title": "runParallel_"
      },
      "index": {
        "description": "Runs all the given processes in parallel and discards any output Does not return until all the processes have completed runParallel ps is effectively equivalent to runParallel ps return In version bug was introduced such that runParallel would deadlock this was fixed in version",
        "hierarchy": "Control Concurrent CHP Parallel",
        "module": "Control.Concurrent.CHP.Parallel",
        "name": "runParallel_",
        "normalized": "[CHP a]-\u003eCHP()",
        "package": "chp",
        "partial": "Parallel",
        "signature": "[CHP a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-CSP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains support for CSP-style tracing.  A CSP trace is simply\n a flat list of events in the order in which they occurred.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.CSP",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Traces-CSP.html",
        "fct-type": "module",
        "title": "CSP"
      },
      "index": {
        "description": "This module contains support for CSP-style tracing CSP trace is simply flat list of events in the order in which they occurred",
        "hierarchy": "Control Concurrent CHP Traces CSP",
        "module": "Control.Concurrent.CHP.Traces.CSP",
        "name": "CSP",
        "normalized": "",
        "package": "chp",
        "partial": "CSP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-CSP.html#t:CSPTrace",
      "description": {
        "fct-descr": "\u003cp\u003eA classic CSP trace.  It is simply the channel labels, and a list of recorded\n events in sequence -- the head of the list is the first (oldest) event.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.CSP",
        "fct-package": "chp",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-CHP-Traces-CSP.html#CSPTrace",
        "fct-type": "newtype",
        "title": "CSPTrace"
      },
      "index": {
        "description": "classic CSP trace It is simply the channel labels and list of recorded events in sequence the head of the list is the first oldest event",
        "hierarchy": "Control Concurrent CHP Traces CSP",
        "module": "Control.Concurrent.CHP.Traces.CSP",
        "name": "CSPTrace",
        "normalized": "",
        "package": "chp",
        "partial": "CSPTrace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-CSP.html#v:CSPTrace",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.CSP",
        "fct-package": "chp",
        "fct-signature": "CSPTrace (ChannelLabels u, [RecordedEvent u])",
        "fct-source": "src/Control-Concurrent-CHP-Traces-CSP.html#CSPTrace",
        "fct-type": "function",
        "title": "CSPTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces CSP",
        "module": "Control.Concurrent.CHP.Traces.CSP",
        "name": "CSPTrace",
        "normalized": "CSPTrace(ChannelLabels a,[RecordedEvent a])",
        "package": "chp",
        "partial": "CSPTrace",
        "signature": "CSPTrace(ChannelLabels u,[RecordedEvent u])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-CSP.html#v:getCSPPlain",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function for pulling out the interesting bit from a CSP trace processed\n by labelAll.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.CSP",
        "fct-package": "chp",
        "fct-signature": "CSPTrace String -\u003e [RecordedEvent String]",
        "fct-source": "src/Control-Concurrent-CHP-Traces-CSP.html#getCSPPlain",
        "fct-type": "function",
        "title": "getCSPPlain"
      },
      "index": {
        "description": "helper function for pulling out the interesting bit from CSP trace processed by labelAll Added in version",
        "hierarchy": "Control Concurrent CHP Traces CSP",
        "module": "Control.Concurrent.CHP.Traces.CSP",
        "name": "getCSPPlain",
        "normalized": "CSPTrace String-\u003e[RecordedEvent String]",
        "package": "chp",
        "partial": "CSPPlain",
        "signature": "CSPTrace String-\u003e[RecordedEvent String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-CSP.html#v:runCHP_CSPTrace",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.CSP",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO (Maybe a, CSPTrace Unique)",
        "fct-source": "src/Control-Concurrent-CHP-Traces-CSP.html#runCHP_CSPTrace",
        "fct-type": "function",
        "title": "runCHP_CSPTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces CSP",
        "module": "Control.Concurrent.CHP.Traces.CSP",
        "name": "runCHP_CSPTrace",
        "normalized": "CHP a-\u003eIO(Maybe a,CSPTrace Unique)",
        "package": "chp",
        "partial": "CHP CSPTrace",
        "signature": "CHP a-\u003eIO(Maybe a,CSPTrace Unique)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-CSP.html#v:runCHP_CSPTraceAndPrint",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.CSP",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-CHP-Traces-CSP.html#runCHP_CSPTraceAndPrint",
        "fct-type": "function",
        "title": "runCHP_CSPTraceAndPrint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces CSP",
        "module": "Control.Concurrent.CHP.Traces.CSP",
        "name": "runCHP_CSPTraceAndPrint",
        "normalized": "CHP a-\u003eIO()",
        "package": "chp",
        "partial": "CHP CSPTrace And Print",
        "signature": "CHP a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains support for structural traces.  Structural\n traces reflect the parallel composition of your program.  Effectively,\n each process records its own local trace.  Parallel traces are then\n merged as parallel compositions, and you end up with a big tree of\n sequentially and parallel-composed traces.  Note that in this tracing\n style, unlike CSP and VCR, events are recorded by \u003cem\u003eevery\u003c/em\u003e process\n involved in them, not just once per occurrence.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html",
        "fct-type": "module",
        "title": "Structural"
      },
      "index": {
        "description": "This module contains support for structural traces Structural traces reflect the parallel composition of your program Effectively each process records its own local trace Parallel traces are then merged as parallel compositions and you end up with big tree of sequentially and parallel-composed traces Note that in this tracing style unlike CSP and VCR events are recorded by every process involved in them not just once per occurrence",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "Structural",
        "normalized": "",
        "package": "chp",
        "partial": "Structural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#t:EventHierarchy",
      "description": {
        "fct-descr": "\u003cp\u003eA data type representing a hierarchy of events.  The count on the StructuralSequence\n count is a replicator count for that list of sequential items.\n\u003c/p\u003e\u003cp\u003eThe Show, Read, Foldable and Traversable instances were added in version 1.3.0.\n\u003c/p\u003e\u003cp\u003eThe Eq instance was added in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#EventHierarchy",
        "fct-type": "data",
        "title": "EventHierarchy"
      },
      "index": {
        "description": "data type representing hierarchy of events The count on the StructuralSequence count is replicator count for that list of sequential items The Show Read Foldable and Traversable instances were added in version The Eq instance was added in version",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "EventHierarchy",
        "normalized": "",
        "package": "chp",
        "partial": "Event Hierarchy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#t:StructuralTrace",
      "description": {
        "fct-descr": "\u003cp\u003eA nested (or hierarchical) trace.  The trace is an event hierarchy, wrapped\n in a Maybe type to allow for representation of the empty trace (Nothing).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#StructuralTrace",
        "fct-type": "newtype",
        "title": "StructuralTrace"
      },
      "index": {
        "description": "nested or hierarchical trace The trace is an event hierarchy wrapped in Maybe type to allow for representation of the empty trace Nothing",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "StructuralTrace",
        "normalized": "",
        "package": "chp",
        "partial": "Structural Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:SingleEvent",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "SingleEvent a",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#EventHierarchy",
        "fct-type": "function",
        "title": "SingleEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "SingleEvent",
        "normalized": "",
        "package": "chp",
        "partial": "Single Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:StructuralParallel",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "StructuralParallel [EventHierarchy a]",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#EventHierarchy",
        "fct-type": "function",
        "title": "StructuralParallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "StructuralParallel",
        "normalized": "StructuralParallel[EventHierarchy a]",
        "package": "chp",
        "partial": "Structural Parallel",
        "signature": "StructuralParallel[EventHierarchy a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:StructuralSequence",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "StructuralSequence Int [EventHierarchy a]",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#EventHierarchy",
        "fct-type": "function",
        "title": "StructuralSequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "StructuralSequence",
        "normalized": "StructuralSequence Int[EventHierarchy a]",
        "package": "chp",
        "partial": "Structural Sequence",
        "signature": "StructuralSequence Int[EventHierarchy a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:StructuralTrace",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "StructuralTrace (ChannelLabels u, Maybe (EventHierarchy (RecordedIndivEvent u)))",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#StructuralTrace",
        "fct-type": "function",
        "title": "StructuralTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "StructuralTrace",
        "normalized": "StructuralTrace(ChannelLabels a,Maybe(EventHierarchy(RecordedIndivEvent a)))",
        "package": "chp",
        "partial": "Structural Trace",
        "signature": "StructuralTrace(ChannelLabels u,Maybe(EventHierarchy(RecordedIndivEvent u)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:getAllEventsInHierarchy",
      "description": {
        "fct-descr": "\u003cp\u003eFlattens the events into a list.  The resulting list may contain duplicates, and it\n should not be assumed that the order relates in any way to the original\n hierarchy.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "EventHierarchy a -\u003e [a]",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#getAllEventsInHierarchy",
        "fct-type": "function",
        "title": "getAllEventsInHierarchy"
      },
      "index": {
        "description": "Flattens the events into list The resulting list may contain duplicates and it should not be assumed that the order relates in any way to the original hierarchy",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "getAllEventsInHierarchy",
        "normalized": "EventHierarchy a-\u003e[a]",
        "package": "chp",
        "partial": "All Events In Hierarchy",
        "signature": "EventHierarchy a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:getStructuralPlain",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function for pulling out the interesting bit from a Structural trace processed\n by labelAll.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "StructuralTrace String -\u003e Maybe (EventHierarchy (RecordedIndivEvent String))",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#getStructuralPlain",
        "fct-type": "function",
        "title": "getStructuralPlain"
      },
      "index": {
        "description": "helper function for pulling out the interesting bit from Structural trace processed by labelAll Added in version",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "getStructuralPlain",
        "normalized": "StructuralTrace String-\u003eMaybe(EventHierarchy(RecordedIndivEvent String))",
        "package": "chp",
        "partial": "Structural Plain",
        "signature": "StructuralTrace String-\u003eMaybe(EventHierarchy(RecordedIndivEvent String))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:runCHP_StructuralTrace",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO (Maybe a, StructuralTrace Unique)",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#runCHP_StructuralTrace",
        "fct-type": "function",
        "title": "runCHP_StructuralTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "runCHP_StructuralTrace",
        "normalized": "CHP a-\u003eIO(Maybe a,StructuralTrace Unique)",
        "package": "chp",
        "partial": "CHP Structural Trace",
        "signature": "CHP a-\u003eIO(Maybe a,StructuralTrace Unique)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-Structural.html#v:runCHP_StructuralTraceAndPrint",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.Structural",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Structural.html#runCHP_StructuralTraceAndPrint",
        "fct-type": "function",
        "title": "runCHP_StructuralTraceAndPrint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces Structural",
        "module": "Control.Concurrent.CHP.Traces.Structural",
        "name": "runCHP_StructuralTraceAndPrint",
        "normalized": "CHP a-\u003eIO()",
        "package": "chp",
        "partial": "CHP Structural Trace And Print",
        "signature": "CHP a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-TraceOff.html#",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.TraceOff",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Traces-TraceOff.html",
        "fct-type": "module",
        "title": "TraceOff"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces TraceOff",
        "module": "Control.Concurrent.CHP.Traces.TraceOff",
        "name": "TraceOff",
        "normalized": "",
        "package": "chp",
        "partial": "Trace Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-TraceOff.html#t:TraceOff",
      "description": {
        "fct-descr": "\u003cp\u003eA trace type that does not record anything.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.TraceOff",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Traces-TraceOff.html#TraceOff",
        "fct-type": "data",
        "title": "TraceOff"
      },
      "index": {
        "description": "trace type that does not record anything",
        "hierarchy": "Control Concurrent CHP Traces TraceOff",
        "module": "Control.Concurrent.CHP.Traces.TraceOff",
        "name": "TraceOff",
        "normalized": "",
        "package": "chp",
        "partial": "Trace Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-TraceOff.html#v:runCHP_TraceOff",
      "description": {
        "fct-descr": "\u003cp\u003eA type-constrained version of \u003ccode\u003e\u003ca\u003erunCHPAndTrace\u003c/a\u003e\u003c/code\u003e.  This is semantically identical\n to \u003ccode\u003erunCHP\u003c/code\u003e, but this function is useful with the \u003ccode\u003eqcCHP'\u003c/code\u003e function in the testing\n module.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.TraceOff",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO (Maybe a, TraceOff Unique)",
        "fct-source": "src/Control-Concurrent-CHP-Traces-TraceOff.html#runCHP_TraceOff",
        "fct-type": "function",
        "title": "runCHP_TraceOff"
      },
      "index": {
        "description": "type-constrained version of runCHPAndTrace This is semantically identical to runCHP but this function is useful with the qcCHP function in the testing module",
        "hierarchy": "Control Concurrent CHP Traces TraceOff",
        "module": "Control.Concurrent.CHP.Traces.TraceOff",
        "name": "runCHP_TraceOff",
        "normalized": "CHP a-\u003eIO(Maybe a,TraceOff Unique)",
        "package": "chp",
        "partial": "CHP Trace Off",
        "signature": "CHP a-\u003eIO(Maybe a,TraceOff Unique)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-VCR.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for recording View Centric Reasoning (VCR) traces.  A view centric\n reasnoning trace is a list of sets of events.  Each set contains independent\n events that have no causal relationship between them.  Hopefully we will\n publish a paper explaining all this in detail soon.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.VCR",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Traces-VCR.html",
        "fct-type": "module",
        "title": "VCR"
      },
      "index": {
        "description": "module for recording View Centric Reasoning VCR traces view centric reasnoning trace is list of sets of events Each set contains independent events that have no causal relationship between them Hopefully we will publish paper explaining all this in detail soon",
        "hierarchy": "Control Concurrent CHP Traces VCR",
        "module": "Control.Concurrent.CHP.Traces.VCR",
        "name": "VCR",
        "normalized": "",
        "package": "chp",
        "partial": "VCR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-VCR.html#t:VCRTrace",
      "description": {
        "fct-descr": "\u003cp\u003eA VCR (View-Centric Reasoning) trace.  It is the channel labels,\n accompanied by a sequential list of sets of recorded events.  Each of\n the sets is a set of independent events.  The set at the head of the\n list is the first-recorded (oldest).\n\u003c/p\u003e\u003cp\u003eThe type became parameterised in version 1.3.0\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.VCR",
        "fct-package": "chp",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-CHP-Traces-VCR.html#VCRTrace",
        "fct-type": "newtype",
        "title": "VCRTrace"
      },
      "index": {
        "description": "VCR View-Centric Reasoning trace It is the channel labels accompanied by sequential list of sets of recorded events Each of the sets is set of independent events The set at the head of the list is the first-recorded oldest The type became parameterised in version",
        "hierarchy": "Control Concurrent CHP Traces VCR",
        "module": "Control.Concurrent.CHP.Traces.VCR",
        "name": "VCRTrace",
        "normalized": "",
        "package": "chp",
        "partial": "VCRTrace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-VCR.html#v:VCRTrace",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.VCR",
        "fct-package": "chp",
        "fct-signature": "VCRTrace (ChannelLabels u, [Set (RecordedEvent u)])",
        "fct-source": "src/Control-Concurrent-CHP-Traces-VCR.html#VCRTrace",
        "fct-type": "function",
        "title": "VCRTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces VCR",
        "module": "Control.Concurrent.CHP.Traces.VCR",
        "name": "VCRTrace",
        "normalized": "VCRTrace(ChannelLabels a,[Set(RecordedEvent a)])",
        "package": "chp",
        "partial": "VCRTrace",
        "signature": "VCRTrace(ChannelLabels u,[Set(RecordedEvent u)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-VCR.html#v:getVCRPlain",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function for pulling out the interesting bit from a VCR trace processed\n by labelAll.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces.VCR",
        "fct-package": "chp",
        "fct-signature": "VCRTrace String -\u003e [Set (RecordedEvent String)]",
        "fct-source": "src/Control-Concurrent-CHP-Traces-VCR.html#getVCRPlain",
        "fct-type": "function",
        "title": "getVCRPlain"
      },
      "index": {
        "description": "helper function for pulling out the interesting bit from VCR trace processed by labelAll Added in version",
        "hierarchy": "Control Concurrent CHP Traces VCR",
        "module": "Control.Concurrent.CHP.Traces.VCR",
        "name": "getVCRPlain",
        "normalized": "VCRTrace String-\u003e[Set(RecordedEvent String)]",
        "package": "chp",
        "partial": "VCRPlain",
        "signature": "VCRTrace String-\u003e[Set(RecordedEvent String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-VCR.html#v:runCHP_VCRTrace",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.VCR",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO (Maybe a, VCRTrace Unique)",
        "fct-source": "src/Control-Concurrent-CHP-Traces-VCR.html#runCHP_VCRTrace",
        "fct-type": "function",
        "title": "runCHP_VCRTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces VCR",
        "module": "Control.Concurrent.CHP.Traces.VCR",
        "name": "runCHP_VCRTrace",
        "normalized": "CHP a-\u003eIO(Maybe a,VCRTrace Unique)",
        "package": "chp",
        "partial": "CHP VCRTrace",
        "signature": "CHP a-\u003eIO(Maybe a,VCRTrace Unique)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces-VCR.html#v:runCHP_VCRTraceAndPrint",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces.VCR",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-CHP-Traces-VCR.html#runCHP_VCRTraceAndPrint",
        "fct-type": "function",
        "title": "runCHP_VCRTraceAndPrint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces VCR",
        "module": "Control.Concurrent.CHP.Traces.VCR",
        "name": "runCHP_VCRTraceAndPrint",
        "normalized": "CHP a-\u003eIO()",
        "package": "chp",
        "partial": "CHP VCRTrace And Print",
        "signature": "CHP a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that re-exports all the parts of the library related to tracing.\n\u003c/p\u003e\u003cp\u003eThe idea of tracing is to record the concurrent events (i.e. channel communications\n and barrier synchronisations) that occur during a run of the program.  You\n can think of it as automatically turning on a lot of debug logging.\n\u003c/p\u003e\u003cp\u003eTypically, at the top-level of your program you should have:\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main = runCHP myMainProcess\n\u003c/pre\u003e\u003cp\u003eTo turn on the tracing mechanism of your choice (for example, CSP-style tracing)\n to automatically print out the trace after completion of your program, just\n use the appropriate helper function:\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main = runCHP_CSPTraceAndPrint myMainProcess\n\u003c/pre\u003e\u003cp\u003eIt could hardly be easier.  If you want more fine-grained control and examination\n of the trace, you can use the helper functions of the form \u003ccode\u003e\u003ca\u003erunCHP_CSPTrace\u003c/a\u003e\u003c/code\u003e\n that give back a data structure representing the trace, which you can then\n manipulate.\n\u003c/p\u003e\u003cp\u003eThe Doc used by the traces is from the \u003ccode\u003eText.PrettyPrint.HughesPJ\u003c/code\u003e\n module that currently comes with GHC (I think).\n\u003c/p\u003e\u003cp\u003eFor more details on the theory behind the tracing, the logic behind its\n implementation, and example traces, see the paper \"Representation and Implementation\n of CSP and VCR Traces\", N.C.C. Brown and M.L. Smith, CPA 2008.  An online version can\n be found at: \u003ca\u003ehttp://twistedsquare.com/Traces.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Traces.html",
        "fct-type": "module",
        "title": "Traces"
      },
      "index": {
        "description": "module that re-exports all the parts of the library related to tracing The idea of tracing is to record the concurrent events i.e channel communications and barrier synchronisations that occur during run of the program You can think of it as automatically turning on lot of debug logging Typically at the top-level of your program you should have main IO main runCHP myMainProcess To turn on the tracing mechanism of your choice for example CSP-style tracing to automatically print out the trace after completion of your program just use the appropriate helper function main IO main runCHP CSPTraceAndPrint myMainProcess It could hardly be easier If you want more fine-grained control and examination of the trace you can use the helper functions of the form runCHP CSPTrace that give back data structure representing the trace which you can then manipulate The Doc used by the traces is from the Text.PrettyPrint.HughesPJ module that currently comes with GHC think For more details on the theory behind the tracing the logic behind its implementation and example traces see the paper Representation and Implementation of CSP and VCR Traces N.C.C Brown and M.L Smith CPA An online version can be found at http twistedsquare.com Traces.pdf",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "Traces",
        "normalized": "",
        "package": "chp",
        "partial": "Traces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#t:ChannelLabels",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#ChannelLabels",
        "fct-type": "type",
        "title": "ChannelLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "ChannelLabels",
        "normalized": "",
        "package": "chp",
        "partial": "Channel Labels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#t:RecordedEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA globally recorded event, found in CSP and VCR traces.  Either a\n channel communication (with a unique identifier of the channel) or a\n barrier synchronisation (with a unique identifier of the barrier).  The\n identifiers are per channel/barrier, not per event.  Currently,\n channels and barriers can never have the same Unique as each other, but\n do not rely on this behaviour.\n\u003c/p\u003e\u003cp\u003eThe type became parameterised in version 1.3.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#RecordedEvent",
        "fct-type": "type",
        "title": "RecordedEvent"
      },
      "index": {
        "description": "globally recorded event found in CSP and VCR traces Either channel communication with unique identifier of the channel or barrier synchronisation with unique identifier of the barrier The identifiers are per channel barrier not per event Currently channels and barriers can never have the same Unique as each other but do not rely on this behaviour The type became parameterised in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "RecordedEvent",
        "normalized": "",
        "package": "chp",
        "partial": "Recorded Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#t:RecordedEventType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of an event in the CSP and VCR traces.\n\u003c/p\u003e\u003cp\u003eClockSync was added in version 1.2.0.\n\u003c/p\u003e\u003cp\u003eThe extra parameter on ChannelComm and BarrierSync (which are the result of\n showing the value sent and phase ended respectively) was added in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-EventType.html#RecordedEventType",
        "fct-type": "data",
        "title": "RecordedEventType"
      },
      "index": {
        "description": "The type of an event in the CSP and VCR traces ClockSync was added in version The extra parameter on ChannelComm and BarrierSync which are the result of showing the value sent and phase ended respectively was added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "RecordedEventType",
        "normalized": "",
        "package": "chp",
        "partial": "Recorded Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#t:RecordedIndivEvent",
      "description": {
        "fct-descr": "\u003cp\u003eAn individual record of an event, found in nested traces.  Either a\n channel write or read, or a barrier synchronisation, each with a unique\n identifier for the barrier/channel.  The event will be recorded by\n everyone involved, and a ChannelWrite will have the same channel\n identifier as the corresponding channel-read.  The identifiers are per\n channel/barrier, not per event.  Currently, channels and barriers can\n never have the same Unique as each other, but do not rely on this\n behaviour.\n\u003c/p\u003e\u003cp\u003eThe type u item is the unique identifier of the channel\u003cem\u003ebarrier\u003c/em\u003eclock, and the\n Integer is a sequence identifier for that channel\u003cem\u003ebarrier\u003c/em\u003eclock (first sync\n is 0, second sync is 1, etc), and finally the String shows the value-sent\u003cem\u003ephase-ended\u003c/em\u003etime\n involved.\n\u003c/p\u003e\u003cp\u003eClockSyncIndiv was added in version 1.2.0.\n\u003c/p\u003e\u003cp\u003eThe type became parameterised, and the Show and Read instances were added in version 1.3.0.\n\u003c/p\u003e\u003cp\u003eThe String parameters on ChannelWrite, ChannelRead and BarrierSyncIndiv were\n added in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#RecordedIndivEvent",
        "fct-type": "data",
        "title": "RecordedIndivEvent"
      },
      "index": {
        "description": "An individual record of an event found in nested traces Either channel write or read or barrier synchronisation each with unique identifier for the barrier channel The event will be recorded by everyone involved and ChannelWrite will have the same channel identifier as the corresponding channel-read The identifiers are per channel barrier not per event Currently channels and barriers can never have the same Unique as each other but do not rely on this behaviour The type item is the unique identifier of the channel barrier clock and the Integer is sequence identifier for that channel barrier clock first sync is second sync is etc and finally the String shows the value-sent phase-ended time involved ClockSyncIndiv was added in version The type became parameterised and the Show and Read instances were added in version The String parameters on ChannelWrite ChannelRead and BarrierSyncIndiv were added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "RecordedIndivEvent",
        "normalized": "",
        "package": "chp",
        "partial": "Recorded Indiv Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#t:Trace",
      "description": {
        "fct-descr": "\u003cp\u003eA class representing a type of trace.  The main useful function is \u003ccode\u003e\u003ca\u003erunCHPAndTrace\u003c/a\u003e\u003c/code\u003e,\n but because its type is only determined by its return type, you may wish\n to use the already-typed functions offered in each trace module -- see the\n modules in \u003ca\u003eControl.Concurrent.CHP.Traces\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe trace type involved became parameterised in version 1.3.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#Trace",
        "fct-type": "class",
        "title": "Trace"
      },
      "index": {
        "description": "class representing type of trace The main useful function is runCHPAndTrace but because its type is only determined by its return type you may wish to use the already-typed functions offered in each trace module see the modules in Control.Concurrent.CHP.Traces The trace type involved became parameterised in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "Trace",
        "normalized": "",
        "package": "chp",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:BarrierSync",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "BarrierSync String",
        "fct-source": "src/Control-Concurrent-CHP-EventType.html#RecordedEventType",
        "fct-type": "function",
        "title": "BarrierSync"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "BarrierSync",
        "normalized": "",
        "package": "chp",
        "partial": "Barrier Sync",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:BarrierSyncIndiv",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "BarrierSyncIndiv u Integer String",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#RecordedIndivEvent",
        "fct-type": "function",
        "title": "BarrierSyncIndiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "BarrierSyncIndiv",
        "normalized": "",
        "package": "chp",
        "partial": "Barrier Sync Indiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:ChannelComm",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "ChannelComm String",
        "fct-source": "src/Control-Concurrent-CHP-EventType.html#RecordedEventType",
        "fct-type": "function",
        "title": "ChannelComm"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "ChannelComm",
        "normalized": "",
        "package": "chp",
        "partial": "Channel Comm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:ChannelRead",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "ChannelRead u Integer String",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#RecordedIndivEvent",
        "fct-type": "function",
        "title": "ChannelRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "ChannelRead",
        "normalized": "",
        "package": "chp",
        "partial": "Channel Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:ChannelWrite",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "ChannelWrite u Integer String",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#RecordedIndivEvent",
        "fct-type": "function",
        "title": "ChannelWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "ChannelWrite",
        "normalized": "",
        "package": "chp",
        "partial": "Channel Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:ClockSync",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "ClockSync String",
        "fct-source": "src/Control-Concurrent-CHP-EventType.html#RecordedEventType",
        "fct-type": "function",
        "title": "ClockSync"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "ClockSync",
        "normalized": "",
        "package": "chp",
        "partial": "Clock Sync",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:ClockSyncIndiv",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "ClockSyncIndiv u Integer String",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#RecordedIndivEvent",
        "fct-type": "function",
        "title": "ClockSyncIndiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "ClockSyncIndiv",
        "normalized": "",
        "package": "chp",
        "partial": "Clock Sync Indiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:emptyTrace",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty trace.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "t u",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#emptyTrace",
        "fct-type": "method",
        "title": "emptyTrace"
      },
      "index": {
        "description": "The empty trace",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "emptyTrace",
        "normalized": "",
        "package": "chp",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:labelAll",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 1.3.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "t u -\u003e t String",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#labelAll",
        "fct-type": "method",
        "title": "labelAll"
      },
      "index": {
        "description": "Added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "labelAll",
        "normalized": "a b-\u003ea String",
        "package": "chp",
        "partial": "All",
        "signature": "t u-\u003et String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:prettyPrint",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-prints the given trace using the \u003ca\u003eText.PrettyPrint.HughesPJ\u003c/a\u003e\n module.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "t u -\u003e Doc",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#prettyPrint",
        "fct-type": "method",
        "title": "prettyPrint"
      },
      "index": {
        "description": "Pretty-prints the given trace using the Text.PrettyPrint.HughesPJ module",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "prettyPrint",
        "normalized": "a b-\u003eDoc",
        "package": "chp",
        "partial": "Print",
        "signature": "t u-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:recordedIndivEventLabel",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 1.3.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "RecordedIndivEvent u -\u003e u",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#recordedIndivEventLabel",
        "fct-type": "function",
        "title": "recordedIndivEventLabel"
      },
      "index": {
        "description": "Added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "recordedIndivEventLabel",
        "normalized": "RecordedIndivEvent a-\u003ea",
        "package": "chp",
        "partial": "Indiv Event Label",
        "signature": "RecordedIndivEvent u-\u003eu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:recordedIndivEventSeq",
      "description": {
        "fct-descr": "\u003cp\u003eAdded in version 1.3.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "RecordedIndivEvent u -\u003e Integer",
        "fct-source": "src/Control-Concurrent-CHP-Traces-Base.html#recordedIndivEventSeq",
        "fct-type": "function",
        "title": "recordedIndivEventSeq"
      },
      "index": {
        "description": "Added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "recordedIndivEventSeq",
        "normalized": "RecordedIndivEvent a-\u003eInteger",
        "package": "chp",
        "partial": "Indiv Event Seq",
        "signature": "RecordedIndivEvent u-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:runCHPAndTrace",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given CHP program, and returns its return value and the trace.\n  The return value is a Maybe type because the process may have exited\n due to uncaught poison.  In that case Nothing is return as the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "CHP a -\u003e IO (Maybe a, t Unique)",
        "fct-source": "src/Control-Concurrent-CHP-Base.html#runCHPAndTrace",
        "fct-type": "method",
        "title": "runCHPAndTrace"
      },
      "index": {
        "description": "Runs the given CHP program and returns its return value and the trace The return value is Maybe type because the process may have exited due to uncaught poison In that case Nothing is return as the result",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "runCHPAndTrace",
        "normalized": "CHP a-\u003eIO(Maybe a,b Unique)",
        "package": "chp",
        "partial": "CHPAnd Trace",
        "signature": "CHP a-\u003eIO(Maybe a,t Unique)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:structuralToCSP",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a structural trace and forms all the possible CSP traces (without\n duplicates) that could have arisen from the same execution.\n\u003c/p\u003e\u003cp\u003eThis is done -- roughly speaking -- by replaying the structural trace in all\n possible execution orderings and pulling out the CSP trace for each ordering.\n\u003c/p\u003e\u003cp\u003eIt should be the case for all structural traces \u003ccode\u003et\u003c/code\u003e that do not use conjunction (\u003ccode\u003eevery\u003c/code\u003e and\n '(\u003c&\u003e)'):\n\u003c/p\u003e\u003cpre\u003e structuralToCSP t =~= (concatMap vcrToCSP . structuralToVCR) t\n   where a =~= b = or [a' == b' | a' \u003c- permutations a, b' \u003c- permutations  b]\n\u003c/pre\u003e\u003cp\u003eThis function was added in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "StructuralTrace u -\u003e [CSPTrace u]",
        "fct-source": "src/Control-Concurrent-CHP-Traces.html#structuralToCSP",
        "fct-type": "function",
        "title": "structuralToCSP"
      },
      "index": {
        "description": "Takes structural trace and forms all the possible CSP traces without duplicates that could have arisen from the same execution This is done roughly speaking by replaying the structural trace in all possible execution orderings and pulling out the CSP trace for each ordering It should be the case for all structural traces that do not use conjunction every and structuralToCSP concatMap vcrToCSP structuralToVCR where or permutations permutations This function was added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "structuralToCSP",
        "normalized": "StructuralTrace a-\u003e[CSPTrace a]",
        "package": "chp",
        "partial": "To CSP",
        "signature": "StructuralTrace u-\u003e[CSPTrace u]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:structuralToVCR",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a structural trace and forms all the possible VCR traces (without\n duplicates) that could have arisen from the same execution.\n\u003c/p\u003e\u003cp\u003eThis is done -- roughly speaking -- by replaying the structural trace in all\n possible execution orderings and pulling out the VCR trace for each ordering.\n\u003c/p\u003e\u003cp\u003eThis function was added in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "StructuralTrace u -\u003e [VCRTrace u]",
        "fct-source": "src/Control-Concurrent-CHP-Traces.html#structuralToVCR",
        "fct-type": "function",
        "title": "structuralToVCR"
      },
      "index": {
        "description": "Takes structural trace and forms all the possible VCR traces without duplicates that could have arisen from the same execution This is done roughly speaking by replaying the structural trace in all possible execution orderings and pulling out the VCR trace for each ordering This function was added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "structuralToVCR",
        "normalized": "StructuralTrace a-\u003e[VCRTrace a]",
        "package": "chp",
        "partial": "To VCR",
        "signature": "StructuralTrace u-\u003e[VCRTrace u]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP-Traces.html#v:vcrToCSP",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a VCR trace and forms all the possible CSP traces (without\n duplicates) that could have arisen from the same execution.\n\u003c/p\u003e\u003cp\u003eThis is done by taking all permutations of each set in the VCR trace (which\n is a list of sets) and concatenating them with the results of the same process\n on the rest of the trace.  Thus the maximum size of the returned set of CSP traces\n is the product of the sizes of all the non-empty sets in the VCR trace.\n\u003c/p\u003e\u003cp\u003eThis function was added in version 1.5.0.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Traces",
        "fct-package": "chp",
        "fct-signature": "VCRTrace u -\u003e [CSPTrace u]",
        "fct-source": "src/Control-Concurrent-CHP-Traces.html#vcrToCSP",
        "fct-type": "function",
        "title": "vcrToCSP"
      },
      "index": {
        "description": "Takes VCR trace and forms all the possible CSP traces without duplicates that could have arisen from the same execution This is done by taking all permutations of each set in the VCR trace which is list of sets and concatenating them with the results of the same process on the rest of the trace Thus the maximum size of the returned set of CSP traces is the product of the sizes of all the non-empty sets in the VCR trace This function was added in version",
        "hierarchy": "Control Concurrent CHP Traces",
        "module": "Control.Concurrent.CHP.Traces",
        "name": "vcrToCSP",
        "normalized": "VCRTrace a-\u003e[CSPTrace a]",
        "package": "chp",
        "partial": "To CSP",
        "signature": "VCRTrace u-\u003e[CSPTrace u]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp/docs/Control-Concurrent-CHP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports all of the functionality of the CHP library, except\n the traces mechanism available in the \u003ca\u003eControl.Concurrent.CHP.Traces\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eFor an overview of the library, take a look at the CHP tutorial:\n \u003ca\u003ehttp://www.cs.kent.ac.uk/projects/ofa/chp/tutorial.pdf\u003c/a\u003e available from\n the main CHP website: \u003ca\u003ehttp://www.cs.kent.ac.uk/projects/ofa/chp/\u003c/a\u003e, or take\n a look at the CHP blog: \u003ca\u003ehttp://chplib.wordpress.com/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eYou should also look at the chp-plus package, which contains a lot of useful\n further functionality built on top of CHP.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP",
        "fct-package": "chp",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP.html",
        "fct-type": "module",
        "title": "CHP"
      },
      "index": {
        "description": "This module re-exports all of the functionality of the CHP library except the traces mechanism available in the Control.Concurrent.CHP.Traces module For an overview of the library take look at the CHP tutorial http www.cs.kent.ac.uk projects ofa chp tutorial.pdf available from the main CHP website http www.cs.kent.ac.uk projects ofa chp or take look at the CHP blog http chplib.wordpress.com You should also look at the chp-plus package which contains lot of useful further functionality built on top of CHP",
        "hierarchy": "Control Concurrent CHP",
        "module": "Control.Concurrent.CHP",
        "name": "CHP",
        "normalized": "",
        "package": "chp",
        "partial": "CHP",
        "signature": ""
      }
    }
  }
]