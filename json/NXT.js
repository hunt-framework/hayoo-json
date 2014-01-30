[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA message-based control of a NXT brick via remotely executed \u003ccode\u003eMotorControl\u003c/code\u003e program. The main goal of this approach is to achieve\nbetter precision of motor movements as program monitors and adapts motor commands on the NXT brick itself. For example, common\nmotor's overshoot is thus removed in most cases.\n\u003c/p\u003e\u003cp\u003eYou should download/compile \u003ccode\u003eMotorControl\u003c/code\u003e program from \u003ca\u003ehttp://www.mindstorms.rwth-aachen.de/trac/wiki/MotorControl\u003c/a\u003e and upload\nit to the NXT brick with \u003ccode\u003enxt-upload\u003c/code\u003e program. This module will then run that program and sends it messages to control the NXT brick.\nBecause commands will be executed and controlled directly on the NXT brick more powerful and precise control is possible.\n\u003c/p\u003e\u003cp\u003ePlease refer to original documentation of \u003ccode\u003eMotorControl\u003c/code\u003e program for more information, description of commands and explanations\nhow to use them. This interface also implements static pauses between commands mentioned there and required by \u003ccode\u003eMotorControl\u003c/code\u003e. This\nmeans functions calls will block for this time so consider using special Haskell thread for communication with the NXT brick.\nDynamic/minimal pauses are not implemented and have to be taken care of by user of this interface.\n\u003c/p\u003e\u003cp\u003eCheck \u003ca\u003eRobotics.NXT.Remote\u003c/a\u003e for another (simpler) approach to message-based control. It would be great to one day combine\n\u003ccode\u003eMotorControl\u003c/code\u003e's precision with API (especially interruptability) of \u003ccode\u003eremote.nxc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "module",
        "fct-source": "src/Robotics-NXT-MotorControl.html",
        "fct-type": "module",
        "title": "MotorControl"
      },
      "index": {
        "description": "message-based control of NXT brick via remotely executed MotorControl program The main goal of this approach is to achieve better precision of motor movements as program monitors and adapts motor commands on the NXT brick itself For example common motor overshoot is thus removed in most cases You should download compile MotorControl program from http www.mindstorms.rwth-aachen.de trac wiki MotorControl and upload it to the NXT brick with nxt-upload program This module will then run that program and sends it messages to control the NXT brick Because commands will be executed and controlled directly on the NXT brick more powerful and precise control is possible Please refer to original documentation of MotorControl program for more information description of commands and explanations how to use them This interface also implements static pauses between commands mentioned there and required by MotorControl This means functions calls will block for this time so consider using special Haskell thread for communication with the NXT brick Dynamic minimal pauses are not implemented and have to be taken care of by user of this interface Check Robotics.NXT.Remote for another simpler approach to message-based control It would be great to one day combine MotorControl precision with API especially interruptability of remote.nxc",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "MotorControl",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#t:MotorControlMode",
      "description": {
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
        "fct-type": "data",
        "title": "MotorControlMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "MotorControlMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Control Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#t:SpeedRegulation",
      "description": {
        "fct-descr": "\u003cp\u003eShould in a case of a load on the motor its power be adapted to retain the same speed? Really works only if there is room for that\n(not that motor is already running at the maximum power).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-MotorControl.html#SpeedRegulation",
        "fct-type": "type",
        "title": "SpeedRegulation"
      },
      "index": {
        "description": "Should in case of load on the motor its power be adapted to retain the same speed Really works only if there is room for that not that motor is already running at the maximum power",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "SpeedRegulation",
        "normalized": "",
        "package": "NXT",
        "partial": "Speed Regulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:HoldBrake",
      "description": {
        "fct-descr": "\u003cp\u003eKeeps active brake on after the end of the movement.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "HoldBrake",
        "fct-source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
        "fct-type": "function",
        "title": "HoldBrake"
      },
      "index": {
        "description": "Keeps active brake on after the end of the movement",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "HoldBrake",
        "normalized": "",
        "package": "NXT",
        "partial": "Hold Brake",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:SmoothStart",
      "description": {
        "fct-descr": "\u003cp\u003eSmoothly starts the movement.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "SmoothStart",
        "fct-source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
        "fct-type": "function",
        "title": "SmoothStart"
      },
      "index": {
        "description": "Smoothly starts the movement",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "SmoothStart",
        "normalized": "",
        "package": "NXT",
        "partial": "Smooth Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:SpeedRegulation",
      "description": {
        "fct-descr": "\u003cp\u003eIn a case of a load on the motor adapt motor power to retain the same speed. Really works only if there is\n room for that (not that motor is already running at the maximum power).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "SpeedRegulation",
        "fct-source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
        "fct-type": "function",
        "title": "SpeedRegulation"
      },
      "index": {
        "description": "In case of load on the motor adapt motor power to retain the same speed Really works only if there is room for that not that motor is already running at the maximum power",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "SpeedRegulation",
        "normalized": "",
        "package": "NXT",
        "partial": "Speed Regulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:classicMotorCmd",
      "description": {
        "fct-descr": "\u003cp\u003eInterface to \u003ccode\u003eCLASSIC_MOTORCMD\u003c/code\u003e command which is very similar to \u003ccode\u003e\u003ca\u003esetOutputState\u003c/a\u003e\u003c/code\u003e but better interacts with \u003ccode\u003eMotorControl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRequires dynamic/minimal pauses.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "[OutputPort] -\u003e OutputPower -\u003e TachoLimit -\u003e SpeedRegulation -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-MotorControl.html#classicMotorCmd",
        "fct-type": "function",
        "title": "classicMotorCmd"
      },
      "index": {
        "description": "Interface to CLASSIC MOTORCMD command which is very similar to setOutputState but better interacts with MotorControl Requires dynamic minimal pauses",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "classicMotorCmd",
        "normalized": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003eSpeedRegulation-\u003eNXT()",
        "package": "NXT",
        "partial": "Motor Cmd",
        "signature": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003eSpeedRegulation-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:controlledMotorCmd",
      "description": {
        "fct-descr": "\u003cp\u003eInterface to \u003ccode\u003eCONTROLLED_MOTORCMD\u003c/code\u003e command which takes care of precise motor movements.\n\u003c/p\u003e\u003cp\u003eRequires dynamic/minimal pauses.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "[OutputPort] -\u003e OutputPower -\u003e TachoLimit -\u003e [MotorControlMode] -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-MotorControl.html#controlledMotorCmd",
        "fct-type": "function",
        "title": "controlledMotorCmd"
      },
      "index": {
        "description": "Interface to CONTROLLED MOTORCMD command which takes care of precise motor movements Requires dynamic minimal pauses",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "controlledMotorCmd",
        "normalized": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003e[MotorControlMode]-\u003eNXT()",
        "package": "NXT",
        "partial": "Motor Cmd",
        "signature": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003e[MotorControlMode]-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:isMotorReady",
      "description": {
        "fct-descr": "\u003cp\u003eInterface to \u003ccode\u003eISMOTORREADY\u003c/code\u003e command which determine the state of a motor: is it currently executing a command (for example, moving)\nor is it ready to accept new commands?\n\u003c/p\u003e\u003cp\u003eImplements static pauses.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "[OutputPort] -\u003e NXT [Bool]",
        "fct-source": "src/Robotics-NXT-MotorControl.html#isMotorReady",
        "fct-type": "function",
        "title": "isMotorReady"
      },
      "index": {
        "description": "Interface to ISMOTORREADY command which determine the state of motor is it currently executing command for example moving or is it ready to accept new commands Implements static pauses",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "isMotorReady",
        "normalized": "[OutputPort]-\u003eNXT[Bool]",
        "package": "NXT",
        "partial": "Motor Ready",
        "signature": "[OutputPort]-\u003eNXT[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:resetErrorCorrection",
      "description": {
        "fct-descr": "\u003cp\u003eInterface to \u003ccode\u003eRESET_ERROR_CORRECTION\u003c/code\u003e command which can be used to reset the NXT brick's internal error correction mechanism (and\nmotor position information at the same time).\n\u003c/p\u003e\u003cp\u003eThe same thing can be achieved by using \u003ccode\u003e\u003ca\u003eresetMotorPosition\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eInternalPosition\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "[OutputPort] -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-MotorControl.html#resetErrorCorrection",
        "fct-type": "function",
        "title": "resetErrorCorrection"
      },
      "index": {
        "description": "Interface to RESET ERROR CORRECTION command which can be used to reset the NXT brick internal error correction mechanism and motor position information at the same time The same thing can be achieved by using resetMotorPosition with InternalPosition argument",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "resetErrorCorrection",
        "normalized": "[OutputPort]-\u003eNXT()",
        "package": "NXT",
        "partial": "Error Correction",
        "signature": "[OutputPort]-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:startMotorControlProgram",
      "description": {
        "fct-descr": "\u003cp\u003eStarts \u003ccode\u003eMotorControl22.rxe\u003c/code\u003e program on the NXT brick. Program has to be uploaded/available on the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-MotorControl.html#startMotorControlProgram",
        "fct-type": "function",
        "title": "startMotorControlProgram"
      },
      "index": {
        "description": "Starts MotorControl22.rxe program on the NXT brick Program has to be uploaded available on the NXT brick",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "startMotorControlProgram",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Motor Control Program",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:stopMotorControlProgram",
      "description": {
        "fct-descr": "\u003cp\u003eStops current running program on the NXT brick. Probably this means \u003ccode\u003eMotorControl22.rxe\u003c/code\u003e program on the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.MotorControl",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-MotorControl.html#stopMotorControlProgram",
        "fct-type": "function",
        "title": "stopMotorControlProgram"
      },
      "index": {
        "description": "Stops current running program on the NXT brick Probably this means MotorControl22.rxe program on the NXT brick",
        "hierarchy": "Robotics NXT MotorControl",
        "module": "Robotics.NXT.MotorControl",
        "name": "stopMotorControlProgram",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Motor Control Program",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple message-based control of the NXT brick via remotely executed program. The main goal of this approach is to reduce latency\notherwise encountered when using NXT Bluetooth communication. Namely, changing the direction of communication takes around 30 ms.\nThis means that one cycle of requesting motor status, receiving data and then sending motor control update takes at least 60 ms (it\ntakes two changes of communication direction). And this is especially a problem if you want to control multiple motors at the same\ntime (and built-in synchronize mechanism is not good enough for you).\n\u003c/p\u003e\u003cp\u003eOne solution to this problem is that Bluetooth is used only for communication in one direction and an additional program on the NXT\nbrick is checking motor status and correcting possible errors. Of course this also means that information about motor position have\nto be obtained in some other way: by predicting from sent commands, or measuring/probing with regular NXT commands when there is time\nfor that (and latency at that time is not a problem), or by using some external sensors attached to the controlling computer and not\nto the NXT brick (camera tracking system for example).\n\u003c/p\u003e\u003cp\u003eUse NBC (\u003ca\u003ehttp://bricxcc.sourceforge.net/nbc/\u003c/a\u003e) to compile basic NXC code (\u003ccode\u003eremote.nxc\u003c/code\u003e) included with this module into \u003ccode\u003eremote.rxe\u003c/code\u003e\nNXT program (or use already compiled version) and then upload it with \u003ccode\u003enxt-upload\u003c/code\u003e program. This module will then run that program\nand sends it messages to control the NXT brick. Because commands will be executed and controlled directly on the NXT brick less\nlatency and more powerful control is possible.\n\u003c/p\u003e\u003cp\u003eCheck \u003ca\u003eRobotics.NXT.MotorControl\u003c/a\u003e for another (more precise but more complex) approach to message-based control. It would be great to\none day combine \u003ccode\u003eMotorControl\u003c/code\u003e's precision with API (especially interruptability) of \u003ccode\u003eremote.nxc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "module",
        "fct-source": "src/Robotics-NXT-Remote.html",
        "fct-type": "module",
        "title": "Remote"
      },
      "index": {
        "description": "simple message-based control of the NXT brick via remotely executed program The main goal of this approach is to reduce latency otherwise encountered when using NXT Bluetooth communication Namely changing the direction of communication takes around ms This means that one cycle of requesting motor status receiving data and then sending motor control update takes at least ms it takes two changes of communication direction And this is especially problem if you want to control multiple motors at the same time and built-in synchronize mechanism is not good enough for you One solution to this problem is that Bluetooth is used only for communication in one direction and an additional program on the NXT brick is checking motor status and correcting possible errors Of course this also means that information about motor position have to be obtained in some other way by predicting from sent commands or measuring probing with regular NXT commands when there is time for that and latency at that time is not problem or by using some external sensors attached to the controlling computer and not to the NXT brick camera tracking system for example Use NBC http bricxcc.sourceforge.net nbc to compile basic NXC code remote.nxc included with this module into remote.rxe NXT program or use already compiled version and then upload it with nxt-upload program This module will then run that program and sends it messages to control the NXT brick Because commands will be executed and controlled directly on the NXT brick less latency and more powerful control is possible Check Robotics.NXT.MotorControl for another more precise but more complex approach to message-based control It would be great to one day combine MotorControl precision with API especially interruptability of remote.nxc",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "Remote",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#t:RemoteCommand",
      "description": {
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Remote.html#RemoteCommand",
        "fct-type": "data",
        "title": "RemoteCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "RemoteCommand",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#t:RemoteCommandType",
      "description": {
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Remote.html#RemoteCommandType",
        "fct-type": "data",
        "title": "RemoteCommandType"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "RemoteCommandType",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Command Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:MoveFor",
      "description": {
        "fct-descr": "\u003cp\u003eMove specified motors for a given number of degrees at a given speed.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "MoveFor OutputPower TachoLimit",
        "fct-source": "src/Robotics-NXT-Remote.html#RemoteCommandType",
        "fct-type": "function",
        "title": "MoveFor"
      },
      "index": {
        "description": "Move specified motors for given number of degrees at given speed",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "MoveFor",
        "normalized": "",
        "package": "NXT",
        "partial": "Move For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:RemoteCommand",
      "description": {
        "fct-descr": "\u003cp\u003eData type of remote command for specified output port(s).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "RemoteCommand [OutputPort] RemoteCommandType",
        "fct-source": "src/Robotics-NXT-Remote.html#RemoteCommand",
        "fct-type": "function",
        "title": "RemoteCommand"
      },
      "index": {
        "description": "Data type of remote command for specified output port",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "RemoteCommand",
        "normalized": "RemoteCommand[OutputPort]RemoteCommandType",
        "package": "NXT",
        "partial": "Remote Command",
        "signature": "RemoteCommand[OutputPort]RemoteCommandType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:SetTo",
      "description": {
        "fct-descr": "\u003cp\u003eSet specified motors' position to a given offset in degrees from a zero position (it is assumed\n that motors are at zero position at \u003ccode\u003eremote.rxe\u003c/code\u003e program start, you can use \u003ccode\u003e\u003ca\u003eresetMotorPosition\u003c/a\u003e\u003c/code\u003e\n to assure that, but probably not needed as the NXT brick resets things at program start) at a given speed.\n Probably not a good idea to mix \u003ccode\u003e\u003ca\u003eSetTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMoveFor\u003c/a\u003e\u003c/code\u003e on the same motor as \u003ccode\u003e\u003ca\u003eMoveFor\u003c/a\u003e\u003c/code\u003e resets\n position.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "SetTo OutputPower TachoCount",
        "fct-source": "src/Robotics-NXT-Remote.html#RemoteCommandType",
        "fct-type": "function",
        "title": "SetTo"
      },
      "index": {
        "description": "Set specified motors position to given offset in degrees from zero position it is assumed that motors are at zero position at remote.rxe program start you can use resetMotorPosition to assure that but probably not needed as the NXT brick resets things at program start at given speed Probably not good idea to mix SetTo and MoveFor on the same motor as MoveFor resets position",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "SetTo",
        "normalized": "",
        "package": "NXT",
        "partial": "Set To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:sendRemoteCommand",
      "description": {
        "fct-descr": "\u003cp\u003eSends a command to the \u003ccode\u003eremote.rxe\u003c/code\u003e program. Commands can be interrupted (or supplemented, for other motors) immediately by a next command.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "RemoteCommand -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Remote.html#sendRemoteCommand",
        "fct-type": "function",
        "title": "sendRemoteCommand"
      },
      "index": {
        "description": "Sends command to the remote.rxe program Commands can be interrupted or supplemented for other motors immediately by next command",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "sendRemoteCommand",
        "normalized": "RemoteCommand-\u003eNXT()",
        "package": "NXT",
        "partial": "Remote Command",
        "signature": "RemoteCommand-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:startRemoteProgram",
      "description": {
        "fct-descr": "\u003cp\u003eStarts \u003ccode\u003eremote.rxe\u003c/code\u003e program on the NXT brick. Program has to be uploaded/available on the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Remote.html#startRemoteProgram",
        "fct-type": "function",
        "title": "startRemoteProgram"
      },
      "index": {
        "description": "Starts remote.rxe program on the NXT brick Program has to be uploaded available on the NXT brick",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "startRemoteProgram",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Remote Program",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:stopRemoteProgram",
      "description": {
        "fct-descr": "\u003cp\u003eStops current running program on the NXT brick. Probably this means \u003ccode\u003eremote.rxe\u003c/code\u003e program on the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Remote",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Remote.html#stopRemoteProgram",
        "fct-type": "function",
        "title": "stopRemoteProgram"
      },
      "index": {
        "description": "Stops current running program on the NXT brick Probably this means remote.rxe program on the NXT brick",
        "hierarchy": "Robotics NXT Remote",
        "module": "Robotics.NXT.Remote",
        "name": "stopRemoteProgram",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Remote Program",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an interface to \u003ccode\u003eCMPS-Nx\u003c/code\u003e digital compass sensor from \u003ca\u003ehttp://www.mindsensors.com/\u003c/a\u003e according to\n\u003ccode\u003eCMPS-Nx-V20-User-Guide.pdf\u003c/code\u003e documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "module",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html",
        "fct-type": "module",
        "title": "Compass"
      },
      "index": {
        "description": "This module defines an interface to CMPS-Nx digital compass sensor from http www.mindsensors.com according to CMPS-Nx-V20-User-Guide.pdf documentation",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "Compass",
        "normalized": "",
        "package": "NXT",
        "partial": "Compass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#t:Mode",
      "description": {
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "Mode",
        "normalized": "",
        "package": "NXT",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:AutoTrigOff",
      "description": {
        "fct-descr": "\u003cp\u003eAutoTrig (continuous measuring) off.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "AutoTrigOff",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "AutoTrigOff"
      },
      "index": {
        "description": "AutoTrig continuous measuring off",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "AutoTrigOff",
        "normalized": "",
        "package": "NXT",
        "partial": "Auto Trig Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:AutoTrigOn",
      "description": {
        "fct-descr": "\u003cp\u003eAutoTrig (continuous measuring) on.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "AutoTrigOn",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "AutoTrigOn"
      },
      "index": {
        "description": "AutoTrig continuous measuring on",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "AutoTrigOn",
        "normalized": "",
        "package": "NXT",
        "partial": "Auto Trig On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:BeginCalibration",
      "description": {
        "fct-descr": "\u003cp\u003eBegin calibration mode.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "BeginCalibration",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "BeginCalibration"
      },
      "index": {
        "description": "Begin calibration mode",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "BeginCalibration",
        "normalized": "",
        "package": "NXT",
        "partial": "Begin Calibration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:EndCalibration",
      "description": {
        "fct-descr": "\u003cp\u003eEnd calibration mode.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "EndCalibration",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "EndCalibration"
      },
      "index": {
        "description": "End calibration mode",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "EndCalibration",
        "normalized": "",
        "package": "NXT",
        "partial": "End Calibration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:Frequency50",
      "description": {
        "fct-descr": "\u003cp\u003eSampling frequency 50 Hz (Europe standard).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "Frequency50",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "Frequency50"
      },
      "index": {
        "description": "Sampling frequency Hz Europe standard",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "Frequency50",
        "normalized": "",
        "package": "NXT",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:Frequency60",
      "description": {
        "fct-descr": "\u003cp\u003eSampling frequency 60 Hz (USA standard).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "Frequency60",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "Frequency60"
      },
      "index": {
        "description": "Sampling frequency Hz USA standard",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "Frequency60",
        "normalized": "",
        "package": "NXT",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:ResultByte",
      "description": {
        "fct-descr": "\u003cp\u003eResult is a byte mapped to [0-255).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "ResultByte",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "ResultByte"
      },
      "index": {
        "description": "Result is byte mapped to",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "ResultByte",
        "normalized": "",
        "package": "NXT",
        "partial": "Result Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:ResultInteger",
      "description": {
        "fct-descr": "\u003cp\u003eResult is an integer mapped to [0-3600).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "ResultInteger",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
        "fct-type": "function",
        "title": "ResultInteger"
      },
      "index": {
        "description": "Result is an integer mapped to",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "ResultInteger",
        "normalized": "",
        "package": "NXT",
        "partial": "Result Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetDeviceID",
      "description": {
        "fct-descr": "\u003cp\u003eReads device ID string (\u003ccode\u003eCMPS\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#csGetDeviceID",
        "fct-type": "function",
        "title": "csGetDeviceID"
      },
      "index": {
        "description": "Reads device ID string CMPS",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "csGetDeviceID",
        "normalized": "InputPort-\u003eNXT String",
        "package": "NXT",
        "partial": "Get Device ID",
        "signature": "InputPort-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetMeasurement",
      "description": {
        "fct-descr": "\u003cp\u003eGets last measurement. Based on current \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e it return value in [0-255) (\u003ccode\u003e\u003ca\u003eResultByte\u003c/a\u003e\u003c/code\u003e mode) or [0-3600) (\u003ccode\u003e\u003ca\u003eResultInteger\u003c/a\u003e\u003c/code\u003e mode) range.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT Measurement",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#csGetMeasurement",
        "fct-type": "function",
        "title": "csGetMeasurement"
      },
      "index": {
        "description": "Gets last measurement Based on current Mode it return value in ResultByte mode or ResultInteger mode range",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "csGetMeasurement",
        "normalized": "InputPort-\u003eNXT Measurement",
        "package": "NXT",
        "partial": "Get Measurement",
        "signature": "InputPort-\u003eNXT Measurement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetVendorID",
      "description": {
        "fct-descr": "\u003cp\u003eReads vendor ID string (\u003ccode\u003emndsnsrs\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#csGetVendorID",
        "fct-type": "function",
        "title": "csGetVendorID"
      },
      "index": {
        "description": "Reads vendor ID string mndsnsrs",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "csGetVendorID",
        "normalized": "InputPort-\u003eNXT String",
        "package": "NXT",
        "partial": "Get Vendor ID",
        "signature": "InputPort-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetVersion",
      "description": {
        "fct-descr": "\u003cp\u003eReads software version string (\u003ccode\u003eV2.00\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#csGetVersion",
        "fct-type": "function",
        "title": "csGetVersion"
      },
      "index": {
        "description": "Reads software version string V2.00",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "csGetVersion",
        "normalized": "InputPort-\u003eNXT String",
        "package": "NXT",
        "partial": "Get Version",
        "signature": "InputPort-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes sensor on the given input port. It sets \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eResultInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#csInit",
        "fct-type": "function",
        "title": "csInit"
      },
      "index": {
        "description": "Initializes sensor on the given input port It sets Mode to ResultInteger",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "csInit",
        "normalized": "InputPort-\u003eNXT()",
        "package": "NXT",
        "partial": "Init",
        "signature": "InputPort-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csSetMode",
      "description": {
        "fct-descr": "\u003cp\u003eSets current mode of operation.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Compass",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e Mode -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Compass.html#csSetMode",
        "fct-type": "function",
        "title": "csSetMode"
      },
      "index": {
        "description": "Sets current mode of operation",
        "hierarchy": "Robotics NXT Sensor Compass",
        "module": "Robotics.NXT.Sensor.Compass",
        "name": "csSetMode",
        "normalized": "InputPort-\u003eMode-\u003eNXT()",
        "package": "NXT",
        "partial": "Set Mode",
        "signature": "InputPort-\u003eMode-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an interface to a digital ultrasonic sensor of the NXT kit.\n\u003c/p\u003e\u003cp\u003eI2C communication with ultrasonics sensor is described in Lego Mindstorms NXT Hardware Developer Kit,\nAppendix 7 - Ultrasonic sensor I2C communication protocol.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "module",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html",
        "fct-type": "module",
        "title": "Ultrasonic"
      },
      "index": {
        "description": "This module defines an interface to digital ultrasonic sensor of the NXT kit I2C communication with ultrasonics sensor is described in Lego Mindstorms NXT Hardware Developer Kit Appendix Ultrasonic sensor I2C communication protocol",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "Ultrasonic",
        "normalized": "",
        "package": "NXT",
        "partial": "Ultrasonic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:ContinuousInterval",
      "description": {
        "fct-descr": "\u003cp\u003eType of a continuous measurement interval value. This seems to be in the range 1-15.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#ContinuousInterval",
        "fct-type": "type",
        "title": "ContinuousInterval"
      },
      "index": {
        "description": "Type of continuous measurement interval value This seems to be in the range",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "ContinuousInterval",
        "normalized": "",
        "package": "NXT",
        "partial": "Continuous Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:MeasurementNumber",
      "description": {
        "fct-descr": "\u003cp\u003eType of a measurement number. Sensor stores measurements (distances) for the first 8 echoes (numbered 0-7) it receives\nin \u003ccode\u003e\u003ca\u003eSingleShot\u003c/a\u003e\u003c/code\u003e mode. For \u003ccode\u003e\u003ca\u003eContinuousMeasurement\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEventCapture\u003c/a\u003e\u003c/code\u003e modes use first (0) measurement (distance) number.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#MeasurementNumber",
        "fct-type": "type",
        "title": "MeasurementNumber"
      },
      "index": {
        "description": "Type of measurement number Sensor stores measurements distances for the first echoes numbered it receives in SingleShot mode For ContinuousMeasurement and EventCapture modes use first measurement distance number",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "MeasurementNumber",
        "normalized": "",
        "package": "NXT",
        "partial": "Measurement Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:Mode",
      "description": {
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "Mode",
        "normalized": "",
        "package": "NXT",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:ScaleDivisor",
      "description": {
        "fct-descr": "\u003cp\u003eType of a scale divisor value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#ScaleDivisor",
        "fct-type": "type",
        "title": "ScaleDivisor"
      },
      "index": {
        "description": "Type of scale divisor value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "ScaleDivisor",
        "normalized": "",
        "package": "NXT",
        "partial": "Scale Divisor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:ScaleFactor",
      "description": {
        "fct-descr": "\u003cp\u003eType of a scale factor value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#ScaleFactor",
        "fct-type": "type",
        "title": "ScaleFactor"
      },
      "index": {
        "description": "Type of scale factor value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "ScaleFactor",
        "normalized": "",
        "package": "NXT",
        "partial": "Scale Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:Zero",
      "description": {
        "fct-descr": "\u003cp\u003eType of a zero value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Zero",
        "fct-type": "type",
        "title": "Zero"
      },
      "index": {
        "description": "Type of zero value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "Zero",
        "normalized": "",
        "package": "NXT",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:ContinuousMeasurement",
      "description": {
        "fct-descr": "\u003cp\u003eIn this mode the sensor continuously makes new measurement with the specific interval. This is the default mode. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "ContinuousMeasurement",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
        "fct-type": "function",
        "title": "ContinuousMeasurement"
      },
      "index": {
        "description": "In this mode the sensor continuously makes new measurement with the specific interval This is the default mode",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "ContinuousMeasurement",
        "normalized": "",
        "package": "NXT",
        "partial": "Continuous Measurement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:EventCapture",
      "description": {
        "fct-descr": "\u003cp\u003eWithin this mode the sensor will measure whether any other ultrasonic sensors are within the vicinity.\n With this information a program can evaluate when it is best to make a new measurement which will not conflict with other ultrasonic sensors.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "EventCapture",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
        "fct-type": "function",
        "title": "EventCapture"
      },
      "index": {
        "description": "Within this mode the sensor will measure whether any other ultrasonic sensors are within the vicinity With this information program can evaluate when it is best to make new measurement which will not conflict with other ultrasonic sensors",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "EventCapture",
        "normalized": "",
        "package": "NXT",
        "partial": "Event Capture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:Off",
      "description": {
        "fct-descr": "\u003cp\u003eTurns sensor off.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "Off",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
        "fct-type": "function",
        "title": "Off"
      },
      "index": {
        "description": "Turns sensor off",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "Off",
        "normalized": "",
        "package": "NXT",
        "partial": "Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:SingleShot",
      "description": {
        "fct-descr": "\u003cp\u003eIn this mode ultrasonic sensor only makes a new measurement every time this mode is set.\n The sensor measures distances for up to 8 objects (8 first echoes) which can be retrieved with \u003ccode\u003e\u003ca\u003eusGetMeasurement\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "SingleShot",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
        "fct-type": "function",
        "title": "SingleShot"
      },
      "index": {
        "description": "In this mode ultrasonic sensor only makes new measurement every time this mode is set The sensor measures distances for up to objects first echoes which can be retrieved with usGetMeasurement",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "SingleShot",
        "normalized": "",
        "package": "NXT",
        "partial": "Single Shot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:WarmReset",
      "description": {
        "fct-descr": "\u003cp\u003eRequests warm reset.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "WarmReset",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
        "fct-type": "function",
        "title": "WarmReset"
      },
      "index": {
        "description": "Requests warm reset",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "WarmReset",
        "normalized": "",
        "package": "NXT",
        "partial": "Warm Reset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetActualScaleDivisor",
      "description": {
        "fct-descr": "\u003cp\u003eGets current (actual) scale divisor value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ScaleDivisor",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetActualScaleDivisor",
        "fct-type": "function",
        "title": "usGetActualScaleDivisor"
      },
      "index": {
        "description": "Gets current actual scale divisor value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetActualScaleDivisor",
        "normalized": "InputPort-\u003eNXT ScaleDivisor",
        "package": "NXT",
        "partial": "Get Actual Scale Divisor",
        "signature": "InputPort-\u003eNXT ScaleDivisor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetActualScaleFactor",
      "description": {
        "fct-descr": "\u003cp\u003eGets current (actual) scale factor value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ScaleFactor",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetActualScaleFactor",
        "fct-type": "function",
        "title": "usGetActualScaleFactor"
      },
      "index": {
        "description": "Gets current actual scale factor value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetActualScaleFactor",
        "normalized": "InputPort-\u003eNXT ScaleFactor",
        "package": "NXT",
        "partial": "Get Actual Scale Factor",
        "signature": "InputPort-\u003eNXT ScaleFactor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetActualZero",
      "description": {
        "fct-descr": "\u003cp\u003eGets current (actual) zero value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT Zero",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetActualZero",
        "fct-type": "function",
        "title": "usGetActualZero"
      },
      "index": {
        "description": "Gets current actual zero value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetActualZero",
        "normalized": "InputPort-\u003eNXT Zero",
        "package": "NXT",
        "partial": "Get Actual Zero",
        "signature": "InputPort-\u003eNXT Zero"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetAllMeasurements",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function which gets all measurements available in order (closer first).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT [Measurement]",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetAllMeasurements",
        "fct-type": "function",
        "title": "usGetAllMeasurements"
      },
      "index": {
        "description": "Helper function which gets all measurements available in order closer first",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetAllMeasurements",
        "normalized": "InputPort-\u003eNXT[Measurement]",
        "package": "NXT",
        "partial": "Get All Measurements",
        "signature": "InputPort-\u003eNXT[Measurement]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetContinuousInterval",
      "description": {
        "fct-descr": "\u003cp\u003eGets current continuous measurement interval value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ContinuousInterval",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetContinuousInterval",
        "fct-type": "function",
        "title": "usGetContinuousInterval"
      },
      "index": {
        "description": "Gets current continuous measurement interval value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetContinuousInterval",
        "normalized": "InputPort-\u003eNXT ContinuousInterval",
        "package": "NXT",
        "partial": "Get Continuous Interval",
        "signature": "InputPort-\u003eNXT ContinuousInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetDeviceID",
      "description": {
        "fct-descr": "\u003cp\u003eReads device ID string (\u003ccode\u003eSonar\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetDeviceID",
        "fct-type": "function",
        "title": "usGetDeviceID"
      },
      "index": {
        "description": "Reads device ID string Sonar",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetDeviceID",
        "normalized": "InputPort-\u003eNXT String",
        "package": "NXT",
        "partial": "Get Device ID",
        "signature": "InputPort-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetFactoryScaleDivisor",
      "description": {
        "fct-descr": "\u003cp\u003eReads factory scale divisor value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ScaleDivisor",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetFactoryScaleDivisor",
        "fct-type": "function",
        "title": "usGetFactoryScaleDivisor"
      },
      "index": {
        "description": "Reads factory scale divisor value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetFactoryScaleDivisor",
        "normalized": "InputPort-\u003eNXT ScaleDivisor",
        "package": "NXT",
        "partial": "Get Factory Scale Divisor",
        "signature": "InputPort-\u003eNXT ScaleDivisor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetFactoryScaleFactor",
      "description": {
        "fct-descr": "\u003cp\u003eReads factory scale factor value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ScaleFactor",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetFactoryScaleFactor",
        "fct-type": "function",
        "title": "usGetFactoryScaleFactor"
      },
      "index": {
        "description": "Reads factory scale factor value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetFactoryScaleFactor",
        "normalized": "InputPort-\u003eNXT ScaleFactor",
        "package": "NXT",
        "partial": "Get Factory Scale Factor",
        "signature": "InputPort-\u003eNXT ScaleFactor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetFactoryZero",
      "description": {
        "fct-descr": "\u003cp\u003eReads factory zero value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT Zero",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetFactoryZero",
        "fct-type": "function",
        "title": "usGetFactoryZero"
      },
      "index": {
        "description": "Reads factory zero value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetFactoryZero",
        "normalized": "InputPort-\u003eNXT Zero",
        "package": "NXT",
        "partial": "Get Factory Zero",
        "signature": "InputPort-\u003eNXT Zero"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetMeasurement",
      "description": {
        "fct-descr": "\u003cp\u003eGets last measurement for a given measurement number based on the current mode. To retrieve new \u003ccode\u003e\u003ca\u003eSingleShot\u003c/a\u003e\u003c/code\u003e measurements first\nuse \u003ccode\u003e\u003ca\u003eusSetMode\u003c/a\u003e\u003c/code\u003e (with \u003ccode\u003e\u003ca\u003eSingleShot\u003c/a\u003e\u003c/code\u003e as an argument) to send new ultrasonic ping and after approximately 20ms read the results. (Change\nof NXT Bluetooth communication direction takes around 30 ms.) In \u003ccode\u003e\u003ca\u003eContinuousMeasurement\u003c/a\u003e\u003c/code\u003e mode new measurements are made automatically\nbased on the continuous measurement interval value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e MeasurementNumber -\u003e NXT (Maybe Measurement)",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetMeasurement",
        "fct-type": "function",
        "title": "usGetMeasurement"
      },
      "index": {
        "description": "Gets last measurement for given measurement number based on the current mode To retrieve new SingleShot measurements first use usSetMode with SingleShot as an argument to send new ultrasonic ping and after approximately ms read the results Change of NXT Bluetooth communication direction takes around ms In ContinuousMeasurement mode new measurements are made automatically based on the continuous measurement interval value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetMeasurement",
        "normalized": "InputPort-\u003eMeasurementNumber-\u003eNXT(Maybe Measurement)",
        "package": "NXT",
        "partial": "Get Measurement",
        "signature": "InputPort-\u003eMeasurementNumber-\u003eNXT(Maybe Measurement)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetMeasurementUnits",
      "description": {
        "fct-descr": "\u003cp\u003eReads measurement units string (\u003ccode\u003e10E-2m\u003c/code\u003e, a centimeter).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetMeasurementUnits",
        "fct-type": "function",
        "title": "usGetMeasurementUnits"
      },
      "index": {
        "description": "Reads measurement units string E-2m centimeter",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetMeasurementUnits",
        "normalized": "InputPort-\u003eNXT String",
        "package": "NXT",
        "partial": "Get Measurement Units",
        "signature": "InputPort-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetMode",
      "description": {
        "fct-descr": "\u003cp\u003eGets current mode of operation.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT Mode",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetMode",
        "fct-type": "function",
        "title": "usGetMode"
      },
      "index": {
        "description": "Gets current mode of operation",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetMode",
        "normalized": "InputPort-\u003eNXT Mode",
        "package": "NXT",
        "partial": "Get Mode",
        "signature": "InputPort-\u003eNXT Mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetVendorID",
      "description": {
        "fct-descr": "\u003cp\u003eReads vendor ID string (\u003ccode\u003eLEGO\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetVendorID",
        "fct-type": "function",
        "title": "usGetVendorID"
      },
      "index": {
        "description": "Reads vendor ID string LEGO",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetVendorID",
        "normalized": "InputPort-\u003eNXT String",
        "package": "NXT",
        "partial": "Get Vendor ID",
        "signature": "InputPort-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetVersion",
      "description": {
        "fct-descr": "\u003cp\u003eReads software version string (\u003ccode\u003eV1.0\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetVersion",
        "fct-type": "function",
        "title": "usGetVersion"
      },
      "index": {
        "description": "Reads software version string V1.0",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usGetVersion",
        "normalized": "InputPort-\u003eNXT String",
        "package": "NXT",
        "partial": "Get Version",
        "signature": "InputPort-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes sensor on the given input port. Default is \u003ccode\u003e\u003ca\u003eContinuousMeasurement\u003c/a\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usInit",
        "fct-type": "function",
        "title": "usInit"
      },
      "index": {
        "description": "Initializes sensor on the given input port Default is ContinuousMeasurement mode",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usInit",
        "normalized": "InputPort-\u003eNXT()",
        "package": "NXT",
        "partial": "Init",
        "signature": "InputPort-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetActualScaleDivisor",
      "description": {
        "fct-descr": "\u003cp\u003eSets current (actual) scale divisor value. This is used to calibrate sensor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e ScaleDivisor -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetActualScaleDivisor",
        "fct-type": "function",
        "title": "usSetActualScaleDivisor"
      },
      "index": {
        "description": "Sets current actual scale divisor value This is used to calibrate sensor",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usSetActualScaleDivisor",
        "normalized": "InputPort-\u003eScaleDivisor-\u003eNXT()",
        "package": "NXT",
        "partial": "Set Actual Scale Divisor",
        "signature": "InputPort-\u003eScaleDivisor-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetActualScaleFactor",
      "description": {
        "fct-descr": "\u003cp\u003eSets current (actual) scale factor value. This is used to calibrate sensor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e ScaleFactor -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetActualScaleFactor",
        "fct-type": "function",
        "title": "usSetActualScaleFactor"
      },
      "index": {
        "description": "Sets current actual scale factor value This is used to calibrate sensor",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usSetActualScaleFactor",
        "normalized": "InputPort-\u003eScaleFactor-\u003eNXT()",
        "package": "NXT",
        "partial": "Set Actual Scale Factor",
        "signature": "InputPort-\u003eScaleFactor-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetActualZero",
      "description": {
        "fct-descr": "\u003cp\u003eSets current (actual) zero value. This is used to calibrate sensor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e Zero -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetActualZero",
        "fct-type": "function",
        "title": "usSetActualZero"
      },
      "index": {
        "description": "Sets current actual zero value This is used to calibrate sensor",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usSetActualZero",
        "normalized": "InputPort-\u003eZero-\u003eNXT()",
        "package": "NXT",
        "partial": "Set Actual Zero",
        "signature": "InputPort-\u003eZero-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetContinuousInterval",
      "description": {
        "fct-descr": "\u003cp\u003eSets current continuous measurement interval value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e ContinuousInterval -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetContinuousInterval",
        "fct-type": "function",
        "title": "usSetContinuousInterval"
      },
      "index": {
        "description": "Sets current continuous measurement interval value",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usSetContinuousInterval",
        "normalized": "InputPort-\u003eContinuousInterval-\u003eNXT()",
        "package": "NXT",
        "partial": "Set Continuous Interval",
        "signature": "InputPort-\u003eContinuousInterval-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetMode",
      "description": {
        "fct-descr": "\u003cp\u003eSets current mode of operation.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT.Sensor.Ultrasonic",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e Mode -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetMode",
        "fct-type": "function",
        "title": "usSetMode"
      },
      "index": {
        "description": "Sets current mode of operation",
        "hierarchy": "Robotics NXT Sensor Ultrasonic",
        "module": "Robotics.NXT.Sensor.Ultrasonic",
        "name": "usSetMode",
        "normalized": "InputPort-\u003eMode-\u003eNXT()",
        "package": "NXT",
        "partial": "Set Mode",
        "signature": "InputPort-\u003eMode-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an interface over Bluetooth to a NXT brick as defined in Lego Mindstorms NXT Bluetooth Developer Kit,\nAppendix 1 - Communication protocol and Appendix 2 - Direct commands. It also defines some additional functions not available\ndirectly otherwise.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "module",
        "fct-source": "src/Robotics-NXT.html",
        "fct-type": "module",
        "title": "NXT"
      },
      "index": {
        "description": "This module defines an interface over Bluetooth to NXT brick as defined in Lego Mindstorms NXT Bluetooth Developer Kit Appendix Communication protocol and Appendix Direct commands It also defines some additional functions not available directly otherwise",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NXT",
        "normalized": "",
        "package": "NXT",
        "partial": "NXT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:BTAddress",
      "description": {
        "fct-descr": "\u003cp\u003eBluetooth address of the NXT brick in the string format.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#BTAddress",
        "fct-type": "type",
        "title": "BTAddress"
      },
      "index": {
        "description": "Bluetooth address of the NXT brick in the string format",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "BTAddress",
        "normalized": "",
        "package": "NXT",
        "partial": "BTAddress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:BTStrength",
      "description": {
        "fct-descr": "\u003cp\u003eStrength of the Bluetooth signal. Not implemented in current NXT firmware versions. Use \u003ccode\u003ebluetoothRSSI\u003c/code\u003e or \u003ccode\u003ebluetoothLinkQuality\u003c/code\u003e as an alternative.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#BTStrength",
        "fct-type": "type",
        "title": "BTStrength"
      },
      "index": {
        "description": "Strength of the Bluetooth signal Not implemented in current NXT firmware versions Use bluetoothRSSI or bluetoothLinkQuality as an alternative",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "BTStrength",
        "normalized": "",
        "package": "NXT",
        "partial": "BTStrength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:BlockTachoCount",
      "description": {
        "fct-descr": "\u003cp\u003eBlock-relative position counter. Current position relative to the last programmed movement.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#BlockTachoCount",
        "fct-type": "type",
        "title": "BlockTachoCount"
      },
      "index": {
        "description": "Block-relative position counter Current position relative to the last programmed movement",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "BlockTachoCount",
        "normalized": "",
        "package": "NXT",
        "partial": "Block Tacho Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Calibrated",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if calibration file found and used for \u003ccode\u003e\u003ca\u003eCalibratedValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Calibrated",
        "fct-type": "type",
        "title": "Calibrated"
      },
      "index": {
        "description": "True if calibration file found and used for CalibratedValue",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Calibrated",
        "normalized": "",
        "package": "NXT",
        "partial": "Calibrated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:CalibratedValue",
      "description": {
        "fct-descr": "\u003cp\u003eValue scaled according to calibration. Unused in current NXT firmware versions.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#CalibratedValue",
        "fct-type": "type",
        "title": "CalibratedValue"
      },
      "index": {
        "description": "Value scaled according to calibration Unused in current NXT firmware versions",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "CalibratedValue",
        "normalized": "",
        "package": "NXT",
        "partial": "Calibrated Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Command",
      "description": {
        "fct-descr": "\u003cp\u003eI2C device command.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Command",
        "fct-type": "type",
        "title": "Command"
      },
      "index": {
        "description": "I2C device command",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Command",
        "normalized": "",
        "package": "NXT",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:DeviceAddress",
      "description": {
        "fct-descr": "\u003cp\u003eAddress of the device (sensor) on the I2C bus.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#DeviceAddress",
        "fct-type": "type",
        "title": "DeviceAddress"
      },
      "index": {
        "description": "Address of the device sensor on the I2C bus",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "DeviceAddress",
        "normalized": "",
        "package": "NXT",
        "partial": "Device Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:DeviceInfo",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#DeviceInfo",
        "fct-type": "data",
        "title": "DeviceInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "DeviceInfo",
        "normalized": "",
        "package": "NXT",
        "partial": "Device Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Duration",
      "description": {
        "fct-descr": "\u003cp\u003eTime duration (in seconds).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Duration",
        "fct-type": "type",
        "title": "Duration"
      },
      "index": {
        "description": "Time duration in seconds",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Duration",
        "normalized": "",
        "package": "NXT",
        "partial": "Duration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileData",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#FileData",
        "fct-type": "type",
        "title": "FileData"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FileData",
        "normalized": "",
        "package": "NXT",
        "partial": "File Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileHandle",
      "description": {
        "fct-descr": "\u003cp\u003eHandle of the opened file on the NXT brick filesystem.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#FileHandle",
        "fct-type": "type",
        "title": "FileHandle"
      },
      "index": {
        "description": "Handle of the opened file on the NXT brick filesystem",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FileHandle",
        "normalized": "",
        "package": "NXT",
        "partial": "File Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileName",
      "description": {
        "fct-descr": "\u003cp\u003eFilename of the file on the NXT brick filesystem. In 15.3 format.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#FileName",
        "fct-type": "type",
        "title": "FileName"
      },
      "index": {
        "description": "Filename of the file on the NXT brick filesystem In format",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FileName",
        "normalized": "",
        "package": "NXT",
        "partial": "File Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileSize",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the file on the NXT brick filesystem.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#FileSize",
        "fct-type": "type",
        "title": "FileSize"
      },
      "index": {
        "description": "Size of the file on the NXT brick filesystem",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FileSize",
        "normalized": "",
        "package": "NXT",
        "partial": "File Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FirmwareVersion",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#FirmwareVersion",
        "fct-type": "data",
        "title": "FirmwareVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FirmwareVersion",
        "normalized": "",
        "package": "NXT",
        "partial": "Firmware Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FlashFree",
      "description": {
        "fct-descr": "\u003cp\u003eFree flash space on the NXT brick (in bytes).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#FlashFree",
        "fct-type": "type",
        "title": "FlashFree"
      },
      "index": {
        "description": "Free flash space on the NXT brick in bytes",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FlashFree",
        "normalized": "",
        "package": "NXT",
        "partial": "Flash Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Frequency",
      "description": {
        "fct-descr": "\u003cp\u003eFrequency of the played tone (in hertz).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Frequency",
        "fct-type": "type",
        "title": "Frequency"
      },
      "index": {
        "description": "Frequency of the played tone in hertz",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Frequency",
        "normalized": "",
        "package": "NXT",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:IOMapData",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#IOMapData",
        "fct-type": "type",
        "title": "IOMapData"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "IOMapData",
        "normalized": "",
        "package": "NXT",
        "partial": "IOMap Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:IOMapLength",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#IOMapLength",
        "fct-type": "type",
        "title": "IOMapLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "IOMapLength",
        "normalized": "",
        "package": "NXT",
        "partial": "IOMap Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:IOMapOffset",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#IOMapOffset",
        "fct-type": "type",
        "title": "IOMapOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "IOMapOffset",
        "normalized": "",
        "package": "NXT",
        "partial": "IOMap Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Inbox",
      "description": {
        "fct-descr": "\u003cp\u003eInbox on the NXT brick into which the host (computer) queues messages for the program running there.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "data",
        "title": "Inbox"
      },
      "index": {
        "description": "Inbox on the NXT brick into which the host computer queues messages for the program running there",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:InputPort",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#InputPort",
        "fct-type": "data",
        "title": "InputPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "InputPort",
        "normalized": "",
        "package": "NXT",
        "partial": "Input Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:InputValue",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#InputValue",
        "fct-type": "data",
        "title": "InputValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "InputValue",
        "normalized": "",
        "package": "NXT",
        "partial": "Input Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:LoopPlayback",
      "description": {
        "fct-descr": "\u003cp\u003eLoop playback of the sound file?\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#LoopPlayback",
        "fct-type": "type",
        "title": "LoopPlayback"
      },
      "index": {
        "description": "Loop playback of the sound file",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "LoopPlayback",
        "normalized": "",
        "package": "NXT",
        "partial": "Loop Playback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Major",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Major",
        "fct-type": "type",
        "title": "Major"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Major",
        "normalized": "",
        "package": "NXT",
        "partial": "Major",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Measurement",
      "description": {
        "fct-descr": "\u003cp\u003eI2C device measurement value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Measurement",
        "fct-type": "type",
        "title": "Measurement"
      },
      "index": {
        "description": "I2C device measurement value",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Measurement",
        "normalized": "",
        "package": "NXT",
        "partial": "Measurement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Minor",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Minor",
        "fct-type": "type",
        "title": "Minor"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Minor",
        "normalized": "",
        "package": "NXT",
        "partial": "Minor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleHandle",
      "description": {
        "fct-descr": "\u003cp\u003eHandle for traversing of modules. Only one module handle can be opened at a time so be careful to close them when not\n needed anymore.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#ModuleHandle",
        "fct-type": "type",
        "title": "ModuleHandle"
      },
      "index": {
        "description": "Handle for traversing of modules Only one module handle can be opened at time so be careful to close them when not needed anymore",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ModuleHandle",
        "normalized": "",
        "package": "NXT",
        "partial": "Module Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleID",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#ModuleID",
        "fct-type": "type",
        "title": "ModuleID"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ModuleID",
        "normalized": "",
        "package": "NXT",
        "partial": "Module ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleIOMapSize",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#ModuleIOMapSize",
        "fct-type": "type",
        "title": "ModuleIOMapSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ModuleIOMapSize",
        "normalized": "",
        "package": "NXT",
        "partial": "Module IOMap Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleInfo",
      "description": {
        "fct-descr": "\u003cp\u003eType of the IO map module information.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#ModuleInfo",
        "fct-type": "data",
        "title": "ModuleInfo"
      },
      "index": {
        "description": "Type of the IO map module information",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ModuleInfo",
        "normalized": "",
        "package": "NXT",
        "partial": "Module Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleName",
      "description": {
        "fct-descr": "\u003cp\u003eModule name extension is \u003ccode\u003e.mod\u003c/code\u003e. For some functions this can be also a wild card.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#ModuleName",
        "fct-type": "type",
        "title": "ModuleName"
      },
      "index": {
        "description": "Module name extension is mod For some functions this can be also wild card",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ModuleName",
        "normalized": "",
        "package": "NXT",
        "partial": "Module Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleSize",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#ModuleSize",
        "fct-type": "type",
        "title": "ModuleSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ModuleSize",
        "normalized": "",
        "package": "NXT",
        "partial": "Module Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:MotorReset",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#MotorReset",
        "fct-type": "data",
        "title": "MotorReset"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "MotorReset",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Reset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NXT",
      "description": {
        "fct-descr": "\u003cp\u003eMonad which encompasses interface to the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Internals.html#NXT",
        "fct-type": "data",
        "title": "NXT"
      },
      "index": {
        "description": "Monad which encompasses interface to the NXT brick",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NXT",
        "normalized": "",
        "package": "NXT",
        "partial": "NXT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NXTException",
      "description": {
        "fct-descr": "\u003cp\u003eException for NXT interface errors. Currently only one exception is defined which takes textual description as an argument.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Errors.html#NXTException",
        "fct-type": "data",
        "title": "NXTException"
      },
      "index": {
        "description": "Exception for NXT interface errors Currently only one exception is defined which takes textual description as an argument",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NXTException",
        "normalized": "",
        "package": "NXT",
        "partial": "NXTException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NXTInternals",
      "description": {
        "fct-descr": "\u003cp\u003eA token used for exposed internal functions.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Internals.html#NXTInternals",
        "fct-type": "data",
        "title": "NXTInternals"
      },
      "index": {
        "description": "token used for exposed internal functions",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NXTInternals",
        "normalized": "",
        "package": "NXT",
        "partial": "NXTInternals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eName of the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "Name of the NXT brick",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Name",
        "normalized": "",
        "package": "NXT",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NormalizedADValue",
      "description": {
        "fct-descr": "\u003cp\u003eNormalized A/D value. Type dependent. In [0, 1023] range.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#NormalizedADValue",
        "fct-type": "type",
        "title": "NormalizedADValue"
      },
      "index": {
        "description": "Normalized value Type dependent In range",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NormalizedADValue",
        "normalized": "",
        "package": "NXT",
        "partial": "Normalized ADValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputMode",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputMode",
        "fct-type": "data",
        "title": "OutputMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "OutputMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Output Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputPort",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputPort",
        "fct-type": "data",
        "title": "OutputPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "OutputPort",
        "normalized": "",
        "package": "NXT",
        "partial": "Output Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputPower",
      "description": {
        "fct-descr": "\u003cp\u003ePower and direction. In [-100, 100] range.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputPower",
        "fct-type": "type",
        "title": "OutputPower"
      },
      "index": {
        "description": "Power and direction In range",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "OutputPower",
        "normalized": "",
        "package": "NXT",
        "partial": "Output Power",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputState",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputState",
        "fct-type": "data",
        "title": "OutputState"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "OutputState",
        "normalized": "",
        "package": "NXT",
        "partial": "Output State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ProtocolVersion",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#ProtocolVersion",
        "fct-type": "data",
        "title": "ProtocolVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ProtocolVersion",
        "normalized": "",
        "package": "NXT",
        "partial": "Protocol Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RawADValue",
      "description": {
        "fct-descr": "\u003cp\u003eRaw A/D value. Device dependent.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#RawADValue",
        "fct-type": "type",
        "title": "RawADValue"
      },
      "index": {
        "description": "Raw value Device dependent",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RawADValue",
        "normalized": "",
        "package": "NXT",
        "partial": "Raw ADValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RegulationMode",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#RegulationMode",
        "fct-type": "data",
        "title": "RegulationMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RegulationMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Regulation Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RemoteInbox",
      "description": {
        "fct-descr": "\u003cp\u003eOutbox on the NXT brick where the program running there queues messages for the host (computer).\n There is a convention that only \u003ccode\u003e\u003ca\u003eRemoteInbox10\u003c/a\u003e\u003c/code\u003e - \u003ccode\u003e\u003ca\u003eRemoteInbox19\u003c/a\u003e\u003c/code\u003e outboxes are used for this purpose so that lower ones can\n be used for inter-brick communication. But this convention is not really obeyed in practice.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "data",
        "title": "RemoteInbox"
      },
      "index": {
        "description": "Outbox on the NXT brick where the program running there queues messages for the host computer There is convention that only RemoteInbox10 RemoteInbox19 outboxes are used for this purpose so that lower ones can be used for inter-brick communication But this convention is not really obeyed in practice",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RemoveMessage",
      "description": {
        "fct-descr": "\u003cp\u003eShould the message be remove from the queue once received?\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoveMessage",
        "fct-type": "type",
        "title": "RemoveMessage"
      },
      "index": {
        "description": "Should the message be remove from the queue once received",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoveMessage",
        "normalized": "",
        "package": "NXT",
        "partial": "Remove Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RotationCount",
      "description": {
        "fct-descr": "\u003cp\u003eProgram-relative position counter. Current position relative to the last reset of the rotation sensor for this motor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#RotationCount",
        "fct-type": "type",
        "title": "RotationCount"
      },
      "index": {
        "description": "Program-relative position counter Current position relative to the last reset of the rotation sensor for this motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RotationCount",
        "normalized": "",
        "package": "NXT",
        "partial": "Rotation Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RunState",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#RunState",
        "fct-type": "data",
        "title": "RunState"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RunState",
        "normalized": "",
        "package": "NXT",
        "partial": "Run State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RxData",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#RxData",
        "fct-type": "type",
        "title": "RxData"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RxData",
        "normalized": "",
        "package": "NXT",
        "partial": "Rx Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RxDataLength",
      "description": {
        "fct-descr": "\u003cp\u003eAt most 16 data bytes can be read at a time.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#RxDataLength",
        "fct-type": "type",
        "title": "RxDataLength"
      },
      "index": {
        "description": "At most data bytes can be read at time",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RxDataLength",
        "normalized": "",
        "package": "NXT",
        "partial": "Rx Data Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ScaledValue",
      "description": {
        "fct-descr": "\u003cp\u003eScaled value. Mode dependent. In percent.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#ScaledValue",
        "fct-type": "type",
        "title": "ScaledValue"
      },
      "index": {
        "description": "Scaled value Mode dependent In percent",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ScaledValue",
        "normalized": "",
        "package": "NXT",
        "partial": "Scaled Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:SensorMode",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "data",
        "title": "SensorMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "SensorMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Sensor Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:SensorType",
      "description": {
        "fct-descr": "\u003cp\u003eType of the sensor currently attached to \u003ccode\u003e\u003ca\u003eInputPort\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNoSensor\u003c/a\u003e\u003c/code\u003e turns off the sensor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "data",
        "title": "SensorType"
      },
      "index": {
        "description": "Type of the sensor currently attached to InputPort NoSensor turns off the sensor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "SensorType",
        "normalized": "",
        "package": "NXT",
        "partial": "Sensor Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TachoCount",
      "description": {
        "fct-descr": "\u003cp\u003eInternal (absolute) tacho counter. Number since the last reset of the motor tacho counter.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#TachoCount",
        "fct-type": "type",
        "title": "TachoCount"
      },
      "index": {
        "description": "Internal absolute tacho counter Number since the last reset of the motor tacho counter",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "TachoCount",
        "normalized": "",
        "package": "NXT",
        "partial": "Tacho Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TachoLimit",
      "description": {
        "fct-descr": "\u003cp\u003eTarget tacho limit for a motor movement. 0 means no limit. It is an unsigned value (you select direction of motor movement with\n sign of \u003ccode\u003e\u003ca\u003eOutputPower\u003c/a\u003e\u003c/code\u003e value).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#TachoLimit",
        "fct-type": "type",
        "title": "TachoLimit"
      },
      "index": {
        "description": "Target tacho limit for motor movement means no limit It is an unsigned value you select direction of motor movement with sign of OutputPower value",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "TachoLimit",
        "normalized": "",
        "package": "NXT",
        "partial": "Tacho Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TimeoutException",
      "description": {
        "fct-descr": "\u003cp\u003eTimeout exception for NXT IO operations.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#TimeoutException",
        "fct-type": "data",
        "title": "TimeoutException"
      },
      "index": {
        "description": "Timeout exception for NXT IO operations",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "TimeoutException",
        "normalized": "",
        "package": "NXT",
        "partial": "Timeout Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TurnRatio",
      "description": {
        "fct-descr": "\u003cp\u003eIn regulated synced mode the difference between two motors. In [-100, 100] range.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#TurnRatio",
        "fct-type": "type",
        "title": "TurnRatio"
      },
      "index": {
        "description": "In regulated synced mode the difference between two motors In range",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "TurnRatio",
        "normalized": "",
        "package": "NXT",
        "partial": "Turn Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TxData",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#TxData",
        "fct-type": "type",
        "title": "TxData"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "TxData",
        "normalized": "",
        "package": "NXT",
        "partial": "Tx Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Valid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if new data value should be seen as valid data.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Valid",
        "fct-type": "type",
        "title": "Valid"
      },
      "index": {
        "description": "True if new data value should be seen as valid data",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Valid",
        "normalized": "",
        "package": "NXT",
        "partial": "Valid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eThe format of version is \"major.minor\". To format it use \u003ccode\u003e\u003ccode\u003eprintf\u003c/code\u003e \"%d.%02d\" major minor\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "data",
        "fct-source": "src/Robotics-NXT-Externals.html#Version",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "The format of version is major.minor To format it use printf major minor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Version",
        "normalized": "",
        "package": "NXT",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Voltage",
      "description": {
        "fct-descr": "\u003cp\u003eVoltage value (in volts).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "type",
        "fct-source": "src/Robotics-NXT-Externals.html#Voltage",
        "fct-type": "type",
        "title": "Voltage"
      },
      "index": {
        "description": "Voltage value in volts",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Voltage",
        "normalized": "",
        "package": "NXT",
        "partial": "Voltage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:A",
      "description": {
        "fct-descr": "\u003cp\u003eOutput port (motor) A.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "A",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputPort",
        "fct-type": "function",
        "title": "A"
      },
      "index": {
        "description": "Output port motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "A",
        "normalized": "",
        "package": "NXT",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:AbsolutePosition",
      "description": {
        "fct-descr": "\u003cp\u003eResets program-relative position counter (\u003ccode\u003e\u003ca\u003eRotationCount\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "AbsolutePosition",
        "fct-source": "src/Robotics-NXT-Externals.html#MotorReset",
        "fct-type": "function",
        "title": "AbsolutePosition"
      },
      "index": {
        "description": "Resets program-relative position counter RotationCount",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "AbsolutePosition",
        "normalized": "",
        "package": "NXT",
        "partial": "Absolute Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Angle",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Angle",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "Angle"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Angle",
        "normalized": "",
        "package": "NXT",
        "partial": "Angle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:AngleStepsMode",
      "description": {
        "fct-descr": "\u003cp\u003eReports scaled value as count of ticks on RCX-style rotation sensor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "AngleStepsMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "AngleStepsMode"
      },
      "index": {
        "description": "Reports scaled value as count of ticks on RCX-style rotation sensor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "AngleStepsMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Angle Steps Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:B",
      "description": {
        "fct-descr": "\u003cp\u003eOutput port (motor) B.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "B",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputPort",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "Output port motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "B",
        "normalized": "",
        "package": "NXT",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:BooleanMode",
      "description": {
        "fct-descr": "\u003cp\u003eReports scaled value as 1 true or 0 false, false if raw value \u003e 55% of total range, true if \u003c 45%.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "BooleanMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "BooleanMode"
      },
      "index": {
        "description": "Reports scaled value as true or false false if raw value of total range true if",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "BooleanMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Boolean Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Brake",
      "description": {
        "fct-descr": "\u003cp\u003eVoltage is not allowed to float between PWM pulses, improves accuracy, uses more power.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Brake",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputMode",
        "fct-type": "function",
        "title": "Brake"
      },
      "index": {
        "description": "Voltage is not allowed to float between PWM pulses improves accuracy uses more power",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Brake",
        "normalized": "",
        "package": "NXT",
        "partial": "Brake",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:C",
      "description": {
        "fct-descr": "\u003cp\u003eOutput port (motor) C.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "C",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputPort",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "Output port motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "C",
        "normalized": "",
        "package": "NXT",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:CelsiusMode",
      "description": {
        "fct-descr": "\u003cp\u003eFor reporting temperature in celsius.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "CelsiusMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "CelsiusMode"
      },
      "index": {
        "description": "For reporting temperature in celsius",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "CelsiusMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Celsius Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Custom",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Custom",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Custom",
        "normalized": "",
        "package": "NXT",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:DeviceInfo",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "DeviceInfo Name BTAddress BTStrength FlashFree",
        "fct-source": "src/Robotics-NXT-Externals.html#DeviceInfo",
        "fct-type": "function",
        "title": "DeviceInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "DeviceInfo",
        "normalized": "",
        "package": "NXT",
        "partial": "Device Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:FahrenheitMode",
      "description": {
        "fct-descr": "\u003cp\u003eFor reporting temperature in fahrenheit.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FahrenheitMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "FahrenheitMode"
      },
      "index": {
        "description": "For reporting temperature in fahrenheit",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FahrenheitMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Fahrenheit Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:FirmwareVersion",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FirmwareVersion Major Minor",
        "fct-source": "src/Robotics-NXT-Externals.html#FirmwareVersion",
        "fct-type": "function",
        "title": "FirmwareVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "FirmwareVersion",
        "normalized": "",
        "package": "NXT",
        "partial": "Firmware Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Four",
      "description": {
        "fct-descr": "\u003cp\u003eInput port (sensor) 4.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Four",
        "fct-source": "src/Robotics-NXT-Externals.html#InputPort",
        "fct-type": "function",
        "title": "Four"
      },
      "index": {
        "description": "Input port sensor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Four",
        "normalized": "",
        "package": "NXT",
        "partial": "Four",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox0",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox0",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox0"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox0",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox1",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox1",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox1"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox1",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox2",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox2",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox2"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox2",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox3",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox3",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox3"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox3",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox4",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox4",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox4"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox4",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox5",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox5",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox5"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox5",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox6",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox6",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox6"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox6",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox7",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox7",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox7"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox7",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox8",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox8",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox8"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox8",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox9",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox9",
        "fct-source": "src/Robotics-NXT-Externals.html#Inbox",
        "fct-type": "function",
        "title": "Inbox9"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Inbox9",
        "normalized": "",
        "package": "NXT",
        "partial": "Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:InputValue",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputValue InputPort Valid Calibrated SensorType SensorMode RawADValue NormalizedADValue ScaledValue CalibratedValue",
        "fct-source": "src/Robotics-NXT-Externals.html#InputValue",
        "fct-type": "function",
        "title": "InputValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "InputValue",
        "normalized": "",
        "package": "NXT",
        "partial": "Input Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:InternalPosition",
      "description": {
        "fct-descr": "\u003cp\u003eResets internal movement counters (also \u003ccode\u003e\u003ca\u003eTachoCount\u003c/a\u003e\u003c/code\u003e), cancels current goal and resets internal error-correction system.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InternalPosition",
        "fct-source": "src/Robotics-NXT-Externals.html#MotorReset",
        "fct-type": "function",
        "title": "InternalPosition"
      },
      "index": {
        "description": "Resets internal movement counters also TachoCount cancels current goal and resets internal error-correction system",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "InternalPosition",
        "normalized": "",
        "package": "NXT",
        "partial": "Internal Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:LightActive",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "LightActive",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "LightActive"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "LightActive",
        "normalized": "",
        "package": "NXT",
        "partial": "Light Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:LightInactive",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "LightInactive",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "LightInactive"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "LightInactive",
        "normalized": "",
        "package": "NXT",
        "partial": "Light Inactive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Lowspeed",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Lowspeed",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "Lowspeed"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Lowspeed",
        "normalized": "",
        "package": "NXT",
        "partial": "Lowspeed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Lowspeed9V",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Lowspeed9V",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "Lowspeed9V"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Lowspeed9V",
        "normalized": "",
        "package": "NXT",
        "partial": "Lowspeed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ModuleInfo",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleInfo ModuleName ModuleID ModuleSize ModuleIOMapSize",
        "fct-source": "src/Robotics-NXT-Externals.html#ModuleInfo",
        "fct-type": "function",
        "title": "ModuleInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ModuleInfo",
        "normalized": "",
        "package": "NXT",
        "partial": "Module Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorOn",
      "description": {
        "fct-descr": "\u003cp\u003eEnables PWM power according to speed.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "MotorOn",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputMode",
        "fct-type": "function",
        "title": "MotorOn"
      },
      "index": {
        "description": "Enables PWM power according to speed",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "MotorOn",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateHold",
      "description": {
        "fct-descr": "\u003cp\u003eHold at the current position.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "MotorRunStateHold",
        "fct-source": "src/Robotics-NXT-Externals.html#RunState",
        "fct-type": "function",
        "title": "MotorRunStateHold"
      },
      "index": {
        "description": "Hold at the current position",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "MotorRunStateHold",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Run State Hold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateIdle",
      "description": {
        "fct-descr": "\u003cp\u003eDisables power to motor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "MotorRunStateIdle",
        "fct-source": "src/Robotics-NXT-Externals.html#RunState",
        "fct-type": "function",
        "title": "MotorRunStateIdle"
      },
      "index": {
        "description": "Disables power to motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "MotorRunStateIdle",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Run State Idle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateRampDown",
      "description": {
        "fct-descr": "\u003cp\u003eRamping to a new speed set-point that is less than the current speed set-point.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "MotorRunStateRampDown",
        "fct-source": "src/Robotics-NXT-Externals.html#RunState",
        "fct-type": "function",
        "title": "MotorRunStateRampDown"
      },
      "index": {
        "description": "Ramping to new speed set-point that is less than the current speed set-point",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "MotorRunStateRampDown",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Run State Ramp Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateRampUp",
      "description": {
        "fct-descr": "\u003cp\u003eRamping to a new speed set-point that is greater than the current speed set-point.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "MotorRunStateRampUp",
        "fct-source": "src/Robotics-NXT-Externals.html#RunState",
        "fct-type": "function",
        "title": "MotorRunStateRampUp"
      },
      "index": {
        "description": "Ramping to new speed set-point that is greater than the current speed set-point",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "MotorRunStateRampUp",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Run State Ramp Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateRunning",
      "description": {
        "fct-descr": "\u003cp\u003eEnables power to motor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "MotorRunStateRunning",
        "fct-source": "src/Robotics-NXT-Externals.html#RunState",
        "fct-type": "function",
        "title": "MotorRunStateRunning"
      },
      "index": {
        "description": "Enables power to motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "MotorRunStateRunning",
        "normalized": "",
        "package": "NXT",
        "partial": "Motor Run State Running",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:NXTException",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXTException String",
        "fct-source": "src/Robotics-NXT-Errors.html#NXTException",
        "fct-type": "function",
        "title": "NXTException"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NXTException",
        "normalized": "",
        "package": "NXT",
        "partial": "NXTException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:NoOfSensorTypes",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NoOfSensorTypes",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "NoOfSensorTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NoOfSensorTypes",
        "normalized": "",
        "package": "NXT",
        "partial": "No Of Sensor Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:NoSensor",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NoSensor",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "NoSensor"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "NoSensor",
        "normalized": "",
        "package": "NXT",
        "partial": "No Sensor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:One",
      "description": {
        "fct-descr": "\u003cp\u003eInput port (sensor) 1.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "One",
        "fct-source": "src/Robotics-NXT-Externals.html#InputPort",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "Input port sensor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "One",
        "normalized": "",
        "package": "NXT",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:OutputState",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "OutputState OutputPort OutputPower [OutputMode] RegulationMode TurnRatio RunState TachoLimit TachoCount BlockTachoCount RotationCount",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputState",
        "fct-type": "function",
        "title": "OutputState"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "OutputState",
        "normalized": "OutputState OutputPort OutputPower[OutputMode]RegulationMode TurnRatio RunState TachoLimit TachoCount BlockTachoCount RotationCount",
        "package": "NXT",
        "partial": "Output State",
        "signature": "OutputState OutputPort OutputPower[OutputMode]RegulationMode TurnRatio RunState TachoLimit TachoCount BlockTachoCount RotationCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:PctFullScaleMode",
      "description": {
        "fct-descr": "\u003cp\u003eReports scaled value as % of full scale reading for a configured sensor type.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "PctFullScaleMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "PctFullScaleMode"
      },
      "index": {
        "description": "Reports scaled value as of full scale reading for configured sensor type",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "PctFullScaleMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Pct Full Scale Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:PeriodCounterMode",
      "description": {
        "fct-descr": "\u003cp\u003eReports scaled value as number of transitions from false to true, then back to false.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "PeriodCounterMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "PeriodCounterMode"
      },
      "index": {
        "description": "Reports scaled value as number of transitions from false to true then back to false",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "PeriodCounterMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Period Counter Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ProtocolVersion",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ProtocolVersion Major Minor",
        "fct-source": "src/Robotics-NXT-Externals.html#ProtocolVersion",
        "fct-type": "function",
        "title": "ProtocolVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ProtocolVersion",
        "normalized": "",
        "package": "NXT",
        "partial": "Protocol Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RawMode",
      "description": {
        "fct-descr": "\u003cp\u003eReports scaled value equal to the raw value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RawMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "RawMode"
      },
      "index": {
        "description": "Reports scaled value equal to the raw value",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RawMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Raw Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Reflection",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Reflection",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "Reflection"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Reflection",
        "normalized": "",
        "package": "NXT",
        "partial": "Reflection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Regulated",
      "description": {
        "fct-descr": "\u003cp\u003eRequired in conjunction with output regulation mode setting.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Regulated",
        "fct-source": "src/Robotics-NXT-Externals.html#OutputMode",
        "fct-type": "function",
        "title": "Regulated"
      },
      "index": {
        "description": "Required in conjunction with output regulation mode setting",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Regulated",
        "normalized": "",
        "package": "NXT",
        "partial": "Regulated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RegulationModeIdle",
      "description": {
        "fct-descr": "\u003cp\u003eDisables regulation.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RegulationModeIdle",
        "fct-source": "src/Robotics-NXT-Externals.html#RegulationMode",
        "fct-type": "function",
        "title": "RegulationModeIdle"
      },
      "index": {
        "description": "Disables regulation",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RegulationModeIdle",
        "normalized": "",
        "package": "NXT",
        "partial": "Regulation Mode Idle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RegulationModeMotorSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eAuto adjust PWM duty cycle if motor is affected by physical load. Really works only if there is\n room for that (not that motor is already running at the maximum power).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RegulationModeMotorSpeed",
        "fct-source": "src/Robotics-NXT-Externals.html#RegulationMode",
        "fct-type": "function",
        "title": "RegulationModeMotorSpeed"
      },
      "index": {
        "description": "Auto adjust PWM duty cycle if motor is affected by physical load Really works only if there is room for that not that motor is already running at the maximum power",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RegulationModeMotorSpeed",
        "normalized": "",
        "package": "NXT",
        "partial": "Regulation Mode Motor Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RegulationModeMotorSync",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to keep rotation in sync with another motor that has this set. Also involves turn ratio.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RegulationModeMotorSync",
        "fct-source": "src/Robotics-NXT-Externals.html#RegulationMode",
        "fct-type": "function",
        "title": "RegulationModeMotorSync"
      },
      "index": {
        "description": "Attempts to keep rotation in sync with another motor that has this set Also involves turn ratio",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RegulationModeMotorSync",
        "normalized": "",
        "package": "NXT",
        "partial": "Regulation Mode Motor Sync",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RelativePosition",
      "description": {
        "fct-descr": "\u003cp\u003eResets block-relative position counter (\u003ccode\u003e\u003ca\u003eBlockTachoCount\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RelativePosition",
        "fct-source": "src/Robotics-NXT-Externals.html#MotorReset",
        "fct-type": "function",
        "title": "RelativePosition"
      },
      "index": {
        "description": "Resets block-relative position counter BlockTachoCount",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RelativePosition",
        "normalized": "",
        "package": "NXT",
        "partial": "Relative Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox0",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox0",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox0"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox0",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox1",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox1",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox1"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox1",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox10",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox10",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox10"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox10",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox11",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox11",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox11"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox11",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox12",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox12",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox12"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox12",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox13",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox13",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox13"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox13",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox14",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox14",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox14"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox14",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox15",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox15",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox15"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox15",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox16",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox16",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox16"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox16",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox17",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox17",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox17"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox17",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox18",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox18",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox18"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox18",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox19",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox19",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox19"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox19",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox2",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox2",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox2"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox2",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox3",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox3",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox3"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox3",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox4",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox4",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox4"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox4",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox5",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox5",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox5"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox5",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox6",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox6",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox6"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox6",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox7",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox7",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox7"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox7",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox8",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox8",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox8"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox8",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox9",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox9",
        "fct-source": "src/Robotics-NXT-Externals.html#RemoteInbox",
        "fct-type": "function",
        "title": "RemoteInbox9"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "RemoteInbox9",
        "normalized": "",
        "package": "NXT",
        "partial": "Remote Inbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:SoundDB",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "SoundDB",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "SoundDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "SoundDB",
        "normalized": "",
        "package": "NXT",
        "partial": "Sound DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:SoundDBA",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "SoundDBA",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "SoundDBA"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "SoundDBA",
        "normalized": "",
        "package": "NXT",
        "partial": "Sound DBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Switch",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Switch",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "Switch"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Switch",
        "normalized": "",
        "package": "NXT",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Temperature",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Temperature",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorType",
        "fct-type": "function",
        "title": "Temperature"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Temperature",
        "normalized": "",
        "package": "NXT",
        "partial": "Temperature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Three",
      "description": {
        "fct-descr": "\u003cp\u003eInput port (sensor) 3.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Three",
        "fct-source": "src/Robotics-NXT-Externals.html#InputPort",
        "fct-type": "function",
        "title": "Three"
      },
      "index": {
        "description": "Input port sensor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Three",
        "normalized": "",
        "package": "NXT",
        "partial": "Three",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:TimoutException",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "TimoutException",
        "fct-source": "src/Robotics-NXT-Externals.html#TimeoutException",
        "fct-type": "function",
        "title": "TimoutException"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "TimoutException",
        "normalized": "",
        "package": "NXT",
        "partial": "Timout Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:TransitionCntMode",
      "description": {
        "fct-descr": "\u003cp\u003eReports scaled value as number of transitions between true and false.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "TransitionCntMode",
        "fct-source": "src/Robotics-NXT-Externals.html#SensorMode",
        "fct-type": "function",
        "title": "TransitionCntMode"
      },
      "index": {
        "description": "Reports scaled value as number of transitions between true and false",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "TransitionCntMode",
        "normalized": "",
        "package": "NXT",
        "partial": "Transition Cnt Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Two",
      "description": {
        "fct-descr": "\u003cp\u003eInput port (sensor) 2.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Two",
        "fct-source": "src/Robotics-NXT-Externals.html#InputPort",
        "fct-type": "function",
        "title": "Two"
      },
      "index": {
        "description": "Input port sensor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Two",
        "normalized": "",
        "package": "NXT",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Version",
      "description": {
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Version FirmwareVersion ProtocolVersion",
        "fct-source": "src/Robotics-NXT-Externals.html#Version",
        "fct-type": "function",
        "title": "Version"
      },
      "index": {
        "description": "",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "Version",
        "normalized": "",
        "package": "NXT",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:bluetoothLinkQuality",
      "description": {
        "fct-descr": "\u003cp\u003eGets link quality of the Bluetooth connection to the NXT brick.\n\u003c/p\u003e\u003cp\u003eCurrently supported only on Linux. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT Int",
        "fct-source": "src/Robotics-NXT-BluetoothUtils.html#bluetoothLinkQuality",
        "fct-type": "function",
        "title": "bluetoothLinkQuality"
      },
      "index": {
        "description": "Gets link quality of the Bluetooth connection to the NXT brick Currently supported only on Linux It throws NXTException otherwise",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "bluetoothLinkQuality",
        "normalized": "",
        "package": "NXT",
        "partial": "Link Quality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:bluetoothRSSI",
      "description": {
        "fct-descr": "\u003cp\u003eGets received signal strength indicator (RSSI) of the Bluetooth connection to the NXT brick.\n\u003c/p\u003e\u003cp\u003eCurrently supported only on Linux. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT Int",
        "fct-source": "src/Robotics-NXT-BluetoothUtils.html#bluetoothRSSI",
        "fct-type": "function",
        "title": "bluetoothRSSI"
      },
      "index": {
        "description": "Gets received signal strength indicator RSSI of the Bluetooth connection to the NXT brick Currently supported only on Linux It throws NXTException otherwise",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "bluetoothRSSI",
        "normalized": "",
        "package": "NXT",
        "partial": "RSSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a file.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileHandle -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Closes file",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "close",
        "normalized": "FileHandle-\u003eNXT()",
        "package": "NXT",
        "partial": "",
        "signature": "FileHandle-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:closeConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileHandle -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#closeConfirm",
        "fct-type": "function",
        "title": "closeConfirm"
      },
      "index": {
        "description": "Same as close but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "closeConfirm",
        "normalized": "FileHandle-\u003eNXT()",
        "package": "NXT",
        "partial": "Confirm",
        "signature": "FileHandle-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:closeModuleHandle",
      "description": {
        "fct-descr": "\u003cp\u003eCloses module handle of previously requested module information.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleHandle -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#closeModuleHandle",
        "fct-type": "function",
        "title": "closeModuleHandle"
      },
      "index": {
        "description": "Closes module handle of previously requested module information",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "closeModuleHandle",
        "normalized": "ModuleHandle-\u003eNXT()",
        "package": "NXT",
        "partial": "Module Handle",
        "signature": "ModuleHandle-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:closeModuleHandleConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecloseModuleHandle\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an\nerror it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleHandle -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#closeModuleHandleConfirm",
        "fct-type": "function",
        "title": "closeModuleHandleConfirm"
      },
      "index": {
        "description": "Same as closeModuleHandle but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "closeModuleHandleConfirm",
        "normalized": "ModuleHandle-\u003eNXT()",
        "package": "NXT",
        "partial": "Module Handle Confirm",
        "signature": "ModuleHandle-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:defaultDevice",
      "description": {
        "fct-descr": "\u003cp\u003eDefault Bluetooth serial device filename for current operating system. Currently always \u003ccode\u003e/dev/rfcomm0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FilePath",
        "fct-source": "src/Robotics-NXT-Protocol.html#defaultDevice",
        "fct-type": "function",
        "title": "defaultDevice"
      },
      "index": {
        "description": "Default Bluetooth serial device filename for current operating system Currently always dev rfcomm0",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "defaultDevice",
        "normalized": "",
        "package": "NXT",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a given file.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Deletes given file",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "delete",
        "normalized": "FileName-\u003eNXT()",
        "package": "NXT",
        "partial": "",
        "signature": "FileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:deleteConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it throws\na \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#deleteConfirm",
        "fct-type": "function",
        "title": "deleteConfirm"
      },
      "index": {
        "description": "Same as delete but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "deleteConfirm",
        "normalized": "FileName-\u003eNXT()",
        "package": "NXT",
        "partial": "Confirm",
        "signature": "FileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:deleteExisting",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edeleteConfirm\u003c/a\u003e\u003c/code\u003e but it also requires that the file exists before deletion. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#deleteExisting",
        "fct-type": "function",
        "title": "deleteExisting"
      },
      "index": {
        "description": "Same as deleteConfirm but it also requires that the file exists before deletion It throws NXTException otherwise",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "deleteExisting",
        "normalized": "FileName-\u003eNXT()",
        "package": "NXT",
        "partial": "Existing",
        "signature": "FileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ensureMessageRead",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emessageWrite\u003c/a\u003e\u003c/code\u003e but if there is no message in a given remote inbox queue it retries until there is.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox -\u003e RemoveMessage -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Protocol.html#ensureMessageRead",
        "fct-type": "function",
        "title": "ensureMessageRead"
      },
      "index": {
        "description": "Same as messageWrite but if there is no message in given remote inbox queue it retries until there is",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ensureMessageRead",
        "normalized": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String",
        "package": "NXT",
        "partial": "Message Read",
        "signature": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ensureStartProgram",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function which first ensures that no other program is running and then ensures that a given program is really running before\nit returns.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#ensureStartProgram",
        "fct-type": "function",
        "title": "ensureStartProgram"
      },
      "index": {
        "description": "Helper function which first ensures that no other program is running and then ensures that given program is really running before it returns",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "ensureStartProgram",
        "normalized": "FileName-\u003eNXT()",
        "package": "NXT",
        "partial": "Start Program",
        "signature": "FileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:execNXT",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a computation in a context of a given \u003ccode\u003e\u003ca\u003eNXTInternals\u003c/a\u003e\u003c/code\u003e token, returning just a new token.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT a -\u003e NXTInternals -\u003e IO NXTInternals",
        "fct-source": "src/Robotics-NXT-Internals.html#execNXT",
        "fct-type": "function",
        "title": "execNXT"
      },
      "index": {
        "description": "Runs computation in context of given NXTInternals token returning just new token",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "execNXT",
        "normalized": "NXT a-\u003eNXTInternals-\u003eIO NXTInternals",
        "package": "NXT",
        "partial": "NXT",
        "signature": "NXT a-\u003eNXTInternals-\u003eIO NXTInternals"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getBatteryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eGets current battery level (in volts).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT Voltage",
        "fct-source": "src/Robotics-NXT-Protocol.html#getBatteryLevel",
        "fct-type": "function",
        "title": "getBatteryLevel"
      },
      "index": {
        "description": "Gets current battery level in volts",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getBatteryLevel",
        "normalized": "",
        "package": "NXT",
        "partial": "Battery Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getCurrentProgramName",
      "description": {
        "fct-descr": "\u003cp\u003eGets the name of the currently running program, if any.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT (Maybe String)",
        "fct-source": "src/Robotics-NXT-Protocol.html#getCurrentProgramName",
        "fct-type": "function",
        "title": "getCurrentProgramName"
      },
      "index": {
        "description": "Gets the name of the currently running program if any",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getCurrentProgramName",
        "normalized": "",
        "package": "NXT",
        "partial": "Current Program Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getDeviceInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGets device (the NXT brick) information: name, Bluetooth 48 bit address in the string format, strength of Bluetooth signal (not implemented in\ncurrent NXT firmware versions, use \u003ccode\u003ebluetoothRSSI\u003c/code\u003e or \u003ccode\u003ebluetoothLinkQuality\u003c/code\u003e as an alternative), free space on flash.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT DeviceInfo",
        "fct-source": "src/Robotics-NXT-Protocol.html#getDeviceInfo",
        "fct-type": "function",
        "title": "getDeviceInfo"
      },
      "index": {
        "description": "Gets device the NXT brick information name Bluetooth bit address in the string format strength of Bluetooth signal not implemented in current NXT firmware versions use bluetoothRSSI or bluetoothLinkQuality as an alternative free space on flash",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getDeviceInfo",
        "normalized": "",
        "package": "NXT",
        "partial": "Device Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getInputValues",
      "description": {
        "fct-descr": "\u003cp\u003eGets input port (sensor) values. This is the main function for reading a sensor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT InputValue",
        "fct-source": "src/Robotics-NXT-Protocol.html#getInputValues",
        "fct-type": "function",
        "title": "getInputValues"
      },
      "index": {
        "description": "Gets input port sensor values This is the main function for reading sensor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getInputValues",
        "normalized": "InputPort-\u003eNXT InputValue",
        "package": "NXT",
        "partial": "Input Values",
        "signature": "InputPort-\u003eNXT InputValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getLastKeepAliveTime",
      "description": {
        "fct-descr": "\u003cp\u003eWhen was a last keep alive packet send?\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT (Maybe POSIXTime)",
        "fct-source": "src/Robotics-NXT-Protocol.html#getLastKeepAliveTime",
        "fct-type": "function",
        "title": "getLastKeepAliveTime"
      },
      "index": {
        "description": "When was last keep alive packet send",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getLastKeepAliveTime",
        "normalized": "",
        "package": "NXT",
        "partial": "Last Keep Alive Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getModuleID",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to get an ID of a module matching a given module name. Each module encompass some firmware functionality.\nFunction caches IDs so it hopefully retrieves it from a cache of previous requests.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleName -\u003e NXT (Maybe ModuleID)",
        "fct-source": "src/Robotics-NXT-Protocol.html#getModuleID",
        "fct-type": "function",
        "title": "getModuleID"
      },
      "index": {
        "description": "Helper function to get an ID of module matching given module name Each module encompass some firmware functionality Function caches IDs so it hopefully retrieves it from cache of previous requests",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getModuleID",
        "normalized": "ModuleName-\u003eNXT(Maybe ModuleID)",
        "package": "NXT",
        "partial": "Module ID",
        "signature": "ModuleName-\u003eNXT(Maybe ModuleID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getOutputState",
      "description": {
        "fct-descr": "\u003cp\u003eGets output port (motor) current state. In additional to values used with \u003ccode\u003e\u003ca\u003esetOutputState\u003c/a\u003e\u003c/code\u003e also \u003ccode\u003e\u003ca\u003eTachoCount\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBlockTachoCount\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003eRotationCount\u003c/a\u003e\u003c/code\u003e values are available which tell you current position of a motor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "OutputPort -\u003e NXT OutputState",
        "fct-source": "src/Robotics-NXT-Protocol.html#getOutputState",
        "fct-type": "function",
        "title": "getOutputState"
      },
      "index": {
        "description": "Gets output port motor current state In additional to values used with setOutputState also TachoCount BlockTachoCount and RotationCount values are available which tell you current position of motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getOutputState",
        "normalized": "OutputPort-\u003eNXT OutputState",
        "package": "NXT",
        "partial": "Output State",
        "signature": "OutputPort-\u003eNXT OutputState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getSleepTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eGets current sleep timeout setting (in seconds) after which the NXT brick automatically powers off if\nnot prevented with a keep alive packet (use \u003ccode\u003e\u003ca\u003ekeepAlive\u003c/a\u003e\u003c/code\u003e to send one). This setting is cached.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT Duration",
        "fct-source": "src/Robotics-NXT-Protocol.html#getSleepTimeout",
        "fct-type": "function",
        "title": "getSleepTimeout"
      },
      "index": {
        "description": "Gets current sleep timeout setting in seconds after which the NXT brick automatically powers off if not prevented with keep alive packet use keepAlive to send one This setting is cached",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getSleepTimeout",
        "normalized": "",
        "package": "NXT",
        "partial": "Sleep Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getVersion",
      "description": {
        "fct-descr": "\u003cp\u003eGets firmware and protocol versions of the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT Version",
        "fct-source": "src/Robotics-NXT-Protocol.html#getVersion",
        "fct-type": "function",
        "title": "getVersion"
      },
      "index": {
        "description": "Gets firmware and protocol versions of the NXT brick",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "getVersion",
        "normalized": "",
        "package": "NXT",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:initialize",
      "description": {
        "fct-descr": "\u003cp\u003eOpens and intializes a Bluetooth serial device communication.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FilePath -\u003e IO NXTInternals",
        "fct-source": "src/Robotics-NXT-Protocol.html#initialize",
        "fct-type": "function",
        "title": "initialize"
      },
      "index": {
        "description": "Opens and intializes Bluetooth serial device communication",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "initialize",
        "normalized": "FilePath-\u003eIO NXTInternals",
        "package": "NXT",
        "partial": "",
        "signature": "FilePath-\u003eIO NXTInternals"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:isBatteryRechargeable",
      "description": {
        "fct-descr": "\u003cp\u003eIs battery used in the NXT brick rechargeable?\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT Bool",
        "fct-source": "src/Robotics-NXT-Protocol.html#isBatteryRechargeable",
        "fct-type": "function",
        "title": "isBatteryRechargeable"
      },
      "index": {
        "description": "Is battery used in the NXT brick rechargeable",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "isBatteryRechargeable",
        "normalized": "",
        "package": "NXT",
        "partial": "Battery Rechargeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:keepAlive",
      "description": {
        "fct-descr": "\u003cp\u003eSends a keep alive (turned on) packet. It prevents the NXT brick from automatically powering off. Other commands do not prevent that\nfrom hapenning so it is useful to send this packet from time to time if you want to prevent powering off.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#keepAlive",
        "fct-type": "function",
        "title": "keepAlive"
      },
      "index": {
        "description": "Sends keep alive turned on packet It prevents the NXT brick from automatically powering off Other commands do not prevent that from hapenning so it is useful to send this packet from time to time if you want to prevent powering off",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "keepAlive",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Alive",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:keepAliveConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ekeepAlive\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#keepAliveConfirm",
        "fct-type": "function",
        "title": "keepAliveConfirm"
      },
      "index": {
        "description": "Same as keepAlive but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "keepAliveConfirm",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Alive Confirm",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:listModules",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to get information about all modules matching a given module name (which can be a wild card).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleName -\u003e NXT [ModuleInfo]",
        "fct-source": "src/Robotics-NXT-Protocol.html#listModules",
        "fct-type": "function",
        "title": "listModules"
      },
      "index": {
        "description": "Helper function to get information about all modules matching given module name which can be wild card",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "listModules",
        "normalized": "ModuleName-\u003eNXT[ModuleInfo]",
        "package": "NXT",
        "partial": "Modules",
        "signature": "ModuleName-\u003eNXT[ModuleInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedGetStatus",
      "description": {
        "fct-descr": "\u003cp\u003eGets number of bytes available to read.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT Int",
        "fct-source": "src/Robotics-NXT-Protocol.html#lowspeedGetStatus",
        "fct-type": "function",
        "title": "lowspeedGetStatus"
      },
      "index": {
        "description": "Gets number of bytes available to read",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "lowspeedGetStatus",
        "normalized": "InputPort-\u003eNXT Int",
        "package": "NXT",
        "partial": "Get Status",
        "signature": "InputPort-\u003eNXT Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedRead",
      "description": {
        "fct-descr": "\u003cp\u003eReads data. The protocol does not support variable-length return packages so the response always contains 16 data bytes with invalid\ndata padded with zeros.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT RxData",
        "fct-source": "src/Robotics-NXT-Protocol.html#lowspeedRead",
        "fct-type": "function",
        "title": "lowspeedRead"
      },
      "index": {
        "description": "Reads data The protocol does not support variable-length return packages so the response always contains data bytes with invalid data padded with zeros",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "lowspeedRead",
        "normalized": "InputPort-\u003eNXT RxData",
        "package": "NXT",
        "partial": "Read",
        "signature": "InputPort-\u003eNXT RxData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedWrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrites data. At most 16 bytes can be written at a time.\n\u003c/p\u003e\u003cp\u003eReply data length must be specified in the write command since reading from the device is done on a master-slave basis.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e RxDataLength -\u003e TxData -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#lowspeedWrite",
        "fct-type": "function",
        "title": "lowspeedWrite"
      },
      "index": {
        "description": "Writes data At most bytes can be written at time Reply data length must be specified in the write command since reading from the device is done on master-slave basis",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "lowspeedWrite",
        "normalized": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()",
        "package": "NXT",
        "partial": "Write",
        "signature": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedWriteConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elowspeedWrite\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an\nerror it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e RxDataLength -\u003e TxData -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#lowspeedWriteConfirm",
        "fct-type": "function",
        "title": "lowspeedWriteConfirm"
      },
      "index": {
        "description": "Same as lowspeedWrite but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "lowspeedWriteConfirm",
        "normalized": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()",
        "package": "NXT",
        "partial": "Write Confirm",
        "signature": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:maybeMessageRead",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emessageWrite\u003c/a\u003e\u003c/code\u003e but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no message in a given remote inbox queue.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox -\u003e RemoveMessage -\u003e NXT (Maybe String)",
        "fct-source": "src/Robotics-NXT-Protocol.html#maybeMessageRead",
        "fct-type": "function",
        "title": "maybeMessageRead"
      },
      "index": {
        "description": "Same as messageWrite but returns Nothing if there is no message in given remote inbox queue",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "maybeMessageRead",
        "normalized": "RemoteInbox-\u003eRemoveMessage-\u003eNXT(Maybe String)",
        "package": "NXT",
        "partial": "Message Read",
        "signature": "RemoteInbox-\u003eRemoveMessage-\u003eNXT(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:messageRead",
      "description": {
        "fct-descr": "\u003cp\u003eReads a message from the currently running program from a given remote inbox queue. A queue is limited to 5 messages.\nIt throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e if there is no message in a remote inbox queue.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "RemoteInbox -\u003e RemoveMessage -\u003e NXT String",
        "fct-source": "src/Robotics-NXT-Protocol.html#messageRead",
        "fct-type": "function",
        "title": "messageRead"
      },
      "index": {
        "description": "Reads message from the currently running program from given remote inbox queue queue is limited to messages It throws NXTException if there is no message in remote inbox queue",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "messageRead",
        "normalized": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String",
        "package": "NXT",
        "partial": "Read",
        "signature": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:messageWrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a message to the given inbox queue of the running remote program. A message length is limited to 58 characters/bytes. A queue\nis limited to 5 messages.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox -\u003e String -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#messageWrite",
        "fct-type": "function",
        "title": "messageWrite"
      },
      "index": {
        "description": "Writes message to the given inbox queue of the running remote program message length is limited to characters bytes queue is limited to messages",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "messageWrite",
        "normalized": "Inbox-\u003eString-\u003eNXT()",
        "package": "NXT",
        "partial": "Write",
        "signature": "Inbox-\u003eString-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:messageWriteConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emessageWrite\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Inbox -\u003e String -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#messageWriteConfirm",
        "fct-type": "function",
        "title": "messageWriteConfirm"
      },
      "index": {
        "description": "Same as messageWrite but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "messageWriteConfirm",
        "normalized": "Inbox-\u003eString-\u003eNXT()",
        "package": "NXT",
        "partial": "Write Confirm",
        "signature": "Inbox-\u003eString-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:openWrite",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a given file for writing as a linked list of flash sectors.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e FileSize -\u003e NXT FileHandle",
        "fct-source": "src/Robotics-NXT-Protocol.html#openWrite",
        "fct-type": "function",
        "title": "openWrite"
      },
      "index": {
        "description": "Opens given file for writing as linked list of flash sectors",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "openWrite",
        "normalized": "FileName-\u003eFileSize-\u003eNXT FileHandle",
        "package": "NXT",
        "partial": "Write",
        "signature": "FileName-\u003eFileSize-\u003eNXT FileHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:openWriteLinear",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a given file for writing as a linear contiguous block of flash memory (required for user programs and certain data files).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e FileSize -\u003e NXT FileHandle",
        "fct-source": "src/Robotics-NXT-Protocol.html#openWriteLinear",
        "fct-type": "function",
        "title": "openWriteLinear"
      },
      "index": {
        "description": "Opens given file for writing as linear contiguous block of flash memory required for user programs and certain data files",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "openWriteLinear",
        "normalized": "FileName-\u003eFileSize-\u003eNXT FileHandle",
        "package": "NXT",
        "partial": "Write Linear",
        "signature": "FileName-\u003eFileSize-\u003eNXT FileHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:playSoundFile",
      "description": {
        "fct-descr": "\u003cp\u003ePlays a given sound file.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "LoopPlayback -\u003e FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#playSoundFile",
        "fct-type": "function",
        "title": "playSoundFile"
      },
      "index": {
        "description": "Plays given sound file",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "playSoundFile",
        "normalized": "LoopPlayback-\u003eFileName-\u003eNXT()",
        "package": "NXT",
        "partial": "Sound File",
        "signature": "LoopPlayback-\u003eFileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:playSoundFileConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eplaySoundFile\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "LoopPlayback -\u003e FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#playSoundFileConfirm",
        "fct-type": "function",
        "title": "playSoundFileConfirm"
      },
      "index": {
        "description": "Same as playSoundFile but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "playSoundFileConfirm",
        "normalized": "LoopPlayback-\u003eFileName-\u003eNXT()",
        "package": "NXT",
        "partial": "Sound File Confirm",
        "signature": "LoopPlayback-\u003eFileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:playTone",
      "description": {
        "fct-descr": "\u003cp\u003ePlays a tone with a given frequency (in hertz) for a given duration (in seconds).\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "Frequency -\u003e Duration -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#playTone",
        "fct-type": "function",
        "title": "playTone"
      },
      "index": {
        "description": "Plays tone with given frequency in hertz for given duration in seconds",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "playTone",
        "normalized": "Frequency-\u003eDuration-\u003eNXT()",
        "package": "NXT",
        "partial": "Tone",
        "signature": "Frequency-\u003eDuration-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:readIOMap",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from an IO map of a given module. At most 119 bytes can be read at a time.\n\u003c/p\u003e\u003cp\u003eYou probably have to know what different values at different positions mean and control. The best way is to check NXT firmware\nsource code.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleID -\u003e IOMapOffset -\u003e IOMapLength -\u003e NXT IOMapData",
        "fct-source": "src/Robotics-NXT-Protocol.html#readIOMap",
        "fct-type": "function",
        "title": "readIOMap"
      },
      "index": {
        "description": "Reads data from an IO map of given module At most bytes can be read at time You probably have to know what different values at different positions mean and control The best way is to check NXT firmware source code",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "readIOMap",
        "normalized": "ModuleID-\u003eIOMapOffset-\u003eIOMapLength-\u003eNXT IOMapData",
        "package": "NXT",
        "partial": "IOMap",
        "signature": "ModuleID-\u003eIOMapOffset-\u003eIOMapLength-\u003eNXT IOMapData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:requestFirstModule",
      "description": {
        "fct-descr": "\u003cp\u003eRequests information about the first module matching a given module name (which can be a wild card). Returned module handle\ncan be used for followup requests and has to be closed when not needed anymore.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleName -\u003e NXT (ModuleHandle, Maybe ModuleInfo)",
        "fct-source": "src/Robotics-NXT-Protocol.html#requestFirstModule",
        "fct-type": "function",
        "title": "requestFirstModule"
      },
      "index": {
        "description": "Requests information about the first module matching given module name which can be wild card Returned module handle can be used for followup requests and has to be closed when not needed anymore",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "requestFirstModule",
        "normalized": "ModuleName-\u003eNXT(ModuleHandle,Maybe ModuleInfo)",
        "package": "NXT",
        "partial": "First Module",
        "signature": "ModuleName-\u003eNXT(ModuleHandle,Maybe ModuleInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:requestNextModule",
      "description": {
        "fct-descr": "\u003cp\u003eRequests information about the next module matching previously requested module name (which can be a wild card). Returned module\nhandle can be used for followup requests and has to be closed when not needed anymore.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleHandle -\u003e NXT (ModuleHandle, Maybe ModuleInfo)",
        "fct-source": "src/Robotics-NXT-Protocol.html#requestNextModule",
        "fct-type": "function",
        "title": "requestNextModule"
      },
      "index": {
        "description": "Requests information about the next module matching previously requested module name which can be wild card Returned module handle can be used for followup requests and has to be closed when not needed anymore",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "requestNextModule",
        "normalized": "ModuleHandle-\u003eNXT(ModuleHandle,Maybe ModuleInfo)",
        "package": "NXT",
        "partial": "Next Module",
        "signature": "ModuleHandle-\u003eNXT(ModuleHandle,Maybe ModuleInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:resetInputScaledValue",
      "description": {
        "fct-descr": "\u003cp\u003eResets input port (sensor) scaled value.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#resetInputScaledValue",
        "fct-type": "function",
        "title": "resetInputScaledValue"
      },
      "index": {
        "description": "Resets input port sensor scaled value",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "resetInputScaledValue",
        "normalized": "InputPort-\u003eNXT()",
        "package": "NXT",
        "partial": "Input Scaled Value",
        "signature": "InputPort-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:resetMotorPosition",
      "description": {
        "fct-descr": "\u003cp\u003eResets one of three position counters for a given output port.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "OutputPort -\u003e MotorReset -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#resetMotorPosition",
        "fct-type": "function",
        "title": "resetMotorPosition"
      },
      "index": {
        "description": "Resets one of three position counters for given output port",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "resetMotorPosition",
        "normalized": "OutputPort-\u003eMotorReset-\u003eNXT()",
        "package": "NXT",
        "partial": "Motor Position",
        "signature": "OutputPort-\u003eMotorReset-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:runNXT",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a computation in a context of a given \u003ccode\u003e\u003ca\u003eNXTInternals\u003c/a\u003e\u003c/code\u003e token, returning a value and a new token.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT a -\u003e NXTInternals -\u003e IO (a, NXTInternals)",
        "fct-source": "src/Robotics-NXT-Internals.html#runNXT",
        "fct-type": "function",
        "title": "runNXT"
      },
      "index": {
        "description": "Runs computation in context of given NXTInternals token returning value and new token",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "runNXT",
        "normalized": "NXT a-\u003eNXTInternals-\u003eIO(a,NXTInternals)",
        "package": "NXT",
        "partial": "NXT",
        "signature": "NXT a-\u003eNXTInternals-\u003eIO(a,NXTInternals)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setInputMode",
      "description": {
        "fct-descr": "\u003cp\u003eSets input port (sensor) type and mode.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e SensorType -\u003e SensorMode -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#setInputMode",
        "fct-type": "function",
        "title": "setInputMode"
      },
      "index": {
        "description": "Sets input port sensor type and mode",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "setInputMode",
        "normalized": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()",
        "package": "NXT",
        "partial": "Input Mode",
        "signature": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setInputModeConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetInputMode\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "InputPort -\u003e SensorType -\u003e SensorMode -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#setInputModeConfirm",
        "fct-type": "function",
        "title": "setInputModeConfirm"
      },
      "index": {
        "description": "Same as setInputMode but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "setInputModeConfirm",
        "normalized": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()",
        "package": "NXT",
        "partial": "Input Mode Confirm",
        "signature": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setOutputState",
      "description": {
        "fct-descr": "\u003cp\u003eSets output port (motor) state. This is the main function for controlling a motor.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "OutputPort -\u003e OutputPower -\u003e [OutputMode] -\u003e RegulationMode -\u003e TurnRatio -\u003e RunState -\u003e TachoLimit -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#setOutputState",
        "fct-type": "function",
        "title": "setOutputState"
      },
      "index": {
        "description": "Sets output port motor state This is the main function for controlling motor",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "setOutputState",
        "normalized": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()",
        "package": "NXT",
        "partial": "Output State",
        "signature": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setOutputStateConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetOutputState\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error\nit throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "OutputPort -\u003e OutputPower -\u003e [OutputMode] -\u003e RegulationMode -\u003e TurnRatio -\u003e RunState -\u003e TachoLimit -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#setOutputStateConfirm",
        "fct-type": "function",
        "title": "setOutputStateConfirm"
      },
      "index": {
        "description": "Same as setOutputState but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "setOutputStateConfirm",
        "normalized": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()",
        "package": "NXT",
        "partial": "Output State Confirm",
        "signature": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:shutdown",
      "description": {
        "fct-descr": "\u003cp\u003eShutdowns (powers off) the NXT brick. You have to manually turn it on again.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#shutdown",
        "fct-type": "function",
        "title": "shutdown"
      },
      "index": {
        "description": "Shutdowns powers off the NXT brick You have to manually turn it on again",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "shutdown",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:startProgram",
      "description": {
        "fct-descr": "\u003cp\u003eStarts a given program on the NXT brick.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#startProgram",
        "fct-type": "function",
        "title": "startProgram"
      },
      "index": {
        "description": "Starts given program on the NXT brick",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "startProgram",
        "normalized": "FileName-\u003eNXT()",
        "package": "NXT",
        "partial": "Program",
        "signature": "FileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:startProgramConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estartProgram\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted, but this does not assure\nthat the program has really started successfully (especially not that it is already running when the confirmation is received).\nUse \u003ccode\u003e\u003ca\u003eensureStartProgram\u003c/a\u003e\u003c/code\u003e for that. In a case of an error it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileName -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#startProgramConfirm",
        "fct-type": "function",
        "title": "startProgramConfirm"
      },
      "index": {
        "description": "Same as startProgram but also request confirmation Useful to assure the command was really accepted but this does not assure that the program has really started successfully especially not that it is already running when the confirmation is received Use ensureStartProgram for that In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "startProgramConfirm",
        "normalized": "FileName-\u003eNXT()",
        "package": "NXT",
        "partial": "Program Confirm",
        "signature": "FileName-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopEverything",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function which stops all NXT brick activities: stops motors and disables sensors.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#stopEverything",
        "fct-type": "function",
        "title": "stopEverything"
      },
      "index": {
        "description": "Helper function which stops all NXT brick activities stops motors and disables sensors",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "stopEverything",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Everything",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopProgram",
      "description": {
        "fct-descr": "\u003cp\u003eStops a currently running program.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#stopProgram",
        "fct-type": "function",
        "title": "stopProgram"
      },
      "index": {
        "description": "Stops currently running program",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "stopProgram",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Program",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopProgramConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estopProgram\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#stopProgramConfirm",
        "fct-type": "function",
        "title": "stopProgramConfirm"
      },
      "index": {
        "description": "Same as stopProgram but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "stopProgramConfirm",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Program Confirm",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopProgramExisting",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estopProgramConfirm\u003c/a\u003e\u003c/code\u003e but it also requires that the program was really running. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#stopProgramExisting",
        "fct-type": "function",
        "title": "stopProgramExisting"
      },
      "index": {
        "description": "Same as stopProgramConfirm but it also requires that the program was really running It throws NXTException otherwise",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "stopProgramExisting",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Program Existing",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopSoundPlayback",
      "description": {
        "fct-descr": "\u003cp\u003eStops current sound file playback.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#stopSoundPlayback",
        "fct-type": "function",
        "title": "stopSoundPlayback"
      },
      "index": {
        "description": "Stops current sound file playback",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "stopSoundPlayback",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Sound Playback",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopSoundPlaybackConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estopSoundPlayback\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an\nerror it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#stopSoundPlaybackConfirm",
        "fct-type": "function",
        "title": "stopSoundPlaybackConfirm"
      },
      "index": {
        "description": "Same as stopSoundPlayback but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "stopSoundPlaybackConfirm",
        "normalized": "NXT()",
        "package": "NXT",
        "partial": "Sound Playback Confirm",
        "signature": "NXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:terminate",
      "description": {
        "fct-descr": "\u003cp\u003eStops all NXT activities (by calling \u003ccode\u003e\u003ca\u003estopEverything\u003c/a\u003e\u003c/code\u003e) and closes the Bluetooth serial device communication. \u003ccode\u003e\u003ca\u003eNXTInternals\u003c/a\u003e\u003c/code\u003e token must not\nbe used after that anymore.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "NXTInternals -\u003e IO ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#terminate",
        "fct-type": "function",
        "title": "terminate"
      },
      "index": {
        "description": "Stops all NXT activities by calling stopEverything and closes the Bluetooth serial device communication NXTInternals token must not be used after that anymore",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "terminate",
        "normalized": "NXTInternals-\u003eIO()",
        "package": "NXT",
        "partial": "",
        "signature": "NXTInternals-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:withNXT",
      "description": {
        "fct-descr": "\u003cp\u003eFunction which initializes and terminates Bluetooth connection to the NXT brick (using \u003ccode\u003e\u003ca\u003einitialize\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e) and in-between\nruns given computation. It terminates Bluetooth connection on an exception, too, rethrowing it afterwards.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FilePath -\u003e NXT a -\u003e IO a",
        "fct-source": "src/Robotics-NXT-Protocol.html#withNXT",
        "fct-type": "function",
        "title": "withNXT"
      },
      "index": {
        "description": "Function which initializes and terminates Bluetooth connection to the NXT brick using initialize and terminate and in-between runs given computation It terminates Bluetooth connection on an exception too rethrowing it afterwards",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "withNXT",
        "normalized": "FilePath-\u003eNXT a-\u003eIO a",
        "package": "NXT",
        "partial": "NXT",
        "signature": "FilePath-\u003eNXT a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites data to a file. At most 61 bytes can be written at a time.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileHandle -\u003e FileData -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes data to file At most bytes can be written at time",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "write",
        "normalized": "FileHandle-\u003eFileData-\u003eNXT()",
        "package": "NXT",
        "partial": "",
        "signature": "FileHandle-\u003eFileData-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:writeConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "FileHandle -\u003e FileData -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#writeConfirm",
        "fct-type": "function",
        "title": "writeConfirm"
      },
      "index": {
        "description": "Same as write but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "writeConfirm",
        "normalized": "FileHandle-\u003eFileData-\u003eNXT()",
        "package": "NXT",
        "partial": "Confirm",
        "signature": "FileHandle-\u003eFileData-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:writeIOMap",
      "description": {
        "fct-descr": "\u003cp\u003eWrites data to an IO map of a given module. At most 54 bytes can be written at a time.\n\u003c/p\u003e\u003cp\u003eYou probably have to know what different values at different positions mean and control. The best way is to check NXT firmware\nsource code.\n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleID -\u003e IOMapOffset -\u003e IOMapData -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#writeIOMap",
        "fct-type": "function",
        "title": "writeIOMap"
      },
      "index": {
        "description": "Writes data to an IO map of given module At most bytes can be written at time You probably have to know what different values at different positions mean and control The best way is to check NXT firmware source code",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "writeIOMap",
        "normalized": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()",
        "package": "NXT",
        "partial": "IOMap",
        "signature": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:writeIOMapConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewriteIOMap\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error\nit throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
        "fct-module": "Robotics.NXT",
        "fct-package": "NXT",
        "fct-signature": "ModuleID -\u003e IOMapOffset -\u003e IOMapData -\u003e NXT ()",
        "fct-source": "src/Robotics-NXT-Protocol.html#writeIOMapConfirm",
        "fct-type": "function",
        "title": "writeIOMapConfirm"
      },
      "index": {
        "description": "Same as writeIOMap but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
        "hierarchy": "Robotics NXT",
        "module": "Robotics.NXT",
        "name": "writeIOMapConfirm",
        "normalized": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()",
        "package": "NXT",
        "partial": "IOMap Confirm",
        "signature": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()"
      }
    }
  }
]